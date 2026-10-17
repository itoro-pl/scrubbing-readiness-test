/* ==========================================================
   ITORO — Test gotowości prefiksów do scrubbing center
   Wszystko dzieje się w przeglądarce: zapytania idą wprost do
   publicznych API (RIPEstat, baza RIPE, IRR Explorer NLNOG,
   PeeringDB) — każde z nich zwraca nagłówki CORS. Bez serwera,
   bez zewnętrznych bibliotek.
   ========================================================== */
(function () {
'use strict';

/* ── JĘZYK ─────────────────────────────────────────────── */
// PL i EN są wbudowane (napisy.js, rir.js); pozostałe języki ładuje się z jezyki/<kod>.js.
const JEZYKI = { pl: 'Polski', en: 'English', de: 'Deutsch', fr: 'Français', es: 'Español', pt: 'Português', it: 'Italiano', nl: 'Nederlands', cs: 'Čeština', ro: 'Română' };
const parametry = new URLSearchParams(location.search);
let jezyk = (() => {
  const z = (parametry.get('jezyk') || '').toLowerCase();
  if (JEZYKI[z]) return z;
  const p = (navigator.languages || [navigator.language || 'en']).map(x => x.toLowerCase().slice(0, 2));
  return p.find(x => JEZYKI[x]) || 'en';
})();
let N = null;
function wczytajJezyk() {
  return new Promise(ok => {
    if (window.NAPISY[jezyk] && window.RIR[jezyk]) return ok();
    const s = document.createElement('script');
    s.src = `jezyki/${jezyk}.js`;
    s.onload = () => ok();
    s.onerror = () => { jezyk = 'en'; ok(); };
    document.head.appendChild(s);
  }).then(() => {
    if (!window.NAPISY[jezyk] || !window.RIR[jezyk]) jezyk = 'en';
    N = window.NAPISY[jezyk];
    N.rir = window.RIR[jezyk];
  });
}

/* ── POMOCNICZE ────────────────────────────────────────── */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ZRODLO = 'itoro-scrubbing';
// Wersja lokalna (serwer.py, Docker): strona z localhost — wtedy pytamy lokalny serwer o bgpq4.
const lokalnie = ['localhost', '127.0.0.1', '[::1]', '::1'].includes(location.hostname);
const RIR_AUT = ['RIPE', 'ARIN', 'APNIC', 'AFRINIC', 'LACNIC'];
const LIMIT_PREF = 150;      // szczegółowe zapytania o pojedyncze prefiksy
const LIMIT_ENUM = 4096;     // maks. liczba bloków /24 (/48) wyliczanych dla jednego prefiksu
const LIMIT_ROA_A = 256;     // do tylu bloków proponujemy osobne ROA (wariant RFC 9319)

async function pobierz(url, { opcjonalne = false, czas = 30000, rdap = false } = {}) {
  // RDAP: LACNIC odrzuca samo „application/json” (HTTP 406), dlatego najpierw typ RDAP.
  const accept = rdap ? 'application/rdap+json, application/json;q=0.9' : 'application/json';
  for (let proba = 0; proba < 3; proba++) {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), czas);
    try {
      const r = await fetch(url, { signal: ctl.signal, headers: { Accept: accept } });
      clearTimeout(t);
      if (r.status === 404) return null;
      if (r.status === 429 || r.status >= 500) throw new Error('HTTP ' + r.status);
      if (!r.ok) { if (opcjonalne) return undefined; throw new Error('HTTP ' + r.status); }
      return await r.json();
    } catch (e) {
      clearTimeout(t);
      if (proba === 2) { if (opcjonalne) return undefined; throw e; }
      await new Promise(res => setTimeout(res, 900 * (proba + 1)));
    }
  }
}

/* ── RDAP: adres serwera właściwego RIR według bootstrapu IANA (RFC 9224) ── */
let bootstrap = null;
async function wczytajBootstrap() {
  if (bootstrap) return bootstrap;
  const [v4, v6, as] = await Promise.all(['ipv4', 'ipv6', 'asn'].map(k => pobierz(`https://data.iana.org/rdap/${k}.json`, { opcjonalne: true })));
  bootstrap = { v4: (v4 && v4.services) || [], v6: (v6 && v6.services) || [], as: (as && as.services) || [] };
  return bootstrap;
}
function rdapAdres(rodzaj, wartosc) {
  const b = bootstrap || { v4: [], v6: [], as: [] };
  let baza = null;
  if (rodzaj === 'autnum') {
    for (const [zakresy, adresy] of b.as) for (const z of zakresy) {
      const [od, doo] = z.split('-').map(Number);
      if (wartosc >= od && wartosc <= (doo || od)) baza = adresy[0];
    }
  } else {
    const P = prefiks(wartosc);
    let najdl = -1;
    for (const [zakresy, adresy] of (P.v6 ? b.v6 : b.v4)) for (const z of zakresy) {
      const Q = prefiks(z);
      if (zawiera(Q, P) && Q.dl > najdl) { najdl = Q.dl; baza = adresy.find(x => x.startsWith('https')) || adresy[0]; }
    }
  }
  if (!baza) return `https://rdap.org/${rodzaj}/${wartosc}`;
  return baza.replace(/\/?$/, '/') + `${rodzaj}/${wartosc}`;
}
const stat = (call, res, extra = '') =>
  `https://stat.ripe.net/data/${call}/data.json?resource=${encodeURIComponent(res)}${extra}&sourceapp=${ZRODLO}`;

async function pula(elementy, ile, fn) {
  const wyniki = new Array(elementy.length);
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(ile, elementy.length) }, async () => {
    while (i < elementy.length) { const k = i++; wyniki[k] = await fn(elementy[k], k); }
  }));
  return wyniki;
}

/* ── ADRESY IP (BigInt) ────────────────────────────────── */
function ip4(s) { return s.split('.').reduce((a, o) => (a << 8n) + BigInt(+o), 0n); }
function ip6(s) {
  const [g, o] = s.split('::');
  const h = g ? g.split(':') : [];
  const t = o === undefined ? null : (o ? o.split(':') : []);
  const cz = t === null ? h : [...h, ...Array(8 - h.length - t.length).fill('0'), ...t];
  return cz.reduce((a, x) => (a << 16n) + BigInt(parseInt(x || '0', 16)), 0n);
}
function prefiks(s) {
  const [a, l] = String(s).trim().split('/');
  const v6 = a.includes(':');
  const bity = v6 ? 128 : 32;
  const dl = l === undefined ? bity : +l;
  const start = v6 ? ip6(a) : ip4(a);
  const rozm = 1n << BigInt(bity - dl);
  return { s: `${a}/${dl}`, v6, bity, dl, start, koniec: start + rozm - 1n, rozm };
}
function fmt4(n) { return [24n, 16n, 8n, 0n].map(k => Number((n >> k) & 255n)).join('.'); }
function fmt6(n) {
  const g = [];
  for (let k = 112n; k >= 0n; k -= 16n) g.push(Number((n >> k) & 0xffffn));
  let najS = -1, najD = 0;
  for (let i = 0; i < 8;) {
    if (g[i] !== 0) { i++; continue; }
    let j = i; while (j < 8 && g[j] === 0) j++;
    if (j - i > najD && j - i > 1) { najS = i; najD = j - i; }
    i = j;
  }
  const h = g.map(x => x.toString(16));
  if (najS < 0) return h.join(':');
  return (h.slice(0, najS).join(':') + '::' + h.slice(najS + najD).join(':'));
}
const fmt = (n, v6) => v6 ? fmt6(n) : fmt4(n);
const zawiera = (a, b) => a.v6 === b.v6 && a.start <= b.start && a.koniec >= b.koniec;
const nachodzi = (a, b) => a.v6 === b.v6 && a.start <= b.koniec && b.start <= a.koniec;

function scal(przedzialy) {
  const p = przedzialy.slice().sort((x, y) => (x[0] < y[0] ? -1 : x[0] > y[0] ? 1 : 0));
  const w = [];
  for (const [a, b] of p) {
    if (w.length && a <= w[w.length - 1][1] + 1n) { if (b > w[w.length - 1][1]) w[w.length - 1][1] = b; }
    else w.push([a, b]);
  }
  return w;
}

/* Jaka część prefiksu P, pociętego na bloki /D, będzie RPKI-valid dla origin = asn.
   Blok /D jest valid, gdy pokrywa go ROA z tym AS, długością ≤ D i maxLength ≥ D. */
function pokrycie(P, D, roas, asn) {
  const jedn = 1n << BigInt(D - P.dl);
  const prz = [];
  for (const r of roas) {
    if (r.asn !== asn || r.p.v6 !== P.v6 || r.p.dl > D || r.max < D || !nachodzi(r.p, P)) continue;
    prz.push([r.p.start > P.start ? r.p.start : P.start, r.p.koniec < P.koniec ? r.p.koniec : P.koniec]);
  }
  const s = scal(prz);
  const blok = 1n << BigInt(P.bity - D);
  let pokryte = 0n;
  for (const [a, b] of s) pokryte += (b - a + 1n) / blok;
  return { razem: jedn, pokryte, przedzialy: s, blok };
}
function niepokryte(P, D, pok) {
  if (pok.razem > BigInt(LIMIT_ENUM)) return null;
  const w = [];
  for (let a = P.start; a <= P.koniec; a += pok.blok) {
    if (!pok.przedzialy.some(([x, y]) => a >= x && a <= y)) w.push(`${fmt(a, P.v6)}/${D}`);
  }
  return w;
}

/* ── RPKI: stan ogłoszenia (RFC 6811) ─────────────────── */
function stanRpki(P, asn, roas) {
  const kryjace = roas.filter(r => zawiera(r.p, P));
  if (!kryjace.length) return 'notfound';
  if (kryjace.some(r => r.asn === asn && r.max >= P.dl)) return 'valid';
  return kryjace.some(r => r.asn === asn) ? 'invalidLen' : 'invalidAs';
}

/* ── RPSL ──────────────────────────────────────────────── */
function polaRpsl(tekst) {
  const w = {};
  String(tekst || '').split('\n').forEach(l => {
    const m = l.match(/^([a-z0-9-]+):\s*(.*)$/i);
    if (m) (w[m[1].toLowerCase()] = w[m[1].toLowerCase()] || []).push(m[2].replace(/#.*$/, '').trim());
  });
  return w;
}
function atrybuty(obj) {
  const w = {};
  ((obj && obj.attributes && obj.attributes.attribute) || []).forEach(a => {
    (w[a.name] = w[a.name] || []).push(String(a.value).replace(/#.*$/, '').trim());
  });
  return w;
}
const pierwszyObiekt = j => j && j.objects && j.objects.object && j.objects.object[0];

/* ── RDAP ──────────────────────────────────────────────── */
function rirZNazwy(s) {
  s = String(s || '').toUpperCase();
  if (/RIPE/.test(s)) return 'RIPE';
  if (/AFRINIC/.test(s)) return 'AFRINIC';
  if (/ARIN/.test(s)) return 'ARIN';
  if (/APNIC/.test(s)) return 'APNIC';
  if (/LACNIC|REGISTRO\.BR|NIC\.BR/.test(s)) return 'LACNIC';
  return '';
}
function rirZRdap(j) {
  if (!j) return '';
  const linki = (j.links || []).map(l => l.href || '').join(' ');
  return rirZNazwy(j.port43) || rirZNazwy(linki) || rirZNazwy(j.handle) || '';
}
function rdapEncje(j, wynik = []) {
  ((j && j.entities) || []).forEach(e => { wynik.push(e); rdapEncje(e, wynik); });
  return wynik;
}
// Organizacja-właściciel: encje z rolą registrant, bez maintainerów (RIPE i AFRINIC dopisują je jako registrant).
function rdapOrg(j) {
  return [...new Set(rdapEncje(j).filter(e => (e.roles || []).includes('registrant') && e.handle && !/-MNT$|^MNT-|RIPE-NCC|ORG-NCC1/i.test(e.handle)).map(e => e.handle.toUpperCase()))];
}
function rdapAbuse(j) {
  const w = [];
  rdapEncje(j).filter(e => (e.roles || []).includes('abuse')).forEach(e => {
    const v = (e.vcardArray && e.vcardArray[1]) || [];
    v.filter(f => f[0] === 'email').forEach(f => w.push(f[3]));
  });
  return [...new Set(w)];
}


/* ── ANALIZA ───────────────────────────────────────────── */
async function analizuj(asn, opAsn, tryb, postep) {
  const bledy = [];
  const opc = async (etykieta, url) => {
    postep(etykieta);
    const r = await pobierz(url, { opcjonalne: true });
    if (r === undefined) bledy.push(etykieta);
    return r;
  };

  postep(N.krok.as);
  await wczytajBootstrap();
  const [przeglad, ogl, roaAs, irrx, abuse, sasiedzi, pdb] = await Promise.all([
    pobierz(stat('as-overview', 'AS' + asn)),
    pobierz(stat('announced-prefixes', 'AS' + asn)),
    opc(N.krok.roa, stat('rpki-roas', 'AS' + asn)),
    opc(N.krok.irr, `https://irrexplorer.nlnog.net/api/prefixes/asn/AS${asn}`),
    (async () => { postep(N.krok.abuse); const r = await pobierz(rdapAdres('autnum', asn), { opcjonalne: true, rdap: true }); if (r === undefined) bledy.push(N.krok.abuse); return r; })(),
    opc(N.krok.sasiedzi, stat('asn-neighbours', 'AS' + asn)),
    opc(N.krok.pdb, `https://www.peeringdb.com/api/net?asn=${asn}`)
  ]);

  const W = { asn, opAsn, tryb, data: new Date().toISOString(), jezyk, rirs: new Set(), testyAs: [], prefiksy: [], obiekty: { roa: [], route: [] }, poprawki: [], bledy };
  const dodajAs = (id, st, tekst) => W.testyAs.push({ id, st, tekst });

  const pd = przeglad && przeglad.data;
  const rdapAs = abuse;  // RDAP obiektu AS (właściciel, abuse) — działa dla wszystkich RIR
  W.nazwa = pd && pd.holder || '';
  W.rir = rirZRdap(rdapAs) || (pd && pd.block && /RIPE/i.test(pd.block.desc || '') ? 'RIPE' : '');
  W.region = W.rir;
  if (!pd || !pd.holder) { dodajAs('asIstnieje', 'blok', N.t.asIstnieje.blok); return podsumuj(W); }
  dodajAs('asIstnieje', 'ok', N.t.asIstnieje.ok(esc(pd.holder) + (W.rir ? ` — ${N.rir[W.rir].nazwa}` : '')));

  const lista = ((ogl && ogl.data && ogl.data.prefixes) || []).map(x => x.prefix);
  const p4 = lista.filter(x => !x.includes(':')).length, p6 = lista.length - p4;
  if (!lista.length) dodajAs('ogloszenia', 'blok', N.t.ogloszenia.blok);
  else dodajAs('ogloszenia', 'ok', N.t.ogloszenia.ok(p4, p6));

  // ROA całego AS + ASPA
  const roaMoje = ((roaAs && roaAs.data && roaAs.data.roas) || []).map(r => ({ asn: +r.asn, p: prefiks(r.prefix), max: +r.maxLength }));
  const aspa = ((roaAs && roaAs.data && roaAs.data.aspas) || []).find(a => +String(a.customerASID || a.customer || a.customer_asid || '').replace(/^AS/i, '') === asn) || ((roaAs && roaAs.data && roaAs.data.aspas) || [])[0];

  // IRR Explorer: obiekty route według prefiksu
  const irrWpisy = irrx ? [...(irrx.directOrigin || []), ...(irrx.overlaps || [])] : [];
  const irrMapa = new Map();
  irrWpisy.forEach(e => { if (!irrMapa.has(e.prefix)) irrMapa.set(e.prefix, e); });

  // abuse — z RDAP (rola „abuse”), a gdy jej brak, z RIPEstat
  let ab = rdapAbuse(rdapAs);
  if (!ab.length) {
    const j = await pobierz(stat('abuse-contact-finder', 'AS' + asn), { opcjonalne: true });
    ab = (j && j.data && j.data.abuse_contacts) || [];
  }
  if (ab.length) dodajAs('abuse', 'ok', N.t.abuse.ok(esc(ab.join(', '))));
  else if (rdapAs) dodajAs('abuse', 'popr', N.t.abuse.popr);

  // właściciel AS (do porównania z właścicielem przestrzeni adresowej)
  const orgAs = rdapOrg(rdapAs);

  // aut-num: w regionie RIPE NCC z bazy RIPE (linie export), gdzie indziej RDAP potwierdza istnienie
  let mntAs = [], zbiory = [];
  if (W.rir === 'RIPE') {
    const j = await opc(N.krok.autnum, `https://rest.db.ripe.net/ripe/aut-num/AS${asn}.json?unfiltered`);
    const autnum = j ? atrybuty(pierwszyObiekt(j)) : null;
    if (!autnum) dodajAs('autnum', 'popr', N.t.autnum.popr);
    else {
      dodajAs('autnum', 'ok', N.t.autnum.ok);
      mntAs = autnum['mnt-by'] || [];
      const eksp = [...(autnum.export || []), ...(autnum['mp-export'] || [])].join('\n');
      const zb = new Set();
      eksp.replace(/announce\s+([^\s;]+)/gi, (_, s) => { if (/(^|:)AS-/i.test(s)) zb.add(s.toUpperCase()); return _; });
      zbiory = [...zb];
      if (zbiory.length) dodajAs('eksport', 'ok', N.t.eksport.ok(esc(zbiory.join(', '))));
      else dodajAs('eksport', 'zal', N.t.eksport.zal);
    }
  } else if (rdapAs) {
    dodajAs('autnum', 'ok', N.t.autnum.okRir(W.rir ? N.rir[W.rir].nazwa : 'RIR'));
  }

  // PeeringDB
  const siec = pdb && pdb.data && pdb.data[0];
  const zPdb = siec && siec.irr_as_set ? siec.irr_as_set.toUpperCase().split(/[\s,]+/).filter(Boolean) : [];
  if (zPdb.length) {
    dodajAs('pdb', 'ok', N.t.pdb.ok(esc(siec.irr_as_set)));
    const bez = zPdb.map(x => x.replace(/^[A-Z0-9-]+::/, ''));
    if (zbiory.length && !zbiory.some(z => bez.includes(z))) dodajAs('pdbRoz', 'zal', N.t.pdb.roz(esc(siec.irr_as_set), esc(zbiory.join(', '))));
  } else if (pdb) dodajAs('pdb', 'zal', N.t.pdb.zal);

  // AS-SET — rozwinięty w IRR Explorer (wszystkie rejestry), niezależnie od RIR
  const nazwy = new Map();
  [...zbiory, ...zPdb].forEach(pelna => {
    const m = pelna.match(/^([A-Z0-9-]+)::(.+)$/);
    const nazwa = m ? m[2] : pelna;
    if (!/(^|:)AS-/.test(nazwa)) return;   // route-set (RS-…) to nie AS-SET
    if (!nazwy.has(nazwa) || m) nazwy.set(nazwa, m ? m[1] : (nazwy.get(nazwa) || null));
  });
  const rozwiniecia = new Map();
  for (const [nazwa, zrodlo] of nazwy) {
    postep(N.krok.autnum);
    const ex = await pobierz(`https://irrexplorer.nlnog.net/api/sets/expand/${encodeURIComponent(nazwa)}`, { opcjonalne: true });
    if (ex === undefined) { bledy.push(N.krok.autnum); continue; }
    if (ex && ex.length) rozwiniecia.set(nazwa, ex);
    const korzen = (ex || []).filter(x => x.depth === 1 && (!zrodlo || x.source === zrodlo));
    if (!korzen.length) { dodajAs('asset', 'popr', N.t.asset.brak(esc(nazwa))); continue; }
    const zr = [...new Set(korzen.map(x => x.source))];
    const czl = new Set((ex || []).flatMap(x => (x.members || []).map(y => String(y).toUpperCase())));
    if (czl.has('AS' + asn)) dodajAs('asset', 'ok', N.t.asset.ok(esc(nazwa), esc(zr.join(', '))));
    else dodajAs('asset', 'popr', N.t.asset.popr(esc(nazwa)));
    if (!zr.some(x => RIR_AUT.includes(x))) dodajAs('assetZrodlo', 'popr', N.t.asset.nieaut(esc(nazwa), esc(zr.join(', '))));
    if (nazwa.includes(':')) dodajAs('assetHier', 'ok', N.t.assetHier.ok(esc(nazwa)));
    else dodajAs('assetHier', 'zal', N.t.assetHier.zal(esc(nazwa)));
  }
  if (!nazwy.size && lista.length) dodajAs('assetBrak', 'zal', N.t.asset.zadnego);

  /* ── HIGIENA AS-SET ──────────────────────────────────────
     Według: L. Jarlskov (Telia), „Securing your AS-set” (BalticNOG 2025)
     i „Prelude to a BGP hijack?” (DKNOG15); D. Madory, J. Snijders,
     „The Scourge of Excessive AS-SETs” (Kentik, 2025). Zasada: w AS-SET
     tylko to, co ogłaszasz dalej w BGP (swój stożek klientów). */
  const wszyscySasiedzi = ((sasiedzi && sasiedzi.data && sasiedzi.data.neighbours) || []);
  const prawi = new Set(wszyscySasiedzi.filter(n => n.type === 'right').map(n => +n.asn));
  const znani = new Set(wszyscySasiedzi.map(n => +n.asn));
  const jestAsn = x => /^AS\d+$/i.test(String(x));
  // Nazwa zbioru wygląda na listę członków IXP albo peerów (heurystyka po członach nazwy).
  const SLOWA_IXP = new Set(['IX', 'IXP', 'PEER', 'PEERS', 'PEERING', 'PEERINGS', 'RS', 'MEMBERS', 'ROUTESERVER']);
  const NIE_IXP = new Set(['MATRIX', 'RADIX', 'PHOENIX', 'UNIX', 'APPENDIX', 'PREFIX', 'SUFFIX', 'HELIX', 'FELIX', 'REMIX', 'NETFLIX', 'ONYX']);
  const wygladaNaIxp = nazwa => String(nazwa).toUpperCase().split(/[:\-_.]/).some(t => SLOWA_IXP.has(t) || (/^[A-Z]{2,}IX$/.test(t) && !NIE_IXP.has(t)));
  for (const [nazwa, ex] of rozwiniecia) {
    const asny = new Set();
    let glebokosc = 0;
    const naDziecko = new Map();
    for (const e of ex) {
      glebokosc = Math.max(glebokosc, e.depth || 1);
      const dziecko = (e.path || [])[1];
      for (const m of (e.members || [])) if (jestAsn(m)) {
        const k = String(m).toUpperCase();
        asny.add(k);
        if (dziecko) { if (!naDziecko.has(dziecko)) naDziecko.set(dziecko, new Set()); naDziecko.get(dziecko).add(k); }
      }
    }
    const n = asny.size, r = prawi.size;
    W.zbiory = W.zbiory || {};
    W.zbiory[nazwa] = { asn: n, glebokosc, zbiorow: ex.length, klienciBgp: r };
    // 1. rozmiar w porównaniu z klientami widocznymi w BGP
    const limit = Math.max(100, 10 * (r + 1));
    if (n > 1000 || n > limit) dodajAs('asetRozmiar', 'popr', N.t.higiena.rozmiarDuzy(esc(nazwa), n, r));
    else if (n > Math.max(30, 3 * (r + 1))) dodajAs('asetRozmiar', 'zal', N.t.higiena.rozmiarSredni(esc(nazwa), n, r));
    else dodajAs('asetRozmiar', 'ok', N.t.higiena.rozmiarOk(esc(nazwa), n, r));
    // 2. głębokość zagnieżdżeń
    if (glebokosc > 5) dodajAs('asetGlebokosc', 'zal', N.t.higiena.glebokosc(esc(nazwa), glebokosc));
    // 3. największe składowe (jak czerwone pozycje w bgp.tools)
    const duze = [...naDziecko].map(([d, s]) => [d, s.size]).filter(([, k]) => k >= 100 && k >= n * 0.3).sort((x, y) => y[1] - x[1]).slice(0, 5);
    if (duze.length) dodajAs('asetSkladowe', 'popr', N.t.higiena.skladowe(esc(nazwa), esc(duze.map(([d, k]) => `${d} (${k} AS)`).join(', '))));
    // 4. zbiory wyglądające na członków IXP albo peerów
    const ixp = [...new Set(ex.filter(e => e.depth >= 2 && wygladaNaIxp(e.name)).map(e => e.name))];
    if (ixp.length) dodajAs('asetIxp', 'zal', N.t.higiena.ixp(esc(nazwa), esc(ixp.slice(0, 8).join(', ') + (ixp.length > 8 ? ` (+${ixp.length - 8})` : ''))));
    // 5. bezpośredni członkowie, których nie widać jako klientów w BGP
    const korzen = ex.find(e => e.depth === 1);
    const bezposredni = ((korzen && korzen.members) || []).filter(jestAsn).map(x => +String(x).slice(2)).filter(x => x !== asn);
    if (sasiedzi && bezposredni.length) {
      const niewidoczni = bezposredni.filter(x => !prawi.has(x));
      if (niewidoczni.length) dodajAs('asetNieaktualni', 'zal', N.t.higiena.nieaktualni(esc(nazwa), esc(niewidoczni.slice(0, 12).map(x => 'AS' + x).join(', ') + (niewidoczni.length > 12 ? ` (+${niewidoczni.length - 12})` : ''))));
    }
  }

  // 6. kto włącza Twój AS do swoich AS-SET (każde włączenie to potencjalne podszycie się pod Twój AS)
  postep(N.krok.wlaczenia);
  const mo = await pobierz(`https://irrexplorer.nlnog.net/api/sets/member-of/AS${asn}`, { opcjonalne: true });
  if (mo && mo.setsPerIrr) {
    const wlasne = new Set([...nazwy.keys()]);
    const wpisy = [];
    for (const [irr, lista2] of Object.entries(mo.setsPerIrr)) for (const s of lista2) {
      if (wlasne.has(String(s).toUpperCase())) continue;
      const m = String(s).match(/^AS(\d+):/i);
      const wl = m ? +m[1] : null;
      const status = wl === asn ? 'wlasny' : wl !== null && znani.has(wl) ? 'sasiad' : wygladaNaIxp(s) ? 'ixp' : wl !== null ? 'obcy' : 'nieznany';
      wpisy.push({ zbior: s, irr, wlasciciel: wl, status });
    }
    W.wlaczenia = wpisy;
    const obce = wpisy.filter(w => w.status === 'obcy');
    const nieznane = wpisy.filter(w => w.status === 'nieznany');
    const ixpPeer = wpisy.filter(w => w.status === 'ixp');
    const pokaz = l => esc(l.slice(0, 10).map(w => `${w.zbior} (${w.irr})`).join(', ') + (l.length > 10 ? ` (+${l.length - 10})` : ''));
    if (obce.length) dodajAs('wlaczeniaObce', 'popr', N.t.higiena.wlaczeniaObce(obce.length, pokaz(obce)));
    if (ixpPeer.length) dodajAs('wlaczeniaIxp', 'zal', N.t.higiena.wlaczeniaIxp(ixpPeer.length, pokaz(ixpPeer)));
    if (nieznane.length) dodajAs('wlaczeniaNieznane', 'zal', N.t.higiena.wlaczeniaNieznane(nieznane.length, pokaz(nieznane)));
    if (!obce.length && !nieznane.length && !ixpPeer.length) dodajAs('wlaczenia', 'ok', N.t.higiena.wlaczeniaOk(wpisy.length));
  }

  // 7. listy prefiksów z bgpq4 — tylko w wersji uruchomionej lokalnie (serwer.py albo Docker)
  W.listy = {};
  if (lokalnie && nazwy.size) {
    let stan = null;
    try { stan = await pobierz('api/status', { opcjonalne: true, czas: 5000 }); } catch (e) { stan = null; }
    if (stan && stan.bgpq4) {
      for (const [nazwa, zrodlo] of nazwy) {
        postep(N.krok.listy);
        const q = ip => `api/prefiksy?zbior=${encodeURIComponent(nazwa)}&ip=${ip}${zrodlo ? '&zrodlo=' + encodeURIComponent(zrodlo) : ''}`;
        const [v4, v6] = await Promise.all([pobierz(q(4), { opcjonalne: true, czas: 150000 }), pobierz(q(6), { opcjonalne: true, czas: 150000 })]);
        if (!v4 && !v6) { bledy.push(N.krok.listy); continue; }
        W.listy[nazwa] = { v4: (v4 && v4.prefiksy) || [], v6: (v6 && v6.prefiksy) || [] };
        dodajAs('asetPrefiksy', 'info', N.t.higiena.prefiksy(esc(nazwa), W.listy[nazwa].v4.length, W.listy[nazwa].v6.length));
      }
    } else if (stan && stan.bgpq4 === false) {
      dodajAs('asetBezBgpq4', 'info', N.t.higiena.bezBgpq4);
    }
  } else if (!lokalnie && nazwy.size) {
    dodajAs('asetPrefiksyLokalnie', 'info', N.t.higiena.lokalnie);
  }

  // operatorzy nadrzędni
  const lewi = ((sasiedzi && sasiedzi.data && sasiedzi.data.neighbours) || []).filter(n => n.type === 'left');
  if (sasiedzi && lista.length) {
    if (lewi.length >= 2) dodajAs('upstream', 'ok', N.t.upstream.ok(lewi.length));
    else dodajAs('upstream', 'zal', N.t.upstream.zal(lewi.length));
  }

  // ASPA
  const prov = aspa ? (aspa.providers || aspa.providerASIDs || aspa.provider_asids || []).map(x => +String(x.asn || x.providerASID || x).replace(/^AS/i, '')) : [];
  if (aspa && prov.length) {
    dodajAs('aspa', 'ok', N.t.aspa.ok(prov.map(x => 'AS' + x).join(', ')));
    if (opAsn && !prov.includes(opAsn)) dodajAs('aspaOp', 'blok', N.t.aspa.brakOp(opAsn));
  } else if (roaAs) dodajAs('aspa', 'info', N.t.aspa.info);

  // ROA operatora (gdy ogłasza ze swojego AS)
  let roaOp = [];
  if (opAsn && tryb === 'operator') {
    const j = await opc(N.krok.operator, stat('rpki-roas', 'AS' + opAsn));
    roaOp = ((j && j.data && j.data.roas) || []).map(r => ({ asn: +r.asn, p: prefiks(r.prefix), max: +r.maxLength }));
  }

  /* ── PREFIKSY ─────────────────────────────────────── */
  const ogloszone = lista.map(prefiks).sort((a, b) => (a.v6 - b.v6) || (a.start < b.start ? -1 : a.start > b.start ? 1 : 0));
  const szczegolowo = ogloszone.slice(0, LIMIT_PREF);
  W.ileWszystkich = ogloszone.length; W.ileSzczegolowo = szczegolowo.length;

  let n1 = 0;
  const roaPref = await pula(szczegolowo, 6, async P => {
    postep(N.krok.pref(++n1, szczegolowo.length));
    const j = await pobierz(stat('rpki-roas', P.s), { opcjonalne: true });
    return ((j && j.data && j.data.roas) || []).map(r => ({ asn: +r.asn, p: prefiks(r.prefix), max: +r.maxLength }));
  });

  // właściciel przestrzeni — RDAP, każdy RIR (rdap.org przekierowuje do właściwego rejestru)
  let n2 = 0;
  const wlasciciele = await pula(szczegolowo, 6, async P => {
    postep(N.krok.wlasciciel(++n2, szczegolowo.length));
    const j = await pobierz(rdapAdres('ip', P.s), { opcjonalne: true, rdap: true });
    if (!j) return null;
    return { zakres: j.handle || '', nazwa: j.name || '', typ: j.type || '', org: rdapOrg(j), rir: rirZRdap(j) };
  });

  // maintainer do szablonów — z istniejących obiektów route tego AS
  let mntWzor = null;
  for (const e of irrWpisy) for (const db of RIR_AUT) for (const r of ((e.irrRoutes || {})[db] || [])) {
    if (!mntWzor && r.asn === asn) { const f = polaRpsl(r.rpslText); if (f['mnt-by']) mntWzor = { mnt: f['mnt-by'][f['mnt-by'].length - 1], db }; }
  }
  if (!mntWzor && mntAs.length) mntWzor = { mnt: mntAs[0], db: 'RIPE' };

  for (let i = 0; i < ogloszone.length; i++) {
    const P = ogloszone[i];
    const D = P.v6 ? 48 : 24;
    const r = { prefiks: P.s, v6: P.v6, dl: P.dl, testy: [], szczegolowo: i < szczegolowo.length };
    const test = (id, st, tekst) => r.testy.push({ id, st, tekst });

    if (P.dl > D) {
      test('zaDlugi', 'blok', N.p.zaDlugi(D));
      r.rpki = 'nd'; r.podzial = null;
      W.prefiksy.push(r); continue;
    }

    // RPKI ogłoszenia
    const roaTu = r.szczegolowo ? [...roaPref[i], ...roaMoje.filter(x => nachodzi(x.p, P))] : roaMoje.filter(x => nachodzi(x.p, P));
    r.rpki = stanRpki(P, asn, roaTu);
    if (r.rpki === 'invalidLen' || r.rpki === 'invalidAs') test('rpki', 'blok', N.p.rpkiInvalid);
    else if (r.rpki === 'notfound') test('rpki', 'popr', N.p.rpkiBrak);
    if (r.rpki !== 'valid' && P.dl === D) W.obiekty.roa.push({ prefiks: P.s, D, asn, brak: [P.s], st: r.rpki === 'notfound' ? 'popr' : 'blok', nowy: true });

    // podział na /24 (/48)
    const pok = pokrycie(P, D, roaMoje, asn);
    r.podzial = { razem: Number(pok.razem), pokryte: Number(pok.pokryte), D };
    if (P.dl < D) {
      const stP = P.v6 ? 'popr' : 'blok';   // IPv6: wymagania operatorów mniej jednolite
      if (pok.pokryte === 0n) test('podzial', stP, N.p.podzialBrak(D, r.podzial.razem));
      else if (pok.pokryte < pok.razem) test('podzial', stP, N.p.podzialCzesc(D, r.podzial.pokryte, r.podzial.razem));
      const szerokie = roaMoje.filter(x => x.asn === asn && zawiera(x.p, P) && x.max > P.dl && x.max > x.p.dl);
      if (szerokie.length && pok.pokryte === pok.razem) test('maxLen', 'zal', N.p.maxLen(szerokie[0].p.s, szerokie[0].max));
      if (pok.pokryte < pok.razem) {
        const brak = niepokryte(P, D, pok);
        W.obiekty.roa.push({ prefiks: P.s, D, asn, brak, st: P.v6 ? 'popr' : 'blok', wariantB: `${P.s} AS${asn} maxLength ${D}` });
      }
    }

    // ROA AS0 i innych AS
    if (r.szczegolowo) {
      const as0 = roaPref[i].filter(x => x.asn === 0 && nachodzi(x.p, P));
      if (as0.length) test('as0', 'popr', N.p.as0);
      const inne = [...new Set(roaPref[i].filter(x => x.asn !== 0 && x.asn !== asn && (!opAsn || x.asn !== opAsn) && zawiera(x.p, P)).map(x => `AS${x.asn} (${x.p.s})`))];
      if (inne.length && r.rpki === 'valid') test('innyRoa', 'info', N.p.innyRoa(esc(inne.join(', '))));
    }

    // IRR
    const e = irrMapa.get(P.s);
    const irr = (e && e.irrRoutes) || {};
    const bazyMoje = Object.keys(irr).filter(db => irr[db].some(x => x.asn === asn));
    const aut = bazyMoje.filter(db => RIR_AUT.includes(db));
    r.irr = aut.length ? { st: 'rir', db: aut.join(', ') } : bazyMoje.length ? { st: 'nieaut', db: bazyMoje.join(', ') } : { st: 'brak' };
    for (const db of aut) for (const x of irr[db]) if (!r.mnt && x.asn === asn) { const f = polaRpsl(x.rpslText); if (f['mnt-by']) r.mnt = { mnt: f['mnt-by'][f['mnt-by'].length - 1], db }; }
    if (r.irr.st === 'brak') { test('irr', r.rpki === 'valid' ? 'popr' : 'blok', N.p.irrBrak); W.obiekty.route.push(P.s); }
    else if (r.irr.st === 'nieaut') { test('irr', 'popr', N.p.irrNieaut(esc(r.irr.db))); W.obiekty.route.push(P.s); }
    const obce = [];
    Object.keys(irr).forEach(db => irr[db].forEach(x => { if (x.asn !== asn && (!opAsn || x.asn !== opAsn)) obce.push({ db, asn: x.asn, inv: x.rpkiStatus === 'INVALID' }); }));
    const inw = obce.filter(x => x.inv), zw = obce.filter(x => !x.inv);
    if (inw.length) test('konfliktInv', 'popr', N.p.konfliktInv(inw.map(x => `AS${x.asn} (${x.db})`).join(', ')));
    if (zw.length) test('konflikt', 'zal', N.p.konflikt(zw.map(x => `AS${x.asn} (${x.db})`).join(', ')));
    r.obce = obce;

    // obiekty route dla /24 (/48) wewnątrz prefiksu
    if (P.dl < D && Number(pok.razem) <= LIMIT_ENUM) {
      const pod = new Set();
      irrWpisy.forEach(w => {
        const q = prefiks(w.prefix);
        if (q.dl === D && zawiera(P, q) && RIR_AUT.some(db => ((w.irrRoutes || {})[db] || []).some(x => x.asn === asn))) pod.add(q.s);
      });
      r.irrPod = { ma: pod.size, razem: Number(pok.razem) };
      if (pod.size < Number(pok.razem)) {
        test('irrPod', 'zal', N.p.irrPod(D, pod.size, Number(pok.razem)));
        const wszystkie = [];
        for (let a = P.start; a <= P.koniec; a += pok.blok) wszystkie.push(`${fmt(a, P.v6)}/${D}`);
        r.brakRoutePod = wszystkie.filter(x => !pod.has(x));
      }
    }

    // mniej szczegółowy prefiks ogłaszany przez inny AS
    const nad = irrWpisy.filter(w => { const q = prefiks(w.prefix); return q.dl < P.dl && zawiera(q, P) && (w.bgpOrigins || []).length && !(w.bgpOrigins || []).includes(asn); });
    if (nad.length) test('nadrzedny', 'popr', N.p.nadrzedny(esc([...new Set(nad.flatMap(w => w.bgpOrigins.map(a => `AS${a} (${w.prefix})`)))].join(', '))));

    // właściciel zasobu i RIR prefiksu
    const wl = r.szczegolowo ? wlasciciele[i] : null;
    r.rir = (wl && wl.rir) || rirZNazwy(e && e.rir) || W.rir || '';
    r.wlasciciel = 'nd';
    if (wl) {
      const pa = /(ASSIGNED PA|SUB-ALLOCATED|REASSIGN|REALLOCAT|NON-PORTABLE|ALLOCATED-BY-LIR|AGGREGATED-BY-LIR)/i.test(wl.typ) || (P.v6 && wl.rir === 'RIPE' && /^ASSIGNED$/i.test(wl.typ));
      const ta = orgAs.length && wl.org.length ? wl.org.some(o => orgAs.includes(o)) : null;
      if (ta === false && !pa) { r.wlasciciel = 'inny'; test('wlasciciel', 'popr', N.p.wlInny(esc(wl.org.join(', ')))); }
      else if (pa && ta !== true) { r.wlasciciel = 'pa'; test('wlasciciel', 'popr', N.p.wlPa(esc(wl.typ))); }
      else if (ta === true) r.wlasciciel = 'tak';
      r.zasob = wl;
    }
    if (r.rir) W.rirs.add(r.rir);

    // ROA operatora
    if (opAsn && tryb === 'operator') {
      const po = pokrycie(P, D, roaOp, opAsn);
      if (po.pokryte < po.razem) {
        r.opBrak = Number(po.razem - po.pokryte);
        W.obiekty.roa.push({ prefiks: P.s, D, asn: opAsn, brak: niepokryte(P, D, po), wariantB: `${P.s} AS${opAsn} maxLength ${D}` });
      }
    }
    W.prefiksy.push(r);
  }

  if (opAsn && tryb === 'operator') {
    const brak = W.prefiksy.reduce((s, p) => s + (p.opBrak || 0), 0);
    if (brak) dodajAs('opRoa', 'blok', N.t.opRoa.blok(opAsn, brak));
    else if (W.prefiksy.length) dodajAs('opRoa', 'ok', N.t.opRoa.ok(opAsn));
  }

  // nieaktualne obiekty route
  const nieakt = (irrx && irrx.directOrigin || []).filter(w => !(w.bgpOrigins || []).length && !ogloszone.some(P => { const q = prefiks(w.prefix); return zawiera(P, q); }))
    .filter(w => Object.keys(w.irrRoutes || {}).some(db => w.irrRoutes[db].some(x => x.asn === asn))).map(w => w.prefix);
  if (nieakt.length) dodajAs('nieaktualne', 'zal', N.t.nieaktualne.zal(esc(nieakt.join(', '))));

  W.mntWzor = mntWzor;
  return podsumuj(W);
}

/* ── PODSUMOWANIE I POPRAWKI ───────────────────────────── */
const WAGA = { blok: 0, popr: 1, zal: 2, info: 3, ok: 4 };
function podsumuj(W) {
  const wszystkie = [...W.testyAs, ...W.prefiksy.flatMap(p => p.testy)];
  W.licz = { blok: 0, popr: 0, zal: 0 };
  wszystkie.forEach(t => { if (t.st in W.licz) W.licz[t.st]++; });
  W.werdykt = W.licz.blok ? 'blok' : W.licz.popr ? 'popr' : 'ok';
  W.gotowe = W.prefiksy.filter(p => !p.testy.some(t => t.st === 'blok')).length;

  // Plan działań: punkty grupowane w kroki według rodzaju zmiany, w stałej kolejności.
  const F = [];
  const dodaj = (typ, st, tekst, pod) => F.push({ typ, st, tekst, pod });
  const zPref = (id) => W.prefiksy.filter(p => p.testy.some(t => t.id === id)).map(p => p.prefiks);
  const lista = l => l.slice(0, 8).join(', ') + (l.length > 8 ? ` (+${l.length - 8})` : '');
  let l;
  if ((l = zPref('zaDlugi')).length) dodaj('dlugosc', 'blok', N.f.zaDlugi(lista(l)));
  if ((l = zPref('rpki').filter(p => { const x = W.prefiksy.find(y => y.prefiks === p); return /invalid/.test(x.rpki) && x.dl < (x.v6 ? 48 : 24); })).length) dodaj('roa', 'blok', N.f.rpki(lista(l)));
  W.obiekty.roa.forEach(o => {
    if (o.nowy) return;
    const pod = [];
    if (o.brak && o.brak.length <= LIMIT_ROA_A) pod.push(N.f.roaA(o.brak.length));
    pod.push(N.f.roaB(o.prefiks, o.D));
    dodaj(o.asn !== W.asn ? 'roaOp' : 'roa', o.st || 'blok', (o.asn !== W.asn ? `AS${o.asn}: ` : '') + N.f.roa(o.prefiks, o.D), pod);
  });
  ['blok', 'popr'].forEach(st => {
    const n = W.obiekty.roa.filter(o => o.nowy && o.st === st).map(o => o.prefiks);
    if (n.length) dodaj('roa', st, N.f.roaNowe(lista(n)));
  });
  if ((l = zPref('as0')).length) dodaj('roa', 'popr', N.f.as0(lista(l)));
  W.prefiksy.filter(p => p.testy.some(t => t.id === 'maxLen')).forEach(p => dodaj('roa', 'zal', p.testy.find(t => t.id === 'maxLen').tekst));
  W.obiekty.route.forEach(p => dodaj('route', 'popr', N.f.routeAgg(p)));
  const pod = W.prefiksy.filter(p => p.brakRoutePod && p.brakRoutePod.length);
  if (pod.length) dodaj('route', 'zal', N.f.route(pod.reduce((s, p) => s + p.brakRoutePod.length, 0), pod.every(p => p.v6) ? 48 : 24));
  const obce = W.prefiksy.flatMap(p => (p.obce || []).map(x => `${p.prefiks} AS${x.asn} (${x.db})`));
  if (obce.length) dodaj('usun', W.prefiksy.some(p => (p.obce || []).some(x => x.inv)) ? 'popr' : 'zal', N.f.usun(obce.length), obce.slice(0, 12));
  if ((l = zPref('wlasciciel').concat(zPref('nadrzedny'))).length) dodaj('loa', 'popr', N.f.loa(lista([...new Set(l)])));
  const TYP_AS = { aspaOp: 'aspa', abuse: 'abuse', autnum: 'asset', eksport: 'asset', asset: 'asset', assetZrodlo: 'asset', assetHier: 'asset', assetBrak: 'asset', pdb: 'pdb', pdbRoz: 'pdb', nieaktualne: 'usun', upstream: 'inne', opRoa: 'roaOp', asetRozmiar: 'asset', asetGlebokosc: 'asset', asetSkladowe: 'asset', asetIxp: 'asset', asetNieaktualni: 'asset', wlaczeniaObce: 'wlaczenia', wlaczeniaIxp: 'wlaczenia', wlaczeniaNieznane: 'wlaczenia' };
  W.testyAs.filter(t => t.st === 'blok' || t.st === 'popr' || t.st === 'zal').filter(t => t.id !== 'opRoa').forEach(t => dodaj(TYP_AS[t.id] || 'inne', t.st, t.tekst));

  const KOLEJNOSC = ['dlugosc', 'roa', 'roaOp', 'aspa', 'route', 'usun', 'loa', 'asset', 'wlaczenia', 'abuse', 'pdb', 'inne'];
  W.kroki = KOLEJNOSC.map(typ => {
    const punkty = F.filter(f => f.typ === typ).sort((a, b) => WAGA[a.st] - WAGA[b.st]);
    if (!punkty.length) return null;
    return { typ, st: punkty[0].st, punkty };
  }).filter(Boolean);
  W.poprawki = F;
  return W;
}

/* ── SZABLONY OBIEKTÓW ─────────────────────────────────── */
function tekstRoa(W) {
  const w = [];
  W.obiekty.roa.filter(o => o.nowy).forEach(o => w.push(`AS${o.asn}  ${o.prefiks}  maxLength ${o.D}`));
  if (w.length) w.push('');
  W.obiekty.roa.filter(o => !o.nowy).forEach(o => {
    if (o.brak && o.brak.length <= LIMIT_ROA_A) {
      w.push(`# ${o.prefiks} → /${o.D} (RFC 9319)`);
      o.brak.forEach(b => w.push(`AS${o.asn}  ${b}  maxLength ${o.D}`));
      w.push('# — or —');
    } else w.push(`# ${o.prefiks} → /${o.D}`);
    w.push(o.wariantB.replace(/^(\S+) (AS\d+)/, '$2  $1 '));
    w.push('');
  });
  return w.join('\n').trim();
}
function tekstRoute(W) {
  // maintainer z obiektu route danego prefiksu, a gdy go brak — z innych obiektów tego AS
  const wzor = W.mntWzor || { mnt: 'YOUR-MNT', db: 'RIPE' };
  const pary = [];
  W.obiekty.route.forEach(p => { const x = W.prefiksy.find(y => y.prefiks === p); pary.push([p, { mnt: wzor.mnt, db: (x && x.rir) || wzor.db }]); });
  W.prefiksy.forEach(p => (p.brakRoutePod || []).forEach(x => pary.push([x, p.mnt || { mnt: wzor.mnt, db: p.rir || wzor.db }])));
  const byly = new Set();
  return pary.filter(([p]) => !byly.has(p) && byly.add(p)).slice(0, 512).map(([p, m]) => {
    const v6 = p.includes(':');
    return `${v6 ? 'route6' : 'route'}:${v6 ? '         ' : '          '}${p}\norigin:         AS${W.asn}\nmnt-by:         ${m.mnt}\nsource:         ${m.db}`;
  }).join('\n\n');
}

/* ── WIDOK ─────────────────────────────────────────────── */
function plakietka(st) { return `<span class="stopien s-${st}">${esc(N.stopnie[st])}</span>`; }
function blokKopiuj(tytul, tekst) {
  if (!tekst) return '';
  const id = 'k' + Math.random().toString(36).slice(2, 8);
  return `<div class="kod"><div class="kod-gora"><h4>${esc(tytul)}</h4><button type="button" class="przycisk-maly" data-kopiuj="${id}">${esc(N.kopiuj)}</button></div><pre id="${id}">${esc(tekst)}</pre></div>`;
}
function rpkiKomorka(s) {
  const k = { valid: 'ok', notfound: 'popr', invalidLen: 'blok', invalidAs: 'blok', nd: 'info' }[s] || 'info';
  return `<span class="znacznik z-${k}">${esc(N.rpkiStan[s] || '—')}</span>`;
}
function podzialKomorka(p) {
  if (!p.podzial || p.dl >= p.podzial.D) return `<span class="znacznik z-info">${esc(N.podzialNd)}</span>`;
  const { razem, pokryte } = p.podzial;
  const k = pokryte === razem ? 'ok' : 'blok';
  const t = pokryte === razem ? N.podzialPelny : pokryte === 0 ? N.podzialBrak : N.podzialCzesc(pokryte, razem);
  return `<span class="znacznik z-${k}">${esc(t)}</span>`;
}
function irrKomorka(p) {
  if (!p.irr) return '—';
  if (p.irr.st === 'rir') return `<span class="znacznik z-ok">${esc(N.irrRir(p.irr.db))}</span>`;
  if (p.irr.st === 'nieaut') return `<span class="znacznik z-popr">${esc(N.irrNieaut(p.irr.db))}</span>`;
  return `<span class="znacznik z-blok">${esc(N.irrBrak)}</span>`;
}
function wlKomorka(p) {
  const m = { tak: ['ok', N.wlTak], inny: ['popr', N.wlNie], pa: ['popr', N.wlPa], nd: ['info', N.wlNd] }[p.wlasciciel || 'nd'];
  return `<span class="znacznik z-${m[0]}">${esc(m[1])}</span>`;
}

function tekstLoa(W) {
  const pref = W.prefiksy.filter(p => p.testy.some(t => t.id === 'wlasciciel' || t.id === 'nadrzedny'));
  if (!pref.length) return '';
  const wiersze = pref.map(p => `  ${p.prefiks.padEnd(22)} ${(p.zasob && p.zasob.org.join(', ')) || ''}`);
  return [
    'LETTER OF AUTHORIZATION',
    '',
    'Date: ____________',
    'To: ______________________ (DDoS mitigation provider), AS________',
    '',
    `We, ______________________ (organisation, RIR handle), the holder of the IP address space listed below,`,
    `authorise the provider named above to announce the following prefixes in BGP, with origin AS${W.asn}`,
    'or from the provider\'s AS, for the purpose of DDoS mitigation:',
    '',
    ...wiersze,
    '',
    'This authorisation remains valid until revoked in writing.',
    '',
    'Name: ______________________   Title: ______________________',
    'Signature: _________________   Company stamp:'
  ].join('\n');
}

const KLUCZ_RIR = { roa: 'roa', roaOp: 'roa', route: 'route', usun: 'usun', asset: 'asset', abuse: 'abuse', aspa: 'aspa' };
function rysujPlan(W) {
  const rirPref = [...(W.rirs || [])];
  const rirAs = W.rir || rirPref[0] || '';
  const nazwyRir = [...new Set([rirAs, ...rirPref].filter(Boolean))].map(r => N.rir[r].nazwa).join(', ');
  const roaT = tekstRoa(W), routeT = tekstRoute(W), loaT = tekstLoa(W);
  let roaPokazany = false;
  const kroki = (W.kroki || []).map((k, i) => {
    const klucz = KLUCZ_RIR[k.typ];
    const rirs = !klucz ? [] : (['asset', 'abuse', 'aspa'].includes(k.typ) ? [rirAs] : (rirPref.length ? rirPref : [rirAs])).filter(r => r && N.rir[r]);
    const og = (N.ogolne[k.typ] || []);
    let kod = '';
    if ((k.typ === 'roa' || k.typ === 'roaOp') && !roaPokazany && roaT) { kod = blokKopiuj(N.obiektRoa, roaT); roaPokazany = true; }
    if (k.typ === 'route' && routeT) kod = blokKopiuj(N.obiektRoute, routeT);
    if (k.typ === 'loa' && loaT) kod = blokKopiuj(N.loaTytul, loaT);
    const jak = rirs.map((r, j) => {
      const g = N.rir[r][klucz];
      return `<details class="jak"${j === 0 ? ' open' : ''}><summary>${esc(N.jakW(N.rir[r].nazwa))}</summary><ol>${g.kroki.map(x => `<li>${esc(x)}</li>`).join('')}</ol><p class="drobne"><a href="${esc(g.link)}" target="_blank" rel="noopener">${esc(N.dokumentacja)} ↗</a></p></details>`;
    }).join('');
    return `<li class="krok k-${k.st}">
      <div class="krok-gora"><span class="krok-nr" aria-hidden="true">${i + 1}</span><h4>${esc(N.krokTyt[k.typ] || k.typ)}</h4>${plakietka(k.st)}</div>
      <ul class="punkty">${k.punkty.map(f => `<li>${f.st !== k.st ? plakietka(f.st) : ''}<span>${f.tekst}</span>${f.pod ? `<ul>${f.pod.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</li>`).join('')}</ul>
      ${og.length ? `<ol class="ogolne">${og.map(x => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}
      ${kod}${jak}
    </li>`;
  });
  const koniec = `<li class="krok k-info">
      <div class="krok-gora"><span class="krok-nr" aria-hidden="true">${kroki.length + 1}</span><h4>${esc(N.koncowe.tytul)}</h4></div>
      <ol class="ogolne">${N.koncowe.kroki.map(x => `<li>${esc(x)}</li>`).join('')}</ol>
    </li>`;
  return `<section class="karta">
    <h3>${esc(N.sekcjaPoprawki)}</h3>
    ${kroki.length ? `<p class="drobne">${esc(N.planOpis(nazwyRir))}</p>` : `<p>${esc(N.sekcjaPoprawkiPusta)}</p>`}
    <ol class="plan">${kroki.join('')}${koniec}</ol>
  </section>`;
}

const LIMIT_WIERSZY = 5000;
function rysujListy(W) {
  const zbiory = Object.entries(W.listy || {});
  if (!zbiory.length) return '';
  const bloki = zbiory.map(([nazwa, l]) => {
    const id = nazwa.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const lista = (ip, l2) => [`    prefix-list ${id}-v${ip} {`, ...l2.map(p => `        ${p};`), `    }`];
    const pelna = ['policy-options {', ...lista(4, l.v4), ...lista(6, l.v6), '}'].join('\n');
    const wiersze = pelna.split('\n');
    const pokaz = wiersze.length > LIMIT_WIERSZY ? wiersze.slice(0, LIMIT_WIERSZY).join('\n') + '\n…' : pelna;
    const pobierzId = 'p' + Math.random().toString(36).slice(2, 8);
    ZAWARTOSC_LIST[pobierzId] = { nazwa: `${id}-prefix-lists.txt`, tresc: pelna + '\n\n# IPv4\n' + l.v4.join('\n') + '\n\n# IPv6\n' + l.v6.join('\n') + '\n' };
    return `<h4 class="lista-tytul">${esc(nazwa)} — IPv4: ${l.v4.length}, IPv6: ${l.v6.length}</h4>
      ${blokKopiuj('Junos (prefix-list)', pokaz)}
      ${wiersze.length > LIMIT_WIERSZY ? `<p class="drobne">${esc(N.listaObcieta(LIMIT_WIERSZY, wiersze.length))}</p>` : ''}
      <p><button type="button" class="przycisk-maly" data-pobierz="${pobierzId}">${esc(N.pobierzListe)}</button></p>`;
  }).join('');
  return `<section class="karta">
    <h3>${esc(N.sekcjaListy)}</h3>
    <p class="drobne">${esc(N.listyOpis)}</p>
    ${bloki}
  </section>`;
}
const ZAWARTOSC_LIST = {};

function rysuj(W) {
  const el = $('#wynik');
  const prefWiersze = W.prefiksy.map(p => {
    const uw = p.testy.length ? `<ul class="uwagi">${p.testy.slice().sort((a, b) => WAGA[a.st] - WAGA[b.st]).map(t => `<li>${plakietka(t.st)} ${t.tekst}</li>`).join('')}</ul>` : `<span class="drobne">${esc(N.p.wszystkoOk)}</span>`;
    return `<tr class="${p.testy.some(t => t.st === 'blok') ? 'w-blok' : ''}"><td class="mono">${esc(p.prefiks)}</td><td>${rpkiKomorka(p.rpki)}</td><td>${podzialKomorka(p)}</td><td>${irrKomorka(p)}</td><td>${wlKomorka(p)}</td><td>${uw}</td></tr>`;
  });
  const POKAZ = 40;

  el.innerHTML = `
  <section class="karta wynik-karta" aria-live="polite">
    <p class="nadtytul-wynik">${esc(N.wynikDla(W.asn, W.nazwa))}</p>
    <div class="werdykt v-${W.werdykt}">
      <h2>${esc(N.werdykt[W.werdykt])}</h2>
      <p>${esc(N.werdyktOpis[W.werdykt])}</p>
    </div>
    <div class="kafle">
      <div class="kafel"><b>${W.prefiksy.length}</b><span>${esc(N.kafle.pref)}</span></div>
      <div class="kafel"><b>${W.gotowe}</b><span>${esc(N.kafle.gotowe)}</span></div>
      <div class="kafel k-blok"><b>${W.licz.blok}</b><span>${esc(N.kafle.blok)}</span></div>
      <div class="kafel k-popr"><b>${W.licz.popr}</b><span>${esc(N.kafle.popr)}</span></div>
      <div class="kafel k-zal"><b>${W.licz.zal}</b><span>${esc(N.kafle.zal)}</span></div>
    </div>
    ${W.bledy.length ? `<p class="ostrzezenie">${esc(N.bladCzesciowy([...new Set(W.bledy)].join(', ')))}</p>` : ''}
    ${W.ileWszystkich > W.ileSzczegolowo ? `<p class="drobne">${esc(N.limit(W.ileSzczegolowo, W.ileWszystkich))}</p>` : ''}
    <div class="akcje-wynik no-print">
      <button type="button" class="przycisk-maly" id="drukuj">${esc(N.drukuj)}</button>
      <button type="button" class="przycisk-maly" id="pobierzJson">${esc(N.json)}</button>
      <button type="button" class="przycisk-maly" id="kopiujLink">${esc(N.link)}</button>
    </div>
  </section>

  ${rysujPlan(W)}

  <section class="karta">
    <h3>${esc(N.sekcjaAs)}</h3>
    <ul class="testy">${W.testyAs.slice().sort((a, b) => WAGA[a.st] - WAGA[b.st]).map(t => `<li>${plakietka(t.st)} <span>${t.tekst}</span></li>`).join('')}</ul>
  </section>

  ${W.prefiksy.length ? `<section class="karta">
    <h3>${esc(N.sekcjaPrefiksy)}</h3>
    <div class="tabela-owijka"><table class="tabela">
      <thead><tr><th>${esc(N.kolPrefiks)}</th><th>${esc(N.kolRpki)}</th><th>${esc(N.kolPodzial)}</th><th>${esc(N.kolIrr)}</th><th>${esc(N.kolWlasciciel)}</th><th>${esc(N.kolUwagi)}</th></tr></thead>
      <tbody>${prefWiersze.slice(0, POKAZ).join('')}</tbody>
      ${prefWiersze.length > POKAZ ? `<tbody class="ukryte" hidden>${prefWiersze.slice(POKAZ).join('')}</tbody>` : ''}
    </table></div>
    ${prefWiersze.length > POKAZ ? `<button type="button" class="przycisk-maly no-print" id="pokazWiecej">${esc(N.pokazWszystkie(prefWiersze.length))}</button>` : ''}
  </section>` : ''}

  ${rysujListy(W)}

  <section class="karta">
    <h3>${esc(N.sekcjaReczne)}</h3>
    <dl class="reczne">${N.reczne.map(([a, b]) => `<dt>${esc(a)}</dt><dd>${esc(b)}</dd>`).join('')}</dl>
  </section>

  <section class="karta">
    <h3>${esc(N.sekcjaPodstawa)}</h3>
    <dl class="reczne">${N.podstawa.map(([a, b]) => `<dt>${esc(a)}</dt><dd>${esc(b)}</dd>`).join('')}</dl>
    <p class="drobne"><a href="https://github.com/itoro-pl/scrubbing-readiness-test/blob/main/${jezyk === 'pl' ? 'README.pl.md#%C5%BAr%C3%B3d%C5%82a-i-autorzy' : 'README.md#sources-and-credits'}" target="_blank" rel="noopener">${esc(N.podstawaLink)} ↗</a></p>
    <p class="drobne">${esc(N.stopka)}</p>
  </section>`;

  el.hidden = false;
  el.querySelectorAll('[data-kopiuj]').forEach(b => b.addEventListener('click', () => kopiuj($('#' + b.dataset.kopiuj).textContent, b)));
  el.querySelectorAll('[data-pobierz]').forEach(b => b.addEventListener('click', () => {
    const z = ZAWARTOSC_LIST[b.dataset.pobierz];
    if (!z) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([z.tresc], { type: 'text/plain' }));
    a.download = z.nazwa; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }));
  $('#drukuj').addEventListener('click', () => window.print());
  $('#pobierzJson').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(W, (k, v) => typeof v === 'bigint' ? v.toString() : v instanceof Set ? [...v] : v, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = `itoro-scrubbing-AS${W.asn}.json`; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  });
  $('#kopiujLink').addEventListener('click', e => kopiuj(location.href, e.currentTarget));
  const w = $('#pokazWiecej');
  if (w) w.addEventListener('click', () => { el.querySelector('tbody.ukryte').hidden = false; w.remove(); });
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function kopiuj(tekst, przycisk) {
  const ok = () => { const s = przycisk.textContent; przycisk.textContent = N.skopiowano; setTimeout(() => (przycisk.textContent = s), 1500); };
  if (navigator.clipboard) navigator.clipboard.writeText(tekst).then(ok, () => {});
}

/* ── TEKSTY STATYCZNE I FORMULARZ ──────────────────────── */
function motyw() {
  const b = $('#motyw');
  if (!b) return;
  const teraz = () => document.documentElement.dataset.motyw || (matchMedia('(prefers-color-scheme: dark)').matches ? 'ciemny' : 'jasny');
  const opis = () => { const m = teraz(); b.textContent = m === 'ciemny' ? '☀ ' + N.motywJasny : '☾ ' + N.motywCiemny; b.setAttribute('aria-pressed', String(m === 'ciemny')); };
  b.setAttribute('aria-label', N.motywAria);
  b.addEventListener('click', () => {
    const m = teraz() === 'ciemny' ? 'jasny' : 'ciemny';
    document.documentElement.dataset.motyw = m;
    try { localStorage.setItem('itoro-motyw', m); } catch (e) {}
    opis();
  });
  opis();
}

function wypelnij() {
  document.documentElement.lang = jezyk;
  document.title = N.tytulStrony;
  const md = document.querySelector('meta[name="description"]'); if (md) md.content = N.opisStrony;
  document.querySelectorAll('[data-n]').forEach(e => { const v = N[e.dataset.n]; if (typeof v === 'string') e.textContent = v; });
  document.querySelectorAll('[data-nh]').forEach(e => { const v = N[e.dataset.nh]; if (typeof v === 'string') e.innerHTML = v; });
  document.querySelectorAll('[data-np]').forEach(e => { e.placeholder = N[e.dataset.np]; });
  const lp = $('#itoroPunkty'); if (lp) lp.innerHTML = N.itoroPunkty.map(x => `<li>${x}</li>`).join('');
  const zk = $('#zakres'); if (zk) zk.innerHTML = (N.zakres || []).map(x => `<li>${esc(x)}</li>`).join('');
  const wj = $('#wyborJezyka');
  if (wj) {
    wj.innerHTML = Object.entries(JEZYKI).map(([k, v]) => `<option value="${k}"${k === jezyk ? ' selected' : ''} lang="${k}">${k.toUpperCase()} · ${v}</option>`).join('');
    wj.addEventListener('change', () => {
      const u = new URL(location.href);
      u.searchParams.set('jezyk', wj.value);
      location.href = u.toString();
    });
  }
  const p = document.querySelector('.poczta');
  if (p) { const m = [...p.dataset.a].reverse().join('') + '@' + [...p.dataset.b].reverse().join(''); p.innerHTML = `<a class="gora-link" href="mailto:${m}">${m}</a>`; }
}

function numerAs(s) {
  const m = String(s || '').trim().match(/^(?:AS)?\s*(\d{1,10})$/i);
  if (!m) return null;
  const n = +m[1];
  return n >= 1 && n <= 4294967294 ? n : null;
}

async function start(e) {
  if (e) e.preventDefault();
  const asn = numerAs($('#pAs').value);
  const blad = $('#blad');
  blad.hidden = true;
  if (!asn) { blad.textContent = N.bladAs; blad.hidden = false; return; }
  const op = numerAs($('#pOp').value);
  const tryb = document.querySelector('input[name="tryb"]:checked').value;
  const u = new URL(location.href);
  u.searchParams.set('as', asn); u.searchParams.set('jezyk', jezyk);
  if (op) { u.searchParams.set('op', op); u.searchParams.set('tryb', tryb); } else { u.searchParams.delete('op'); u.searchParams.delete('tryb'); }
  history.replaceState(null, '', u);

  const btn = $('#sprawdz'), st = $('#postep');
  btn.disabled = true; btn.querySelector('span').textContent = N.sprawdzam;
  st.hidden = false;
  try {
    const W = await analizuj(asn, op, tryb, k => { st.textContent = N.sprawdzam + ' ' + k; });
    rysuj(W);
  } catch (err) {
    blad.textContent = N.bladSieci(err && err.message || 'error');
    blad.hidden = false;
  } finally {
    btn.disabled = false; btn.querySelector('span').textContent = N.sprawdz; st.hidden = true;
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await wczytajJezyk();
  wypelnij();
  motyw();
  $('#formularz').addEventListener('submit', start);
  const as = parametry.get('as'), op = parametry.get('op'), tr = parametry.get('tryb');
  if (op) $('#pOp').value = op;
  if (tr === 'operator') $('#trybOp').checked = true;
  if (as) { $('#pAs').value = as; start(); }
});

// Dla testów w konsoli/Node.
window.ITORO_SCRUB = { prefiks, pokrycie, niepokryte, stanRpki, fmt6, fmt4, analizuj };
})();

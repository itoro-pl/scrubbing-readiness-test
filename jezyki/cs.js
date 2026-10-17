/* ITORO — Test gotowości prefiksów do scrubbing center — čeština */
window.NAPISY.cs = {
  tytulStrony: 'Test připravenosti prefixů pro scrubbing centrum — ITORO',
  opisStrony: 'Zadejte číslo AS a ověřte, zda ROA, objekty route, AS-SET a data v registrech umožní během DDoS útoku přesměrovat provoz do scrubbing centra. Bez registrace, přímo v prohlížeči.',
  goraOpis: 'Zabezpečujeme sítě a chráníme je před DDoS útoky.',
  pomin: 'Přejít na obsah',
  nadtytul: 'Bezplatné nástroje',
  h1: 'Jsou vaše prefixy připravené na přesměrování do scrubbing centra?',
  heroH: 'Během DDoS útoku se provoz přesměrovává do scrubbing centra oznámením prefixů <strong>/24</strong> (IPv6: <strong>/48</strong>) vyčleněných z větších bloků. Pokud to ROA nedovolí nebo v databázi RIR chybí objekt route, oznámení zahodí sítě validující RPKI i filtry operátora — právě ve chvíli, kdy je ochrana nejvíce potřeba. Nástroj to ověří na veřejných datech a řekne vám, co opravit.',
  kartaTytul: 'Test připravenosti prefixů',
  wiodacy: 'Zadejte číslo svého AS. Nástroj stáhne oznamované prefixy, ROA, objekty route, AS-SET a údaje o držiteli zdrojů a ověří je podle doporučení RFC a běžných požadavků operátorů scrubbing center.',
  poleAs: 'Číslo AS',
  poleAsPomoc: 'např. 64496 nebo AS64496',
  poleOperator: 'AS operátora scrubbing centra (nepovinné)',
  poleOperatorPomoc: 'Pokud ho znáte, ověříme ROA a ASPA pro tento AS.',
  poleTryb: 'Kdo bude během útoku oznamovat vaše prefixy?',
  trybKlient: 'Operátor, s mým AS jako originem',
  trybOperator: 'Operátor, ze svého vlastního AS',
  sprawdz: 'Ověřit',
  sprawdzam: 'Ověřuji…',
  czas: 'Výsledek během několika sekund. Data stahuje váš prohlížeč z veřejných služeb (mimo jiné z databáze RIPE, registrů IRR a PeeringDB).',
  wersja: 'Verze 1.1.0 · 17. října 2026',
  itoroNad: 'Nástroje poskytuje ITORO',
  itoroH2: 'Zvyšujeme bezpečnost vaší sítě',
  itoroP1: 'Nasazujeme a provozujeme systémy ochrany před DDoS útoky, především v sítích telekomunikačních operátorů a v datových centrech.',
  itoroPunkty: [
    '<strong>Detekce útoku za 2–5 sekund</strong>, filtrování na okraji vaší sítě',
    '<strong>Přesměrování do scrubbing centra</strong>, když útok překročí kapacitu vašich linek'
  ],
  itoroPrzycisk: 'Promluvte si s námi',
  podReklama: 'Test vychází z doporučení RFC a ze zveřejněných požadavků operátorů scrubbing center — globálních i polských. Používá pouze data, která si kdokoli může ověřit v registrech.',

  krok: {
    as: 'data AS', prefiksy: 'oznamované prefixy', roa: 'ROA a ASPA', irr: 'objekty route (IRR)',
    autnum: 'aut-num a AS-SET', pdb: 'PeeringDB', abuse: 'abuse kontakt', sasiedzi: 'BGP sousedé',
    listy: 'seznamy prefixů (bgpq4)', wlaczenia: 'kdo zahrnuje váš AS do AS-SET', pref: (n, m) => `podrobnosti prefixů (${n}/${m})`, wlasciciel: (n, m) => `držitelé zdrojů (${n}/${m})`, operator: 'ROA operátora'
  },
  bladAs: 'Zadejte platné číslo AS (1–4294967294).',
  bladSieci: (u) => `Data se nepodařilo stáhnout (${u}). Zkuste to prosím za chvíli znovu.`,
  bladCzesciowy: (u) => `Část dat není dostupná (${u}) — výsledek může být neúplný.`,

  wynikDla: (as, nazwa) => `Výsledek pro AS${as}${nazwa ? ' — ' + nazwa : ''}`,
  werdykt: { blok: 'Prefixy nejsou připravené na přesměrování', popr: 'Připraveno s výhradami — je co opravit', ok: 'Prefixy jsou připravené na přesměrování' },
  werdyktOpis: {
    blok: 'Nejméně jeden problém zabrání scrubbing centru oznámit vaše prefixy, nebo způsobí jejich zahození v internetu. Opravte ho před útokem: ROA a objekty route se šíří několik hodin až dva dny.',
    popr: 'Přesměrování nic neblokuje, ale někteří operátoři prefixy odmítnou nebo budou při zavádění služby požadovat opravy.',
    ok: 'Data v registrech umožňují oznámit každý prefix /24 (/48) z vašeho adresního prostoru. Zbývá to, co nelze ověřit zvenčí — seznam najdete dole.'
  },
  kafle: { pref: 'oznamovaných prefixů', gotowe: 'připravených k rozdělení na /24 a /48', blok: 'blokujících problémů', popr: 'věcí k opravě', zal: 'doporučení' },
  stopnie: { blok: 'Blokuje', popr: 'K opravě', zal: 'Doporučení', ok: 'OK', info: 'Info' },
  sekcjaPoprawki: 'Akční plán krok za krokem',
  planOpis: (r) => `Kroky v pořadí, v jakém je vhodné je provést. U každého je návod pro váš registr${r ? ' (' + r + ')' : ''}.`,
  jakW: (r) => `Jak to udělat v ${r}`,
  dokumentacja: 'Dokumentace',
  krokTyt: {
    dlugosc: 'Nahraďte příliš dlouhé prefixy', roa: 'Opravte ROA', roaOp: 'Přidejte ROA pro scrubbing centrum',
    aspa: 'Doplňte ASPA', route: 'Vytvořte objekty route', usun: 'Odstraňte zastaralé objekty route',
    loa: 'Připravte LOA', asset: 'Upravte AS-SET', wlaczenia: 'Ověřte, kdo zahrnuje váš AS do svých AS-SET', abuse: 'Nastavte abuse kontakt', pdb: 'Doplňte PeeringDB', inne: 'Ostatní'
  },
  ogolne: {
    dlugosc: ['Prefixy delší než /24 (IPv6: /48) nahraďte nadřazeným prefixem /24 (/48), nebo je oznamujte společně s ním.'],
    loa: ['Sestavte seznam prefixů z tohoto kroku a držitele každého z nich (data z databáze RIR).', 'Požádejte držitele adresního prostoru — a pokud prefix oznamuje nadřazený operátor, také jeho — o podpis LOA podle níže uvedeného vzoru.', 'Operátoři obvykle přijímají LOA jako PDF na hlavičkovém papíře firmy, podepsané oprávněnou osobou.'],
    asset: ['Zásada: do AS-SET dávejte jen to, co dál oznamujete v BGP, tedy sebe a své zákazníky. Nepřidávejte IXP ani peery.', 'Než zahrnete AS-SET zákazníka, ověřte jeho velikost; odebírejte zákazníky, kteří odešli, a sadu pravidelně kontrolujte.'],
    wlaczenia: ['Projděte seznam sad z tohoto kroku. Vlastníka najdete v objektu as-set (mnt-by, admin-c) v databázi IRR.', 'Pokud sada patří síti, se kterou nemáte vztah BGP, požádejte o odebrání svého AS. Pokud nereaguje, nahlaste to provozovateli databáze IRR.', 'Zveřejněte ASPA se seznamem svých nadřazených operátorů — omezuje to zneužití vašeho AS prostřednictvím cizích AS-SET.', 'Zaveďte trvalé sledování nových AS-SET, které odkazují na váš AS.'],
    pdb: ['Přihlaste se na peeringdb.com a otevřete záznam své sítě (Network).', 'Do pole „IRR as-set/route-set” zadejte svůj AS-SET včetně zdroje, např. RIPE::AS64496:AS-ZAKAZNICI.', 'Uložte a ověřte, že pole odpovídá aut-num.'],
    inne: []
  },
  koncowe: {
    tytul: 'Po provedení změn',
    kroki: [
      'Počkejte: ROA se k validátorům dostanou obvykle do hodiny, objekty route do filtrů operátorů za několik hodin až 48 hodin.',
      'Spusťte tento test znovu a ověřte, že kroky z plánu zmizely.',
      'Pošlete scrubbing centru seznam prefixů, AS-SET a LOA. Dohodněte způsob oznamování /24 a postup ukončení přesměrování.',
      'Otestujte přesměrování jednoho /24 mimo útok.'
    ]
  },
  loaTytul: 'Vzor LOA (v angličtině — tak ho operátoři obvykle přijímají)',
  sekcjaPoprawkiPusta: 'Ve veřejných datech není co opravit.',
  motywJasny: 'Světlý', motywCiemny: 'Tmavý', motywAria: 'Změnit barevný motiv',
  sekcjaAs: 'Nastavení AS',
  sekcjaPrefiksy: 'Prefixy',
  sekcjaObiekty: 'Objekty připravené ke vložení',
  obiektyOpis: 'Návrhy na základě výsledku. Před vytvořením je zkontrolujte — maintainera (mnt-by) jsme převzali z existujících objektů.',
  sekcjaListy: 'Seznamy prefixů (bgpq4, lokální verze)',
  listyOpis: 'Vygenerované na vašem počítači nástrojem bgpq4 z vašich AS-SET. Přibližně takový filtr si z nich sestaví operátor.',
  pobierzListe: 'Stáhnout celý seznam (.txt)',
  listaObcieta: (n, m) => `Zobrazeno řádků: ${n} z ${m} — celý seznam je v souboru ke stažení.`,
  sekcjaReczne: 'Co nelze ověřit zvenčí',
  sekcjaPodstawa: 'Z čeho testy vycházejí',
  kolPrefiks: 'Prefix', kolRpki: 'RPKI', kolPodzial: 'Rozdělení na /24 (/48)', kolIrr: 'Objekt route', kolWlasciciel: 'Držitel', kolUwagi: 'Poznámky',
  pokazWszystkie: (n) => `Zobrazit vše (${n})`,
  limit: (n, m) => `Podrobně analyzováno ${n} z ${m} prefixů (největší sítě analyzujeme částečně, abychom nepřetěžovali veřejné služby).`,
  drukuj: 'Tisk / PDF', json: 'Stáhnout JSON', link: 'Kopírovat odkaz na výsledek', skopiowano: 'Zkopírováno', kopiuj: 'Kopírovat',
  rpkiStan: { valid: 'valid', invalid: 'invalid', notfound: 'bez ROA', invalidLen: 'invalid (délka)', invalidAs: 'invalid (jiný AS)' },
  podzialPelny: 'všechny', podzialBrak: 'žádný', podzialCzesc: (a, b) => `${a} z ${b}`, podzialNd: 'n/a',
  irrRir: (db) => `ano (${db})`, irrBrak: 'chybí', irrNieaut: (db) => `jen ${db}`,
  wlTak: 'shoduje se', wlNie: 'jiná organizace', wlPa: 'PA od LIR', wlNd: '—',

  t: {
    asIstnieje: { ok: (n) => `AS existuje: ${n}.`, blok: 'Takový AS nebyl v registrech nalezen.' },
    ogloszenia: { ok: (a, b) => `Oznamované prefixy: IPv4 — ${a}, IPv6 — ${b}.`, blok: 'AS dnes neoznamuje žádné prefixy — není co přesměrovat. Pokud vaše prefixy oznamuje nadřazený operátor, spusťte test pro jeho AS; přesměrování bude vyžadovat jeho souhlas (LOA).' },
    abuse: { ok: (m) => `Abuse kontakt: ${m}.`, popr: 'Chybí abuse kontakt (abuse-c). Scrubbing centra a týmy CERT ho během incidentu používají; v regionu RIPE NCC je povinný.' },
    autnum: { okRir: (r) => `AS je registrován u ${r}.`, ok: 'Objekt aut-num v databázi RIPE existuje.', popr: 'V databázi RIPE chybí objekt aut-num.', info: 'AS mimo region RIPE NCC — aut-num a AS-SET ověřte v databázi svého RIR.' },
    eksport: { ok: (s) => `Exportní politika odkazuje na AS-SET: ${s}.`, zal: 'aut-num neuvádí AS-SET v řádcích export/mp-export. Scrubbing centrum sestaví filtr z AS-SET, nebo jen z AS — u sítí s downstreamy je AS-SET nezbytný.' },
    asset: { ok: (s, z) => `${s} (registr ${z}) obsahuje váš AS.`, nieaut: (s, z) => `${s} existuje jen v ${z}. Mnoho operátorů uznává pouze sady z databází RIR.`, zadnego: 'AS-SET nebyl nalezen v aut-num ani v PeeringDB. Bez něj operátor sestaví filtr jen z vašeho AS — u sítí s downstreamy to nestačí.', popr: (s) => `${s} neobsahuje váš AS — filtr sestavený z této sady vaše prefixy vynechá.`, brak: (s) => `${s} nebyl v databázi RIPE nalezen. Sadu v RADB nebo jiném neautoritativním registru mnoho operátorů neuzná.` },
    assetHier: { ok: (s) => `${s} má hierarchický název.`, zal: (s) => `${s} má krátký název. Nové sady se zakládají s prefixem AS (např. AS64496:AS-ZAKAZNICI, RFC 2622) — to chrání před zneužitím názvu v jiných registrech.` },
    pdb: { ok: (s) => `PeeringDB: záznam existuje, AS-SET ${s}.`, zal: 'Chybí záznam v PeeringDB nebo je pole AS-SET prázdné. Mnoho operátorů sestavuje filtry z AS-SET v PeeringDB.', roz: (a, b) => `AS-SET v PeeringDB (${a}) se liší od AS-SET v aut-num (${b}).` },
    upstream: { ok: (n) => `Počet nadřazených operátorů viditelných v BGP: ${n}.`, zal: (n) => `Viditelný je jen ${n} nadřazený operátor. Při jediné lince ji útok zahltí dřív, než přesměrování začne fungovat — zvažte druhou linku nebo RTBH a BGP FlowSpec u operátora.` },
    aspa: { ok: (l) => `Objekt ASPA existuje (provideři: ${l}).`, brakOp: (op) => `Objekt ASPA neobsahuje AS${op}. Po přesměrování budou sítě validující ASPA považovat cestu přes scrubbing centrum za neplatnou — přidejte AS${op} do seznamu providerů.`, info: 'Objekt ASPA chybí. Není povinný; pokud ho vytvoříte, uveďte mezi providery i AS scrubbing centra.' },
    opRoa: { ok: (op) => `ROA pro AS${op} pokrývají každý /24 (/48).`, blok: (op, n) => `Operátor oznamuje ze svého AS, ale ROA pro AS${op} nepokrývá část prefixů /24 (/48) (počet: ${n}). Sítě validující RPKI tato oznámení zahodí.` },
    nieaktualne: { zal: (l) => `Objekty route s vaším AS pro prefixy, které neoznamujete: ${l}. Zastaralé odstraňte — nepořádek v IRR ztěžuje ověření u operátora.` },
    higiena: {
      rozmiarOk: (s, n, r) => `${s} po rozvinutí obsahuje ${n} AS (zákazníci viditelní v BGP: ${r}). Velikost odpovídá síti.`,
      rozmiarSredni: (s, n, r) => `${s} po rozvinutí obsahuje ${n} AS, ale počet zákazníků viditelných v BGP je ${r}. Ověřte, zda všechny tyto AS dál oznamujete.`,
      rozmiarDuzy: (s, n, r) => `${s} po rozvinutí obsahuje ${n} AS, ale počet zákazníků viditelných v BGP je jen ${r}. Filtr sestavený z takové sady propustí únik tras od zákazníka a usnadňuje vydávání se za cizí prefixy — zmenšete sadu na svůj zákaznický kužel (customer cone).`,
      glebokosc: (s, d) => `${s} má hloubku zanoření ${d}. Rekurze se snadno vymkne kontrole — omezte ji na sady svých přímých zákazníků.`,
      skladowe: (s, l) => `Největší část ${s} tvoří: ${l}. Než AS-SET těchto zákazníků zahrnete, ověřte jejich velikost.`,
      ixp: (s, l) => `${s} obsahuje sady, které vypadají jako seznamy členů IXP nebo peerů: ${l}. Do sady zákazníků nepatří IXP ani peeři — dál je neoznamujete.`,
      nieaktualni: (s, l) => `${s} obsahuje AS, které v BGP nejsou vidět jako vaši zákazníci: ${l}. Pokud jde o zákazníky, kteří odešli, odeberte je.`,
      wlaczeniaObce: (k, l) => `Váš AS zahrnuly do svých AS-SET (jiných než seznamy peerů a IXP) sítě, se kterými není vidět vztah BGP (${k}): ${l}. Přesně tak vypadala předehra k pokusu o únos prefixů popsanému na DKNOG15. Každé takové zahrnutí umožňuje dané síti oznamovat vaše prefixy přes své nadřazené operátory navzdory filtrům IRR — prověřte je a požádejte o odebrání.`,
      wlaczeniaIxp: (k, l) => `Váš AS je v sadách peerů nebo členů IXP sítí, se kterými není vidět vztah BGP (${k}): ${l}. Obvykle jde o dokumentaci peeringu — ověřte, zda s nimi opravdu máte session. I takové sady lze zneužít k obejití filtrů.`,
      wlaczeniaNieznane: (k, l) => `Váš AS je v AS-SET s názvy bez čísla AS vlastníka (${k}): ${l}. V databázi IRR ověřte, kdo je spravuje a zda jde o vaše operátory nebo IXP.`,
      wlaczeniaOk: (k) => `Váš AS je v cizích AS-SET (počet: ${k}) — všechny patří vašim BGP sousedům nebo vám.`,
      prefiksy: (s, a, b) => `${s}: prefixy podle bgpq4 — IPv4: ${a}, IPv6: ${b}.`,
      lokalnie: 'Počet prefixů v AS-SET a hotové seznamy prefixů pro filtry (bgpq4) ukazuje verze ke stažení, spuštěná na vašem počítači.',
      bezBgpq4: 'Nástroj běží lokálně, ale bez bgpq4, takže seznamy prefixů chybí. Nainstalujte bgpq4 (Linux: apt install bgpq4, macOS: brew install bgpq4) nebo spusťte verzi v Dockeru.'
    }
  },
  p: {
    zaDlugi: (d) => `Prefix delší než /${d} — v internetu se filtruje (RFC 7454) a scrubbing centra ho nepřijmou.`,
    rpkiInvalid: 'Oznámení je dnes RPKI-invalid — sítě s ROV ho už zahazují.',
    rpkiBrak: 'Pro prefix neexistuje ROA. Některá scrubbing centra ROA vyžadují a sítě s ROV zacházejí s takovým prefixem hůř než s prefixem valid.',
    podzialBrak: (d, n) => `Po rozdělení na /${d} nebude žádný prefix RPKI-valid (prefixů /${d}: ${n}). Přesměrování části prostoru nebude fungovat.`,
    podzialCzesc: (d, a, n) => `Po rozdělení na /${d} nebude část prefixů RPKI-valid (${n - a} z ${n}).`,
    maxLen: (r, m) => `ROA ${r} má maxLength ${m}. To umožňuje vyčlenit /24, ale RFC 9319 doporučuje samostatné ROA pro oznamované prefixy — široké maxLength usnadňuje únos provozu podvržením originu.`,
    irrBrak: 'V databázi RIR chybí objekt route s vaším AS. Většina scrubbing center sestavuje filtry z IRR a prefix nepřijme.',
    irrNieaut: (db) => `Objekt route je jen v ${db}. Operátoři obvykle uznávají pouze databáze RIR (RIPE, ARIN, APNIC, AFRINIC, LACNIC).`,
    irrPod: (d, a, n) => `Objekty route pro prefixy /${d}: ${a} z ${n}. Někteří operátoři vyžadují objekt přesně pro oznamovaný prefix — vytvořte je před útokem.`,
    konflikt: (l) => `Objekty route s jiným AS: ${l}. Pokud jsou zastaralé, odstraňte je — matou filtry i ověření u operátora.`,
    konfliktInv: (l) => `Objekty route s jiným AS, které jsou v rozporu s ROA (RPKI-invalid): ${l}. Odstraňte je.`,
    as0: 'ROA s AS0 pokrývá část prefixu (RFC 6483) — tyto adresy nesmí oznamovat nikdo, ani scrubbing centrum.',
    innyRoa: (l) => `ROA pro jiné AS pokrývající prefix: ${l}. Ověřte, zda jsou ještě potřeba.`,
    wlInny: (o) => `Zdroj patří jiné organizaci (${o}) než AS. Scrubbing centrum bude požadovat LOA od držitele adresního prostoru.`,
    wlPa: (s) => `Prostor přidělený od LIR (status ${s}). Scrubbing centrum bude požadovat LOA od LIR.`,
    nadrzedny: (l) => `Méně specifický prefix oznamuje ${l}. Obvykle jde o prostor od nadřazeného operátora — k přesměrování je potřeba jeho souhlas (LOA).`,
    wszystkoOk: 'Bez připomínek.'
  },
  f: {
    roa: (p, d) => `Přidejte ROA, které umožní oznámit každý /${d} z ${p}.`,
    roaNowe: (p) => `Vytvořte ROA s vaším AS a maxLength rovným délce prefixu pro: ${p}.`,
    roaA: (n) => `Doporučená varianta (RFC 9319): samostatné ROA pro každý prefix (počet: ${n}).`,
    roaB: (p, d) => `Jednodušší varianta: maxLength ${d} v ROA pro ${p}.`,
    route: (n, d) => `Vytvořte objekty route pro prefixy /${d} (počet: ${n}).`,
    routeAgg: (p) => `Vytvořte objekt route pro ${p} s vaším AS v databázi RIR.`,
    usun: (n) => `Odstraňte nebo ověřte objekty route s jiným AS (počet: ${n}).`,
    loa: (l) => `Připravte LOA pro prefixy: ${l}.`,
    zaDlugi: (l) => `Nahraďte prefixy delší než /24 (/48): ${l}.`,
    rpki: (l) => `Opravte ROA, kvůli kterým jsou oznámení dnes invalid: ${l}.`,
    as0: (l) => `Zkontrolujte ROA s AS0 pro: ${l}.`
  },
  reczne: [
    ['LOA', 'Písemný souhlas držitele adresního prostoru (a nadřazeného operátora, pokud prefix oznamuje on) s tím, aby scrubbing centrum oznamovalo vaše prefixy.'],
    ['Tunel a MSS', 'Čistý provoz se obvykle vrací tunelem GRE nebo IPsec. Před přepnutím provozu nastavte MSS clamping (typicky 1436 pro GRE, cca 1360 pro IPsec) a ověřte výkon dekapsulace na routeru.'],
    ['Doba šíření', 'Nové ROA a objekty route se do filtrů dostanou za několik hodin až 48 hodin. Připravte je před útokem, ne až během něj.'],
    ['Oznámení a stažení', 'Dohodněte s operátorem, jak oznamovat /24 (prepend, community, potlačení oznámení do tranzitu) a jak bezpečně ukončit přesměrování — nejprve prefix oznamte sami, teprve pak ho stáhněte u operátora.'],
    ['Smyčky ve směrování', 'Pokud vám operátor posílá zpět specifičtější prefixy vašeho prostoru, odfiltrujte je na session, aby nevznikla smyčka.'],
    ['Filtrování zákazníků', 'Filtrujte trasy od zákazníků podle jejich AS-SET a objektů route a před přijetím sady ověřte její velikost. Jedinou ochranou proti úniku tras od zákazníka je právě tento filtr.'],
    ['Zkouška nanečisto', 'Otestujte přesměrování jednoho /24 mimo útok a v looking glass ověřte, že je prefix viditelný a RPKI-valid.'],
    ['RTBH', 'Kvůli RTBH (prefixy /32, community BLACKHOLE z RFC 7999) ROA nerozšiřujte — RFC 9319 §6 to výslovně nedoporučuje. Přesměrování do scrubbing centra a RTBH jsou dvě samostatné věci.']
  ],
  podstawa: [
    ['RFC 6811', 'stavy validace originu: valid, invalid, bez ROA'],
    ['RFC 9319 (BCP 185)', 'minimální ROA a maxLength; §5.1 — ROA pro služby ochrany před DDoS musí existovat před útokem; §6 — nerozšiřovat ROA kvůli RTBH'],
    ['RFC 9582', 'profil ROA'],
    ['RFC 7454 (BCP 194)', 'filtrování prefixů delších než /24 a /48, IRR jako základ filtrů'],
    ['RFC 6483', 'ROA s AS0'],
    ['RFC 2622', 'hierarchické názvy AS-SET'],
    ['RFC 9224', 'vyhledání autoritativního serveru RDAP příslušného RIR'],
    ['ASPA', 'autorizace nadřazených operátorů (IETF SIDROPS)'],
    ['ripe-705', 'povinný kontakt abuse-c v databázi RIPE'],
    ['Dokumentace RIR', 'RIPE NCC, ARIN, APNIC, AFRINIC, LACNIC: ROA, objekty route, as-set, abuse, ASPA'],
    ['MANRS', 'registrace v IRR a RPKI, aktuální kontakty; AS-SET jako popis zákaznického kužele (modul 2)'],
    ['Lasse Jarlskov (Telia Company)', '„Securing your AS-set” (BalticNOG 2025), „Prelude to a BGP hijack?” (DKNOG15): účel AS-SET, velikost, kdo vás zahrnuje'],
    ['Doug Madory, Job Snijders', '„The Scourge of Excessive AS-SETs” (2025): přerostlé AS-SET a úniky tras'],
    ['Operátoři', 'veřejná dokumentace pro zavedení služby u známých operátorů scrubbing center: minimální prefix, ROA, IRR v databázi RIR, LOA, tunel']
  ],
  podstawaLink: 'Úplný seznam zdrojů s odkazy',
  obiektRoa: 'ROA k vytvoření v RPKI portálu vašeho RIR',
  obiektRoute: 'Objekty route (RPSL)',
  stopka: 'Výsledek má pouze informativní charakter a vychází z veřejných dat v okamžiku ověření. Konečné požadavky stanovuje operátor scrubbing centra.'
};

window.RIR.cs = {
  RIPE: {
    nazwa: 'RIPE NCC',
    roa: { kroki: [
      'Přihlaste se do RPKI Dashboard (dashboard.rpki.ripe.net, také přes my.ripe.net → RPKI). Při prvním použití vytvořte Hosted CA.',
      'Záložka „ROAs” → „Create ROA” (pro dosud neoznamované prefixy) nebo „Announcements” → „Create ROA” (pro prefixy viditelné v BGP).',
      'Doporučená varianta: samostatné ROA pro každý /24 z rámečku výše, maxLength ponechte rovné délce prefixu. Jednodušší varianta: jedno ROA na agregát s maxLength 24.',
      'Potvrďte změny („Pending Changes” → „Publish”). Pokud Dashboard varuje, že ROA zneplatní viditelná oznámení, přerušte to a ověřte origin AS.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/' },
    route: { kroki: [
      'Otevřete databázi RIPE: apps.db.ripe.net → „Create an object” → route (IPv6: route6). Hotové objekty z rámečku výše můžete také vložit do „Syncupdates”.',
      'Vyplňte route, origin, mnt-by (maintainer s oprávněním k vašemu adresnímu prostoru) a source: RIPE.',
      'Potvrďte heslem nebo klíčem maintainera. Objekt route vyžaduje autorizaci držitele adresního prostoru — samotné ROA objekt route nevytvoří.'
    ], link: 'https://docs.db.ripe.net/' },
    usun: { kroki: [
      'Vyhledejte objekt v apps.db.ripe.net (Query) a zkontrolujte jeho mnt-by.',
      'Pokud je maintainer váš, zvolte „Delete object” a uveďte důvod. Pokud patří jiné firmě, požádejte ji o odstranění nebo objekt nahlaste RIPE NCC (ripe-dbm@ripe.net).'
    ], link: 'https://docs.db.ripe.net/' },
    asset: { kroki: [
      'Vytvořte objekt as-set s hierarchickým názvem, např. AS64496:AS-ZAKAZNICI — nové sady v databázi RIPE musí mít takový název.',
      'Do pole members zadejte svůj AS a AS sítí downstream.',
      'V aut-num na tuto sadu odkažte v řádcích export/mp-export (announce AS64496:AS-ZAKAZNICI) a uveďte ji v PeeringDB.'
    ], link: 'https://docs.db.ripe.net/Set-Objects/' },
    abuse: { kroki: [
      'Vytvořte objekt role s atributem abuse-mailbox.',
      'Odkažte na něj v abuse-c objektu organisation — inetnum, inet6num a aut-num ho zdědí automaticky.',
      'RIPE NCC tuto adresu každoročně ověřuje (ripe-705); odpovězte na ověřovací zprávu.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/faqs-for-abuse-c/' },
    aspa: { kroki: [
      'RPKI Dashboard → záložka ASPA → vytvořte objekt pro svůj AS.',
      'Do seznamu providerů zadejte všechny tranzitní operátory a AS scrubbing centra.'
    ], link: 'https://labs.ripe.net/author/tim_bruijnzeels/aspa-in-the-rpki-dashboard-a-new-layer-of-routing-security/' }
  },
  ARIN: {
    nazwa: 'ARIN',
    roa: { kroki: [
      'Přihlaste se do ARIN Online → Routing Security. Při prvním použití: „Sign Up for RPKI” → „Sign Up for Hosted”. Vyžaduje se smlouva RSA (u legacy zdrojů LRSA).',
      'Manage RPKI → „View Details” u organizace → RPKI: ROAs → „Create ROA”.',
      'Zadejte origin AS, prefix a maxLength. Doporučená varianta: samostatné ROA pro každý /24; jednodušší: jedno ROA na agregát s maxLength 24.',
      'Na potvrzovací obrazovce zvolte vytvoření odpovídajícího objektu route v ARIN IRR.'
    ], link: 'https://www.arin.net/resources/manage/rpki/options/hosted/' },
    route: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → vyberte Org ID → route (IPv6: route6) → „Create Object”.',
      'Zadejte prefix a origin AS. ARIN IRR nepoužívá objekty mntner — oprávnění mají Admin, Tech a Routing POC organizace.',
      'Objekty route lze vytvářet i přes REST API ARIN.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    usun: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → najděte objekt a odstraňte ho.',
      'Objekty v RADB nebo jiných registrech odstraňuje jejich maintainer — požádejte o to firmu, která je vytvořila.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    asset: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → as-set → „Create Object”.',
      'Název: AS-… nebo AS64496:AS-… (doporučen hierarchický — chrání před zneužitím názvu v jiných registrech).',
      'Zadejte členy (svůj AS a downstreamy) a uveďte tuto sadu v PeeringDB.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    abuse: { kroki: [
      'Každé Org ID musí mít Abuse POC. ARIN Online → Your Records → Point of Contact Records → „Create POC”.',
      'Admin nebo Tech POC ho připojí v Organization Identifiers → Manage.'
    ], link: 'https://www.arin.net/resources/guide/account/records/poc/' },
    aspa: { kroki: [
      'ARIN Online → Routing Security → Manage RPKI → ASPAs → „Create ASPA”.',
      'Jedno ASPA pokrývá jeden AS; přidejte tranzitní operátory a AS scrubbing centra.'
    ], link: 'https://www.arin.net/resources/manage/rpki/aspa/' }
  },
  APNIC: {
    nazwa: 'APNIC',
    roa: { kroki: [
      'Přihlaste se do MyAPNIC → Resources → Route Management.',
      'Přidejte trasu: prefix, origin AS a „Most Specific Announcement” (to je maxLength). Zaškrtněte pole ROA i whois — APNIC vytvoří současně ROA i objekt route.',
      'Doporučená varianta: samostatná trasa pro každý /24; jednodušší: agregát s MSA 24 (u whois smí být rozdíl nejvýše 8 bitů).',
      'Pokud vaše zdroje spravuje NIR (JPNIC, IDNIC, TWNIC, CNNIC, KRNIC), ROA se vytvářejí v systému tohoto NIR.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    route: { kroki: [
      'MyAPNIC → Resources → Route Management se zaškrtnutým polem whois — objekt route vznikne společně s ROA.',
      'Objekty změněné mimo MyAPNIC (webupdates, e-mail) se zobrazují jako konflikt — držte se jedné metody.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    usun: { kroki: [
      'MyAPNIC → Route Management → odstraňte trasu (odstraní ROA i objekt whois, pokud byly vytvořeny společně).',
      'Objekty jiných firem odstraňuje jejich maintainer — požádejte ho o to, nebo se obraťte na APNIC.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/' },
    asset: { kroki: [
      'V APNIC Whois musí mít nové as-set hierarchický název (AS64496:AS-…); vytváří je maintainer daného AS.',
      'Zadejte členy (svůj AS a downstreamy) a uveďte tuto sadu v PeeringDB.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/guide/as-set/' },
    abuse: { kroki: [
      'abuse-c v APNIC vzniká automaticky z objektu IRT. Úprava: MyAPNIC → Resources → IRTs.',
      'APNIC ověřuje adresu každých 6 měsíců — odpovězte na ověřovací zprávu.'
    ], link: 'https://www.apnic.net/about-apnic/service-updates/apnic-whois-database-abuse-c/' },
    aspa: { kroki: [
      'ASPA je k dispozici v MyAPNIC (sekce RPKI) a přes Registry API.',
      'Přidejte tranzitní operátory a AS scrubbing centra.'
    ], link: 'https://blog.apnic.net/2026/07/09/aspa-at-apnic-strengthening-bgp-path-validation/' }
  },
  AFRINIC: {
    nazwa: 'AFRINIC',
    roa: { kroki: [
      'Přihlaste se do MyAFRINIC (vyžaduje se certifikát BPKI nebo 2FA) → Resources → Resource Certification.',
      'Vytvořte ROA: název, origin AS, prefix, Max Length a dobu platnosti.',
      'Doporučená varianta: samostatné ROA pro každý /24; jednodušší: agregát s Max Length 24.'
    ], link: 'https://afrinic.net/support/rpki' },
    route: { kroki: [
      'MyAFRINIC → Resources → IRR → „Add Route” (IPv6: „Add Route6”).',
      'mnt-by objektu route se musí shodovat s mnt-lower v inetnum.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    usun: { kroki: [
      'MyAFRINIC → Resources → IRR → najděte objekt a odstraňte ho.',
      'Objekty jiných firem odstraňuje jejich maintainer — požádejte ho o to, nebo se obraťte na AFRINIC.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    asset: { kroki: [
      'MyAFRINIC → IRR → vytvořte as-set (název začíná AS-; doporučen hierarchický AS64496:AS-…).',
      'Zadejte členy (svůj AS a downstreamy) a uveďte tuto sadu v PeeringDB.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/create-as-set-objects' },
    abuse: { kroki: [
      'inetnum, inet6num a aut-num musí mít abuse-c s abuse-mailbox.',
      'Nastavte ho v MyAFRINIC nebo v databázi AFRINIC.'
    ], link: 'https://afrinic.net/support/how-to-publish-abuse-contact-information' },
    aspa: { kroki: [
      'Ověřte v MyAFRINIC, zda je ASPA již k dispozici — k říjnu 2026 ho AFRINIC veřejně neoznámil.',
      'Pokud ASPA vytvoříte, přidejte AS scrubbing centra.'
    ], link: 'https://afrinic.net/support/rpki' }
  },
  LACNIC: {
    nazwa: 'LACNIC',
    roa: { kroki: [
      'Přihlaste se do MiLACNIC → RPKI (model hosted).',
      'Vytvořte ROA pro prefix a origin AS. Důležité: LACNIC vytváří objekty route z ROA automaticky, jen pro prefix z ROA, bez ohledu na maxLength.',
      'Proto v LACNIC zvolte variantu se samostatným ROA pro každý /24 — pak vzniknou i objekty route pro každý /24.',
      'Přidělení z Brazílie (Registro.br / NIC.br) spravuje NIC.br v modelu delegated, nikoli MiLACNIC.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    route: { kroki: [
      'V LACNIC IRR vznikají objekty route z ROA vytvořených v MiLACNIC — vytvořte ROA pro každý prefix, který má mít objekt route.',
      'Po několika hodinách ověřte objekt na irr.lacnic.net.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    usun: { kroki: [
      'Objekty route v LACNIC IRR zmizí po odstranění odpovídajícího ROA v MiLACNIC.',
      'Objekty v RADB nebo jiných registrech odstraňuje jejich maintainer.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    asset: { kroki: [
      'MiLACNIC → IRR → vytvořte as-set (doporučen hierarchický název AS64496:AS-…).',
      'Zadejte členy (svůj AS a downstreamy) a uveďte tuto sadu v PeeringDB.'
    ], link: 'https://lacnic.zendesk.com/hc/es/categories/360002625214-Internet-Routing-Registry' },
    abuse: { kroki: [
      'inetnum a aut-num musí mít abuse-c s abuse-mailbox, ověřovaný alespoň dvakrát ročně.',
      'Nastavte ho v MiLACNIC v kontaktech organizace a zdroje — neúspěšné ověření zablokuje přístup do MiLACNIC.'
    ], link: 'https://politicas.lacnic.net/politicas/detail/id/LAC-2018-5' },
    aspa: { kroki: [
      'ASPA bylo do MiLACNIC přidáno v říjnu 2026 — najdete ho v sekci RPKI.',
      'Přidejte tranzitní operátory a AS scrubbing centra.'
    ], link: 'https://blog.lacnic.net/en/caribnog-lacnic/' }
  }
};

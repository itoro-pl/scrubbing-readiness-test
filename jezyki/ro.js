/* ITORO — Test gotowości prefiksów do scrubbing center — română */
window.NAPISY.ro = {
  tytulStrony: 'Test de pregătire a prefixelor pentru centrul de scrubbing — ITORO',
  opisStrony: 'Introduceți numărul AS și verificați dacă ROA, obiectele route, AS-SET și datele din registre permit redirecționarea traficului către un centru de scrubbing în timpul unui atac DDoS. Fără cont, direct în browser.',
  goraOpis: 'Securizăm rețele și le protejăm împotriva atacurilor DDoS.',
  pomin: 'Salt la conținut',
  nadtytul: 'Instrumente gratuite',
  h1: 'Sunt prefixele dumneavoastră pregătite pentru redirecționarea către un centru de scrubbing?',
  heroH: 'În timpul unui atac DDoS, traficul este redirecționat către un centru de scrubbing prin anunțarea unor prefixe <strong>/24</strong> (IPv6: <strong>/48</strong>) extrase din blocuri mai mari. Dacă ROA nu permit acest lucru sau obiectul route lipsește din baza de date RIR, anunțul este respins de rețelele care validează RPKI și de filtrele operatorului — exact atunci când protecția contează cel mai mult. Instrumentul verifică acest lucru pe baza datelor publice și vă spune ce trebuie corectat.',
  kartaTytul: 'Test de pregătire a prefixelor',
  wiodacy: 'Introduceți numărul AS-ului dumneavoastră. Instrumentul preia prefixele anunțate, ROA, obiectele route, AS-SET și datele deținătorului resurselor, apoi le verifică în raport cu recomandările RFC și cerințele uzuale ale centrelor de scrubbing.',
  poleAs: 'Număr AS',
  poleAsPomoc: 'de ex. 64496 sau AS64496',
  poleOperator: 'AS-ul centrului de scrubbing (opțional)',
  poleOperatorPomoc: 'Dacă îl cunoașteți, verificăm ROA și ASPA pentru acest AS.',
  poleTryb: 'Cine va anunța prefixele dumneavoastră în timpul unui atac?',
  trybKlient: 'Operatorul, cu AS-ul meu ca origine',
  trybOperator: 'Operatorul, din propriul AS',
  sprawdz: 'Verifică',
  sprawdzam: 'Se verifică…',
  czas: 'Rezultatul în câteva secunde. Browserul dumneavoastră preia datele din servicii publice (printre altele baza de date RIPE, registrele IRR și PeeringDB).',
  wersja: 'Versiunea 1.0.0 · 15 octombrie 2026',
  itoroNad: 'Instrumente oferite de ITORO',
  itoroH2: 'Îmbunătățim securitatea rețelei dumneavoastră',
  itoroP1: 'Implementăm și operăm sisteme de protecție împotriva atacurilor DDoS, în principal în rețelele operatorilor de telecomunicații și în centrele de date.',
  itoroPunkty: [
    '<strong>Detectarea atacului în 2–5 secunde</strong>, filtrare la marginea propriei rețele',
    '<strong>Redirecționare către un centru de scrubbing</strong> atunci când atacul depășește capacitatea legăturilor'
  ],
  itoroPrzycisk: 'Discutați cu noi',
  podReklama: 'Testul se bazează pe recomandările RFC și pe cerințele publicate ale operatorilor de centre de scrubbing, globali și polonezi. Folosește doar date pe care oricine le poate verifica în registre.',

  krok: {
    as: 'date AS', prefiksy: 'prefixe anunțate', roa: 'ROA și ASPA', irr: 'obiecte route (IRR)',
    autnum: 'aut-num și AS-SET', pdb: 'PeeringDB', abuse: 'contact abuse', sasiedzi: 'vecini BGP',
    wlaczenia: 'cine include AS-ul dumneavoastră în AS-SET', pref: (n, m) => `detalii prefixe (${n}/${m})`, wlasciciel: (n, m) => `deținători de resurse (${n}/${m})`, operator: 'ROA ale operatorului'
  },
  bladAs: 'Introduceți un număr AS valid (1–4294967294).',
  bladSieci: (u) => `Datele nu au putut fi preluate (${u}). Încercați din nou în scurt timp.`,
  bladCzesciowy: (u) => `Unele date nu sunt disponibile (${u}) — rezultatul poate fi incomplet.`,

  wynikDla: (as, nazwa) => `Rezultat pentru AS${as}${nazwa ? ' — ' + nazwa : ''}`,
  werdykt: { blok: 'Prefixele nu sunt pregătite pentru redirecționare', popr: 'Pregătite cu rezerve — sunt lucruri de corectat', ok: 'Prefixele sunt pregătite pentru redirecționare' },
  werdyktOpis: {
    blok: 'Cel puțin o problemă va împiedica centrul de scrubbing să anunțe prefixele dumneavoastră sau va duce la respingerea lor pe internet. Corectați-o înainte de un atac: ROA și obiectele route au nevoie de câteva ore până la două zile pentru propagare.',
    popr: 'Nimic nu blochează redirecționarea, dar unii operatori vor respinge prefixele sau vor cere corecturi la implementarea serviciului.',
    ok: 'Datele din registre permit anunțarea fiecărui prefix /24 (/48) din spațiul dumneavoastră de adrese. Ce nu poate fi verificat din exterior este listat mai jos.'
  },
  kafle: { pref: 'prefixe anunțate', gotowe: 'pregătite pentru împărțire în /24 și /48', blok: 'probleme blocante', popr: 'lucruri de corectat', zal: 'recomandări' },
  stopnie: { blok: 'Blocant', popr: 'De corectat', zal: 'Recomandare', ok: 'OK', info: 'Info' },
  sekcjaPoprawki: 'Plan de acțiune, pas cu pas',
  planOpis: (r) => `Pașii în ordinea în care merită parcurși. Fiecare are instrucțiuni pentru registrul dumneavoastră${r ? ' (' + r + ')' : ''}.`,
  jakW: (r) => `Cum se face la ${r}`,
  dokumentacja: 'Documentație',
  krokTyt: {
    dlugosc: 'Înlocuiți prefixele prea lungi', roa: 'Corectați ROA', roaOp: 'Adăugați ROA pentru centrul de scrubbing',
    aspa: 'Completați ASPA', route: 'Creați obiecte route', usun: 'Ștergeți obiectele route învechite',
    loa: 'Pregătiți o LOA', asset: 'Puneți în ordine AS-SET', wlaczenia: 'Verificați cine include AS-ul dumneavoastră în propriile AS-SET', abuse: 'Setați contactul abuse', pdb: 'Completați PeeringDB', inne: 'Altele'
  },
  ogolne: {
    dlugosc: ['Înlocuiți prefixele mai lungi de /24 (IPv6: /48) cu prefixul /24 (/48) care le acoperă sau anunțați-le împreună cu acesta.'],
    loa: ['Întocmiți lista prefixelor din acest pas și deținătorul fiecăruia (date din baza de date RIR).', 'Cereți deținătorului spațiului de adrese — și operatorului din amonte, dacă el anunță prefixul — să semneze o LOA pe baza modelului de mai jos.', 'Operatorii acceptă de regulă LOA ca PDF pe hârtie cu antetul firmei, semnată de o persoană autorizată.'],
    asset: ['Regulă de bază: în AS-SET puneți doar ce anunțați mai departe în BGP — propria rețea și clienții dumneavoastră. Nu adăugați IXP-uri sau peeri.', 'Înainte de a include AS-SET-ul unui client, verificați-i dimensiunea; eliminați clienții care au plecat și revizuiți setul în mod regulat.'],
    wlaczenia: ['Parcurgeți lista seturilor din acest pas. Deținătorul se găsește în obiectul as-set (mnt-by, admin-c) din baza de date IRR.', 'Dacă un set aparține unei rețele cu care nu aveți o relație BGP, cereți eliminarea AS-ului dumneavoastră. Dacă nu primiți răspuns, raportați situația operatorului bazei de date IRR.', 'Publicați un ASPA cu lista operatorilor dumneavoastră din amonte — limitează uzurparea AS-ului dumneavoastră prin AS-SET-urile altor rețele.', 'Configurați o monitorizare permanentă a noilor AS-SET care fac referire la AS-ul dumneavoastră.'],
    pdb: ['Autentificați-vă pe peeringdb.com și deschideți înregistrarea rețelei dumneavoastră (Network).', 'În câmpul „IRR as-set/route-set” introduceți AS-SET-ul împreună cu sursa, de ex. RIPE::AS64496:AS-CLIENTI.', 'Salvați și verificați că valoarea corespunde cu aut-num.'],
    inne: []
  },
  koncowe: {
    tytul: 'După modificări',
    kroki: [
      'Așteptați: ROA ajung la validatori de regulă în decurs de o oră, obiectele route ajung în filtrele operatorilor în câteva ore până la 48 de ore.',
      'Rulați din nou acest test și verificați că pașii au dispărut din plan.',
      'Trimiteți centrului de scrubbing lista de prefixe, AS-SET și LOA. Stabiliți modul de anunțare a prefixelor /24 și procedura de retragere a redirecționării.',
      'Testați redirecționarea unui /24 în afara unui atac.'
    ]
  },
  loaTytul: 'Model de LOA (în engleză — așa îl acceptă de regulă operatorii)',
  sekcjaPoprawkiPusta: 'Nu este nimic de corectat în datele publice.',
  motywJasny: 'Luminos', motywCiemny: 'Întunecat', motywAria: 'Schimbă tema de culori',
  sekcjaAs: 'Setări AS',
  sekcjaPrefiksy: 'Prefixe',
  sekcjaObiekty: 'Obiecte gata de lipit',
  obiektyOpis: 'Propuneri pe baza rezultatului. Verificați-le înainte de creare — maintainerul (mnt-by) a fost preluat din obiectele existente.',
  sekcjaReczne: 'Ce nu poate fi verificat din exterior',
  sekcjaPodstawa: 'Pe ce se bazează testele',
  kolPrefiks: 'Prefix', kolRpki: 'RPKI', kolPodzial: 'Împărțire în /24 (/48)', kolIrr: 'Obiect route', kolWlasciciel: 'Deținător', kolUwagi: 'Observații',
  pokazWszystkie: (n) => `Afișează toate (${n})`,
  limit: (n, m) => `Au fost analizate în detaliu ${n} din ${m} prefixe (rețelele foarte mari sunt analizate parțial, pentru a nu suprasolicita serviciile publice).`,
  drukuj: 'Tipărire / PDF', json: 'Descarcă JSON', link: 'Copiază linkul către rezultat', skopiowano: 'Copiat', kopiuj: 'Copiază',
  rpkiStan: { valid: 'valid', invalid: 'invalid', notfound: 'fără ROA', invalidLen: 'invalid (lungime)', invalidAs: 'invalid (alt AS)' },
  podzialPelny: 'toate', podzialBrak: 'niciunul', podzialCzesc: (a, b) => `${a} din ${b}`, podzialNd: 'n/a',
  irrRir: (db) => `da (${db})`, irrBrak: 'lipsă', irrNieaut: (db) => `doar ${db}`,
  wlTak: 'corespunde', wlNie: 'altă organizație', wlPa: 'PA de la LIR', wlNd: '—',

  t: {
    asIstnieje: { ok: (n) => `AS-ul există: ${n}.`, blok: 'Acest AS nu a fost găsit în registre.' },
    ogloszenia: { ok: (a, b) => `Prefixe anunțate: IPv4 — ${a}, IPv6 — ${b}.`, blok: 'AS-ul nu anunță astăzi niciun prefix — nu există nimic de redirecționat. Dacă prefixele dumneavoastră sunt anunțate de un operator din amonte, rulați testul pentru AS-ul acestuia; redirecționarea va necesita acordul lui (LOA).' },
    abuse: { ok: (m) => `Contact abuse: ${m}.`, popr: 'Lipsește contactul abuse (abuse-c). Centrele de scrubbing și echipele CERT îl folosesc în timpul unui incident; în regiunea RIPE NCC este obligatoriu.' },
    autnum: { okRir: (r) => `AS-ul este înregistrat la ${r}.`, ok: 'Obiectul aut-num există în baza de date RIPE.', popr: 'Lipsește obiectul aut-num din baza de date RIPE.', info: 'AS din afara regiunii RIPE NCC — verificați aut-num și AS-SET în baza de date a RIR-ului dumneavoastră.' },
    eksport: { ok: (s) => `Politica de export indică AS-SET: ${s}.`, zal: 'aut-num nu indică un AS-SET în liniile export/mp-export. Centrul de scrubbing construiește filtrul din AS-SET sau doar din AS — pentru rețele cu clienți downstream, AS-SET este necesar.' },
    asset: { ok: (s, z) => `${s} (registrul ${z}) conține AS-ul dumneavoastră.`, nieaut: (s, z) => `${s} există doar în ${z}. Mulți operatori acceptă doar seturi din bazele de date RIR.`, zadnego: 'Nu a fost găsit niciun AS-SET nici în aut-num, nici în PeeringDB. Fără el, operatorul construiește filtrul doar din AS-ul dumneavoastră — insuficient pentru rețele cu clienți downstream.', popr: (s) => `${s} nu conține AS-ul dumneavoastră — un filtru construit din acest set va omite prefixele dumneavoastră.`, brak: (s) => `${s} nu a fost găsit în baza de date RIPE. Un set din RADB sau din alt registru neautoritativ nu este acceptat de mulți operatori.` },
    assetHier: { ok: (s) => `${s} are un nume ierarhic.`, zal: (s) => `${s} are un nume scurt. Seturile noi se creează cu prefixul AS (de ex. AS64496:AS-CLIENTI, RFC 2622) — acest lucru protejează împotriva uzurpării numelui în alte registre.` },
    pdb: { ok: (s) => `PeeringDB: înregistrarea există, AS-SET ${s}.`, zal: 'Lipsește înregistrarea din PeeringDB sau câmpul AS-SET este gol. Mulți operatori construiesc filtre pe baza AS-SET din PeeringDB.', roz: (a, b) => `AS-SET din PeeringDB (${a}) diferă de AS-SET din aut-num (${b}).` },
    upstream: { ok: (n) => `Operatori din amonte vizibili în BGP: ${n}.`, zal: (n) => `Este vizibil doar ${n} operator din amonte. Cu o singură legătură, atacul o saturează înainte ca redirecționarea să intre în funcțiune — luați în considerare o a doua legătură sau RTBH și BGP FlowSpec la operator.` },
    aspa: { ok: (l) => `Obiectul ASPA există (provideri: ${l}).`, brakOp: (op) => `Obiectul ASPA nu include AS${op}. După redirecționare, calea prin centrul de scrubbing va fi considerată invalidă de rețelele care validează ASPA — adăugați AS${op} în lista de provideri.`, info: 'Lipsește obiectul ASPA. Nu este obligatoriu; dacă îl creați, includeți în listă și AS-ul centrului de scrubbing.' },
    opRoa: { ok: (op) => `ROA pentru AS${op} acoperă fiecare /24 (/48).`, blok: (op, n) => `Operatorul anunță din propriul AS, dar ROA pentru AS${op} nu acoperă o parte din prefixele /24 (/48) (număr: ${n}). Rețelele care validează RPKI vor respinge aceste anunțuri.` },
    nieaktualne: { zal: (l) => `Obiecte route cu AS-ul dumneavoastră pentru prefixe pe care nu le anunțați: ${l}. Ștergeți-le pe cele învechite — dezordinea din IRR îngreunează verificarea la operator.` },
    higiena: {
      rozmiarOk: (s, n, r) => `După expandare, ${s} cuprinde AS-uri în număr de ${n} (clienți vizibili în BGP: ${r}). Dimensiunea corespunde rețelei.`,
      rozmiarSredni: (s, n, r) => `După expandare, ${s} cuprinde AS-uri în număr de ${n}, iar numărul de clienți vizibili în BGP este ${r}. Verificați dacă le anunțați mai departe pe toate.`,
      rozmiarDuzy: (s, n, r) => `După expandare, ${s} cuprinde AS-uri în număr de ${n}, iar numărul de clienți vizibili în BGP este doar ${r}. Un filtru construit dintr-un astfel de set lasă să treacă un route leak de la un client și facilitează uzurparea prefixelor altor rețele — reduceți setul la conul dumneavoastră de clienți (customer cone).`,
      glebokosc: (s, d) => `${s} are adâncimea de imbricare ${d}. Recursivitatea scapă repede de sub control — limitați-o la seturile clienților dumneavoastră direcți.`,
      skladowe: (s, l) => `Cea mai mare parte din ${s} provine de la: ${l}. Verificați dimensiunea AS-SET-urilor acestor clienți înainte de a le include.`,
      ixp: (s, l) => `${s} conține seturi care par liste de membri IXP sau de peeri: ${l}. Un set de clienți nu trebuie să includă IXP-uri sau peeri — nu îi anunțați mai departe.`,
      nieaktualni: (s, l) => `${s} conține AS-uri care nu apar în BGP drept clienți ai dumneavoastră: ${l}. Dacă sunt clienți care au plecat, eliminați-i.`,
      wlaczeniaObce: (k, l) => `Rețele fără o relație BGP vizibilă cu dumneavoastră au inclus AS-ul dumneavoastră în AS-SET-urile lor (altele decât liste de peeri sau IXP) (${k}): ${l}. Exact așa arăta preludiul tentativei de deturnare descrise la DKNOG15. Fiecare astfel de includere permite acelei rețele să anunțe prefixele dumneavoastră prin operatorii săi din amonte, în ciuda filtrelor IRR — verificați-le și cereți eliminarea.`,
      wlaczeniaIxp: (k, l) => `AS-ul dumneavoastră se află în seturi de peeri sau de membri IXP ale unor rețele fără o relație BGP vizibilă cu dumneavoastră (${k}): ${l}. De regulă, acestea documentează peeringul — verificați dacă aveți într-adevăr o sesiune cu ele. Și astfel de seturi pot fi folosite pentru a ocoli filtrele.`,
      wlaczeniaNieznane: (k, l) => `AS-ul dumneavoastră se află în AS-SET-uri ale căror nume nu conțin numărul AS al deținătorului (${k}): ${l}. Verificați în baza de date IRR cine le administrează și dacă sunt operatorii dumneavoastră sau IXP-uri.`,
      wlaczeniaOk: (k) => `AS-ul dumneavoastră se află în AS-SET-uri ale altor rețele (număr: ${k}) — toate aparțin vecinilor dumneavoastră BGP sau chiar dumneavoastră.`
    }
  },
  p: {
    zaDlugi: (d) => `Prefix mai lung de /${d} — filtrat pe internet (RFC 7454) și neacceptat de centrele de scrubbing.`,
    rpkiInvalid: 'Anunțul este astăzi RPKI-invalid — rețelele cu ROV îl resping deja.',
    rpkiBrak: 'Nu există ROA pentru acest prefix. Unele centre de scrubbing cer ROA, iar rețelele cu ROV tratează un astfel de prefix mai prost decât unul valid.',
    podzialBrak: (d, n) => `După împărțirea în /${d}, niciun prefix nu va fi RPKI-valid (prefixe /${d}: ${n}). Redirecționarea unei părți din spațiu nu va funcționa.`,
    podzialCzesc: (d, a, n) => `După împărțirea în /${d}, o parte din prefixe nu vor fi RPKI-valid (${n - a} din ${n}).`,
    maxLen: (r, m) => `ROA ${r} are maxLength ${m}. Acest lucru permite extragerea unui /24, dar RFC 9319 recomandă ROA separate pentru prefixele anunțate — un maxLength larg facilitează deturnarea traficului prin falsificarea originii.`,
    irrBrak: 'Nu există obiect route cu AS-ul dumneavoastră în baza de date RIR. Majoritatea centrelor de scrubbing construiesc filtre din IRR și nu vor accepta prefixul.',
    irrNieaut: (db) => `Obiectul route există doar în ${db}. Operatorii acceptă de regulă doar bazele de date RIR (RIPE, ARIN, APNIC, AFRINIC, LACNIC).`,
    irrPod: (d, a, n) => `Obiecte route pentru prefixe /${d}: ${a} din ${n}. Unii operatori cer un obiect exact pentru prefixul anunțat — creați-le înainte de un atac.`,
    konflikt: (l) => `Obiecte route cu alt AS: ${l}. Dacă sunt învechite, ștergeți-le — încurcă filtrele și verificarea la operator.`,
    konfliktInv: (l) => `Obiecte route cu alt AS, în contradicție cu ROA (RPKI-invalid): ${l}. Ștergeți-le.`,
    as0: 'Un ROA cu AS0 acoperă o parte din prefix (RFC 6483) — aceste adrese nu pot fi anunțate de nimeni, nici de centrul de scrubbing.',
    innyRoa: (l) => `ROA pentru alte AS-uri care acoperă prefixul: ${l}. Verificați dacă mai sunt necesare.`,
    wlInny: (o) => `Resursa aparține altei organizații (${o}) decât AS-ul. Centrul de scrubbing va cere o LOA de la deținătorul spațiului de adrese.`,
    wlPa: (s) => `Spațiu alocat de un LIR (status ${s}). Centrul de scrubbing va cere o LOA de la LIR.`,
    nadrzedny: (l) => `Un prefix mai puțin specific este anunțat de ${l}. De regulă este spațiu de la operatorul din amonte — pentru redirecționare este necesar acordul lui (LOA).`,
    wszystkoOk: 'Fără observații.'
  },
  f: {
    roa: (p, d) => `Adăugați ROA care permit anunțarea fiecărui /${d} din ${p}.`,
    roaNowe: (p) => `Creați ROA cu AS-ul dumneavoastră și maxLength egal cu lungimea prefixului pentru: ${p}.`,
    roaA: (n) => `Varianta recomandată (RFC 9319): ROA separate pentru fiecare prefix (număr: ${n}).`,
    roaB: (p, d) => `Varianta mai simplă: maxLength ${d} în ROA pentru ${p}.`,
    route: (n, d) => `Creați obiecte route pentru prefixele /${d} (număr: ${n}).`,
    routeAgg: (p) => `Creați un obiect route pentru ${p} cu AS-ul dumneavoastră în baza de date RIR.`,
    usun: (n) => `Ștergeți sau verificați obiectele route cu alt AS (număr: ${n}).`,
    loa: (l) => `Pregătiți o LOA pentru prefixele: ${l}.`,
    zaDlugi: (l) => `Înlocuiți prefixele mai lungi de /24 (/48): ${l}.`,
    rpki: (l) => `Corectați ROA din cauza cărora anunțurile sunt astăzi invalid: ${l}.`,
    as0: (l) => `Verificați ROA cu AS0 pentru: ${l}.`
  },
  reczne: [
    ['LOA', 'Acordul scris al deținătorului spațiului de adrese (și al operatorului din amonte, dacă el anunță prefixul) ca centrul de scrubbing să anunțe prefixele dumneavoastră.'],
    ['Tunel și MSS', 'Traficul curat revine de regulă printr-un tunel GRE sau IPsec. Setați MSS clamping (de regulă 1436 pentru GRE, aproximativ 1360 pentru IPsec) înainte de a comuta traficul și verificați performanța decapsulării pe router.'],
    ['Timp de propagare', 'ROA și obiectele route noi ajung în filtre în câteva ore până la 48 de ore. Pregătiți-le înainte de un atac, nu în timpul lui.'],
    ['Anunțare și retragere', 'Stabiliți cu operatorul cum se anunță prefixele /24 (prepend, community, suprimarea anunțului către tranzit) și cum se retrage în siguranță redirecționarea — mai întâi anunțați prefixul dumneavoastră, apoi retrageți-l la operator.'],
    ['Bucle de rutare', 'Dacă operatorul vă trimite înapoi prefixe mai specifice din spațiul dumneavoastră, filtrați-le pe sesiune pentru a evita o buclă.'],
    ['Filtrarea clienților', 'Filtrați rutele clienților pe baza AS-SET-ului și a obiectelor route ale acestora și verificați dimensiunea setului înainte de a-l accepta. Acest filtru este singura barieră împotriva unui route leak de la un client.'],
    ['Test la rece', 'Testați redirecționarea unui /24 în afara unui atac și verificați într-un looking glass că prefixul este vizibil și RPKI-valid.'],
    ['RTBH', 'Nu lărgiți ROA pentru RTBH (prefixe /32, community BLACKHOLE din RFC 7999) — RFC 9319 §6 descurajează explicit acest lucru. Redirecționarea către un centru de scrubbing și RTBH sunt lucruri separate.']
  ],
  podstawa: [
    ['RFC 6811', 'stările validării originii: valid, invalid, fără ROA'],
    ['RFC 9319 (BCP 185)', 'ROA minime și maxLength; §5.1 — ROA pentru serviciile de protecție DDoS trebuie să existe înainte de atac; §6 — nu lărgiți ROA pentru RTBH'],
    ['RFC 9582', 'profilul ROA'],
    ['RFC 7454 (BCP 194)', 'filtrarea prefixelor mai lungi de /24 și /48, IRR ca bază pentru filtre'],
    ['RFC 6483', 'ROA cu AS0'],
    ['RFC 2622', 'nume ierarhice pentru AS-SET'],
    ['RFC 9224', 'găsirea serverului RDAP autoritativ al RIR-ului'],
    ['ASPA', 'autorizarea operatorilor din amonte (IETF SIDROPS)'],
    ['ripe-705', 'contact abuse-c obligatoriu în baza de date RIPE'],
    ['Documentația RIR', 'RIPE NCC, ARIN, APNIC, AFRINIC, LACNIC: ROA, obiecte route, as-set, abuse, ASPA'],
    ['MANRS', 'înregistrare în IRR și RPKI, contacte actualizate; AS-SET ca descriere a conului de clienți (modulul 2)'],
    ['Lasse Jarlskov (Telia Company)', '„Securing your AS-set” (BalticNOG 2025), „Prelude to a BGP hijack?” (DKNOG15): scopul AS-SET, dimensiunea, cine vă include'],
    ['Doug Madory, Job Snijders', '„The Scourge of Excessive AS-SETs” (2025): AS-SET supradimensionate și route leaks'],
    ['Operatori', 'documentația publică de implementare a unor operatori cunoscuți de centre de scrubbing: prefix minim, ROA, IRR într-o bază de date RIR, LOA, tunel']
  ],
  podstawaLink: 'Lista completă a surselor, cu linkuri',
  obiektRoa: 'ROA de creat în portalul RPKI al RIR-ului dumneavoastră',
  obiektRoute: 'Obiecte route (RPSL)',
  stopka: 'Rezultatul are caracter informativ și se bazează pe datele publice din momentul verificării. Cerințele finale sunt stabilite de operatorul centrului de scrubbing.'
};

window.RIR.ro = {
  RIPE: {
    nazwa: 'RIPE NCC',
    roa: { kroki: [
      'Autentificați-vă în RPKI Dashboard (dashboard.rpki.ripe.net, și prin my.ripe.net → RPKI). La prima utilizare, creați un Hosted CA.',
      'Fila „ROAs” → „Create ROA” (pentru prefixe încă neanunțate) sau „Announcements” → „Create ROA” (pentru prefixe vizibile în BGP).',
      'Varianta recomandată: câte un ROA separat pentru fiecare /24 din caseta de mai sus, cu maxLength egal cu lungimea prefixului. Varianta mai simplă: un singur ROA pe agregat, cu maxLength 24.',
      'Confirmați modificările („Pending Changes” → „Publish”). Dacă Dashboard avertizează că ROA va invalida anunțuri vizibile, opriți-vă și verificați origin AS.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/' },
    route: { kroki: [
      'Deschideți baza de date RIPE: apps.db.ripe.net → „Create an object” → route (IPv6: route6). Puteți și lipi obiectele gata făcute din caseta de mai sus în „Syncupdates”.',
      'Completați route, origin, mnt-by (un maintainer cu drepturi asupra spațiului dumneavoastră de adrese) și source: RIPE.',
      'Autorizați cu parola sau cheia maintainerului. Obiectul route necesită autorizarea deținătorului spațiului de adrese — ROA singur nu creează un obiect route.'
    ], link: 'https://docs.db.ripe.net/' },
    usun: { kroki: [
      'Căutați obiectul în apps.db.ripe.net (Query) și verificați-i mnt-by.',
      'Dacă maintainerul este al dumneavoastră, alegeți „Delete object” și indicați motivul. Dacă aparține altei firme, cereți-i să șteargă obiectul sau raportați-l la RIPE NCC (ripe-dbm@ripe.net).'
    ], link: 'https://docs.db.ripe.net/' },
    asset: { kroki: [
      'Creați un obiect as-set cu nume ierarhic, de ex. AS64496:AS-CLIENTI — seturile noi din baza de date RIPE trebuie să aibă un astfel de nume.',
      'În câmpul members introduceți AS-ul dumneavoastră și AS-urile rețelelor downstream.',
      'În aut-num, indicați acest set în liniile export/mp-export (announce AS64496:AS-CLIENTI) și introduceți-l în PeeringDB.'
    ], link: 'https://docs.db.ripe.net/Set-Objects/' },
    abuse: { kroki: [
      'Creați un obiect role cu atributul abuse-mailbox.',
      'Indicați-l în abuse-c al obiectului organisation — inetnum, inet6num și aut-num îl moștenesc automat.',
      'RIPE NCC validează adresa în fiecare an (ripe-705); răspundeți la mesajul de validare.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/faqs-for-abuse-c/' },
    aspa: { kroki: [
      'RPKI Dashboard → fila ASPA → creați un obiect pentru AS-ul dumneavoastră.',
      'În lista de provideri introduceți toți operatorii de tranzit și AS-ul centrului de scrubbing.'
    ], link: 'https://labs.ripe.net/author/tim_bruijnzeels/aspa-in-the-rpki-dashboard-a-new-layer-of-routing-security/' }
  },
  ARIN: {
    nazwa: 'ARIN',
    roa: { kroki: [
      'Autentificați-vă în ARIN Online → Routing Security. La prima utilizare: „Sign Up for RPKI” → „Sign Up for Hosted”. Este necesar un contract RSA (LRSA pentru resursele legacy).',
      'Manage RPKI → „View Details” la organizație → RPKI: ROAs → „Create ROA”.',
      'Introduceți origin AS, prefixul și maxLength. Varianta recomandată: câte un ROA separat pentru fiecare /24; mai simplă: un singur ROA pe agregat, cu maxLength 24.',
      'Pe ecranul de confirmare, alegeți crearea unui obiect route corespunzător în ARIN IRR.'
    ], link: 'https://www.arin.net/resources/manage/rpki/options/hosted/' },
    route: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → selectați Org ID → route (IPv6: route6) → „Create Object”.',
      'Introduceți prefixul și origin AS. ARIN IRR nu folosește obiecte mntner — drepturile le au Admin, Tech și Routing POC ale organizației.',
      'Obiectele route pot fi create și prin REST API-ul ARIN.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    usun: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → găsiți obiectul și ștergeți-l.',
      'Obiectele din RADB sau din alte registre sunt șterse de maintainerul lor — cereți acest lucru firmei care le-a creat.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    asset: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → as-set → „Create Object”.',
      'Nume: AS-… sau AS64496:AS-… (se recomandă cel ierarhic — protejează împotriva uzurpării numelui în alte registre).',
      'Adăugați membrii (AS-ul dumneavoastră și clienții downstream) și introduceți setul în PeeringDB.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    abuse: { kroki: [
      'Fiecare Org ID trebuie să aibă un Abuse POC. ARIN Online → Your Records → Point of Contact Records → „Create POC”.',
      'Un Admin sau Tech POC îl atașează în Organization Identifiers → Manage.'
    ], link: 'https://www.arin.net/resources/guide/account/records/poc/' },
    aspa: { kroki: [
      'ARIN Online → Routing Security → Manage RPKI → ASPAs → „Create ASPA”.',
      'Un ASPA acoperă un singur AS; adăugați operatorii de tranzit și AS-ul centrului de scrubbing.'
    ], link: 'https://www.arin.net/resources/manage/rpki/aspa/' }
  },
  APNIC: {
    nazwa: 'APNIC',
    roa: { kroki: [
      'Autentificați-vă în MyAPNIC → Resources → Route Management.',
      'Adăugați o rută: prefix, origin AS și „Most Specific Announcement” (acesta este maxLength). Bifați atât ROA, cât și whois — APNIC creează simultan ROA și obiectul route.',
      'Varianta recomandată: câte o rută separată pentru fiecare /24; mai simplă: agregatul cu MSA 24 (pentru whois diferența poate fi de cel mult 8 biți).',
      'Dacă resursele dumneavoastră sunt administrate de un NIR (JPNIC, IDNIC, TWNIC, CNNIC, KRNIC), ROA se creează în sistemul acelui NIR.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    route: { kroki: [
      'MyAPNIC → Resources → Route Management, cu whois bifat — obiectul route este creat împreună cu ROA.',
      'Obiectele modificate în afara MyAPNIC (webupdates, e-mail) sunt afișate ca un conflict — folosiți o singură metodă.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    usun: { kroki: [
      'MyAPNIC → Route Management → ștergeți ruta (se șterg ROA și obiectul whois, dacă au fost create împreună).',
      'Obiectele altor firme sunt șterse de maintainerul lor — cereți-i acest lucru sau contactați APNIC.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/' },
    asset: { kroki: [
      'În APNIC Whois, seturile as-set noi trebuie să aibă nume ierarhic (AS64496:AS-…); le creează maintainerul AS-ului respectiv.',
      'Adăugați membrii (AS-ul dumneavoastră și clienții downstream) și introduceți setul în PeeringDB.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/guide/as-set/' },
    abuse: { kroki: [
      'În APNIC, abuse-c este generat automat din obiectul IRT. Editare: MyAPNIC → Resources → IRTs.',
      'APNIC validează adresa la fiecare 6 luni — răspundeți la mesajul de validare.'
    ], link: 'https://www.apnic.net/about-apnic/service-updates/apnic-whois-database-abuse-c/' },
    aspa: { kroki: [
      'ASPA este disponibil în MyAPNIC (secțiunea RPKI) și prin Registry API.',
      'Adăugați operatorii de tranzit și AS-ul centrului de scrubbing.'
    ], link: 'https://blog.apnic.net/2026/07/09/aspa-at-apnic-strengthening-bgp-path-validation/' }
  },
  AFRINIC: {
    nazwa: 'AFRINIC',
    roa: { kroki: [
      'Autentificați-vă în MyAFRINIC (necesită certificat BPKI sau 2FA) → Resources → Resource Certification.',
      'Creați un ROA: nume, origin AS, prefix, Max Length și perioada de valabilitate.',
      'Varianta recomandată: câte un ROA separat pentru fiecare /24; mai simplă: agregatul cu Max Length 24.'
    ], link: 'https://afrinic.net/support/rpki' },
    route: { kroki: [
      'MyAFRINIC → Resources → IRR → „Add Route” (IPv6: „Add Route6”).',
      'mnt-by al obiectului route trebuie să fie identic cu mnt-lower din inetnum.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    usun: { kroki: [
      'MyAFRINIC → Resources → IRR → găsiți obiectul și ștergeți-l.',
      'Obiectele altor firme sunt șterse de maintainerul lor — cereți-i acest lucru sau contactați AFRINIC.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    asset: { kroki: [
      'MyAFRINIC → IRR → creați un as-set (numele începe cu AS-; se recomandă cel ierarhic AS64496:AS-…).',
      'Adăugați membrii (AS-ul dumneavoastră și clienții downstream) și introduceți setul în PeeringDB.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/create-as-set-objects' },
    abuse: { kroki: [
      'inetnum, inet6num și aut-num trebuie să aibă abuse-c cu abuse-mailbox.',
      'Setați-l în MyAFRINIC sau în baza de date AFRINIC.'
    ], link: 'https://afrinic.net/support/how-to-publish-abuse-contact-information' },
    aspa: { kroki: [
      'Verificați în MyAFRINIC dacă ASPA este deja disponibil — în octombrie 2026, AFRINIC nu îl anunțase public.',
      'Dacă creați un ASPA, includeți AS-ul centrului de scrubbing.'
    ], link: 'https://afrinic.net/support/rpki' }
  },
  LACNIC: {
    nazwa: 'LACNIC',
    roa: { kroki: [
      'Autentificați-vă în MiLACNIC → RPKI (model hosted).',
      'Creați un ROA pentru prefix și origin AS. Important: LACNIC generează automat obiecte route din ROA, doar pentru prefixul din ROA, ignorând maxLength.',
      'De aceea, în LACNIC alegeți varianta cu câte un ROA separat pentru fiecare /24 — astfel se creează și obiecte route pentru fiecare /24.',
      'Alocările din Brazilia (Registro.br / NIC.br) sunt gestionate de NIC.br în modelul delegated, nu în MiLACNIC.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    route: { kroki: [
      'În LACNIC IRR, obiectele route sunt generate din ROA create în MiLACNIC — creați un ROA pentru fiecare prefix care trebuie să aibă obiect route.',
      'După câteva ore, verificați obiectul pe irr.lacnic.net.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    usun: { kroki: [
      'Obiectele route din LACNIC IRR dispar după ștergerea ROA corespunzător în MiLACNIC.',
      'Obiectele din RADB sau din alte registre sunt șterse de maintainerul lor.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    asset: { kroki: [
      'MiLACNIC → IRR → creați un as-set (se recomandă numele ierarhic AS64496:AS-…).',
      'Adăugați membrii (AS-ul dumneavoastră și clienții downstream) și introduceți setul în PeeringDB.'
    ], link: 'https://lacnic.zendesk.com/hc/es/categories/360002625214-Internet-Routing-Registry' },
    abuse: { kroki: [
      'inetnum și aut-num trebuie să aibă abuse-c cu abuse-mailbox, validat de cel puțin două ori pe an.',
      'Setați-l în MiLACNIC, la contactele organizației și ale resursei — validarea eșuată blochează accesul la MiLACNIC.'
    ], link: 'https://politicas.lacnic.net/politicas/detail/id/LAC-2018-5' },
    aspa: { kroki: [
      'ASPA a fost adăugat în MiLACNIC în octombrie 2026 — căutați-l în secțiunea RPKI.',
      'Adăugați operatorii de tranzit și AS-ul centrului de scrubbing.'
    ], link: 'https://blog.lacnic.net/en/caribnog-lacnic/' }
  }
};

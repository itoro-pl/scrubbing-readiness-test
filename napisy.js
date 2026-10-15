/* ==========================================================
   ITORO — Test gotowości prefiksów do scrubbing center
   Słownik napisów: polski (pl) i angielski (en).
   Funkcje dostają wartości do wstawienia; zwracają gotowy tekst
   (HTML dozwolony tylko tam, gdzie nazwa klucza kończy się na H).
   ========================================================== */
window.NAPISY = {
pl: {
  tytulStrony: 'Test gotowości prefiksów do scrubbing center — ITORO',
  opisStrony: 'Wpisz numer AS i sprawdź, czy ROA, obiekty route, AS-SET i dane w rejestrach pozwolą przekierować ruch do scrubbing center w czasie ataku DDoS. Bez konta, w przeglądarce.',
  goraOpis: 'Zabezpieczamy sieci i chronimy je przed atakami DDoS.',
  pomin: 'Przejdź do treści',
  nadtytul: 'Darmowe narzędzia',
  h1: 'Czy Twoje prefiksy są gotowe na przekierowanie do scrubbing center?',
  heroH: 'W czasie ataku DDoS ruch przekierowuje się do scrubbing center, ogłaszając prefiksy <strong>/24</strong> (IPv6: <strong>/48</strong>) wydzielone z większych bloków. Jeżeli ROA na to nie pozwala albo w bazie RIR brakuje obiektu route, ogłoszenie zostanie odrzucone przez sieci walidujące RPKI i przez filtry operatora — dokładnie wtedy, gdy ochrona jest najbardziej potrzebna. Narzędzie sprawdza to na danych publicznych i podaje, co poprawić.',
  kartaTytul: 'Test gotowości prefiksów',
  wiodacy: 'Podaj numer swojego AS. Narzędzie pobierze ogłaszane prefiksy, ROA, obiekty route, AS-SET i dane właściciela zasobów, a potem sprawdzi je względem zaleceń RFC i typowych wymagań operatorów scrubbing center.',
  poleAs: 'Numer AS',
  poleAsPomoc: 'np. 64496 albo AS64496',
  poleOperator: 'AS operatora scrubbing center (opcjonalnie)',
  poleOperatorPomoc: 'Jeżeli go znasz — sprawdzimy ROA i ASPA dla tego AS.',
  poleTryb: 'Kto będzie ogłaszał Twoje prefiksy w czasie ataku?',
  trybKlient: 'Operator, z moim AS jako źródłem (origin)',
  trybOperator: 'Operator, ze swojego AS',
  sprawdz: 'Sprawdź',
  sprawdzam: 'Sprawdzam…',
  czas: 'Wynik w kilkanaście sekund. Dane pobiera Twoja przeglądarka z publicznych serwisów (m.in. z bazy RIPE, rejestrów IRR i PeeringDB).',
  wersja: 'Wersja 1.0.0 · 15 października 2026',
  itoroNad: 'Narzędzia udostępnia ITORO',
  itoroH2: 'Poprawiamy bezpieczeństwo Twojej sieci',
  itoroP1: 'Wdrażamy i utrzymujemy systemy ochrony przed atakami DDoS, głównie w sieciach operatorów telekomunikacyjnych i w centrach danych.',
  itoroPunkty: [
    '<strong>Wykrycie ataku w 2–5 sekund</strong>, filtrowanie na brzegu Twojej sieci',
    '<strong>Przekierowanie do scrubbing center</strong>, gdy atak przekracza przepustowość łączy'
  ],
  itoroPrzycisk: 'Porozmawiaj z nami',
  podReklama: 'Test powstał po przeglądzie zaleceń RFC i publicznych wymagań operatorów scrubbing center — globalnych i polskich. Opiera się wyłącznie na danych, które każdy może sprawdzić w rejestrach.',

  // przebieg
  krok: {
    as: 'dane AS', prefiksy: 'ogłaszane prefiksy', roa: 'ROA i ASPA', irr: 'obiekty route (IRR)',
    autnum: 'aut-num i AS-SET', pdb: 'PeeringDB', abuse: 'kontakt abuse', sasiedzi: 'sąsiedzi BGP',
    pref: (n, m) => `szczegóły prefiksów (${n}/${m})`, wlasciciel: (n, m) => `właściciele zasobów (${n}/${m})`, operator: 'ROA operatora'
  },
  bladAs: 'Wpisz poprawny numer AS (1–4294967294).',
  bladSieci: (u) => `Nie udało się pobrać danych (${u}). Spróbuj ponownie za chwilę.`,
  bladCzesciowy: (u) => `Część danych jest niedostępna (${u}) — wynik może być niepełny.`,

  // wynik
  wynikDla: (as, nazwa) => `Wynik dla AS${as}${nazwa ? ' — ' + nazwa : ''}`,
  werdykt: { blok: 'Prefiksy nie są gotowe na przekierowanie', popr: 'Gotowe z zastrzeżeniami — są rzeczy do poprawy', ok: 'Prefiksy są gotowe na przekierowanie' },
  werdyktOpis: {
    blok: 'Co najmniej jeden problem zablokuje ogłoszenie prefiksów przez scrubbing center albo spowoduje ich odrzucenie w internecie. Popraw je przed atakiem: ROA i obiekty route rozchodzą się od kilku godzin do dwóch dni.',
    popr: 'Nic nie blokuje przekierowania, ale część operatorów odrzuci prefiksy albo poprosi o poprawki przy wdrożeniu.',
    ok: 'Dane w rejestrach pozwalają ogłosić każdy prefiks /24 (/48) z Twojej przestrzeni. Zostaje część, której nie da się sprawdzić z zewnątrz — lista na dole.'
  },
  kafle: { pref: 'ogłaszanych prefiksów', gotowe: 'gotowych do podziału na /24 i /48', blok: 'problemów blokujących', popr: 'rzeczy do poprawy', zal: 'zaleceń' },
  stopnie: { blok: 'Blokuje', popr: 'Do poprawy', zal: 'Zalecenie', ok: 'OK', info: 'Info' },
  sekcjaPoprawki: 'Plan działań krok po kroku',
  planOpis: (r) => `Kroki w kolejności, w jakiej warto je wykonać. Przy każdym jest instrukcja dla Twojego rejestru${r ? ' (' + r + ')' : ''}.`,
  jakW: (r) => `Jak to zrobić w ${r}`,
  dokumentacja: 'Dokumentacja',
  krokTyt: {
    dlugosc: 'Zastąp zbyt długie prefiksy', roa: 'Popraw ROA', roaOp: 'Dodaj ROA dla operatora scrubbing center',
    aspa: 'Uzupełnij ASPA', route: 'Utwórz obiekty route', usun: 'Usuń nieaktualne obiekty route',
    loa: 'Przygotuj LOA', asset: 'Uporządkuj AS-SET', abuse: 'Ustaw kontakt abuse', pdb: 'Uzupełnij PeeringDB', inne: 'Pozostałe'
  },
  ogolne: {
    dlugosc: ['Prefiksy dłuższe niż /24 (IPv6: /48) zastąp prefiksem /24 (/48), który je obejmuje, albo ogłaszaj je razem z takim prefiksem.'],
    loa: ['Zbierz listę prefiksów z tego kroku i właściciela każdego z nich (dane z bazy RIR).', 'Poproś właściciela przestrzeni — a jeśli prefiks ogłasza operator nadrzędny, także jego — o podpisanie LOA według wzoru poniżej.', 'Operatorzy zwykle przyjmują LOA w PDF, na papierze firmowym, z podpisem osoby upoważnionej.'],
    pdb: ['Zaloguj się do peeringdb.com i otwórz rekord swojej sieci (Network).', 'W polu „IRR as-set/route-set” wpisz swój AS-SET razem ze źródłem, np. RIPE::AS64496:AS-KLIENCI.', 'Zapisz i sprawdź, czy pole zgadza się z aut-num.'],
    inne: []
  },
  koncowe: {
    tytul: 'Po zmianach',
    kroki: [
      'Odczekaj: ROA trafiają do walidatorów zwykle w ciągu godziny, obiekty route do filtrów operatorów — od kilku godzin do 48 godzin.',
      'Uruchom ten test ponownie i sprawdź, czy kroki zniknęły z planu.',
      'Prześlij operatorowi scrubbing center listę prefiksów, AS-SET i LOA. Uzgodnij sposób ogłaszania /24 i procedurę wycofania.',
      'Przetestuj przekierowanie jednego /24 poza atakiem.'
    ]
  },
  loaTytul: 'Wzór LOA (po angielsku — tak go zwykle przyjmują operatorzy)',
  sekcjaPoprawkiPusta: 'Nie ma nic do poprawienia w danych publicznych.',
  motywJasny: 'Jasny', motywCiemny: 'Ciemny', motywAria: 'Zmień motyw kolorów',
  sekcjaAs: 'Ustawienia AS',
  sekcjaPrefiksy: 'Prefiksy',
  sekcjaObiekty: 'Gotowe obiekty do wklejenia',
  obiektyOpis: 'Propozycje na podstawie wyniku. Sprawdź je przed utworzeniem — maintainera (mnt-by) przepisaliśmy z istniejących obiektów.',
  sekcjaReczne: 'Czego nie da się sprawdzić z zewnątrz',
  sekcjaPodstawa: 'Na czym opieramy testy',
  kolPrefiks: 'Prefiks', kolRpki: 'RPKI', kolPodzial: 'Podział na /24 (/48)', kolIrr: 'Obiekt route', kolWlasciciel: 'Właściciel', kolUwagi: 'Uwagi',
  pokazWszystkie: (n) => `Pokaż wszystkie (${n})`,
  limit: (n, m) => `Szczegółowo przeanalizowano ${n} z ${m} prefiksów (największe sieci analizujemy częściowo, żeby nie przeciążać serwisów publicznych).`,
  drukuj: 'Drukuj / PDF', json: 'Pobierz JSON', link: 'Kopiuj link do wyniku', skopiowano: 'Skopiowano', kopiuj: 'Kopiuj',
  rpkiStan: { valid: 'valid', invalid: 'invalid', notfound: 'brak ROA', invalidLen: 'invalid (długość)', invalidAs: 'invalid (inny AS)' },
  podzialPelny: 'wszystkie', podzialBrak: 'żaden', podzialCzesc: (a, b) => `${a} z ${b}`, podzialNd: 'n/d',
  irrRir: (db) => `jest (${db})`, irrBrak: 'brak', irrNieaut: (db) => `tylko ${db}`,
  wlTak: 'zgodny', wlNie: 'inna organizacja', wlPa: 'PA od LIR', wlNd: '—',

  // testy AS
  t: {
    asIstnieje: { ok: (n) => `AS istnieje: ${n}.`, blok: 'Nie znaleziono takiego AS w rejestrach.' },
    ogloszenia: { ok: (a, b) => `Ogłaszane prefiksy: IPv4 — ${a}, IPv6 — ${b}.`, blok: 'AS nie ogłasza dziś żadnych prefiksów — nie ma czego przekierować. Jeżeli prefiksy ogłasza operator nadrzędny, test trzeba uruchomić dla jego AS, a przekierowanie wymaga jego zgody (LOA).' },
    abuse: { ok: (m) => `Kontakt abuse: ${m}.`, popr: 'Brak kontaktu abuse (abuse-c). Operatorzy scrubbing center i zespoły CERT kontaktują się przez niego w czasie incydentu; w regionie RIPE NCC jest obowiązkowy.' },
    autnum: { okRir: (r) => `AS jest zarejestrowany w ${r}.`, ok: 'Obiekt aut-num istnieje w bazie RIPE.', popr: 'Brak obiektu aut-num w bazie RIPE.', info: 'AS spoza regionu RIPE NCC — aut-num i AS-SET sprawdź w bazie swojego RIR.' },
    eksport: { ok: (s) => `Polityka eksportu wskazuje AS-SET: ${s}.`, zal: 'aut-num nie wskazuje AS-SET w liniach export/mp-export. Operator scrubbing center buduje filtr z AS-SET albo z samego AS — przy sieciach downstream AS-SET jest konieczny.' },
    asset: { ok: (s, z) => `${s} (rejestr ${z}) zawiera Twój AS.`, nieaut: (s, z) => `${s} jest tylko w ${z}. Wielu operatorów uznaje wyłącznie zbiory z baz RIR.`, zadnego: 'Nie znaleziono AS-SET ani w aut-num, ani w PeeringDB. Bez niego operator zbuduje filtr tylko z Twojego AS — przy sieciach downstream to za mało.', popr: (s) => `${s} nie zawiera Twojego AS — filtr zbudowany z tego zbioru pominie Twoje prefiksy.`, brak: (s) => `Nie znaleziono ${s} w bazie RIPE. Zbiór w RADB lub innym rejestrze nieautorytatywnym wielu operatorów nie uzna.` },
    assetHier: { ok: (s) => `${s} ma nazwę hierarchiczną.`, zal: (s) => `${s} ma krótką nazwę. Nowe zbiory zakłada się z prefiksem AS (np. AS64496:AS-KLIENCI, RFC 2622) — to chroni przed podszyciem w innych rejestrach.` },
    pdb: { ok: (s) => `PeeringDB: wpis istnieje, AS-SET ${s}.`, zal: 'Brak wpisu w PeeringDB albo pustego pola AS-SET. Wielu operatorów buduje filtry na podstawie AS-SET z PeeringDB.', roz: (a, b) => `AS-SET w PeeringDB (${a}) różni się od AS-SET w aut-num (${b}).` },
    upstream: { ok: (n) => `Liczba operatorów nadrzędnych widocznych w BGP: ${n}.`, zal: (n) => `Widoczny tylko ${n} operator nadrzędny. Przy jednym łączu atak wysyca je, zanim przekierowanie zacznie działać — warto mieć drugie łącze albo zgodę operatora na RTBH i BGP FlowSpec.` },
    aspa: { ok: (l) => `Obiekt ASPA istnieje (providerzy: ${l}).`, brakOp: (op) => `Obiekt ASPA nie zawiera AS${op}. Po przekierowaniu ścieżka przez scrubbing center będzie uznana za nieprawidłową przez sieci walidujące ASPA — dodaj AS${op} do listy providerów.`, info: 'Brak obiektu ASPA. Nie jest wymagany; jeżeli go dodasz, umieść na liście także AS operatora scrubbing center.' },
    opRoa: { ok: (op) => `ROA dla AS${op} obejmują każdy /24 (/48).`, blok: (op, n) => `Operator ogłasza ze swojego AS, a ROA dla AS${op} nie obejmuje części prefiksów /24 (/48) (liczba: ${n}). Sieci walidujące RPKI odrzucą te ogłoszenia.` },
    nieaktualne: { zal: (l) => `Obiekty route z Twoim AS dla prefiksów, których nie ogłaszasz: ${l}. Usuń nieaktualne — bałagan w IRR utrudnia weryfikację u operatora.` }
  },
  // testy prefiksów
  p: {
    zaDlugi: (d) => `Prefiks dłuższy niż /${d} — w internecie jest filtrowany (RFC 7454), a operatorzy scrubbing center go nie przyjmą.`,
    rpkiInvalid: 'Ogłoszenie jest dziś RPKI-invalid — sieci z ROV już je odrzucają.',
    rpkiBrak: 'Brak ROA dla prefiksu. Część operatorów scrubbing center wymaga ROA, a sieci z ROV traktują taki prefiks gorzej niż prefiks valid.',
    podzialBrak: (d, n) => `Po podziale na /${d} żaden prefiks nie będzie RPKI-valid (prefiksów /${d}: ${n}). Przekierowanie części przestrzeni nie zadziała.`,
    podzialCzesc: (d, a, n) => `Po podziale na /${d} część prefiksów nie będzie RPKI-valid (${n - a} z ${n}).`,
    maxLen: (r, m) => `ROA ${r} ma maxLength ${m}. To pozwala wydzielić /24, ale RFC 9319 zaleca osobne ROA dla ogłaszanych prefiksów — szerokie maxLength ułatwia przejęcie ruchu przez sfałszowanie źródła.`,
    irrBrak: 'Brak obiektu route z Twoim AS w bazie RIR. Większość operatorów scrubbing center buduje filtry z IRR i nie przyjmie prefiksu.',
    irrNieaut: (db) => `Obiekt route jest tylko w ${db}. Operatorzy uznają zwykle wyłącznie bazy RIR (RIPE, ARIN, APNIC, AFRINIC, LACNIC).`,
    irrPod: (d, a, n) => `Obiekty route dla prefiksów /${d}: jest ${a} z ${n}. Część operatorów wymaga obiektu dokładnie na ogłaszany prefiks — utwórz je przed atakiem.`,
    konflikt: (l) => `Obiekty route z innym AS: ${l}. Jeżeli są nieaktualne, usuń je — mylą filtry i weryfikację u operatora.`,
    konfliktInv: (l) => `Obiekty route z innym AS, niezgodne z ROA (RPKI-invalid): ${l}. Usuń je.`,
    as0: 'ROA z AS0 obejmuje część prefiksu (RFC 6483) — te adresy nie mogą być ogłaszane przez nikogo, również przez scrubbing center.',
    innyRoa: (l) => `ROA dla innych AS obejmujące prefiks: ${l}. Sprawdź, czy są potrzebne.`,
    wlInny: (o) => `Zasób należy do innej organizacji (${o}) niż AS. Operator scrubbing center poprosi o LOA od właściciela przestrzeni.`,
    wlPa: (s) => `Przestrzeń przydzielona przez LIR (status ${s}). Operator scrubbing center poprosi o LOA od LIR.`,
    nadrzedny: (l) => `Prefiks mniej szczegółowy ogłasza ${l}. To zwykle przestrzeń od operatora nadrzędnego — potrzebna jego zgoda (LOA) na przekierowanie.`,
    wszystkoOk: 'Bez uwag.'
  },
  // poprawki
  f: {
    roa: (p, d) => `Dodaj ROA, które pozwolą ogłosić każdy /${d} z ${p}.`,
    roaNowe: (p) => `Utwórz ROA z Twoim AS i maxLength równym długości prefiksu dla: ${p}.`,
    roaA: (n) => `Wariant zalecany (RFC 9319): osobne ROA dla każdego prefiksu (liczba: ${n}).`,
    roaB: (p, d) => `Wariant prostszy: maxLength ${d} na ROA dla ${p}.`,
    route: (n, d) => `Utwórz obiekty route dla prefiksów /${d} (liczba: ${n}).`,
    routeAgg: (p) => `Utwórz obiekt route dla ${p} z Twoim AS w bazie RIR.`,
    usun: (n) => `Usuń lub zweryfikuj obiekty route z innym AS (liczba: ${n}).`,
    loa: (l) => `Przygotuj LOA dla prefiksów: ${l}.`,
    zaDlugi: (l) => `Zastąp prefiksy dłuższe niż /24 (/48): ${l}.`,
    rpki: (l) => `Popraw ROA, przez które ogłoszenia są dziś invalid: ${l}.`,
    as0: (l) => `Sprawdź ROA z AS0 dla: ${l}.`
  },
  reczne: [
    ['LOA', 'Pisemna zgoda właściciela przestrzeni (i operatora nadrzędnego, jeżeli to on ogłasza prefiks) na ogłoszenie prefiksów przez operatora scrubbing center.'],
    ['Tunel i MSS', 'Czysty ruch wraca zwykle tunelem GRE lub IPsec. Ustaw MSS clamping (typowo 1436 dla GRE, ok. 1360 dla IPsec) zanim przełączysz ruch, i sprawdź wydajność dekapsulacji na routerze.'],
    ['Czas propagacji', 'Nowe ROA i obiekty route trafiają do filtrów od kilku godzin do 48 godzin. Przygotuj je przed atakiem, nie w jego trakcie.'],
    ['Ogłoszenie i wycofanie', 'Uzgodnij z operatorem, jak ogłosić /24 (prepend, community, wstrzymanie ogłoszenia do łącza tranzytowego) i jak bezpiecznie wycofać przekierowanie — najpierw ogłoś prefiks u siebie, potem wycofaj go u operatora.'],
    ['Pętle routingu', 'Jeżeli operator odsyła Ci bardziej szczegółowe prefiksy Twojej przestrzeni, odfiltruj je na sesji, żeby nie powstała pętla.'],
    ['Test na sucho', 'Przetestuj przekierowanie jednego /24 poza atakiem i sprawdź w looking glass, czy prefiks jest widoczny i RPKI-valid.'],
    ['RTBH', 'Do blokowania przez RTBH (prefiksy /32, community BLACKHOLE z RFC 7999) nie poszerzaj ROA — RFC 9319 §6 odradza to wprost. Przekierowanie do scrubbing center i RTBH to dwie osobne sprawy.']
  ],
  podstawa: [
    ['RFC 6811', 'stany walidacji pochodzenia: valid, invalid, brak ROA'],
    ['RFC 9319 (BCP 185)', 'minimalne ROA i maxLength; §5.1 — ROA dla usług ochrony DDoS muszą istnieć przed atakiem; §6 — nie poszerzać ROA pod RTBH'],
    ['RFC 9582', 'profil ROA'],
    ['RFC 7454 (BCP 194)', 'filtrowanie prefiksów dłuższych niż /24 i /48, IRR jako podstawa filtrów'],
    ['RFC 6483', 'ROA z AS0'],
    ['RFC 2622', 'hierarchiczne nazwy AS-SET'],
    ['RFC 9224', 'wyszukiwanie serwera RDAP właściwego RIR'],
    ['ASPA', 'autoryzacja operatorów nadrzędnych (IETF SIDROPS)'],
    ['ripe-705', 'obowiązkowy kontakt abuse-c w bazie RIPE'],
    ['Dokumentacja RIR', 'RIPE NCC, ARIN, APNIC, AFRINIC, LACNIC: ROA, obiekty route, as-set, abuse, ASPA'],
    ['MANRS', 'rejestracja w IRR i RPKI, aktualne kontakty'],
    ['Operatorzy', 'publiczna dokumentacja wdrożeniowa znanych operatorów scrubbing center: minimalny prefiks, ROA, IRR w bazie RIR, LOA, tunel']
  ],
  podstawaLink: 'Pełna lista źródeł z odnośnikami',
  obiektRoa: 'ROA do utworzenia w portalu RPKI Twojego RIR',
  obiektRoute: 'Obiekty route (RPSL)',
  stopka: 'Wynik ma charakter informacyjny i opiera się na danych publicznych z chwili sprawdzenia. Ostateczne wymagania ustala operator scrubbing center.'
},

en: {
  tytulStrony: 'Scrubbing centre prefix readiness test — ITORO',
  opisStrony: 'Enter your AS number to check whether ROAs, route objects, AS-SET and registry data let you divert traffic to a scrubbing centre during a DDoS attack. No account, runs in your browser.',
  goraOpis: 'We secure networks and protect them against DDoS attacks.',
  pomin: 'Skip to content',
  nadtytul: 'Free tools',
  h1: 'Are your prefixes ready to be diverted to a scrubbing centre?',
  heroH: 'During a DDoS attack traffic is diverted to a scrubbing centre by announcing <strong>/24</strong> (IPv6: <strong>/48</strong>) prefixes carved out of larger blocks. If your ROAs do not allow it, or the route object is missing from the RIR database, the announcement is dropped by RPKI-validating networks and by the operator\'s filters — exactly when protection matters most. This tool checks it against public data and tells you what to fix.',
  kartaTytul: 'Prefix readiness test',
  wiodacy: 'Enter your AS number. The tool fetches announced prefixes, ROAs, route objects, AS-SET and resource holder data, then checks them against RFC recommendations and typical scrubbing centre requirements.',
  poleAs: 'AS number',
  poleAsPomoc: 'e.g. 64496 or AS64496',
  poleOperator: 'Scrubbing centre AS (optional)',
  poleOperatorPomoc: 'If you know it, we will check ROAs and ASPA for that AS.',
  poleTryb: 'Who will announce your prefixes during an attack?',
  trybKlient: 'The operator, with my AS as origin',
  trybOperator: 'The operator, from its own AS',
  sprawdz: 'Check',
  sprawdzam: 'Checking…',
  czas: 'Results in a few seconds. Your browser fetches the data from public services (including the RIPE Database, IRR registries and PeeringDB).',
  wersja: 'Version 1.0.0 · 15 October 2026',
  itoroNad: 'Tools provided by ITORO',
  itoroH2: 'We improve the security of your network',
  itoroP1: 'We deploy and operate DDoS protection systems, mainly in telecommunications networks and data centres.',
  itoroPunkty: [
    '<strong>Attack detected in 2–5 seconds</strong>, filtering at your own network edge',
    '<strong>Diversion to a scrubbing centre</strong> when an attack exceeds your link capacity'
  ],
  itoroPrzycisk: 'Talk to us',
  podReklama: 'The test is based on RFC recommendations and on the published requirements of scrubbing centre operators, global and Polish. It uses only data anyone can check in the registries.',

  krok: {
    as: 'AS data', prefiksy: 'announced prefixes', roa: 'ROAs and ASPA', irr: 'route objects (IRR)',
    autnum: 'aut-num and AS-SET', pdb: 'PeeringDB', abuse: 'abuse contact', sasiedzi: 'BGP neighbours',
    pref: (n, m) => `prefix details (${n}/${m})`, wlasciciel: (n, m) => `resource holders (${n}/${m})`, operator: 'operator ROAs'
  },
  bladAs: 'Enter a valid AS number (1–4294967294).',
  bladSieci: (u) => `Could not fetch data (${u}). Please try again shortly.`,
  bladCzesciowy: (u) => `Some data is unavailable (${u}) — the result may be incomplete.`,

  wynikDla: (as, nazwa) => `Result for AS${as}${nazwa ? ' — ' + nazwa : ''}`,
  werdykt: { blok: 'Prefixes are not ready to be diverted', popr: 'Ready with reservations — some things need fixing', ok: 'Prefixes are ready to be diverted' },
  werdyktOpis: {
    blok: 'At least one problem will stop the scrubbing centre from announcing your prefixes or get them dropped on the internet. Fix it before an attack: ROAs and route objects take from a few hours to two days to propagate.',
    popr: 'Nothing blocks the diversion, but some operators will reject prefixes or ask for corrections during onboarding.',
    ok: 'Registry data allows every /24 (/48) of your address space to be announced. What cannot be checked from outside is listed at the bottom.'
  },
  kafle: { pref: 'announced prefixes', gotowe: 'ready to split into /24 and /48', blok: 'blocking problems', popr: 'things to fix', zal: 'recommendations' },
  stopnie: { blok: 'Blocking', popr: 'To fix', zal: 'Recommended', ok: 'OK', info: 'Info' },
  sekcjaPoprawki: 'Action plan, step by step',
  planOpis: (r) => `Steps in the order worth following. Each comes with instructions for your registry${r ? ' (' + r + ')' : ''}.`,
  jakW: (r) => `How to do it at ${r}`,
  dokumentacja: 'Documentation',
  krokTyt: {
    dlugosc: 'Replace prefixes that are too long', roa: 'Fix ROAs', roaOp: 'Add ROAs for the scrubbing centre',
    aspa: 'Complete ASPA', route: 'Create route objects', usun: 'Remove stale route objects',
    loa: 'Prepare an LOA', asset: 'Tidy up the AS-SET', abuse: 'Set the abuse contact', pdb: 'Complete PeeringDB', inne: 'Other'
  },
  ogolne: {
    dlugosc: ['Replace prefixes longer than /24 (IPv6: /48) with the covering /24 (/48), or announce them together with it.'],
    loa: ['List the prefixes from this step and the holder of each (RIR database data).', 'Ask the address holder — and the upstream, if it announces the prefix — to sign an LOA based on the template below.', 'Operators usually accept the LOA as a PDF on company letterhead, signed by an authorised person.'],
    pdb: ['Log in to peeringdb.com and open your network record.', 'In „IRR as-set/route-set”, enter your AS-SET with its source, e.g. RIPE::AS64496:AS-CUSTOMERS.', 'Save and check that it matches your aut-num.'],
    inne: []
  },
  koncowe: {
    tytul: 'After the changes',
    kroki: [
      'Wait: ROAs reach validators usually within an hour, route objects reach operator filters in a few hours to 48 hours.',
      'Run this test again and check that the steps have gone from the plan.',
      'Send the scrubbing centre your prefix list, AS-SET and LOA. Agree how /24s are announced and how diversion is withdrawn.',
      'Test diverting one /24 outside an attack.'
    ]
  },
  loaTytul: 'LOA template',
  sekcjaPoprawkiPusta: 'Nothing to fix in public data.',
  motywJasny: 'Light', motywCiemny: 'Dark', motywAria: 'Change colour theme',
  sekcjaAs: 'AS settings',
  sekcjaPrefiksy: 'Prefixes',
  sekcjaObiekty: 'Objects ready to paste',
  obiektyOpis: 'Suggestions based on the result. Review them before creating — the maintainer (mnt-by) is copied from existing objects.',
  sekcjaReczne: 'What cannot be checked from outside',
  sekcjaPodstawa: 'What the tests are based on',
  kolPrefiks: 'Prefix', kolRpki: 'RPKI', kolPodzial: 'Split into /24 (/48)', kolIrr: 'Route object', kolWlasciciel: 'Holder', kolUwagi: 'Notes',
  pokazWszystkie: (n) => `Show all (${n})`,
  limit: (n, m) => `${n} of ${m} prefixes were analysed in detail (very large networks are analysed partially to avoid overloading public services).`,
  drukuj: 'Print / PDF', json: 'Download JSON', link: 'Copy link to result', skopiowano: 'Copied', kopiuj: 'Copy',
  rpkiStan: { valid: 'valid', invalid: 'invalid', notfound: 'no ROA', invalidLen: 'invalid (length)', invalidAs: 'invalid (other AS)' },
  podzialPelny: 'all', podzialBrak: 'none', podzialCzesc: (a, b) => `${a} of ${b}`, podzialNd: 'n/a',
  irrRir: (db) => `yes (${db})`, irrBrak: 'missing', irrNieaut: (db) => `only ${db}`,
  wlTak: 'matches', wlNie: 'other organisation', wlPa: 'PA from LIR', wlNd: '—',

  t: {
    asIstnieje: { ok: (n) => `AS exists: ${n}.`, blok: 'No such AS found in the registries.' },
    ogloszenia: { ok: (a, b) => `The AS announces ${a} IPv4 and ${b} IPv6 prefixes.`, blok: 'The AS announces no prefixes today — there is nothing to divert. If an upstream announces your prefixes, run the test for its AS; diversion will need its consent (LOA).' },
    abuse: { ok: (m) => `Abuse contact: ${m}.`, popr: 'No abuse contact (abuse-c). Scrubbing centres and CERT teams use it during an incident; it is mandatory in the RIPE NCC region.' },
    autnum: { okRir: (r) => `The AS is registered with ${r}.`, ok: 'aut-num object exists in the RIPE Database.', popr: 'No aut-num object in the RIPE Database.', info: 'AS outside the RIPE NCC region — check aut-num and AS-SET in your RIR\'s database.' },
    eksport: { ok: (s) => `Export policy points to AS-SET: ${s}.`, zal: 'aut-num does not name an AS-SET in export/mp-export lines. Scrubbing centres build filters from the AS-SET or the AS alone — with downstream networks an AS-SET is required.' },
    asset: { ok: (s, z) => `${s} (registry ${z}) contains your AS.`, nieaut: (s, z) => `${s} exists only in ${z}. Many operators accept sets from RIR databases only.`, zadnego: 'No AS-SET found in aut-num or PeeringDB. Without one the operator builds a filter from your AS alone — not enough with downstream networks.', popr: (s) => `${s} does not contain your AS — a filter built from it will skip your prefixes.`, brak: (s) => `${s} not found in the RIPE Database. A set in RADB or another non-authoritative registry is not accepted by many operators.` },
    assetHier: { ok: (s) => `${s} has a hierarchical name.`, zal: (s) => `${s} has a short name. New sets should be prefixed with the AS (e.g. AS64496:AS-CUSTOMERS, RFC 2622) — this protects against impersonation in other registries.` },
    pdb: { ok: (s) => `PeeringDB: record exists, AS-SET ${s}.`, zal: 'No PeeringDB record or empty AS-SET field. Many operators build filters from the AS-SET in PeeringDB.', roz: (a, b) => `AS-SET in PeeringDB (${a}) differs from AS-SET in aut-num (${b}).` },
    upstream: { ok: (n) => `Upstreams visible in BGP: ${n}.`, zal: (n) => `Only ${n} upstream visible. With a single link the attack saturates it before diversion takes effect — consider a second link or upstream RTBH and BGP FlowSpec.` },
    aspa: { ok: (l) => `ASPA object exists (providers: ${l}).`, brakOp: (op) => `The ASPA object does not include AS${op}. After diversion the path through the scrubbing centre will be invalid for ASPA-validating networks — add AS${op} to the provider list.`, info: 'No ASPA object. It is not required; if you add one, include the scrubbing centre\'s AS as a provider.' },
    opRoa: { ok: (op) => `ROAs for AS${op} cover every /24 (/48).`, blok: (op, n) => `The operator announces from its own AS, but no ROA for AS${op} covers ${n} /24 (/48) prefixes. RPKI-validating networks will drop these announcements.` },
    nieaktualne: { zal: (l) => `Route objects with your AS for prefixes you do not announce: ${l}. Remove stale ones — clutter in the IRR complicates verification.` }
  },
  p: {
    zaDlugi: (d) => `Prefix longer than /${d} — filtered on the internet (RFC 7454) and not accepted by scrubbing centres.`,
    rpkiInvalid: 'The announcement is RPKI-invalid today — networks with ROV already drop it.',
    rpkiBrak: 'No ROA for this prefix. Some scrubbing centres require a ROA, and ROV networks treat such a prefix worse than a valid one.',
    podzialBrak: (d, n) => `None of the ${n} /${d} prefixes will be RPKI-valid. Diverting part of the space will not work.`,
    podzialCzesc: (d, a, n) => `${n - a} of ${n} /${d} prefixes will not be RPKI-valid once split out.`,
    maxLen: (r, m) => `ROA ${r} has maxLength ${m}. This allows /24 to be split out, but RFC 9319 recommends separate ROAs for announced prefixes — a broad maxLength makes forged-origin hijacks easier.`,
    irrBrak: 'No route object with your AS in a RIR database. Most scrubbing centres build filters from IRR and will not accept the prefix.',
    irrNieaut: (db) => `Route object only in ${db}. Operators usually accept RIR databases only (RIPE, ARIN, APNIC, AFRINIC, LACNIC).`,
    irrPod: (d, a, n) => `Route objects for /${d} prefixes: ${a} of ${n}. Some operators require an object for the exact announced prefix — create them before an attack.`,
    konflikt: (l) => `Route objects with another AS: ${l}. If stale, remove them — they confuse filters and operator verification.`,
    konfliktInv: (l) => `Route objects with another AS that contradict the ROA (RPKI-invalid): ${l}. Remove them.`,
    as0: 'An AS0 ROA covers part of the prefix (RFC 6483) — those addresses cannot be announced by anyone, the scrubbing centre included.',
    innyRoa: (l) => `ROAs for other ASes covering the prefix: ${l}. Check whether they are still needed.`,
    wlInny: (o) => `The resource belongs to a different organisation (${o}) than the AS. The scrubbing centre will ask for an LOA from the address holder.`,
    wlPa: (s) => `Space assigned by a LIR (status ${s}). The scrubbing centre will ask for an LOA from the LIR.`,
    nadrzedny: (l) => `A less specific prefix is announced by ${l}. This is usually upstream space — its consent (LOA) is needed for diversion.`,
    wszystkoOk: 'No remarks.'
  },
  f: {
    roa: (p, d) => `Add ROAs that allow every /${d} of ${p} to be announced.`,
    roaNowe: (p) => `Create ROAs with your AS and maxLength equal to the prefix length for: ${p}.`,
    roaA: (n) => `Recommended (RFC 9319): separate ROAs for ${n} prefixes.`,
    roaB: (p, d) => `Simpler: maxLength ${d} on the ROA for ${p}.`,
    route: (n, d) => `Create ${n} route objects for /${d} prefixes.`,
    routeAgg: (p) => `Create a route object for ${p} with your AS in a RIR database.`,
    usun: (n) => `Remove or verify ${n} route objects with another AS.`,
    loa: (l) => `Prepare an LOA for: ${l}.`,
    zaDlugi: (l) => `Replace prefixes longer than /24 (/48): ${l}.`,
    rpki: (l) => `Fix the ROAs that make these announcements invalid today: ${l}.`,
    as0: (l) => `Check the AS0 ROAs for: ${l}.`
  },
  reczne: [
    ['LOA', 'Written consent of the address holder (and of the upstream, if it announces the prefix) for the scrubbing centre to announce your prefixes.'],
    ['Tunnel and MSS', 'Clean traffic usually returns over GRE or IPsec. Set MSS clamping (typically 1436 for GRE, about 1360 for IPsec) before switching traffic, and check decapsulation performance on the router.'],
    ['Propagation time', 'New ROAs and route objects reach filters within a few hours to 48 hours. Prepare them before an attack, not during it.'],
    ['Announcement and withdrawal', 'Agree with the operator how /24s are announced (prepend, communities, suppressing the transit announcement) and how to withdraw safely — announce the prefix yourself first, then withdraw it at the operator.'],
    ['Routing loops', 'If the operator sends back more specific prefixes of your space, filter them on the session to avoid a loop.'],
    ['Dry run', 'Test diverting one /24 outside an attack and check in a looking glass that it is visible and RPKI-valid.'],
    ['RTBH', 'Do not widen ROAs for RTBH (/32 prefixes, BLACKHOLE community from RFC 7999) — RFC 9319 §6 advises against it. Diversion to a scrubbing centre and RTBH are separate matters.']
  ],
  podstawa: [
    ['RFC 6811', 'origin validation states: valid, invalid, not found'],
    ['RFC 9319 (BCP 185)', 'minimal ROAs and maxLength; §5.1 — ROAs for DDoS mitigation services must exist before the attack; §6 — do not widen ROAs for RTBH'],
    ['RFC 9582', 'ROA profile'],
    ['RFC 7454 (BCP 194)', 'filtering prefixes longer than /24 and /48, IRR as the basis for filters'],
    ['RFC 6483', 'AS0 ROAs'],
    ['RFC 2622', 'hierarchical AS-SET names'],
    ['RFC 9224', 'finding the authoritative RDAP server'],
    ['ASPA', 'upstream authorisation (IETF SIDROPS)'],
    ['ripe-705', 'mandatory abuse-c in the RIPE Database'],
    ['RIR documentation', 'RIPE NCC, ARIN, APNIC, AFRINIC, LACNIC: ROAs, route objects, as-sets, abuse, ASPA'],
    ['MANRS', 'IRR and RPKI registration, up-to-date contacts'],
    ['Operators', 'public onboarding documentation of well-known scrubbing centre operators: minimum prefix, ROA, IRR in a RIR database, LOA, tunnel']
  ],
  podstawaLink: 'Full list of sources with links',
  obiektRoa: "ROAs to create in your RIR's RPKI portal",
  obiektRoute: 'Route objects (RPSL)',
  stopka: 'The result is for information only and is based on public data at the time of the check. Final requirements are set by the scrubbing centre operator.'
}
};

/* ITORO — Test gotowości prefiksów do scrubbing center — Nederlands */
window.NAPISY.nl = {
  tytulStrony: 'Test: zijn uw prefixen klaar voor een scrubbingcentrum? — ITORO',
  opisStrony: 'Voer uw AS-nummer in en controleer of ROA\'s, route-objecten, AS-SET en registergegevens het mogelijk maken om verkeer tijdens een DDoS-aanval naar een scrubbingcentrum om te leiden. Zonder account, in uw browser.',
  goraOpis: 'Wij beveiligen netwerken en beschermen ze tegen DDoS-aanvallen.',
  pomin: 'Naar de inhoud',
  nadtytul: 'Gratis tools',
  h1: 'Zijn uw prefixen klaar om naar een scrubbingcentrum te worden omgeleid?',
  heroH: 'Tijdens een DDoS-aanval wordt verkeer naar een scrubbingcentrum omgeleid door <strong>/24</strong>-prefixen (IPv6: <strong>/48</strong>) uit grotere blokken aan te kondigen. Staan uw ROA\'s dat niet toe, of ontbreekt het route-object in de RIR-database, dan wordt de aankondiging verworpen door RPKI-validerende netwerken en door de filters van de operator — precies wanneer bescherming het hardst nodig is. Deze tool controleert dit op basis van openbare gegevens en vertelt u wat u moet aanpassen.',
  kartaTytul: 'Prefix-gereedheidstest',
  wiodacy: 'Voer uw AS-nummer in. De tool haalt aangekondigde prefixen, ROA\'s, route-objecten, AS-SET en gegevens van de resourcehouder op en toetst ze aan RFC-aanbevelingen en gangbare eisen van scrubbingcentra.',
  poleAs: 'AS-nummer',
  poleAsPomoc: 'bijv. 64496 of AS64496',
  poleOperator: 'AS van het scrubbingcentrum (optioneel)',
  poleOperatorPomoc: 'Als u het kent, controleren we ROA\'s en ASPA voor dat AS.',
  poleTryb: 'Wie kondigt uw prefixen aan tijdens een aanval?',
  trybKlient: 'De operator, met mijn AS als origin',
  trybOperator: 'De operator, vanuit zijn eigen AS',
  sprawdz: 'Controleren',
  sprawdzam: 'Bezig met controleren…',
  czas: 'Resultaat binnen enkele seconden. Uw browser haalt de gegevens op bij openbare diensten (o.a. de RIPE Database, IRR-registers en PeeringDB).',
  wersja: 'Versie 1.1.0 · 17 oktober 2026',
  itoroNad: 'Tools aangeboden door ITORO',
  itoroH2: 'Wij verbeteren de beveiliging van uw netwerk',
  itoroP1: 'Wij implementeren en beheren DDoS-beschermingssystemen, vooral in netwerken van telecomoperators en in datacenters.',
  itoroPunkty: [
    '<strong>Aanval gedetecteerd binnen 2–5 seconden</strong>, filtering aan de rand van uw eigen netwerk',
    '<strong>Omleiding naar een scrubbingcentrum</strong> wanneer een aanval de capaciteit van uw verbindingen overschrijdt'
  ],
  itoroPrzycisk: 'Neem contact op',
  podReklama: 'De test is gebaseerd op RFC-aanbevelingen en op de gepubliceerde eisen van scrubbingcentra, wereldwijd en in Polen. Hij gebruikt alleen gegevens die iedereen in de registers kan controleren.',

  krok: {
    as: 'AS-gegevens', prefiksy: 'aangekondigde prefixen', roa: 'ROA\'s en ASPA', irr: 'route-objecten (IRR)',
    autnum: 'aut-num en AS-SET', pdb: 'PeeringDB', abuse: 'abusecontact', sasiedzi: 'BGP-buren',
    listy: 'prefixlijsten (bgpq4)', wlaczenia: 'wie uw AS in AS-SETs opneemt', pref: (n, m) => `prefixdetails (${n}/${m})`, wlasciciel: (n, m) => `resourcehouders (${n}/${m})`, operator: 'ROA\'s van de operator'
  },
  bladAs: 'Voer een geldig AS-nummer in (1–4294967294).',
  bladSieci: (u) => `Gegevens konden niet worden opgehaald (${u}). Probeer het zo meteen opnieuw.`,
  bladCzesciowy: (u) => `Een deel van de gegevens is niet beschikbaar (${u}) — het resultaat kan onvolledig zijn.`,

  wynikDla: (as, nazwa) => `Resultaat voor AS${as}${nazwa ? ' — ' + nazwa : ''}`,
  werdykt: { blok: 'Prefixen zijn niet klaar voor omleiding', popr: 'Klaar met voorbehoud — er moet een en ander worden aangepast', ok: 'Prefixen zijn klaar voor omleiding' },
  werdyktOpis: {
    blok: 'Minstens één probleem verhindert dat het scrubbingcentrum uw prefixen aankondigt, of zorgt ervoor dat ze op het internet worden verworpen. Los het op vóór een aanval: ROA\'s en route-objecten hebben enkele uren tot twee dagen nodig om te propageren.',
    popr: 'Niets blokkeert de omleiding, maar sommige operators zullen prefixen weigeren of bij de onboarding om correcties vragen.',
    ok: 'De registergegevens staan toe dat elke /24 (/48) van uw adresruimte wordt aangekondigd. Wat niet van buitenaf te controleren is, staat onderaan.'
  },
  kafle: { pref: 'aangekondigde prefixen', gotowe: 'klaar om op te splitsen in /24 en /48', blok: 'blokkerende problemen', popr: 'aan te passen', zal: 'aanbevelingen' },
  stopnie: { blok: 'Blokkerend', popr: 'Aanpassen', zal: 'Aanbevolen', ok: 'OK', info: 'Info' },
  sekcjaPoprawki: 'Actieplan, stap voor stap',
  planOpis: (r) => `Stappen in de aanbevolen volgorde. Bij elke stap staan instructies voor uw register${r ? ' (' + r + ')' : ''}.`,
  jakW: (r) => `Zo doet u het bij ${r}`,
  dokumentacja: 'Documentatie',
  krokTyt: {
    dlugosc: 'Vervang te lange prefixen', roa: 'Corrigeer ROA\'s', roaOp: 'Voeg ROA\'s toe voor het scrubbingcentrum',
    aspa: 'Vul ASPA aan', route: 'Maak route-objecten aan', usun: 'Verwijder verouderde route-objecten',
    loa: 'Bereid een LOA voor', asset: 'Ruim de AS-SET op', wlaczenia: 'Controleer wie uw AS in hun AS-SETs opneemt', abuse: 'Stel het abusecontact in', pdb: 'Vul PeeringDB aan', inne: 'Overige'
  },
  ogolne: {
    dlugosc: ['Vervang prefixen langer dan /24 (IPv6: /48) door de overkoepelende /24 (/48), of kondig ze samen daarmee aan.'],
    loa: ['Maak een lijst van de prefixen uit deze stap en de houder van elk prefix (gegevens uit de RIR-database).', 'Vraag de houder van de adresruimte — en de upstream, als die het prefix aankondigt — een LOA te ondertekenen volgens het onderstaande sjabloon.', 'Operators accepteren de LOA meestal als pdf op briefpapier van het bedrijf, ondertekend door een bevoegd persoon.'],
    asset: ['Vuistregel: neem in uw AS-SET alleen op wat u in BGP doorgeeft — uzelf en uw klanten. Voeg geen IXP\'s of peers toe.', 'Controleer de omvang van de AS-SET van een klant voordat u die opneemt; verwijder vertrokken klanten en controleer de set regelmatig.'],
    wlaczenia: ['Bekijk de sets die in deze stap worden genoemd. De eigenaar staat in het as-set-object (mnt-by, admin-c) in de IRR.', 'Hoort een set bij een netwerk waarmee u geen BGP-relatie hebt, vraag dan om uw AS te verwijderen. Komt er geen antwoord, meld het dan bij de beheerder van de IRR-database.', 'Publiceer een ASPA met uw upstreams — dat beperkt misbruik van uw AS via AS-SETs van andere netwerken.', 'Zet doorlopende monitoring op van nieuwe AS-SETs die naar uw AS verwijzen.'],
    pdb: ['Log in op peeringdb.com en open het record van uw netwerk (Network).', 'Vul bij „IRR as-set/route-set” uw AS-SET met bron in, bijv. RIPE::AS64496:AS-KLANTEN.', 'Sla op en controleer of het overeenkomt met uw aut-num.'],
    inne: []
  },
  koncowe: {
    tytul: 'Na de wijzigingen',
    kroki: [
      'Wacht: ROA\'s bereiken validators meestal binnen een uur, route-objecten bereiken de filters van operators binnen enkele uren tot 48 uur.',
      'Voer deze test opnieuw uit en controleer of de stappen uit het plan zijn verdwenen.',
      'Stuur het scrubbingcentrum uw prefixlijst, AS-SET en LOA. Spreek af hoe de /24\'s worden aangekondigd en hoe de omleiding wordt ingetrokken.',
      'Test de omleiding van één /24 buiten een aanval.'
    ]
  },
  loaTytul: 'LOA-sjabloon (in het Engels — zo accepteren operators het meestal)',
  sekcjaPoprawkiPusta: 'Er valt niets aan te passen in de openbare gegevens.',
  motywJasny: 'Licht', motywCiemny: 'Donker', motywAria: 'Kleurenthema wijzigen',
  sekcjaAs: 'AS-instellingen',
  sekcjaPrefiksy: 'Prefixen',
  sekcjaObiekty: 'Objecten klaar om te plakken',
  obiektyOpis: 'Voorstellen op basis van het resultaat. Controleer ze voordat u ze aanmaakt — de maintainer (mnt-by) is overgenomen uit bestaande objecten.',
  sekcjaListy: 'Prefixlijsten (bgpq4, lokale versie)',
  listyOpis: 'Op uw computer door bgpq4 gegenereerd uit uw AS-SETs. Zo ongeveer ziet het filter eruit dat een operator ervan bouwt.',
  pobierzListe: 'Volledige lijst downloaden (.txt)',
  listaObcieta: (n, m) => `${n} van ${m} regels getoond — de volledige lijst staat in de download.`,
  sekcjaReczne: 'Wat niet van buitenaf te controleren is',
  sekcjaPodstawa: 'Waarop de tests zijn gebaseerd',
  kolPrefiks: 'Prefix', kolRpki: 'RPKI', kolPodzial: 'Opsplitsing in /24 (/48)', kolIrr: 'Route-object', kolWlasciciel: 'Houder', kolUwagi: 'Opmerkingen',
  pokazWszystkie: (n) => `Alles tonen (${n})`,
  limit: (n, m) => `${n} van de ${m} prefixen zijn in detail geanalyseerd (zeer grote netwerken worden gedeeltelijk geanalyseerd om openbare diensten niet te overbelasten).`,
  drukuj: 'Afdrukken / PDF', json: 'JSON downloaden', link: 'Link naar resultaat kopiëren', skopiowano: 'Gekopieerd', kopiuj: 'Kopiëren',
  rpkiStan: { valid: 'valid', invalid: 'invalid', notfound: 'geen ROA', invalidLen: 'invalid (lengte)', invalidAs: 'invalid (ander AS)' },
  podzialPelny: 'alle', podzialBrak: 'geen', podzialCzesc: (a, b) => `${a} van ${b}`, podzialNd: 'n.v.t.',
  irrRir: (db) => `ja (${db})`, irrBrak: 'ontbreekt', irrNieaut: (db) => `alleen ${db}`,
  wlTak: 'komt overeen', wlNie: 'andere organisatie', wlPa: 'PA van LIR', wlNd: '—',

  t: {
    asIstnieje: { ok: (n) => `AS bestaat: ${n}.`, blok: 'Dit AS is niet gevonden in de registers.' },
    ogloszenia: { ok: (a, b) => `Het AS kondigt ${a} IPv4- en ${b} IPv6-prefixen aan.`, blok: 'Het AS kondigt momenteel geen prefixen aan — er valt niets om te leiden. Als een upstream uw prefixen aankondigt, voer de test dan uit voor diens AS; voor omleiding is zijn toestemming (LOA) nodig.' },
    abuse: { ok: (m) => `Abusecontact: ${m}.`, popr: 'Geen abusecontact (abuse-c). Scrubbingcentra en CERT-teams gebruiken het tijdens een incident; in de RIPE NCC-regio is het verplicht.' },
    autnum: { okRir: (r) => `Het AS is geregistreerd bij ${r}.`, ok: 'aut-num-object bestaat in de RIPE Database.', popr: 'Geen aut-num-object in de RIPE Database.', info: 'AS buiten de RIPE NCC-regio — controleer aut-num en AS-SET in de database van uw RIR.' },
    eksport: { ok: (s) => `Het exportbeleid verwijst naar AS-SET: ${s}.`, zal: 'aut-num noemt geen AS-SET in de export/mp-export-regels. Scrubbingcentra bouwen filters op basis van de AS-SET of alleen het AS — met downstreamnetwerken is een AS-SET noodzakelijk.' },
    asset: { ok: (s, z) => `${s} (register ${z}) bevat uw AS.`, nieaut: (s, z) => `${s} bestaat alleen in ${z}. Veel operators accepteren alleen sets uit RIR-databases.`, zadnego: 'Geen AS-SET gevonden in aut-num of PeeringDB. Zonder AS-SET bouwt de operator een filter op basis van alleen uw AS — te weinig met downstreamnetwerken.', popr: (s) => `${s} bevat uw AS niet — een filter op basis daarvan slaat uw prefixen over.`, brak: (s) => `${s} niet gevonden in de RIPE Database. Een set in RADB of een ander niet-gezaghebbend register wordt door veel operators niet geaccepteerd.` },
    assetHier: { ok: (s) => `${s} heeft een hiërarchische naam.`, zal: (s) => `${s} heeft een korte naam. Nieuwe sets krijgen bij voorkeur het AS als voorvoegsel (bijv. AS64496:AS-KLANTEN, RFC 2622) — dat beschermt tegen imitatie in andere registers.` },
    pdb: { ok: (s) => `PeeringDB: record aanwezig, AS-SET ${s}.`, zal: 'Geen PeeringDB-record of leeg AS-SET-veld. Veel operators bouwen filters op basis van de AS-SET in PeeringDB.', roz: (a, b) => `AS-SET in PeeringDB (${a}) wijkt af van AS-SET in aut-num (${b}).` },
    upstream: { ok: (n) => `Upstreams zichtbaar in BGP: ${n}.`, zal: (n) => `Slechts ${n} upstream zichtbaar. Met één verbinding verzadigt de aanval die voordat de omleiding werkt — overweeg een tweede verbinding of RTBH en BGP FlowSpec bij de upstream.` },
    aspa: { ok: (l) => `ASPA-object aanwezig (providers: ${l}).`, brakOp: (op) => `Het ASPA-object bevat AS${op} niet. Na omleiding is het pad via het scrubbingcentrum ongeldig voor ASPA-validerende netwerken — voeg AS${op} toe aan de providerlijst.`, info: 'Geen ASPA-object. Het is niet verplicht; als u er een aanmaakt, neem dan ook het AS van het scrubbingcentrum op als provider.' },
    opRoa: { ok: (op) => `ROA\'s voor AS${op} dekken elke /24 (/48).`, blok: (op, n) => `De operator kondigt aan vanuit zijn eigen AS, maar voor ${n} /24-(/48-)prefixen is er geen ROA voor AS${op}. RPKI-validerende netwerken zullen deze aankondigingen verwerpen.` },
    nieaktualne: { zal: (l) => `Route-objecten met uw AS voor prefixen die u niet aankondigt: ${l}. Verwijder verouderde objecten — rommel in de IRR bemoeilijkt de verificatie.` },
    higiena: {
      rozmiarOk: (s, n, r) => `${s} wordt uitgevouwen tot ${n} AS'en (klanten zichtbaar in BGP: ${r}). De omvang past bij het netwerk.`,
      rozmiarSredni: (s, n, r) => `${s} wordt uitgevouwen tot ${n} AS'en, terwijl BGP ${r} klanten laat zien. Controleer of u ze allemaal doorgeeft.`,
      rozmiarDuzy: (s, n, r) => `${s} wordt uitgevouwen tot ${n} AS'en, terwijl BGP slechts ${r} klanten laat zien. Een filter op basis van zo'n set laat een route leak van een klant door en maakt het makkelijker om prefixen van andere netwerken te imiteren — beperk de set tot uw customer cone.`,
      glebokosc: (s, d) => `${s} is ${d} niveaus diep genest. Recursie loopt snel uit de hand — beperk die tot de sets van uw directe klanten.`,
      skladowe: (s, l) => `Het grootste deel van ${s} komt van: ${l}. Controleer de omvang van de AS-SETs van deze klanten voordat u ze opneemt.`,
      ixp: (s, l) => `${s} bevat sets die eruitzien als ledenlijsten van IXP's of peerlijsten: ${l}. Een klantenset hoort geen IXP's of peers te bevatten — die geeft u niet door.`,
      nieaktualni: (s, l) => `${s} bevat AS'en die in BGP niet als uw klanten zichtbaar zijn: ${l}. Als het vertrokken klanten zijn, verwijder ze dan.`,
      wlaczeniaObce: (k, l) => `Netwerken zonder zichtbare BGP-relatie met u hebben uw AS opgenomen in hun AS-SETs (anders dan peer- of IXP-lijsten) (${k}): ${l}. Zo zag de aanloop naar de kapingspoging eruit die op DKNOG15 werd beschreven. Elke zo'n opname stelt dat netwerk in staat uw prefixen via zijn upstreams aan te kondigen ondanks IRR-filters — controleer ze en vraag om verwijdering.`,
      wlaczeniaIxp: (k, l) => `Uw AS staat in peer- of IXP-ledensets van netwerken zonder zichtbare BGP-relatie met u (${k}): ${l}. Meestal documenteren die peering — controleer of u echt een sessie met hen hebt. Ook zulke sets kunnen worden gebruikt om filters te omzeilen.`,
      wlaczeniaNieznane: (k, l) => `Uw AS staat in AS-SETs waarvan de naam geen AS-nummer van de eigenaar bevat (${k}): ${l}. Controleer in de IRR wie ze beheert en of het uw providers of IXP's zijn.`,
      wlaczeniaOk: (k) => `Uw AS staat in ${k} AS-SETs van anderen — die horen allemaal bij uw BGP-buren of bij uzelf.`,
      prefiksy: (s, a, b) => `${s}: prefixen volgens bgpq4 — IPv4: ${a}, IPv6: ${b}.`,
      lokalnie: 'Het aantal prefixen in uw AS-SET en kant-en-klare prefixlijsten voor filters (bgpq4) ziet u in de downloadbare versie, die op uw eigen computer draait.',
      bezBgpq4: 'De tool draait lokaal, maar zonder bgpq4, dus zonder prefixlijsten. Installeer bgpq4 (Linux: apt install bgpq4, macOS: brew install bgpq4) of gebruik de Docker-versie.'
    }
  },
  p: {
    zaDlugi: (d) => `Prefix langer dan /${d} — wordt op het internet gefilterd (RFC 7454) en niet geaccepteerd door scrubbingcentra.`,
    rpkiInvalid: 'De aankondiging is momenteel RPKI-invalid — netwerken met ROV verwerpen haar al.',
    rpkiBrak: 'Geen ROA voor dit prefix. Sommige scrubbingcentra eisen een ROA, en netwerken met ROV behandelen zo\'n prefix slechter dan een valid prefix.',
    podzialBrak: (d, n) => `Geen van de ${n} /${d}-prefixen zal RPKI-valid zijn. Omleiding van een deel van de adresruimte werkt niet.`,
    podzialCzesc: (d, a, n) => `${n - a} van de ${n} /${d}-prefixen zullen na opsplitsing niet RPKI-valid zijn.`,
    maxLen: (r, m) => `ROA ${r} heeft maxLength ${m}. Dat maakt opsplitsing in /24 mogelijk, maar RFC 9319 raadt aparte ROA\'s aan voor aangekondigde prefixen — een ruime maxLength maakt hijacks met een vervalste origin eenvoudiger.`,
    irrBrak: 'Geen route-object met uw AS in een RIR-database. De meeste scrubbingcentra bouwen filters op basis van de IRR en accepteren het prefix niet.',
    irrNieaut: (db) => `Route-object alleen in ${db}. Operators accepteren meestal alleen RIR-databases (RIPE, ARIN, APNIC, AFRINIC, LACNIC).`,
    irrPod: (d, a, n) => `Route-objecten voor /${d}-prefixen: ${a} van ${n}. Sommige operators eisen een object voor precies het aangekondigde prefix — maak ze aan vóór een aanval.`,
    konflikt: (l) => `Route-objecten met een ander AS: ${l}. Verwijder ze als ze verouderd zijn — ze verstoren filters en de verificatie door de operator.`,
    konfliktInv: (l) => `Route-objecten met een ander AS die in strijd zijn met de ROA (RPKI-invalid): ${l}. Verwijder ze.`,
    as0: 'Een AS0-ROA dekt een deel van het prefix (RFC 6483) — die adressen mogen door niemand worden aangekondigd, ook niet door het scrubbingcentrum.',
    innyRoa: (l) => `ROA\'s voor andere AS\'en die het prefix dekken: ${l}. Controleer of ze nog nodig zijn.`,
    wlInny: (o) => `De resource is van een andere organisatie (${o}) dan het AS. Het scrubbingcentrum zal een LOA van de houder van de adresruimte vragen.`,
    wlPa: (s) => `Adresruimte toegewezen door een LIR (status ${s}). Het scrubbingcentrum zal een LOA van de LIR vragen.`,
    nadrzedny: (l) => `Een minder specifiek prefix wordt aangekondigd door ${l}. Meestal is dit adresruimte van de upstream — voor omleiding is zijn toestemming (LOA) nodig.`,
    wszystkoOk: 'Geen opmerkingen.'
  },
  f: {
    roa: (p, d) => `Voeg ROA\'s toe waarmee elke /${d} uit ${p} kan worden aangekondigd.`,
    roaNowe: (p) => `Maak ROA\'s aan met uw AS en een maxLength gelijk aan de prefixlengte voor: ${p}.`,
    roaA: (n) => `Aanbevolen (RFC 9319): aparte ROA\'s voor ${n} prefixen.`,
    roaB: (p, d) => `Eenvoudiger: maxLength ${d} op de ROA voor ${p}.`,
    route: (n, d) => `Maak ${n} route-objecten aan voor /${d}-prefixen.`,
    routeAgg: (p) => `Maak een route-object aan voor ${p} met uw AS in een RIR-database.`,
    usun: (n) => `Verwijder of controleer ${n} route-objecten met een ander AS.`,
    loa: (l) => `Bereid een LOA voor voor: ${l}.`,
    zaDlugi: (l) => `Vervang prefixen langer dan /24 (/48): ${l}.`,
    rpki: (l) => `Corrigeer de ROA\'s waardoor deze aankondigingen momenteel invalid zijn: ${l}.`,
    as0: (l) => `Controleer de AS0-ROA\'s voor: ${l}.`
  },
  reczne: [
    ['LOA', 'Schriftelijke toestemming van de houder van de adresruimte (en van de upstream, als die het prefix aankondigt) voor het scrubbingcentrum om uw prefixen aan te kondigen.'],
    ['Tunnel en MSS', 'Schoon verkeer komt meestal terug via GRE of IPsec. Stel MSS clamping in (doorgaans 1436 voor GRE, ca. 1360 voor IPsec) voordat u het verkeer omschakelt, en controleer de decapsulatieprestaties van de router.'],
    ['Propagatietijd', 'Nieuwe ROA\'s en route-objecten bereiken de filters binnen enkele uren tot 48 uur. Bereid ze voor vóór een aanval, niet tijdens.'],
    ['Aankondiging en intrekking', 'Spreek met de operator af hoe de /24\'s worden aangekondigd (prepend, communities, onderdrukken van de transitaankondiging) en hoe de omleiding veilig wordt ingetrokken — kondig het prefix eerst zelf aan en trek het daarna bij de operator in.'],
    ['Routinglussen', 'Als de operator meer specifieke prefixen van uw adresruimte naar u terugstuurt, filter die dan op de sessie om een lus te voorkomen.'],
    ['Filtering van klanten', 'Filter klantroutes op basis van hun AS-SET en route-objecten, en controleer de omvang van de set voordat u die accepteert. Dat filter is de enige barrière tegen een route leak van een klant.'],
    ['Proefrun', 'Test de omleiding van één /24 buiten een aanval en controleer in een looking glass of het prefix zichtbaar en RPKI-valid is.'],
    ['RTBH', 'Verruim ROA\'s niet voor RTBH (/32-prefixen, BLACKHOLE-community uit RFC 7999) — RFC 9319 §6 raadt dat uitdrukkelijk af. Omleiding naar een scrubbingcentrum en RTBH zijn twee aparte zaken.']
  ],
  podstawa: [
    ['RFC 6811', 'statussen van origin-validatie: valid, invalid, not found'],
    ['RFC 9319 (BCP 185)', 'minimale ROA\'s en maxLength; §5.1 — ROA\'s voor DDoS-mitigatiediensten moeten vóór de aanval bestaan; §6 — ROA\'s niet verruimen voor RTBH'],
    ['RFC 9582', 'ROA-profiel'],
    ['RFC 7454 (BCP 194)', 'filteren van prefixen langer dan /24 en /48, IRR als basis voor filters'],
    ['RFC 6483', 'AS0-ROA\'s'],
    ['RFC 2622', 'hiërarchische AS-SET-namen'],
    ['RFC 9224', 'vinden van de gezaghebbende RDAP-server'],
    ['ASPA', 'autorisatie van upstreams (IETF SIDROPS)'],
    ['ripe-705', 'verplichte abuse-c in de RIPE Database'],
    ['RIR-documentatie', 'RIPE NCC, ARIN, APNIC, AFRINIC, LACNIC: ROA\'s, route-objecten, as-sets, abuse, ASPA'],
    ['MANRS', 'registratie in IRR en RPKI, actuele contactgegevens; AS-SET als beschrijving van de customer cone (module 2)'],
    ['Lasse Jarlskov (Telia Company)', '„Securing your AS-set” (BalticNOG 2025), „Prelude to a BGP hijack?” (DKNOG15): doel van de AS-SET, omvang, wie u opneemt'],
    ['Doug Madory, Job Snijders', '„The Scourge of Excessive AS-SETs” (2025): te grote AS-SETs en route leaks'],
    ['Operators', 'openbare onboardingdocumentatie van bekende scrubbingcentra: minimale prefixlengte, ROA, IRR in een RIR-database, LOA, tunnel']
  ],
  podstawaLink: 'Volledige bronnenlijst met links',
  obiektRoa: 'ROA\'s om aan te maken in het RPKI-portaal van uw RIR',
  obiektRoute: 'Route-objecten (RPSL)',
  stopka: 'Het resultaat is uitsluitend informatief en gebaseerd op openbare gegevens op het moment van de controle. De definitieve eisen worden bepaald door de operator van het scrubbingcentrum.'
};

window.RIR.nl = {
  RIPE: {
    nazwa: 'RIPE NCC',
    roa: { kroki: [
      'Log in op het RPKI Dashboard (dashboard.rpki.ripe.net, ook via my.ripe.net → RPKI). Maak bij het eerste gebruik een Hosted CA aan.',
      'Tabblad „ROAs” → „Create ROA” (voor prefixen die nog niet worden aangekondigd) of „Announcements” → „Create ROA” (voor prefixen die zichtbaar zijn in BGP).',
      'Aanbevolen: een aparte ROA voor elke hierboven vermelde /24, met maxLength gelijk aan de prefixlengte. Eenvoudiger: één ROA op het aggregaat met maxLength 24.',
      'Bevestig de wijzigingen („Pending Changes” → „Publish”). Waarschuwt het Dashboard dat de ROA zichtbare aankondigingen ongeldig maakt, stop dan en controleer het origin-AS.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/' },
    route: { kroki: [
      'Open de RIPE Database: apps.db.ripe.net → „Create an object” → route (IPv6: route6). U kunt de objecten van hierboven ook plakken in „Syncupdates”.',
      'Vul route, origin, mnt-by (een maintainer met zeggenschap over uw adresruimte) en source: RIPE in.',
      'Autoriseer met het wachtwoord of de sleutel van de maintainer. Een route-object vereist autorisatie van de houder van de adresruimte — een ROA maakt er geen aan.'
    ], link: 'https://docs.db.ripe.net/' },
    usun: { kroki: [
      'Zoek het object op in apps.db.ripe.net (Query) en controleer de mnt-by.',
      'Is de maintainer van u, kies dan „Delete object” en geef een reden op. Is hij van een ander bedrijf, vraag dat bedrijf dan het object te verwijderen of meld het bij het RIPE NCC (ripe-dbm@ripe.net).'
    ], link: 'https://docs.db.ripe.net/' },
    asset: { kroki: [
      'Maak een as-set aan met een hiërarchische naam, bijv. AS64496:AS-KLANTEN — nieuwe sets in de RIPE Database moeten zo’n naam hebben.',
      'Vermeld bij members uw AS en de AS\'en van uw downstreamnetwerken.',
      'Verwijs naar de set in de export/mp-export-regels van uw aut-num (announce AS64496:AS-KLANTEN) en in PeeringDB.'
    ], link: 'https://docs.db.ripe.net/Set-Objects/' },
    abuse: { kroki: [
      'Maak een role-object aan met het attribuut abuse-mailbox.',
      'Verwijs ernaar in de abuse-c van uw organisation-object — inetnum, inet6num en aut-num nemen het automatisch over.',
      'Het RIPE NCC valideert het adres jaarlijks (ripe-705); beantwoord het validatiebericht.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/faqs-for-abuse-c/' },
    aspa: { kroki: [
      'RPKI Dashboard → tabblad ASPA → maak een object aan voor uw AS.',
      'Vermeld al uw transitproviders en het AS van het scrubbingcentrum als providers.'
    ], link: 'https://labs.ripe.net/author/tim_bruijnzeels/aspa-in-the-rpki-dashboard-a-new-layer-of-routing-security/' }
  },
  ARIN: {
    nazwa: 'ARIN',
    roa: { kroki: [
      'Log in op ARIN Online → Routing Security. Bij het eerste gebruik: „Sign Up for RPKI” → „Sign Up for Hosted”. Een RSA is vereist (LRSA voor legacy-resources).',
      'Manage RPKI → „View Details” bij uw organisatie → RPKI: ROAs → „Create ROA”.',
      'Voer het origin-AS, het prefix en de maxLength in. Aanbevolen: een aparte ROA voor elke /24; eenvoudiger: één ROA op het aggregaat met maxLength 24.',
      'Kies op het bevestigingsscherm voor het aanmaken van een bijbehorend route-object in de ARIN IRR.'
    ], link: 'https://www.arin.net/resources/manage/rpki/options/hosted/' },
    route: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → selecteer uw Org ID → route (IPv6: route6) → „Create Object”.',
      'Voer het prefix en het origin-AS in. De ARIN IRR kent geen mntner-objecten — de Admin-, Tech- en Routing-POC\'s van de organisatie hebben toegang.',
      'Route-objecten kunnen ook via de ARIN REST API worden aangemaakt.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    usun: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → zoek het object en verwijder het.',
      'Objecten in RADB of andere registers worden verwijderd door hun maintainer — vraag dit aan het bedrijf dat ze heeft aangemaakt.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    asset: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → as-set → „Create Object”.',
      'Naam: AS-… of AS64496:AS-… (hiërarchisch aanbevolen — voorkomt imitatie in andere registers).',
      'Voeg de leden toe (uw AS en downstreams) en vermeld de set in PeeringDB.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    abuse: { kroki: [
      'Elke Org ID moet een Abuse POC hebben. ARIN Online → Your Records → Point of Contact Records → „Create POC”.',
      'Een Admin- of Tech-POC koppelt hem via Organization Identifiers → Manage.'
    ], link: 'https://www.arin.net/resources/guide/account/records/poc/' },
    aspa: { kroki: [
      'ARIN Online → Routing Security → Manage RPKI → ASPAs → „Create ASPA”.',
      'Eén ASPA geldt voor één AS; voeg uw transitproviders en het AS van het scrubbingcentrum toe.'
    ], link: 'https://www.arin.net/resources/manage/rpki/aspa/' }
  },
  APNIC: {
    nazwa: 'APNIC',
    roa: { kroki: [
      'Log in op MyAPNIC → Resources → Route Management.',
      'Voeg een route toe: prefix, origin-AS en „Most Specific Announcement” (dit is de maxLength). Vink zowel ROA als whois aan — APNIC maakt de ROA en het route-object tegelijk aan.',
      'Aanbevolen: een aparte route voor elke /24; eenvoudiger: het aggregaat met MSA 24 (voor whois mag het verschil hoogstens 8 bits zijn).',
      'Worden uw resources beheerd door een NIR (JPNIC, IDNIC, TWNIC, CNNIC, KRNIC), dan maakt u ROA\'s aan in het systeem van die NIR.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    route: { kroki: [
      'MyAPNIC → Resources → Route Management met whois aangevinkt — het route-object wordt samen met de ROA aangemaakt.',
      'Objecten die buiten MyAPNIC zijn gewijzigd (webupdates, e-mail) worden als conflict getoond — houd het bij één methode.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    usun: { kroki: [
      'MyAPNIC → Route Management → verwijder de route (verwijdert de ROA en het whois-object als ze samen zijn aangemaakt).',
      'Objecten van andere bedrijven worden verwijderd door hun maintainer — vraag het hem of neem contact op met APNIC.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/' },
    asset: { kroki: [
      'In APNIC Whois moeten nieuwe as-sets een hiërarchische naam hebben (AS64496:AS-…); de maintainer van het AS maakt ze aan.',
      'Voeg de leden toe (uw AS en downstreams) en vermeld de set in PeeringDB.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/guide/as-set/' },
    abuse: { kroki: [
      'Bij APNIC wordt abuse-c gegenereerd uit het IRT-object. Bewerken: MyAPNIC → Resources → IRTs.',
      'APNIC valideert het adres elke 6 maanden — beantwoord het validatiebericht.'
    ], link: 'https://www.apnic.net/about-apnic/service-updates/apnic-whois-database-abuse-c/' },
    aspa: { kroki: [
      'ASPA is beschikbaar in MyAPNIC (sectie RPKI) en via de Registry API.',
      'Voeg uw transitproviders en het AS van het scrubbingcentrum toe.'
    ], link: 'https://blog.apnic.net/2026/07/09/aspa-at-apnic-strengthening-bgp-path-validation/' }
  },
  AFRINIC: {
    nazwa: 'AFRINIC',
    roa: { kroki: [
      'Log in op MyAFRINIC (BPKI-certificaat of 2FA vereist) → Resources → Resource Certification.',
      'Maak een ROA aan: naam, origin-AS, prefix, Max Length en geldigheidsduur.',
      'Aanbevolen: een aparte ROA voor elke /24; eenvoudiger: het aggregaat met Max Length 24.'
    ], link: 'https://afrinic.net/support/rpki' },
    route: { kroki: [
      'MyAFRINIC → Resources → IRR → „Add Route” (IPv6: „Add Route6”).',
      'De mnt-by van het route-object moet gelijk zijn aan de mnt-lower van de inetnum.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    usun: { kroki: [
      'MyAFRINIC → Resources → IRR → zoek het object en verwijder het.',
      'Objecten van andere bedrijven worden verwijderd door hun maintainer — vraag het hem of neem contact op met AFRINIC.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    asset: { kroki: [
      'MyAFRINIC → IRR → maak een as-set aan (naam begint met AS-; hiërarchisch AS64496:AS-… aanbevolen).',
      'Voeg de leden toe (uw AS en downstreams) en vermeld de set in PeeringDB.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/create-as-set-objects' },
    abuse: { kroki: [
      'inetnum, inet6num en aut-num moeten een abuse-c met een abuse-mailbox hebben.',
      'Stel het in via MyAFRINIC of in de AFRINIC-database.'
    ], link: 'https://afrinic.net/support/how-to-publish-abuse-contact-information' },
    aspa: { kroki: [
      'Controleer in MyAFRINIC of ASPA beschikbaar is — per oktober 2026 heeft AFRINIC het niet publiekelijk aangekondigd.',
      'Als u een ASPA aanmaakt, neem dan het AS van het scrubbingcentrum op.'
    ], link: 'https://afrinic.net/support/rpki' }
  },
  LACNIC: {
    nazwa: 'LACNIC',
    roa: { kroki: [
      'Log in op MiLACNIC → RPKI (hosted model).',
      'Maak een ROA aan voor het prefix en het origin-AS. Belangrijk: LACNIC genereert route-objecten automatisch uit ROA\'s, alleen voor het ROA-prefix en zonder rekening te houden met maxLength.',
      'Kies bij LACNIC daarom aparte ROA\'s voor elke /24 — dan ontstaat er ook voor elke /24 een route-object.',
      'Braziliaanse toewijzingen (Registro.br / NIC.br) worden beheerd door NIC.br in het delegated model, niet in MiLACNIC.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    route: { kroki: [
      'In de LACNIC IRR worden route-objecten gegenereerd uit ROA\'s die in MiLACNIC zijn aangemaakt — maak een ROA aan voor elk prefix dat een route-object nodig heeft.',
      'Controleer het object na enkele uren op irr.lacnic.net.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    usun: { kroki: [
      'Route-objecten in de LACNIC IRR verdwijnen zodra de bijbehorende ROA in MiLACNIC wordt verwijderd.',
      'Objecten in RADB of andere registers worden verwijderd door hun maintainer.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    asset: { kroki: [
      'MiLACNIC → IRR → maak een as-set aan (hiërarchische naam AS64496:AS-… aanbevolen).',
      'Voeg de leden toe (uw AS en downstreams) en vermeld de set in PeeringDB.'
    ], link: 'https://lacnic.zendesk.com/hc/es/categories/360002625214-Internet-Routing-Registry' },
    abuse: { kroki: [
      'inetnum en aut-num moeten een abuse-c met een abuse-mailbox hebben, die minstens twee keer per jaar wordt gevalideerd.',
      'Stel het in MiLACNIC in bij de contacten van de organisatie en de resource — mislukte validatie blokkeert de toegang tot MiLACNIC.'
    ], link: 'https://politicas.lacnic.net/politicas/detail/id/LAC-2018-5' },
    aspa: { kroki: [
      'ASPA is in oktober 2026 aan MiLACNIC toegevoegd — kijk in de sectie RPKI.',
      'Voeg uw transitproviders en het AS van het scrubbingcentrum toe.'
    ], link: 'https://blog.lacnic.net/en/caribnog-lacnic/' }
  }
};

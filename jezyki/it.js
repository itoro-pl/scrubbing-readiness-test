/* ITORO — Test gotowości prefiksów do scrubbing center — italiano */
window.NAPISY.it = {
  tytulStrony: 'Test di preparazione dei prefissi per lo scrubbing center — ITORO',
  opisStrony: 'Inserisci il numero di AS e verifica se ROA, oggetti route, AS-SET e dati di registro consentono di deviare il traffico verso uno scrubbing center durante un attacco DDoS. Senza account, direttamente nel browser.',
  goraOpis: 'Mettiamo in sicurezza le reti e le proteggiamo dagli attacchi DDoS.',
  pomin: 'Vai al contenuto',
  nadtytul: 'Strumenti gratuiti',
  h1: 'I tuoi prefissi sono pronti per essere deviati verso uno scrubbing center?',
  zakresTytul: 'Cosa controlliamo',
  zakres: ['ROA e suddivisione in /24 (/48)', 'Oggetti route nei database dei RIR', 'LOA e titolare dello spazio', 'Igiene degli AS-SET', 'Chi include il tuo AS negli AS-SET', 'ASPA', 'Contatto abuse e PeeringDB', 'Istruzioni per 5 RIR'],
  heroH: 'Durante un attacco DDoS il traffico viene deviato verso uno scrubbing center annunciando prefissi <strong>/24</strong> (IPv6: <strong>/48</strong>) ricavati da blocchi più ampi. Se i tuoi ROA non lo consentono, o se nel database del RIR manca l’oggetto route, l’annuncio viene scartato dalle reti che validano RPKI e dai filtri dell’operatore — proprio quando la protezione serve di più. Lo strumento lo verifica sui dati pubblici e indica cosa correggere.',
  kartaTytul: 'Test di preparazione dei prefissi',
  wiodacy: 'Inserisci il numero del tuo AS. Lo strumento recupera i prefissi annunciati, i ROA, gli oggetti route, l’AS-SET e i dati del titolare delle risorse, poi li confronta con le raccomandazioni RFC e con i requisiti tipici degli scrubbing center.',
  poleAs: 'Numero di AS',
  poleAsPomoc: 'es. 64496 oppure AS64496',
  poleOperator: 'AS dello scrubbing center (facoltativo)',
  poleOperatorPomoc: 'Se lo conosci, verificheremo ROA e ASPA per quell’AS.',
  poleTryb: 'Chi annuncerà i tuoi prefissi durante un attacco?',
  trybKlient: 'L’operatore, con il mio AS come origine',
  trybOperator: 'L’operatore, dal proprio AS',
  sprawdz: 'Verifica',
  sprawdzam: 'Verifica in corso…',
  czas: 'Risultato in pochi secondi. È il tuo browser a recuperare i dati da servizi pubblici (tra cui il RIPE Database, i registri IRR e PeeringDB).',
  wersja: 'Versione 1.2.0 · 19 ottobre 2026',
  itoroNad: 'Strumenti offerti da ITORO',
  itoroH2: 'Miglioriamo la sicurezza della tua rete',
  itoroP1: 'Implementiamo e gestiamo sistemi di protezione dagli attacchi DDoS, soprattutto nelle reti degli operatori di telecomunicazioni e nei data center.',
  itoroPunkty: [
    '<strong>Rilevamento dell’attacco in 2–5 secondi</strong>, filtraggio al bordo della tua rete',
    '<strong>Deviazione verso uno scrubbing center</strong> quando l’attacco supera la capacità dei tuoi collegamenti'
  ],
  itoroPrzycisk: 'Parla con noi',
  podReklama: 'Il test si basa sulle raccomandazioni RFC e sui requisiti pubblicati dagli operatori di scrubbing center, internazionali e polacchi. Usa solo dati che chiunque può verificare nei registri.',

  krok: {
    as: 'dati dell’AS', prefiksy: 'prefissi annunciati', roa: 'ROA e ASPA', irr: 'oggetti route (IRR)',
    autnum: 'aut-num e AS-SET', pdb: 'PeeringDB', abuse: 'contatto abuse', sasiedzi: 'vicini BGP',
    listy: 'liste di prefissi (bgpq4)', wlaczenia: 'chi include il tuo AS negli AS-SET', pref: (n, m) => `dettagli dei prefissi (${n}/${m})`, wlasciciel: (n, m) => `titolari delle risorse (${n}/${m})`, operator: 'ROA dell’operatore'
  },
  bladAs: 'Inserisci un numero di AS valido (1–4294967294).',
  bladSieci: (u) => `Impossibile recuperare i dati (${u}). Riprova tra poco.`,
  bladCzesciowy: (u) => `Alcuni dati non sono disponibili (${u}) — il risultato potrebbe essere incompleto.`,

  wynikDla: (as, nazwa) => `Risultato per AS${as}${nazwa ? ' — ' + nazwa : ''}`,
  werdykt: { blok: 'I prefissi non sono pronti per la deviazione', popr: 'Pronti con riserva — alcune cose vanno corrette', ok: 'I prefissi sono pronti per la deviazione' },
  werdyktOpis: {
    blok: 'Almeno un problema impedirà allo scrubbing center di annunciare i tuoi prefissi o li farà scartare su Internet. Correggilo prima di un attacco: ROA e oggetti route impiegano da qualche ora a due giorni per propagarsi.',
    popr: 'Nulla blocca la deviazione, ma alcuni operatori rifiuteranno dei prefissi o chiederanno correzioni durante l’attivazione del servizio.',
    ok: 'I dati di registro consentono di annunciare ogni /24 (/48) del tuo spazio di indirizzamento. Ciò che non si può verificare dall’esterno è elencato in fondo alla pagina.'
  },
  kafle: { pref: 'prefissi annunciati', gotowe: 'pronti per la suddivisione in /24 e /48', blok: 'problemi bloccanti', popr: 'cose da correggere', zal: 'raccomandazioni' },
  stopnie: { blok: 'Bloccante', popr: 'Da correggere', zal: 'Consigliato', ok: 'OK', info: 'Info' },
  sekcjaPoprawki: 'Piano d’azione, passo per passo',
  planOpis: (r) => `Passi nell’ordine consigliato. Per ciascuno ci sono le istruzioni per il tuo registro${r ? ' (' + r + ')' : ''}.`,
  jakW: (r) => `Come fare presso ${r}`,
  dokumentacja: 'Documentazione',
  krokTyt: {
    dlugosc: 'Sostituisci i prefissi troppo lunghi', roa: 'Correggi i ROA', roaOp: 'Aggiungi ROA per lo scrubbing center',
    aspa: 'Completa l’ASPA', route: 'Crea gli oggetti route', usun: 'Rimuovi gli oggetti route obsoleti',
    loa: 'Prepara una LOA', asset: 'Riordina l’AS-SET', wlaczenia: 'Verifica chi include il tuo AS nei propri AS-SET', abuse: 'Imposta il contatto abuse', pdb: 'Completa PeeringDB', inne: 'Altro'
  },
  ogolne: {
    dlugosc: ['Sostituisci i prefissi più lunghi di /24 (IPv6: /48) con il /24 (/48) che li contiene, oppure annunciali insieme a quest’ultimo.'],
    loa: ['Elenca i prefissi di questo passo e il titolare di ciascuno (dati del database del RIR).', 'Chiedi al titolare dello spazio di indirizzamento — e all’upstream, se è lui ad annunciare il prefisso — di firmare una LOA secondo il modello qui sotto.', 'Di solito gli operatori accettano la LOA in PDF, su carta intestata dell’azienda, firmata da una persona autorizzata.'],
    asset: ['Regola pratica: nel tuo AS-SET metti solo ciò che riannunci in BGP — te stesso e i tuoi clienti. Non aggiungere IXP né peer.', 'Prima di includere l’AS-SET di un cliente controllane la dimensione; rimuovi i clienti che se ne sono andati e rivedi il set regolarmente.'],
    wlaczenia: ['Esamina i set elencati in questo passo. Il titolare si trova nell’oggetto as-set (mnt-by, admin-c) nell’IRR.', 'Se un set appartiene a una rete con cui non hai alcuna relazione BGP, chiedi la rimozione del tuo AS. Se non risponde, segnalalo all’operatore del database IRR.', 'Pubblica un ASPA con l’elenco dei tuoi upstream — limita l’impersonificazione del tuo AS tramite gli AS-SET di altre reti.', 'Attiva un monitoraggio continuo dei nuovi AS-SET che fanno riferimento al tuo AS.'],
    aspa: ['Inserisci tutti i tuoi provider, anche quelli di backup, anche se oggi non compaiono nel percorso AS.', 'Non inserire semplici peer, a meno che uno di loro agisca per te come provider.', 'Inserisci i route server IXP non trasparenti che usi — altrimenti il loro AS viene visto come una valle nel percorso.', 'Aggiorna l’ASPA insieme all’IRR: ogni cambio di provider di transito è una modifica in entrambi i posti.'],
    pdb: ['Accedi a peeringdb.com e apri la scheda della tua rete (Network).', 'Nel campo “IRR as-set/route-set” inserisci il tuo AS-SET con la sua sorgente, es. RIPE::AS64496:AS-CLIENTI.', 'Salva e verifica che il valore corrisponda al tuo aut-num.'],
    inne: []
  },
  koncowe: {
    tytul: 'Dopo le modifiche',
    kroki: [
      'Attendi: i ROA raggiungono i validatori di solito entro un’ora, gli oggetti route arrivano nei filtri degli operatori in un intervallo che va da qualche ora a 48 ore.',
      'Esegui di nuovo questo test e verifica che i passi siano spariti dal piano.',
      'Invia allo scrubbing center l’elenco dei prefissi, l’AS-SET e la LOA. Concorda come annunciare i /24 e come ritirare la deviazione.',
      'Prova la deviazione di un /24 al di fuori di un attacco.'
    ]
  },
  loaTytul: 'Modello di LOA (in inglese, la forma che gli operatori accettano di solito)',
  sekcjaPoprawkiPusta: 'Nulla da correggere nei dati pubblici.',
  motywJasny: 'Chiaro', motywCiemny: 'Scuro', motywAria: 'Cambia tema di colori',
  sekcjaAs: 'Impostazioni dell’AS',
  sekcjaPrefiksy: 'Prefissi',
  sekcjaObiekty: 'Oggetti pronti da incollare',
  obiektyOpis: 'Proposte basate sul risultato. Controllale prima di crearle — il maintainer (mnt-by) è ripreso dagli oggetti esistenti.',
  sekcjaListy: 'Liste di prefissi (bgpq4, versione locale)',
  listyOpis: 'Generate sul tuo computer da bgpq4 a partire dai tuoi AS-SET. È più o meno il filtro che un operatore costruirà.',
  pobierzListe: 'Scarica la lista completa (.txt)',
  listaObcieta: (n, m) => `Mostrate ${n} righe su ${m} — la lista completa è nel file.`,
  sekcjaReczne: 'Cosa non si può verificare dall’esterno',
  sekcjaPodstawa: 'Su cosa si basano i test',
  kolPrefiks: 'Prefisso', kolRpki: 'RPKI', kolPodzial: 'Suddivisione in /24 (/48)', kolIrr: 'Oggetto route', kolWlasciciel: 'Titolare', kolUwagi: 'Note',
  pokazWszystkie: (n) => `Mostra tutti (${n})`,
  limit: (n, m) => `Sono stati analizzati in dettaglio ${n} prefissi su ${m} (le reti molto grandi vengono analizzate parzialmente per non sovraccaricare i servizi pubblici).`,
  drukuj: 'Stampa / PDF', json: 'Scarica JSON', link: 'Copia il link al risultato', skopiowano: 'Copiato', kopiuj: 'Copia',
  rpkiStan: { valid: 'valid', invalid: 'invalid', notfound: 'nessun ROA', invalidLen: 'invalid (lunghezza)', invalidAs: 'invalid (altro AS)' },
  podzialPelny: 'tutti', podzialBrak: 'nessuno', podzialCzesc: (a, b) => `${a} su ${b}`, podzialNd: 'n/d',
  irrRir: (db) => `sì (${db})`, irrBrak: 'assente', irrNieaut: (db) => `solo ${db}`,
  wlTak: 'corrisponde', wlNie: 'altra organizzazione', wlPa: 'PA da LIR', wlNd: '—',

  t: {
    asIstnieje: { ok: (n) => `L’AS esiste: ${n}.`, blok: 'Nessun AS di questo tipo trovato nei registri.' },
    ogloszenia: { ok: (a, b) => `L’AS annuncia ${a} prefissi IPv4 e ${b} prefissi IPv6.`, blok: 'Oggi l’AS non annuncia alcun prefisso — non c’è nulla da deviare. Se i tuoi prefissi sono annunciati da un upstream, esegui il test per il suo AS; la deviazione richiederà il suo consenso (LOA).' },
    abuse: { ok: (m) => `Contatto abuse: ${m}.`, popr: 'Nessun contatto abuse (abuse-c). Gli scrubbing center e i team CERT lo usano durante un incidente; nella regione RIPE NCC è obbligatorio.' },
    autnum: { okRir: (r) => `L’AS è registrato presso ${r}.`, ok: 'L’oggetto aut-num esiste nel RIPE Database.', popr: 'Nessun oggetto aut-num nel RIPE Database.', info: 'AS al di fuori della regione RIPE NCC — controlla aut-num e AS-SET nel database del tuo RIR.' },
    eksport: { ok: (s) => `La policy di export indica l’AS-SET: ${s}.`, zal: 'L’aut-num non indica alcun AS-SET nelle righe export/mp-export. Gli scrubbing center costruiscono i filtri dall’AS-SET o dal solo AS — con reti downstream l’AS-SET è indispensabile.' },
    asset: { ok: (s, z) => `${s} (registro ${z}) contiene il tuo AS.`, nieaut: (s, z) => `${s} esiste solo in ${z}. Molti operatori accettano soltanto set presenti nei database dei RIR.`, zadnego: 'Nessun AS-SET trovato né nell’aut-num né in PeeringDB. Senza AS-SET l’operatore costruisce il filtro dal solo tuo AS — non basta se hai reti downstream.', popr: (s) => `${s} non contiene il tuo AS — un filtro costruito da questo set escluderà i tuoi prefissi.`, brak: (s) => `${s} non trovato nel RIPE Database. Molti operatori non accettano un set registrato in RADB o in un altro registro non autoritativo.` },
    assetHier: { ok: (s) => `${s} ha un nome gerarchico.`, zal: (s) => `${s} ha un nome breve. I nuovi set vanno nominati con il prefisso dell’AS (es. AS64496:AS-CLIENTI, RFC 2622) — questo protegge dall’impersonificazione in altri registri.` },
    pdb: { ok: (s) => `PeeringDB: la scheda esiste, AS-SET ${s}.`, zal: 'Nessuna scheda in PeeringDB, oppure campo AS-SET vuoto. Molti operatori costruiscono i filtri dall’AS-SET indicato in PeeringDB.', roz: (a, b) => `L’AS-SET in PeeringDB (${a}) è diverso dall’AS-SET nell’aut-num (${b}).` },
    upstream: { ok: (n) => `Upstream visibili in BGP: ${n}.`, zal: (n) => `Visibile solo ${n} upstream. Con un unico collegamento l’attacco lo satura prima che la deviazione abbia effetto — valuta un secondo collegamento, oppure RTBH e BGP FlowSpec presso l’upstream.` },
    aspa: { as0: (l) => `Il tuo oggetto ASPA dice che il tuo AS non ha provider (AS0), ma in BGP sono visibili degli upstream: ${l}. Quando le reti scarteranno le rotte ASPA-invalid, tutte le rotte che passano da loro andranno perse — inseriscili nel tuo ASPA.`, brakuje: (l) => `Nel tuo ASPA mancano AS visibili in BGP come tuoi upstream: ${l}. Se sono i tuoi provider, aggiungili — altrimenti le rotte che passano da loro saranno ASPA-invalid. Se sono semplici peer, non aggiungerli.`, niewidoczni: (l) => `Il tuo ASPA contiene AS che oggi non sono visibili in BGP come tuoi upstream: ${l}. Va bene per i provider di backup, non per i semplici peer.`, propozycja: 'Nessun oggetto ASPA. ASPA completa i ROA: protegge da percorsi AS falsificati e dai route leak, cosa che i ROA non fanno. Qui sotto c’è una proposta pronta con gli upstream visibili in BGP.', ok: (l) => `L’oggetto ASPA esiste (provider: ${l}).`, brakOp: (op) => `L’oggetto ASPA non include AS${op}. Dopo la deviazione il percorso attraverso lo scrubbing center risulterà non valido per le reti che validano ASPA — aggiungi AS${op} all’elenco dei provider.`, info: 'Nessun oggetto ASPA. Non è obbligatorio; se ne crei uno, includi tra i provider anche l’AS dello scrubbing center.' },
    opRoa: { ok: (op) => `I ROA per AS${op} coprono ogni /24 (/48).`, blok: (op, n) => `L’operatore annuncia dal proprio AS, ma nessun ROA per AS${op} copre ${n} prefissi /24 (/48). Le reti che validano RPKI scarteranno questi annunci.` },
    nieaktualne: { zal: (l) => `Oggetti route con il tuo AS per prefissi che non annunci: ${l}. Rimuovi quelli obsoleti — il disordine nell’IRR complica la verifica.` },
    higiena: {
      rozmiarOk: (s, n, r) => `${s} si espande in ${n} AS (clienti visibili in BGP: ${r}). La dimensione è adeguata alla rete.`,
      rozmiarSredni: (s, n, r) => `${s} si espande in ${n} AS, mentre in BGP sono visibili ${r} clienti. Verifica di riannunciarli tutti.`,
      rozmiarDuzy: (s, n, r) => `${s} si espande in ${n} AS, mentre in BGP sono visibili solo ${r} clienti. Un filtro costruito da un set simile lascia passare un route leak di un cliente e rende più facile impersonare i prefissi di altre reti — riducilo al cono dei tuoi clienti (customer cone).`,
      glebokosc: (s, d) => `${s} ha ${d} livelli di annidamento. La ricorsione sfugge presto di mano — limitala ai set dei tuoi clienti diretti.`,
      skladowe: (s, l) => `La maggior parte di ${s} proviene da: ${l}. Controlla la dimensione degli AS-SET di questi clienti prima di includerli.`,
      ixp: (s, l) => `${s} contiene set che sembrano elenchi di membri di IXP o di peer: ${l}. Un set di clienti non deve includere IXP né peer — non li riannunci.`,
      nieaktualni: (s, l) => `${s} contiene AS che in BGP non risultano tuoi clienti: ${l}. Se sono clienti che se ne sono andati, rimuovili.`,
      wlaczeniaObce: (k, l) => `Reti con cui non risulta alcuna relazione BGP hanno incluso il tuo AS nei propri AS-SET (diversi da elenchi di peer o IXP) (${k}): ${l}. È così che si presentava il preludio al tentativo di dirottamento descritto a DKNOG15. Ogni inclusione di questo tipo consente a quella rete di annunciare i tuoi prefissi tramite i propri upstream nonostante i filtri IRR — verificale e chiedine la rimozione.`,
      wlaczeniaIxp: (k, l) => `Il tuo AS compare in set di peer o di membri di IXP di reti con cui non risulta alcuna relazione BGP (${k}): ${l}. Di solito servono a documentare il peering — verifica di avere davvero una sessione con loro. Anche set di questo tipo possono essere usati per aggirare i filtri.`,
      wlaczeniaNieznane: (k, l) => `Il tuo AS compare in AS-SET il cui nome non contiene il numero di AS del titolare (${k}): ${l}. Verifica nell’IRR chi li gestisce e se si tratta dei tuoi provider o di IXP.`,
      wlaczeniaOk: (k) => `Il tuo AS compare in ${k} AS-SET altrui — appartengono tutti ai tuoi vicini BGP o a te.`,
      prefiksy: (s, a, b) => `${s}: prefissi secondo bgpq4 — IPv4: ${a}, IPv6: ${b}.`,
      lokalnie: 'Il numero di prefissi del tuo AS-SET e le liste di prefissi pronte per i filtri (bgpq4) sono mostrati dalla versione scaricabile, che gira sul tuo computer.',
      bezBgpq4: 'Lo strumento gira in locale, ma senza bgpq4, quindi niente liste di prefissi. Installa bgpq4 (Linux: apt install bgpq4, macOS: brew install bgpq4) oppure usa la versione Docker.'
    }
  },
  p: {
    zaDlugi: (d) => `Prefisso più lungo di /${d} — filtrato su Internet (RFC 7454) e non accettato dagli scrubbing center.`,
    rpkiInvalid: 'Oggi l’annuncio è RPKI-invalid — le reti con ROV lo scartano già.',
    rpkiBrak: 'Nessun ROA per questo prefisso. Alcuni scrubbing center richiedono un ROA, e le reti con ROV trattano un prefisso così peggio di uno valid.',
    podzialBrak: (d, n) => `Nessuno dei prefissi /${d} (${n}) sarà RPKI-valid. La deviazione di una parte dello spazio non funzionerà.`,
    podzialCzesc: (d, a, n) => `${n - a} prefissi /${d} su ${n} non saranno RPKI-valid dopo la suddivisione.`,
    maxLen: (r, m) => `Il ROA ${r} ha maxLength ${m}. Questo consente di ricavare i /24, ma la RFC 9319 raccomanda ROA separati per i prefissi annunciati — un maxLength ampio facilita i dirottamenti con origine falsificata (forged-origin).`,
    irrBrak: 'Nessun oggetto route con il tuo AS in un database di un RIR. La maggior parte degli scrubbing center costruisce i filtri dall’IRR e non accetterà il prefisso.',
    irrNieaut: (db) => `Oggetto route solo in ${db}. Di solito gli operatori accettano soltanto i database dei RIR (RIPE, ARIN, APNIC, AFRINIC, LACNIC).`,
    irrPod: (d, a, n) => `Oggetti route per i prefissi /${d}: ${a} su ${n}. Alcuni operatori richiedono un oggetto per l’esatto prefisso annunciato — creali prima di un attacco.`,
    konflikt: (l) => `Oggetti route con un altro AS: ${l}. Se sono obsoleti, rimuovili — confondono i filtri e la verifica da parte dell’operatore.`,
    konfliktInv: (l) => `Oggetti route con un altro AS in contrasto con il ROA (RPKI-invalid): ${l}. Rimuovili.`,
    as0: 'Un ROA AS0 copre parte del prefisso (RFC 6483) — quegli indirizzi non possono essere annunciati da nessuno, scrubbing center compreso.',
    innyRoa: (l) => `ROA per altri AS che coprono il prefisso: ${l}. Verifica se servono ancora.`,
    wlInny: (o) => `La risorsa appartiene a un’organizzazione (${o}) diversa da quella dell’AS. Lo scrubbing center chiederà una LOA al titolare dello spazio di indirizzamento.`,
    wlPa: (s) => `Spazio assegnato da un LIR (stato ${s}). Lo scrubbing center chiederà una LOA al LIR.`,
    nadrzedny: (l) => `Un prefisso meno specifico è annunciato da ${l}. Di solito si tratta di spazio dell’upstream — per la deviazione serve il suo consenso (LOA).`,
    wszystkoOk: 'Nessuna osservazione.'
  },
  f: {
    roa: (p, d) => `Aggiungi ROA che consentano di annunciare ogni /${d} di ${p}.`,
    roaNowe: (p) => `Crea ROA con il tuo AS e maxLength uguale alla lunghezza del prefisso per: ${p}.`,
    roaA: (n) => `Consigliato (RFC 9319): ROA separati per ${n} prefissi.`,
    roaB: (p, d) => `Più semplice: maxLength ${d} sul ROA per ${p}.`,
    route: (n, d) => `Crea ${n} oggetti route per i prefissi /${d}.`,
    routeAgg: (p) => `Crea un oggetto route per ${p} con il tuo AS in un database di un RIR.`,
    usun: (n) => `Rimuovi o verifica ${n} oggetti route con un altro AS.`,
    loa: (l) => `Prepara una LOA per: ${l}.`,
    zaDlugi: (l) => `Sostituisci i prefissi più lunghi di /24 (/48): ${l}.`,
    rpki: (l) => `Correggi i ROA che oggi rendono invalid questi annunci: ${l}.`,
    as0: (l) => `Controlla i ROA AS0 per: ${l}.`
  },
  reczne: [
    ['LOA', 'Consenso scritto del titolare dello spazio di indirizzamento (e dell’upstream, se è lui ad annunciare il prefisso) all’annuncio dei tuoi prefissi da parte dello scrubbing center.'],
    ['Tunnel e MSS', 'Il traffico pulito torna di solito tramite un tunnel GRE o IPsec. Imposta l’MSS clamping (tipicamente 1436 per GRE, circa 1360 per IPsec) prima di spostare il traffico, e verifica le prestazioni di decapsulamento sul router.'],
    ['Tempi di propagazione', 'I nuovi ROA e oggetti route arrivano nei filtri in un intervallo che va da qualche ora a 48 ore. Preparali prima di un attacco, non durante.'],
    ['Annuncio e ritiro', 'Concorda con l’operatore come annunciare i /24 (prepend, community, soppressione dell’annuncio verso il transito) e come ritirare la deviazione in sicurezza — prima annuncia tu il prefisso, poi ritiralo presso l’operatore.'],
    ['Loop di routing', 'Se l’operatore ti rimanda prefissi più specifici del tuo spazio, filtrali sulla sessione per evitare un loop.'],
    ['Filtraggio dei clienti', 'Filtra le rotte dei clienti in base al loro AS-SET e agli oggetti route, e controlla la dimensione del set prima di accettarlo. Quel filtro è l’unica barriera contro un route leak di un cliente.'],
    ['Prova a secco', 'Prova la deviazione di un /24 al di fuori di un attacco e verifica con un looking glass che sia visibile e RPKI-valid.'],
    ['RTBH', 'Non allargare i ROA per l’RTBH (prefissi /32, community BLACKHOLE della RFC 7999) — la RFC 9319 §6 lo sconsiglia esplicitamente. La deviazione verso uno scrubbing center e l’RTBH sono questioni distinte.'],
    ['Validazione ASPA sui tuoi router', 'Quando i tuoi router supporteranno ASPA: scarta le rotte invalide invece di abbassarne la preferenza, usa la verifica upstream per clienti e peer e quella downstream per i provider. Inizia con il logging e avvisa i clienti che non ti hanno inserito come provider.']
  ],
  podstawa: [
    ['RFC 6811', 'stati di validazione dell’origine: valid, invalid, not found'],
    ['RFC 9319 (BCP 185)', 'ROA minimi e maxLength; §5.1 — i ROA per i servizi di mitigazione DDoS devono esistere prima dell’attacco; §6 — non allargare i ROA per l’RTBH'],
    ['RFC 9582', 'profilo dei ROA'],
    ['RFC 7454 (BCP 194)', 'filtraggio dei prefissi più lunghi di /24 e /48, IRR come base dei filtri'],
    ['RFC 6483', 'ROA AS0'],
    ['RFC 2622', 'nomi gerarchici degli AS-SET'],
    ['RFC 9224', 'individuazione del server RDAP autoritativo'],
    ['ASPA', 'autorizzazione degli upstream (IETF SIDROPS)'],
    ['ripe-705', 'abuse-c obbligatorio nel RIPE Database'],
    ['Documentazione dei RIR', 'RIPE NCC, ARIN, APNIC, AFRINIC, LACNIC: ROA, oggetti route, as-set, abuse, ASPA'],
    ['MANRS', 'registrazione in IRR e RPKI, contatti aggiornati; l’AS-SET come descrizione del cono dei clienti (modulo 2)'],
    ['Lasse Jarlskov (Telia Company)', '“Securing your AS-set” (BalticNOG 2025), “Prelude to a BGP hijack?” (DKNOG15): scopo dell’AS-SET, dimensione, chi ti include'],
    ['Doug Madory, Job Snijders', '“The Scourge of Excessive AS-SETs” (2025): AS-SET sovradimensionati e route leak'],
    ['Ondřej Caletka (RIPE NCC)', '“Autonomous System Provider Authorisation” (DKNOG16, 2026): chi inserire nell’ASPA, verifica upstream e downstream'],
    ['Operatori', 'documentazione pubblica di attivazione di noti operatori di scrubbing center: prefisso minimo, ROA, IRR in un database di un RIR, LOA, tunnel']
  ],
  podstawaLink: 'Elenco completo delle fonti con link',
  obiektRoa: 'ROA da creare nel portale RPKI del tuo RIR',
  obiektAspa: 'Oggetto ASPA proposto (verifica l’elenco prima di crearlo)',
  obiektRoute: 'Oggetti route (RPSL)',
  stopka: 'Il risultato ha carattere puramente informativo e si basa sui dati pubblici al momento della verifica. I requisiti definitivi sono stabiliti dall’operatore dello scrubbing center.'
};

window.RIR.it = {
  RIPE: {
    nazwa: 'RIPE NCC',
    roa: { kroki: [
      'Accedi alla RPKI Dashboard (dashboard.rpki.ripe.net, anche tramite my.ripe.net → RPKI). Al primo utilizzo crea una Hosted CA.',
      'Scheda “ROAs” → “Create ROA” (per i prefissi non ancora annunciati) oppure “Announcements” → “Create ROA” (per quelli visibili in BGP).',
      'Consigliato: un ROA separato per ogni /24 elencato sopra, lasciando maxLength uguale alla lunghezza del prefisso. Più semplice: un unico ROA sull’aggregato con maxLength 24.',
      'Conferma le modifiche (“Pending Changes” → “Publish”). Se la Dashboard avvisa che il ROA invaliderà annunci visibili, fermati e controlla l’origin AS.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/' },
    route: { kroki: [
      'Apri il RIPE Database: apps.db.ripe.net → “Create an object” → route (IPv6: route6). Puoi anche incollare gli oggetti qui sopra in “Syncupdates”.',
      'Compila route, origin, mnt-by (un maintainer con autorità sul tuo spazio di indirizzamento) e source: RIPE.',
      'Autorizza con la password o la chiave del maintainer. Un oggetto route richiede l’autorizzazione del titolare dello spazio di indirizzamento — il ROA da solo non lo crea.'
    ], link: 'https://docs.db.ripe.net/' },
    usun: { kroki: [
      'Cerca l’oggetto in apps.db.ripe.net (Query) e controlla il suo mnt-by.',
      'Se il maintainer è tuo, scegli “Delete object” e indica un motivo. Se appartiene a un’altra azienda, chiedile di eliminarlo oppure segnalalo al RIPE NCC (ripe-dbm@ripe.net).'
    ], link: 'https://docs.db.ripe.net/' },
    asset: { kroki: [
      'Crea un as-set con nome gerarchico, es. AS64496:AS-CLIENTI — nel RIPE Database i nuovi set devono averlo.',
      'In members inserisci il tuo AS e gli AS delle reti downstream.',
      'Indica il set nelle righe export/mp-export del tuo aut-num (announce AS64496:AS-CLIENTI) e in PeeringDB.'
    ], link: 'https://docs.db.ripe.net/Set-Objects/' },
    abuse: { kroki: [
      'Crea un oggetto role con l’attributo abuse-mailbox.',
      'Indicalo nell’abuse-c dell’oggetto organisation — inetnum, inet6num e aut-num lo ereditano.',
      'Il RIPE NCC verifica l’indirizzo ogni anno (ripe-705); rispondi al messaggio di verifica.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/faqs-for-abuse-c/' },
    aspa: { kroki: [
      'RPKI Dashboard → scheda ASPA → crea un oggetto per il tuo AS.',
      'Nell’elenco dei provider inserisci tutti i tuoi operatori di transito e l’AS dello scrubbing center.'
    ], link: 'https://labs.ripe.net/author/tim_bruijnzeels/aspa-in-the-rpki-dashboard-a-new-layer-of-routing-security/' }
  },
  ARIN: {
    nazwa: 'ARIN',
    roa: { kroki: [
      'Accedi ad ARIN Online → Routing Security. Al primo utilizzo: “Sign Up for RPKI” → “Sign Up for Hosted”. È richiesto un RSA (LRSA per le risorse legacy).',
      'Manage RPKI → “View Details” per la tua organizzazione → RPKI: ROAs → “Create ROA”.',
      'Inserisci origin AS, prefisso e maxLength. Consigliato: un ROA separato per ogni /24; più semplice: un unico ROA sull’aggregato con maxLength 24.',
      'Nella schermata di conferma scegli di creare un oggetto route corrispondente nell’ARIN IRR.'
    ], link: 'https://www.arin.net/resources/manage/rpki/options/hosted/' },
    route: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → seleziona il tuo Org ID → route (IPv6: route6) → “Create Object”.',
      'Inserisci prefisso e origin AS. L’ARIN IRR non usa oggetti mntner — hanno accesso gli Admin, Tech e Routing POC dell’organizzazione.',
      'Gli oggetti route si possono creare anche tramite la REST API di ARIN.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    usun: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → trova l’oggetto ed eliminalo.',
      'Gli oggetti in RADB o in altri registri li elimina il loro maintainer — chiedilo all’azienda che li ha creati.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    asset: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → as-set → “Create Object”.',
      'Nome: AS-… oppure AS64496:AS-… (consigliato quello gerarchico — impedisce l’impersonificazione in altri registri).',
      'Aggiungi i membri (il tuo AS e i downstream) e indica il set in PeeringDB.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    abuse: { kroki: [
      'Ogni Org ID deve avere un Abuse POC. ARIN Online → Your Records → Point of Contact Records → “Create POC”.',
      'Un Admin o Tech POC lo associa in Organization Identifiers → Manage.'
    ], link: 'https://www.arin.net/resources/guide/account/records/poc/' },
    aspa: { kroki: [
      'ARIN Online → Routing Security → Manage RPKI → ASPAs → “Create ASPA”.',
      'Un ASPA copre un solo AS; aggiungi i tuoi operatori di transito e l’AS dello scrubbing center.'
    ], link: 'https://www.arin.net/resources/manage/rpki/aspa/' }
  },
  APNIC: {
    nazwa: 'APNIC',
    roa: { kroki: [
      'Accedi a MyAPNIC → Resources → Route Management.',
      'Aggiungi una route: prefisso, origin AS e “Most Specific Announcement” (corrisponde a maxLength). Spunta sia ROA sia whois — APNIC crea insieme il ROA e l’oggetto route.',
      'Consigliato: una route separata per ogni /24; più semplice: l’aggregato con MSA 24 (per il whois la differenza può essere al massimo di 8 bit).',
      'Se le tue risorse sono gestite da un NIR (JPNIC, IDNIC, TWNIC, CNNIC, KRNIC), i ROA si creano nel sistema di quel NIR.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    route: { kroki: [
      'MyAPNIC → Resources → Route Management con whois spuntato — l’oggetto route viene creato insieme al ROA.',
      'Gli oggetti modificati al di fuori di MyAPNIC (webupdates, e-mail) vengono mostrati come conflitti — usa un solo metodo.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    usun: { kroki: [
      'MyAPNIC → Route Management → elimina la route (rimuove il ROA e l’oggetto whois, se erano stati creati insieme).',
      'Gli oggetti di altre aziende li elimina il loro maintainer — chiediglielo oppure contatta APNIC.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/' },
    asset: { kroki: [
      'Nell’APNIC Whois i nuovi as-set devono avere un nome gerarchico (AS64496:AS-…); li crea il maintainer dell’AS.',
      'Aggiungi i membri (il tuo AS e i downstream) e indica il set in PeeringDB.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/guide/as-set/' },
    abuse: { kroki: [
      'In APNIC l’abuse-c viene generato dall’oggetto IRT. Modificalo in MyAPNIC → Resources → IRTs.',
      'APNIC verifica l’indirizzo ogni 6 mesi — rispondi al messaggio di verifica.'
    ], link: 'https://www.apnic.net/about-apnic/service-updates/apnic-whois-database-abuse-c/' },
    aspa: { kroki: [
      'ASPA è disponibile in MyAPNIC (sezione RPKI) e tramite la Registry API.',
      'Aggiungi i tuoi operatori di transito e l’AS dello scrubbing center.'
    ], link: 'https://blog.apnic.net/2026/07/09/aspa-at-apnic-strengthening-bgp-path-validation/' }
  },
  AFRINIC: {
    nazwa: 'AFRINIC',
    roa: { kroki: [
      'Accedi a MyAFRINIC (richiesto certificato BPKI o 2FA) → Resources → Resource Certification.',
      'Crea un ROA: nome, origin AS, prefisso, Max Length e periodo di validità.',
      'Consigliato: un ROA separato per ogni /24; più semplice: l’aggregato con Max Length 24.'
    ], link: 'https://afrinic.net/support/rpki' },
    route: { kroki: [
      'MyAFRINIC → Resources → IRR → “Add Route” (IPv6: “Add Route6”).',
      'Il mnt-by dell’oggetto route deve coincidere con il mnt-lower dell’inetnum.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    usun: { kroki: [
      'MyAFRINIC → Resources → IRR → trova l’oggetto ed eliminalo.',
      'Gli oggetti di altre aziende li elimina il loro maintainer — chiediglielo oppure contatta AFRINIC.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    asset: { kroki: [
      'MyAFRINIC → IRR → crea un as-set (il nome inizia con AS-; consigliato il nome gerarchico AS64496:AS-…).',
      'Aggiungi i membri (il tuo AS e i downstream) e indica il set in PeeringDB.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/create-as-set-objects' },
    abuse: { kroki: [
      'inetnum, inet6num e aut-num devono avere un abuse-c con un abuse-mailbox.',
      'Impostalo in MyAFRINIC o nel database di AFRINIC.'
    ], link: 'https://afrinic.net/support/how-to-publish-abuse-contact-information' },
    aspa: { kroki: [
      'Verifica in MyAFRINIC se ASPA è disponibile — a ottobre 2026 AFRINIC non lo aveva annunciato pubblicamente.',
      'Se crei un ASPA, includi l’AS dello scrubbing center.'
    ], link: 'https://afrinic.net/support/rpki' }
  },
  LACNIC: {
    nazwa: 'LACNIC',
    roa: { kroki: [
      'Accedi a MiLACNIC → RPKI (modello hosted).',
      'Crea un ROA per il prefisso e l’origin AS. Importante: LACNIC genera automaticamente gli oggetti route dai ROA, solo per il prefisso del ROA, ignorando maxLength.',
      'Per questo in LACNIC scegli ROA separati per ogni /24 — così verrà creato anche un oggetto route per ogni /24.',
      'Le allocazioni brasiliane (Registro.br / NIC.br) sono gestite da NIC.br con il modello delegated, non in MiLACNIC.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    route: { kroki: [
      'Nel LACNIC IRR gli oggetti route vengono generati dai ROA creati in MiLACNIC — crea un ROA per ogni prefisso che deve avere un oggetto route.',
      'Dopo qualche ora controlla l’oggetto su irr.lacnic.net.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    usun: { kroki: [
      'Gli oggetti route nel LACNIC IRR scompaiono quando si elimina il ROA corrispondente in MiLACNIC.',
      'Gli oggetti in RADB o in altri registri li elimina il loro maintainer.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    asset: { kroki: [
      'MiLACNIC → IRR → crea un as-set (consigliato il nome gerarchico AS64496:AS-…).',
      'Aggiungi i membri (il tuo AS e i downstream) e indica il set in PeeringDB.'
    ], link: 'https://lacnic.zendesk.com/hc/es/categories/360002625214-Internet-Routing-Registry' },
    abuse: { kroki: [
      'inetnum e aut-num devono avere un abuse-c con un abuse-mailbox, verificato almeno due volte l’anno.',
      'Impostalo in MiLACNIC tra i contatti dell’organizzazione e della risorsa — una verifica non superata blocca l’accesso a MiLACNIC.'
    ], link: 'https://politicas.lacnic.net/politicas/detail/id/LAC-2018-5' },
    aspa: { kroki: [
      'ASPA è stato aggiunto a MiLACNIC a ottobre 2026 — cerca nella sezione RPKI.',
      'Aggiungi i tuoi operatori di transito e l’AS dello scrubbing center.'
    ], link: 'https://blog.lacnic.net/en/caribnog-lacnic/' }
  }
};

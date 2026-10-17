/* ITORO — Test gotowości prefiksów do scrubbing center — français */
window.NAPISY.fr = {
  tytulStrony: 'Test de préparation des préfixes au scrubbing center — ITORO',
  opisStrony: 'Saisissez votre numéro d’AS pour vérifier si vos ROA, objets route, AS-SET et données de registre permettent de rediriger le trafic vers un centre de nettoyage (scrubbing center) pendant une attaque DDoS. Sans compte, directement dans votre navigateur.',
  goraOpis: 'Nous sécurisons les réseaux et les protégeons contre les attaques DDoS.',
  pomin: 'Aller au contenu',
  nadtytul: 'Outils gratuits',
  h1: 'Vos préfixes sont-ils prêts à être redirigés vers un centre de nettoyage (scrubbing center) ?',
  heroH: 'Pendant une attaque DDoS, le trafic est redirigé vers un scrubbing center par l’annonce de préfixes <strong>/24</strong> (IPv6 : <strong>/48</strong>) extraits de blocs plus larges. Si vos ROA ne le permettent pas, ou si l’objet route manque dans la base du RIR, l’annonce est rejetée par les réseaux qui valident RPKI et par les filtres de l’opérateur — précisément au moment où la protection compte le plus. Cet outil le vérifie sur des données publiques et indique ce qu’il faut corriger.',
  kartaTytul: 'Test de préparation des préfixes',
  wiodacy: 'Saisissez votre numéro d’AS. L’outil récupère les préfixes annoncés, les ROA, les objets route, l’AS-SET et les données du titulaire des ressources, puis les compare aux recommandations des RFC et aux exigences habituelles des scrubbing centers.',
  poleAs: 'Numéro d’AS',
  poleAsPomoc: 'p. ex. 64496 ou AS64496',
  poleOperator: 'AS du scrubbing center (facultatif)',
  poleOperatorPomoc: 'Si vous le connaissez, nous vérifierons les ROA et l’ASPA pour cet AS.',
  poleTryb: 'Qui annoncera vos préfixes pendant une attaque ?',
  trybKlient: 'L’opérateur, avec mon AS comme origine',
  trybOperator: 'L’opérateur, depuis son propre AS',
  sprawdz: 'Vérifier',
  sprawdzam: 'Vérification…',
  czas: 'Résultat en quelques secondes. Votre navigateur récupère les données auprès de services publics (notamment la base RIPE, les registres IRR et PeeringDB).',
  wersja: 'Version 1.1.0 · 17 octobre 2026',
  itoroNad: 'Outils proposés par ITORO',
  itoroH2: 'Nous renforçons la sécurité de votre réseau',
  itoroP1: 'Nous déployons et exploitons des systèmes de protection contre les attaques DDoS, principalement dans les réseaux d’opérateurs télécoms et les centres de données.',
  itoroPunkty: [
    '<strong>Détection d’une attaque en 2 à 5 secondes</strong>, filtrage en bordure de votre propre réseau',
    '<strong>Redirection vers un scrubbing center</strong> lorsque l’attaque dépasse la capacité de vos liens'
  ],
  itoroPrzycisk: 'Contactez-nous',
  podReklama: 'Le test s’appuie sur les recommandations des RFC et sur les exigences publiées par des opérateurs de scrubbing centers, internationaux et polonais. Il utilise uniquement des données que chacun peut vérifier dans les registres.',

  krok: {
    as: 'données de l’AS', prefiksy: 'préfixes annoncés', roa: 'ROA et ASPA', irr: 'objets route (IRR)',
    autnum: 'aut-num et AS-SET', pdb: 'PeeringDB', abuse: 'contact abuse', sasiedzi: 'voisins BGP',
    listy: 'listes de préfixes (bgpq4)', wlaczenia: 'qui inclut votre AS dans des AS-SET', pref: (n, m) => `détails des préfixes (${n}/${m})`, wlasciciel: (n, m) => `titulaires des ressources (${n}/${m})`, operator: 'ROA de l’opérateur'
  },
  bladAs: 'Saisissez un numéro d’AS valide (1–4294967294).',
  bladSieci: (u) => `Impossible de récupérer les données (${u}). Réessayez dans un instant.`,
  bladCzesciowy: (u) => `Certaines données sont indisponibles (${u}) — le résultat peut être incomplet.`,

  wynikDla: (as, nazwa) => `Résultat pour AS${as}${nazwa ? ' — ' + nazwa : ''}`,
  werdykt: { blok: 'Les préfixes ne sont pas prêts à être redirigés', popr: 'Prêts avec réserves — certains points sont à corriger', ok: 'Les préfixes sont prêts à être redirigés' },
  werdyktOpis: {
    blok: 'Au moins un problème empêchera le scrubbing center d’annoncer vos préfixes ou les fera rejeter sur Internet. Corrigez-le avant une attaque : la propagation des ROA et des objets route prend de quelques heures à deux jours.',
    popr: 'Rien ne bloque la redirection, mais certains opérateurs rejetteront des préfixes ou demanderont des corrections lors de la mise en service.',
    ok: 'Les données des registres permettent d’annoncer chaque /24 (/48) de votre espace d’adressage. Ce qui ne peut pas être vérifié de l’extérieur est listé en bas de page.'
  },
  kafle: { pref: 'préfixes annoncés', gotowe: 'prêts à être découpés en /24 et /48', blok: 'problèmes bloquants', popr: 'points à corriger', zal: 'recommandations' },
  stopnie: { blok: 'Bloquant', popr: 'À corriger', zal: 'Recommandé', ok: 'OK', info: 'Info' },
  sekcjaPoprawki: 'Plan d’action, étape par étape',
  planOpis: (r) => `Étapes dans l’ordre conseillé. Chacune est accompagnée d’instructions pour votre registre${r ? ' (' + r + ')' : ''}.`,
  jakW: (r) => `Comment faire chez ${r}`,
  dokumentacja: 'Documentation',
  krokTyt: {
    dlugosc: 'Remplacer les préfixes trop longs', roa: 'Corriger les ROA', roaOp: 'Ajouter des ROA pour le scrubbing center',
    aspa: 'Compléter l’ASPA', route: 'Créer les objets route', usun: 'Supprimer les objets route obsolètes',
    loa: 'Préparer une LOA', asset: 'Mettre de l’ordre dans l’AS-SET', wlaczenia: 'Vérifier qui inclut votre AS dans ses AS-SET', abuse: 'Définir le contact abuse', pdb: 'Compléter PeeringDB', inne: 'Autres'
  },
  ogolne: {
    dlugosc: ['Remplacez les préfixes plus longs que /24 (IPv6 : /48) par le /24 (/48) qui les couvre, ou annoncez-les avec celui-ci.'],
    loa: ['Dressez la liste des préfixes de cette étape et du titulaire de chacun (données de la base du RIR).', 'Demandez au titulaire de l’espace d’adressage — et à l’opérateur amont, s’il annonce le préfixe — de signer une LOA selon le modèle ci-dessous.', 'Les opérateurs acceptent généralement la LOA en PDF, sur papier à en-tête de l’entreprise, signée par une personne habilitée.'],
    asset: ['Règle de base : ne mettez dans votre AS-SET que ce que vous réannoncez en BGP — vous-même et vos clients. N’y ajoutez ni IXP ni peers.', 'Vérifiez la taille de l’AS-SET d’un client avant de l’inclure ; retirez les clients partis et révisez l’ensemble régulièrement.'],
    wlaczenia: ['Passez en revue les ensembles listés dans cette étape. Le titulaire figure dans l’objet as-set (mnt-by, admin-c) de l’IRR.', 'Si un ensemble appartient à un réseau avec lequel vous n’avez aucune relation BGP, demandez le retrait de votre AS. En l’absence de réponse, signalez-le à l’opérateur de la base IRR.', 'Publiez un ASPA listant vos opérateurs amont — cela limite l’usurpation de votre AS via les AS-SET d’autres réseaux.', 'Mettez en place une surveillance continue des nouveaux AS-SET qui font référence à votre AS.'],
    pdb: ['Connectez-vous à peeringdb.com et ouvrez la fiche de votre réseau (Network).', 'Dans le champ « IRR as-set/route-set », saisissez votre AS-SET avec sa source, p. ex. RIPE::AS64496:AS-CLIENTS.', 'Enregistrez et vérifiez que la valeur correspond à votre aut-num.'],
    inne: []
  },
  koncowe: {
    tytul: 'Après les modifications',
    kroki: [
      'Patientez : les ROA atteignent les validateurs généralement en moins d’une heure, les objets route parviennent aux filtres des opérateurs en quelques heures à 48 heures.',
      'Relancez ce test et vérifiez que les étapes ont disparu du plan.',
      'Envoyez au scrubbing center la liste de vos préfixes, votre AS-SET et la LOA. Convenez de la manière d’annoncer les /24 et de la procédure de retrait de la redirection.',
      'Testez la redirection d’un /24 en dehors de toute attaque.'
    ]
  },
  loaTytul: 'Modèle de LOA (en anglais, la forme généralement acceptée par les opérateurs)',
  sekcjaPoprawkiPusta: 'Rien à corriger dans les données publiques.',
  motywJasny: 'Clair', motywCiemny: 'Sombre', motywAria: 'Changer le thème de couleurs',
  sekcjaAs: 'Paramètres de l’AS',
  sekcjaPrefiksy: 'Préfixes',
  sekcjaObiekty: 'Objets prêts à coller',
  obiektyOpis: 'Suggestions établies à partir du résultat. Vérifiez-les avant de les créer — le mainteneur (mnt-by) est repris des objets existants.',
  sekcjaListy: 'Listes de préfixes (bgpq4, version locale)',
  listyOpis: 'Générées sur votre ordinateur par bgpq4 à partir de vos AS-SET. C’est à peu près le filtre qu’un opérateur en tirera.',
  pobierzListe: 'Télécharger la liste complète (.txt)',
  listaObcieta: (n, m) => `${n} lignes affichées sur ${m} — la liste complète est dans le fichier.`,
  sekcjaReczne: 'Ce qui ne peut pas être vérifié de l’extérieur',
  sekcjaPodstawa: 'Sur quoi reposent les tests',
  kolPrefiks: 'Préfixe', kolRpki: 'RPKI', kolPodzial: 'Découpage en /24 (/48)', kolIrr: 'Objet route', kolWlasciciel: 'Titulaire', kolUwagi: 'Remarques',
  pokazWszystkie: (n) => `Tout afficher (${n})`,
  limit: (n, m) => `${n} préfixes sur ${m} ont été analysés en détail (les très grands réseaux sont analysés partiellement pour ne pas surcharger les services publics).`,
  drukuj: 'Imprimer / PDF', json: 'Télécharger le JSON', link: 'Copier le lien vers le résultat', skopiowano: 'Copié', kopiuj: 'Copier',
  rpkiStan: { valid: 'valid', invalid: 'invalid', notfound: 'pas de ROA', invalidLen: 'invalid (longueur)', invalidAs: 'invalid (autre AS)' },
  podzialPelny: 'tous', podzialBrak: 'aucun', podzialCzesc: (a, b) => `${a} sur ${b}`, podzialNd: 'n.d.',
  irrRir: (db) => `oui (${db})`, irrBrak: 'absent', irrNieaut: (db) => `uniquement ${db}`,
  wlTak: 'concordant', wlNie: 'autre organisation', wlPa: 'PA du LIR', wlNd: '—',

  t: {
    asIstnieje: { ok: (n) => `L’AS existe : ${n}.`, blok: 'Cet AS est introuvable dans les registres.' },
    ogloszenia: { ok: (a, b) => `L’AS annonce ${a} préfixes IPv4 et ${b} préfixes IPv6.`, blok: 'L’AS n’annonce aujourd’hui aucun préfixe — il n’y a rien à rediriger. Si un opérateur amont annonce vos préfixes, lancez le test pour son AS ; la redirection nécessitera son accord (LOA).' },
    abuse: { ok: (m) => `Contact abuse : ${m}.`, popr: 'Aucun contact abuse (abuse-c). Les scrubbing centers et les équipes CERT l’utilisent pendant un incident ; il est obligatoire dans la région du RIPE NCC.' },
    autnum: { okRir: (r) => `L’AS est enregistré auprès de ${r}.`, ok: 'L’objet aut-num existe dans la base RIPE.', popr: 'Aucun objet aut-num dans la base RIPE.', info: 'AS hors de la région du RIPE NCC — vérifiez l’aut-num et l’AS-SET dans la base de votre RIR.' },
    eksport: { ok: (s) => `La politique d’export désigne l’AS-SET : ${s}.`, zal: 'L’aut-num ne mentionne aucun AS-SET dans les lignes export/mp-export. Les scrubbing centers construisent leurs filtres à partir de l’AS-SET ou du seul AS — avec des réseaux en aval (downstream), un AS-SET est indispensable.' },
    asset: { ok: (s, z) => `${s} (registre ${z}) contient votre AS.`, nieaut: (s, z) => `${s} n’existe que dans ${z}. De nombreux opérateurs n’acceptent que les ensembles issus des bases des RIR.`, zadnego: 'Aucun AS-SET trouvé ni dans l’aut-num ni dans PeeringDB. Sans AS-SET, l’opérateur construit un filtre à partir de votre seul AS — insuffisant avec des réseaux en aval.', popr: (s) => `${s} ne contient pas votre AS — un filtre construit à partir de cet ensemble ignorera vos préfixes.`, brak: (s) => `${s} introuvable dans la base RIPE. De nombreux opérateurs n’acceptent pas un ensemble enregistré dans RADB ou dans un autre registre non autoritaire.` },
    assetHier: { ok: (s) => `${s} a un nom hiérarchique.`, zal: (s) => `${s} a un nom court. Les nouveaux ensembles doivent être préfixés par l’AS (p. ex. AS64496:AS-CLIENTS, RFC 2622) — cela protège contre l’usurpation dans d’autres registres.` },
    pdb: { ok: (s) => `PeeringDB : la fiche existe, AS-SET ${s}.`, zal: 'Aucune fiche PeeringDB, ou champ AS-SET vide. De nombreux opérateurs construisent leurs filtres à partir de l’AS-SET de PeeringDB.', roz: (a, b) => `L’AS-SET dans PeeringDB (${a}) diffère de l’AS-SET dans l’aut-num (${b}).` },
    upstream: { ok: (n) => `Opérateurs amont visibles dans BGP : ${n}.`, zal: (n) => `Seulement ${n} opérateur amont visible. Avec un seul lien, l’attaque le sature avant que la redirection ne prenne effet — envisagez un second lien, ou le RTBH et BGP FlowSpec chez votre opérateur amont.` },
    aspa: { ok: (l) => `L’objet ASPA existe (fournisseurs : ${l}).`, brakOp: (op) => `L’objet ASPA n’inclut pas AS${op}. Après la redirection, le chemin via le scrubbing center sera invalide pour les réseaux qui valident ASPA — ajoutez AS${op} à la liste des fournisseurs (providers).`, info: 'Aucun objet ASPA. Il n’est pas obligatoire ; si vous en créez un, incluez aussi l’AS du scrubbing center parmi les fournisseurs.' },
    opRoa: { ok: (op) => `Les ROA pour AS${op} couvrent chaque /24 (/48).`, blok: (op, n) => `L’opérateur annonce depuis son propre AS, mais aucun ROA pour AS${op} ne couvre ${n} préfixes /24 (/48). Les réseaux qui valident RPKI rejetteront ces annonces.` },
    nieaktualne: { zal: (l) => `Objets route avec votre AS pour des préfixes que vous n’annoncez pas : ${l}. Supprimez ceux qui sont obsolètes — le désordre dans l’IRR complique la vérification.` },
    higiena: {
      rozmiarOk: (s, n, r) => `${s} se développe en ${n} AS (clients visibles dans BGP : ${r}). La taille correspond au réseau.`,
      rozmiarSredni: (s, n, r) => `${s} se développe en ${n} AS, alors que BGP montre ${r} clients. Vérifiez que vous les réannoncez tous.`,
      rozmiarDuzy: (s, n, r) => `${s} se développe en ${n} AS, alors que BGP ne montre que ${r} clients. Un filtre construit à partir d’un tel ensemble laisse passer une fuite de routes (route leak) d’un client et facilite l’usurpation des préfixes d’autres réseaux — réduisez-le à votre cône client (customer cone).`,
      glebokosc: (s, d) => `${s} est imbriqué sur ${d} niveaux. La récursion devient vite incontrôlable — limitez-la aux ensembles de vos clients directs.`,
      skladowe: (s, l) => `L’essentiel de ${s} provient de : ${l}. Vérifiez la taille des AS-SET de ces clients avant de les inclure.`,
      ixp: (s, l) => `${s} contient des ensembles qui ressemblent à des listes de membres d’IXP ou de peers : ${l}. Un ensemble de clients ne doit inclure ni IXP ni peers — vous ne les réannoncez pas.`,
      nieaktualni: (s, l) => `${s} contient des AS qui ne sont pas visibles comme vos clients dans BGP : ${l}. S’il s’agit d’anciens clients, retirez-les.`,
      wlaczeniaObce: (k, l) => `Des réseaux sans relation BGP visible avec vous ont inclus votre AS dans leurs AS-SET (hors listes de peers ou d’IXP) (${k}) : ${l}. C’est ainsi que se présentait le prélude à la tentative de détournement décrite à DKNOG15. Chacune de ces inclusions permet à ce réseau d’annoncer vos préfixes via ses opérateurs amont malgré les filtres IRR — vérifiez-les et demandez leur retrait.`,
      wlaczeniaIxp: (k, l) => `Votre AS figure dans des ensembles de peers ou de membres d’IXP de réseaux sans relation BGP visible avec vous (${k}) : ${l}. Ils documentent généralement du peering — vérifiez que vous avez réellement une session avec eux. Ces ensembles peuvent aussi servir à contourner les filtres.`,
      wlaczeniaNieznane: (k, l) => `Votre AS figure dans des AS-SET dont le nom ne comporte aucun numéro d’AS du titulaire (${k}) : ${l}. Vérifiez dans l’IRR qui les maintient et s’il s’agit de vos opérateurs amont ou d’IXP.`,
      wlaczeniaOk: (k) => `Votre AS figure dans ${k} AS-SET d’autres réseaux — tous appartiennent à vos voisins BGP ou à vous-même.`,
      prefiksy: (s, a, b) => `${s} : préfixes selon bgpq4 — IPv4 : ${a}, IPv6 : ${b}.`,
      lokalnie: 'Le nombre de préfixes de votre AS-SET et des listes de préfixes prêtes pour les filtres (bgpq4) sont fournis par la version téléchargeable, exécutée sur votre ordinateur.',
      bezBgpq4: 'L’outil tourne en local, mais sans bgpq4 : pas de listes de préfixes. Installez bgpq4 (Linux : apt install bgpq4, macOS : brew install bgpq4) ou lancez la version Docker.'
    }
  },
  p: {
    zaDlugi: (d) => `Préfixe plus long que /${d} — filtré sur Internet (RFC 7454) et refusé par les scrubbing centers.`,
    rpkiInvalid: 'L’annonce est aujourd’hui RPKI-invalid — les réseaux qui appliquent ROV la rejettent déjà.',
    rpkiBrak: 'Aucun ROA pour ce préfixe. Certains scrubbing centers exigent un ROA, et les réseaux qui appliquent ROV traitent un tel préfixe moins bien qu’un préfixe valid.',
    podzialBrak: (d, n) => `Aucun des ${n} préfixes /${d} ne sera RPKI-valid. La redirection d’une partie de l’espace ne fonctionnera pas.`,
    podzialCzesc: (d, a, n) => `${n - a} préfixes /${d} sur ${n} ne seront pas RPKI-valid une fois découpés.`,
    maxLen: (r, m) => `Le ROA ${r} a un maxLength de ${m}. Cela permet d’extraire des /24, mais la RFC 9319 recommande des ROA distincts pour les préfixes annoncés — un maxLength large facilite les détournements par usurpation d’origine (forged-origin).`,
    irrBrak: 'Aucun objet route avec votre AS dans une base de RIR. La plupart des scrubbing centers construisent leurs filtres à partir de l’IRR et refuseront le préfixe.',
    irrNieaut: (db) => `Objet route uniquement dans ${db}. Les opérateurs n’acceptent généralement que les bases des RIR (RIPE, ARIN, APNIC, AFRINIC, LACNIC).`,
    irrPod: (d, a, n) => `Objets route pour les préfixes /${d} : ${a} sur ${n}. Certains opérateurs exigent un objet correspondant exactement au préfixe annoncé — créez-les avant une attaque.`,
    konflikt: (l) => `Objets route avec un autre AS : ${l}. S’ils sont obsolètes, supprimez-les — ils perturbent les filtres et la vérification par l’opérateur.`,
    konfliktInv: (l) => `Objets route avec un autre AS, en contradiction avec le ROA (RPKI-invalid) : ${l}. Supprimez-les.`,
    as0: 'Un ROA AS0 couvre une partie du préfixe (RFC 6483) — ces adresses ne peuvent être annoncées par personne, y compris par le scrubbing center.',
    innyRoa: (l) => `ROA pour d’autres AS couvrant le préfixe : ${l}. Vérifiez s’ils sont toujours nécessaires.`,
    wlInny: (o) => `La ressource appartient à une autre organisation (${o}) que l’AS. Le scrubbing center demandera une LOA au titulaire de l’espace d’adressage.`,
    wlPa: (s) => `Espace attribué par un LIR (statut ${s}). Le scrubbing center demandera une LOA au LIR.`,
    nadrzedny: (l) => `Un préfixe moins spécifique est annoncé par ${l}. Il s’agit généralement de l’espace d’un opérateur amont — son accord (LOA) est nécessaire pour la redirection.`,
    wszystkoOk: 'Aucune remarque.'
  },
  f: {
    roa: (p, d) => `Ajoutez des ROA permettant d’annoncer chaque /${d} de ${p}.`,
    roaNowe: (p) => `Créez des ROA avec votre AS et un maxLength égal à la longueur du préfixe pour : ${p}.`,
    roaA: (n) => `Recommandé (RFC 9319) : des ROA distincts pour ${n} préfixes.`,
    roaB: (p, d) => `Plus simple : maxLength ${d} sur le ROA pour ${p}.`,
    route: (n, d) => `Créez ${n} objets route pour les préfixes /${d}.`,
    routeAgg: (p) => `Créez un objet route pour ${p} avec votre AS dans une base de RIR.`,
    usun: (n) => `Supprimez ou vérifiez ${n} objets route avec un autre AS.`,
    loa: (l) => `Préparez une LOA pour : ${l}.`,
    zaDlugi: (l) => `Remplacez les préfixes plus longs que /24 (/48) : ${l}.`,
    rpki: (l) => `Corrigez les ROA qui rendent ces annonces invalid aujourd’hui : ${l}.`,
    as0: (l) => `Vérifiez les ROA AS0 pour : ${l}.`
  },
  reczne: [
    ['LOA', 'Accord écrit du titulaire de l’espace d’adressage (et de l’opérateur amont, s’il annonce le préfixe) autorisant le scrubbing center à annoncer vos préfixes.'],
    ['Tunnel et MSS', 'Le trafic nettoyé revient généralement par un tunnel GRE ou IPsec. Configurez le MSS clamping (typiquement 1436 pour GRE, environ 1360 pour IPsec) avant de basculer le trafic, et vérifiez les performances de décapsulation du routeur.'],
    ['Délai de propagation', 'Les nouveaux ROA et objets route atteignent les filtres en quelques heures à 48 heures. Préparez-les avant une attaque, et non pendant.'],
    ['Annonce et retrait', 'Convenez avec l’opérateur de la manière d’annoncer les /24 (prepend, communities, suppression de l’annonce vers le transit) et de retirer la redirection en toute sécurité — annoncez d’abord le préfixe vous-même, puis retirez-le chez l’opérateur.'],
    ['Boucles de routage', 'Si l’opérateur vous renvoie des préfixes plus spécifiques de votre espace, filtrez-les sur la session pour éviter une boucle.'],
    ['Filtrage des clients', 'Filtrez les routes de vos clients à partir de leur AS-SET et de leurs objets route, et vérifiez la taille de l’ensemble avant de l’accepter. Ce filtre est le seul rempart contre une fuite de routes (route leak) d’un client.'],
    ['Test à blanc', 'Testez la redirection d’un /24 en dehors de toute attaque et vérifiez dans un looking glass qu’il est visible et RPKI-valid.'],
    ['RTBH', 'N’élargissez pas les ROA pour le RTBH (préfixes /32, community BLACKHOLE de la RFC 7999) — la RFC 9319 §6 le déconseille explicitement. La redirection vers un scrubbing center et le RTBH sont deux sujets distincts.']
  ],
  podstawa: [
    ['RFC 6811', 'états de validation de l’origine : valid, invalid, not found'],
    ['RFC 9319 (BCP 185)', 'ROA minimaux et maxLength ; §5.1 — les ROA des services de protection DDoS doivent exister avant l’attaque ; §6 — ne pas élargir les ROA pour le RTBH'],
    ['RFC 9582', 'profil des ROA'],
    ['RFC 7454 (BCP 194)', 'filtrage des préfixes plus longs que /24 et /48, l’IRR comme base des filtres'],
    ['RFC 6483', 'ROA AS0'],
    ['RFC 2622', 'noms hiérarchiques des AS-SET'],
    ['RFC 9224', 'recherche du serveur RDAP faisant autorité'],
    ['ASPA', 'autorisation des opérateurs amont (IETF SIDROPS)'],
    ['ripe-705', 'abuse-c obligatoire dans la base RIPE'],
    ['Documentation des RIR', 'RIPE NCC, ARIN, APNIC, AFRINIC, LACNIC : ROA, objets route, as-set, abuse, ASPA'],
    ['MANRS', 'enregistrement dans l’IRR et le RPKI, contacts à jour ; l’AS-SET comme cône client (module 2)'],
    ['Lasse Jarlskov (Telia Company)', '« Securing your AS-set » (BalticNOG 2025), « Prelude to a BGP hijack? » (DKNOG15) : rôle et taille de l’AS-SET, qui vous inclut'],
    ['Doug Madory, Job Snijders', '« The Scourge of Excessive AS-SETs » (2025) : AS-SET surdimensionnés et fuites de routes'],
    ['Opérateurs', 'documentation publique de mise en service de scrubbing centers reconnus : préfixe minimal, ROA, IRR dans une base de RIR, LOA, tunnel']
  ],
  podstawaLink: 'Liste complète des sources avec liens',
  obiektRoa: 'ROA à créer dans le portail RPKI de votre RIR',
  obiektRoute: 'Objets route (RPSL)',
  stopka: 'Le résultat est fourni à titre indicatif et repose sur les données publiques au moment de la vérification. Les exigences définitives sont fixées par l’opérateur du scrubbing center.'
};

window.RIR.fr = {
  RIPE: {
    nazwa: 'RIPE NCC',
    roa: { kroki: [
      'Connectez-vous au RPKI Dashboard (dashboard.rpki.ripe.net, aussi via my.ripe.net → RPKI). Lors de la première utilisation, créez une Hosted CA.',
      'Onglet « ROAs » → « Create ROA » (pour les préfixes pas encore annoncés) ou « Announcements » → « Create ROA » (pour les préfixes visibles dans BGP).',
      'Recommandé : un ROA distinct pour chaque /24 indiqué ci-dessus, en laissant maxLength égal à la longueur du préfixe. Plus simple : un seul ROA sur l’agrégat avec maxLength 24.',
      'Validez les modifications (« Pending Changes » → « Publish »). Si le Dashboard avertit que le ROA invalidera des annonces visibles, arrêtez-vous et vérifiez l’AS d’origine.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/' },
    route: { kroki: [
      'Ouvrez la base RIPE : apps.db.ripe.net → « Create an object » → route (IPv6 : route6). Vous pouvez aussi coller les objets ci-dessus dans « Syncupdates ».',
      'Renseignez route, origin, mnt-by (un mainteneur ayant autorité sur votre espace d’adressage) et source: RIPE.',
      'Authentifiez-vous avec le mot de passe ou la clé du mainteneur. Un objet route nécessite l’autorisation du titulaire de l’espace d’adressage — un ROA n’en crée pas.'
    ], link: 'https://docs.db.ripe.net/' },
    usun: { kroki: [
      'Recherchez l’objet dans apps.db.ripe.net (Query) et vérifiez son mnt-by.',
      'Si le mainteneur est le vôtre, choisissez « Delete object » et indiquez un motif. S’il appartient à une autre entreprise, demandez-lui de supprimer l’objet ou signalez-le au RIPE NCC (ripe-dbm@ripe.net).'
    ], link: 'https://docs.db.ripe.net/' },
    asset: { kroki: [
      'Créez un as-set avec un nom hiérarchique, p. ex. AS64496:AS-CLIENTS — c’est obligatoire pour les nouveaux ensembles dans la base RIPE.',
      'Indiquez votre AS et les AS de vos réseaux en aval dans members.',
      'Référencez l’ensemble dans les lignes export/mp-export de votre aut-num (announce AS64496:AS-CLIENTS) et dans PeeringDB.'
    ], link: 'https://docs.db.ripe.net/Set-Objects/' },
    abuse: { kroki: [
      'Créez un objet role avec un attribut abuse-mailbox.',
      'Référencez-le dans l’abuse-c de votre objet organisation — inetnum, inet6num et aut-num en héritent.',
      'Le RIPE NCC valide l’adresse chaque année (ripe-705) ; répondez au message de validation.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/faqs-for-abuse-c/' },
    aspa: { kroki: [
      'RPKI Dashboard → onglet ASPA → créez un objet pour votre AS.',
      'Indiquez comme fournisseurs (providers) tous vos opérateurs de transit et l’AS du scrubbing center.'
    ], link: 'https://labs.ripe.net/author/tim_bruijnzeels/aspa-in-the-rpki-dashboard-a-new-layer-of-routing-security/' }
  },
  ARIN: {
    nazwa: 'ARIN',
    roa: { kroki: [
      'Connectez-vous à ARIN Online → Routing Security. Lors de la première utilisation : « Sign Up for RPKI » → « Sign Up for Hosted ». Un RSA est requis (LRSA pour les ressources legacy).',
      'Manage RPKI → « View Details » pour votre organisation → RPKI: ROAs → « Create ROA ».',
      'Saisissez l’AS d’origine, le préfixe et maxLength. Recommandé : un ROA distinct pour chaque /24 ; plus simple : un seul ROA sur l’agrégat avec maxLength 24.',
      'Sur l’écran de confirmation, choisissez de créer un objet route correspondant dans l’ARIN IRR.'
    ], link: 'https://www.arin.net/resources/manage/rpki/options/hosted/' },
    route: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → sélectionnez votre Org ID → route (IPv6 : route6) → « Create Object ».',
      'Saisissez le préfixe et l’AS d’origine. L’ARIN IRR n’utilise pas d’objets mntner — les POC Admin, Tech et Routing de l’organisation y ont accès.',
      'Les objets route peuvent aussi être créés via l’API REST d’ARIN.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    usun: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → trouvez l’objet et supprimez-le.',
      'Les objets dans RADB ou d’autres registres sont supprimés par leur mainteneur — demandez-le à l’entreprise qui les a créés.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    asset: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → as-set → « Create Object ».',
      'Nom : AS-… ou AS64496:AS-… (nom hiérarchique recommandé — il empêche l’usurpation dans d’autres registres).',
      'Ajoutez les membres (votre AS et vos réseaux en aval) et indiquez l’ensemble dans PeeringDB.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    abuse: { kroki: [
      'Chaque Org ID doit avoir un Abuse POC. ARIN Online → Your Records → Point of Contact Records → « Create POC ».',
      'Un POC Admin ou Tech le rattache dans Organization Identifiers → Manage.'
    ], link: 'https://www.arin.net/resources/guide/account/records/poc/' },
    aspa: { kroki: [
      'ARIN Online → Routing Security → Manage RPKI → ASPAs → « Create ASPA ».',
      'Un ASPA couvre un seul AS ; ajoutez vos opérateurs de transit et l’AS du scrubbing center.'
    ], link: 'https://www.arin.net/resources/manage/rpki/aspa/' }
  },
  APNIC: {
    nazwa: 'APNIC',
    roa: { kroki: [
      'Connectez-vous à MyAPNIC → Resources → Route Management.',
      'Ajoutez une route : préfixe, AS d’origine et « Most Specific Announcement » (c’est le maxLength). Cochez ROA et whois — APNIC crée le ROA et l’objet route en même temps.',
      'Recommandé : une route distincte pour chaque /24 ; plus simple : l’agrégat avec MSA 24 (pour le whois, l’écart peut être de 8 bits au maximum).',
      'Si vos ressources sont gérées par un NIR (JPNIC, IDNIC, TWNIC, CNNIC, KRNIC), les ROA se créent dans le système de ce NIR.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    route: { kroki: [
      'MyAPNIC → Resources → Route Management, avec whois coché — l’objet route est créé en même temps que le ROA.',
      'Les objets modifiés en dehors de MyAPNIC (webupdates, e-mail) apparaissent comme des conflits — tenez-vous-en à une seule méthode.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    usun: { kroki: [
      'MyAPNIC → Route Management → supprimez la route (cela supprime le ROA et l’objet whois s’ils ont été créés ensemble).',
      'Les objets d’autres entreprises sont supprimés par leur mainteneur — demandez-le-lui ou contactez l’APNIC.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/' },
    asset: { kroki: [
      'Dans l’APNIC Whois, les nouveaux as-set doivent avoir un nom hiérarchique (AS64496:AS-…) ; c’est le mainteneur de l’AS qui les crée.',
      'Ajoutez les membres (votre AS et vos réseaux en aval) et indiquez l’ensemble dans PeeringDB.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/guide/as-set/' },
    abuse: { kroki: [
      'Chez l’APNIC, l’abuse-c est généré à partir de l’objet IRT. Modifiez-le dans MyAPNIC → Resources → IRTs.',
      'L’APNIC valide l’adresse tous les 6 mois — répondez au message de validation.'
    ], link: 'https://www.apnic.net/about-apnic/service-updates/apnic-whois-database-abuse-c/' },
    aspa: { kroki: [
      'ASPA est disponible dans MyAPNIC (section RPKI) et via la Registry API.',
      'Ajoutez vos opérateurs de transit et l’AS du scrubbing center.'
    ], link: 'https://blog.apnic.net/2026/07/09/aspa-at-apnic-strengthening-bgp-path-validation/' }
  },
  AFRINIC: {
    nazwa: 'AFRINIC',
    roa: { kroki: [
      'Connectez-vous à MyAFRINIC (certificat BPKI ou 2FA requis) → Resources → Resource Certification.',
      'Créez un ROA : nom, AS d’origine, préfixe, Max Length et période de validité.',
      'Recommandé : un ROA distinct pour chaque /24 ; plus simple : l’agrégat avec Max Length 24.'
    ], link: 'https://afrinic.net/support/rpki' },
    route: { kroki: [
      'MyAFRINIC → Resources → IRR → « Add Route » (IPv6 : « Add Route6 »).',
      'Le mnt-by de l’objet route doit être identique au mnt-lower de l’inetnum.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    usun: { kroki: [
      'MyAFRINIC → Resources → IRR → trouvez l’objet et supprimez-le.',
      'Les objets d’autres entreprises sont supprimés par leur mainteneur — demandez-le-lui ou contactez l’AFRINIC.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    asset: { kroki: [
      'MyAFRINIC → IRR → créez un as-set (le nom commence par AS- ; nom hiérarchique AS64496:AS-… recommandé).',
      'Ajoutez les membres (votre AS et vos réseaux en aval) et indiquez l’ensemble dans PeeringDB.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/create-as-set-objects' },
    abuse: { kroki: [
      'inetnum, inet6num et aut-num doivent avoir un abuse-c avec un abuse-mailbox.',
      'Définissez-le dans MyAFRINIC ou dans la base de l’AFRINIC.'
    ], link: 'https://afrinic.net/support/how-to-publish-abuse-contact-information' },
    aspa: { kroki: [
      'Vérifiez dans MyAFRINIC si ASPA est disponible — en octobre 2026, l’AFRINIC ne l’avait pas annoncé publiquement.',
      'Si vous créez un ASPA, incluez l’AS du scrubbing center.'
    ], link: 'https://afrinic.net/support/rpki' }
  },
  LACNIC: {
    nazwa: 'LACNIC',
    roa: { kroki: [
      'Connectez-vous à MiLACNIC → RPKI (modèle hosted).',
      'Créez un ROA pour le préfixe et l’AS d’origine. Important : LACNIC génère automatiquement les objets route à partir des ROA, uniquement pour le préfixe du ROA, sans tenir compte du maxLength.',
      'Chez LACNIC, choisissez donc des ROA distincts pour chaque /24 — cela crée aussi un objet route pour chaque /24.',
      'Les attributions brésiliennes (Registro.br / NIC.br) sont gérées par NIC.br en modèle delegated, et non dans MiLACNIC.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    route: { kroki: [
      'Dans le LACNIC IRR, les objets route sont générés à partir des ROA créés dans MiLACNIC — créez un ROA pour chaque préfixe qui doit avoir un objet route.',
      'Après quelques heures, vérifiez l’objet sur irr.lacnic.net.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    usun: { kroki: [
      'Les objets route du LACNIC IRR disparaissent lorsque le ROA correspondant est supprimé dans MiLACNIC.',
      'Les objets dans RADB ou d’autres registres sont supprimés par leur mainteneur.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    asset: { kroki: [
      'MiLACNIC → IRR → créez un as-set (nom hiérarchique AS64496:AS-… recommandé).',
      'Ajoutez les membres (votre AS et vos réseaux en aval) et indiquez l’ensemble dans PeeringDB.'
    ], link: 'https://lacnic.zendesk.com/hc/es/categories/360002625214-Internet-Routing-Registry' },
    abuse: { kroki: [
      'inetnum et aut-num doivent avoir un abuse-c avec un abuse-mailbox, validé au moins deux fois par an.',
      'Définissez-le dans MiLACNIC, dans les contacts de l’organisation et de la ressource — un échec de validation bloque l’accès à MiLACNIC.'
    ], link: 'https://politicas.lacnic.net/politicas/detail/id/LAC-2018-5' },
    aspa: { kroki: [
      'ASPA a été ajouté à MiLACNIC en octobre 2026 — consultez la section RPKI.',
      'Ajoutez vos opérateurs de transit et l’AS du scrubbing center.'
    ], link: 'https://blog.lacnic.net/en/caribnog-lacnic/' }
  }
};

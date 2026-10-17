/* ITORO — Test gotowości prefiksów do scrubbing center — Español */
window.NAPISY.es = {
  tytulStrony: 'Prueba de preparación de prefijos para el centro de scrubbing — ITORO',
  opisStrony: 'Ingrese su número de AS y compruebe si los ROA, objetos route, el AS-SET y los datos de registro permiten desviar el tráfico a un centro de scrubbing durante un ataque DDoS. Sin cuenta, en su navegador.',
  goraOpis: 'Aseguramos redes y las protegemos contra ataques DDoS.',
  pomin: 'Ir al contenido',
  nadtytul: 'Herramientas gratuitas',
  h1: '¿Están sus prefijos listos para ser desviados a un centro de scrubbing?',
  heroH: 'Durante un ataque DDoS, el tráfico se desvía a un centro de scrubbing anunciando prefijos <strong>/24</strong> (IPv6: <strong>/48</strong>) extraídos de bloques más grandes. Si sus ROA no lo permiten o falta el objeto route en la base de datos del RIR, el anuncio es descartado por las redes que validan RPKI y por los filtros del operador, justo cuando más se necesita la protección. Esta herramienta lo verifica con datos públicos y le indica qué corregir.',
  kartaTytul: 'Prueba de preparación de prefijos',
  wiodacy: 'Ingrese su número de AS. La herramienta obtiene los prefijos anunciados, los ROA, los objetos route, el AS-SET y los datos del titular de los recursos, y luego los contrasta con las recomendaciones de los RFC y los requisitos habituales de los centros de scrubbing.',
  poleAs: 'Número de AS',
  poleAsPomoc: 'p. ej. 64496 o AS64496',
  poleOperator: 'AS del centro de scrubbing (opcional)',
  poleOperatorPomoc: 'Si lo conoce, verificaremos los ROA y el ASPA para ese AS.',
  poleTryb: '¿Quién anunciará sus prefijos durante un ataque?',
  trybKlient: 'El operador, con mi AS como origen',
  trybOperator: 'El operador, desde su propio AS',
  sprawdz: 'Verificar',
  sprawdzam: 'Verificando…',
  czas: 'Resultados en unos segundos. Su navegador obtiene los datos de servicios públicos (entre ellos la base de datos de RIPE, los registros IRR y PeeringDB).',
  wersja: 'Versión 1.1.0 · 17 de octubre de 2026',
  itoroNad: 'Herramientas ofrecidas por ITORO',
  itoroH2: 'Mejoramos la seguridad de su red',
  itoroP1: 'Implementamos y operamos sistemas de protección contra DDoS, principalmente en redes de operadores de telecomunicaciones y en centros de datos.',
  itoroPunkty: [
    '<strong>Detección del ataque en 2–5 segundos</strong>, con filtrado en el borde de su propia red',
    '<strong>Desvío a un centro de scrubbing</strong> cuando el ataque supera la capacidad de sus enlaces'
  ],
  itoroPrzycisk: 'Hable con nosotros',
  podReklama: 'La prueba se basa en las recomendaciones de los RFC y en los requisitos publicados por operadores de centros de scrubbing, globales y polacos. Utiliza solo datos que cualquiera puede verificar en los registros.',

  krok: {
    as: 'datos del AS', prefiksy: 'prefijos anunciados', roa: 'ROA y ASPA', irr: 'objetos route (IRR)',
    autnum: 'aut-num y AS-SET', pdb: 'PeeringDB', abuse: 'contacto de abuso', sasiedzi: 'vecinos BGP',
    listy: 'listas de prefijos (bgpq4)', wlaczenia: 'quién incluye su AS en AS-SET', pref: (n, m) => `detalles de prefijos (${n}/${m})`, wlasciciel: (n, m) => `titulares de recursos (${n}/${m})`, operator: 'ROA del operador'
  },
  bladAs: 'Ingrese un número de AS válido (1–4294967294).',
  bladSieci: (u) => `No se pudieron obtener los datos (${u}). Inténtelo de nuevo en unos momentos.`,
  bladCzesciowy: (u) => `Algunos datos no están disponibles (${u}): el resultado puede estar incompleto.`,

  wynikDla: (as, nazwa) => `Resultado para AS${as}${nazwa ? ' — ' + nazwa : ''}`,
  werdykt: { blok: 'Los prefijos no están listos para el desvío', popr: 'Listos con reservas: hay aspectos por corregir', ok: 'Los prefijos están listos para el desvío' },
  werdyktOpis: {
    blok: 'Al menos un problema impedirá que el centro de scrubbing anuncie sus prefijos o hará que sean descartados en internet. Corríjalo antes de un ataque: los ROA y los objetos route tardan desde unas horas hasta dos días en propagarse.',
    popr: 'Nada bloquea el desvío, pero algunos operadores rechazarán prefijos o pedirán correcciones durante la incorporación del servicio.',
    ok: 'Los datos de registro permiten anunciar cada /24 (/48) de su espacio de direcciones. Lo que no se puede verificar desde fuera aparece al final.'
  },
  kafle: { pref: 'prefijos anunciados', gotowe: 'listos para dividir en /24 y /48', blok: 'problemas bloqueantes', popr: 'aspectos por corregir', zal: 'recomendaciones' },
  stopnie: { blok: 'Bloqueante', popr: 'Por corregir', zal: 'Recomendado', ok: 'OK', info: 'Info' },
  sekcjaPoprawki: 'Plan de acción, paso a paso',
  planOpis: (r) => `Pasos en el orden recomendado. Cada uno incluye instrucciones para su registro${r ? ' (' + r + ')' : ''}.`,
  jakW: (r) => `Cómo hacerlo en ${r}`,
  dokumentacja: 'Documentación',
  krokTyt: {
    dlugosc: 'Reemplace los prefijos demasiado largos', roa: 'Corrija los ROA', roaOp: 'Agregue ROA para el centro de scrubbing',
    aspa: 'Complete el ASPA', route: 'Cree objetos route', usun: 'Elimine objetos route obsoletos',
    loa: 'Prepare una LOA', asset: 'Ordene el AS-SET', wlaczenia: 'Verifique quién incluye su AS en sus AS-SET', abuse: 'Configure el contacto de abuso', pdb: 'Complete PeeringDB', inne: 'Otros'
  },
  ogolne: {
    dlugosc: ['Reemplace los prefijos más largos que /24 (IPv6: /48) por el /24 (/48) que los contiene, o anúncielos junto con él.'],
    loa: ['Haga una lista de los prefijos de este paso y del titular de cada uno (datos de la base del RIR).', 'Pida al titular de las direcciones —y al proveedor upstream, si es quien anuncia el prefijo— que firme una LOA según la plantilla de abajo.', 'Los operadores suelen aceptar la LOA en PDF, en papel membretado de la empresa y firmada por una persona autorizada.'],
    asset: ['Regla práctica: incluya en su AS-SET solo lo que vuelve a anunciar por BGP, es decir, a usted mismo y a sus clientes. No agregue IXP ni peers.', 'Verifique el tamaño del AS-SET de un cliente antes de incluirlo; elimine a los clientes que se fueron y revise el conjunto con regularidad.'],
    wlaczenia: ['Revise los conjuntos listados en este paso. El titular figura en el objeto as-set (mnt-by, admin-c) del IRR.', 'Si un conjunto pertenece a una red con la que no tiene relación BGP, solicite que se elimine su AS. Si no hay respuesta, repórtelo al operador de la base IRR.', 'Publique un ASPA con sus proveedores upstream: limita la suplantación de su AS a través de AS-SET de otras redes.', 'Configure un monitoreo continuo de nuevos AS-SET que hagan referencia a su AS.'],
    pdb: ['Inicie sesión en peeringdb.com y abra el registro de su red.', 'En “IRR as-set/route-set”, ingrese su AS-SET con su fuente, p. ej. RIPE::AS64496:AS-CLIENTES.', 'Guarde y verifique que coincida con su aut-num.'],
    inne: []
  },
  koncowe: {
    tytul: 'Después de los cambios',
    kroki: [
      'Espere: los ROA llegan a los validadores normalmente en una hora; los objetos route llegan a los filtros de los operadores en un plazo de unas horas a 48 horas.',
      'Ejecute esta prueba de nuevo y compruebe que los pasos hayan desaparecido del plan.',
      'Envíe al centro de scrubbing su lista de prefijos, el AS-SET y la LOA. Acuerde cómo se anuncian los /24 y cómo se retira el desvío.',
      'Pruebe el desvío de un /24 fuera de un ataque.'
    ]
  },
  loaTytul: 'Plantilla de LOA (en inglés, como suelen aceptarla los operadores)',
  sekcjaPoprawkiPusta: 'No hay nada que corregir en los datos públicos.',
  motywJasny: 'Claro', motywCiemny: 'Oscuro', motywAria: 'Cambiar el tema de colores',
  sekcjaAs: 'Configuración del AS',
  sekcjaPrefiksy: 'Prefijos',
  sekcjaObiekty: 'Objetos listos para pegar',
  obiektyOpis: 'Sugerencias basadas en el resultado. Revíselas antes de crearlas: el maintainer (mnt-by) se copió de los objetos existentes.',
  sekcjaListy: 'Listas de prefijos (bgpq4, versión local)',
  listyOpis: 'Generadas en su equipo por bgpq4 a partir de sus AS-SET. Es, aproximadamente, el filtro que un operador construirá con ellos.',
  pobierzListe: 'Descargar la lista completa (.txt)',
  listaObcieta: (n, m) => `Se muestran ${n} de ${m} líneas; la lista completa está en el archivo.`,
  sekcjaReczne: 'Lo que no se puede verificar desde fuera',
  sekcjaPodstawa: 'En qué se basan las pruebas',
  kolPrefiks: 'Prefijo', kolRpki: 'RPKI', kolPodzial: 'División en /24 (/48)', kolIrr: 'Objeto route', kolWlasciciel: 'Titular', kolUwagi: 'Observaciones',
  pokazWszystkie: (n) => `Mostrar todos (${n})`,
  limit: (n, m) => `Se analizaron en detalle ${n} de ${m} prefijos (las redes muy grandes se analizan parcialmente para no sobrecargar los servicios públicos).`,
  drukuj: 'Imprimir / PDF', json: 'Descargar JSON', link: 'Copiar enlace al resultado', skopiowano: 'Copiado', kopiuj: 'Copiar',
  rpkiStan: { valid: 'valid', invalid: 'invalid', notfound: 'sin ROA', invalidLen: 'invalid (longitud)', invalidAs: 'invalid (otro AS)' },
  podzialPelny: 'todos', podzialBrak: 'ninguno', podzialCzesc: (a, b) => `${a} de ${b}`, podzialNd: 'n/d',
  irrRir: (db) => `sí (${db})`, irrBrak: 'falta', irrNieaut: (db) => `solo ${db}`,
  wlTak: 'coincide', wlNie: 'otra organización', wlPa: 'PA de un LIR', wlNd: '—',

  t: {
    asIstnieje: { ok: (n) => `El AS existe: ${n}.`, blok: 'No se encontró ese AS en los registros.' },
    ogloszenia: { ok: (a, b) => `El AS anuncia ${a} prefijos IPv4 y ${b} prefijos IPv6.`, blok: 'El AS no anuncia ningún prefijo en este momento: no hay nada que desviar. Si un proveedor upstream anuncia sus prefijos, ejecute la prueba para el AS de ese proveedor; el desvío requerirá su consentimiento (LOA).' },
    abuse: { ok: (m) => `Contacto de abuso: ${m}.`, popr: 'No hay contacto de abuso (abuse-c). Los centros de scrubbing y los equipos CERT lo usan durante un incidente; es obligatorio en la región de RIPE NCC.' },
    autnum: { okRir: (r) => `El AS está registrado en ${r}.`, ok: 'El objeto aut-num existe en la base de datos de RIPE.', popr: 'No existe objeto aut-num en la base de datos de RIPE.', info: 'AS fuera de la región de RIPE NCC: verifique aut-num y AS-SET en la base de datos de su RIR.' },
    eksport: { ok: (s) => `La política de exportación apunta al AS-SET: ${s}.`, zal: 'El aut-num no indica un AS-SET en las líneas export/mp-export. Los centros de scrubbing construyen los filtros a partir del AS-SET o solo del AS; con redes downstream, el AS-SET es imprescindible.' },
    asset: { ok: (s, z) => `${s} (registro ${z}) contiene su AS.`, nieaut: (s, z) => `${s} existe solo en ${z}. Muchos operadores aceptan únicamente conjuntos de las bases de datos de los RIR.`, zadnego: 'No se encontró ningún AS-SET ni en el aut-num ni en PeeringDB. Sin él, el operador construye el filtro solo con su AS, lo cual no basta si tiene redes downstream.', popr: (s) => `${s} no contiene su AS: un filtro construido con este conjunto omitirá sus prefijos.`, brak: (s) => `No se encontró ${s} en la base de datos de RIPE. Muchos operadores no aceptan un conjunto en RADB u otro registro no autoritativo.` },
    assetHier: { ok: (s) => `${s} tiene un nombre jerárquico.`, zal: (s) => `${s} tiene un nombre corto. Los conjuntos nuevos deben llevar el AS como prefijo (p. ej. AS64496:AS-CLIENTES, RFC 2622); esto protege contra la suplantación en otros registros.` },
    pdb: { ok: (s) => `PeeringDB: el registro existe, AS-SET ${s}.`, zal: 'No hay registro en PeeringDB o el campo AS-SET está vacío. Muchos operadores construyen filtros a partir del AS-SET de PeeringDB.', roz: (a, b) => `El AS-SET en PeeringDB (${a}) difiere del AS-SET en el aut-num (${b}).` },
    upstream: { ok: (n) => `Proveedores upstream visibles en BGP: ${n}.`, zal: (n) => `Solo se ve ${n} proveedor upstream. Con un único enlace, el ataque lo satura antes de que el desvío surta efecto; considere un segundo enlace o RTBH y BGP FlowSpec con su proveedor.` },
    aspa: { ok: (l) => `El objeto ASPA existe (proveedores: ${l}).`, brakOp: (op) => `El objeto ASPA no incluye AS${op}. Tras el desvío, la ruta a través del centro de scrubbing será inválida para las redes que validan ASPA; agregue AS${op} a la lista de proveedores.`, info: 'No hay objeto ASPA. No es obligatorio; si lo crea, incluya también el AS del centro de scrubbing como proveedor.' },
    opRoa: { ok: (op) => `Los ROA para AS${op} cubren cada /24 (/48).`, blok: (op, n) => `El operador anuncia desde su propio AS, pero ningún ROA para AS${op} cubre ${n} prefijos /24 (/48). Las redes que validan RPKI descartarán esos anuncios.` },
    nieaktualne: { zal: (l) => `Objetos route con su AS para prefijos que usted no anuncia: ${l}. Elimine los obsoletos: el desorden en el IRR dificulta la verificación.` },
    higiena: {
      rozmiarOk: (s, n, r) => `${s} se expande a ${n} AS (clientes visibles en BGP: ${r}). El tamaño corresponde a la red.`,
      rozmiarSredni: (s, n, r) => `${s} se expande a ${n} AS, mientras que en BGP se ven ${r} clientes. Verifique que vuelve a anunciarlos a todos.`,
      rozmiarDuzy: (s, n, r) => `${s} se expande a ${n} AS, mientras que en BGP solo se ven ${r} clientes. Un filtro construido con un conjunto así deja pasar una fuga de rutas (route leak) de un cliente y facilita suplantar prefijos de otras redes; redúzcalo a su cono de clientes (customer cone).`,
      glebokosc: (s, d) => `${s} tiene ${d} niveles de anidamiento. La recursión se descontrola rápidamente; limítela a los conjuntos de sus clientes directos.`,
      skladowe: (s, l) => `La mayor parte de ${s} proviene de: ${l}. Verifique el tamaño de los AS-SET de estos clientes antes de incluirlos.`,
      ixp: (s, l) => `${s} contiene conjuntos que parecen listas de miembros de IXP o de peers: ${l}. Un conjunto de clientes no debe incluir IXP ni peers, ya que usted no los vuelve a anunciar.`,
      nieaktualni: (s, l) => `${s} contiene AS que no aparecen como clientes suyos en BGP: ${l}. Si son clientes que se fueron, elimínelos.`,
      wlaczeniaObce: (k, l) => `Redes sin relación BGP visible con usted han incluido su AS en sus AS-SET (aparte de listas de peers o de IXP) (${k}): ${l}. Así fue el preludio del intento de secuestro (hijack) descrito en DKNOG15. Cada inclusión de este tipo permite a esa red anunciar sus prefijos a través de sus proveedores upstream pese a los filtros IRR; revíselas y solicite su eliminación.`,
      wlaczeniaIxp: (k, l) => `Su AS figura en conjuntos de peers o de miembros de IXP de redes sin relación BGP visible con usted (${k}): ${l}. Suelen documentar peering; verifique que realmente tiene una sesión con ellas. Estos conjuntos también pueden usarse para eludir filtros.`,
      wlaczeniaNieznane: (k, l) => `Su AS figura en AS-SET cuyos nombres no incluyen el número de AS del titular (${k}): ${l}. Verifique en el IRR quién los mantiene y si son sus proveedores o IXP.`,
      wlaczeniaOk: (k) => `Su AS figura en ${k} AS-SET ajenos; todos pertenecen a sus vecinos BGP o a usted.`,
      prefiksy: (s, a, b) => `${s}: prefijos según bgpq4; IPv4: ${a}, IPv6: ${b}.`,
      lokalnie: 'El número de prefijos de su AS-SET y las listas de prefijos listas para filtros (bgpq4) se muestran en la versión descargable, que se ejecuta en su equipo.',
      bezBgpq4: 'La herramienta se ejecuta en local, pero sin bgpq4, así que no hay listas de prefijos. Instale bgpq4 (Linux: apt install bgpq4, macOS: brew install bgpq4) o use la versión Docker.'
    }
  },
  p: {
    zaDlugi: (d) => `Prefijo más largo que /${d}: se filtra en internet (RFC 7454) y los centros de scrubbing no lo aceptan.`,
    rpkiInvalid: 'El anuncio es hoy RPKI-invalid: las redes con ROV ya lo descartan.',
    rpkiBrak: 'No hay ROA para este prefijo. Algunos centros de scrubbing exigen un ROA, y las redes con ROV tratan ese prefijo peor que uno válido.',
    podzialBrak: (d, n) => `Ninguno de los ${n} prefijos /${d} será RPKI-valid. El desvío de parte del espacio no funcionará.`,
    podzialCzesc: (d, a, n) => `${n - a} de ${n} prefijos /${d} no serán RPKI-valid al dividirse.`,
    maxLen: (r, m) => `El ROA ${r} tiene maxLength ${m}. Esto permite extraer /24, pero el RFC 9319 recomienda ROA separados para los prefijos anunciados: un maxLength amplio facilita los secuestros con origen falsificado.`,
    irrBrak: 'No hay objeto route con su AS en una base de datos de RIR. La mayoría de los centros de scrubbing construye filtros a partir del IRR y no aceptará el prefijo.',
    irrNieaut: (db) => `El objeto route existe solo en ${db}. Los operadores suelen aceptar únicamente las bases de datos de los RIR (RIPE, ARIN, APNIC, AFRINIC, LACNIC).`,
    irrPod: (d, a, n) => `Objetos route para prefijos /${d}: ${a} de ${n}. Algunos operadores exigen un objeto para el prefijo exacto anunciado; créelos antes de un ataque.`,
    konflikt: (l) => `Objetos route con otro AS: ${l}. Si están obsoletos, elimínelos: confunden a los filtros y la verificación del operador.`,
    konfliktInv: (l) => `Objetos route con otro AS que contradicen el ROA (RPKI-invalid): ${l}. Elimínelos.`,
    as0: 'Un ROA con AS0 cubre parte del prefijo (RFC 6483): nadie puede anunciar esas direcciones, tampoco el centro de scrubbing.',
    innyRoa: (l) => `ROA para otros AS que cubren el prefijo: ${l}. Verifique si todavía son necesarios.`,
    wlInny: (o) => `El recurso pertenece a una organización distinta (${o}) de la del AS. El centro de scrubbing pedirá una LOA al titular de las direcciones.`,
    wlPa: (s) => `Espacio asignado por un LIR (estado ${s}). El centro de scrubbing pedirá una LOA al LIR.`,
    nadrzedny: (l) => `${l} anuncia un prefijo menos específico. Suele tratarse de espacio del proveedor upstream: se necesita su consentimiento (LOA) para el desvío.`,
    wszystkoOk: 'Sin observaciones.'
  },
  f: {
    roa: (p, d) => `Agregue ROA que permitan anunciar cada /${d} de ${p}.`,
    roaNowe: (p) => `Cree ROA con su AS y maxLength igual a la longitud del prefijo para: ${p}.`,
    roaA: (n) => `Opción recomendada (RFC 9319): ROA separados para ${n} prefijos.`,
    roaB: (p, d) => `Opción más sencilla: maxLength ${d} en el ROA para ${p}.`,
    route: (n, d) => `Cree ${n} objetos route para prefijos /${d}.`,
    routeAgg: (p) => `Cree un objeto route para ${p} con su AS en una base de datos de RIR.`,
    usun: (n) => `Elimine o verifique ${n} objetos route con otro AS.`,
    loa: (l) => `Prepare una LOA para: ${l}.`,
    zaDlugi: (l) => `Reemplace los prefijos más largos que /24 (/48): ${l}.`,
    rpki: (l) => `Corrija los ROA que hoy hacen inválidos estos anuncios: ${l}.`,
    as0: (l) => `Verifique los ROA con AS0 para: ${l}.`
  },
  reczne: [
    ['LOA', 'Consentimiento por escrito del titular de las direcciones (y del proveedor upstream, si es quien anuncia el prefijo) para que el centro de scrubbing anuncie sus prefijos.'],
    ['Túnel y MSS', 'El tráfico limpio suele regresar por GRE o IPsec. Configure MSS clamping (normalmente 1436 para GRE y alrededor de 1360 para IPsec) antes de conmutar el tráfico, y verifique el rendimiento de desencapsulación en el router.'],
    ['Tiempo de propagación', 'Los nuevos ROA y objetos route llegan a los filtros en un plazo de unas horas a 48 horas. Prepárelos antes de un ataque, no durante él.'],
    ['Anuncio y retirada', 'Acuerde con el operador cómo se anuncian los /24 (prepend, communities, supresión del anuncio hacia el tránsito) y cómo retirar el desvío de forma segura: primero anuncie el prefijo usted mismo y después retírelo en el operador.'],
    ['Bucles de enrutamiento', 'Si el operador le devuelve prefijos más específicos de su espacio, fíltrelos en la sesión para evitar un bucle.'],
    ['Filtrado de clientes', 'Filtre las rutas de sus clientes según su AS-SET y sus objetos route, y verifique el tamaño del conjunto antes de aceptarlo. Ese filtro es la única barrera contra una fuga de rutas (route leak) de un cliente.'],
    ['Prueba en seco', 'Pruebe el desvío de un /24 fuera de un ataque y compruebe en un looking glass que sea visible y RPKI-valid.'],
    ['RTBH', 'No amplíe los ROA para RTBH (prefijos /32, community BLACKHOLE del RFC 7999): el RFC 9319 §6 lo desaconseja expresamente. El desvío a un centro de scrubbing y el RTBH son asuntos distintos.']
  ],
  podstawa: [
    ['RFC 6811', 'estados de validación de origen: valid, invalid, not found (sin ROA)'],
    ['RFC 9319 (BCP 185)', 'ROA mínimos y maxLength; §5.1: los ROA para servicios de mitigación de DDoS deben existir antes del ataque; §6: no ampliar los ROA para RTBH'],
    ['RFC 9582', 'perfil de ROA'],
    ['RFC 7454 (BCP 194)', 'filtrado de prefijos más largos que /24 y /48; el IRR como base de los filtros'],
    ['RFC 6483', 'ROA con AS0'],
    ['RFC 2622', 'nombres jerárquicos de AS-SET'],
    ['RFC 9224', 'búsqueda del servidor RDAP autoritativo'],
    ['ASPA', 'autorización de proveedores upstream (IETF SIDROPS)'],
    ['ripe-705', 'abuse-c obligatorio en la base de datos de RIPE'],
    ['Documentación de los RIR', 'RIPE NCC, ARIN, APNIC, AFRINIC, LACNIC: ROA, objetos route, as-set, abuso, ASPA'],
    ['MANRS', 'registro en IRR y RPKI, contactos actualizados; AS-SET como cono de clientes (módulo 2)'],
    ['Lasse Jarlskov (Telia Company)', '“Securing your AS-set” (BalticNOG 2025), “Prelude to a BGP hijack?” (DKNOG15): propósito y tamaño del AS-SET, quién lo incluye a usted'],
    ['Doug Madory, Job Snijders', '“The Scourge of Excessive AS-SETs” (2025): AS-SET sobredimensionados y fugas de rutas'],
    ['Operadores', 'documentación pública de incorporación de operadores reconocidos de centros de scrubbing: prefijo mínimo, ROA, IRR en una base de datos de RIR, LOA, túnel']
  ],
  podstawaLink: 'Lista completa de fuentes con enlaces',
  obiektRoa: 'ROA que debe crear en el portal RPKI de su RIR',
  obiektRoute: 'Objetos route (RPSL)',
  stopka: 'El resultado es meramente informativo y se basa en datos públicos en el momento de la verificación. Los requisitos definitivos los establece el operador del centro de scrubbing.'
};

window.RIR.es = {
  RIPE: {
    nazwa: 'RIPE NCC',
    roa: { kroki: [
      'Inicie sesión en el RPKI Dashboard (dashboard.rpki.ripe.net, también desde my.ripe.net → RPKI). La primera vez, cree una Hosted CA.',
      'Pestaña “ROAs” → “Create ROA” (para prefijos aún no anunciados) o “Announcements” → “Create ROA” (para prefijos visibles en BGP).',
      'Opción recomendada: un ROA separado para cada /24 indicado arriba, con maxLength igual a la longitud del prefijo. Opción más sencilla: un ROA sobre el agregado con maxLength 24.',
      'Confirme los cambios (“Pending Changes” → “Publish”). Si el Dashboard advierte que el ROA invalidará anuncios visibles, deténgase y verifique el AS de origen.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/' },
    route: { kroki: [
      'Abra la base de datos de RIPE: apps.db.ripe.net → “Create an object” → route (IPv6: route6). También puede pegar los objetos de arriba en “Syncupdates”.',
      'Complete route, origin, mnt-by (un maintainer con autoridad sobre su espacio de direcciones) y source: RIPE.',
      'Autorice con la contraseña o la clave del maintainer. Un objeto route requiere la autorización del titular de las direcciones; un ROA no crea el objeto route.'
    ], link: 'https://docs.db.ripe.net/' },
    usun: { kroki: [
      'Busque el objeto en apps.db.ripe.net (Query) y verifique su mnt-by.',
      'Si el maintainer es suyo, elija “Delete object” e indique el motivo. Si pertenece a otra empresa, pídale que lo elimine o repórtelo a RIPE NCC (ripe-dbm@ripe.net).'
    ], link: 'https://docs.db.ripe.net/' },
    asset: { kroki: [
      'Cree un as-set con nombre jerárquico, p. ej. AS64496:AS-CLIENTES; en la base de datos de RIPE los conjuntos nuevos deben usarlo.',
      'En members, incluya su AS y los AS de sus redes downstream.',
      'Haga referencia al conjunto en las líneas export/mp-export de su aut-num (announce AS64496:AS-CLIENTES) y en PeeringDB.'
    ], link: 'https://docs.db.ripe.net/Set-Objects/' },
    abuse: { kroki: [
      'Cree un objeto role con el atributo abuse-mailbox.',
      'Haga referencia a él en el abuse-c de su objeto organisation; inetnum, inet6num y aut-num lo heredan automáticamente.',
      'RIPE NCC valida la dirección cada año (ripe-705); responda al mensaje de validación.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/faqs-for-abuse-c/' },
    aspa: { kroki: [
      'RPKI Dashboard → pestaña ASPA → cree un objeto para su AS.',
      'Incluya como proveedores a todos sus proveedores de tránsito y el AS del centro de scrubbing.'
    ], link: 'https://labs.ripe.net/author/tim_bruijnzeels/aspa-in-the-rpki-dashboard-a-new-layer-of-routing-security/' }
  },
  ARIN: {
    nazwa: 'ARIN',
    roa: { kroki: [
      'Inicie sesión en ARIN Online → Routing Security. La primera vez: “Sign Up for RPKI” → “Sign Up for Hosted”. Se requiere un RSA (LRSA para recursos legacy).',
      'Manage RPKI → “View Details” de su organización → RPKI: ROAs → “Create ROA”.',
      'Ingrese el AS de origen, el prefijo y el maxLength. Opción recomendada: un ROA separado para cada /24; más sencilla: un ROA sobre el agregado con maxLength 24.',
      'En la pantalla de confirmación, elija crear el objeto route correspondiente en el ARIN IRR.'
    ], link: 'https://www.arin.net/resources/manage/rpki/options/hosted/' },
    route: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → seleccione su Org ID → route (IPv6: route6) → “Create Object”.',
      'Ingrese el prefijo y el AS de origen. El ARIN IRR no usa objetos mntner: tienen acceso los POC Admin, Tech y Routing de la organización.',
      'Los objetos route también pueden crearse mediante la API REST de ARIN.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    usun: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → busque el objeto y elimínelo.',
      'Los objetos en RADB u otros registros los elimina su maintainer: pídaselo a la empresa que los creó.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    asset: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → as-set → “Create Object”.',
      'Nombre: AS-… o AS64496:AS-… (se recomienda el jerárquico: evita la suplantación en otros registros).',
      'Agregue los miembros (su AS y sus downstreams) e ingrese el conjunto en PeeringDB.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    abuse: { kroki: [
      'Cada Org ID debe tener un Abuse POC. ARIN Online → Your Records → Point of Contact Records → “Create POC”.',
      'Un POC Admin o Tech lo asocia en Organization Identifiers → Manage.'
    ], link: 'https://www.arin.net/resources/guide/account/records/poc/' },
    aspa: { kroki: [
      'ARIN Online → Routing Security → Manage RPKI → ASPAs → “Create ASPA”.',
      'Un ASPA cubre un solo AS; agregue sus proveedores de tránsito y el AS del centro de scrubbing.'
    ], link: 'https://www.arin.net/resources/manage/rpki/aspa/' }
  },
  APNIC: {
    nazwa: 'APNIC',
    roa: { kroki: [
      'Inicie sesión en MyAPNIC → Resources → Route Management.',
      'Agregue una ruta: prefijo, AS de origen y “Most Specific Announcement” (equivale a maxLength). Marque ROA y whois: APNIC crea el ROA y el objeto route a la vez.',
      'Opción recomendada: una ruta separada para cada /24; más sencilla: el agregado con MSA 24 (para whois la diferencia puede ser como máximo de 8 bits).',
      'Si sus recursos los administra un NIR (JPNIC, IDNIC, TWNIC, CNNIC, KRNIC), los ROA se crean en el sistema de ese NIR.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    route: { kroki: [
      'MyAPNIC → Resources → Route Management con whois marcado: el objeto route se crea junto con el ROA.',
      'Los objetos modificados fuera de MyAPNIC (webupdates, correo electrónico) aparecen como conflictos; use un solo método.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    usun: { kroki: [
      'MyAPNIC → Route Management → elimine la ruta (se eliminan el ROA y el objeto whois si se crearon juntos).',
      'Los objetos de otras empresas los elimina su maintainer: pídaselo o contacte a APNIC.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/' },
    asset: { kroki: [
      'En APNIC Whois los as-set nuevos deben tener nombre jerárquico (AS64496:AS-…); los crea el maintainer del AS.',
      'Agregue los miembros (su AS y sus downstreams) e ingrese el conjunto en PeeringDB.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/guide/as-set/' },
    abuse: { kroki: [
      'En APNIC el abuse-c se genera a partir del objeto IRT. Edítelo en MyAPNIC → Resources → IRTs.',
      'APNIC valida la dirección cada 6 meses: responda al mensaje de validación.'
    ], link: 'https://www.apnic.net/about-apnic/service-updates/apnic-whois-database-abuse-c/' },
    aspa: { kroki: [
      'ASPA está disponible en MyAPNIC (sección RPKI) y mediante la Registry API.',
      'Agregue sus proveedores de tránsito y el AS del centro de scrubbing.'
    ], link: 'https://blog.apnic.net/2026/07/09/aspa-at-apnic-strengthening-bgp-path-validation/' }
  },
  AFRINIC: {
    nazwa: 'AFRINIC',
    roa: { kroki: [
      'Inicie sesión en MyAFRINIC (se requiere certificado BPKI o 2FA) → Resources → Resource Certification.',
      'Cree un ROA: nombre, AS de origen, prefijo, Max Length y período de validez.',
      'Opción recomendada: un ROA separado para cada /24; más sencilla: el agregado con Max Length 24.'
    ], link: 'https://afrinic.net/support/rpki' },
    route: { kroki: [
      'MyAFRINIC → Resources → IRR → “Add Route” (IPv6: “Add Route6”).',
      'El mnt-by del objeto route debe ser igual al mnt-lower del inetnum.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    usun: { kroki: [
      'MyAFRINIC → Resources → IRR → busque el objeto y elimínelo.',
      'Los objetos de otras empresas los elimina su maintainer: pídaselo o contacte a AFRINIC.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    asset: { kroki: [
      'MyAFRINIC → IRR → cree un as-set (el nombre empieza por AS-; se recomienda el jerárquico AS64496:AS-…).',
      'Agregue los miembros (su AS y sus downstreams) e ingrese el conjunto en PeeringDB.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/create-as-set-objects' },
    abuse: { kroki: [
      'inetnum, inet6num y aut-num deben tener un abuse-c con abuse-mailbox.',
      'Configúrelo en MyAFRINIC o en la base de datos de AFRINIC.'
    ], link: 'https://afrinic.net/support/how-to-publish-abuse-contact-information' },
    aspa: { kroki: [
      'Verifique en MyAFRINIC si ASPA está disponible; a octubre de 2026, AFRINIC no lo ha anunciado públicamente.',
      'Si crea un ASPA, incluya el AS del centro de scrubbing.'
    ], link: 'https://afrinic.net/support/rpki' }
  },
  LACNIC: {
    nazwa: 'LACNIC',
    roa: { kroki: [
      'Inicie sesión en MiLACNIC → RPKI (modelo hosted).',
      'Cree un ROA para el prefijo y el AS de origen. Importante: LACNIC genera automáticamente los objetos route a partir de los ROA, solo para el prefijo del ROA y sin tener en cuenta el maxLength.',
      'Por eso, en LACNIC elija ROA separados para cada /24: así también se crea un objeto route para cada /24.',
      'Las asignaciones de Brasil (Registro.br / NIC.br) las gestiona NIC.br en el modelo delegado, no en MiLACNIC.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    route: { kroki: [
      'En el LACNIC IRR los objetos route se generan a partir de los ROA creados en MiLACNIC: cree un ROA para cada prefijo que necesite un objeto route.',
      'Después de unas horas, verifique el objeto en irr.lacnic.net.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    usun: { kroki: [
      'Los objetos route del LACNIC IRR desaparecen al eliminar el ROA correspondiente en MiLACNIC.',
      'Los objetos en RADB u otros registros los elimina su maintainer.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    asset: { kroki: [
      'MiLACNIC → IRR → cree un as-set (se recomienda el nombre jerárquico AS64496:AS-…).',
      'Agregue los miembros (su AS y sus downstreams) e ingrese el conjunto en PeeringDB.'
    ], link: 'https://lacnic.zendesk.com/hc/es/categories/360002625214-Internet-Routing-Registry' },
    abuse: { kroki: [
      'inetnum y aut-num deben tener un abuse-c con abuse-mailbox, validado al menos dos veces al año.',
      'Configúrelo en MiLACNIC, en los contactos de la organización y del recurso; si la validación falla, se bloquea el acceso a MiLACNIC.'
    ], link: 'https://politicas.lacnic.net/politicas/detail/id/LAC-2018-5' },
    aspa: { kroki: [
      'ASPA se incorporó a MiLACNIC en octubre de 2026: búsquelo en la sección RPKI.',
      'Agregue sus proveedores de tránsito y el AS del centro de scrubbing.'
    ], link: 'https://blog.lacnic.net/en/caribnog-lacnic/' }
  }
};

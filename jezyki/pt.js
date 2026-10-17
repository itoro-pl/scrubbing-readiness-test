/* ITORO — Test gotowości prefiksów do scrubbing center — Português */
window.NAPISY.pt = {
  tytulStrony: 'Teste de prontidão de prefixos para centro de scrubbing — ITORO',
  opisStrony: 'Informe o número do seu AS e verifique se os ROA, objetos route, o AS-SET e os dados de registro permitem desviar o tráfego para um centro de scrubbing durante um ataque DDoS. Sem conta, no seu navegador.',
  goraOpis: 'Tornamos as redes mais seguras e as protegemos contra ataques DDoS.',
  pomin: 'Ir para o conteúdo',
  nadtytul: 'Ferramentas gratuitas',
  h1: 'Os seus prefixos estão prontos para ser desviados para um centro de scrubbing?',
  zakresTytul: 'O que verificamos',
  zakres: ['ROA e divisão em /24 (/48)', 'Objetos route nas bases dos RIR', 'LOA e titular do espaço', 'Higiene de AS-SET', 'Quem inclui o seu AS em AS-SET', 'ASPA', 'Contato abuse e PeeringDB', 'Instruções para 5 RIR'],
  heroH: 'Durante um ataque DDoS, o tráfego é desviado para um centro de scrubbing com o anúncio de prefixos <strong>/24</strong> (IPv6: <strong>/48</strong>) extraídos de blocos maiores. Se os seus ROA não permitirem isso, ou se faltar o objeto route na base de dados do RIR, o anúncio é descartado pelas redes que validam RPKI e pelos filtros do operador — exatamente quando a proteção é mais necessária. Esta ferramenta verifica isso com dados públicos e indica o que corrigir.',
  kartaTytul: 'Teste de prontidão de prefixos',
  wiodacy: 'Informe o número do seu AS. A ferramenta obtém os prefixos anunciados, os ROA, os objetos route, o AS-SET e os dados do titular dos recursos e, em seguida, compara-os com as recomendações dos RFC e com os requisitos habituais dos centros de scrubbing.',
  poleAs: 'Número do AS',
  poleAsPomoc: 'ex.: 64496 ou AS64496',
  poleOperator: 'AS do centro de scrubbing (opcional)',
  poleOperatorPomoc: 'Se souber, verificaremos os ROA e o ASPA desse AS.',
  poleTryb: 'Quem vai anunciar os seus prefixos durante um ataque?',
  trybKlient: 'O operador, com o meu AS como origem',
  trybOperator: 'O operador, a partir do próprio AS',
  sprawdz: 'Verificar',
  sprawdzam: 'Verificando…',
  czas: 'Resultado em poucos segundos. O seu navegador obtém os dados de serviços públicos (incluindo a base de dados do RIPE, os registros IRR e o PeeringDB).',
  wersja: 'Versão 1.1.0 · 17 de outubro de 2026',
  itoroNad: 'Ferramentas disponibilizadas pela ITORO',
  itoroH2: 'Melhoramos a segurança da sua rede',
  itoroP1: 'Implantamos e operamos sistemas de proteção contra DDoS, principalmente em redes de operadoras de telecomunicações e em data centers.',
  itoroPunkty: [
    '<strong>Detecção do ataque em 2–5 segundos</strong>, com filtragem na borda da sua própria rede',
    '<strong>Desvio para um centro de scrubbing</strong> quando o ataque excede a capacidade dos seus links'
  ],
  itoroPrzycisk: 'Fale conosco',
  podReklama: 'O teste baseia-se nas recomendações dos RFC e nos requisitos publicados por operadores de centros de scrubbing, globais e poloneses. Usa apenas dados que qualquer pessoa pode verificar nos registros.',

  krok: {
    as: 'dados do AS', prefiksy: 'prefixos anunciados', roa: 'ROA e ASPA', irr: 'objetos route (IRR)',
    autnum: 'aut-num e AS-SET', pdb: 'PeeringDB', abuse: 'contato de abuso', sasiedzi: 'vizinhos BGP',
    listy: 'listas de prefixos (bgpq4)', wlaczenia: 'quem inclui o seu AS em AS-SET', pref: (n, m) => `detalhes dos prefixos (${n}/${m})`, wlasciciel: (n, m) => `titulares dos recursos (${n}/${m})`, operator: 'ROA do operador'
  },
  bladAs: 'Informe um número de AS válido (1–4294967294).',
  bladSieci: (u) => `Não foi possível obter os dados (${u}). Tente novamente em instantes.`,
  bladCzesciowy: (u) => `Alguns dados não estão disponíveis (${u}) — o resultado pode estar incompleto.`,

  wynikDla: (as, nazwa) => `Resultado para AS${as}${nazwa ? ' — ' + nazwa : ''}`,
  werdykt: { blok: 'Os prefixos não estão prontos para o desvio', popr: 'Prontos com ressalvas — há itens a corrigir', ok: 'Os prefixos estão prontos para o desvio' },
  werdyktOpis: {
    blok: 'Pelo menos um problema impedirá o centro de scrubbing de anunciar os seus prefixos ou fará com que sejam descartados na internet. Corrija-o antes de um ataque: ROA e objetos route levam de algumas horas a dois dias para se propagar.',
    popr: 'Nada impede o desvio, mas alguns operadores rejeitarão prefixos ou pedirão correções durante a ativação do serviço.',
    ok: 'Os dados de registro permitem anunciar cada /24 (/48) do seu espaço de endereços. O que não pode ser verificado externamente está listado no final.'
  },
  kafle: { pref: 'prefixos anunciados', gotowe: 'prontos para divisão em /24 e /48', blok: 'problemas bloqueantes', popr: 'itens a corrigir', zal: 'recomendações' },
  stopnie: { blok: 'Bloqueante', popr: 'A corrigir', zal: 'Recomendado', ok: 'OK', info: 'Info' },
  sekcjaPoprawki: 'Plano de ação, passo a passo',
  planOpis: (r) => `Passos na ordem recomendada. Cada um vem com instruções para o seu registro${r ? ' (' + r + ')' : ''}.`,
  jakW: (r) => `Como fazer no ${r}`,
  dokumentacja: 'Documentação',
  krokTyt: {
    dlugosc: 'Substitua prefixos longos demais', roa: 'Corrija os ROA', roaOp: 'Adicione ROA para o centro de scrubbing',
    aspa: 'Complete o ASPA', route: 'Crie objetos route', usun: 'Remova objetos route obsoletos',
    loa: 'Prepare uma LOA', asset: 'Organize o AS-SET', wlaczenia: 'Verifique quem inclui o seu AS nos próprios AS-SET', abuse: 'Configure o contato de abuso', pdb: 'Complete o PeeringDB', inne: 'Outros'
  },
  ogolne: {
    dlugosc: ['Substitua prefixos mais longos que /24 (IPv6: /48) pelo /24 (/48) que os contém, ou anuncie-os juntamente com ele.'],
    loa: ['Liste os prefixos deste passo e o titular de cada um (dados da base do RIR).', 'Peça ao titular dos endereços — e ao upstream, se for ele quem anuncia o prefixo — que assine uma LOA com base no modelo abaixo.', 'Os operadores costumam aceitar a LOA em PDF, em papel timbrado da empresa, assinada por uma pessoa autorizada.'],
    asset: ['Regra prática: coloque no seu AS-SET apenas o que você reanuncia via BGP — você mesmo e os seus clientes. Não adicione IXPs nem peers.', 'Verifique o tamanho do AS-SET de um cliente antes de incluí-lo; remova clientes que saíram e revise o conjunto regularmente.'],
    wlaczenia: ['Revise os conjuntos listados neste passo. O titular consta no objeto as-set (mnt-by, admin-c) no IRR.', 'Se um conjunto pertence a uma rede com a qual você não tem relação BGP, peça a remoção do seu AS. Se não houver resposta, reporte ao operador da base IRR.', 'Publique um ASPA com os seus upstreams — isso limita a falsificação do seu AS por meio de AS-SET de outras redes.', 'Configure um monitoramento contínuo de novos AS-SET que façam referência ao seu AS.'],
    pdb: ['Faça login em peeringdb.com e abra o registro da sua rede.', 'Em “IRR as-set/route-set”, informe o seu AS-SET com a origem, ex.: RIPE::AS64496:AS-CLIENTES.', 'Salve e verifique se coincide com o seu aut-num.'],
    inne: []
  },
  koncowe: {
    tytul: 'Depois das alterações',
    kroki: [
      'Aguarde: os ROA chegam aos validadores normalmente em até uma hora; os objetos route chegam aos filtros dos operadores em algumas horas até 48 horas.',
      'Execute este teste novamente e verifique se os passos saíram do plano.',
      'Envie ao centro de scrubbing a sua lista de prefixos, o AS-SET e a LOA. Combine como os /24 serão anunciados e como o desvio será retirado.',
      'Teste o desvio de um /24 fora de um ataque.'
    ]
  },
  loaTytul: 'Modelo de LOA (em inglês, como os operadores costumam aceitar)',
  sekcjaPoprawkiPusta: 'Não há nada a corrigir nos dados públicos.',
  motywJasny: 'Claro', motywCiemny: 'Escuro', motywAria: 'Alterar o tema de cores',
  sekcjaAs: 'Configuração do AS',
  sekcjaPrefiksy: 'Prefixos',
  sekcjaObiekty: 'Objetos prontos para colar',
  obiektyOpis: 'Sugestões com base no resultado. Revise-as antes de criar — o maintainer (mnt-by) foi copiado dos objetos existentes.',
  sekcjaListy: 'Listas de prefixos (bgpq4, versão local)',
  listyOpis: 'Geradas no seu computador pelo bgpq4 a partir dos seus AS-SET. É aproximadamente o filtro que um operador vai montar com eles.',
  pobierzListe: 'Baixar a lista completa (.txt)',
  listaObcieta: (n, m) => `Exibindo ${n} de ${m} linhas — a lista completa está no arquivo.`,
  sekcjaReczne: 'O que não pode ser verificado externamente',
  sekcjaPodstawa: 'Em que se baseiam os testes',
  kolPrefiks: 'Prefixo', kolRpki: 'RPKI', kolPodzial: 'Divisão em /24 (/48)', kolIrr: 'Objeto route', kolWlasciciel: 'Titular', kolUwagi: 'Observações',
  pokazWszystkie: (n) => `Mostrar todos (${n})`,
  limit: (n, m) => `${n} de ${m} prefixos foram analisados em detalhe (redes muito grandes são analisadas parcialmente para não sobrecarregar os serviços públicos).`,
  drukuj: 'Imprimir / PDF', json: 'Baixar JSON', link: 'Copiar link do resultado', skopiowano: 'Copiado', kopiuj: 'Copiar',
  rpkiStan: { valid: 'valid', invalid: 'invalid', notfound: 'sem ROA', invalidLen: 'invalid (comprimento)', invalidAs: 'invalid (outro AS)' },
  podzialPelny: 'todos', podzialBrak: 'nenhum', podzialCzesc: (a, b) => `${a} de ${b}`, podzialNd: 'n/d',
  irrRir: (db) => `sim (${db})`, irrBrak: 'ausente', irrNieaut: (db) => `só ${db}`,
  wlTak: 'confere', wlNie: 'outra organização', wlPa: 'PA de um LIR', wlNd: '—',

  t: {
    asIstnieje: { ok: (n) => `O AS existe: ${n}.`, blok: 'Esse AS não foi encontrado nos registros.' },
    ogloszenia: { ok: (a, b) => `O AS anuncia ${a} prefixos IPv4 e ${b} prefixos IPv6.`, blok: 'O AS não anuncia nenhum prefixo no momento — não há nada a desviar. Se um upstream anuncia os seus prefixos, execute o teste para o AS dele; o desvio exigirá o consentimento dele (LOA).' },
    abuse: { ok: (m) => `Contato de abuso: ${m}.`, popr: 'Não há contato de abuso (abuse-c). Centros de scrubbing e equipes CERT o utilizam durante um incidente; é obrigatório na região do RIPE NCC.' },
    autnum: { okRir: (r) => `O AS está registrado no ${r}.`, ok: 'O objeto aut-num existe na base de dados do RIPE.', popr: 'Não há objeto aut-num na base de dados do RIPE.', info: 'AS fora da região do RIPE NCC — verifique o aut-num e o AS-SET na base de dados do seu RIR.' },
    eksport: { ok: (s) => `A política de exportação aponta para o AS-SET: ${s}.`, zal: 'O aut-num não indica um AS-SET nas linhas export/mp-export. Os centros de scrubbing montam os filtros a partir do AS-SET ou apenas do AS — com redes downstream, o AS-SET é indispensável.' },
    asset: { ok: (s, z) => `${s} (registro ${z}) contém o seu AS.`, nieaut: (s, z) => `${s} existe apenas no ${z}. Muitos operadores aceitam somente conjuntos das bases de dados dos RIR.`, zadnego: 'Nenhum AS-SET encontrado no aut-num nem no PeeringDB. Sem ele, o operador monta o filtro apenas com o seu AS — o que não basta se houver redes downstream.', popr: (s) => `${s} não contém o seu AS — um filtro montado a partir dele ignorará os seus prefixos.`, brak: (s) => `${s} não foi encontrado na base de dados do RIPE. Muitos operadores não aceitam um conjunto no RADB ou em outro registro não autoritativo.` },
    assetHier: { ok: (s) => `${s} tem nome hierárquico.`, zal: (s) => `${s} tem nome curto. Conjuntos novos devem ter o AS como prefixo (ex.: AS64496:AS-CLIENTES, RFC 2622) — isso protege contra falsificação em outros registros.` },
    pdb: { ok: (s) => `PeeringDB: o registro existe, AS-SET ${s}.`, zal: 'Não há registro no PeeringDB ou o campo AS-SET está vazio. Muitos operadores montam filtros a partir do AS-SET do PeeringDB.', roz: (a, b) => `O AS-SET no PeeringDB (${a}) difere do AS-SET no aut-num (${b}).` },
    upstream: { ok: (n) => `Upstreams visíveis no BGP: ${n}.`, zal: (n) => `Apenas ${n} upstream visível. Com um único link, o ataque o satura antes que o desvio entre em vigor — considere um segundo link ou RTBH e BGP FlowSpec com o upstream.` },
    aspa: { ok: (l) => `O objeto ASPA existe (provedores: ${l}).`, brakOp: (op) => `O objeto ASPA não inclui o AS${op}. Após o desvio, o caminho pelo centro de scrubbing será inválido para as redes que validam ASPA — adicione o AS${op} à lista de provedores.`, info: 'Não há objeto ASPA. Não é obrigatório; se criar um, inclua também o AS do centro de scrubbing como provedor.' },
    opRoa: { ok: (op) => `Os ROA do AS${op} cobrem cada /24 (/48).`, blok: (op, n) => `O operador anuncia a partir do próprio AS, mas nenhum ROA do AS${op} cobre ${n} prefixos /24 (/48). As redes que validam RPKI descartarão esses anúncios.` },
    nieaktualne: { zal: (l) => `Objetos route com o seu AS para prefixos que não são anunciados: ${l}. Remova os obsoletos — a desorganização no IRR dificulta a verificação.` },
    higiena: {
      rozmiarOk: (s, n, r) => `${s} se expande para ${n} AS (clientes visíveis no BGP: ${r}). O tamanho condiz com a rede.`,
      rozmiarSredni: (s, n, r) => `${s} se expande para ${n} AS, enquanto o BGP mostra ${r} clientes. Verifique se você reanuncia todos eles.`,
      rozmiarDuzy: (s, n, r) => `${s} se expande para ${n} AS, enquanto o BGP mostra apenas ${r} clientes. Um filtro montado a partir de um conjunto assim deixa passar um vazamento de rotas (route leak) de um cliente e facilita a falsificação de prefixos de outras redes — reduza-o ao seu cone de clientes (customer cone).`,
      glebokosc: (s, d) => `${s} tem ${d} níveis de aninhamento. A recursão sai do controle rapidamente — limite-a aos conjuntos dos seus clientes diretos.`,
      skladowe: (s, l) => `A maior parte de ${s} vem de: ${l}. Verifique o tamanho dos AS-SET desses clientes antes de incluí-los.`,
      ixp: (s, l) => `${s} contém conjuntos que parecem listas de membros de IXP ou de peers: ${l}. Um conjunto de clientes não deve incluir IXPs nem peers — você não os reanuncia.`,
      nieaktualni: (s, l) => `${s} contém AS que não aparecem como seus clientes no BGP: ${l}. Se forem clientes que saíram, remova-os.`,
      wlaczeniaObce: (k, l) => `Redes sem relação BGP visível com você incluíram o seu AS nos AS-SET delas (exceto listas de peers ou de IXP) (${k}): ${l}. Foi assim o prelúdio da tentativa de sequestro (hijack) descrita no DKNOG15. Cada inclusão desse tipo permite que essa rede anuncie os seus prefixos pelos upstreams dela apesar dos filtros IRR — verifique-as e peça a remoção.`,
      wlaczeniaIxp: (k, l) => `O seu AS está em conjuntos de peers ou de membros de IXP de redes sem relação BGP visível com você (${k}): ${l}. Normalmente eles documentam peering — verifique se você realmente tem uma sessão com elas. Esses conjuntos também podem ser usados para contornar filtros.`,
      wlaczeniaNieznane: (k, l) => `O seu AS está em AS-SET cujos nomes não trazem o número de AS do titular (${k}): ${l}. Verifique no IRR quem os mantém e se são seus upstreams ou IXPs.`,
      wlaczeniaOk: (k) => `O seu AS está em ${k} AS-SET de terceiros — todos pertencem aos seus vizinhos BGP ou a você.`,
      prefiksy: (s, a, b) => `${s}: prefixos segundo o bgpq4 — IPv4: ${a}, IPv6: ${b}.`,
      lokalnie: 'O número de prefixos do seu AS-SET e listas de prefixos prontas para filtros (bgpq4) aparecem na versão para download, executada no seu computador.',
      bezBgpq4: 'A ferramenta está rodando localmente, mas sem o bgpq4, então não há listas de prefixos. Instale o bgpq4 (Linux: apt install bgpq4, macOS: brew install bgpq4) ou use a versão Docker.'
    }
  },
  p: {
    zaDlugi: (d) => `Prefixo mais longo que /${d} — é filtrado na internet (RFC 7454) e não é aceito pelos centros de scrubbing.`,
    rpkiInvalid: 'O anúncio está hoje RPKI-invalid — as redes com ROV já o descartam.',
    rpkiBrak: 'Não há ROA para este prefixo. Alguns centros de scrubbing exigem ROA, e as redes com ROV tratam esse prefixo pior do que um prefixo valid.',
    podzialBrak: (d, n) => `Nenhum dos ${n} prefixos /${d} será RPKI-valid. O desvio de parte do espaço não funcionará.`,
    podzialCzesc: (d, a, n) => `${n - a} de ${n} prefixos /${d} não serão RPKI-valid após a divisão.`,
    maxLen: (r, m) => `O ROA ${r} tem maxLength ${m}. Isso permite extrair /24, mas o RFC 9319 recomenda ROA separados para os prefixos anunciados — um maxLength amplo facilita sequestros com origem forjada.`,
    irrBrak: 'Não há objeto route com o seu AS numa base de dados de RIR. A maioria dos centros de scrubbing monta filtros a partir do IRR e não aceitará o prefixo.',
    irrNieaut: (db) => `O objeto route existe apenas no ${db}. Os operadores costumam aceitar somente as bases de dados dos RIR (RIPE, ARIN, APNIC, AFRINIC, LACNIC).`,
    irrPod: (d, a, n) => `Objetos route para prefixos /${d}: ${a} de ${n}. Alguns operadores exigem um objeto para o prefixo exato anunciado — crie-os antes de um ataque.`,
    konflikt: (l) => `Objetos route com outro AS: ${l}. Se estiverem obsoletos, remova-os — confundem os filtros e a verificação do operador.`,
    konfliktInv: (l) => `Objetos route com outro AS que contradizem o ROA (RPKI-invalid): ${l}. Remova-os.`,
    as0: 'Um ROA com AS0 cobre parte do prefixo (RFC 6483) — esses endereços não podem ser anunciados por ninguém, inclusive pelo centro de scrubbing.',
    innyRoa: (l) => `ROA de outros AS que cobrem o prefixo: ${l}. Verifique se ainda são necessários.`,
    wlInny: (o) => `O recurso pertence a uma organização (${o}) diferente da do AS. O centro de scrubbing pedirá uma LOA ao titular dos endereços.`,
    wlPa: (s) => `Espaço atribuído por um LIR (status ${s}). O centro de scrubbing pedirá uma LOA ao LIR.`,
    nadrzedny: (l) => `Um prefixo menos específico é anunciado por ${l}. Normalmente é espaço do upstream — é necessário o consentimento dele (LOA) para o desvio.`,
    wszystkoOk: 'Sem observações.'
  },
  f: {
    roa: (p, d) => `Adicione ROA que permitam anunciar cada /${d} de ${p}.`,
    roaNowe: (p) => `Crie ROA com o seu AS e maxLength igual ao comprimento do prefixo para: ${p}.`,
    roaA: (n) => `Opção recomendada (RFC 9319): ROA separados para ${n} prefixos.`,
    roaB: (p, d) => `Opção mais simples: maxLength ${d} no ROA de ${p}.`,
    route: (n, d) => `Crie ${n} objetos route para prefixos /${d}.`,
    routeAgg: (p) => `Crie um objeto route para ${p} com o seu AS numa base de dados de RIR.`,
    usun: (n) => `Remova ou verifique ${n} objetos route com outro AS.`,
    loa: (l) => `Prepare uma LOA para: ${l}.`,
    zaDlugi: (l) => `Substitua prefixos mais longos que /24 (/48): ${l}.`,
    rpki: (l) => `Corrija os ROA que hoje tornam estes anúncios inválidos: ${l}.`,
    as0: (l) => `Verifique os ROA com AS0 para: ${l}.`
  },
  reczne: [
    ['LOA', 'Consentimento por escrito do titular dos endereços (e do upstream, se for ele quem anuncia o prefixo) para que o centro de scrubbing anuncie os seus prefixos.'],
    ['Túnel e MSS', 'O tráfego limpo normalmente retorna por GRE ou IPsec. Configure o MSS clamping (tipicamente 1436 para GRE e cerca de 1360 para IPsec) antes de comutar o tráfego e verifique o desempenho de desencapsulamento no roteador.'],
    ['Tempo de propagação', 'Novos ROA e objetos route chegam aos filtros em algumas horas até 48 horas. Prepare-os antes de um ataque, e não durante ele.'],
    ['Anúncio e retirada', 'Combine com o operador como os /24 serão anunciados (prepend, communities, supressão do anúncio para o trânsito) e como retirar o desvio com segurança — primeiro anuncie o prefixo você mesmo, depois retire-o no operador.'],
    ['Loops de roteamento', 'Se o operador devolver prefixos mais específicos do seu espaço, filtre-os na sessão para evitar um loop.'],
    ['Filtragem de clientes', 'Filtre as rotas dos clientes com base no AS-SET e nos objetos route deles, e verifique o tamanho do conjunto antes de aceitá-lo. Esse filtro é a única barreira contra um vazamento de rotas (route leak) de um cliente.'],
    ['Teste a seco', 'Teste o desvio de um /24 fora de um ataque e verifique num looking glass se ele está visível e RPKI-valid.'],
    ['RTBH', 'Não amplie os ROA para RTBH (prefixos /32, community BLACKHOLE do RFC 7999) — o RFC 9319 §6 desaconselha isso expressamente. O desvio para um centro de scrubbing e o RTBH são assuntos distintos.']
  ],
  podstawa: [
    ['RFC 6811', 'estados de validação de origem: valid, invalid, not found (sem ROA)'],
    ['RFC 9319 (BCP 185)', 'ROA mínimos e maxLength; §5.1 — os ROA para serviços de mitigação de DDoS devem existir antes do ataque; §6 — não ampliar ROA para RTBH'],
    ['RFC 9582', 'perfil do ROA'],
    ['RFC 7454 (BCP 194)', 'filtragem de prefixos mais longos que /24 e /48; IRR como base dos filtros'],
    ['RFC 6483', 'ROA com AS0'],
    ['RFC 2622', 'nomes hierárquicos de AS-SET'],
    ['RFC 9224', 'localização do servidor RDAP autoritativo'],
    ['ASPA', 'autorização de upstreams (IETF SIDROPS)'],
    ['ripe-705', 'abuse-c obrigatório na base de dados do RIPE'],
    ['Documentação dos RIR', 'RIPE NCC, ARIN, APNIC, AFRINIC, LACNIC: ROA, objetos route, as-set, abuso, ASPA'],
    ['MANRS', 'registro em IRR e RPKI, contatos atualizados; AS-SET como cone de clientes (módulo 2)'],
    ['Lasse Jarlskov (Telia Company)', '“Securing your AS-set” (BalticNOG 2025), “Prelude to a BGP hijack?” (DKNOG15): finalidade e tamanho do AS-SET, quem inclui você'],
    ['Doug Madory, Job Snijders', '“The Scourge of Excessive AS-SETs” (2025): AS-SET superdimensionados e vazamentos de rotas'],
    ['Operadores', 'documentação pública de ativação de operadores conhecidos de centros de scrubbing: prefixo mínimo, ROA, IRR numa base de dados de RIR, LOA, túnel']
  ],
  podstawaLink: 'Lista completa de fontes com links',
  obiektRoa: 'ROA a criar no portal RPKI do seu RIR',
  obiektRoute: 'Objetos route (RPSL)',
  stopka: 'O resultado tem caráter apenas informativo e baseia-se em dados públicos no momento da verificação. Os requisitos finais são definidos pelo operador do centro de scrubbing.'
};

window.RIR.pt = {
  RIPE: {
    nazwa: 'RIPE NCC',
    roa: { kroki: [
      'Faça login no RPKI Dashboard (dashboard.rpki.ripe.net, também via my.ripe.net → RPKI). No primeiro uso, crie uma Hosted CA.',
      'Aba “ROAs” → “Create ROA” (para prefixos ainda não anunciados) ou “Announcements” → “Create ROA” (para prefixos visíveis no BGP).',
      'Opção recomendada: um ROA separado para cada /24 listado acima, com maxLength igual ao comprimento do prefixo. Opção mais simples: um ROA no agregado com maxLength 24.',
      'Confirme as alterações (“Pending Changes” → “Publish”). Se o Dashboard avisar que o ROA invalidará anúncios visíveis, interrompa e verifique o AS de origem.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/' },
    route: { kroki: [
      'Abra a base de dados do RIPE: apps.db.ripe.net → “Create an object” → route (IPv6: route6). Também é possível colar os objetos acima em “Syncupdates”.',
      'Preencha route, origin, mnt-by (um maintainer com autoridade sobre o seu espaço de endereços) e source: RIPE.',
      'Autorize com a senha ou a chave do maintainer. Um objeto route exige a autorização do titular dos endereços — um ROA não cria o objeto route.'
    ], link: 'https://docs.db.ripe.net/' },
    usun: { kroki: [
      'Procure o objeto em apps.db.ripe.net (Query) e verifique o mnt-by.',
      'Se o maintainer for seu, escolha “Delete object” e informe o motivo. Se pertencer a outra empresa, peça a ela que o remova ou reporte-o ao RIPE NCC (ripe-dbm@ripe.net).'
    ], link: 'https://docs.db.ripe.net/' },
    asset: { kroki: [
      'Crie um as-set com nome hierárquico, ex.: AS64496:AS-CLIENTES — na base de dados do RIPE, os conjuntos novos devem usá-lo.',
      'Em members, inclua o seu AS e os AS das suas redes downstream.',
      'Referencie o conjunto nas linhas export/mp-export do seu aut-num (announce AS64496:AS-CLIENTES) e no PeeringDB.'
    ], link: 'https://docs.db.ripe.net/Set-Objects/' },
    abuse: { kroki: [
      'Crie um objeto role com o atributo abuse-mailbox.',
      'Referencie-o no abuse-c do seu objeto organisation — inetnum, inet6num e aut-num o herdam automaticamente.',
      'O RIPE NCC valida o endereço todos os anos (ripe-705); responda à mensagem de validação.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/faqs-for-abuse-c/' },
    aspa: { kroki: [
      'RPKI Dashboard → aba ASPA → crie um objeto para o seu AS.',
      'Inclua como provedores todos os seus provedores de trânsito e o AS do centro de scrubbing.'
    ], link: 'https://labs.ripe.net/author/tim_bruijnzeels/aspa-in-the-rpki-dashboard-a-new-layer-of-routing-security/' }
  },
  ARIN: {
    nazwa: 'ARIN',
    roa: { kroki: [
      'Faça login no ARIN Online → Routing Security. No primeiro uso: “Sign Up for RPKI” → “Sign Up for Hosted”. É necessário um RSA (LRSA para recursos legacy).',
      'Manage RPKI → “View Details” da sua organização → RPKI: ROAs → “Create ROA”.',
      'Informe o AS de origem, o prefixo e o maxLength. Opção recomendada: um ROA separado para cada /24; mais simples: um ROA no agregado com maxLength 24.',
      'Na etapa de confirmação, escolha criar o objeto route correspondente no ARIN IRR.'
    ], link: 'https://www.arin.net/resources/manage/rpki/options/hosted/' },
    route: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → selecione o seu Org ID → route (IPv6: route6) → “Create Object”.',
      'Informe o prefixo e o AS de origem. O ARIN IRR não usa objetos mntner — têm acesso os POC Admin, Tech e Routing da organização.',
      'Os objetos route também podem ser criados pela API REST do ARIN.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    usun: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → localize o objeto e exclua-o.',
      'Objetos no RADB ou em outros registros são removidos pelo maintainer deles — peça à empresa que os criou.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    asset: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → as-set → “Create Object”.',
      'Nome: AS-… ou AS64496:AS-… (recomenda-se o hierárquico — evita falsificação em outros registros).',
      'Adicione os membros (o seu AS e os downstreams) e informe o conjunto no PeeringDB.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    abuse: { kroki: [
      'Todo Org ID deve ter um Abuse POC. ARIN Online → Your Records → Point of Contact Records → “Create POC”.',
      'Um POC Admin ou Tech o associa em Organization Identifiers → Manage.'
    ], link: 'https://www.arin.net/resources/guide/account/records/poc/' },
    aspa: { kroki: [
      'ARIN Online → Routing Security → Manage RPKI → ASPAs → “Create ASPA”.',
      'Um ASPA cobre um único AS; adicione os seus provedores de trânsito e o AS do centro de scrubbing.'
    ], link: 'https://www.arin.net/resources/manage/rpki/aspa/' }
  },
  APNIC: {
    nazwa: 'APNIC',
    roa: { kroki: [
      'Faça login no MyAPNIC → Resources → Route Management.',
      'Adicione uma rota: prefixo, AS de origem e “Most Specific Announcement” (equivale ao maxLength). Marque ROA e whois — a APNIC cria o ROA e o objeto route ao mesmo tempo.',
      'Opção recomendada: uma rota separada para cada /24; mais simples: o agregado com MSA 24 (para o whois a diferença pode ser de no máximo 8 bits).',
      'Se os seus recursos forem administrados por um NIR (JPNIC, IDNIC, TWNIC, CNNIC, KRNIC), os ROA são criados no sistema desse NIR.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    route: { kroki: [
      'MyAPNIC → Resources → Route Management com whois marcado — o objeto route é criado junto com o ROA.',
      'Objetos alterados fora do MyAPNIC (webupdates, e-mail) aparecem como conflitos — use um único método.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    usun: { kroki: [
      'MyAPNIC → Route Management → exclua a rota (remove o ROA e o objeto whois, se tiverem sido criados juntos).',
      'Objetos de outras empresas são removidos pelo maintainer deles — peça a ele ou contate a APNIC.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/' },
    asset: { kroki: [
      'No APNIC Whois, os as-set novos devem ter nome hierárquico (AS64496:AS-…); quem os cria é o maintainer do AS.',
      'Adicione os membros (o seu AS e os downstreams) e informe o conjunto no PeeringDB.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/guide/as-set/' },
    abuse: { kroki: [
      'Na APNIC, o abuse-c é gerado a partir do objeto IRT. Edite-o em MyAPNIC → Resources → IRTs.',
      'A APNIC valida o endereço a cada 6 meses — responda à mensagem de validação.'
    ], link: 'https://www.apnic.net/about-apnic/service-updates/apnic-whois-database-abuse-c/' },
    aspa: { kroki: [
      'O ASPA está disponível no MyAPNIC (seção RPKI) e pela Registry API.',
      'Adicione os seus provedores de trânsito e o AS do centro de scrubbing.'
    ], link: 'https://blog.apnic.net/2026/07/09/aspa-at-apnic-strengthening-bgp-path-validation/' }
  },
  AFRINIC: {
    nazwa: 'AFRINIC',
    roa: { kroki: [
      'Faça login no MyAFRINIC (é necessário certificado BPKI ou 2FA) → Resources → Resource Certification.',
      'Crie um ROA: nome, AS de origem, prefixo, Max Length e período de validade.',
      'Opção recomendada: um ROA separado para cada /24; mais simples: o agregado com Max Length 24.'
    ], link: 'https://afrinic.net/support/rpki' },
    route: { kroki: [
      'MyAFRINIC → Resources → IRR → “Add Route” (IPv6: “Add Route6”).',
      'O mnt-by do objeto route deve ser igual ao mnt-lower do inetnum.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    usun: { kroki: [
      'MyAFRINIC → Resources → IRR → localize o objeto e exclua-o.',
      'Objetos de outras empresas são removidos pelo maintainer deles — peça a ele ou contate a AFRINIC.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    asset: { kroki: [
      'MyAFRINIC → IRR → crie um as-set (o nome começa com AS-; recomenda-se o hierárquico AS64496:AS-…).',
      'Adicione os membros (o seu AS e os downstreams) e informe o conjunto no PeeringDB.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/create-as-set-objects' },
    abuse: { kroki: [
      'inetnum, inet6num e aut-num devem ter um abuse-c com abuse-mailbox.',
      'Configure-o no MyAFRINIC ou na base de dados da AFRINIC.'
    ], link: 'https://afrinic.net/support/how-to-publish-abuse-contact-information' },
    aspa: { kroki: [
      'Verifique no MyAFRINIC se o ASPA está disponível — até outubro de 2026, a AFRINIC não o anunciou publicamente.',
      'Se criar um ASPA, inclua o AS do centro de scrubbing.'
    ], link: 'https://afrinic.net/support/rpki' }
  },
  LACNIC: {
    nazwa: 'LACNIC',
    roa: { kroki: [
      'Faça login no MiLACNIC → RPKI (modelo hosted).',
      'Crie um ROA para o prefixo e o AS de origem. Importante: o LACNIC gera automaticamente objetos route a partir dos ROA, apenas para o prefixo do ROA, ignorando o maxLength.',
      'Por isso, no LACNIC escolha ROA separados para cada /24 — assim também é criado um objeto route para cada /24.',
      'As alocações do Brasil (Registro.br / NIC.br) são gerenciadas pelo NIC.br no modelo delegado, e não no MiLACNIC.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    route: { kroki: [
      'No LACNIC IRR, os objetos route são gerados a partir dos ROA criados no MiLACNIC — crie um ROA para cada prefixo que precise de um objeto route.',
      'Após algumas horas, verifique o objeto em irr.lacnic.net.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    usun: { kroki: [
      'Os objetos route do LACNIC IRR desaparecem quando o ROA correspondente é excluído no MiLACNIC.',
      'Objetos no RADB ou em outros registros são removidos pelo maintainer deles.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    asset: { kroki: [
      'MiLACNIC → IRR → crie um as-set (recomenda-se o nome hierárquico AS64496:AS-…).',
      'Adicione os membros (o seu AS e os downstreams) e informe o conjunto no PeeringDB.'
    ], link: 'https://lacnic.zendesk.com/hc/es/categories/360002625214-Internet-Routing-Registry' },
    abuse: { kroki: [
      'inetnum e aut-num devem ter um abuse-c com abuse-mailbox, validado pelo menos duas vezes por ano.',
      'Configure-o no MiLACNIC, nos contatos da organização e do recurso — a falha na validação bloqueia o acesso ao MiLACNIC.'
    ], link: 'https://politicas.lacnic.net/politicas/detail/id/LAC-2018-5' },
    aspa: { kroki: [
      'O ASPA foi adicionado ao MiLACNIC em outubro de 2026 — procure na seção RPKI.',
      'Adicione os seus provedores de trânsito e o AS do centro de scrubbing.'
    ], link: 'https://blog.lacnic.net/en/caribnog-lacnic/' }
  }
};

/* ITORO — Test gotowości prefiksów do scrubbing center — Deutsch */
window.NAPISY.de = {
  tytulStrony: 'Scrubbing-Center-Readiness-Test für Präfixe — ITORO',
  opisStrony: 'Geben Sie Ihre AS-Nummer ein und prüfen Sie, ob ROAs, Route-Objekte, AS-SET und Registry-Daten eine Umleitung des Traffics zum Scrubbing-Center während eines DDoS-Angriffs erlauben. Ohne Konto, direkt im Browser.',
  goraOpis: 'Wir sichern Netze ab und schützen sie vor DDoS-Angriffen.',
  pomin: 'Zum Inhalt springen',
  nadtytul: 'Kostenlose Tools',
  h1: 'Sind Ihre Präfixe bereit für die Umleitung zum Scrubbing-Center?',
  heroH: 'Bei einem DDoS-Angriff wird der Traffic zum Scrubbing-Center umgeleitet, indem <strong>/24</strong>-Präfixe (IPv6: <strong>/48</strong>) aus größeren Blöcken angekündigt werden. Erlauben Ihre ROAs das nicht oder fehlt das Route-Objekt in der RIR-Datenbank, wird die Ankündigung von RPKI-validierenden Netzen und von den Filtern des Betreibers verworfen — genau dann, wenn der Schutz am dringendsten gebraucht wird. Das Tool prüft dies anhand öffentlicher Daten und zeigt, was zu korrigieren ist.',
  kartaTytul: 'Präfix-Readiness-Test',
  wiodacy: 'Geben Sie Ihre AS-Nummer ein. Das Tool lädt angekündigte Präfixe, ROAs, Route-Objekte, AS-SET und Daten des Ressourceninhabers und prüft sie gegen RFC-Empfehlungen und typische Anforderungen von Scrubbing-Centern.',
  poleAs: 'AS-Nummer',
  poleAsPomoc: 'z. B. 64496 oder AS64496',
  poleOperator: 'AS des Scrubbing-Centers (optional)',
  poleOperatorPomoc: 'Falls bekannt, prüfen wir ROAs und ASPA für dieses AS.',
  poleTryb: 'Wer kündigt Ihre Präfixe während eines Angriffs an?',
  trybKlient: 'Der Betreiber, mit meinem AS als Origin',
  trybOperator: 'Der Betreiber, aus seinem eigenen AS',
  sprawdz: 'Prüfen',
  sprawdzam: 'Prüfe…',
  czas: 'Ergebnis in wenigen Sekunden. Ihr Browser lädt die Daten aus öffentlichen Diensten (u. a. RIPE-Datenbank, IRR-Registries und PeeringDB).',
  wersja: 'Version 1.0.0 · 15. Oktober 2026',
  itoroNad: 'Die Tools stellt ITORO bereit',
  itoroH2: 'Wir verbessern die Sicherheit Ihres Netzes',
  itoroP1: 'Wir implementieren und betreiben DDoS-Schutzsysteme, vor allem in Netzen von Telekommunikationsanbietern und in Rechenzentren.',
  itoroPunkty: [
    '<strong>Angriffserkennung in 2–5 Sekunden</strong>, Filterung am Rand Ihres eigenen Netzes',
    '<strong>Umleitung zum Scrubbing-Center</strong>, wenn ein Angriff die Kapazität Ihrer Leitungen übersteigt'
  ],
  itoroPrzycisk: 'Sprechen Sie mit uns',
  podReklama: 'Der Test basiert auf RFC-Empfehlungen und den veröffentlichten Anforderungen von Scrubbing-Center-Betreibern, global und in Polen. Er nutzt ausschließlich Daten, die jeder in den Registries prüfen kann.',

  krok: {
    as: 'AS-Daten', prefiksy: 'angekündigte Präfixe', roa: 'ROAs und ASPA', irr: 'Route-Objekte (IRR)',
    autnum: 'aut-num und AS-SET', pdb: 'PeeringDB', abuse: 'Abuse-Kontakt', sasiedzi: 'BGP-Nachbarn',
    pref: (n, m) => `Präfix-Details (${n}/${m})`, wlasciciel: (n, m) => `Ressourceninhaber (${n}/${m})`, operator: 'ROAs des Betreibers'
  },
  bladAs: 'Geben Sie eine gültige AS-Nummer ein (1–4294967294).',
  bladSieci: (u) => `Daten konnten nicht geladen werden (${u}). Bitte versuchen Sie es gleich noch einmal.`,
  bladCzesciowy: (u) => `Ein Teil der Daten ist nicht verfügbar (${u}) — das Ergebnis kann unvollständig sein.`,

  wynikDla: (as, nazwa) => `Ergebnis für AS${as}${nazwa ? ' — ' + nazwa : ''}`,
  werdykt: { blok: 'Präfixe sind nicht bereit für die Umleitung', popr: 'Bereit mit Einschränkungen — einiges ist zu korrigieren', ok: 'Präfixe sind bereit für die Umleitung' },
  werdyktOpis: {
    blok: 'Mindestens ein Problem verhindert, dass das Scrubbing-Center Ihre Präfixe ankündigt, oder führt dazu, dass sie im Internet verworfen werden. Beheben Sie es vor einem Angriff: ROAs und Route-Objekte brauchen einige Stunden bis zwei Tage, bis sie sich verbreiten.',
    popr: 'Nichts blockiert die Umleitung, aber manche Betreiber werden Präfixe ablehnen oder beim Onboarding Korrekturen verlangen.',
    ok: 'Die Registry-Daten erlauben die Ankündigung jedes /24 (/48) Ihres Adressraums. Was sich von außen nicht prüfen lässt, steht unten.'
  },
  kafle: { pref: 'angekündigte Präfixe', gotowe: 'bereit zur Aufteilung in /24 und /48', blok: 'blockierende Probleme', popr: 'zu korrigieren', zal: 'Empfehlungen' },
  stopnie: { blok: 'Blockierend', popr: 'Zu korrigieren', zal: 'Empfehlung', ok: 'OK', info: 'Info' },
  sekcjaPoprawki: 'Maßnahmenplan Schritt für Schritt',
  planOpis: (r) => `Schritte in der empfohlenen Reihenfolge. Zu jedem gibt es eine Anleitung für Ihre Registry${r ? ' (' + r + ')' : ''}.`,
  jakW: (r) => `So geht es bei ${r}`,
  dokumentacja: 'Dokumentation',
  krokTyt: {
    dlugosc: 'Zu lange Präfixe ersetzen', roa: 'ROAs korrigieren', roaOp: 'ROAs für das Scrubbing-Center anlegen',
    aspa: 'ASPA ergänzen', route: 'Route-Objekte anlegen', usun: 'Veraltete Route-Objekte löschen',
    loa: 'LOA vorbereiten', asset: 'AS-SET bereinigen', abuse: 'Abuse-Kontakt setzen', pdb: 'PeeringDB ergänzen', inne: 'Sonstiges'
  },
  ogolne: {
    dlugosc: ['Ersetzen Sie Präfixe länger als /24 (IPv6: /48) durch das umfassende /24 (/48) oder kündigen Sie sie zusammen damit an.'],
    loa: ['Listen Sie die Präfixe aus diesem Schritt und den Inhaber jedes Präfixes auf (Daten aus der RIR-Datenbank).', 'Bitten Sie den Inhaber des Adressraums — und den Upstream, falls er das Präfix ankündigt — eine LOA nach der Vorlage unten zu unterschreiben.', 'Betreiber akzeptieren die LOA meist als PDF auf Firmenbriefpapier, unterschrieben von einer zeichnungsberechtigten Person.'],
    pdb: ['Melden Sie sich bei peeringdb.com an und öffnen Sie den Eintrag Ihres Netzes (Network).', 'Tragen Sie im Feld „IRR as-set/route-set“ Ihr AS-SET mit Quelle ein, z. B. RIPE::AS64496:AS-KUNDEN.', 'Speichern Sie und prüfen Sie, ob der Eintrag mit Ihrem aut-num übereinstimmt.'],
    inne: []
  },
  koncowe: {
    tytul: 'Nach den Änderungen',
    kroki: [
      'Warten Sie: ROAs erreichen die Validatoren meist innerhalb einer Stunde, Route-Objekte die Filter der Betreiber nach einigen Stunden bis 48 Stunden.',
      'Führen Sie diesen Test erneut aus und prüfen Sie, ob die Schritte aus dem Plan verschwunden sind.',
      'Senden Sie dem Scrubbing-Center Ihre Präfixliste, AS-SET und LOA. Vereinbaren Sie, wie die /24 angekündigt werden und wie die Umleitung zurückgenommen wird.',
      'Testen Sie die Umleitung eines /24 außerhalb eines Angriffs.'
    ]
  },
  loaTytul: 'LOA-Vorlage (auf Englisch — so akzeptieren sie die Betreiber üblicherweise)',
  sekcjaPoprawkiPusta: 'In den öffentlichen Daten gibt es nichts zu korrigieren.',
  motywJasny: 'Hell', motywCiemny: 'Dunkel', motywAria: 'Farbschema wechseln',
  sekcjaAs: 'AS-Einstellungen',
  sekcjaPrefiksy: 'Präfixe',
  sekcjaObiekty: 'Fertige Objekte zum Einfügen',
  obiektyOpis: 'Vorschläge auf Basis des Ergebnisses. Prüfen Sie sie vor dem Anlegen — den Maintainer (mnt-by) haben wir aus bestehenden Objekten übernommen.',
  sekcjaReczne: 'Was sich von außen nicht prüfen lässt',
  sekcjaPodstawa: 'Worauf die Tests beruhen',
  kolPrefiks: 'Präfix', kolRpki: 'RPKI', kolPodzial: 'Aufteilung in /24 (/48)', kolIrr: 'Route-Objekt', kolWlasciciel: 'Inhaber', kolUwagi: 'Hinweise',
  pokazWszystkie: (n) => `Alle anzeigen (${n})`,
  limit: (n, m) => `${n} von ${m} Präfixen wurden im Detail analysiert (sehr große Netze werden nur teilweise analysiert, um öffentliche Dienste nicht zu überlasten).`,
  drukuj: 'Drucken / PDF', json: 'JSON herunterladen', link: 'Link zum Ergebnis kopieren', skopiowano: 'Kopiert', kopiuj: 'Kopieren',
  rpkiStan: { valid: 'valid', invalid: 'invalid', notfound: 'kein ROA', invalidLen: 'invalid (Länge)', invalidAs: 'invalid (anderes AS)' },
  podzialPelny: 'alle', podzialBrak: 'keine', podzialCzesc: (a, b) => `${a} von ${b}`, podzialNd: 'k. A.',
  irrRir: (db) => `ja (${db})`, irrBrak: 'fehlt', irrNieaut: (db) => `nur ${db}`,
  wlTak: 'stimmt überein', wlNie: 'andere Organisation', wlPa: 'PA vom LIR', wlNd: '—',

  t: {
    asIstnieje: { ok: (n) => `AS existiert: ${n}.`, blok: 'Dieses AS wurde in den Registries nicht gefunden.' },
    ogloszenia: { ok: (a, b) => `Das AS kündigt ${a} IPv4- und ${b} IPv6-Präfixe an.`, blok: 'Das AS kündigt derzeit keine Präfixe an — es gibt nichts umzuleiten. Kündigt ein Upstream Ihre Präfixe an, führen Sie den Test für dessen AS aus; die Umleitung erfordert seine Zustimmung (LOA).' },
    abuse: { ok: (m) => `Abuse-Kontakt: ${m}.`, popr: 'Kein Abuse-Kontakt (abuse-c). Scrubbing-Center und CERT-Teams nutzen ihn während eines Vorfalls; in der RIPE-NCC-Region ist er Pflicht.' },
    autnum: { okRir: (r) => `Das AS ist bei ${r} registriert.`, ok: 'aut-num-Objekt existiert in der RIPE-Datenbank.', popr: 'Kein aut-num-Objekt in der RIPE-Datenbank.', info: 'AS außerhalb der RIPE-NCC-Region — prüfen Sie aut-num und AS-SET in der Datenbank Ihrer RIR.' },
    eksport: { ok: (s) => `Die Export-Policy verweist auf AS-SET: ${s}.`, zal: 'aut-num nennt kein AS-SET in den export/mp-export-Zeilen. Scrubbing-Center bauen Filter aus dem AS-SET oder nur aus dem AS — bei Downstream-Netzen ist ein AS-SET erforderlich.' },
    asset: { ok: (s, z) => `${s} (Registry ${z}) enthält Ihr AS.`, nieaut: (s, z) => `${s} existiert nur in ${z}. Viele Betreiber akzeptieren nur Sets aus RIR-Datenbanken.`, zadnego: 'Kein AS-SET in aut-num oder PeeringDB gefunden. Ohne AS-SET baut der Betreiber den Filter nur aus Ihrem AS — bei Downstream-Netzen reicht das nicht.', popr: (s) => `${s} enthält Ihr AS nicht — ein daraus gebauter Filter übergeht Ihre Präfixe.`, brak: (s) => `${s} wurde in der RIPE-Datenbank nicht gefunden. Ein Set in RADB oder einer anderen nicht autoritativen Registry akzeptieren viele Betreiber nicht.` },
    assetHier: { ok: (s) => `${s} hat einen hierarchischen Namen.`, zal: (s) => `${s} hat einen kurzen Namen. Neue Sets sollten mit dem AS als Präfix angelegt werden (z. B. AS64496:AS-KUNDEN, RFC 2622) — das schützt vor Nachahmung in anderen Registries.` },
    pdb: { ok: (s) => `PeeringDB: Eintrag vorhanden, AS-SET ${s}.`, zal: 'Kein PeeringDB-Eintrag oder leeres AS-SET-Feld. Viele Betreiber bauen Filter aus dem AS-SET in PeeringDB.', roz: (a, b) => `AS-SET in PeeringDB (${a}) weicht vom AS-SET in aut-num (${b}) ab.` },
    upstream: { ok: (n) => `In BGP sichtbare Upstreams: ${n}.`, zal: (n) => `Nur ${n} Upstream sichtbar. Bei nur einer Leitung sättigt der Angriff sie, bevor die Umleitung greift — erwägen Sie eine zweite Leitung oder RTBH und BGP FlowSpec beim Upstream.` },
    aspa: { ok: (l) => `ASPA-Objekt vorhanden (Provider: ${l}).`, brakOp: (op) => `Das ASPA-Objekt enthält AS${op} nicht. Nach der Umleitung ist der Pfad über das Scrubbing-Center für ASPA-validierende Netze ungültig — fügen Sie AS${op} zur Provider-Liste hinzu.`, info: 'Kein ASPA-Objekt. Es ist nicht erforderlich; wenn Sie eines anlegen, nehmen Sie auch das AS des Scrubbing-Centers als Provider auf.' },
    opRoa: { ok: (op) => `ROAs für AS${op} decken jedes /24 (/48) ab.`, blok: (op, n) => `Der Betreiber kündigt aus seinem eigenen AS an, aber für ${n} /24-(/48-)Präfixe gibt es kein ROA für AS${op}. RPKI-validierende Netze werden diese Ankündigungen verwerfen.` },
    nieaktualne: { zal: (l) => `Route-Objekte mit Ihrem AS für Präfixe, die Sie nicht ankündigen: ${l}. Löschen Sie veraltete — Unordnung im IRR erschwert die Prüfung beim Betreiber.` }
  },
  p: {
    zaDlugi: (d) => `Präfix länger als /${d} — wird im Internet gefiltert (RFC 7454) und von Scrubbing-Centern nicht akzeptiert.`,
    rpkiInvalid: 'Die Ankündigung ist derzeit RPKI-invalid — Netze mit ROV verwerfen sie bereits.',
    rpkiBrak: 'Kein ROA für dieses Präfix. Manche Scrubbing-Center verlangen ein ROA, und Netze mit ROV behandeln ein solches Präfix schlechter als ein valides.',
    podzialBrak: (d, n) => `Keines der ${n} /${d}-Präfixe wird RPKI-valid sein. Die Umleitung eines Teils des Adressraums funktioniert nicht.`,
    podzialCzesc: (d, a, n) => `${n - a} von ${n} /${d}-Präfixen werden nach der Aufteilung nicht RPKI-valid sein.`,
    maxLen: (r, m) => `ROA ${r} hat maxLength ${m}. Das erlaubt die Aufteilung in /24, aber RFC 9319 empfiehlt separate ROAs für angekündigte Präfixe — ein großzügiges maxLength erleichtert Hijacks mit gefälschtem Origin.`,
    irrBrak: 'Kein Route-Objekt mit Ihrem AS in einer RIR-Datenbank. Die meisten Scrubbing-Center bauen Filter aus dem IRR und akzeptieren das Präfix nicht.',
    irrNieaut: (db) => `Route-Objekt nur in ${db}. Betreiber akzeptieren meist nur RIR-Datenbanken (RIPE, ARIN, APNIC, AFRINIC, LACNIC).`,
    irrPod: (d, a, n) => `Route-Objekte für /${d}-Präfixe: ${a} von ${n}. Manche Betreiber verlangen ein Objekt genau für das angekündigte Präfix — legen Sie es vor einem Angriff an.`,
    konflikt: (l) => `Route-Objekte mit einem anderen AS: ${l}. Wenn veraltet, löschen Sie sie — sie stören Filter und die Prüfung beim Betreiber.`,
    konfliktInv: (l) => `Route-Objekte mit einem anderen AS, die dem ROA widersprechen (RPKI-invalid): ${l}. Löschen Sie sie.`,
    as0: 'Ein AS0-ROA deckt einen Teil des Präfixes ab (RFC 6483) — diese Adressen darf niemand ankündigen, auch nicht das Scrubbing-Center.',
    innyRoa: (l) => `ROAs für andere AS, die das Präfix abdecken: ${l}. Prüfen Sie, ob sie noch benötigt werden.`,
    wlInny: (o) => `Die Ressource gehört einer anderen Organisation (${o}) als das AS. Das Scrubbing-Center wird eine LOA des Adressinhabers verlangen.`,
    wlPa: (s) => `Adressraum von einem LIR zugewiesen (Status ${s}). Das Scrubbing-Center wird eine LOA des LIR verlangen.`,
    nadrzedny: (l) => `Ein weniger spezifisches Präfix wird von ${l} angekündigt. Meist ist das Adressraum des Upstreams — für die Umleitung ist seine Zustimmung (LOA) nötig.`,
    wszystkoOk: 'Keine Anmerkungen.'
  },
  f: {
    roa: (p, d) => `Legen Sie ROAs an, die die Ankündigung jedes /${d} aus ${p} erlauben.`,
    roaNowe: (p) => `Legen Sie ROAs mit Ihrem AS und maxLength gleich der Präfixlänge an für: ${p}.`,
    roaA: (n) => `Empfohlen (RFC 9319): separate ROAs für ${n} Präfixe.`,
    roaB: (p, d) => `Einfacher: maxLength ${d} im ROA für ${p}.`,
    route: (n, d) => `Legen Sie ${n} Route-Objekte für /${d}-Präfixe an.`,
    routeAgg: (p) => `Legen Sie ein Route-Objekt für ${p} mit Ihrem AS in einer RIR-Datenbank an.`,
    usun: (n) => `Löschen oder prüfen Sie ${n} Route-Objekte mit einem anderen AS.`,
    loa: (l) => `Bereiten Sie eine LOA vor für: ${l}.`,
    zaDlugi: (l) => `Ersetzen Sie Präfixe länger als /24 (/48): ${l}.`,
    rpki: (l) => `Korrigieren Sie die ROAs, durch die diese Ankündigungen derzeit invalid sind: ${l}.`,
    as0: (l) => `Prüfen Sie die AS0-ROAs für: ${l}.`
  },
  reczne: [
    ['LOA', 'Schriftliche Zustimmung des Adressinhabers (und des Upstreams, falls er das Präfix ankündigt), dass das Scrubbing-Center Ihre Präfixe ankündigen darf.'],
    ['Tunnel und MSS', 'Bereinigter Traffic kommt meist per GRE oder IPsec zurück. Setzen Sie MSS-Clamping (typisch 1436 für GRE, ca. 1360 für IPsec), bevor Sie den Traffic umschalten, und prüfen Sie die Decapsulation-Leistung des Routers.'],
    ['Propagationszeit', 'Neue ROAs und Route-Objekte erreichen die Filter nach einigen Stunden bis 48 Stunden. Bereiten Sie sie vor einem Angriff vor, nicht währenddessen.'],
    ['Ankündigung und Rücknahme', 'Vereinbaren Sie mit dem Betreiber, wie die /24 angekündigt werden (Prepend, Communities, Unterdrückung der Transit-Ankündigung) und wie die Umleitung sicher zurückgenommen wird — erst das Präfix selbst ankündigen, dann beim Betreiber zurückziehen.'],
    ['Routing-Schleifen', 'Sendet Ihnen der Betreiber spezifischere Präfixe Ihres Adressraums zurück, filtern Sie diese auf der Session, damit keine Schleife entsteht.'],
    ['Probelauf', 'Testen Sie die Umleitung eines /24 außerhalb eines Angriffs und prüfen Sie im Looking Glass, ob das Präfix sichtbar und RPKI-valid ist.'],
    ['RTBH', 'Erweitern Sie ROAs nicht für RTBH (/32-Präfixe, BLACKHOLE-Community aus RFC 7999) — RFC 9319 §6 rät ausdrücklich davon ab. Umleitung zum Scrubbing-Center und RTBH sind zwei getrennte Themen.']
  ],
  podstawa: [
    ['RFC 6811', 'Zustände der Origin-Validierung: valid, invalid, not found'],
    ['RFC 9319 (BCP 185)', 'minimale ROAs und maxLength; §5.1 — ROAs für DDoS-Schutzdienste müssen vor dem Angriff existieren; §6 — ROAs nicht für RTBH erweitern'],
    ['RFC 9582', 'ROA-Profil'],
    ['RFC 7454 (BCP 194)', 'Filterung von Präfixen länger als /24 und /48, IRR als Grundlage für Filter'],
    ['RFC 6483', 'AS0-ROAs'],
    ['RFC 2622', 'hierarchische AS-SET-Namen'],
    ['RFC 9224', 'Ermittlung des zuständigen RDAP-Servers'],
    ['ASPA', 'Autorisierung von Upstreams (IETF SIDROPS)'],
    ['ripe-705', 'verpflichtender abuse-c in der RIPE-Datenbank'],
    ['RIR-Dokumentation', 'RIPE NCC, ARIN, APNIC, AFRINIC, LACNIC: ROAs, Route-Objekte, as-sets, Abuse, ASPA'],
    ['MANRS', 'Registrierung in IRR und RPKI, aktuelle Kontakte'],
    ['Betreiber', 'öffentliche Onboarding-Dokumentation bekannter Scrubbing-Center-Betreiber: Mindestpräfix, ROA, IRR in einer RIR-Datenbank, LOA, Tunnel']
  ],
  podstawaLink: 'Vollständige Quellenliste mit Links',
  obiektRoa: 'ROAs zum Anlegen im RPKI-Portal Ihrer RIR',
  obiektRoute: 'Route-Objekte (RPSL)',
  stopka: 'Das Ergebnis dient nur zur Information und beruht auf öffentlichen Daten zum Zeitpunkt der Prüfung. Die endgültigen Anforderungen legt der Betreiber des Scrubbing-Centers fest.'
};

window.RIR.de = {
  RIPE: {
    nazwa: 'RIPE NCC',
    roa: { kroki: [
      'Melden Sie sich im RPKI Dashboard an (dashboard.rpki.ripe.net, auch über my.ripe.net → RPKI). Bei der ersten Nutzung legen Sie eine Hosted CA an.',
      'Reiter „ROAs“ → „Create ROA“ (für noch nicht angekündigte Präfixe) oder „Announcements“ → „Create ROA“ (für in BGP sichtbare Präfixe).',
      'Empfohlen: ein separates ROA für jedes oben aufgeführte /24, maxLength gleich der Präfixlänge. Einfacher: ein ROA auf das Aggregat mit maxLength 24.',
      'Übernehmen Sie die Änderungen („Pending Changes“ → „Publish“). Warnt das Dashboard, dass das ROA sichtbare Ankündigungen ungültig macht, brechen Sie ab und prüfen Sie das Origin-AS.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/' },
    route: { kroki: [
      'Öffnen Sie die RIPE-Datenbank: apps.db.ripe.net → „Create an object“ → route (IPv6: route6). Sie können die Objekte von oben auch in „Syncupdates“ einfügen.',
      'Füllen Sie route, origin, mnt-by (ein Maintainer mit Berechtigung für Ihren Adressraum) und source: RIPE aus.',
      'Autorisieren Sie mit Passwort oder Schlüssel des Maintainers. Ein Route-Objekt braucht die Autorisierung des Adressinhabers — ein ROA legt keines an.'
    ], link: 'https://docs.db.ripe.net/' },
    usun: { kroki: [
      'Suchen Sie das Objekt in apps.db.ripe.net (Query) und prüfen Sie sein mnt-by.',
      'Gehört der Maintainer Ihnen, wählen Sie „Delete object“ und geben Sie einen Grund an. Gehört er einer anderen Firma, bitten Sie diese um Löschung oder melden Sie das Objekt dem RIPE NCC (ripe-dbm@ripe.net).'
    ], link: 'https://docs.db.ripe.net/' },
    asset: { kroki: [
      'Legen Sie ein as-set mit hierarchischem Namen an, z. B. AS64496:AS-KUNDEN — neue Sets in der RIPE-Datenbank müssen so benannt sein.',
      'Tragen Sie unter members Ihr AS und die AS Ihrer Downstream-Netze ein.',
      'Verweisen Sie in den export/mp-export-Zeilen Ihres aut-num auf das Set (announce AS64496:AS-KUNDEN) und tragen Sie es in PeeringDB ein.'
    ], link: 'https://docs.db.ripe.net/Set-Objects/' },
    abuse: { kroki: [
      'Legen Sie ein role-Objekt mit dem Attribut abuse-mailbox an.',
      'Verweisen Sie darauf im abuse-c Ihres organisation-Objekts — inetnum, inet6num und aut-num erben es automatisch.',
      'Das RIPE NCC validiert die Adresse jährlich (ripe-705); beantworten Sie die Validierungsnachricht.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/faqs-for-abuse-c/' },
    aspa: { kroki: [
      'RPKI Dashboard → Reiter ASPA → Objekt für Ihr AS anlegen.',
      'Tragen Sie alle Transit-Provider und das AS des Scrubbing-Centers als Provider ein.'
    ], link: 'https://labs.ripe.net/author/tim_bruijnzeels/aspa-in-the-rpki-dashboard-a-new-layer-of-routing-security/' }
  },
  ARIN: {
    nazwa: 'ARIN',
    roa: { kroki: [
      'Melden Sie sich bei ARIN Online an → Routing Security. Bei der ersten Nutzung: „Sign Up for RPKI“ → „Sign Up for Hosted“. Ein RSA ist erforderlich (für Legacy-Ressourcen ein LRSA).',
      'Manage RPKI → „View Details“ bei Ihrer Organisation → RPKI: ROAs → „Create ROA“.',
      'Geben Sie Origin-AS, Präfix und maxLength ein. Empfohlen: ein separates ROA für jedes /24; einfacher: ein ROA auf das Aggregat mit maxLength 24.',
      'Wählen Sie auf dem Bestätigungsbildschirm, dass ein passendes Route-Objekt im ARIN IRR angelegt wird.'
    ], link: 'https://www.arin.net/resources/manage/rpki/options/hosted/' },
    route: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → Org ID wählen → route (IPv6: route6) → „Create Object“.',
      'Geben Sie Präfix und Origin-AS ein. Das ARIN IRR nutzt keine mntner-Objekte — Zugriff haben die Admin-, Tech- und Routing-POCs der Organisation.',
      'Route-Objekte lassen sich auch über die ARIN-REST-API anlegen.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    usun: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → Objekt suchen und löschen.',
      'Objekte in RADB oder anderen Registries löscht ihr Maintainer — bitten Sie die Firma darum, die sie angelegt hat.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    asset: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → as-set → „Create Object“.',
      'Name: AS-… oder AS64496:AS-… (hierarchisch empfohlen — verhindert Nachahmung in anderen Registries).',
      'Tragen Sie die Mitglieder ein (Ihr AS und Downstreams) und hinterlegen Sie das Set in PeeringDB.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    abuse: { kroki: [
      'Jede Org ID braucht einen Abuse POC. ARIN Online → Your Records → Point of Contact Records → „Create POC“.',
      'Ein Admin- oder Tech-POC verknüpft ihn unter Organization Identifiers → Manage.'
    ], link: 'https://www.arin.net/resources/guide/account/records/poc/' },
    aspa: { kroki: [
      'ARIN Online → Routing Security → Manage RPKI → ASPAs → „Create ASPA“.',
      'Ein ASPA gilt für ein AS; fügen Sie Ihre Transit-Provider und das AS des Scrubbing-Centers hinzu.'
    ], link: 'https://www.arin.net/resources/manage/rpki/aspa/' }
  },
  APNIC: {
    nazwa: 'APNIC',
    roa: { kroki: [
      'Melden Sie sich bei MyAPNIC an → Resources → Route Management.',
      'Route hinzufügen: Präfix, Origin-AS und „Most Specific Announcement“ (entspricht maxLength). Aktivieren Sie ROA und whois — APNIC legt ROA und Route-Objekt gemeinsam an.',
      'Empfohlen: eine separate Route für jedes /24; einfacher: das Aggregat mit MSA 24 (für whois darf die Differenz höchstens 8 Bit betragen).',
      'Werden Ihre Ressourcen von einem NIR verwaltet (JPNIC, IDNIC, TWNIC, CNNIC, KRNIC), legen Sie ROAs im System dieses NIR an.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    route: { kroki: [
      'MyAPNIC → Resources → Route Management mit aktiviertem whois — das Route-Objekt entsteht zusammen mit dem ROA.',
      'Außerhalb von MyAPNIC geänderte Objekte (Webupdates, E-Mail) werden als Konflikt angezeigt — bleiben Sie bei einer Methode.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    usun: { kroki: [
      'MyAPNIC → Route Management → Route löschen (entfernt ROA und whois-Objekt, falls sie zusammen angelegt wurden).',
      'Objekte anderer Firmen löscht ihr Maintainer — bitten Sie ihn darum oder wenden Sie sich an APNIC.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/' },
    asset: { kroki: [
      'In APNIC Whois müssen neue as-sets hierarchische Namen haben (AS64496:AS-…); angelegt werden sie vom Maintainer des AS.',
      'Tragen Sie die Mitglieder ein (Ihr AS und Downstreams) und hinterlegen Sie das Set in PeeringDB.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/guide/as-set/' },
    abuse: { kroki: [
      'Bei APNIC wird abuse-c aus dem IRT-Objekt erzeugt. Bearbeitung: MyAPNIC → Resources → IRTs.',
      'APNIC validiert die Adresse alle 6 Monate — beantworten Sie die Validierungsnachricht.'
    ], link: 'https://www.apnic.net/about-apnic/service-updates/apnic-whois-database-abuse-c/' },
    aspa: { kroki: [
      'ASPA ist in MyAPNIC (Bereich RPKI) und über die Registry API verfügbar.',
      'Fügen Sie Ihre Transit-Provider und das AS des Scrubbing-Centers hinzu.'
    ], link: 'https://blog.apnic.net/2026/07/09/aspa-at-apnic-strengthening-bgp-path-validation/' }
  },
  AFRINIC: {
    nazwa: 'AFRINIC',
    roa: { kroki: [
      'Melden Sie sich bei MyAFRINIC an (BPKI-Zertifikat oder 2FA erforderlich) → Resources → Resource Certification.',
      'ROA anlegen: Name, Origin-AS, Präfix, Max Length und Gültigkeitsdauer.',
      'Empfohlen: ein separates ROA für jedes /24; einfacher: das Aggregat mit Max Length 24.'
    ], link: 'https://afrinic.net/support/rpki' },
    route: { kroki: [
      'MyAFRINIC → Resources → IRR → „Add Route“ (IPv6: „Add Route6“).',
      'Das mnt-by des Route-Objekts muss dem mnt-lower des inetnum entsprechen.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    usun: { kroki: [
      'MyAFRINIC → Resources → IRR → Objekt suchen und löschen.',
      'Objekte anderer Firmen löscht ihr Maintainer — bitten Sie ihn darum oder wenden Sie sich an AFRINIC.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    asset: { kroki: [
      'MyAFRINIC → IRR → as-set anlegen (Name beginnt mit AS-; hierarchisch AS64496:AS-… empfohlen).',
      'Tragen Sie die Mitglieder ein (Ihr AS und Downstreams) und hinterlegen Sie das Set in PeeringDB.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/create-as-set-objects' },
    abuse: { kroki: [
      'inetnum, inet6num und aut-num müssen ein abuse-c mit abuse-mailbox haben.',
      'Setzen Sie es in MyAFRINIC oder in der AFRINIC-Datenbank.'
    ], link: 'https://afrinic.net/support/how-to-publish-abuse-contact-information' },
    aspa: { kroki: [
      'Prüfen Sie in MyAFRINIC, ob ASPA verfügbar ist — Stand Oktober 2026 hat AFRINIC es nicht öffentlich angekündigt.',
      'Wenn Sie ein ASPA anlegen, nehmen Sie das AS des Scrubbing-Centers auf.'
    ], link: 'https://afrinic.net/support/rpki' }
  },
  LACNIC: {
    nazwa: 'LACNIC',
    roa: { kroki: [
      'Melden Sie sich bei MiLACNIC an → RPKI (Hosted-Modell).',
      'Legen Sie ein ROA für Präfix und Origin-AS an. Wichtig: LACNIC erzeugt Route-Objekte automatisch aus ROAs, nur für das ROA-Präfix und ohne Berücksichtigung von maxLength.',
      'Wählen Sie bei LACNIC daher separate ROAs für jedes /24 — so entsteht auch für jedes /24 ein Route-Objekt.',
      'Brasilianische Zuteilungen (Registro.br / NIC.br) verwaltet NIC.br im Delegated-Modell, nicht in MiLACNIC.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    route: { kroki: [
      'Im LACNIC IRR entstehen Route-Objekte aus den in MiLACNIC angelegten ROAs — legen Sie für jedes Präfix, das ein Route-Objekt braucht, ein ROA an.',
      'Prüfen Sie das Objekt nach einigen Stunden auf irr.lacnic.net.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    usun: { kroki: [
      'Route-Objekte im LACNIC IRR verschwinden, wenn das zugehörige ROA in MiLACNIC gelöscht wird.',
      'Objekte in RADB oder anderen Registries löscht ihr Maintainer.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    asset: { kroki: [
      'MiLACNIC → IRR → as-set anlegen (hierarchischer Name AS64496:AS-… empfohlen).',
      'Tragen Sie die Mitglieder ein (Ihr AS und Downstreams) und hinterlegen Sie das Set in PeeringDB.'
    ], link: 'https://lacnic.zendesk.com/hc/es/categories/360002625214-Internet-Routing-Registry' },
    abuse: { kroki: [
      'inetnum und aut-num müssen ein abuse-c mit abuse-mailbox haben, das mindestens zweimal jährlich validiert wird.',
      'Setzen Sie es in MiLACNIC bei den Kontakten der Organisation und der Ressource — eine fehlgeschlagene Validierung sperrt den Zugang zu MiLACNIC.'
    ], link: 'https://politicas.lacnic.net/politicas/detail/id/LAC-2018-5' },
    aspa: { kroki: [
      'ASPA ist seit Oktober 2026 in MiLACNIC verfügbar — siehe Bereich RPKI.',
      'Fügen Sie Ihre Transit-Provider und das AS des Scrubbing-Centers hinzu.'
    ], link: 'https://blog.lacnic.net/en/caribnog-lacnic/' }
  }
};

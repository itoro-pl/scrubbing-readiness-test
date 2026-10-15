/* ==========================================================
   ITORO — Test gotowości prefiksów do scrubbing center
   Instrukcje „krok po kroku” dla każdego RIR (pl / en).
   Stan dokumentacji RIR: 15.10.2026. Ścieżki menu zmieniają się —
   każdy blok kończy się odnośnikiem do dokumentacji RIR.
   Klucze kroków: roa, roaOp, aspa, route, usun, asset, abuse.
   ========================================================== */
window.RIR = {
pl: {
  RIPE: {
    nazwa: 'RIPE NCC',
    roa: { kroki: [
      'Zaloguj się do RPKI Dashboard (dashboard.rpki.ripe.net, także przez my.ripe.net → RPKI). Przy pierwszym użyciu utwórz Hosted CA.',
      'Zakładka „ROAs” → „Create ROA” (dla prefiksów jeszcze nieogłaszanych) albo „Announcements” → „Create ROA” (dla widocznych w BGP).',
      'Wariant zalecany: osobny ROA dla każdego /24 z ramki powyżej, pole maxLength pozostaw równe długości prefiksu. Wariant prostszy: jeden ROA na agregat z maxLength 24.',
      'Zatwierdź zmiany („Pending Changes” → „Publish”). Jeżeli Dashboard ostrzega, że ROA unieważni widoczne ogłoszenia — przerwij i sprawdź origin AS.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/' },
    route: { kroki: [
      'Otwórz RIPE Database: apps.db.ripe.net → „Create an object” → route (IPv6: route6). Można też wkleić gotowe obiekty z ramki powyżej w „Syncupdates”.',
      'Wypełnij route, origin, mnt-by (maintainer z prawem do Twojej przestrzeni) i source: RIPE.',
      'Zatwierdź hasłem albo kluczem maintainera. Obiekt route wymaga autoryzacji posiadacza przestrzeni adresowej — sam ROA nie tworzy obiektu route.'
    ], link: 'https://docs.db.ripe.net/' },
    usun: { kroki: [
      'Wyszukaj obiekt w apps.db.ripe.net (Query) i sprawdź jego mnt-by.',
      'Jeżeli maintainer jest Twój — wybierz „Delete object” i podaj powód. Jeżeli należy do innej firmy, poproś ją o usunięcie albo zgłoś obiekt do RIPE NCC (ripe-dbm@ripe.net).'
    ], link: 'https://docs.db.ripe.net/' },
    asset: { kroki: [
      'Utwórz obiekt as-set z nazwą hierarchiczną, np. AS64496:AS-KLIENCI — w RIPE Database nowe zbiory muszą mieć taką nazwę.',
      'W polu members wpisz swój AS i AS-y sieci downstream.',
      'W aut-num w liniach export/mp-export wskaż ten zbiór (announce AS64496:AS-KLIENCI) i wpisz go w PeeringDB.'
    ], link: 'https://docs.db.ripe.net/Set-Objects/' },
    abuse: { kroki: [
      'Utwórz obiekt role z atrybutem abuse-mailbox.',
      'Wskaż go w abuse-c obiektu organisation — inetnum, inet6num i aut-num dziedziczą go automatycznie.',
      'RIPE NCC co roku sprawdza ten adres (ripe-705); odpowiadaj na wiadomość weryfikacyjną.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/faqs-for-abuse-c/' },
    aspa: { kroki: [
      'RPKI Dashboard → zakładka ASPA → utwórz obiekt dla swojego AS.',
      'Na liście providerów wpisz wszystkich operatorów tranzytowych i AS operatora scrubbing center.'
    ], link: 'https://labs.ripe.net/author/tim_bruijnzeels/aspa-in-the-rpki-dashboard-a-new-layer-of-routing-security/' }
  },
  ARIN: {
    nazwa: 'ARIN',
    roa: { kroki: [
      'Zaloguj się do ARIN Online → Routing Security. Przy pierwszym użyciu: „Sign Up for RPKI” → „Sign Up for Hosted”. Wymagana umowa RSA (dla zasobów legacy — LRSA).',
      'Manage RPKI → „View Details” przy organizacji → RPKI: ROAs → „Create ROA”.',
      'Podaj origin AS, prefiks i maxLength. Wariant zalecany: osobny ROA dla każdego /24; prostszy: jeden ROA na agregat z maxLength 24.',
      'Na ekranie potwierdzenia zaznacz utworzenie pasującego obiektu route w ARIN IRR.'
    ], link: 'https://www.arin.net/resources/manage/rpki/options/hosted/' },
    route: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → wybierz Org ID → route (IPv6: route6) → „Create Object”.',
      'Wpisz prefiks i origin AS. ARIN IRR nie używa obiektów mntner — uprawnienia mają Admin, Tech i Routing POC organizacji.',
      'Obiekty route można też tworzyć przez REST API ARIN.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    usun: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → znajdź obiekt i usuń go.',
      'Obiekty w RADB lub innych rejestrach usuwa ich maintainer — poproś o to firmę, która je utworzyła.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    asset: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → as-set → „Create Object”.',
      'Nazwa: AS-… albo AS64496:AS-… (zalecana hierarchiczna — chroni przed podszyciem w innych rejestrach).',
      'Wpisz członków (Twój AS i downstreamy) i podaj ten zbiór w PeeringDB.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    abuse: { kroki: [
      'Każdy Org ID musi mieć Abuse POC. ARIN Online → Your Records → Point of Contact Records → „Create POC”.',
      'Admin lub Tech POC dołącza go w Organization Identifiers → Manage.'
    ], link: 'https://www.arin.net/resources/guide/account/records/poc/' },
    aspa: { kroki: [
      'ARIN Online → Routing Security → Manage RPKI → ASPAs → „Create ASPA”.',
      'Jedno ASPA obejmuje jeden AS; dodaj operatorów tranzytowych i AS operatora scrubbing center.'
    ], link: 'https://www.arin.net/resources/manage/rpki/aspa/' }
  },
  APNIC: {
    nazwa: 'APNIC',
    roa: { kroki: [
      'Zaloguj się do MyAPNIC → Resources → Route Management.',
      'Dodaj trasę: prefiks, origin AS i „Most Specific Announcement” (to jest maxLength). Zaznacz pola ROA i whois — APNIC utworzy jednocześnie ROA i obiekt route.',
      'Wariant zalecany: osobna trasa dla każdego /24; prostszy: agregat z MSA 24 (dla whois różnica może wynosić najwyżej 8 bitów).',
      'Jeżeli zasoby obsługuje NIR (JPNIC, IDNIC, TWNIC, CNNIC, KRNIC), ROA tworzy się w systemie tego NIR.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    route: { kroki: [
      'MyAPNIC → Resources → Route Management, z zaznaczonym polem whois — obiekt route powstaje razem z ROA.',
      'Obiekty zmienione poza MyAPNIC (webupdates, e-mail) narzędzie pokazuje jako konflikt — trzymaj się jednej metody.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    usun: { kroki: [
      'MyAPNIC → Route Management → usuń trasę (usuwa ROA i obiekt whois, jeśli były utworzone razem).',
      'Obiekty innych firm usuwa ich maintainer — poproś go o to albo zgłoś się do APNIC.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/' },
    asset: { kroki: [
      'W APNIC Whois nowe as-set muszą mieć nazwę hierarchiczną (AS64496:AS-…); tworzy je maintainer danego AS.',
      'Wpisz członków (Twój AS i downstreamy) i podaj ten zbiór w PeeringDB.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/guide/as-set/' },
    abuse: { kroki: [
      'abuse-c w APNIC powstaje automatycznie z obiektu IRT. Edycja: MyAPNIC → Resources → IRTs.',
      'APNIC weryfikuje adres co 6 miesięcy — odpowiadaj na wiadomość weryfikacyjną.'
    ], link: 'https://www.apnic.net/about-apnic/service-updates/apnic-whois-database-abuse-c/' },
    aspa: { kroki: [
      'ASPA jest dostępne w MyAPNIC (sekcja RPKI) i przez Registry API.',
      'Dodaj operatorów tranzytowych i AS operatora scrubbing center.'
    ], link: 'https://blog.apnic.net/2026/07/09/aspa-at-apnic-strengthening-bgp-path-validation/' }
  },
  AFRINIC: {
    nazwa: 'AFRINIC',
    roa: { kroki: [
      'Zaloguj się do MyAFRINIC (wymagany certyfikat BPKI albo 2FA) → Resources → Resource Certification.',
      'Utwórz ROA: nazwa, origin AS, prefiks, Max Length i okres ważności.',
      'Wariant zalecany: osobny ROA dla każdego /24; prostszy: agregat z Max Length 24.'
    ], link: 'https://afrinic.net/support/rpki' },
    route: { kroki: [
      'MyAFRINIC → Resources → IRR → „Add Route” (IPv6: „Add Route6”).',
      'mnt-by obiektu route musi być równy mnt-lower z inetnum.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    usun: { kroki: [
      'MyAFRINIC → Resources → IRR → znajdź obiekt i usuń go.',
      'Obiekty innych firm usuwa ich maintainer — poproś go o to albo zgłoś się do AFRINIC.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    asset: { kroki: [
      'MyAFRINIC → IRR → utwórz as-set (nazwa zaczyna się od AS-; zalecana hierarchiczna AS64496:AS-…).',
      'Wpisz członków (Twój AS i downstreamy) i podaj ten zbiór w PeeringDB.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/create-as-set-objects' },
    abuse: { kroki: [
      'inetnum, inet6num i aut-num muszą mieć abuse-c z abuse-mailbox.',
      'Ustaw go w MyAFRINIC albo w bazie AFRINIC.'
    ], link: 'https://afrinic.net/support/how-to-publish-abuse-contact-information' },
    aspa: { kroki: [
      'Sprawdź w MyAFRINIC, czy ASPA jest już dostępne — w październiku 2026 AFRINIC nie ogłosił go publicznie.',
      'Jeżeli utworzysz ASPA, dodaj AS operatora scrubbing center.'
    ], link: 'https://afrinic.net/support/rpki' }
  },
  LACNIC: {
    nazwa: 'LACNIC',
    roa: { kroki: [
      'Zaloguj się do MiLACNIC → RPKI (model hosted).',
      'Utwórz ROA dla prefiksu i origin AS. Ważne: LACNIC tworzy obiekty route automatycznie z ROA, tylko dla prefiksu z ROA, bez uwzględnienia maxLength.',
      'Dlatego w LACNIC wybierz wariant z osobnym ROA dla każdego /24 — wtedy powstaną też obiekty route dla każdego /24.',
      'Przydziały z Brazylii (Registro.br / NIC.br) obsługuje NIC.br w modelu delegated, a nie MiLACNIC.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    route: { kroki: [
      'W LACNIC IRR obiekty route powstają z ROA utworzonych w MiLACNIC — utwórz ROA dla każdego prefiksu, który ma mieć obiekt route.',
      'Po kilku godzinach sprawdź obiekt na irr.lacnic.net.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    usun: { kroki: [
      'Obiekty route w LACNIC IRR znikają po usunięciu odpowiadającego im ROA w MiLACNIC.',
      'Obiekty w RADB lub innych rejestrach usuwa ich maintainer.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    asset: { kroki: [
      'MiLACNIC → IRR → utwórz as-set (zalecana nazwa hierarchiczna AS64496:AS-…).',
      'Wpisz członków (Twój AS i downstreamy) i podaj ten zbiór w PeeringDB.'
    ], link: 'https://lacnic.zendesk.com/hc/es/categories/360002625214-Internet-Routing-Registry' },
    abuse: { kroki: [
      'inetnum i aut-num muszą mieć abuse-c z abuse-mailbox, weryfikowany co najmniej dwa razy w roku.',
      'Ustaw go w MiLACNIC w kontaktach organizacji i zasobu — brak weryfikacji blokuje dostęp do MiLACNIC.'
    ], link: 'https://politicas.lacnic.net/politicas/detail/id/LAC-2018-5' },
    aspa: { kroki: [
      'ASPA pojawiło się w MiLACNIC w październiku 2026 — sprawdź w sekcji RPKI.',
      'Dodaj operatorów tranzytowych i AS operatora scrubbing center.'
    ], link: 'https://blog.lacnic.net/en/caribnog-lacnic/' }
  }
},
en: {
  RIPE: {
    nazwa: 'RIPE NCC',
    roa: { kroki: [
      'Log in to the RPKI Dashboard (dashboard.rpki.ripe.net, also via my.ripe.net → RPKI). On first use, create a Hosted CA.',
      '„ROAs” tab → „Create ROA” (for prefixes not yet announced) or „Announcements” → „Create ROA” (for prefixes visible in BGP).',
      'Recommended: a separate ROA for each /24 listed above, leaving maxLength equal to the prefix length. Simpler: one ROA on the aggregate with maxLength 24.',
      'Commit the changes („Pending Changes” → „Publish”). If the Dashboard warns that the ROA will invalidate visible announcements, stop and check the origin AS.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/' },
    route: { kroki: [
      'Open the RIPE Database: apps.db.ripe.net → „Create an object” → route (IPv6: route6). You can also paste the objects above into „Syncupdates”.',
      'Fill in route, origin, mnt-by (a maintainer with authority over your address space) and source: RIPE.',
      'Authorise with the maintainer\'s password or key. A route object needs the address holder\'s authorisation — a ROA does not create one.'
    ], link: 'https://docs.db.ripe.net/' },
    usun: { kroki: [
      'Look the object up in apps.db.ripe.net (Query) and check its mnt-by.',
      'If the maintainer is yours, choose „Delete object” and give a reason. If it belongs to another company, ask it to delete the object or report it to the RIPE NCC (ripe-dbm@ripe.net).'
    ], link: 'https://docs.db.ripe.net/' },
    asset: { kroki: [
      'Create an as-set with a hierarchical name, e.g. AS64496:AS-CUSTOMERS — new sets in the RIPE Database must use one.',
      'List your AS and your downstream ASes in members.',
      'Reference the set in the export/mp-export lines of your aut-num (announce AS64496:AS-CUSTOMERS) and in PeeringDB.'
    ], link: 'https://docs.db.ripe.net/Set-Objects/' },
    abuse: { kroki: [
      'Create a role object with an abuse-mailbox attribute.',
      'Reference it in abuse-c of your organisation object — inetnum, inet6num and aut-num inherit it.',
      'The RIPE NCC validates the address every year (ripe-705); answer the validation message.'
    ], link: 'https://www.ripe.net/manage-ips-and-asns/resource-management/faqs-for-abuse-c/' },
    aspa: { kroki: [
      'RPKI Dashboard → ASPA tab → create an object for your AS.',
      'List all your transit providers and the scrubbing centre\'s AS as providers.'
    ], link: 'https://labs.ripe.net/author/tim_bruijnzeels/aspa-in-the-rpki-dashboard-a-new-layer-of-routing-security/' }
  },
  ARIN: {
    nazwa: 'ARIN',
    roa: { kroki: [
      'Log in to ARIN Online → Routing Security. On first use: „Sign Up for RPKI” → „Sign Up for Hosted”. An RSA is required (LRSA for legacy resources).',
      'Manage RPKI → „View Details” for your organisation → RPKI: ROAs → „Create ROA”.',
      'Enter the origin AS, prefix and maxLength. Recommended: a separate ROA for each /24; simpler: one ROA on the aggregate with maxLength 24.',
      'On the confirmation screen, choose to create a matching route object in the ARIN IRR.'
    ], link: 'https://www.arin.net/resources/manage/rpki/options/hosted/' },
    route: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → select your Org ID → route (IPv6: route6) → „Create Object”.',
      'Enter the prefix and origin AS. The ARIN IRR has no mntner objects — the Admin, Tech and Routing POCs of the organisation have access.',
      'Route objects can also be created through the ARIN REST API.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    usun: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → find the object and delete it.',
      'Objects in RADB or other registries are removed by their maintainer — ask the company that created them.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    asset: { kroki: [
      'ARIN Online → Routing Security → Manage IRR → as-set → „Create Object”.',
      'Name: AS-… or AS64496:AS-… (hierarchical recommended — it prevents impersonation in other registries).',
      'Add the members (your AS and downstreams) and enter the set in PeeringDB.'
    ], link: 'https://www.arin.net/resources/manage/irr/userguide/' },
    abuse: { kroki: [
      'Every Org ID must have an Abuse POC. ARIN Online → Your Records → Point of Contact Records → „Create POC”.',
      'An Admin or Tech POC attaches it under Organization Identifiers → Manage.'
    ], link: 'https://www.arin.net/resources/guide/account/records/poc/' },
    aspa: { kroki: [
      'ARIN Online → Routing Security → Manage RPKI → ASPAs → „Create ASPA”.',
      'One ASPA covers one AS; add your transit providers and the scrubbing centre\'s AS.'
    ], link: 'https://www.arin.net/resources/manage/rpki/aspa/' }
  },
  APNIC: {
    nazwa: 'APNIC',
    roa: { kroki: [
      'Log in to MyAPNIC → Resources → Route Management.',
      'Add a route: prefix, origin AS and „Most Specific Announcement” (this is maxLength). Tick both ROA and whois — APNIC creates the ROA and the route object together.',
      'Recommended: a separate route for each /24; simpler: the aggregate with MSA 24 (for whois the difference may be at most 8 bits).',
      'If your resources are managed by a NIR (JPNIC, IDNIC, TWNIC, CNNIC, KRNIC), ROAs are created in that NIR\'s system.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    route: { kroki: [
      'MyAPNIC → Resources → Route Management with whois ticked — the route object is created together with the ROA.',
      'Objects changed outside MyAPNIC (webupdates, e-mail) are shown as conflicts — stick to one method.'
    ], link: 'https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/' },
    usun: { kroki: [
      'MyAPNIC → Route Management → delete the route (removes the ROA and the whois object if they were created together).',
      'Objects of other companies are removed by their maintainer — ask it or contact APNIC.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/' },
    asset: { kroki: [
      'In APNIC Whois new as-sets must have hierarchical names (AS64496:AS-…); the AS maintainer creates them.',
      'Add the members (your AS and downstreams) and enter the set in PeeringDB.'
    ], link: 'https://www.apnic.net/manage-ip/using-whois/guide/as-set/' },
    abuse: { kroki: [
      'In APNIC abuse-c is generated from the IRT object. Edit it in MyAPNIC → Resources → IRTs.',
      'APNIC validates the address every 6 months — answer the validation message.'
    ], link: 'https://www.apnic.net/about-apnic/service-updates/apnic-whois-database-abuse-c/' },
    aspa: { kroki: [
      'ASPA is available in MyAPNIC (RPKI section) and through the Registry API.',
      'Add your transit providers and the scrubbing centre\'s AS.'
    ], link: 'https://blog.apnic.net/2026/07/09/aspa-at-apnic-strengthening-bgp-path-validation/' }
  },
  AFRINIC: {
    nazwa: 'AFRINIC',
    roa: { kroki: [
      'Log in to MyAFRINIC (BPKI certificate or 2FA required) → Resources → Resource Certification.',
      'Create a ROA: name, origin AS, prefix, Max Length and validity period.',
      'Recommended: a separate ROA for each /24; simpler: the aggregate with Max Length 24.'
    ], link: 'https://afrinic.net/support/rpki' },
    route: { kroki: [
      'MyAFRINIC → Resources → IRR → „Add Route” (IPv6: „Add Route6”).',
      'The route object\'s mnt-by must equal the mnt-lower of the inetnum.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    usun: { kroki: [
      'MyAFRINIC → Resources → IRR → find the object and delete it.',
      'Objects of other companies are removed by their maintainer — ask it or contact AFRINIC.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/creating-route-object' },
    asset: { kroki: [
      'MyAFRINIC → IRR → create an as-set (name starts with AS-; hierarchical AS64496:AS-… recommended).',
      'Add the members (your AS and downstreams) and enter the set in PeeringDB.'
    ], link: 'https://afrinic.net/support/irr/on-myafrinic/create-as-set-objects' },
    abuse: { kroki: [
      'inetnum, inet6num and aut-num must have an abuse-c with an abuse-mailbox.',
      'Set it in MyAFRINIC or in the AFRINIC database.'
    ], link: 'https://afrinic.net/support/how-to-publish-abuse-contact-information' },
    aspa: { kroki: [
      'Check in MyAFRINIC whether ASPA is available — as of October 2026 AFRINIC has not announced it publicly.',
      'If you create an ASPA, include the scrubbing centre\'s AS.'
    ], link: 'https://afrinic.net/support/rpki' }
  },
  LACNIC: {
    nazwa: 'LACNIC',
    roa: { kroki: [
      'Log in to MiLACNIC → RPKI (hosted model).',
      'Create a ROA for the prefix and origin AS. Important: LACNIC generates route objects from ROAs automatically, only for the ROA prefix, ignoring maxLength.',
      'So in LACNIC choose separate ROAs for each /24 — that also creates a route object for each /24.',
      'Brazilian allocations (Registro.br / NIC.br) are handled by NIC.br in the delegated model, not in MiLACNIC.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    route: { kroki: [
      'In the LACNIC IRR route objects are generated from ROAs created in MiLACNIC — create a ROA for every prefix that needs a route object.',
      'After a few hours, check the object at irr.lacnic.net.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    usun: { kroki: [
      'Route objects in the LACNIC IRR disappear when the matching ROA is deleted in MiLACNIC.',
      'Objects in RADB or other registries are removed by their maintainer.'
    ], link: 'https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr' },
    asset: { kroki: [
      'MiLACNIC → IRR → create an as-set (hierarchical name AS64496:AS-… recommended).',
      'Add the members (your AS and downstreams) and enter the set in PeeringDB.'
    ], link: 'https://lacnic.zendesk.com/hc/es/categories/360002625214-Internet-Routing-Registry' },
    abuse: { kroki: [
      'inetnum and aut-num must have an abuse-c with an abuse-mailbox, validated at least twice a year.',
      'Set it in MiLACNIC under the organisation and resource contacts — failed validation blocks MiLACNIC access.'
    ], link: 'https://politicas.lacnic.net/politicas/detail/id/LAC-2018-5' },
    aspa: { kroki: [
      'ASPA was added to MiLACNIC in October 2026 — look in the RPKI section.',
      'Add your transit providers and the scrubbing centre\'s AS.'
    ], link: 'https://blog.lacnic.net/en/caribnog-lacnic/' }
  }
}
};

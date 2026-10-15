# Źródła: na czym opierają się testy

**[English version → SOURCES.md](SOURCES.md)**

Testy opierają się na trzech rodzajach źródeł. Pierwsze to dokumenty RFC organizacji IETF. Drugie to dokumenty RIPE NCC i dokumentacja bazy RIPE oraz pozostałych RIR-ów. Trzecie to publiczna dokumentacja wdrożeniowa znanych operatorów ochrony przed DDoS (scrubbing center). Wszystkie źródła sprawdziliśmy 15 października 2026 r. Jeżeli operator nie publikuje jakiegoś wymagania, piszemy to wprost i niczego nie zgadujemy.

## 1. Dokumenty RFC

| Dokument | Co z niego bierzemy | Test w narzędziu |
|---|---|---|
| [RFC 6811](https://www.rfc-editor.org/rfc/rfc6811): walidacja pochodzenia prefiksu | trzy stany: valid, invalid, brak ROA | stan RPKI każdego ogłaszanego prefiksu |
| [RFC 9319](https://www.rfc-editor.org/rfc/rfc9319) (BCP 185): maxLength w RPKI, §5 | minimalne ROA; maxLength tylko wtedy, gdy niczego nie poszerza | zalecenie przy szerokim maxLength; propozycje ROA w dwóch wariantach (osobne ROA dla każdego /24 albo maxLength na agregacie) z opisem różnic |
| RFC 9319, §5.1: ROA dla usług ochrony DDoS | operator, który ogłasza prefiks klienta, potrzebuje własnego ROA. ROA musi istnieć **przed** atakiem, bo RPKI rozchodzi się wolniej niż BGP | ROA dla AS operatora (tryb „operator ogłasza ze swojego AS”); ostrzeżenie o czasie propagacji |
| RFC 9319, §6: RTBH (RTDR) | nie poszerzać ROA (maxLength, bardzo szczegółowe prefiksy) pod RTBH | punkt w części „czego nie da się sprawdzić z zewnątrz” |
| [RFC 9582](https://www.rfc-editor.org/rfc/rfc9582): profil ROA | maxLength równy długości prefiksu nie jest zapisywany w ROA | liczenie pokrycia ROA |
| [RFC 6483](https://www.rfc-editor.org/rfc/rfc6483), §4 | ROA z AS0 oznacza, że prefiks nie może być ogłaszany | test ROA z AS0 |
| [RFC 7454](https://www.rfc-editor.org/rfc/rfc7454) (BCP 194), §6.1.3 | prefiksy IPv4 dłuższe niż /24 i IPv6 dłuższe niż /48 są powszechnie filtrowane; IRR jako podstawa filtrów | długość prefiksu; podział na /24 i /48; obiekty route |
| [RFC 2622](https://www.rfc-editor.org/rfc/rfc2622): RPSL, §5 | hierarchiczne nazwy zbiorów (AS64496:AS-NAZWA) | nazwa AS-SET |
| [RFC 7999](https://www.rfc-editor.org/rfc/rfc7999): community BLACKHOLE | RTBH to coś innego niż przekierowanie | uwaga o RTBH |
| [RFC 9224](https://www.rfc-editor.org/rfc/rfc9224): bootstrap RDAP | jak znaleźć serwer RDAP właściwego RIR | pobieranie właściciela zasobu i kontaktu abuse |
| ASPA, IETF SIDROPS ([aspa-profile](https://datatracker.ietf.org/doc/draft-ietf-sidrops-aspa-profile/), [aspa-verification](https://datatracker.ietf.org/doc/draft-ietf-sidrops-aspa-verification/)) | ASPA klienta musi wymieniać każdego operatora nadrzędnego na ścieżce | AS operatora scrubbing center w ASPA |

## 2. RIPE NCC i baza RIPE

| Dokument | Co z niego bierzemy | Test w narzędziu |
|---|---|---|
| [ripe-705](https://www.ripe.net/publications/docs/ripe-705): kontakt abuse w bazie RIPE | abuse-c jest obowiązkowy dla aut-num oraz dla inetnum i inet6num przydzielonych bezpośrednio | kontakt abuse |
| [Dokumentacja bazy RIPE: obiekty set](https://docs.db.ripe.net/Set-Objects/) | nowe as-set muszą mieć nazwę hierarchiczną; stare krótkie nazwy pozostają ważne | nazwa AS-SET (zalecenie, nie błąd) |
| [Dokumentacja bazy RIPE: ochrona obiektów o nazwach hierarchicznych](https://docs.db.ripe.net/Authorisation/Protection-of-Objects-with-Hierarchical-Names/) | utworzenie zbioru hierarchicznego autoryzuje obiekt nadrzędny | uzasadnienie zalecenia |
| [RIPE Labs: obiekty route(6) i aut-num spoza regionu](https://labs.ripe.net/author/denis/out-of-region-route6-and-aut-num-objects-in-the-ripe-database/) | obiekty spoza regionu mają od 4 września 2018 r. źródło RIPE-NONAUTH | RIPE-NONAUTH nie jest traktowane jako autorytatywny IRR |
| [RIPEstat Data API](https://stat.ripe.net/docs/data-api/) | ogłaszane prefiksy, ROA i ASPA, sąsiedzi BGP | źródło danych |
| [REST API bazy RIPE](https://docs.db.ripe.net/RIPE-Database-Structure/REST-API-Data-model/) | aut-num (linie export) | AS-SET wskazany w polityce eksportu |

## 3. Dokumentacja RIR wykorzystana w instrukcjach krok po kroku

| RIR | ROA | IRR (route, as-set) | kontakt abuse | ASPA |
|---|---|---|---|---|
| RIPE NCC | [zarządzanie ROA](https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/) | [dokumentacja bazy RIPE](https://docs.db.ripe.net/) | [abuse-c FAQ](https://www.ripe.net/manage-ips-and-asns/resource-management/faqs-for-abuse-c/) | [ASPA w RPKI Dashboard](https://labs.ripe.net/author/tim_bruijnzeels/aspa-in-the-rpki-dashboard-a-new-layer-of-routing-security/) |
| ARIN | [Hosted RPKI](https://www.arin.net/resources/manage/rpki/options/hosted/) | [ARIN IRR](https://www.arin.net/resources/manage/irr/userguide/) | [rekordy POC](https://www.arin.net/resources/guide/account/records/poc/) | [ASPA](https://www.arin.net/resources/manage/rpki/aspa/) |
| APNIC | [ROA w MyAPNIC](https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/) | [as-set](https://www.apnic.net/manage-ip/using-whois/guide/as-set/) | [abuse-c](https://www.apnic.net/about-apnic/service-updates/apnic-whois-database-abuse-c/) | [ASPA w APNIC](https://blog.apnic.net/2026/07/09/aspa-at-apnic-strengthening-bgp-path-validation/) |
| AFRINIC | [RPKI](https://afrinic.net/support/rpki) | [obiekty route](https://afrinic.net/support/irr/on-myafrinic/creating-route-object), [as-set](https://afrinic.net/support/irr/on-myafrinic/create-as-set-objects) | [kontakt abuse](https://afrinic.net/support/how-to-publish-abuse-contact-information) | nieogłoszone (październik 2026) |
| LACNIC | [IRR (obiekty route powstają z ROA)](https://www.lacnic.net/5921/2/lacnic/internet-routing-registry-irr) | [pomoc IRR](https://lacnic.zendesk.com/hc/es/categories/360002625214-Internet-Routing-Registry) | [LAC-2018-5](https://politicas.lacnic.net/politicas/detail/id/LAC-2018-5) | [ogłoszenie, październik 2026](https://blog.lacnic.net/en/caribnog-lacnic/) |

Właściciela zasobu i kontakt abuse narzędzie pobiera przez RDAP dla każdego RIR. Właściwy serwer wskazuje [bootstrap IANA](https://data.iana.org/rdap/).

## 4. Pozostałe źródła

| Źródło | Co z niego bierzemy |
|---|---|
| [MANRS: operatorzy sieci](https://manrs.org/netops/) | rejestracja w IRR i RPKI, aktualne kontakty (baza RIR, PeeringDB) |
| [IRR Explorer (NLNOG)](https://irrexplorer.nlnog.net/) | obiekty route ze wszystkich IRR razem ze stanem RPKI; rozwijanie AS-SET (źródło danych) |
| [PeeringDB API](https://www.peeringdb.com/apidocs/) | AS-SET, z którego wielu operatorów buduje filtry (źródło danych) |

## 5. Dokumentacja operatorów scrubbing center

Samo narzędzie nie wymienia operatorów z nazwy, tylko pisze o „typowych wymaganiach operatorów scrubbing center”. Poniżej są dokumenty, na których te wymagania się opierają.

| Operator | Opublikowane wymagania | Źródło |
|---|---|---|
| Cloudflare Magic Transit | min. /24; wpisy IRR zgodne z origin; LOA (także od ISP, jeśli to on ogłasza prefiks); GRE lub IPsec z MSS clamping (≤1436 / ≤1360) ustawionym przed przełączeniem; bezpieczne wycofanie: najpierw ogłosić prefiks u siebie | [wymagania](https://developers.cloudflare.com/magic-transit/prerequisites/), [ogłaszanie prefiksów](https://developers.cloudflare.com/magic-transit/how-to/advertise-prefixes/) |
| Cloudflare BYOIP | IPv4 /24, IPv6 /48; prefiks w jednym z pięciu RIR; dokładny obiekt route/route6 z origin ogłaszającego (obiekt wygenerowany z RPKI nie wystarcza); ROA weryfikowane; co najmniej 5 h przygotowania | [start](https://developers.cloudflare.com/byoip/get-started/), [dobre praktyki IRR](https://developers.cloudflare.com/byoip/concepts/irr-entries/best-practices/) |
| Lumen DDoS Mitigation | poza siecią Lumen min. /24 i /48; klient z ROA musi dodać ROA dla AS Lumen, inaczej sieci z ROV odrzucą ogłoszenie; klient ignoruje bardziej szczegółowe prefiksy swojej przestrzeni odsyłane przez Lumen | [opis usługi](https://www.lumen.com/en-us/about/legal/ddos-mitigation-service-guide.html) |
| Link11 | wyłącznie prefiksy /24; obiekt route w autorytatywnej bazie RIR, widoczny dla operatora w ciągu 48 h; wymagany publiczny AS | [FAQ](https://docs.link11.com/product-guides/network-ddos/faq/general-questions) |
| F5 Distributed Cloud Routed DDoS | /24 lub krótszy; autorytatywny IRR (RIPE, ARIN…); wymagany ROA; LOA dla prefiksów, których klient nie posiada | [L3/L4 DDoS](https://docs.cloud.f5.com/docs-v2/ddos-and-transit-services/how-tos/network-firewall/l3l4-ddos-mitigation) |
| Gcore | prefiks od /8 do /24; publiczny AS; obowiązkowe LOA; GRE MTU 1476 / MSS 1436 | [zgłoszenie sieci](https://docs.gcore.com/ddos-protection/onboarding-service/network-submission) |
| OVHcloud BYOIP | IPv4 /24–/19; inetnum dokładnie na zakres (PA, PI, LEGACY); obiekt route z origin OVHcloud albo klienta; zakres nieogłaszany nigdzie indziej | [Bring your own IP](https://docs.ovhcloud.com/en/guides/network/bring-your-own-ip/bring-your-own-ip) |
| NASK anty-DDoS, wariant II | AS z RIPE NCC; maska do /24 (większe bloki chronione jako zestaw /24); możliwość utworzenia obiektu route i zmiany ROA; prepend albo wstrzymanie ogłoszenia /24 do tranzytu | [załącznik do regulaminu](https://www.nask.pl/media/2025/01/ADDoS-Zalacznik-nr-2-_-Zalacznik-nr-1_do_Regulaminu.pdf) |
| Akamai Prolexic Routed | GRE (RFC 2784) z keepalive, MSS 1436 / 1380, wydajność dekapsulacji co najmniej 2× CIR. Wymagań ROA, IRR i LOA nie publikuje | [opisy usług](https://www.akamai.com/site/en/documents/akamai-services-descriptions.pdf) |
| Imperva DDoS Protection for Networks | GRE do co najmniej dwóch centrów danych; w trybie always-on Imperva musi być najlepszą ścieżką (prepend, local-pref albo bardziej szczegółowy prefiks). Wymagań ROA, IRR i LOA nie publikuje | [dokumentacja](https://docs.imperva.com/) |

Pominęliśmy Radware, NETSCOUT Arbor Cloud, Corero, Voxility, Path.net i polskich operatorów poza NASK, bo nie znaleźliśmy ich publicznych wymagań technicznych.

## 6. Od źródeł do testów

| Test | Źródła |
|---|---|
| Każdy /24 (/48) wydzielony z ogłaszanego bloku jest RPKI-valid | RFC 6811, RFC 9319 §5.1, RFC 7454; Link11, NASK, Cloudflare |
| Prefiks nie dłuższy niż /24 (/48) | RFC 7454 §6.1.3; Cloudflare, Lumen, Link11, F5, Gcore, NASK |
| Obiekt route z Twoim AS w bazie RIR (nie RADB, nie RIPE-NONAUTH, nie obiekt wygenerowany z RPKI) | RFC 7454; RIPE Labs (RIPE-NONAUTH); Cloudflare BYOIP, Link11, F5 |
| Obiekt route dla każdego /24, który może być ogłoszony | Cloudflare BYOIP (dokładne dopasowanie), Link11, NASK |
| LOA, gdy przestrzeń należy do innej organizacji albo jest przestrzenią PA od LIR | Cloudflare, F5, Gcore |
| ROA dla AS operatora, gdy to on jest źródłem ogłoszenia | RFC 9319 §5.1; Lumen |
| ASPA zawiera AS operatora | IETF SIDROPS (ASPA) |
| abuse-c | ripe-705, polityki APNIC, AFRINIC i LACNIC; MANRS |
| AS-SET zawiera Twój AS, nazwa hierarchiczna | RFC 2622; dokumentacja bazy RIPE i APNIC; MANRS |
| ROA z AS0, obiekty route z innym origin | RFC 6483; RFC 6811 |
| Szerokie maxLength (zalecenie) | RFC 9319 §5 |

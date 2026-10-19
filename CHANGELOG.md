# Changelog / Lista zmian

## 1.2.0 — 2026-10-19

**EN**
- ASPA checks, after Ondřej Caletka (RIPE NCC), „Autonomous System Provider Authorisation” (DKNOG16, March 2026): providers visible in BGP but missing from your ASPA (to fix), ASPA entries not visible in BGP (info: backup provider or peer?), provider-free ASPA (AS0) despite visible upstreams (blocking), and a ready ASPA proposal built from the upstreams visible in BGP and the scrubbing centre's AS.
- Networks with more than 10 left-hand BGP neighbours (e.g. anycast present at many IXPs) get no automatic proposal and missing entries are shown as information, because most of those neighbours are peers.
- Action-plan step „Complete ASPA”: whom to list (all providers incl. backup, no plain peers, non-transparent IXP route servers) and updating ASPA together with the IRR.
- Manual checklist: ASPA validation on your routers.

**PL**
- Testy ASPA według Ondřeja Caletki (RIPE NCC), „Autonomous System Provider Authorisation” (DKNOG16, marzec 2026): providerzy widoczni w BGP, a brakujący w ASPA (do poprawy), wpisy w ASPA niewidoczne w BGP (informacja: provider zapasowy czy peer?), ASPA bez providerów (AS0) mimo widocznych operatorów nadrzędnych (blokuje) oraz gotowa propozycja ASPA z operatorów widocznych w BGP i AS operatora scrubbing center.
- Sieci z więcej niż 10 sąsiadami „left” w BGP (np. anycast obecny na wielu IXP) nie dostają automatycznej propozycji, a braki są pokazywane jako informacja, bo większość tych sąsiadów to peerzy.
- Krok planu „Uzupełnij ASPA”: kogo wpisać (wszystkich providerów, także zapasowych, bez zwykłych peerów, z nietransparentnymi route serverami IXP) i aktualizacja ASPA razem z IRR.
- Lista kontrolna: walidacja ASPA na routerach.

## 1.1.0 — 2026-10-17

**EN**
- AS-SET hygiene, after Lasse Jarlskov (Telia Company), „Securing your AS-set” (BalticNOG 2025) and „Prelude to a BGP hijack?” (DKNOG15), and Doug Madory and Job Snijders, „The Scourge of Excessive AS-SETs” (2025): expanded size against customers visible in BGP, nesting depth, largest member sets, IXP and peer sets inside a customer set, members not seen in BGP.
- New action-plan step „Check who includes your AS in their AS-SETs” (networks with no BGP relationship, peer/IXP lists, sets without an owner AS), with ASPA and IRR monitoring advice.
- Customer filtering added to the manual checklist.
- Downloadable version: `serwer.py` (Python standard library), `start.bat`, `start.sh`, `Dockerfile` and `docker-compose.yml` with bgpq4. In the local version: prefix counts of your AS-SETs, Junos `prefix-list`, full list as .txt.
- Sources and credits moved into the README; full names of authors.
- Fix: route-sets (RS-…) in PeeringDB are no longer treated as AS-SETs.

**PL**
- Higiena AS-SET według Lassego Jarlskova (Telia Company), „Securing your AS-set” (BalticNOG 2025) i „Prelude to a BGP hijack?” (DKNOG15), oraz Douga Madory'ego i Joba Snijdersa, „The Scourge of Excessive AS-SETs” (2025): rozmiar po rozwinięciu wobec klientów widocznych w BGP, głębokość zagnieżdżeń, największe składowe, zbiory IXP i peerów w zbiorze klientów, członkowie niewidoczni w BGP.
- Nowy krok planu „Sprawdź, kto włącza Twój AS do swoich AS-SET” (sieci bez relacji BGP, listy peerów i IXP, zbiory bez numeru właściciela) z zaleceniem ASPA i monitoringu IRR.
- Filtrowanie klientów na liście rzeczy do sprawdzenia ręcznie.
- Wersja do pobrania: `serwer.py` (biblioteka standardowa Pythona), `start.bat`, `start.sh`, `Dockerfile` i `docker-compose.yml` z bgpq4. W wersji lokalnej: liczba prefiksów w Twoich AS-SET, `prefix-list` dla Junos, pełna lista jako .txt.
- Źródła i autorzy przeniesione do README; pełne imiona i nazwiska autorów.
- Poprawka: route-set (RS-…) z PeeringDB nie jest już traktowany jak AS-SET.

## 1.0.0 — 2026-10-15

**EN** — First release: /24 (/48) split readiness against ROAs, route objects in RIR databases, LOA need, AS-SET, abuse contact, PeeringDB, ASPA; step-by-step instructions for RIPE NCC, ARIN, APNIC, AFRINIC and LACNIC; ready ROA, route object and LOA drafts; 10 languages; light and dark theme.

**PL** — Pierwsze wydanie: gotowość podziału na /24 (/48) wobec ROA, obiekty route w bazach RIR, potrzeba LOA, AS-SET, kontakt abuse, PeeringDB, ASPA; instrukcje krok po kroku dla RIPE NCC, ARIN, APNIC, AFRINIC i LACNIC; gotowe ROA, obiekty route i wzór LOA; 10 języków; motyw jasny i ciemny.

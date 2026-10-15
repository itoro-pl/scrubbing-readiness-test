# Test gotowości prefiksów do scrubbing center

![Wersja 1.0.0](https://img.shields.io/badge/wersja-1.0.0-B72343)
![5 RIR](https://img.shields.io/badge/RIR-RIPE%20%C2%B7%20ARIN%20%C2%B7%20APNIC%20%C2%B7%20AFRINIC%20%C2%B7%20LACNIC-1a56db)
![10 języków](https://img.shields.io/badge/j%C4%99zyki-10-1a56db)
![Bez serwera](https://img.shields.io/badge/serwer-brak-11603b)
![AGPL-3.0](https://img.shields.io/badge/kod-AGPL--3.0-8a5a00)
![CC BY-SA 4.0](https://img.shields.io/badge/tre%C5%9B%C4%87-CC%20BY--SA%204.0-8a5a00)

Wpisz numer AS i sprawdź, czy Twoje prefiksy da się przekierować do scrubbing center w czasie ataku DDoS. Narzędzie sprawdza, czy każdy /24 (/48) wydzielony z Twoich bloków będzie RPKI-valid i czy obiekty route są w bazie RIR. Ocenia też, czy będzie potrzebne LOA, oraz czy w porządku są AS-SET, kontakt abuse, PeeringDB i ASPA. Potem prowadzi przez poprawki krok po kroku, z instrukcją dla Twojego rejestru (RIPE NCC, ARIN, APNIC, AFRINIC albo LACNIC) i z gotowymi ROA, obiektami route oraz wzorem LOA do wklejenia.

Wszystko działa w przeglądarce. Nie ma serwera ani konta, a przeglądarka odpytuje publiczne serwisy bezpośrednio. Narzędzie udostępnia [ITORO](https://itoro.com.pl): chronimy sieci operatorów i centrów danych przed atakami DDoS.

**[English version → README.md](README.md)** ·
**Wersja online: https://itoro.com.pl/narzedzia/scrubbing/?jezyk=pl**

![Strona startowa testu gotowości prefiksów](zrzuty/formularz-pl.png)

---

## Po co

Gdy atak przekracza przepustowość łączy, ruch kieruje się do scrubbing center przez ogłoszenie prefiksów /24 wydzielonych z większych bloków. Jeżeli ROA założono dokładnie na agregat, każdy taki /24 jest RPKI-invalid i sieci walidujące RPKI go odrzucają. Zmiany w RPKI i IRR docierają do filtrów po kilku godzinach, a RFC 9319 §5.1 mówi wprost, że ROA musi istnieć przed atakiem. Ten test wykrywa takie luki zawczasu.

## Co sprawdza

**Na poziomie AS:**
- AS istnieje i ogłasza prefiksy;
- kontakt abuse;
- aut-num i AS-SET w polityce eksportu;
- AS-SET zawiera Twój AS, jest w bazie RIR i ma nazwę hierarchiczną;
- AS-SET w PeeringDB;
- co najmniej dwóch operatorów nadrzędnych;
- ASPA zawiera AS operatora scrubbing center;
- ROA dla AS operatora, gdy to on jest źródłem ogłoszenia;
- nieaktualne obiekty route.

**Na poziomie prefiksu:**
- długość nie większa niż /24 i /48;
- stan RPKI;
- **ile bloków /24 (/48) będzie RPKI-valid po podziale**;
- szerokie maxLength, ROA z AS0, ROA innych AS;
- obiekt route w bazie RIR (nie RADB, nie RIPE-NONAUTH), także dla każdego /24;
- obiekty route z innym origin;
- właściciel przestrzeni inny niż właściciel AS albo przestrzeń PA od LIR (potrzebne LOA);
- mniej szczegółowy prefiks ogłaszany przez inny AS (potrzebne LOA od operatora nadrzędnego).

Podstawę każdego testu (RFC, dokumenty RIPE i RIR, dokumentację operatorów) opisuje [ZRODLA.md](ZRODLA.md).

## Co dostajesz

| | |
|---|---|
| **Werdykt** | niegotowe / gotowe z zastrzeżeniami / gotowe, z licznikami |
| **Plan działań** | kroki w kolejności wykonania, każdy z instrukcją dla Twojego RIR i odnośnikiem do jego dokumentacji |
| **Gotowe obiekty** | ROA (osobno dla każdego /24 według RFC 9319 albo maxLength na agregacie), obiekty route w RPSL, wzór LOA z prefiksami i ich właścicielami |
| **Tabela prefiksów** | stan RPKI, ile /24 (/48) będzie valid po podziale, obiekt route, właściciel |
| **Lista kontrolna** | LOA, tunel i MSS, czas propagacji, ogłoszenie i wycofanie, pętle routingu, test na sucho, RTBH |
| **Eksport** | druk do PDF, JSON |

![Werdykt i liczniki](zrzuty/wynik-pl.png)

![Pierwszy krok planu działań z instrukcją dla RIPE NCC](zrzuty/plan-pl.png)

![Tabela prefiksów](zrzuty/prefiksy-pl.png)

<sub>Zrzuty: AS25152 (K-root, RIPE NCC), 15 października 2026. Narzędzie ma motyw jasny i ciemny:</sub>

![Werdykt w motywie ciemnym](zrzuty/wynik-ciemny-pl.png)

## Języki

Polski, angielski, niemiecki, francuski, hiszpański, portugalski, włoski, niderlandzki, czeski i rumuński. Strona wybiera język przeglądarki i ma przełącznik, a parametr `?jezyk=<kod>` wymusza wybrany język. Polski i angielski są wbudowane (`napisy.js`, `rir.js`); pozostałe języki ładują się z `jezyki/<kod>.js` dopiero wtedy, gdy są potrzebne.

## Uruchomienie

Otwórz `index.html` przez dowolny serwer WWW. Strona otwarta jako `file://` nie wszędzie może odpytywać API. Na przykład:

```bash
python -m http.server 8000
```

Język wybiera się parametrem `?jezyk=pl`, `en`, `de`, `fr`, `es`, `pt`, `it`, `nl`, `cs` albo `ro` (domyślnie język przeglądarki). Wynik od razu: `?as=64496`, opcjonalnie z `&op=<AS operatora>&tryb=operator`.

## Źródła danych

| Dane | Serwis |
|---|---|
| ogłaszane prefiksy, ROA i ASPA, sąsiedzi BGP | RIPEstat Data API |
| obiekty route ze wszystkich IRR, rozwijanie AS-SET | IRR Explorer (NLNOG) |
| właściciel zasobu, kontakt abuse (wszystkie RIR) | RDAP; serwer wskazuje bootstrap IANA |
| polityka eksportu aut-num (region RIPE) | REST API bazy RIPE |
| AS-SET używany w filtrach | PeeringDB API |

Wszystkie te serwisy wysyłają nagłówki CORS. Jeśli serwer wysyła nagłówek Content-Security-Policy, `connect-src` musi dopuszczać domeny wymienione w README.md.

## Kontrola jakości

- `node skrypty/sprawdz-jezyki.js .` sprawdza, czy każde tłumaczenie ma tę samą strukturę co wersja angielska.
- `python skrypty/sprawdz-uklad.py <adres> <AS>` sprawdza układ we wszystkich językach w obu motywach (nachodzenie elementów, przewijanie w bok, błędy JS).
- `python skrypty/zrzuty.py <adres> <AS> zrzuty pl en` robi zrzuty do README (wymaga Playwright).

## Prywatność

Nie ma serwera ITORO. Numer AS trafia z przeglądarki prosto do publicznych serwisów i nic nie jest zapisywane. Wynik można wydrukować do PDF albo zapisać jako JSON.

## Ograniczenia

- W dużych sieciach szczegółowe zapytania obejmują pierwsze 150 prefiksów.
- Wymagań, których operatorzy nie publikują (treść LOA, tunele, community BGP), narzędzie nie testuje. Zamiast tego pokazuje je jako listę kontrolną.
- Portale RIR zmieniają menu, dlatego każda instrukcja odsyła do dokumentacji danego RIR.

## Licencja

Kod źródłowy jest na licencji **AGPL-3.0-or-later** (plik `LICENSE`). Treść merytoryczna (opisy testów, instrukcje dla RIR, teksty interfejsu, dokumentacja) jest na licencji **CC BY-SA 4.0** (plik `LICENSE-TRESC.md`). Dane z serwisów zewnętrznych i znak ITORO opisuje plik `NOTICE`.

---

## O ITORO

Wdrażamy i utrzymujemy systemy ochrony przed atakami DDoS, głównie w sieciach operatorów telekomunikacyjnych i w centrach danych. https://itoro.com.pl

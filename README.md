# Scrubbing centre prefix readiness test

![Version 1.1.0](https://img.shields.io/badge/version-1.1.0-B72343)
![5 RIRs](https://img.shields.io/badge/RIRs-RIPE%20%C2%B7%20ARIN%20%C2%B7%20APNIC%20%C2%B7%20AFRINIC%20%C2%B7%20LACNIC-1a56db)
![10 languages](https://img.shields.io/badge/languages-10-1a56db)
![No backend](https://img.shields.io/badge/backend-none-11603b)
![AGPL-3.0](https://img.shields.io/badge/code-AGPL--3.0-8a5a00)
![CC BY-SA 4.0](https://img.shields.io/badge/content-CC%20BY--SA%204.0-8a5a00)

Enter an AS number and check whether your prefixes can be diverted to a
DDoS scrubbing centre during an attack: whether every /24 (/48) split out of
your blocks will be RPKI-valid, whether route objects live in a RIR database,
whether an LOA will be needed, and whether AS-SET, abuse contact, PeeringDB
and ASPA are in order. The tool then walks you through the fixes step by step,
with instructions for your own registry — RIPE NCC, ARIN, APNIC, AFRINIC or
LACNIC — and ready-to-paste ROA, route object and LOA drafts.

Everything runs in the browser. There is no server and no account; the
browser queries public services directly. Published by
[ITORO](https://itoro.com.pl) — we protect operator and data centre networks
against DDoS attacks.

**[Wersja polska → README.pl.md](README.pl.md)** ·
**Live: https://itoro.com.pl/narzedzia/scrubbing/**

![Start page of the prefix readiness test](zrzuty/formularz-en.png)

---

## Why

During an attack that exceeds link capacity, traffic is diverted to a
scrubbing centre by announcing /24 prefixes carved out of larger blocks.
If the ROA was created exactly on the aggregate, every /24 becomes
RPKI-invalid and is dropped by validating networks. RPKI and IRR changes take
hours to reach filters — RFC 9319 §5.1 says the ROA must exist before the
attack. This test finds such gaps in advance.

## What it checks

**AS level:** AS exists and announces prefixes · abuse contact · aut-num and
the AS-SET in its export policy · AS-SET contains your AS, lives in a RIR
database and has a hierarchical name · AS-SET in PeeringDB · at least two
upstreams · ASPA (includes the scrubbing centre's AS) · ROAs for the
scrubbing centre's AS when it originates · stale route objects.

**AS-SET hygiene** (after Lasse Jarlskov's BalticNOG 2025 and DKNOG15 talks
and Doug Madory & Job Snijders' „The Scourge of Excessive AS-SETs”): expanded
size against customers visible in BGP · nesting depth · largest member sets ·
IXP/peer sets inside a customer set · members not seen in BGP · **who includes
your AS in their AS-SETs** (networks with no BGP relationship are flagged —
the prelude to a hijack described at DKNOG15).

**Prefix level:** length ≤ /24 and ≤ /48 · RPKI state · **how many /24 (/48)
blocks will be RPKI-valid after splitting** · broad maxLength · AS0 ROAs ·
other-AS ROAs · route object in a RIR database (not RADB, not RIPE-NONAUTH) ·
route objects for every /24 · route objects with another origin · resource
holder different from the AS holder, or PA space from a LIR (LOA needed) ·
less specific announced by another AS (upstream LOA needed).

The basis for every test — RFCs, RIPE and RIR documents, scrubbing provider
documentation — is listed in [SOURCES.md](SOURCES.md).

## What you get

| | |
|---|---|
| **Verdict** | not ready / ready with reservations / ready, with counters |
| **Action plan** | steps in the order worth following, each with instructions for your RIR and a link to its documentation |
| **Ready objects** | ROAs (per /24 per RFC 9319, or maxLength on the aggregate), route objects in RPSL, an LOA draft with prefixes and holders |
| **Prefix table** | RPKI state, how many /24 (/48) are valid after splitting, route object, holder |
| **Manual checklist** | LOA, tunnel and MSS, propagation time, announcement and withdrawal, routing loops, dry run, RTBH |
| **Export** | print to PDF, JSON |

![Verdict and counters](zrzuty/wynik-en.png)

![First step of the action plan with RIPE NCC instructions](zrzuty/plan-en.png)

![Prefix table](zrzuty/prefiksy-en.png)

<sub>Screenshots: AS25152 (K-root, RIPE NCC), 15 October 2026. The tool has a light and a dark theme:</sub>

![Verdict in the dark theme](zrzuty/wynik-ciemny-en.png)

## Languages

Polish, English, German, French, Spanish, Portuguese, Italian, Dutch, Czech
and Romanian. The page picks the browser language and offers a switcher;
`?jezyk=<code>` forces one. Polish and English are built in (`napisy.js`,
`rir.js`); the other languages load on demand from `jezyki/<code>.js`.

## Running it yourself

You can use the tool online at **https://itoro.com.pl/narzedzia/scrubbing/**
or download it and run it on your own computer. The downloaded version does
everything the online one does and, with **bgpq4** installed, adds **prefix
lists** generated from your AS-SETs (prefix counts, Junos `prefix-list`,
plain lists to download). Prefix lists exist only in the local version: they
need bgpq4, which talks to IRR servers directly, and a web page cannot do that
from your browser.

### 1. Download

- **ZIP:** [download the current version](https://github.com/itoro-pl/scrubbing-readiness-test/archive/refs/heads/main.zip)
  (the same as **Code → Download ZIP** on the repository page). Numbered
  versions are on the [Releases](https://github.com/itoro-pl/scrubbing-readiness-test/releases)
  page. Unpack it anywhere.
- **git:** `git clone https://github.com/itoro-pl/scrubbing-readiness-test.git`

### 2. Choose how to run it

| Option | You need | Prefix lists (bgpq4) |
|---|---|---|
| **A. Windows** — double-click `start.bat` | [Python 3.8+](https://www.python.org/downloads/) (tick *Add python.exe to PATH* during installation) | no — use option C if you want them |
| **B. Linux / macOS** — run `./start.sh` | Python 3 (usually already installed) + `bgpq4` (Debian/Ubuntu: `sudo apt install bgpq4`, macOS: `brew install bgpq4`) | yes, once bgpq4 is installed |
| **C. Docker** (Windows, Linux, macOS) | [Docker Desktop](https://www.docker.com/products/docker-desktop/) on Windows/macOS, or Docker Engine on Linux | yes, bgpq4 is inside the image |

**Do I need Docker for Windows?** Only if you want prefix lists on Windows.
For everything else `start.bat` and Python are enough. (Alternatively, install
bgpq4 in WSL and run `./start.sh` there.)

### 3. Start

**A — Windows:** double-click `start.bat`. The browser opens at
`http://127.0.0.1:8765/`. Close the window (or press Ctrl+C) to stop.

**B — Linux / macOS:**

```bash
./start.sh
```

**C — Docker**, in the unpacked folder:

```bash
docker compose up --build
```

then open `http://127.0.0.1:8765/`. Without Compose:

```bash
docker build -t itoro-scrubbing .
docker run --rm -p 127.0.0.1:8765:8765 itoro-scrubbing
```

Options of the local server: `start.bat --port 9000`, `./start.sh --port 9000`,
`--bez-przegladarki` (do not open the browser). The server listens only on
`127.0.0.1`; the Docker example publishes the port on `127.0.0.1` too.

The local server (`serwer.py`, Python standard library only) serves the files
and two endpoints used only by the local page: `/api/status` and
`/api/prefiksy?zbior=<AS-SET>&ip=4|6[&zrodlo=<IRR>]`, which run `bgpq4 -j`.
Input is validated and bgpq4 is called without a shell.

Language: `?jezyk=pl`, `en`, `de`, `fr`, `es`, `pt`, `it`, `nl`, `cs`, `ro` (default: browser language). Direct
result: `?as=64496`, optionally `&op=<scrubbing AS>&tryb=operator`.

## Data sources

| Data | Service |
|---|---|
| announced prefixes, ROAs and ASPA, BGP neighbours | RIPEstat Data API |
| route objects in all IRRs, AS-SET expansion | IRR Explorer (NLNOG) |
| resource holder, abuse contact (all RIRs) | RDAP, server chosen by the IANA bootstrap |
| aut-num export policy (RIPE region) | RIPE Database REST API |
| AS-SET used for filters | PeeringDB API |

All of them send CORS headers. If you host the tool behind a
Content-Security-Policy, allow in `connect-src`:
`https://stat.ripe.net https://rest.db.ripe.net https://irrexplorer.nlnog.net https://www.peeringdb.com https://data.iana.org https://rdap.db.ripe.net https://rdap.arin.net https://rdap.apnic.net https://rdap.afrinic.net https://rdap.lacnic.net https://rdap.registro.br https://rdap.org`.

## Repository layout

| Path | Contents |
|---|---|
| `index.html` | the page |
| `app.js` | tests, RDAP lookups and result view; no external libraries |
| `napisy.js` | all interface texts, PL and EN |
| `rir.js` | step-by-step instructions for RIPE NCC, ARIN, APNIC, AFRINIC, LACNIC (PL and EN) |
| `jezyki/` | DE, FR, ES, PT, IT, NL, CS, RO — interface and RIR instructions |
| `zrzuty/` | screenshots used in this README |
| `serwer.py`, `start.bat`, `start.sh` | local server (Python stdlib) with the optional bgpq4 endpoint; one-click start |
| `Dockerfile`, `docker-compose.yml` | image with Python and bgpq4 |
| `skrypty/` | QA: `node skrypty/sprawdz-jezyki.js .` (translation structure), `python skrypty/sprawdz-uklad.py <url> <AS>` (layout in all languages), `python skrypty/zrzuty.py <url> <AS> zrzuty pl en` (screenshots; Playwright) |
| `style.css` | light and dark theme, WCAG 2.1 AA contrast |
| `SOURCES.md`, `ZRODLA.md` | sources of the tests (EN, PL) |

## Privacy

There is no ITORO server. The AS number goes from your browser straight to
the public services above. The result can be printed to
PDF or saved as JSON.

## Limitations

- Large networks: prefix-level lookups cover the first 150 prefixes.
- Requirements not published by providers (LOA wording, tunnels, BGP
  communities) are listed as a manual checklist, not tested.
- RIR portals change their menus; every instruction links to the RIR's own
  documentation.

## Licence

Code: **AGPL-3.0-or-later** (file `LICENSE`).
Substantive content — test descriptions, RIR instructions, interface texts,
documentation: **CC BY-SA 4.0** (file `LICENSE-TRESC.md`).
Data from external services and the ITORO trademark — see `NOTICE`.

---

## About ITORO

We deploy and operate DDoS protection systems, mainly in telecommunications
networks and data centres. https://itoro.com.pl

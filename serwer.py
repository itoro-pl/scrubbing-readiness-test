#!/usr/bin/env python3
"""ITORO — Test gotowości prefiksów do scrubbing center: lokalny serwer.

Serwuje pliki narzędzia i — jeżeli w systemie jest bgpq4 — udostępnia
dwa punkty API, z których korzysta strona otwarta lokalnie:

    GET /api/status                      → {"bgpq4": true, "wersja": "..."}
    GET /api/prefiksy?zbior=AS-X&ip=4    → {"zbior": "AS-X", "ip": 4, "prefiksy": [...]}

Wersja publiczna na itoro.com.pl tych punktów nie ma — listy prefiksów
działają tylko lokalnie, na Twoim komputerze, bez obciążania czyjegokolwiek
serwera. Tylko biblioteka standardowa Pythona (3.8+).

Użycie:
    python serwer.py                 # http://127.0.0.1:8765/
    python serwer.py --port 9000
    python serwer.py --host 0.0.0.0  # np. w kontenerze Docker
"""
import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import webbrowser
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import parse_qs, urlparse

KATALOG = os.path.dirname(os.path.abspath(__file__))
BGPQ4 = shutil.which('bgpq4')
# Nazwa AS-SET albo numer AS; nic, co mogłoby zostać potraktowane jako opcja bgpq4.
NAZWA = re.compile(r'^(AS\d{1,10}|(?:AS\d{1,10}:)*AS-[A-Z0-9_\-:.]{1,200})$', re.I)
ZRODLA = {'RIPE', 'ARIN', 'APNIC', 'AFRINIC', 'LACNIC', 'RADB', 'ALTDB', 'NTTCOM', 'LEVEL3', 'JPIRR', 'IDNIC', 'BBOI', 'TC', 'RIPE-NONAUTH'}
LIMIT_PREFIKSOW = 2_000_000
CZAS = 120


def wersja_bgpq4():
    if not BGPQ4:
        return None
    try:
        w = subprocess.run([BGPQ4, '-v'], capture_output=True, text=True, timeout=10)
        linie = (w.stdout + w.stderr).splitlines()
        return next((l.strip() for l in linie if re.search(r'\d+\.\d+', l)), 'bgpq4')
    except Exception:
        return 'bgpq4'


class Obsluga(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        sys.stderr.write('[%s] %s\n' % (self.log_date_time_string(), fmt % args))

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def _json(self, kod, dane):
        tresc = json.dumps(dane, ensure_ascii=False).encode('utf-8')
        self.send_response(kod)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(tresc)))
        self.end_headers()
        self.wfile.write(tresc)

    def do_GET(self):
        u = urlparse(self.path)
        if u.path.endswith('/api/status'):
            return self._json(200, {'bgpq4': bool(BGPQ4), 'wersja': wersja_bgpq4()})
        if u.path.endswith('/api/prefiksy'):
            return self._prefiksy(parse_qs(u.query))
        return super().do_GET()

    def _prefiksy(self, q):
        if not BGPQ4:
            return self._json(501, {'blad': 'bgpq4 nie jest zainstalowany'})
        zbior = (q.get('zbior') or [''])[0].strip()
        ip = (q.get('ip') or ['4'])[0]
        zrodlo = (q.get('zrodlo') or [''])[0].strip().upper()
        if not NAZWA.match(zbior) or ip not in ('4', '6') or (zrodlo and zrodlo not in ZRODLA):
            return self._json(400, {'blad': 'niepoprawna nazwa AS-SET, źródło albo wersja IP'})
        # -j: wynik w JSON, -l: nazwa listy, -S: źródło IRR; argumenty jako lista — bez powłoki.
        polecenie = [BGPQ4, '-j', '-l', 'prefiksy', '-' + ip] + (['-S', zrodlo] if zrodlo else []) + [zbior]
        try:
            w = subprocess.run(polecenie, capture_output=True, text=True, timeout=CZAS)
        except subprocess.TimeoutExpired:
            return self._json(504, {'blad': f'bgpq4 nie skończył w {CZAS} s'})
        if w.returncode != 0:
            return self._json(502, {'blad': (w.stderr or 'bgpq4 zwrócił błąd').strip()[:500]})
        try:
            dane = json.loads(w.stdout or '{}')
        except json.JSONDecodeError:
            return self._json(502, {'blad': 'nieczytelny wynik bgpq4'})
        prefiksy = [p.get('prefix') for p in dane.get('prefiksy', []) if p.get('prefix')][:LIMIT_PREFIKSOW]
        return self._json(200, {'zbior': zbior, 'ip': int(ip), 'prefiksy': prefiksy})


def main():
    a = argparse.ArgumentParser(description='Lokalny serwer testu gotowości prefiksów (ITORO).')
    a.add_argument('--host', default='127.0.0.1')
    a.add_argument('--port', type=int, default=8765)
    a.add_argument('--bez-przegladarki', action='store_true', help='nie otwieraj przeglądarki')
    arg = a.parse_args()
    serwer = ThreadingHTTPServer((arg.host, arg.port), partial(Obsluga, directory=KATALOG))
    adres = f'http://127.0.0.1:{arg.port}/'
    print(f'Test gotowości prefiksów — {adres}')
    print('bgpq4:', wersja_bgpq4() or 'brak (listy prefiksów niedostępne; reszta działa normalnie)')
    print('Zatrzymanie: Ctrl+C')
    if not arg.bez_przegladarki and arg.host in ('127.0.0.1', 'localhost'):
        try:
            webbrowser.open(adres)
        except Exception:
            pass
    try:
        serwer.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == '__main__':
    main()

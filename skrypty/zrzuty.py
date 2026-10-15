"""Zrzuty ekranu narzędzia do README i wpisu na blog (Playwright, Chromium).

Użycie:
    python skrypty/zrzuty.py <adres-bazowy> <AS> <katalog-wyjściowy> [języki...]
np.:
    python skrypty/zrzuty.py http://127.0.0.1:8765/scrubbing-readiness-test/ 25152 scrubbing-readiness-test/zrzuty pl en

Robi dla każdego języka:
    formularz-<j>.png  — strona startowa (1440×900)
    wynik-<j>.png      — werdykt i liczniki
    plan-<j>.png       — początek planu działań z instrukcją RIR
    prefiksy-<j>.png   — tabela prefiksów
    wynik-ciemny-<j>.png — werdykt w motywie ciemnym
"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

baza, asn, wyj = sys.argv[1], sys.argv[2], Path(sys.argv[3])
jezyki = sys.argv[4:] or ['pl', 'en']
wyj.mkdir(parents=True, exist_ok=True)


def czekaj_na_wynik(strona):
    strona.wait_for_selector('#wynik:not([hidden]) .werdykt', timeout=120_000)
    strona.wait_for_timeout(800)


with sync_playwright() as p:
    przegladarka = p.chromium.launch()
    for j in jezyki:
        for motyw in ('light', 'dark'):
            kontekst = przegladarka.new_context(viewport={'width': 1440, 'height': 900}, device_scale_factor=1,
                                                color_scheme=motyw, locale=j)
            s = kontekst.new_page()
            if motyw == 'light':
                s.goto(f'{baza}?jezyk={j}', wait_until='networkidle')
                s.wait_for_timeout(500)
                s.screenshot(path=str(wyj / f'formularz-{j}.png'))
            s.goto(f'{baza}?jezyk={j}&as={asn}', wait_until='domcontentloaded')
            czekaj_na_wynik(s)
            if motyw == 'light':
                s.locator('.wynik-karta').screenshot(path=str(wyj / f'wynik-{j}.png'))
                plan = s.locator('.plan > li').first
                # otwarta instrukcja RIR jest częścią pierwszego kroku
                plan.screenshot(path=str(wyj / f'plan-{j}.png'))
                tab = s.locator('.tabela-owijka')
                if tab.count():
                    tab.screenshot(path=str(wyj / f'prefiksy-{j}.png'))
            else:
                s.locator('.wynik-karta').screenshot(path=str(wyj / f'wynik-ciemny-{j}.png'))
            kontekst.close()
    przegladarka.close()
print('ok', sorted(x.name for x in wyj.iterdir()))

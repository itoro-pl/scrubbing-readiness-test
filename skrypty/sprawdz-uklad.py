"""Układ we wszystkich językach: nachodzenie elementów, przewijanie w bok, błędy JS.

python skrypty/sprawdz-uklad.py http://127.0.0.1:8765/scrubbing-readiness-test/ 25152
"""
import sys
from playwright.sync_api import sync_playwright

baza, asn = sys.argv[1], sys.argv[2]
JEZYKI = ['pl', 'en', 'de', 'fr', 'es', 'pt', 'it', 'nl', 'cs', 'ro']
JS = r"""() => {
  const wyn = [];
  const els = [...document.querySelectorAll('header *, .hero *, .pas *, .wynik *')].filter(e => {
    const r = e.getBoundingClientRect(); const cs = getComputedStyle(e);
    return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden';
  });
  const grupy = new Map();
  els.forEach(e => { const p = e.parentElement; if (!grupy.has(p)) grupy.set(p, []); grupy.get(p).push(e); });
  for (const [, dzieci] of grupy) {
    const b = dzieci.filter(k => getComputedStyle(k).display !== 'inline' && getComputedStyle(k).position !== 'absolute');
    for (let i = 0; i < b.length; i++) for (let j = i + 1; j < b.length; j++) {
      const x = b[i].getBoundingClientRect(), y = b[j].getBoundingClientRect();
      const ox = Math.min(x.right, y.right) - Math.max(x.left, y.left), oy = Math.min(x.bottom, y.bottom) - Math.max(x.top, y.top);
      if (ox > 2 && oy > 2) wyn.push(`${b[i].tagName}.${b[i].className} / ${b[j].tagName}.${b[j].className}`);
    }
  }
  const wychodzi = els.filter(e => { const cs = getComputedStyle(e);
    return e.scrollWidth > e.clientWidth + 2 && cs.overflowX === 'visible' && e.clientWidth > 0 && !['PRE','TABLE','TBODY','TR'].includes(e.tagName) && !e.closest('.tabela-owijka, .kod'); })
    .map(e => `${e.tagName}.${e.className} ${e.scrollWidth}>${e.clientWidth}`);
  return { bok: document.documentElement.scrollWidth - innerWidth, nachodzi: wyn.slice(0, 5), wychodzi: wychodzi.slice(0, 5), lang: document.documentElement.lang, h1: document.querySelector('h1').textContent.slice(0, 40) };
}"""
problemy = 0
with sync_playwright() as p:
    b = p.chromium.launch()
    for j in JEZYKI:
        for szer, motyw in ((375, 'dark'), (1440, 'light')):
            k = b.new_context(viewport={'width': szer, 'height': 900}, color_scheme=motyw)
            s = k.new_page()
            bledy = []
            s.on('pageerror', lambda e: bledy.append(str(e)))
            s.goto(f'{baza}?jezyk={j}&as={asn}', wait_until='domcontentloaded')
            s.wait_for_selector('#wynik:not([hidden]) .werdykt', timeout=120_000)
            s.wait_for_timeout(500)
            r = s.evaluate(JS)
            zle = r['bok'] > 0 or r['nachodzi'] or r['wychodzi'] or bledy or r['lang'] != j
            problemy += bool(zle)
            print(f"{j} {szer} {motyw}: {'PROBLEM' if zle else 'ok'} {r['h1']!r}" + (f" {r} {bledy}" if zle else ''))
            k.close()
    b.close()
print('problemów:', problemy)

// Sprawdza, czy każdy plik jezyki/<kod>.js ma tę samą strukturę co wersja angielska.
// Użycie: node skrypty/sprawdz-jezyki.js scrubbing-readiness-test
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = process.argv[2];
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ['napisy.js', 'rir.js']) vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx);
const kody = fs.readdirSync(path.join(dir, 'jezyki')).filter(f => f.endsWith('.js')).map(f => f.slice(0, -3));
for (const k of kody) vm.runInContext(fs.readFileSync(path.join(dir, 'jezyki', k + '.js'), 'utf8'), ctx);
const W = ctx.window;
let bledy = 0;
function porownaj(a, b, sciezka) {
  if (typeof a !== typeof b) { console.log(`  ${sciezka}: typ ${typeof b} zamiast ${typeof a}`); bledy++; return; }
  if (typeof a === 'function') {
    if (a.length !== b.length) { console.log(`  ${sciezka}: ${b.length} parametrów zamiast ${a.length}`); bledy++; }
    const args = Array.from({ length: a.length }, (_, i) => i + 2);
    const w = b(...args);
    if (typeof w !== 'string' || /undefined/.test(w)) { console.log(`  ${sciezka}: zwraca ${w}`); bledy++; }
    return;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) { console.log(`  ${sciezka}: tablica ${b && b.length} zamiast ${a.length}`); bledy++; return; }
    a.forEach((x, i) => porownaj(x, b[i], `${sciezka}[${i}]`));
    return;
  }
  if (a && typeof a === 'object') {
    for (const k of Object.keys(a)) { if (!(k in b)) { console.log(`  ${sciezka}.${k}: brak`); bledy++; } else porownaj(a[k], b[k], `${sciezka}.${k}`); }
    for (const k of Object.keys(b)) if (!(k in a)) { console.log(`  ${sciezka}.${k}: nadmiarowy`); bledy++; }
    return;
  }
  if (typeof b === 'string' && !b.trim()) { console.log(`  ${sciezka}: pusty`); bledy++; }
}
for (const k of kody) {
  const przed = bledy;
  console.log(k);
  if (!W.NAPISY[k] || !W.RIR[k]) { console.log('  brak NAPISY albo RIR'); bledy++; continue; }
  porownaj(W.NAPISY.en, W.NAPISY[k], 'NAPISY');
  porownaj(W.RIR.en, W.RIR[k], 'RIR');
  // pola z HTML: te same znaczniki
  const tagi = s => (s.match(/<\/?[a-z]+>/g) || []).join('');
  if (tagi(W.NAPISY.en.heroH) !== tagi(W.NAPISY[k].heroH)) { console.log('  heroH: inne znaczniki HTML'); bledy++; }
  W.NAPISY.en.itoroPunkty.forEach((s, i) => { if (tagi(s) !== tagi(W.NAPISY[k].itoroPunkty[i])) { console.log(`  itoroPunkty[${i}]: inne znaczniki`); bledy++; } });
  console.log(bledy === przed ? '  OK' : `  błędów: ${bledy - przed}`);
}
process.exit(bledy ? 1 : 0);

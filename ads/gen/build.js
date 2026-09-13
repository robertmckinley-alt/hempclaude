// Generates one HTML page per ad variant from templates/ + data.js.
// Output: build/<line>-<concept>-v<NN>.html   (flat, so ../img and ../fonts resolve)
const fs = require('fs');
const path = require('path');
const { concepts } = require('./data.js');

const T = {};
for (const f of fs.readdirSync(path.join(__dirname, 'templates'))) {
  T[path.basename(f, '.html')] = fs.readFileSync(path.join(__dirname, 'templates', f), 'utf8');
}

const out = path.join(__dirname, 'build');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);

let n = 0;
const manifest = [];
for (const c of concepts) {
  if (c.variants.length !== 10) throw new Error(`${c.line}/${c.id}: expected 10 variants, got ${c.variants.length}`);
  c.variants.forEach((v, i) => {
    const vars = { ...c.defaults, ...v };
    let html = T[c.template];
    if (!html) throw new Error(`unknown template ${c.template}`);
    html = html.replace(/\{\{(\w+)\}\}/g, (_, k) => (vars[k] ?? ''));
    const name = `${c.line}-${c.id}-v${String(i + 1).padStart(2, '0')}`;
    fs.writeFileSync(path.join(out, name + '.html'), html);
    manifest.push({ name, line: c.line, concept: c.id, v: i + 1, template: c.template, h1: (v.H1 || vars.BAND || vars.L1 || vars.NUM || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() });
    n++;
  });
}
fs.writeFileSync(path.join(__dirname, 'manifest.json'), JSON.stringify(manifest, null, 1));
console.log(`built ${n} pages across ${concepts.length} concepts -> ${out}`);

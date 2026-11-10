const fs = require('fs'), path = require('path'), crypto = require('crypto');
const FULL_HASH_RE = /^CombatMaster_Data\/StreamingAssets\/Bundles\/(src\/weapons\/|src\/first_person$|ui\/)/i;
const SKIP_FILE_RE = /(\.log|\.tmp|\.dmp|\.bak|desktop\.ini|thumbs\.db)$/i;
const fileHash = f => crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
function quickHash(f, st) {
  const h = crypto.createHash('sha256').update(String(st.size)); const fd = fs.openSync(f, 'r');
  try { const n = Math.min(st.size, 1 << 20), b = Buffer.alloc(n); fs.readSync(fd, b, 0, n, 0); h.update(b);
    if (st.size > n) { const m = Math.min(st.size - n, 1 << 20), e = Buffer.alloc(m); fs.readSync(fd, e, 0, m, st.size - m); h.update(e); } } finally { fs.closeSync(fd); }
  return h.digest('hex');
}
const root = process.argv[2], out = [];
const walk = (d, rel) => { let es = []; try { es = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
  for (const e of es) { if (out.length >= 3000) return; const r = rel ? rel + '/' + e.name : e.name, f = path.join(d, e.name);
    if (e.isDirectory()) { if (!rel && e.name !== 'CombatMaster_Data') continue; walk(f, r); }
    else if (e.isFile() && !SKIP_FILE_RE.test(e.name) && (rel || /^(GameAssembly\.(dll|so)|CombatMaster(\.exe|\.x86_64)?|UnityPlayer\.(dll|so))$/i.test(e.name))) out.push([r, f]); } };
walk(root, '');
const list = [];
for (const [r, f] of out) { const st = fs.statSync(f); const h = FULL_HASH_RE.test(r) ? fileHash(f) : quickHash(f, st); list.push([r, st.size, (FULL_HASH_RE.test(r) ? 'f:' : 'q:') + h.slice(0, 32)]); }
list.sort((a, b) => a[0] < b[0] ? -1 : 1);
console.log(crypto.createHash('sha256').update(list.map(x => x.join('|')).join('\n')).digest('hex'), list.length);

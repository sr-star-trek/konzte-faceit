const os = require('os'), fs = require('fs'), crypto = require('crypto');
let mid = '';
for (const f of ['/etc/machine-id', '/var/lib/dbus/machine-id']) if (fs.existsSync(f)) { mid = fs.readFileSync(f, 'utf8').trim(); break; }
const raw = ['konzte-hw', process.platform, mid, os.cpus()[0]?.model || '', Math.round(os.totalmem() / 2 ** 30)].join('|');
console.log(JSON.stringify({ hwid: crypto.createHash('sha256').update(raw).digest('hex'), cpu: os.cpus()[0]?.model, gb: Math.round(os.totalmem() / 2 ** 30) }));

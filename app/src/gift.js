(() => {
  const L = {
    en: { t: 'You got a gift!', from: 'from {n}', ok: 'Awesome!', tier: '{t} · {d} days', kf: '{n} KF', pass: 'Season pass', item: 'New item: {n}' },
    uk: { t: 'Тобі подарунок!', from: 'від {n}', ok: 'Круто!', tier: '{t} · {d} днів', kf: '{n} KF', pass: 'Сезонний пропуск', item: 'Новий предмет: {n}' },
    ru: { t: 'Тебе подарок!', from: 'от {n}', ok: 'Круто!', tier: '{t} · {d} дней', kf: '{n} KF', pass: 'Сезонный пропуск', item: 'Новый предмет: {n}' },
  };
  const tr = (k, v = {}) => (L[S.cfg?.lang]?.[k] || L[typeof LANG !== 'undefined' ? LANG : 'en']?.[k] || (typeof kzTm === 'function' ? kzTm(L.en[k]) : L.en[k])).replace(/\{(\w+)\}/g, (_, x) => v[x] ?? '');
  const e = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const what = w => w.type === 'tier' ? tr('tier', { t: w.tier === 'plus' ? 'Premium+' : 'Premium', d: w.days }) : w.type === 'kf' ? tr('kf', { n: w.coins }) : w.type === 'pass' ? tr('pass') : tr('item', { n: String(w.id || '').replace(/^(s1_|a2_kz_|a2_|s_)/, '') });
  const queue = [], seen = new Set();
  function next() {
    if (document.querySelector('.gf-ov') || !queue.length) return;
    const g = queue.shift();
    const ov = document.createElement('div');
    ov.className = 'gf-ov';
    ov.innerHTML = `<div class="gf-rays"></div><div class="gf-box">
      <div class="gf-ico"><svg viewBox="0 0 24 24"><path d="M20 7h-2.2A3 3 0 0 0 12 3.8 3 3 0 0 0 6.2 7H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM15 5a1 1 0 1 1 0 2h-2a2 2 0 0 1 2-2zM9 5a2 2 0 0 1 2 2H9a1 1 0 1 1 0-2zm2 15H6v-8h5zm0-10H5V9h6zm7 10h-5v-8h5zm1-10h-6V9h6z"/></svg></div>
      <div class="gf-t">${e(tr('t'))}</div>
      <div class="gf-w">${e(what(g.what || {}))}</div>
      ${g.fromP ? `<div class="gf-from"><img src="${e(g.fromP.avatar || '')}" alt=""><span>${e(tr('from', { n: g.fromP.nick }))}</span></div>` : ''}
      <button class="btn gf-ok">${e(tr('ok'))}</button></div>`;
    document.body.appendChild(ov);
    try { window.KA?.play('victory', { force: true }); } catch {}
    ov.querySelector('.gf-ok').onclick = () => {
      api('/api/gifts/ack', { id: g.id }).catch(() => {});
      ov.classList.add('out'); setTimeout(() => { ov.remove(); next(); }, 350);
    };
  }
  function add(g) { if (!g || seen.has(g.id)) return; seen.add(g.id); queue.push(g); next(); }
  window.KZGift = { add };
  const WS = window.WebSocket;
  window.WebSocket = function (...a) {
    const ws = new WS(...a);
    ws.addEventListener('message', ev => { try { const m = JSON.parse(ev.data); if (m.t === 'gift') add(m.gift); else if (m.t !== 'state') dispatchEvent(new CustomEvent('kz:ws', { detail: m })); } catch {} });
    ws.addEventListener('open', () => { api('/api/gifts').then(l => l.forEach(add)).catch(() => {}); });
    return ws;
  };
  window.WebSocket.prototype = WS.prototype;
  Object.assign(window.WebSocket, { CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 });
})();

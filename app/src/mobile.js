(() => {
  const mq = matchMedia('(max-width: 760px)');
  const L = {
    en: { play: 'Play', leaderboard: 'Ranking', profile: 'Profile', shop: 'Store', menu: 'Menu' },
    uk: { play: 'Грати', leaderboard: 'Рейтинг', profile: 'Профіль', shop: 'Магазин', menu: 'Меню' },
    ru: { play: 'Играть', leaderboard: 'Рейтинг', profile: 'Профиль', shop: 'Магазин', menu: 'Меню' },
  };
  const tm = k => (L[typeof LANG !== 'undefined' ? LANG : 'en']?.[k] ?? (typeof kzTm === 'function' ? kzTm(L.en[k]) : L.en[k]));
  const IC = {
    play: '<path d="M7 4.5v15l12-7.5z"/>',
    leaderboard: '<path d="M4 20V11h4v9M10 20V5h4v15M16 20v-6h4v6"/>',
    profile: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.5-6.5 8-6.5s7 2 8 6.5"/>',
    shop: '<path d="M4 8h16l-1.5 12h-13z"/><path d="M8.5 8a3.5 3.5 0 0 1 7 0"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  };
  const TABS = ['play', 'leaderboard', 'profile', 'shop', 'menu'];
  let bar = null, back = null;

  function build() {
    if (bar || !document.body) return;
    bar = document.createElement('nav'); bar.className = 'mtab';
    back = document.createElement('div'); back.className = 'mback';
    document.body.append(back, bar);
    back.onclick = () => menu(false);
    draw();
    document.getElementById('nav')?.addEventListener('click', e => { if (e.target.closest('[data-go]')) menu(false); });
  }
  function draw() {
    if (!bar) return;
    const cnt = Number(document.querySelector('#nav .n2-cnt:not([hidden])')?.textContent || 0);
    bar.innerHTML = TABS.map(k => `<button data-mt="${k}" class="${typeof S !== 'undefined' && S.page === k ? 'on' : ''}"><svg viewBox="0 0 24 24">${IC[k]}</svg>${tm(k)}${k === 'menu' && cnt ? `<i>${cnt}</i>` : ''}</button>`).join('');
    bar.querySelectorAll('[data-mt]').forEach(b => b.onclick = () => { const k = b.dataset.mt; if (k === 'menu') return menu(!document.body.classList.contains('m-menu')); menu(false); go(k); });
  }
  const menu = on => document.body.classList.toggle('m-menu', !!on);

  const px = v => parseFloat(v) || 0;
  function fit() {
    if (!mq.matches) return;
    const root = document.getElementById('view'), modal = document.getElementById('modal');
    for (const r of [root, modal]) {
      if (!r) continue;
      for (const el of r.querySelectorAll('*')) {
        const cs = getComputedStyle(el);
        const w = el.clientWidth;
        if (!w) continue;
        if (cs.display === 'grid' || cs.display === 'inline-grid') {
          const tracks = cs.gridTemplateColumns.split(' ').filter(Boolean);
          if (tracks.length < 1) continue;
          const sum = tracks.reduce((a, t) => a + px(t), 0), gap = px(cs.columnGap) * (tracks.length - 1);
          const narrow = tracks.length > 1 && w / tracks.length < 95;
          if (sum + gap > w + 3 || narrow) {
            const k = Math.max(1, Math.min(tracks.length, Math.floor((w + px(cs.columnGap)) / 165)));
            el.style.gridTemplateColumns = `repeat(${k}, minmax(0, 1fr))`;
            for (const c of el.children) { const gc = getComputedStyle(c).gridColumnEnd; if (/span\s+\d+/.test(gc) || /^-1$/.test(gc)) c.style.gridColumn = '1 / -1'; }
          }
        } else if ((cs.display === 'flex' || cs.display === 'inline-flex') && cs.flexDirection.startsWith('row') && cs.flexWrap === 'nowrap'
          && el.scrollWidth > w + 4 && !/auto|scroll/.test(cs.overflowX) && !el.closest('table, .mtab, #nav')) {
          el.style.flexWrap = 'wrap';
        }
      }
    }
  }
  let t = null;
  const soon = () => { clearTimeout(t); t = setTimeout(() => { fit(); draw(); }, 90); };

  function start() {
    build();
    const v = document.getElementById('view'), m = document.getElementById('modal');
    const mo = new MutationObserver(soon);
    if (v) mo.observe(v, { childList: true, subtree: true });
    if (m) mo.observe(m, { childList: true, subtree: true });
    addEventListener('resize', soon);
    if (typeof go === 'function') { const _go = go; go = function () { const r = _go.apply(this, arguments); menu(false); soon(); return r; }; }
    soon();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

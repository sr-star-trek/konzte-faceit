(() => {
  const safe = fn => function (...a) { try { return fn.apply(this, a); } catch (e) { console.warn('[nav2]', e); } };
  const nav = document.getElementById('nav');
  if (!nav) return;
  const ICN = {
    friends: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.8 3.6-5.6 7-5.6s6.2 1.8 7 5.6"/><path d="M19 4v5M16.5 6.5h5"/>',
    bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    collapse: '<path d="M15 6l-6 6 6 6"/><path d="M20 4v16"/>',
    news: '<path d="M4 5h13v14H6a2 2 0 0 1-2-2z"/><path d="M17 9h3v8a2 2 0 0 1-2 2"/><path d="M7 9h7M7 12.5h7M7 16h4"/>',
    bolt: '<path d="M13 3L5 13.5h6L10 21l8-10.5h-6z"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
    item: '<path d="M4 8l8-4 8 4v9l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v9"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    steps: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M3.5 6l1.5 1.5L7.5 5M3.5 12l1.5 1.5L7.5 11"/><circle cx="5" cy="18" r="1.6"/>',
    matches: '<path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  };
  const sv = (k, html) => `<svg viewBox="0 0 24 24">${html || ICN[k]}</svg>`;
  const iconOf = k => { const b = nav.querySelector(`[data-go="${k}"] svg`); return b ? b.outerHTML : sv('item'); };

  const GROUPS = [
    ['n2_gGame', ['play', 'lfg']],
    ['n2_gCommunity', ['friends', 'clans', 'leaderboard']],
    ['n2_gProgress', ['onboarding', 'profile', 'pass']],
    ['n2_gShop', ['shop', 'inventory', 'premium', 'referrals']],
  ];
  const LABEL = { referrals: 'n2_refLabel', pass: 'lcPass', onboarding: 'n2_onb' };
  const label = k => t(LABEL[k] || k);
  const btn = k => nav.querySelector(`.nav-btn[data-go="${k}"]`);

  if (!btn('friends')) {
    const b = document.createElement('button');
    b.className = 'nav-btn'; b.dataset.go = 'friends';
    b.innerHTML = `${sv('friends')}<span></span>`;
    b.onclick = () => go('friends');
    nav.appendChild(b);
  }
  if (!btn('onboarding')) {
    const b = document.createElement('button');
    b.className = 'nav-btn'; b.dataset.go = 'onboarding'; b.hidden = true;
    b.innerHTML = `${sv('steps')}<span></span>`;
    b.onclick = () => go('onboarding');
    nav.appendChild(b);
  }
  const scroll = document.createElement('div'); scroll.className = 'n2-scroll';
  const foot = document.createElement('div'); foot.className = 'n2-foot';
  for (const [g, keys] of GROUPS) {
    const h = document.createElement('div'); h.className = 'n2-grp'; h.dataset.g = g; scroll.appendChild(h);
    for (const k of keys) { const b = btn(k); if (b) scroll.appendChild(b); }
  }
  const staffH = document.createElement('div'); staffH.className = 'n2-grp n2-staffg'; staffH.dataset.g = 'n2_gStaff';
  scroll.appendChild(staffH);
  if (btn('staff')) scroll.appendChild(btn('staff'));
  const hidden = document.createElement('div'); hidden.className = 'n2-hidden'; hidden.hidden = true;
  if (btn('news')) hidden.appendChild(btn('news'));
  for (const el of [...nav.children]) if (el.classList?.contains('nav-btn') && !['support', 'settings'].includes(el.dataset.go)) scroll.appendChild(el);
  const duty = document.getElementById('la-duty'); if (duty) foot.appendChild(duty);
  if (btn('support')) foot.appendChild(btn('support'));
  if (btn('settings')) foot.appendChild(btn('settings'));
  const col = document.createElement('button'); col.className = 'n2-collapse'; col.type = 'button';
  col.innerHTML = `${sv('collapse')}<span></span>`;
  col.onclick = () => setRail(!document.body.classList.contains('n2-rail'), true);
  foot.appendChild(col);
  nav.querySelectorAll('.grow').forEach(x => x.remove());
  nav.append(scroll, foot, hidden);
  nav.classList.add('n2');
  nav.querySelectorAll('.nav-btn').forEach(b => { if (!b.querySelector('.n2-cnt')) b.insertAdjacentHTML('beforeend', '<i class="n2-cnt" hidden></i>'); });

  function labels() {
    nav.querySelectorAll('.n2-grp').forEach(h => { h.textContent = t(h.dataset.g); });
    nav.querySelectorAll('.nav-btn').forEach(b => { const s = b.querySelector('span'); if (s && b.dataset.go) s.textContent = label(b.dataset.go); b.removeAttribute('title'); });
    col.querySelector('span').textContent = t(document.body.classList.contains('n2-rail') ? 'n2_expand' : 'n2_collapse');
    col.title = col.querySelector('span').textContent;
    const sp = document.querySelector('.n2-search span'); if (sp) sp.textContent = t('n2_searchPh');
  }
  function setRail(on, save) {
    document.body.classList.toggle('n2-rail', !!on);
    labels();
    if (save) { if (S.cfg) S.cfg.navCollapsed = !!on; K.saveSettings({ navCollapsed: !!on }).catch?.(() => {}); }
  }

  const cnt = (k, n, cls) => {
    const b = btn(k); const c = b?.querySelector('.n2-cnt'); if (!c) return;
    c.hidden = !n; c.textContent = n > 99 ? '99+' : n || ''; c.className = 'n2-cnt' + (cls ? ' ' + cls : '');
  };
  const counts = safe(() => {
    const st = S.live || {};
    cnt('friends', st.friends?.requests?.length || 0);
    cnt('play', st.invites?.length || 0, 'v');
    let pass = 0;
    try { if (typeof LC !== 'undefined' && LC.st) { const q = LC.st.quests || {}; pass = (LC.st.pass?.ready?.f || 0) + (LC.st.pass?.ready?.p || 0) + ['d', 'w'].reduce((a, k) => a + (q[k]?.list || []).filter(x => x.p >= x.n && !x.claimed).length, 0); } } catch {}
    cnt('pass', pass);
    cnt('support', (S.sup?.mine || []).reduce((a, x) => a + (x.unread || 0), 0));
    cnt('clans', S.cl?.mine?.invites?.length || 0);
    const ob = S.n2onb, obB = btn('onboarding');
    if (obB) { obB.hidden = !ob || ob.complete; const claim = ob ? ob.steps.filter(x => x.done && !x.claimed).length + (ob.all?.ready ? 1 : 0) : 0; cnt('onboarding', claim || (ob ? Math.max(0, ob.of - ob.done) : 0), claim ? '' : 'v'); }
    const isStaff = !!(S.me?.staff || S.me?.admin);
    staffH.hidden = !isStaff || btn('staff')?.hidden;
    cnt('staff', isStaff ? S.n2review || 0 : 0, 'v');
    const d = document.getElementById('la-duty'); if (d && d.parentElement !== foot) foot.insertBefore(d, btn('support'));
    bellDot();
  });
  async function loadReview() {
    if (!(S.me?.staff || S.me?.admin) || !S.token || S.live?.match) return;
    try { const o = await api('/api/staff/overview'); S.n2review = (o.review || []).length; counts(); } catch {}
  }
  const loadOnb = () => S.token && S.me?.gameId && api('/api/onb').then(o => { S.n2onb = o; counts(); }).catch(() => {});
  setInterval(counts, 1500);
  setInterval(loadOnb, 120_000);
  setInterval(loadReview, 90_000);

  const tip = document.createElement('div'); tip.id = 'n2-tip'; tip.hidden = true; document.body.appendChild(tip);
  const showTip = (el, html, side) => {
    tip.innerHTML = html; tip.hidden = false; tip.className = side;
    const r = el.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    let x, y;
    if (side === 'right') { x = r.right + 10; y = r.top + r.height / 2 - h / 2; }
    else { x = r.left + r.width / 2 - w / 2; y = r.bottom + 8; if (y + h > innerHeight - 8) { y = r.top - h - 8; tip.className = 'up'; } }
    tip.style.left = Math.max(8, Math.min(innerWidth - w - 8, x)) + 'px'; tip.style.top = Math.max(8, y) + 'px';
  };
  const hideTip = () => { tip.hidden = true; };
  nav.addEventListener('mouseover', e => {
    const b = e.target.closest('.nav-btn'); if (!b || !(document.body.classList.contains('n2-rail') || matchMedia('(max-width: 1000px)').matches)) return;
    const k = b.dataset.go; showTip(b, `<b>${esc(label(k))}</b>${I18N.en['n2_d_' + k] ? `<span>${esc(t('n2_d_' + k))}</span>` : ''}`, 'right');
  });
  nav.addEventListener('mouseout', e => { if (e.target.closest('.nav-btn')) hideTip(); });
  document.addEventListener('mouseover', e => { const q = e.target.closest?.('.n2-qm'); if (q) showTip(q, esc(t(q.dataset.n2h)), 'below'); });
  document.addEventListener('mouseout', e => { if (e.target.closest?.('.n2-qm')) hideTip(); });

  const tb = document.querySelector('.titlebar');
  const online = document.getElementById('online');
  const sBtn = document.createElement('button'); sBtn.className = 'n2-search n2-tb'; sBtn.type = 'button';
  sBtn.innerHTML = `${sv('search')}<span></span><i class="n2-kbd">Ctrl K</i>`;
  sBtn.onclick = () => openPal();
  online.after(sBtn);
  const bell = document.createElement('div'); bell.className = 'n2-bellw n2-tb';
  bell.innerHTML = `<button class="n2-bell" type="button">${sv('bell')}<i class="n2-bdot" hidden></i></button><div class="n2-drop" hidden></div>`;
  document.getElementById('tb-user').before(bell);
  const drop = bell.querySelector('.n2-drop'), bdot = bell.querySelector('.n2-bdot');
  const newsDot = document.getElementById('news-dot');
  const ts = v => (typeof v === 'number' ? v : Date.parse(v)) || 0;
  const seenAt = () => S.cfg?.newsSeenAt || Date.now() - 7 * 864e5;
  const lastAt = () => (S.n2news || []).reduce((a, p) => Math.max(a, ts(p.at)), 0);
  function bellDot() {
    const unread = (S.n2news || []).filter(p => ts(p.at) > seenAt()).length;
    bdot.hidden = !(unread || (newsDot && !newsDot.hidden));
    bdot.textContent = unread > 9 ? '9+' : unread || '';
  }
  function markSeen() {
    const at = lastAt(); if (newsDot) newsDot.hidden = true;
    if (at && at > (S.cfg?.newsSeenAt || 0)) { if (S.cfg) S.cfg.newsSeenAt = at; K.saveSettings({ newsSeenAt: at }).catch?.(() => {}); }
    bellDot();
  }
  const loadNews2 = () => S.token && api('/api/news').then(n => { S.n2news = n; bellDot(); if (!drop.hidden) drawDrop(); }).catch(() => {});
  const plain = s => String(s || '').replace(/<a?:\w+:\d+>/g, '').replace(/[*_~`>#|]+/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ').trim();
  function drawDrop() {
    const seen = seenAt();
    const list = (S.n2news || []).slice(0, 5);
    drop.innerHTML = `<div class="n2-dh"><span>${t('n2_newsTitle')}</span><button type="button" data-n2all>${t('n2_allNews')}</button></div>
      ${list.map(p => { const title = plain(p.embeds?.[0]?.title) || plain(p.text).slice(0, 90) || t('n2_post');
        const sub = plain(p.embeds?.[0]?.title ? p.text || p.embeds[0].description : '').slice(0, 70);
        return `<button type="button" class="n2-ni ${ts(p.at) > seen ? 'new' : ''}" data-n2all><i></i><div><b>${esc(title)}</b><span>${sub ? esc(sub) + ' · ' : ''}${fmtDT(p.at)}</span></div></button>`; }).join('')
      || `<div class="n2-dnone">${sv('news')}<span>${t('n2_noNewsDrop')}</span></div>`}`;
    drop.querySelectorAll('[data-n2all]').forEach(b => b.onclick = () => { drop.hidden = true; go('news'); });
  }
  bell.querySelector('.n2-bell').onclick = e => {
    e.stopPropagation();
    if (!drop.hidden) { drop.hidden = true; return; }
    drawDrop(); drop.hidden = false; loadNews2();
    setTimeout(markSeen, 1200);
  };
  document.addEventListener('click', e => { if (!drop.hidden && !bell.contains(e.target)) drop.hidden = true; });
  if (newsDot) new MutationObserver(() => { if (!newsDot.hidden) loadNews2(); bellDot(); }).observe(newsDot, { attributes: true, attributeFilter: ['hidden'] });
  setInterval(() => { if (S.me?.gameId) loadNews2(); }, 10 * 60_000);

  function renderFriends() {
    const st = S.live || { friends: { list: [], requests: [] } };
    render(`<div class="lbhead"><div><h1>${t('friends')}</h1><div class="mute">${t('n2_d_friends')}</div></div></div>
      <div class="n2-friends">${friendsCard(st)}</div>`);
    bindFriends(); try { bindParty(); } catch {}
  }

  const RECENT_KEY = 'n2Recent';
  const recent = () => { try { return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'); } catch { return []; } };
  const pushRecent = k => { try { localStorage.setItem(RECENT_KEY, JSON.stringify([k, ...recent().filter(x => x !== k)].slice(0, 6))); } catch {} };
  {
    const _go = go;
    go = function (page) {
      if (page === 'news') markSeen();
      if (page) pushRecent(page);
      if (page === 'onboarding' || page === 'play') setTimeout(loadOnb, 1500);
      return _go.apply(this, arguments);
    };
    const _refresh = refresh;
    refresh = function () {
      if (S.me?.gameId && S.page === 'friends') return renderFriends();
      return _refresh.apply(this, arguments);
    };
    const _markNav = markNav;
    markNav = function () { const r = _markNav.apply(this, arguments); if (S.page === 'news') bell.classList.add('on'); else bell.classList.remove('on'); return r; };
    const _afterLogin = afterLogin;
    afterLogin = function () {
      const r = _afterLogin.apply(this, arguments);
      setRail(!!S.cfg?.navCollapsed);
      setTimeout(() => { loadNews2(); loadReview(); loadOnb(); counts(); }, 900);
      return r;
    };
    const _applyStatic = applyStatic;
    applyStatic = function () { const r = _applyStatic.apply(this, arguments); labels(); return r; };
    const _onState = onState;
    onState = function () { const r = _onState.apply(this, arguments); if (S.page === 'friends') refresh(); counts(); return r; };
  }
  labels();
  if (S.cfg) setRail(!!S.cfg.navCollapsed);
  if (S.me?.gameId) setTimeout(() => { loadNews2(); loadReview(); loadOnb(); }, 500);

  const pageIc = k => iconOf(k);
  function empty({ ic, title, text, btns = [], mini, rows }) {
    const el = document.createElement('div');
    el.className = `n2-empty ${mini ? 'mini' : 'card'}`;
    el.dataset.n2 = '1';
    el.innerHTML = `<div class="n2-ill">${ic}</div><div class="n2-et"><h3>${esc(title)}</h3><p>${esc(text)}</p>
      ${btns.length ? `<div class="n2-eb">${btns.map((b, i) => `<button type="button" class="btn ${mini ? 'sm' : ''} ${b[2] ? 'ghost' : ''}" data-n2b="${i}">${esc(b[0])}</button>`).join('')}</div>` : ''}
      ${rows ? `<div class="n2-ghost">${rows}</div>` : ''}</div>`;
    el.querySelectorAll('[data-n2b]').forEach(b => b.onclick = e => { e.stopPropagation(); btns[+b.dataset.n2b][1](); });
    return el;
  }
  const playBtn = () => { const r = S.me?.r2v2 || {}; return isCal(r) ? [t('n2_ePlayCal', { n: r.cal || 0 }), () => go('play')] : [t('n2_ePlay'), () => go('play')]; };
  const howElo = () => modal(`<div class="card accent col n2-howelo"><h3>${t('n2_eHowElo')}</h3><p>${esc(t('n2_hElo'))}</p><p class="mute">${esc(t('la_calHint'))}</p><button class="btn" id="n2-ok">OK</button></div>`, box => { box.querySelector('#n2-ok').onclick = closeModal; });
  const EMPTY = [
    { pages: ['leaderboard'], key: 'nobody', make: () => {
      const q = (S.lbSearch || '').trim();
      if (q) return empty({ ic: sv('search'), title: t('n2_eLbSearchT', { q }), text: t('n2_eLbSearchX'),
        btns: [[t('n2_eReset'), () => { S.lbSearch = ''; const i = document.getElementById('lb-search'); if (i) i.value = ''; renderLeaderboard(); }], [t('n2_eSearchAll'), () => openPal(q), 1]] });
      const r = S.me?.['r' + (S.lbMode || '2v2')] || {};
      const me = isCal(r) ? t('n2_eYouCal', { nick: S.me.nick, n: 5 - (r.cal || 0) }) : t('n2_eYouElo', { nick: S.me.nick, e: r.elo });
      return empty({ ic: pageIc('leaderboard'), title: t('n2_eLbT'), text: t('n2_eLbX'), btns: [playBtn(), [t('n2_eHowElo'), howElo, 1]],
        rows: `<div><span>1</span><span>—</span><span>—</span></div><div><span>2</span><span>—</span><span>—</span></div><div class="me"><span>?</span><span>${esc(me)}</span><span>${isCal(r) ? t('n2_eCal') : ''}</span></div>` });
    } },
    { pages: ['lfg'], key: 'nobodyLfg', make: () => {
      const F = S.lfgF || {}, filtered = F.langs?.length || F.styles?.length || (F.mode && F.mode !== 'all') || F.online || F.min > 0 || (F.max != null && F.max < 10);
      const post = [t('createPost'), () => (document.getElementById('lfg-new') || {}).click?.()];
      return empty({ ic: pageIc('lfg'), title: t(filtered ? 'n2_eLfgT' : 'n2_eLfgT0'), text: t(filtered ? 'n2_eLfgX' : 'n2_eLfgX0'),
        btns: filtered ? [post, [t('n2_eResetF'), () => { S.lfgF = { langs: [], styles: [], mode: 'all', online: false, min: 0, max: 10 }; refresh(); }, 1]] : [post, [t('n2_ePlay'), () => go('play'), 1]] });
    } },
    { pages: ['news'], key: 'noNews', make: () => empty({ ic: sv('news'), title: t('n2_eNewsT'), text: t('n2_eNewsX'), btns: [playBtn()] }) },
    { pages: ['play', 'news', 'friends'], key: 'noFriends', make: () => empty({ mini: 1, ic: sv('friends'), title: t('n2_eFriendsT'), text: t('n2_eFriendsX'),
      btns: [[t('n2_eFindPlayers'), () => { const i = document.getElementById('fr-q'); if (i) i.focus(); else openPal(); }]] }) },
    { pages: ['play', 'news'], key: 'noMatches', make: () => empty({ mini: 1, ic: sv('matches'), title: t('n2_eMatchesT'), text: t('n2_eMatchesX'), btns: S.page === 'play' ? [] : [[t('n2_ePlay'), () => go('play')]] }) },
    { pages: ['clans'], key: 'clNone', make: () => empty({ ic: pageIc('clans'), title: t('n2_eClansT'), text: t('n2_eClansX'),
      btns: S.cl?.mine?.clan ? [] : [[t('n2_eClanCreate'), () => { S.cl.tab = 'mine'; S.cl.view = null; refresh(); setTimeout(() => document.getElementById('cl-name')?.focus(), 50); }]] }) },
    { pages: ['inventory'], test: (el, txt) => el.matches('.inv-none') || (typeof I18N[LANG].s2_nothing === 'string' && txt.startsWith(t('s2_nothing'))), make: () => empty({ mini: 1, ic: pageIc('inventory'), title: t('n2_eInvT'), text: t('n2_eInvX'),
      btns: [[t('shop'), () => go('shop')], ['Premium', () => go('premium'), 1]] }) },
  ];
  const scanEmpty = () => {
    const view = document.getElementById('view');
    view.querySelectorAll('.empty-note:not([data-n2])').forEach(el => {
      const txt = el.textContent.trim();
      const rule = EMPTY.find(r => r.pages.includes(S.page) && (r.test ? r.test(el, txt) : txt === t(r.key).trim()));
      el.dataset.n2 = '0';
      if (!rule) return;
      const n = rule.make(); if (!n) return;
      if (el.classList.contains('card') && n.classList.contains('mini')) n.classList.add('card');
      el.replaceWith(n);
    });
  };

  const qm = key => { const s = document.createElement('span'); s.className = 'n2-qm'; s.dataset.n2h = key; s.textContent = '?'; return s; };
  const addQm = (el, key) => { if (el && !el.querySelector(':scope > .n2-qm')) el.appendChild(qm(key)); };
  const HELP = [
    () => document.querySelectorAll('#view .lbt .lbh > div:last-child').forEach(el => addQm(el, 'n2_hElo')),
    () => document.querySelectorAll('#view h4').forEach(el => { if (el.textContent.trim() === t('ld_records')) addQm(el, 'n2_hRec'); }),
    () => document.querySelectorAll('.maps').forEach(m => addQm(m.closest('.card')?.querySelector('.card-h h3, .m2-todo-h h4'), 'n2_hBans')),
    () => document.querySelectorAll('#rf-auto .autobox > h4').forEach(el => addQm(el, 'n2_hOcr')),
    () => document.querySelectorAll('#modal .m2-box-h > h4').forEach(el => { if (I18N[LANG].m2_read && el.textContent.trim() === t('m2_read')) addQm(el, 'n2_hOcr'); }),
    () => document.querySelectorAll('#view .coinbox').forEach(el => addQm(el, 'n2_hKf')),
    () => document.querySelectorAll('#view .lc-bar.xp').forEach(b => addQm(b.parentElement?.querySelector('.row'), 'n2_hPassXp')),
    () => document.querySelectorAll('#view .cl-stat > span, #view .cl-lb th').forEach(el => { if (el.textContent.trim() === t('clWarRating')) addQm(el, 'n2_hClanWar'); }),
  ];
  let scanQ = 0;
  const scan = () => { if (scanQ) return; scanQ = requestAnimationFrame(() => { scanQ = 0; safe(scanEmpty)(); for (const h of HELP) safe(h)(); }); };
  new MutationObserver(scan).observe(document.getElementById('view'), { childList: true, subtree: true });
  new MutationObserver(scan).observe(document.getElementById('modal'), { childList: true, subtree: true });

  const pal = document.createElement('div'); pal.id = 'n2-pal'; pal.hidden = true;
  pal.innerHTML = `<div class="n2-pbox" role="dialog"><div class="n2-pin">${sv('search')}<input id="n2-pq" autocomplete="off" spellcheck="false"><i class="n2-kbd">Esc</i></div>
    <div class="n2-pres" id="n2-pres"></div>
    <div class="n2-pft"><span><i class="n2-kbd">↑</i><i class="n2-kbd">↓</i><em data-t="n2_pSelect"></em></span><span><i class="n2-kbd">Enter</i><em data-t="n2_pOpen"></em></span><span><i class="n2-kbd">Tab</i><em data-t="n2_pGroup"></em></span><span class="grow"></span><em data-t="n2_pEmptyHint"></em></div></div>`;
  document.body.appendChild(pal);
  const pq = pal.querySelector('#n2-pq'), pres = pal.querySelector('#n2-pres');
  const P = { items: [], sel: 0, players: null, pq: '', clans: null, shop: null };
  const PAGES = ['play', 'onboarding', 'lfg', 'friends', 'clans', 'leaderboard', 'profile', 'pass', 'shop', 'inventory', 'premium', 'referrals', 'news', 'support', 'settings', 'staff'];
  const pageOk = k => (k !== 'staff' || S.me?.staff || S.me?.admin) && (k !== 'onboarding' || (S.n2onb && !S.n2onb.complete));
  const SET_TABS = [['general', 'sGeneral'], ['notif', 'sNotif'], ['game', 'sGame'], ['look', 'sLook'], ['privacy', 'sPrivacy'], ['account', 'sAccount'], ['stream', 'sStream'], ['adv', 'sAdvanced']];
  const SET_ROWS = [['n2_language', 'general'], ['sStartup', 'general'], ['sCloseTray', 'general'], ['sVolume', 'notif'], ['sTone', 'notif'], ['sDesktop', 'notif'], ['sUiSounds', 'notif'],
    ['sAccent', 'look'], ['sZoom', 'look'], ['sMotion', 'look'], ['sCompact', 'look'], ['sGlow', 'look'], ['sInvites', 'privacy'], ['sInvisible', 'privacy'], ['sFriendReq', 'privacy'], ['sHw', 'adv'], ['sCache', 'adv']];
  const openSet = tab => { S.setTab = tab; go('settings'); };
  const queue = mode => { go('play'); if (!S.live?.match && !S.live?.myQueue) { const send = () => { S.queuedAt = Date.now(); wsSend({ t: 'queue', mode }); }; window.KZGame ? KZGame.gate(send) : send(); } };
  const ACTIONS = () => [
    ['n2_aFind2', 'play', () => queue('2v2')], ['n2_aFind1', 'play', () => queue('1v1')],
    ['n2_aLfgPost', 'lfg', () => { go('lfg'); setTimeout(() => document.getElementById('lfg-new')?.click(), 200); }],
    ['n2_aAddFriend', 'friends', () => { go('friends'); setTimeout(() => document.getElementById('fr-q')?.focus(), 80); }],
    ['n2_aTicket', 'support', () => go('support')],
    ['n2_aPromo', 'shop', () => { go('shop'); setTimeout(() => { const i = document.getElementById('promo-in'); if (i) { i.scrollIntoView({ block: 'center' }); i.focus(); } }, 400); }],
    ['n2_aMyProfile', 'profile', () => go('profile')],
    ['n2_aMenu', null, () => setRail(!document.body.classList.contains('n2-rail'), true)],
  ];
  const norm = s => String(s || '').toLowerCase().replace(/ё/g, 'е');
  const hl = (s, q) => { const i = q ? norm(s).indexOf(norm(q)) : -1; return i < 0 ? esc(s) : esc(s.slice(0, i)) + '<em>' + esc(s.slice(i, i + q.length)) + '</em>' + esc(s.slice(i + q.length)); };
  const KIND = { banner: 'banners', frame: 'frames', emblem: 'emblems' };
  const prettyId = id => String(id).replace(/^s\d*_/, '').replace(/[_-]+/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2');

  function build() {
    const q = pq.value.trim(), nq = norm(q), m = s => norm(s).includes(nq);
    const out = [];
    const add = (g, it) => out.push({ g, ...it });
    if (!q) {
      for (const k of recent().filter(k => PAGES.includes(k) && pageOk(k)).slice(0, 5)) add('n2_pRecent', { ic: iconOf(k), label: label(k), sub: t('n2_d_' + k), run: () => go(k) });
      for (const [k, ic, fn] of ACTIONS().slice(0, 4)) add('n2_pActions', { ic: ic ? iconOf(ic) : sv('bolt'), label: t(k), run: fn });
      if (!out.some(x => x.g === 'n2_pRecent')) for (const k of ['play', 'leaderboard', 'clans']) add('n2_pPages', { ic: iconOf(k), label: label(k), sub: t('n2_d_' + k), run: () => go(k) });
      return out;
    }
    for (const k of PAGES) if (pageOk(k) && (m(label(k)) || m(t('n2_d_' + k)) || m(k))) add('n2_pPages', { ic: iconOf(k), label: label(k), sub: t('n2_d_' + k), run: () => go(k) });
    for (const c of (P.clans || []).filter(c => m(c.name) || m(c.tag)).slice(0, 4))
      add('n2_pClans', { ic: c.emblem && typeof emblemHtml === 'function' ? emblemHtml(c.emblem) : iconOf('clans'), label: `${c.tag} · ${c.name}`, sub: t('n2_pClanSub', { n: c.members }), run: () => (typeof openClan === 'function' ? openClan(c.id) : go('clans', c.id)) });
    if (P.pq === q && P.players) for (const p of P.players.filter(p => p.id !== S.me?.id).slice(0, 6)) {
      const r = p.r2v2 || p;
      add('n2_pPlayers', { ic: avaF(p, 'sm'), label: p.nick, sub: r.elo != null && !(typeof isCal === 'function' && isCal(r)) ? t('n2_pPlayerSub', { e: r.elo }) : t('n2_pPlayerCal'), run: () => go('profile', p.id) });
    } else if (q.length >= 2) add('n2_pPlayers', { ic: sv('clock'), label: t('n2_pSearching'), dead: 1 });
    for (const [k, ic, fn] of ACTIONS()) if (m(t(k))) add('n2_pActions', { ic: ic ? iconOf(ic) : sv('bolt'), label: t(k), run: fn });
    for (const [k, l] of SET_TABS) if (m(t(l))) add('n2_pSettings', { ic: sv('gear'), label: t(l), sub: t('settings'), run: () => openSet(k) });
    for (const [k, tab] of SET_ROWS) if (m(t(k))) add('n2_pSettings', { ic: sv('gear'), label: t(k), sub: t('n2_pSetSub', { s: t(SET_TABS.find(x => x[0] === tab)[1]) }), run: () => openSet(tab) });
    const own = (k, id) => (P.shop?.owned?.[k + 's'] || []).includes(id);
    for (const it of (P.shop?.items || []).filter(it => m(prettyId(it.id)) || m(it.id)).slice(0, 5))
      add('n2_pItems', { ic: iconOf('shop'), label: prettyId(it.id), sub: own(it.kind, it.id) ? `${t(KIND[it.kind] || it.kind)} · ${t('n2_pOwned')}` : t('n2_pItemSub', { k: t(KIND[it.kind] || it.kind), p: it.price }), run: () => openItem(it) });
    return out;
  }
  function openItem(it) {
    go('shop');
    let n = 0; const tm = setInterval(() => {
      const b = document.querySelector(`[data-buy-id="${CSS.escape(it.id)}"], [data-usd-id="${CSS.escape(it.id)}"]`)?.closest('.inv');
      if (b || ++n > 25) { clearInterval(tm); if (b) { b.scrollIntoView({ block: 'center' }); b.classList.add('n2-flash'); setTimeout(() => b.classList.remove('n2-flash'), 2200); } }
    }, 150);
  }
  function draw() {
    const q = pq.value.trim();
    P.items = build();
    if (P.sel >= P.items.length) P.sel = Math.max(0, P.items.length - 1);
    if (P.items[P.sel]?.dead) P.sel = P.items.findIndex(x => !x.dead);
    let g = null;
    pres.innerHTML = P.items.map((it, i) => `${it.g !== g ? `<div class="n2-pg">${t((g = it.g))}</div>` : ''}<div class="n2-pr ${i === P.sel ? 'on' : ''} ${it.dead ? 'dead' : ''}" data-i="${i}">
      <span class="ic">${it.ic}</span><b>${hl(it.label, q)}</b>${it.sub ? `<span class="s">${esc(it.sub)}</span>` : ''}${i === P.sel ? '<i class="n2-kbd">Enter</i>' : ''}</div>`).join('')
      || `<div class="n2-pnone">${sv('search')}<span>${esc(t('n2_pNothing', { q }))}</span></div>`;
    pres.querySelectorAll('.n2-pr').forEach(r => {
      r.onmousemove = () => { const i = +r.dataset.i; if (i !== P.sel && !P.items[i].dead) { P.sel = i; pres.querySelectorAll('.n2-pr').forEach(x => x.classList.toggle('on', +x.dataset.i === i)); } };
      r.onclick = () => pick(+r.dataset.i);
    });
    pres.querySelector('.n2-pr.on')?.scrollIntoView({ block: 'nearest' });
  }
  function pick(i) { const it = P.items[i]; if (!it || it.dead) return; closePal(); it.run(); }
  let pT = 0;
  pq.oninput = () => {
    P.sel = 0; draw();
    const q = pq.value.trim(); clearTimeout(pT);
    if (q.length >= 2 && P.pq !== q) pT = setTimeout(() => api('/api/players/search?q=' + encodeURIComponent(q)).then(l => { P.players = l; P.pq = q; if (!pal.hidden && pq.value.trim() === q) draw(); }).catch(() => { P.players = []; P.pq = q; draw(); }), 220);
  };
  pq.onkeydown = e => {
    const live = P.items.map((x, i) => x.dead ? -1 : i).filter(i => i >= 0);
    const pos = live.indexOf(P.sel);
    if (e.key === 'ArrowDown') { e.preventDefault(); P.sel = live[(pos + 1) % live.length] ?? 0; draw(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); P.sel = live[(pos - 1 + live.length) % live.length] ?? 0; draw(); }
    else if (e.key === 'Enter') { e.preventDefault(); pick(P.sel); }
    else if (e.key === 'Tab') {
      e.preventDefault();
      const groups = [...new Set(P.items.map(x => x.g))], cg = groups.indexOf(P.items[P.sel]?.g);
      const ng = groups[(cg + (e.shiftKey ? groups.length - 1 : 1)) % groups.length];
      const i = P.items.findIndex(x => x.g === ng && !x.dead); if (i >= 0) { P.sel = i; draw(); }
    } else if (e.key === 'Escape') { e.preventDefault(); closePal(); }
  };
  pal.onmousedown = e => { if (e.target === pal) closePal(); };
  function openPal(q = '') {
    if (!S.me?.gameId || nav.hidden) return;
    pal.querySelectorAll('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
    pq.placeholder = t('n2_searchPh');
    pal.hidden = false; pq.value = q; P.sel = 0; draw(); pq.focus();
    if (q) pq.oninput();
    if (!P.clans) api('/api/clans?sort=power').then(r => { P.clans = r.list || []; if (!pal.hidden) draw(); }).catch(() => {});
    if (!P.shop) (S.shop ? Promise.resolve(S.shop) : api('/api/shop')).then(r => { P.shop = r; if (!pal.hidden) draw(); }).catch(() => {});
  }
  function closePal() { pal.hidden = true; pq.blur(); P.clans = null; P.shop = null; }
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && (e.code === 'KeyK' || e.key === 'k' || e.key === 'K')) {
      e.preventDefault(); e.stopPropagation();
      if (pal.hidden) openPal(); else closePal();
    }
  }, true);
  window.N2 = { openPal, closePal, setRail, counts };
})();

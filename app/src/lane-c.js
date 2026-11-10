const LC = { st: null, loading: false, shownLost: 0, shownStarter: false, vfxShown: {} };
const LCI = {
  flame: '<svg viewBox="0 0 24 24" class="lc-ic"><path d="M12.5 2c.8 3.6-2.4 5.2-2.4 8.4 0-2-1.6-3.2-2.8-3.6.8 2.4-2.4 4.4-2.4 8.4 0 4 3.2 7.6 7.2 7.6s7.2-3.2 7.2-7.6c0-5.6-4.4-7.6-6.8-13.2z" fill="currentColor"/></svg>',
  check: '<svg viewBox="0 0 24 24" class="lc-ic"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  lock: '<svg viewBox="0 0 24 24" class="lc-ic"><rect x="5" y="10.5" width="14" height="10" rx="2.5" fill="currentColor"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',
  minus: '<svg viewBox="0 0 24 24" class="lc-ic"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 12h8" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  gift: '<svg viewBox="0 0 24 24" class="lc-ic"><rect x="3.5" y="9" width="17" height="4" rx="1" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 13v7.5h14V13M12 9v11.5M12 9c-1.5-3.5-6-4-6-1.5S10 9 12 9zm0 0c1.5-3.5 6-4 6-1.5S14 9 12 9z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  pass: '<svg viewBox="0 0 24 24"><path d="M4 6.5h16v4a1.8 1.8 0 0 0 0 3.6v4H4v-4a1.8 1.8 0 0 0 0-3.6z"/><path d="M14.5 6.5v11.6" stroke-dasharray="2 2"/><path d="M8.6 9.6l.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" class="lc-ic"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  kf: '<svg viewBox="0 0 24 24" class="lc-ic"><circle cx="12" cy="12" r="9" fill="#f4c542"/><circle cx="12" cy="12" r="6.6" fill="none" stroke="#1a1300" stroke-width="1.4" opacity=".5"/><path d="M9.2 7.8v8.4M9.2 12l4.6-4.2M10.8 10.6l3.2 5.6" stroke="#1a1300" stroke-width="2" stroke-linecap="round"/></svg>',
  xp: '<svg viewBox="0 0 24 24" class="lc-ic"><path d="M12 2.8l2.6 5.6 6.1.7-4.5 4.1 1.2 6-5.4-3.1-5.4 3.1 1.2-6-4.5-4.1 6.1-.7z" fill="#969df9"/></svg>',
  spark: '<svg viewBox="0 0 24 24" class="lc-ic"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" fill="currentColor"/></svg>',
};
const LCAT = typeof LANEC !== 'undefined' ? LANEC : { STICKERS: [], NCOLORS: {}, NGRADS: {}, VFX: [], PRICE: {} };
const lcColorCss = id => LCAT.NGRADS[id] ? `background:linear-gradient(90deg,${LCAT.NGRADS[id][0]},${LCAT.NGRADS[id][1]});-webkit-background-clip:text;background-clip:text;color:transparent` : LCAT.NCOLORS[id] ? `color:${LCAT.NCOLORS[id]}` : '';
const lcSwatch = id => LCAT.NGRADS[id] ? `background:linear-gradient(90deg,${LCAT.NGRADS[id][0]},${LCAT.NGRADS[id][1]})` : `background:${LCAT.NCOLORS[id] || '#888'}`;
function lcNickAttr(p) { return `style="${lcColorCss(p.lc.nc)}"`; }
function lcNickTail(p) { return p.lc?.fl >= 3 ? `<i class="lc-flame" title="${esc(t('lcWinStreakN', { n: p.lc.fl }))}">${LCI.flame}<b>${p.lc.fl}</b></i>` : ''; }
const stickerImg = (id, cls = '') => `<img class="lc-stk ${cls}" src="assets/sticker/${esc(id)}.svg" alt="" draggable="false">`;
const lcFmtLeft = ts => { const s = Math.max(0, ts - Date.now()) / 1000, d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60); return d ? `${d}${t('lcD')} ${h}${t('lcH')}` : h ? `${h}${t('lcH')} ${m}${t('lcM')}` : `${m}${t('lcM')}`; };

function lcRewardHtml(r, big) {
  if (!r) return '';
  if (r.kind === 'kf') return `<div class="lc-rw kf">${LCI.kf}<b>${r.amount}</b></div>`;
  if (r.kind === 'sticker') return `<div class="lc-rw">${stickerImg(r.id)}</div>`;
  if (r.kind === 'ncolor') return `<div class="lc-rw"><i class="lc-sw" style="${lcSwatch(r.id)}"></i></div>`;
  if (r.kind === 'vfx') return `<div class="lc-rw"><i class="lc-vfxic v-${esc(r.id)}">${LCI.spark}</i></div>`;
  if (r.kind === 'emblem') return `<div class="lc-rw">${emblemHtml(r.id, big ? 'big' : '')}</div>`;
  if (r.kind === 'banner') return `<div class="lc-rw ban">${bannerHtml(r.id, 'lc-bimg')}</div>`;
  if (r.kind === 'frame') return `<div class="lc-rw">${avaF(S.me, 'sm', r.id)}</div>`;
  if (r.kind === 's2') return `<div class="lc-rw"><img class="lc-s2" src="assets/lanec/s2_polaris.png" alt=""></div>`;
  return '';
}
const lcRewardName = r => r.kind === 'kf' ? `${r.amount} KF` : r.kind === 's2' ? t('lcS2Reward') : `${t('lcKind_' + r.kind)} · ${r.kind === 'ncolor' || r.kind === 'vfx' || r.kind === 'sticker' ? t(`lc_${r.kind}_${r.id}`) : t('cos_' + r.id) !== 'cos_' + r.id ? t('cos_' + r.id) : r.id.replace(/_/g, ' ')}`;

async function lcLoad(silent) {
  if (!S.token || !S.me?.gameId || LC.loading) return;
  LC.loading = true;
  try {
    const st = await api('/api/lc');
    LC.st = st;
    if (typeof st.coins === 'number' && S.me) { S.me.coins = st.coins; renderMe(); }
    if (st.gift) { toast(t('lcGift', { n: st.gift.day, kf: st.gift.kf }) + (st.gift.xp ? ` +${st.gift.xp} XP` : '')); sfx('coin'); }
    lcPopups();
    if (['play', 'pass', 'shop', 'inventory'].includes(S.page)) refresh();
  } catch {} finally { LC.loading = false; }
}

function lcPopups() {
  const st = LC.st;
  if (!st || $('#modal').innerHTML || S.live?.match || S.live?.ready) return;
  if (st.lost && LC.shownLost !== st.lost.at) { LC.shownLost = st.lost.at; return lcLostModal(st.lost); }
  if (st.starter?.prompt && !LC.shownStarter && !S.finishedMatch) { LC.shownStarter = true; return lcStarterModal(true); }
}
function lcLostModal(l) {
  const name = l.tier === 'plus' ? 'Premium+' : 'Premium';
  const src = { promo: t('lcSrcPromo'), booster: t('lcSrcBooster'), staff: t('lcSrcStaff') }[l.src] || t('lcSrcPaid');
  const rows = l.had.map(k => `<li>${LCI.minus}<span>${t('lcLost_' + k, l.counts || {})}</span></li>`).join('');
  const eq = (l.equipped || []).map(e => `<span class="tag">${esc(t('lcKind_' + e.kind))}: ${esc(e.kind === 'ncolor' ? t('lc_ncolor_' + e.id) : e.id.replace(/_/g, ' '))}</span>`).join(' ');
  modal(`<div class="card accent col modal lc-lost"><img class="lc-crown" src="assets/crown-${l.tier === 'plus' ? 'plus' : 'premium'}.png" alt="">
    <h2>${t('lcLostTitle', { n: name })}</h2><p class="mute">${t('lcLostSub', { s: src })}</p>
    <ul class="lc-lostl">${rows}</ul>${eq ? `<div class="lc-eq"><span class="mute">${t('lcLostEquipped')}</span> ${eq}</div>` : ''}
    <p class="mute" style="font-size:12.5px">${t('lcLostKeep')}</p>
    <div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn ghost" data-lc="later">${t('lcLater')}</button><button class="btn gold" data-lc="renew">${t('lcRenew', { p: '$' + l.price })}</button></div></div>`, box => {
    const ack = () => api('/api/lc/lost-ack', {}).catch(() => {});
    box.querySelector('[data-lc="later"]').onclick = () => { ack(); closeModal(); };
    box.querySelector('[data-lc="renew"]').onclick = run(async () => { ack(); const r = await api('/api/premium/buy', { tier: l.priceTier }); K.open(r.url); toast(t('payOpened')); closeModal(); });
    box.querySelector('.overlay').onclick = e => { if (e.target.classList.contains('overlay')) { ack(); closeModal(); } };
  });
}
function lcStarterHtml(s, compact) {
  if (!s || s.bought) return '';
  const items = s.items.map(it => it.kind === 'banner' ? `<div class="lc-st-b">${bannerHtml(it.id, 'lc-bimg')}</div>` : it.kind === 'emblem' ? `<div class="lc-st-e">${emblemHtml(it.id, 'big')}</div>` : lcRewardHtml(it)).join('');
  return `<div class="card lc-starter ${compact ? 'compact' : ''}"><div class="lc-st-art">${items}<div class="lc-st-kf">${LCI.kf}<b>+${s.kf} KF</b></div></div>
    <div class="lc-st-txt"><span class="tag gold">${t('lcOnce')}</span><h3>${t('lcStarterTitle')}</h3><p class="mute">${t('lcStarterSub', { v: s.value })}</p>
    <button class="btn gold" data-lc-starter>${t('lcBuyFor', { p: '$' + s.usd })}</button></div></div>`;
}
function lcStarterModal() {
  const s = LC.st.starter;
  api('/api/lc/starter-seen', {}).catch(() => {});
  modal(`<div class="card accent col modal lc-stm"><h2>${t('lcStarterAfter')}</h2>${lcStarterHtml(s)}<div class="row" style="justify-content:flex-end"><button class="btn ghost" data-close>${t('lcLater')}</button></div></div>`, box => lcBindStarter(box));
}
function lcBindStarter(root) {
  root.querySelectorAll('[data-lc-starter]').forEach(b => b.onclick = run(async () => { const r = await api('/api/lc/starter/buy', {}); K.open(r.url); toast(t('payOpened')); }));
}

function lcQuestText(q) {
  const mode = q.mode ? q.mode.replace('v', '×') : '';
  return t('lcQ_' + q.type + (q.mode ? '_m' : '') + (q.map ? '_map' : ''), { n: q.n, m: mode, map: q.map ? mapName(q.map) : '' });
}
function lcQuestsHtml(qs) {
  const row = q => {
    const done = q.p >= q.n, pct = Math.min(100, q.p / q.n * 100);
    return `<div class="lc-q ${q.claimed ? 'claimed' : done ? 'done' : ''}"><div class="grow"><div class="lc-qt">${esc(lcQuestText(q))}</div>
      <div class="lc-bar"><i style="width:${pct}%"></i></div><div class="lc-qm"><span class="num">${q.p} / ${q.n}</span><span class="lc-qr">${LCI.kf}${q.kf} ${LCI.xp}${q.xp} XP</span></div></div>
      ${q.claimed ? `<span class="win lc-qok">${LCI.check}</span>` : done ? `<button class="btn sm gold" data-lc-q="${q.id}">${t('lcClaim')}</button>` : ''}</div>`;
  };
  return `<div class="lc-qs"><div class="lc-qh"><b>${t('lcDaily')}</b><span class="mute">${LCI.clock}${lcFmtLeft(qs.d.reset)}</span></div>${qs.d.list.map(row).join('')}
    <div class="lc-qh"><b>${t('lcWeekly')}</b><span class="mute">${LCI.clock}${lcFmtLeft(qs.w.reset)}</span></div>${qs.w.list.map(row).join('')}</div>`;
}
function lcStreakHtml(sk) {
  const n = sk.login.cycleDay;
  const dots = [1, 2, 3, 4, 5, 6, 7].map(d => `<i class="${d <= n ? 'on' : ''} ${d === 3 || d === 7 ? 'gift' : ''}" title="${d === 3 ? sk.login.kf[0] + ' KF' : d === 7 ? sk.login.kf[1] + ' KF + ' + sk.login.xp + ' XP' : ''}">${d === 3 || d === 7 ? LCI.gift : d}</i>`).join('');
  return `<div class="lc-sk"><div class="lc-skl"><span class="mute">${t('lcLoginStreak')}</span><b>${t('lcDays', { n: sk.login.n })}</b></div><div class="lc-dots">${dots}</div></div>
    <div class="lc-sk"><div class="lc-skl"><span class="mute">${t('lcWinStreak')}</span><b class="${sk.win.n >= 3 ? 'lc-hot' : ''}">${sk.win.n >= 3 ? LCI.flame : ''}${sk.win.n}</b></div>
      <span class="mute lc-skh">${sk.win.n >= 5 ? t('lcWinHot') : t('lcWinHint', { kf: sk.win.kf })} · ${t('lcBest', { n: sk.win.best })}</span></div>`;
}
function lcPassMini(p) {
  const pct = p.level >= p.levels ? 100 : (p.xp % p.xpLevel) / p.xpLevel * 100, ready = p.ready.f + p.ready.p;
  return `<div class="lc-pm" data-go3="pass"><div class="lc-pml"><span class="lc-lv">${p.level}</span><div class="grow"><b>${t('lcPass')}</b> ${p.prem ? '<span class="tag gold">PREMIUM</span>' : ''}
    <div class="lc-bar xp"><i style="width:${pct}%"></i></div><span class="mute" style="font-size:12px">${p.level >= p.levels ? t('maxLevel') : t('lcXpTo', { x: p.xp % p.xpLevel, n: p.xpLevel, l: p.level + 1 })}</span></div></div>
    ${ready ? `<span class="tag gold">${t('lcReady', { n: ready })}</span>` : `<span class="mute">${t('lcOpen')}</span>`}</div>`;
}
function lcRecapHtml(r, compact) {
  if (!r) return '';
  const tile = (cls, title, p, big, sub) => `<div class="lc-rt ${cls}"><span class="lc-rtt">${title}</span>${p ? `<b class="lc-rtn" data-lc-prof="${esc(p.id)}">${esc(p.nick)}</b><span class="lc-rtb">${big}</span><span class="mute">${sub}</span>` : `<span class="mute">${t('lcNobody')}</span>`}</div>`;
  const d = ts => new Date(ts).toLocaleDateString(LOCALE[LANG], { day: '2-digit', month: '2-digit' });
  return `<div class="card lc-recap ${compact ? 'compact' : ''}"><div class="card-h"><h4>${t('lcRecap')}</h4><span class="mute">${d(r.from)} – ${d(r.to - 7 * 3600e3)} · ${t('lcMatchesN', { n: r.matches })}</span></div>
    <div class="lc-rts">${tile('mvp', t('lcMvp'), r.mvp?.p, r.mvp ? `+${r.mvp.elo} ELO` : '', r.mvp ? `${r.mvp.w}/${r.mvp.g}` : '')}
    ${tile('kd', t('lcBestKd'), r.kd?.p, r.kd ? `${Number(r.kd.kd).toFixed(2)} K/D` : '', r.kd ? t('lcGamesN', { n: r.kd.g }) : '')}
    ${tile('act', t('lcActive'), r.active?.p, r.active ? t('lcGamesN', { n: r.active.g }) : '', r.active ? t('lcWinsN', { n: r.active.w }) : '')}
    ${r.duo ? `<div class="lc-rt duo"><span class="lc-rtt">${t('lcDuo')}</span><b class="lc-rtn"><span data-lc-prof="${esc(r.duo.pa.id)}">${esc(r.duo.pa.nick)}</span> + <span data-lc-prof="${esc(r.duo.pb.id)}">${esc(r.duo.pb.nick)}</span></b><span class="lc-rtb">${t('lcWinsN', { n: r.duo.w })}</span><span class="mute">${t('lcGamesN', { n: r.duo.g })}</span></div>` : tile('duo', t('lcDuo'), null)}</div></div>`;
}
function lcHomeInject() {
  const st = LC.st, home = document.querySelector('#view .home');
  if (!st || !home || document.querySelector('#view .lc-home')) return;
  const el = document.createElement('div');
  el.className = 'lc-home';
  el.innerHTML = `<div class="card lc-hc"><div class="card-h"><h4>${t('lcQuests')}</h4><span class="grow"></span><button class="btn ghost sm" data-go3="pass">${LCI.pass.replace('<svg', '<svg class="lc-ic"')}${t('lcPass')}</button></div>${lcQuestsHtml(st.quests)}</div>
    <div class="col" style="gap:16px"><div class="card lc-hc">${lcPassMini(st.pass)}${lcStreakHtml(st.streak)}</div>${lcRecapHtml(st.recap, true)}</div>`;
  const left = home.querySelector(':scope > .col');
  if (left) {
    el.classList.add('in-col');
    const how = [...left.children].find(c => c.querySelector('h4') && c !== left.firstElementChild && !c.classList.contains('lc-home'));
    left.insertBefore(el, how || null);
  } else home.after(el);
  lcBind(el);
}
function lcBind(root) {
  root.querySelectorAll('[data-go3]').forEach(b => b.onclick = () => go(b.dataset.go3));
  root.querySelectorAll('[data-lc-prof]').forEach(b => b.onclick = e => { e.stopPropagation(); go('profile', b.dataset.lcProf); });
  root.querySelectorAll('[data-lc-q]').forEach(b => b.onclick = run(async () => {
    b.disabled = true;
    const r = await api('/api/lc/claim', { kind: 'quest', id: b.dataset.lcQ });
    LC.st = r.state; S.me = r.me || S.me; S.me.coins = r.state.coins; renderMe(); sfx('coin'); toast(t('lcGot', { s: `${r.got.kf} KF · ${r.got.xp} XP` })); refresh();
  }));
  lcBindStarter(root);
}

function renderPass() {
  const st = LC.st;
  if (!st) { lcLoad(); return render(`<div class="card empty-note">${t('loading')}</div>`); }
  const p = st.pass, pct = p.level >= p.levels ? 100 : (p.xp % p.xpLevel) / p.xpLevel * 100;
  const cell = (tr, r) => {
    const claimed = p.claimed[tr].includes(r.n), reached = p.level >= r.n, locked = tr === 'p' && !p.prem;
    const can = reached && !claimed && !locked;
    return `<div class="lc-cell ${tr} ${claimed ? 'claimed' : ''} ${can ? 'ready' : ''} ${locked ? 'locked' : ''} ${reached ? 'reached' : ''}" title="${esc(lcRewardName(r))}">
      ${lcRewardHtml(r)}<span class="lc-cn">${r.kind === 'kf' ? '' : esc(lcRewardName(r))}</span>
      ${claimed ? `<span class="lc-cs win">${LCI.check}</span>` : can ? `<button class="btn sm ${tr === 'p' ? 'gold' : ''}" data-lc-claim="${tr}:${r.n}">${t('lcClaim')}</button>` : locked ? `<span class="lc-cs">${LCI.lock}</span>` : ''}</div>`;
  };
  const cols = p.track.f.map((r, i) => `<div class="lc-col ${p.level >= r.n ? 'reached' : ''} ${p.level + 1 === r.n ? 'next' : ''}"><span class="lc-ln">${r.n}</span>${cell('f', r)}${cell('p', p.track.p[i])}</div>`).join('');
  const ready = p.ready.f + p.ready.p;
  render(`<div class="lbhead"><div><h1>${t('lcPassTitle', { n: p.sid.replace(/^S/, '') })}</h1><div class="mute">${t('lcPassSub')}</div></div><span class="grow"></span>
      ${ready ? `<button class="btn gold" id="lc-all">${t('lcClaimAll', { n: ready })}</button>` : ''}</div>
    <div class="card lc-ph"><div class="lc-lvbig"><span>${t('lcLevel')}</span><b>${p.level}</b><small>/ ${p.levels}</small></div>
      <div class="grow"><div class="lc-bar xp big"><i style="width:${pct}%"></i></div>
        <div class="row mute" style="font-size:12.5px;margin-top:6px;flex-wrap:wrap"><span>${p.level >= p.levels ? t('maxLevel') : t('lcXpTo', { x: p.xp % p.xpLevel, n: p.xpLevel, l: p.level + 1 })}</span><span class="grow"></span>
        <span>${t('lcXpHow', { w: p.xpMatch.win, l: p.xpMatch.loss, c: p.xpMatch.cap })}</span><span>· ${t('lcToday', { n: p.todayMatches, c: p.xpMatch.cap })}</span></div></div>
      ${p.prem ? `<div class="lc-premok"><span class="tag gold">PREMIUM</span><span class="mute">${t('lcPremOwned')}</span></div>`
        : `<div class="lc-buy"><b>${t('lcUnlockPrem')}</b><span class="mute">${t('lcUnlockHint')}</span><div class="row"><button class="btn gold" data-lc-pass="usd">${'$' + p.price.usd}</button><button class="btn ghost" data-lc-pass="kf" ${st.coins < p.price.kf ? 'disabled' : ''}>${p.price.kf} KF</button></div>
          ${st.firstBonus && !st.firstBonus.used && st.firstBonus.kf ? `<span class="lc-fb">${LCI.gift}${t('lcFirstBonus', { n: st.firstBonus.kf })}</span>` : ''}</div>`}</div>
    <div class="card lc-track"><div class="lc-trk-l"><span>${t('lcFree')}</span><span class="gold">${t('lcPremium')}</span></div><div class="lc-cols" data-scroll="lcpass">${cols}</div></div>
    ${p.s2Pending?.length ? `<div class="card lc-s2n"><img src="assets/lanec/s2_polaris.png" alt=""><div><b>${t('lcS2Reward')}</b><div class="mute">${t('lcS2Hint')}</div></div></div>` : ''}
    <div class="grid2" style="margin-top:16px"><div class="card"><div class="card-h"><h4>${t('lcQuests')}</h4></div>${lcQuestsHtml(st.quests)}</div>
      <div class="col" style="gap:16px"><div class="card lc-hc">${lcStreakHtml(st.streak)}</div><div class="card"><h4>${t('lcNoP2W')}</h4><p class="mute" style="margin:0;font-size:13px">${t('lcNoP2WText')}</p></div></div></div>`);
  const sc = document.querySelector('.lc-cols');
  if (sc && !LC.passScrolled) { LC.passScrolled = true; const nx = sc.querySelector('.lc-col.next') || sc.querySelector('.lc-col.reached:last-of-type'); if (nx) sc.scrollLeft = Math.max(0, nx.offsetLeft - 160); }
  if (sc) sc.onwheel = e => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { sc.scrollLeft += e.deltaY; e.preventDefault(); } };
  lcBind(document.querySelector('#view'));
  document.querySelectorAll('[data-lc-claim]').forEach(b => b.onclick = run(async () => {
    const [track, level] = b.dataset.lcClaim.split(':');
    b.disabled = true;
    const r = await api('/api/lc/claim', { track, level: +level });
    LC.st = r.state; S.me = r.me || S.me; S.me.coins = r.state.coins; renderMe(); sfx('coin'); toast(t('lcGot', { s: lcRewardName(r.got) })); refresh();
  }));
  if ($('#lc-all')) $('#lc-all').onclick = run(async () => {
    const r = await api('/api/lc/claim', { all: true });
    LC.st = r.state; S.me = r.me || S.me; S.me.coins = r.state.coins; renderMe(); sfx('coin'); toast(t('lcGotN', { n: r.got.length })); refresh();
  });
  document.querySelectorAll('[data-lc-pass]').forEach(b => b.onclick = run(async () => {
    if (b.dataset.lcPass === 'kf') {
      if (!confirm(t('lcPassKfConfirm', { n: p.price.kf }))) return;
      const r = await api('/api/lc/pass/buy', { via: 'kf' }); LC.st = r.state; S.me.coins = r.state.coins; renderMe(); sfx('coin'); toast(t('bought')); return refresh();
    }
    const r = await api('/api/lc/pass/buy', { via: 'usd' }); K.open(r.url); toast(t('payOpened'));
  }));
}

function lcShopInject() {
  const sh = S.shop, page = document.querySelector('#view .page');
  if (!sh || !page || page.querySelector('.lc-shop')) return;
  const own = (k, id) => (sh.owned?.[{ sticker: 'stickers', ncolor: 'ncolors', vfx: 'vfx' }[k]] || []).includes(id);
  const card = (it, prev) => `<div class="inv shopi ${own(it.kind, it.id) ? 'on' : ''}">${prev}<div class="lc-iname">${esc(t(`lc_${it.kind}_${it.id}`))}</div>
    <div class="inv-f">${own(it.kind, it.id) ? `<span class="win">${t('owned')}</span><button class="btn ghost sm" data-go3="inventory">${t('inventory')}</button>`
      : `<span class="kf price">${it.price} KF</span><div class="buy2"><button class="btn sm" data-lcb-k="${it.kind}" data-lcb-id="${it.id}" ${sh.coins < it.price ? 'disabled' : ''}>${t('buy')}</button>${sh.pay?.enabled && it.usd ? `<button class="btn ghost sm" data-lcu-k="${it.kind}" data-lcu-id="${it.id}">$${it.usd}</button>` : ''}</div>`}</div></div>`;
  const by = k => sh.items.filter(x => x.kind === k);
  const top = document.createElement('div');
  top.className = 'lc-shop-top';
  top.innerHTML = (LC.st?.starter && !LC.st.starter.bought ? lcStarterHtml(LC.st.starter) : '') +
    (LC.st?.pass && !LC.st.pass.prem ? `<div class="card lc-passad" data-go3="pass"><div class="lc-lv">${LC.st.pass.level}</div><div class="grow"><b>${t('lcPass')}</b><div class="mute">${t('lcPassAd', { n: LC.st.pass.levels })}</div></div><span class="btn sm gold">${'$' + LC.st.pass.price.usd} · ${LC.st.pass.price.kf} KF</span></div>` : '');
  const head = page.querySelector('.lbhead');
  if (head && top.innerHTML) head.after(top);
  const el = document.createElement('div');
  el.className = 'lc-shop';
  el.innerHTML = `<div class="card" style="margin-top:16px"><div class="card-h"><h4>${t('lcVfx')}</h4><span class="mute">${t('lcVfxHint')}</span></div><div class="invgrid">${by('vfx').map(it => card(it, `<div class="fprev lc-vfxp" data-lc-try="${it.id}"><i class="lc-vfxic big v-${it.id}">${LCI.spark}</i><span class="mute">${t('lcTry')}</span></div>`)).join('')}</div></div>
    <div class="card" style="margin-top:16px"><div class="card-h"><h4>${t('lcNick')}</h4><span class="mute">${t('lcNickHint')}</span></div><div class="invgrid">${by('ncolor').map(it => card(it, `<div class="fprev"><span class="lc-nkp" style="${lcColorCss(it.id)}">${esc(S.me.nick)}</span></div>`)).join('')}</div></div>
    <div class="card" style="margin-top:16px"><div class="card-h"><h4>${t('lcStickers')}</h4><span class="mute">${t('lcStickersHint')}</span></div><div class="invgrid em">${by('sticker').map(it => card(it, `<div class="fprev">${stickerImg(it.id, 'big')}</div>`)).join('')}</div></div>`;
  page.append(el);
  lcBind(page);
  page.querySelectorAll('[data-lc-try]').forEach(b => b.onclick = () => lcPlayVfx(b.dataset.lcTry));
  page.querySelectorAll('[data-lcb-k]').forEach(b => b.onclick = run(async () => {
    const r = await api('/api/shop/buy', { kind: b.dataset.lcbK, id: b.dataset.lcbId });
    S.shop = { ...S.shop, coins: r.coins, owned: r.owned }; S.me = r.me; renderMe(); sfx('coin'); toast(t('bought')); lcLoad(true); refresh();
  }));
  page.querySelectorAll('[data-lcu-k]').forEach(b => b.onclick = run(async () => { const r = await api('/api/shop/buy-usd', { kind: b.dataset.lcuK, id: b.dataset.lcuId }); K.open(r.url); toast(t('payOpened')); }));
}

function lcInvInject() {
  const st = LC.st, page = document.querySelector('#view .page');
  if (!st || !page || page.querySelector('.lc-inv') || !S.premInfo || !S.myProfile) return;
  const plus = S.me.premium?.tier === 'plus';
  const colors = [...st.owned.ncolors, ...Object.keys(LCAT.NGRADS)];
  const el = document.createElement('div');
  el.className = 'card lc-inv';
  el.innerHTML = `<div class="card-h"><h4>${t('lcMyStyle')}</h4><span class="grow"></span><button class="btn ghost sm" data-go3="shop">${t('shop')}</button></div>
    <div class="lc-invrow"><span class="mute">${t('lcNick')}</span><div class="lc-sws"><button class="lc-swb ${!st.cos.ncolor ? 'on' : ''}" data-lc-nc="">${t('lcNone')}</button>
      ${colors.map(id => { const lock = id in LCAT.NGRADS && !plus; return `<button class="lc-swb ${st.cos.ncolor === id ? 'on' : ''} ${lock ? 'locked' : ''}" data-lc-nc="${id}" ${lock ? 'disabled' : ''} title="${esc(t('lc_ncolor_' + id))}${lock ? ' · Premium+' : ''}"><i class="lc-sw" style="${lcSwatch(id)}"></i>${lock ? LCI.lock : ''}</button>`; }).join('')}</div></div>
    <div class="lc-invrow"><span class="mute">${t('lcVfx')}</span><div class="lc-sws"><button class="lc-swb ${!st.cos.vfx ? 'on' : ''}" data-lc-vfx="">${t('lcNone')}</button>
      ${st.owned.vfx.map(id => `<button class="lc-swb ${st.cos.vfx === id ? 'on' : ''}" data-lc-vfx="${id}" title="${esc(t('lc_vfx_' + id))}"><i class="lc-vfxic v-${id}">${LCI.spark}</i>${esc(t('lc_vfx_' + id))}</button>`).join('')}
      ${st.owned.vfx.length ? '' : `<span class="mute" style="font-size:12.5px">${t('lcNoneOwned')}</span>`}</div></div>
    <div class="lc-invrow"><span class="mute">${t('lcStickers')}</span><div class="lc-sws">${st.cos.stickers.map(s => stickerImg(s.id)).join('') || `<span class="mute" style="font-size:12.5px">${st.owned.stickers.length ? t('lcStickersEmpty') : t('lcNoneOwned')}</span>`}
      ${st.owned.stickers.length ? `<button class="btn sm" id="lc-stk-edit">${t('lcStickersEdit')}</button>` : ''}</div></div>`;
  const head = page.querySelector('.lbhead, h1');
  (head?.closest('.lbhead') || head)?.after(el) ?? page.prepend(el);
  lcBind(el);
  const save = run(async body => { const r = await api('/api/lc/cosmetics', body); LC.st = r.state; S.me = r.me || S.me; S.myProfile = { ...S.myProfile, ...r.me }; S.profCache = null; renderMe(); toast(t('lcSaved')); refresh(); });
  el.querySelectorAll('[data-lc-nc]').forEach(b => b.onclick = () => save({ ncolor: b.dataset.lcNc }));
  el.querySelectorAll('[data-lc-vfx]').forEach(b => b.onclick = () => { save({ vfx: b.dataset.lcVfx }); if (b.dataset.lcVfx) lcPlayVfx(b.dataset.lcVfx); });
  if ($('#lc-stk-edit')) $('#lc-stk-edit').onclick = lcStickerEditor;
}

function lcStickerEditor() {
  const st = LC.st;
  let list = st.cos.stickers.map(s => ({ ...s })), sel = list.length ? 0 : -1;
  const banner = S.me.prem?.banner;
  const draw = box => {
    const area = box.querySelector('.lc-ed-b');
    area.querySelectorAll('.lc-ed-s').forEach(x => x.remove());
    list.forEach((s, i) => {
      const d = document.createElement('div');
      d.className = 'lc-ed-s' + (i === sel ? ' sel' : '');
      d.style.cssText = `left:${s.x}%;top:${s.y}%;height:${s.s * 100}%;transform:translate(-50%,-50%) rotate(${s.r || 0}deg)`;
      d.innerHTML = stickerImg(s.id);
      d.onpointerdown = e => {
        sel = i; e.preventDefault(); const rc = area.getBoundingClientRect();
        const mv = ev => { s.x = Math.max(0, Math.min(100, (ev.clientX - rc.left) / rc.width * 100)); s.y = Math.max(0, Math.min(100, (ev.clientY - rc.top) / rc.height * 100)); d.style.left = s.x + '%'; d.style.top = s.y + '%'; };
        const up = () => { window.removeEventListener('pointermove', mv); window.removeEventListener('pointerup', up); draw(box); };
        window.addEventListener('pointermove', mv); window.addEventListener('pointerup', up);
      };
      area.append(d);
    });
    box.querySelector('#lc-ed-size').value = sel >= 0 ? list[sel].s : 0.3;
    box.querySelector('#lc-ed-rot').value = sel >= 0 ? list[sel].r || 0 : 0;
    box.querySelector('.lc-ed-ctl').style.visibility = sel >= 0 ? 'visible' : 'hidden';
    box.querySelector('.lc-ed-cnt').textContent = `${list.length} / 3`;
  };
  modal(`<div class="card accent col modal lc-ed"><h2>${t('lcStickersEdit')}</h2><p class="mute" style="margin-top:0">${t('lcEdHint')}</p>
    <div class="lc-ed-b pbanner has-b">${bannerHtml(banner, 'pb-art')}<div class="lc-ed-nick">${nickHtml({ ...S.me, prem: S.me.prem && { ...S.me.prem, emblem: '' } })}</div></div>
    <div class="row lc-ed-ctl"><label class="mute">${t('lcSize')} <input type="range" id="lc-ed-size" min="0.15" max="0.45" step="0.01"></label><label class="mute">${t('lcRotate')} <input type="range" id="lc-ed-rot" min="-45" max="45" step="1"></label><button class="btn ghost sm" id="lc-ed-del">${t('lcRemove')}</button></div>
    <div class="row" style="margin:10px 0 6px"><b>${t('lcStickers')}</b><span class="mute lc-ed-cnt"></span></div>
    <div class="lc-ed-pal">${st.owned.stickers.map(id => `<button data-add="${id}" title="${esc(t('lc_sticker_' + id))}">${stickerImg(id)}</button>`).join('')}</div>
    <div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn ghost" data-close>${t('cancel')}</button><button class="btn" id="lc-ed-save">${t('save')}</button></div></div>`, box => {
    draw(box);
    box.querySelectorAll('[data-add]').forEach(b => b.onclick = () => { if (list.length >= 3) return toast(t('lcMax3'), true); list.push({ id: b.dataset.add, x: 70 + list.length * 8, y: 50, s: 0.3, r: 0 }); sel = list.length - 1; draw(box); });
    box.querySelector('#lc-ed-size').oninput = e => { if (sel >= 0) { list[sel].s = +e.target.value; draw(box); } };
    box.querySelector('#lc-ed-rot').oninput = e => { if (sel >= 0) { list[sel].r = +e.target.value; draw(box); } };
    box.querySelector('#lc-ed-del').onclick = () => { if (sel >= 0) { list.splice(sel, 1); sel = list.length - 1; draw(box); } };
    box.querySelector('#lc-ed-save').onclick = run(async () => {
      const r = await api('/api/lc/cosmetics', { stickers: list });
      LC.st = r.state; S.profCache = null; closeModal(); toast(t('lcSaved')); refresh();
    });
  });
}

function lcProfileInject() {
  const p = S.profCache, pb = document.querySelector('#view .pbanner');
  if (!p?.lc?.st || !pb || pb.querySelector('.lc-pst')) return;
  const layer = document.createElement('div');
  layer.className = 'lc-pst';
  layer.innerHTML = p.lc.st.map(s => `<div class="lc-ps" style="left:${s.x}%;top:${s.y}%;height:${s.s * 100}%;transform:translate(-50%,-50%) rotate(${s.r || 0}deg)">${stickerImg(s.id)}</div>`).join('');
  const art = pb.querySelector('.pb-art');
  if (art) art.after(layer); else pb.prepend(layer);
}

const LC_VFX = {
  gold: { cols: ['#f4c542', '#ffd977', '#ff9f3a', '#fff3c4'], n: 140, shape: 'dot', mode: 'burst', ring: '#f4c542' },
  polaris: { cols: ['#e8eaff', '#969df9', '#b6bbff', '#ffffff'], n: 90, shape: 'star', mode: 'twinkle', ring: '#b6bbff' },
  violet: { cols: ['#969df9', '#7d84ec', '#c79bff', '#e8eaff'], n: 110, shape: 'shard', mode: 'burst', ring: '#969df9' },
  ember: { cols: ['#ff8a3d', '#f4c542', '#ff5f3a', '#ffd9a0'], n: 150, shape: 'dot', mode: 'rise', ring: '#ff8a3d' },
};
function lcPlayVfx(id) {
  const V = LC_VFX[id];
  if (!V || document.querySelector('.lc-vfx')) return;
  const cv = document.createElement('canvas'), dpr = window.devicePixelRatio || 1, W = innerWidth, H = innerHeight;
  cv.className = 'lc-vfx'; cv.width = W * dpr; cv.height = H * dpr;
  document.body.append(cv);
  const g = cv.getContext('2d'); g.scale(dpr, dpr);
  const cx = W / 2, cy = H * 0.42, P = [];
  for (let i = 0; i < V.n; i++) {
    const a = Math.random() * Math.PI * 2, sp = 3 + Math.random() * 9;
    P.push(V.mode === 'rise' ? { x: Math.random() * W, y: H + Math.random() * 80, vx: (Math.random() - .5) * 1.5, vy: -(4 + Math.random() * 7), s: 2 + Math.random() * 3.5, c: V.cols[i % V.cols.length], d: Math.random() * 20 }
      : V.mode === 'twinkle' ? { x: Math.random() * W, y: Math.random() * H * 0.85, vx: 0, vy: 0.3 + Math.random() * 0.8, s: 3 + Math.random() * 7, c: V.cols[i % V.cols.length], d: Math.random() * 60, ph: Math.random() * 6 }
      : { x: cx, y: cy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 2, s: 2.5 + Math.random() * 4, c: V.cols[i % V.cols.length], d: Math.random() * 6, rot: Math.random() * 6, vr: (Math.random() - .5) * .3 });
  }
  const star = (x, y, r) => { g.beginPath(); for (let k = 0; k < 8; k++) { const rr = k % 2 ? r * 0.28 : r, a = k * Math.PI / 4; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); g.fill(); };
  const t0 = performance.now(), DUR = 2600;
  const frame = now => {
    const tt = now - t0, k = tt / DUR;
    g.clearRect(0, 0, W, H);
    if (V.mode !== 'rise' && k < 0.5) { g.globalAlpha = (0.5 - k) * 1.6; g.strokeStyle = V.ring; g.lineWidth = 6 * (1 - k); g.beginPath(); g.arc(cx, cy, 30 + k * 900, 0, Math.PI * 2); g.stroke(); }
    if (id === 'polaris' && k < 0.9) { g.globalAlpha = Math.sin(Math.min(1, k * 2.2) * Math.PI) * 0.95; g.fillStyle = '#ffffff'; g.shadowColor = '#969df9'; g.shadowBlur = 40; star(cx, cy, 70 + k * 30); g.shadowBlur = 0; }
    for (const p of P) {
      if (tt / 16 < p.d) continue;
      p.x += p.vx; p.y += p.vy;
      if (V.mode === 'burst') { p.vy += 0.16; p.vx *= 0.985; p.rot += p.vr; }
      g.globalAlpha = Math.max(0, 1 - k * (V.mode === 'twinkle' ? 1.05 : 1.15)) * (V.mode === 'twinkle' ? 0.5 + 0.5 * Math.sin(tt / 120 + p.ph) : 1);
      g.fillStyle = p.c;
      if (V.shape === 'star') star(p.x, p.y, p.s);
      else if (V.shape === 'shard') { g.save(); g.translate(p.x, p.y); g.rotate(p.rot); g.beginPath(); g.moveTo(0, -p.s * 2.2); g.lineTo(p.s, p.s); g.lineTo(-p.s, p.s); g.closePath(); g.fill(); g.restore(); }
      else { g.beginPath(); g.arc(p.x, p.y, p.s, 0, Math.PI * 2); g.fill(); }
    }
    g.globalAlpha = 1;
    if (tt < DUR) requestAnimationFrame(frame); else cv.remove();
  };
  requestAnimationFrame(frame);
}
function lcFinishedInject(m) {
  if (!m || m.state !== 'done' || !m.result?.winner) return;
  const win = m.teams[m.result.winner] || [];
  for (const p of win) if (p.lc?.vfx) document.querySelectorAll(`#view tr[data-uid="${CSS.escape(p.id)}"]`).forEach(tr => tr.classList.add('lc-wfx', 'v-' + p.lc.vfx));
  const mine = win.find(p => p.id === S.me.id);
  if (mine?.lc?.vfx && !LC.vfxShown[m.id]) { LC.vfxShown[m.id] = 1;
    const fx = () => lcPlayVfx(mine.lc.vfx); if (window.UIS) UIS.when('victory', UIS.T.victory.chord, fx, 250); else setTimeout(fx, 250); }
}

{
  const _refresh = refresh;
  refresh = function () {
    if (!S.me?.gameId) return;
    if (S.page === 'pass') return renderPass();
    return _refresh();
  };
  const _renderPlay = renderPlay;
  renderPlay = function () {
    const r = _renderPlay.apply(this, arguments);
    if (!S.live?.match && !S.finishedMatch) lcHomeInject();
    if (S.finishedMatch && !S.live?.match) lcFinishedInject(S.finishedMatch);
    return r;
  };
  const _renderShop = renderShop;
  renderShop = function () { const r = _renderShop.apply(this, arguments); lcShopInject(); return r; };
  const _renderInventory = renderInventory;
  renderInventory = function () { const r = _renderInventory.apply(this, arguments); lcInvInject(); return r; };
  const _renderProfile = renderProfile;
  renderProfile = async function () { const r = await _renderProfile.apply(this, arguments); if (S.page === 'profile') lcProfileInject(); return r; };
  const _go = go;
  go = function (page) {
    if (['pass', 'play', 'shop', 'inventory'].includes(page)) lcLoad(true);
    if (page === 'pass') LC.passScrolled = false;
    return _go.apply(this, arguments);
  };
  const _connect = connect;
  connect = function () {
    const had = S.ws;
    const r = _connect.apply(this, arguments);
    if (S.ws && S.ws !== had) S.ws.addEventListener('message', e => {
      let m; try { m = JSON.parse(e.data); } catch { return; }
      if (m.t !== 'lc') return;
      if (m.winBonus) { toast(t('lcWinBonus', { n: m.winBonus.n, kf: m.winBonus.kf })); sfx('coin'); }
      clearTimeout(LC.pingT); LC.pingT = setTimeout(() => lcLoad(), 600);
    });
    return r;
  };
  const _afterLogin = afterLogin;
  afterLogin = function () { const r = _afterLogin.apply(this, arguments); setTimeout(() => lcLoad(), 1200); return r; };
  const nb = document.createElement('button');
  nb.className = 'nav-btn'; nb.dataset.go = 'pass';
  nb.innerHTML = `${LCI.pass}<span>${t('lcPass')}</span><i class="dot" id="lc-dot" hidden></i>`;
  nb.onclick = () => go('pass');
  document.querySelector('#nav [data-go="play"]')?.after(nb);
  const _applyStatic = typeof applyStatic === 'function' ? applyStatic : null;
  if (_applyStatic) applyStatic = function () { const r = _applyStatic.apply(this, arguments); const s = nb.querySelector('span'); if (s) s.textContent = t('lcPass'); return r; };
  setInterval(() => {
    if (!LC.st && !LC.tried && S.token && S.me?.gameId) { LC.tried = true; lcLoad(); }
    if (LC.st) { const d = $('#lc-dot'); if (d) d.hidden = !(LC.st.pass.ready.f + LC.st.pass.ready.p + LC.st.quests.d.list.filter(q => q.p >= q.n && !q.claimed).length + LC.st.quests.w.list.filter(q => q.p >= q.n && !q.claimed).length); }
    lcPopups();
  }, 3000);
  setInterval(() => { if (S.token && S.me?.gameId && !S.live?.match) lcLoad(true); }, 5 * 60_000);
}

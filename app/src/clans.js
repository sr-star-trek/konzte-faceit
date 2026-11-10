
BADGE_PNG.push('creator');
BANNERS.push('kz_clan_founders');

const CL_IC = {
  flag: '<svg viewBox="0 0 24 24"><path d="M5 21V4"/><path d="M5 4h12l-2.5 4.5L17 13H5"/></svg>',
  swords: '<svg viewBox="0 0 24 24"><path d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2"/><path d="M14.5 6.5L18 3h3v3l-3.5 3.5M5 14l4 4M7 17l-3 3M3 19l2 2"/></svg>',
  users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3 19c.6-3.3 3-5 6-5s5.4 1.7 6 5"/><circle cx="16.5" cy="9" r="2.6"/><path d="M15.5 14.2c2.6-.3 4.8 1.2 5.5 4.3"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M4 20V11h4v9M10 20V5h4v15M16 20v-6h4v6"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  play: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9v6l5-3z"/></svg>',
  send: '<svg viewBox="0 0 24 24"><path d="M4 12l16-8-6 16-2.5-6.5z"/></svg>',
  copy: '<svg viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>',
};
const PARTNER_SVG = '<svg viewBox="0 0 24 24"><path class="f" d="M12 2.5l8 3v6c0 4.8-3.4 8.5-8 10-4.6-1.5-8-5.2-8-10v-6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>';

const CL_LVL_COL = l => l >= 10 ? ['#c7b8ff', '#7d6bf0'] : l >= 7 ? ['#ffe08a', '#d9a520'] : l >= 4 ? ['#eef1f6', '#8e97a6'] : ['#f0b27a', '#9a5a2b'];
function clanLvlIcon(lvl, size = 34) {
  const [a, b] = lvl ? CL_LVL_COL(lvl) : ['#cfd3dc', '#5c626e'], id = 'clg' + (lvl || 0) + size;
  return `<svg class="cl-lvl" width="${size}" height="${size}" viewBox="0 0 40 44"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>
    <path d="M20 2 37 8v13c0 10.5-7.2 18.3-17 21C10.2 39.3 3 31.5 3 21V8Z" fill="#15151b" stroke="url(#${id})" stroke-width="3"/>
    <path d="M20 7.5 32 12v9c0 7.6-5 13.4-12 15.7C13 34.4 8 28.6 8 21v-9Z" fill="none" stroke="url(#${id})" stroke-opacity=".35" stroke-width="1.2"/>
    <text x="20" y="${lvl >= 10 ? 28 : 29}" text-anchor="middle" font-family="TTB, Arial Black, sans-serif" font-size="${lvl >= 10 ? 15 : 18}" fill="url(#${id})">${lvl || '?'}</text></svg>`;
}
const cwCal = cw => cw?.cal != null;
const cwShort = cw => cwCal(cw) ? `${clanLvlIcon(0, 22)}<span class="tag la-cal sm">${t('la_calShort', { n: cw.cal })}</span>` : `${clanLvlIcon(cw.lvl, 22)}<b class="num">${cw.elo}</b>`;

function clanTagHtml(p) {
  const c = p?.clan;
  if (!c?.tag) return '';
  const partner = c.p || c.partner;
  return `<span class="ctag${partner ? ' partner' : ''}" title="${esc(c.name || c.tag)}${partner ? ' · ' + t('clPartner') : ''}">${partner ? `<i class="ctag-p">${PARTNER_SVG}</i>` : ''}${esc(c.tag)}</span>`;
}
{ const L = {
  en: { clAvatar: 'Clan avatar', clAvatarHint: 'PNG, JPG, GIF or WebP up to 2 MB. Shown instead of the emblem everywhere.', clAvatarUp: 'Upload image', clAvatarOff: 'Remove', clAvatarSaved: 'Clan avatar updated', clAvatarBig: 'The image is larger than 2 MB', clAvatarOffStaff: 'Remove avatar', clAvatarOffQ: 'Remove this clan\'s avatar?' },
  uk: { clAvatar: 'Аватарка клану', clAvatarHint: 'PNG, JPG, GIF або WebP до 2 МБ. Показується всюди замість емблеми.', clAvatarUp: 'Завантажити картинку', clAvatarOff: 'Прибрати', clAvatarSaved: 'Аватарку клану оновлено', clAvatarBig: 'Картинка більша за 2 МБ', clAvatarOffStaff: 'Прибрати аватарку', clAvatarOffQ: 'Прибрати аватарку цього клану?' },
  ru: { clAvatar: 'Аватарка клана', clAvatarHint: 'PNG, JPG, GIF или WebP до 2 МБ. Показывается везде вместо эмблемы.', clAvatarUp: 'Загрузить картинку', clAvatarOff: 'Убрать', clAvatarSaved: 'Аватарка клана обновлена', clAvatarBig: 'Картинка больше 2 МБ', clAvatarOffStaff: 'Убрать аватарку', clAvatarOffQ: 'Убрать аватарку этого клана?' },
}; for (const l of Object.keys(L)) Object.assign(I18N[l] ||= {}, L[l]); }
const clanIcon = (c, cls = '', mute = false) => c.avatar ? `<img class="cl-av ${cls}" src="${esc(avaSrc(c.avatar))}" alt="" loading="lazy">` : c.emblem ? emblemHtml(c.emblem, cls) : `<i class="ic${mute ? ' mute' : ''}">${CL_IC.flag}</i>`;
const clanName = c => `<span class="ctag big${c.partner ? ' partner' : ''}">${c.partner ? `<i class="ctag-p">${PARTNER_SVG}</i>` : ''}${esc(c.tag)}</span> ${esc(c.name)}`;

function actionToast(msg, actions = []) {
  const el = document.createElement('div');
  el.className = 'toast act';
  el.innerHTML = `<span>${esc(msg)}</span>${actions.map((a, i) => `<button class="btn sm ${i ? 'ghost' : ''}" data-ta="${i}">${esc(a[0])}</button>`).join('')}`;
  el.querySelectorAll('[data-ta]').forEach(b => b.onclick = run(async () => { el.remove(); await actions[+b.dataset.ta][1](); }));
  $('#toast').append(el);
  setTimeout(() => el.remove(), 8000);
}

S.cl = { tab: 'mine', sort: 'power', view: null, mine: null, list: null, other: null };
const _goB = go;
go = function (page, arg) {
  const nb = document.querySelector('[data-go="clans"] span'); if (nb) nb.textContent = t('clans');
  if (page === 'clans') { S.cl.view = arg || null; if (arg) S.cl.other = null; loadClans(); }
  return _goB(page, arg);
};
const _refreshB = refresh;
refresh = function () {
  if (S.page === 'clans') { if (S.me?.gameId) renderClans(); return; }
  return _refreshB();
};
let clLoadT = null;
function clanRevealCheck() {
  const c = S.cl.mine?.clan, at = c?.cw?.revealAt; if (!at || cwCal(c.cw) || Date.now() - at > 7 * 864e5) return;
  const key = 'kzClanReveal:' + c.id + ':' + at;
  try { if (localStorage.getItem(key)) return; localStorage.setItem(key, '1'); } catch { return; }
  if (typeof kzRankReveal === 'function') kzRankReveal({ clan: { tag: c.tag, name: c.name, lvl: c.cw.lvl, icon: clanLvlIcon(c.cw.lvl, 176) }, elo: c.cw.elo, w: c.cw.w, l: c.cw.l });
}
function loadClans(soon) {
  if (soon) { clearTimeout(clLoadT); clLoadT = setTimeout(() => loadClans(), 250); return; }
  Promise.all([api('/api/clan/mine'), api('/api/clans?sort=' + S.cl.sort), S.cl.view ? api('/api/clan?id=' + encodeURIComponent(S.cl.view)) : null])
    .then(([mine, list, other]) => { S.cl.mine = mine; S.cl.list = list; S.cl.other = other; clanRevealCheck(); if (S.page === 'clans') refresh(); })
    .catch(e => { if (S.cl.view) { S.cl.view = null; S.cl.other = null; } toast(e.message, true); });
}
const openClan = id => { if (id === S.cl.mine?.clan?.id) { S.cl.view = null; S.cl.tab = 'mine'; } go('clans', id === S.cl.mine?.clan?.id ? null : id); };

function renderClans() {
  const c = S.cl, mine = c.mine;
  if (!mine || !c.list) return render(`<div class="card empty-note">${t('loading')}</div>`);
  const tabs = [['mine', t('clMy')], ['top', t('clTop')], ['partners', t('clPartners')]];
  let body;
  if (c.view && c.other) body = clanDetail(c.other);
  else if (c.tab === 'top') body = clanTable(c.list.list);
  else if (c.tab === 'partners') body = partnersTab(c.list.list.filter(x => x.partner));
  else body = mine.clan ? clanDetail(mine.clan) : noClan(mine);
  render(`<div class="lbhead"><div><h1>${t('clans')}</h1><div class="mute">${t('clSub')}</div></div><span class="grow"></span>
    ${c.view ? `<button class="btn ghost sm" id="cl-back"><i class="ic">${CL_IC.back}</i>${t('clBack')}</button>` : `<div class="seg">${tabs.map(([k, l]) => `<button data-cltab="${k}" class="${c.tab === k ? 'on' : ''}">${l}</button>`).join('')}</div>`}</div>
    ${body}`);
  bindClans();
}

function noClan(mine) {
  const R = mine.rules;
  const cost = R.free ? t('clFreePrem') : t('clCost', { n: R.cost });
  return `<div class="grid2 cl-grid">
    <div class="card accent"><div class="card-h"><i class="ic gold">${CL_IC.flag}</i><h3>${t('clCreate')}</h3></div>
      <form id="cl-new" class="col" style="gap:10px">
        <input id="cl-name" placeholder="${t('clNamePh')}" maxlength="24" autocomplete="off">
        <div class="row"><input id="cl-tag" placeholder="${t('clTagPh')}" maxlength="5" style="width:130px;text-transform:uppercase" autocomplete="off">
          <span class="mute cl-prev" id="cl-prev">${clanTagHtml({ clan: { tag: 'TAG' } })}<b>${esc(S.me.nick)}</b></span></div>
        <div class="mute" style="font-size:12.5px">${t('clCreateHint', { n: R.max })}</div>
        <div class="row"><button class="btn gold">${t('clCreateBtn')}</button><span class="mute">${cost}${!R.free && R.freePremium ? ' · ' + t('clOrPrem') : ''}</span></div>
        <div class="err" id="cl-err"></div></form></div>
    <div class="col" style="gap:16px">
      <div class="card"><div class="card-h"><h4>${t('clInvites')}</h4></div>
        ${mine.invites.length ? mine.invites.map(x => `<div class="pmem psr">${clanIcon(x)}<span class="grow"><b>${clanName(x)}</b><div class="mute" style="font-size:12px">${t('clInvitedBy', { n: esc(x.from) })} · ${x.members}/${x.max}</div></span>
          <button class="btn green sm" data-clyes="${x.id}">${t('accept')}</button><button class="btn ghost sm" data-clno="${x.id}">${t('decline')}</button></div>`).join('') : `<div class="mute" style="font-size:13px">${t('clNoInvites')}</div>`}</div>
      <div class="card cl-reward"><div class="card-h"><i class="ic gold">${CL_IC.star}</i><h4>${t('clRewardH')}</h4></div>
        <p class="mute" style="margin:0">${t('clRewardText', { n: R.reward.members, d: R.reward.days, kf: R.reward.kf })}</p>
        <div class="bprev" style="margin-top:10px">${bannerHtml('kz_clan_founders', 'bimg')}<span>${t('clFounders')}</span></div></div>
    </div></div>`;
}

function stat(label, value, sub) { return `<div class="cl-stat"><b>${value}</b><span>${label}</span>${sub ? `<i>${sub}</i>` : ''}</div>`; }
const ROLE_T = r => t('clRole_' + r);
const WAR_ST = w => t('clWar_' + w.state);

function clanDetail(c) {
  const my = S.cl.mine?.clan, isMine = my?.id === c.id, role = isMine ? my.myRole : null;
  const officer = role === 'owner' || role === 'officer', owner = role === 'owner';
  const iCanChallenge = !isMine && ['owner', 'officer'].includes(my?.myRole);
  const staff = S.me.staff || S.me.admin;
  const wl = `${c.cw.w}–${c.cw.l}`;
  const memberRow = m => {
    const acts = [];
    if (owner && m.id !== S.me.id) {
      acts.push(m.role === 'officer' ? `<button class="btn ghost xs" data-clrole="${m.id}:member">${t('clDemote')}</button>` : `<button class="btn ghost xs" data-clrole="${m.id}:officer">${t('clPromote')}</button>`);
      acts.push(`<button class="btn ghost xs" data-clrole="${m.id}:owner">${t('clTransfer')}</button>`);
    }
    if (officer && m.id !== S.me.id && m.role !== 'owner' && (owner || m.role === 'member')) acts.push(`<button class="btn ghost xs" data-clkick="${m.id}">${t('clKick')}</button>`);
    return `<div class="pmem psr cl-mem" data-prof="${m.id}">${avaF(m, 'sm')}<i class="dot ${m.online ? 'online' : 'offline'}"></i>
      <span class="num grow"><div class="nkl">${nickHtml(m)}</div><div class="mute" style="font-size:11.5px">${m.elo} ELO · ${t('level', { n: m.lvl })}</div></span>
      <span class="tag ${m.role === 'owner' ? 'gold' : ''}">${ROLE_T(m.role)}</span>${acts.join('')}</div>`;
  };
  const warRow = w => {
    const incoming = isMine && w.to.id === c.id, ours = isMine && [w.from.id, w.to.id].includes(c.id);
    const res = w.state === 'done' ? (w.winner === c.id ? `<span class="win">${t('clWon')} ${w.delta?.[c.id] > 0 ? '+' + w.delta[c.id] : ''}</span>` : `<span class="lose">${t('clLost')} ${w.delta?.[c.id] ?? ''}</span>`) : `<span class="mute">${WAR_ST(w)}</span>`;
    const btns = [];
    if (ours && officer && w.state === 'pending' && incoming) btns.push(`<button class="btn green xs" data-clwar-ok="${w.id}">${t('accept')}</button>`);
    if (ours && officer && ['pending', 'ready'].includes(w.state)) btns.push(`<button class="btn ghost xs" data-clwar-x="${w.id}">${incoming && w.state === 'pending' ? t('decline') : t('cancel')}</button>`);
    return `<div class="cl-war"><span class="tag">${w.mode}</span><b class="grow"><span class="cn">${clanName(w.from)}</span> <span class="mute">${t('vs')}</span> <span class="cn">${clanName(w.to)}</span></b>${res}${btns.join('')}
      <div class="mute cl-war-sub">${fmtDT(w.at)}${w.match ? ` · <a href="#" data-clmatch="${w.match}">#${w.match}</a>` : ''}${w.failed && w.state === 'pending' ? ' · ' + esc(w.failed) : ''}</div></div>`;
  };
  const hero = `<div class="cl-hero card">${bannerHtml(c.banner, 'cl-ban')}<div class="cl-hero-in">
      <div class="cl-emb">${clanIcon(c, 'big')}</div>
      <div class="grow" style="min-width:0"><h1 class="cl-title">${clanName(c)}</h1>
        <div class="mute">${c.desc ? esc(c.desc) : t('clNoDesc')}</div>
        <div class="tags">${c.partner ? `<span class="tag gold">${t('clPartner')}</span>` : ''}${c.reward ? `<span class="tag green">${t('clFoundersTag')}</span>` : ''}<span class="tag">${t('clSince', { d: fmtDate(c.created) })}</span>${role ? `<span class="tag">${ROLE_T(role)}</span>` : ''}</div></div>
      <div class="cl-acts">${iCanChallenge ? `<button class="btn gold" id="cl-chal"><i class="ic">${CL_IC.swords}</i>${t('clChallenge')}</button>` : ''}
        ${isMine && !owner ? `<button class="btn ghost sm" id="cl-leave">${t('clLeave')}</button>` : ''}${owner ? `<button class="btn ghost sm" id="cl-set">${t('clSettings')}</button>` : ''}</div></div>
    <div class="cl-stats">${stat(t('clMembers'), `${c.members.length ?? c.members}/${c.max}`)}${stat(t('clPower'), c.power, t('clPowerSub'))}${cwCal(c.cw) ? stat(t('clWarRating'), `<span class="cl-lvlrow">${clanLvlIcon(0, 30)}${t('la_cal', { n: c.cw.cal })}</span>`, `${wl} · ${t('clCalHint')}`) : stat(t('clWarRating'), `<span class="cl-lvlrow">${clanLvlIcon(c.cw.lvl, 30)}${c.cw.elo}</span>`, `${t('clLevel', { n: c.cw.lvl })} · ${wl}${c.cw.next ? ' · ' + t('clToNext', { n: c.cw.next - c.cw.elo }) : ''}`)}${stat(t('clTogether'), c.together, t('clTogetherSub'))}</div></div>`;
  const chat = isMine && c.chat ? `<div class="card cl-chat"><div class="card-h"><h4>${t('clChat')}</h4></div>
      <div class="log" data-scroll="clchat" id="cl-log">${c.chat.map(x => `<div><b>${esc(x.nick)}:</b> ${esc(x.text)}</div>`).join('') || `<span class="mute">${t('noMsgs')}</span>`}</div>
      <form class="row" id="cl-chatf" style="margin-top:8px"><input id="cl-msg" class="grow" maxlength="300" placeholder="${t('clChatPh')}" autocomplete="off"><button class="btn sm"><i class="ic">${CL_IC.send}</i></button></form></div>` : '';
  const invite = officer ? `<div class="card"><div class="card-h"><h4>${t('clInvite')}</h4></div>
      <div class="row"><input id="cl-q" class="grow" placeholder="${t('addFriendPh')}" autocomplete="off"><button class="btn ghost sm" id="cl-qgo">${t('search')}</button></div><div id="cl-qres"></div>
      ${c.invites?.length ? `<div class="mute" style="font-size:12px;margin-top:8px">${t('clPending')}: ${c.invites.map(i => esc(i.nick)).join(', ')}</div>` : ''}</div>` : '';
  const mod = staff ? `<div class="card cl-mod"><div class="card-h"><h4>${t('clMod')}</h4></div>
      <div class="row" style="flex-wrap:wrap"><input id="clm-tag" value="${esc(c.tag)}" maxlength="5" style="width:90px;text-transform:uppercase"><input id="clm-name" value="${esc(c.name)}" maxlength="24" class="grow">
        <button class="btn ghost sm" id="clm-ren">${t('clRename')}</button></div>
      <div class="row" style="margin-top:8px;flex-wrap:wrap">${S.me.admin || S.me.auditor ? `<button class="btn ${c.partner ? 'ghost' : 'gold'} sm" id="clm-partner">${c.partner ? t('clUnpartner') : t('clMakePartner')}</button>` : ''}
        <input id="clm-reason" class="grow" placeholder="${t('clReasonPh')}" maxlength="200">${c.avatar ? `<button class="btn ghost sm" id="clm-avx">${t('clAvatarOffStaff')}</button>` : ''}<button class="btn red sm" id="clm-dis">${t('clDisband')}</button></div></div>` : '';
  const log = c.log?.length ? `<details class="card cl-logc"><summary><h4 style="display:inline">${t('clLog')}</h4></summary>${c.log.map(x => `<div class="ds-li"><span class="mute">${fmtDT(x.at)}</span> <b>${esc(x.byNick || 'Konzte')}</b> ${esc(x.action)}${x.details ? ` <span class="mute">${esc(JSON.stringify(x.details)).slice(0, 120)}</span>` : ''}</div>`).join('')}</details>` : '';
  return `${hero}<div class="grid2 cl-grid">
    <div class="col" style="gap:16px"><div class="card"><div class="card-h"><h4>${t('clMembers')} · ${c.members.length}/${c.max}</h4></div>${c.members.map(memberRow).join('')}</div>${invite}</div>
    <div class="col" style="gap:16px"><div class="card"><div class="card-h"><i class="ic">${CL_IC.swords}</i><h4>${t('clWars')}</h4></div>${c.wars.length ? c.wars.map(warRow).join('') : `<div class="mute" style="font-size:13px">${t('clNoWars')}</div>`}</div>
      ${chat}${mod}${log}</div></div>`;
}

function clanTable(list) {
  const my = S.cl.mine?.clan;
  const canCh = ['owner', 'officer'].includes(my?.myRole);
  const sorts = [['power', t('clPower')], ['war', t('clWarRating')], ['members', t('clMembers')]];
  return `<div class="row" style="margin-bottom:12px"><span class="mute">${t('clSortBy')}</span><div class="seg sm">${sorts.map(([k, l]) => `<button data-clsort="${k}" class="${S.cl.sort === k ? 'on' : ''}">${l}</button>`).join('')}</div></div>
    ${list.length ? `<table class="lb cl-lb"><thead><tr><th>#</th><th>${t('clClan')}</th><th>${t('clMembers')}</th><th>${t('clPower')}</th><th>${t('clWarRating')}</th><th>${t('clTogether')}</th><th></th></tr></thead><tbody>
      ${list.map(x => `<tr class="${x.id === my?.id ? 'me' : ''}" data-clopen="${x.id}"><td class="num">${x.place}</td>
        <td><div class="row" style="gap:10px">${clanIcon(x, '', true)}<b>${clanName(x)}</b></div></td>
        <td>${x.members}/${x.max}</td><td class="num">${x.power}</td><td class="cl-cwcell">${cwShort(x.cw)} <span class="mute">${x.cw.w}–${x.cw.l}</span></td><td>${x.together}</td>
        <td>${canCh && x.id !== my.id ? `<button class="btn ghost xs" data-clch="${x.id}">${t('clChallenge')}</button>` : ''}</td></tr>`).join('')}</tbody></table>` : `<div class="card empty-note">${t('clNone')}</div>`}`;
}

function partnersTab(list) {
  return `<div class="card cl-pinfo"><div class="card-h"><i class="ic gold">${PARTNER_SVG}</i><h3>${t('clPartnersH')}</h3></div><p class="mute" style="margin:0">${t('clPartnersText')}</p></div>
    <div class="cl-pgrid">${list.map(x => `<div class="card cl-pcard" data-clopen="${x.id}">${bannerHtml(x.banner, 'cl-ban')}<div class="cl-pin">${clanIcon(x, 'big')}
      <div><b>${clanName(x)}</b><div class="mute">${x.members}/${x.max} · ${t('clPower')} ${x.power} · ${t('clWarRating')} ${cwCal(x.cw) ? t('la_calShort', { n: x.cw.cal }) : `${t('clLevel', { n: x.cw.lvl })} · ${x.cw.elo}`}</div></div></div></div>`).join('') || `<div class="card empty-note">${t('clNoPartners')}</div>`}</div>`;
}

function rosterModal(title, n, modes, onOk) {
  const c = S.cl.mine.clan;
  let mode = modes[0];
  const sel = new Set([S.me.id]);
  const draw = box => {
    const need = mode === '2v2' ? 2 : 5;
    box.querySelector('#rs-body').innerHTML = `${modes.length > 1 ? `<div class="seg sm" style="margin-bottom:10px">${modes.map(m => `<button data-rsm="${m}" class="${m === mode ? 'on' : ''}">${m === '2v2' ? '2 × 2' : '5 × 5'}</button>`).join('')}</div>` : ''}
      <div class="mute" style="margin-bottom:8px">${t('clPickN', { n: need, k: sel.size })}</div>
      ${c.members.map(m => `<label class="pmem psr rs-row ${sel.has(m.id) ? 'on' : ''}"><input type="checkbox" data-rs="${m.id}" ${sel.has(m.id) ? 'checked' : ''}>${ava(m, 'sm')}<span class="grow">${nickHtml(m)}</span><i class="dot ${m.online ? 'online' : 'offline'}"></i><span class="mute">${m.elo}</span></label>`).join('')}`;
    box.querySelector('#rs-ok').disabled = sel.size !== need;
    box.querySelectorAll('[data-rsm]').forEach(b => b.onclick = () => { mode = b.dataset.rsm; draw(box); });
    box.querySelectorAll('[data-rs]').forEach(i => i.onchange = () => { i.checked ? sel.add(i.dataset.rs) : sel.delete(i.dataset.rs); draw(box); });
  };
  modal(`<div class="card accent col" style="width:520px;max-height:84vh;overflow:auto"><h2>${esc(title)}</h2><div id="rs-body"></div>
    <div class="err" id="rs-err"></div><div class="row"><button class="btn gold" id="rs-ok">${t('clSend')}</button><button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, box => {
    draw(box);
    box.querySelector('#rs-ok').onclick = async () => { try { await onOk([...sel], mode); closeModal(); loadClans(); } catch (e) { box.querySelector('#rs-err').textContent = e.message; } };
  });
}

function pickerModal(kind, list, cur, onPick) {
  modal(`<div class="card accent col" style="width:760px;max-height:84vh;overflow:auto"><h2>${t(kind === 'banner' ? 'clPickBanner' : 'clPickEmblem')}</h2>
    <div class="invgrid ${kind === 'banner' ? 'wide' : ''}">${['', ...list].map(id => `<button class="card cl-pick ${id === cur ? 'on' : ''}" data-pk="${esc(id)}">${!id ? `<span class="mute">${t('clNoneItem')}</span>` : kind === 'banner' ? `<div class="bprev">${bannerHtml(id, 'bimg')}</div>` : emblemHtml(id, 'big')}</button>`).join('')}</div>
    <div class="row"><button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, box => {
    box.querySelectorAll('[data-pk]').forEach(b => b.onclick = run(async () => { await onPick(b.dataset.pk); closeModal(); }));
  });
}

function settingsModal(c) {
  modal(`<div class="card accent col" style="width:520px"><h2>${t('clSettings')}</h2>
    <label class="mute">${t('clDesc')}</label><textarea id="cs-desc" rows="3" maxlength="300">${esc(c.desc || '')}</textarea>
    <div class="cl-avset"><div class="cl-avprev">${clanIcon(c, 'big')}</div><div class="col" style="gap:6px"><b>${t('clAvatar')}</b><span class="mute" style="font-size:12px">${t('clAvatarHint')}</span>
      <div class="row"><button class="btn sm" id="cs-av">${t('clAvatarUp')}</button>${c.avatar ? `<button class="btn ghost sm" id="cs-avx">${t('clAvatarOff')}</button>` : ''}<input type="file" id="cs-avf" accept="image/png,image/jpeg,image/gif,image/webp" hidden></div></div></div>
    <div class="row"><button class="btn ghost sm" id="cs-emb">${t('clPickEmblem')}</button><button class="btn ghost sm" id="cs-ban">${t('clPickBanner')}</button></div>
    <div class="mute" style="font-size:12px">${t('clCosHint')}</div>
    <div class="err" id="cs-err"></div>
    <div class="row"><button class="btn" id="cs-save">${t('save')}</button><button class="btn ghost" data-close>${t('cancel')}</button><span class="grow"></span><button class="btn red sm" id="cs-dis">${t('clDisband')}</button></div></div>`, box => {
    const upd = body => api('/api/clan/update', body).then(r => { S.cl.mine = r; refresh(); });
    box.querySelector('#cs-save').onclick = run(async () => { await upd({ desc: box.querySelector('#cs-desc').value }); closeModal(); toast(t('saved')); });
    box.querySelector('#cs-av').onclick = () => box.querySelector('#cs-avf').click();
    box.querySelector('#cs-avf').onchange = run(async e => {
      const f = e.target.files[0]; if (!f) return;
      if (f.size > 2 << 20) throw new Error(t('clAvatarBig'));
      const data = await new Promise((ok, bad) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = bad; r.readAsDataURL(f); });
      S.cl.mine = await api('/api/clan/avatar', { data }); toast(t('clAvatarSaved')); closeModal(); refresh(); settingsModal(S.cl.mine.clan);
    });
    if (box.querySelector('#cs-avx')) box.querySelector('#cs-avx').onclick = run(async () => { S.cl.mine = await api('/api/clan/avatar', { reset: true }); closeModal(); refresh(); settingsModal(S.cl.mine.clan); });
    box.querySelector('#cs-emb').onclick = () => pickerModal('emblem', c.choices?.emblems || [], c.emblem, id => upd({ emblem: id }));
    box.querySelector('#cs-ban').onclick = () => pickerModal('banner', c.choices?.banners || [], c.banner, id => upd({ banner: id }));
    box.querySelector('#cs-dis').onclick = run(async () => { if (!confirm(t('clDisbandQ', { n: c.name }))) return; S.cl.mine = await api('/api/clan/disband', {}); closeModal(); refresh(); });
  });
}

function bindClans() {
  const one = (sel, fn) => { const el = $(sel); if (el) el.onclick = run(fn); };
  const all = (sel, fn) => document.querySelectorAll(sel).forEach(b => b.onclick = run(async e => { e.stopPropagation(); e.preventDefault?.(); await fn(b, e); }));
  all('[data-cltab]', b => { S.cl.tab = b.dataset.cltab; refresh(); });
  one('#cl-back', () => { S.cl.view = null; S.cl.other = null; refresh(); });
  all('[data-clsort]', b => { S.cl.sort = b.dataset.clsort; loadClans(); });
  document.querySelectorAll('[data-clopen]').forEach(r => r.onclick = () => openClan(r.dataset.clopen));
  document.querySelectorAll('.cl-mem[data-prof]').forEach(r => r.onclick = e => { if (!e.target.closest('button')) go('profile', r.dataset.prof); });
  all('[data-clmatch]', async b => { const m = await api('/api/match?id=' + b.dataset.clmatch); S.finishedMatch = m; S.backAt = 0; go('play'); });
  const tagIn = $('#cl-tag');
  if (tagIn) tagIn.oninput = () => { $('#cl-prev').innerHTML = `${clanTagHtml({ clan: { tag: tagIn.value.toUpperCase() || 'TAG' } })}<b>${esc(S.me.nick)}</b>`; };
  if ($('#cl-new')) $('#cl-new').onsubmit = async e => {
    e.preventDefault();
    const R = S.cl.mine.rules;
    if (!R.free && !confirm(t('clCreateQ', { n: R.cost }))) return;
    try { S.cl.mine = await api('/api/clan/create', { name: $('#cl-name').value, tag: $('#cl-tag').value }); sfx('ach'); toast(t('clCreated')); loadClans(); }
    catch (err) { $('#cl-err').textContent = err.message; }
  };
  all('[data-clyes]', async b => { S.cl.mine = await api('/api/clan/answer', { clan: b.dataset.clyes, yes: true }); sfx('join'); loadClans(); });
  all('[data-clno]', async b => { S.cl.mine = await api('/api/clan/answer', { clan: b.dataset.clno, yes: false }); refresh(); });
  all('[data-clrole]', async b => {
    const [uid, role] = b.dataset.clrole.split(':');
    if (role === 'owner' && !confirm(t('clTransferQ'))) return;
    S.cl.mine = await api('/api/clan/role', { uid, role }); refresh();
  });
  all('[data-clkick]', async b => { if (!confirm(t('clKickQ'))) return; S.cl.mine = await api('/api/clan/kick', { uid: b.dataset.clkick }); refresh(); });
  one('#cl-leave', async () => { if (!confirm(t('clLeaveQ'))) return; S.cl.mine = await api('/api/clan/leave', {}); refresh(); });
  one('#cl-set', () => settingsModal(S.cl.mine.clan));
  const challenge = id => {
    const target = S.cl.list.list.find(x => x.id === id) || S.cl.other;
    rosterModal(t('clChallengeT', { n: target ? `[${target.tag}] ${target.name}` : '' }), 5, S.cl.mine.clan.warModes || ['5v5'],
      async (roster, mode) => { await api('/api/clan/challenge', { clan: id, mode, roster }); toast(t('clChallengeSent')); });
  };
  one('#cl-chal', () => challenge(S.cl.view));
  all('[data-clch]', b => challenge(b.dataset.clch));
  all('[data-clwar-ok]', b => {
    const w = S.cl.mine.clan.wars.find(x => x.id === b.dataset.clwarOk);
    rosterModal(t('clAcceptT', { n: `[${w.from.tag}] ${w.from.name}` }), 5, [w.mode], async roster => { await api('/api/clan/respond', { war: w.id, roster }); toast(t('clWarStarting')); });
  });
  all('[data-clwar-x]', async b => { await api('/api/clan/respond', { war: b.dataset.clwarX, cancel: true }); loadClans(); });
  if ($('#cl-chatf')) $('#cl-chatf').onsubmit = run(async e => { e.preventDefault(); const v = $('#cl-msg').value.trim(); if (!v) return; $('#cl-msg').value = ''; await api('/api/clan/chat', { text: v }); });
  const log = $('#cl-log'); if (log) log.scrollTop = log.scrollHeight;
  const search = run(async () => {
    const list = await api('/api/players/search?q=' + encodeURIComponent($('#cl-q').value));
    $('#cl-qres').innerHTML = list.filter(p => p.id !== S.me.id).map(p => `<div class="pmem">${avaF(p, 'sm')}<span class="num grow">${nickHtml(p)}</span>
      ${p.clan ? `<span class="mute">${t('clInClan')}</span>` : `<button class="btn sm" data-clinv="${p.id}">${t('invite')}</button>`}</div>`).join('') || `<div class="empty-note">${t('clNotFound')}</div>`;
    all('[data-clinv]', async b => { await api('/api/clan/invite', { uid: b.dataset.clinv }); b.replaceWith(Object.assign(document.createElement('span'), { className: 'tag', textContent: t('inviteSent') })); });
  });
  if ($('#cl-qgo')) { $('#cl-qgo').onclick = search; $('#cl-q').onkeydown = e => { if (e.key === 'Enter') search(); }; }
  const cur = () => S.cl.other || S.cl.mine.clan;
  one('#clm-ren', async () => { await api('/api/staff/clan', { id: cur().id, tag: $('#clm-tag').value.toUpperCase(), name: $('#clm-name').value }); toast(t('saved')); loadClans(); });
  one('#clm-avx', async () => { if (!confirm(t('clAvatarOffQ'))) return; await api('/api/staff/clan', { id: cur().id, avatarOff: true, reason: $('#clm-reason')?.value || '' }); toast(t('saved')); loadClans(); });
  one('#clm-partner', async () => { await api('/api/staff/clan', { id: cur().id, partner: !cur().partner }); toast(t('saved')); loadClans(); });
  one('#clm-dis', async () => {
    const reason = $('#clm-reason').value.trim();
    if (!reason) return toast(t('clReasonNeed'), true);
    if (!confirm(t('clDisbandQ', { n: cur().name }))) return;
    await api('/api/staff/clan', { id: cur().id, disband: true, reason }); S.cl.view = null; S.cl.other = null; loadClans();
  });
}

const _connectB = connect;
connect = function () {
  _connectB();
  const ws = S.ws;
  if (ws && !ws._laneB) {
    ws._laneB = true;
    ws.addEventListener('message', e => { let m; try { m = JSON.parse(e.data); } catch { return; } try { onLaneB(m); } catch (err) { console.error(err); } });
  }
};
function onLaneB(m) {
  if (m.t === 'bonus' && m.kind === 'firstGame') { toast(t('firstGameBonus', { n: m.nick, kf: m.kf })); sfx('coin'); return; }
  if (m.t !== 'clan') return;
  const open = () => { S.cl.tab = 'mine'; go('clans'); };
  if (m.ev === 'chat') {
    const c = S.cl.mine?.clan;
    if (c && c.id === m.clan) { c.chat = [...(c.chat || []), m.msg].slice(-60); if (S.page === 'clans' && !S.cl.view) refresh(); }
    if (m.msg.uid !== S.me?.id && S.page !== 'clans') sfx('msg', true);
    return;
  }
  if (m.ev === 'invite') { actionToast(t('clInviteToast', { n: m.from, c: `[${m.tag}] ${m.name}` }), [[t('clOpen'), open]]); sfx('clan_invite'); K.attention?.(t('clInviteToast', { n: m.from, c: m.tag })); }
  else if (m.ev === 'challenge') { actionToast(t('clChallengeToast', { c: `[${m.tag}] ${m.name}`, m: m.mode }), [[t('clOpen'), open]]); sfx('clan_challenge'); K.attention?.(t('clChallengeToast', { c: m.tag, m: m.mode })); }
  else if (m.ev === 'reward') { toast(t('clRewardToast', { n: m.members, kf: m.kf })); sfx('ach'); }
  else if (m.ev === 'kicked') toast(t('clKickedToast', { c: m.tag }), true);
  else if (m.ev === 'disband') toast(t('clDisbandToast', { c: m.tag }), true);
  else if (m.ev === 'war' && m.state === 'ready') toast(t('clWarStarting'));
  else if (m.ev === 'war' && m.state === 'failed') toast(t('clWarFailed'), true);
  if (S.page === 'clans') loadClans(true);
}

const _renderPlayB = renderPlay;
renderPlay = function () {
  const r = _renderPlayB.apply(this, arguments);
  const m = S.live?.match || (S.page === 'play' ? S.finishedMatch : null);
  const cw = m?.clanWar;
  const page = $('#view .page');
  if (cw && page && !page.querySelector('.cl-warbar')) {
    const el = document.createElement('div');
    el.className = 'cl-warbar';
    el.innerHTML = `<i class="ic">${CL_IC.swords}</i><b>${t('clWarMatch')}</b><span class="alfa">${clanName(cw.A || { tag: '?', name: '' })}</span><span class="mute">${t('vs')}</span><span class="bravo">${clanName(cw.B || { tag: '?', name: '' })}</span>`;
    page.prepend(el);
  }
  return r;
};

const _renderProfileB = renderProfile;
renderProfile = async function () {
  const r = await _renderProfileB.apply(this, arguments);
  const p = S.profCache;
  const tags = $('#view .tags');
  if (S.page === 'profile' && p?.clan && tags && !tags.querySelector('.cl-chip')) {
    const el = document.createElement('a');
    el.href = '#'; el.className = 'tag cl-chip'; el.innerHTML = `${clanName(p.clan)}${p.clan.role ? `<span class="mute">· ${ROLE_T(p.clan.role)}</span>` : ''}`; el.title = t('clClan');
    el.onclick = e => { e.preventDefault(); openClan(p.clan.id); };
    tags.prepend(el);
  }
  return r;
};

const _showRegisterB = showRegister;
showRegister = function () { const r = _showRegisterB.apply(this, arguments); $('#r-ref')?.setAttribute('maxlength', '16'); return r; };

S.cr = { mine: null, mineAt: 0, all: null, allAt: 0 };
const _renderReferralsB = renderReferrals;
renderReferrals = function () {
  const r = _renderReferralsB.apply(this, arguments);
  $('#ref-in')?.setAttribute('maxlength', '16');
  const page = $('#view .page');
  if (!page || !S.ref) return r;
  if (S.me.creator) {
    if (Date.now() - S.cr.mineAt > 30_000) { S.cr.mineAt = Date.now(); api('/api/creator').then(x => { S.cr.mine = x; if (S.page === 'referrals') refresh(); }).catch(() => {}); }
    if (S.cr.mine) page.insertAdjacentHTML('beforeend', creatorCard(S.cr.mine));
  }
  if (S.me.admin) {
    if (Date.now() - S.cr.allAt > 30_000) { S.cr.allAt = Date.now(); api('/api/admin/creators').then(x => { S.cr.all = x; if (S.page === 'referrals') refresh(); }).catch(() => {}); }
    if (S.cr.all) page.insertAdjacentHTML('beforeend', creatorsAdminCard(S.cr.all));
  }
  bindCreator();
  return r;
};
const money = (n, cur) => `${Number(n || 0).toFixed(2)} ${esc(cur || 'USD')}`;
function creatorCard(s) {
  return `<div class="card accent cr-card cr2-link-card" style="margin-top:16px"><img class="cr-badge" src="assets/badge/creator.png" alt="">
    <div class="grow"><h3 style="margin:0 0 4px">${t('crTitle')}</h3><span class="mute">${t('crCodeL')}: <b class="cr-code">${esc(s.code)}</b> · ${money(s.earned, s.currency)} · ${s.signups} ${t('crSignups').toLowerCase()}</span></div>
    <button class="btn gold" id="cr-open">${window.KZCreator ? KZCreator.tab() : t('crTitle')} →</button></div>`;
}
function creatorsAdminCard(list) {
  return `<div class="card cr-admin" style="margin-top:16px"><div class="card-h"><img class="cr-badge" src="assets/badge/creator.png" alt=""><h3>${t('crAdminTitle')}</h3></div>
    <p class="mute" style="margin:-6px 0 12px">${t('crAdminHint')}</p>
    ${list.length ? `<table class="lb cr-tbl"><thead><tr><th>${t('crPlayer')}</th><th>${t('crCodeL')}</th><th>%</th><th>${t('crSignups')}</th><th>${t('crActive')}</th><th>${t('crRevenue')}</th><th>${t('crPaid')}</th><th>${t('crOwed')}</th><th></th></tr></thead><tbody>
      ${list.map(x => `<tr><td><a href="#" data-crprof="${x.id}">${esc(x.nick)}</a>${x.off ? ` <span class="tag red">${t('crOff')}</span>` : ''}</td><td><b>${esc(x.code)}</b></td><td>${x.share}</td><td>${x.signups}</td><td>${x.active}</td>
        <td>${money(x.revenue, x.currency)}</td><td>${money(x.paid, x.currency)}</td><td class="${x.owed > 0 ? 'gold-t' : ''}">${money(x.owed, x.currency)}</td>
        <td class="row" style="gap:4px">${x.owed > 0 ? `<button class="btn green xs" data-crpay="${x.id}" data-owed="${x.owed}">${t('crMarkPaid')}</button>` : ''}<button class="btn ghost xs" data-credit="${x.id}">${t('edit')}</button>${x.off ? '' : `<button class="btn ghost xs" data-croff="${x.id}">${t('crDisable')}</button>`}</td></tr>`).join('')}</tbody></table>` : `<div class="mute">${t('crNone')}</div>`}
    <div class="row" style="margin-top:12px"><input id="cr-q" class="grow" placeholder="${t('crAddPh')}" autocomplete="off"><button class="btn ghost sm" id="cr-qgo">${t('search')}</button></div><div id="cr-qres"></div></div>`;
}
function creatorEdit(uid, nick, cur) {
  modal(`<div class="card accent col" style="width:420px"><h2>${t('crMake')} · ${esc(nick)}</h2>
    <label class="mute">${t('crCodeL')}</label><input id="cre-code" maxlength="16" value="${esc(cur?.code || '')}" placeholder="${t('crCodePh')}" style="text-transform:uppercase">
    <label class="mute">${t('crShareL')}</label><input id="cre-share" type="number" min="0" max="100" value="${cur?.share ?? 20}">
    <div class="err" id="cre-err"></div><div class="row"><button class="btn gold" id="cre-ok">${t('save')}</button><button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, box => {
    box.querySelector('#cre-ok').onclick = async () => {
      try { await api('/api/admin/creator', { uid, code: box.querySelector('#cre-code').value, share: +box.querySelector('#cre-share').value }); closeModal(); S.cr.allAt = 0; toast(t('saved')); refresh(); }
      catch (e) { box.querySelector('#cre-err').textContent = e.message; }
    };
  });
}
function bindCreator() {
  const all = (sel, fn) => document.querySelectorAll(sel).forEach(b => b.onclick = run(async e => { e.preventDefault(); e.stopPropagation(); await fn(b); }));
  if ($('#cr-open')) $('#cr-open').onclick = () => window.KZPartnerOpen?.();
  all('[data-crcopy]', b => { navigator.clipboard.writeText(b.dataset.crcopy); toast(t('copied', { t: b.dataset.crcopy })); });
  all('[data-crprof]', b => go('profile', b.dataset.crprof));
  document.querySelectorAll('.cr-tbl tr[data-prof]').forEach(r => r.onclick = () => go('profile', r.dataset.prof));
  all('[data-crpay]', async b => {
    const v = prompt(t('crPayQ'), b.dataset.owed);
    if (v == null) return;
    await api('/api/admin/creator-paid', { uid: b.dataset.crpay, amount: +String(v).replace(',', '.') });
    S.cr.allAt = 0; toast(t('saved')); refresh();
  });
  all('[data-credit]', b => { const x = S.cr.all.find(y => y.id === b.dataset.credit); creatorEdit(x.id, x.nick, x); });
  all('[data-croff]', async b => { if (!confirm(t('crDisableQ'))) return; await api('/api/admin/creator', { uid: b.dataset.croff, off: true }); S.cr.allAt = 0; refresh(); });
  const search = run(async () => {
    const list = await api('/api/players/search?q=' + encodeURIComponent($('#cr-q').value));
    $('#cr-qres').innerHTML = list.map(p => `<div class="pmem">${avaF(p, 'sm')}<span class="num grow">${nickHtml(p)}</span><button class="btn sm" data-crmk="${p.id}" data-nick="${esc(p.nick)}">${t('crMake')}</button></div>`).join('') || `<div class="empty-note">${t('clNotFound')}</div>`;
    all('[data-crmk]', b => creatorEdit(b.dataset.crmk, b.dataset.nick));
  });
  if ($('#cr-qgo')) { $('#cr-qgo').onclick = search; $('#cr-q').onkeydown = e => { if (e.key === 'Enter') search(); }; }
}

const FN_GAP = 30 * 60_000, fnLast = new Map();
const _onStateB = onState;
onState = function (st) {
  const prev = S.live;
  const r = _onStateB.apply(this, arguments);
  try { friendNotify(prev, st); } catch (e) { console.error(e); }
  return r;
};
function friendNotify(prev, st) {
  const c = S.cfg || {};
  if (!prev?.friends?.list || !st.friends?.list || st.match || st.ready) return;
  const was = new Map(prev.friends.list.map(x => [x.id, x.status]));
  for (const x of st.friends.list) {
    const old = was.get(x.id);
    if (!old || old === x.status) continue;
    let kind = null;
    if (x.status === 'queue' && (old === 'online' || old === 'offline') && c.fnQueue !== false) kind = 'queue';
    else if (old === 'offline' && x.status === 'online' && c.fnOnline !== false) kind = 'online';
    if (!kind || Date.now() - (fnLast.get(x.id) || 0) < FN_GAP) continue;
    fnLast.set(x.id, Date.now());
    const inMyParty = st.party?.members.some(m => m.id === x.id);
    const acts = inMyParty ? [] : kind === 'queue'
      ? [[t('fnJoin'), async () => { const r = await api('/api/friends/join-party', { uid: x.id }); toast(r.joined ? t('fnJoined', { n: x.nick }) : t('inviteSent')); }]]
      : [[t('invite'), () => { wsSend({ t: 'party-invite', uid: x.id }); toast(t('inviteSent')); }]];
    actionToast(t(kind === 'queue' ? 'fnQueue' : 'fnOnline', { n: x.nick }), acts);
    if (c.fnSound !== false) sfx('friend_online'); else if (c.uiSounds !== false) {  }
  }
}

const _renderSettingsB = renderSettings;
renderSettings = async function () {
  const r = await _renderSettingsB.apply(this, arguments);
  const panel = $('#view .setpanel');
  if (S.page !== 'settings' || S.setTab !== 'notif' || !panel || panel.querySelector('[data-fnsw]')) return r;
  const c = S.cfg || {};
  const sw = (k, on) => `<button class="switch ${on ? 'on' : ''}" data-fnsw="${k}"></button>`;
  const row = (label, hint, ctl) => `<div class="srow"><div><b>${label}</b>${hint ? `<span>${hint}</span>` : ''}</div><div>${ctl}</div></div>`;
  panel.insertAdjacentHTML('beforeend', `${row(t('fnSetOnline'), t('fnSetOnlineH'), sw('fnOnline', c.fnOnline !== false))}
    ${row(t('fnSetQueue'), t('fnSetQueueH'), sw('fnQueue', c.fnQueue !== false))}${row(t('fnSetSound'), '', sw('fnSound', c.fnSound !== false))}`);
  panel.querySelectorAll('[data-fnsw]').forEach(b => b.onclick = run(async () => { await setCfg({ [b.dataset.fnsw]: !b.classList.contains('on') }); refresh(); }));
  return r;
};

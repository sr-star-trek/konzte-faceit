const K = window.konzte;
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const MAP_NAMES = { TrainYard: 'Train Yard', Warehouse: 'Warehouse' };
const MAPS = ['Caribbean', 'Drain', 'Egypt', 'Fuji', 'Highrise', 'Museum', 'Subway', 'TrainYard', 'Warehouse'];
const MAPS_2V2_ONLY = ['Drain', 'Fuji'];
const matchMaps = m => m?.maps?.length ? [...m.maps].sort((a, b) => MAPS.indexOf(a) - MAPS.indexOf(b))
  : MAPS.filter(x => (x !== 'Warehouse' || m?.mode !== '5v5') && (!MAPS_2V2_ONLY.includes(x) || m?.mode === '2v2'));
const LEVELS = [0, 100, 500, 750, 900, 1050, 1200, 1350, 1530, 1750, 2000];
const mapName = m => MAP_NAMES[m] || m;
const mapImg = m => `assets/maps/${m}.jpg`;
const lvlImg = l => `assets/lvl/lvl${l ?? 0}.png`;
const isCal = r => r?.cal != null;
const lvlIc = (r, l) => isCal(r) ? 'assets/lvl/cal.svg' : lvlImg(l);
const calTxt = r => t('la_cal', { n: r.cal });
const TEAM = { A: 'Alfa', B: 'Bravo' };

const SHOP_BANNERS = ['dragon', 'topo', 'snake', 'fade', 'masters', 'primal', 'monolith', 'digital', 'woodland', 'splinter', 'maze', 'stripes'].map(x => 's_' + x);
const SHOP_FRAMES = ['dragon', 'snake', 'fade', 'masters', 'monolith', 'digital', 'maze', 'stripes'].map(x => 's_' + x);
const SEASON_BANNERS = [...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => 's1_top' + n), ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => 's1_2v2_top' + n), 's1_recruiter',
  ...[1, 2, 3, 4, 5].map(n => 'a3_s2_top' + n), ...[1, 2, 3].map(n => 'a3_s2_2v2_top' + n)];
const SHOP_ANIM_BANNERS = ['a2_kz_relic', 'a2_kz_chains', 'a2_kz_obsidian', 'a2_kz_violet'];
const A3_FRAMES = { a3_heli_drop: 36, a3_night_raid: 36, a3_night_flight: 36, a3_snow_rig: 36 };
const BANNERS = [...SHOP5.BANNERS, ...SHOP4.BANNERS, ...SHOP3.BANNERS, ...GRANT_BANNERS, ...(typeof XMAS !== 'undefined' ? XMAS.BANNERS : []), ...SEASON_BANNERS, ...PASS_BANNERS, ...SHOP_ANIM_BANNERS, 'p1', 'p2', 'p3', 'c_scuba', 'c_squad', 'c_snd', 'c_arms', 'c_topo', 'p4', 'p5', 'c_anime', 'c_blue', 'c_cobra', ...SHOP_BANNERS, 'c_wolf', 'c_para', 'c_pokrovsk', 'c_dance', 'c_s2', 'c_reaper', 'c_purpledemonface', 'c_eaglelightning', 'c_girldemonredmoon', 'c_viperflame', 'c_plaguemask', 'c_gladiatorfight', 'c_blaze', 'c_explosionguy', 'c_soldierorangesmoke', 'c_shotgunreload', 'c_pizzadelivery', ...BANNERS_ANIM2, 'a_dawn', 'a_victory', 'a_veteran', 'a_flame', 'a_elite', 'a_legend'];
const FRAMES = [...SHOP5.FRAMES, ...SHOP4.FRAMES, ...SHOP3.FRAMES, ...(typeof XMAS !== 'undefined' ? XMAS.FRAMES : []), ...PASS_FRAMES, 'p1', 'p2', ...SHOP_FRAMES, 'a_bronze', 'a_silver', 'a_gold', 'a_platinum', 'a_duel', 'a_fire', 'a_diamond'];
const bannerCss = id => !id ? '' : /^p\d/.test(id) ? `background-image:url(assets/banner/b${id.slice(1)}.png)` : `background-image:url(assets/banner/${id}.jpg)`;
const BANNER_ANIM = { c_dance: ['dance', 'dance', 'dance'], c_s2: ['s2', 'helmet'], a_legend: ['helmet'] };
const bannerHtml = (id, cls) => !id ? '' : `<div class="${cls} ban" style="${bannerCss(id)}">${/^a[23]_/.test(id) ? `<i class="cca${id[1] === '3' ? ' full' + (A3_FRAMES[id] ? ' f' + A3_FRAMES[id] : '') : ''}" style="background-image:url(assets/ccanim/${id.slice(3)}.jpg)"></i>` : ''}${BANNER_ANIM[id]
  ? `<div class="sprs">${BANNER_ANIM[id].map((s, i) => `<i class="spr spr-${s}" style="--d:-${i * 0.37}s"></i>`).join('')}</div>` : ''}</div>`;
const emblemHtml = (id, cls = '') => !id ? '' : `<i class="emb ${cls} ${EMBLEMS_ANIM.has(id) ? 'anim' : ''}" style="background-image:url(assets/emblem/${id}.png)" title="${esc(id.replace(/_/g, ' '))}"></i>`;
const crown = (tier, lvl) => !tier ? '' : lvl == null ? `<img class="crown" src="assets/crown-${tier}.png" title="${tier === 'plus' ? 'Premium+' : 'Premium'}">`
  : `<img class="crown px3-pcrown px3-c${Math.max(0, Math.min(5, lvl | 0))}" data-px="${lvl | 0}" src="assets/crown-px${Math.max(0, Math.min(5, lvl | 0))}.png" title="${tier === 'plus' ? 'Premium+' : 'Premium'}${window.PXP3 ? ' · ' + esc(PXP3.name(lvl)) : ''}">`;
const BADGE_SVG = {
  verified: '<svg viewBox="0 0 24 24"><path class="f" d="M12 2l2.4 1.8 3-.2 1 2.8 2.6 1.6-.8 2.9.8 2.9-2.6 1.6-1 2.8-3-.2L12 22l-2.4-1.8-3 .2-1-2.8L3 16l.8-2.9L3 10.2l2.6-1.6 1-2.8 3 .2z"/><path d="M8 12.3l2.6 2.5 5.4-5.4"/></svg>',
  dev: '<svg viewBox="0 0 24 24"><rect class="f" x="2.5" y="4" width="19" height="16" rx="4"/><path d="M9.5 9L6.5 12l3 3M14.5 9l3 3-3 3"/></svg>',
  staff: '<svg viewBox="0 0 24 24"><path class="f" d="M12 2.5l8 3v6c0 4.8-3.4 8.5-8 10-4.6-1.5-8-5.2-8-10v-6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
  pro: '<svg viewBox="0 0 24 24"><path class="f" d="M5 3h14v5a7 7 0 0 1-14 0z"/><path d="M12 15v3M8 21h8M5 5H2.5a3 3 0 0 0 3 4M19 5h2.5a3 3 0 0 1-3 4"/></svg>',
};
const BADGE_PNG = ['owner', 'admin', 'staff', 'verified', 'guard'];
const badgeIcon = b => BADGE_PNG.includes(b) ? `<img src="assets/badge/${b}.png" alt="">` : (BADGE_SVG[b] || '');
const badges = p => (p.badges || []).map(b => `<i class="bdg bdg-${b}" title="${t('badge_' + b)}">${badgeIcon(b)}</i>`).join('');
const nickHtml = p => `${emblemHtml(p.prem?.emblem)}${typeof clanTagHtml === 'function' ? clanTagHtml(p) : ''}<span class="nk-t" ${typeof lcNickAttr === 'function' && p.lc?.nc ? lcNickAttr(p) : p.prem?.color ? `style="color:${esc(p.prem.color)}"` : ''}>${esc(p.nick)}</span>${typeof lcNickTail === 'function' ? lcNickTail(p) : ''}${crown(p.prem?.tier, p.prem?.pxl)}${badges(p)}`;
const avaF = (p, cls = '', frame = p.prem?.frame) => {
  if (!frame) return ava(p, cls);
  return `<span class="fava ${cls} fr-${frame}">${ava(p, cls)}${frame.startsWith('p') ? `<img class="fimg" src="assets/frame/f${frame.slice(1)}.png">` : /^(s|k3|k4|k5|kx)_/.test(frame) ? `<img class="fimg" src="assets/frame/${frame}.png">` : frame.startsWith('k_') ? `<img class="fimg" src="assets/frame/${frame}.webp">` : ''}</span>`;
};
const banAva = p => `<span class="fava lg ban-ava" title="${esc(p.ban?.reason || '')}">${ava(p, 'lg')}<span class="ban-stamp">${kzPick({ en: 'BANNED', uk: 'БАН', ru: 'БАН' })}</span></span>`;
function cosmeticSource(kind, id) {
  const pi = S.premInfo;
  if (S.shop?.items?.some(x => x.id === id && x.kind + 's' === kind)) return t('srcShop');
  if (/^Konzte_/.test(id)) return t('srcSeasonReward');
  if (PASS_FRAMES.includes(id) || PASS_BANNERS.includes(id)) return t('srcPassReward');
  if (typeof XMAS !== 'undefined' && [...XMAS.BANNERS, ...XMAS.FRAMES, ...XMAS.AVATARS].includes(id)) return kzPick({ en: 'Christmas tree · star reward', uk: 'Ялинка · нагорода за зірку', ru: 'Ёлка · награда за звезду' });
  if (/^s1_top\d+$/.test(id)) return t('srcSeason', { n: id.slice(6) + ' · 2×2' });
  if (/^a3_s2_(2v2_)?top\d+$/.test(id)) return 'Season 2 · ' + (id.includes('2v2') ? '2×2 ' : '5×5 ') + 'TOP ' + id.match(/\d+$/)[0];
  if (/^s1_2v2_top\d+$/.test(id)) return t('srcSeason', { n: id.slice(10) + ' · 1×1' });
  if (id === 'founder') return t('srcFounder');
  if (id === 's1_recruiter') return t('srcRecruiter');
  if (kind === 'emblems') {
    if (pi?.emblemsFree?.includes(id)) return t('free');
    const a = S.achList?.find(x => x.reward?.emblem === id);
    if (a) return t('srcAch', { n: t('a_' + a.id) });
    return pi?.tiers?.premium?.emblems?.includes(id) ? t('srcPremium') : t('srcPlus');
  }
  if (!id.startsWith('a_')) return pi?.tiers?.premium?.[kind]?.includes(id) ? t('srcPremium') : t('srcPlus');
  const a = S.achList?.find(x => x.reward?.[kind === 'banners' ? 'banner' : 'frame'] === id);
  return a ? t('srcAch', { n: t('a_' + a.id) }) : '';
}

const PUB_MODES = ['2v2', '1v1'];
const pubMode = m => (PUB_MODES.includes(m) ? m : '2v2');
const modeX = m => String(m).replace('v', ' × ');
const modeGames = (p, m) => (p?.['r' + m]?.w || 0) + (p?.['r' + m]?.l || 0);
const profModes = p => (modeGames(p, '5v5') ? [...PUB_MODES, '5v5'] : PUB_MODES);
const bestProfMode = p => profModes(p).reduce((a, m) => (modeGames(p, m) > modeGames(p, a) ? m : a), '2v2');
const mapsOf = (p, m) => (m === '5v5' ? p.maps : p['maps' + m]) || {};

const S = {
  server: '', token: '', me: null, ws: null, live: null, page: 'news', sound: true, news: null,
  mode: '2v2', lbMode: '2v2', profMode: '2v2', profileId: null, lbSearch: '',
  lastMatchId: null, finishedMatch: null, wasReady: false, queuedAt: null,
  stats: null, myProfile: null, lfg: null, premInfo: null, achList: null,
  lfgF: { langs: [], styles: [], mode: 'all', online: false, min: 0, max: 10 },
};

const verLt = (a, b) => { const x = String(a).split('.').map(Number), y = String(b).split('.').map(Number); for (let i = 0; i < 3; i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) < (y[i] || 0); return false; };
function checkUiUpdate() {
  S.uiChecked = Date.now();
  if (!S.appInfo || !S.server || document.querySelector('.uinote')) return;
  fetch(S.server.replace(/\/+$/, '') + '/update/manifest.json?t=' + Date.now()).then(r => r.ok ? r.json() : null).then(m => {
    const need = m?.notify ?? m?.ui;
    if (!m || !(need > (S.appInfo.ui || 0)) || need === S.uiDismissed) return;
    if (m.minShell && verLt(S.appInfo.version, m.minShell)) return;
    const el = document.createElement('div');
    el.className = 'uinote';
    el.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg><span>${t('uiNew')}</span>
      <button class="btn sm" data-uin="go">${t('uiUpdate')}</button><button class="uinote-x" data-uin="x" title="${t('later')}"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>`;
    el.querySelector('[data-uin="go"]').onclick = () => {
      if (S.live?.match && !confirm(t('uiUpdateInMatch'))) return;
      el.querySelector('[data-uin="go"]').disabled = true; K.relaunch();
    };
    el.querySelector('[data-uin="x"]').onclick = () => { S.uiDismissed = need; el.remove(); };
    document.body.append(el);
    sfx('ok', true);
  }).catch(() => {});
}

function toast(msg, bad) {
  const el = document.createElement('div');
  el.className = 'toast' + (bad ? ' bad' : '');
  el.textContent = msg;
  $('#toast').append(el);
  sfx(bad ? 'error' : 'ok', true);
  setTimeout(() => el.remove(), 3600);
}

function webTag(m, id) {
  if (!m?.web?.includes?.(id)) return '';
  const T = kzPick({ en: 'Played from the web version — no client anti-cheat checks', uk: 'Грав із веб-версії — без перевірок клієнтського античиту', ru: 'Играл с веб-версии — без проверок клиентского античита' }) || 'Web';
  return `<span class="tag web-tag" title="${T}">WEB</span>`;
}
function calTag(m, id) {
  const n = m?.cal?.[id];
  if (!n) return '';
  const T = kzPick({ en: ['C', 'Calibration game {n}/5: win ×3 (up to +75), loss ×2 (up to −50)'], uk: ['К', 'Калібрувальна гра {n}/5: перемога ×3 (до +75), поразка ×2 (до −50)'], ru: ['К', 'Калибровочная игра {n}/5: победа ×3 (до +75), поражение ×2 (до −50)'] }) || ['C', 'Calibration {n}/5'];
  return `<span class="tag cal-tag" title="${T[1].replace('{n}', n)}">${T[0]} ${n}/5</span>`;
}
const osHdr = () => document.documentElement.classList.contains('web') ? 'web' : [S.appInfo?.platform || '', S.appInfo?.osVer || '', S.appInfo?.arch || ''].join('|');
async function api(path, body) {
  const t0 = Date.now();
  const r = await fetch(S.server + path, {
    method: body ? 'POST' : 'GET',
    headers: { Authorization: 'Bearer ' + S.token, 'X-Konzte-Hwid': S.hwid, 'X-Konzte-Client': S.appInfo?.version || '', 'X-Konzte-Os': osHdr(), 'Content-Type': 'application/json' },
    body: body && JSON.stringify(body),
  });
  const j = await r.json().catch(() => ({ error: 'Server error' }));
  if (r.status === 426) { showClientBlock(j); throw new Error(tErr(j.error)); }
  if (r.status === 451 && j.legal) { if (!(S.legalOkAt > t0)) { if (S.me) S.me.legal = j.legal; showLegalGate(j.legal); } throw new Error(tErr(j.error)); }
  if (r.status === 403 && (j.guild || j.pcban) && window.KZGate) { KZGate.show(j); const er = new Error(tErr(j.error)); er.gate = true; throw er; }
  if (r.status === 401 && S.token) { logout(); throw new Error(t(S.gate ? 'keySessionEnded' : 'sessionExpired')); }
  if (!r.ok) throw new Error(tErr(j.error || 'Error'));
  return j;
}
function showClientBlock(j = {}) {
  if (document.getElementById('kz-block')) return;
  if (!j.soft) { S.blocked = true; try { S.ws?.close(); } catch {} }
  const L = kzPick({
    en: ['New Konzte client required', 'Version {v} is out. Your client {have} is no longer supported — download and install the new one over the old (your account and settings stay).', 'Download Konzte {v}', 'Open download page', 'Close app'],
    uk: ['Потрібен новий клієнт Konzte', 'Вийшла версія {v}. Твій клієнт {have} більше не підтримується — завантаж і встанови новий поверх старого (акаунт і налаштування збережуться).', 'Завантажити Konzte {v}', 'Сторінка завантаження', 'Закрити застосунок'],
    ru: ['Нужен новый клиент Konzte', 'Вышла версия {v}. Твой клиент {have} больше не поддерживается — скачай и установи новый поверх старого (аккаунт и настройки сохранятся).', 'Скачать Konzte {v}', 'Страница загрузки', 'Закрыть приложение'],
  }) || [];
  const f = s => String(s || '').replace('{v}', esc(j.min || '')).replace('{have}', esc(j.have || S.appInfo?.version || ''));
  const plat = S.appInfo?.platform === 'linux' ? 'linux' : 'windows';
  const el = document.createElement('div');
  el.id = 'kz-block';
  el.innerHTML = `<div class="kzb-box"><img src="assets/logo.png" alt=""><h2>${f(L[0])}</h2><p>${f(L[1])}</p>
    <button class="btn gold kzb-dl">${f(L[2])}</button><div class="kzb-row"><button class="btn ghost sm kzb-page">${f(L[3])}</button><button class="btn ghost sm kzb-quit">${f(L[4])}</button></div></div>`;
  document.body.appendChild(el);
  el.querySelector('.kzb-dl').onclick = () => K.open(j.download?.[plat] || j.download?.page || 'https://konzte.online/#download');
  el.querySelector('.kzb-page').onclick = () => K.open(j.download?.page || 'https://konzte.online/#download');
  el.querySelector('.kzb-quit').onclick = () => (K.quit ? K.quit() : window.close());
  if (j.soft) { const q = el.querySelector('.kzb-quit'); q.textContent = kzPick({ en: 'Later', uk: 'Пізніше', ru: 'Позже' }) || 'Later'; q.onclick = () => el.remove(); }
  if (K.shellInfo) K.shellInfo().then(i => { if (i?.newer && i.can) shellUpdateUi(el.querySelector('.kzb-box'), el.querySelector('.kzb-dl'), i.latest); }).catch(() => {});
}
function shellUpdateUi(box, btn, ver) {
  const L = kzPick({
    en: ['Update now', 'Downloading Konzte {v}… {p}%', 'Installing — Konzte will restart by itself', 'Update failed: {e}. Use “Download” instead.'],
    uk: ['Оновити зараз', 'Завантажуємо Konzte {v}… {p}%', 'Встановлюємо — Konzte перезапуститься сам', 'Не вдалося оновити: {e}. Скористайся кнопкою «Завантажити».'],
    ru: ['Обновить сейчас', 'Скачиваем Konzte {v}… {p}%', 'Устанавливаем — Konzte перезапустится сам', 'Не удалось обновить: {e}. Воспользуйся кнопкой «Скачать».'],
  }) || [];
  const dl = btn.cloneNode(true); dl.classList.remove('gold'); dl.classList.add('ghost');
  dl.onclick = btn.onclick;
  btn.textContent = L[0]; btn.after(dl);
  const bar = document.createElement('div'); bar.className = 'kzb-prog'; bar.hidden = true; bar.innerHTML = '<i></i><span></span>';
  dl.after(bar);
  K.onShellProgress?.(p => { const pct = p.total ? Math.floor(p.got / p.total * 100) : 0; bar.querySelector('i').style.width = pct + '%'; bar.querySelector('span').textContent = p.done ? L[2] : L[1].replace('{v}', ver).replace('{p}', pct); });
  btn.onclick = async () => {
    btn.disabled = dl.disabled = true; bar.hidden = false; bar.querySelector('span').textContent = L[1].replace('{v}', ver).replace('{p}', 0);
    const r = await K.shellInstall().catch(e => ({ ok: false, error: e.message }));
    if (r?.ok) { bar.querySelector('span').textContent = L[2]; return; }
    btn.disabled = dl.disabled = false; bar.hidden = true;
    toast(L[3].replace('{e}', r?.error || r?.reason || '?'), true);
  };
}
const run = fn => async (...a) => { try { await fn(...a); } catch (e) { toast(e.message, true); } };

const avaSrc = a => !a ? 'assets/logo.png' : a.startsWith('/') ? S.server + a : a;
const ava = (p, cls = '') => `<img class="ava ${cls}" src="${esc(avaSrc(p.avatar))}" onerror="this.src='assets/logo.png'">`;
const secsLeft = dl => Math.max(0, Math.ceil((dl - Date.now()) / 1000));
const fmtDate = ts => new Date(ts).toLocaleDateString(LOCALE[LANG]);
const fmtDT = ts => new Date(ts).toLocaleString(LOCALE[LANG], { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
const kd = (k, d) => (d ? k / d : k).toFixed(2);
const wrNum = r => (r.w + r.l ? Math.round(r.w / (r.w + r.l) * 100) : 0);
const sign = n => (n > 0 ? '+' : '') + n;
const levelOf = e => { let l = 0; LEVELS.forEach((m, i) => { if (e >= m) l = i; }); return l; };
const levelPct = e => { const l = levelOf(e); const nx = LEVELS[l + 1]; return nx ? Math.min(100, (e - LEVELS[l]) / (nx - LEVELS[l]) * 100) : 100; };

function render(html) {
  const view = $('#view');
  const keep = {};
  view.querySelectorAll('input[id], textarea[id]').forEach(i => { keep[i.id] = { v: i.value, f: document.activeElement === i, s: i.selectionStart }; });
  const scroll = {};
  view.querySelectorAll('[data-scroll]').forEach(el => { scroll[el.dataset.scroll] = el.scrollTop + el.clientHeight >= el.scrollHeight - 4 ? -1 : el.scrollTop; });
  const mainScroll = view.scrollTop;
  view.innerHTML = `<div class="page">${html}</div>`;
  view.scrollTop = mainScroll;
  const pg = S.page, t0 = performance.now();
  if (!view.__userScroll) { view.__userScroll = 0; for (const ev of ['wheel', 'keydown', 'mousedown', 'touchstart']) view.addEventListener(ev, () => { view.__userScroll = performance.now(); }, { passive: true }); }
  if (mainScroll > 0) for (const d of [0, 60, 250, 600]) setTimeout(() => requestAnimationFrame(() => {
    if (S.page === pg && view.__userScroll < t0 && Math.abs(view.scrollTop - mainScroll) > 1) view.scrollTop = mainScroll;
  }), d);
  for (const [id, k] of Object.entries(keep)) {
    const i = document.getElementById(id);
    if (!i) continue;
    i.value = k.v;
    if (k.f) { i.focus(); try { i.setSelectionRange(k.s, k.s); } catch {} }
  }
  view.querySelectorAll('[data-scroll]').forEach(el => { const s = scroll[el.dataset.scroll]; el.scrollTop = s === undefined || s === -1 ? el.scrollHeight : s; });
}

function applyStatic() {
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  if (S.live) $('#online').textContent = t('online', { n: S.live.online });
}

function resolveLang(pref) {
  if (pref && pref !== 'system' && I18N[pref]) return pref;
  for (const l of S.sysLangs || []) { const c = String(l).slice(0, 2).toLowerCase(); if (I18N[c]) return c; }
  return 'en';
}
const langButtons = () => {
  const cur = S.langPref === 'system' ? t('sysLang') : (LANGS.find(([c]) => c === S.langPref) || LANGS[0])[1];
  const code = (S.langPref === 'system' ? LANG : S.langPref).toUpperCase();
  return `<div class="ldd"><button type="button" class="ldd-btn" data-ldd><span class="ldd-code">${code === 'UK' ? 'UA' : code}</span><span class="ldd-cur">${esc(cur)}</span><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>
    <div class="ldd-list" role="listbox"><button data-lang="system" class="${S.langPref === 'system' ? 'on' : ''}"><span class="ldd-code">AUTO</span>${t('sysLang')}</button>${LANGS.map(([c, n]) => `<button data-lang="${c}" class="${S.langPref === c ? 'on' : ''}"><span class="ldd-code">${c === 'uk' ? 'UA' : c.toUpperCase()}</span>${n}</button>`).join('')}</div></div>`;
};
function bindLang(after) {
  document.querySelectorAll('[data-ldd]').forEach(b => b.onclick = e => {
    e.stopPropagation();
    const dd = b.closest('.ldd'), open = !dd.classList.contains('open');
    document.querySelectorAll('.ldd.open').forEach(x => x.classList.remove('open'));
    dd.classList.toggle('open', open);
    if (open) { const off = ev => { if (!dd.contains(ev.target) || ev.key === 'Escape') { dd.classList.remove('open'); removeEventListener('click', off); removeEventListener('keydown', off); } }; setTimeout(() => { addEventListener('click', off); addEventListener('keydown', off); }); }
  });
  document.querySelectorAll('[data-lang]').forEach(b => b.onclick = async () => {
    S.langPref = b.dataset.lang;
    LANG = resolveLang(S.langPref);
    await K.saveSettings({ lang: S.langPref, langV: 2 });
    applyStatic();
    after();
  });
}

function bootStep(pct, text) {
  const bar = document.getElementById('boot-bar'), st = document.getElementById('boot-st');
  if (bar) bar.style.width = pct + '%';
  if (st && text) st.textContent = text;
}
async function boot() {
  bootStep(15);
  const st = await K.settings();
  S.server = st.server; S.token = st.token || ''; S.hwid = await K.hwid(); S.sound = st.sound !== false; S.devUi = !!st.devUi;
  S.cfg = st; applyLook();
  S.mode = pubMode(st.defaultMode);
  S.appInfo = await K.info().catch(() => ({}));
  S.build = await fetch('version.json').then(r => r.json()).then(j => j.build).catch(() => null);
  if (S.appInfo.needShell) setTimeout(() => toast(t('needShell', { v: S.appInfo.needShell }), true), 1500);
  setTimeout(checkUiUpdate, 20_000); setInterval(checkUiUpdate, 3 * 60_000); window.addEventListener('focus', () => { if (Date.now() - (S.uiChecked || 0) > 60_000) checkUiUpdate(); });
  S.sysLangs = st.sysLangs || [navigator.language];
  if (st.langV !== 2) { st.lang = 'system'; K.saveSettings({ lang: 'system', langV: 2 }); }
  S.langPref = st.lang || 'system';
  LANG = resolveLang(S.langPref);
  applyStatic();
  bootStep(30, t('bootUpdates'));
  const info = await K.info().catch(() => ({}));
  if (info.uiUpdated) { bootStep(45, t('bootUpdated', { v: S.build ? `${info.version} (build ${S.build})` : info.ui })); await new Promise(r => setTimeout(r, 700)); }
  if (!S.token) return showLogin();
  for (let attempt = 1; ; attempt++) {
    bootStep(60, attempt === 1 ? t('bootConnect') : t('bootRetry', { n: attempt }));
    try {
      S.me = await api('/api/me');
      bootStep(85, t('bootProfile'));
      return afterLogin();
    } catch (e) {
      if (e.gate) return;
      if (!/fetch|network|Failed|timeout|Server error/i.test(e.message || '')) return showLogin();
      bootStep(60, t('bootOffline'));
      await new Promise(r => setTimeout(r, Math.min(15000, 3000 * attempt)));
    }
  }
}

function showLogin(dev = S.devLogin) {
  $('#nav').hidden = true;
  $('#tb-user').innerHTML = '';
  render(`<div class="center lobbybg"><div class="card accent login">
    <img src="assets/logo.png"><h1>KONZTE FACEIT</h1>
    <p class="mute">${t('loginText')}</p>
    ${S.gate ? `<p class="mute">${t('keyText')}</p><input id="akey" placeholder="KZ-XXXX-XXXX-XXXX" maxlength="24" spellcheck="false" style="width:100%;box-sizing:border-box;text-align:center;font-family:monospace;letter-spacing:1px;margin-bottom:10px" value="${esc(S.cfg.accessKey || '')}">` : ''}
    <button class="btn big discord" id="login">${t('loginBtn')}</button>
    <p class="mute" id="login-wait" hidden>${t('loginWait')}</p>
    ${dev ? `<div class="row" style="margin-top:14px"><input id="devname" placeholder="dev name" style="flex:1"><button class="btn ghost" id="devlogin">Dev</button></div>` : ''}
    ${langButtons()}
  </div></div>`);
  $('#login').onclick = run(login);
  bindLang(() => showLogin());
  if (dev) $('#devlogin').onclick = run(async () => {
    const r = await fetch(S.server + '/auth/dev', { method: 'POST', body: JSON.stringify({ name: $('#devname').value, staff: $('#devname').value.startsWith('staff') }) }).then(r => r.json());
    if (r.error) throw new Error(r.error);
    await setToken(r.token);
  });
  if (S.gate === undefined) fetch(S.server + '/auth/gate').then(r => r.json()).then(r => { S.gate = !!r.gate; if (S.gate) showLogin(); }).catch(() => {});
  if (S.devUi && S.devLogin === undefined) fetch(S.server + '/auth/start').then(r => r.json()).then(r => { S.devLogin = !!r.dev; if (r.dev) showLogin(); }).catch(() => {});
}

async function login() {
  const q = new URLSearchParams();
  if (S.gate) {
    const key = ($('#akey')?.value || '').trim().toUpperCase();
    if (!key) throw new Error(t('keyNeeded'));
    const a = await fetch(S.server + '/auth/key', { method: 'POST', body: JSON.stringify({ key, hwid: S.hwid }) }).then(r => r.json()).catch(() => { throw new Error(t('serverDown')); });
    if (a.error) throw new Error(tErr(a.error));
    S.cfg.accessKey = a.key; await K.saveSettings({ accessKey: a.key });
    q.set('key', a.key); q.set('hwid', S.hwid);
  }
  if (!q.has('hwid') && S.hwid) q.set('hwid', S.hwid);
  const r = await fetch(S.server + '/auth/start?' + q).then(r => r.json()).catch(() => { throw new Error(t('serverDown')); });
  if (r.error) throw new Error(tErr(r.error));
  K.open(r.url);
  $('#login-wait').hidden = false;
  for (let i = 0; i < 150; i++) {
    await new Promise(res => setTimeout(res, 2000));
    const p = await fetch(S.server + '/auth/poll?state=' + r.state).then(r => r.json());
    if (p.error) throw new Error(tErr(p.error));
    if (p.token) return setToken(p.token);
    if (p.tfa && window.KZ2fa) return setToken(await KZ2fa.login(r.state, p.tfa));
  }
  throw new Error(t('loginTimeout'));
}

async function setToken(token) {
  S.token = token;
  await K.saveSettings({ token });
  S.me = await api('/api/me');
  sfx('login');
  afterLogin();
}

function logout() {
  if (S.token) fetch(S.server + '/api/logout', { method: 'POST', headers: { Authorization: 'Bearer ' + S.token } }).catch(() => {});
  S.token = ''; S.me = null; S.live = null;
  K.saveSettings({ token: '' });
  if (S.ws) { S.ws.onclose = null; S.ws.close(); S.ws = null; }
  $('#online').textContent = '';
  showLogin();
}

function afterLogin() {
  if (!S.me.gameId) return showRegister();
  if (S.me.legal?.need?.length) return showLegalGate(S.me.legal);
  loadSupport();
  $('#nav').hidden = false;
  renderMe();
  connect();
  go('play');
  setTimeout(checkNotices, 1500);
  if (K.cm && !S.cmAutoLink) {
    S.cmAutoLink = true;
    const tryLink = st => {
      if (!st?.connected || !st.me?.id || !S.me?.gameId || S.me.cmId === st.me.id || S.cmLinking) return;
      if (S.me.cmId) return;
      S.cmLinking = true;
      api('/api/cm/link', { cm: { id: st.me.id, nick: st.me.nick } }).then(me => { S.me = me; }).catch(() => {}).finally(() => { S.cmLinking = false; });
    };
    K.cm.state().then(tryLink).catch(() => {}); K.cm.onState(tryLink);
  }
  setTimeout(showWhatsNew, 2500);
}

function showRegister() {
  $('#nav').hidden = true;
  render(`<div class="center lobbybg"><form class="card accent login col" id="reg">
    <img src="assets/logo.png"><h2>${t('registration')}</h2>
    <p class="mute">${t('regText')}</p>
    <input id="r-nick" placeholder="${t('nickPh')}" maxlength="25" required>
    <input id="r-id" placeholder="${t('idPh')}" maxlength="20" required>
    <input id="r-ref" placeholder="${t('refCodePh')}" maxlength="6" style="text-transform:uppercase">
    <div class="mute" id="r-cm">${t('cmNoMod')}</div>
    ${legalCheck('r-agree', S.me?.legal)}
    <div class="err" id="r-err"></div>
    <button class="btn big">${t('submit')}</button>
    <button type="button" class="btn ghost" id="r-out">${t('logout')}</button>
    ${langButtons()}
  </form></div>`);
  let cmMe = null;
  const showCm = st => {
    const box = $('#r-cm'); if (!box) return;
    cmMe = st?.connected && st.me?.id ? st.me : null;
    box.innerHTML = cmMe ? `${t('cmLinked')}: <b>${esc(cmMe.nick || '—')}</b> · <code class="gid">${esc(cmMe.id)}</code>` : t('cmNoMod');
    if (cmMe?.nick && !$('#r-nick').value) $('#r-nick').value = cmMe.nick.slice(0, 25);
  };
  K.cm?.state().then(showCm).catch(() => {});
  K.cm?.onState(showCm);
  $('#r-out').onclick = logout;
  bindLang(showRegister);
  bindLegalLinks();
  $('#reg').onsubmit = async e => {
    e.preventDefault();
    try {
      if (!$('#r-agree').checked) { $('#r-err').textContent = t('lg_needAgree'); return; }
      S.me = await api('/api/register', { nick: $('#r-nick').value.trim(), gameId: $('#r-id').value.trim(), ref: $('#r-ref').value.trim(), agree: true, legal: legalVersions(S.me?.legal), cm: cmMe ? { id: cmMe.id, nick: cmMe.nick } : undefined });
      afterLogin();
    } catch (err) { $('#r-err').textContent = err.message; }
  };
}

const legalName = id => ({ terms: t('lg_terms'), privacy: t('lg_privacy'), rules: t('lg_rules') })[id] || id;
const legalVersions = st => Object.fromEntries((st?.docs || []).map(d => [d.id, d.v]));
const legalDefault = () => ({ docs: [{ id: 'terms', url: 'https://konzte.online/terms' }, { id: 'privacy', url: 'https://konzte.online/privacy' }] });
function legalCheck(id, st) {
  const docs = (st || legalDefault()).docs;
  return `<label class="lg-check"><input type="checkbox" id="${id}"><span>${t('lg_regAgree')} ${docs.map(d => `<a href="#" data-legal="${esc(d.url)}">${legalName(d.id)}</a>`).join(', ')}</span></label>`;
}
function bindLegalLinks(root = document) {
  root.querySelectorAll('[data-legal]').forEach(a => a.onclick = e => { e.preventDefault(); K.open(a.dataset.legal); });
}
function showLegalGate(st, force) {
  if (!st?.need?.length) return afterLogin();
  if (!force && document.getElementById('lg-gate')) return;
  const wasChecked = !!document.getElementById('lg-agree')?.checked;
  if (S.ws) { S.ws.onclose = null; S.ws.close(); S.ws = null; }
  $('#nav').hidden = true;
  const upd = !st.first && st.docs.some(d => d.prev);
  render(`<div class="center lobbybg"><div class="card accent login col lg-gate" id="lg-gate">
    <img src="assets/logo.png"><h2>${t(upd ? 'lg_titleUpd' : 'lg_title')}</h2>
    <p class="mute">${t(upd ? 'lg_textUpd' : 'lg_text')}</p>
    <div class="lg-docs">${st.docs.map(d => `<div class="lg-doc${st.need.includes(d.id) ? ' need' : ''}"><b>${legalName(d.id)}</b><small>v${esc(d.v)}${d.prev && d.prev !== d.v ? ` · ${t('lg_updated')}` : ''}</small><button type="button" class="btn ghost sm" data-legal="${esc(d.url)}">${t('lg_read')}</button></div>`).join('')}</div>
    <label class="lg-check"><input type="checkbox" id="lg-agree"><span>${t('lg_agree')}</span></label>
    <div class="err" id="lg-err"></div>
    <button class="btn big" id="lg-ok" disabled>${t('lg_accept')}</button>
    <button type="button" class="btn ghost" id="lg-out">${t('lg_decline')}</button>
    <p class="mute lg-hint">${t('lg_hint')}</p>
    ${langButtons()}
  </div></div>`);
  bindLegalLinks($('#lg-gate'));
  bindLang(() => showLegalGate(st, true));
  $('#lg-agree').onchange = e => { $('#lg-ok').disabled = !e.target.checked; };
  if (wasChecked) { $('#lg-agree').checked = true; $('#lg-ok').disabled = false; }
  $('#lg-out').onclick = logout;
  $('#lg-ok').onclick = async () => {
    $('#lg-ok').disabled = true;
    try {
      const nst = await api('/api/legal/accept', { versions: legalVersions(st) });
      S.legalOkAt = Date.now();
      S.me = { ...S.me, legal: nst };
      afterLogin();
    } catch (err) {
      $('#lg-err').textContent = err.message;
      try { const fresh = await api('/api/legal'); if (fresh.need?.length) setTimeout(() => showLegalGate(fresh), 1200); } catch {}
    }
  };
}

function connect() {
  if (S.ws) return;
  const ws = new WebSocket(S.server.replace(/^http/, 'ws') + '/ws?token=' + S.token + '&hwid=' + S.hwid + '&v=' + encodeURIComponent(S.appInfo?.version || '') + '&os=' + encodeURIComponent(osHdr()));
  S.ws = ws;
  ws.onmessage = e => {
    const m = JSON.parse(e.data);
    if (m.t === 'error' && /Terms of Service/.test(m.msg)) return api('/api/legal').then(st => { if (st.need?.length) showLegalGate(st); }).catch(() => {});
    if (m.t === 'error') return toast(tErr(m.msg), true);
    if (m.t === 'state') onState(m);
    if (m.t === 'lfg' && S.page === 'lfg') loadLfg();
    if (m.t === 'support') { if (S.supOpen?.id === m.id && S.page === 'support') openTicket(m.id); else loadSupport(); }
    if (m.t === 'ach') { for (const id of m.ids) toast('🏆 ' + t('achUnlocked', { n: t('a_' + id) })); sfx('ach'); }
    if (m.t === 'notice') checkNotices();
    if (m.t === 'me') api('/api/me').then(me => { S.me = me; renderMe(); if (S.page === 'settings') renderSettings(); }).catch(() => {});
    if (m.t === 'broadcast') showBroadcast(m);
    if (m.t === 'news') { if (S.page === 'news') loadNews(); else $('#news-dot').hidden = false; }
  };
  ws.onclose = e => {
    S.ws = null; S.live = null;
    if (e.code === 4001) return logout();
    if (e.code === 4426) return api('/api/me').catch(() => {});
    if (S.token && e.code === 1006) api('/api/me').catch(() => {});
    $('#online').textContent = '';
    if (S.token) setTimeout(connect, 2000);
    refresh();
  };
}
const wsSend = o => S.ws?.readyState === 1 ? S.ws.send(JSON.stringify(o)) : toast(t('noConn'), true);

function onState(st) {
  const prev = S.live;
  S.live = st;
  stateSfx(prev, st);
  if (st.me && JSON.stringify(st.me.prem) !== JSON.stringify(S.me?.prem)) S.profCache = null;
  S.me = st.me || S.me;
  $('#online').textContent = t('online', { n: st.online });
  $('#nav-staff').hidden = !S.me.staff && !S.me.admin && !S.me.acRole;
  renderMe();

  if (st.ready && !S.wasReady) { K.attention(t('matchFoundN'), { raise: true }); if (S.sound) beep('match'); }
  if ((st.friends?.requests?.length || 0) > (prev?.friends?.requests?.length || 0)) { toast(t('newFriendReq', { n: st.friends.requests[0].nick })); if (S.sound && S.cfg.soundInvites !== false) beep(); }
  if ((st.invites?.length || 0) > (prev?.invites?.length || 0)) { K.attention(t('invitesYou')); if (S.sound && S.cfg.soundInvites !== false) beep(); }
  renderInvites();
  S.wasReady = !!st.ready;
  if (st.match) {
    if (!prev?.match) { K.attention(t('matchStarted', { n: st.match.id }), { raise: true }); S.page = 'play'; markNav(); }
    S.lastMatchId = st.match.id;
    S.finishedMatch = null;
  } else if (prev?.match && S.lastMatchId) {
    api('/api/match?id=' + S.lastMatchId).then(m => { S.finishedMatch = m; if (m.state === 'done' && m.result && m.me) sfx(m.result.winner === m.me ? 'win' : 'lose'); else if (m.draw && m.me) sfx('draw'); S.backAt = Date.now() + 8000; S.page = 'play'; markNav(); loadHome(); refresh(); }).catch(() => {});
    S.lastMatchId = null;
  }
  if (!st.myQueue) S.queuedAt = null; else S.queuedAt ||= Date.now();
  renderReady();
  if (S.page === 'play') refresh();
}

const TONES = { classic: [660, 880, 1100], soft: [523, 659, 784], alert: [880, 660, 880] };
function beep(kind) {
  try {
    const ctx = new AudioContext(), vol = (S.cfg.volume ?? 70) / 100 * .26, tones = TONES[S.cfg.tone] || TONES.classic;
    [0, .18, .36].forEach((d, i) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = S.cfg.tone === 'soft' ? 'sine' : 'triangle';
      o.frequency.value = tones[i];
      g.gain.setValueAtTime(vol, ctx.currentTime + d);
      g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + d + .16);
      o.connect(g).connect(ctx.destination);
      o.start(ctx.currentTime + d); o.stop(ctx.currentTime + d + .17);
    });
  } catch {}
}

let AC = null, sfxLast = 0;
const N = n => 440 * 2 ** ((n - 69) / 12);
const SFX = {
  tick:   [['sine', 88, 0, .03, .25]],
  nav:    [['triangle', 79, 0, .05, .35], ['triangle', 86, .04, .06, .25]],
  ok:     [['sine', 76, 0, .07, .45], ['sine', 83, .06, .1, .45]],
  error:  [['square', 52, 0, .09, .25], ['square', 47, .08, .14, .25]],
  queue:  [['triangle', 69, 0, .08, .5], ['triangle', 74, .07, .08, .5], ['triangle', 81, .14, .16, .5]],
  cancel: [['triangle', 76, 0, .08, .45], ['triangle', 69, .07, .14, .45]],
  accept: [['triangle', 72, 0, .25, .4], ['triangle', 76, 0, .25, .35], ['triangle', 79, 0, .25, .35], ['sine', 84, .08, .3, .3]],
  ban:    [['noise', 0, 0, .12, .7], ['sine', 40, 0, .18, .9]],
  start:  [['square', 67, 0, .1, .22], ['square', 72, .1, .1, .22], ['square', 76, .2, .1, .22], ['square', 79, .3, .35, .22], ['sine', 55, .3, .4, .6]],
  msg:    [['sine', 84, 0, .05, .4], ['sine', 91, .04, .07, .3]],
  join:   [['triangle', 67, 0, .08, .45], ['triangle', 74, .08, .12, .45]],
  coin:   [['square', 83, 0, .07, .22], ['square', 88, .07, .3, .22]],
  ach:    [['triangle', 84, 0, .1, .35], ['triangle', 88, .07, .1, .35], ['triangle', 91, .14, .1, .35], ['triangle', 96, .21, .4, .35]],
  win:    [['square', 60, 0, .12, .2], ['square', 64, .12, .12, .2], ['square', 67, .24, .12, .2], ['square', 72, .36, .5, .22], ['sine', 48, .36, .6, .5]],
  lose:   [['triangle', 67, 0, .2, .45], ['triangle', 63, .2, .2, .45], ['triangle', 58, .4, .55, .45]],
  login:  [['sine', 60, 0, .3, .35], ['sine', 67, .08, .3, .3], ['sine', 72, .16, .4, .3], ['noise', 0, 0, .25, .12]],
};
function sfx(name, soft) {
  if (S.cfg?.uiSounds === false || !SFX[name]) return;
  const now = performance.now();
  if ((name === 'tick' || name === 'nav' || soft) && now - sfxLast < (soft ? 350 : 120)) return;
  sfxLast = now;
  try {
    AC ||= new AudioContext();
    const vol = (S.cfg.volume ?? 70) / 100 * .22, t0 = AC.currentTime + .005;
    for (const [type, note, at, dur, gain] of SFX[name]) {
      const g = AC.createGain(), st = t0 + at;
      g.gain.setValueAtTime(0, st);
      g.gain.linearRampToValueAtTime(vol * gain, st + .005);
      g.gain.exponentialRampToValueAtTime(.0001, st + dur);
      g.connect(AC.destination);
      let src;
      if (type === 'noise') {
        const b = AC.createBuffer(1, AC.sampleRate * dur, AC.sampleRate), d = b.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
        src = AC.createBufferSource(); src.buffer = b;
        const f = AC.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 900;
        src.connect(f).connect(g);
      } else {
        src = AC.createOscillator(); src.type = type; src.frequency.value = N(note);
        src.connect(g);
      }
      src.start(st); src.stop(st + dur + .02);
    }
  } catch {}
}
document.addEventListener('pointerdown', e => {
  if (e.button !== 0) return;
  const el = e.target.closest('button, .nav-btn, [data-go], [data-go2], .switch, .seg button, a[href]');
  if (el && !el.disabled) sfx(el.matches('.nav-btn, [data-go]') ? 'nav' : 'tick');
}, true);
function stateSfx(prev, st) {
  if (!prev) return;
  if (st.myQueue && !prev.myQueue) sfx('queue');
  else if (!st.myQueue && prev.myQueue && !st.ready && !st.match) sfx('cancel');
  if (st.ready?.iAccepted && !prev.ready?.iAccepted) sfx('accept');
  const m = st.match, pm = prev.match;
  if (m && pm && m.id === pm.id) {
    if ((m.bans?.length || 0) > (pm.bans?.length || 0)) sfx('ban');
    if (m.state === 'live' && pm.state !== 'live') setTimeout(() => sfx('start'), 150);
    const last = m.chat?.[m.chat.length - 1];
    if ((m.chat?.length || 0) > (pm.chat?.length || 0) && last && last.uid !== S.me?.id) sfx('msg');
  }
  if (st.party && !prev.party) sfx('join');
  else if (!st.party && prev.party) sfx('cancel');
  else if (st.party && prev.party && st.party.members.length > prev.party.members.length) sfx('join');
}

function markNav() { document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('on', b.dataset.go === S.page)); }
function go(page, arg) {
  S.page = page;
  if (page === 'profile') { S.profileId = arg || S.me.id; S.profMode = null; }
  if (page === 'play' || page === 'news') loadHome();
  if (page === 'news') { $('#news-dot').hidden = true; loadNews(); }
  if (page === 'lfg') loadLfg();
  if (page === 'support') loadSupport();
  if (page === 'shop' || page === 'inventory') loadShop();
  if (page === 'referrals') loadRef();
  if (page === 'premium' || page === 'inventory') loadPremium();
  markNav();
  $('#view').scrollTop = 0;
  refresh();
}
function refresh() {
  if (!S.me?.gameId) return;
  ({ shop: renderShop, referrals: renderReferrals, support: renderSupport, news: renderNews, lfg: renderLfg, premium: renderPremium, inventory: renderInventory, play: renderPlay, leaderboard: renderLeaderboard, profile: renderProfile, staff: renderStaff, settings: renderSettings })[S.page]?.();
}

function loadHome() {
  Promise.all([api('/api/stats'), api('/api/profile?id=' + encodeURIComponent(S.me.id)), api('/api/season').catch(() => null)])
    .then(([st, p, se]) => { S.stats = st; S.myProfile = p; S.season = se; if (S.page === 'play' || S.page === 'news') refresh(); })
    .catch(() => {});
}
setInterval(() => { if ((S.page === 'play' || S.page === 'news') && S.me?.gameId && !S.live?.match) loadHome(); }, 30_000);

function renderMe() {
  const r = S.me.r2v2 || S.me.r5v5;
  const lvl = levelOf(r.elo);
  $('#tb-user').innerHTML = `<img class="lvl" src="${lvlIc(r, lvl)}">
    <div><div class="nick">${nickHtml(S.me)}</div><div class="elo">${isCal(r) ? calTxt(r) : `${r.elo} ELO`} · <span class="kf">${S.me.coins ?? 0} KF</span></div><div class="mini"><i style="width:${isCal(r) ? r.cal * 20 : levelPct(r.elo)}%"></i></div></div>
    ${avaF(S.me)}`;
}

function loadNews() {
  api('/api/news').then(n => { S.news = n; if (S.page === 'news') refresh(); }).catch(e => toast(e.message, true));
}

function md(src) {
  const blocks = [];
  let s = esc(src).replace(/```(?:\w+\n)?([\s\S]*?)```/g, (_, c) => `\u0000${blocks.push(`<pre>${c.replace(/^\n|\n$/g, '')}</pre>`) - 1}\u0000`);
  s = s.replace(/`([^`\n]+)`/g, (_, c) => `\u0000${blocks.push(`<code>${c}</code>`) - 1}\u0000`);
  const link = (u, txt) => `<a href="${u}" target="_blank">${txt}</a>`;
  s = s
    .replace(/&lt;(a?):(\w+):(\d+)&gt;/g, (_, a, n, id) => `<img class="emoji" alt=":${n}:" title=":${n}:" src="https://cdn.discordapp.com/emojis/${id}.${a ? 'gif' : 'png'}?size=48">`)
    .replace(/&lt;t:(\d+)(?::([tTdDfFR]))?&gt;/g, (_, ts, f) => `<span class="ts">${f === 'R' ? fmtDT(ts * 1000) : new Date(ts * 1000).toLocaleString(LOCALE[LANG])}</span>`)
    .replace(/\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g, (_, txt, u) => link(u, txt))
    .replace(/(^|[\s(])(https?:\/\/[^\s<]+[^\s<.,;:!?)\]'"])/g, (_, pre, u) => pre + link(u, u))
    .replace(/\*\*\*([^*\n]+)\*\*\*/g, '<b><i>$1</i></b>')
    .replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>')
    .replace(/__([^_\n]+)__/g, '<u>$1</u>')
    .replace(/(^|[^\w*])\*([^*\n]+)\*(?!\w)/g, '$1<i>$2</i>')
    .replace(/(^|[^\w])_([^_\n]+)_(?!\w)/g, '$1<i>$2</i>')
    .replace(/~~([^~\n]+)~~/g, '<s>$1</s>')
    .replace(/\|\|([^|\n]+)\|\|/g, '<span class="spoiler" onclick="this.classList.add(\'open\')">$1</span>');
  const lines = s.split('\n').map(l => {
    let m;
    if ((m = l.match(/^### (.*)/))) return `<h5>${m[1]}</h5>`;
    if ((m = l.match(/^## (.*)/))) return `<h4 class="mh">${m[1]}</h4>`;
    if ((m = l.match(/^# (.*)/))) return `<h3 class="mh">${m[1]}</h3>`;
    if ((m = l.match(/^-# (.*)/))) return `<small class="mute">${m[1]}</small>`;
    if ((m = l.match(/^&gt; ?(.*)/))) return `<blockquote>${m[1]}</blockquote>`;
    if ((m = l.match(/^\s*[-*•] (.*)/))) return `<li>${m[1]}</li>`;
    if (l === '---') return '<hr>';
    return l + '<br>';
  });
  return lines.join('').replace(/(<li>.*?<\/li>)+/g, x => `<ul>${x}</ul>`).replace(/<br>$/, '')
    .replace(/\u0000(\d+)\u0000/g, (_, i) => blocks[i]);
}

function postMedia(media) {
  const imgs = media.filter(m => m.kind === 'image');
  const vids = media.filter(m => m.kind === 'video');
  const files = media.filter(m => m.kind === 'file');
  return (imgs.length ? `<div class="gallery g${Math.min(imgs.length, 4)}">${imgs.map(m => `<img src="${esc(m.url)}" data-zoom loading="lazy">`).join('')}</div>` : '')
    + vids.map(v => `<video src="${esc(v.url)}" controls preload="metadata"></video>`).join('')
    + files.map(f => `<a class="file" href="${esc(f.url)}" target="_blank"><svg viewBox="0 0 24 24"><path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4"/></svg><span>${esc(f.name || 'file')}</span>${f.size ? `<span class="mute">${(f.size / 1048576).toFixed(1)} MB</span>` : ''}</a>`).join('');
}

function postEmbed(e) {
  return `<div class="embed" style="${e.color ? `border-left-color:${esc(e.color)}` : ''}">
    <div class="emb-main">
      ${e.author ? `<div class="emb-author">${e.author.icon ? `<img src="${esc(e.author.icon)}">` : ''}${esc(e.author.name)}</div>` : ''}
      ${e.title ? `<div class="emb-title">${e.url ? `<a href="${esc(e.url)}" target="_blank">${md(e.title)}</a>` : md(e.title)}</div>` : ''}
      ${e.description ? `<div class="emb-desc">${md(e.description)}</div>` : ''}
      ${e.fields.length ? `<div class="emb-fields">${e.fields.map(f => `<div class="${f.inline ? 'inl' : ''}"><b>${md(f.name)}</b><div>${md(f.value)}</div></div>`).join('')}</div>` : ''}
      ${e.image ? `<img class="emb-img" src="${esc(e.image)}" data-zoom loading="lazy">` : ''}
      ${e.footer ? `<div class="emb-foot">${esc(e.footer)}</div>` : ''}
    </div>
    ${e.thumbnail && !e.image ? `<img class="emb-thumb" src="${esc(e.thumbnail)}" data-zoom>` : ''}
  </div>`;
}

function renderNews() {
  const posts = S.news;
  const st = S.live;
  const r = S.me.r2v2 || S.me.r5v5;
  const lvl = levelOf(r.elo);
  const side = `<div class="col" style="gap:16px">
      <div class="card accent"><h4>${t('quickPlay')}</h4>
        <div class="row" style="margin-bottom:14px"><img class="lvl lg" src="${lvlIc(r, lvl)}"><div>${isCal(r) ? `<div class="mute">${t('la_calHint').split('.')[0]}</div><div style="font-family:TTB;font-size:22px;line-height:1">${calTxt(r)}</div>` : `<div class="mute">${t('level', { n: lvl })}</div><div style="font-family:TTB;font-size:26px;line-height:1">${r.elo} <span class="mute" style="font-size:13px">ELO</span></div>`}</div></div>
        <div class="bar" style="margin-bottom:14px"><i style="width:${levelPct(r.elo)}%"></i></div>
        ${st?.match ? `<button class="btn big" style="width:100%" data-go2="play">${t('match', { n: st.match.id })}</button>`
          : st?.myQueue ? `<div class="searching"><div class="pulse"></div><b>${t('searching')} <span data-since="${S.queuedAt}"></span></b><span class="mute">${st.myQueue}</span></div>`
          : `<div class="row">${PUB_MODES.map(m => `<button class="btn grow" data-act="queue" data-mode="${m}">${modeX(m)} <span class="mute" style="color:inherit;opacity:.6">${st?.queues?.[m] ?? 0}</span></button>`).join('')}</div>`}
      </div>
      <div class="card"><h4>${t('recentMatches')}</h4>
        ${S.stats?.recent?.length ? `<div class="feed">${S.stats.recent.slice(0, 6).map(m => `<div class="fm" data-mid="${m.id}">
            <span class="t"><span class="${m.winner === 'A' ? 'alfa' : 'bravo'}">${TEAM[m.winner]}</span> · ${mapName(m.map)}</span><span class="tag">${m.mode}</span>
            <span class="m">#${m.id}${m.score ? ' · ' + esc(m.score) : ''}</span><span class="m">${fmtDT(m.at)}</span></div>`).join('')}</div>` : `<div class="empty-note">${t('noMatches')}</div>`}
      </div>
    </div>`;
  const feed = posts == null ? `<div class="card empty-note">${t('loading')}</div>`
    : !posts.length ? `<div class="card empty-note">${t('noNews')}</div>`
    : posts.map(p => `<article class="card post" style="${p.color ? `border-left:3px solid ${esc(p.color)}` : ''}">
        <header>${ava(p.author)}<div><div class="pa">${esc(p.author.name)} ${p.author.bot ? `<span class="tag">${t('bot')}</span>` : ''}</div>
          <div class="mute pt">${fmtDT(p.at)}${p.edited ? ` · ${t('edited')}` : ''}</div></div></header>
        ${p.text ? `<div class="pbody">${md(p.text)}</div>` : ''}
        ${postMedia(p.media)}
        ${p.embeds.map(postEmbed).join('')}
        ${p.stickers?.length ? `<div class="row">${p.stickers.map(s => `<img class="sticker" src="${esc(s.url)}" title="${esc(s.name)}">`).join('')}</div>` : ''}
        ${p.reactions?.length ? `<div class="reacts">${p.reactions.map(x => `<span>${x.url ? `<img src="${esc(x.url)}">` : esc(x.emoji)} ${x.count}</span>`).join('')}</div>` : ''}
      </article>`).join('');
  render(`<div class="lbhead"><h1>${t('news')}</h1><span class="mute">${t('newsSub')}</span></div>
    <div class="newsgrid"><div class="col" style="gap:14px">${feed}</div>${side}</div>`);
  document.querySelectorAll('[data-zoom]').forEach(i => i.onclick = () => openShot(i.src));
  document.querySelectorAll('[data-go2]').forEach(b => b.onclick = () => go(b.dataset.go2));
  bindPlay();
  tick();
}

function loadPremium() {
  Promise.all([api('/api/premium'), api('/api/profile?id=' + encodeURIComponent(S.me.id))])
    .then(([pi, p]) => { S.premInfo = pi; S.achList = p.achievements.list; S.myProfile = p; if (S.page === 'premium' || S.page === 'inventory') refresh(); })
    .catch(e => toast(e.message, true));
}

function renderPremium() {
  const pi = S.premInfo;
  if (!pi) return render(`<div class="card empty-note">${t('loading')}</div>`);
  const mine = S.me.premium?.tier ? S.me.premium : null;
  const T = pi.tiers;
  const rows = [
    ['f_badge', '—', '✓', '✓'], ['f_role', '—', '✓', '✓'],
    ['f_banners', t('srcAch', { n: '' }).replace(/:\s*$/, ''), String(T.premium.banners.length), String(T.plus.banners.length)],
    ['f_frames', t('srcAch', { n: '' }).replace(/:\s*$/, ''), String(T.premium.frames.length), String(T.plus.frames.length)],
    ['f_history', '20', '✓', '✓'], ['f_lfg', '—', '✓', '✓'],
    ['f_emblems', t('f_emblemsFree'), String(T.premium.emblems?.length ?? '✓'), String(T.plus.emblems?.length ?? '✓')],
    ['f_anim', '—', '—', '✓'], ['f_avatar', '—', '✓', '✓'], ['f_pbg', '—', '✓', '✓'],
    ['f_captain', '—', '✓', '✓'], ['f_color', '—', '—', '✓'], ['f_nick', t('f_nickPaid'), t('f_nickFree3'), t('f_nickFree3')], ['f_compare', '—', '—', '✓'], ['f_ach', '✓', '✓', '✓'], ['f_noadv', '✓', '✓', '✓'],
  ];
  const btn = tier => {
    if (!pi.enabled) return `<button class="btn" disabled>${t('notConfigured')}</button>`;
    const label = mine?.tier === tier ? t('extend') : mine?.tier === 'premium' && tier === 'plus' ? t('upgrade') : t('buy');
    return `<button class="btn ${tier === 'plus' ? 'gold' : ''}" data-buy="${tier}">${label}</button>`;
  };
  const col = (tier, name) => `<div class="tcol ${tier} ${mine?.tier === tier ? 'cur' : ''}">
      <img src="assets/crown-${tier}.png"><h2>${name}</h2>
      <div class="price">${t('perMonth', { p: T[tier].price, c: pi.currency })}${T[tier].was && T[tier].was !== T[tier].price ? `<span class="prem-was">${T[tier].was}</span>` : ''}</div>
      ${mine?.tier === tier ? `<span class="tag">${t('current')}</span>` : ''}${btn(tier)}</div>`;
  render(`<div class="phero"><img class="phero-art" src="assets/premium_logo.png"><div><h1>Konzte Premium</h1><p class="mute" style="max-width:560px">${t('premSub')}</p>
      ${mine ? `<span class="tag gold">${mine.tier === 'plus' ? 'Premium+' : 'Premium'} · ${mine.boost ? t('boostPrem') : t('activeUntil', { d: fmtDate(mine.until) })}</span>` : ''}
      ${pi.sandbox ? `<p class="lose" style="margin:10px 0 0;font-size:13px">${t('sandboxNote')}</p>` : ''}${typeof s2SaleBar === 'function' && pi.sale?.scope?.includes('premium') ? s2SaleBar(pi.sale) : ''}</div></div>
    <div class="card ptable">
      <div class="thead"><div></div><div class="tcol free"><h2>${t('free')}</h2><div class="price">0</div></div>${col('premium', 'Premium')}${col('plus', 'Premium+')}</div>
      ${rows.map(([k, a, b, c]) => `<div class="trow"><div>${t(k)}</div>${[a, b, c].map(v => `<div class="${v === '✓' ? 'win' : v === '—' ? 'mute' : ''}">${v}</div>`).join('')}</div>`).join('')}
    </div>`);
  document.querySelectorAll('[data-buy]').forEach(b => b.onclick = run(async () => {
    const r = await api('/api/premium/buy', { tier: b.dataset.buy });
    K.open(r.url);
    toast(t('payOpened'));
  }));
}

function applyMe(p) {
  S.myProfile = { ...S.myProfile, ...p };
  S.me = { ...S.me, ...p };
  S.profCache = null;
  if (S.lfg) loadLfg();
  renderMe();
  refresh();
}

function renderInventory() {
  const pi = S.premInfo, me = S.myProfile;
  if (!pi || !me) return render(`<div class="card empty-note">${t('loading')}</div>`);
  const av = me.available, cur = me.cosmetics || {};
  let hideLocked = true; try { hideLocked = localStorage.getItem('kz-inv-hide') !== '0'; } catch {}
  const vis = (kind, ids) => hideLocked ? ids.filter(id => av[kind].includes(id)) : ids;
  const cnt = (kind, ids) => `<span class="mute inv-cnt">${t('invCount', { n: ids.filter(id => av[kind].includes(id)).length, of: ids.length })}</span>`;
  const none = `<div class="empty-note inv-none">${t('invNone')} <a href="#" data-go2="shop">${t('shop')}</a> · <a href="#" data-go2="premium">Premium</a></div>`;
  const item = (kind, id, preview) => {
    const have = av[kind].includes(id);
    const on = cur[kind === 'banners' ? 'banner' : 'frame'] === id;
    return `<div class="inv ${have ? '' : 'lock'} ${on ? 'on' : ''}">${preview}
      <div class="inv-f"><span class="mute">${esc(cosmeticSource(kind, id))}</span>
      ${have ? `<button class="btn sm ${on ? 'ghost' : ''}" data-eq="${kind}" data-id="${on ? '' : id}">${on ? t('unequip') : t('equip')}</button>` : `<span class="tag">🔒 ${t('locked')}</span>`}</div></div>`;
  };
  render(`<div class="lbhead"><div><h1>${t('inventory')}</h1><div class="mute">${t('invSub')}</div></div><span class="grow"></span>
      <label class="invhide"><span>${t('hideLocked')}</span><button class="switch ${hideLocked ? 'on' : ''}" id="inv-hide"></button></label></div>
    <div class="card avc"><div class="avbig">${avaF(S.me, 'lg')}</div>
      <div class="grow"><h4>${t('avatar')} ${crown('premium')}</h4><p class="mute" style="margin:0 0 12px">${t('avatarHint')}</p>
        <div class="row">${S.me.premium?.tier ? `<button class="btn" id="av-up">${t('uploadAvatar')}</button>` : `<button class="btn" disabled>👑 ${t('premiumOnly')}</button>`}
        ${me.customAvatar ? `<button class="btn ghost" id="av-reset">${t('resetAvatar')}</button>` : ''}</div>
        <input type="file" id="av-file" accept="image/gif,image/png,image/jpeg,image/webp" hidden></div></div>
    <div class="card"><div class="card-h"><h4>${t('banners')}</h4>${cnt('banners', BANNERS)}</div>${vis('banners', BANNERS).length ? `<div class="invgrid wide">
      ${vis('banners', BANNERS).map(id => item('banners', id, `<div class="bprev">${bannerHtml(id, 'bimg')}<span>${nickHtml(S.me)}</span></div>`)).join('')}</div>` : none}</div>
    <div class="card" style="margin-top:16px"><div class="card-h"><h4>${t('emblems')}</h4>${cnt('emblems', [...EMBLEMS_SEASON, ...EMBLEMS_ALL])}</div><div class="embgrid">
      ${vis('emblems', [...EMBLEMS_SEASON, ...EMBLEMS_ALL]).sort((a, b) => av.emblems.includes(b) - av.emblems.includes(a)).map(id => { const have = av.emblems.includes(id), on = cur.emblem === id;
        return `<button class="embi ${have ? '' : 'lock'} ${on ? 'on' : ''}" ${have ? `data-emb="${on ? '' : id}"` : ''} title="${esc(cosmeticSource('emblems', id))}">${emblemHtml(id, 'big')}${have ? '' : '<span class="lk">🔒</span>'}</button>`; }).join('')}</div></div>
    <div class="card" style="margin-top:16px"><div class="card-h"><h4>${t('frames')}</h4>${cnt('frames', FRAMES)}</div>${vis('frames', FRAMES).length ? `<div class="invgrid">
      ${vis('frames', FRAMES).map(id => item('frames', id, `<div class="fprev">${avaF(S.me, 'lg', id)}</div>`)).join('')}</div>` : none}</div>
    ${hideLocked && !av.colors.length ? '' : `<div class="card" style="margin-top:16px"><h4>${t('nickColors')} · Premium+</h4><div class="row" style="flex-wrap:wrap">
      ${pi.colors.map(c => `<button class="cdot ${cur.color === c ? 'on' : ''} ${av.colors.includes(c) ? '' : 'lock'}" style="--c:${c}" data-color="${av.colors.includes(c) ? (cur.color === c ? '' : c) : '-'}"><span style="color:${c}">${esc(S.me.nick)}</span></button>`).join('')}</div></div>`}
    ${hideLocked ? '' : `<div class="card dim" style="margin-top:16px"><h4>${t('boosts')}</h4><div class="empty-note">⚡ ${t('soonBoosts')}</div></div>`}`);
  $('#inv-hide').onclick = () => { try { localStorage.setItem('kz-inv-hide', hideLocked ? '0' : '1'); } catch {} renderInventory(); };
  document.querySelectorAll('.inv-none [data-go2]').forEach(a => a.onclick = e => { e.preventDefault(); go(a.dataset.go2); });
  const save = run(async body => applyMe(await api('/api/premium/cosmetics', body)));
  document.querySelectorAll('[data-eq]').forEach(b => b.onclick = () => save({ [b.dataset.eq === 'banners' ? 'banner' : 'frame']: b.dataset.id }));
  document.querySelectorAll('[data-emb]').forEach(b => b.onclick = () => save({ emblem: b.dataset.emb }));
  document.querySelectorAll('[data-color]').forEach(b => b.onclick = () => b.dataset.color !== '-' && save({ color: b.dataset.color }));
  if ($('#av-up')) $('#av-up').onclick = () => $('#av-file').click();
  $('#av-file').onchange = run(async e => {
    const f = e.target.files[0]; if (!f) return;
    const data = await new Promise((ok, bad) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = bad; r.readAsDataURL(f); });
    applyMe(await api('/api/premium/avatar', { data })); toast(t('avatarSaved'));
  });
  if ($('#av-reset')) $('#av-reset').onclick = run(async () => applyMe(await api('/api/premium/avatar', { reset: true })));
}

function loadLfg() {
  api('/api/lfg').then(l => { S.lfg = l; if (S.page === 'lfg') refresh(); }).catch(e => toast(e.message, true));
}

const ago = ts => {
  const rtf = new Intl.RelativeTimeFormat(LOCALE[LANG], { numeric: 'auto' });
  const m = Math.round((ts - Date.now()) / 60000);
  if (Math.abs(m) < 60) return rtf.format(m, 'minute');
  const h = Math.round(m / 60);
  return Math.abs(h) < 24 ? rtf.format(h, 'hour') : rtf.format(Math.round(h / 24), 'day');
};
const timeKey = { day: 'tDay', evening: 'tEvening', night: 'tNight', any: 'tAny' };

function renderLfg() {
  const F = S.lfgF;
  const all = S.lfg;
  const mine = all?.find(p => p.player.id === S.me.id);
  const list = (all || []).filter(p =>
    (!F.langs.length || F.langs.some(l => p.langs.includes(l))) &&
    (!F.styles.length || F.styles.some(x => p.styles.includes(x))) &&
    (F.mode === 'all' || p.mode === F.mode || p.mode === 'any') &&
    (!F.online || p.online) &&
    p.player.lvl >= F.min && p.player.lvl <= F.max);
  const chips = (items, sel, attr, label) => items.map(x => `<button class="fchip ${sel.includes(x) ? 'on' : ''}" ${attr}="${x}">${label(x)}</button>`).join('');
  const lvlOpts = v => Array.from({ length: 11 }, (_, i) => `<option value="${i}" ${v === i ? 'selected' : ''}>${i}</option>`).join('');
  const card = p => `<div class="card lfgc ${p.player.id === S.me.id ? 'mine' : ''} ${p.player.prem?.tier ? 'prem' : ''}">${bannerHtml(p.player.prem?.banner, 'lfg-b')}
      <div class="row">
        <div class="avwrap">${avaF(p.player)}<i class="st ${p.inMatch ? 'busy' : p.online ? 'on' : ''}"></i></div>
        <div style="min-width:0"><div class="nk">${nickHtml(p.player)}</div>
          <div class="mute" style="font-size:12px">${p.inMatch ? t('inMatchNow') : p.online ? t('onlineNow') : t('offline')} · ${ago(p.at)}</div></div>
        <span class="grow"></span>
        <div class="lv"><img class="lvl" src="${lvlIc(p.player, p.player.lvl)}"><div>${isCal(p.player) ? `<b>${t('la_calShort', { n: p.player.cal })}</b>` : `<b>${p.player.elo}</b><span>ELO</span>`}</div></div>
      </div>
      <div class="tags">${p.langs.map(l => `<span class="tag lang">${LFG_LANG_NAMES[l]}</span>`).join('')}
        ${p.styles.map(x => `<span class="tag">${t('s_' + x)}</span>`).join('')}</div>
      ${p.text ? `<p class="txt">${esc(p.text)}</p>` : ''}
      <div class="meta">
        <span><b>${p.mode === 'any' ? t('anyMode') : modeX(p.mode)}</b></span>
        <span class="${p.mic ? 'win' : 'mute'}">${p.mic ? '🎙 ' + t('micYes') : t('micNo')}</span>
        <span>${t(timeKey[p.time] || 'tAny')}</span>
        <span>${t('games')} <b>${p.stats.games}</b></span><span>WR <b>${p.stats.wr}%</b></span><span>K/D <b>${p.stats.kd}</b></span>${p.stats.elo1v1 != null ? `<span>1×1 <b>${p.stats.elo1v1}</b></span>` : ''}
      </div>
      <div class="row">
        <button class="btn ghost sm" data-prof="${p.player.id}">${t('profile')}</button>
        ${p.player.id !== S.me.id && !S.live?.party?.members.some(m => m.id === p.player.id) ? `<button class="btn sm" data-invite="${p.player.id}">${t('inviteParty')}</button>` : ''}
        ${p.player.id !== S.me.id && /^\d+$/.test(p.player.id) ? `<button class="btn sm discord" data-dm="${p.player.id}">${t('contact')}</button>` : ''}
        ${S.me.staff && p.player.id !== S.me.id ? `<button class="btn ghost sm" data-lfgdel="${p.player.id}" style="margin-left:auto">${t('removePost')}</button>` : ''}
      </div>
    </div>`;
  render(`<div class="lbhead"><div><h1>${t('lfg')}</h1><div class="mute">${t('lfgSub')}</div></div><span class="grow"></span>
      ${mine ? `<button class="btn ghost" id="lfg-del">${t('removePost')}</button><button class="btn" id="lfg-new">${t('editPost')}</button>` : `<button class="btn big" id="lfg-new">${t('createPost')}</button>`}</div>
    <div class="card lfgf">
      <div class="frow"><h4>${t('languages')}</h4><div class="fchips">${chips(Object.keys(LFG_LANG_NAMES), F.langs, 'data-fl', l => LFG_LANG_NAMES[l])}</div></div>
      <div class="frow"><h4>${t('styles')}</h4><div class="fchips">${chips(LFG_STYLES, F.styles, 'data-fs', x => t('s_' + x))}</div></div>
      <div class="frow"><h4>${t('modeL')}</h4>
        <div class="seg">${['all', ...PUB_MODES].map(m => `<button data-fm="${m}" class="${F.mode === m ? 'on' : ''}">${m === 'all' ? t('all') : m}</button>`).join('')}</div>
        <h4 style="margin-left:18px">${t('levelRange')}</h4><select id="f-min">${lvlOpts(F.min)}</select><span class="mute">—</span><select id="f-max">${lvlOpts(F.max)}</select>
        <label class="row" style="gap:8px;margin-left:18px;cursor:pointer"><button class="switch ${F.online ? 'on' : ''}" id="f-online"></button>${t('onlineOnly')}</label>
        <span class="grow"></span><span class="mute">${t('posts', { n: list.length })}</span></div>
    </div>
    ${all == null ? `<div class="card empty-note">${t('loading')}</div>` : list.length ? `<div class="lfggrid">${list.map(card).join('')}</div>` : `<div class="card empty-note">${t('nobodyLfg')}</div>`}`);

  const toggle = (arr, v) => { const i = arr.indexOf(v); i < 0 ? arr.push(v) : arr.splice(i, 1); refresh(); };
  document.querySelectorAll('[data-fl]').forEach(b => b.onclick = () => toggle(F.langs, b.dataset.fl));
  document.querySelectorAll('[data-fs]').forEach(b => b.onclick = () => toggle(F.styles, b.dataset.fs));
  document.querySelectorAll('[data-fm]').forEach(b => b.onclick = () => { F.mode = b.dataset.fm; refresh(); });
  $('#f-min').onchange = e => { F.min = +e.target.value; refresh(); };
  $('#f-max').onchange = e => { F.max = +e.target.value; refresh(); };
  $('#f-online').onclick = () => { F.online = !F.online; refresh(); };
  $('#lfg-new').onclick = () => openLfgForm(mine);
  if ($('#lfg-del')) $('#lfg-del').onclick = run(async () => { await api('/api/lfg/remove', {}); toast(t('postRemoved')); loadLfg(); });
  document.querySelectorAll('[data-prof]').forEach(b => b.onclick = () => go('profile', b.dataset.prof));
  bindParty();
  document.querySelectorAll('[data-dm]').forEach(b => b.onclick = () => K.open('https://discord.com/users/' + b.dataset.dm));
  document.querySelectorAll('[data-lfgdel]').forEach(b => b.onclick = run(async () => { await api('/api/staff/lfg-remove', { uid: b.dataset.lfgdel }); loadLfg(); }));
}

function openLfgForm(cur) {
  const f = cur ? { ...cur, mode: cur.mode === 'any' ? 'any' : pubMode(cur.mode), langs: [...cur.langs], styles: [...cur.styles] } : { langs: LANG === 'en' ? ['en'] : [LANG], styles: [], mode: '2v2', mic: true, time: 'evening', text: '' };
  const draw = box => {
    box.querySelector('#lf-body').innerHTML = `
      <h4>${t('languages')}</h4><div class="fchips">${Object.keys(LFG_LANG_NAMES).map(l => `<button class="fchip ${f.langs.includes(l) ? 'on' : ''}" data-l="${l}">${LFG_LANG_NAMES[l]}</button>`).join('')}</div>
      <h4>${t('styles')} <span class="mute" style="text-transform:none;letter-spacing:0">(≤ 4)</span></h4><div class="fchips">${LFG_STYLES.map(x => `<button class="fchip ${f.styles.includes(x) ? 'on' : ''}" data-s="${x}">${t('s_' + x)}</button>`).join('')}</div>
      <div class="row" style="flex-wrap:wrap;gap:18px">
        <div><h4>${t('modeL')}</h4><div class="seg">${[...PUB_MODES, 'any'].map(m => `<button data-m="${m}" class="${f.mode === m ? 'on' : ''}">${m === 'any' ? t('anyMode') : modeX(m)}</button>`).join('')}</div></div>
        <div><h4>${t('playTime')}</h4><div class="seg">${Object.keys(timeKey).map(k => `<button data-tm="${k}" class="${f.time === k ? 'on' : ''}">${t(timeKey[k])}</button>`).join('')}</div></div>
        <div><h4>${t('micYes')}</h4><button class="switch ${f.mic ? 'on' : ''}" data-mic></button></div>
      </div>`;
    const tog = (arr, v, max) => { const i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1); else if (arr.length < max) arr.push(v); draw(box); };
    box.querySelectorAll('[data-l]').forEach(b => b.onclick = () => tog(f.langs, b.dataset.l, 5));
    box.querySelectorAll('[data-s]').forEach(b => b.onclick = () => tog(f.styles, b.dataset.s, 4));
    box.querySelectorAll('[data-m]').forEach(b => b.onclick = () => { f.mode = b.dataset.m; draw(box); });
    box.querySelectorAll('[data-tm]').forEach(b => b.onclick = () => { f.time = b.dataset.tm; draw(box); });
    box.querySelector('[data-mic]').onclick = () => { f.mic = !f.mic; draw(box); };
  };
  modal(`<div class="card accent col" style="width:640px;max-height:88vh;overflow-y:auto"><h2>${cur ? t('editPost') : t('createPost')}</h2>
    <div class="col" id="lf-body" style="gap:10px"></div>
    <h4>${t('aboutMe')}</h4><textarea id="lf-text" rows="3" maxlength="280">${esc(f.text)}</textarea>
    <div class="err" id="lf-err"></div>
    <div class="row"><button class="btn big" id="lf-save">${t('save')}</button><button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, box => {
    draw(box);
    $('#lf-save').onclick = async () => {
      try {
        await api('/api/lfg', { ...f, text: $('#lf-text').value });
        closeModal(); toast(t('postSaved')); loadLfg();
      } catch (e) { $('#lf-err').textContent = e.message; }
    };
  });
}

function renderPlay() {
  const st = S.live;
  if (!st) return render(`<div class="center" style="min-height:70vh"><div class="searching"><div class="pulse"></div><b>${t('connecting')}</b></div></div>`);
  if (st.match) return renderMatch(st.match);
  if (S.finishedMatch) return renderFinished(S.finishedMatch);

  const mode = S.mode = pubMode(S.mode);
  const r = S.me['r' + mode];
  const lvl = levelOf(r.elo);
  const nx = LEVELS[lvl + 1];
  const inQ = st.myQueue === mode;
  const ban = S.me.ban && (S.me.ban.until === 0 || S.me.ban.until > Date.now()) ? S.me.ban : null;
  const ss = S.stats;
  const qTotal = Object.values(st.queues).reduce((a, b) => a + b, 0);
  const myM = (S.myProfile?.matches || []).slice(0, 5);

  render(`
    <div class="hero shero"><img class="s-logo" src="assets/${S.seasonLogo || 'season1_logo.png'}" alt=""><div>
      <h4 style="margin:0 0 4px;color:var(--gold)">KONZTE FACEIT · COMBAT MASTER</h4>
      <h1>${t('season', { n: ss?.season ?? 1 })}<span class="s-name">${esc(S.season?.name || ({ 1: 'Relic', 2: 'Polaris' })[ss?.season ?? 1] || '')}</span> ${S.season?.status === 'beta' || S.season?.status === 'warmup' ? `<span class="tag gold s-beta">${t(S.season.status === 'warmup' ? 'seasonWarm' : 'seasonBeta')}</span>` : ''}</h1>
      <div class="s-when">${seasonWhen()}</div>
      <div class="stats">
        <div class="hstat"><b>${st.online}</b><span>${t('online', { n: '' }).trim()}</span></div>
        <div class="hstat"><b>${qTotal}</b><span>${t('inQueue')}</span></div>
        <div class="hstat"><b>${ss?.live ?? '–'}</b><span>${t('liveMatches')}</span></div>
        <div class="hstat"><b>${ss?.today ?? '–'}</b><span>${t('today')}</span></div>
        <div class="hstat"><b>${ss?.players ?? '–'}</b><span>${t('players')}</span></div>
      </div>
    </div></div>
    ${ban ? `<div class="card" style="border-color:var(--lose);margin-top:16px"><h3 class="lose">${t('banned')}</h3>${esc(ban.reason)} · ${ban.until ? t('until', { d: fmtDT(ban.until) }) : t('forever')}</div>` : ''}
    <div class="home">
      <div class="col" style="gap:16px">
        <div class="card">
          <div class="card-h"><div class="seg">${PUB_MODES.map(m => `<button data-mode="${m}" class="${mode === m ? 'on' : ''}" ${st.myQueue ? 'disabled' : ''}>${modeX(m)}</button>`).join('')}</div>
            <span class="grow"></span><span class="mute">${t('inQueue')}: <b class="num" style="color:var(--text)">${st.queues[mode] ?? 0}</b> / ${mode === '1v1' ? 2 : 4}</span></div>
          <div class="queue">
            <div class="qbox" style="background-image:url(${mapImg(mode === '1v1' ? 'Highrise' : 'Museum')})">
              <div class="mode">${mode.replace('v', ' × ')}</div>
              <div class="sub"><span>${mode === '1v1' ? t('soloDuel') : t('duel')}</span><span>${t('rServer')}: <b>${t('europe')}</b></span></div>
              ${inQ
                ? `<div class="searching"><div class="pulse"></div><b>${t('searching')} <span data-since="${S.queuedAt}"></span></b><span class="mute">${st.queues[mode] ?? 0} / ${mode === '1v1' ? 2 : 4}</span><button class="btn ghost sm" data-act="leave" style="margin-left:auto">${t('cancel')}</button></div>`
                : st.party && st.party.leader !== S.me.id ? `<div class="searching"><b>${t('leaderStarts')}</b></div>`
                : mode === '1v1' && st.party?.members.length > 1 ? `<div class="searching"><b>${t('noParty1v1')}</b></div>`
                : mode === '2v2' && st.party?.members.length > 2 ? `<div class="searching"><b>${t('noPartyDuel')}</b></div>`
                : `<button class="btn big" data-act="queue" data-mode="${mode}" ${st.myQueue || ban ? 'disabled' : ''}>${st.party?.members.length > 1 ? t('findMatchParty', { n: st.party.members.length }) : t('findMatch')}</button>`}
            </div>
            <div class="myrank">
              <div class="top"><img class="lvl lg" src="${lvlIc(r, lvl)}"><div>${isCal(r) ? `<div class="big" style="font-size:24px">${calTxt(r)}</div>` : `<div class="mute">${t('level', { n: lvl })}</div><div class="big">${r.elo}<span class="mute" style="font-size:14px"> ELO</span></div>`}</div></div>
              <div><div class="bar"><i style="width:${levelPct(r.elo)}%"></i></div>
                <div class="mute" style="font-size:12px;margin-top:5px">${nx ? t('toNext', { n: nx - r.elo, l: lvl + 1 }) : t('maxLevel')}</div></div>
              <div class="kv">
                <div><b>${r.w + r.l}</b><span>${t('games')}</span></div>
                <div><b>${wrNum(r)}%</b><span>${t('winrate')}</span></div>
                <div><b>${kd(r.k, r.d)}</b><span>${t('kd')}</span></div>
                <div><b class="win">${r.w}</b><span>${t('wins')}</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card"><h4>${t('howTitle')}</h4>
          <div class="steps">${[1, 2, 3, 4].map(i => `<div class="step"><i>${i}</i><span>${t('how' + i)}</span></div>`).join('')}</div>
        </div>
      </div>
      <div class="col" style="gap:16px">
        ${partyCard(st)}
        ${friendsCard(st)}
        <div class="card"><h4>${t('myMatches')}</h4>
          ${myM.length ? `<div class="feed">${myM.map(h => `<div class="fm ${h.won ? 'w' : 'l'}" data-mid="${h.id}">
              <span class="t">${mapName(h.map)} <span class="tag">${h.mode}</span></span><span class="${h.delta > 0 ? 'win' : 'lose'} num">${sign(h.delta)}</span>
              <span class="m">#${h.id} · ${h.score ? esc(h.score) + ' · ' : ''}${h.k}/${h.d}</span><span class="m">${fmtDate(h.at)}</span></div>`).join('')}</div>`
            : `<div class="empty-note">${t('noMatches')}</div>`}
        </div>
        <div class="card"><h4>${t('recentMatches')}</h4>
          ${ss?.recent?.length ? `<div class="feed">${ss.recent.map(m => `<div class="fm" data-mid="${m.id}">
              <span class="t"><span class="${m.winner === 'A' ? 'alfa' : 'bravo'}">${TEAM[m.winner]}</span> · ${mapName(m.map)}</span><span class="tag">${m.mode}</span>
              <span class="m">#${m.id}${m.score ? ' · ' + esc(m.score) : ''} · ${esc(m.A[0])} vs ${esc(m.B[0])}</span><span class="m">${fmtDT(m.at)}</span></div>`).join('')}</div>`
            : `<div class="empty-note">${t('noMatches')}</div>`}
        </div>
      </div>
    </div>
    ${seasonRewards()}`);
  document.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => { S.mode = b.dataset.mode; refresh(); });
  bindPlay();
  bindParty();
  tick();
}

function bindPlay() {
  document.querySelectorAll('[data-act]').forEach(b => b.onclick = e => {
    const a = b.dataset.act;
    if (a === 'queue') { const mode = b.dataset.mode, go = () => { S.queuedAt = Date.now(); wsSend({ t: 'queue', mode }); }; window.KZGame ? KZGame.gate(go) : go(); }
    else if (a === 'leave') wsSend({ t: 'leave' });
    else if (a === 'pick') wsSend({ t: 'pick', uid: b.dataset.uid });
    else if (a === 'ban') wsSend({ t: 'ban', map: b.dataset.map });
    else if (a === 'copy') { navigator.clipboard.writeText(b.dataset.text); toast(t('copied', { t: b.dataset.text })); }
    else if (a === 'result') openResultForm();
    else if (a === 'confirm') run(async () => { await api('/api/match/confirm', {}); toast(t('resultConfirmed')); })();
    else if (a === 'dispute') openDispute();
    else if (a === 'draw') run(async () => { await api('/api/match/draw', { on: b.dataset.on === '1' }); })();
    else if (a === 'report') { const m = S.finishedMatch, p = m && [...m.teams.A, ...m.teams.B].find(x => x.id === b.dataset.uid); if (p) openReport(p, m.id); }
    else if (a === 'profile') go('profile', b.dataset.uid);
    else if (a === 'back') { S.finishedMatch = null; S.backAt = 0; refresh(); }
    else if (a === 'zoom') openShot(b.src);
    e.stopPropagation();
  });
  document.querySelectorAll('[data-mid]').forEach(el => el.onclick = run(async () => { S.backAt = 0; S.finishedMatch = await api('/api/match?id=' + el.dataset.mid); S.page = 'play'; markNav(); refresh(); }));
  document.querySelectorAll('[data-voice]').forEach(b => b.onclick = () => K.open(b.dataset.voice));
  const chat = $('#chat-form');
  if (chat) chat.onsubmit = e => { e.preventDefault(); const i = $('#chat-in'); if (i.value.trim()) wsSend({ t: 'chat', text: i.value }); i.value = ''; };
}

function renderReady() {
  const rc = S.live?.ready;
  const box = $('#modal');
  if (!rc) { if (box.dataset.kind === 'ready') { box.innerHTML = ''; box.dataset.kind = ''; } return; }
  box.dataset.kind = 'ready';
  const C = 2 * Math.PI * 42;
  box.innerHTML = `<div class="overlay"><div class="card found">
    <span class="tag">${rc.mode}</span>
    <h1>${t('matchFound')}</h1>
    <div class="ring"><svg viewBox="0 0 96 96"><circle class="bg" cx="48" cy="48" r="42"/><circle class="fg" cx="48" cy="48" r="42" stroke-dasharray="${C}" data-ring="${rc.deadline}" data-c="${C}"/></svg><b data-deadline="${rc.deadline}" data-plain></b></div>
    <div class="dots">${Array.from({ length: rc.total }, (_, i) => `<i class="${i < rc.accepted ? 'ok' : ''}"></i>`).join('')}</div>
    ${rc.iAccepted
      ? `<h3 class="win">${t('accepted', { a: rc.accepted, t: rc.total })}</h3>`
      : `<div class="row" style="justify-content:center"><button class="btn big green" id="acc">${t('accept')}</button><button class="btn ghost" id="dec">${t('decline')}</button></div>`}
  </div></div>`;
  if (!rc.iAccepted) { $('#acc').onclick = () => wsSend({ t: 'accept' }); $('#dec').onclick = () => wsSend({ t: 'decline' }); }
  tick();
}

function partyCard(st) {
  const p = st.party;
  if (!p) return `<div class="card party-card"><h4>${t('party')}</h4><p class="mute" style="margin:0 0 12px;font-size:12.5px">${t('partyHint')}</p>
    <div class="row"><button class="btn sm" data-party="create">${t('createParty')}</button><input id="party-code" placeholder="${t('partyCodePh')}" maxlength="6" style="width:110px;text-transform:uppercase"><button class="btn ghost sm" data-party="join">${t('join')}</button></div></div>`;
  const lead = p.leader === S.me.id;
  return `<div class="card party-card accent"><div class="card-h"><h4>${t('party')} · ${p.members.length}/2</h4><span class="grow"></span>
      <code class="pcode" data-party="copy" title="${t('copyId')}">${esc(p.code)}</code></div>
    ${p.members.map(m => `<div class="pmem">${avaF(m, 'sm')}<span class="num grow">${nickHtml(m)}</span>${m.id === p.leader ? `<span class="tag gold">${t('leader')}</span>` : ''}<i class="dot ${m.online ? 'on' : ''}"></i>
      ${lead && m.id !== S.me.id ? `<button class="btn ghost sm" data-kick="${m.id}">✕</button>` : ''}</div>`).join('')}
    ${Array.from({ length: 5 - p.members.length }, () => `<div class="pmem empty">${t('inviteHint')}</div>`).join('')}
    <div class="row" style="margin-top:10px"><button class="btn ghost sm" data-party="leave">${t('leaveParty')}</button></div></div>`;
}
function friendsCard(st) {
  const f = st.friends || { list: [], requests: [] };
  const label = { online: t('onlineNow'), queue: t('searching'), match: t('inMatchNow'), offline: t('offline') };
  const inParty = id => st.party?.members.some(m => m.id === id);
  const canInvite = !st.party || (st.party.leader === S.me.id && st.party.members.length < 5);
  return `<div class="card friends-card"><div class="card-h"><h4>${t('friends')} · ${f.list.filter(x => x.status !== 'offline').length}/${f.list.length}</h4></div>
    ${f.requests.map(r => `<div class="pmem req">${avaF(r, 'sm')}<span class="num grow"><div class="nkl" title="${esc(r.nick)}">${nickHtml(r)}</div><div class="mute" style="font-size:11.5px">${t('wantsFriend')}</div></span>
      <button class="btn green sm" data-fr-yes="${r.id}">✓</button><button class="btn ghost sm" data-fr-no="${r.id}">✕</button></div>`).join('')}
    ${f.list.map(x => `<div class="pmem fr">${avaF(x, 'sm')}<i class="dot ${x.status}"></i><span class="num grow"><div class="nkl" title="${esc(x.nick)}">${nickHtml(x)}</div><div class="mute" style="font-size:11.5px">${label[x.status]}</div></span>
      ${inParty(x.id) ? `<span class="tag">${t('party')}</span>` : x.status !== 'offline' && x.status !== 'match' && canInvite ? `<button class="btn sm fr-inv" data-invite="${x.id}" title="${t('invite')}" aria-label="${t('invite')}"><svg viewBox="0 0 24 24"><circle cx="9.5" cy="8" r="3.5"/><path d="M3 19.5c.6-3.4 3.3-5.5 6.5-5.5s5.9 2.1 6.5 5.5M18.5 8v6M15.5 11h6"/></svg></button>` : ''}
      <button class="btn ghost sm fr-x" data-fr-rm="${x.id}" title="${t('removeFriend')}">✕</button></div>`).join('') || `<div class="mute" style="font-size:12.5px;padding:4px 2px 8px">${t('noFriends')}</div>`}
    <div class="row" style="margin-top:8px"><input id="fr-q" class="grow" placeholder="${t('addFriendPh')}" autocomplete="off"><button class="btn ghost sm" id="fr-go">${t('search')}</button></div>
    <div id="fr-res"></div></div>`;
}
function bindFriends() {
  const act = (sel, fn) => document.querySelectorAll(sel).forEach(b => b.onclick = run(async e => { e.stopPropagation(); await fn(b); }));
  act('[data-fr-yes]', b => api('/api/friends/answer', { uid: b.dataset.frYes, yes: true }));
  act('[data-fr-no]', b => api('/api/friends/answer', { uid: b.dataset.frNo }));
  act('[data-fr-rm]', b => confirm(t('removeFriendQ')) && api('/api/friends/remove', { uid: b.dataset.frRm }));
  act('[data-fr-add]', async b => { await api('/api/friends/request', { uid: b.dataset.frAdd }); toast(t('friendSent')); if ($('#fr-res')) $('#fr-res').innerHTML = ''; else b.replaceWith(Object.assign(document.createElement('span'), { className: 'tag', textContent: t('requestSent') })); });
  const search = run(async () => {
    const list = await api('/api/players/search?q=' + encodeURIComponent($('#fr-q').value));
    const f = S.live?.friends || {};
    $('#fr-res').innerHTML = list.filter(p => p.id !== S.me.id).map(p => `<div class="pmem">${avaF(p, 'sm')}<span class="num grow">${nickHtml(p)}</span>
      ${f.list?.some(x => x.id === p.id) ? `<span class="tag">${t('friend')}</span>` : f.sent?.includes(p.id) ? `<span class="mute">${t('requestSent')}</span>` : `<button class="btn sm" data-fr-add="${p.id}">+ ${t('addFriend')}</button>`}</div>`).join('') || `<div class="empty-note">${t('nothingFound')}</div>`;
    bindFriends();
  });
  if ($('#fr-go')) { $('#fr-go').onclick = search; $('#fr-q').onkeydown = e => { if (e.key === 'Enter') search(); }; }
}

function bindParty() {
  document.querySelectorAll('[data-party]').forEach(b => b.onclick = () => {
    const a = b.dataset.party;
    if (a === 'create') wsSend({ t: 'party-create' });
    else if (a === 'join') wsSend({ t: 'party-join', code: $('#party-code').value });
    else if (a === 'leave') wsSend({ t: 'party-leave' });
    else if (a === 'copy') { navigator.clipboard.writeText(S.live.party.code); toast(t('copied', { t: S.live.party.code })); }
  });
  bindFriends();
  document.querySelectorAll('[data-kick]').forEach(b => b.onclick = () => wsSend({ t: 'party-kick', uid: b.dataset.kick }));
  document.querySelectorAll('[data-invite]').forEach(b => b.onclick = e => { e.stopPropagation(); wsSend({ t: 'party-invite', uid: b.dataset.invite }); toast(t('inviteSent')); });
}
function renderInvites() {
  const box = $('#invites');
  const list = S.live?.invites || [];
  box.innerHTML = list.map(i => `<div class="card accent invite">${avaF(i.from, 'sm')}<div class="grow"><b class="num">${nickHtml(i.from)}</b><div class="mute" style="font-size:12px">${t('invitesYou')}</div></div>
    <button class="btn green sm" data-inv="${i.party}" data-yes="1">${t('accept')}</button><button class="btn ghost sm" data-inv="${i.party}">✕</button></div>`).join('');
  box.querySelectorAll('[data-inv]').forEach(b => b.onclick = () => wsSend({ t: 'party-answer', party: b.dataset.inv, yes: !!b.dataset.yes }));
}

function playerRow(p, m, opts = {}) {
  const grp = opts.groups?.[p.id] || m?.groups?.[p.id];
  const isCap = m && Object.values(m.captains).includes(p.id);
  const isHost = m && m.host.id === p.id;
  const d = m?.eloDelta?.[p.id];
  const st = m?.result?.stats?.[p.id];
  return `<div class="pl ${p.id === S.me.id ? 'me' : ''} ${opts.pick ? 'pickable' : ''} ${p.prem?.banner ? 'has-b' : ''}" ${opts.pick ? `data-act="pick" data-uid="${p.id}"` : `data-act="profile" data-uid="${p.id}"`}>
    ${bannerHtml(p.prem?.banner, 'pl-b')}${avaF(p)}<div style="min-width:0"><div class="nm">${nickHtml(p)} ${grp ? `<span class="tag party p${grp}">${t('partyN', { n: grp })}</span>` : ''} ${isCap ? '<span class="tag gold">C</span>' : ''} ${isHost ? `<span class="tag">${t('host')}</span>` : ''}</div>
    <div class="sub">${isCal(p) ? t('la_calShort', { n: p.cal }) : `${p.elo} ELO`}${st ? ` · ${st.k}/${st.d}` : ''}${d != null ? ` · <span class="${d > 0 ? 'win' : 'lose'}">${sign(d)}</span>` : ''}</div></div>
    <img class="lvl" src="${lvlIc(p, p.lvl)}"></div>`;
}

const avgElo = ps => Math.round(ps.reduce((s, p) => s + p.elo, 0) / ps.length);

function teamCol(m, side) {
  const size = { '5v5': 5, '2v2': 2, '1v1': 1 }[m.mode] || 1;
  const ps = m.teams[side];
  const turn = m.turn === side && ['pick', 'ban'].includes(m.state);
  const won = m.result?.winner === side && m.state === 'done';
  return `<div class="card team ${side} ${turn ? 'turn' : ''}">
    <div class="card-h"><h3 class="${side === 'A' ? 'alfa' : 'bravo'}">${t('teamName', { n: TEAM[side] })}</h3>${won ? '<span class="tag gold">WIN</span>' : ''}
      <span class="grow"></span><span class="mute" style="font-size:12px">${t('avg', { n: avgElo(ps) })}</span></div>
    ${ps.map(p => playerRow(p, m)).join('')}
    ${Array.from({ length: size - ps.length }, () => '<div class="pl empty"></div>').join('')}
  </div>`;
}

function matchBar(m) {
  const f = m.forecast;
  const side = s => `<div class="mside ${s}">
      <div class="tn ${s === 'A' ? 'alfa' : 'bravo'}">${t('teamName', { n: TEAM[s] })}${m.me === s ? `<span class="tag">${t('you')}</span>` : ''}</div>
      <div class="meta"><span>ELO <b>${avgElo(m.teams[s])}</b></span>
        ${f ? `<span>${t('winChance')} <b>${s === 'A' ? f.pA : 100 - f.pA}%</b></span><span><b class="win">+${f[s][0]}</b> / <b class="lose">−${f[s][1]}</b></span>` : ''}</div></div>`;
  return `<div class="mbar">${side('A')}
    <div class="mmid"><span class="tag">${m.mode} · #${m.id}</span>${m.test ? `<span class="tag gold">${t('testTag')}</span>` : ''}<div class="vs">VS</div><div class="mapname">${m.map ? mapName(m.map) : (m.turn ? `<span class="timer" data-deadline="${m.deadline}"></span>` : '')}</div></div>
    ${side('B')}
    ${f ? `<div class="prob"><i style="width:${f.pA}%"></i><i style="width:${100 - f.pA}%"></i></div>` : ''}</div>`;
}

function stepper(m) {
  const steps = [['stepAccept'], ['stepPick'], ['stepVeto'], ['stepLive'], ['stepResult']];
  if (m.mode === '2v2' || m.mode === '1v1' || m.autoTeams) steps.splice(1, 1);
  const curKey = { pick: 'stepPick', ban: 'stepVeto', live: 'stepLive', submitted: 'stepResult', disputed: 'stepResult', done: 'stepResult' }[m.state];
  const ci = steps.findIndex(s => s[0] === curKey);
  return `<div class="stepper">${steps.map((s, i) => `<div class="${i < ci || m.state === 'done' ? 'done' : i === ci ? 'cur' : ''}"><i>${i < ci || m.state === 'done' ? '✓' : i + 1}</i>${t(s[0])}</div>`).join('')}</div>`;
}

function renderMatch(m) {
  const myCap = Object.keys(m.captains).find(k => m.captains[k] === S.me.id);
  const myTurn = m.turn && myCap === m.turn;
  const capNick = side => esc(m.teams[side][0].nick);
  let center = '';

  if (m.state === 'pick') {
    center = `<div class="card"><div class="card-h"><h3>${myTurn ? t('yourPick') : t('picks', { n: capNick(m.turn) })}</h3><span class="grow"></span><span class="timer" data-deadline="${m.deadline}"></span></div>
      ${m.pool.map(p => { const can = !m.canPick || m.canPick.includes(p.id); return `<div class="${can ? '' : 'nopick'}">${playerRow(p, null, { pick: myTurn && can, groups: m.groups })}</div>`; }).join('')}</div>`;
  } else if (m.state === 'ban') {
    const banned = Object.fromEntries(m.bans.map(b => [b.map, b.by]));
    center = `<div class="card"><div class="card-h"><h3>${myTurn ? t('banMap') : t('bans', { n: capNick(m.turn) })}</h3><span class="grow"></span><span class="timer" data-deadline="${m.deadline}"></span></div>
      <div class="maps">${matchMaps(m).map(x => banned[x]
        ? `<div class="map banned" data-banned="${t('bannedMap')}" style="background-image:url(${mapImg(x)})"><span>${mapName(x)}</span><em class="by tag ${banned[x] === 'A' ? '' : 'red'}">${TEAM[banned[x]]}</em></div>`
        : `<div class="map ${myTurn ? 'can' : ''}" style="background-image:url(${mapImg(x)})" ${myTurn ? `data-act="ban" data-map="${x}"` : ''}><span>${mapName(x)}</span></div>`).join('')}</div></div>`;
  } else {
    const iAmHost = m.host.id === S.me.id;
    const rules = [['rMode', 'Search & Destroy'], ['rServer', t('europe')], ['rZip', t('off')], ['rMarker', t(m.mode === '5v5' ? 'off' : 'on')], ['rBots', t('off')], ['rPara', t('off')]];
    center = `<div class="bigmap" style="background-image:url(${mapImg(m.map)})"><span>${mapName(m.map)}</span></div>
      ${m.me && !m.test && m.mode !== '1v1' ? `<div class="card voice-card ${m.me}"><svg viewBox="0 0 24 24"><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>
        <div class="grow"><b>${t('teamVoice', { n: TEAM[m.me] })}</b><div class="mute" style="font-size:12.5px">${m.voice ? t('voiceHint') : t('voiceCreating')}</div></div>
        ${m.voice ? `<button class="btn" data-voice="${esc(m.voice)}">${t('joinVoice')}</button>` : '<div class="pulse"></div>'}</div>` : ''}
      <div class="card accent">
        <h4>${iAmHost ? t('youHost') : t('lobbyHost')}</h4>
        <div class="host">${ava(m.host)}<div><div style="font-family:TTB;font-size:18px">${esc(m.host.nick)}</div><div class="mute">${iAmHost ? t('hostHint') : t('joinHint')}</div></div>
        <span class="grow"></span><code class="gid">${esc(m.host.gameId)}</code><button class="btn sm" data-act="copy" data-text="${esc(m.host.gameId)}">${t('copyId')}</button></div>
      </div>
      <div class="card"><h4>${t('lobbySettings')}</h4><div class="rules">${rules.map(([k, v]) => `<div><span>${t(k)}</span><b class="${v === t('off') ? 'lose' : ''}">${v}</b></div>`).join('')}</div></div>
      ${resultBlock(m, myCap)}`;
  }

  render(`${matchBar(m)}${stepper(m)}
    <div class="room">${teamCol(m, 'A')}<div class="center-col">${center}${chatBlock(m)}</div>${teamCol(m, 'B')}</div>`);
  bindPlay();
  tick();
}

function resultBlock(m, myCap) {
  if (m.state === 'live') {
    return `<div class="card"><h4>${t('result')}</h4><div class="row">
      ${myCap ? `<button class="btn big" data-act="result">${t('submitShot')}</button>` : `<span class="mute">${t('capWillSubmit')}</span>`}
      <button class="btn ghost" data-act="dispute" style="margin-left:auto">${t('problem')}</button></div>
      ${m.me ? (() => { const n = m.drawVotes?.length || 0, mine = m.drawVotes?.includes(S.me.id);
        return `<div class="row drawvote" style="margin-top:12px"><button class="btn ${mine ? 'gold' : 'ghost'} sm" data-act="draw" data-on="${mine ? 0 : 1}">${mine ? t('drawUnvote') : t('drawVote')}</button>
          <span class="mute">${t('drawVotes', { n, need: m.drawNeed })}</span><div class="mini grow"><i style="width:${Math.round(100 * n / (m.drawNeed || 1))}%"></i></div></div>`; })() : ''}</div>`;
  }
  const r = m.result;
  if (m.state === 'submitted') {
    const other = r.by === 'A' ? 'B' : 'A';
    return `<div class="card accent"><h4>${t('submittedBy', { n: esc(m.teams[r.by][0].nick) })}</h4>
      <p>${t('winner')}: <b class="${r.winner === 'A' ? 'alfa' : 'bravo'}">${t('teamName', { n: TEAM[r.winner] })}</b> ${r.score ? `· ${esc(r.score)}` : ''}</p>
      ${r.shot ? `<img class="shot" src="${S.server + r.shot}" data-act="zoom">` : ''}
      <div class="row" style="margin-top:12px">${myCap === other ? `<button class="btn green" data-act="confirm">${t('confirm')}</button>` : ''}
      ${myCap === r.by ? `<button class="btn ghost" data-act="result">${t('edit')}</button>` : ''}
      <button class="btn ghost" data-act="dispute" style="margin-left:auto">${t('dispute')}</button></div></div>`;
  }
  if (m.state === 'disputed') {
    return `<div class="card" style="border-color:var(--lose)"><h3 class="lose">${t('disputed')}</h3><p class="mute">${esc(m.dispute?.reason || '')}</p><p>${t('staffWillReview')}</p></div>`;
  }
  return '';
}

document.addEventListener('click', e => {
  const sl = e.target.closest('[data-slad]');
  if (sl) { e.stopPropagation(); S.seasonLad = sl.dataset.slad; try { localStorage.setItem('kz-season-lad', S.seasonLad); } catch {} refresh(); return; }
  const h = e.target.closest('[data-srew]'); if (!h) return; let o = true; try { o = localStorage.getItem('kz-season-open') !== '0'; localStorage.setItem('kz-season-open', o ? '0' : '1'); } catch {} refresh();
});
function seasonLad() {
  const se = S.season; if (!se) return null;
  const list = se.ladders || [{ ladder: se.ladder, places: se.places, top: se.top, me: se.me }];
  if (!S.seasonLad) { try { S.seasonLad = localStorage.getItem('kz-season-lad'); } catch {} }
  return list.find(l => l.ladder === S.seasonLad) || list[0];
}
function seasonWhen() {
  const se = S.season;
  if (!se) return '';
  const d = se.end ? Math.max(0, Math.ceil((se.end - Date.now()) / 864e5)) : null;
  const lads = (se.ladders || [se]).map(l => l.ladder.replace('v', ' × ')).join(' · ');
  const me = (se.ladders || [se]).filter(l => l.me?.place).map(l => `${l.ladder.replace('v', '×')}: ${t('seasonMyPlace', { p: l.me.place, n: l.me.of })}${l.me.toPrize ? ` · ${t('seasonToPrize', { e: l.me.toPrize })}` : ''}`);
  const w = se.warmup, wu = w && !w.started ? `<span class="s-wu">${w.start ? t('wuStartsAt', { d: fmtDT(w.start) }) : t('wuGoal', { n: w.players, g: w.goal })}</span><i></i>` : '';
  return `${wu}<span>${t('seasonLadder', { m: lads })}</span><i></i><span>${se.end ? t('seasonEnds', { d: fmtDate(se.end), n: d }) : t('seasonEndTba')}</span>`
    + me.map(x => `<i></i><span>${x}</span>`).join('');
}
function seasonRewards() {
  const se = S.season, L = seasonLad();
  if (!se || !L) return '';
  let open = true; try { open = localStorage.getItem('kz-season-open') !== '0'; } catch {}
  const prem = p => p ? `${p.tier === 'plus' ? 'Premium+' : 'Premium'} · ${t('nDays', { n: p.days })}` : '';
  const holder = n => L.top.find(x => x.place === n);
  const big = L.places.filter(p => p.cash);
  const mid = L.places.filter(p => !p.cash && p.banner);
  const rest = L.places.filter(p => !p.cash && !p.banner);
  const pc = se.participation;
  const tabs = se.ladders?.length > 1 ? `<div class="seg sm slad">${se.ladders.map(l => `<button data-slad="${l.ladder}" class="${l.ladder === L.ladder ? 'on' : ''}">${l.ladder.replace('v', ' × ')} · $${l.places.reduce((a, p) => a + (p.cash || 0), 0)}</button>`).join('')}</div>` : '';
  return `<div class="card srew ${open ? 'open' : ''}">
    <div class="card-h srew-h" data-srew><h3 style="margin:0">${t('seasonRewards')}</h3><span class="mute">${t('seasonRewardsSub', { n: se.minMatches, m: L.ladder.replace('v', '×') })}</span><span class="grow"></span>
      ${open ? tabs : ''}<button class="btn ghost sm">${open ? t('hide') : t('show')}</button></div>
    ${open && se.warmup && !se.warmup.started ? `<div class="wubox"><div class="row"><b>${se.warmup.start ? t('wuStartsAt', { d: fmtDT(se.warmup.start) }) : t('wuGoal', { n: se.warmup.players, g: se.warmup.goal })}</b><span class="grow"></span>${se.warmup.refX > 1 ? `<span class="tag gold">${t('wuRefX')}</span>` : ''}<span class="tag">${t('wuFounder')}</span></div>
      <div class="wubar"><u style="width:${Math.min(100, se.warmup.players / se.warmup.goal * 100)}%"></u>${se.warmup.milestones.map(m => `<i class="${m.reached ? 'on' : ''}" style="left:${m.at / se.warmup.goal * 100}%" title="${m.start ? t('wuMStart') : m.kf ? t('wuMKf', { n: m.kf }) : t('wuMPrem', { n: m.premium.days })}"><span>${m.at}</span></i>`).join('')}</div>
      <div class="wums">${se.warmup.milestones.map(m => `<span class="${m.reached ? 'on' : ''}"><b>${m.at}</b> ${m.start ? t('wuMStart') : m.kf ? t('wuMKf', { n: m.kf }) : t('wuMPrem', { n: m.premium.days })}</span>`).join('')}</div></div>` : ''}
    ${open ? `<div class="srew-b">
      <div class="top5">${big.map(p => { const h = holder(p.from); return `<div class="pcard m${p.from}${p.banner ? '' : ' nob'}">
        <div class="pban" style="${bannerCss(p.banner)}"></div>
        <div class="pin"><span class="pl">#${p.from}</span><span class="cash">$${p.cash}</span></div>
        <ul>${p.banner ? `<li>${t('rwBanner')}</li>` : ''}<li class="kf">${p.kf} KF</li><li>${prem(p.premium)}</li>${p.emblem ? `<li>${emblemHtml(p.emblem)}${t('rwEmblem')}</li>` : ''}</ul>
        <div class="who">${h ? `<span class="mute">${t('nowHolds')}</span> <b>${esc(h.nick)}</b> <span class="mute">${h.elo}</span>` : `<span class="mute">${t('freeSpot')}</span>`}</div></div>`; }).join('')}</div>
      ${mid.length ? `<div class="top10">${mid.map(p => { const h = holder(p.from); return `<div class="mcard"><div class="pban" style="${bannerCss(p.banner)}"></div><span class="pl">#${p.from}</span>
        <div class="mi"><span class="kf">${p.kf} KF</span><span>${prem(p.premium)}</span><span class="mute">${h ? esc(h.nick) : t('freeSpot')}</span></div></div>`; }).join('')}</div>` : ''}
      <div class="srow">
        ${rest.map(r => `<div class="schip">${r.emblem ? emblemHtml(r.emblem) : ''}<div><b>#${r.from}–${r.to}</b><span>${r.kf} KF${r.emblem ? ` · ${t('rwEmblem')}` : ''}</span></div></div>`).join('')}
        <div class="schip">${emblemHtml(pc.emblem)}<div><b>${t('rwParticip', { n: pc.matches })}</b><span>${pc.kf} KF · ${t('rwEmblem')}${L.me ? ` · ${t('youHave', { n: L.me.matches ?? se.me?.matches ?? 0 })}` : ''}</span></div></div>
        <div class="schip cashby"><b>$</b><div><b>${t('cashBy', { b: se.cashBy })}</b><span>${t('cashHow')}</span></div></div>
      </div>
      <h4 style="margin:16px 0 8px">${t('nominations')}</h4>
      <div class="noms">${se.nominations.map(n => `<div class="nom">${emblemHtml(n.emblem, 'big')}<div><b>${t('nom_' + n.id)}</b><span class="mute">${t('nomd_' + n.id)}</span>
        <span class="kf">${n.kf} KF</span><span class="lead">${n.leader ? `${t('leader')}: <b>${esc(n.leader.nick)}</b> · ${n.leader.value}` : t('noLeader')}</span></div></div>`).join('')}</div>
      <p class="mute" style="font-size:12px;margin:12px 0 0">${t('seasonFine')}</p>
    </div>` : ''}</div>`;
}
function chatBlock(m) {
  const sideOf = uid => m.teams.A.some(p => p.id === uid) ? 'A' : 'B';
  return `<div class="card chat"><h4 style="margin-bottom:8px">${t('chat')}</h4>
    <div class="log" data-scroll="chat">${m.chat.map(c => `<div><b class="${sideOf(c.uid)}">${esc(c.nick)}:</b> ${esc(c.text)}</div>`).join('') || `<span class="mute">${t('noMsgs')}</span>`}</div>
    <form id="chat-form"><input id="chat-in" maxlength="300" placeholder="${t('msgPh')}" autocomplete="off"><button class="btn sm">${t('send')}</button></form></div>`;
}

function scoreTable(m, side) {
  const won = m.result?.winner === side;
  return `<div class="card team ${side}">
    <div class="card-h"><h3 class="${side === 'A' ? 'alfa' : 'bravo'}">${t('teamName', { n: TEAM[side] })}</h3>${won ? '<span class="tag gold">WIN</span>' : ''}<span class="grow"></span><span class="mute">${t('avg', { n: avgElo(m.teams[side]) })}</span></div>
    <table class="sb"><tr><th>${t('player')}</th><th class="r">${t('kills')}</th><th class="r">${t('deaths')}</th><th class="r">K/D</th><th class="r">${t('change')}</th><th></th></tr>
    ${m.teams[side].map(p => { const s = m.result?.stats?.[p.id] || { k: 0, d: 0 }; const d = m.eloDelta?.[p.id];
      return `<tr class="${p.id === S.me.id ? 'me' : ''}" data-act="profile" data-uid="${p.id}"><td class="bn-cell">${bannerHtml(p.prem?.banner, 'pl-b')}<div class="row" style="gap:8px">${avaF(p, 'sm')}<img class="lvl sm" src="${lvlIc(p, p.lvl)}"><span class="num">${nickHtml(p)}</span></div></td>
        <td class="r num">${s.k}</td><td class="r num">${s.d}</td><td class="r num">${kd(s.k, s.d)}</td><td class="r num ${d > 0 ? 'win' : 'lose'}">${webTag(m, p.id)}${calTag(m, p.id)}${d != null ? sign(d) : '–'}</td>
        <td class="r">${m.me && !m.test && p.id !== S.me.id && Date.now() - (m.finishedAt || 0) < 864e5 ? `<button class="iconbtn rep" data-act="report" data-uid="${p.id}" title="${t('report')}"><svg viewBox="0 0 24 24"><path d="M5 21V4m0 0h11l-2 4 2 4H5" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg></button>` : ''}</td></tr>`; }).join('')}
    </table></div>`;
}

function renderFinished(m) {
  const mine = m.eloDelta?.[S.me.id];
  const title = m.draw ? t('drawTitle') : m.state === 'cancelled' ? t('cancelled') : !m.me ? t('teamName', { n: TEAM[m.result.winner] }) + ' WIN' : m.result.winner === m.me ? t('victory') : t('defeat');
  const cls = m.state === 'done' && m.me ? (m.result.winner === m.me ? 'win' : 'lose') : '';
  const auto = S.backAt && S.finishedMatch === m;
  render(`${m.review === 'pending' || m.review === 'disputed' ? `<div class="card review-bar"><div class="pulse"></div><div class="grow"><b>${t('staffProcessing')}</b><div class="mute" style="font-size:12.5px">${t('staffProcessingHint')}</div></div></div>` : ''}
    <div class="row" style="margin-bottom:14px"><h2 style="margin:0">${t('match', { n: m.id })}</h2><span class="tag">${m.mode}</span>${m.map ? `<span class="tag">${mapName(m.map)}</span>` : ''}
      ${m.finishedAt ? `<span class="mute">${fmtDT(m.finishedAt)}</span>` : ''}
      <button class="btn ghost" data-act="back" style="margin-left:auto">${t('back')}${auto ? ` · <span data-back="${S.backAt}"></span>` : ''}</button></div>
    <div class="card final ${cls ? 'accent' : ''}" style="${cls ? `background:linear-gradient(180deg, ${cls === 'win' ? 'rgba(126,224,138,.1)' : 'rgba(240,122,122,.1)'}, var(--panel) 70%)` : ''}">
      <h1 class="${cls}">${title}</h1>
      ${mine != null ? `<h2 class="${mine > 0 ? 'win' : 'lose'}" style="margin:6px 0 0">${sign(mine)} ELO${m.coins ? ` <span class="kf">+${m.coins} KF</span>` : ''}</h2>` : ''}
      ${m.result?.score ? `<p class="mute">${t('score', { s: esc(m.result.score) })}</p>` : ''}
      ${m.review === 'pending' ? `<p class="mute" style="margin:6px 0 0">🤖 ${t('autoPending')}</p>` : m.review === 'disputed' ? `<p class="lose" style="margin:6px 0 0">${t('disputedAfter')}</p>` : ''}
      ${m.me && m.state === 'done' && !m.test && m.review !== 'disputed' && Date.now() < m.disputeUntil ? `<button class="btn ghost sm" id="fin-dispute" style="margin-top:10px">${t('dispute')} · ${t('until', { d: fmtDT(m.disputeUntil) })}</button>` : ''}
    </div>
    <div class="grid2">${scoreTable(m, 'A')}${scoreTable(m, 'B')}</div>
    ${m.result?.shot ? `<div class="card" style="margin-top:16px"><h4>${t('screenshot')}</h4><img class="shot" src="${S.server + m.result.shot}" data-act="zoom"></div>` : ''}`);
  bindPlay();
  if ($('#fin-dispute')) $('#fin-dispute').onclick = () => openDispute(m.id);
}

function modal(html, onReady) {
  const box = $('#modal');
  box.dataset.kind = 'form';
  box.innerHTML = `<div class="overlay">${html}</div>`;
  box.querySelector('.overlay').onclick = e => { if (e.target.classList.contains('overlay')) closeModal(); };
  box.querySelectorAll('[data-close]').forEach(b => b.onclick = closeModal);
  onReady?.(box);
}
function closeModal() { const box = $('#modal'); box.innerHTML = ''; box.dataset.kind = ''; renderReady(); }
function openShot(src) { modal(`<img src="${src}" style="max-width:92vw;max-height:90vh;border-radius:12px">`); }

function fileToJpeg(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const s = Math.min(1, 1920 / img.width);
      const c = document.createElement('canvas');
      c.width = img.width * s; c.height = img.height * s;
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      resolve(c.toDataURL('image/jpeg', .85));
      URL.revokeObjectURL(img.src);
    };
    img.onerror = () => reject(new Error(t('notImage')));
    img.src = URL.createObjectURL(file);
  });
}

function ocrPrep(dataUrl, bin) {
  return new Promise(res => {
    const img = new Image();
    img.onload = () => {
      const sc = img.width < 1700 ? 1.5 : 1;
      const c = document.createElement('canvas');
      c.width = img.width * sc; c.height = img.height * sc;
      const g = c.getContext('2d');
      g.drawImage(img, 0, 0, c.width, c.height);
      const d = g.getImageData(0, 0, c.width, c.height), px = d.data;
      for (let i = 0; i < px.length; i += 4) {
        let v = 255 - (px[i] * .3 + px[i + 1] * .59 + px[i + 2] * .11);
        v = Math.max(0, Math.min(255, (v - 51) * 255 / 153));
        if (bin) v = v < 90 ? 0 : 255;
        px[i] = px[i + 1] = px[i + 2] = v;
      }
      g.putImageData(d, 0, 0);
      if (bin === 'adaptive') {
        const W = c.width, H = c.height, c0 = document.createElement('canvas'); c0.width = W; c0.height = H;
        const g0 = c0.getContext('2d'); g0.drawImage(img, 0, 0, W, H);
        const o = g0.getImageData(0, 0, W, H).data, L = new Float32Array(W * H);
        for (let i = 0, j = 0; i < o.length; i += 4, j++) L[j] = Math.max(o[i], o[i + 1], o[i + 2]) * .6 + (o[i] * .3 + o[i + 1] * .59 + o[i + 2] * .11) * .4;
        const I = new Float64Array((W + 1) * (H + 1));
        for (let y = 0; y < H; y++) { let row = 0; for (let x = 0; x < W; x++) { row += L[y * W + x]; I[(y + 1) * (W + 1) + x + 1] = I[y * (W + 1) + x + 1] + row; } }
        const R = Math.round(Math.max(12, H / 60)), out = g.getImageData(0, 0, W, H), q = out.data;
        for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
          const x0 = Math.max(0, x - R), x1 = Math.min(W, x + R + 1), y0 = Math.max(0, y - R), y1 = Math.min(H, y + R + 1);
          const mean = (I[y1 * (W + 1) + x1] - I[y0 * (W + 1) + x1] - I[y1 * (W + 1) + x0] + I[y0 * (W + 1) + x0]) / ((x1 - x0) * (y1 - y0));
          const v = L[y * W + x], on = v > mean + 28 && v > 95, k = (y * W + x) * 4;
          q[k] = q[k + 1] = q[k + 2] = on ? 0 : 255;
        }
        g.putImageData(out, 0, 0);
      }
      res(c.toDataURL('image/png'));
    };
    img.src = dataUrl;
  });
}

function openResultForm() {
  const m = S.live.match;
  const players = ['A', 'B'].flatMap(side => m.teams[side].map(p => ({ id: p.id, nick: p.nick, side })));
  let shot = null, res = null, sending = false;
  modal(`<div class="card accent result-form col">
    <h2>${t('resultTitle', { n: m.id })}</h2>
    <p class="mute" style="margin:0">${t('shotOnlyHint')}</p>
    <div class="drop big" id="rf-drop">${t('dropHint')}</div>
    <div class="row shot-src"><button class="btn ghost sm" id="rf-paste">${t('pasteShot')}</button>${K.latestShot ? `<button class="btn ghost sm" id="rf-steam">${t('steamShot')}</button>` : ''}<button class="btn ghost sm" id="rf-pick">${t('pickFile')}</button></div>
    <p class="mute shot-how">${t('shotHow')}</p>
    <input type="file" id="rf-file" accept="image/*,.jfif,.webp,.bmp" hidden>
    <div id="rf-auto"></div>
    <div class="err" id="rf-err"></div>
  </div>`, box => {
    const send = async winner => {
      if (sending) return;
      sending = true;
      $('#rf-auto').innerHTML = `<div class="searching"><div class="pulse"></div><b>${t('sending')}</b></div>`;
      try {
        await api('/api/match/result', { winner, score: res.score, stats: res.stats, shot, auto: { found: res.found, total: res.total, winner: res.winner, checked: res.checked ?? null } });
        closeModal();
      } catch (e) { sending = false; $('#rf-err').textContent = e.message; askWinner(); }
    };
    const askWinner = () => {
      $('#rf-auto').innerHTML = `<div class="autobox"><h4>${t('whoWon')}</h4>
        <div class="winpick"><button class="A" data-w="A">${t('teamName', { n: 'Alfa' })}</button><button class="B" data-w="B">${t('teamName', { n: 'Bravo' })}</button></div></div>`;
      box.querySelectorAll('[data-w]').forEach(b => b.onclick = () => send(b.dataset.w));
    };
    const setShot = async f => {
      if (sending) return;
      try {
        shot = await fileToJpeg(f);
        $('#rf-drop').innerHTML = `<img src="${shot}"><div class="scan">${t('recognizing')}</div>`;
        $('#rf-err').textContent = '';
        const pass = async bin => {
          const prep = await ocrPrep(shot, bin);
          const ocr = await K.ocr(prep);
          const lay = OcrParse.layout(ocr, players, m.me);
          if (lay && lay.rows.length) {
            const flat = await K.ocrDigits(prep, lay.rows.flatMap(x => x.rects));
            const n = lay.cols.length;
            return { board: true, r: OcrParse.finish(lay, lay.rows.map((_, i) => flat.slice(i * n, i * n + n)), players, m.me, ocr.text) };
          }
          return { board: !!lay || /battle\s*results|scoreboard|результати\s*матчу|результаты\s*матча/i.test(ocr.text), r: OcrParse.parse(ocr, players, m.me) };
        };
        let best = await pass(false);
        if (!OcrParse.complete(best.r)) {
          const b = await pass(true);
          if (OcrParse.quality(b.r) > OcrParse.quality(best.r) || (b.board && !best.board)) best = b;
        }
        if (!best.board) { shot = null; res = null; $('#rf-drop').innerHTML = t('dropHint'); $('#rf-err').textContent = t('notScoreboard'); return; }
        res = best.r;
        res.stats = Object.fromEntries(Object.entries(res.stats).map(([id, v]) => [id, { k: v.k, d: v.d }]));
        $('#rf-drop').querySelector('.scan')?.remove();
        if (res.winner) send(res.winner); else askWinner();
      } catch (e) {
        $('#rf-drop').querySelector('.scan')?.remove();
        res = res || { stats: {}, score: '', found: 0, total: players.length, winner: null };
        $('#rf-err').textContent = e.message; askWinner();
      }
    };
    const fail = msg => { $('#rf-err').textContent = msg; };
    const fromUrl = async url => {
      try {
        const r = await fetch(url);
        const b = r.ok ? await r.blob() : null;
        if (!b || !b.type.startsWith('image/')) throw 0;
        setShot(b);
      } catch { fail(t('shotUrlFail')); }
    };
    const urlIn = text => (String(text || '').match(/https?:\/\/\S+?\.(?:png|jpe?g|webp|gif|bmp)(?:\?\S*)?(?=\s|$|")/i) || String(text || '').match(/https?:\/\/(?:cdn|media)\.discordapp\.(?:com|net)\/attachments\/\S+/i) || [])[0];
    const fromData = dt => {
      const f = [...(dt.files || [])].find(f => f.type.startsWith('image/') || /\.(png|jpe?g|jfif|webp|bmp|gif)$/i.test(f.name));
      if (f) return setShot(f), true;
      const item = [...(dt.items || [])].find(i => i.kind === 'file' && i.type.startsWith('image/'));
      if (item?.getAsFile()) return setShot(item.getAsFile()), true;
      const html = dt.getData?.('text/html') || '', img = html.match(/<img[^>]+src="([^"]+)"/i)?.[1];
      const url = img || urlIn(dt.getData?.('text/uri-list')) || urlIn(dt.getData?.('text/plain'));
      if (url) return fromUrl(url.replace(/&amp;/g, '&')), true;
      return false;
    };
    $('#rf-drop').onclick = () => $('#rf-file').click();
    $('#rf-pick').onclick = () => $('#rf-file').click();
    $('#rf-file').onchange = e => e.target.files[0] && setShot(e.target.files[0]);
    const onPaste = e => {
      if (!$('#rf-drop') || S.rfPaste !== onPaste) return document.removeEventListener('paste', onPaste);
      if (e.target.matches?.('input, textarea')) return;
      e.preventDefault();
      if (!fromData(e.clipboardData)) fail(t('clipEmpty'));
    };
    if (S.rfPaste) document.removeEventListener('paste', S.rfPaste);
    S.rfPaste = onPaste;
    document.addEventListener('paste', onPaste);
    $('#rf-paste').onclick = async () => {
      try {
        for (const it of await navigator.clipboard.read()) {
          const type = it.types.find(x => x.startsWith('image/'));
          if (type) return setShot(await it.getType(type));
          if (it.types.includes('text/plain')) { const u = urlIn(await (await it.getType('text/plain')).text()); if (u) return fromUrl(u); }
        }
        fail(t('clipEmpty'));
      } catch { fail(t('clipEmpty')); }
    };
    if ($('#rf-steam')) $('#rf-steam').onclick = async () => {
      const r = await K.latestShot().catch(() => null);
      if (!r?.dataUrl) return fail(t('steamNone'));
      const b = await (await fetch(r.dataUrl)).blob();
      setShot(b);
      const min = Math.round((Date.now() - r.mtime) / 60000);
      if (min > 30) toast(t('steamOld', { n: min < 120 ? min + ' ' + t('minShort') : Math.round(min / 60) + ' ' + t('hShort') }), true);
    };
    box.ondragover = e => e.preventDefault();
    box.ondrop = e => { e.preventDefault(); if (!fromData(e.dataTransfer)) fail(t('notImage')); };
  });
}

function openDispute(matchId) {
  modal(`<div class="card accent col" style="width:460px"><h2>${t('dispute')}</h2>
    <p class="mute">${t('disputeText')}</p>
    <textarea id="dp-text" rows="4" maxlength="500"></textarea>
    <div class="row"><button class="btn red" id="dp-send">${t('sendStaff')}</button><button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, () => {
    $('#dp-send').onclick = run(async () => {
      await api('/api/match/dispute', { reason: $('#dp-text').value, id: matchId });
      closeModal(); toast(t('sentStaff'));
      if (matchId) { S.finishedMatch = await api('/api/match?id=' + matchId); refresh(); }
    });
  });
}

async function renderLeaderboard() {
  const mode = S.lbMode = pubMode(S.lbMode);
  const head = () => `<div class="lbhead"><h1>${t('leaderboard')}</h1><div class="seg">${PUB_MODES.map(m => `<button data-lb="${m}" class="${S.lbMode === m ? 'on' : ''}">${modeX(m)}</button>`).join('')}</div>
    <span class="grow"></span><input id="lb-search" placeholder="${t('searchPlayer')}" style="width:240px"></div>`;
  if (!S.lbRows || S.lbRowsMode !== mode) { render(head() + `<p class="mute">${t('loading')}</p>`); bindLb(); }
  const rows = await api('/api/leaderboard?mode=' + mode).catch(e => (toast(e.message, true), []));
  if (S.page !== 'leaderboard' || S.lbMode !== mode) return;
  S.lbRows = rows; S.lbRowsMode = mode;
  drawLeaderboard(head);
}
function drawLeaderboard(head) {
  const rows = S.lbRows;
  const q = S.lbSearch.toLowerCase();
  const shown = q ? rows.filter(r => r.nick.toLowerCase().includes(q)) : rows;
  const row = r => `<div class="lbr click ${r.id === S.me.id ? 'me' : ''} ${r.place <= 3 ? 'top top' + r.place : ''} ${r.prem?.banner ? 'hasb' : ''}" data-uid="${r.id}">
      ${bannerHtml(r.prem?.banner, 'pl-b lbr-b')}
      <div class="lb-place">${r.place}</div>
      <div class="lb-pl">${avaF(r)}<img class="lvl" src="${lvlImg(r.lvl)}"><div class="lb-nick"><span class="num">${nickHtml(r)}</span>${r.id === S.me.id ? `<span class="tag">${t('you')}</span>` : ''}</div></div>
      <div>${r.w + r.l} <span class="mute">(<span class="win">${r.w}</span>/<span class="lose">${r.l}</span>)</span></div>
      <div class="row" style="gap:8px"><span class="num" style="width:38px">${wrNum(r)}%</span><div class="bar" style="width:70px;height:4px"><i style="width:${wrNum(r)}%;background:var(--win)"></i></div></div>
      <div class="num">${kd(r.k, r.d)}</div><div class="num lb-elo">${r.elo}</div></div>`;
  render(head() + (rows.length ? (shown.length ? `<div class="lbt">
    <div class="lbr lbh"><div>${t('place')}</div><div>${t('player')}</div><div>${t('games')}</div><div>${t('winrate')}</div><div>K/D</div><div>ELO</div></div>
    ${shown.map(row).join('')}</div>` : `<div class="card empty-note">${t('nobody')}</div>`)
    : `<div class="card empty-note">${t('nobody')}</div>`));
  bindLb();
  document.querySelectorAll('[data-uid]').forEach(el => el.onclick = () => go('profile', el.dataset.uid));
}
function bindLb() {
  document.querySelectorAll('[data-lb]').forEach(b => b.onclick = () => { S.lbMode = b.dataset.lb; renderLeaderboard(); });
  const s = $('#lb-search');
  if (s) { s.value = S.lbSearch; s.oninput = () => { S.lbSearch = s.value; if (S.lbRows) { drawLeaderboard(() => $('.lbhead').outerHTML); $('#lb-search').focus(); } }; }
}

function eloGraph(ms) {
  const pts = ms.filter(h => h.elo != null).reverse();
  if (pts.length) pts.unshift({ id: '—', elo: pts[0].elo - pts[0].delta, delta: 0 });
  if (pts.length < 2) return `<div class="empty-note">${t('noMatches')}</div>`;
  const W = 600, H = 190, P = 26;
  const vals = pts.map(p => p.elo);
  const lo = Math.min(...vals) - 10, hi = Math.max(...vals) + 10;
  const x = i => P + i * (W - 2 * P) / (pts.length - 1);
  const y = v => H - P - (v - lo) / (hi - lo) * (H - 2 * P);
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.elo).toFixed(1)}`).join('');
  const grid = [0, .5, 1].map(f => { const v = Math.round(lo + (hi - lo) * f); return `<line class="gl" x1="${P}" x2="${W - P}" y1="${y(v)}" y2="${y(v)}"/><text x="2" y="${y(v) + 3}">${v}</text>`; }).join('');
  return `<svg class="graph" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#969df9" stop-opacity=".35"/><stop offset="1" stop-color="#969df9" stop-opacity="0"/></linearGradient></defs>
    ${grid}<path class="ar" d="${line}L${x(pts.length - 1)},${H - P}L${x(0)},${H - P}Z"/><path class="ln" d="${line}"/>
    ${pts.map((p, i) => `<circle cx="${x(i)}" cy="${y(p.elo)}" r="3"><title>#${p.id} · ${p.elo} (${sign(p.delta)})</title></circle>`).join('')}</svg>`;
}

function streaks(ms) {
  let best = 0, cur = 0;
  for (const h of [...ms].reverse()) { cur = h.won ? cur + 1 : 0; best = Math.max(best, cur); }
  let now = 0;
  for (const h of ms) { if (h.won) now++; else break; }
  return { best, now };
}

const tintCache = {};
function tintFromBanner(id, el) {
  if (!el) return;
  const apply = rgb => rgb && el.style.setProperty('--pt', rgb);
  if (tintCache[id] !== undefined) return apply(tintCache[id]);
  const m = /url\(([^)]+)\)/.exec(bannerCss(id)); if (!m) return;
  const img = new Image();
  img.onload = () => {
    try {
      const c = document.createElement('canvas'); c.width = 48; c.height = 16;
      const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(img, 0, 0, 48, 16);
      const d = x.getImageData(14, 0, 34, 16).data; let r = 0, g = 0, b = 0, w = 0;
      for (let i = 0; i < d.length; i += 4) { const s = Math.max(d[i], d[i + 1], d[i + 2]) - Math.min(d[i], d[i + 1], d[i + 2]) + 8; r += d[i] * s; g += d[i + 1] * s; b += d[i + 2] * s; w += s; }
      r /= w; g /= w; b /= w;
      const k = 34 / Math.max(1, (r + g + b) / 3);
      const f = v => Math.round(Math.min(70, Math.max(10, v * k)));
      tintCache[id] = `${f(r)}, ${f(g)}, ${f(b)}`;
    } catch { tintCache[id] = null; }
    apply(tintCache[id]);
  };
  img.src = m[1];
}
function pbgLayer(b) {
  if (!b) return '';
  const src = b.type === 'banner' ? (/^(b[45]_|a3_snow_rig$)/.test(b.banner) ? `assets/pbg/${b.banner}.jpg` : (/url\(([^)]+)\)/.exec(bannerCss(b.banner)) || [])[1]) : S.server + b.url;
  return `<div class="pbg ${b.blur ? 'blur' : ''}" style="--o:${b.opacity};background-image:url('${esc(src)}')"></div>`;
}
function openProfileBg(p) {
  const cur = p.pbg || { opacity: 0.25, blur: false };
  const av = (S.myProfile?.available || p.available)?.banners || [];
  let pick = cur.type === 'banner' ? cur.banner : null, file = null, opacity = cur.opacity ?? 0.25, blur = !!cur.blur;
  modal(`<div class="card accent col pbgdlg"><h2>${t('profileBg')}</h2><p class="mute" style="margin:0">${t('profileBgHint')}</p>
    <h4>${t('pbgBanner')}</h4><div class="pbgpick">${av.map(id => `<button class="${pick === id ? 'on' : ''}" data-pb="${id}" style="${bannerCss(id)}"></button>`).join('') || `<span class="mute">${t('invNone')}</span>`}</div>
    <h4>${t('pbgImage')}</h4><div class="row"><button class="btn ghost sm" id="pb-up">${t('uploadImage')}</button><span class="mute" id="pb-fn">${cur.type === 'image' ? t('pbgCurrent') : ''}</span>
      <input type="file" id="pb-file" accept="image/gif,image/png,image/jpeg,image/webp" hidden></div>
    <h4>${t('pbgOpacity')}: <span id="pb-ov">${Math.round(opacity * 100)}%</span></h4><input type="range" id="pb-op" min="8" max="60" value="${Math.round(opacity * 100)}">
    <label class="row" style="cursor:pointer"><button class="switch ${blur ? 'on' : ''}" id="pb-blur"></button><span>${t('pbgBlur')}</span></label>
    <div class="pbgprev" id="pb-prev"></div>
    <div class="row"><button class="btn" id="pb-save">${t('save')}</button>${p.pbg ? `<button class="btn ghost" id="pb-reset">${t('pbgRemove')}</button>` : ''}<span class="grow"></span><button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, () => {
    const prev = () => {
      const b = file ? { type: 'image', url: null } : pick ? { type: 'banner', banner: pick } : cur.type ? cur : null;
      const src = file || (b?.type === 'banner' ? (/url\(([^)]+)\)/.exec(bannerCss(b.banner)) || [])[1] : b?.url ? S.server + b.url : '');
      $('#pb-prev').innerHTML = src ? `<div class="pbg-in ${blur ? 'blur' : ''}" style="--o:${opacity};background-image:url('${esc(src)}')"></div><div class="pbg-txt"><b>${esc(p.nick)}</b><span>${t('pbgPreview')}</span></div>` : '';
    };
    document.querySelectorAll('[data-pb]').forEach(b => b.onclick = () => { pick = b.dataset.pb; file = null; $('#pb-fn').textContent = ''; document.querySelectorAll('[data-pb]').forEach(x => x.classList.toggle('on', x === b)); prev(); });
    $('#pb-up').onclick = () => $('#pb-file').click();
    $('#pb-file').onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      if (f.size > 5 << 20) return toast(t('pbgTooBig'), true);
      const r = new FileReader(); r.onload = () => { file = r.result; pick = null; $('#pb-fn').textContent = f.name; document.querySelectorAll('[data-pb]').forEach(x => x.classList.remove('on')); prev(); }; r.readAsDataURL(f);
    };
    $('#pb-op').oninput = e => { opacity = e.target.value / 100; $('#pb-ov').textContent = e.target.value + '%'; prev(); };
    $('#pb-blur').onclick = () => { blur = !blur; $('#pb-blur').classList.toggle('on', blur); prev(); };
    $('#pb-save').onclick = run(async () => {
      const body = file ? { type: 'image', data: file, opacity, blur } : pick ? { type: 'banner', banner: pick, opacity, blur } : { opacity, blur };
      applyMe(await api('/api/premium/profilebg', body)); closeModal(); S.profCache = null; renderProfile(); toast(t('saved'));
    });
    if ($('#pb-reset')) $('#pb-reset').onclick = run(async () => { applyMe(await api('/api/premium/profilebg', { reset: true })); closeModal(); S.profCache = null; renderProfile(); });
    prev();
  });
}
async function renderProfile() {
  const id = S.profileId;
  const p = S.profCache?.id === id ? S.profCache : await api('/api/profile?id=' + encodeURIComponent(id)).catch(e => (toast(e.message, true), null));
  if (!p || S.page !== 'profile' || S.profileId !== id) return;
  S.profCache = p;
  setTimeout(() => { if (S.profCache === p) S.profCache = null; }, 15_000);
  if (!S.profMode || !profModes(p).includes(S.profMode)) S.profMode = bestProfMode(p);
  const mode = S.profMode;
  const r = p['r' + mode] || { elo: 1000, w: 0, l: 0, k: 0, d: 0 };
  const lvl = levelOf(r.elo), nx = LEVELS[lvl + 1];
  const ms = p.matches.filter(h => h.mode === mode);
  const st = streaks(ms);
  const games = r.w + r.l;
  const maps = mapsOf(p, mode);
  const isMe = p.id === S.me.id;
  const myTier = S.me.premium?.tier;
  const banner = p.prem?.banner;
  const achs = p.achievements;
  const nickNext = (p.nickChangedAt || 0) + 30 * 864e5;
  const pbg = p.pbg;
  render(`${pbgLayer(pbg)}<div class="pwrap ${pbg ? 'has-pbg' : ''}"><div class="pbanner ${banner ? 'has-b' : ''}">${bannerHtml(banner, 'pb-art')}${(() => { const acts = `${!isMe ? `${S.live?.friends?.list?.some(x => x.id === p.id) ? '' : S.live?.friends?.sent?.includes(p.id) ? `<span class="tag">${t('requestSent')}</span>` : `<button class="btn ghost sm" data-fr-add="${p.id}">+ ${t('addFriend')}</button>`}<button class="btn sm" data-invite="${p.id}">${t('inviteParty')}</button><button class="btn ghost sm" id="p-report">${t('report')}</button>` : ''}
          ${S.me.admin ? `<button class="btn ghost sm" id="p-badges">${t('badgesBtn')}</button><button class="btn ghost sm" id="p-cos">${t('giveCosmetics')}</button>` : ''}
          ${(S.me.staff || S.me.admin) && !isMe ? (p.ban ? `<button class="btn sm" id="p-unban">${t('unban')}</button>` : `<button class="btn red sm" id="p-ban">${t('ban')}</button>`) : ''}
          ${S.me.staff || S.me.admin ? `<button class="btn ghost sm" id="p-edit">${t('edit')}</button>` : ''}${S.me.admin ? `<button class="btn ghost sm" id="p-prem">${t('grantPremium')}</button>` : ''}
          ${!isMe && myTier === 'plus' ? `<button class="btn ghost sm" id="p-cmp">${t('compare')}</button>` : ''}
          ${isMe && myTier ? `<button class="btn ghost sm" id="p-nick" ${!(S.me.freeNicks > 0) ? `disabled title="${t('nickFreeUsed')}"` : `title="${t('nickFreeLeft', { n: S.me.freeNicks })}"`}>${t('changeNick')}</button>` : ''}
          ${isMe ? `<button class="btn ghost sm" data-go2="inventory">${t('inventory')}</button><button class="btn ghost sm" id="p-bg">${myTier ? '' : '👑 '}${t('profileBg')}</button>` : ''}`.trim(); return `<div class="pactions"><div class="seg sm">${profModes(p).map(m => `<button data-pm="${m}" class="${mode === m ? 'on' : ''}">${modeX(m)}</button>`).join('')}</div>${acts ? `<button class="btn ghost sm pmore" id="p-more" title="${t('more')}"><svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg></button><div class="pmenu" id="p-menu" hidden>${acts}</div>` : ''}</div>`; })()}<div class="phead">
      <div class="pava">${p.ban ? banAva(p) : avaF(p, 'lg')}${p.prem?.emblem && !p.ban ? emblemHtml(p.prem.emblem, 'big') : ''}</div>
      <div><h1>${nickHtml({ ...p, prem: p.prem && { ...p.prem, emblem: '' } })}</h1><div class="ids">ID: <span class="gid" style="user-select:text">${esc(p.gameId)}</span> ${p.name ? `· Discord: ${esc(p.name)} ` : ''}· ${t('since', { d: fmtDate(p.created) })}</div>
        <div class="tags">${p.staff ? `<span class="tag">${t('staffTag')}</span>` : ''}${p.ban ? `<span class="tag red ban-reason" title="${esc(p.ban.reason)}">${t('bannedTag')}: ${esc(p.ban.reason)}</span>` : ''}
          <span class="tag">${mode} · ${p['rank' + mode] ? '#' + p['rank' + mode] : t('unranked')}</span></div></div>
    </div>
      <div class="plevel">
        ${isCal(r) ? `<div class="plv-ic"><img class="lvl lg" src="assets/lvl/cal.svg"><span>${calTxt(r)}</span></div>
        <div class="plv-row"><span class="plv-cur">${r.cal}<small>/5</small></span>
          <div class="plv-bar"><i style="width:${r.cal * 20}%"></i></div>
          <span class="plv-need">5<small>/5</small></span></div>` : `<div class="plv-ic"><img class="lvl lg" src="${lvlImg(lvl)}"><span>${t('level', { n: lvl })}${nx ? ` · ${t('toNext', { n: nx - r.elo, l: lvl + 1 })}` : ''}</span></div>
        <div class="plv-row"><span class="plv-cur">${r.elo}<small>ELO</small></span>
          <div class="plv-bar"><i style="width:${levelPct(r.elo)}%"></i></div>
          <span class="plv-need">${nx ? `${nx}<small>ELO</small>` : t('maxLevel')}</span></div>`}
      </div>
    </div>
    <div class="pstats">
      <div class="pstat"><b>${games}</b><span>${t('games')}</span></div>
      <div class="pstat"><b>${wrNum(r)}%</b><span>${t('winrate')}</span></div>
      <div class="pstat"><b>${kd(r.k, r.d)}</b><span>${t('kd')}</span></div>
      <div class="pstat"><b>${games ? (r.k / games).toFixed(1) : '0'}</b><span>${t('avgKills')}</span></div>
      <div class="pstat"><b>${st.best}</b><span>${t('streak')}</span></div>
      <div class="pstat"><b class="${st.now ? 'win' : ''}">${st.now}</b><span>${t('curStreak')}</span></div>
    </div>
    <div class="pgrid">
      <div class="card"><div class="card-h"><h4>${t('eloHistory')}</h4><span class="grow"></span>
        <div class="form">${ms.slice(0, 10).map(h => `<span class="chip ${h.won ? 'w' : 'l'}">${h.won ? t('winShort') : t('lossShort')}</span>`).join('')}</div></div>
        ${eloGraph(ms)}</div>
      <div class="card"><h4>${t('mapStats')}</h4><div class="mapstats">
        ${MAPS.map(x => { const s = maps[x] || { w: 0, l: 0 }; const n = s.w + s.l; const w = n ? Math.round(s.w / n * 100) : 0;
          return `<div class="mst"><div class="th" style="background-image:url(${mapImg(x)})"></div><div class="grow"><div class="row" style="justify-content:space-between"><span class="num">${mapName(x)}</span><span class="mute" style="font-size:12px">${n ? w + '%' : '–'}</span></div>
            <div class="mute" style="font-size:11.5px"><span class="win">${s.w}</span> / <span class="lose">${s.l}</span></div><div class="bar"><i style="width:${w}%"></i></div></div></div>`; }).join('')}
      </div></div>
    </div>
    <div class="card" style="margin-top:16px"><h4>${t('matchHistory')}</h4>
      ${ms.length ? `<table class="hist"><thead><tr><th>${t('result')}</th><th>#</th><th>${t('map')}</th><th>${t('score', { s: '' })}</th><th>K / D</th><th>K/D</th><th>ELO</th><th></th></tr></thead><tbody>
      ${ms.map(h => `<tr class="${h.won ? 'w' : ''}" data-mid="${h.id}"><td class="num ${h.won ? 'win' : 'lose'}">${h.won ? t('victory') : t('defeat')}</td><td class="mute">#${h.id}</td>
        <td><div class="row" style="gap:8px"><div class="th" style="width:44px;height:26px;border-radius:5px;background:url(${mapImg(h.map)}) center/cover"></div>${mapName(h.map)}</div></td>
        <td class="num">${esc(h.score || '–')}</td><td class="num">${h.k} / ${h.d}</td><td class="num">${kd(h.k, h.d)}</td>
        <td class="num"><span class="${h.delta > 0 ? 'win' : 'lose'}">${sign(h.delta)}</span>${h.elo != null ? ` <span class="mute">${h.elo}</span>` : ''}</td><td class="mute">${fmtDT(h.at)}</td></tr>`).join('')}</tbody></table>`
      : `<div class="empty-note">${t('noMatches')}</div>`}
      ${!myTier && p.matches.length >= 20 ? `<p class="mute" style="margin:10px 0 0;font-size:12.5px">👑 ${t('historyLimited')}</p>` : ''}
    </div>
    <div class="card" style="margin-top:16px"><div class="card-h"><h4>${t('achievements')}</h4><span class="grow"></span>
      <span class="mute">${achs.list.filter(a => a.at).length} / ${achs.list.length}</span></div>
      <div class="achgrid">${achs.list.map(a => `<div class="ach ${a.at ? 'got' : ''}">
        <div class="ai ai-${a.icon}">${ACH_ICON[a.icon]}</div>
        <div class="grow" style="min-width:0"><div class="an">${t('a_' + a.id)}</div><div class="mute ad">${t('m_' + a.metric, { n: a.goal })}</div>
          ${a.at ? `<div class="ad win">${t('unlockedAt', { d: fmtDate(a.at) })}</div>` : `<div class="bar"><i style="width:${a.value / a.goal * 100}%"></i></div><div class="ad mute">${t('progress', { v: a.value, g: a.goal })}</div>`}</div>
        ${a.reward ? `<div class="arw" title="${t('reward')}">${a.reward.banner ? `<div class="mini-b" style="${bannerCss(a.reward.banner)}"></div>` : ''}${a.reward.frame ? `<div class="mini-f fr-${a.reward.frame}"></div>` : ''}</div>` : ''}
      </div>`).join('')}</div></div></div>`);
  if ($('#p-more')) {
    const btn = $('#p-more'), menu = $('#p-menu');
    const close = () => { menu.hidden = true; document.removeEventListener('mousedown', outside, true); window.removeEventListener('resize', close); $('#view').removeEventListener('scroll', close); };
    const outside = e => { if (!menu.contains(e.target) && !btn.contains(e.target)) close(); };
    btn.onclick = () => {
      if (!menu.hidden) return close();
      menu.hidden = false;
      const rb = btn.getBoundingClientRect();
      menu.style.left = Math.max(8, rb.right - menu.offsetWidth) + 'px';
      menu.style.top = (rb.bottom + menu.offsetHeight + 6 > innerHeight ? rb.top - menu.offsetHeight - 6 : rb.bottom + 6) + 'px';
      document.addEventListener('mousedown', outside, true); window.addEventListener('resize', close); $('#view').addEventListener('scroll', close);
    };
    menu.addEventListener('click', e => { if (e.target.closest('button')) close(); });
  }
  document.querySelectorAll('[data-go2]').forEach(b => b.onclick = () => go(b.dataset.go2));
  if (banner) tintFromBanner(banner, $('.pbanner'));
  if ($('#p-bg')) $('#p-bg').onclick = () => myTier ? openProfileBg(p) : go('premium');
  if ($('#p-prem')) $('#p-prem').onclick = () => openGrant(p);
  if ($('#p-badges')) $('#p-badges').onclick = () => openBadges(p);
  if ($('#p-cos')) $('#p-cos').onclick = () => openGiveCosmetics(p);
  bindParty();
  if ($('#p-cmp')) $('#p-cmp').onclick = () => openCompare(p);
  if ($('#p-nick')) $('#p-nick').onclick = () => openNick();
  document.querySelectorAll('[data-pm]').forEach(b => b.onclick = () => { S.profMode = b.dataset.pm; renderProfile(); });
  document.querySelectorAll('[data-mid]').forEach(el => el.onclick = run(async () => { S.backAt = 0; S.finishedMatch = await api('/api/match?id=' + el.dataset.mid); S.page = 'play'; markNav(); refresh(); }));
  if ($('#p-report')) $('#p-report').onclick = () => openReport(p);
  if ($('#p-ban')) $('#p-ban').onclick = () => openBan(p);
  if ($('#p-unban')) $('#p-unban').onclick = run(async () => { await api('/api/staff/unban', { uid: p.id }); toast(t('unbannedOk')); S.profCache = null; renderProfile(); });
  if ($('#p-edit')) $('#p-edit').onclick = () => openEdit(p);
}

const ACH_ICON = {
  trophy: '<svg viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8"/></svg>',
  swords: '<svg viewBox="0 0 24 24"><path d="M4 4l9 9M4 4h4M4 4v4M20 4l-9 9M20 4h-4M20 4v4M7 17l-3 3M17 17l3 3M9 15l-2 2 2 2M15 15l2 2-2 2"/></svg>',
  flame: '<svg viewBox="0 0 24 24"><path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 1 1 2 2 2 4 1-2 1-4 1-7z"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></svg>',
};

function openGiveCosmetics(p) {
  const draw = box => {
    const g = p.grants || {}, av = p.available || { banners: [], frames: [] };
    box.querySelector('#gc-body').innerHTML = `
      <h4>${t('banners')}</h4><div class="gcgrid">${BANNERS.map(id => { const own = (g.banners || []).includes(id), has = av.banners.includes(id);
        return `<button class="gci ${own ? 'on' : has ? 'has' : ''}" data-gk="banner" data-gid="${id}">${bannerHtml(id, 'gci-b')}<span>${own ? '✓ ' + t('given') : has ? t('alreadyHas') : t('give')}</span></button>`; }).join('')}</div>
      <h4>${t('frames')}</h4><div class="gcgrid fr">${FRAMES.map(id => { const own = (g.frames || []).includes(id), has = av.frames.includes(id);
        return `<button class="gci ${own ? 'on' : has ? 'has' : ''}" data-gk="frame" data-gid="${id}">${avaF(p, 'sm', id)}<span>${own ? '✓' : has ? '•' : '+'}</span></button>`; }).join('')}</div>
      <h4>${t('emblems')}</h4><div class="gcgrid em">${[...EMBLEMS_SEASON, ...EMBLEMS_ALL].map(id => { const own = (g.emblems || []).includes(id), has = (av.emblems || []).includes(id);
        return `<button class="gci ${own ? 'on' : has ? 'has' : ''}" data-gk="emblem" data-gid="${id}">${emblemHtml(id, 'big')}</button>`; }).join('')}</div>
      <h4>KF</h4><div class="row"><span class="kf">${p.coins ?? 0} KF</span><input id="gc-coins" type="number" placeholder="+/-" style="width:110px"><button class="btn sm" id="gc-coins-go">${t('apply')}</button></div>
      ${p.customAvatar ? `<button class="btn ghost sm" id="gc-av">${t('resetAvatarOf')}</button>` : ''}`;
    box.querySelectorAll('[data-gk]').forEach(b => b.onclick = run(async () => {
      const own = (p.grants?.[b.dataset.gk + 's'] || []).includes(b.dataset.gid);
      Object.assign(p, await api('/api/admin/grant', { uid: p.id, kind: b.dataset.gk, id: b.dataset.gid, revoke: own }));
      draw(box);
    }));
    box.querySelector('#gc-coins-go').onclick = run(async () => { Object.assign(p, await api('/api/admin/coins', { uid: p.id, amount: +box.querySelector('#gc-coins').value })); draw(box); });
    if (box.querySelector('#gc-av')) box.querySelector('#gc-av').onclick = run(async () => { Object.assign(p, await api('/api/admin/avatar-reset', { uid: p.id })); draw(box); });
  };
  modal(`<div class="card accent col" style="width:860px;max-height:88vh;overflow-y:auto"><h2>${t('giveCosmetics')} · ${esc(p.nick)}</h2>
    <p class="mute" style="margin:0">${t('giveHint')}</p><div class="col" id="gc-body"></div>
    <button class="btn ghost" data-close>${t('close')}</button></div>`, draw);
  $('#modal .overlay').addEventListener('click', () => { S.profCache = null; });
}

function openBadges(p) {
  const cur = new Set(p.badges || []);
  modal(`<div class="card accent col" style="width:420px"><h2>${t('badgesBtn')} · ${esc(p.nick)}</h2>
    ${['verified', 'dev', 'pro'].map(b => `<label class="row bdg-opt"><input type="checkbox" data-b="${b}" ${cur.has(b) ? 'checked' : ''}><i class="bdg bdg-${b}">${badgeIcon(b)}</i>${t('badge_' + b)}</label>`).join('')}
    <p class="mute" style="margin:0;font-size:12.5px"><i class="bdg bdg-staff">${badgeIcon('staff')}</i> ${t('badge_staff')} — ${t('staffAuto')}</p>
    <div class="row"><button class="btn" id="bd-ok">${t('save')}</button><button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, () => {
    $('#bd-ok').onclick = run(async () => {
      await api('/api/staff/badges', { uid: p.id, badges: [...document.querySelectorAll('[data-b]:checked')].map(x => x.dataset.b) });
      closeModal(); S.profCache = null; renderProfile();
    });
  });
}

function openGrant(p) {
  modal(`<div class="card accent col" style="width:420px"><h2>${t('grantPremium')} · ${esc(p.nick)}</h2>
    <div class="seg" id="gr-tier"><button data-t="premium" class="on">Premium</button><button data-t="plus">Premium+</button></div>
    <input id="gr-days" type="number" min="1" max="365" value="30" placeholder="${t('days')}">
    <div class="row"><button class="btn" id="gr-ok">${t('grant')}</button>${p.premium?.tier ? `<button class="btn red" id="gr-rev">${t('revoke')}</button>` : ''}<button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, () => {
    let tier = 'premium';
    document.querySelectorAll('#gr-tier button').forEach(b => b.onclick = () => { tier = b.dataset.t; document.querySelectorAll('#gr-tier button').forEach(x => x.classList.toggle('on', x === b)); });
    $('#gr-ok').onclick = run(async () => { await api('/api/staff/premium', { uid: p.id, tier, days: +$('#gr-days').value }); closeModal(); S.profCache = null; renderProfile(); });
    if ($('#gr-rev')) $('#gr-rev').onclick = run(async () => { await api('/api/staff/premium', { uid: p.id, revoke: true }); closeModal(); S.profCache = null; renderProfile(); });
  });
}

function openNick() {
  modal(`<div class="card accent col" style="width:420px"><h2>${t('changeNick')}</h2>
    <input id="nk-in" value="${esc(S.me.nick)}" maxlength="25"><div class="err" id="nk-err"></div>
    <div class="row"><button class="btn" id="nk-ok">${t('save')}</button><button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, () => {
    $('#nk-ok').onclick = async () => {
      try { S.me = await api('/api/premium/nick', { nick: $('#nk-in').value }); closeModal(); S.profCache = null; renderMe(); refresh(); } catch (e) { $('#nk-err').textContent = e.message; }
    };
  });
}

async function openCompare(other) {
  const me = await api('/api/profile?id=' + encodeURIComponent(S.me.id)).catch(e => (toast(e.message, true), null));
  if (!me) return;
  const row = (label, a, b, fmt = v => v) => `<div class="cmp-r"><div class="${a > b ? 'win' : ''}">${fmt(a)}</div><span class="mute">${label}</span><div class="${b > a ? 'win' : ''}">${fmt(b)}</div></div>`;
  const R = (p, m) => p['r' + m] || { elo: 1000, w: 0, l: 0, k: 0, d: 0 };
  const games = r => r.w + r.l;
  const kdn = r => r.d ? r.k / r.d : r.k;
  modal(`<div class="card accent col" style="width:620px">
    <div class="cmp-h"><div>${avaF(me, 'lg')}<h3>${nickHtml(me)}</h3></div><b class="mute">${t('vs')}</b><div>${avaF(other, 'lg')}<h3>${nickHtml(other)}</h3></div></div>
    ${PUB_MODES.map(m => `<h4>${modeX(m)}</h4>
      ${row('ELO', R(me, m).elo, R(other, m).elo)}
      ${row(t('games'), games(R(me, m)), games(R(other, m)))}
      ${row(t('winrate'), wrNum(R(me, m)), wrNum(R(other, m)), v => v + '%')}
      ${row('K/D', kdn(R(me, m)), kdn(R(other, m)), v => v.toFixed(2))}`).join('')}
    <h4>${t('achievements')}</h4>
    ${row(t('achievements'), me.achievements.list.filter(a => a.at).length, other.achievements.list.filter(a => a.at).length)}
    ${row(t('streak'), me.achievements.metrics.streak, other.achievements.metrics.streak)}
    ${row('h', me.achievements.metrics.hours, other.achievements.metrics.hours)}
    <button class="btn ghost" data-close>${t('close')}</button></div>`);
}

const acSignal = sg => `${t('ac_' + sg.code, sg)} · +${sg.pts}`;
async function openAcInfo(uid) {
  const a = await api('/api/staff/ac?uid=' + encodeURIComponent(uid));
  modal(`<div class="card accent col" style="width:620px;max-height:84vh;overflow:auto"><div class="row"><h2 style="margin:0">${esc(a.nick)}</h2>
      <div class="acscore ${a.score >= 80 ? 'hi' : a.score >= 60 ? 'mid' : ''}"><b>${a.score}</b><i><u style="width:${a.score}%"></u></i></div></div>
    <p class="mute" style="margin:0">${t('acBasis', { n: a.matches })}${a.cleared ? ` · ${t('acCleared', { d: fmtDT(a.cleared) })}` : ''}</p>
    <div class="col" style="gap:6px">${a.signals.map(sg => `<div class="row"><span class="tag red">+${sg.pts}</span><span>${t('ac_' + sg.code, sg)}</span></div>`).join('') || `<span class="mute">${t('acNoSignals')}</span>`}</div>
    <h4 style="margin:8px 0 0">${t('reports', { n: a.reportsList.length })}</h4>
    ${a.reportsList.map(r => `<div class="row" style="font-size:13.5px"><b>${esc(r.fromNick || '?')}</b><span class="tag">${t('rr_' + (r.reason || 'other'))}</span>${r.match ? `<span class="tag">#${r.match}</span>` : ''}<span class="mute">×${r.weight ?? 1} · ${fmtDT(r.at)}${r.verdict ? ' · ' + t('verdict_' + r.verdict) : ''}</span></div>${r.text ? `<div class="mute" style="font-size:13px;margin:-4px 0 4px">${esc(r.text)}</div>` : ''}`).join('') || `<span class="mute">${t('noReports')}</span>`}
    <p class="mute" style="font-size:12.5px">${t('acDisclaimer')}</p>
    <div class="row"><button class="btn" data-goprof>${t('profile')}</button><button class="btn ghost" data-close>${t('close')}</button></div></div>`, box => {
    box.querySelector('[data-goprof]').onclick = () => { closeModal(); go('profile', uid); };
  });
}
const REPORT_REASONS = ['aim', 'wallhack', 'cheat', 'boosting', 'toxic', 'afk', 'other'];
function openReport(p, matchId) {
  modal(`<div class="card accent col" style="width:480px"><h2>${t('reportTitle', { n: esc(p.nick) })}</h2>
    <div class="seg wrap" id="rp-reason">${REPORT_REASONS.map((r, i) => `<button data-v="${r}" class="${i === 0 ? 'on' : ''}">${t('rr_' + r)}</button>`).join('')}</div>
    <input id="rp-match" placeholder="${t('matchNoPh')}" value="${matchId ? esc(matchId) : ''}"><span class="mute" style="font-size:12.5px">${t('reportMatchHint')}</span>
    <textarea id="rp-text" rows="4" maxlength="1000" placeholder="${t('whatHappened')}"></textarea>
    <div class="row"><button class="btn red" id="rp-send">${t('send')}</button><button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, () => {
    document.querySelectorAll('#rp-reason button').forEach(b => b.onclick = () => document.querySelectorAll('#rp-reason button').forEach(x => x.classList.toggle('on', x === b)));
    $('#rp-send').onclick = run(async () => {
      await api('/api/report', { uid: p.id, match: $('#rp-match').value.trim(), reason: $('#rp-reason .on')?.dataset.v, text: $('#rp-text').value });
      closeModal(); toast(t('reportSent'));
    });
  });
}
function openBan(p) {
  modal(`<div class="card accent col" style="width:420px"><h2>${t('banTitle', { n: esc(p.nick) })}</h2>
    <input id="bn-days" type="number" min="0" value="7" placeholder="${t('daysPh')}"><input id="bn-reason" placeholder="${t('reasonPh')}" maxlength="200">
    <div class="row"><button class="btn red" id="bn-send">${t('ban')}</button><button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, () => {
    $('#bn-send').onclick = run(async () => { await api('/api/staff/ban', { uid: p.id, days: +$('#bn-days').value, reason: $('#bn-reason').value }); closeModal(); toast(t('bannedOk')); S.profCache = null; refresh(); });
  });
}
function openEdit(p) {
  modal(`<div class="card accent col" style="width:420px"><h2>${t('editTitle', { n: esc(p.nick) })}</h2>
    <input id="ed-nick" value="${esc(p.nick)}" maxlength="25"><input id="ed-id" value="${esc(p.gameId)}" maxlength="20">
    <div class="row"><button class="btn" id="ed-send">${t('save')}</button><button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, () => {
    $('#ed-send').onclick = run(async () => { await api('/api/staff/edit-user', { uid: p.id, nick: $('#ed-nick').value, gameId: $('#ed-id').value }); closeModal(); S.profCache = null; refresh(); });
  });
}

async function renderStaff() {
  const o = await api('/api/staff/overview').catch(e => (toast(e.message, true), null));
  if (!o || S.page !== 'staff') return;
  const teamLine = (m, s) => m.teams[s].map(p => esc(p.nick) + (m.result?.stats?.[p.id] ? ` <span class="mute">${m.result.stats[p.id].k}/${m.result.stats[p.id].d}</span>` : '')).join(', ');
  const RV_T = (k, id) => ({ en: { ok: 'Checked', fixed: 'Corrected', done: `Match #${id} marked as checked` }, uk: { ok: 'Перевірено', fixed: 'Виправлено', done: `Матч #${id} позначено перевіреним` }, ru: { ok: 'Проверено', fixed: 'Исправлено', done: `Матч #${id} отмечен проверенным` } }[LANG] || {})[k] || k;
  const doneReview = m => {
    const kd = side => m.teams[side].map(p => { const st = m.result?.stats?.[p.id] || { k: 0, d: 0 };
      return `<div class="pl">${ava(p, 'sm')}<div class="nm grow">${nickHtml(p)}</div><input type="number" min="0" max="999" data-rk="${m.id}:${p.id}" value="${st.k}"><input type="number" min="0" max="999" data-rd="${m.id}:${p.id}" value="${st.d}">${webTag(m, p.id)}${calTag(m, p.id)}<span class="mute num" style="width:34px;text-align:right">${m.eloDelta?.[p.id] != null ? sign(m.eloDelta[p.id]) : ''}</span></div>`; }).join('');
    const a = m.result?.auto;
    return `<div class="card rv ${m.review === 'disputed' ? 'bad' : ''}" data-rv="${m.id}">
      <div class="row" style="flex-wrap:wrap"><h3 style="margin:0">#${m.id} · ${m.mode} · ${mapName(m.map)}</h3>
        ${m.review === 'checked' || m.review === 'corrected' ? `<span class="tag green">✓ ${RV_T(m.review === 'corrected' ? 'fixed' : 'ok')}</span>` : `<span class="tag ${m.review === 'disputed' ? 'red' : ''}">${m.review === 'disputed' ? t('disputedAfter') : t('autoPending')}</span>`}
        ${a ? `<span class="tag ${a.found === a.total ? '' : 'gold'}">🤖 ${t('autoFound', { f: a.found, t: a.total })}</span>` : ''}
        ${a?.checked != null ? `<span class="tag ${a.checked === a.found ? '' : 'gold'}">K/D ✓ ${a.checked}/${a.found}</span>` : ''}
        <span class="mute">${fmtDT(m.finishedAt)}</span></div>
      ${m.dispute ? `<p class="lose" style="margin:8px 0 0">${t('dispute')}: ${esc(m.dispute.reason || '—')}</p>` : ''}
      <div class="rvgrid"><div class="col">
        <div class="row"><h4 style="margin:0">${t('winner')}</h4>
          <div class="seg">${['A', 'B'].map(x => `<button data-rw="${m.id}" data-v="${x}" class="${m.result?.winner === x ? 'on' : ''}">${TEAM[x]}</button>`).join('')}</div>
          <h4 style="margin:0 0 0 10px">${t('score', { s: '' })}</h4><input data-rs="${m.id}" value="${esc(m.result?.score || '')}" style="width:90px"></div>
        <div class="kd"><div class="col" style="gap:5px">${kd('A')}</div><div class="col" style="gap:5px">${kd('B')}</div></div>
        <div class="row"><button class="btn green sm" data-rok="${m.id}">✓ ${t('allCorrect')}</button><button class="btn sm" data-rfix="${m.id}">${t('saveFix')}</button><button class="btn ghost sm" data-rcancel="${m.id}">${t('cancelMatch')}</button></div>
      </div><div>${m.result?.shot ? `<img class="shot" src="${S.server + m.result.shot}" data-zoom>` : `<span class="mute">${t('noShot')}</span>`}</div></div></div>`;
  };
  const review = m => m.state === 'done' ? doneReview(m) : `<div class="card" data-rvl="${m.id}" style="margin-bottom:12px;${m.state === 'disputed' ? 'border-color:var(--lose)' : ''}">
    <div class="row"><h3 style="margin:0">#${m.id} · ${m.mode} · ${mapName(m.map)}</h3><span class="tag ${m.state === 'disputed' ? 'red' : ''}">${m.state}</span></div>
    <div class="grid2" style="margin-top:12px"><div class="col">
      <div><b class="alfa">Alfa:</b> ${teamLine(m, 'A')}</div><div><b class="bravo">Bravo:</b> ${teamLine(m, 'B')}</div>
      ${m.result ? `<div>${t('submitted', { t: `<b>${TEAM[m.result.winner]}</b> ${esc(m.result.score || '')}` })}</div>` : ''}
      ${m.dispute ? `<div class="lose">${t('dispute')}: ${esc(m.dispute.reason)}</div>` : ''}
      <div class="row"><button class="btn sm" data-fin="${m.id}" data-w="A">${t('alfaWon')}</button><button class="btn sm" data-fin="${m.id}" data-w="B">${t('bravoWon')}</button><button class="btn ghost sm" data-cancel="${m.id}">${t('cancelMatch')}</button></div>
    </div><div>${m.result?.shot ? `<img class="shot" src="${S.server + m.result.shot}" data-zoom>` : `<span class="mute">${t('noShot')}</span>`}</div></div></div>`;
  const tabs = o.acOnly ? [['moderation', (o.suspects || []).length]] : [['matches', o.review.length + o.live.length], ['live', null], ['players', o.banned.length], ['moderation', (o.suspects || []).length + o.reports.length], ['tools', null], ['duty', S.laneDutyOpen || null],
    ...(S.me.auditor ? [['stats', null], ['survey', null], ['audit', null]] : []),
    ...(S.me.admin && window.renderPartnersAdmin ? [['partners', window.partnersAdminCount?.() || null]] : [])];
  if (!tabs.some(x => x[0] === S.staffTab)) S.staffTab = tabs[0][0];
  const tabBar = `<div class="stabs">${tabs.map(([k, n]) => `<button data-stab="${k}" class="${S.staffTab === k ? 'on' : ''}">${t('st_' + k)}${n ? `<span class="cnt">${n}</span>` : ''}</button>`).join('')}</div>`;
  const toolsTab = `<div class="card accent" style="margin-bottom:18px"><div class="row" style="flex-wrap:wrap"><div class="grow" style="min-width:260px"><h3 style="margin:0 0 4px">🤖 ${t('testMatch')}</h3><span class="mute">${t('testHint')}</span></div>
      <button class="btn" data-test="2v2">2 × 2</button><button class="btn ghost" data-test="1v1">1 × 1</button><button class="btn ghost" data-test="5v5" title="${t('testStaff5')}">5 × 5</button></div></div>
    <div class="card" style="margin-bottom:18px"><h4>${t('stDiscordCmds')}</h4><div class="cmdlist">${['/match pending', '/match open', '/match link', '/key create', '/key info', '/key revoke', '/promo create', '/promo list', '/profile', '/invite'].map(c => `<div><code>${c}</code><span class="mute">${t('cmd_' + c.replace(/\W+/g, '_').replace(/^_|_$/g, ''))}</span></div>`).join('')}</div></div>
    ${S.me.auditor ? `<div class="card" style="margin-bottom:18px"><h4 style="margin:0 0 4px">${t('bcTool')}</h4><p class="mute" style="margin:0 0 8px;font-size:12.5px">${t('bcToolHint')}</p><div class="row"><textarea id="bc-text" class="grow" rows="2" maxlength="500" placeholder="${t('bcPh')}"></textarea><button class="btn gold" id="bc-send">${t('bcSend')}</button></div></div>` : ''}
    ${S.me.auditor ? `<div class="card" style="margin-bottom:18px" id="st-sale"><h4 style="margin:0 0 4px">${kzPick({ en: 'Sale', uk: 'Розпродаж', ru: 'Распродажа' })}</h4><p class="mute" id="sale-st" style="margin:0 0 8px;font-size:12.5px">…</p>
      <div class="row" style="flex-wrap:wrap;gap:10px"><label>−<input id="sale-pct" type="number" min="5" max="90" value="30" style="width:64px">%</label><label><input id="sale-h" type="number" min="1" max="744" value="72" style="width:70px"> ${kzPick({ en: 'hours', uk: 'год', ru: 'ч' })}</label>
        ${[['premium', 'Premium'], ['packs', kzPick({ en: 'KF packs', uk: 'Пакети KF', ru: 'Пакеты KF' })], ['items', kzPick({ en: 'Items for $', uk: 'Предмети за $', ru: 'Предметы за $' })], ['kf', kzPick({ en: 'Items for KF', uk: 'Предмети за KF', ru: 'Предметы за KF' })]].map(([k, n]) => `<label><input type="checkbox" data-sale-sc="${k}" checked> ${n}</label>`).join('')}
        <span class="grow"></span><button class="btn gold" id="sale-go">${kzPick({ en: 'Start', uk: 'Запустити', ru: 'Запустить' })}</button><button class="btn ghost" id="sale-stop">${kzPick({ en: 'Stop', uk: 'Зупинити', ru: 'Остановить' })}</button></div></div>` : ''}
    ${S.me.auditor ? `<div class="card" style="margin-bottom:18px"><div class="row"><div class="grow"><h4 style="margin:0 0 4px">${t('stExport')}</h4><span class="mute">${t('stExportHint')}</span></div><button class="btn" id="st-csv">CSV</button></div></div>` : ''}`;
  const tabHtml = {
    matches: `<div class="card" style="margin-bottom:18px"><div class="row"><h4 style="margin:0">${t('stFindMatch')}</h4><input id="mt-q" placeholder="#123" style="width:120px" autocomplete="off"><button class="btn sm" id="mt-go">${t('search')}</button></div></div>
    ${S.staffMatch ? `<h2>${t('matchById', { n: S.staffMatch.id })} <button class="btn ghost sm" id="sm-close">✕</button></h2>${review(S.staffMatch)}` : ''}
    <h2>${t('review', { n: o.review.length })}</h2>${o.review.map(review).join('') || `<div class="card empty-note">${t('nothingReview')}</div>`}
    <h2 style="margin-top:22px">${t('liveList', { n: o.live.length })}</h2>
    ${o.live.map(m => `<div class="card row" style="margin-bottom:8px"><b>#${m.id}</b><span class="tag">${m.mode}</span><span>${m.state}</span><span class="mute">${m.map ? mapName(m.map) : ''}</span>
      <span class="grow"></span>${m.state === 'live' ? `<button class="btn sm" data-fin="${m.id}" data-w="A">${t('alfaWon')}</button><button class="btn sm" data-fin="${m.id}" data-w="B">${t('bravoWon')}</button>` : ''}<button class="btn ghost sm" data-cancel="${m.id}">${t('cancelMatch')}</button></div>`).join('') || `<div class="card empty-note">${t('noLive')}</div>`}`,
    players: `<div class="card" style="margin-bottom:18px"><h4>${t('findPlayer')}</h4>
      <div class="row"><input id="ps-q" class="grow" placeholder="${t('findPlayerPh')}" autocomplete="off"><button class="btn" id="ps-go">${t('search')}</button></div>
      <div id="ps-res" class="psres"></div></div>
    <h2 style="margin-top:22px">${t('bannedList', { n: o.banned.length })}</h2>
    ${o.banned.map(u => `<div class="card row" style="margin-bottom:8px"><a href="#" data-prof="${u.id}" style="color:var(--accent);font-family:TTDB">${esc(u.nick)}</a><span>${esc(u.ban.reason)}</span><span class="mute">${u.ban.until ? t('until', { d: fmtDT(u.ban.until) }) : t('forever')}</span><span class="grow"></span><button class="btn sm" data-unban="${u.id}">${t('unban')}</button></div>`).join('') || `<div class="card empty-note">${t('nobodyBanned')}</div>`}`,
    moderation: `<h2 style="margin-top:22px">${t('suspects', { n: (o.suspects || []).length })}</h2><p class="mute" style="margin:-4px 0 10px">${t('suspectsHint')}</p>
    ${(o.suspects || []).map(x => `<div class="card susp" style="margin-bottom:8px"><div class="row">
      <div class="acscore ${x.score >= 80 ? 'hi' : x.score >= 60 ? 'mid' : ''}"><b>${x.score}</b><i><u style="width:${x.score}%"></u></i></div>
      <a href="#" data-prof="${x.uid}" style="color:var(--accent);font-family:TTDB">${esc(x.nick)}</a><span class="grow"></span>
      <button class="btn sm" data-ac-info="${x.uid}">${t('details')}</button><button class="btn ghost sm" data-ac-clear="${x.uid}">${t('acClear')}</button></div>
      <div class="acsig">${x.signals.map(sg => `<span class="tag">${acSignal(sg)}</span>`).join('')}</div></div>`).join('') || `<div class="card empty-note">${t('noSuspects')}</div>`}
    ${o.acOnly ? '' : `<h2 style="margin-top:22px">${t('reports', { n: o.reports.length })}</h2>`}
    ${o.acOnly ? '' : o.reports.map(r => `<div class="card" style="margin-bottom:8px"><div class="row"><b>${esc(r.fromNick)}</b> → <a href="#" data-prof="${r.uid}" style="color:var(--accent)">${esc(r.nick)}</a>
      <span class="tag ${['aim', 'wallhack', 'cheat', 'boosting'].includes(r.reason) ? 'red' : ''}">${t('rr_' + (r.reason || 'other'))}</span>${r.match ? `<span class="tag">#${esc(r.match)}</span>` : `<span class="tag">${t('noMatchTag')}</span>`}
      <span class="mute" title="${t('reportWeight')}">×${r.weight ?? 1}</span><span class="mute">${fmtDT(r.at)}</span><span class="grow"></span>
      <button class="btn green sm" data-close-rep="${r.id}" data-verdict="ok">${t('repOk')}</button><button class="btn ghost sm" data-close-rep="${r.id}" data-verdict="bad">${t('repBad')}</button><button class="btn ghost sm" data-close-rep="${r.id}" data-verdict="closed">${t('close')}</button></div>
      ${r.text ? `<p style="margin:8px 0 0">${esc(r.text)}</p>` : ''}</div>`).join('') || `<div class="card empty-note">${t('noReports')}</div>`}`,
    tools: toolsTab,
    duty: `<div id="st-duty"><div class="card empty-note">${t('loading')}</div></div>`,
    live: `<div id="st-live"><div class="card empty-note">${t('loading')}</div></div>`,
    survey: `<div id="st-survey"><div class="card empty-note">${t('loading')}</div></div>`,
    stats: `<div id="st-stats"><div class="card empty-note">${t('loading')}</div></div>`,
    audit: `<div id="st-audit"><div class="card empty-note">${t('loading')}</div></div>`,
    partners: `<div id="st-partners"><div class="card empty-note">${t('loading')}</div></div>`,
  };
  render(`<div class="lbhead"><h1>${t('staff')}</h1>${S.me.admin ? `<span class="tag gold">${t('ownerTag')}</span>` : ''}</div>
    ${tabBar}
    <div class="stab-body">${tabHtml[S.staffTab]}</div>`);
  document.querySelectorAll('[data-stab]').forEach(b => b.onclick = () => { S.staffTab = b.dataset.stab; renderStaff(); });
  if (S.staffTab === 'live') renderLive();
  if (S.staffTab === 'stats') renderStaffStats();
  if (S.staffTab === 'survey') renderSurvey();
  if (S.staffTab === 'audit') renderAudit();
  if (S.staffTab === 'partners') renderPartnersAdmin();
  if ($('#st-sale')) {
    const showSale = sl => { $('#sale-st').innerHTML = sl ? `<b class="win">−${sl.pct}%</b> · ${sl.scope.join(', ')} · ${kzPick({ en: 'until', uk: 'до', ru: 'до' })} ${fmtDT(sl.until)}` : kzPick({ en: 'No sale running', uk: 'Розпродажу немає', ru: 'Распродажи нет' }); };
    api('/api/sale').then(r => showSale(r.sale)).catch(() => showSale(null));
    $('#sale-go').onclick = run(async () => {
      const scope = [...document.querySelectorAll('[data-sale-sc]:checked')].map(x => x.dataset.saleSc);
      if (!confirm(kzPick({ en: 'Start the sale for all players?', uk: 'Запустити розпродаж для всіх гравців?', ru: 'Запустить распродажу для всех игроков?' }))) return;
      const r = await api('/api/admin/sale', { pct: +$('#sale-pct').value, hours: +$('#sale-h').value, scope }); showSale(r.sale); toast(t('saved'));
    });
    $('#sale-stop').onclick = run(async () => { if (!confirm(kzPick({ en: 'Stop the sale now?', uk: 'Зупинити розпродаж зараз?', ru: 'Остановить распродажу сейчас?' }))) return; const r = await api('/api/admin/sale', { stop: true }); showSale(r.sale); toast(t('saved')); });
  }
  if ($('#bc-send')) $('#bc-send').onclick = run(async () => { const text = $('#bc-text').value.trim(); if (!text || !confirm(t('bcQ'))) return; const r = await api('/api/staff/broadcast', { text }); $('#bc-text').value = ''; toast(t('bcSent', { n: r.sent })); });
  if ($('#st-csv')) $('#st-csv').onclick = run(async () => {
    const r = await fetch(S.server + '/api/admin/players.csv', { headers: { Authorization: 'Bearer ' + S.token, 'X-Konzte-Hwid': S.hwid, 'X-Konzte-Client': S.appInfo?.version || '' } });
    if (!r.ok) throw new Error('CSV: ' + r.status);
    const a = document.createElement('a'); a.href = URL.createObjectURL(await r.blob()); a.download = `konzte-players-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
  });
  const act = (sel, fn) => document.querySelectorAll(sel).forEach(b => b.onclick = run(async e => { e.preventDefault(); await fn(b); renderStaff(); }));
  document.querySelectorAll('[data-rw]').forEach(b => b.onclick = () => document.querySelectorAll(`[data-rw="${b.dataset.rw}"]`).forEach(x => x.classList.toggle('on', x === b)));
  const fixBody = id => {
    const stats = {};
    document.querySelectorAll(`[data-rk^="${id}:"]`).forEach(i => { const uid = i.dataset.rk.split(':').slice(1).join(':'); stats[uid] = { k: +i.value || 0, d: +document.querySelector(`[data-rd="${id}:${uid}"]`).value || 0 }; });
    return { id, stats, winner: document.querySelector(`[data-rw="${id}"].on`)?.dataset.v, score: document.querySelector(`[data-rs="${id}"]`).value };
  };
  act('[data-rok]', async b => { await api('/api/staff/review-ok', { id: b.dataset.rok }); sfx('ok'); toast(RV_T('done', b.dataset.rok)); });
  const refreshSM = async () => { if (S.staffMatch) S.staffMatch = await api('/api/staff/match?id=' + S.staffMatch.id).catch(() => null); };
  document.querySelectorAll('[data-rok],[data-rfix],[data-rcancel],[data-fin],[data-cancel]').forEach(b => b.addEventListener('click', () => setTimeout(async () => { await refreshSM(); }, 50)));
  act('[data-rfix]', async b => { await api('/api/staff/correct', fixBody(b.dataset.rfix)); sfx('ok'); toast(t('saved')); });
  act('[data-rcancel]', b => confirm(t('cancelQ', { id: b.dataset.rcancel })) && api('/api/staff/correct', { id: b.dataset.rcancel, cancel: true }));
  act('[data-fin]', b => confirm(t('finishQ', { id: b.dataset.fin, t: TEAM[b.dataset.w] })) && api('/api/staff/finish', { id: b.dataset.fin, winner: b.dataset.w }));
  act('[data-cancel]', b => confirm(t('cancelQ', { id: b.dataset.cancel })) && api('/api/staff/cancel', { id: b.dataset.cancel }));
  act('[data-close-rep]', b => api('/api/staff/report-close', { id: b.dataset.closeRep, verdict: b.dataset.verdict }));
  act('[data-ac-clear]', b => confirm(t('acClearQ')) && api('/api/staff/ac-clear', { uid: b.dataset.acClear }));
  document.querySelectorAll('[data-ac-info]').forEach(b => b.onclick = run(() => openAcInfo(b.dataset.acInfo)));
  act('[data-unban]', b => api('/api/staff/unban', { uid: b.dataset.unban }));
  document.querySelectorAll('.stab-body [data-prof]').forEach(a => a.onclick = e => { e.preventDefault(); if (o.acOnly) return go('profile', a.dataset.prof); openDossier(a.dataset.prof).catch(er => toast(er.message, true)); });
  document.querySelectorAll('[data-zoom]').forEach(i => i.onclick = () => openShot(i.src));
  if ($('#sm-close')) $('#sm-close').onclick = () => { S.staffMatch = null; renderStaff(); };
  const doSearch = run(async () => {
    const q = $('#ps-q').value.trim();
    if (/^#?\d{1,7}$/.test(q)) { S.staffMatch = await api('/api/staff/match?id=' + q.replace('#', '')); return renderStaff(); }
    const list = await api('/api/staff/search?q=' + encodeURIComponent($('#ps-q').value));
    $('#ps-res').innerHTML = list.length ? list.map(u => `<div class="pmem psr" data-prof="${u.id}">${avaF(u, 'sm')}<span class="num grow">${nickHtml(u)} <span class="mute">· ${esc(u.name)} · ${esc(u.id)}</span></span>
      ${u.premium ? crown(u.premium) : ''}${u.ban ? `<span class="tag red">${t('bannedTag')}</span>` : ''}${u.registered ? '' : `<span class="tag">${t('notRegistered')}</span>`}<span class="num" style="color:var(--accent)">${u.elo}</span></div>`).join('')
      : `<div class="empty-note">${t('nothingFound')}</div>`;
    $('#ps-res').querySelectorAll('[data-prof]').forEach(a => a.onclick = () => openDossier(a.dataset.prof).catch(e => toast(e.message, true)));
  });
  if ($('#mt-go')) { const f = run(async () => { const n = $('#mt-q').value.replace(/\D/g, ''); if (!n) return; S.staffMatch = await api('/api/staff/match?id=' + n); renderStaff(); }); $('#mt-go').onclick = f; $('#mt-q').onkeydown = e => { if (e.key === 'Enter') f(); }; }
  if ($('#ps-go')) { $('#ps-go').onclick = doSearch; $('#ps-q').onkeydown = e => { if (e.key === 'Enter') doSearch(); }; }
  document.querySelectorAll('[data-test]').forEach(b => b.onclick = run(async () => { await api('/api/staff/test', { mode: b.dataset.test }); S.mode = pubMode(b.dataset.test); go('play'); }));
}

const VZ = { '5v5': '#7d84ec', '2v2': '#23a090', '1v1': '#d39a3c', one: '#7d84ec', seq: [ '#26242d', '#2e3160', '#414896', '#5a62c8', '#7d84ec', '#aab0ff' ] };
const nf = n => (+n || 0).toLocaleString(LANG === 'en' ? 'en-US' : 'uk-UA');
const shortDay = k => { const d = new Date(k + 'T00:00:00Z'); return `${d.getUTCDate()}.${String(d.getUTCMonth() + 1).padStart(2, '0')}`; };
function vizTips(root) {
  let tip = $('#vtip'); if (!tip) { tip = document.createElement('div'); tip.id = 'vtip'; tip.hidden = true; document.body.appendChild(tip); }
  root.querySelectorAll('[data-tip]').forEach(el => {
    el.onmouseenter = () => { tip.innerHTML = el.dataset.tip; tip.hidden = false; };
    el.onmousemove = e => { const w = tip.offsetWidth; tip.style.left = Math.min(innerWidth - w - 8, e.clientX + 12) + 'px'; tip.style.top = (e.clientY - tip.offsetHeight - 10) + 'px'; };
    el.onmouseleave = () => { tip.hidden = true; };
  });
}
function vBars(keys, series, { h = 150, fmt = nf } = {}) {
  const W = 640, pad = 22, n = keys.length, bw = (W - pad) / n;
  const tot = keys.map((_, i) => series.reduce((a, s) => a + (s.data[i] || 0), 0));
  const max = Math.max(1, ...tot), sc = v => v / max * (h - 26);
  const step = Math.ceil(n / 8);
  let bars = '';
  keys.forEach((k, i) => {
    let y = h - 16;
    const tip = `<b>${shortDay(k)}</b>${series.map(s => `<div><i style="background:${s.color}"></i>${esc(s.label)}: <b>${fmt(s.data[i] || 0)}</b></div>`).join('')}`;
    series.forEach((s, si) => {
      const v = s.data[i] || 0; if (!v) return;
      const hh = Math.max(2, sc(v)); y -= hh;
      bars += `<rect x="${pad + i * bw + 1}" y="${y + (si ? 1 : 0)}" width="${Math.max(1, bw - 2)}" height="${hh - (si ? 1 : 0)}" rx="${si === series.length - 1 || series.length === 1 ? 3 : 0}" fill="${s.color}"/>`;
    });
    bars += `<rect class="hit" x="${pad + i * bw}" y="0" width="${bw}" height="${h - 16}" data-tip='${tip.replace(/'/g, '&#39;')}'/>`;
    if (i % step === 0) bars += `<text x="${pad + i * bw + bw / 2}" y="${h - 3}" text-anchor="middle">${shortDay(k)}</text>`;
  });
  const legend = series.length > 1 ? `<div class="vleg">${series.map(s => `<span><i style="background:${s.color}"></i>${esc(s.label)}</span>`).join('')}</div>` : '';
  return `${legend}<svg class="vz" viewBox="0 0 ${W} ${h}" preserveAspectRatio="none"><line x1="${pad}" x2="${W}" y1="${h - 16}" y2="${h - 16}" class="ax"/><text x="0" y="12">${fmt(max)}</text>${bars}</svg>`;
}
const hBars = (rows, { color = VZ.one, fmt = nf, extra = () => '' } = {}) => {
  const max = Math.max(1, ...rows.map(r => r.v));
  return `<div class="hbars">${rows.map(r => `<div class="hb" data-tip="${esc(r.tip || `${r.label}: ${fmt(r.v)}`)}"><span class="hl">${r.labelHtml || esc(r.label)}</span><span class="ht"><u style="width:${r.v / max * 100}%;background:${r.color || color}"></u></span><b>${fmt(r.v)}</b>${extra(r)}</div>`).join('')}</div>`;
};
function onlineChart(points) {
  if (points.length < 2) return `<div class="empty-note">${t('stCollecting')}</div>`;
  const W = 640, H = 150, t0 = points[0][0], t1 = points.at(-1)[0], max = Math.max(1, ...points.map(p => p[1]));
  const X = tt => 22 + (tt - t0) / Math.max(1, t1 - t0) * (W - 22), Y = v => H - 16 - v / max * (H - 26);
  const path = i => points.map((p, j) => `${j ? 'L' : 'M'}${X(p[0]).toFixed(1)},${Y(p[i]).toFixed(1)}`).join('');
  const days = []; for (let d = new Date(t0).setUTCHours(24, 0, 0, 0); d < t1; d += 864e5) days.push(d);
  const hits = points.filter((_, i) => i % Math.ceil(points.length / 120) === 0).map(p => `<rect class="hit" x="${X(p[0]) - 3}" y="0" width="6" height="${H - 16}" data-tip="<b>${fmtDT(p[0])}</b><div>${t('stOnlineL')}: <b>${p[1]}</b></div><div>${t('stInQueue')}: <b>${p[3]}</b></div><div>${t('stLiveMatches')}: <b>${p[4]}</b></div>"/>`).join('');
  return `<div class="vleg"><span><i style="background:${VZ.one}"></i>${t('stOnlineL')}</span><span><i style="background:${VZ['2v2']}"></i>${t('stInQueue')}</span></div>
    <svg class="vz" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><line x1="22" x2="${W}" y1="${H - 16}" y2="${H - 16}" class="ax"/><text x="0" y="12">${max}</text>
    ${days.map(d => `<line x1="${X(d)}" x2="${X(d)}" y1="0" y2="${H - 16}" class="grid"/><text x="${X(d) + 3}" y="${H - 3}">${shortDay(new Date(d).toISOString().slice(0, 10))}</text>`).join('')}
    <path d="${path(1)}" fill="none" stroke="${VZ.one}" stroke-width="2" vector-effect="non-scaling-stroke"/><path d="${path(3)}" fill="none" stroke="${VZ['2v2']}" stroke-width="1.5" vector-effect="non-scaling-stroke"/>${hits}</svg>`;
}
function heatmap(heat) {
  const max = Math.max(1, ...heat.flat()), wd = t('stWeekdays').split(',');
  const cell = v => VZ.seq[v ? Math.min(5, 1 + Math.floor(v / max * 4.999)) : 0];
  return `<div class="heat"><span></span>${Array.from({ length: 24 }, (_, h) => `<span class="hh">${h % 3 ? '' : h}</span>`).join('')}
    ${heat.map((row, d) => `<span class="hd">${wd[d]}</span>${row.map((v, h) => `<i style="background:${cell(v)}" data-tip="<b>${wd[d]} ${String(h).padStart(2, '0')}:00 UTC</b><div>${t('stMatches')}: <b>${v}</b></div>"></i>`).join('')}`).join('')}</div>
    <div class="heatleg"><span class="mute">0</span>${VZ.seq.map(c => `<i style="background:${c}"></i>`).join('')}<span class="mute">${max}</span></div>`;
}
const kpi = (label, value, sub = '', cls = '') => `<div class="kpi ${cls}"><span>${label}</span><b>${value}</b>${sub ? `<small>${sub}</small>` : ''}</div>`;

async function renderStaffStats() {
  const box = $('#st-stats'); if (!box) return;
  S.statDays ||= 30;
  const s = await api('/api/admin/stats?days=' + S.statDays).catch(e => (toast(e.message, true), null));
  if (!s || !$('#st-stats')) return;
  const P = s.players, M = s.matches, E = s.economy, R = s.moderation, cur = E.payments.currency;
  const money = v => `${(+v || 0).toFixed(2)} ${cur}`;
  const ret = r => r.base ? `${r.pct}%` : '—';
  const days = s.keys;
  box.innerHTML = `<div class="row st-period"><div class="seg">${[7, 30, 90, 365].map(d => `<button data-sd="${d}" class="${S.statDays === d ? 'on' : ''}">${t('stDays', { n: d })}</button>`).join('')}</div>
      <span class="mute">${t('stUpdated', { t: fmtDT(s.at) })}</span><span class="grow"></span><button class="btn ghost sm" id="st-reload">${t('stRefresh')}</button></div>

    <h3 class="sth">${t('stPlayers')}</h3>
    <div class="kpis">${kpi(t('stTotalUsers'), nf(P.total), t('stRegistered', { n: nf(P.registered) }))}${kpi(t('stNew'), nf(P.newRange), t('stToday', { n: P.newToday }))}
      ${kpi('DAU', nf(P.active1))}${kpi('WAU', nf(P.active7))}${kpi('MAU', nf(P.active30))}${kpi(t('stStickiness'), P.active30 ? Math.round(P.active1 / P.active30 * 100) + '%' : '—', 'DAU / MAU')}</div>
    <div class="grid2"><div class="card"><h4>${t('stActivePerDay')}</h4>${vBars(days, [{ label: t('stActive'), color: VZ.one, data: P.dau }])}</div>
      <div class="card"><h4>${t('stNewPerDay')}</h4>${vBars(days, [{ label: t('stNew'), color: VZ.one, data: P.newUsers }])}</div></div>
    <div class="grid2"><div class="card"><h4>${t('stFunnel')}</h4>${hBars([
        { label: t('stF_joined'), v: P.funnel.joined }, { label: t('stF_registered'), v: P.funnel.registered }, { label: t('stF_played1'), v: P.funnel.played1 },
        { label: t('stF_played10'), v: P.funnel.played10 }, { label: t('stF_played50'), v: P.funnel.played50 }], { extra: r => `<span class="mute pc">${P.funnel.joined ? Math.round(r.v / P.funnel.joined * 100) : 0}%</span>` })}</div>
      <div class="card"><h4>${t('stRetention')}</h4><p class="mute" style="margin:0 0 10px;font-size:12.5px">${t('stRetentionHint')}</p>
        <div class="kpis k3">${kpi('D1', ret(P.retention.d1), t('stOf', { a: P.retention.d1.kept, b: P.retention.d1.base }))}${kpi('D7', ret(P.retention.d7), t('stOf', { a: P.retention.d7.kept, b: P.retention.d7.base }))}${kpi('D30', ret(P.retention.d30), t('stOf', { a: P.retention.d30.kept, b: P.retention.d30.base }))}</div></div></div>

    <h3 class="sth">${t('stMatchesH')}</h3>
    <div class="kpis">${kpi(t('stMatchesRange'), nf(M.range), `2×2 ${nf(M.byMode['2v2'])} · 1×1 ${nf(M.byMode['1v1'] || 0)} · 5×5 ${nf(M.byMode['5v5'])}`)}${kpi(t('stMatchesAll'), nf(M.total))}
      ${kpi(t('stDuration'), M.duration.median ? `${M.duration.median} ${t('stMin')}` : '—', t('stAvg', { n: M.duration.avg }))}${kpi(t('stCancelled'), nf(M.cancelled), `${M.cancelRate}% · ${t('stDraws', { n: M.draws })}`)}
      ${kpi(t('stAlfaWin'), M.alfaWin + '%', t('stAlfaHint'))}${kpi('OCR', M.ocr.total ? M.ocr.pct + '%' : '—', t('stOcrHint', { a: M.ocr.full, b: M.ocr.total }))}</div>
    <div class="card"><h4>${t('stMatchesPerDay')}</h4>${vBars(days, ['2v2', '1v1', '5v5'].filter(m => M.perDay[m]).map(m => ({ label: modeX(m).replace(/ /g, ''), color: VZ[m], data: M.perDay[m] })))}</div>
    <div class="grid2"><div class="card"><h4>${t('stHeat')}</h4>${heatmap(M.heat)}</div>
      <div class="card"><h4>${t('stMaps')}</h4>${M.maps.length ? hBars(M.maps.map(x => ({ label: mapName(x.map), v: x.n, tip: `${mapName(x.map)}: ${x.n} · 2×2 ${x['2v2']} · 1×1 ${x['1v1'] || 0} · 5×5 ${x['5v5']} · Alfa ${x.n ? Math.round(x.alfa / x.n * 100) : 0}%` })), { extra: r => { const x = M.maps.find(m => mapName(m.map) === r.label); return `<span class="mute pc">A ${x.n ? Math.round(x.alfa / x.n * 100) : 0}%</span>`; } }) : `<div class="empty-note">${t('stNoData')}</div>`}</div></div>
    <div class="card"><h4>${t('stReview')}</h4><div class="kpis">${kpi(t('stRvPending'), M.review.pending, '', M.review.pending ? 'warn' : '')}${kpi(t('stRvDisputed'), M.review.disputed, '', M.review.disputed ? 'bad' : '')}${kpi(t('stRvChecked'), M.review.checked)}${kpi(t('stRvCorrected'), M.review.corrected, M.review.checked ? Math.round(M.review.corrected / M.review.checked * 100) + '%' : '')}</div></div>

    <h3 class="sth">${t('stOnline')}</h3>
    <div class="card"><div class="card-h"><h4>${t('stOnline7')}</h4><span class="grow"></span><span class="mute">${t('stPeak', { n: s.online.peak })}</span></div>${onlineChart(s.online.points)}</div>

    <h3 class="sth">${t('stLadders')}</h3>
    <div class="grid2">${['2v2', '1v1', '5v5'].filter(m => s.ladders[m]).map(m => { const L = s.ladders[m]; return `<div class="card"><div class="card-h"><h4>${m.replace('v', ' × ')}</h4><span class="grow"></span><span class="mute">${t('stLadderSub', { n: L.players, m: L.median, x: L.max })}</span></div>
      ${hBars(L.levels.map((v, i) => ({ label: '', labelHtml: `<img class="lvl xs" src="${lvlImg(i)}"> ${i}`, v, tip: `${t('level', { n: i })}: ${v}` })).filter((r, i) => i > 0), { color: VZ[m] })}
      <div class="sttop">${L.top.slice(0, 5).map((u, i) => `<a href="#" data-prof="${u.uid}"><span class="mute">#${i + 1}</span> ${esc(u.nick)} <b>${u.elo}</b> <span class="mute">${u.w}-${u.l}</span></a>`).join('')}</div></div>`; }).join('')}</div>

    <h3 class="sth">${t('stEconomy')}</h3>
    <div class="kpis">${kpi(t('stRevenue'), money(E.payments.revenueRange), t('stRevenueAll', { v: money(E.payments.revenue), n: E.payments.count }))}${kpi('Premium', money(E.payments.premium), 'KF ' + money(E.payments.kf))}
      ${kpi(t('stPremActive'), E.premium.active, `Premium+ ${E.premium.plus} · ${t('stExpiring', { n: E.premium.expiring7 })}`)}${kpi(t('stKfCirc'), nf(E.circulation) + ' KF', t('stHolders', { n: E.holders, m: E.medianCoins }))}
      ${kpi(t('stPayIssues'), E.payments.failed + E.payments.abandoned, t('stPayIssuesHint', { f: E.payments.failed, a: E.payments.abandoned }), E.payments.failed ? 'warn' : '')}${kpi(t('stPromos'), `${E.promos.active}/${E.promos.count}`, t('stPromoUses', { n: E.promos.uses }))}
      ${kpi(t('stRefs'), E.referrals.rewarded, t('stRefPending', { n: E.referrals.pending }))}</div>
    <div class="grid2"><div class="card"><h4>${t('stRevenuePerDay')}</h4>${vBars(days, [{ label: t('stRevenue'), color: VZ.one, data: E.payments.revenueDay }], { fmt: v => (+v).toFixed(2) })}</div>
      <div class="card"><h4>${t('stKfFlows')}</h4><p class="mute" style="margin:0 0 8px;font-size:12px">${t('stKfFlowsHint')}</p>
        <table class="sttab"><tr><th>${t('stSource')}</th><th>+KF</th><th>−KF</th><th>${t('stOps')}</th></tr>${E.flows.slice(0, 10).map(f => `<tr><td>${esc(f.why)}</td><td class="win">${nf(f.plus)}</td><td class="lose">${nf(f.minus)}</td><td>${nf(f.n)}</td></tr>`).join('') || `<tr><td colspan="4" class="mute">${t('stNoData')}</td></tr>`}</table></div></div>
    <div class="card"><h4>${t('stTopItems')}</h4>${E.topItems.length ? hBars(E.topItems.map(x => ({ label: x.item.replace(/^(\w+)s:/, '$1 · '), v: x.n }))) : `<div class="empty-note">${t('stNoData')}</div>`}</div>

    <h3 class="sth">${t('stModeration')}</h3>
    <div class="kpis">${kpi(t('stReportsOpen'), R.reportsOpen, t('stReportsRange', { n: R.reportsRange }), R.reportsOpen ? 'warn' : '')}${kpi(t('stBans'), R.bansActive)}${kpi(t('stSuspects'), R.suspects, '', R.suspects ? 'warn' : '')}
      ${kpi(t('stTickets'), R.tickets.open, t('stTicketsRange', { n: R.tickets.range }), R.tickets.open ? 'warn' : '')}${kpi(t('stKeys'), R.keys)}</div>
    <div class="grid2"><div class="card"><h4>${t('stReasons')}</h4>${Object.keys(R.reasons).length ? hBars(Object.entries(R.reasons).map(([k, v]) => ({ label: t('rr_' + k), v }))) : `<div class="empty-note">${t('stNoData')}</div>`}</div>
      <div class="card"><h4>${t('stVerdicts')}</h4>${Object.keys(R.verdicts).length ? hBars(Object.entries(R.verdicts).map(([k, v]) => ({ label: t('stV_' + k), v }))) : `<div class="empty-note">${t('stNoData')}</div>`}</div></div>

    <h3 class="sth">${t('stStaff')}</h3>
    <div class="card"><table class="sttab"><tr><th>${t('stStaffMember')}</th><th>${t('stActions')}</th><th>${t('stTopActions')}</th><th>${t('stLast')}</th></tr>
      ${s.staff.map(x => `<tr><td>${esc(x.nick)}</td><td><b>${x.n}</b></td><td class="mute">${Object.entries(x.actions).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([a, n]) => `${esc(a)} ×${n}`).join(' · ')}</td><td class="mute">${fmtDT(x.last)}</td></tr>`).join('') || `<tr><td colspan="4" class="mute">${t('stNoData')}</td></tr>`}</table></div>`;
  box.querySelectorAll('[data-sd]').forEach(b => b.onclick = () => { S.statDays = +b.dataset.sd; renderStaffStats(); });
  $('#st-reload').onclick = () => renderStaffStats();
  box.querySelectorAll('[data-prof]').forEach(a => a.onclick = e => { e.preventDefault(); go('profile', a.dataset.prof); });
  vizTips(box);
}

const AUDIT_GROUPS = [['', 'auAll'], ['staff/ban', 'auBans'], ['staff/unban', 'auUnbans'], ['staff/correct', 'auCorrect'], ['staff/finish', 'auFinish'], ['staff/cancel', 'auCancel'], ['admin/', 'auAdmin'], ['staff/premium', 'auPremium'], ['/key', 'auKeys'], ['/promo', 'auPromo'], ['discord', 'auDiscord'], ['role', 'auRoles']];
async function renderAudit(more) {
  const box = $('#st-audit'); if (!box) return;
  S.audit ||= { q: '', action: '', items: [] };
  const A = S.audit;
  const qs = new URLSearchParams({ limit: 150, ...(A.q ? { q: A.q } : {}), ...(A.action ? { action: A.action } : {}), ...(more && A.items.length ? { before: A.items.at(-1).at } : {}) });
  const list = await api('/api/admin/audit?' + qs).catch(e => (toast(e.message, true), null));
  if (!list || !$('#st-audit')) return;
  A.items = more ? A.items.concat(list) : list; A.end = list.length < 150;
  const srcTag = s => `<span class="tag au-${s}">${{ app: t('auSrcApp'), web: t('auSrcWeb'), discord: 'Discord' }[s] || s}</span>`;
  const det = d => d ? Object.entries(d).filter(([k]) => !['id', 'uid'].includes(k)).map(([k, v]) => `<span><i>${esc(k)}</i> ${esc(typeof v === 'object' ? JSON.stringify(v) : String(v))}</span>`).join('') : '';
  const tgt = e => !e.target ? '' : e.targetNick ? `<a href="#" data-prof="${esc(e.target)}">${esc(e.targetNick)}</a>` : /^\d{1,7}$/.test(e.target) ? `<a href="#" data-amatch="${esc(e.target)}">#${esc(e.target)}</a>` : `<code>${esc(e.target)}</code>`;
  let lastDay = '';
  box.innerHTML = `<div class="card" style="margin-bottom:14px"><div class="row" style="flex-wrap:wrap">
      <input id="au-q" class="grow" placeholder="${t('auSearchPh')}" value="${esc(A.q)}" autocomplete="off" style="min-width:220px">
      <select id="au-act">${AUDIT_GROUPS.map(([v, k]) => `<option value="${v}" ${A.action === v ? 'selected' : ''}>${t(k)}</option>`).join('')}</select>
      <button class="btn" id="au-go">${t('search')}</button></div><p class="mute" style="margin:8px 0 0;font-size:12px">${t('auHint')}</p></div>
    <div class="aulist">${A.items.map(e => { const d = new Date(e.at).toLocaleDateString(); const sep = d !== lastDay ? `<div class="auday">${d}</div>` : ''; lastDay = d;
      return `${sep}<div class="au"><span class="mute num">${new Date(e.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>${srcTag(e.src)}
        <b>${e.by ? esc(e.byNick || e.by) : `<span class="mute">${t('auSystem')}</span>`}</b><span class="auact">${esc(e.action)}</span>${tgt(e)}<span class="audet">${det(e.details)}</span></div>`; }).join('') || `<div class="card empty-note">${t('auEmpty')}</div>`}</div>
    ${A.end ? '' : `<div class="row" style="justify-content:center;margin-top:12px"><button class="btn ghost" id="au-more">${t('auMore')}</button></div>`}`;
  const go_ = () => { A.q = $('#au-q').value.trim(); A.action = $('#au-act').value; renderAudit(); };
  $('#au-go').onclick = go_; $('#au-q').onkeydown = e => { if (e.key === 'Enter') go_(); }; $('#au-act').onchange = go_;
  if ($('#au-more')) $('#au-more').onclick = () => renderAudit(true);
  box.querySelectorAll('[data-prof]').forEach(a => a.onclick = e => { e.preventDefault(); go('profile', a.dataset.prof); });
  box.querySelectorAll('[data-amatch]').forEach(a => a.onclick = run(async e => { e.preventDefault(); S.staffMatch = await api('/api/staff/match?id=' + a.dataset.amatch); S.staffTab = 'matches'; renderStaff(); }));
}

const BAN_PRESETS = [['1h', 1 / 24], ['1d', 1], ['3d', 3], ['7d', 7], ['30d', 30], ['perm', 0]];
const MOD_RULES = ['cheat', 'bug', 'spawn', 'killchain', 'weapon', 'skill', 'toxic', 'leave', 'boost', 'fakeshot', 'afk', 'other'];
const ruleSel = (id, def = 'other') => `<select id="${id}" class="msel">${MOD_RULES.map(r => `<option value="${r}" ${r === def ? 'selected' : ''}>${t('rule_' + r)}</option>`).join('')}</select>`;
const until = x => x.until ? t('until', { d: fmtDT(x.until) }) : t('forever');
async function openDossier(uid) {
  const p = await api('/api/staff/player?id=' + encodeURIComponent(uid));
  const r = m => p['r' + m] || { elo: 0, w: 0, l: 0, k: 0, d: 0 };
  const kd = m => r(m).d ? (r(m).k / r(m).d).toFixed(2) : r(m).k;
  const st = p.status?.match ? t('dsInMatch', { n: p.status.match }) : p.status?.queue ? t('dsInQueue', { m: p.status.queue }) : p.online ? t('dsOnline') : p.lastSeen ? t('dsSeen', { d: fmtDT(p.lastSeen) }) : t('dsNever');
  const why = w => w.map(x => `<span class="tag ${x === 'pc' ? 'red' : ''}">${t('alt_' + x)}</span>`).join('');
  const log = (list, f) => list.length ? list.map(f).join('') : `<div class="mute">—</div>`;
  modal(`<div class="card accent col modal dossier">
    <div class="ds-h">${avaF(p, 'lg')}<div class="grow"><h2 style="margin:0">${esc(p.nick || p.name)}</h2>
      <div class="mute">${esc(p.name || '')} · ID ${esc(p.id)} · game ID ${esc(p.gameId || '—')}</div>
      ${p.client ? `<div class="mute" title="${esc(Object.keys(p.osSeen || {}).join(', '))}">${esc(p.client.label)}${p.client.arch ? ' · ' + esc(p.client.arch) : ''}${p.client.ver ? ' · Konzte ' + esc(p.client.ver) : ''}${Object.keys(p.osSeen || {}).length > 1 ? ' · +' + (Object.keys(p.osSeen).length - 1) : ''}</div>` : ''}
      <div class="ds-tags"><span class="tag ${p.online ? 'green' : ''}">${st}</span>${p.ban ? `<span class="tag red">${t('bannedTag')} · ${until(p.ban)}</span>` : ''}${p.mute ? `<span class="tag gold">${t('dsMuted')} · ${until(p.mute)}</span>` : ''}
        ${p.staff ? `<span class="tag">${t('badge_staff')}</span>` : ''}${p.premium ? crown(p.premium.tier) : ''}${p.ac?.score >= 35 ? `<span class="tag red">AC ${p.ac.score}</span>` : ''}${p.alts.length ? `<span class="tag red">${t('dsAlts', { n: p.alts.length })}</span>` : ''}</div></div>
      <button class="btn ghost sm" data-close>✕</button></div>
    <div class="kpis ds-k">${['2v2', '1v1', '5v5'].map(m => kpi(modeX(m).replace(/ /g, ''), r(m).elo, `${r(m).w}-${r(m).l} · K/D ${kd(m)}`)).join('')}
      ${kpi(t('dsMatches'), p.stats.matches, t('dsCancelled', { n: p.stats.cancelled }))}${kpi(t('dsWarns'), p.warns.length, '', p.warns.length ? 'warn' : '')}${kpi(t('dsReports'), p.reportsAgainst.length, t('dsReportsFrom', { n: p.reportsFrom }), p.reportsAgainst.length ? 'warn' : '')}
      ${kpi(t('dsCreated'), p.created ? new Date(p.created).toLocaleDateString() : '—', p.referredBy ? t('dsRef', { n: esc(p.referredBy) }) : '')}</div>

    <div class="ds-act card">
      <div class="seg ds-tabs">${['warn', 'ban', 'mute', 'note'].map((k, i) => `<button data-dsa="${k}" class="${i ? '' : 'on'}">${t('dsA_' + k)}</button>`).join('')}</div>
      <div data-dsp="warn"><div class="row">${ruleSel('ds-wr')}<input id="ds-wt" class="grow" maxlength="300" placeholder="${t('dsWarnPh')}"><button class="btn gold" id="ds-warn">${t('dsA_warn')}</button></div><p class="mute ds-hint">${t('dsWarnHint')}</p></div>
      <div data-dsp="ban" hidden>${p.ban ? `<div class="row"><span class="lose grow">${esc(p.ban.reason)} · ${until(p.ban)} · ${esc(p.ban.byNick)}</span><input id="ds-ubt" placeholder="${t('dsUnbanPh')}"><button class="btn green" id="ds-unban">${t('unban')}</button></div>` :
        `<div class="row" style="flex-wrap:wrap">${ruleSel('ds-br', 'cheat')}<div class="seg">${BAN_PRESETS.map(([k, d], i) => `<button data-bd="${d}" class="${i === 3 ? 'on' : ''}">${t('dur_' + k)}</button>`).join('')}</div></div>
        <div class="row" style="margin-top:8px"><input id="ds-bt" class="grow" maxlength="200" placeholder="${t('dsBanPh')}"><button class="btn red" id="ds-ban">${t('dsA_ban')}</button></div>`}</div>
      <div data-dsp="mute" hidden>${p.mute ? `<div class="row"><span class="grow">${t('dsMuted')} · ${until(p.mute)} · ${esc(p.mute.byNick)}</span><button class="btn green" id="ds-unmute">${t('dsUnmute')}</button></div>` :
        `<div class="row" style="flex-wrap:wrap">${ruleSel('ds-mr', 'toxic')}<div class="seg">${BAN_PRESETS.map(([k, d], i) => `<button data-md="${d}" class="${i === 1 ? 'on' : ''}">${t('dur_' + k)}</button>`).join('')}</div><input id="ds-mt" class="grow" maxlength="200" placeholder="${t('dsMutePh')}"><button class="btn gold" id="ds-mute">${t('dsA_mute')}</button></div><p class="mute ds-hint">${t('dsMuteHint')}</p>`}</div>
      <div data-dsp="note" hidden><div class="row"><input id="ds-nt" class="grow" maxlength="500" placeholder="${t('dsNotePh')}"><button class="btn" id="ds-note">${t('dsA_note')}</button></div><p class="mute ds-hint">${t('dsNoteHint')}</p></div>
      <div class="row ds-more">${p.status?.queue ? `<button class="btn ghost sm" id="ds-kq">${t('dsKickQueue')}</button>` : ''}${p.status?.match ? `<button class="btn ghost sm" data-dsm="${p.status.match}">${t('dsOpenMatch', { n: p.status.match })}</button>` : ''}<button class="btn ghost sm" id="ds-prof">${t('dsProfile')}</button>${/^\d{15,22}$/.test(p.id) ? `<button class="btn ghost sm ds-dm" id="ds-dm"><svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M19.5 5.5A16 16 0 0 0 15.6 4l-.5 1a15 15 0 0 0-6.2 0l-.5-1a16 16 0 0 0-3.9 1.5C2 9.2 1.4 12.8 1.6 16.4A16 16 0 0 0 6.4 19l1-1.6a10 10 0 0 1-1.6-.8l.4-.3a11.5 11.5 0 0 0 11.6 0l.4.3a10 10 0 0 1-1.6.8l1 1.6a16 16 0 0 0 4.8-2.6c.4-4.2-.6-7.7-2.9-10.9zM8.5 14.2c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm7 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z"/></svg>${esc(kzPick({ en: 'Message on Discord', uk: 'Написати в Discord', ru: 'Написать в Discord' }) || 'Message on Discord')}</button>` : ''}</div>
    </div>

    <div class="grid2 ds-g">
      <div class="card"><h4>${t('dsNotes')}</h4>${log(p.notes, n => `<div class="ds-li"><span class="grow">${esc(n.text)}</span><span class="mute">${esc(n.byNick)} · ${fmtDT(n.at)}</span><button class="btn ghost xs" data-dnote="${n.id}">✕</button></div>`)}</div>
      <div class="card"><h4>${t('dsWarnsH')}</h4>${log(p.warns, w => `<div class="ds-li"><span class="tag">${t('rule_' + w.rule)}</span><span class="grow">${esc(w.text)}</span><span class="mute">${esc(w.byNick)} · ${fmtDT(w.at)}</span></div>`)}</div>
      <div class="card"><h4>${t('dsBanLog')}</h4>${log(p.banLog, b => `<div class="ds-li"><span class="tag ${b.act === 'ban' ? 'red' : b.act === 'mute' ? 'gold' : 'green'}">${t('dsAct_' + b.act)}</span><span class="grow">${b.rule ? t('rule_' + b.rule) + ' · ' : ''}${esc(b.reason || '')}${b.act === 'ban' || b.act === 'mute' ? ` · ${b.days ? t('dsDays', { n: +(+b.days).toFixed(2) }) : t('forever')}` : ''}</span><span class="mute">${esc(b.byNick)} · ${fmtDT(b.at)}</span></div>`)}</div>
      <div class="card"><h4>${t('dsAltsH')}</h4><p class="mute ds-hint" style="margin:-4px 0 8px">${t('dsAltsHint')}</p>${log(p.alts, a => `<div class="ds-li"><a href="#" data-dsu="${esc(a.id)}">${esc(a.nick)}</a>${why(a.why)}${a.ban ? `<span class="tag red">${t('bannedTag')}</span>` : ''}<span class="grow"></span><span class="mute">${a.lastSeen ? fmtDT(a.lastSeen) : ''}</span></div>`)}</div>
      <div class="card"><h4>${t('dsReportsH')}</h4>${log(p.reportsAgainst, x => `<div class="ds-li"><span class="tag ${x.open ? 'gold' : ''}">${t('rr_' + (x.reason || 'other'))}</span><span class="grow">${esc(x.fromNick)}${x.text ? ': ' + esc(x.text) : ''}</span><span class="mute">${x.verdict ? t('stV_' + x.verdict) + ' · ' : ''}${fmtDT(x.at)}</span></div>`)}</div>
      <div class="card"><h4>${t('dsNicks')}</h4>${log(p.nickHistory, n => `<div class="ds-li"><span class="grow">${esc(n.from || '—')} → <b>${esc(n.to)}</b></span><span class="mute">${esc(n.why || '')} · ${fmtDT(n.at)}</span></div>`)}</div>
    </div>
    <div class="card"><h4>${t('dsMatchesH')}</h4><table class="sttab"><tr><th>#</th><th>${t('modeL')}</th><th>${t('stMaps')}</th><th></th><th>K/D</th><th>ELO</th><th></th><th></th></tr>
      ${p.matches.map(m => `<tr><td><a href="#" data-dsm="${m.id}">#${m.id}</a></td><td>${m.mode}</td><td>${m.map ? mapName(m.map) : ''}</td><td>${m.state !== 'done' ? `<span class="tag">${m.state}</span>` : m.won ? `<span class="win">W</span>` : `<span class="lose">L</span>`}</td>
        <td>${m.k != null ? `${m.k}/${m.d}` : ''}</td><td class="${m.delta > 0 ? 'win' : 'lose'}">${m.delta != null ? sign(m.delta) : ''}</td><td>${m.corrected ? `<span class="tag gold">${t('dsFixed')}</span>` : ''}</td><td>${m.shot ? `<a href="#" data-dshot="${m.shot}">📷</a>` : ''}</td></tr>`).join('') || `<tr><td colspan="8" class="mute">—</td></tr>`}</table></div>
    <div class="card"><h4>${t('dsCoins', { n: p.coins })}</h4>${log(p.coinLog, c => `<div class="ds-li"><span class="${c.n >= 0 ? 'win' : 'lose'}" style="width:70px">${c.n >= 0 ? '+' : ''}${c.n}</span><span class="grow">${esc(c.why || '')}</span><span class="mute">${fmtDT(c.at)}</span></div>`)}</div>
  </div>`, box => {
    const re = () => openDossier(uid).catch(e => toast(e.message, true));
    box.querySelectorAll('[data-dsa]').forEach(b => b.onclick = () => { box.querySelectorAll('[data-dsa]').forEach(x => x.classList.toggle('on', x === b)); box.querySelectorAll('[data-dsp]').forEach(x => x.hidden = x.dataset.dsp !== b.dataset.dsa); });
    const segPick = attr => box.querySelectorAll(`[${attr}]`).forEach(b => b.onclick = () => box.querySelectorAll(`[${attr}]`).forEach(x => x.classList.toggle('on', x === b)));
    segPick('data-bd'); segPick('data-md');
    const on = (id, fn) => { const el = box.querySelector('#' + id); if (el) el.onclick = run(async () => { await fn(); toast(t('dsDone')); re(); }); };
    on('ds-warn', () => api('/api/staff/warn', { uid, rule: $('#ds-wr').value, text: $('#ds-wt').value }));
    on('ds-ban', () => { const d = +box.querySelector('[data-bd].on').dataset.bd; if (!confirm(t('dsBanQ', { n: p.nick, d: d ? t('dsDays', { n: +d.toFixed(2) }) : t('forever') }))) throw new Error(t('dsAborted')); return api('/api/staff/ban', { uid, days: d, rule: $('#ds-br').value, text: $('#ds-bt').value }); });
    on('ds-unban', () => api('/api/staff/unban', { uid, text: $('#ds-ubt').value }));
    on('ds-mute', () => api('/api/staff/mute', { uid, days: +box.querySelector('[data-md].on').dataset.md, rule: $('#ds-mr').value, text: $('#ds-mt').value }));
    on('ds-unmute', () => api('/api/staff/mute', { uid, days: -1 }));
    on('ds-note', () => api('/api/staff/note', { uid, text: $('#ds-nt').value }));
    on('ds-kq', () => api('/api/staff/kick-queue', { uid }));
    box.querySelectorAll('[data-dnote]').forEach(b => b.onclick = run(async () => { await api('/api/staff/note', { uid, del: b.dataset.dnote }); re(); }));
    box.querySelector('#ds-prof').onclick = () => { closeModal(); go('profile', uid); };
    box.querySelector('#ds-dm')?.addEventListener('click', () => K.open('https://discord.com/users/' + p.id));
    box.querySelectorAll('[data-dsu]').forEach(a => a.onclick = e => { e.preventDefault(); openDossier(a.dataset.dsu).catch(er => toast(er.message, true)); });
    box.querySelectorAll('[data-dshot]').forEach(a => a.onclick = e => { e.preventDefault(); openShot(S.server + a.dataset.dshot); });
    box.querySelectorAll('[data-dsm]').forEach(a => a.onclick = run(async e => { e.preventDefault(); S.staffMatch = await api('/api/staff/match?id=' + a.dataset.dsm); S.staffTab = 'matches'; closeModal(); if (S.page === 'staff') renderStaff(); else go('staff'); }));
  });
}

async function renderLive() {
  const box = $('#st-live'); if (!box) return;
  const L = await api('/api/staff/live').catch(e => (toast(e.message, true), null));
  if (!L || !$('#st-live')) return;
  const who = p => `<a href="#" data-dsu="${esc(p.id)}">${esc(p.nick)}</a>`;
  const age = ts => ts ? Math.max(0, Math.round((Date.now() - ts) / 60000)) + ' ' + t('stMin') : '';
  box.innerHTML = `<div class="row" style="margin-bottom:12px"><span class="mute">${t('lvHint')}</span><span class="grow"></span><button class="btn ghost sm" id="lv-re">${t('stRefresh')}</button></div>
    <div class="grid2"><div class="card"><h4>${t('lvQueues')}</h4>${Object.entries(L.queues).map(([m, units]) => `<div class="lvq"><b>${m.replace('v', ' × ')}</b> <span class="mute">${units.flat().length}</span>
        <div>${units.map(u => `<span class="lvu">${u.map(who).join(' + ')} <button class="btn ghost xs" data-kq="${esc(u[0].id)}" title="${t('dsKickQueue')}">✕</button></span>`).join('') || `<span class="mute">—</span>`}</div></div>`).join('')}
      ${L.ready.length ? `<h4 style="margin-top:12px">${t('lvReady')}</h4>${L.ready.map(r => `<div class="ds-li"><span class="tag">${r.mode}</span><span class="grow">${r.players.map(who).join(', ')}</span><span class="mute">${r.accepted}/${r.players.length}</span></div>`).join('')}` : ''}</div>
      <div class="card"><h4>${t('lvMatches', { n: L.matches.length })}</h4>${L.matches.map(m => `<div class="ds-li"><a href="#" data-dsm="${m.id}">#${m.id}</a><span class="tag">${m.mode}</span><span class="tag ${m.state === 'disputed' ? 'red' : ''}">${m.state}</span>${m.test ? `<span class="tag">test</span>` : ''}<span class="grow mute">${m.map ? mapName(m.map) : ''}</span><span class="mute">${age(m.liveAt || m.created)}</span></div>
        <div class="lvteams"><span class="alfa">${m.A.map(who).join(', ')}</span> <span class="mute">vs</span> <span class="bravo">${m.B.map(who).join(', ')}</span></div>`).join('') || `<div class="mute">—</div>`}</div></div>
    <div class="card"><h4>${t('lvOnline', { n: L.online.length })}</h4><div class="lvon">${L.online.map(p => `<div class="ds-li">${who(p)}${p.staff ? `<span class="tag">${t('badge_staff')}</span>` : ''}${p.bot ? '<span class="tag">BOT</span>' : ''}${p.banned ? `<span class="tag red">${t('bannedTag')}</span>` : ''}${p.muted ? `<span class="tag gold">${t('dsMuted')}</span>` : ''}
      <span class="grow"></span>${p.match ? `<a href="#" data-dsm="${p.match.id}" class="tag">#${p.match.id} · ${p.match.state}</a>` : p.queue ? `<span class="tag green">${t('dsInQueue', { m: p.queue })}</span>` : p.ready ? `<span class="tag green">ready</span>` : ''}${p.party > 1 ? `<span class="tag">${t('partyN', { n: p.party })}</span>` : ''}</div>`).join('') || `<div class="mute">—</div>`}</div></div>`;
  $('#lv-re').onclick = () => renderLive();
  box.querySelectorAll('[data-dsu]').forEach(a => a.onclick = e => { e.preventDefault(); openDossier(a.dataset.dsu).catch(er => toast(er.message, true)); });
  box.querySelectorAll('[data-kq]').forEach(b => b.onclick = run(async () => { await api('/api/staff/kick-queue', { uid: b.dataset.kq }); renderLive(); }));
  box.querySelectorAll('[data-dsm]').forEach(a => a.onclick = run(async e => { e.preventDefault(); S.staffMatch = await api('/api/staff/match?id=' + a.dataset.dsm); S.staffTab = 'matches'; renderStaff(); }));
}

async function showNotices(list) {
  for (const n of list || []) {
    await new Promise(res => modal(`<div class="card accent col modal notice ${n.kind}"><h2>${t('nt_' + n.kind)}</h2>
      ${n.rule ? `<p><b>${t('ntRule')}:</b> ${t('rule_' + n.rule)}</p>` : ''}${n.text ? `<p>${esc(n.text)}</p>` : ''}
      ${n.until != null && n.kind !== 'warn' ? `<p class="mute">${n.until ? t('until', { d: fmtDT(n.until) }) : t('forever')}</p>` : ''}
      <p class="mute" style="font-size:12.5px">${t('ntFoot')}</p><div class="row" style="justify-content:flex-end"><button class="btn" id="nt-ok">${t('ntOk')}</button></div></div>`, box => {
      box.querySelector('#nt-ok').onclick = async () => { await api('/api/me/notice-ack', { id: n.id }).catch(() => {}); closeModal(); res(); };
    }));
  }
}
async function checkNotices() { try { const me = await api('/api/me'); S.me = { ...S.me, ...me }; if (me.notices?.length) showNotices(me.notices); } catch {} }
function showBroadcast(m) {
  sfx('ok');
  modal(`<div class="card accent col modal notice bc"><h2>${t('bcTitle')}</h2><p style="white-space:pre-wrap">${esc(m.text)}</p><p class="mute" style="font-size:12.5px">— ${esc(m.from)} · ${fmtDT(m.at)}</p><div class="row" style="justify-content:flex-end"><button class="btn" data-close>${t('ntOk')}</button></div></div>`);
}

const SV_ORDER = ['source', 'played', 'nps', 'rates', 'modes', 'ruleset', 'blockers', 'when', 'region', 'features', 'premium', 'price', 'bugs', 'add', 'change', 'contact'];
const SV_OPT = { cm_discord: 'CM Discord', friend: 'Friend', konzte_discord: 'Konzte Discord', youtube: 'YouTube', tiktok: 'TikTok', search: 'Search', other: 'Other',
  regular: 'Regularly', few: 'A few matches', registered: 'Registered only', not_yet: 'Not yet', queue: 'Queue speed', balance: 'Team balance', result: 'Sending results', app: 'App stability', design: 'Design', staff: 'Staff & support', rewards: 'Rewards',
  '5v5': '5×5', '2v2': '2×2', '1v1': '1×1', '3v3': '3×3', tournaments: 'Tournaments', casual: 'Casual', comp: 'Competitive', both: 'Both (separate queues)',
  queue_long: 'Long queue', few_players: 'Few players', bugs: 'Bugs', result_hard: 'Results hassle', time: 'No time', no_friends: 'No friends', rules: 'Rules', install: 'Install / login', nothing: 'Nothing',
  morning: 'Morning', day: 'Afternoon', evening: 'Evening', night: 'Night', weekdays: 'Weekdays', weekends: 'Weekends', eu: 'Europe', ua: 'Ukraine', na: 'N. America', asia: 'Asia',
  clans: 'Clans', battlepass: 'Battle pass', web_mobile: 'Web / mobile', replays: 'Clips', stats: 'Deeper stats', cosmetics: 'Cosmetics', achievements: 'Achievements', friends_chat: 'Chat & friends', ac_client: 'Client anticheat', coaching: 'Coaching', streams: 'Streams',
  have: 'Has it', yes: 'Yes', maybe: 'Maybe', no_price: 'Not at this price', no: 'No', '1': '$1–2', '3': '$3–4', '5': '$5–6', '10': '$10+' };
async function renderSurvey() {
  const box = $('#st-survey'); if (!box) return;
  const s = await api('/api/admin/survey').catch(e => (toast(e.message, true), null));
  if (!s || !$('#st-survey')) return;
  const Q = s.questions, nps = Q.nps;
  const block = k => {
    const q = Q[k]; if (!q) return '';
    const head = `<h4>${t('sv_' + k)} <span class="mute" style="font-weight:normal">· ${q.n}</span></h4>`;
    if (k === 'nps') return `<div class="card">${head}<div class="kpis k3">${kpi('NPS', q.nps ?? '—', t('svNpsHint'), q.nps < 0 ? 'bad' : '')}${kpi(t('svAvg'), q.avg ?? '—')}${kpi(t('svAnswers'), q.n)}</div>
      ${hBars(q.dist.map((v, i) => ({ label: String(i), v, color: i >= 9 ? '#23a090' : i <= 6 ? '#7d84ec' : '#8e8c9a' })).reverse())}</div>`;
    if (k === 'rates') return `<div class="card">${head}${hBars(Object.entries(q.rates).sort((a, b) => b[1].avg - a[1].avg).map(([a, r]) => ({ label: SV_OPT[a] || a, v: r.avg, tip: `${SV_OPT[a] || a}: ${r.avg} / 5 · ${r.n}` })), { fmt: v => (+v).toFixed(2) })}</div>`;
    if (q.texts.length) return `<div class="card">${head}<div class="svtexts">${q.texts.map(x => `<div class="svt"><span class="mute">${fmtDT(x.at)} · ${x.lang.toUpperCase()}</span><p>${esc(x.t)}</p></div>`).join('')}</div></div>`;
    const rows = Object.entries(q.counts).sort((a, b) => b[1] - a[1]).map(([o, v]) => ({ label: SV_OPT[o] || o, v }));
    return rows.length ? `<div class="card">${head}${hBars(rows, { extra: r => `<span class="mute pc">${Math.round(r.v / q.n * 100)}%</span>` })}</div>` : '';
  };
  const days = Object.keys(s.days).sort();
  box.innerHTML = `<div class="row" style="margin-bottom:12px;flex-wrap:wrap"><span class="mute">${t('svHint')}</span><span class="grow"></span>
      <button class="btn ghost sm" id="sv-copy">${t('svCopy')}</button><button class="btn ghost sm" id="sv-csv">CSV</button><button class="btn ghost sm" id="sv-re">${t('stRefresh')}</button></div>
    <div class="kpis">${kpi(t('svTotal'), s.total, s.last ? t('svLast', { d: fmtDT(s.last) }) : '')}${kpi('NPS', nps?.nps ?? '—', t('svNpsHint'))}${Object.entries(s.langs).map(([l, n]) => kpi(l.toUpperCase(), n)).join('')}</div>
    ${days.length > 1 ? `<div class="card"><h4>${t('svPerDay')}</h4>${vBars(days, [{ label: t('svAnswers'), color: VZ.one, data: days.map(d => s.days[d]) }])}</div>` : ''}
    ${s.total ? `<div class="grid2 svgrid">${SV_ORDER.filter(k => !['bugs', 'add', 'change', 'contact'].includes(k)).map(block).join('')}</div>${['bugs', 'add', 'change', 'contact'].map(block).join('')}` : `<div class="card empty-note">${t('svEmpty')}</div>`}`;
  $('#sv-re').onclick = () => renderSurvey();
  $('#sv-copy').onclick = () => { navigator.clipboard.writeText('https://konzte.online/survey'); toast(t('copied')); };
  $('#sv-csv').onclick = run(async () => {
    const r = await fetch(S.server + '/api/admin/survey.csv', { headers: { Authorization: 'Bearer ' + S.token, 'X-Konzte-Hwid': S.hwid, 'X-Konzte-Client': S.appInfo?.version || '' } });
    if (!r.ok) throw new Error('CSV: ' + r.status);
    const a = document.createElement('a'); a.href = URL.createObjectURL(await r.blob()); a.download = `konzte-survey-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
  });
  vizTips(box);
}

function showWhatsNew() {
  const ui = S.appInfo?.ui || 0, seen = S.cfg?.seenUi;
  if (!ui || typeof CHANGELOG === 'undefined') return;
  if (seen == null) { setCfg({ seenUi: ui }); return; }
  const list = CHANGELOG.filter(e => e.ui > seen && e.ui <= ui).slice(0, 3);
  if (!list.length) { if (ui > seen) setCfg({ seenUi: ui }); return; }
  const el = document.createElement('div');
  el.className = 'whatsnew';
  el.innerHTML = `<div class="wn-h"><b>${t('wnTitle')}</b><span class="mute">UI ${ui}</span><button class="uinote-x" data-wn="x" title="${t('close')}"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
    <ul>${list.flatMap(e => kzPick(e.items)).slice(0, 8).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
    <div class="row" style="justify-content:flex-end"><button class="btn sm" data-wn="ok">${t('ntOk')}</button></div>`;
  const done = () => { el.classList.add('out'); setTimeout(() => el.remove(), 250); setCfg({ seenUi: ui }); };
  el.querySelectorAll('[data-wn]').forEach(b => b.onclick = done);
  document.body.append(el);
  sfx('ok', true);
}

function loadShop() {
  Promise.all([api('/api/shop'), api('/api/premium')]).then(([sh, pi]) => { S.shop = sh; S.premInfo = pi; if (S.page === 'shop') refresh(); }).catch(e => toast(e.message, true));
}
function renderShop() {
  const sh = S.shop;
  if (!sh) return render(`<div class="card empty-note">${t('loading')}</div>`);
  const own = (k, id) => (sh.owned?.[k + 's'] || []).includes(id);
  const card = (it, preview) => `<div class="inv shopi ${own(it.kind, it.id) ? 'on' : ''}">${preview}
    <div class="inv-f">${own(it.kind, it.id) ? `<span class="win">✓ ${t('owned')}</span>` : `<span class="kf price">${it.price} KF</span>`}
    ${own(it.kind, it.id) ? `<button class="btn ghost sm" data-go2="inventory">${t('inventory')}</button>` : `<div class="buy2"><button class="btn sm" data-buy-k="${it.kind}" data-buy-id="${it.id}" ${sh.coins < it.price ? 'disabled' : ''} title="${t('buyForKf')}">${t('buy')}</button>${sh.pay?.enabled && it.usd ? `<button class="btn ghost sm usd" data-usd-k="${it.kind}" data-usd-id="${it.id}" title="${t('buyForUsd')}">$${it.usd}</button>` : ''}</div>`}</div></div>`;
  const by = k => sh.items.filter(x => x.kind === k);
  render(`<div class="lbhead"><div><h1>${t('shop')}</h1><div class="mute">${t('shopSub')}</div></div><span class="grow"></span>
      <div class="coinbox"><span class="kf big">${sh.coins} KF</span><button class="btn ghost sm" data-go2="referrals">${t('earnCoins')}</button></div></div>
    <div class="grid2 kfbuy">
      <div class="card accent"><div class="card-h"><h4>${t('buyKf')}</h4><span class="grow"></span>${sh.pay?.sandbox ? `<span class="lose" style="font-size:12px">${t('sandboxNote')}</span>` : ''}</div>
        <div class="packs">${(sh.packs || []).map(pk => `<div class="pack ${pk.best ? 'best' : ''}">${pk.best ? `<span class="tag gold">${t('bestValue')}</span>` : ''}
          <span class="kf big">${pk.coins} KF</span><span class="mute">${pk.bonus ? t('packBonus', { n: pk.bonus }) : '&nbsp;'}</span>
          <button class="btn sm ${pk.best ? 'gold' : ''}" data-pack="${pk.id}" ${sh.pay?.enabled ? '' : 'disabled'}>${sh.pay?.enabled ? `${pk.price} ${sh.pay.currency}` : t('notConfigured')}</button></div>`).join('')}</div></div>
      <div class="card col"><h4>${t('promoCode')}</h4><p class="mute" style="margin:0;font-size:12.5px">${t('promoHint')}</p>
        <form class="row" id="promo-form"><input id="promo-in" class="grow" maxlength="32" placeholder="${t('promoPh')}" autocomplete="off" spellcheck="false" style="text-transform:uppercase"><button class="btn">${t('activate')}</button></form></div>
    </div>
    ${sh.nick ? `<div class="card nickshop" style="margin-top:16px"><div class="row" style="flex-wrap:wrap;align-items:flex-start">
      <div class="grow" style="min-width:240px"><h4 style="margin:0 0 4px">${t('nickChange')}</h4><span class="mute" style="font-size:12.5px">${t('nickChangeHint', { n: esc(sh.nick.current || '') })}</span>
        ${sh.nick.tokens ? `<div class="win" style="margin-top:6px;font-size:13px">${t('nickTokens', { n: sh.nick.tokens })}</div>` : ''}</div>
      <form class="row" id="nick-form" style="flex-wrap:wrap"><input id="nick-in" maxlength="25" placeholder="${t('newNickPh')}" autocomplete="off" spellcheck="false" style="width:220px">
        <button class="btn ${sh.nick.free ? 'gold' : ''}" data-nvia="kf" ${sh.nick.free || sh.nick.tokens || sh.coins >= sh.nick.kf ? '' : 'disabled'}>${sh.nick.free ? t('nickFreeBtn', { n: sh.nick.free, m: sh.nick.freeMax }) : sh.nick.tokens ? t('nickUseToken') : `${sh.nick.kf} KF`}</button>
        ${sh.pay?.enabled && !sh.nick.tokens && !sh.nick.free ? `<button class="btn ghost" data-nvia="usd">$${sh.nick.usd}</button>` : ''}</form></div></div>` : ''}
    <div class="card" style="margin-top:16px"><h4>${t('banners')}</h4><div class="invgrid wide">${by('banner').map(it => card(it, `<div class="bprev">${bannerHtml(it.id, 'bimg')}<span>${nickHtml(S.me)}</span></div>`)).join('')}</div></div>
    <div class="card" style="margin-top:16px"><h4>${t('frames')}</h4><div class="invgrid">${by('frame').map(it => card(it, `<div class="fprev">${avaF(S.me, 'lg', it.id)}</div>`)).join('')}</div></div>
    <div class="card" style="margin-top:16px"><div class="card-h"><h4>${t('emblems')}</h4><span class="mute">${by('emblem').length}</span></div>
      ${[900, 600, 300].map(pr => `<div class="emtier"><span class="kf">${pr} KF</span><span class="mute">${t(pr === 900 ? 'emRare' : pr === 600 ? 'emAnim' : 'emStatic')}</span></div>
        <div class="invgrid em">${by('emblem').filter(it => it.price === pr).map(it => card(it, `<div class="fprev">${emblemHtml(it.id, 'big')}</div>`)).join('')}</div>`).join('')}</div>`);
  document.querySelectorAll('[data-go2]').forEach(b => b.onclick = () => go(b.dataset.go2));
  document.querySelectorAll('[data-buy-k]').forEach(b => b.onclick = run(async () => {
    const r = await api('/api/shop/buy', { kind: b.dataset.buyK, id: b.dataset.buyId });
    S.shop = { ...S.shop, coins: r.coins, owned: r.owned }; S.me = r.me; renderMe(); sfx('coin'); toast(t('bought')); refresh();
  }));
  document.querySelectorAll('[data-usd-k]').forEach(b => b.onclick = run(async () => {
    const r = await api('/api/shop/buy-usd', { kind: b.dataset.usdK, id: b.dataset.usdId });
    K.open(r.url); toast(t('payOpened'));
  }));
  if ($('#nick-form')) {
    let via = 'kf';
    $('#nick-form').querySelectorAll('[data-nvia]').forEach(b => b.onclick = () => { via = b.dataset.nvia; });
    $('#nick-form').onsubmit = e => { e.preventDefault(); run(async () => {
      const nick = $('#nick-in').value.trim(); if (!nick) return $('#nick-in').focus();
      if (via === 'usd') { const r = await api('/api/shop/nick', { nick, via: 'usd' }); K.open(r.url); return toast(t('payOpened')); }
      if (!confirm(t('nickConfirm', { n: nick, p: S.shop.nick.free ? t('nickFreeP') : S.shop.nick.tokens ? t('nickUseToken') : S.shop.nick.kf + ' KF' }))) return;
      const r = await api('/api/shop/nick', { nick, via: 'kf' });
      S.me = r.me; S.myProfile = { ...S.myProfile, ...r.me }; renderMe(); sfx('coin'); toast(t('nickChanged', { n: r.me.nick })); loadShop();
    })(); };
  }
  document.querySelectorAll('[data-pack]').forEach(b => b.onclick = run(async () => {
    const r = await api('/api/shop/coins', { pack: b.dataset.pack });
    K.open(r.url);
    toast(t('payOpened'));
  }));
  $('#promo-form').onsubmit = e => { e.preventDefault(); run(async () => {
    const code = $('#promo-in').value.trim();
    if (!code) return;
    const r = await api('/api/promo', { code });
    S.shop = { ...S.shop, coins: r.coins, owned: r.owned }; S.me = r.me; S.myProfile = { ...S.myProfile, ...r.me }; renderMe(); sfx('coin');
    $('#promo-in').value = '';
    refresh();
    promoGotModal(code.toUpperCase(), r.got);
  })(); };
}

function promoGotModal(code, g) {
  const rows = [];
  if (g.coins) rows.push(`<div class="pgot"><span class="kf big">+${g.coins} KF</span><span class="mute">${t('promoGotCoins')}</span></div>`);
  if (g.tier) rows.push(`<div class="pgot"><b class="gold">${g.tier === 'plus' ? 'Premium+' : 'Premium'}</b><span class="mute">${t('nDays', { n: g.days })}</span></div>`);
  if (g.item) {
    const k = g.item.kind, id = g.item.id;
    const prev = k === 'banner' ? `<div class="bprev">${bannerHtml(id, 'bimg')}<span>${nickHtml(S.me)}</span></div>`
      : k === 'frame' ? `<div class="fprev">${avaF(S.me, 'lg', id)}</div>` : `<div class="fprev">${emblemHtml(id, 'big')}</div>`;
    rows.push(`<div class="pgot col">${prev}<span class="mute">${t(k === 'banner' ? 'promoGotBanner' : k === 'frame' ? 'promoGotFrame' : 'promoGotEmblem')}</span></div>`);
  }
  modal(`<div class="card accent col" style="width:440px;text-align:center"><h2>${t('promoGotTitle')}</h2>
    <div class="mute">${esc(code)}</div>
    <div class="col" style="gap:12px;margin:8px 0">${rows.join('') || `<div class="mute">${t('promoGotNothing')}</div>`}</div>
    <div class="row" style="justify-content:center">${g.item ? `<button class="btn ghost" id="pg-inv">${t('inventory')}</button>` : ''}<button class="btn" data-close>OK</button></div></div>`, box => {
    const b = box.querySelector('#pg-inv'); if (b) b.onclick = () => { closeModal(); go('inventory'); };
  });
}

function loadRef() {
  api('/api/ref').then(r => { S.ref = r; if (S.page === 'referrals') refresh(); }).catch(e => toast(e.message, true));
}
function renderReferrals() {
  const r = S.ref;
  if (!r) return render(`<div class="card empty-note">${t('loading')}</div>`);
  const R = r.rules;
  render(`<div class="lbhead"><div><h1>${t('referrals')}</h1><div class="mute">${t('refSub', { n: R.reward })}</div></div><span class="grow"></span>
      <div class="coinbox"><span class="kf big">${r.coins} KF</span><button class="btn ghost sm" data-go2="shop">${t('shop')}</button></div></div>
    <div class="grid2">
      <div class="card accent col"><h4>${t('yourLink')}</h4>
        ${r.link ? `<div class="row"><code class="pcode grow" style="letter-spacing:0">${esc(r.link)}</code><button class="btn sm" data-copy="${esc(r.link)}">${t('copyId')}</button></div>
          <p class="mute" style="margin:0;font-size:12.5px">${t('refLinkHint')}</p>` : `<p class="mute" style="margin:0">${t('refNoLink')}</p>`}
        <h4 style="margin-top:6px">${t('yourCode')}</h4>
        <div class="row"><code class="pcode">${esc(r.code)}</code><button class="btn ghost sm" data-copy="${esc(r.code)}">${t('copyId')}</button></div>
        <p class="mute" style="margin:0;font-size:12.5px">${t('refCodeHint')}</p></div>
      <div class="card col"><h4>${t('howEarn')}</h4>
        <div class="step"><i>1</i><span>${t('earn1', { n: R.reward, m: R.matches, w: R.welcome })}</span></div>
        <div class="step"><i>2</i><span>${t('earn2', { w: R.win, l: R.loss, c: R.cap })}</span></div>
        <div class="step"><i>3</i><span>${t('earn3')}</span></div>
        ${r.canUse ? `<div class="row" style="margin-top:6px"><input id="ref-in" maxlength="6" placeholder="${t('yourCode').replace(/^\S+ /, '')}" style="text-transform:uppercase"><button class="btn sm" id="ref-use">${t('apply')}</button></div>` : r.referredBy ? `<p class="mute" style="margin:0">${t('invitedBy', { n: esc(r.referredBy) })}</p>` : ''}</div>
    </div>
    <div class="pstats" style="grid-template-columns:repeat(3,1fr);margin-top:16px">
      <div class="pstat"><b>${r.invited.length}</b><span>${t('refInvited')}</span></div>
      <div class="pstat"><b class="win">${r.active}</b><span>${t('refActive', { m: R.matches })}</span></div>
      <div class="pstat"><b class="kf">${r.earned} KF</b><span>${t('refEarned')}</span></div></div>
    <div class="grid2" style="margin-top:16px">
      <div class="card"><h4>${t('refList')}</h4>${r.invited.length ? r.invited.map(x => `<div class="pmem psr" data-prof="${x.id}">${avaF(x, 'sm')}<span class="num grow">${nickHtml(x)} <span class="mute">· ${x.via === 'discord' ? 'Discord' : t('yourCode').toLowerCase()} · ${fmtDate(x.at)}</span></span>
        ${x.rewarded ? `<span class="tag">+${R.reward} KF</span>` : `<span class="mute">${x.matches}/${R.matches}</span><div class="bar" style="width:70px;height:4px"><i style="width:${x.matches / R.matches * 100}%"></i></div>`}</div>`).join('') : `<div class="empty-note">${t('refNone')}</div>`}</div>
      <div class="card"><h4>${t('coinHistory')}</h4>${r.log.length ? r.log.map(l => `<div class="row cl"><span class="grow">${esc(l.why)}</span><span class="mute">${fmtDT(l.at)}</span><b class="${l.n > 0 ? 'win' : 'lose'} num">${l.n > 0 ? '+' : ''}${l.n}</b></div>`).join('') : `<div class="empty-note">—</div>`}</div>
    </div>`);
  document.querySelectorAll('[data-go2]').forEach(b => b.onclick = () => go(b.dataset.go2));
  document.querySelectorAll('[data-copy]').forEach(b => b.onclick = () => { navigator.clipboard.writeText(b.dataset.copy); toast(t('copied', { t: b.dataset.copy })); });
  document.querySelectorAll('[data-prof]').forEach(a => a.onclick = () => go('profile', a.dataset.prof));
  if ($('#ref-use')) $('#ref-use').onclick = run(async () => { await api('/api/ref/use', { code: $('#ref-in').value }); toast(t('refApplied')); loadRef(); });
}

function loadSupport() {
  api('/api/support').then(d => { S.sup = d; if (S.page === 'support') refresh(); updSupDot(); }).catch(e => toast(e.message, true));
}
function updSupDot() {
  const n = (S.sup?.mine || []).reduce((a, t) => a + (t.unread || 0), 0);
  $('#sup-dot').hidden = !n;
}
async function openTicket(id) {
  S.supOpen = await api('/api/support/ticket?id=' + id);
  loadSupport();
  refresh();
}
function renderSupport() {
  const d = S.sup;
  if (!d) return render(`<div class="card empty-note">${t('loading')}</div>`);
  const cur = S.supOpen;
  const item = x => `<div class="tk ${cur?.id === x.id ? 'on' : ''}" data-tk="${x.id}"><div class="row" style="gap:8px"><b class="num grow">${esc(x.subject)}</b>${x.unread ? `<span class="tag gold">${x.unread}</span>` : ''}<span class="tag ${x.open ? '' : 'red'}">${x.open ? t('tkOpen') : t('tkClosed')}</span></div>
    <div class="mute" style="font-size:12px">${d.queue ? esc(x.nick) + ' · ' : ''}${x.last ? esc(x.last.text).slice(0, 60) : ''}</div></div>`;
  const chat = cur ? `<div class="card supchat"><div class="card-h"><h3 style="margin:0">${esc(cur.subject)}</h3><span class="mute">#${cur.id}${cur.uid !== S.me.id ? ' · ' + esc(cur.nick) : ''}</span><span class="grow"></span>
      ${cur.open ? `<button class="btn ghost sm" id="tk-close">${t('tkCloseBtn')}</button>` : `<span class="tag red">${t('tkClosed')}</span>`}</div>
    <div class="log" data-scroll="sup">${cur.messages.map(m => `<div class="msg ${m.src === 'system' ? 'sys' : m.uid === S.me.id ? 'mine' : m.staff ? 'staff' : ''}">
      <div class="mh"><b>${esc(m.name)}</b>${m.staff && m.src !== 'system' ? ` <span class="tag">${t('staffTag')}</span>` : ''}<span class="mute">${m.src === 'discord' ? ' · Discord' : ''} · ${fmtDT(m.at)}</span></div>
      <div class="mt">${esc(m.text).replace(/(https?:\/\/\S+)/g, '<a href="$1" target="_blank">$1</a>')}</div></div>`).join('')}</div>
    ${cur.open ? `<form id="tk-form" class="row"><input id="tk-in" class="grow" maxlength="1500" placeholder="${t('msgPh')}" autocomplete="off"><button class="btn">${t('send')}</button></form>` : ''}</div>`
    : `<div class="card col"><h3>${t('newTicket')}</h3><p class="mute" style="margin:0">${t('supHint')}</p>
      <input id="nt-subj" maxlength="80" placeholder="${t('tkSubject')}"><textarea id="nt-text" rows="5" maxlength="1500" placeholder="${t('whatHappened')}"></textarea>
      <div class="row"><button class="btn" id="nt-send">${t('send')}</button></div></div>`;
  render(`<div class="lbhead"><div><h1>${t('support')}</h1><div class="mute">${t('supSub')}</div></div><span class="grow"></span>
      ${cur ? `<button class="btn" id="tk-new">${t('newTicket')}</button>` : ''}</div>
    <div class="supgrid"><div class="col" style="gap:14px">
      <div class="card"><h4>${t('myTickets')}</h4>${d.mine.length ? d.mine.map(item).join('') : `<div class="empty-note">${t('noTickets')}</div>`}</div>
      ${d.queue ? `<div class="card"><h4>${t('tkQueue')} (${d.queue.length})</h4>${d.queue.filter(x => x.uid !== S.me.id).map(item).join('') || `<div class="empty-note">${t('noTickets')}</div>`}</div>` : ''}
    </div>${chat}</div>`);
  document.querySelectorAll('[data-tk]').forEach(el => el.onclick = run(() => openTicket(el.dataset.tk)));
  if ($('#tk-new')) $('#tk-new').onclick = () => { S.supOpen = null; refresh(); };
  if ($('#nt-send')) $('#nt-send').onclick = run(async () => { S.supOpen = await api('/api/support/new', { subject: $('#nt-subj').value, text: $('#nt-text').value }); loadSupport(); refresh(); });
  if ($('#tk-close')) $('#tk-close').onclick = run(async () => { S.supOpen = await api('/api/support/close', { id: cur.id }); loadSupport(); refresh(); });
  if ($('#tk-form')) $('#tk-form').onsubmit = run(async e => { e.preventDefault(); const v = $('#tk-in').value; if (!v.trim()) return; $('#tk-in').value = ''; S.supOpen = await api('/api/support/send', { id: cur.id, text: v }); refresh(); });
}

const ACCENTS = { violet: ['#969df9', '#b6bbff'], teal: ['#2fd4c0', '#8af0e3'], gold: ['#f4c542', '#ffe08a'], red: ['#ff6b7a', '#ffa3ad'], blue: ['#5aa9ff', '#a7cfff'] };
function applyLook() {
  const c = S.cfg || {}, root = document.documentElement.style;
  const [a1, a2] = ACCENTS[c.accent] || ACCENTS.violet;
  root.setProperty('--accent', a1); root.setProperty('--accent2', a2); root.setProperty('--line', a1);
  document.body.classList.toggle('calm', !!c.reduceMotion);
  document.body.classList.toggle('compact', !!c.compact);
  document.body.classList.toggle('flat', c.bgGlow === false);
  document.body.classList.toggle('streamer', !!c.streamer);
}
async function setCfg(patch) { S.cfg = await K.saveSettings(patch); applyLook(); }

async function renderSettings() {
  const c = S.cfg || {}, pr = S.me.prefs || {};
  const info = S.appInfo || (S.appInfo = await K.info().catch(() => ({})));
  if (S.page !== 'settings') return;
  const sw = (id, on) => `<button class="switch ${on ? 'on' : ''}" data-sw="${id}"></button>`;
  const seg = (id, val, opts) => `<div class="seg sm">${opts.map(([v, l]) => `<button data-seg="${id}" data-v="${v}" class="${String(val) === String(v) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
  const row = (label, hint, ctl) => `<div class="srow"><div><b>${label}</b>${hint ? `<span>${hint}</span>` : ''}</div><div>${ctl}</div></div>`;
  const pseg = (key, val, opts) => `<div class="seg sm">${opts.map(([v, l]) => `<button data-pref="${key}" data-v="${v}" class="${val === v ? 'on' : ''}">${l}</button>`).join('')}</div>`;
  const psw = (key, on) => `<button class="switch ${on ? 'on' : ''}" data-prefsw="${key}"></button>`;
  const IC = {
    general: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/></svg>',
    notif: '<svg viewBox="0 0 24 24"><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>',
    game: '<svg viewBox="0 0 24 24"><path d="M6 9h12a4 4 0 0 1 4 4v1a3 3 0 0 1-5.2 2L15 14H9l-1.8 2A3 3 0 0 1 2 14v-1a4 4 0 0 1 4-4z"/><path d="M7 11.5v3M5.5 13h3"/><circle cx="16" cy="12" r=".8"/><circle cx="18" cy="14" r=".8"/></svg>',
    look: '<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 1.5-2-.6-1.2.3-2 1.5-2H18a3 3 0 0 0 3-3c0-6-4-11-9-11z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="11" cy="7" r="1.2"/><circle cx="16" cy="8.5" r="1.2"/></svg>',
    privacy: '<svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
    account: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    stream: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="12" cy="11" r="2.5"/></svg>',
    adv: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/></svg>',
  };
  const tabs = [['general', t('sGeneral')], ['notif', t('sNotif')], ['game', t('sGame')], ['look', t('sLook')], ['privacy', t('sPrivacy')], ['account', t('sAccount')], ['stream', t('sStream')], ['adv', t('sAdvanced')]];
  if (!tabs.some(x => x[0] === S.setTab)) S.setTab = 'general';
  const body = {
    general: `${row(t('language'), '', langButtons())}
      ${row(t('sStartup'), t('sStartupH'), sw('autostart', c.autostart))}
      ${row(t('sStartHidden'), t('sStartHiddenH'), sw('startHidden', c.startHidden))}
      ${row(t('sCloseTray'), t('sCloseTrayH'), sw('closeToTray', c.closeToTray))}
      ${row(t('sTray'), '', sw('tray', c.tray !== false))}`,
    notif: `${row(t('sound'), t('sSoundH'), sw('sound', S.sound))}
      ${row(t('sTone'), '', seg('tone', c.tone || 'classic', [['classic', t('sToneC')], ['soft', t('sToneS')], ['alert', t('sToneA')]]))}
      ${row(t('sVolume'), '', `<div class="row"><input type="range" min="0" max="100" value="${c.volume ?? 70}" id="st-vol"><button class="btn ghost sm" id="st-test">${t('sTest')}</button></div>`)}
      ${row(t('sUiSounds'), t('sUiSoundsH'), sw('uiSounds', c.uiSounds !== false))}
      ${row(t('sSoundInv'), t('sSoundInvH'), sw('soundInvites', c.soundInvites !== false))}
      ${row(t('sDesktop'), t('sDesktopH'), sw('notify', c.notify !== false))}
      ${row(t('sFlash'), '', sw('flash', c.flash !== false))}
      ${row(t('sRaise'), t('sRaiseH'), sw('raise', c.raise !== false))}`,
    game: `${row(t('sDefMode'), t('sDefModeH'), seg('defaultMode', pubMode(c.defaultMode), [['2v2', '2 × 2'], ['1v1', '1 × 1']]))}
      ${row(t('sRemind'), t('sRemindH'), sw('resultReminder', c.resultReminder !== false))}
      ${row(t('sStreamer'), t('sStreamerH'), sw('streamer', c.streamer))}
      ${K.presence ? row(t('sPresence'), t('sPresenceH'), sw('discordPresence', c.discordPresence !== false)) : ''}
      ${K.presence ? row(kzPick({ en: 'Show my local time in Discord', uk: 'Показувати мій час у Discord', ru: 'Показывать моё время в Discord' }), kzPick({ en: 'Adds your local time to the Konzte status, e.g. “00:00 local (UTC+2)”, so friends know what time it is for you.', uk: 'Додає твій місцевий час у статус Konzte, напр. «00:00 local (UTC+2)», — друзі бачать, котра в тебе година.', ru: 'Добавляет твоё местное время в статус Konzte, напр. «00:00 local (UTC+2)», — друзья видят, который у тебя час.' }), sw('presenceClock', c.presenceClock)) : ''}
      ${row(t('sRules'), t('sRulesH'), `<button class="btn ghost sm" id="st-guide">${t('sOpenGuide')}</button>`)}`,
    look: `${row(t('sAccent'), '', `<div class="accents">${Object.entries(ACCENTS).map(([k, [a]]) => `<button data-acc="${k}" class="${(c.accent || 'violet') === k ? 'on' : ''}" style="--c:${a}"></button>`).join('')}</div>`)}
      ${row(t('sZoom'), '', seg('zoom', c.zoom || 1, [[0.85, '85%'], [0.9, '90%'], [1, '100%'], [1.1, '110%'], [1.25, '125%']]))}
      ${row(t('sMotion'), t('sMotionH'), sw('reduceMotion', c.reduceMotion))}
      ${row(t('sCompact'), t('sCompactH'), sw('compact', c.compact))}
      ${row(t('sGlow'), '', sw('bgGlow', c.bgGlow !== false))}
      ${row(t('sSeason'), t('sSeasonH'), sw('seasonal', c.seasonal !== false))}
      ${row(t('sAnimBg'), t('sAnimBgH'), sw('animBg', c.animBg !== false))}`,
    privacy: `${row(t('sInvites'), t('sInvitesH'), pseg('invites', pr.invites || 'all', [['all', t('sAll')], ['friends', t('friends')], ['none', t('sNobody')]]))}
      ${row(t('sFriendReq'), '', psw('friendReq', pr.friendReq !== false))}
      ${row(t('sInvisible'), t('sInvisibleH'), psw('hideOnline', pr.hideOnline))}
      ${row(t('sShowDiscord'), t('sShowDiscordH'), psw('showDiscord', pr.showDiscord !== false))}`,
    account: `<div class="sacc">${avaF(S.me, 'lg')}<div><b>${nickHtml(S.me)}</b><span class="mute">Discord: ${esc(S.me.name || '—')}</span><span class="mute">Game ID: <span class="gid">${esc(S.me.gameId || '—')}</span></span></div></div>
      ${row(t('sNick'), t('sNickH'), `<button class="btn ghost sm" data-go2="shop">${t('sChangeNick')}</button>`)}
      ${row(t('sPremium'), S.me.premium ? `${S.me.premium.tier === 'plus' ? 'Premium+' : 'Premium'} · ${S.me.premium.boost ? t('boostPrem') : t('activeUntil', { d: fmtDate(S.me.premium.until) })}` : t('sPremiumNo'), `<button class="btn ${S.me.premium ? 'ghost' : 'gold'} sm" data-go2="premium">${S.me.premium ? t('extend') : t('buy')}</button>`)}
      ${row(t('sInvite'), t('sInviteH'), `<button class="btn ghost sm" data-go2="referrals">${t('sOpen')}</button>`)}
      ${row(t('sSupport'), t('sSupportH'), `<button class="btn ghost sm" data-go2="support">${t('sOpen')}</button>`)}
      ${row(t('logout'), t('sLogoutH'), `<button class="btn red sm" id="st-out">${t('logout')}</button>`)}
      <div id="st-gdpr"></div>`,
    stream: `<div id="st-stream"><div class="mute">${t('loading')}</div></div>`,
    adv: `${row(t('sUpdates'), `Konzte ${esc(info.version || '')}${S.build ? ` · build ${S.build}` : ''} · ${info.tauri ? 'Tauri ' + esc(info.tauri) : 'Electron ' + esc(info.electron || '')} · ${esc(info.platform || '')}`, `<button class="btn ghost sm" id="st-upd">${t('sCheck')}</button>`)}
      ${row(t('sHw'), t('sHwH'), sw('hwAccel', c.hwAccel !== false))}
      ${row(t('sCache'), t('sCacheH'), `<button class="btn ghost sm" id="st-cache">${t('sClear')}</button>`)}
      ${S.me.admin || S.devUi ? row(t('server'), '', `<div class="row"><input id="st-server" value="${esc(S.server)}" style="width:240px"><button class="btn ghost sm" id="st-save">${t('save')}</button></div>`) : ''}`,
  };
  render(`<div class="lbhead"><div><h1>${t('settings')}</h1><div class="mute">Konzte ${esc(info.version || '')}${S.build ? ` · build <b class="bnum">${S.build}</b>` : ''}</div></div></div>
  <div class="setwrap"><nav class="setnav">${tabs.map(([k, l]) => `<button data-stt="${k}" class="${S.setTab === k ? 'on' : ''}"><i class="sic">${IC[k]}</i>${l}</button>`).join('')}</nav>
    <div class="card sset setpanel"><h3><i class="sic">${IC[S.setTab]}</i>${tabs.find(x => x[0] === S.setTab)[1]}</h3>${body[S.setTab]}</div></div>
  <p class="mute" style="margin:16px 0 0;font-size:12.5px">${t('about')}</p>`);
  document.querySelectorAll('[data-stt]').forEach(b => b.onclick = () => { S.setTab = b.dataset.stt; renderSettings(); });
  if (S.setTab === 'stream') renderStream();
  if (S.setTab === 'account' && typeof renderGdpr === 'function') renderGdpr();
  document.querySelectorAll('[data-go2]').forEach(b => b.onclick = () => go(b.dataset.go2));
  if (S.setTab === 'general') bindLang(() => { renderMe(); refresh(); });
  document.querySelectorAll('[data-sw]').forEach(b => b.onclick = run(async () => {
    const k = b.dataset.sw, on = !b.classList.contains('on');
    if (k === 'sound') { S.sound = on; await setCfg({ sound: on }); if (on) beep(); }
    else await setCfg({ [k]: on });
    if (k === 'uiSounds' && on) sfx('ok');
    if (k === 'hwAccel') { if (confirm(t('sRestartQ'))) return K.relaunch(); }
    refresh();
  }));
  document.querySelectorAll('[data-seg]').forEach(b => b.onclick = run(async () => {
    const k = b.dataset.seg, v = k === 'zoom' ? +b.dataset.v : b.dataset.v;
    await setCfg({ [k]: v }); if (k === 'tone') beep(); if (k === 'defaultMode') S.mode = v; refresh();
  }));
  document.querySelectorAll('[data-acc]').forEach(b => b.onclick = run(async () => { await setCfg({ accent: b.dataset.acc }); refresh(); }));
  document.querySelectorAll('[data-pref]').forEach(b => b.onclick = run(async () => { S.me = await api('/api/prefs', { [b.dataset.pref]: b.dataset.v }); refresh(); }));
  document.querySelectorAll('[data-prefsw]').forEach(b => b.onclick = run(async () => { S.me = await api('/api/prefs', { [b.dataset.prefsw]: !b.classList.contains('on') }); refresh(); }));
  if ($('#st-vol')) { $('#st-vol').onchange = run(async e => { await setCfg({ volume: +e.target.value }); beep(); }); $('#st-test').onclick = () => beep(); }
  if ($('#st-cache')) $('#st-cache').onclick = run(async () => { await K.clearCache(); toast(t('sCleared')); });
  if ($('#st-save')) $('#st-save').onclick = run(async () => { await K.saveSettings({ server: $('#st-server').value.replace(/\/$/, '') }); location.reload(); });
  if ($('#st-out')) $('#st-out').onclick = logout;
  if ($('#st-guide')) $('#st-guide').onclick = () => K.open('https://konzte.online/#guide');
  if ($('#st-upd')) $('#st-upd').onclick = run(async () => {
    const m = await fetch(S.server.replace(/\/+$/, '') + '/update/manifest.json?t=' + Date.now()).then(r => r.ok ? r.json() : null).catch(() => null);
    const sh = K.shellInfo ? await K.shellInfo().catch(() => null) : null;
    if (sh?.newer) return showClientBlock({ min: sh.latest, have: S.appInfo?.version, soft: true });
    if (m && m.ui > (S.appInfo?.ui || 0)) { S.uiDismissed = null; checkUiUpdate(); toast(t('uiNew')); } else toast(t('sUpToDate'));
  });
}

const OV_WIDGETS = ['form', 'elo', 'session', 'match', 'card'];
async function renderStream() {
  const box = $('#st-stream'); if (!box) return;
  const o = await api('/api/overlay').catch(e => (toast(e.message, true), null));
  if (!o || !$('#st-stream')) return;
  const c = S.cfg?.ov || {};
  const opt = { lang: c.lang || LANG, mode: c.mode && c.mode !== '5v5' ? c.mode : 'all', n: c.n || 10, size: c.size || 400, bg: c.bg || 'dark', accent: (c.accent || '969df9'), nick: c.nick === false ? '0' : '1', brand: c.brand === false ? '0' : '1', ...(c.since ? { since: c.since } : {}) };
  const qs = new URLSearchParams(opt).toString();
  const url = (w, ext = '') => `${o.base}${o.key}/${w}${ext}?${qs}`;
  const setOv = async patch => { await setCfg({ ov: { ...c, ...patch } }); renderStream(); };
  const sseg = (k, val, opts) => `<div class="seg sm">${opts.map(([v, l]) => `<button data-ov="${k}" data-v="${v}" class="${String(val) === String(v) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
  const row = (label, hint, ctl) => `<div class="srow"><div><b>${label}</b>${hint ? `<span>${hint}</span>` : ''}</div><div>${ctl}</div></div>`;
  if (!o.premium) {
    box.innerHTML = `<p class="mute" style="margin:6px 0 12px">${t('ovIntro')}</p>
      <div class="ovlock"><b>${t('ovPremTitle')}</b><span class="mute">${t('ovPremText')}</span><button class="btn gold sm" data-go2="premium">${t('buy')} Premium</button></div>
      <ul class="ovlist">${OV_WIDGETS.map(w => `<li><b>${t('ov_' + w)}</b> — ${t('ovd_' + w)}</li>`).join('')}</ul>`;
    box.querySelectorAll('[data-go2]').forEach(b => b.onclick = () => go(b.dataset.go2));
    return;
  }
  if (!o.on) {
    box.innerHTML = `<p class="mute" style="margin:6px 0 12px">${t('ovIntro')}</p>
      <ul class="ovlist">${OV_WIDGETS.map(w => `<li><b>${t('ov_' + w)}</b> — ${t('ovd_' + w)}</li>`).join('')}</ul>
      <button class="btn" id="ov-on">${t('ovEnable')}</button>`;
    $('#ov-on').onclick = run(async () => { await api('/api/overlay', {}); renderStream(); });
    return;
  }
  box.innerHTML = `<p class="mute" style="margin:6px 0 4px">${t('ovIntro')}</p>
    ${row(t('ovKey'), t('ovKeyH'), `<div class="row"><code class="gid ovkey">${esc(o.key.slice(0, 6))}…${esc(o.key.slice(-4))}</code><button class="btn ghost sm" id="ov-regen">${t('ovRegen')}</button><button class="btn ghost sm" id="ov-off">${t('ovDisable')}</button></div>`)}
    ${row(t('ovMode'), '', sseg('mode', opt.mode, [['all', t('all')], ['2v2', '2 × 2'], ['1v1', '1 × 1']]))}
    ${row(t('ovN'), t('ovNH'), sseg('n', opt.n, [[5, '5'], [9, '9'], [10, '10'], [16, '16']]))}
    ${row(t('ovSession'), opt.since ? t('ovSessionFrom', { d: fmtDT(+opt.since) }) : t('ovSessionDay'), `<div class="row"><button class="btn ghost sm" id="ov-ses">${t('ovSessionStart')}</button>${opt.since ? `<button class="btn ghost sm" id="ov-ses0">${t('ovSessionReset')}</button>` : ''}</div>`)}
    ${row(t('ovBg'), t('ovBgH'), sseg('bg', opt.bg, [['dark', t('ovDark')], ['clear', t('ovClear')]]))}
    ${row(t('ovAccent'), '', `<div class="accents">${Object.entries(ACCENTS).map(([k, [a]]) => `<button data-ovacc="${a.replace('#', '')}" class="${opt.accent === a.replace('#', '') ? 'on' : ''}" style="--c:${a}"></button>`).join('')}</div>`)}
    ${row(t('ovSize'), t('ovSizeH'), sseg('size', opt.size, [[300, '300'], [400, '400'], [600, '600']]))}
    ${row(t('ovLang'), '', sseg('lang', opt.lang, [['en', 'EN'], ['uk', 'UA'], ['ru', 'RU']]))}
    ${row(t('ovShowNick'), '', `<button class="switch ${opt.nick === '1' ? 'on' : ''}" data-ovsw="nick"></button>`)}
    ${row(t('ovBrand'), '', `<button class="switch ${opt.brand === '1' ? 'on' : ''}" data-ovsw="brand"></button>`)}
    <div class="ovgrid">${OV_WIDGETS.map(w => `<div class="ovw"><img data-ovimg="${w}" src="${url(w, '.png')}&t=${Date.now()}" alt="">
      <div><b>${t('ov_' + w)}</b><span class="mute">${t('ovd_' + w)}</span>
      <div class="row"><button class="btn sm" data-ovcopy="${esc(url(w))}">${t('ovCopyObs')}</button><button class="btn ghost sm" data-ovcopy="${esc(url(w, '.png'))}">PNG</button><button class="btn ghost sm" data-ovcopy="${esc(url(w, '.json'))}">JSON</button></div></div></div>`).join('')}</div>
    <div class="ovhelp"><b>${t('ovHowT')}</b><ol><li>${t('ovHow1')}</li><li>${t('ovHow2', { s: opt.size })}</li><li>${t('ovHow3')}</li></ol>
      <b>${t('ovApiT')}</b><p class="mute">${t('ovApiH')}</p><code class="ovcode">GET ${esc(o.base)}&lt;key&gt;/card.json?mode=2v2&amp;n=10 → { nick, elo, level, next, wins, losses, kd, streak, recent[ {won, delta, k, d, map, at} ], session { wins, losses, kd, elo }, live { map, state, my, their } }</code></div>`;
  box.querySelectorAll('[data-ov]').forEach(b => b.onclick = run(() => setOv({ [b.dataset.ov]: /^\d+$/.test(b.dataset.v) ? +b.dataset.v : b.dataset.v })));
  box.querySelectorAll('[data-ovacc]').forEach(b => b.onclick = run(() => setOv({ accent: b.dataset.ovacc })));
  box.querySelectorAll('[data-ovsw]').forEach(b => b.onclick = run(() => setOv({ [b.dataset.ovsw]: !b.classList.contains('on') })));
  box.querySelectorAll('[data-ovcopy]').forEach(b => b.onclick = () => { navigator.clipboard.writeText(b.dataset.ovcopy); toast(t('copied')); });
  $('#ov-ses').onclick = run(() => setOv({ since: Date.now() }));
  if ($('#ov-ses0')) $('#ov-ses0').onclick = run(() => setOv({ since: null }));
  $('#ov-regen').onclick = run(async () => { if (!confirm(t('ovRegenQ'))) return; await api('/api/overlay', { regen: true }); renderStream(); });
  $('#ov-off').onclick = run(async () => { await api('/api/overlay', { on: false }); renderStream(); });
  clearInterval(S.ovTimer);
  S.ovTimer = setInterval(() => {
    const imgs = document.querySelectorAll('[data-ovimg]');
    if (!imgs.length) return clearInterval(S.ovTimer);
    imgs.forEach(i => { const n = new Image(); n.onload = () => { i.src = n.src; }; n.src = i.src.replace(/&t=\d+$/, '') + '&t=' + Date.now(); });
  }, 5000);
}

function tick() {
  const lm = S.live?.match;
  if (lm?.state === 'live' && lm.liveAt && S.cfg?.resultReminder !== false && Date.now() - lm.liveAt > 25 * 60e3 && !(S.reminded ||= {})[lm.id]) {
    S.reminded[lm.id] = 1; toast(t('remindResult')); sfx('ok');
  }
  if (S.backAt && Date.now() >= S.backAt) { S.backAt = 0; if (S.finishedMatch && !S.live?.match) { S.finishedMatch = null; if (S.page === 'play') refresh(); } }
  document.querySelectorAll('[data-back]').forEach(el => { el.textContent = Math.max(0, Math.ceil((+el.dataset.back - Date.now()) / 1000)) + 's'; });
  document.querySelectorAll('[data-deadline]').forEach(el => { const s = secsLeft(+el.dataset.deadline); el.textContent = el.hasAttribute('data-plain') ? s : s + 's'; });
  document.querySelectorAll('[data-ring]').forEach(el => { const c = +el.dataset.c; el.style.strokeDashoffset = c * (1 - secsLeft(+el.dataset.ring) / 30); });
  document.querySelectorAll('[data-since]').forEach(el => {
    const s = Math.floor((Date.now() - (+el.dataset.since || Date.now())) / 1000);
    el.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  });
}
setInterval(tick, 1000);

document.querySelectorAll('[data-win]').forEach(b => b.onclick = () => K.win(b.dataset.win));
document.querySelectorAll('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go));
$('#tb-user').onclick = () => go('profile');
boot();

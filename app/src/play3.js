(() => {
  const ls = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch {} return null; };
  const ON = () => ls('kz-play3') !== '0';
  window.KZ_V3 = ON;

  const L = {
    en: {
      p3League: 'Choose mode', p3ClanWar: 'Clan wars', p3ClanWarL: 'Clan wars 5×5 — from the Clans page',
      p3Online: 'Online', p3Searching: 'Searching', p3Live: 'Live matches', p3Wait: 'Wait', p3Today: 'Matches today', p3Region: 'Region', p3Europe: 'Europe',
      p3Party: 'Party', p3Call: 'Invite', p3Lock1: '1×1 is played solo', p3Lock2: 'Party up to 2 in 2×2', p3Lock5: '5×5 — clan wars only',
      p3Find: 'Find match', p3Search: 'Searching', p3Cancel: 'Cancel', p3Rules: 'Match rules', p3Friends: 'Friends', p3Leave: 'Leave party', p3Code: 'Party code',
      p3Maps: 'Maps', p3MapsSub: 'Captains ban maps in the match room, one remains',
      p3MyStats: 'Your stats', p3ThisSeason: 'This season · {m}', p3Wins: 'Wins', p3Losses: 'Losses', p3Wr: 'Winrate', p3Kd: 'K / D', p3Kpm: 'Kills/match', p3Games: 'Matches',
      p3ToLvl: '{n} ELO to level {l}', p3Max: 'Max level', p3Prize: 'Prize pool', p3Cal: 'Calibration {n}/5',
      p3Form: 'Form', p3FormNone: 'No matches yet', p3Last: 'Last matches', p3All: 'All', p3LastNone: 'No matches in this mode yet',
      p3Act: 'Recent activity', p3Weeks: '12 weeks', p3Days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], p3ActTip: '{d}: {n} matches',
      p3Ladder: 'Ladder', p3Quests: 'Daily quests', p3Pass: 'Pass', p3Streak: 'Login streak',
    },
    uk: {
      p3League: 'Вибір режиму', p3ClanWar: 'Клан-вари', p3ClanWarL: 'Клан-вари 5×5 — зі сторінки «Клани»',
      p3Online: 'Онлайн', p3Searching: 'У пошуку', p3Live: 'Матчів зараз', p3Wait: 'Очікування', p3Today: 'Матчів сьогодні', p3Region: 'Регіон', p3Europe: 'Європа',
      p3Party: 'Паті', p3Call: 'Покликати', p3Lock1: '1×1 грається соло', p3Lock2: 'У 2×2 паті до 2', p3Lock5: '5×5 — лише клан-вари',
      p3Find: 'Знайти матч', p3Search: 'Пошук', p3Cancel: 'Скасувати', p3Rules: 'Правила матчу', p3Friends: 'Друзі', p3Leave: 'Вийти з паті', p3Code: 'Код паті',
      p3Maps: 'Карти', p3MapsSub: 'Капітани банять карти в кімнаті матчу, лишається одна',
      p3MyStats: 'Твоя статистика', p3ThisSeason: 'Цей сезон · {m}', p3Wins: 'Перемог', p3Losses: 'Поразок', p3Wr: 'Вінрейт', p3Kd: 'K / D', p3Kpm: 'Вбивств/матч', p3Games: 'Матчів',
      p3ToLvl: '{n} ELO до рівня {l}', p3Max: 'Максимальний рівень', p3Prize: 'Призовий фонд', p3Cal: 'Калібрування {n}/5',
      p3Form: 'Форма', p3FormNone: 'Матчів поки немає', p3Last: 'Останні матчі', p3All: 'Усі', p3LastNone: 'У цьому режимі ще немає матчів',
      p3Act: 'Нещодавня активність', p3Weeks: '12 тижнів', p3Days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'], p3ActTip: '{d}: матчів — {n}',
      p3Ladder: 'Рейтинг', p3Quests: 'Завдання дня', p3Pass: 'Пропуск', p3Streak: 'Вхід поспіль',
    },
    ru: {
      p3League: 'Выбор режима', p3ClanWar: 'Клан-вары', p3ClanWarL: 'Клан-вары 5×5 — со страницы «Кланы»',
      p3Online: 'Онлайн', p3Searching: 'В поиске', p3Live: 'Матчей сейчас', p3Wait: 'Ожидание', p3Today: 'Матчей сегодня', p3Region: 'Регион', p3Europe: 'Европа',
      p3Party: 'Пати', p3Call: 'Позвать', p3Lock1: '1×1 играется соло', p3Lock2: 'В 2×2 пати до 2', p3Lock5: '5×5 — только клан-вары',
      p3Find: 'Найти матч', p3Search: 'Поиск', p3Cancel: 'Отмена', p3Rules: 'Правила матча', p3Friends: 'Друзья', p3Leave: 'Выйти из пати', p3Code: 'Код пати',
      p3Maps: 'Карты', p3MapsSub: 'Капитаны банят карты в комнате матча, остаётся одна',
      p3MyStats: 'Твоя статистика', p3ThisSeason: 'Этот сезон · {m}', p3Wins: 'Побед', p3Losses: 'Поражений', p3Wr: 'Винрейт', p3Kd: 'K / D', p3Kpm: 'Убийств/матч', p3Games: 'Матчей',
      p3ToLvl: '{n} ELO до уровня {l}', p3Max: 'Максимальный уровень', p3Prize: 'Призовой фонд', p3Cal: 'Калибровка {n}/5',
      p3Form: 'Форма', p3FormNone: 'Матчей пока нет', p3Last: 'Последние матчи', p3All: 'Все', p3LastNone: 'В этом режиме ещё нет матчей',
      p3Act: 'Недавняя активность', p3Weeks: '12 недель', p3Days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], p3ActTip: '{d}: матчей — {n}',
      p3Ladder: 'Рейтинг', p3Quests: 'Задания дня', p3Pass: 'Пропуск', p3Streak: 'Вход подряд',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k], L[k]);
  const tr = k => (I18N[LANG] || I18N.en)[k] ?? I18N.en[k];

  const IC = {
    lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    chev: '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"/></svg>',
    users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 19.5c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5"/><path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.4c1.9.8 3.1 2.5 3.5 5.1"/></svg>',
    exit: '<svg viewBox="0 0 24 24"><path d="M14 4.5H6.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2H14M10 12h10.5M17 8.5l3.5 3.5-3.5 3.5"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 3l7.5 3v5.5c0 4.7-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.8-7.5-9.5V6z"/></svg>',
    crown: '<svg viewBox="0 0 24 24"><path d="M3.5 8l4.5 4 4-6.5 4 6.5 4.5-4-1.8 10.5H5.3z"/></svg>',
  };
  const sizeOf = m => ({ '1v1': 2, '2v2': 4 })[m] || 10;
  const partyMax = m => ({ '1v1': 1, '2v2': 2 })[m] || 5;
  const modeName = m => m.replace('v', ' × ');
  const DAY = 86_400_000;

  function league(st, mode) {
    const tab = m => `<button class="p3-lg ${mode === m ? 'on' : ''}" data-mode="${m}" ${st.myQueue ? 'disabled' : ''}>${modeName(m)}${mode === m ? IC.check : ''}</button>`;
    return `<span class="p3-h">${tr('p3League')}</span><div class="p3-league">${PUB_MODES.map(tab).join('')}
      <button class="p3-lg lock" data-p3-clans title="${esc(tr('p3ClanWarL'))}">${tr('p3ClanWar')} 5×5${IC.lock}</button></div>`;
  }
  function counters(st, mode, ss) {
    const q = Object.values(st.queues).reduce((a, b) => a + b, 0);
    const eta = window.PL2 ? PL2.etaTxt(mode, true) : '—';
    const c = (h, v, cls = '') => `<div class="p3-ct ${cls}"><span>${h}</span><b class="num">${v}</b></div>`;
    const inQ = st.myQueue === mode;
    return `<div class="p3-cts">${c(tr('p3Online'), st.online)}${c(tr('p3Searching'), q)}${c(tr('p3Live'), ss?.live ?? '–')}
      ${inQ ? `<div class="p3-ct hot"><span>${tr('p3Search')}</span><b class="num" data-since="${S.queuedAt}"></b></div>` : c(tr('p3Wait'), eta)}
      ${c(tr('p3Today'), ss?.today ?? '–')}${c(tr('p3Region'), tr('p3Europe'))}</div>`;
  }
  function slotMe(m, p, r) {
    const mode = S.mode, lvl = levelOf(r.elo), me = m.id === S.me.id;
    const rr = me ? r : null;
    const bgp = me ? { ...m, pbg: S.myProfile?.pbg } : m;
    const bgl = window.kzCard3?.bg ? `<div class="p3-sbg">${kzCard3.bg(bgp)}</div>` : '';
    return `<div class="p3-slot ${me ? 'me' : 'f'}">${bgl}${p && m.id === p.leader ? `<i class="p3-crown" title="${esc(t('leader'))}">${IC.crown}</i>` : ''}
      ${p && p.leader === S.me.id && !me ? `<button class="p3-kick" data-kick="${m.id}" title="✕">${IC.x}</button>` : ''}
      <div class="p3-ava">${avaF(m, 'p3a')}</div><b class="p3-nick" title="${esc(m.nick)}">${esc(m.nick)}</b>
      ${rr ? `<span class="p3-elo"><img src="${lvlIc(rr, lvl)}">${isCal(rr) ? tr('p3Cal').replace('{n}', rr.cal) : `<b class="num">${rr.elo}</b> ELO`}</span>
        <span class="p3-mini"><span>K/D ${rr.w + rr.l ? kd(rr.k, rr.d) : '—'}</span><span>WR ${rr.w + rr.l ? wrNum(rr) + '%' : '—'}</span></span>`
        : `<span class="p3-elo f">${m.online === false ? `<i class="dot"></i>${t('offline')}` : `<i class="dot on"></i>${modeName(mode)}`}</span>`}</div>`;
  }
  function slots(st, mode, r) {
    const p = st.party, members = p ? p.members : [S.me];
    const max = partyMax(mode), lead = !p || p.leader === S.me.id;
    const others = members.filter(m => m.id !== S.me.id);
    const free = Math.max(0, max - members.length);
    const lockTxt = mode === '1v1' ? tr('p3Lock1') : mode === '2v2' ? tr('p3Lock2') : tr('p3Lock5');
    const me = members.find(m => m.id === S.me.id) || S.me;
    const side = [...others.map(m => slotMe(m, p, r)),
      ...Array.from({ length: free }, () => `<button class="p3-slot add" data-p3-call ${lead ? '' : 'disabled'}><i>${IC.plus}</i><span>${tr('p3Call')}</span></button>`)];
    while (side.length < 4) side.push(`<div class="p3-slot lock" data-tip="${esc(lockTxt)}"><i>${IC.lock}</i></div>`);
    const order = [side[3], side[1], slotMe(me, p, r), side[0], side[2]];
    return `<div class="p3-ph"><span class="p3-h">${tr('p3Party')} <b class="num">${members.length} / ${max}</b></span>
      ${p ? `<span class="p3-code">${tr('p3Code')}: <code class="pcode" data-party="copy" title="${esc(t('copyId'))}">${esc(p.code)}</code></span>`
        : max > 1 ? `<span class="p3-join"><input id="party-code" placeholder="${esc(t('partyCodePh'))}" maxlength="6"><button class="btn ghost sm" data-party="join">${t('join')}</button></span>` : ''}</div>
      <div class="p3-slots">${order.join('')}</div>`;
  }
  function goRow(st, mode, r, ban) {
    const inQ = st.myQueue === mode, p = st.party;
    let main;
    if (inQ) main = `<button class="p3-find on" data-act="leave"><span class="searching"><span class="pulse"></span></span><span>${tr('p3Search')} <b data-since="${S.queuedAt}"></b> · ${st.queues[mode] ?? 0}/${sizeOf(mode)}</span><small>${tr('p3Cancel')}</small></button>`;
    else if (p && p.leader !== S.me.id) main = `<div class="p3-find off"><span>${t('leaderStarts')}</span></div>`;
    else if (mode === '1v1' && p?.members.length > 1) main = `<div class="p3-find off"><span>${t('noParty1v1')}</span></div>`;
    else if (mode === '2v2' && p?.members.length > 2) main = `<div class="p3-find off"><span>${t('noPartyDuel')}</span></div>`;
    else main = `<button class="p3-find" data-act="queue" data-mode="${mode}" ${st.myQueue || ban ? 'disabled' : ''}>${IC.target}<span>${p?.members.length > 1 ? t('findMatchParty', { n: p.members.length }) : tr('p3Find')} ${modeName(mode).replace(/ /g, '')}</span>
      <small>${isCal(r) ? tr('p3Cal').replace('{n}', r.cal) + ' · +75 / −50' : `±5–30 ELO`}</small></button>`;
    const fr = (st.friends?.list || []).filter(x => x.status !== 'offline').length;
    return `<div class="p3-go"><button class="p3-rb" data-p3-call title="${esc(tr('p3Friends'))}">${IC.users}${fr ? `<em>${fr}</em>` : ''}</button>${main}
      <button class="p3-rb" data-party="${p ? 'leave' : 'create'}" title="${esc(p ? tr('p3Leave') : t('createParty'))}" ${p ? '' : 'data-p3-new'}>${p ? IC.exit : IC.plus}</button></div>
      <div class="queue p3-qanchor"></div>
      <button class="p3-rules" data-p3-rules>${IC.shield}${tr('p3Rules')}</button>`;
  }
  function maps(mode) {
    const pool = mode === '1v1' ? ['Egypt', 'Subway', 'TrainYard', 'Caribbean', 'Highrise', 'Museum', 'Warehouse']
      : ['Egypt', 'Subway', 'TrainYard', 'Caribbean', 'Highrise', 'Museum', 'Warehouse', 'Drain', 'Fuji'];
    return `<div class="card p3-maps"><div class="p3-mh"><span class="p3-h">${tr('p3Maps')} <b class="num">${pool.length}</b></span><span class="mute">${tr('p3MapsSub')}</span></div>
      <div class="p3-mrow">${pool.map(m => `<div class="p3-map" style="--mi:url(${mapImg(m)})"><b>${esc(mapName(m))}</b></div>`).join('')}</div></div>`;
  }
  function tiles() {
    const st = typeof LC !== 'undefined' ? LC.st : null;
    if (!st) return '<div class="lc-home" hidden></div>';
    const d = st.quests.d.list, doneN = d.filter(q => q.p >= q.n).length, claim = [...d, ...st.quests.w.list].filter(q => q.p >= q.n && !q.claimed).length;
    const ps = st.pass, ready = ps.ready.f + ps.ready.p;
    const tile = (cls, h, v, s) => `<button class="p3-tile ${cls}" data-pl2-go="pass"><span>${h}</span><b>${v}</b><small>${s}</small></button>`;
    return `<div class="lc-home p3-tiles">${tile(claim ? 'hot' : '', tr('p3Quests'), `${doneN} / ${d.length}`, claim ? t('pl2QSub', { n: claim }) : t('pl2QSub0'))}
      ${tile(ready ? 'gold' : '', tr('p3Pass'), t('pl2Lvl', { n: ps.level }), ready ? t('pl2PassSub') : t('pl2PassOpen'))}
      ${tile('', tr('p3Streak'), t('lcDays', { n: st.streak.login.n }), t('pl2StreakSub', { n: st.streak.win.n }))}</div>`;
  }

  function myStats(r, mode) {
    const g = r.w + r.l;
    const c = (v, h) => `<div><b class="num">${v}</b><span>${h}</span></div>`;
    return `<div class="card p3-side"><div class="p3-sh"><span class="p3-h">${tr('p3MyStats')}</span><span class="mute">${tr('p3ThisSeason').replace('{m}', modeName(mode))}</span></div>
      <div class="p3-grid">${c(r.w, tr('p3Wins'))}${c(r.l, tr('p3Losses'))}${c(g ? wrNum(r) + '%' : '—', tr('p3Wr'))}
        ${c(g ? kd(r.k, r.d) : '—', tr('p3Kd'))}${c(g ? (r.k / g).toFixed(1) : '—', tr('p3Kpm'))}${c(g, tr('p3Games'))}</div></div>`;
  }
  function seasonCard(r, mode) {
    const se = S.season, n = S.stats?.season ?? se?.season ?? 1;
    const name = se?.name || ({ 1: 'Relic', 2: 'Polaris' })[n] || '';
    const lvl = levelOf(r.elo), nx = LEVELS[lvl + 1], cal = isCal(r);
    const lad = (se?.ladders || (se ? [se] : [])).find(l => l.ladder === mode) || null;
    const w = se?.warmup && !se.warmup.started ? se.warmup : null;
    const when = [w ? (w.start ? t('wuStartsAt', { d: fmtDT(w.start) }) : t('wuGoal', { n: w.players, g: w.goal })) : '',
      lad?.me?.place ? t('seasonMyPlace', { p: lad.me.place, n: lad.me.of }) : '',
      se ? (se.end ? t('seasonEnds', { d: fmtDate(se.end), n: Math.max(0, Math.ceil((se.end - Date.now()) / DAY)) }) : t('seasonEndTba')) : ''].filter(Boolean);
    const prize = (se?.ladders || (se ? [se] : [])).reduce((a, l) => a + (l.places || []).reduce((b, p) => b + (p.cash || 0), 0), 0);
    return `<div class="card p3-side p3-season"><div class="p3-sl"><span class="p3-h">${t('pl2Season', { n })} · <em>${esc(name)}</em></span>
        <div class="p3-lv"><img class="lvl" src="${lvlIc(r, lvl)}">${cal ? `<b>${tr('p3Cal').replace('{n}', r.cal)}</b>` : `<b class="num">${r.elo}</b><span>ELO</span>`}</div>
        ${cal ? `<div class="p3-cbar">${[0, 1, 2, 3, 4].map(i => `<i class="${i < r.cal ? 'on' : ''}"></i>`).join('')}</div>`
          : `<div class="p3-bar"><i style="width:${levelPct(r.elo)}%"></i></div><span class="mute p3-to">${nx ? tr('p3ToLvl').replace('{n}', nx - r.elo).replace('{l}', lvl + 1) : tr('p3Max')}</span>`}</div>
      <button class="p3-sr" data-p3-season><span class="p3-h">${modeName(mode)} · ${tr('p3Ladder')}</span>${IC.chev}
        ${when.map((x, i) => `<span class="p3-when ${i === 0 && w ? 'wu' : 'mute'}">${x}</span>`).join('')}${prize ? `<span class="p3-prize"><span class="mute">${tr('p3Prize')}</span><b>$${prize}</b></span>` : ''}</button></div>`;
  }
  const modeMatches = mode => (S.myProfile?.matches || []).filter(h => h.mode === mode);
  function form(mode) {
    const ms = modeMatches(mode).slice(0, 10);
    return `<div class="card p3-side p3-form"><div class="p3-sh"><span class="p3-h">${tr('p3Form')}</span>${ms.length ? `<span class="mute num">${ms.filter(h => h.won).length}–${ms.filter(h => !h.won).length}</span>` : ''}</div>
      ${ms.length ? `<div class="p3-fr">${ms.map(h => `<i class="${h.won ? 'w' : 'l'}" data-mid="${h.id}" title="${esc(mapName(h.map))} · ${sign(h.delta)} ELO">${h.won ? 'W' : 'L'}</i>`).join('')}</div>` : `<span class="mute p3-empty">${tr('p3FormNone')}</span>`}</div>`;
  }
  function last(mode) {
    const ms = modeMatches(mode).slice(0, 3);
    return `<div class="card p3-side"><div class="p3-sh"><span class="p3-h">${tr('p3Last')}</span><button class="p3-link" data-pl2-prof>${tr('p3All')}</button></div>
      ${ms.length ? ms.map(h => `<div class="p3-lm" data-mid="${h.id}"><span class="p3-li" style="background-image:url(${mapImg(h.map)})"></span><div class="grow"><b>${esc(mapName(h.map))}</b><span class="mute">${h.score ? esc(h.score) + ' · ' : ''}${h.k}/${h.d} · ${fmtDate(h.at)}</span></div><b class="num ${h.delta > 0 ? 'win' : 'lose'}">${sign(h.delta)}</b></div>`).join('')
        : `<span class="mute p3-empty">${tr('p3LastNone')}</span>`}</div>`;
  }
  function activity() {
    const ms = S.myProfile?.matches || [];
    const now = new Date(), today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dow = (today.getDay() + 6) % 7;
    const start = new Date(today.getTime() - (11 * 7 + dow) * DAY);
    const cnt = {};
    for (const h of ms) { const d = new Date(h.at); const k = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime(); cnt[k] = (cnt[k] || 0) + 1; }
    const lvl = n => !n ? 0 : n < 2 ? 1 : n < 4 ? 2 : n < 7 ? 3 : 4;
    const loc = LANG === 'uk' ? 'uk-UA' : LANG === 'ru' ? 'ru-RU' : 'en-GB';
    let months = '', lastM = -1, cells = '';
    for (let w = 0; w < 12; w++) {
      const d0 = new Date(start.getTime() + w * 7 * DAY);
      months += `<span class="p3-mo" style="grid-column:${w + 2};grid-row:1">${d0.getMonth() !== lastM ? new Intl.DateTimeFormat(loc, { month: 'short' }).format(d0).replace('.', '') : ''}</span>`;
      lastM = d0.getMonth();
      for (let d = 0; d < 7; d++) {
        const day = new Date(start.getTime() + (w * 7 + d) * DAY), k = day.getTime(), n = cnt[k] || 0, fut = day > today;
        cells += `<i class="a${lvl(n)} ${fut ? 'fut' : ''}" style="grid-column:${w + 2};grid-row:${d + 2}" title="${fut ? '' : esc(tr('p3ActTip').replace('{d}', day.toLocaleDateString(loc)).replace('{n}', n))}"></i>`;
      }
    }
    const days = tr('p3Days').map((x, i) => `<span style="grid-column:1;grid-row:${i + 2}">${x}</span>`).join('');
    return `<div class="card p3-side"><div class="p3-sh"><span class="p3-h">${tr('p3Act')}</span><span class="mute">${tr('p3Weeks')}</span></div>
      <div class="p3-heat"><span style="grid-column:1;grid-row:1"></span>${months}${days}${cells}</div></div>`;
  }

  function callModal() {
    const st = S.live; if (!st) return;
    modal(`<div class="p3-callm">${friendsCard(st)}</div>`, () => { bindParty(); });
  }

  const _prev = renderPlay;
  renderPlay = function () {
    const st = S.live;
    if (!ON() || !st || st.match || S.finishedMatch || !S.me?.gameId) return _prev.apply(this, arguments);
    if (window.PL2) PL2.onbLoad();
    const mode = S.mode = pubMode(S.mode), r = S.me['r' + mode] || { elo: 1000, w: 0, l: 0, k: 0, d: 0, cal: 0 };
    const ban = S.me.ban && (S.me.ban.until === 0 || S.me.ban.until > Date.now()) ? S.me.ban : null;
    const ss = S.stats;
    render(`<div class="pl2 p3">
      ${window.PL2 && PL2.onbVisible() ? PL2.onbBlock(false) : ''}
      ${ban ? `<div class="card" style="border-color:var(--lose)"><h3 class="lose">${t('banned')}</h3>${esc(ban.reason)} · ${ban.until ? t('until', { d: fmtDT(ban.until) }) : t('forever')}</div>` : ''}
      <div class="p3-lay">
        <div class="p3-main">
          <div class="card p3-hub">${league(st, mode)}${counters(st, mode, ss)}${slots(st, mode, r)}${goRow(st, mode, r, ban)}</div>
          ${maps(mode)}${tiles()}
        </div>
        <div class="p3-right">${myStats(r, mode)}${seasonCard(r, mode)}${form(mode)}${last(mode)}${activity()}</div>
      </div>
      ${seasonRewards()}</div>`);
    const view = $('#view');
    view.querySelectorAll('[data-mode]').forEach(b => { if (!b.dataset.act) b.onclick = () => { S.mode = b.dataset.mode; refresh(); }; });
    bindPlay();
    bindParty();
    if (window.PL2) PL2.bindOnb(view);
    view.querySelectorAll('[data-p3-call]').forEach(b => b.onclick = callModal);
    view.querySelectorAll('[data-pl2-go]').forEach(b => b.onclick = () => go(b.dataset.pl2Go));
    const on = (sel, fn) => { const el = view.querySelector(sel); if (el) el.onclick = fn; };
    on('[data-p3-clans]', () => go('clans'));
    on('[data-pl2-prof]', () => go('profile', S.me.id));
    on('[data-p3-rules]', () => go('rules'));
    on('[data-p3-season]', () => { ls('kz-season-open', '1'); refresh(); setTimeout(() => document.querySelector('#view .srew')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60); });
    tick();
  };
})();

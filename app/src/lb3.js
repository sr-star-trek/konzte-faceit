(() => {
  const L = {
    en: {
      lb3Kicker: 'Player ranking · ELO', lb3Players: '{n} players', lb3Clans: '{n} clans',
      lb3Intro: 'Ranked by ELO. The table shows the top 100 calibrated players (5+ matches). Season prizes go to the top places with {m}+ matches.',
      lb3IntroClan: 'Clans ranked by clan-war ELO. A clan enters the table after 5 wars; calibrating clans are listed at the end.',
      lb3Rewards: 'Season rewards', lb3Season: 'Season {n}', lb3Ends: 'Ends in', lb3EndsOn: 'on {d}', lb3NoEnd: 'End date TBA', lb3Pool: 'Prize pool', lb3MinM: 'Prizes from {n} matches',
      lb3Warm: 'Warm-up', lb3D: 'd', lb3H: 'h',
      lb3Tab2: 'Main ladder', lb3Tab1: 'Solo duels', lb3TabC: 'Clan wars 5×5', lb3TabCs: 'clan-war ELO', lb3Yours: 'You are here',
      lb3Place: 'Place', lb3Of: 'of {n}', lb3Out: 'not ranked yet', lb3Out100: 'outside the top 100', lb3Lvl: 'LVL', lb3Kd: 'K/D', lb3Matches: 'Matches', lb3Wr: 'Winrate',
      lb3Cal: 'Calibration {n}/5', lb3CalLeft: '{n} more matches to enter the ranking', lb3CalBar: 'Calibration',
      lb3ToTop: 'To top {n}', lb3ToPlace: 'To #{n}', lb3Lead: 'Your lead', lb3Leader: 'You are #1', lb3Hidden: 'You are not in this ranking',
      lb3PrizeNow: 'Current reward: {r}', lb3ToPrize: '+{n} ELO to a prize place', lb3SeasonM: 'Season matches: {n} / {m}', lb3SeasonOk: 'Season matches: {n} — eligible',
      lb3Leaders: 'Leaders', lb3PlaceN: '#{n}', lb3Free: 'Free spot', lb3FreeSub: 'Play 5 matches to take it', lb3FreeSubC: 'Play 5 clan wars to take it',
      lb3GapUp: '+{n} ELO to #{p}', lb3GapLead: '+{n} ELO ahead of #2', lb3Alone: 'No one to chase yet', lb3Wl: 'W / L',
      lb3Thr: 'Rank thresholds', lb3From: 'from {n}', lb3FreeTh: 'open', lb3You: 'You', lb3Total: 'In the ranking: {n} · table shows the top {s}',
      lb3TotalC: 'Clans: {n} · calibrated: {c}',
      lb3Table: 'Ranking {m}', lb3TableSub: 'Top {s} by ELO of {n}', lb3TableSubC: '{n} clans by clan-war ELO',
      lb3Search: 'Nick…', lb3SearchC: 'Tag or name…', lb3Around: 'Around me', lb3Jump: 'Go to place', lb3Go: 'Go', lb3Mine: 'My place #{n}',
      lb3NotIn: 'You are not in the top {s}', lb3Player: 'Player', lb3Clan: 'Clan', lb3Gap: 'To above', lb3Members: 'Members', lb3Power: 'Power',
      lb3PageOf: '{a}–{b} of {n}', lb3Prev: 'Back', lb3Next: 'Next', lb3None: 'Nobody found', lb3Empty: 'The ranking is empty for now — play 5 matches to be the first.',
      lb3EmptyC: 'No clans yet.', lb3NoClan: 'You are not in a clan', lb3NoClanSub: 'Create or join a clan to fight clan wars 5×5', lb3ToClans: 'Clans',
      lb3ClanCal: 'Calibration {n}/5', lb3Wars: 'Wars', lb3Open: 'Open', lb3You2: 'you',
    },
    uk: {
      lb3Kicker: 'Рейтинг гравців · ELO', lb3Players: '{n} гравців', lb3Clans: '{n} кланів',
      lb3Intro: 'Рейтинг за ELO. У таблиці — топ-100 відкаліброваних гравців (від 5 матчів). Призи сезону — верхнім місцям, у кого від {m} матчів.',
      lb3IntroClan: 'Клани за ELO клан-варів. У таблицю клан потрапляє після 5 варів; ті, що калібруються, — наприкінці списку.',
      lb3Rewards: 'Нагороди сезону', lb3Season: 'Сезон {n}', lb3Ends: 'До кінця', lb3EndsOn: '{d}', lb3NoEnd: 'Дата кінця — згодом', lb3Pool: 'Призовий фонд', lb3MinM: 'Призи — від {n} матчів',
      lb3Warm: 'Розминка', lb3D: 'д', lb3H: 'г',
      lb3Tab2: 'Основний рейтинг', lb3Tab1: 'Дуелі соло', lb3TabC: 'Клан-вари 5×5', lb3TabCs: 'ELO клан-варів', lb3Yours: 'Ти тут',
      lb3Place: 'Місце', lb3Of: 'з {n}', lb3Out: 'ще не в рейтингу', lb3Out100: 'поза топ-100', lb3Lvl: 'LVL', lb3Kd: 'K/D', lb3Matches: 'Матчі', lb3Wr: 'Вінрейт',
      lb3Cal: 'Калібрування {n}/5', lb3CalLeft: 'Ще {n} матч(ів) — і ти в рейтингу', lb3CalBar: 'Калібрування',
      lb3ToTop: 'До топ-{n}', lb3ToPlace: 'До #{n}', lb3Lead: 'Твій відрив', lb3Leader: 'Ти — №1', lb3Hidden: 'Тебе немає в цьому рейтингу',
      lb3PrizeNow: 'Нагорода зараз: {r}', lb3ToPrize: '+{n} ELO до призового місця', lb3SeasonM: 'Матчів у сезоні: {n} / {m}', lb3SeasonOk: 'Матчів у сезоні: {n} — допуск є',
      lb3Leaders: 'Лідери', lb3PlaceN: '#{n}', lb3Free: 'Місце вільне', lb3FreeSub: 'Зіграй 5 матчів — і займи його', lb3FreeSubC: 'Зіграйте 5 клан-варів — і займіть його',
      lb3GapUp: '+{n} ELO до #{p}', lb3GapLead: 'Відрив від #2: +{n} ELO', lb3Alone: 'Наздоганяти поки нікого', lb3Wl: 'W / L',
      lb3Thr: 'Пороги рейтингу', lb3From: 'від {n}', lb3FreeTh: 'вільно', lb3You: 'Ти', lb3Total: 'У рейтингу: {n} · у таблиці топ-{s}',
      lb3TotalC: 'Кланів: {n} · відкаліброваних: {c}',
      lb3Table: 'Рейтинг {m}', lb3TableSub: 'Топ-{s} за ELO з {n}', lb3TableSubC: '{n} кланів за ELO клан-варів',
      lb3Search: 'Нік…', lb3SearchC: 'Тег або назва…', lb3Around: 'Навколо мене', lb3Jump: 'До місця', lb3Go: 'Перейти', lb3Mine: 'Моє місце #{n}',
      lb3NotIn: 'Тебе немає в топ-{s}', lb3Player: 'Гравець', lb3Clan: 'Клан', lb3Gap: 'До вищого', lb3Members: 'Склад', lb3Power: 'Сила',
      lb3PageOf: '{a}–{b} з {n}', lb3Prev: 'Назад', lb3Next: 'Далі', lb3None: 'Нікого не знайдено', lb3Empty: 'Рейтинг поки порожній — зіграй 5 матчів і стань першим.',
      lb3EmptyC: 'Кланів поки немає.', lb3NoClan: 'Ти не в клані', lb3NoClanSub: 'Створи клан або вступи, щоб грати клан-вари 5×5', lb3ToClans: 'Клани',
      lb3ClanCal: 'Калібрування {n}/5', lb3Wars: 'Варів', lb3Open: 'Відкрити', lb3You2: 'ти',
    },
    ru: {
      lb3Kicker: 'Рейтинг игроков · ELO', lb3Players: '{n} игроков', lb3Clans: '{n} кланов',
      lb3Intro: 'Рейтинг по ELO. В таблице — топ-100 откалиброванных игроков (от 5 матчей). Призы сезона — верхним местам, у кого от {m} матчей.',
      lb3IntroClan: 'Кланы по ELO клан-варов. В таблицу клан попадает после 5 варов; калибрующиеся — в конце списка.',
      lb3Rewards: 'Награды сезона', lb3Season: 'Сезон {n}', lb3Ends: 'До конца', lb3EndsOn: '{d}', lb3NoEnd: 'Дата конца — позже', lb3Pool: 'Призовой фонд', lb3MinM: 'Призы — от {n} матчей',
      lb3Warm: 'Разминка', lb3D: 'д', lb3H: 'ч',
      lb3Tab2: 'Основной рейтинг', lb3Tab1: 'Дуэли соло', lb3TabC: 'Клан-вары 5×5', lb3TabCs: 'ELO клан-варов', lb3Yours: 'Ты здесь',
      lb3Place: 'Место', lb3Of: 'из {n}', lb3Out: 'ещё не в рейтинге', lb3Out100: 'вне топ-100', lb3Lvl: 'LVL', lb3Kd: 'K/D', lb3Matches: 'Матчи', lb3Wr: 'Винрейт',
      lb3Cal: 'Калибровка {n}/5', lb3CalLeft: 'Ещё {n} матч(ей) — и ты в рейтинге', lb3CalBar: 'Калибровка',
      lb3ToTop: 'До топ-{n}', lb3ToPlace: 'До #{n}', lb3Lead: 'Твой отрыв', lb3Leader: 'Ты — №1', lb3Hidden: 'Тебя нет в этом рейтинге',
      lb3PrizeNow: 'Награда сейчас: {r}', lb3ToPrize: '+{n} ELO до призового места', lb3SeasonM: 'Матчей в сезоне: {n} / {m}', lb3SeasonOk: 'Матчей в сезоне: {n} — допуск есть',
      lb3Leaders: 'Лидеры', lb3PlaceN: '#{n}', lb3Free: 'Место свободно', lb3FreeSub: 'Сыграй 5 матчей — и займи его', lb3FreeSubC: 'Сыграйте 5 клан-варов — и займите его',
      lb3GapUp: '+{n} ELO до #{p}', lb3GapLead: 'Отрыв от #2: +{n} ELO', lb3Alone: 'Догонять пока некого', lb3Wl: 'W / L',
      lb3Thr: 'Пороги рейтинга', lb3From: 'от {n}', lb3FreeTh: 'свободно', lb3You: 'Ты', lb3Total: 'В рейтинге: {n} · в таблице топ-{s}',
      lb3TotalC: 'Кланов: {n} · откалиброванных: {c}',
      lb3Table: 'Рейтинг {m}', lb3TableSub: 'Топ-{s} по ELO из {n}', lb3TableSubC: '{n} кланов по ELO клан-варов',
      lb3Search: 'Ник…', lb3SearchC: 'Тег или название…', lb3Around: 'Вокруг меня', lb3Jump: 'К месту', lb3Go: 'Перейти', lb3Mine: 'Моё место #{n}',
      lb3NotIn: 'Тебя нет в топ-{s}', lb3Player: 'Игрок', lb3Clan: 'Клан', lb3Gap: 'До выше', lb3Members: 'Состав', lb3Power: 'Сила',
      lb3PageOf: '{a}–{b} из {n}', lb3Prev: 'Назад', lb3Next: 'Дальше', lb3None: 'Никого не найдено', lb3Empty: 'Рейтинг пока пуст — сыграй 5 матчей и стань первым.',
      lb3EmptyC: 'Кланов пока нет.', lb3NoClan: 'Ты не в клане', lb3NoClanSub: 'Создай клан или вступи, чтобы играть клан-вары 5×5', lb3ToClans: 'Кланы',
      lb3ClanCal: 'Калибровка {n}/5', lb3Wars: 'Варов', lb3Open: 'Открыть', lb3You2: 'ты',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k] ||= {}, L[k]);
  const tr = (k, p) => { let s = (I18N[LANG] || I18N.en)[k] ?? I18N.en[k] ?? k; if (p) for (const [a, b] of Object.entries(p)) s = s.split('{' + a + '}').join(b); return s; };
  const ls = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch {} return null; };
  const N = n => (n == null ? '—' : Number(n).toLocaleString(LANG === 'en' ? 'en-US' : 'uk-UA'));
  const modeName = m => m.replace('v', ' × ');

  const IC = {
    trophy: '<svg viewBox="0 0 24 24"><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M12 14v4M8 21h8M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4"/></svg>',
    crown: '<svg viewBox="0 0 24 24"><path d="M3.5 8l4.5 4 4-6.5 4 6.5 4.5-4-1.8 10.5H5.3z"/></svg>',
    users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 19.5c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5"/><path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.4c1.9.8 3.1 2.5 3.5 5.1"/></svg>',
    user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.8-4 3.8-6.5 7.5-6.5s6.7 2.5 7.5 6.5"/></svg>',
    swords: '<svg viewBox="0 0 24 24"><path d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2"/><path d="M14.5 6.5L18 3h3v3l-3.5 3.5M5 14l4 4M7 17l-3 3M3 19l2 2"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/></svg>',
    chev: '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
    left: '<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    gift: '<svg viewBox="0 0 24 24"><rect x="3.5" y="9" width="17" height="11" rx="1.5"/><path d="M12 9v11M3.5 13h17M12 9c-2-4-6-4-6-1.5S9 9 12 9c3 0 6-1 6-1.5S14 5 12 9z"/></svg>',
    up: '<svg viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>',
    flame: '<svg viewBox="0 0 24 24"><path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 1 1 2 2 2 4 1-2 1-4 1-7z"/></svg>',
    trend: '<svg viewBox="0 0 24 24"><path d="M4 17l6-6 4 4 6-7M14 8h6v6"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>',
  };

  const ST = S.lb3 ||= { tab: null, view: 'top', size: 25, page: 0, flash: null, clans: null, clansAt: 0, rec: {} };
  if (!ST.tab) ST.tab = ls('kz-lb3-tab') === 'clans' ? 'clans' : null;
  { const z = +ls('kz-lb3-size'); if ([25, 50, 100].includes(z)) ST.size = z; }
  const isClans = () => ST.tab === 'clans';

  const ladOf = mode => (S.season?.ladders || (S.season ? [S.season] : [])).find(l => l.ladder === mode) || null;
  const rewardOf = (lad, p) => lad?.places?.find(x => p >= x.from && p <= x.to) || null;
  const rewardTxt = x => !x ? '' : [x.cash ? '$' + x.cash : '', x.kf ? N(x.kf) + ' KF' : ''].filter(Boolean).join(' · ');
  const poolOf = lad => (lad?.places || []).reduce((a, p) => a + (p.cash || 0), 0);
  async function loadClans(force) {
    if (!force && ST.clans && Date.now() - ST.clansAt < 60_000) return ST.clans;
    const r = await api('/api/clans?sort=war').catch(() => null);
    if (r) { ST.clans = r.list || []; ST.clansAt = Date.now(); }
    return ST.clans;
  }
  async function loadRecords(mode) {
    const c = ST.rec[mode];
    if (c && Date.now() - c.at < 120_000) return c.data;
    const d = await api('/api/stats/records?mode=' + mode).catch(() => null);
    if (d) ST.rec[mode] = { at: Date.now(), data: d };
    return d;
  }

  function meInfo(mode, rows) {
    const row = rows.find(r => r.id === S.me.id);
    const base = S.me['r' + mode] || { elo: 0, w: 0, l: 0, k: 0, d: 0 };
    const lad = ladOf(mode);
    const r = row ? { ...base, elo: row.elo, w: row.w, l: row.l, k: row.k, d: row.d, cal: row.cal ?? base.cal } : base;
    return { row, r, place: row?.place ?? lad?.me?.place ?? null, of: lad?.me?.of ?? rows.length, lad };
  }

  function countdown(se) {
    if (!se?.end) return `<b class="lb3-cd sm">${tr('lb3NoEnd')}</b>${se?.warmup && !se.warmup.started ? `<span class="mute">${se.warmup.start ? t('wuStartsAt', { d: fmtDT(se.warmup.start) }) : t('wuGoal', { n: se.warmup.players, g: se.warmup.goal })}</span>` : ''}`;
    const ms = Math.max(0, se.end - Date.now()), d = Math.floor(ms / 864e5), h = Math.floor(ms % 864e5 / 36e5);
    return `<b class="lb3-cd num">${d}<small>${tr('lb3D')}</small> ${h}<small>${tr('lb3H')}</small></b><span class="mute">${tr('lb3EndsOn', { d: fmtDate(se.end) })}</span>`;
  }
  function hero(mode, rows, clans) {
    const se = S.season, n = se?.n ?? S.stats?.season ?? 1, lad = ladOf(mode);
    const cnt = m => ladOf(m)?.me?.of ?? (m === S.lbRowsMode ? S.lbRows?.length : null);
    const myIn = m => ladOf(m)?.me?.place;
    const tab = (id, title, sub, ic, on, mine) => `<button class="lb3-tab ${on ? 'on' : ''}" data-lb3-tab="${id}"><i>${ic}</i><span class="lb3-tt">${title}${mine ? `<em>${tr('lb3Yours')}</em>` : ''}</span><span class="lb3-ts">${sub}</span></button>`;
    const total = isClans() ? tr('lb3Clans', { n: N(clans?.length ?? 0) }) : tr('lb3Players', { n: N(lad?.me?.of ?? rows.length) });
    const pool = poolOf(lad);
    const warm = se?.warmup && !se.warmup.started;
    return `<div class="card lb3-hero">
      <div class="lb3-hl">
        <span class="lb3-k"><i></i>${isClans() ? tr('lb3TabC') : tr('lb3Kicker')}</span>
        <h1>${isClans() ? tr('lb3TabC') : modeName(mode)}<span class="lb3-cnt">${total}</span></h1>
        <p class="mute">${isClans() ? tr('lb3IntroClan') : tr('lb3Intro', { m: se?.minMatches ?? 10 })}${!isClans() && lad ? ` <button class="lb3-a" data-lb3-rew>${tr('lb3Rewards')}${IC.chev}</button>` : ''}</p>
      </div>
      ${se ? `<div class="lb3-sbox ${isClans() ? 'one' : ''}"><div class="lb3-s1"><span class="lb3-k sm">${IC.clock}${tr('lb3Season', { n })} · <em>${esc(se.name || '')}</em>${warm ? ` <u>${tr('lb3Warm')}</u>` : ''}</span>${countdown(se)}</div>
        ${isClans() ? '' : `<div class="lb3-s2">${pool ? `<span class="mute">${tr('lb3Pool')} · ${modeName(mode)}</span><b class="lb3-pool num">$${pool}</b>` : ''}<span class="mute">${tr('lb3MinM', { n: se.minMatches ?? 10 })}</span></div>`}</div>` : ''}
      <div class="lb3-tabs">
        ${PUB_MODES.map(m => tab(m, modeName(m), `${cnt(m) != null ? tr('lb3Players', { n: N(cnt(m)) }) + ' · ' : ''}${m === '2v2' ? tr('lb3Tab2') : tr('lb3Tab1')}`, m === '1v1' ? IC.user : IC.users, !isClans() && mode === m, !!myIn(m))).join('')}
        ${tab('clans', tr('lb3TabC'), `${clans ? tr('lb3Clans', { n: N(clans.length) }) + ' · ' : ''}${tr('lb3TabCs')}`, IC.swords, isClans(), !!S.me.clan)}
      </div></div>`;
  }

  const stat = (h, v, cls = '') => `<div class="lb3-st ${cls}"><span>${h}</span><b class="num">${v}</b></div>`;
  function meCard(mode, rows) {
    const { r, place, of, lad } = meInfo(mode, rows);
    const cal = isCal(r), g = r.w + r.l, lvl = levelOf(r.elo);
    const top = rows.length;
    let prog = '';
    if (cal) {
      prog = `<span class="lb3-pl">${tr('lb3CalBar')}</span><b class="num">${r.cal}/5</b><div class="lb3-cbar">${[0, 1, 2, 3, 4].map(i => `<i class="${i < r.cal ? 'on' : ''}"></i>`).join('')}</div><span class="mute">${tr('lb3CalLeft', { n: 5 - r.cal })}</span>`;
    } else if (!place) {
      prog = `<span class="mute">${tr('lb3Hidden')}</span>`;
    } else if (place === 1) {
      const gap = rows[1] ? r.elo - rows[1].elo : null;
      prog = `<span class="lb3-pl">${tr('lb3Leader')}</span>${gap != null ? `<b class="num win">+${gap} ELO</b><span class="mute">${tr('lb3Lead')}</span>` : ''}`;
    } else {
      const T = [100, 10, 5, 3, 1].find(x => x < place), tgt = rows[T - 1];
      if (tgt) {
        const need = Math.max(1, tgt.elo - r.elo + 1), pct = Math.max(3, Math.min(100, r.elo / (tgt.elo + 1) * 100));
        prog = `<span class="lb3-pl">${T === 1 ? tr('lb3ToPlace', { n: 1 }) : tr('lb3ToTop', { n: T })}</span><b class="num">+${need} <small>ELO</small></b>
          <span class="num mute">${r.elo}</span><div class="lb3-bar"><i style="width:${pct}%"></i></div><span class="num mute">${tgt.elo + 1}</span>`;
      }
    }
    const se = S.season, rw = place ? rewardOf(lad, place) : null, sm = lad?.me?.matches ?? 0, min = se?.minMatches ?? 10;
    const hint = lad && se ? `<div class="lb3-hint"><i>${IC.gift}</i><div>
        ${rw ? `<b>${tr('lb3PrizeNow', { r: rewardTxt(rw) })}</b>` : lad.me?.toPrize ? `<b>${tr('lb3ToPrize', { n: lad.me.toPrize })}</b>` : `<b>${poolOf(lad) ? tr('lb3Pool') + ' · $' + poolOf(lad) : tr('lb3Rewards')}</b>`}
        <span class="mute">${sm >= min ? tr('lb3SeasonOk', { n: sm }) : tr('lb3SeasonM', { n: sm, m: min })}</span></div>
        <button class="btn ghost sm" data-lb3-rew>${tr('lb3Rewards')}</button></div>` : '';
    const where = cal ? `<b class="lb3-big">—</b><span class="mute">${tr('lb3Out')}</span>`
      : place ? `<b class="lb3-big num">#${N(place)}</b><span class="mute">${tr('lb3Of', { n: N(of) })}${place > top ? ' · ' + tr('lb3Out100') : ''}</span>`
      : `<b class="lb3-big">—</b><span class="mute">${tr('lb3Out')}</span>`;
    return `<div class="card lb3-me">
      <div class="lb3-mt">
        <div class="lb3-who" data-uid="${esc(S.me.id)}">${avaF(S.me, 'lb3-mav')}<div><div class="lb3-nk">${nickHtml(S.me)}</div><span class="mute">${modeName(mode)} · ${cal ? tr('lb3Cal', { n: r.cal }) : `LVL ${lvl}`}</span></div></div>
        <div class="lb3-where"><span class="lb3-k sm">${tr('lb3Place')}</span>${where}</div>
        <div class="lb3-sts">
          ${stat('ELO', cal ? '—' : r.elo, 'acc')}
          <div class="lb3-st"><span>${tr('lb3Lvl')}</span><b class="num"><img class="lvl" src="${lvlIc(r, lvl)}">${cal ? '?' : lvl}</b></div>
          ${stat(tr('lb3Kd'), g ? kd(r.k, r.d) : '—')}${stat(tr('lb3Matches'), g)}${stat(tr('lb3Wr'), g ? wrNum(r) + '%' : '—')}
        </div>
      </div>
      <div class="lb3-mb"><div class="lb3-prog">${prog}</div>${hint}</div></div>`;
  }

  function podCard(r, i, rows, lad) {
    const p = i + 1;
    if (!r) return `<div class="lb3-pod p${p} free"><span class="lb3-pp">${IC.crown}${tr('lb3PlaceN', { n: p })}</span><div class="lb3-pc"><div class="lb3-pa empty">${IC.user}</div><b>${tr('lb3Free')}</b><span class="mute">${tr('lb3FreeSub')}</span></div></div>`;
    const g = r.w + r.l, rw = rewardOf(lad, p);
    const above = rows[i - 1], below = rows[i + 1];
    const foot = p === 1 ? (below ? tr('lb3GapLead', { n: r.elo - below.elo }) : tr('lb3Alone')) : tr('lb3GapUp', { n: above.elo - r.elo + 1, p: p - 1 });
    return `<div class="lb3-pod p${p} click ${r.id === S.me.id ? 'me' : ''}" data-uid="${esc(r.id)}">
      <span class="lb3-pp">${IC.crown}${tr('lb3PlaceN', { n: p })}</span>
      <div class="lb3-pc">${window.kzCard3?.bg ? `<div class="lb3-pban lb3-pbg">${kzCard3.bg({ id: r.id, pbg: r.pbg })}</div>` : ''}
        <div class="lb3-ptop"><span class="lb3-plv"><img class="lvl" src="${lvlIc(r, r.lvl)}">${r.lvl}</span>${rw ? `<span class="lb3-prw" title="${esc(tr('lb3Rewards'))}">${IC.gift}${rewardTxt(rw)}</span>` : ''}</div>
        <div class="lb3-pa">${avaF(r, 'lb3-pav')}</div>
        <div class="lb3-pn">${nickHtml(r)}</div>
        <div class="lb3-pe"><b class="num">${r.elo}</b><span>ELO</span></div>
        <div class="lb3-pg"><span><i>${tr('lb3Kd')}</i><b class="num">${kd(r.k, r.d)}</b></span><span><i>${tr('lb3Matches')}</i><b class="num">${g}</b></span>
          <span><i>${tr('lb3Wl')}</i><b class="num"><em class="win">${r.w}</em>/<em class="lose">${r.l}</em></b></span><span><i>WR</i><b class="num">${wrNum(r)}%</b></span></div>
      </div>
      <div class="lb3-pf">${foot}</div></div>`;
  }
  function clanPod(c, i, list) {
    const p = i + 1;
    if (!c) return `<div class="lb3-pod p${p} free"><span class="lb3-pp">${IC.crown}${tr('lb3PlaceN', { n: p })}</span><div class="lb3-pc"><div class="lb3-pa empty">${IC.swords}</div><b>${tr('lb3Free')}</b><span class="mute">${tr('lb3FreeSubC')}</span></div></div>`;
    const cw = c.cw, g = cw.w + cw.l, above = list[i - 1], below = list[i + 1]?.cw?.cal == null ? list[i + 1] : null;
    const foot = p === 1 ? (below ? tr('lb3GapLead', { n: cw.elo - below.cw.elo }) : tr('lb3Alone')) : tr('lb3GapUp', { n: above.cw.elo - cw.elo + 1, p: p - 1 });
    return `<div class="lb3-pod p${p} click ${S.me.clan?.id === c.id ? 'me' : ''}" data-cid="${esc(c.id)}">
      <span class="lb3-pp">${IC.crown}${tr('lb3PlaceN', { n: p })}</span>
      <div class="lb3-pc">${c.banner ? bannerHtml(c.banner, 'lb3-pban') : ''}
        <div class="lb3-ptop"><span class="lb3-plv">${clanLvlIcon(cw.lvl, 22)}${cw.lvl}</span><span class="lb3-prw">${IC.users}${c.members}/${c.max}</span></div>
        <div class="lb3-pa cl">${clanIcon(c, 'lb3-cav')}</div>
        <div class="lb3-pn">${clanName(c)}</div>
        <div class="lb3-pe"><b class="num">${cw.elo}</b><span>ELO</span></div>
        <div class="lb3-pg"><span><i>${tr('lb3Wars')}</i><b class="num">${g}</b></span><span><i>WR</i><b class="num">${g ? Math.round(cw.w / g * 100) : 0}%</b></span>
          <span><i>${tr('lb3Wl')}</i><b class="num"><em class="win">${cw.w}</em>/<em class="lose">${cw.l}</em></b></span><span><i>${tr('lb3Power')}</i><b class="num">${c.power}</b></span></div>
      </div>
      <div class="lb3-pf">${foot}</div></div>`;
  }
  const podium = (cards, title) => `<div class="card lb3-podw"><span class="lb3-k">${title}</span><div class="lb3-pods">${[cards[1], cards[0], cards[2]].join('')}</div></div>`;

  function thresholds(list, eloOf, myPlace, myElo, total, foot) {
    const tiers = [1, 3, 5, 10, 25, 100].filter(n => n <= Math.max(10, total || 0) || n <= 10);
    const row = n => { const x = list[n - 1]; return `<div class="lb3-th ${myPlace && myPlace <= n ? 'in' : ''}"><span>TOP-${n}</span>${x ? `<b><small>${tr('lb3From', { n: '' })}</small><span class="num">${eloOf(x)}</span> <small>ELO</small></b>` : `<b class="free">${tr('lb3FreeTh')}</b>`}</div>`; };
    return `<div class="card lb3-thr"><span class="lb3-k">${tr('lb3Thr')}</span>
      ${tiers.map(row).join('')}
      ${myPlace || myElo != null ? `<div class="lb3-th you"><span>${tr('lb3You')}${myPlace ? ' · #' + N(myPlace) : ''}</span><b>${myElo != null ? `<span class="num">${myElo}</span> <small>ELO</small>` : '—'}</b></div>` : ''}
      <p class="mute lb3-tf">${foot}</p></div>`;
  }

  function records(mode) {
    const R = ST.rec[mode]?.data; if (!R) return '';
    const card = (title, x, line, ic) => `<div class="lb3-rc ${x ? 'click' : ''}" ${x ? `data-uid="${esc(x.uid)}"` : ''}><span class="lb3-rt">${ic}${title}</span>
      ${x ? `<div class="lb3-rw">${avaF(x.player)}<div><div class="lb3-rn">${nickHtml(x.player)}</div><small class="mute">${line(x)}</small></div></div>` : `<small class="mute">${t('ld_recNone')}</small>`}</div>`;
    const kdv = v => (+v || 0).toFixed(2);
    return `<div class="lb3-recs"><span class="lb3-k">${t('ld_records')}</span><div class="lb3-rg">
      ${card(t('ld_recKills'), R.kills, x => t('ld_killsIn', { k: x.v, map: mapName(x.map) }), IC.target)}
      ${card(t('ld_recStreak'), R.streak, x => t('ld_winsRow', { n: x.v }), IC.flame)}
      ${card(t('ld_recGain'), R.gain, x => t('ld_eloIn', { n: x.v, g: x.games }), IC.trend)}
      ${card(t('ld_recKd'), R.kd, x => t('ld_kdIn', { v: kdv(x.v), g: x.games }), IC.star)}</div></div>`;
  }

  function slice(list, myIdx) {
    const q = (S.lbSearch || '').trim().toLowerCase();
    if (q) return { items: list.filter(ST.match(q)), paged: false };
    if (ST.view === 'around' && myIdx >= 0) return { items: list.slice(Math.max(0, myIdx - 7), myIdx + 8), paged: false };
    const pages = Math.max(1, Math.ceil(list.length / ST.size));
    ST.page = Math.min(ST.page, pages - 1);
    return { items: list.slice(ST.page * ST.size, (ST.page + 1) * ST.size), paged: list.length > ST.size, pages };
  }
  function pRow(r, rows) {
    const g = r.w + r.l, above = rows[r.place - 2], cal = r.cal != null;
    return `<div class="lb3-tr click ${r.id === S.me.id ? 'me' : ''} ${r.place <= 3 ? 't' + r.place : ''} ${cal ? 'cal' : ''}" data-uid="${esc(r.id)}" data-place="${r.place}">
      ${bannerHtml(r.prem?.banner, 'lb3-rb')}
      <div class="lb3-c lb3-cn num">#${r.place}</div>
      <div class="lb3-c lb3-cpl">${avaF(r)}<div class="lb3-tn"><span class="lb3-nk">${nickHtml(r)}</span><small class="mute">${r.id === S.me.id ? `<em class="lb3-you">${tr('lb3You2')}</em>` : ''}${cal ? `<em class="lb3-calt">${t('la_calShort', { n: r.cal })}</em>` : ''}<span class="win">${r.w}W</span> · <span class="lose">${r.l}L</span></small></div></div>
      <div class="lb3-c lb3-clv"><img class="lvl" src="${lvlIc(r, r.lvl)}"><span class="num">${cal ? '?' : r.lvl}</span></div>
      <div class="lb3-c lb3-celo num">${r.elo}</div>
      <div class="lb3-c num">${kd(r.k, r.d)}</div>
      <div class="lb3-c num">${g}</div>
      <div class="lb3-c lb3-cwr"><span class="num">${wrNum(r)}%</span><div class="lb3-wb"><i style="width:${wrNum(r)}%"></i></div></div>
      <div class="lb3-c lb3-cgap num">${above ? `<span class="mute">+${above.elo - r.elo}</span>` : `<span class="lb3-crown">${IC.crown}</span>`}</div></div>`;
  }
  function cRow(c, list) {
    const cw = c.cw, cal = cw.cal != null, g = cw.w + cw.l, above = list[c.place - 2];
    return `<div class="lb3-tr click ${S.me.clan?.id === c.id ? 'me' : ''} ${!cal && c.place <= 3 ? 't' + c.place : ''} ${cal ? 'cal' : ''}" data-cid="${esc(c.id)}" data-place="${c.place}">
      <div class="lb3-c lb3-cn num">${cal ? '—' : '#' + c.place}</div>
      <div class="lb3-c lb3-cpl">${clanIcon(c, 'lb3-tcav', true)}<div class="lb3-tn"><span class="lb3-nk">${clanName(c)}</span><small class="mute">${esc(c.owner)}</small></div></div>
      <div class="lb3-c lb3-clv">${clanLvlIcon(cal ? 0 : cw.lvl, 22)}</div>
      <div class="lb3-c lb3-celo num">${cal ? `<em class="lb3-calt">${tr('lb3ClanCal', { n: cw.cal })}</em>` : cw.elo}</div>
      <div class="lb3-c num"><span class="win">${cw.w}</span>/<span class="lose">${cw.l}</span></div>
      <div class="lb3-c num">${c.members}<span class="mute">/${c.max}</span></div>
      <div class="lb3-c lb3-cwr"><span class="num">${g ? Math.round(cw.w / g * 100) : 0}%</span><div class="lb3-wb"><i style="width:${g ? cw.w / g * 100 : 0}%"></i></div></div>
      <div class="lb3-c lb3-cgap num">${cal ? '' : above && above.cw.cal == null ? `<span class="mute">+${above.cw.elo - cw.elo}</span>` : `<span class="lb3-crown">${IC.crown}</span>`}</div></div>`;
  }
  function tableHtml(mode, list, total) {
    const clans = isClans();
    const myIdx = clans ? list.findIndex(c => c.id === S.me.clan?.id) : list.findIndex(r => r.id === S.me.id);
    const { items, paged, pages } = slice(list, myIdx);
    const head = clans ? [tr('lb3Clan'), tr('lb3Lvl'), 'ELO', tr('lb3Wl'), tr('lb3Members'), tr('lb3Wr'), tr('lb3Gap')]
      : [tr('lb3Player'), tr('lb3Lvl'), 'ELO', tr('lb3Kd'), tr('lb3Matches'), tr('lb3Wr'), tr('lb3Gap')];
    const a = ST.page * ST.size + 1, b = Math.min(list.length, (ST.page + 1) * ST.size);
    return `<div class="lb3-th2 lb3-tr"><div class="lb3-c lb3-cn">#</div>${head.map((h, i) => `<div class="lb3-c ${['lb3-cpl', 'lb3-clv', 'lb3-celo', '', '', 'lb3-cwr', 'lb3-cgap'][i]}">${h}</div>`).join('')}</div>
      ${items.length ? items.map(x => clans ? cRow(x, list) : pRow(x, list)).join('') : `<div class="lb3-none mute">${list.length ? tr('lb3None') : clans ? tr('lb3EmptyC') : tr('lb3Empty')}</div>`}
      ${paged ? `<div class="lb3-pg2"><span class="mute num">${tr('lb3PageOf', { a, b, n: list.length })}</span><span class="grow"></span>
        <button class="lb3-pb" data-lb3-pg="-1" ${ST.page ? '' : 'disabled'}>${IC.left}${tr('lb3Prev')}</button>
        ${Array.from({ length: pages }, (_, i) => `<button class="lb3-pb n ${i === ST.page ? 'on' : ''}" data-lb3-pgn="${i}">${i + 1}</button>`).join('')}
        <button class="lb3-pb" data-lb3-pg="1" ${ST.page < pages - 1 ? '' : 'disabled'}>${tr('lb3Next')}${IC.chev}</button></div>` : ''}`;
  }
  function tableCard(mode, list, total) {
    const clans = isClans();
    const myIdx = clans ? list.findIndex(c => c.id === S.me.clan?.id) : list.findIndex(r => r.id === S.me.id);
    const myPlace = myIdx >= 0 ? list[myIdx].place : null;
    const max = list.length;
    return `<div class="card lb3-tbl">
      <div class="lb3-tb">
        <div class="lb3-tt2"><b>${clans ? tr('lb3TabC') : tr('lb3Table', { m: modeName(mode) })}</b><span class="mute">${clans ? tr('lb3TableSubC', { n: N(max) }) : tr('lb3TableSub', { s: max, n: N(total) })}</span></div>
        <label class="lb3-srch">${IC.search}<input id="lb-search" placeholder="${esc(clans ? tr('lb3SearchC') : tr('lb3Search'))}" autocomplete="off"></label>
        <div class="lb3-seg"><button data-lb3-view="top" class="${ST.view === 'top' ? 'on' : ''}">${tr('lb3Leaders')}</button><button data-lb3-view="around" class="${ST.view === 'around' ? 'on' : ''}" ${myIdx < 0 ? `disabled title="${esc(clans ? tr('lb3NoClan') : tr('lb3NotIn', { s: max }))}"` : ''}>${tr('lb3Around')}</button></div>
        <div class="lb3-jump"><span class="mute">${tr('lb3Jump')}</span><input id="lb3-jump" type="number" min="1" max="${max || 1}" placeholder="# 1–${max || 1}" ${max ? '' : 'disabled'}><button class="lb3-pb" data-lb3-jump ${max ? '' : 'disabled'}>${tr('lb3Go')}</button></div>
        ${myPlace ? `<button class="lb3-mine" data-lb3-mine>${tr('lb3Mine', { n: myPlace })}</button>` : ''}
        <div class="lb3-seg sz">${[25, 50, 100].map(z => `<button data-lb3-size="${z}" class="${ST.size === z ? 'on' : ''}">${z}</button>`).join('')}</div>
      </div>
      <div id="lb3-rows" class="lb3-rows ${clans ? 'cl' : ''}">${tableHtml(mode, list, total)}</div></div>`;
  }

  function draw(mode) {
    const clans = isClans(), list = clans ? (ST.clans || []) : (S.lbRows || []);
    ST.match = clans ? q => c => c.tag.toLowerCase().includes(q) || c.name.toLowerCase().includes(q) : q => r => r.nick.toLowerCase().includes(q);
    let body;
    if (clans) {
      const ranked = list.filter(c => c.cw?.cal == null);
      const mine = S.me.clan ? list.find(c => c.id === S.me.clan.id) : null;
      const myCard = mine ? (() => {
        const cw = mine.cw, cal = cw.cal != null, g = cw.w + cw.l;
        return `<div class="card lb3-me"><div class="lb3-mt">
          <div class="lb3-who" data-cid="${esc(mine.id)}"><span class="lb3-cbig">${clanIcon(mine, 'lb3-mcav', true)}</span><div><div class="lb3-nk">${clanName(mine)}</div><span class="mute">${tr('lb3TabC')}</span></div></div>
          <div class="lb3-where"><span class="lb3-k sm">${tr('lb3Place')}</span>${cal ? `<b class="lb3-big">—</b><span class="mute">${tr('lb3ClanCal', { n: cw.cal })}</span>` : `<b class="lb3-big num">#${mine.place}</b><span class="mute">${tr('lb3Of', { n: ranked.length })}</span>`}</div>
          <div class="lb3-sts">${stat('ELO', cal ? '—' : cw.elo, 'acc')}<div class="lb3-st"><span>${tr('lb3Lvl')}</span><b class="num">${clanLvlIcon(cal ? 0 : cw.lvl, 22)}${cal ? '?' : cw.lvl}</b></div>
            ${stat(tr('lb3Wars'), g)}${stat(tr('lb3Wr'), g ? Math.round(cw.w / g * 100) + '%' : '—')}${stat(tr('lb3Members'), `${mine.members}/${mine.max}`)}</div></div>
          ${cal ? `<div class="lb3-mb"><div class="lb3-prog"><span class="lb3-pl">${tr('lb3CalBar')}</span><b class="num">${cw.cal}/5</b><div class="lb3-cbar">${[0, 1, 2, 3, 4].map(i => `<i class="${i < cw.cal ? 'on' : ''}"></i>`).join('')}</div></div></div>` : ''}</div>`;
      })() : `<div class="card lb3-me lb3-noclan"><i>${IC.swords}</i><div><b>${tr('lb3NoClan')}</b><span class="mute">${tr('lb3NoClanSub')}</span></div><span class="grow"></span><button class="btn" data-lb3-clans>${tr('lb3ToClans')}</button></div>`;
      body = `${myCard}<div class="lb3-mid">${podium([0, 1, 2].map(i => clanPod(ranked[i], i, ranked)), tr('lb3Leaders') + ' · ' + tr('lb3TabC'))}
        ${thresholds(ranked, c => c.cw.elo, mine && mine.cw.cal == null ? mine.place : null, mine && mine.cw.cal == null ? mine.cw.elo : null, ranked.length, tr('lb3TotalC', { n: N(list.length), c: N(ranked.length) }))}</div>
        ${tableCard(mode, list, list.length)}`;
    } else {
      const lad = ladOf(mode), me = meInfo(mode, list);
      const total = lad?.me?.of ?? list.length;
      body = `${meCard(mode, list)}<div class="lb3-mid">${podium([0, 1, 2].map(i => podCard(list[i], i, list, lad)), tr('lb3Leaders') + ' · ' + modeName(mode))}
        ${thresholds(list, r => r.elo, me.place, isCal(me.r) ? null : me.r.elo, total, tr('lb3Total', { n: N(total), s: list.length }))}</div>
        ${records(mode)}${tableCard(mode, list, total)}`;
    }
    render(`<div class="lb3">${hero(mode, S.lbRows || [], ST.clans)}${body}</div>`);
    bind(mode);
  }

  function redrawRows(mode) {
    const box = $('#lb3-rows'); if (!box) return;
    const list = isClans() ? (ST.clans || []) : (S.lbRows || []);
    box.innerHTML = tableHtml(mode, list, ladOf(mode)?.me?.of ?? list.length);
    bindRows(box);
  }
  function bindRows(root) {
    root.querySelectorAll('[data-uid]').forEach(el => el.onclick = () => go('profile', el.dataset.uid));
    root.querySelectorAll('[data-cid]').forEach(el => el.onclick = () => go('clans', el.dataset.cid));
    root.querySelectorAll('[data-lb3-pg]').forEach(b => b.onclick = () => { ST.page += +b.dataset.lb3Pg; redrawRows(S.lbMode); $('.lb3-tbl')?.scrollIntoView({ block: 'start', behavior: 'smooth' }); });
    root.querySelectorAll('[data-lb3-pgn]').forEach(b => b.onclick = () => { ST.page = +b.dataset.lb3Pgn; redrawRows(S.lbMode); $('.lb3-tbl')?.scrollIntoView({ block: 'start', behavior: 'smooth' }); });
  }
  function jumpTo(place) {
    const list = isClans() ? (ST.clans || []) : (S.lbRows || []);
    const idx = list.findIndex(x => x.place === place); if (idx < 0) return;
    S.lbSearch = ''; const s = $('#lb-search'); if (s) s.value = '';
    ST.view = 'top'; ST.page = Math.floor(idx / ST.size);
    document.querySelectorAll('[data-lb3-view]').forEach(b => b.classList.toggle('on', b.dataset.lb3View === 'top'));
    redrawRows(S.lbMode);
    const el = document.querySelector(`#lb3-rows [data-place="${place}"]`);
    if (el) { el.scrollIntoView({ block: 'center', behavior: 'smooth' }); el.classList.add('flash'); setTimeout(() => el.classList.remove('flash'), 1800); }
  }
  function bind(mode) {
    const view = $('#view'); if (!view) return;
    bindRows(view);
    view.querySelectorAll('[data-lb3-tab]').forEach(b => b.onclick = () => {
      const id = b.dataset.lb3Tab; ST.page = 0; ST.view = 'top'; S.lbSearch = '';
      if (id === 'clans') { ST.tab = 'clans'; ls('kz-lb3-tab', 'clans'); } else { ST.tab = null; ls('kz-lb3-tab', ''); S.lbMode = id; }
      renderLeaderboard();
    });
    view.querySelectorAll('[data-lb3-view]').forEach(b => b.onclick = () => {
      if (b.disabled) return;
      ST.view = b.dataset.lb3View; ST.page = 0; S.lbSearch = ''; const s = $('#lb-search'); if (s) s.value = '';
      view.querySelectorAll('[data-lb3-view]').forEach(x => x.classList.toggle('on', x === b)); redrawRows(mode);
      if (ST.view === 'around') setTimeout(() => document.querySelector('#lb3-rows .lb3-tr.me')?.scrollIntoView({ block: 'center', behavior: 'smooth' }), 30);
    });
    view.querySelectorAll('[data-lb3-size]').forEach(b => b.onclick = () => {
      ST.size = +b.dataset.lb3Size; ST.page = 0; ls('kz-lb3-size', String(ST.size));
      view.querySelectorAll('[data-lb3-size]').forEach(x => x.classList.toggle('on', x === b)); redrawRows(mode);
    });
    const s = $('#lb-search');
    if (s) { s.value = S.lbSearch || ''; s.oninput = () => { S.lbSearch = s.value; ST.page = 0; redrawRows(mode); }; }
    const j = $('#lb3-jump');
    const doJump = () => { const n = parseInt(j?.value, 10); if (n > 0) jumpTo(n); };
    if (j) j.onkeydown = e => { if (e.key === 'Enter') doJump(); };
    view.querySelector('[data-lb3-jump]')?.addEventListener('click', doJump);
    view.querySelector('[data-lb3-mine]')?.addEventListener('click', () => {
      const list = isClans() ? (ST.clans || []) : (S.lbRows || []);
      const me = isClans() ? list.find(c => c.id === S.me.clan?.id) : list.find(r => r.id === S.me.id);
      if (me) jumpTo(me.place);
    });
    view.querySelectorAll('[data-lb3-rew]').forEach(b => b.onclick = e => {
      e.stopPropagation(); ls('kz-season-open', '1'); S.seasonLad = mode; ls('kz-season-lad', mode); go('play');
      setTimeout(() => document.querySelector('#view .srew')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350);
    });
    view.querySelector('[data-lb3-clans]')?.addEventListener('click', () => go('clans'));
  }

  const _prev = renderLeaderboard;
  renderLeaderboard = async function () {
    if (!window.KZ_V3?.()) return _prev.apply(this, arguments);
    const mode = S.lbMode = pubMode(S.lbMode), tab = ST.tab;
    const fresh = isClans() ? !!ST.clans : S.lbRows && S.lbRowsMode === mode;
    if (fresh) draw(mode); else render(`<div class="lb3"><div class="card lb3-hero lb3-load"><span class="lb3-k"><i></i>${t('leaderboard')}</span><p class="mute">${t('loading')}</p></div></div>`);
    const [rows, se] = await Promise.all([
      isClans() ? null : api('/api/leaderboard?mode=' + mode).catch(e => (toast(e.message, true), null)),
      api('/api/season').catch(() => null),
      loadClans(isClans()),
      isClans() ? null : loadRecords(mode),
    ]);
    if (S.page !== 'leaderboard' || S.lbMode !== mode || ST.tab !== tab) return;
    if (se) S.season = se;
    if (rows) { S.lbRows = rows; S.lbRowsMode = mode; } else if (!isClans() && S.lbRowsMode !== mode) { S.lbRows = []; S.lbRowsMode = mode; }
    const f = document.activeElement;
    if (fresh && f && (f.id === 'lb-search' || f.id === 'lb3-jump')) { redrawRows(mode); return; }
    const y = $('#view')?.scrollTop;
    draw(mode);
    if (fresh && y != null && $('#view')) $('#view').scrollTop = y;
  };
})();

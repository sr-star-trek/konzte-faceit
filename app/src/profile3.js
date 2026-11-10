(() => {
  const L = {
    en: {
      pf3_eloByMatch: 'ELO by match', pf3_noGraph: 'The graph appears after the second match', pf3_lastN: 'Last {n} matches', pf3_eloSum: 'ELO',
      pf3_mapAct: 'Map activity', pf3_mapSubWr: 'Winrate on played maps · {m}', pf3_mapSubAvg: 'Kills per match on maps · last {n} matches', pf3_mapSubKd: 'K/D on maps · last {n} matches',
      pf3_tWr: 'W-R', pf3_tAvg: 'AVG', pf3_tKd: 'K-D', pf3_noMaps: 'No played maps yet',
      pf3_place: 'Place · {m}', pf3_of: 'of {n}', pf3_placeNo: 'not in ladder', pf3_placeCal: 'after calibration', pf3_clanWars: 'clan wars',
      pf3_noClan: 'No clan', pf3_noClanSub: 'Find a clan on the Clans page', pf3_members: 'Members {n}/{m}', pf3_role: 'Role', pf3_power: 'Power',
      pf3_win: 'Wins', pf3_lose: 'Losses', pf3_kd: 'K/D', pf3_avg: 'AVG', pf3_game: 'Games', pf3_wr: 'W/R',
      pf3_achOf: '{a} of {b}', pf3_streaks: 'Streaks', pf3_best: 'Best', pf3_now: 'Now', pf3_wins: 'wins', pf3_losses: 'losses',
      pf3_recent: 'Recent matches', pf3_date: 'Date', pf3_res: 'Result', pf3_score: 'Score', pf3_map: 'Map', pf3_all: 'Show all · {n}', pf3_less: 'Collapse',
      pf3_pun: 'Punishments', pf3_punNone: 'No punishments', pf3_punNoneSub: 'Nothing active', pf3_punActive: 'Active', pf3_ban: 'Account ban', pf3_forever: 'permanent', pf3_until: 'until {d}',
      pf3_calT: 'Calibration {n}/5', pf3_calS: '{n} more matches — then level and ELO open',
      pf3_minElo: 'from {e}', pf3_toNext: '{n} ELO to next level', pf3_max: 'Max level reached', pf3_emptyMe: 'Play your first {m} match — stats fill in by themselves', pf3_play: 'Play {m}',
      pf3_pre: 'Pre-season', pf3_allTime: 'All time', pf3_sNow: 'now', pf3_sGames: '{n} games', pf3_peak: 'Peak', pf3_sStart: 'Start', pf3_sDelta: 'Over the season', pf3_final: 'final standings', pf3_noSeason: 'No {m} matches in this season', pf3_seasonEnd: 'ELO at season end', pf3_noFinal: 'no final table',
    },
    uk: {
      pf3_eloByMatch: 'ELO по матчах', pf3_noGraph: 'Графік з’явиться після другого матчу', pf3_lastN: 'Останні {n} матчів', pf3_eloSum: 'ELO',
      pf3_mapAct: 'Активність по картах', pf3_mapSubWr: 'Вінрейт на зіграних картах · {m}', pf3_mapSubAvg: 'Вбивств за матч на картах · останні {n} матчів', pf3_mapSubKd: 'K/D на картах · останні {n} матчів',
      pf3_tWr: 'W-R', pf3_tAvg: 'AVG', pf3_tKd: 'K-D', pf3_noMaps: 'Ще немає зіграних карт',
      pf3_place: 'Місце · {m}', pf3_of: 'з {n}', pf3_placeNo: 'поза рейтингом', pf3_placeCal: 'після калібрування', pf3_clanWars: 'клан-вари',
      pf3_noClan: 'Без клану', pf3_noClanSub: 'Знайди клан на сторінці «Клани»', pf3_members: 'Учасники {n}/{m}', pf3_role: 'Роль', pf3_power: 'Сила',
      pf3_win: 'Перемоги', pf3_lose: 'Поразки', pf3_kd: 'K/D', pf3_avg: 'AVG', pf3_game: 'Ігри', pf3_wr: 'W/R',
      pf3_achOf: '{a} з {b}', pf3_streaks: 'Серії', pf3_best: 'Найкраща', pf3_now: 'Зараз', pf3_wins: 'перемог', pf3_losses: 'поразок',
      pf3_recent: 'Недавні матчі', pf3_date: 'Дата', pf3_res: 'Результат', pf3_score: 'Рахунок', pf3_map: 'Карта', pf3_all: 'Показати всі · {n}', pf3_less: 'Згорнути',
      pf3_pun: 'Покарання', pf3_punNone: 'Покарань немає', pf3_punNoneSub: 'Нічого не діє', pf3_punActive: 'Діє', pf3_ban: 'Блокування акаунта', pf3_forever: 'назавжди', pf3_until: 'до {d}',
      pf3_calT: 'Калібрування {n}/5', pf3_calS: 'Ще {n} матч(ів) — і відкриються рівень та ELO',
      pf3_minElo: 'від {e}', pf3_toNext: '{n} ELO до наступного рівня', pf3_max: 'Максимальний рівень', pf3_emptyMe: 'Зіграй перший матч {m} — статистика заповниться сама', pf3_play: 'Грати {m}',
      pf3_pre: 'Передсезоння', pf3_allTime: 'Весь час', pf3_sNow: 'зараз', pf3_sGames: '{n} ігор', pf3_peak: 'Пік', pf3_sStart: 'Старт', pf3_sDelta: 'За сезон', pf3_final: 'підсумкова таблиця', pf3_noSeason: 'У цьому сезоні немає матчів {m}', pf3_seasonEnd: 'ELO на кінець сезону', pf3_noFinal: 'без підсумкової таблиці',
    },
    ru: {
      pf3_eloByMatch: 'ELO по матчам', pf3_noGraph: 'График появится после второго матча', pf3_lastN: 'Последние {n} матчей', pf3_eloSum: 'ELO',
      pf3_mapAct: 'Активность по картам', pf3_mapSubWr: 'Винрейт на сыгранных картах · {m}', pf3_mapSubAvg: 'Убийств за матч на картах · последние {n} матчей', pf3_mapSubKd: 'K/D на картах · последние {n} матчей',
      pf3_tWr: 'W-R', pf3_tAvg: 'AVG', pf3_tKd: 'K-D', pf3_noMaps: 'Ещё нет сыгранных карт',
      pf3_place: 'Место · {m}', pf3_of: 'из {n}', pf3_placeNo: 'вне рейтинга', pf3_placeCal: 'после калибровки', pf3_clanWars: 'клан-вары',
      pf3_noClan: 'Без клана', pf3_noClanSub: 'Найди клан на странице «Кланы»', pf3_members: 'Участники {n}/{m}', pf3_role: 'Роль', pf3_power: 'Сила',
      pf3_win: 'Победы', pf3_lose: 'Поражения', pf3_kd: 'K/D', pf3_avg: 'AVG', pf3_game: 'Игры', pf3_wr: 'W/R',
      pf3_achOf: '{a} из {b}', pf3_streaks: 'Серии', pf3_best: 'Лучшая', pf3_now: 'Сейчас', pf3_wins: 'побед', pf3_losses: 'поражений',
      pf3_recent: 'Недавние матчи', pf3_date: 'Дата', pf3_res: 'Результат', pf3_score: 'Счёт', pf3_map: 'Карта', pf3_all: 'Показать все · {n}', pf3_less: 'Свернуть',
      pf3_pun: 'Наказания', pf3_punNone: 'Наказаний нет', pf3_punNoneSub: 'Ничего не действует', pf3_punActive: 'Действует', pf3_ban: 'Блокировка аккаунта', pf3_forever: 'навсегда', pf3_until: 'до {d}',
      pf3_calT: 'Калибровка {n}/5', pf3_calS: 'Ещё {n} матч(ей) — и откроются уровень и ELO',
      pf3_minElo: 'от {e}', pf3_toNext: '{n} ELO до следующего уровня', pf3_max: 'Максимальный уровень', pf3_emptyMe: 'Сыграй первый матч {m} — статистика заполнится сама', pf3_play: 'Играть {m}',
      pf3_pre: 'Предсезонье', pf3_allTime: 'Всё время', pf3_sNow: 'сейчас', pf3_sGames: '{n} игр', pf3_peak: 'Пик', pf3_sStart: 'Старт', pf3_sDelta: 'За сезон', pf3_final: 'итоговая таблица', pf3_noSeason: 'В этом сезоне нет матчей {m}', pf3_seasonEnd: 'ELO на конец сезона', pf3_noFinal: 'без итоговой таблицы',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k], L[k]);
  try { Object.assign(SERVER_ERRORS.uk ||= {}, { 'Season not found': 'Сезон не знайдено' }); Object.assign(SERVER_ERRORS.ru ||= {}, { 'Season not found': 'Сезон не найден' }); } catch {}

  const SC = new Map();
  async function seasonData(id, season, mode) {
    const key = `${id}|${season ?? ''}|${mode}`, hit = SC.get(key);
    if (hit && Date.now() - hit.at < 60_000) return hit.v;
    const v = await api(`/api/profile/season?id=${encodeURIComponent(id)}&mode=${mode}${season != null ? '&season=' + season : ''}`).catch(() => null);
    if (v) SC.set(key, { at: Date.now(), v });
    return v;
  }
  const seasLabel = s => s === 'all' || s?.n === 'all' ? t('pf3_allTime') : s.pre || s.n === 0 ? t('pf3_pre') : t('season', { n: s.n }) + (s.name ? ' · ' + esc(s.name) : '');
  const sdLabel = sd => sd.season === 'all' ? t('pf3_allTime') : seasLabel({ n: sd.season, name: sd.name, pre: sd.pre });
  function seasonDd(sd, mode) {
    const opts = [...sd.seasons].reverse().map(s => ({ v: s.n, lab: seasLabel(s), sub: s.cur ? t('pf3_sNow') : t('pf3_sGames', { n: s.games?.[mode] || 0 }) }));
    opts.push({ v: 'all', lab: t('pf3_allTime'), sub: '' });
    const cur = sdLabel(sd);
    return `<div class="pf3-sdd"><button class="pf3-season pf3-sbtn" id="pf3-sbtn" type="button">${cur}<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>
      <div class="pf3-smenu" id="pf3-smenu" hidden>${opts.map(o => `<button type="button" data-pf3s="${o.v}" class="${String(o.v) === String(sd.season) ? 'on' : ''}"><span>${o.lab}</span>${o.sub ? `<small>${o.sub}</small>` : ''}</button>`).join('')}</div></div>`;
  }

  const I = d => `<svg viewBox="0 0 24 24" class="pf3-ic">${d}</svg>`;
  const IC = {
    share: I('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),
    cmp: I('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    add: I('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.7-3.6 3.3-5.5 6.5-5.5s5.8 1.9 6.5 5.5M19 8v6M16 11h6"/>'),
    edit: I('<path d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4"/>'),
    flag: I('<path d="M5 21V4M5 4h12l-2.5 4.5L17 13H5"/>'),
    party: I('<circle cx="9" cy="8" r="3.2"/><path d="M3 19c.6-3.3 3-5 6-5s5.4 1.7 6 5"/><circle cx="16.5" cy="9" r="2.6"/><path d="M15.5 14.2c2.6-.3 4.8 1.2 5.5 4.3"/>'),
    img: I('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 16l5-5 4 4 3-3 6 6"/>'),
    shield: I('<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'),
    ban: I('<circle cx="12" cy="12" r="8.5"/><path d="M6 6l12 12"/>'),
    flagc: I('<path d="M5 21V4M5 4h12l-2.5 4.5L17 13H5"/>'),
    chev: I('<path d="M9 6l6 6-6 6"/>'),
    flame: I('<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 1 1 2 2 2 4 1-2 1-4 1-7z"/>'),
    trophy: I('<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8"/>'),
  };
  const kdNum = (k, d) => (d ? k / d : k);
  const dShort = ts => new Date(ts).toLocaleDateString(LOCALE?.[LANG] || undefined, { day: '2-digit', month: '2-digit' });
  const tShort = ts => new Date(ts).toLocaleTimeString(LOCALE?.[LANG] || undefined, { hour: '2-digit', minute: '2-digit' });

  function eloChart(ms) {
    const pts = ms.filter(h => h.elo != null).slice(0, 40).reverse();
    if (pts.length) pts.unshift({ id: null, elo: pts[0].elo - (pts[0].delta || 0), delta: 0, at: pts[0].at });
    if (pts.length < 3) return `<div class="pf3-note">${t('pf3_noGraph')}</div>`;
    const W = 320, H = 150, PL = 34, PR = 8, PT = 10, PB = 20;
    const vals = pts.map(p => p.elo);
    let lo = Math.min(...vals), hi = Math.max(...vals);
    const pad = Math.max(6, (hi - lo) * .12); lo = Math.floor(lo - pad); hi = Math.ceil(hi + pad);
    const x = i => PL + i * (W - PL - PR) / (pts.length - 1), y = v => PT + (1 - (v - lo) / (hi - lo || 1)) * (H - PT - PB);
    const d = pts.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.elo).toFixed(1)}`).join('');
    const last = pts[pts.length - 1];
    const ticks = [hi, Math.round((hi + lo) / 2), lo];
    return `<svg class="pf3-elo-svg" viewBox="0 0 ${W} ${H}">
      <defs><linearGradient id="pf3g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" class="s0"/><stop offset="1" class="s1"/></linearGradient></defs>
      ${ticks.map(v => `<line class="gl" x1="${PL}" x2="${W - PR}" y1="${y(v)}" y2="${y(v)}"/><text x="${PL - 6}" y="${y(v) + 3.5}" text-anchor="end">${v}</text>`).join('')}
      <text x="${PL}" y="${H - 4}">${dShort(pts[1].at)}</text><text x="${W - PR}" y="${H - 4}" text-anchor="end">${dShort(last.at)}</text>
      <path class="ar" d="${d}L${x(pts.length - 1)},${H - PB}L${x(0)},${H - PB}Z"/><path class="ln" d="${d}"/>
      ${pts.map((p, i) => p.id == null ? '' : `<circle cx="${x(i)}" cy="${y(p.elo)}" r="${p === last ? 4 : 2.4}" class="${p === last ? 'last' : p.delta >= 0 ? 'w' : 'l'}" data-tip="#${p.id} · ${p.elo} ELO (${sign(p.delta)})"/>`).join('')}</svg>`;
  }

  function mapVals(maps, ms, kind) {
    const by = {};
    for (const h of ms) { const s = by[h.map] ||= { n: 0, k: 0, d: 0 }; s.n++; s.k += h.k; s.d += h.d; }
    return MAPS.map(m => {
      const s = maps[m] || { w: 0, l: 0 }, n = s.w + s.l, b = by[m];
      if (kind === 'wr') return { m, v: n ? s.w / n * 100 : 0, has: n > 0, txt: n ? `${Math.round(s.w / n * 100)}% · ${s.w}–${s.l}` : '–' };
      if (kind === 'avg') return { m, v: b ? b.k / b.n : 0, has: !!b, txt: b ? `${(b.k / b.n).toFixed(1)} · ${b.n}` : '–' };
      return { m, v: b ? kdNum(b.k, b.d) : 0, has: !!b, txt: b ? kd(b.k, b.d) : '–' };
    });
  }
  function radar(rows, kind) {
    if (!rows.some(r => r.has)) return `<div class="pf3-note pf3-radnote">${t('pf3_noMaps')}</div>`;
    const W = 320, H = 280, cx = W / 2, cy = H / 2 + 4, R = 92, n = rows.length;
    const max = kind === 'wr' ? 100 : Math.max(kind === 'kd' ? 2 : 1, ...rows.map(r => r.v));
    const ang = i => -Math.PI / 2 + i * 2 * Math.PI / n;
    const pt = (i, f) => [cx + Math.cos(ang(i)) * R * f, cy + Math.sin(ang(i)) * R * f];
    const ring = f => rows.map((_, i) => pt(i, f).map(v => v.toFixed(1)).join(',')).join(' ');
    const poly = rows.map((r, i) => pt(i, Math.max(.03, Math.min(1, r.v / max))).map(v => v.toFixed(1)).join(',')).join(' ');
    return `<svg class="pf3-radar" viewBox="0 0 ${W} ${H}">
      ${[.25, .5, .75, 1].map(f => `<polygon class="rg" points="${ring(f)}"/>`).join('')}
      ${rows.map((_, i) => { const [x, y] = pt(i, 1); return `<line class="rx" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`; }).join('')}
      <polygon class="rp" points="${poly}"/>
      ${rows.map((r, i) => { const [x, y] = pt(i, Math.max(.03, Math.min(1, r.v / max))); return r.has ? `<circle class="rd" cx="${x}" cy="${y}" r="3.2" data-tip="${esc(mapName(r.m) + ' — ' + r.txt)}"/>` : ''; }).join('')}
      ${rows.map((r, i) => { const [x, y] = pt(i, 1.24), a = Math.cos(ang(i)); return `<text class="rl ${r.has ? '' : 'off'}" x="${x}" y="${y}" text-anchor="${a > .3 ? 'start' : a < -.3 ? 'end' : 'middle'}" dominant-baseline="middle" data-tip="${esc(mapName(r.m) + ' — ' + r.txt)}">${esc(mapName(r.m))}</text>`; }).join('')}
    </svg>`;
  }

  const _prev = renderProfile;
  renderProfile = async function () {
    if (!window.KZ_V3?.()) return _prev.apply(this, arguments);
    const id = S.profileId;
    const p = S.profCache?.id === id ? S.profCache : await api('/api/profile?id=' + encodeURIComponent(id)).catch(e => (toast(e.message, true), null));
    if (!p || S.page !== 'profile' || S.profileId !== id) return;
    S.profCache = p;
    if (!S.profMode || !profModes(p).includes(S.profMode)) S.profMode = bestProfMode(p);
    const mode = S.profMode, modeL = modeX(mode).replace(/ /g, '');
    if (S.pf3SeasFor !== id) { S.pf3SeasFor = id; S.pf3Seas = null; }
    const sd = await seasonData(id, S.pf3Seas, mode);
    if (S.page !== 'profile' || S.profileId !== id || S.profMode !== mode) return;
    const past = !!sd && sd.season !== 'all' && !sd.cur;
    const live = p['r' + mode] || { elo: 1000, w: 0, l: 0, k: 0, d: 0 };
    const r = sd ? { ...live, w: sd.w, l: sd.l, k: sd.k, d: sd.d } : live;
    const cal = !past && isCal(live);
    const eloV = past ? sd.elo?.end ?? null : live.elo;
    const lvl = past ? levelOf(eloV ?? 0) : live.lvl ?? levelOf(live.elo);
    const nx = past ? LEVELS[lvl + 1] : live.next !== undefined ? live.next : LEVELS[lvl + 1], mn = past ? LEVELS[lvl] ?? 0 : live.min ?? LEVELS[lvl] ?? 0;
    const pct = eloV == null ? 0 : nx ? Math.max(0, Math.min(100, (eloV - mn) / (nx - mn) * 100)) : 100;
    const ms = sd ? sd.matches : p.matches.filter(h => h.mode === mode);
    const mapsSel = sd ? sd.maps : mapsOf(p, mode);
    const st = streaks(ms);
    const games = r.w + r.l;
    const isMe = p.id === S.me.id;
    const myTier = S.me.premium?.tier;
    const banner = p.prem?.banner;
    const achs = p.achievements || { list: [] };
    const friend = S.live?.friends?.list?.some(x => x.id === p.id);
    const canCmp = !isMe && (friend || myTier === 'plus' || S.me.staff || S.me.admin);

    const primary = isMe ? `<button class="btn sm" data-go2="inventory">${IC.edit}${t('p2_editLook')}</button>
        <button class="btn ghost sm" id="p2-share">${IC.share}${t('p2_share')}</button>
        <button class="btn ghost sm" id="p-bg">${IC.img}${myTier ? '' : '👑 '}${t('profileBg')}</button>`
      : `${friend ? '' : S.live?.friends?.sent?.includes(p.id) ? `<span class="tag pf3-sent">${t('requestSent')}</span>` : `<button class="btn sm" data-fr-add="${p.id}">${IC.add}${t('addFriend')}</button>`}
        <button class="btn ${friend ? '' : 'ghost'} sm" data-invite="${p.id}">${IC.party}${t('inviteParty')}</button>
        ${canCmp ? `<button class="btn ghost sm" id="p2-cmp">${IC.cmp}${t('compare')}</button>` : ''}
        <button class="btn ghost sm" id="p2-share">${IC.share}${t('p2_share')}</button>
        <button class="btn ghost sm pf3-rep" id="p-report">${IC.flag}${t('report')}</button>`;
    const extra = `${S.me.admin && window.openPlayerEditor ? `<button class="btn ghost sm" id="p-owner">✎ ${t('pe_btn')}</button>` : ''}
        ${(S.me.staff || S.me.admin) && !isMe ? (p.ban ? `<button class="btn sm" id="p-unban">${t('unban')}</button>` : `<button class="btn red sm" id="p-ban">${t('ban')}</button>`) : ''}
        ${S.me.staff && !S.me.admin ? `<button class="btn ghost sm" id="p-edit">${t('edit')}</button>` : ''}
        ${isMe && myTier && !S.me.admin ? `<button class="btn ghost sm" id="p-nick" ${!(S.me.freeNicks > 0) ? `disabled title="${t('nickFreeUsed')}"` : `title="${t('nickFreeLeft', { n: S.me.freeNicks })}"`}>${t('changeNick')}</button>` : ''}`.trim();

    const head = `<div class="pbanner pf3-head ${banner ? 'has-b' : ''}">${bannerHtml(banner, 'pb-art')}
      <div class="pactions pf3-pact"><div class="seg sm">${profModes(p).map(m => `<button data-pm="${m}" class="${mode === m ? 'on' : ''}">${modeX(m)}</button>`).join('')}</div>
        ${extra ? `<button class="btn ghost sm pmore" id="p-more" title="${t('more')}"><svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg></button><div class="pmenu" id="p-menu" hidden>${extra}</div>` : ''}</div>
      <div class="phead">
        <div class="pava">${p.ban && typeof banAva === 'function' ? banAva(p) : avaF(p, 'lg')}${p.prem?.emblem && !p.ban ? emblemHtml(p.prem.emblem, 'big') : ''}</div>
        <div class="pf3-who"><h1>${nickHtml({ ...p, prem: p.prem && { ...p.prem, emblem: '' } })}</h1>
          <div class="ids">ID: <span class="gid">${esc(p.gameId)}</span>${p.name ? ` · Discord: <b>${esc(p.name)}</b>` : ''} · ${t('since', { d: fmtDate(p.created) })}</div>
          <div class="tags">${p.staff ? `<span class="tag">${t('staffTag')}</span>` : ''}${p.ban ? `<span class="tag red ban-reason" title="${esc(p.ban.reason || '')}">${t('bannedTag')}${p.ban.reason ? ': ' + esc(p.ban.reason) : ''}</span>` : ''}</div>
          <div class="pf3-acts">${primary}</div></div>
      </div></div>`;

    const se = S.season, lads = se?.ladders || [];
    const seasTag = sd ? seasonDd(sd, mode) : se ? `<span class="pf3-season">${t('season', { n: se.season ?? se.n ?? 1 })}${se.name ? ' · ' + esc(se.name) : ''}</span>` : '';
    const se2 = sd?.elo, sline = se2 && sd.season === 'all' ? `<div class="pf3-sline"><span>${t('pf3_peak')} <b>${se2.peak}</b></span></div>`
      : se2 ? `<div class="pf3-sline"><span>${t('pf3_sStart')} <b>${se2.start}</b></span><span>${t('pf3_peak')} <b>${se2.peak}</b></span><span>${t('pf3_sDelta')} <b class="${se2.delta >= 0 ? 'win' : 'lose'}">${sign(se2.delta)}</b></span>${past ? `<span class="mute">${t('pf3_seasonEnd')}</span>` : ''}</div>` : '';
    const eloCard = cal ? `<div class="pf3-elo"><img class="pf3-lv" src="assets/lvl/cal.svg" alt="">
        <div class="pf3-eb"><div class="pf3-er"><b>${r.cal}<small>/5</small></b><span class="pf3-h">${t('pf3_calT', { n: r.cal })}</span>${seasTag}</div>
          <div class="pf3-bar"><i style="width:${r.cal * 20}%"></i></div>
          <div class="pf3-bl"><span>0</span><span>${t('pf3_calS', { n: 5 - r.cal })}</span><span>5</span></div>${sline}</div></div>`
      : `<div class="pf3-elo"><img class="pf3-lv" src="${lvlImg(lvl)}" alt="">
        <div class="pf3-eb"><div class="pf3-er"><b>${eloV ?? '—'}<small>ELO</small></b><span class="pf3-h">${t('level', { n: lvl })}</span>${seasTag}</div>
          <div class="pf3-bar"><i style="width:${pct}%"></i></div>
          <div class="pf3-bl"><span>${mn}</span><span>${past ? '' : nx ? t('pf3_toNext', { n: nx - eloV }) : t('pf3_max')}</span><span>${nx ?? '—'}</span></div>${sline}</div></div>`;
    const place = m => {
      const sp = past ? (m === mode ? sd.place : null) : null;
      const rk = past ? sp?.place ?? null : p['rank' + m], rm = p['r' + m], of = past ? sp?.of : lads.find(l => l.ladder === m)?.me?.of;
      const sub = past ? (rk ? (of ? t('pf3_of', { n: of }) + ' · ' : '') + t('pf3_final') : sp ? t('pf3_placeNo') : t('pf3_noFinal')) : rk ? (of ? t('pf3_of', { n: of }) : '') : isCal(rm) ? t('pf3_placeCal') : t('pf3_placeNo');
      return `<div class="pf3-pl ${m === mode ? 'on' : ''} ${rk && rk <= 3 ? 'top' : ''}" data-pm="${m}"><span>${t('pf3_place', { m: modeX(m).replace(/ /g, '') })}${m === '5v5' ? ` <em>${t('pf3_clanWars')}</em>` : ''}</span><b>${rk ? '#' + rk : '—'}</b><small>${sub}</small></div>`;
    };
    const placeModes = profModes(p);
    const eloRow = `<div class="pf3-elorow">${eloCard}<div class="pf3-places" style="--n:${placeModes.length}">${placeModes.map(place).join('')}</div></div>`;

    const c = p.clan;
    const clanTile = c ? `<button class="pf3-clan" id="pf3-clan">${typeof clanIcon === 'function' ? clanIcon(c, 'pf3-cli') : ''}
        <div class="pf3-cln"><b>${typeof clanName === 'function' ? clanName(c) : esc(`[${c.tag}] ${c.name}`)}</b>
          <span>${t('pf3_members', { n: c.members, m: c.max ?? '—' })}</span>${c.role ? `<span>${t('pf3_role')}: <b>${typeof ROLE_T === 'function' ? ROLE_T(c.role) : esc(c.role)}</b></span>` : ''}</div>
        ${c.power != null ? `<div class="pf3-clp"><small>${t('pf3_power')}</small><b>${c.power}</b></div>` : ''}</button>`
      : `<div class="pf3-clan none"><i class="pf3-cli0">${IC.flagc}</i><div class="pf3-cln"><b>${t('pf3_noClan')}</b>${isMe ? `<span>${t('pf3_noClanSub')}</span>` : ''}</div></div>`;
    const tile = (lab, v, cls = '', tip = '') => `<div class="pf3-tile ${cls}" ${tip ? `data-tip="${esc(tip)}"` : ''}><span>${lab}</span><b>${v}</b></div>`;
    const tiles = `<div class="pf3-tiles">${clanTile}
        ${tile(t('pf3_win'), games ? r.w : '—', 'w')}${tile(t('pf3_lose'), games ? r.l : '—', 'l')}
        ${tile(t('pf3_kd'), games ? kd(r.k, r.d) : '—', '', t('p2_kdHint'))}${tile(t('pf3_avg'), games ? (r.k / games).toFixed(1) : '—', '', t('avgKills'))}
        ${tile(t('pf3_game'), games)}${tile(t('pf3_wr'), games ? wrNum(r) + '%' : '—', wrNum(r) >= 50 && games ? 'w' : '', t('p2_wrHint'))}</div>`;

    const got = achs.list.filter(a => a.at);
    const near = achs.list.filter(a => !a.at).sort((a, b) => b.value / b.goal - a.value / a.goal)[0];
    const achCard = `<div class="pf3-sec pf3-achs"><div class="pf3-sh"><span class="pf3-h">${t('achievements')}</span><small>${t('pf3_achOf', { a: got.length, b: achs.list.length })}</small><span class="grow"></span>
        <button class="pf3-link" id="p2-achall">${t('p2_allAch')} ${IC.chev}</button></div>
      <div class="card pf3-card pf3-achbox"><div class="pf3-achic">${[...got, ...achs.list.filter(a => !a.at)].map(a => `<i class="ai ai-${a.icon} ${a.at ? 'got' : ''}" data-tip="${esc(t('a_' + a.id) + ' — ' + t('m_' + a.metric, { n: a.goal }))}">${(typeof ACH_ICON !== 'undefined' && ACH_ICON[a.icon]) || ''}</i>`).join('')}</div>
        ${near ? `<div class="pf3-near"><span>${t('p2_nearest', { a: `<b>${esc(t('a_' + near.id))}</b>`, v: Math.round(near.value * 10) / 10, g: near.goal })}</span><div class="pf3-bar sm"><i style="width:${Math.min(100, near.value / near.goal * 100)}%"></i></div></div>` : `<div class="pf3-near"><span>${t('p2_allDone')}</span></div>`}</div></div>`;
    let ser = 0; const won0 = ms[0]?.won; for (const h of ms) { if (h.won === won0) ser++; else break; }
    const streakCard = `<div class="pf3-sec"><div class="pf3-sh"><span class="pf3-h">${t('pf3_streaks')}</span></div>
      <div class="card pf3-card pf3-streak"><div><i class="pf3-sic">${IC.trophy}</i><small>${t('pf3_best')}</small><b>${st.best}</b><span>${t('pf3_wins')}</span></div>
        <div><i class="pf3-sic ${ms.length ? (won0 ? 'w' : 'l') : ''}">${IC.flame}</i><small>${t('pf3_now')}</small><b class="${ms.length ? (won0 ? 'win' : 'lose') : ''}">${ms.length ? ser : '—'}</b><span>${ms.length ? (won0 ? t('pf3_wins') : t('pf3_losses')) : ''}</span></div></div></div>`;
    const lookCard = `<div class="pf3-sec"><div class="pf3-sh"><span class="pf3-h">${t('p2_look')}</span><span class="grow"></span>${isMe ? `<button class="pf3-link" data-go2="inventory">${t('inventory')} ${IC.chev}</button>` : ''}</div>
      <div class="card pf3-card pf3-look"><div class="pf3-lookb">${bannerHtml(banner, 'bimg')}<span class="pf3-lookn">${avaF(p, 'sm')}</span></div>
        <div class="pf3-lookl"><span>${t('p2_banner')}<b>${esc(cosName(banner))}</b></span><span>${t('p2_frame')}<b>${esc(cosName(p.prem?.frame))}</b></span><span>${t('p2_emblem')}<b>${esc(cosName(p.prem?.emblem))}</b></span></div></div></div>`;
    const row3 = `<div class="pf3-row3">${achCard}${streakCard}${lookCard}</div>`;

    const SHOW = 8;
    const mrow = (h, i) => `<tr class="${h.won ? 'w' : 'l'} ${i >= SHOW ? 'pf3-more' : ''}" data-mid="${h.id}">
        <td><b>${dShort(h.at)}</b><small>${tShort(h.at)}</small></td>
        <td><span class="pf3-res ${h.won ? 'w' : 'l'}">${h.won ? t('victory') : t('defeat')}</span></td>
        <td class="num">${esc(h.score || '–')}</td>
        <td><b class="${h.delta > 0 ? 'win' : 'lose'}">${sign(h.delta)}</b>${h.elo != null ? `<small>${h.elo}</small>` : ''}</td>
        <td><b>${kd(h.k, h.d)}</b><small>${h.k} / ${h.d}</small></td>
        <td><div class="pf3-mapc"><i style="background-image:url(${mapImg(h.map)})"></i>${esc(mapName(h.map))}</div></td>
        <td class="pf3-mid">#${h.id}</td></tr>`;
    const matchesCard = `<div class="card pf3-card pf3-matches"><div class="pf3-ch"><h3>${t('pf3_recent')}</h3><span class="mute">${modeX(mode)}${sd ? ' · ' + sdLabel(sd) : ''}</span><span class="grow"></span>
        ${ms.length > SHOW ? `<button class="btn ghost sm" id="pf3-all">${t('pf3_all', { n: ms.length })}</button>` : ''}</div>
      ${ms.length ? `<table class="pf3-tbl ${ms.length > SHOW ? 'collapsed' : ''}" id="pf3-tbl"><thead><tr><th>${t('pf3_date')}</th><th>${t('pf3_res')}</th><th>${t('pf3_score')}</th><th>ELO</th><th>K/D</th><th>${t('pf3_map')}</th><th></th></tr></thead>
        <tbody>${ms.map(mrow).join('')}</tbody></table>` : ''}
      ${ms.length ? '' : `<div class="pf3-empty">${past ? t('pf3_noSeason', { m: modeL }) : isMe ? `${t('pf3_emptyMe', { m: modeL })}${PUB_MODES.includes(mode) ? ` <button class="btn sm" data-go2="play">${t('pf3_play', { m: modeL })}</button>` : ''}` : t('noMatches')}</div>`}
      ${!myTier && (sd ? sd.limited : p.matches.length >= 20) ? `<p class="pf3-lim">👑 ${t('historyLimited')}</p>` : ''}</div>`;

    const b = p.ban;
    const punCard = `<div class="card pf3-card pf3-pun"><div class="pf3-ch"><h3>${t('pf3_pun')}</h3><span class="grow"></span><span class="mute">${b ? t('pf3_punActive') : t('pf3_punNoneSub')}</span></div>
      ${b ? `<div class="pf3-punr bad"><i>${IC.ban}</i><div><b>${t('pf3_ban')}</b><span>${b.reason ? esc(b.reason) + ' · ' : ''}${!b.until ? t('pf3_forever') : t('pf3_until', { d: fmtDT(b.until) })}</span></div></div>`
        : `<div class="pf3-punr"><i>${IC.shield}</i><div><b>${t('pf3_punNone')}</b><span>${t('pf3_punNoneSub')}</span></div></div>`}</div>`;

    const N = Math.min(10, ms.length), lastN = ms.slice(0, 10);
    const lw = lastN.filter(h => h.won).length, ll = N - lw, lsum = lastN.reduce((a, h) => a + (h.delta || 0), 0);
    const rEloCard = `<div class="card pf3-card pf3-side"><span class="pf3-h">${t('pf3_eloByMatch')} · ${modeX(mode)}</span>${eloChart(ms)}</div>`;
    const rLastCard = `<div class="card pf3-card pf3-side pf3-last"><div class="pf3-lastt"><div><span class="pf3-lbl">${t('pf3_lastN', { n: N })}</span>
        <div class="pf3-wl"><i class="w">${t('winShort')}</i><b>${lw}</b><em>/</em><i class="l">${t('lossShort')}</i><b>${ll}</b></div></div>
        <div class="pf3-lsum"><span class="pf3-lbl">${t('pf3_eloSum')}</span><b class="${N ? (lsum >= 0 ? 'win' : 'lose') : ''}">${N ? sign(lsum) : '—'}</b></div></div>
      <div class="pf3-form">${Array.from({ length: 10 }, (_, i) => { const h = lastN[i]; return h ? `<span class="${h.won ? 'w' : 'l'}" data-tip="${esc(`#${h.id} · ${mapName(h.map)} · ${h.k}/${h.d} · ${sign(h.delta)}`)}"></span>` : '<span class="e"></span>'; }).join('')}</div></div>`;
    const sub = k => k === 'wr' ? t('pf3_mapSubWr', { m: modeX(mode) }) : t(k === 'avg' ? 'pf3_mapSubAvg' : 'pf3_mapSubKd', { n: ms.length }) + (sd && sd.season !== 'all' ? ' · ' + sdLabel(sd) : '');
    const rk = S.pf3Rad || 'wr';
    const rMapCard = `<div class="card pf3-card pf3-side pf3-maps"><span class="pf3-h">${t('pf3_mapAct')}</span><small class="pf3-sub" id="pf3-radsub">${sub(rk)}</small>
      <div class="pf3-tabs">${['wr', 'avg', 'kd'].map(k => `<button data-pf3rad="${k}" class="${rk === k ? 'on' : ''}">${t('pf3_t' + { wr: 'Wr', avg: 'Avg', kd: 'Kd' }[k])}</button>`).join('')}</div>
      <div id="pf3-rad">${radar(mapVals(mapsSel, ms, rk), rk)}</div></div>`;

    const achFull = `<div class="card pf3-card p2-achfull" id="p2-achfull" hidden><div class="pf3-ch"><h3>${t('achievements')}</h3><span class="grow"></span><span class="mute">${got.length} / ${achs.list.length}</span></div>
      <div class="achgrid">${achs.list.map(a => `<div class="ach ${a.at ? 'got' : ''}">
        <div class="ai ai-${a.icon}">${(typeof ACH_ICON !== 'undefined' && ACH_ICON[a.icon]) || ''}</div>
        <div class="grow" style="min-width:0"><div class="an">${t('a_' + a.id)}</div><div class="mute ad">${t('m_' + a.metric, { n: a.goal })}</div>
          ${a.at ? `<div class="ad win">${t('unlockedAt', { d: fmtDate(a.at) })}</div>` : `<div class="bar"><i style="width:${a.value / a.goal * 100}%"></i></div><div class="ad mute">${t('progress', { v: a.value, g: a.goal })}</div>`}</div>
        ${a.reward ? `<div class="arw" title="${t('reward')}">${a.reward.banner ? `<div class="mini-b" style="${bannerCss(a.reward.banner)}"></div>` : ''}${a.reward.frame ? `<div class="mini-f fr-${a.reward.frame}"></div>` : ''}</div>` : ''}
      </div>`).join('')}</div></div>`;

    render(`${pbgLayer(p.pbg)}<div class="pwrap pf3 ${p.pbg ? 'has-pbg' : ''}">
      <div class="pf3-lay"><div class="pf3-main">${head}
        <div class="card pf3-card pf3-stats">${eloRow}${tiles}</div>
        ${row3}${matchesCard}<div class="pstats pf3-ldanchor"></div>${achFull}${punCard}</div>
      <div class="pf3-right">${rEloCard}${rLastCard}${rMapCard}</div></div></div>`);

    const R = render; let ret;
    render = () => {};
    try { ret = _prev.apply(this, arguments); } finally { render = R; }

    if ($('#pf3-clan') && c) $('#pf3-clan').onclick = () => openClan(c.id);
    const sbtn = $('#pf3-sbtn'), smenu = $('#pf3-smenu');
    if (sbtn && smenu) {
      sbtn.onclick = e => {
        e.stopPropagation(); smenu.hidden = !smenu.hidden; sbtn.classList.toggle('open', !smenu.hidden);
        if (!smenu.hidden) document.addEventListener('click', () => { smenu.hidden = true; sbtn.classList.remove('open'); }, { once: true });
      };
      smenu.querySelectorAll('[data-pf3s]').forEach(bt => bt.onclick = e => {
        e.stopPropagation(); smenu.hidden = true;
        const v = bt.dataset.pf3s; S.pf3Seas = v === 'all' ? 'all' : +v; renderProfile();
      });
    }
    if ($('#pf3-all')) $('#pf3-all').onclick = () => { const tb = $('#pf3-tbl'); tb.classList.toggle('collapsed'); $('#pf3-all').textContent = tb.classList.contains('collapsed') ? t('pf3_all', { n: ms.length }) : t('pf3_less'); };
    document.querySelectorAll('#view [data-pf3rad]').forEach(bt => bt.onclick = () => {
      const k = S.pf3Rad = bt.dataset.pf3rad;
      document.querySelectorAll('#view [data-pf3rad]').forEach(x => x.classList.toggle('on', x === bt));
      $('#pf3-rad').innerHTML = radar(mapVals(mapsSel, ms, k), k); $('#pf3-radsub').textContent = sub(k);
    });
    try { await ret; } catch (e) { console.warn('[profile3]', e); }
    return ret;
  };
})();

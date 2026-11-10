(() => {
  const L = {
    en: { p2_eloHint: 'ELO is your skill rating. A win adds points, a loss takes them away; the gain depends on the strength of both teams. Levels 1–10 are ELO ranges.',
      p2_calTitle: 'Calibration',
      p2_kdHint: 'K/D — kills per death. 1.00 means as many kills as deaths.', p2_wrHint: 'Share of won matches in this mode',
      p2_kMatches: 'matches', p2_kWr: 'winrate', p2_kKd: 'K/D · kills / deaths', p2_kAvg: 'kills per match', p2_kStreak: 'best win streak', p2_kNow: 'now {n}',
      p2_form: 'Form · last 10', p2_seriesW: 'streak: {n} wins', p2_seriesL: 'streak: {n} losses', p2_eloGraph: 'ELO · by match', p2_nextLine: 'lvl {l} · {e}', p2_one: 'The graph appears after the second match',
      p2_recent: 'Recent matches', p2_allHist: 'Full history · {n}', p2_hide: 'Collapse', p2_maps: 'Maps', p2_bestMap: 'best — {m}',
      p2_ach: 'Achievements', p2_nearest: 'Next: «{a}» — {v} of {g}', p2_allAch: 'All achievements', p2_allDone: 'All achievements unlocked',
      p2_look: 'Cosmetics', p2_banner: 'Banner', p2_frame: 'Frame', p2_emblem: 'Emblem', p2_editLook: 'Edit cosmetics', p2_share: 'Share', p2_copied: 'Profile link copied',
      p2_emptyMeT: 'Your stats will live here', p2_emptyMeS: 'Play your first {mode} match. The first 5 games are placement games — after them your level and ELO open. Form, graph and maps fill in by themselves.',
      p2_emptyT: '{n} has not played {mode} yet', p2_emptyS: 'Invite them to a party — stats appear after the first match.', p2_otherMode: 'There are {mode} matches: {n}', p2_open: 'Open',
      p2_cmpHint: 'Compare — with friends or with Premium+', p2_actions: 'Actions',
    },
    uk: { p2_eloHint: 'ELO — рейтинг гри. Перемога додає очки, поразка забирає; скільки саме — залежить від сили обох команд. Рівні 1–10 — це діапазони ELO.',
      p2_calTitle: 'Калібрування',
      p2_kdHint: 'K/D — вбивств на одну смерть. 1.00 — стільки ж убивств, скільки смертей.', p2_wrHint: 'Частка виграних матчів у цьому режимі',
      p2_kMatches: 'матчів', p2_kWr: 'вінрейт', p2_kKd: 'K/D · вбивства / смерті', p2_kAvg: 'вбивств за матч', p2_kStreak: 'найкраща серія перемог', p2_kNow: 'зараз {n}',
      p2_form: 'Форма · останні 10', p2_seriesW: 'серія: {n} перемог', p2_seriesL: 'серія: {n} поразок', p2_eloGraph: 'ELO · по матчах', p2_nextLine: 'рів. {l} · {e}', p2_one: 'Графік з’явиться після другого матчу',
      p2_recent: 'Останні матчі', p2_allHist: 'Уся історія · {n}', p2_hide: 'Згорнути', p2_maps: 'Карти', p2_bestMap: 'найкраща — {m}',
      p2_ach: 'Досягнення', p2_nearest: 'Найближче: «{a}» — {v} з {g}', p2_allAch: 'Усі досягнення', p2_allDone: 'Усі досягнення відкрито',
      p2_look: 'Оформлення', p2_banner: 'Банер', p2_frame: 'Рамка', p2_emblem: 'Емблема', p2_editLook: 'Змінити оформлення', p2_share: 'Поділитися', p2_copied: 'Посилання на профіль скопійовано',
      p2_emptyMeT: 'Тут буде твоя статистика', p2_emptyMeS: 'Зіграй перший матч {mode}. Перші 5 ігор — калібрування, після них відкриються рівень і ELO. Форма, графік і карти заповняться самі.',
      p2_emptyT: '{n} ще не грав {mode}', p2_emptyS: 'Поклич у паті — статистика з’явиться після першого матчу.', p2_otherMode: 'Є матчі в {mode}: {n}', p2_open: 'Відкрити',
      p2_cmpHint: 'Порівняння — з друзями або з Premium+', p2_actions: 'Дії',
    },
    ru: { p2_eloHint: 'ELO — рейтинг игры. Победа добавляет очки, поражение забирает; сколько именно — зависит от силы обеих команд. Уровни 1–10 — это диапазоны ELO.',
      p2_calTitle: 'Калибровка',
      p2_kdHint: 'K/D — убийств на одну смерть. 1.00 — столько же убийств, сколько смертей.', p2_wrHint: 'Доля выигранных матчей в этом режиме',
      p2_kMatches: 'матчей', p2_kWr: 'винрейт', p2_kKd: 'K/D · убийства / смерти', p2_kAvg: 'убийств за матч', p2_kStreak: 'лучшая серия побед', p2_kNow: 'сейчас {n}',
      p2_form: 'Форма · последние 10', p2_seriesW: 'серия: {n} побед', p2_seriesL: 'серия: {n} поражений', p2_eloGraph: 'ELO · по матчам', p2_nextLine: 'ур. {l} · {e}', p2_one: 'График появится после второго матча',
      p2_recent: 'Последние матчи', p2_allHist: 'Вся история · {n}', p2_hide: 'Свернуть', p2_maps: 'Карты', p2_bestMap: 'лучшая — {m}',
      p2_ach: 'Достижения', p2_nearest: 'Ближайшее: «{a}» — {v} из {g}', p2_allAch: 'Все достижения', p2_allDone: 'Все достижения открыты',
      p2_look: 'Оформление', p2_banner: 'Баннер', p2_frame: 'Рамка', p2_emblem: 'Эмблема', p2_editLook: 'Изменить оформление', p2_share: 'Поделиться', p2_copied: 'Ссылка на профиль скопирована',
      p2_emptyMeT: 'Здесь будет твоя статистика', p2_emptyMeS: 'Сыграй первый матч {mode}. Первые 5 игр — калибровка, после них откроются уровень и ELO. Форма, график и карты заполнятся сами.',
      p2_emptyT: '{n} ещё не играл {mode}', p2_emptyS: 'Позови в пати — статистика появится после первого матча.', p2_otherMode: 'Есть матчи в {mode}: {n}', p2_open: 'Открыть',
      p2_cmpHint: 'Сравнение — с друзьями или с Premium+', p2_actions: 'Действия',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k], L[k]);
})();

const p2q = key => `<i class="p2-q" data-tip="${esc(t(key))}">?</i>`;
{
  let box = null;
  const hide = () => { if (box) box.hidden = true; };
  document.addEventListener('mouseover', e => {
    const el = e.target.closest?.('[data-tip]');
    if (!el) return hide();
    if (!box) { box = document.createElement('div'); box.className = 'p2-tipbox'; document.body.append(box); }
    box.textContent = el.dataset.tip; box.hidden = false; box.__el = el;
    const r = el.getBoundingClientRect(), w = box.offsetWidth, h = box.offsetHeight;
    box.style.left = Math.max(8, Math.min(innerWidth - w - 8, r.left + r.width / 2 - w / 2)) + 'px';
    box.style.top = (r.bottom + h + 10 > innerHeight ? r.top - h - 8 : r.bottom + 8) + 'px';
  });
  document.addEventListener('scroll', hide, true);
  document.addEventListener('mousedown', hide, true);
  setInterval(() => { if (box && !box.hidden && !box.__el?.isConnected) hide(); }, 400);
}
const cosName = id => {
  if (!id) return '—';
  const k = 'cos_' + id, v = t(k);
  if (v !== k) return v;
  return id.replace(/^(s_|a2_kz_|a2_|a3_|c_|k_|a_|b3_|k3_|b4_|k4_|b5_|k5_|kit4_|kit5_|e3_|av_an_|av_df_|av_)(?=[a-z0-9])/i, '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};

function p2LvInfo(r) {
  const lvl = r.lvl ?? levelOf(r.elo), nx = r.next ?? LEVELS[lvl + 1], mn = r.min ?? LEVELS[lvl] ?? 0;
  return { lvl, nx, pct: nx ? Math.max(0, Math.min(100, (r.elo - mn) / (nx - mn) * 100)) : 100 };
}
function p2Graph(ms, nx, lvl) {
  const pts = ms.filter(h => h.elo != null).reverse();
  if (pts.length) pts.unshift({ id: '—', elo: pts[0].elo - pts[0].delta, delta: 0 });
  if (pts.length < 3) return `<div class="p2-gnote mute">${t('p2_one')}</div>`;
  const W = 640, H = 170, P = 22, PL = 36;
  const vals = pts.map(p => p.elo);
  let lo = Math.min(...vals), hi = Math.max(...vals);
  const showNx = nx && nx - hi <= Math.max(60, hi - lo);
  if (showNx) hi = Math.max(hi, nx);
  lo -= 8; hi += 8;
  const x = i => PL + i * (W - PL - P) / (pts.length - 1);
  const y = v => H - P - (v - lo) / (hi - lo) * (H - 2 * P);
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.elo).toFixed(1)}`).join('');
  const last = pts[pts.length - 1];
  return `<svg class="p2-graph" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><defs><linearGradient id="p2g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4c542" stop-opacity=".28"/><stop offset="1" stop-color="#f4c542" stop-opacity="0"/></linearGradient></defs>
    ${[0, 1].map(f => { const v = Math.round(lo + 8 + (hi - lo - 16) * f); return `<line class="gl" x1="${PL}" x2="${W - P}" y1="${y(v)}" y2="${y(v)}"/><text x="2" y="${y(v) + 3}">${v}</text>`; }).join('')}
    ${showNx ? `<line class="nx" x1="${PL}" x2="${W - P}" y1="${y(nx)}" y2="${y(nx)}"/><text class="nxt" x="${PL + 6}" y="${y(nx) - 5}">${t('p2_nextLine', { l: lvl + 1, e: nx })}</text>` : ''}
    <path class="ar" d="${line}L${x(pts.length - 1)},${H - P}L${x(0)},${H - P}Z"/><path class="ln" d="${line}"/>
    ${pts.map((p, i) => `<circle cx="${x(i)}" cy="${y(p.elo)}" r="${p === last ? 4.5 : 2.6}" class="${p === last ? 'last' : ''}"><title>#${p.id} · ${p.elo} (${sign(p.delta)})</title></circle>`).join('')}</svg>`;
}

async function renderProfile() {
  const id = S.profileId;
  const p = S.profCache?.id === id ? S.profCache : await api('/api/profile?id=' + encodeURIComponent(id)).catch(e => (toast(e.message, true), null));
  if (!p || S.page !== 'profile' || S.profileId !== id) return;
  S.profCache = p;
  setTimeout(() => { if (S.profCache === p) S.profCache = null; }, 15_000);
  const gm = m => modeGames(p, m);
  if (!S.profMode || !profModes(p).includes(S.profMode)) S.profMode = bestProfMode(p);
  const mode = S.profMode, other = profModes(p).filter(m => m !== mode).sort((a, b) => gm(b) - gm(a))[0];
  const r = p['r' + mode] || { elo: 1000, w: 0, l: 0, k: 0, d: 0 };
  const cal = isCal(r);
  const { lvl, nx } = p2LvInfo(r);
  const ms = p.matches.filter(h => h.mode === mode);
  const st = streaks(ms);
  const games = r.w + r.l;
  const empty = !games && !ms.length;
  const maps = mapsOf(p, mode);
  const isMe = p.id === S.me.id;
  const myTier = S.me.premium?.tier;
  const banner = p.prem?.banner;
  const achs = p.achievements || { list: [] };
  const pbg = p.pbg;
  const modeL = modeX(mode).replace(/ /g, '');
  const friend = S.live?.friends?.list?.some(x => x.id === p.id);
  const canCmp = !isMe && (friend || myTier === 'plus' || S.me.staff || S.me.admin);
  const I = d => `<svg viewBox="0 0 24 24" class="p2-ic">${d}</svg>`;
  const IC = {
    share: I('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),
    cmp: I('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    add: I('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.7-3.6 3.3-5.5 6.5-5.5s5.8 1.9 6.5 5.5M19 8v6M16 11h6"/>'),
    inv: I('<path d="M4 8l8-4 8 4v9l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v9"/>'),
    flag: I('<path d="M5 21V4M5 4h12l-2.5 4.5L17 13H5"/>'),
    party: I('<circle cx="9" cy="8" r="3.2"/><path d="M3 19c.6-3.3 3-5 6-5s5.4 1.7 6 5"/><circle cx="16.5" cy="9" r="2.6"/><path d="M15.5 14.2c2.6-.3 4.8 1.2 5.5 4.3"/>'),
    img: I('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 16l5-5 4 4 3-3 6 6"/>'),
  };

  const primary = isMe ? `<button class="btn sm" data-go2="inventory">${IC.inv}${t('p2_editLook')}</button>
      <button class="btn ghost sm" id="p2-share">${IC.share}${t('p2_share')}</button>
      <button class="btn ghost sm" id="p-bg">${IC.img}${myTier ? '' : '👑 '}${t('profileBg')}</button>`
    : `${friend ? '' : S.live?.friends?.sent?.includes(p.id) ? `<span class="tag p2-sent">${t('requestSent')}</span>` : `<button class="btn sm" data-fr-add="${p.id}">${IC.add}${t('addFriend')}</button>`}
      <button class="btn ${friend ? '' : 'ghost'} sm" data-invite="${p.id}">${IC.party}${t('inviteParty')}</button>
      ${canCmp ? `<button class="btn ghost sm p2-io" id="p2-cmp" title="${t('compare')}">${IC.cmp}<span>${t('compare')}</span></button>` : ''}
      <button class="btn ghost sm p2-io" id="p2-share" title="${t('p2_share')}">${IC.share}<span>${t('p2_share')}</span></button>
      <button class="btn ghost sm p2-rep" id="p-report" title="${t('report')}">${IC.flag}<span>${t('report')}</span></button>`;
  const extra = `${S.me.admin && window.openPlayerEditor ? `<button class="btn ghost sm" id="p-owner">✎ ${t('pe_btn')}</button>` : ''}
      ${(S.me.staff || S.me.admin) && !isMe ? (p.ban ? `<button class="btn sm" id="p-unban">${t('unban')}</button>` : `<button class="btn red sm" id="p-ban">${t('ban')}</button>`) : ''}
      ${S.me.staff && !S.me.admin ? `<button class="btn ghost sm" id="p-edit">${t('edit')}</button>` : ''}
      ${isMe && myTier && !S.me.admin ? `<button class="btn ghost sm" id="p-nick" ${!(S.me.freeNicks > 0) ? `disabled title="${t('nickFreeUsed')}"` : `title="${t('nickFreeLeft', { n: S.me.freeNicks })}"`}>${t('changeNick')}</button>` : ''}`.trim();

  const lvBlock = `<div class="plevel">
        ${isCal(r) ? `<div class="plv-ic"><img class="lvl lg" src="assets/lvl/cal.svg"><span>${calTxt(r)}</span></div>
        <div class="plv-row"><span class="plv-cur">${r.cal}<small>/5</small></span>
          <div class="plv-bar"><i style="width:${r.cal * 20}%"></i></div>
          <span class="plv-need">5<small>/5</small></span></div>` : `<div class="plv-ic"><img class="lvl lg" src="${lvlImg(lvl)}"><span>${t('level', { n: lvl })}${nx ? ` · ${t('toNext', { n: nx - r.elo, l: lvl + 1 })}` : ''}</span></div>
        <div class="plv-row"><span class="plv-cur">${r.elo}<small>ELO</small></span>
          <div class="plv-bar"><i style="width:${levelPct(r.elo)}%"></i></div>
          <span class="plv-need">${nx ? `${nx}<small>ELO</small>` : t('maxLevel')}</span></div>`}
      </div>`;

  const kpi = (v, label, tip, sub = '') => `<div class="p2-kpi"><b>${v}${sub}${tip ? p2q(tip) : ''}</b><span>${label}</span></div>`;
  const kpis = `<div class="p2-kpis">
      ${kpi(games, t('p2_kMatches'))}${kpi(wrNum(r) + '%', t('p2_kWr'), 'p2_wrHint', `<small class="mute"> ${r.w}–${r.l}</small>`)}
      ${kpi(kd(r.k, r.d), t('p2_kKd'), 'p2_kdHint')}${kpi(games ? (r.k / games).toFixed(1) : '0', t('p2_kAvg'))}
      ${kpi(st.best, t('p2_kStreak'), '', st.now ? `<small class="win"> ${t('p2_kNow', { n: st.now })}</small>` : '')}</div>`;

  let ser = 0; const won0 = ms[0]?.won; for (const h of ms) { if (h.won === won0) ser++; else break; }
  const form = ms.slice(0, 10);
  const recent = ms.slice(0, 5);
  const mrow = h => `<div class="p2-mr" data-mid="${h.id}"><i class="th" style="background-image:url(${mapImg(h.map)})"></i><b class="${h.won ? 'win' : 'lose'}">${h.won ? t('winShort') : t('lossShort')}</b>
      <span class="p2-mn">${mapName(h.map)}</span><span class="mute">${esc(h.score || '–')} · ${h.k}/${h.d}</span><span class="grow"></span>
      <span class="mute p2-md">${fmtDT(h.at)}</span><span class="num ${h.delta > 0 ? 'win' : 'lose'} p2-dl">${sign(h.delta)}</span></div>`;
  const histTable = `<table class="hist"><thead><tr><th>${t('result')}</th><th>#</th><th>${t('map')}</th><th>${t('score', { s: '' })}</th><th>K / D</th><th>K/D</th><th>ELO</th><th></th></tr></thead><tbody>
      ${ms.map(h => `<tr class="${h.won ? 'w' : ''}" data-mid="${h.id}"><td class="num ${h.won ? 'win' : 'lose'}">${h.won ? t('victory') : t('defeat')}</td><td class="mute">#${h.id}</td>
        <td><div class="row" style="gap:8px"><div class="th" style="width:44px;height:26px;border-radius:5px;background:url(${mapImg(h.map)}) center/cover"></div>${mapName(h.map)}</div></td>
        <td class="num">${esc(h.score || '–')}</td><td class="num">${h.k} / ${h.d}</td><td class="num">${kd(h.k, h.d)}</td>
        <td class="num"><span class="${h.delta > 0 ? 'win' : 'lose'}">${sign(h.delta)}</span>${h.elo != null ? ` <span class="mute">${h.elo}</span>` : ''}</td><td class="mute">${fmtDT(h.at)}</td></tr>`).join('')}</tbody></table>`;

  const mapRows = MAPS.map(x => { const s = maps[x] || { w: 0, l: 0 }, n = s.w + s.l; return { x, n, w: s.w, l: s.l, wr: n ? Math.round(s.w / n * 100) : -1 }; })
    .sort((a, b) => b.wr - a.wr || b.n - a.n);
  const bestMap = mapRows.find(m => m.n);
  const mapsCard = `<div class="card p2-maps"><div class="card-h"><h4>${t('p2_maps')}</h4><span class="grow"></span>${bestMap ? `<span class="mute">${t('p2_bestMap', { m: mapName(bestMap.x) })}</span>` : ''}</div>
      ${mapRows.map(m => `<div class="p2-map ${m === bestMap ? 'best' : ''} ${m.n ? '' : 'none'}"><span>${mapName(m.x)}</span><div class="p2-mb"><i style="width:${Math.max(0, m.wr)}%"></i></div>
        <b>${m.n ? m.wr + '%' : '–'}</b><small class="mute">${m.n ? `${m.w}–${m.l}` : ''}</small></div>`).join('')}</div>`;

  const got = achs.list.filter(a => a.at);
  const near = achs.list.filter(a => !a.at).sort((a, b) => b.value / b.goal - a.value / a.goal)[0];
  const achCard = `<div class="card p2-ach"><div class="card-h"><h4>${t('p2_ach')}</h4><span class="grow"></span><span class="mute">${got.length} / ${achs.list.length}</span></div>
      <div class="p2-achic">${[...got, ...achs.list.filter(a => !a.at)].map(a => `<i class="ai ai-${a.icon} ${a.at ? 'got' : ''}" data-tip="${esc(t('a_' + a.id) + ' — ' + t('m_' + a.metric, { n: a.goal }))}">${ACH_ICON[a.icon] || ''}</i>`).join('')}</div>
      <div class="p2-near"><span class="mute">${near ? t('p2_nearest', { a: `<b>${esc(t('a_' + near.id))}</b>`, v: Math.round(near.value * 10) / 10, g: near.goal }) : t('p2_allDone')}</span><span class="grow"></span>
        <button class="btn ghost sm" id="p2-achall">${t('p2_allAch')}</button></div></div>`;
  const achFull = `<div class="card p2-achfull" id="p2-achfull" hidden><div class="card-h"><h4>${t('achievements')}</h4><span class="grow"></span><span class="mute">${got.length} / ${achs.list.length}</span></div>
      <div class="achgrid">${achs.list.map(a => `<div class="ach ${a.at ? 'got' : ''}">
        <div class="ai ai-${a.icon}">${ACH_ICON[a.icon]}</div>
        <div class="grow" style="min-width:0"><div class="an">${t('a_' + a.id)}</div><div class="mute ad">${t('m_' + a.metric, { n: a.goal })}</div>
          ${a.at ? `<div class="ad win">${t('unlockedAt', { d: fmtDate(a.at) })}</div>` : `<div class="bar"><i style="width:${a.value / a.goal * 100}%"></i></div><div class="ad mute">${t('progress', { v: a.value, g: a.goal })}</div>`}</div>
        ${a.reward ? `<div class="arw" title="${t('reward')}">${a.reward.banner ? `<div class="mini-b" style="${bannerCss(a.reward.banner)}"></div>` : ''}${a.reward.frame ? `<div class="mini-f fr-${a.reward.frame}"></div>` : ''}</div>` : ''}
      </div>`).join('')}</div></div>`;

  const look = `<div class="card p2-look"><div class="card-h"><h4>${t('p2_look')}</h4><span class="grow"></span>${isMe ? `<a href="#" class="p2-link" data-go2="inventory">${t('inventory')}</a>` : ''}</div>
      <div class="p2-lookb">${bannerHtml(banner, 'bimg')}<span class="p2-lookn">${avaF(p, 'sm')}${nickHtml(p)}</span></div>
      <div class="p2-lookl"><span>${t('p2_banner')} <b>${esc(cosName(banner))}</b></span><span>${t('p2_frame')} <b>${esc(cosName(p.prem?.frame))}</b></span><span>${t('p2_emblem')} <b>${esc(cosName(p.prem?.emblem))}</b></span></div></div>`;

  const emptyCard = `<div class="card p2-empty"><div class="p2-emic"><img src="assets/lvl/cal.svg" alt=""></div>
      <h3>${isMe ? t('p2_emptyMeT') : t('p2_emptyT', { n: esc(p.nick), mode: modeL })}</h3>
      <p class="mute">${isMe ? t('p2_emptyMeS', { mode: modeL }) : t('p2_emptyS')}</p>
      <div class="row" style="justify-content:center;flex-wrap:wrap">${isMe ? `<button class="btn" data-go2="play">${t('play')}${PUB_MODES.includes(mode) ? ' ' + modeL : ''}</button>` : `<button class="btn" data-invite="${p.id}">${t('inviteParty')}</button>`}
        ${other && gm(other) ? `<button class="btn ghost" data-pm="${other}">${t('p2_otherMode', { mode: modeX(other).replace(/ /g, ''), n: gm(other) })} →</button>` : ''}</div></div>`;

  const body = empty ? `<div class="p2-grid">${emptyCard}<div class="p2-side">${achCard}${look}</div></div>${achFull}`
    : `${kpis}<div class="p2-grid">
        <div class="card p2-perf"><div class="card-h"><h4>${t('p2_form')}</h4><span class="grow"></span>${ms.length ? `<span class="mute">${t(won0 ? 'p2_seriesW' : 'p2_seriesL', { n: `<b class="${won0 ? 'gold' : 'lose'}">${ser}</b>` })}</span>` : ''}</div>
          ${ms.length ? `<div class="p2-form">${form.map(h => `<span class="p2-chip ${h.won ? 'w' : 'l'}" data-tip="${esc(`#${h.id} · ${mapName(h.map)} · ${h.k}/${h.d} · ${sign(h.delta)}`)}">${h.won ? t('winShort') : t('lossShort')}</span>`).join('')}${Array.from({ length: Math.max(0, 10 - form.length) }, () => '<span class="p2-chip e"></span>').join('')}</div>
          <h5 class="p2-h5">${t('p2_eloGraph')}</h5>${p2Graph(ms, cal ? null : nx, lvl)}` : `<div class="p2-gnote mute">${t('noMatches')}</div>`}
          ${recent.length ? `<h5 class="p2-h5">${t('p2_recent')}</h5><div class="p2-recent">${recent.map(mrow).join('')}</div>` : ''}
          ${ms.length > 5 ? `<button class="btn ghost sm p2-histbtn" id="p2-hist">${t('p2_allHist', { n: ms.length })}</button><div class="p2-hist" id="p2-histbox" hidden>${histTable}</div>` : ''}
          ${!myTier && p.matches.length >= 20 ? `<p class="mute" style="margin:10px 0 0;font-size:12.5px">👑 ${t('historyLimited')}</p>` : ''}</div>
        <div class="p2-side">${mapsCard}${achCard}${look}</div></div>
      <div class="pstats p2-ldanchor"></div>${achFull}`;

  render(`${pbgLayer(pbg)}<div class="pwrap p2 ${pbg ? 'has-pbg' : ''}"><div class="pbanner ${banner ? 'has-b' : ''}">${bannerHtml(banner, 'pb-art')}<div class="pactions"><div class="seg sm">${profModes(p).map(m => `<button data-pm="${m}" class="${mode === m ? 'on' : ''}">${modeX(m)}</button>`).join('')}</div>${extra ? `<button class="btn ghost sm pmore" id="p-more" title="${t('more')}"><svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/></svg></button><div class="pmenu" id="p-menu" hidden>${extra}</div>` : ''}</div><div class="phead">
      <div class="pava">${p.ban && typeof banAva === 'function' ? banAva(p) : avaF(p, 'lg')}${p.prem?.emblem && !p.ban ? emblemHtml(p.prem.emblem, 'big') : ''}</div>
      <div><h1>${nickHtml({ ...p, prem: p.prem && { ...p.prem, emblem: '' } })}</h1><div class="ids">ID: <span class="gid" style="user-select:text">${esc(p.gameId)}</span> ${p.name ? `· Discord: ${esc(p.name)} ` : ''}· ${t('since', { d: fmtDate(p.created) })}</div>
        <div class="tags">${p.staff ? `<span class="tag">${t('staffTag')}</span>` : ''}${p.ban ? `<span class="tag red ban-reason" title="${esc(p.ban.reason)}">${t('bannedTag')}: ${esc(p.ban.reason)}</span>` : ''}
          <span class="tag">${mode} · ${p['rank' + mode] ? '#' + p['rank' + mode] : t('unranked')}</span></div></div>
    </div>
      ${lvBlock}
    </div>
    <div class="p2-acts">${primary}<span class="p2-helps"><span class="p2-help" data-tip="${esc(t('p2_eloHint'))}">ELO ${p2q('p2_eloHint')}</span><span class="p2-help" data-tip="${esc(t('la_calHint'))}">${t('p2_calTitle')} ${p2q('la_calHint')}</span></span></div>
    ${body}</div>`);

  if ($('#p-more')) {
    const btn = $('#p-more'), menu = $('#p-menu');
    const close = () => { menu.hidden = true; document.removeEventListener('mousedown', outside, true); window.removeEventListener('resize', close); $('#view').removeEventListener('scroll', close); };
    const outside = e => { if (!menu.contains(e.target) && !btn.contains(e.target)) close(); };
    btn.onclick = () => {
      if (!menu.hidden) return close();
      menu.hidden = false;
      const rb = btn.getBoundingClientRect();
      menu.style.left = Math.max(8, Math.min(innerWidth - menu.offsetWidth - 8, rb.left)) + 'px';
      menu.style.top = (rb.bottom + menu.offsetHeight + 6 > innerHeight ? rb.top - menu.offsetHeight - 6 : rb.bottom + 6) + 'px';
      document.addEventListener('mousedown', outside, true); window.addEventListener('resize', close); $('#view').addEventListener('scroll', close);
    };
    menu.addEventListener('click', e => { if (e.target.closest('button')) close(); });
  }
  document.querySelectorAll('#view [data-go2]').forEach(b => b.onclick = e => { e.preventDefault(); go(b.dataset.go2); });
  if (banner) tintFromBanner(banner, $('.pbanner'));
  if ($('#p-bg')) $('#p-bg').onclick = () => myTier ? openProfileBg(p) : go('premium');
  if ($('#p-prem')) $('#p-prem').onclick = () => openGrant(p);
  if ($('#p-badges')) $('#p-badges').onclick = () => openBadges(p);
  if ($('#p-owner')) $('#p-owner').onclick = () => openPlayerEditor(p.id).catch(e => toast(e.message, true));
  if ($('#p-cos')) $('#p-cos').onclick = () => openGiveCosmetics(p);
  bindParty();
  if ($('#p2-cmp')) $('#p2-cmp').onclick = () => { const b = $('#ld-cmp'); if (b) b.click(); else openCompare(p); };
  if ($('#p2-share')) $('#p2-share').onclick = async () => {
    const b = $('#ld-share'); if (b) return b.click();
    const link = `${String(S.server || 'https://konzte.online/konzte').replace(/\/konzte\/?$/, '')}/p/${encodeURIComponent(p.nick || p.id)}`;
    try { await navigator.clipboard.writeText(link); } catch {}
    toast(t('p2_copied'));
  };
  if ($('#p-nick')) $('#p-nick').onclick = () => openNick();
  if ($('#p2-hist')) $('#p2-hist').onclick = () => { const b = $('#p2-histbox'); b.hidden = !b.hidden; $('#p2-hist').textContent = b.hidden ? t('p2_allHist', { n: ms.length }) : t('p2_hide'); };
  if ($('#p2-achall')) $('#p2-achall').onclick = () => { const b = $('#p2-achfull'); b.hidden = !b.hidden; if (!b.hidden) b.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  document.querySelectorAll('#view [data-pm]').forEach(b => b.onclick = () => { S.profMode = b.dataset.pm; renderProfile(); });
  document.querySelectorAll('#view [data-mid]').forEach(el => el.onclick = run(async () => { S.backAt = 0; S.finishedMatch = await api('/api/match?id=' + el.dataset.mid); S.page = 'play'; markNav(); refresh(); }));
  if ($('#p-report')) $('#p-report').onclick = () => openReport(p);
  if ($('#p-ban')) $('#p-ban').onclick = () => openBan(p);
  if ($('#p-unban')) $('#p-unban').onclick = run(async () => { await api('/api/staff/unban', { uid: p.id }); toast(t('unbannedOk')); S.profCache = null; renderProfile(); });
  if ($('#p-edit')) $('#p-edit').onclick = () => openEdit(p);
}

(() => {
const LD_I18N = {
  en: {
    ld_stats: 'Stats', ld_30d: 'Last 30 days', ld_elo30: 'ELO · 30 days', ld_kdTrend: 'K/D trend · last 20', ld_kdMatch: 'K/D per match', ld_kdAvg: 'Average of 5',
    ld_bestMap: 'Best map', ld_worstMap: 'Worst map', ld_avgKills: 'Avg kills', ld_avgDeaths: 'Avg deaths', ld_peak: 'Peak ELO', ld_form: 'Form',
    ld_last30: '{g} matches · {wr}% wins · K/D {kd} · {e} ELO', ld_noData: 'No ranked matches in this mode yet.', ld_match: 'Match #{n}',
    ld_share: 'Share profile', ld_copied: 'Profile link copied', ld_compare: 'Compare', ld_compareFriend: 'Compare with friend', ld_pickFriend: 'Pick a friend to compare with',
    ld_noFriends: 'Add friends to compare your stats.', ld_vs: 'vs', ld_games: 'Matches', ld_wr: 'Win rate', ld_streak: 'Best streak',
    ld_records: 'Records of the week', ld_recKills: 'Most kills in a match', ld_recStreak: 'Longest win streak', ld_recGain: 'Biggest ELO gain', ld_recKd: 'Best K/D (3+ matches)', ld_recNone: 'Nobody yet this week',
    ld_killsIn: '{k} kills · {map}', ld_winsRow: '{n} wins in a row', ld_eloIn: '+{n} ELO in {g} matches', ld_kdIn: 'K/D {v} in {g} matches',
    ld_shotOffer: 'Steam screenshot taken {t} — after the match started. Use it?', ld_shotUse: 'Use this screenshot',
    ld_backup: 'Database backup', ld_backupHint: 'Daily at 04:00 UTC and on server stop · kept 14 days · copy to the private Discord channel (BACKUP_CHANNEL).',
    ld_backupDl: 'Download backup', ld_backupLast: 'Last: {t} · {s} · {st}', ld_backupNone: 'No backups yet', ld_storage: 'Storage: {s}',
    ac_clFiles: 'Game files removed or modified ({n}): {v}', ac_clFilesMinor: 'Some game files differ from most players ({n})', ld_acFiles: 'Game files', ld_acFilesOk: '{n} files — same as most players', ld_acFilesNoRef: '{n} files — not enough players on this game version to compare yet', ld_acFilesBad: 'Differs from most players on this game version', ld_acMissing: 'Missing', ld_acChanged: 'Modified', ld_acExtra: 'Extra', ld_acMods: 'Libraries in the game process: {n}', ld_acModsRare: 'Rare — almost no other player has them', ld_acModsNoRef: 'not enough players yet to spot rare ones',
    ld_acClient: 'Client anticheat', ld_acNoData: 'No client reports (old app or never in a live match).',
    ac_clSilent: 'No anti-cheat reports from the app in {v} of {of} matches (blocked or modified client)', ac_clNoGame: 'Game was not running during {v} of {of} matches (client check)', ac_clCheat: 'Known cheat program seen during a match: {v}', ac_clTool: 'Debugger / memory tool seen during a match: {v}', ac_clCheatMod: 'Cheat library loaded into the game: {v}', ac_clDriver: 'Driver used by cheat loaders is loaded: {v}', ac_clShell: 'Konzte client files are modified ({n} checks)', ac_clTamper: 'Forged or replayed anticheat report: {v}', ac_clManualMap: 'Hidden code injected into the game ({n} checks)', ac_clUnsignedMod: 'Unsigned library in the game from Temp/Downloads/AppData: {v}', ac_clThread: 'Game threads started outside any library ({n} checks)', ac_clTestSign: 'Windows test mode / driver signature checks off ({n} checks)', ac_clDebug: 'Debugger attached to Konzte ({n} checks)', ac_clSandbox: 'Konzte runs in a sandbox ({n} checks)', ac_clVM: 'Virtual machine: {v}', ac_clExe: 'Game file differs from most players ({v})',
  },
  uk: {
    ld_stats: 'Статистика', ld_30d: 'Останні 30 днів', ld_elo30: 'ELO · 30 днів', ld_kdTrend: 'Тренд K/D · останні 20', ld_kdMatch: 'K/D за матч', ld_kdAvg: 'Середнє за 5',
    ld_bestMap: 'Найкраща карта', ld_worstMap: 'Найгірша карта', ld_avgKills: 'Вбивств у середньому', ld_avgDeaths: 'Смертей у середньому', ld_peak: 'Пік ELO', ld_form: 'Форма',
    ld_last30: '{g} матчів · {wr}% перемог · K/D {kd} · {e} ELO', ld_noData: 'У цьому режимі ще немає рейтингових матчів.', ld_match: 'Матч #{n}',
    ld_share: 'Поділитися профілем', ld_copied: 'Посилання на профіль скопійовано', ld_compare: 'Порівняти', ld_compareFriend: 'Порівняти з другом', ld_pickFriend: 'Обери друга для порівняння',
    ld_noFriends: 'Додай друзів, щоб порівнювати статистику.', ld_vs: 'проти', ld_games: 'Матчів', ld_wr: 'Вінрейт', ld_streak: 'Найкраща серія',
    ld_records: 'Рекорди тижня', ld_recKills: 'Найбільше вбивств за матч', ld_recStreak: 'Найдовша серія перемог', ld_recGain: 'Найбільший приріст ELO', ld_recKd: 'Найкращий K/D (від 3 матчів)', ld_recNone: 'Цього тижня ще нікого',
    ld_killsIn: '{k} вбивств · {map}', ld_winsRow: '{n} перемог поспіль', ld_eloIn: '+{n} ELO за {g} матчів', ld_kdIn: 'K/D {v} за {g} матчів',
    ld_shotOffer: 'Скриншот Steam зроблено {t} — після старту матчу. Використати його?', ld_shotUse: 'Використати цей скриншот',
    ld_backup: 'Резервна копія бази', ld_backupHint: 'Щодня о 04:00 UTC і при зупинці сервера · зберігаються 14 днів · копія в приватний канал Discord (BACKUP_CHANNEL).',
    ld_backupDl: 'Завантажити бекап', ld_backupLast: 'Останній: {t} · {s} · {st}', ld_backupNone: 'Бекапів ще немає', ld_storage: 'Сховище: {s}',
    ac_clFiles: 'Файли гри видалено чи змінено ({n}): {v}', ac_clFilesMinor: 'Частина файлів гри відрізняється від більшості гравців ({n})', ld_acFiles: 'Файли гри', ld_acFilesOk: 'Файлів: {n} — як у більшості гравців', ld_acFilesNoRef: 'Файлів: {n} — поки замало гравців на цій версії гри для порівняння', ld_acFilesBad: 'Відрізняється від більшості гравців на цій версії гри', ld_acMissing: 'Бракує', ld_acChanged: 'Змінено', ld_acExtra: 'Зайві', ld_acMods: 'Бібліотек у процесі гри: {n}', ld_acModsRare: 'Рідкісні — майже ні в кого з гравців їх немає', ld_acModsNoRef: 'поки замало гравців, щоб знайти рідкісні',
    ld_acClient: 'Античит клієнта', ld_acNoData: 'Звітів клієнта немає (старий застосунок або не було живого матчу).',
    ac_clSilent: 'Немає звітів античиту із застосунку в {v} з {of} матчів (заблокований чи змінений клієнт)', ac_clNoGame: 'Гра не була запущена під час {v} з {of} матчів (перевірка клієнта)', ac_clCheat: 'Під час матчу запущена відома чит-програма: {v}', ac_clTool: 'Під час матчу запущений дебагер / редактор пам\'яті: {v}', ac_clCheatMod: 'Бібліотека чита в процесі гри: {v}', ac_clDriver: 'Завантажено драйвер чит-лоадерів: {v}', ac_clShell: 'Файли клієнта Konzte змінено ({n} перевірок)', ac_clTamper: 'Підроблений або повторений звіт античиту: {v}', ac_clManualMap: 'Прихований код, вставлений у гру ({n} перевірок)', ac_clUnsignedMod: 'Непідписана бібліотека в грі з Temp/Завантажень/AppData: {v}', ac_clThread: 'Потоки гри, запущені поза бібліотеками ({n} перевірок)', ac_clTestSign: 'Тестовий режим Windows / вимкнено перевірку підпису драйверів ({n} перевірок)', ac_clDebug: 'До Konzte підключено налагоджувач ({n} перевірок)', ac_clSandbox: 'Konzte запущено в пісочниці ({n} перевірок)', ac_clVM: 'Віртуальна машина: {v}', ac_clExe: 'Файл гри відрізняється від більшості гравців ({v})',
  },
  ru: {
    ld_stats: 'Статистика', ld_30d: 'Последние 30 дней', ld_elo30: 'ELO · 30 дней', ld_kdTrend: 'Тренд K/D · последние 20', ld_kdMatch: 'K/D за матч', ld_kdAvg: 'Среднее за 5',
    ld_bestMap: 'Лучшая карта', ld_worstMap: 'Худшая карта', ld_avgKills: 'Убийств в среднем', ld_avgDeaths: 'Смертей в среднем', ld_peak: 'Пик ELO', ld_form: 'Форма',
    ld_last30: '{g} матчей · {wr}% побед · K/D {kd} · {e} ELO', ld_noData: 'В этом режиме ещё нет рейтинговых матчей.', ld_match: 'Матч #{n}',
    ld_share: 'Поделиться профилем', ld_copied: 'Ссылка на профиль скопирована', ld_compare: 'Сравнить', ld_compareFriend: 'Сравнить с другом', ld_pickFriend: 'Выбери друга для сравнения',
    ld_noFriends: 'Добавь друзей, чтобы сравнивать статистику.', ld_vs: 'против', ld_games: 'Матчей', ld_wr: 'Винрейт', ld_streak: 'Лучшая серия',
    ld_records: 'Рекорды недели', ld_recKills: 'Больше всего убийств за матч', ld_recStreak: 'Самая длинная серия побед', ld_recGain: 'Самый большой рост ELO', ld_recKd: 'Лучший K/D (от 3 матчей)', ld_recNone: 'На этой неделе пока никого',
    ld_killsIn: '{k} убийств · {map}', ld_winsRow: '{n} побед подряд', ld_eloIn: '+{n} ELO за {g} матчей', ld_kdIn: 'K/D {v} за {g} матчей',
    ld_shotOffer: 'Скриншот Steam сделан {t} — после старта матча. Использовать его?', ld_shotUse: 'Использовать этот скриншот',
    ld_backup: 'Резервная копия базы', ld_backupHint: 'Каждый день в 04:00 UTC и при остановке сервера · хранятся 14 дней · копия в приватный канал Discord (BACKUP_CHANNEL).',
    ld_backupDl: 'Скачать бэкап', ld_backupLast: 'Последний: {t} · {s} · {st}', ld_backupNone: 'Бэкапов ещё нет', ld_storage: 'Хранилище: {s}',
    ac_clFiles: 'Файлы игры удалены или изменены ({n}): {v}', ac_clFilesMinor: 'Часть файлов игры отличается от большинства игроков ({n})', ld_acFiles: 'Файлы игры', ld_acFilesOk: 'Файлов: {n} — как у большинства игроков', ld_acFilesNoRef: 'Файлов: {n} — пока мало игроков на этой версии игры для сравнения', ld_acFilesBad: 'Отличается от большинства игроков на этой версии игры', ld_acMissing: 'Нет', ld_acChanged: 'Изменено', ld_acExtra: 'Лишние', ld_acMods: 'Библиотек в процессе игры: {n}', ld_acModsRare: 'Редкие — почти ни у кого из игроков их нет', ld_acModsNoRef: 'пока мало игроков, чтобы найти редкие',
    ld_acClient: 'Античит клиента', ld_acNoData: 'Отчётов клиента нет (старое приложение или не было живого матча).',
    ac_clSilent: 'Нет отчётов античита из приложения в {v} из {of} матчей (заблокированный или изменённый клиент)', ac_clNoGame: 'Игра не была запущена во время {v} из {of} матчей (проверка клиента)', ac_clCheat: 'Во время матча запущена известная чит-программа: {v}', ac_clTool: 'Во время матча запущен отладчик / редактор памяти: {v}', ac_clCheatMod: 'Библиотека чита в процессе игры: {v}', ac_clDriver: 'Загружен драйвер чит-лоадеров: {v}', ac_clShell: 'Файлы клиента Konzte изменены ({n} проверок)', ac_clTamper: 'Поддельный или повторённый отчёт античита: {v}', ac_clManualMap: 'Скрытый код, внедрённый в игру ({n} проверок)', ac_clUnsignedMod: 'Неподписанная библиотека в игре из Temp/Загрузок/AppData: {v}', ac_clThread: 'Потоки игры, запущенные вне библиотек ({n} проверок)', ac_clTestSign: 'Тестовый режим Windows / отключена проверка подписи драйверов ({n} проверок)', ac_clDebug: 'К Konzte подключён отладчик ({n} проверок)', ac_clSandbox: 'Konzte запущен в песочнице ({n} проверок)', ac_clVM: 'Виртуальная машина: {v}', ac_clExe: 'Файл игры отличается от большинства игроков ({v})',
  },
};
for (const l of Object.keys(LD_I18N)) Object.assign(I18N[l], LD_I18N[l]);
Object.assign(SERVER_ERRORS.uk, { 'Compare is available with friends (any player — Premium+)': 'Порівняння доступне з друзями (з будь-ким — Premium+)' });
Object.assign(SERVER_ERRORS.ru, { 'Compare is available with friends (any player — Premium+)': 'Сравнение доступно с друзьями (с кем угодно — Premium+)' });

const MODE_COLOR = { '5v5': '#7d84ec', '2v2': '#23a090', '1v1': '#d39a3c' };
const CMP = { a: '#7d84ec', b: '#c0802a' };
const kdf = v => (+v || 0).toFixed(2);
const sgn = n => (n > 0 ? '+' : n < 0 ? '−' : '±') + Math.abs(n);
const siteBase = () => String(S.server || 'https://konzte.online/konzte').replace(/\/konzte\/?$/, '');
const profileLink = p => `${siteBase()}/p/${encodeURIComponent(p.nick || p.id)}`;
async function copyText(s) { try { await navigator.clipboard.writeText(s); } catch { const i = document.createElement('textarea'); i.value = s; document.body.append(i); i.select(); document.execCommand('copy'); i.remove(); } }

function hover(el) {
  const svg = el.querySelector('svg'), tip = el.querySelector('.ldtip');
  let pts = []; try { pts = JSON.parse(svg?.dataset.pts || '[]'); } catch {}
  if (!svg || !pts.length) return;
  const cx = svg.querySelector('.ldcx'), dot = svg.querySelector('.lddot');
  svg.onmousemove = e => {
    const r = svg.getBoundingClientRect(), vb = svg.viewBox.baseVal, x = (e.clientX - r.left) * vb.width / r.width;
    let b = pts[0]; for (const p of pts) if (Math.abs(p.x - x) < Math.abs(b.x - x)) b = p;
    cx.setAttribute('x1', b.x); cx.setAttribute('x2', b.x); cx.style.opacity = 1;
    dot.setAttribute('cx', b.x); dot.setAttribute('cy', b.y); dot.setAttribute('fill', b.c || dot.getAttribute('fill')); dot.style.opacity = 1;
    tip.innerHTML = b.tip; tip.hidden = false;
    const px = b.x * r.width / vb.width;
    tip.style.left = Math.min(r.width - tip.offsetWidth - 2, Math.max(2, px - tip.offsetWidth / 2)) + 'px';
    tip.style.top = Math.max(0, b.y * r.height / vb.height - tip.offsetHeight - 12) + 'px';
  };
  svg.onmouseleave = () => { cx.style.opacity = 0; dot.style.opacity = 0; tip.hidden = true; };
}
function mount(el, draw) {
  if (!el) return;
  let lastW = 0;
  const paint = () => { const w = Math.max(260, Math.floor(el.clientWidth || 500)); if (w === lastW) return; lastW = w; el.innerHTML = draw(w); hover(el); };
  paint();
  if (window.ResizeObserver) { const ro = new ResizeObserver(() => { if (!document.body.contains(el)) return ro.disconnect(); paint(); }); ro.observe(el); }
}
const ticksFor = (lo, hi) => { const st = Math.max(5, Math.ceil((hi - lo) / 3 / 5) * 5); const a = Math.floor(lo / st) * st, out = []; for (let v = a; v <= hi + st / 2; v += st) out.push(v); return out; };
const tail = (w, H, P, c) => `<line class="ldcx" x1="0" x2="0" y1="${P.t}" y2="${H - P.b}" style="opacity:0"/><circle class="lddot" r="5" fill="${c}" stroke="var(--panel)" stroke-width="2" style="opacity:0"/><rect width="${w}" height="${H}" fill="transparent"/></svg><div class="ldtip" hidden></div>`;

const eloDraw = (pts0, mode) => w => {
  const H = 180, P = { l: 38, r: 10, t: 12, b: 22 }, n = pts0.length;
  const vals = pts0.map(p => p.elo), pad = Math.max(10, (Math.max(...vals) - Math.min(...vals)) * .15);
  const tk = ticksFor(Math.min(...vals) - pad, Math.max(...vals) + pad), lo = tk[0], hi = tk[tk.length - 1];
  const x = i => P.l + (n > 1 ? i / (n - 1) : .5) * (w - P.l - P.r), y = v => P.t + (1 - (v - lo) / (hi - lo || 1)) * (H - P.t - P.b);
  const c = MODE_COLOR[mode], d = pts0.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.elo).toFixed(1)}`).join('');
  const short = pts0[n - 1].t - pts0[0].t < 2 * 864e5;
  const fd = t => new Date(t).toLocaleString(LOCALE[LANG], short ? { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' } : { day: 'numeric', month: 'short' });
  const pts = pts0.map((p, i) => ({ x: +x(i).toFixed(1), y: +y(p.elo).toFixed(1), tip: `<b>${p.elo} ELO</b>${p.id ? ` <span class="${p.delta >= 0 ? 'win' : 'lose'}">${sgn(p.delta)}</span><br>${t('ld_match', { n: p.id })}` : ''}<br><span class="mute">${fd(p.t)}</span>` }));
  const xt = n > 2 ? [0, (n - 1) >> 1, n - 1] : [0, n - 1];
  return `<svg class="ldsvg" viewBox="0 0 ${w} ${H}" width="${w}" height="${H}" data-pts='${esc(JSON.stringify(pts))}'>
    ${tk.map(v => `<line class="g" x1="${P.l}" x2="${w - P.r}" y1="${y(v)}" y2="${y(v)}"/><text x="${P.l - 7}" y="${y(v) + 3.5}" text-anchor="end">${v}</text>`).join('')}
    ${xt.map((k, i) => `<text x="${x(k)}" y="${H - 5}" text-anchor="${i === 0 ? 'start' : i === xt.length - 1 ? 'end' : 'middle'}">${fd(pts0[k].t)}</text>`).join('')}
    <path d="${d}L${x(n - 1)},${H - P.b}L${x(0)},${H - P.b}Z" fill="${c}" opacity=".13"/><path d="${d}" fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    ${n <= 40 ? pts0.map((p, i) => p.id ? `<circle cx="${x(i)}" cy="${y(p.elo)}" r="3.5" fill="${c}" stroke="var(--panel)" stroke-width="2"/>` : '').join('') : ''}${tail(w, H, P, c)}`;
};
const kdDraw = (rows, mode) => w => {
  const H = 180, P = { l: 30, r: 8, t: 12, b: 16 }, n = rows.length;
  const max = Math.max(2, ...rows.map(r => r.kd), ...rows.map(r => r.avg));
  const tk = max <= 2 ? [0, 1, 2] : max <= 4 ? [0, 1, 2, 3, 4] : ticksFor(0, max), hi = tk[tk.length - 1];
  const bw = Math.max(4, Math.min(20, (w - P.l - P.r) / n - 4)), cx = i => P.l + (i + .5) * (w - P.l - P.r) / n, y = v => P.t + (1 - v / hi) * (H - P.t - P.b);
  const c = MODE_COLOR[mode], line = rows.map((r, i) => `${i ? 'L' : 'M'}${cx(i).toFixed(1)},${y(r.avg).toFixed(1)}`).join('');
  const bar = (x0, top) => { const h = H - P.b - top; return h <= 0 ? '' : `<path class="kb" d="M${x0},${H - P.b}V${top + Math.min(4, h)}q0,-4 4,-4h${bw - 8}q4,0 4,4V${H - P.b}Z"/>`; };
  const pts = rows.map((r, i) => ({ x: +cx(i).toFixed(1), y: +y(r.avg).toFixed(1), tip: `<b>${t('ld_match', { n: r.id })}</b><br>${r.k} / ${r.d} · ${t('ld_kdMatch')} ${kdf(r.kd)}<br>${t('ld_kdAvg')} ${kdf(r.avg)}` }));
  return `<svg class="ldsvg" viewBox="0 0 ${w} ${H}" width="${w}" height="${H}" data-pts='${esc(JSON.stringify(pts))}'>
    ${tk.map(v => `<line class="g ${v === 1 ? 'one' : ''}" x1="${P.l}" x2="${w - P.r}" y1="${y(v)}" y2="${y(v)}"/><text x="${P.l - 7}" y="${y(v) + 3.5}" text-anchor="end">${v}</text>`).join('')}
    ${rows.map((r, i) => bar(cx(i) - bw / 2, y(Math.min(r.kd, hi)))).join('')}<path d="${line}" fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round"/>${tail(w, H, P, c)}`;
};
const cmpDraw = (A, B) => w => {
  const H = 190, P = { l: 38, r: 10, t: 12, b: 22 }, now = Date.now();
  const firsts = [A, B].map(s => s.stats.elo30.find(x => x.id)?.t).filter(Boolean);
  const first = firsts.length ? Math.min(...firsts) : now - 30 * 864e5, t0 = first - Math.max(3600e3, (now - first) * .05);
  const line = s => { const p = s.elo30.map(x => ({ t: Math.max(t0, x.t), elo: x.elo, id: x.id, delta: x.delta })); if (p[p.length - 1].t < now) p.push({ t: now, elo: s.elo }); return p; };
  const a = line(A.stats), b = line(B.stats), all = [...a, ...b].map(p => p.elo);
  const pad = Math.max(10, (Math.max(...all) - Math.min(...all)) * .12), tk = ticksFor(Math.min(...all) - pad, Math.max(...all) + pad), lo = tk[0], hi = tk[tk.length - 1];
  const x = tt => P.l + (tt - t0) / (now - t0) * (w - P.l - P.r), y = v => P.t + (1 - (v - lo) / (hi - lo || 1)) * (H - P.t - P.b);
  const path = p => p.map((q, i) => i ? `H${x(q.t).toFixed(1)}V${y(q.elo).toFixed(1)}` : `M${x(q.t).toFixed(1)},${y(q.elo).toFixed(1)}`).join('');
  const short = now - t0 < 2 * 864e5;
  const fd = tt => new Date(tt).toLocaleString(LOCALE[LANG], short ? { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' } : { day: 'numeric', month: 'short' });
  const tipOf = (q, who, c) => ({ x: +x(q.t).toFixed(1), y: +y(q.elo).toFixed(1), c, tip: `<b style="color:${c}">${esc(who.nick)}</b><br><b>${q.elo} ELO</b>${q.id ? ` <span class="${q.delta >= 0 ? 'win' : 'lose'}">${sgn(q.delta)}</span>` : ''}<br><span class="mute">${fd(q.t)}</span>` });
  const pts = [...a.filter(q => q.id).map(q => tipOf(q, A, CMP.a)), ...b.filter(q => q.id).map(q => tipOf(q, B, CMP.b))];
  const dots = (p, c) => p.length <= 60 ? p.filter(q => q.id).map(q => `<circle cx="${x(q.t)}" cy="${y(q.elo)}" r="3" fill="${c}" stroke="var(--panel)" stroke-width="1.5"/>`).join('') : '';
  return `<svg class="ldsvg" viewBox="0 0 ${w} ${H}" width="${w}" height="${H}" data-pts='${esc(JSON.stringify(pts))}'>
    ${tk.map(v => `<line class="g" x1="${P.l}" x2="${w - P.r}" y1="${y(v)}" y2="${y(v)}"/><text x="${P.l - 7}" y="${y(v) + 3.5}" text-anchor="end">${v}</text>`).join('')}
    ${[t0, (t0 + now) / 2, now].map((tt, i) => `<text x="${x(tt)}" y="${H - 5}" text-anchor="${['start', 'middle', 'end'][i]}">${fd(tt)}</text>`).join('')}
    <path d="${path(b)}" fill="none" stroke="${CMP.b}" stroke-width="2" stroke-linejoin="round"/><path d="${path(a)}" fill="none" stroke="${CMP.a}" stroke-width="2" stroke-linejoin="round"/>
    ${dots(b, CMP.b)}${dots(a, CMP.a)}${tail(w, H, P, CMP.a)}`;
};

const statCache = {};
async function stats(id, mode) {
  const k = id + '|' + mode, c = statCache[k];
  if (c && Date.now() - c.at < 30_000) return c.data;
  const data = await api(`/api/stats/player?id=${encodeURIComponent(id)}&mode=${mode}`);
  statCache[k] = { at: Date.now(), data };
  return data;
}
const canCompare = p => p.id !== S.me?.id && (S.live?.friends?.list?.some(f => f.id === p.id) || S.me?.premium?.tier === 'plus' || S.me?.staff || S.me?.admin);

async function profileBlock(p, mode) {
  const anchor = document.querySelector('.pwrap .pstats');
  if (!anchor || document.getElementById('ld-stats')) return;
  const box = document.createElement('div');
  box.id = 'ld-stats'; box.className = 'card ldcard';
  anchor.after(box);
  const isMe = p.id === S.me?.id;
  const head = `<div class="card-h"><h4>${t('ld_stats')} · ${mode}</h4><span class="grow"></span>
    ${isMe && (S.live?.friends?.list?.length || 0) ? `<button class="btn ghost sm" id="ld-cmpf">${t('ld_compareFriend')}</button>` : ''}
    ${canCompare(p) ? `<button class="btn ghost sm" id="ld-cmp">${t('ld_compare')}</button>` : ''}
    <button class="btn ghost sm" id="ld-share"><svg viewBox="0 0 24 24" class="ldi"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>${t('ld_share')}</button></div>`;
  box.innerHTML = head + `<div class="empty-note">${t('loading')}</div>`;
  const bind = () => {
    $('#ld-share').onclick = async () => { await copyText(profileLink(p)); toast(t('ld_copied')); };
    if ($('#ld-cmp')) $('#ld-cmp').onclick = () => openCompareD(p, mode);
    if ($('#ld-cmpf')) $('#ld-cmpf').onclick = () => pickFriend(mode);
  };
  bind();
  let s;
  try { s = await stats(p.id, mode); } catch (e) { box.querySelector('.empty-note').textContent = e.message; return; }
  if (!document.body.contains(box)) return;
  if (!s.games) { box.innerHTML = head + `<div class="empty-note">${t('ld_noData')}</div>`; bind(); return; }
  const mapC = (m, label, cls) => m ? `<div class="ldmap ${cls}" style="background-image:url(${mapImg(m.map)})"><span>${label}</span><b>${esc(mapName(m.map))}</b><small>${m.wr}% · ${m.w}–${m.l} · K/D ${kdf(m.kd)}</small></div>` : '';
  box.innerHTML = head + `
    <div class="ldtop">
      <div class="ldform"><span class="mute">${t('ld_form')}</span><div class="form">${s.form.map(f => `<span class="chip ${f.won ? 'w' : 'l'}" title="${esc(`${t('ld_match', { n: f.id })} · ${mapName(f.map)} · ${f.k}/${f.d} · ${sgn(f.delta)}`)}">${f.won ? t('winShort') : t('lossShort')}</span>`).join('')}</div></div>
      <div class="ldk"><b>${s.avgKills}</b><span>${t('ld_avgKills')}</span></div><div class="ldk"><b>${s.avgDeaths}</b><span>${t('ld_avgDeaths')}</span></div><div class="ldk"><b>${s.peak}</b><span>${t('ld_peak')}</span></div>
      <div class="ld30"><span class="mute">${t('ld_30d')}</span><b>${t('ld_last30', { g: s.last30.games, wr: s.last30.wr, kd: kdf(s.last30.kd), e: sgn(s.last30.elo) })}</b></div>
    </div>
    <div class="ldgrid">
      <div><h5>${t('ld_elo30')}</h5><div class="ldchart" id="ld-elo"></div></div>
      <div><h5>${t('ld_kdTrend')}</h5><div class="ldleg"><span><i class="lb"></i>${t('ld_kdMatch')}</span><span><i class="ll" style="background:${MODE_COLOR[mode]}"></i>${t('ld_kdAvg')}</span></div><div class="ldchart" id="ld-kd"></div></div>
      <div class="ldmaps">${mapC(s.best, t('ld_bestMap'), 'best')}${mapC(s.worst, t('ld_worstMap'), 'worst')}</div>
    </div>`;
  bind();
  mount($('#ld-elo'), eloDraw(s.elo30, mode));
  if (s.kdTrend.length) mount($('#ld-kd'), kdDraw(s.kdTrend, mode));
}

function pickFriend(mode) {
  const list = S.live?.friends?.list || [];
  modal(`<div class="card accent col" style="width:440px"><h3 style="margin:0">${t('ld_pickFriend')}</h3>
    <div class="ldfr">${list.length ? list.map(f => `<button class="ldfrb" data-ldf="${esc(f.id)}">${avaF(f)}<span class="num">${nickHtml(f)}</span></button>`).join('') : `<div class="empty-note">${t('ld_noFriends')}</div>`}</div>
    <button class="btn ghost" data-close>${t('close')}</button></div>`, box => {
    box.querySelectorAll('[data-ldf]').forEach(b => b.onclick = () => { const f = list.find(x => x.id === b.dataset.ldf); openCompareD(f, mode); });
  });
}

async function openCompareD(other, mode) {
  let d;
  try { d = await api(`/api/stats/compare?id=${encodeURIComponent(other.id)}&mode=${mode}`); } catch (e) { return toast(e.message, true); }
  const A = d.a, B = d.b, a = A.stats, b = B.stats;
  const row = (label, x, y, fmt = v => v, lowWins = false) => { const aw = lowWins ? x < y : x > y, bw = lowWins ? y < x : y > x;
    return `<div class="ldcr"><div class="${aw ? 'win' : ''}">${fmt(x)}</div><span class="mute">${label}</span><div class="${bw ? 'win' : ''}">${fmt(y)}</div></div>`; };
  const form = s => `<div class="form">${s.form.map(f => `<span class="chip ${f.won ? 'w' : 'l'}">${f.won ? t('winShort') : t('lossShort')}</span>`).join('')}</div>`;
  modal(`<div class="card accent col ldcmp" style="width:720px">
    <div class="ldch"><div><i style="background:${CMP.a}"></i>${avaF(A, 'lg')}<h3>${nickHtml(A)}</h3></div><b class="mute">${t('ld_vs')}</b><div><i style="background:${CMP.b}"></i>${avaF(B, 'lg')}<h3>${nickHtml(B)}</h3></div></div>
    <div class="seg sm" style="align-self:center">${PUB_MODES.map(m => `<button data-ldm="${m}" class="${m === mode ? 'on' : ''}">${modeX(m)}</button>`).join('')}</div>
    <div><h5>${t('ld_elo30')}</h5><div class="ldleg"><span><i class="ll" style="background:${CMP.a}"></i>${esc(A.nick)}</span><span><i class="ll" style="background:${CMP.b}"></i>${esc(B.nick)}</span></div><div class="ldchart" id="ld-cmpc"></div></div>
    <div class="ldcrs">
      ${row('ELO', a.elo, b.elo)}${row(t('ld_peak'), a.peak, b.peak)}${row(t('ld_games'), a.games, b.games)}${row(t('ld_wr'), a.wr, b.wr, v => v + '%')}
      ${row('K/D', a.kd, b.kd, kdf)}${row(t('ld_avgKills'), a.avgKills, b.avgKills)}${row(t('ld_avgDeaths'), a.avgDeaths, b.avgDeaths, v => v, true)}${row(t('ld_streak'), a.bestStreak, b.bestStreak)}
      ${row(t('ld_30d') + ' · ELO', a.last30.elo, b.last30.elo, sgn)}
      <div class="ldcr"><div>${form(a)}</div><span class="mute">${t('ld_form')}</span><div>${form(b)}</div></div>
      <div class="ldcr"><div>${a.best ? esc(mapName(a.best.map)) + ` <span class="mute">${a.best.wr}%</span>` : '–'}</div><span class="mute">${t('ld_bestMap')}</span><div>${b.best ? esc(mapName(b.best.map)) + ` <span class="mute">${b.best.wr}%</span>` : '–'}</div></div>
    </div>
    <button class="btn ghost" data-close>${t('close')}</button></div>`, box => {
    box.querySelectorAll('[data-ldm]').forEach(x => x.onclick = () => openCompareD(other, x.dataset.ldm));
    setTimeout(() => mount(box.querySelector('#ld-cmpc'), cmpDraw(A, B)), 0);
  });
}

const recCache = {};
async function recordsBlock() {
  const head = document.querySelector('.lbhead');
  if (!head || document.getElementById('ld-rec')) return;
  const mode = S.lbMode;
  const box = document.createElement('div'); box.id = 'ld-rec'; box.className = 'ldrec';
  head.after(box);
  let r = recCache[mode];
  if (!r || Date.now() - r.at > 120_000) {
    try { r = recCache[mode] = { at: Date.now(), data: await api('/api/stats/records?mode=' + mode) }; } catch { box.remove(); return; }
  }
  if (!document.body.contains(box) || S.lbMode !== mode) return;
  const R = r.data;
  const card = (title, x, line, ic) => `<div class="ldrc ${x ? 'click' : ''}" ${x ? `data-uid="${esc(x.uid)}"` : ''}><div class="ldrt">${ic}<span>${title}</span></div>
    ${x ? `<div class="ldrw">${avaF(x.player)}<div><div class="num">${nickHtml(x.player)}</div><small class="mute">${line(x)}</small></div></div>` : `<small class="mute">${t('ld_recNone')}</small>`}</div>`;
  const I = d => `<svg viewBox="0 0 24 24" class="ldi">${d}</svg>`;
  box.innerHTML = `<h4>${t('ld_records')}</h4><div class="ldrg">
    ${card(t('ld_recKills'), R.kills, x => t('ld_killsIn', { k: x.v, map: mapName(x.map) }), I('<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>'))}
    ${card(t('ld_recStreak'), R.streak, x => t('ld_winsRow', { n: x.v }), I('<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 1 1 2 2 2 4 1-2 1-4 1-7z"/>'))}
    ${card(t('ld_recGain'), R.gain, x => t('ld_eloIn', { n: x.v, g: x.games }), I('<path d="M4 17l6-6 4 4 6-7M14 8h6v6"/>'))}
    ${card(t('ld_recKd'), R.kd, x => t('ld_kdIn', { v: kdf(x.v), g: x.games }), I('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'))}
  </div>`;
  box.querySelectorAll('[data-uid]').forEach(el => el.onclick = () => go('profile', el.dataset.uid));
}

const wrapAsync = (name, after) => {
  const orig = window[name];
  if (typeof orig !== 'function') return;
  window[name] = async function (...a) { const r = await orig.apply(this, a); try { await after(...a); } catch (e) { console.warn('[lane-d]', name, e); } return r; };
};
wrapAsync('renderProfile', () => { const p = S.profCache; if (S.page === 'profile' && p && p.id === S.profileId) return profileBlock(p, S.profMode || '2v2'); });
{ const orig = window.drawLeaderboard; if (typeof orig === 'function') window.drawLeaderboard = function (...a) { const r = orig.apply(this, a); recordsBlock().catch(() => {}); return r; }; }
wrapAsync('renderStaff', async () => {
  if (S.page !== 'staff' || S.staffTab !== 'tools' || !S.me?.admin) return;
  const body = document.querySelector('.stab-body');
  if (!body || document.getElementById('ld-backup')) return;
  const info = await api('/api/admin/backups').catch(() => null);
  const card = document.createElement('div'); card.id = 'ld-backup'; card.className = 'card'; card.style.marginTop = '16px';
  const last = info?.last;
  card.innerHTML = `<div class="card-h"><h4>${t('ld_backup')}</h4><span class="grow"></span><span class="tag">${t('ld_storage', { s: info?.store || '?' })}</span></div>
    <p class="mute" style="margin:6px 0 12px">${t('ld_backupHint')}</p>
    <div class="row" style="gap:12px;flex-wrap:wrap"><button class="btn sm" id="ld-bk">${t('ld_backupDl')}</button>
    <span class="mute">${last ? t('ld_backupLast', { t: fmtDT(last.at), s: (last.size / 1024).toFixed(1) + ' KB', st: esc(last.status || '') }) : info?.list?.length ? esc(info.list[0].name) + ' · ' + (info.list[0].size / 1024).toFixed(1) + ' KB' : t('ld_backupNone')}</span></div>`;
  body.append(card);
  $('#ld-bk').onclick = run(async () => {
    const r = await fetch(S.server + '/api/admin/backup', { headers: { Authorization: 'Bearer ' + S.token, 'X-Konzte-Hwid': S.hwid, 'X-Konzte-Client': S.appInfo?.version || '' } });
    if (!r.ok) throw new Error('Backup: ' + r.status);
    const name = (/filename="([^"]+)"/.exec(r.headers.get('Content-Disposition') || '') || [])[1] || `db-${new Date().toISOString().slice(0, 10)}.json.gz`;
    const a = document.createElement('a'); a.href = URL.createObjectURL(await r.blob()); a.download = name; a.click();
  });
});
function acFilesHtml(f) {
  if (!f) return '';
  const head = `<div class="mute" style="margin-top:6px"><b>${t('ld_acFiles')}</b> · ${fmtDT(f.at)} · ${t(!f.ref ? 'ld_acFilesNoRef' : f.same ? 'ld_acFilesOk' : 'ld_acFilesBad', { n: f.n })}</div>`;
  const row = (k, l, cls) => l?.length ? `<div class="acsig"><span class="mute">${t(k)}:</span>${l.map(p => `<span class="tag ${cls}" title="${esc(p)}">${esc(p.split('/').slice(-2).join('/'))}</span>`).join('')}</div>` : '';
  return head + (f.ref && !f.same ? row('ld_acMissing', f.missing, 'red') + row('ld_acChanged', f.changed, 'red') + row('ld_acExtra', f.extra, '') : '');
}
wrapAsync('openDossier', async uid => {
  const box = document.querySelector('#modal .card'); if (!box || box.querySelector('#ld-acc')) return;
  const a = await api('/api/staff/ac-client?uid=' + encodeURIComponent(uid)).catch(() => null);
  const el = document.createElement('div'); el.id = 'ld-acc'; el.className = 'ldacc';
  el.innerHTML = `<h4>${t('ld_acClient')}</h4>${a ? `<div class="mute">${esc(a.platform)} · ${esc(a.ver)} · ${fmtDT(a.last)} · ${a.found ? 'CombatMaster ✓' : 'CombatMaster —'}${a.exe ? ` · ${esc(a.exe.name)} ${esc(a.exe.hash.slice(0, 12))}` : ''}</div>
    ${a.hits?.length ? `<div class="acsig">${a.hits.map(h => `<span class="tag ${h.kind === 'cheat' ? 'red' : ''}">${esc(h.name)} · #${esc(h.match)} · ${fmtDT(h.at)}</span>`).join('')}</div>` : ''}${acFilesHtml(a.files)}${a.modules ? `<div class="mute" style="margin-top:6px"><b>${t('ld_acMods', { n: a.modules.n })}</b> · ${fmtDT(a.modules.at)}${a.modules.rare ? '' : ' · ' + t('ld_acModsNoRef')}</div>${a.modules.rare?.length ? `<div class="acsig"><span class="mute">${t('ld_acModsRare')}:</span>${a.modules.rare.map(x => `<span class="tag">${esc(x)}</span>`).join('')}</div>` : ''}` : ''}` : `<div class="mute">${t('ld_acNoData')}</div>`}`;
  box.append(el);
});

{ const orig = window.openResultForm;
  if (typeof orig === 'function') window.openResultForm = function (...a) {
    const r = orig.apply(this, a);
    const m = S.live?.match;
    if (K.latestShot && m && $('#rf-steam')) K.latestShot().then(sh => {
      const since = m.liveAt || m.created || 0;
      if (!sh?.dataUrl || sh.mtime < since || !$('#rf-steam') || $('#ld-shot')) return;
      const el = document.createElement('div'); el.id = 'ld-shot'; el.className = 'ldshot';
      el.innerHTML = `<img src="${sh.dataUrl}" alt=""><div class="grow"><div>${t('ld_shotOffer', { t: new Date(sh.mtime).toLocaleTimeString(LOCALE[LANG], { hour: '2-digit', minute: '2-digit' }) })}</div>
        <button class="btn sm" id="ld-shot-use">${t('ld_shotUse')}</button></div>`;
      $('#rf-drop').before(el);
      $('#ld-shot-use').onclick = () => { el.remove(); $('#rf-steam').click(); };
    }).catch(() => {});
    return r;
  }; }

let acCfg = null, acBusy = false, acLast = 0, acMatch = null, acFilesFull = false;
async function acTick() {
  const m = S.live?.match;
  if (!K.acScan || !S.token || !m || m.state !== 'live' || m.test || acBusy) return;
  if (acMatch !== m.id) { acMatch = m.id; acLast = Date.now() - (acCfg?.interval || 60) * 1000 + 30_000; }
  if (!acCfg) { try { acCfg = await api('/api/ac/config'); } catch { return; } }
  if (Date.now() - acLast < (acCfg.interval || 60) * 1000) return;
  acBusy = true; acLast = Date.now();
  try {
    const nn = acCfg.att ? await api('/api/ac/nonce').catch(() => null) : null;
    const r = await K.acScan({ names: acCfg.names || [], hashes: acCfg.hashes || [], files: !!acCfg.files, modules: !!acCfg.modules, filesFull: acFilesFull, deep: !!acCfg.deep, driverHashes: acCfg.drivers || [], nonce: nn?.n || '' });
    acFilesFull = false;
    if (r) { const res = await api('/api/ac/client', { match: m.id, ...r }); if (res?.needFiles) { acFilesFull = true; acLast = Date.now() - (acCfg.interval || 60) * 1000 + 5000; } }
  } catch (e) { console.warn('[ac]', e.message); }
  finally { acBusy = false; }
}
setInterval(acTick, 5000);
})();

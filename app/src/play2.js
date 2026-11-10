(() => {
  const L = {
    en: {
      pl2Season: 'Season {n}', pl2Prize: 'Prize pool', pl2More: 'Details', pl2Live: 'live', pl2Today: 'today', pl2Players: 'players', pl2Queue: 'in queue',
      pl2D1: 'Solo duel: one on one, own rating. No party and no voice — just you and your opponent.', pl2D2: 'Main ranked mode: 4 players, maps are banned, voice in Discord. Party up to 2.',
      pl2Wait: 'Wait', pl2InQ: 'In queue', pl2Match: 'Match', pl2MatchLen1: '~10 min', pl2MatchLen2: '~15 min', pl2Closed: 'Closed', pl2WaitNa: 'n/a',
      pl2Party: 'Your party', pl2PartySub: 'Always in one team', pl2You: 'you', pl2Invite: 'Invite a friend', pl2Code: 'Party code', pl2JoinCode: 'Join by code',
      pl2StakeCal: 'Calibration {n}/{m} · win up to +{w} ELO, loss up to −{l}', pl2Stake: 'Level {lvl} · {elo} ELO · ±5–30 ELO per match',
      pl2Next: 'What happens after you press', pl2How: 'How it works',
      pl2S1: 'Search', pl2S1d: '{eta}, you can minimise the window', pl2S1d0: 'You can minimise the window — we will call you', pl2S2: 'Accept', pl2S2d: '30 seconds, with a sound and a notification',
      pl2S3: 'Map ban', pl2S3d: 'Captains ban, one map is left', pl2S4: 'Lobby in game', pl2S4d: 'Add the host as a friend by game ID',
      pl2S5: 'Game', pl2S5d: 'Play the match in Combat Master', pl2S6: 'Screenshot', pl2S6d: 'A captain uploads the scoreboard — ELO right away',
      pl2Quests: 'Daily quests', pl2QSub: '{n} to claim', pl2QSub0: 'Open quests →', pl2Pass: 'Pass', pl2Lvl: 'Lv. {n}', pl2PassSub: 'Claim →', pl2PassOpen: 'Open →',
      pl2Streak: 'Login streak', pl2StreakSub: 'win streak {n}', pl2Last: 'Last match', pl2LastNone: 'No matches yet', pl2Recap: 'Week recap', pl2RecapSub: 'MVP · {n}',
      pl2Rating: 'My rating', pl2CalDone: '{n} of {m} games', pl2CalHint: '{n} more — and your level opens', pl2All: 'All',
      obTitle: 'First steps in Konzte', obSub: '{n} short steps — and you know everything you need for ranked matches. KF for each, a bonus for all of them.',
      obDone: 'done', obHide: 'Hide', obMin: 'Collapse', obExpand: 'Show steps', obOpen: 'All steps', obShowPlay: 'Show on the Play page',
      obChip: 'First steps {n}/{m}', obClaim: 'Claim +{n}', obOptional: 'optional', obGotAll: 'First steps complete! +{kf} KF · +{xp} pass XP',
      obGot: '+{n} KF', obAllTitle: 'Reward for all steps', obAllSub: '+{kf} KF and +{xp} pass XP', obAllLeft: '{n} steps left', obAllReady: 'Claim the reward',
      obAllDone: 'Reward received — thanks for playing!', obTotal: 'Up to {n} KF in total', obHidden: 'The checklist is hidden from the Play page.',
      ob_gameid: 'Link your Combat Master game ID', ob_gameid_d: 'The host adds you to the lobby by it', ob_gameid_b: 'Account',
      ob_notif: 'Turn on the «Match found» sound and notification', ob_notif_d: 'Sound and a pop-up even when Konzte is minimised', ob_notif_b: 'Turn on',
      ob_calib: 'Play 5 calibration matches', ob_calib_d: 'Win up to +75 ELO, loss up to −50 — you reach your level fast. Any mode counts.', ob_calib_b: 'Play',
      ob_party: 'Party up with a friend', ob_party_d: 'A party always ends up in one team. Invite by nick or code', ob_party_b: 'Create party',
      ob_clan: 'Join a clan or create your own', ob_clan_d: 'Clan wars 5×5 and a separate clan leaderboard', ob_clan_b: 'Clans',
      ob_pass: 'Open the Season Pass', ob_pass_d: 'Levels come from matches and quests; cosmetics only, no effect on ELO', ob_pass_b: 'Pass',
      ob_friend: 'Add a friend', ob_friend_d: 'See who is online and invite them in one click', ob_friend_b: 'Find',
      obFaq: 'FAQ',
      obQ1: 'How do I get into the lobby?', obA1: 'After the map ban the room shows the host. Add them as a friend in Combat Master by game ID — they will invite you to the private lobby.',
      obQ2: 'Who submits the result?', obA2: 'A captain uploads the scoreboard screenshot after the game. The rest is automatic; if something is wrong, open a dispute from the match.',
      obQ3: 'What is calibration?', obA3: 'Your first 5 games in each mode. A win gives up to +75 ELO, a loss takes up to −50; your level is hidden until calibration is done.',
      obQ4: 'Do the pass or KF affect ELO?', obA4: 'No. The pass, quests and KF only give cosmetics. ELO and matchmaking depend on match results only.',
      obQ5: 'Something went wrong — where do I ask?', obA5: 'Open Support in the menu: a ticket goes straight to the staff.',
      obSetRow: 'First steps', obSetRowH: 'Newcomer checklist with KF rewards',
      obs_gameid: 'Game ID', obs_notif: 'Sound', obs_calib: 'Calibration', obs_party: 'Party', obs_clan: 'Clan', obs_pass: 'Pass', obs_friend: 'Friend',
    },
    uk: {
      pl2Season: 'Сезон {n}', pl2Prize: 'Призовий фонд', pl2More: 'Докладніше', pl2Live: 'йдуть', pl2Today: 'сьогодні', pl2Players: 'гравців', pl2Queue: 'у черзі',
      pl2D1: 'Соло-дуель: один на один, свій рейтинг. Без паті й без войсу — лише ти і суперник.', pl2D2: 'Основний рейтинговий режим: 4 гравці, бан карт, войс у Discord. Паті до 2 людей.',
      pl2Wait: 'Очікування', pl2InQ: 'У черзі', pl2Match: 'Матч', pl2MatchLen1: '~10 хв', pl2MatchLen2: '~15 хв', pl2Closed: 'Закрито', pl2WaitNa: 'н/д',
      pl2Party: 'Твоє паті', pl2PartySub: 'Завжди в одній команді', pl2You: 'ти', pl2Invite: 'Запросити друга', pl2Code: 'Код паті', pl2JoinCode: 'Увійти за кодом',
      pl2StakeCal: 'Калібрування {n}/{m} · перемога до +{w} ELO, поразка до −{l}', pl2Stake: 'Рівень {lvl} · {elo} ELO · ±5–30 ELO за матч',
      pl2Next: 'Що буде після натискання', pl2How: 'Як це працює',
      pl2S1: 'Пошук', pl2S1d: '{eta}, вікно можна згорнути', pl2S1d0: 'Вікно можна згорнути — покличемо', pl2S2: 'Прийняти', pl2S2d: '30 секунд, прийде звук і сповіщення',
      pl2S3: 'Бан карт', pl2S3d: 'Банять капітани, лишається одна', pl2S4: 'Лобі в грі', pl2S4d: 'Додай хоста в друзі за game ID',
      pl2S5: 'Гра', pl2S5d: 'Матч у Combat Master', pl2S6: 'Скриншот', pl2S6d: 'Капітан кидає таблицю — ELO одразу',
      pl2Quests: 'Завдання дня', pl2QSub: 'забрати: {n}', pl2QSub0: 'До завдань →', pl2Pass: 'Пропуск', pl2Lvl: 'Рів. {n}', pl2PassSub: 'Забрати →', pl2PassOpen: 'Відкрити →',
      pl2Streak: 'Вхід поспіль', pl2StreakSub: 'перемог поспіль: {n}', pl2Last: 'Останній матч', pl2LastNone: 'Матчів ще немає', pl2Recap: 'Підсумок тижня', pl2RecapSub: 'MVP · {n}',
      pl2Rating: 'Мій рейтинг', pl2CalDone: '{n} з {m} ігор', pl2CalHint: 'Ще {n} — і відкриється твій рівень', pl2All: 'Усі',
      obTitle: 'Перші кроки в Konzte', obSub: '{n} коротких кроків — і ти знаєш усе потрібне для рейтингових матчів. За кожен — KF, за всі — бонус.',
      obDone: 'готово', obHide: 'Сховати', obMin: 'Згорнути', obExpand: 'Показати кроки', obOpen: 'Усі кроки', obShowPlay: 'Показувати на «Грати»',
      obChip: 'Перші кроки {n}/{m}', obClaim: 'Забрати +{n}', obOptional: 'необов\'язково', obGotAll: 'Перші кроки пройдено! +{kf} KF · +{xp} XP пропуска',
      obGot: '+{n} KF', obAllTitle: 'Нагорода за всі кроки', obAllSub: '+{kf} KF і +{xp} XP пропуска', obAllLeft: 'лишилось кроків: {n}', obAllReady: 'Забрати нагороду',
      obAllDone: 'Нагороду отримано — гарних ігор!', obTotal: 'Разом до {n} KF', obHidden: 'Чек-лист сховано зі сторінки «Грати».',
      ob_gameid: 'Вказати game ID з Combat Master', ob_gameid_d: 'За ним хост додасть тебе в лобі', ob_gameid_b: 'Акаунт',
      ob_notif: 'Увімкнути звук і сповіщення «Матч знайдено»', ob_notif_d: 'Звук і спливаюче вікно, навіть коли Konzte згорнутий', ob_notif_b: 'Увімкнути',
      ob_calib: 'Зіграти 5 калібрувальних матчів', ob_calib_d: 'Перемога до +75 ELO, поразка до −50 — швидко дійдеш до свого рівня. Підходить будь-який режим.', ob_calib_b: 'Грати',
      ob_party: 'Зібрати паті з другом', ob_party_d: 'Паті завжди потрапляє в одну команду. Клич за ніком або кодом', ob_party_b: 'Створити паті',
      ob_clan: 'Вступити в клан або створити свій', ob_clan_d: 'Клан-вари 5×5 і окрема таблиця кланів', ob_clan_b: 'Клани',
      ob_pass: 'Відкрити сезонний пропуск', ob_pass_d: 'Рівні йдуть за матчі й завдання; лише косметика, на ELO не впливає', ob_pass_b: 'Пропуск',
      ob_friend: 'Додати друга', ob_friend_d: 'Видно, хто онлайн, і можна покликати в один клік', ob_friend_b: 'Знайти',
      obFaq: 'Часті питання',
      obQ1: 'Як потрапити в лобі?', obA1: 'Після бану карт у кімнаті матчу видно хоста. Додай його в друзі в Combat Master за game ID — він запросить у приватне лобі.',
      obQ2: 'Хто надсилає результат?', obA2: 'Капітан після гри завантажує скриншот таблиці. Далі все автоматично; якщо щось не так — відкрий спір із матчу.',
      obQ3: 'Що таке калібрування?', obA3: 'Перші 5 ігор у кожному режимі. Перемога дає до +75 ELO, поразка забирає до −50; рівень прихований, доки калібрування не завершено.',
      obQ4: 'Пропуск чи KF впливають на ELO?', obA4: 'Ні. Пропуск, завдання й KF дають лише косметику. ELO і підбір залежать тільки від результатів матчів.',
      obQ5: 'Щось пішло не так — куди писати?', obA5: 'Відкрий «Підтримку» в меню: тікет одразу бачить стафф.',
      obSetRow: 'Перші кроки', obSetRowH: 'Чек-лист новачка з нагородами KF',
      obs_gameid: 'Game ID', obs_notif: 'Звук', obs_calib: 'Калібрування', obs_party: 'Паті', obs_clan: 'Клан', obs_pass: 'Пропуск', obs_friend: 'Друг',
    },
    ru: {
      pl2Season: 'Сезон {n}', pl2Prize: 'Призовой фонд', pl2More: 'Подробнее', pl2Live: 'идут', pl2Today: 'сегодня', pl2Players: 'игроков', pl2Queue: 'в очереди',
      pl2D1: 'Соло-дуэль: один на один, свой рейтинг. Без пати и без войса — только ты и соперник.', pl2D2: 'Основной рейтинговый режим: 4 игрока, бан карт, войс в Discord. Пати до 2 человек.',
      pl2Wait: 'Ожидание', pl2InQ: 'В очереди', pl2Match: 'Матч', pl2MatchLen1: '~10 мин', pl2MatchLen2: '~15 мин', pl2Closed: 'Закрыто', pl2WaitNa: 'н/д',
      pl2Party: 'Твоя пати', pl2PartySub: 'Всегда в одной команде', pl2You: 'ты', pl2Invite: 'Пригласить друга', pl2Code: 'Код пати', pl2JoinCode: 'Войти по коду',
      pl2StakeCal: 'Калибровка {n}/{m} · победа до +{w} ELO, поражение до −{l}', pl2Stake: 'Уровень {lvl} · {elo} ELO · ±5–30 ELO за матч',
      pl2Next: 'Что будет после нажатия', pl2How: 'Как это работает',
      pl2S1: 'Поиск', pl2S1d: '{eta}, окно можно свернуть', pl2S1d0: 'Окно можно свернуть — позовём', pl2S2: 'Принять', pl2S2d: '30 секунд, придёт звук и уведомление',
      pl2S3: 'Бан карт', pl2S3d: 'Банят капитаны, остаётся одна', pl2S4: 'Лобби в игре', pl2S4d: 'Добавь хоста в друзья по game ID',
      pl2S5: 'Игра', pl2S5d: 'Матч в Combat Master', pl2S6: 'Скриншот', pl2S6d: 'Капитан кидает таблицу — ELO сразу',
      pl2Quests: 'Задания дня', pl2QSub: 'забрать: {n}', pl2QSub0: 'К заданиям →', pl2Pass: 'Пропуск', pl2Lvl: 'Ур. {n}', pl2PassSub: 'Забрать →', pl2PassOpen: 'Открыть →',
      pl2Streak: 'Вход подряд', pl2StreakSub: 'побед подряд: {n}', pl2Last: 'Последний матч', pl2LastNone: 'Матчей ещё нет', pl2Recap: 'Итоги недели', pl2RecapSub: 'MVP · {n}',
      pl2Rating: 'Мой рейтинг', pl2CalDone: '{n} из {m} игр', pl2CalHint: 'Ещё {n} — и откроется твой уровень', pl2All: 'Все',
      obTitle: 'Первые шаги в Konzte', obSub: '{n} коротких шагов — и ты знаешь всё, что нужно для рейтинговых матчей. За каждый — KF, за все — бонус.',
      obDone: 'готово', obHide: 'Скрыть', obMin: 'Свернуть', obExpand: 'Показать шаги', obOpen: 'Все шаги', obShowPlay: 'Показывать на «Играть»',
      obChip: 'Первые шаги {n}/{m}', obClaim: 'Забрать +{n}', obOptional: 'необязательно', obGotAll: 'Первые шаги пройдены! +{kf} KF · +{xp} XP пропуска',
      obGot: '+{n} KF', obAllTitle: 'Награда за все шаги', obAllSub: '+{kf} KF и +{xp} XP пропуска', obAllLeft: 'осталось шагов: {n}', obAllReady: 'Забрать награду',
      obAllDone: 'Награда получена — хороших игр!', obTotal: 'Всего до {n} KF', obHidden: 'Чек-лист скрыт со страницы «Играть».',
      ob_gameid: 'Указать game ID из Combat Master', ob_gameid_d: 'По нему хост добавит тебя в лобби', ob_gameid_b: 'Аккаунт',
      ob_notif: 'Включить звук и уведомление «Матч найден»', ob_notif_d: 'Звук и всплывающее окно, даже если Konzte свёрнут', ob_notif_b: 'Включить',
      ob_calib: 'Сыграть 5 калибровочных матчей', ob_calib_d: 'Победа до +75 ELO, поражение до −50 — быстро дойдёшь до своего уровня. Подходит любой режим.', ob_calib_b: 'Играть',
      ob_party: 'Собрать пати с другом', ob_party_d: 'Пати всегда попадает в одну команду. Позови по нику или коду', ob_party_b: 'Создать пати',
      ob_clan: 'Вступить в клан или создать свой', ob_clan_d: 'Клан-вары 5×5 и отдельная таблица кланов', ob_clan_b: 'Кланы',
      ob_pass: 'Открыть сезонный пропуск', ob_pass_d: 'Уровни идут за матчи и задания; только косметика, на ELO не влияет', ob_pass_b: 'Пропуск',
      ob_friend: 'Добавить друга', ob_friend_d: 'Видно, кто онлайн, и можно позвать в один клик', ob_friend_b: 'Найти',
      obFaq: 'Частые вопросы',
      obQ1: 'Как попасть в лобби?', obA1: 'После бана карт в комнате матча виден хост. Добавь его в друзья в Combat Master по game ID — он пригласит в приватное лобби.',
      obQ2: 'Кто отправляет результат?', obA2: 'Капитан после игры загружает скриншот таблицы. Дальше всё автоматически; если что-то не так — открой спор из матча.',
      obQ3: 'Что такое калибровка?', obA3: 'Первые 5 игр в каждом режиме. Победа даёт до +75 ELO, поражение забирает до −50; уровень скрыт, пока калибровка не завершена.',
      obQ4: 'Пропуск или KF влияют на ELO?', obA4: 'Нет. Пропуск, задания и KF дают только косметику. ELO и подбор зависят только от результатов матчей.',
      obQ5: 'Что-то пошло не так — куда писать?', obA5: 'Открой «Поддержку» в меню: тикет сразу видит стафф.',
      obSetRow: 'Первые шаги', obSetRowH: 'Чек-лист новичка с наградами KF',
      obs_gameid: 'Game ID', obs_notif: 'Звук', obs_calib: 'Калибровка', obs_party: 'Пати', obs_clan: 'Клан', obs_pass: 'Пропуск', obs_friend: 'Друг',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k], L[k]);
  const E = {
    uk: { 'Unknown step': 'Невідомий крок', 'Step is not completed yet': 'Крок ще не виконано', 'Finish all steps first': 'Спершу пройди всі кроки' },
    ru: { 'Unknown step': 'Неизвестный шаг', 'Step is not completed yet': 'Шаг ещё не выполнен', 'Finish all steps first': 'Сначала пройди все шаги' },
  };
  for (const k of Object.keys(E)) Object.assign(SERVER_ERRORS[k], E[k]);

  const IC = {
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    chev: '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
    gift: '<svg viewBox="0 0 24 24"><rect x="3.5" y="9" width="17" height="4" rx="1"/><path d="M5 13v7.5h14V13M12 9v11.5M12 9c-1.5-3.5-6-4-6-1.5S10 9 12 9zm0 0c1.5-3.5 6-4 6-1.5S14 9 12 9z"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  };
  const STEP_ORDER = ['gameid', 'notif', 'calib', 'party', 'clan', 'pass', 'friend'];
  const P2 = { onb: null, at: 0, busy: false, party: 0, faq: -1 };
  const ls = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch {} return null; };
  const sizeOf = m => ({ '1v1': 2, '2v2': 4 })[m] || 10;
  const partyMax = m => ({ '1v1': 1, '2v2': 2 })[m] || 5;
  const modeName = m => m.replace('v', ' × ');

  function onbLoad(force) {
    if (!S.token || !S.me?.gameId || P2.busy) return;
    if (!force && Date.now() - P2.at < 20_000) return;
    P2.busy = true; P2.at = Date.now();
    api('/api/onb').then(s => {
      const changed = JSON.stringify(s) !== JSON.stringify(P2.onb);
      P2.onb = s;
      if (changed && ((S.page === 'play' && !S.live?.match && !S.finishedMatch) || S.page === 'onboarding')) refresh();
    }).catch(() => {}).finally(() => { P2.busy = false; });
  }
  const onbMark = step => { if (P2.onb && !P2.onb.steps.find(s => s.id === step)?.done) api('/api/onb/mark', { step }).then(s => { P2.onb = s; }).catch(() => {}); };
  const onbVisible = () => { const o = P2.onb; return !!o && o.isNew && !o.hidden && !o.complete; };

  function stepAction(id) {
    if (id === 'gameid') { S.setTab = 'account'; go('settings'); }
    else if (id === 'notif') run(async () => {
      S.sound = true; await setCfg({ sound: true, notify: true });
      beep('match');
      P2.onb = await api('/api/onb/mark', { step: 'notif' }); refresh();
    })();
    else if (id === 'calib') { if (S.page !== 'play') go('play'); setTimeout(() => focusEl('[data-act="queue"]', '.pl2-go'), 80); }
    else if (id === 'party') {
      if (S.page !== 'play') go('play');
      if (!S.live?.party) wsSend({ t: 'party-create' });
      setTimeout(() => focusEl('.pl2-party'), 120);
    }
    else if (id === 'clan') go('clans');
    else if (id === 'pass') go('pass');
    else if (id === 'friend') { if (S.page !== 'play') go('play'); setTimeout(() => focusEl('#fr-q', '.friends-card'), 120); }
  }
  function focusEl(sel, flashSel) {
    const el = document.querySelector(sel), box = document.querySelector(flashSel || sel) || el;
    if (!box) return;
    box.scrollIntoView({ block: 'center', behavior: 'smooth' });
    box.classList.remove('pl2-flash'); void box.offsetWidth; box.classList.add('pl2-flash');
    if (el?.tagName === 'INPUT') el.focus();
  }
  const claimStep = run(async step => {
    const r = await api('/api/onb/claim', step === 'all' ? { all: true } : { step });
    P2.onb = r.state;
    if (r.me) { S.me = { ...S.me, ...r.me }; renderMe(); }
    sfx('coin');
    toast(step === 'all' ? t('obGotAll', { kf: r.got.kf, xp: r.got.xp }) : t('obGot', { n: r.got.kf }));
    if (typeof lcLoad === 'function' && step === 'all') lcLoad(true);
    refresh();
  });

  const ring = (n, m, size = 76) => {
    const R = size / 2 - 7, C = 2 * Math.PI * R, pct = m ? n / m : 0;
    return `<div class="ob-ring ${size < 60 ? 'sm' : ''}" style="width:${size}px;height:${size}px"><svg viewBox="0 0 ${size} ${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${R}" class="bg"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${R}" class="fg" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct)}" transform="rotate(-90 ${size / 2} ${size / 2})"/></svg>
      <div><b>${n}/${m}</b><span>${t('obDone')}</span></div></div>`;
  };
  const calDots = (n, m) => `<span class="ob-dots">${Array.from({ length: m }, (_, i) => `<i class="${i < n ? 'on' : ''}"></i>`).join('')}</span>`;
  function stepRow(s, cur) {
    const o = P2.onb;
    const sub = s.id === 'gameid' && S.me.gameId ? `<span class="gid">${esc(S.me.gameId)}</span> — ${t('ob_gameid_d')}` : t(`ob_${s.id}_d`);
    const extra = s.id === 'calib' && !s.claimed ? `<div class="ob-cal">${PUB_MODES.map(m => `<span>${modeName(m)} ${calDots(o.cal[m] || 0, o.cal.need)} <b class="num">${o.cal[m] || 0}/${o.cal.need}</b></span>`).join('')}</div>` : '';
    const btn = s.claimed ? '' : s.done ? `<button class="btn sm gold" data-ob-claim="${s.id}">${t('obClaim', { n: s.kf })} KF</button>`
      : `<button class="btn sm ${cur ? '' : 'ghost'}" data-ob-go="${s.id}">${t(`ob_${s.id}_b`)}</button>`;
    return `<div class="ob-step ${s.claimed ? 'claimed' : ''} ${s.done && !s.claimed ? 'ready' : ''} ${cur ? 'cur' : ''}">
      <i class="ob-n">${s.claimed ? IC.check : STEP_ORDER.indexOf(s.id) + 1}</i>
      <div class="grow"><b>${t('ob_' + s.id)}${s.optional ? ` <span class="mute ob-opt">· ${t('obOptional')}</span>` : ''}</b><span class="mute">${sub}</span>${extra}</div>
      <span class="ob-kf ${s.claimed ? 'got' : ''}"><i class="coin"></i>+${s.kf}</span>${btn}</div>`;
  }
  const curStep = o => o.steps.find(s => s.done && !s.claimed) || o.steps.find(s => !s.done && !s.optional) || o.steps.find(s => !s.claimed);
  function allCard(o) {
    const left = o.steps.filter(s => !s.optional && !s.claimed).length;
    return `<div class="ob-all ${o.all.ready ? 'ready' : ''} ${o.all.claimed ? 'claimed' : ''}"><span class="h4l">${t('obAllTitle')}</span>
      <div class="ob-gift">${IC.gift}</div><b>${t('obAllSub', { kf: o.all.kf, xp: o.all.xp })}</b><span class="mute">${t('obTotal', { n: o.sum })}</span>
      <div class="ob-bar"><i style="width:${(o.of - left) / o.of * 100}%"></i></div>
      ${o.all.claimed ? `<span class="win">${t('obAllDone')}</span>` : o.all.ready ? `<button class="btn gold" data-ob-claim="all">${t('obAllReady')}</button>` : `<span class="mute">${t('obAllLeft', { n: left })}</span>`}</div>`;
  }
  const faqHtml = () => `<div class="ob-faq"><span class="h4l">${t('obFaq')}</span>${[1, 2, 3, 4, 5].map(i => `<div class="ob-q ${P2.faq === i ? 'open' : ''}"><button data-ob-faq="${i}"><span>${t('obQ' + i)}</span>${IC.chev}</button><p>${t('obA' + i)}</p></div>`).join('')}</div>`;

  function onbBlock(full) {
    const o = P2.onb;
    if (!o) return '';
    const min = !full && ls('kz-onb-min') === '1';
    const cur = curStep(o);
    const allChip = !full ? `<span class="ob-allchip ${o.all.ready ? 'ready' : ''}">${IC.gift}${t('obAllSub', { kf: o.all.kf, xp: o.all.xp })}</span>` : '';
    const head = `<div class="ob-head">${ring(o.done, o.of, full ? 92 : min ? 52 : 64)}<div class="grow"><h2>${t('obTitle')}</h2><span class="mute">${t('obSub', { n: o.steps.length })}</span></div>
      <div class="ob-hb">${full ? `${o.hidden ? `<button class="btn ghost sm" data-ob-hide="0">${t('obShowPlay')}</button>` : ''}`
        : `${allChip}${o.all.ready ? `<button class="btn sm gold" data-ob-claim="all">${t('obAllReady')}</button>` : ''}<button class="btn ghost sm" data-ob-page>${t('obOpen')}</button><button class="btn ghost sm" data-ob-min>${min ? t('obExpand') : t('obMin')}</button><button class="btn ghost sm" data-ob-hide="1">${t('obHide')}</button>`}</div></div>`;
    if (!full) {
      const pills = `<div class="ob-pills">${o.steps.map((s, i) => `<button class="ob-pill ${s.claimed ? 'claimed' : s.done ? 'ready' : ''} ${s === cur ? 'cur' : ''}" ${s.claimed ? 'disabled' : s.done ? `data-ob-claim="${s.id}"` : `data-ob-go="${s.id}"`} title="${esc(t('ob_' + s.id))}">
        <i>${s.claimed ? IC.check : i + 1}</i><span>${t('obs_' + s.id)}</span><em>+${s.kf}</em></button>`).join('')}</div>`;
      return `<div class="card ob-card ${min ? 'min' : ''}">${head}${min ? '' : pills}${cur ? `<div class="ob-list">${stepRow(cur, true)}</div>` : ''}</div>`;
    }
    return `<div class="card ob-card ${full ? 'full' : ''}">${head}${full && o.hidden ? `<p class="mute" style="margin:0 0 10px">${t('obHidden')}</p>` : ''}
      <div class="ob-body"><div class="ob-list">${o.steps.map(s => stepRow(s, s === cur)).join('')}</div>
      <div class="ob-side">${allCard(o)}${faqHtml()}</div></div></div>`;
  }
  function bindOnb(root) {
    root.querySelectorAll('[data-ob-go]').forEach(b => b.onclick = e => { e.stopPropagation(); stepAction(b.dataset.obGo); });
    root.querySelectorAll('[data-ob-claim]').forEach(b => b.onclick = e => { e.stopPropagation(); b.disabled = true; claimStep(b.dataset.obClaim); });
    root.querySelectorAll('[data-ob-min]').forEach(b => b.onclick = () => { ls('kz-onb-min', ls('kz-onb-min') === '1' ? '0' : '1'); refresh(); });
    root.querySelectorAll('[data-ob-hide]').forEach(b => b.onclick = run(async () => { P2.onb = await api('/api/onb/hide', { on: b.dataset.obHide === '1' }); refresh(); }));
    root.querySelectorAll('[data-ob-faq]').forEach(b => b.onclick = () => { const i = +b.dataset.obFaq; P2.faq = P2.faq === i ? -1 : i; b.parentElement.parentElement.querySelectorAll('.ob-q').forEach((q, k) => q.classList.toggle('open', k + 1 === P2.faq)); });
    root.querySelectorAll('[data-ob-page]').forEach(b => b.onclick = () => go('onboarding'));
  }
  function renderOnb() {
    if (!P2.onb) { onbLoad(true); return render(`<div class="card empty-note">${t('loading')}</div>`); }
    render(`<div class="pl2 ob-page">${onbBlock(true)}</div>`);
    bindOnb($('#view'));
    onbLoad();
  }

  const _orig = renderPlay;
  const etaTxt = (mode, short) => {
    const e = S.live?.lane?.eta?.[mode];
    if (!e || e.ms == null) return short ? t('pl2WaitNa') : t('la_etaNone');
    if (short) return e.ms < 60_000 ? '< 1 ' + (LANG === 'uk' ? 'хв' : LANG === 'ru' ? 'мин' : 'min') : '≈ ' + Math.max(1, Math.round(e.ms / 60_000)) + ' ' + (LANG === 'uk' ? 'хв' : LANG === 'ru' ? 'мин' : 'min');
    return e.ms < 60_000 ? t('la_etaFast') : t('la_eta', { n: Math.max(1, Math.round(e.ms / 60_000)) });
  };

  function seasonStrip(st, ss) {
    const se = S.season, n = ss?.season ?? se?.season ?? 1;
    const name = se?.name || ({ 1: 'Relic', 2: 'Polaris' })[n] || '';
    const w = se?.warmup && !se.warmup.started ? se.warmup : null;
    const prize = (se?.ladders || (se ? [se] : [])).reduce((a, l) => a + (l.places || []).reduce((b, p) => b + (p.cash || 0), 0), 0);
    const qTotal = Object.values(st.queues).reduce((a, b) => a + b, 0);
    const chip = (v, l) => `<span class="pl2-chip"><b class="num">${v}</b>${l}</span>`;
    const o = P2.onb, obChip = o && !o.complete && (!onbVisible()) && o.isNew ? `<button class="pl2-chip ob-chip" data-ob-page>${t('obChip', { n: o.done, m: o.of })}</button>` : '';
    return `<div class="pl2-strip"><img class="pl2-slogo" src="assets/${S.seasonLogo || 'season1_logo.png'}" alt="">
      <div class="pl2-sname"><b>${t('pl2Season', { n })} · <em>${esc(name)}</em></b>${se?.status === 'beta' || se?.status === 'warmup' ? `<span class="tag gold">${t(se.status === 'warmup' ? 'seasonWarm' : 'seasonBeta')}</span>` : ''}</div>
      ${w ? `<div class="pl2-wu" title="${esc(t('wuGoal', { n: w.players, g: w.goal }))}"><div class="pl2-wbar"><i style="width:${Math.min(100, w.players / w.goal * 100)}%"></i></div><span class="num">${w.players} / ${w.goal}</span></div>` : ''}
      <div class="pl2-chips">${chip(st.online, t('online', { n: '' }).trim())}${chip(qTotal, t('pl2Queue'))}${chip(ss?.live ?? '–', t('pl2Live'))}${chip(ss?.today ?? '–', t('pl2Today'))}${chip(ss?.players ?? '–', t('pl2Players'))}${obChip}</div>
      <span class="grow"></span>
      ${prize ? `<span class="pl2-prize"><span class="mute">${t('pl2Prize')}</span><b>$${prize}</b></span>` : ''}
      ${se ? `<button class="btn ghost sm" data-pl2-season>${t('pl2More')}</button>` : ''}
      <div class="pl2-when">${seasonWhen()}</div></div>`;
  }
  function modeCards(st, mode) {
    return `<div class="pl2-modes">${PUB_MODES.map(m => `<button class="pl2-mode ${mode === m ? 'on' : ''}" data-mode="${m}" ${st.myQueue ? 'disabled' : ''} style="background-image:url(${mapImg(m === '1v1' ? 'Highrise' : 'Museum')})">
        ${mode === m ? `<span class="pl2-chk">${IC.check}</span>` : ''}<div class="pl2-mi"><div class="pl2-mt">${modeName(m)}</div><div class="pl2-md">${t(m === '1v1' ? 'pl2D1' : 'pl2D2')}</div>
        <div class="pl2-mm"><span>${t('pl2Wait')} <b>${etaTxt(m, true)}</b></span><span>${t('pl2InQ')} <b class="num">${st.queues[m] ?? 0} / ${sizeOf(m)}</b></span><span>${t('pl2Match')} <b>${t(m === '1v1' ? 'pl2MatchLen1' : 'pl2MatchLen2')}</b></span></div></div></button>`).join('')}</div>`;
  }
  function partyBar(st, mode) {
    const p = st.party, lead = p ? p.leader === S.me.id : true;
    const members = p ? p.members : [S.me];
    const max = Math.max(partyMax(mode), members.length);
    const slots = members.map(m => `<div class="pl2-slot ${m.id === S.me.id ? 'me' : 'f'}" title="${esc(m.nick)}">${avaF(m, 'pl2a')}
        <span class="pl2-sl">${m.id === S.me.id ? t('pl2You') : esc(m.nick)}</span>${p && m.id === p.leader ? '<i class="pl2-crown">★</i>' : ''}
        ${p && lead && m.id !== S.me.id ? `<button class="pl2-kick" data-kick="${m.id}" title="✕">${IC.x}</button>` : ''}</div>`).join('')
      + Array.from({ length: Math.max(0, max - members.length) }, () => `<button class="pl2-slot add" data-pl2-add title="${esc(t('pl2Invite'))}">${IC.plus}</button>`).join('');
    return `<div class="card pl2-party ${p ? 'on' : ''}"><div class="pl2-pl"><span class="h4l">${t('pl2Party')}${p ? ` · ${p.members.length}/${Math.max(2, p.members.length)}` : ''}</span><span class="mute">${t('pl2PartySub')}</span></div>
      <div class="pl2-slots">${slots}</div><span class="grow"></span>
      <div class="pl2-pr">${p ? `<span class="mute">${t('pl2Code')}: <code class="pcode" data-party="copy" title="${t('copyId')}">${esc(p.code)}</code></span><button class="btn ghost sm" data-party="leave">${t('leaveParty')}</button>`
        : `<div class="row"><input id="party-code" placeholder="${t('partyCodePh')}" maxlength="6"><button class="btn ghost sm" data-party="join">${t('join')}</button></div><button class="btn ghost sm" data-party="create">${t('createParty')}</button>`}</div></div>`;
  }
  function goBlock(st, mode, r, ban) {
    const inQ = st.myQueue === mode;
    const lvl = levelOf(r.elo);
    const stake = isCal(r) ? t('pl2StakeCal', { n: r.cal, m: 5, w: 75, l: 50 }) : t('pl2Stake', { lvl, elo: r.elo });
    const body = inQ
      ? `<div class="searching"><div class="pulse"></div><b>${t('searching')} <span data-since="${S.queuedAt}"></span></b><span class="mute">${modeName(mode)} · ${st.queues[mode] ?? 0} / ${sizeOf(mode)}</span><button class="btn ghost sm" data-act="leave" style="margin-left:auto">${t('cancel')}</button></div>`
      : st.party && st.party.leader !== S.me.id ? `<div class="searching"><b>${t('leaderStarts')}</b></div>`
      : mode === '1v1' && st.party?.members.length > 1 ? `<div class="searching"><b>${t('noParty1v1')}</b><button class="btn ghost sm" data-party="leave" style="margin-left:auto">${t('leaveParty')}</button></div>`
      : mode === '2v2' && st.party?.members.length > 2 ? `<div class="searching"><b>${t('noPartyDuel')}</b></div>`
      : `<button class="btn big pl2-find" data-act="queue" data-mode="${mode}" ${st.myQueue || ban ? 'disabled' : ''}><span>${st.party?.members.length > 1 ? t('findMatchParty', { n: st.party.members.length }) : t('findMatch')} ${modeName(mode).replace(/ /g, '')}</span><small>${stake}</small></button>`;
    return `<div class="pl2-go">${body}</div><div class="queue pl2-qanchor"></div>`;
  }
  function nextSteps(mode) {
    const s = [1, 2, 3, 4, 5, 6];
    return `<div class="card pl2-next"><div class="row"><span class="h4l">${t('pl2Next')}</span><span class="grow"></span><button class="pl2-link" data-pl2-guide>${t('pl2How')}</button></div>
      <div class="pl2-steps">${s.map(i => `<div class="pl2-st"><i>${i}</i><b>${t('pl2S' + i)}</b><span>${i === 1 && S.live?.lane?.eta?.[mode]?.ms == null ? t('pl2S1d0') : t('pl2S' + i + 'd', { eta: etaTxt(mode, true) })}</span></div>`).join('')}</div></div>`;
  }
  function tiles(myM) {
    const st = typeof LC !== 'undefined' ? LC.st : null;
    const tile = (cls, h, v, s, attr) => `<button class="card pl2-tile ${cls}" ${attr}><span class="h4l">${h}</span><b class="pl2-tv">${v}</b><span class="mute">${s}</span></button>`;
    const out = [];
    if (st) {
      const d = st.quests.d.list, doneN = d.filter(q => q.p >= q.n).length, claim = [...d, ...st.quests.w.list].filter(q => q.p >= q.n && !q.claimed).length;
      out.push(tile(claim ? 'hot' : '', t('pl2Quests'), `${doneN} / ${d.length}`, claim ? t('pl2QSub', { n: claim }) : t('pl2QSub0'), 'data-pl2-go="pass"'));
      const p = st.pass, ready = p.ready.f + p.ready.p;
      out.push(tile(ready ? 'gold' : '', t('pl2Pass'), `${t('pl2Lvl', { n: p.level })}${ready ? ` <span class="tag gold">${t('lcReady', { n: ready })}</span>` : ''}`, ready ? t('pl2PassSub') : t('pl2PassOpen'), 'data-pl2-go="pass"'));
      out.push(tile('', t('pl2Streak'), t('lcDays', { n: st.streak.login.n }), t('pl2StreakSub', { n: st.streak.win.n }), 'data-pl2-go="pass"'));
    }
    const h = myM[0];
    out.push(h ? tile('', t('pl2Last'), `<span class="${h.delta > 0 ? 'win' : 'lose'}">${sign(h.delta)} ELO</span>`, `${esc(mapName(h.map))} · ${h.score ? esc(h.score) + ' · ' : ''}${h.mode}`, `data-mid="${h.id}"`)
      : tile('', t('pl2Last'), '—', t('pl2LastNone'), 'disabled'));
    if (st?.recap) out.push(tile('', t('pl2Recap'), st.recap.mvp?.p ? esc(st.recap.mvp.p.nick) : '—', st.recap.mvp ? t('pl2RecapSub', { n: '+' + st.recap.mvp.elo + ' ELO' }) : t('lcMatchesN', { n: st.recap.matches }), 'data-pl2-recap'));
    return `<div class="lc-home pl2-tiles">${out.join('')}</div>`;
  }
  function rankCard(r, mode) {
    const lvl = levelOf(r.elo), nx = LEVELS[lvl + 1];
    const cal = isCal(r);
    return `<div class="card pl2-rank"><div class="row"><span class="h4l">${t('pl2Rating')} · ${modeName(mode)}</span></div>
      <div class="pl2-rt"><img class="lvl lg" src="${lvlIc(r, lvl)}">${cal ? `<div><b class="pl2-rv">${t('pl2CalDone', { n: r.cal, m: 5 })}</b><span class="mute">${t('pl2CalHint', { n: 5 - r.cal })}</span></div>`
        : `<div><span class="mute">${t('level', { n: lvl })}</span><b class="pl2-rv">${r.elo} <small class="mute">ELO</small></b></div>`}</div>
      ${cal ? `<div class="pl2-cbar">${[0, 1, 2, 3, 4].map(i => `<i class="${i < r.cal ? 'on' : ''}"></i>`).join('')}</div>`
        : `<div class="bar"><i style="width:${levelPct(r.elo)}%"></i></div><div class="mute" style="font-size:12px;margin-top:5px">${nx ? t('toNext', { n: nx - r.elo, l: lvl + 1 }) : t('maxLevel')}</div>`}
      <div class="pl2-kv"><div><b>${r.w + r.l}</b><span>${t('games')}</span></div><div><b>${wrNum(r)}%</b><span>${t('winrate')}</span></div><div><b>${kd(r.k, r.d)}</b><span>${t('kd')}</span></div><div><b class="win">${r.w}</b><span>${t('wins')}</span></div></div></div>`;
  }
  function matchesCard(myM, ss) {
    return `<div class="card pl2-ml"><div class="row"><span class="h4l">${t('myMatches')}</span><span class="grow"></span><button class="pl2-link" data-pl2-prof>${t('pl2All')}</button></div>
      ${myM.length ? myM.slice(0, 3).map(h => `<div class="pl2-mrow" data-mid="${h.id}"><span class="pl2-mimg" style="background-image:url(${mapImg(h.map)})"></span><div class="grow"><b>${esc(mapName(h.map))}</b><span class="mute">${h.score ? esc(h.score) + ' · ' : ''}${h.mode} · ${fmtDate(h.at)}</span></div><b class="num ${h.delta > 0 ? 'win' : 'lose'}">${sign(h.delta)}</b></div>`).join('')
        : `<div class="empty-note">${t('noMatches')}</div>`}
      <div class="row" style="margin-top:12px"><span class="h4l">${t('recentMatches')}</span></div>
      ${ss?.recent?.length ? ss.recent.slice(0, 3).map(m => `<div class="pl2-mrow" data-mid="${m.id}"><span class="pl2-mimg" style="background-image:url(${mapImg(m.map)})"></span><div class="grow"><b><span class="${m.winner === 'A' ? 'alfa' : 'bravo'}">${TEAM[m.winner]}</span> · ${esc(mapName(m.map))}</b><span class="mute">#${m.id}${m.score ? ' · ' + esc(m.score) : ''} · ${m.mode} · ${fmtDT(m.at)}</span></div></div>`).join('')
        : `<div class="empty-note">${t('noMatches')}</div>`}</div>`;
  }

  window.PL2 = { onbBlock, onbVisible, bindOnb, onbLoad, focusEl, etaTxt, seasonStrip };
  renderPlay = function () {
    const st = S.live;
    if (!st || st.match || S.finishedMatch || !S.me?.gameId) return _orig.apply(this, arguments);
    onbLoad();
    const pn = st.party?.members.length || 0;
    if (pn !== P2.party) { P2.party = pn; if (pn >= 2) onbLoad(true); }
    const mode = S.mode = pubMode(S.mode), r = S.me['r' + mode] || { elo: 1000, w: 0, l: 0, k: 0, d: 0, cal: 0 };
    const ban = S.me.ban && (S.me.ban.until === 0 || S.me.ban.until > Date.now()) ? S.me.ban : null;
    const ss = S.stats, myM = (S.myProfile?.matches || []).slice(0, 5);
    render(`<div class="pl2">
      ${seasonStrip(st, ss)}
      ${onbVisible() ? onbBlock(false) : ''}
      ${ban ? `<div class="card" style="border-color:var(--lose)"><h3 class="lose">${t('banned')}</h3>${esc(ban.reason)} · ${ban.until ? t('until', { d: fmtDT(ban.until) }) : t('forever')}</div>` : ''}
      <div class="pl2-lay">
        <div class="col pl2-main">${modeCards(st, mode)}${partyBar(st, mode)}${goBlock(st, mode, r, ban)}${nextSteps(mode)}${tiles(myM)}</div>
        <div class="col pl2-side">${friendsCard(st)}${rankCard(r, mode)}${matchesCard(myM, ss)}</div>
      </div>
      ${seasonRewards()}</div>`);
    const view = $('#view');
    view.querySelectorAll('[data-mode]').forEach(b => { if (!b.dataset.act) b.onclick = () => { S.mode = b.dataset.mode; refresh(); }; });
    bindPlay();
    bindParty();
    bindOnb(view);
    view.querySelectorAll('[data-pl2-add]').forEach(b => b.onclick = () => {
      const canInvite = !st.party || st.party.leader === S.me.id;
      if (!canInvite) return;
      focusEl('#fr-q', '.friends-card');
    });
    view.querySelectorAll('[data-pl2-go]').forEach(b => b.onclick = () => go(b.dataset.pl2Go));
    const pr = view.querySelector('[data-pl2-prof]'); if (pr) pr.onclick = () => go('profile', S.me.id);
    const gd = view.querySelector('[data-pl2-guide]'); if (gd) gd.onclick = () => K.open('https://konzte.online/#guide');
    const sb = view.querySelector('[data-pl2-season]'); if (sb) sb.onclick = () => {
      ls('kz-season-open', '1'); refresh();
      setTimeout(() => document.querySelector('#view .srew')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    };
    const rc = view.querySelector('[data-pl2-recap]'); if (rc && typeof lcRecapHtml === 'function') rc.onclick = () => modal(`<div class="pl2-recapm">${lcRecapHtml(LC.st.recap)}</div>`, box => { if (typeof lcBind === 'function') lcBind(box); });
    tick();
  };

  const _refresh = refresh;
  refresh = function () {
    if (S.page === 'onboarding' && S.me?.gameId) return renderOnb();
    return _refresh.apply(this, arguments);
  };
  const _go = go;
  go = function (page) {
    if (page === 'pass') onbMark('pass');
    if (page === 'play' || page === 'onboarding') onbLoad(true);
    return _go.apply(this, arguments);
  };
  const _rs = renderSettings;
  renderSettings = async function () {
    const r = await _rs.apply(this, arguments);
    const panel = document.querySelector('#view .setpanel');
    if (S.page === 'settings' && S.setTab === 'game' && panel && !panel.querySelector('[data-ob-page]')) {
      const o = P2.onb;
      panel.insertAdjacentHTML('beforeend', `<div class="srow"><div><b>${t('obSetRow')}</b><span>${t('obSetRowH')}${o ? ` · ${o.done}/${o.of}` : ''}</span></div><div><button class="btn ghost sm" data-ob-page>${t('sOpen')}</button></div></div>`);
      panel.querySelector('[data-ob-page]').onclick = () => go('onboarding');
    }
    return r;
  };
})();

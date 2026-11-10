(() => {
  const L = {
    en: {
      cl3Kicker: 'Konzte clans', cl3Hero: 'Find your team', cl3HeroSub: 'Play together, raise your clan level in clan wars and climb the clan top as one team.',
      cl3Find: 'Find a clan', cl3JoinHint: 'You join a clan by an officer\'s invite — find a clan below and message its members.',
      cl3F1H: 'Clan wars', cl3F1: 'Pick a lineup and challenge any clan — a regular match, but clan vs clan',
      cl3F2H: 'Clan levels 1–10', cl3F2: 'Level comes from the clan-war rating. First 5 wars are calibration: win ×3, loss ×2',
      cl3F3H: 'Tag before the nick', cl3F3: '2–5 characters in front of every member\'s nick — in matches, chats and the ladder',
      cl3F4: '{n} members in the first {d} days — «Founders» banner and {kf} KF for the owner',
      cl3Clans: 'Clans', cl3SearchPh: 'Name or tag', cl3All: 'All', cl3FFree: 'Free slots', cl3FRanked: 'Ranked', cl3FCal: 'Calibrating',
      cl3ColRating: 'War rating', cl3ColWL: 'W–L', cl3ColJoin: 'Joining', cl3JoinInv: 'By invite', cl3Full: 'Full', cl3Yours: 'Your clan', cl3Owner: 'owner {n}', cl3NoMatch: 'No clans match the filter',
      cl3YourClan: 'Your clan', cl3Clan: 'Clan', cl3InTop: '#{n} in clan wars', cl3You: 'you', cl3Online: '{n} online', cl3OnlineH: 'Online',
      cl3Place: 'Place', cl3PlaceSub: 'of {n} ranked clans', cl3PlaceCal: 'after calibration', cl3Lvl: 'Level', cl3LvlMax: 'max level', cl3ToLvl: '{n} ELO to LVL {l}',
      cl3Wins: 'Wins', cl3Wr: 'winrate {n}% · {l} losses', cl3FreeSlots: '{n} free slots', cl3OnlineSub: 'in the clan now', cl3Cal: 'Calibration {n}/5',
      cl3TOverview: 'Overview', cl3TMembers: 'Members', cl3TWars: 'Clan wars', cl3TChat: 'Chat', cl3TLog: 'Log', cl3TTop: 'Top clans',
      cl3Together: 'Played together', cl3TogetherS: '{n} matches', cl3Waiting: 'Challenges', cl3WaitingS: '{n} waiting', cl3Invited: 'Invited', cl3InvitedS: '{n} players',
      cl3ProgH: 'War rating → level', cl3ProgTo: '{n} more ELO to LVL {l}', cl3ProgMax: 'Top level reached — hold the line', cl3CalLeft: '{n} more clan wars to reveal the level',
      cl3H1: 'Clan war win — rating up', cl3H2: 'Calibration: win ×3 · loss ×2', cl3H3: 'Modes: {m}', cl3H4: 'Higher rating — higher in the top',
      cl3LvlsH: 'Clan levels', cl3LvlsTo: 'to LVL {l} — {n} ELO',
      cl3BestH: 'Best players', cl3AllMembers: 'All members', cl3EventsH: 'Recent events', cl3AllLog: 'Full log', cl3NoEvents: 'Nothing has happened yet',
      cl3RankH: 'Clan rating', cl3RankAbove: 'to overtake', cl3RankTop: 'Your clan leads the clan-war top', cl3RankTopO: 'This clan leads the clan-war top',
      cl3RankCal: 'Calibration: {n}/5 clan wars. The place in the top appears after it.', cl3OpenTop: 'Open clan top',
      cl3MeH: 'You in the clan', cl3MeRank: '#{n} in the clan by ELO', cl3MeText: 'Clan wars raise the clan level — ask an officer to put you in the lineup.',
      cl3MatesH: 'Clanmates online', cl3MatesNone: 'None of your clanmates are online right now.', cl3ToParty: 'To party', cl3AllMates: 'All clanmates',
      cl3WarH: 'Clan war', cl3WarIn: '[{c}] challenges your clan · {m}', cl3WarNone: 'No active challenges', cl3WarOfficer: 'Pick any clan in the top and send a challenge — you choose the lineup right away.',
      cl3WarMember: 'Challenges are sent by the owner or officers', cl3WarGo: 'Challenge a clan', cl3WarOut: 'Challenge to [{c}] · {m}', cl3WarLive: 'vs [{c}] · {s}',
      cl3RolesH: 'Roles', cl3RolesText: 'Owner — settings, roles, transfer. Officers — invites, kicks, clan wars. Members — play in lineups.',
      cl3Player: 'Player', cl3Role: 'Role', cl3Joined: 'Joined', cl3WL5: '5×5 W–L', cl3HistH: 'Clan war history',
      cl3L_create: '{by} created the clan', cl3L_invite: '{by} invited {u}', cl3L_join: '{by} joined the clan', cl3L_leave: '{by} left the clan', cl3L_kick: '{by} kicked {u}',
      cl3L_transfer: '{by} handed the clan to {u}', cl3L_role: '{by}: {u} — {r}', cl3L_edit: '{by} updated the clan', cl3L_avatar: '{by} changed the clan avatar', 'cl3L_avatar-off': '{by} removed the clan avatar',
      cl3L_reward: 'Founders reward unlocked', cl3L_challenge: '{by} challenged [{c}] · {m}', cl3L_calibrated: 'Calibration done: LVL {l} · {e} ELO',
      'cl3L_war-win': 'Win vs [{c}] {d}', 'cl3L_war-loss': 'Loss vs [{c}] {d}', cl3L_staff: 'Konzte moderation: {a}',
    },
    uk: {
      cl3Kicker: 'Клани Konzte', cl3Hero: 'Знайди свою команду', cl3HeroSub: 'Грайте разом, піднімайте рівень клану в клан-варах і видирайтеся в топ кланів однією командою.',
      cl3Find: 'Знайти клан', cl3JoinHint: 'У клан вступають за запрошенням офіцера — знайди клан нижче й напиши його учасникам.',
      cl3F1H: 'Клан-вари', cl3F1: 'Збери склад і виклич будь-який клан — звичайний матч, але клан на клан',
      cl3F2H: 'Рівні клану 1–10', cl3F2: 'Рівень — з рейтингу клан-варів. Перші 5 боїв — калібрування: перемога ×3, поразка ×2',
      cl3F3H: 'Тег перед ніком', cl3F3: '2–5 символів перед ніком кожного учасника — у матчах, чатах і рейтингу',
      cl3F4: '{n} учасників за перші {d} днів — банер «Засновники» і {kf} KF власнику',
      cl3Clans: 'Клани', cl3SearchPh: 'Назва або тег', cl3All: 'Усі', cl3FFree: 'Є місця', cl3FRanked: 'Рейтингові', cl3FCal: 'Калібруються',
      cl3ColRating: 'Рейтинг КВ', cl3ColWL: 'П–П', cl3ColJoin: 'Вступ', cl3JoinInv: 'За запрошенням', cl3Full: 'Заповнений', cl3Yours: 'Твій клан', cl3Owner: 'власник {n}', cl3NoMatch: 'Немає кланів за цим фільтром',
      cl3YourClan: 'Твій клан', cl3Clan: 'Клан', cl3InTop: '#{n} у клан-варах', cl3You: 'ти', cl3Online: '{n} онлайн', cl3OnlineH: 'Онлайн',
      cl3Place: 'Місце', cl3PlaceSub: 'з {n} рейтингових кланів', cl3PlaceCal: 'після калібрування', cl3Lvl: 'Рівень', cl3LvlMax: 'максимальний рівень', cl3ToLvl: '{n} ELO до LVL {l}',
      cl3Wins: 'Перемоги', cl3Wr: 'вінрейт {n}% · поразок {l}', cl3FreeSlots: 'вільних місць: {n}', cl3OnlineSub: 'зараз у клані', cl3Cal: 'Калібрування {n}/5',
      cl3TOverview: 'Огляд', cl3TMembers: 'Учасники', cl3TWars: 'Клан-вари', cl3TChat: 'Чат', cl3TLog: 'Журнал', cl3TTop: 'Топ кланів',
      cl3Together: 'Зіграно разом', cl3TogetherS: 'матчів: {n}', cl3Waiting: 'Виклики', cl3WaitingS: 'чекають: {n}', cl3Invited: 'Запрошено', cl3InvitedS: 'гравців: {n}',
      cl3ProgH: 'Рейтинг клан-варів → рівень', cl3ProgTo: 'Ще {n} ELO до LVL {l}', cl3ProgMax: 'Найвищий рівень — тримайте планку', cl3CalLeft: 'Ще {n} клан-варів — і відкриється рівень',
      cl3H1: 'Перемога в клан-варі — рейтинг росте', cl3H2: 'Калібрування: перемога ×3 · поразка ×2', cl3H3: 'Режими: {m}', cl3H4: 'Вищий рейтинг — вище в топі',
      cl3LvlsH: 'Рівні клану', cl3LvlsTo: 'до LVL {l} — {n} ELO',
      cl3BestH: 'Найкращі гравці', cl3AllMembers: 'Усі учасники', cl3EventsH: 'Останні події', cl3AllLog: 'Увесь журнал', cl3NoEvents: 'Подій ще не було',
      cl3RankH: 'Рейтинг кланів', cl3RankAbove: 'щоб обійти', cl3RankTop: 'Твій клан — перший у клан-варах', cl3RankTopO: 'Цей клан — перший у клан-варах',
      cl3RankCal: 'Калібрування: {n}/5 клан-варів. Місце в топі з\'явиться після нього.', cl3OpenTop: 'Відкрити топ кланів',
      cl3MeH: 'Ти в клані', cl3MeRank: '#{n} у клані за ELO', cl3MeText: 'Клан-вари піднімають рівень клану — попроси офіцера взяти тебе в склад.',
      cl3MatesH: 'Соклановці онлайн', cl3MatesNone: 'Зараз нікого із соклановців немає в мережі.', cl3ToParty: 'У паті', cl3AllMates: 'Усі соклановці',
      cl3WarH: 'Клан-вар', cl3WarIn: '[{c}] викликає ваш клан · {m}', cl3WarNone: 'Активних викликів немає', cl3WarOfficer: 'Обери будь-який клан у топі й надішли виклик — склад обираєш одразу.',
      cl3WarMember: 'Виклики надсилає власник або офіцери', cl3WarGo: 'Викликати клан', cl3WarOut: 'Виклик для [{c}] · {m}', cl3WarLive: 'проти [{c}] · {s}',
      cl3RolesH: 'Ролі', cl3RolesText: 'Власник — налаштування, ролі, передача клану. Офіцери — запрошення, виключення, клан-вари. Учасники — грають у складах.',
      cl3Player: 'Гравець', cl3Role: 'Роль', cl3Joined: 'У клані з', cl3WL5: '5×5 П–П', cl3HistH: 'Історія клан-варів',
      cl3L_create: '{by} створив клан', cl3L_invite: '{by} запросив {u}', cl3L_join: '{by} вступив у клан', cl3L_leave: '{by} вийшов з клану', cl3L_kick: '{by} виключив {u}',
      cl3L_transfer: '{by} передав клан {u}', cl3L_role: '{by}: {u} — {r}', cl3L_edit: '{by} оновив клан', cl3L_avatar: '{by} змінив аватарку клану', 'cl3L_avatar-off': '{by} прибрав аватарку клану',
      cl3L_reward: 'Відкрито нагороду засновників', cl3L_challenge: '{by} викликав [{c}] · {m}', cl3L_calibrated: 'Калібрування завершено: LVL {l} · {e} ELO',
      'cl3L_war-win': 'Перемога над [{c}] {d}', 'cl3L_war-loss': 'Поразка від [{c}] {d}', cl3L_staff: 'Модерація Konzte: {a}',
    },
    ru: {
      cl3Kicker: 'Кланы Konzte', cl3Hero: 'Найди свою команду', cl3HeroSub: 'Играйте вместе, поднимайте уровень клана в клан-варах и забирайтесь в топ кланов одной командой.',
      cl3Find: 'Найти клан', cl3JoinHint: 'В клан вступают по приглашению офицера — найди клан ниже и напиши его участникам.',
      cl3F1H: 'Клан-вары', cl3F1: 'Собери состав и вызови любой клан — обычный матч, но клан на клан',
      cl3F2H: 'Уровни клана 1–10', cl3F2: 'Уровень — из рейтинга клан-варов. Первые 5 боёв — калибровка: победа ×3, поражение ×2',
      cl3F3H: 'Тег перед ником', cl3F3: '2–5 символов перед ником каждого участника — в матчах, чатах и рейтинге',
      cl3F4: '{n} участников за первые {d} дней — баннер «Основатели» и {kf} KF владельцу',
      cl3Clans: 'Кланы', cl3SearchPh: 'Название или тег', cl3All: 'Все', cl3FFree: 'Есть места', cl3FRanked: 'Рейтинговые', cl3FCal: 'Калибруются',
      cl3ColRating: 'Рейтинг КВ', cl3ColWL: 'П–П', cl3ColJoin: 'Вступление', cl3JoinInv: 'По приглашению', cl3Full: 'Заполнен', cl3Yours: 'Твой клан', cl3Owner: 'владелец {n}', cl3NoMatch: 'Нет кланов по этому фильтру',
      cl3YourClan: 'Твой клан', cl3Clan: 'Клан', cl3InTop: '#{n} в клан-варах', cl3You: 'ты', cl3Online: '{n} онлайн', cl3OnlineH: 'Онлайн',
      cl3Place: 'Место', cl3PlaceSub: 'из {n} рейтинговых кланов', cl3PlaceCal: 'после калибровки', cl3Lvl: 'Уровень', cl3LvlMax: 'максимальный уровень', cl3ToLvl: '{n} ELO до LVL {l}',
      cl3Wins: 'Победы', cl3Wr: 'винрейт {n}% · поражений {l}', cl3FreeSlots: 'свободных мест: {n}', cl3OnlineSub: 'сейчас в клане', cl3Cal: 'Калибровка {n}/5',
      cl3TOverview: 'Обзор', cl3TMembers: 'Участники', cl3TWars: 'Клан-вары', cl3TChat: 'Чат', cl3TLog: 'Журнал', cl3TTop: 'Топ кланов',
      cl3Together: 'Сыграно вместе', cl3TogetherS: 'матчей: {n}', cl3Waiting: 'Вызовы', cl3WaitingS: 'ждут: {n}', cl3Invited: 'Приглашены', cl3InvitedS: 'игроков: {n}',
      cl3ProgH: 'Рейтинг клан-варов → уровень', cl3ProgTo: 'Ещё {n} ELO до LVL {l}', cl3ProgMax: 'Высший уровень — держите планку', cl3CalLeft: 'Ещё {n} клан-варов — и откроется уровень',
      cl3H1: 'Победа в клан-варе — рейтинг растёт', cl3H2: 'Калибровка: победа ×3 · поражение ×2', cl3H3: 'Режимы: {m}', cl3H4: 'Выше рейтинг — выше в топе',
      cl3LvlsH: 'Уровни клана', cl3LvlsTo: 'до LVL {l} — {n} ELO',
      cl3BestH: 'Лучшие игроки', cl3AllMembers: 'Все участники', cl3EventsH: 'Последние события', cl3AllLog: 'Весь журнал', cl3NoEvents: 'Событий ещё не было',
      cl3RankH: 'Рейтинг кланов', cl3RankAbove: 'чтобы обойти', cl3RankTop: 'Твой клан — первый в клан-варах', cl3RankTopO: 'Этот клан — первый в клан-варах',
      cl3RankCal: 'Калибровка: {n}/5 клан-варов. Место в топе появится после неё.', cl3OpenTop: 'Открыть топ кланов',
      cl3MeH: 'Ты в клане', cl3MeRank: '#{n} в клане по ELO', cl3MeText: 'Клан-вары поднимают уровень клана — попроси офицера взять тебя в состав.',
      cl3MatesH: 'Соклановцы онлайн', cl3MatesNone: 'Сейчас никого из соклановцев нет в сети.', cl3ToParty: 'В пати', cl3AllMates: 'Все соклановцы',
      cl3WarH: 'Клан-вар', cl3WarIn: '[{c}] вызывает ваш клан · {m}', cl3WarNone: 'Активных вызовов нет', cl3WarOfficer: 'Выбери любой клан в топе и отправь вызов — состав выбираешь сразу.',
      cl3WarMember: 'Вызовы отправляет владелец или офицеры', cl3WarGo: 'Вызвать клан', cl3WarOut: 'Вызов для [{c}] · {m}', cl3WarLive: 'против [{c}] · {s}',
      cl3RolesH: 'Роли', cl3RolesText: 'Владелец — настройки, роли, передача клана. Офицеры — приглашения, исключения, клан-вары. Участники — играют в составах.',
      cl3Player: 'Игрок', cl3Role: 'Роль', cl3Joined: 'В клане с', cl3WL5: '5×5 П–П', cl3HistH: 'История клан-варов',
      cl3L_create: '{by} создал клан', cl3L_invite: '{by} пригласил {u}', cl3L_join: '{by} вступил в клан', cl3L_leave: '{by} вышел из клана', cl3L_kick: '{by} исключил {u}',
      cl3L_transfer: '{by} передал клан {u}', cl3L_role: '{by}: {u} — {r}', cl3L_edit: '{by} обновил клан', cl3L_avatar: '{by} сменил аватарку клана', 'cl3L_avatar-off': '{by} убрал аватарку клана',
      cl3L_reward: 'Открыта награда основателей', cl3L_challenge: '{by} вызвал [{c}] · {m}', cl3L_calibrated: 'Калибровка завершена: LVL {l} · {e} ELO',
      'cl3L_war-win': 'Победа над [{c}] {d}', 'cl3L_war-loss': 'Поражение от [{c}] {d}', cl3L_staff: 'Модерация Konzte: {a}',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k] ||= {}, L[k]);
  const L2 = {
    en: {
      cl3JoinHint: 'Join a clan by an officer\'s invite, by request, or instantly if the clan is open — see the «Joining» column below.',
      cl3Mode_invite: 'By invite', cl3Mode_request: 'By request', cl3Mode_open: 'Open',
      cl3ModeH_invite: 'Only officers invite players', cl3ModeH_request: 'Players apply, officers accept', cl3ModeH_open: 'Anyone who meets min ELO joins at once',
      cl3FOpen: 'Open', cl3FReq: 'By request', cl3ColMin: 'Min ELO', cl3ColPts: 'Points', cl3SortPts: 'Points',
      cl3JoinBtn: 'Join', cl3ReqBtn: 'Apply', cl3ReqSent: 'Applied', cl3ReqCancel: 'Withdraw', cl3NeedElo: 'Needs {n}+ ELO', cl3ReqCd: 'Declined · again after {t}',
      cl3ReqT: 'Request to join', cl3ReqText: 'A few words for the officers (optional)', cl3ReqPh: 'Role, schedule, who you play with…', cl3ReqDone: 'Request sent',
      cl3JoinedOk: 'You joined {c}', cl3JoinQ: 'Join [{c}] now?',
      cl3MyReqH: 'Your requests', cl3MyReqSent: 'sent {t}', cl3MyReqNo: 'declined', cl3MyReqOk: 'accepted', cl3MyReqRule: 'Up to {n} active requests · {h} h after a decline',
      cl3TReq: 'Requests', cl3NoReq: 'No requests yet. Switch joining to «By request» so players can apply.', cl3JoinH: 'Joining the clan',
      cl3MinElo: 'Min ELO (2×2)', cl3MinEloH: '0 — no limit. Applies to open joining and requests; invites ignore it.', cl3JmSaved: 'Joining settings saved',
      cl3ReqToast: '{n} wants to join your clan', cl3ReqOkToast: 'Your request was accepted — welcome to {c}', cl3ReqNoToast: 'Your request to {c} was declined',
      cl3PtsTile: 'Clan points', cl3PtsSub: 'season {n}', cl3PtsRank: '#{p} by points', cl3Season: 'season {n}',
      cl3CtbH: 'Contribution to the clan', cl3PtsU: 'pts', cl3Left: 'left', cl3Less: 'Top 5', cl3AllCtb: 'All members', cl3NoPts: 'No points this season yet — play ranked matches together.',
      cl3PtsRules: 'Ranked win +{w} · loss +{l} · MVP +{m} · clan war win +{cw} / loss +{cl}', cl3PtsNote: 'Points rank activity; the clan level still comes only from clan wars.',
      cl3MyPtsH: 'Your contribution', cl3InClan: 'in the clan', cl3OfClan: 'of clan points', cl3MyPtsText: 'Every ranked win brings +{w}, a loss +{l}, MVP +{m}. A clan-war win gives +{cw} to each player in the lineup.',
    },
    uk: {
      cl3JoinHint: 'У клан вступають за запрошенням офіцера, за заявкою або одразу, якщо клан відкритий, — дивись колонку «Вступ» нижче.',
      cl3Mode_invite: 'За запрошенням', cl3Mode_request: 'За заявкою', cl3Mode_open: 'Відкритий',
      cl3ModeH_invite: 'Гравців запрошують лише офіцери', cl3ModeH_request: 'Гравці подають заявки, офіцери приймають', cl3ModeH_open: 'Вступає одразу кожен, хто проходить за ELO',
      cl3FOpen: 'Відкриті', cl3FReq: 'За заявкою', cl3ColMin: 'Мін. ELO', cl3ColPts: 'Очки', cl3SortPts: 'Очки',
      cl3JoinBtn: 'Вступити', cl3ReqBtn: 'Подати заявку', cl3ReqSent: 'Заявку подано', cl3ReqCancel: 'Відкликати', cl3NeedElo: 'Потрібно ELO {n}+', cl3ReqCd: 'Відхилено · знову після {t}',
      cl3ReqT: 'Заявка на вступ', cl3ReqText: 'Кілька слів для офіцерів (необов\'язково)', cl3ReqPh: 'Роль, коли граєш, з ким…', cl3ReqDone: 'Заявку надіслано',
      cl3JoinedOk: 'Ти вступив у {c}', cl3JoinQ: 'Вступити в [{c}] зараз?',
      cl3MyReqH: 'Твої заявки', cl3MyReqSent: 'подано {t}', cl3MyReqNo: 'відхилено', cl3MyReqOk: 'прийнято', cl3MyReqRule: 'До {n} активних заявок · {h} год після відмови',
      cl3TReq: 'Заявки', cl3NoReq: 'Заявок поки немає. Перемкни вступ на «За заявкою», щоб гравці могли подаватися.', cl3JoinH: 'Вступ у клан',
      cl3MinElo: 'Мін. ELO (2×2)', cl3MinEloH: '0 — без обмеження. Діє на відкритий вступ і заявки; запрошення його не перевіряють.', cl3JmSaved: 'Налаштування вступу збережено',
      cl3ReqToast: '{n} хоче вступити у твій клан', cl3ReqOkToast: 'Заявку прийнято — вітаємо в {c}', cl3ReqNoToast: 'Заявку в {c} відхилено',
      cl3PtsTile: 'Очки клану', cl3PtsSub: 'сезон {n}', cl3PtsRank: '#{p} за очками', cl3Season: 'сезон {n}',
      cl3CtbH: 'Внесок у клан', cl3PtsU: 'очок', cl3Left: 'вийшов', cl3Less: 'Топ-5', cl3AllCtb: 'Усі учасники', cl3NoPts: 'Цього сезону очок ще немає — грайте рейтингові матчі.',
      cl3PtsRules: 'Перемога в рейтинговому +{w} · поразка +{l} · MVP +{m} · клан-вар перемога +{cw} / поразка +{cl}', cl3PtsNote: 'Очки — рейтинг активності; рівень клану й далі лише з клан-варів.',
      cl3MyPtsH: 'Твій внесок', cl3InClan: 'у клані', cl3OfClan: 'очок клану', cl3MyPtsText: 'Кожна рейтингова перемога — +{w}, поразка — +{l}, MVP — +{m}. Перемога в клан-варі — +{cw} кожному гравцю складу.',
    },
    ru: {
      cl3JoinHint: 'В клан вступают по приглашению офицера, по заявке или сразу, если клан открытый, — смотри колонку «Вступление» ниже.',
      cl3Mode_invite: 'По приглашению', cl3Mode_request: 'По заявке', cl3Mode_open: 'Открытый',
      cl3ModeH_invite: 'Игроков приглашают только офицеры', cl3ModeH_request: 'Игроки подают заявки, офицеры принимают', cl3ModeH_open: 'Вступает сразу любой, кто проходит по ELO',
      cl3FOpen: 'Открытые', cl3FReq: 'По заявке', cl3ColMin: 'Мин. ELO', cl3ColPts: 'Очки', cl3SortPts: 'Очки',
      cl3JoinBtn: 'Вступить', cl3ReqBtn: 'Подать заявку', cl3ReqSent: 'Заявка подана', cl3ReqCancel: 'Отозвать', cl3NeedElo: 'Нужен ELO {n}+', cl3ReqCd: 'Отклонено · снова после {t}',
      cl3ReqT: 'Заявка на вступление', cl3ReqText: 'Пара слов для офицеров (необязательно)', cl3ReqPh: 'Роль, когда играешь, с кем…', cl3ReqDone: 'Заявка отправлена',
      cl3JoinedOk: 'Ты вступил в {c}', cl3JoinQ: 'Вступить в [{c}] сейчас?',
      cl3MyReqH: 'Твои заявки', cl3MyReqSent: 'подана {t}', cl3MyReqNo: 'отклонена', cl3MyReqOk: 'принята', cl3MyReqRule: 'До {n} активных заявок · {h} ч после отказа',
      cl3TReq: 'Заявки', cl3NoReq: 'Заявок пока нет. Переключи вступление на «По заявке», чтобы игроки могли подаваться.', cl3JoinH: 'Вступление в клан',
      cl3MinElo: 'Мин. ELO (2×2)', cl3MinEloH: '0 — без ограничения. Действует на открытое вступление и заявки; приглашения его не проверяют.', cl3JmSaved: 'Настройки вступления сохранены',
      cl3ReqToast: '{n} хочет вступить в твой клан', cl3ReqOkToast: 'Заявку приняли — добро пожаловать в {c}', cl3ReqNoToast: 'Заявку в {c} отклонили',
      cl3PtsTile: 'Очки клана', cl3PtsSub: 'сезон {n}', cl3PtsRank: '#{p} по очкам', cl3Season: 'сезон {n}',
      cl3CtbH: 'Вклад в клан', cl3PtsU: 'очк.', cl3Left: 'вышел', cl3Less: 'Топ-5', cl3AllCtb: 'Все участники', cl3NoPts: 'В этом сезоне очков ещё нет — играйте рейтинговые матчи.',
      cl3PtsRules: 'Победа в рейтинговом +{w} · поражение +{l} · MVP +{m} · клан-вар победа +{cw} / поражение +{cl}', cl3PtsNote: 'Очки — рейтинг активности; уровень клана по-прежнему только из клан-варов.',
      cl3MyPtsH: 'Твой вклад', cl3InClan: 'в клане', cl3OfClan: 'очков клана', cl3MyPtsText: 'Каждая рейтинговая победа — +{w}, поражение — +{l}, MVP — +{m}. Победа в клан-варе — +{cw} каждому игроку состава.',
    },
  };
  for (const k of Object.keys(L2)) Object.assign(I18N[k] ||= {}, L2[k]);
  const E2 = {
    uk: { 'This clan does not accept players without an invite or request': 'Цей клан не приймає гравців без запрошення чи заявки', 'This clan does not accept requests': 'Цей клан не приймає заявок',
      'You have already sent a request to this clan': 'Ти вже подав заявку в цей клан', 'Your request was declined recently, try again later': 'Твою заявку нещодавно відхилили — спробуй пізніше',
      'You can have at most 3 pending clan requests': 'Можна мати не більше 3 активних заявок', 'Too many requests, try again later': 'Забагато заявок, спробуй пізніше',
      'Request not found': 'Заявку не знайдено', 'Bad join mode': 'Невідомий режим вступу', 'Minimum ELO: 0-5000': 'Мінімальний ELO: 0–5000', 'You are banned': 'Тебе заблоковано' },
    ru: { 'This clan does not accept players without an invite or request': 'Этот клан не принимает игроков без приглашения или заявки', 'This clan does not accept requests': 'Этот клан не принимает заявки',
      'You have already sent a request to this clan': 'Ты уже подал заявку в этот клан', 'Your request was declined recently, try again later': 'Твою заявку недавно отклонили — попробуй позже',
      'You can have at most 3 pending clan requests': 'Можно иметь не больше 3 активных заявок', 'Too many requests, try again later': 'Слишком много заявок, попробуй позже',
      'Request not found': 'Заявка не найдена', 'Bad join mode': 'Неизвестный режим вступления', 'Minimum ELO: 0-5000': 'Минимальный ELO: 0–5000', 'You are banned': 'Ты заблокирован' },
  };
  if (typeof SERVER_ERRORS !== 'undefined') for (const l of Object.keys(E2)) Object.assign(SERVER_ERRORS[l] ||= {}, E2[l]);
  if (typeof SERVER_ERRORS_RE !== 'undefined') {
    (SERVER_ERRORS_RE.uk ||= []).push([/^This clan requires at least (\d+) ELO$/, 'Для цього клану потрібно щонайменше $1 ELO']);
    (SERVER_ERRORS_RE.ru ||= []).push([/^This clan requires at least (\d+) ELO$/, 'Для этого клана нужно минимум $1 ELO']);
  }

  const CW_LV = [0, 850, 950, 1050, 1150, 1250, 1350, 1450, 1600, 1800];
  const IC = {
    plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>',
    chev: '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    exit: '<svg viewBox="0 0 24 24"><path d="M14 4.5H6.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2H14M10 12h10.5M17 8.5l3.5 3.5-3.5 3.5"/></svg>',
    gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    trend: '<svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
    tag: '<svg viewBox="0 0 24 24"><path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
    gift: '<svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>',
    minus: '<svg viewBox="0 0 24 24"><path d="M5 12h14"/></svg>',
    edit: '<svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    party: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3 19c.6-3.3 3-5 6-5s5.4 1.7 6 5"/><path d="M18 8v6M15 11h6"/></svg>',
  };
  const ic = (k, cls = '') => `<i class="cl3-i ${cls}">${IC[k] || CL_IC[k] || ''}</i>`;
  const modeT = m => m === '2v2' ? '2×2' : '5×5';
  const wlT = (w, l) => `<b class="win">${w}</b><span class="mute">–</span><b class="lose">${l}</b>`;
  const roleChip = r => `<span class="cl3-role ${r}">${ROLE_T(r)}</span>`;
  const head = (title, right = '') => `<div class="cl3-h"><span>${title}</span>${right}</div>`;
  const link = (attr, label) => `<button class="cl3-link" ${attr}>${label}${ic('chev')}</button>`;

  function warRank(id) {
    const all = (S.cl.list?.list || []).filter(x => !cwCal(x.cw)).sort((a, b) => (b.cw.elo || 0) - (a.cw.elo || 0) || b.cw.w - a.cw.w);
    const i = all.findIndex(x => x.id === id);
    return { place: i >= 0 ? i + 1 : null, total: all.length, above: i > 0 ? all[i - 1] : null };
  }
  const lvlOf = cw => cwCal(cw) ? 0 : cw.lvl;

  function joinBtn(x, big) {
    const M = S.cl.mine; if (!M || M.clan || !x) return '';
    const mode = x.joinMode || 'invite', n = Array.isArray(x.members) ? x.members.length : x.members;
    if (mode === 'invite') return '';
    const cls = big ? 'btn cl3-cta' : 'btn ghost xs cl3-chb';
    if (n >= x.max) return big ? '' : `<span class="cl3-need mute">${t('cl3Full')}</span>`;
    if ((M.myElo ?? 0) < (x.minElo || 0)) return `<span class="cl3-need lose">${t('cl3NeedElo', { n: x.minElo })}</span>`;
    if (mode === 'open') return `<button class="${cls} cl3-joinb" data-cl3join="${x.id}">${ic('plus')}${t('cl3JoinBtn')}</button>`;
    if ((M.myRequests || []).some(r => r.id === x.id)) return `<button class="${big ? 'btn ghost cl3-cta2' : 'btn ghost xs cl3-chb'} cl3-sent" data-cl3rx="${x.id}" title="${t('cl3ReqCancel')}">${ic('check')}${t('cl3ReqSent')}</button>`;
    const cd = M.reqCooldowns?.[x.id];
    if (cd > Date.now()) return `<span class="cl3-need mute">${t('cl3ReqCd', { t: fmtDT(cd) })}</span>`;
    return `<button class="${cls} cl3-joinb" data-cl3req="${x.id}">${ic('send')}${t('cl3ReqBtn')}</button>`;
  }
  const clanById = id => (S.cl.list?.list || []).find(c => c.id === id) || (S.cl.other?.id === id ? S.cl.other : null);
  function reqModal(id) {
    const x = clanById(id); if (!x) return;
    modal(`<div class="card accent col cl3-reqm"><h2>${t('cl3ReqT')}</h2>
      <div class="cl3-reqc">${clanIcon(x, 'big')}<div><b>${clanName(x)}</b><small class="mute">${t('cl3Mode_request')}${x.minElo ? ' · ' + t('cl3NeedElo', { n: x.minElo }) : ''}</small></div></div>
      <label class="mute">${t('cl3ReqText')}</label><textarea id="cl3-rt" rows="3" maxlength="200" placeholder="${t('cl3ReqPh')}"></textarea>
      <div class="cl3-rcnt mute"><span id="cl3-rn">0</span> / 200</div><div class="err" id="cl3-rerr"></div>
      <div class="row"><button class="btn" id="cl3-rgo">${ic('send')}${t('cl3ReqBtn')}</button><button class="btn ghost" data-close>${t('cancel')}</button></div></div>`, box => {
      const ta = box.querySelector('#cl3-rt');
      ta.oninput = () => { box.querySelector('#cl3-rn').textContent = ta.value.length; };
      ta.focus();
      box.querySelector('#cl3-rgo').onclick = async () => {
        try { S.cl.mine = await api('/api/clan/request', { clan: id, text: ta.value }); closeModal(); toast(t('cl3ReqDone')); sfx('ok', true); refresh(); }
        catch (e) { box.querySelector('#cl3-rerr').textContent = e.message; }
      };
    });
  }

  function filtered() {
    const q = (S.cl.q || '').trim().toLowerCase(), f = S.cl.f || 'all';
    return (S.cl.list?.list || []).filter(x => (!q || x.name.toLowerCase().includes(q) || x.tag.toLowerCase().includes(q))
      && (f === 'all' || (f === 'partner' && x.partner) || (f === 'free' && x.members < x.max) || (f === 'ranked' && !cwCal(x.cw)) || (f === 'cal' && cwCal(x.cw)) || (f === 'open' && x.joinMode === 'open') || (f === 'req' && x.joinMode === 'request')));
  }
  function rowsHtml() {
    const my = S.cl.mine?.clan, canCh = ['owner', 'officer'].includes(my?.myRole);
    const list = filtered();
    if (!list.length) return `<tr class="cl3-none"><td colspan="13">${(S.cl.list?.list || []).length ? t('cl3NoMatch') : t('clNone')}</td></tr>`;
    return list.map(x => {
      const mine = x.id === my?.id, full = x.members >= x.max;
      const act = mine ? `<span class="cl3-yours">${t('cl3Yours')}</span>` : canCh ? `<button class="btn ghost xs cl3-chb" data-clch="${x.id}">${ic('swords')}${t('clChallenge')}</button>` : joinBtn(x) || `<button class="btn ghost xs cl3-chb">${t('clOpen')}</button>`;
      return `<tr class="${mine ? 'me' : ''}" data-clopen="${x.id}"><td class="num cl3-pl">${x.place}</td>
        <td><div class="cl3-cn">${clanIcon(x, '', true)}<div><b>${clanName(x)}</b><small>${t('cl3Owner', { n: esc(x.owner || '?') })} · ${t('clSince', { d: fmtDate(x.created) })}</small></div></div></td>
        <td class="cl3-c">${clanLvlIcon(lvlOf(x.cw), 28)}</td>
        <td class="num">${cwCal(x.cw) ? `<span class="cl3-cal">${t('cl3Cal', { n: x.cw.cal })}</span>` : x.cw.elo}</td>
        <td class="num cl3-wl">${wlT(x.cw.w, x.cw.l)}</td>
        <td class="num">${x.members}<span class="mute"> / ${x.max}</span></td>
        <td class="num">${x.power}</td><td class="num cl3-hide">${x.together}</td>
        <td class="num cl3-hide cl3-ptsc">${x.pts ?? 0}</td>
        <td class="cl3-hide ${full ? 'lose' : 'cl3-jmode jm-' + (x.joinMode || 'invite')}">${full ? t('cl3Full') : t('cl3Mode_' + (x.joinMode || 'invite'))}</td>
        <td class="num cl3-hide">${x.minElo ? x.minElo : '<span class="mute">—</span>'}</td>
        <td class="cl3-act">${act}</td></tr>`;
    }).join('');
  }
  function tableBlock() {
    const f = S.cl.f || 'all';
    const fl = [['all', t('cl3All')], ['partner', t('clPartners')], ['free', t('cl3FFree')], ['ranked', t('cl3FRanked')], ['cal', t('cl3FCal')], ['open', t('cl3FOpen')], ['req', t('cl3FReq')]];
    const sorts = [['power', t('clPower')], ['war', t('clWarRating')], ['members', t('clMembers')], ['points', t('cl3SortPts')]];
    return `<div class="card cl3-tbl" id="cl3-table">
      <div class="cl3-tbar"><div class="cl3-h"><span>${t('cl3Clans')}</span><b>${(S.cl.list?.list || []).length}</b></div><span class="grow"></span>
        <label class="cl3-search">${ic('search')}<input id="cl3-q" placeholder="${t('cl3SearchPh')}" autocomplete="off" value="${esc(S.cl.q || '')}"></label>
        <div class="cl3-chips">${fl.map(([k, l]) => `<button data-cl3f="${k}" class="${f === k ? 'on' : ''}">${l}</button>`).join('')}</div></div>
      ${f === 'partner' ? `<div class="cl3-pinfo"><i class="ctag-p cl3-pi">${PARTNER_SVG}</i><div><b>${t('clPartnersH')}</b><span>${t('clPartnersText')}</span></div></div>` : ''}
      <div class="cl3-sortrow"><span>${t('clSortBy')}</span>${sorts.map(([k, l]) => `<button data-clsort="${k}" class="${S.cl.sort === k ? 'on' : ''}">${l}</button>`).join('')}</div>
      <table class="cl3-t"><thead><tr><th>#</th><th>${t('clClan')}</th><th class="cl3-c">LVL</th><th>${t('cl3ColRating')}</th><th>${t('cl3ColWL')}</th><th>${t('clMembers')}</th><th>${t('clPower')}</th>
        <th class="cl3-hide">${t('clTogether')}</th><th class="cl3-hide">${t('cl3ColPts')}</th><th class="cl3-hide">${t('cl3ColJoin')}</th><th class="cl3-hide">${t('cl3ColMin')}</th><th></th></tr></thead><tbody id="cl3-tb">${rowsHtml()}</tbody></table></div>`;
  }

  function noClanPage(mine) {
    const R = mine.rules;
    const cost = R.free ? t('clFreePrem') : t('clCost', { n: R.cost });
    const tile = (k, h, p, gold) => `<div class="cl3-ft${gold ? ' gold' : ''}">${ic(k)}<div><b>${h}</b><span>${p}</span></div></div>`;
    const inv = mine.invites.length ? `<div class="card cl3-invs"><div class="cl3-h"><span>${t('clInvites')}</span><b>${mine.invites.length}</b></div>
      ${mine.invites.map(x => `<div class="cl3-inv">${clanIcon(x, 'big')}<div class="grow"><b>${clanName(x)}</b><small>${t('clInvitedBy', { n: esc(x.from) })} · ${x.members}/${x.max} · ${t('clPower')} ${x.power}</small></div>
        ${clanLvlIcon(lvlOf(x.cw), 30)}<button class="btn green sm" data-clyes="${x.id}">${ic('check')}${t('accept')}</button><button class="btn ghost sm" data-clno="${x.id}">${t('decline')}</button></div>`).join('')}</div>` : '';
    return `<div class="card cl3-hero">
      <div class="cl3-hl"><div class="cl3-kick">${t('cl3Kicker')}</div><h1>${t('cl3Hero')}</h1><p>${t('cl3HeroSub')}</p>
        <form id="cl-new" class="cl3-new"><input id="cl-name" placeholder="${t('clNamePh')}" maxlength="24" autocomplete="off"><input id="cl-tag" placeholder="${t('clTagPh')}" maxlength="5" autocomplete="off">
          <button class="btn cl3-cta">${ic('plus')}${t('clCreateBtn')}</button><button type="button" class="btn ghost cl3-cta2" id="cl3-find">${ic('search')}${t('cl3Find')}</button></form>
        <div class="cl3-newsub"><span class="cl-prev" id="cl-prev">${clanTagHtml({ clan: { tag: 'TAG' } })}<b>${esc(S.me.nick)}</b></span><span class="mute">· ${cost}${!R.free && R.freePremium ? ' · ' + t('clOrPrem') : ''}</span></div>
        <div class="err" id="cl-err"></div>
        <div class="cl3-hint">${t('clCreateHint', { n: R.max })} ${t('cl3JoinHint')}</div></div>
      <div class="cl3-fts">${tile('swords', t('cl3F1H'), t('cl3F1'))}${tile('trend', t('cl3F2H'), t('cl3F2'))}${tile('tag', t('cl3F3H'), t('cl3F3'))}
        ${tile('gift', t('clRewardH'), t('cl3F4', { n: R.reward.members, d: R.reward.days, kf: R.reward.kf }), true)}</div></div>
    ${inv}${myReqCard(mine)}${tableBlock()}`;
  }
  function myReqCard(mine) {
    const reqs = mine.myRequests || [], res = (mine.reqResults || []).filter(r => !reqs.some(x => x.id === r.clan));
    if (!reqs.length && !res.length) return '';
    const R = mine.reqRules || { max: 3, cooldownH: 24 };
    return `<div class="card cl3-invs cl3-myreq"><div class="cl3-h"><span>${t('cl3MyReqH')} <b>${reqs.length} / ${R.max}</b></span><small class="mute">${t('cl3MyReqRule', { n: R.max, h: R.cooldownH })}</small></div>
      ${reqs.map(x => `<div class="cl3-inv" data-clopen="${x.id}">${clanIcon(x, 'big')}<div class="grow"><b>${clanName(x)}</b><small>${t('cl3MyReqSent', { t: fmtDT(x.reqAt) })} · ${x.members}/${x.max}</small></div>
        ${clanLvlIcon(lvlOf(x.cw), 30)}<button class="btn ghost sm" data-cl3rx="${x.id}">${ic('x')}${t('cl3ReqCancel')}</button></div>`).join('')}
      ${res.map(r => `<div class="cl3-inv dim"><div class="grow"><b><span class="ctag big">${esc(r.tag)}</span> ${esc(r.name)}</b><small>${fmtDT(r.at)}</small></div><span class="cl3-res ${r.ok ? 'win' : 'lose'}">${r.ok ? t('cl3MyReqOk') : t('cl3MyReqNo')}</span></div>`).join('')}</div>`;
  }

  function header(c, isMine) {
    const my = S.cl.mine?.clan, role = isMine ? my.myRole : null, owner = role === 'owner', officer = owner || role === 'officer';
    const iCanChallenge = !isMine && ['owner', 'officer'].includes(my?.myRole);
    const rk = warRank(c.id), on = c.members.filter(m => m.online).length;
    const kick = [isMine ? t('cl3YourClan') : t('cl3Clan'), cwCal(c.cw) ? t('cl3Cal', { n: c.cw.cal }) : `LVL ${c.cw.lvl}`, rk.place ? t('cl3InTop', { n: rk.place }) : ''].filter(Boolean);
    const acts = [];
    if (iCanChallenge) acts.push(`<button class="btn cl3-cta" id="cl-chal">${ic('swords')}${t('clChallenge')}</button>`);
    if (!isMine && !my) { const jb = joinBtn(c, true); if (jb) acts.push(jb); }
    if (isMine && officer) acts.push(`<button class="btn cl3-cta" id="cl3-chgo">${ic('swords')}${t('cl3WarGo')}</button>`);
    if (owner) acts.push(`<button class="btn ghost cl3-cta2" id="cl-set">${ic('gear')}${t('clSettings')}</button>`);
    if (isMine && !owner) acts.push(`<button class="btn ghost cl3-cta2" id="cl-leave">${ic('exit')}${t('clLeave')}</button>`);
    return `<div class="card cl3-head">${bannerHtml(c.banner, 'cl3-ban')}
      <div class="cl3-logo">${clanIcon(c, 'big')}</div>
      <div class="cl3-hm"><div class="cl3-kick">${kick.map(esc).join('<i></i>')}</div>
        <h1 class="cl3-name">${clanName(c)}</h1>
        <div class="cl3-desc">${c.desc ? esc(c.desc) : `<span class="mute">${t('clNoDesc')}</span>`}</div>
        <div class="cl3-meta">${role ? `${roleChip(role)}<span class="mute">${t('cl3You')}</span>` : ''}
          ${c.partner ? `<span class="cl3-badge gold"><i class="ctag-p">${PARTNER_SVG}</i>${t('clPartner')}</span>` : ''}${c.reward ? `<span class="cl3-badge">${t('clFoundersTag')}</span>` : ''}
          <span>${ic('users')}<b>${c.members.length}</b> / ${c.max}</span><span class="cl3-jmode jm-${c.joinMode || 'invite'}">${t('cl3Mode_' + (c.joinMode || 'invite'))}${c.minElo ? ` · ${c.minElo}+ ELO` : ''}</span><span><i class="cl3-dot${on ? ' on' : ''}"></i>${t('cl3Online', { n: `<b>${on}</b>` })}</span>
          <span class="mute">${t('clSince', { d: fmtDate(c.created) })}</span></div></div>
      <div class="cl3-acts">${acts.join('')}</div></div>`;
  }
  function tiles(c) {
    const rk = warRank(c.id), cal = cwCal(c.cw), on = c.members.filter(m => m.online).length, g = c.cw.w + c.cw.l;
    const tl = (k, v, s, cls = '') => `<div class="cl3-st ${cls}"><span>${k}</span><b>${v}</b><small>${s}</small></div>`;
    return `<div class="cl3-sts${c.points ? ' pts8' : ''}">
      ${tl(t('cl3Place'), rk.place ? '#' + rk.place : '—', rk.place ? t('cl3PlaceSub', { n: rk.total }) : t('cl3PlaceCal'), 'hot')}
      ${tl(t('clWarRating'), cal ? '?' : c.cw.elo, cal ? t('cl3Cal', { n: c.cw.cal }) : `${c.cw.w}–${c.cw.l}`)}
      ${tl(t('cl3Lvl'), `<span class="cl3-lv">${clanLvlIcon(lvlOf(c.cw), 26)}${cal ? '?' : 'LVL ' + c.cw.lvl}</span>`, cal ? t('clCalHint').split('—')[0] : c.cw.next ? t('cl3ToLvl', { n: c.cw.next - c.cw.elo, l: c.cw.lvl + 1 }) : t('cl3LvlMax'))}
      ${tl(t('cl3Wins'), c.cw.w, g ? t('cl3Wr', { n: Math.round(c.cw.w / g * 100), l: c.cw.l }) : '—')}
      ${tl(t('clMembers'), `${c.members.length}<em> / ${c.max}</em>`, t('cl3FreeSlots', { n: Math.max(0, c.max - c.members.length) }))}
      ${tl(t('cl3OnlineH'), `<span class="cl3-lv"><i class="cl3-dot${on ? ' on' : ''}"></i>${on}</span>`, t('cl3OnlineSub'))}
      ${tl(t('clPower'), c.power, t('clPowerSub'))}
      ${c.points ? tl(t('cl3PtsTile'), c.points.total, ptsRank(c.id) ? t('cl3PtsRank', { p: ptsRank(c.id) }) + ' · ' + t('cl3Season', { n: c.points.season.n }) : t('cl3Season', { n: c.points.season.n }), 'pts') : ''}</div>`;
  }

  function progress(c) {
    const cw = c.cw, modes = (c.warModes || ['5v5']).map(modeT).join(' · ');
    const hints = `<div class="cl3-hints"><span>${ic('swords')}${t('cl3H1')}</span><span>${ic('star')}${t('cl3H2')}</span><span>${ic('users')}${t('cl3H3', { m: modes })}</span><span>${ic('trend')}${t('cl3H4')}</span></div>`;
    if (cwCal(cw)) return `<div class="card cl3-prog">${head(t('cl3ProgH'), `<span class="mute">${t('cl3Cal', { n: cw.cal })}</span>`)}
      <div class="cl3-pm">${clanLvlIcon(0, 64)}<div class="grow"><div class="cl3-pips">${[0, 1, 2, 3, 4].map(i => `<i class="${i < cw.cal ? 'on' : ''}"></i>`).join('')}</div>
        <div class="cl3-pt"><b>${t('cl3CalLeft', { n: 5 - cw.cal })}</b><span class="mute">${t('clCalHint')}</span></div></div><div class="cl3-big"><span>${t('cl3ColWL')}</span><b>${cw.w}–${cw.l}</b></div></div>${hints}</div>`;
    const lo = cw.min ?? 0, hi = cw.next, p = hi ? Math.max(2, Math.min(100, (cw.elo - lo) / (hi - lo) * 100)) : 100;
    return `<div class="card cl3-prog">${head(t('cl3ProgH'), `<span class="mute">${hi ? t('cl3LvlsTo', { l: cw.lvl + 1, n: hi - cw.elo }) : t('cl3LvlMax')}</span>`)}
      <div class="cl3-pm"><div class="cl3-big">${clanLvlIcon(cw.lvl, 56)}<b>LVL ${cw.lvl}</b></div>
        <div class="grow"><div class="cl3-pv"><b>${cw.elo}</b><span class="mute">/ ${hi || cw.elo} ELO</span></div><div class="cl3-bar"><i style="width:${p}%"></i></div>
          <div class="cl3-pt">${hi ? t('cl3ProgTo', { n: hi - cw.elo, l: cw.lvl + 1 }) : t('cl3ProgMax')}</div></div>
        <div class="cl3-big dim">${hi ? clanLvlIcon(cw.lvl + 1, 56) : clanLvlIcon(10, 56)}<b>${hi ? 'LVL ' + (cw.lvl + 1) : 'MAX'}</b></div></div>${hints}</div>`;
  }
  function levels(c) {
    const cur = lvlOf(c.cw);
    return `<div class="card cl3-lvls">${head(t('cl3LvlsH'), c.cw.next ? `<span class="mute">${t('cl3LvlsTo', { l: cur + 1, n: c.cw.next - c.cw.elo })}</span>` : '')}
      <div class="cl3-lrow">${CW_LV.map((min, i) => { const l = i + 1; return `<div class="cl3-lc ${l < cur ? 'past' : l === cur ? 'cur' : ''}">${clanLvlIcon(l, 34)}<b>LVL ${l}</b><span>${min ? min + '+' : '<' + CW_LV[1]}</span></div>`; }).join('')}</div></div>`;
  }
  const memLine = (m, i) => `<div class="cl3-mr" data-prof="${m.id}"><span class="cl3-n">${i + 1}</span>${avaF(m, 'sm')}<span class="cl3-nk"><span class="nkl">${nickHtml(m)}</span>${roleChip(m.role)}</span>
    <span class="cl3-wl5">${m.r5 ? wlT(m.r5.w, m.r5.l) : '<span class="mute">—</span>'}</span><b class="num">${m.elo}<small> ELO</small></b></div>`;
  function best(c, isMine) {
    const top = [...c.members].sort((a, b) => b.elo - a.elo).slice(0, isMine ? 5 : 20);
    return `<div class="card cl3-best">${head(isMine ? t('cl3BestH') : `${t('clMembers')} <b>${c.members.length}</b>`, isMine ? link('data-cl3sub="members"', t('cl3AllMembers')) : '')}${top.map(memLine).join('')}</div>`;
  }
  const nickBy = (c, uid) => esc(c.members.find(m => m.id === uid)?.nick || c.invites?.find(m => m.id === uid)?.nick || '—');
  function logLine(c, x) {
    const d = x.details || {}, by = `<b>${esc(x.byNick || 'Konzte')}</b>`, u = `<b>${nickBy(c, d.uid)}</b>`, a = x.action;
    let txt, k = 'edit', cls = '';
    if (a.startsWith('staff-')) txt = t('cl3L_staff', { a: esc(a.slice(6)) });
    else if (I18N.en['cl3L_' + a]) txt = t('cl3L_' + a, { by, u, r: d.role ? ROLE_T(d.role) : '', c: esc(d.clan || d.vs || ''), m: d.mode ? modeT(d.mode) : '', l: d.lvl, e: d.elo, d: d.d > 0 ? '+' + d.d : d.d ?? '' });
    else txt = `${by} ${esc(a)}`;
    if (['create', 'join', 'invite'].includes(a)) k = 'plus';
    else if (['leave', 'kick'].includes(a)) { k = 'x'; cls = 'neg'; }
    else if (a === 'challenge') k = 'swords';
    else if (a === 'war-win') { k = 'swords'; cls = 'pos'; } else if (a === 'war-loss') { k = 'swords'; cls = 'neg'; }
    else if (['reward', 'calibrated'].includes(a)) { k = 'star'; cls = 'gold'; }
    return `<div class="cl3-ev">${ic(k, cls)}<span class="grow">${txt}</span><span class="mute">${fmtDT(x.at)}</span></div>`;
  }
  function warEvents(c) {
    return (c.wars || []).filter(w => w.state === 'done').map(w => {
      const won = w.winner === c.id, vs = w.from.id === c.id ? w.to : w.from, d = w.delta?.[c.id];
      return { at: w.at, action: won ? 'war-win' : 'war-loss', details: { vs: vs.tag, d } };
    });
  }
  function events(c, isMine, n = 6) {
    const officer = isMine && c.log;
    const list = (officer ? c.log : warEvents(c)).slice(0, n);
    return `<div class="card cl3-evs">${head(t('cl3EventsH'), officer && c.log.length > n ? link('data-cl3sub="log"', t('cl3AllLog')) : '')}
      ${list.length ? list.map(x => logLine(c, x)).join('') : `<div class="cl3-empty">${t('cl3NoEvents')}</div>`}</div>`;
  }
  function rankCard(c, isMine) {
    const rk = warRank(c.id);
    let body;
    if (cwCal(c.cw)) body = `<div class="cl3-rk">${clanLvlIcon(0, 46)}<div><b class="cl3-rbig">—</b><span class="mute">${t('cl3RankCal', { n: c.cw.cal })}</span></div></div>`;
    else {
      const a = rk.above;
      body = `<div class="cl3-rk"><b class="cl3-rbig">#${rk.place}</b><div><b>${c.cw.elo} ELO</b><span class="mute">${t('cl3PlaceSub', { n: rk.total })}</span></div></div>
        ${a ? `<div class="cl3-rival" data-clopen="${a.id}"><span class="mute">#${rk.place - 1}</span>${clanIcon(a, '', true)}<b class="grow">${clanName(a)}</b><span class="cl3-gap"><b>+${Math.max(1, a.cw.elo - c.cw.elo)}</b><small>${t('cl3RankAbove')}</small></span>${ic('chev')}</div>`
          : `<div class="cl3-first">${ic('star', 'gold')}${isMine ? t('cl3RankTop') : t('cl3RankTopO')}</div>`}`;
    }
    return `<div class="card cl3-side">${head(t('cl3RankH'))}${body}${link('data-cl3sub="top"', t('cl3OpenTop'))}</div>`;
  }
  function meCard(c) {
    const me = c.members.find(m => m.id === S.me.id); if (!me) return '';
    const n = [...c.members].sort((a, b) => b.elo - a.elo).findIndex(m => m.id === me.id) + 1;
    return `<div class="card cl3-side">${head(t('cl3MeH'), roleChip(me.role))}
      <div class="cl3-me"><div><b>${me.elo}</b><span>ELO</span></div><div><b>#${n}</b><span>${t('cl3MeRank', { n }).replace(/^#\d+\s*/, '')}</span></div><div><b>${me.r5 ? `${me.r5.w}–${me.r5.l}` : '—'}</b><span>${t('cl3WL5')}</span></div></div>
      <p class="cl3-note">${t('cl3MeText')}</p></div>`;
  }
  function matesCard(c) {
    const on = c.members.filter(m => m.online && m.id !== S.me.id);
    const inParty = new Set((S.live?.party?.members || []).map(m => m.id));
    return `<div class="card cl3-side">${head(t('cl3MatesH'), `<span class="cl3-cnt"><i class="cl3-dot${on.length ? ' on' : ''}"></i>${on.length}</span>`)}
      ${on.length ? on.map(m => `<div class="cl3-mate" data-prof="${m.id}">${avaF(m, 'sm')}<span class="grow nkl">${nickHtml(m)}</span>${inParty.has(m.id) ? `<span class="mute">${t('party')}</span>` : `<button class="btn ghost xs" data-cl3inv="${m.id}">${ic('party')}${t('cl3ToParty')}</button>`}</div>`).join('')
        : `<div class="cl3-empty l">${t('cl3MatesNone')}</div>`}${link('data-cl3sub="members"', t('cl3AllMates'))}</div>`;
  }
  function warCard(c) {
    const role = c.myRole, officer = role === 'owner' || role === 'officer';
    const open = (c.wars || []).filter(w => ['pending', 'ready', 'match'].includes(w.state));
    const rows = open.map(w => {
      const inc = w.to.id === c.id, vs = inc ? w.from : w.to;
      if (w.state === 'pending' && inc) return `<div class="cl3-wi in">${clanIcon(vs, '', true)}<div class="grow"><b>${t('cl3WarIn', { c: esc(vs.tag), m: modeT(w.mode) })}</b><small>${esc(vs.name)} · ${fmtDT(w.at)}</small></div>
        ${officer ? `<div class="cl3-wb"><button class="btn green sm" data-clwar-ok="${w.id}">${t('accept')}</button><button class="btn ghost sm" data-clwar-x="${w.id}">${t('decline')}</button></div>` : ''}</div>`;
      if (w.state === 'pending') return `<div class="cl3-wi">${clanIcon(vs, '', true)}<div class="grow"><b>${t('cl3WarOut', { c: esc(vs.tag), m: modeT(w.mode) })}</b><small>${WAR_ST(w)}${w.failed ? ' · ' + esc(w.failed) : ''}</small></div>
        ${officer ? `<button class="btn ghost xs" data-clwar-x="${w.id}">${t('cancel')}</button>` : ''}</div>`;
      return `<div class="cl3-wi live">${clanIcon(vs, '', true)}<div class="grow"><b>${t('cl3WarLive', { c: esc(vs.tag), s: WAR_ST(w) })}</b><small>${modeT(w.mode)}${w.match ? ` · <a href="#" data-clmatch="${w.match}">#${w.match}</a>` : ''}</small></div>
        ${officer && w.state === 'ready' ? `<button class="btn ghost xs" data-clwar-x="${w.id}">${t('cancel')}</button>` : ''}</div>`;
    }).join('');
    return `<div class="card cl3-side cl3-war">${head(t('cl3WarH'), open.length ? `<span class="cl3-cnt hot">${open.length}</span>` : '')}
      ${rows || `<div class="cl3-wnone">${ic('swords')}<div><b>${t('cl3WarNone')}</b><span class="mute">${officer ? t('cl3WarOfficer') : t('cl3WarMember')}</span></div></div>`}
      ${officer ? `<button class="btn ghost cl3-wgo" data-cl3sub="top">${t('cl3WarGo')}${ic('chev')}</button>` : ''}</div>`;
  }
  function modCard(c) {
    if (!(S.me.staff || S.me.admin)) return '';
    return `<div class="card cl3-side cl3-mod">${head(t('clMod'))}
      <div class="cl3-row"><input id="clm-tag" value="${esc(c.tag)}" maxlength="5" style="width:84px;text-transform:uppercase"><input id="clm-name" value="${esc(c.name)}" maxlength="24" class="grow"></div>
      <button class="btn ghost sm" id="clm-ren">${t('clRename')}</button>
      <input id="clm-reason" placeholder="${t('clReasonPh')}" maxlength="200">
      <div class="cl3-row wrap">${S.me.admin || S.me.auditor ? `<button class="btn ${c.partner ? 'ghost' : 'gold'} sm" id="clm-partner">${c.partner ? t('clUnpartner') : t('clMakePartner')}</button>` : ''}
        ${c.avatar ? `<button class="btn ghost sm" id="clm-avx">${t('clAvatarOffStaff')}</button>` : ''}<button class="btn red sm" id="clm-dis">${t('clDisband')}</button></div></div>`;
  }

  function ptsRank(id) {
    const all = (S.cl.list?.list || []).filter(x => x.pts > 0).sort((a, b) => b.pts - a.pts);
    const i = all.findIndex(x => x.id === id);
    return i >= 0 ? i + 1 : null;
  }
  function contribCard(c) {
    const P = c.points; if (!P) return '';
    const all = !!S.cl.ptsAll, rows = all ? P.board : P.board.slice(0, 5), r = P.rules;
    return `<div class="card cl3-ctb">${head(`${t('cl3CtbH')} <i class="cl3-sep"></i> ${t('cl3Season', { n: P.season.n })}${P.season.name ? ' · ' + esc(P.season.name) : ''}`,
        P.board.length > 5 ? `<button class="cl3-link" id="cl3-ptsall">${all ? t('cl3Less') : t('cl3AllCtb')}${ic('chev')}</button>` : '')}
      ${P.total ? rows.map(x => `<div class="cl3-mr${x.id === S.me.id ? ' me' : ''}${x.left ? ' left' : ''}" data-prof="${x.id}"><span class="cl3-n">${x.place}</span>${avaF(x, 'sm')}<span class="cl3-nk"><span class="nkl">${nickHtml(x)}</span>${x.role ? roleChip(x.role) : `<span class="cl3-role">${t('cl3Left')}</span>`}</span>
        <span class="cl3-pbar"><i style="width:${P.board[0].pts ? Math.max(2, x.pts / P.board[0].pts * 100) : 0}%"></i></span><b class="num">${x.pts}<small> ${t('cl3PtsU')}</small></b></div>`).join('')
        : `<div class="cl3-empty">${t('cl3NoPts')}</div>`}
      <div class="cl3-ptsr">${ic('star', 'gold')}<span>${t('cl3PtsRules', { w: r.win, l: r.loss, m: r.mvp, cw: r.warWin, cl: r.warLoss })}</span><span class="mute">${t('cl3PtsNote')}</span></div></div>`;
  }
  function myPtsCard(c) {
    const P = c.points, me = P?.me; if (!me) return '';
    const share = P.total ? Math.round(me.pts / P.total * 100) : 0, r = P.rules;
    return `<div class="card cl3-side cl3-myp">${head(t('cl3MyPtsH'), `<span class="cl3-cnt">#${me.place || '—'} ${t('cl3InClan')}</span>`)}
      <div class="cl3-mypts"><b>${me.pts}</b><div class="grow"><span>${t('cl3PtsU')}</span><small class="mute">${t('cl3Season', { n: P.season.n })}${P.season.name ? ' · ' + esc(P.season.name) : ''}</small></div>
        <em>${share}%<small>${t('cl3OfClan')}</small></em></div>
      <div class="cl3-bar"><i style="width:${Math.max(share ? 2 : 0, share)}%"></i></div>
      <p class="cl3-note">${t('cl3MyPtsText', { w: r.win, l: r.loss, m: r.mvp, cw: r.warWin })}</p></div>`;
  }
  function joinModeCard(c) {
    const mode = c.joinMode || 'invite';
    return `<div class="card cl3-side">${head(t('cl3JoinH'))}
      <div class="cl3-jm">${['invite', 'request', 'open'].map(k => `<button data-cl3jm="${k}" class="${mode === k ? 'on' : ''}"><b>${t('cl3Mode_' + k)}</b><span>${t('cl3ModeH_' + k)}</span></button>`).join('')}</div>
      <div class="cl3-minelo"><span>${t('cl3MinElo')}</span><input id="cl3-minelo" type="number" min="0" max="5000" step="50" value="${c.minElo || 0}"><button class="btn ghost sm" id="cl3-minsave">${t('save')}</button></div>
      <p class="cl3-note">${t('cl3MinEloH')}</p></div>`;
  }
  function requestsTab(c) {
    const R = c.requests || [];
    const list = `<div class="card cl3-reqs">${head(`${t('cl3TReq')} <b>${R.length}</b>`)}
      ${R.length ? R.map(r => `<div class="cl3-rq" data-prof="${r.id}">${avaF(r, 'sm')}<div class="grow"><div class="cl3-rqh"><span class="nkl">${nickHtml(r)}</span><b class="num">${r.elo}<small> ELO</small></b><span class="mute">${fmtDT(r.at)}</span></div>${r.text ? `<p>${esc(r.text)}</p>` : ''}</div>
        <div class="cl3-rqb"><button class="btn green sm" data-cl3ra="${r.id}:1">${ic('check')}${t('accept')}</button><button class="btn ghost sm" data-cl3ra="${r.id}:0">${t('decline')}</button></div></div>`).join('')
        : `<div class="cl3-empty">${t('cl3NoReq')}</div>`}</div>`;
    return lay(list, joinModeCard(c));
  }

  function membersTab(c, isMine) {
    const role = isMine ? c.myRole : null, owner = role === 'owner', officer = owner || role === 'officer';
    const acts = m => {
      const a = [];
      if (owner && m.id !== S.me.id) {
        a.push(m.role === 'officer' ? `<button class="btn ghost xs" data-clrole="${m.id}:member">${t('clDemote')}</button>` : `<button class="btn ghost xs" data-clrole="${m.id}:officer">${t('clPromote')}</button>`);
        a.push(`<button class="btn ghost xs" data-clrole="${m.id}:owner">${t('clTransfer')}</button>`);
      }
      if (officer && m.id !== S.me.id && m.role !== 'owner' && (owner || m.role === 'member')) a.push(`<button class="btn ghost xs cl3-kickb" data-clkick="${m.id}">${t('clKick')}</button>`);
      return a.join('');
    };
    const table = `<div class="card cl3-mt${owner ? ' own' : officer ? ' off' : ''}">${head(`${t('clMembers')} <b>${c.members.length} / ${c.max}</b>`)}
      <div class="cl3-mh"><span>${t('cl3Player')}</span><span>${t('cl3Role')}</span><span>ELO</span><span>${t('cl3WL5')}</span><span>${t('cl3Joined')}</span><span></span></div>
      ${c.members.map(m => `<div class="cl3-mrow cl-mem" data-prof="${m.id}"><span class="cl3-pc"><span class="cl3-av">${avaF(m, 'sm')}<i class="cl3-dot${m.online ? ' on' : ''}"></i></span><span class="nkl">${nickHtml(m)}</span></span>
        <span>${roleChip(m.role)}</span><b class="num">${m.elo}</b><span class="num">${m.r5 ? wlT(m.r5.w, m.r5.l) : '—'}</span><span class="mute">${m.joined ? fmtDate(m.joined) : '—'}</span><span class="cl3-ma">${acts(m)}</span></div>`).join('')}</div>`;
    const invite = officer ? `<div class="card cl3-side">${head(t('clInvite'))}
      <div class="cl3-row"><input id="cl-q" class="grow" placeholder="${t('addFriendPh')}" autocomplete="off"><button class="btn ghost sm" id="cl-qgo">${t('search')}</button></div><div id="cl-qres" class="cl3-qres"></div>
      ${c.invites?.length ? `<div class="cl3-note">${t('clPending')}: ${c.invites.map(i => esc(i.nick)).join(', ')}</div>` : ''}</div>` : '';
    return lay(table, `${invite}<div class="card cl3-side">${head(t('cl3RolesH'))}<p class="cl3-note">${t('cl3RolesText')}</p></div>${isMine ? matesCard(c) : ''}`);
  }
  function warsList(c, isMine) {
    const officer = isMine && ['owner', 'officer'].includes(c.myRole);
    const row = w => {
      const inc = isMine && w.to.id === c.id;
      const res = w.state === 'done' ? (w.winner === c.id ? `<span class="cl3-res win">${t('clWon')} ${w.delta?.[c.id] > 0 ? '+' + w.delta[c.id] : ''}</span>` : `<span class="cl3-res lose">${t('clLost')} ${w.delta?.[c.id] ?? ''}</span>`) : `<span class="cl3-res">${WAR_ST(w)}</span>`;
      const b = [];
      if (officer && w.state === 'pending' && inc) b.push(`<button class="btn green xs" data-clwar-ok="${w.id}">${t('accept')}</button>`);
      if (officer && ['pending', 'ready'].includes(w.state)) b.push(`<button class="btn ghost xs" data-clwar-x="${w.id}">${inc && w.state === 'pending' ? t('decline') : t('cancel')}</button>`);
      return `<div class="cl3-wr"><span class="cl3-mode">${modeT(w.mode)}</span><div class="cl3-vs"><span>${clanIcon(w.from, '', true)}<b>${clanName(w.from)}</b></span><i>${t('vs')}</i><span>${clanIcon(w.to, '', true)}<b>${clanName(w.to)}</b></span></div>
        <span class="mute cl3-wd">${fmtDT(w.at)}${w.match ? ` · <a href="#" data-clmatch="${w.match}">#${w.match}</a>` : ''}${w.failed && w.state === 'pending' ? ' · ' + esc(w.failed) : ''}</span>${res}${b.join('')}</div>`;
    };
    return `<div class="card cl3-wars">${head(t('cl3HistH'), `<span class="mute">${c.cw.w}–${c.cw.l}</span>`)}${c.wars.length ? c.wars.map(row).join('') : `<div class="cl3-empty">${t('clNoWars')}</div>`}</div>`;
  }
  function chatTab(c) {
    return `<div class="card cl-chat cl3-chat">${head(t('clChat'))}
      <div class="log" data-scroll="clchat" id="cl-log">${c.chat.map(x => `<div class="cl3-msg${x.uid === S.me.id ? ' me' : ''}"><b>${esc(x.nick)}</b><span>${esc(x.text)}</span>${x.at ? `<small>${fmtDT(x.at)}</small>` : ''}</div>`).join('') || `<span class="mute">${t('noMsgs')}</span>`}</div>
      <form class="cl3-row" id="cl-chatf"><input id="cl-msg" class="grow" maxlength="300" placeholder="${t('clChatPh')}" autocomplete="off"><button class="btn sm">${ic('send')}</button></form></div>`;
  }
  const lay = (main, side) => `<div class="cl3-lay"><div class="cl3-main">${main}</div><div class="cl3-right">${side}</div></div>`;

  function clanPage(c, isMine) {
    const officer = isMine && ['owner', 'officer'].includes(c.myRole);
    const tabs = [['overview', t('cl3TOverview')], ['members', t('cl3TMembers'), c.members.length], ['wars', t('cl3TWars'), (c.wars || []).filter(w => w.state === 'pending' && w.to.id === c.id).length || '']];
    if (isMine && c.chat) tabs.push(['chat', t('cl3TChat')]);
    if (officer && c.log) tabs.push(['log', t('cl3TLog')]);
    if (officer && c.requests) tabs.push(['requests', t('cl3TReq'), c.requests.length || '']);
    tabs.push(['top', t('cl3TTop')]);
    let sub = S.cl.sub || 'overview';
    if (!tabs.some(x => x[0] === sub)) sub = 'overview';
    const pend = (c.wars || []).filter(w => w.state === 'pending').length;
    const strip = `<div class="cl3-strip"><span>${ic('users')}<div><b>${t('cl3Together')}</b><small>${t('cl3TogetherS', { n: c.together })}</small></div></span>
      <span>${ic('swords')}<div><b>${t('cl3Waiting')}</b><small>${t('cl3WaitingS', { n: pend })}</small></div></span>
      ${officer ? `<span>${ic('send')}<div><b>${t('cl3Invited')}</b><small>${t('cl3InvitedS', { n: c.invites?.length || 0 })}</small></div></span>` : ''}</div>`;
    const bar = `<div class="cl3-tabsrow"><div class="cl3-tabs">${tabs.map(([k, l, n]) => `<button data-cl3sub="${k}" class="${sub === k ? 'on' : ''}">${l}${n ? `<em>${n}</em>` : ''}</button>`).join('')}</div>${strip}</div>`;
    let body;
    if (sub === 'members') body = membersTab(c, isMine);
    else if (sub === 'wars') body = lay(warsList(c, isMine), `${isMine ? warCard(c) : ''}${levels(c)}`);
    else if (sub === 'chat') body = lay(chatTab(c), matesCard(c));
    else if (sub === 'log') body = `<div class="card cl3-evs">${head(t('clLog'))}${c.log.map(x => logLine(c, x)).join('') || `<div class="cl3-empty">${t('cl3NoEvents')}</div>`}</div>`;
    else if (sub === 'top') body = tableBlock();
    else if (sub === 'requests') body = requestsTab(c);
    else body = lay(`${progress(c)}${levels(c)}${contribCard(c)}${best(c, isMine)}${events(c, isMine)}`, `${rankCard(c, isMine)}${isMine ? myPtsCard(c) + meCard(c) + matesCard(c) + warCard(c) : ''}${modCard(c)}`);
    return `${header(c, isMine)}${tiles(c)}${bar}${body}`;
  }

  const _prev = renderClans;
  renderClans = function () {
    if (!window.KZ_V3?.()) return _prev.apply(this, arguments);
    const c = S.cl, mine = c.mine;
    if (!mine || !c.list) return render(`<div class="card empty-note">${t('loading')}</div>`);
    if (c.tab === 'top' || c.tab === 'partners') { if (mine.clan && !c.view) c.sub = 'top'; if (c.tab === 'partners') c.f = 'partner'; c.tab = 'mine'; }
    let body;
    if (c.view && c.other) {
      const sub = c.sub; c.sub = ['overview', 'members', 'wars', 'top'].includes(sub) ? sub : 'overview';
      body = `<div class="cl3-back"><button class="btn ghost sm" id="cl-back">${ic('back')}${t('clBack')}</button></div>${clanPage(c.other, false)}`;
    } else if (mine.clan) body = clanPage(mine.clan, true);
    else body = noClanPage(mine);
    render(`<div class="cl3">${body}</div>`);
    const cur = c.view && c.other ? c.other : mine.clan;
    if (cur && c._modId !== cur.id) { c._modId = cur.id; const a = $('#clm-tag'), b = $('#clm-name'); if (a) a.value = cur.tag; if (b) b.value = cur.name; }
    bindClans();
    bind3();
  };

  function bind3() {
    const v = $('#view');
    v.querySelectorAll('[data-cl3sub]').forEach(b => b.onclick = e => { e.stopPropagation(); S.cl.sub = b.dataset.cl3sub; refresh(); if (S.cl.sub === 'top') $('#view').scrollTop = 0; });
    v.querySelectorAll('[data-cl3f]').forEach(b => b.onclick = () => { S.cl.f = b.dataset.cl3f; refresh(); });
    const chgo = $('#cl3-chgo'); if (chgo) chgo.onclick = () => { S.cl.sub = 'top'; S.cl.f = 'all'; refresh(); };
    const back = $('#cl-back'); if (back) back.addEventListener('click', () => { S.cl.sub = 'overview'; });
    const find = $('#cl3-find'); if (find) find.onclick = () => { $('#cl3-table')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); setTimeout(() => $('#cl3-q')?.focus(), 350); };
    const tag = $('#cl-tag'); if (tag) tag.addEventListener('input', () => { const p = tag.selectionStart; tag.value = tag.value.toUpperCase(); tag.setSelectionRange(p, p); });
    const q = $('#cl3-q');
    if (q) q.oninput = () => { S.cl.q = q.value; const tb = $('#cl3-tb'); if (tb) { tb.innerHTML = rowsHtml(); bindClans(); } };
    v.querySelectorAll('.cl3-mr[data-prof], .cl3-mate[data-prof]').forEach(r => r.onclick = e => { if (!e.target.closest('button')) go('profile', r.dataset.prof); });
    const all = (sel, fn) => v.querySelectorAll(sel).forEach(b => b.onclick = run(async e => { e.stopPropagation(); e.preventDefault(); await fn(b); }));
    all('[data-cl3req]', b => reqModal(b.dataset.cl3req));
    all('[data-cl3join]', async b => {
      const x = clanById(b.dataset.cl3join); if (!x || !confirm(t('cl3JoinQ', { c: x.tag }))) return;
      S.cl.mine = await api('/api/clan/join', { clan: x.id }); sfx('join'); toast(t('cl3JoinedOk', { c: `[${x.tag}] ${x.name}` }));
      S.cl.view = null; S.cl.other = null; S.cl.sub = 'overview'; loadClans();
    });
    all('[data-cl3rx]', async b => { S.cl.mine = await api('/api/clan/request/cancel', { clan: b.dataset.cl3rx }); refresh(); });
    all('[data-cl3ra]', async b => { const [uid, yes] = b.dataset.cl3ra.split(':'); S.cl.mine = await api('/api/clan/request/answer', { uid, yes: yes === '1' }); if (yes === '1') sfx('join'); loadClans(); });
    const jm = body => api('/api/clan/joinmode', body).then(r => { S.cl.mine = r; toast(t('cl3JmSaved')); refresh(); });
    all('[data-cl3jm]', b => jm({ joinMode: b.dataset.cl3jm, minElo: $('#cl3-minelo')?.value }));
    const ms = $('#cl3-minsave'); if (ms) ms.onclick = run(() => jm({ minElo: $('#cl3-minelo').value }));
    const pa = $('#cl3-ptsall'); if (pa) pa.onclick = e => { e.stopPropagation(); S.cl.ptsAll = !S.cl.ptsAll; refresh(); };
    v.querySelectorAll('.cl3-rq[data-prof]').forEach(r => r.onclick = e => { if (!e.target.closest('button')) go('profile', r.dataset.prof); });
    v.querySelectorAll('[data-cl3inv]').forEach(b => b.onclick = e => { e.stopPropagation(); wsSend({ t: 'party-invite', uid: b.dataset.cl3inv }); toast(t('inviteSent')); b.disabled = true; });
  }

  const _settings = settingsModal;
  settingsModal = function (c) {
    _settings.apply(this, arguments);
    if (!window.KZ_V3?.() || !c) return;
    const box = $('#modal'), err = box.querySelector('#cs-err'); if (!err) return;
    let sel = c.joinMode || 'invite';
    const d = document.createElement('div');
    d.className = 'cl3-csjm';
    d.innerHTML = `<label class="mute">${t('cl3JoinH')}</label><div class="cl3-jm row3">${['invite', 'request', 'open'].map(k => `<button type="button" data-csjm="${k}" class="${sel === k ? 'on' : ''}"><b>${t('cl3Mode_' + k)}</b><span>${t('cl3ModeH_' + k)}</span></button>`).join('')}</div>
      <div class="cl3-minelo"><span>${t('cl3MinElo')}</span><input id="cs-minelo" type="number" min="0" max="5000" step="50" value="${c.minElo || 0}"></div><div class="mute" style="font-size:12px">${t('cl3MinEloH')}</div>`;
    err.before(d);
    d.querySelectorAll('[data-csjm]').forEach(b => b.onclick = () => { sel = b.dataset.csjm; d.querySelectorAll('[data-csjm]').forEach(x => x.classList.toggle('on', x === b)); });
    box.querySelector('#cs-save')?.addEventListener('click', async () => {
      const minElo = Number(d.querySelector('#cs-minelo').value) || 0;
      if (sel === (c.joinMode || 'invite') && minElo === (c.minElo || 0)) return;
      try { S.cl.mine = await api('/api/clan/joinmode', { joinMode: sel, minElo }); refresh(); } catch (e) { toast(e.message, true); }
    });
  };

  const _laneB = onLaneB;
  onLaneB = function (m) {
    if (m?.t === 'clan' && window.KZ_V3?.()) {
      const openReq = () => { S.cl.view = null; S.cl.other = null; S.cl.tab = 'mine'; S.cl.sub = 'requests'; go('clans'); };
      if (m.ev === 'request') { actionToast(t('cl3ReqToast', { n: m.nick || '?' }), [[t('clOpen'), openReq]]); sfx('clan_invite'); }
      else if (m.ev === 'req-ok') { toast(t('cl3ReqOkToast', { c: `[${m.tag}] ${m.name}` })); sfx('ach'); if (S.page !== 'clans') loadClans(); }
      else if (m.ev === 'req-no') toast(t('cl3ReqNoToast', { c: `[${m.tag}] ${m.name}` }), true);
    }
    return _laneB.apply(this, arguments);
  };
})();

(() => {
  const TX = {
    en: {
      m2_s1: 'Accept', m2_s2: 'Map bans', m2_s3: 'Add the host', m2_s4: 'Play', m2_s5: 'Screenshot', m2_s6: 'Result',
      m2_sPick: 'team pick', m2_mapsLeft: '{n} maps left', m2_inLobbyN: '{a} / {b} in lobby', m2_hostIs: 'host {n}', m2_rounds: 'up to 6 rounds', m2_captain: 'captain', m2_eloKf: 'ELO and KF',
      m2_now: 'Now', m2_nowPickMine: 'Your turn: pick a player', m2_nowPickOther: '{n} is picking a player', m2_nowPickSub: 'Captains take turns building the teams. Click a player to pick.',
      m2_nowPickSubOther: 'Captain of {t} is choosing. You don’t need to do anything — just watch.',
      m2_nowBanMine: 'Your turn: ban a map', m2_nowBanOther: '{n} is banning a map', m2_nowBanSub: 'Click a map you don’t want to play. {k} maps left — the last one is played.',
      m2_nowBanSubOther: 'It’s the {t} captain’s turn. You don’t need to do anything — just watch. {k} maps left.',
      m2_nowJoin: 'Join the host’s lobby in Combat Master', m2_nowJoinSub: 'Host — {h} ({t} captain). Waiting for {k} more, then the host starts the game.',
      m2_nowJoinSubAll: 'Host — {h} ({t} captain). Everyone else is in — mark yourself when you join.',
      m2_nowHost: 'Gather the lobby in Combat Master', m2_nowHostSub: 'You are the host: create a private lobby, accept friend requests and invite everyone. In lobby {a} / {b}.',
      m2_nowPlay: 'Play: Search & Destroy on {m}', m2_nowPlaySub: 'In lobby {a} / {b}. After the match captain {c} sends the scoreboard screenshot.', m2_nowPlaySubMe: 'In lobby {a} / {b}. After the match you send the scoreboard screenshot.',
      m2_nowWait: 'Waiting for {k} more in the lobby', m2_nowWaitSub: 'Missing: {n}. You are the host — invite them or write in the match chat. The game starts when everyone is in.',
      m2_nowShot: 'Send the scoreboard screenshot', m2_nowShotSub: 'SCOREBOARD tab → F12 in Steam or Win+Shift+S → «Send screenshot». You’ll see what Konzte read before sending.',
      m2_nowShotOther: 'Captain {n} is sending the screenshot', m2_nowShotOtherSub: 'ELO is applied as soon as it’s sent. You have 30 minutes to dispute.',
      m2_nowSent: 'Result sent', m2_nowSentSub: 'Staff check every result against the screenshot.', m2_nowDisp: 'Dispute: staff are checking the result', m2_nowDispSub: 'Nothing to do — you’ll get a notification.',
      m2_tTurn: 'for this turn', m2_tLobby: 'to gather the lobby', m2_tLate: 'lobby is late', m2_tPlaying: 'match time', m2_tDispute: 'to dispute',
      m2_todo: 'What to do · {n} steps', m2_noCode: 'No lobby code — join through friends',
      m2_launch: 'Launch Combat Master', m2_launchSeen: 'Konzte sees the game', m2_launchAuto: 'Konzte will tick this itself when it sees the game', m2_launchPlain: 'Open the game in Steam',
      m2_addHost: 'Add the host as a friend', m2_addHostSub: 'Friends → Add → paste the ID', m2_acceptInv: 'Accept the lobby invite', m2_acceptInvSub: 'The host invites you as soon as they see the request',
      m2_mkLobby: 'Create a private lobby', m2_inviteAll: 'Accept requests and invite everyone', m2_waitFor: 'Waiting for: {n}', m2_allIn: 'Everyone is in the lobby',
      m2_inLobby: 'In lobby', m2_btnLobby: 'I’m in the lobby', m2_notLobby: 'not in lobby', m2_lobbyOk: 'in lobby', m2_seen: 'Konzte sees the game', m2_leaveLobby: 'I’m not in the lobby',
      m2_pl1: 'Everyone is in the lobby', m2_pl2: 'The host starts the match', m2_pl2s: 'Search & Destroy · {m}', m2_pl3: 'Play up to 6 rounds', m2_pl3s: 'After the match keep the SCOREBOARD tab open — a screenshot is needed',
      m2_btnOver: 'Match is over', m2_btnOverCap: 'Match is over — to the screenshot',
      m2_sh1: 'Open the SCOREBOARD tab after the match', m2_sh2: 'Take a screenshot: F12 in Steam or Win+Shift+S', m2_sh3: 'Paste it here (Ctrl+V) or pick a file', m2_sh3s: 'Konzte reads the score and K/D, you check before sending',
      m2_btnShot: 'Send screenshot', m2_back: '← Back to the game', m2_waitCap: 'Waiting for the screenshot from captain {n}',
      m2_trouble: 'Having trouble?', m2_writeChat: 'Write in the match chat', m2_problem: 'Problem / dispute', m2_draw: 'Draw {n}/{need}', m2_drawOff: 'Cancel draw {n}/{need}',
      m2_next: 'Next', m2_step: 'Step {n} · {s}',
      m2_next3: 'Host — {h}. Their game ID and a «Copy» button will appear here.', m2_next4: 'Search & Destroy, map {m}. After the match captain {c} sends the scoreboard screenshot.',
      m2_next5: 'The captain screenshots the SCOREBOARD tab and sends it here.', m2_next6: 'ELO is applied right away, 30 minutes to dispute.',
      m2_avgChance: 'avg {e} ELO · chance {p}%', m2_avg: 'avg {e} ELO', m2_you: 'you',
      notScoreboardSoft: 'Could not read the results table automatically — choose the winner and fill in the numbers yourself. Staff will check the screenshot.', m2_rfTitle: 'Send result', m2_w1: 'Screenshot', m2_w2: 'Check', m2_w3: 'Done',
      m2_yourShot: 'Your screenshot', m2_legOk: 'read confidently', m2_legWarn: 'check by eye', m2_replace: 'Replace from clipboard', m2_zoom: 'Close-up — what to check',
      m2_read: 'What Konzte read', m2_nicksOk: '{a} of {b} nicks matched', m2_toCheck: '{n} to check', m2_allOk: 'all checked',
      m2_yourTeam: 'your team', m2_winnerL: 'winner', m2_pickWinner: 'Who won?', m2_won: '{t} won',
      m2_colPlayer: 'Konzte player', m2_colMap: 'Matching', m2_colScore: 'Score',
      m2_mNick: 'nick', m2_mLike: 'similar', m2_mExcl: 'by elimination', m2_mNone: 'not found', m2_mManual: 'chosen by you', m2_inGame: 'in game: «{n}»',
      m2_optNone: '— not on the screenshot (enter by hand)', m2_optRow: '«{n}» · {k}/{d}', m2_optRowNoDigits: '«{n}» · digits not read', m2_rowN: 'row {n}',
      m2_kdBad: '{f} of {n} read poorly. K/D {kd} suggests {v}.', m2_kdPair: 'K/D {kd} of {n} doesn’t match {a} — {v} fits.', m2_kdBadNo: 'K/D of {n} doesn’t match the read numbers — check K and D.', m2_kdNone: 'Numbers for {n} weren’t read — enter K and D.',
      m2_other: 'other', m2_kills: 'Kills', m2_deaths: 'Deaths', m2_fixManual: 'Fix by hand', m2_doneManual: 'Done editing',
      m2_confirm: 'All correct — send', m2_after: 'ELO is applied right away. For 30 minutes players can dispute the result; staff check it against the screenshot.',
      m2_nickMissing: 'nick not found', m2_nickExcl: 'by elimination', m2_digitsQ: 'check digits', m2_boxCols: 'Score · K · D',
      m2_noRows: 'Konzte couldn’t match the rows — fill in K and D by hand or replace the screenshot.', m2_sendingT: 'Sending result…',
    },
    uk: {
      m2_s1: 'Прийняти', m2_s2: 'Бани карт', m2_s3: 'Додати хоста', m2_s4: 'Грати', m2_s5: 'Скриншот', m2_s6: 'Результат',
      m2_sPick: 'набір команд', m2_mapsLeft: 'лишилось карт: {n}', m2_inLobbyN: '{a} / {b} у лобі', m2_hostIs: 'хост {n}', m2_rounds: 'до 6 раундів', m2_captain: 'капітан', m2_eloKf: 'ELO і KF',
      m2_now: 'Зараз', m2_nowPickMine: 'Твій хід: обери гравця', m2_nowPickOther: '{n} обирає гравця', m2_nowPickSub: 'Капітани по черзі набирають команди. Натисни на гравця, щоб обрати.',
      m2_nowPickSubOther: 'Обирає капітан {t}. Тобі нічого робити не треба — просто дивись.',
      m2_nowBanMine: 'Твій хід: забань карту', m2_nowBanOther: '{n} банить карту', m2_nowBanSub: 'Натисни на карту, яку не хочеш грати. Лишилось {k} карт — граємо останню.',
      m2_nowBanSubOther: 'Хід капітана {t}. Тобі нічого робити не треба — просто дивись. Лишилось {k} карт.',
      m2_nowJoin: 'Зайди в лобі хоста в Combat Master', m2_nowJoinSub: 'Хост — {h} (капітан {t}). Чекаємо ще {k}, потім хост запускає гру.',
      m2_nowJoinSubAll: 'Хост — {h} (капітан {t}). Решта вже в лобі — відміться, коли зайдеш.',
      m2_nowHost: 'Збери лобі в Combat Master', m2_nowHostSub: 'Ти хост: створи приватне лобі, прийми заявки в друзі й запроси всіх. У лобі {a} / {b}.',
      m2_nowPlay: 'Грай: Search & Destroy на {m}', m2_nowPlaySub: 'У лобі {a} / {b}. Після матчу капітан {c} надішле скриншот таблиці.', m2_nowPlaySubMe: 'У лобі {a} / {b}. Після матчу ти надішлеш скриншот таблиці.',
      m2_nowWait: 'Чекаємо в лобі ще {k}', m2_nowWaitSub: 'Бракує: {n}. Ти хост — запроси їх або напиши в чат матчу. Гра стартує, коли всі зайдуть.',
      m2_nowShot: 'Надішли скриншот таблиці', m2_nowShotSub: 'Вкладка SCOREBOARD → F12 у Steam або Win+Shift+S → «Надіслати скриншот». Перед відправкою побачиш, що прочитав Konzte.',
      m2_nowShotOther: 'Капітан {n} надсилає скриншот', m2_nowShotOtherSub: 'ELO нарахується одразу після відправки. 30 хвилин можна оскаржити.',
      m2_nowSent: 'Результат надіслано', m2_nowSentSub: 'Стафф звіряє кожен результат зі скриншотом.', m2_nowDisp: 'Спір: результат перевіряє стафф', m2_nowDispSub: 'Нічого робити не треба — прийде сповіщення.',
      m2_tTurn: 'на хід', m2_tLobby: 'на збір лобі', m2_tLate: 'лобі затримується', m2_tPlaying: 'йде матч', m2_tDispute: 'на спір',
      m2_todo: 'Що зробити · {n} кроки', m2_noCode: 'Коду лобі немає — заходять через друзів',
      m2_launch: 'Запусти Combat Master', m2_launchSeen: 'Konzte бачить гру', m2_launchAuto: 'Konzte відмітить сам, коли побачить гру', m2_launchPlain: 'Відкрий гру в Steam',
      m2_addHost: 'Додай хоста в друзі', m2_addHostSub: 'Друзі → Додати → встав ID', m2_acceptInv: 'Прийми запрошення в лобі', m2_acceptInvSub: 'Хост запросить, щойно побачить заявку',
      m2_mkLobby: 'Створи приватне лобі', m2_inviteAll: 'Прийми заявки й запроси всіх', m2_waitFor: 'Чекаємо: {n}', m2_allIn: 'Усі в лобі',
      m2_inLobby: 'У лобі', m2_btnLobby: 'Я в лобі', m2_notLobby: 'не в лобі', m2_lobbyOk: 'у лобі', m2_seen: 'Konzte бачить гру', m2_leaveLobby: 'Я не в лобі',
      m2_pl1: 'Усі в лобі', m2_pl2: 'Хост запускає матч', m2_pl2s: 'Search & Destroy · {m}', m2_pl3: 'Грайте до 6 раундів', m2_pl3s: 'Після матчу не закривай вкладку SCOREBOARD — потрібен скриншот',
      m2_btnOver: 'Матч закінчився', m2_btnOverCap: 'Матч закінчився — до скриншота',
      m2_sh1: 'Відкрий вкладку SCOREBOARD після матчу', m2_sh2: 'Зроби скриншот: F12 у Steam або Win+Shift+S', m2_sh3: 'Встав сюди (Ctrl+V) або обери файл', m2_sh3s: 'Konzte прочитає рахунок і K/D, ти перевіриш перед відправкою',
      m2_btnShot: 'Надіслати скриншот', m2_back: '← Назад до гри', m2_waitCap: 'Чекаємо скриншот від капітана {n}',
      m2_trouble: 'Не виходить?', m2_writeChat: 'Написати в чат матчу', m2_problem: 'Проблема / спір', m2_draw: 'Нічия {n}/{need}', m2_drawOff: 'Скасувати нічию {n}/{need}',
      m2_next: 'Далі', m2_step: 'Крок {n} · {s}',
      m2_next3: 'Хост — {h}. Його game ID і кнопка «Копіювати» з’являться тут.', m2_next4: 'Search & Destroy, карта {m}. Після матчу капітан {c} надішле скриншот таблиці.',
      m2_next5: 'Капітан робить скриншот вкладки SCOREBOARD і надсилає його сюди.', m2_next6: 'ELO нарахується одразу, 30 хвилин на спір.',
      m2_avgChance: 'сер. {e} ELO · шанс {p}%', m2_avg: 'сер. {e} ELO', m2_you: 'ти',
      notScoreboardSoft: 'Не вдалося автоматично прочитати таблицю результатів — обери переможця й заповни цифри сам. Стафф перевірить скриншот.', m2_rfTitle: 'Відправка результату', m2_w1: 'Скриншот', m2_w2: 'Перевірка', m2_w3: 'Готово',
      m2_yourShot: 'Твій скриншот', m2_legOk: 'прочитано впевнено', m2_legWarn: 'перевір очима', m2_replace: 'Замінити з буфера', m2_zoom: 'Крупно — що перевірити',
      m2_read: 'Що прочитав Konzte', m2_nicksOk: '{a} з {b} ніків збіглися', m2_toCheck: 'перевірити: {n}', m2_allOk: 'усе перевірено',
      m2_yourTeam: 'твоя команда', m2_winnerL: 'перемога', m2_pickWinner: 'Хто переміг?', m2_won: 'Перемогла {t}',
      m2_colPlayer: 'Гравець Konzte', m2_colMap: 'Зіставлення', m2_colScore: 'Score',
      m2_mNick: 'нік', m2_mLike: 'схожий', m2_mExcl: 'методом виключення', m2_mNone: 'не знайдено', m2_mManual: 'обрано вручну', m2_inGame: 'у грі: «{n}»',
      m2_optNone: '— немає на скриншоті (ввести вручну)', m2_optRow: '«{n}» · {k}/{d}', m2_optRowNoDigits: '«{n}» · цифри не прочитано', m2_rowN: 'рядок {n}',
      m2_kdBad: '{f} {n} читаються погано. K/D {kd} підказує {v}.', m2_kdPair: 'K/D {kd} у {n} не сходиться з {a} — підходить {v}.', m2_kdBadNo: 'K/D {n} не збігається з прочитаними цифрами — перевір K і D.', m2_kdNone: 'Цифри {n} не прочитано — введи K і D.',
      m2_other: 'інше', m2_kills: 'Вбивства', m2_deaths: 'Смерті', m2_fixManual: 'Виправити вручну', m2_doneManual: 'Готово',
      m2_confirm: 'Усе вірно — надіслати', m2_after: 'ELO нарахується одразу. 30 хвилин гравці можуть оскаржити результат, стафф звірить зі скриншотом.',
      m2_nickMissing: 'нік не знайдено', m2_nickExcl: 'методом виключення', m2_digitsQ: 'перевір цифри', m2_boxCols: 'Score · K · D',
      m2_noRows: 'Konzte не зміг зіставити рядки — введи K і D вручну або заміни скриншот.', m2_sendingT: 'Надсилаємо результат…',
    },
    ru: {
      m2_s1: 'Принять', m2_s2: 'Баны карт', m2_s3: 'Добавить хоста', m2_s4: 'Играть', m2_s5: 'Скриншот', m2_s6: 'Результат',
      m2_sPick: 'набор команд', m2_mapsLeft: 'осталось карт: {n}', m2_inLobbyN: '{a} / {b} в лобби', m2_hostIs: 'хост {n}', m2_rounds: 'до 6 раундов', m2_captain: 'капитан', m2_eloKf: 'ELO и KF',
      m2_now: 'Сейчас', m2_nowPickMine: 'Твой ход: выбери игрока', m2_nowPickOther: '{n} выбирает игрока', m2_nowPickSub: 'Капитаны по очереди набирают команды. Нажми на игрока, чтобы выбрать.',
      m2_nowPickSubOther: 'Выбирает капитан {t}. Тебе ничего делать не нужно — просто смотри.',
      m2_nowBanMine: 'Твой ход: забань карту', m2_nowBanOther: '{n} банит карту', m2_nowBanSub: 'Нажми на карту, которую не хочешь играть. Осталось {k} карт — играем последнюю.',
      m2_nowBanSubOther: 'Ход капитана {t}. Тебе ничего делать не нужно — просто смотри. Осталось {k} карт.',
      m2_nowJoin: 'Зайди в лобби хоста в Combat Master', m2_nowJoinSub: 'Хост — {h} (капитан {t}). Ждём ещё {k}, потом хост запускает игру.',
      m2_nowJoinSubAll: 'Хост — {h} (капитан {t}). Остальные уже в лобби — отметься, когда зайдёшь.',
      m2_nowHost: 'Собери лобби в Combat Master', m2_nowHostSub: 'Ты хост: создай приватное лобби, прими заявки в друзья и пригласи всех. В лобби {a} / {b}.',
      m2_nowPlay: 'Играй: Search & Destroy на {m}', m2_nowPlaySub: 'В лобби {a} / {b}. После матча капитан {c} отправит скриншот таблицы.', m2_nowPlaySubMe: 'В лобби {a} / {b}. После матча ты отправишь скриншот таблицы.',
      m2_nowWait: 'Ждём в лобби ещё {k}', m2_nowWaitSub: 'Не хватает: {n}. Ты хост — пригласи их или напиши в чат матча. Игра стартует, когда все зайдут.',
      m2_nowShot: 'Отправь скриншот таблицы', m2_nowShotSub: 'Вкладка SCOREBOARD → F12 в Steam или Win+Shift+S → «Отправить скриншот». Перед отправкой увидишь, что прочитал Konzte.',
      m2_nowShotOther: 'Капитан {n} отправляет скриншот', m2_nowShotOtherSub: 'ELO начислится сразу после отправки. 30 минут можно оспорить.',
      m2_nowSent: 'Результат отправлен', m2_nowSentSub: 'Стафф сверяет каждый результат со скриншотом.', m2_nowDisp: 'Спор: результат проверяет стафф', m2_nowDispSub: 'Ничего делать не нужно — придёт уведомление.',
      m2_tTurn: 'на ход', m2_tLobby: 'на сбор лобби', m2_tLate: 'лобби задерживается', m2_tPlaying: 'идёт матч', m2_tDispute: 'на спор',
      m2_todo: 'Что сделать · {n} шага', m2_noCode: 'Кода лобби нет — заходят через друзей',
      m2_launch: 'Запусти Combat Master', m2_launchSeen: 'Konzte видит игру', m2_launchAuto: 'Konzte отметит сам, когда увидит игру', m2_launchPlain: 'Открой игру в Steam',
      m2_addHost: 'Добавь хоста в друзья', m2_addHostSub: 'Друзья → Добавить → вставь ID', m2_acceptInv: 'Прими приглашение в лобби', m2_acceptInvSub: 'Хост пригласит, как только увидит заявку',
      m2_mkLobby: 'Создай приватное лобби', m2_inviteAll: 'Прими заявки и пригласи всех', m2_waitFor: 'Ждём: {n}', m2_allIn: 'Все в лобби',
      m2_inLobby: 'В лобби', m2_btnLobby: 'Я в лобби', m2_notLobby: 'не в лобби', m2_lobbyOk: 'в лобби', m2_seen: 'Konzte видит игру', m2_leaveLobby: 'Я не в лобби',
      m2_pl1: 'Все в лобби', m2_pl2: 'Хост запускает матч', m2_pl2s: 'Search & Destroy · {m}', m2_pl3: 'Играйте до 6 раундов', m2_pl3s: 'После матча не закрывай вкладку SCOREBOARD — нужен скриншот',
      m2_btnOver: 'Матч закончился', m2_btnOverCap: 'Матч закончился — к скриншоту',
      m2_sh1: 'Открой вкладку SCOREBOARD после матча', m2_sh2: 'Сделай скриншот: F12 в Steam или Win+Shift+S', m2_sh3: 'Вставь сюда (Ctrl+V) или выбери файл', m2_sh3s: 'Konzte прочитает счёт и K/D, ты проверишь перед отправкой',
      m2_btnShot: 'Отправить скриншот', m2_back: '← Назад к игре', m2_waitCap: 'Ждём скриншот от капитана {n}',
      m2_trouble: 'Не получается?', m2_writeChat: 'Написать в чат матча', m2_problem: 'Проблема / спор', m2_draw: 'Ничья {n}/{need}', m2_drawOff: 'Отменить ничью {n}/{need}',
      m2_next: 'Дальше', m2_step: 'Шаг {n} · {s}',
      m2_next3: 'Хост — {h}. Его game ID и кнопка «Копировать» появятся здесь.', m2_next4: 'Search & Destroy, карта {m}. После матча капитан {c} отправит скриншот таблицы.',
      m2_next5: 'Капитан делает скриншот вкладки SCOREBOARD и отправляет его сюда.', m2_next6: 'ELO начислится сразу, 30 минут на спор.',
      m2_avgChance: 'ср. {e} ELO · шанс {p}%', m2_avg: 'ср. {e} ELO', m2_you: 'ты',
      notScoreboardSoft: 'Не удалось автоматически прочитать таблицу результатов — выбери победителя и заполни цифры сам. Стафф проверит скриншот.', m2_rfTitle: 'Отправка результата', m2_w1: 'Скриншот', m2_w2: 'Проверка', m2_w3: 'Готово',
      m2_yourShot: 'Твой скриншот', m2_legOk: 'прочитано уверенно', m2_legWarn: 'проверь глазами', m2_replace: 'Заменить из буфера', m2_zoom: 'Крупно — что проверить',
      m2_read: 'Что прочитал Konzte', m2_nicksOk: '{a} из {b} ников совпали', m2_toCheck: 'проверить: {n}', m2_allOk: 'всё проверено',
      m2_yourTeam: 'твоя команда', m2_winnerL: 'победа', m2_pickWinner: 'Кто победил?', m2_won: 'Победила {t}',
      m2_colPlayer: 'Игрок Konzte', m2_colMap: 'Сопоставление', m2_colScore: 'Score',
      m2_mNick: 'ник', m2_mLike: 'похож', m2_mExcl: 'методом исключения', m2_mNone: 'не найден', m2_mManual: 'выбрано вручную', m2_inGame: 'в игре: «{n}»',
      m2_optNone: '— нет на скриншоте (ввести вручную)', m2_optRow: '«{n}» · {k}/{d}', m2_optRowNoDigits: '«{n}» · цифры не прочитаны', m2_rowN: 'строка {n}',
      m2_kdBad: '{f} {n} читаются плохо. K/D {kd} подсказывает {v}.', m2_kdPair: 'K/D {kd} у {n} не сходится с {a} — подходит {v}.', m2_kdBadNo: 'K/D {n} не сходится с прочитанными цифрами — проверь K и D.', m2_kdNone: 'Цифры {n} не прочитаны — введи K и D.',
      m2_other: 'другое', m2_kills: 'Убийства', m2_deaths: 'Смерти', m2_fixManual: 'Исправить вручную', m2_doneManual: 'Готово',
      m2_confirm: 'Всё верно — отправить', m2_after: 'ELO начислится сразу. 30 минут игроки могут оспорить результат, стафф сверит со скриншотом.',
      m2_nickMissing: 'ник не найден', m2_nickExcl: 'методом исключения', m2_digitsQ: 'проверь цифры', m2_boxCols: 'Score · K · D',
      m2_noRows: 'Konzte не смог сопоставить строки — введи K и D вручную или замени скриншот.', m2_sendingT: 'Отправляем результат…',
    },
  };
  for (const l of Object.keys(TX)) if (I18N[l]) Object.assign(I18N[l], TX[l]);

  const M2 = window.M2 = { over: {} };
  const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  const PAD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 11h4M8 9v4M15 12h.01M18 10h.01"/><path d="M17.3 5H6.7a4 4 0 0 0-4 3.6l-.7 6.2A3 3 0 0 0 5 18c1 0 1.5-.5 2-1l1.4-1.4A2 2 0 0 1 9.8 15h4.4a2 2 0 0 1 1.4.6L17 17c.5.5 1 1 2 1a3 3 0 0 0 3-3.2l-.7-6.2A4 4 0 0 0 17.3 5z"/></svg>';
  const tt = (k, v = {}) => t(k, v);
  const all = m => [...m.teams.A, ...m.teams.B];
  const byId = (m, id) => all(m).find(p => p.id === id);
  const sideOf = (m, id) => m.teams.A.some(p => p.id === id) ? 'A' : 'B';
  const lobbyOn = m => Array.isArray(m.lobbyIn);
  const seenOn = m => Array.isArray(m.gameSeen);
  const inLobby = (m, id) => lobbyOn(m) && m.lobbyIn.includes(id);
  const seen = (m, id) => seenOn(m) && m.gameSeen.includes(id);
  const myCapOf = m => Object.keys(m.captains).find(k => m.captains[k] === S.me.id);
  const nick = p => esc(p?.nick || '?');

  function stepOf(m) {
    if (m.state === 'pick' || m.state === 'ban') return 1;
    if (m.state === 'live') {
      if (M2.over[m.id]) return 4;
      if (lobbyOn(m) && m.me && !inLobby(m, S.me.id)) return 2;
      return 3;
    }
    return 5;
  }

  function stepper6(m, cur) {
    const tot = all(m).length, nIn = lobbyOn(m) ? m.lobbyIn.length : 0;
    const subs = [`${tot} / ${tot}`, m.map ? mapName(m.map) : m.state === 'pick' ? t('m2_sPick') : tt('m2_mapsLeft', { n: m.mapsLeft?.length ?? '' }),
      lobbyOn(m) && m.state === 'live' ? tt('m2_inLobbyN', { a: nIn, b: tot }) : tt('m2_hostIs', { n: nick(m.host) }), t('m2_rounds'), t('m2_captain'), t('m2_eloKf')];
    return `<div class="stepper m2-steps">${subs.map((s, i) => { const st = i < cur ? 'done' : i === cur ? 'cur' : '';
      return `<div class="${st}"><i>${i < cur ? '✓' : i + 1}</i><span class="m2-st"><b>${t('m2_s' + (i + 1))}</b><small>${s}</small></span></div>`; }).join('')}</div>`;
  }

  function nowBanner(m, cur) {
    const myCap = myCapOf(m), myTurn = m.turn && myCap === m.turn, iHost = m.host.id === S.me.id;
    const tot = all(m).length, nIn = lobbyOn(m) ? m.lobbyIn.length : 0, missing = lobbyOn(m) ? all(m).filter(p => !m.lobbyIn.includes(p.id)) : [];
    const capT = s => byId(m, m.captains[s]);
    const hostSide = sideOf(m, m.host.id);
    let h = '', sub = '', timer = '', tone = '';
    if (m.state === 'pick' || m.state === 'ban') {
      const k = m.mapsLeft?.length || 0, other = { n: `${nick(capT(m.turn))} (${TEAM[m.turn]})`, t: TEAM[m.turn], k };
      if (m.state === 'pick') { h = myTurn ? t('m2_nowPickMine') : tt('m2_nowPickOther', other); sub = myTurn ? t('m2_nowPickSub') : tt('m2_nowPickSubOther', other); }
      else { h = myTurn ? t('m2_nowBanMine') : tt('m2_nowBanOther', other); sub = myTurn ? tt('m2_nowBanSub', { k }) : tt('m2_nowBanSubOther', other); }
      tone = myTurn ? 'mine' : 'other ' + (m.turn === 'A' ? 'ta' : 'tb');
      timer = `<b data-m2cd="${m.deadline}">--:--</b><small>${t('m2_tTurn')}</small>`;
    } else if (m.state === 'live') {
      const v = { h: nick(m.host), t: TEAM[hostSide], k: missing.length, a: nIn, b: tot, m: mapName(m.map), c: nick(capT(m.me || 'A')) };
      if (cur === 2) {
        if (iHost) { h = t('m2_nowHost'); sub = tt('m2_nowHostSub', v); }
        else { h = t('m2_nowJoin'); sub = tt(missing.length > 1 ? 'm2_nowJoinSub' : 'm2_nowJoinSubAll', { ...v, k: missing.length - 1 }); }
        timer = `<b data-m2cd="${(m.liveAt || Date.now()) + 10 * 60e3}" data-late="${t('m2_tLate')}">--:--</b><small>${t('m2_tLobby')}</small>`; tone = 'mine';
      } else if (cur === 3) {
        if (iHost && lobbyOn(m) && missing.length) { h = tt('m2_nowWait', { k: missing.length }); sub = tt('m2_nowWaitSub', { n: missing.map(p => `<b>${nick(p)}</b>`).join(', ') }); }
        else { h = tt('m2_nowPlay', v); sub = tt(myCap ? 'm2_nowPlaySubMe' : 'm2_nowPlaySub', v); }
        if (!lobbyOn(m)) sub = sub.replace(/^[^.]*\.\s*/, '');
        timer = `<b data-m2up="${m.liveAt || Date.now()}">0:00</b><small>${t('m2_tPlaying')}</small>`; tone = 'mine';
      } else {
        if (myCap) { h = t('m2_nowShot'); sub = t('m2_nowShotSub'); tone = 'mine'; }
        else { h = tt('m2_nowShotOther', { n: nick(capT(m.me || 'A')) }); sub = t('m2_nowShotOtherSub'); tone = 'other'; }
        timer = `<b data-m2up="${m.liveAt || Date.now()}">0:00</b><small>${t('m2_tPlaying')}</small>`;
      }
    } else if (m.state === 'disputed') { h = t('m2_nowDisp'); sub = t('m2_nowDispSub'); tone = 'warn'; }
    else { h = t('m2_nowSent'); sub = t('m2_nowSentSub'); if (m.disputeUntil > Date.now()) timer = `<b data-m2cd="${m.disputeUntil}">--:--</b><small>${t('m2_tDispute')}</small>`; }
    const live = m.state === 'live' && m.map;
    return `<div class="m2-now ${tone} ${live ? 'bigmap' : ''}" ${live ? `style="--m2-map:url(${mapImg(m.map)})"` : ''}>
      ${live ? `<span class="m2-map">${mapName(m.map)}</span>` : ''}
      <div class="m2-now-tx"><div class="m2-lbl">${t('m2_now')} · ${t('match', { n: m.id })} · ${m.mode.replace('v', '×')}</div><h2>${h}</h2><div class="m2-sub">${sub}</div></div>
      ${timer ? `<div class="m2-timer">${timer}</div>` : ''}</div>`;
  }

  const li = (n, ok, title, sub, extra = '') => `<div class="m2-li ${ok ? 'ok' : ''}"><i>${ok ? '✓' : n}</i><div class="tx"><b>${title}</b>${sub ? `<small>${sub}</small>` : ''}</div>${extra}</div>`;
  const RULES = m => [['rMode', 'Search & Destroy'], ['rServer', t('europe')], ['rZip', t('off')], ['rMarker', t(m?.mode === '5v5' ? 'off' : 'on')], ['rBots', t('off')], ['rPara', t('off')]];

  function minorRow(m) {
    if (!m.me || m.state !== 'live') return '';
    const n = m.drawVotes?.length || 0, mine = m.drawVotes?.includes(S.me.id);
    return `<div class="m2-minor"><span>${t('m2_trouble')} <a href="#" data-m2="chat">${t('m2_writeChat')}</a></span><span class="grow"></span>
      ${inLobby(m, S.me.id) ? `<a href="#" data-m2="unlobby">${t('m2_leaveLobby')}</a>` : ''}
      <a href="#" data-act="dispute">${t('m2_problem')}</a>
      <a href="#" data-act="draw" data-on="${mine ? 0 : 1}" class="${mine ? 'on' : ''}">${tt(mine ? 'm2_drawOff' : 'm2_draw', { n, need: m.drawNeed })}</a></div>`;
  }

  function lobbyBar(m) {
    if (!lobbyOn(m)) return '';
    const tot = all(m).length, n = m.lobbyIn.length;
    return `<div class="m2-prog"><span>${t('m2_inLobby')}</span><div class="m2-bar"><i style="width:${Math.round(100 * n / tot)}%"></i></div><b class="num">${n} / ${tot}</b></div>`;
  }

  function todoCard(m, cur) {
    const myCap = myCapOf(m), myTurn = m.turn && myCap === m.turn, iHost = m.host.id === S.me.id;
    const missing = lobbyOn(m) ? all(m).filter(p => !m.lobbyIn.includes(p.id)) : [];
    const launch = (n) => li(n, seen(m, S.me.id), t('m2_launch'), seenOn(m) ? (seen(m, S.me.id) ? t('m2_launchSeen') : t('m2_launchAuto')) : t('m2_launchPlain'));
    const idbox = `<div class="m2-idbox"><code class="gid">${esc(m.host.gameId)}</code><button class="btn sm" data-act="copy" data-text="${esc(m.host.gameId)}">${t('copyId')}</button></div>`;
    if (m.state === 'pick') {
      return `<div class="card m2-todo"><div class="m2-todo-h"><h4>${t('stepPick')}</h4><span class="grow"></span><span class="timer" data-deadline="${m.deadline}"></span></div>
        ${m.pool.map(p => { const can = !m.canPick || m.canPick.includes(p.id); return `<div class="${can ? '' : 'nopick'}">${playerRow(p, null, { pick: myTurn && can, groups: m.groups })}</div>`; }).join('')}</div>`;
    }
    if (m.state === 'ban') {
      const banned = Object.fromEntries(m.bans.map(b => [b.map, b.by]));
      return `<div class="card m2-todo"><div class="m2-todo-h"><h4>${t('mapVeto')} · ${tt('m2_mapsLeft', { n: m.mapsLeft.length })}</h4><span class="grow"></span>
        <span class="mute" style="font-size:12px">${myTurn ? t('m2_nowBanMine') : tt('m2_nowBanOther', { n: `${nick(byId(m, m.captains[m.turn]))} (${TEAM[m.turn]})` })}</span></div>
        <div class="maps ${myTurn ? 'm2-myturn' : ''}">${matchMaps(m).map(x => banned[x]
          ? `<div class="map banned" data-banned="${t('bannedMap')}" style="background-image:url(${mapImg(x)})"><span>${mapName(x)}</span><em class="by tag m2-t${banned[x]}">${TEAM[banned[x]]}</em></div>`
          : `<div class="map ${myTurn ? 'can' : ''}" style="background-image:url(${mapImg(x)})" ${myTurn ? `data-act="ban" data-map="${x}"` : ''}><span>${mapName(x)}</span></div>`).join('')}</div></div>`;
    }
    if (m.state !== 'live') return '';
    let items = '', cta = '', head = '';
    if (cur === 2) {
      head = `<h4>${tt('m2_todo', { n: 3 })}</h4><span class="grow"></span><span class="mute" style="font-size:12px">${t('m2_noCode')}</span>`;
      items = iHost
        ? launch(1) + li(2, false, t('m2_mkLobby'), '', `<div class="m2-rules">${RULES(m).map(([k, v]) => `<span>${t(k)}: <b class="${v === t('off') ? 'lose' : ''}">${v}</b></span>`).join('')}</div>`)
          + li(3, !missing.filter(p => p.id !== S.me.id).length, t('m2_inviteAll'), missing.filter(p => p.id !== S.me.id).length ? tt('m2_waitFor', { n: missing.filter(p => p.id !== S.me.id).map(nick).join(', ') }) : t('m2_allIn'))
        : launch(1) + li(2, false, t('m2_addHost'), t('m2_addHostSub'), idbox) + li(3, false, t('m2_acceptInv'), t('m2_acceptInvSub'));
      cta = `<button class="btn big m2-cta" data-m2="lobby">${t('m2_btnLobby')}</button>`;
    } else if (cur === 3) {
      head = `<h4>${tt('m2_todo', { n: 3 })}</h4><span class="grow"></span>${iHost ? '' : `<span class="mute m2-hostid">${t('lobbyHost')}: <b>${nick(m.host)}</b> <code class="gid">${esc(m.host.gameId)}</code><button class="btn ghost xs" data-act="copy" data-text="${esc(m.host.gameId)}">${t('copyId')}</button></span>`}`;
      items = (lobbyOn(m) ? li(1, !missing.length, t('m2_pl1'), missing.length ? tt('m2_waitFor', { n: missing.map(nick).join(', ') }) : '') : launch(1))
        + li(2, false, t('m2_pl2'), tt('m2_pl2s', { m: mapName(m.map) }), iHost ? `<div class="m2-rules">${RULES(m).map(([k, v]) => `<span>${t(k)}: <b class="${v === t('off') ? 'lose' : ''}">${v}</b></span>`).join('')}</div>` : '')
        + li(3, false, t('m2_pl3'), t('m2_pl3s'));
      cta = m.me ? `<button class="btn big m2-cta" data-m2="over">${myCap ? t('m2_btnOverCap') : t('m2_btnOver')}</button>` : '';
    } else if (cur === 4) {
      head = `<h4>${tt('m2_todo', { n: 3 })}</h4>`;
      items = li(1, false, t('m2_sh1'), '') + li(2, false, t('m2_sh2'), '') + li(3, false, t('m2_sh3'), t('m2_sh3s'));
      cta = myCap ? `<button class="btn big m2-cta" data-act="result">${t('m2_btnShot')}</button>`
        : `<div class="m2-waitcap"><div class="pulse"></div><b>${tt('m2_waitCap', { n: nick(byId(m, m.captains[m.me || 'A'])) })}</b></div>`;
      cta += `<a href="#" class="m2-backlink" data-m2="back">${t('m2_back')}</a>`;
    }
    return `<div class="card m2-todo"><div class="m2-todo-h">${head}</div>${items}${cur === 2 || cur === 3 ? lobbyBar(m) : ''}<div class="m2-ctarow">${cta}</div>${minorRow(m)}</div>`;
  }

  function nextCard(m, cur) {
    if (cur >= 5) return '';
    const cap = nick(byId(m, m.captains[m.me || 'A']));
    const n = cur + 1, desc = { 2: tt('m2_next3', { h: nick(m.host) }), 3: tt('m2_next4', { m: m.map ? mapName(m.map) : '?', c: cap }), 4: t('m2_next5'), 5: t('m2_next6') }[n] || '';
    return `<div class="card m2-next"><h4>${t('m2_next')}</h4><b>${tt('m2_step', { n: n + 1, s: t('m2_s' + (n + 1)) })}</b><span class="mute">${desc}</span></div>`;
  }

  function mark(m, p) {
    if (m.state !== 'live') return '';
    let h = '';
    if (seen(m, p.id)) h += `<span class="m2-seen" title="${t('m2_seen')}">${PAD}</span>`;
    if (lobbyOn(m)) h += inLobby(m, p.id) ? `<span class="m2-ok" title="${t('m2_lobbyOk')}">${CHECK}</span>` : `<small class="m2-wait">${t('m2_notLobby')}</small>`;
    return h ? `<span class="m2-marks">${h}</span>` : '';
  }
  function teamCol6(m, side) {
    const size = { '5v5': 5, '2v2': 2, '1v1': 1 }[m.mode] || 1, ps = m.teams[side];
    const turn = m.turn === side && ['pick', 'ban'].includes(m.state);
    const f = m.forecast, avg = Math.round(ps.reduce((s, p) => s + p.elo, 0) / (ps.length || 1));
    const rows = ps.map(p => {
      let h = playerRow(p, m);
      h = h.replace('<div class="pl ', `<div title="${esc(p.nick)}" class="pl `);
      if (m.me === side && p.id === S.me.id) h = h.replace('<div class="sub">', `<div class="sub"><span class="tag m2-youtag">${t('m2_you')}</span> `);
      const k = h.lastIndexOf('</div>');
      return h.slice(0, k) + mark(m, p) + h.slice(k);
    }).join('');
    return `<div class="card team ${side} m2-team ${turn ? 'turn' : ''}">
      <div class="card-h"><h3 class="${side === 'A' ? 'alfa' : 'bravo'}">${TEAM[side]}</h3><span class="mute m2-avg">${f ? tt('m2_avgChance', { e: avg, p: side === 'A' ? f.pA : 100 - f.pA }) : tt('m2_avg', { e: avg })}</span></div>
      ${rows}${Array.from({ length: Math.max(0, size - ps.length) }, () => '<div class="pl empty"></div>').join('')}</div>`;
  }

  function voiceCard(m) {
    if (!m.me || m.test || m.mode === '1v1') return '';
    return `<div class="card voice-card ${m.me}"><svg viewBox="0 0 24 24"><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>
      <div class="grow"><b>${t('teamVoice', { n: TEAM[m.me] })}</b><div class="mute" style="font-size:12.5px">${m.voice ? t('voiceHint') : t('voiceCreating')}</div></div>
      ${m.voice ? `<button class="btn" data-voice="${esc(m.voice)}">${t('joinVoice')}</button>` : '<div class="pulse"></div>'}</div>`;
  }

  window.renderMatch = function renderMatch(m) {
    const cur = stepOf(m), myCap = myCapOf(m);
    const center = `${todoCard(m, cur)}${cur === 5 ? resultBlock(m, myCap) : ''}${m.state === 'live' ? voiceCard(m) : ''}${nextCard(m, cur)}`;
    render(`<div class="m2">${stepper6(m, cur)}${nowBanner(m, cur)}${matchBar(m)}
      <div class="room m2-room">${teamCol6(m, 'A')}<div class="center-col">${center}</div>${teamCol6(m, 'B')}</div>
      <div class="m2-chat">${chatBlock(m)}</div></div>`);
    bindPlay();
    bindM2(m);
    tick(); m2Tick();
  };

  function bindM2(m) {
    document.querySelectorAll('#view [data-m2]').forEach(b => b.onclick = e => {
      e.preventDefault(); e.stopPropagation();
      const a = b.dataset.m2;
      if (a === 'lobby' || a === 'unlobby') {
        if (!lobbyOn(m)) { M2.over[m.id] = false; return refresh(); }
        b.disabled = true;
        run(async () => { try { await api('/api/match/lobby', { on: a === 'lobby' }); if (typeof sfx === 'function') sfx('ok'); } finally { b.disabled = false; } })();
      } else if (a === 'over') { M2.over[m.id] = true; refresh(); }
      else if (a === 'back') { M2.over[m.id] = false; refresh(); }
      else if (a === 'chat') { const i = $('#chat-in'); i?.focus(); i?.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
    });
    document.querySelectorAll('#view .m2-minor a[data-act]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
  }

  const mmss = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  function m2Tick() {
    document.querySelectorAll('[data-m2cd]').forEach(el => {
      const s = Math.round((+el.dataset.m2cd - Date.now()) / 1000);
      if (s >= 0) { el.textContent = mmss(s); el.classList.remove('late'); }
      else if (el.dataset.late) { el.textContent = '+' + mmss(-s); el.classList.add('late'); const c = el.nextElementSibling; if (c && c.textContent !== el.dataset.late) c.textContent = el.dataset.late; }
      else el.textContent = '0:00';
    });
    document.querySelectorAll('[data-m2up]').forEach(el => { el.textContent = mmss(Math.max(0, Math.floor((Date.now() - +el.dataset.m2up) / 1000))); });
  }
  setInterval(m2Tick, 500);

  document.addEventListener('paste', e => {
    const m = S.live?.match;
    if (!m || S.page !== 'play' || m.state !== 'live' || stepOf(m) !== 4 || !myCapOf(m) || $('#modal').dataset.kind || e.target.matches?.('input, textarea')) return;
    const f = [...(e.clipboardData?.files || [])].find(f => f.type.startsWith('image/'));
    if (f) { e.preventDefault(); window.openResultForm(f); }
  });

  const imgDims = src => new Promise(res => { const i = new Image(); i.onload = () => res({ w: i.naturalWidth, h: i.naturalHeight, img: i }); i.onerror = () => res(null); i.src = src; });

  window.openResultForm = function openResultForm(initial) {
    const m = S.live.match;
    const players = ['A', 'B'].flatMap(side => m.teams[side].map(p => ({ id: p.id, nick: p.nick, side })));
    const P = Object.fromEntries(players.map(p => [p.id, p]));
    let shot = null, sending = false, R = null;
    const wiz = n => `<div class="m2-wiz">${[t('m2_w1'), t('m2_w2'), t('m2_w3')].map((s, i) => `${i ? `<div class="wl ${i <= n ? 'done' : ''}"></div>` : ''}<div class="ws ${i < n ? 'done' : i === n ? 'cur' : ''}"><i>${i < n ? '✓' : i + 1}</i>${s}</div>`).join('')}</div>`;
    const head = n => `<div class="m2-rfhead"><div><h4>${t('match', { n: m.id })} · ${m.mode.replace('v', '×')}${m.map ? ' · ' + mapName(m.map) : ''}</h4><h2>${t('m2_rfTitle')}</h2></div><span class="grow"></span>${wiz(n)}<button class="iconbtn m2-x" data-close title="✕">✕</button></div>`;
    const srcBtns = (first) => `<div class="row shot-src"><button class="btn ghost sm" id="rf-paste">${first ? t('pasteShot') : t('m2_replace')}</button>${K.latestShot ? `<button class="btn ghost sm" id="rf-steam">${t('steamShot')}</button>` : ''}<button class="btn ghost sm" id="rf-pick">${t('pickFile')}</button></div>`;
    const phase1 = () => `${head(0)}<div id="rf-body" class="m2-rf1">
      <p class="mute" style="margin:0">${t('shotOnlyHint')}</p>
      <div class="drop big" id="rf-drop">${t('dropHint')}</div>
      ${srcBtns(true)}
      <p class="mute shot-how">${t('shotHow')}</p>
      <div id="rf-auto"></div><div class="err" id="rf-err"></div></div>`;
    modal(`<div class="card accent result-form m2-rf col">${phase1()}<input type="file" id="rf-file" accept="image/*,.jfif,.webp,.bmp" hidden></div>`, box => {
      const card = box.querySelector('.m2-rf');
      const setHead = n => { card.querySelector('.m2-rfhead').outerHTML = head(n); card.querySelectorAll('[data-close]').forEach(b => b.onclick = closeModal); };
      const fail = msg => { const e = $('#rf-err'); if (e) e.textContent = msg; else toast(msg, true); };

      const setShot = async f => {
        if (sending) return;
        try {
          shot = await fileToJpeg(f);
          if (R) { card.innerHTML = phase1() + '<input type="file" id="rf-file" accept="image/*,.jfif,.webp,.bmp" hidden>'; R = null; bindSrc(); }
          $('#rf-drop').innerHTML = `<img src="${shot}"><div class="scan">${t('recognizing')}</div>`;
          fail('');
          const dim = await imgDims(shot);
          const pass = async bin => {
            const prep = await ocrPrep(shot, bin);
            const ocr = await K.ocr(prep);
            const lay = OcrParse.layout(ocr, players, m.me);
            if (lay && lay.rows.length) {
              const flat = await K.ocrDigits(prep, lay.rows.flatMap(x => x.rects));
              const n = lay.cols.length;
              return { board: true, lay, r: OcrParse.finish(lay, lay.rows.map((_, i) => flat.slice(i * n, i * n + n)), players, m.me, ocr.text) };
            }
            return { board: !!lay || /battle\s*results|scoreboard|результати\s*матчу|результаты\s*матча|search\s*(and|&)\s*destroy|\b(alfa|alpha|bravo)\b|альфа|браво/i.test(ocr.text), lay, r: OcrParse.parse(ocr, players, m.me) };
          };
          let best = await pass(false);
          if (!OcrParse.complete(best.r)) {
            const b = await pass(true);
            if (OcrParse.quality(b.r) > OcrParse.quality(best.r) || (b.board && !best.board)) best = b;
          }
          if (!OcrParse.complete(best.r)) {
            const b = await pass('adaptive');
            if (OcrParse.quality(b.r) > OcrParse.quality(best.r) || (b.board && !best.board)) best = b;
          }
          if (!best.board) toast(t('notScoreboardSoft'), true);
          R = buildCheck(best, dim);
          showCheck();
        } catch (e) {
          if (!shot) return fail(e.message);
          const dim = await imgDims(shot).catch(() => null);
          R = buildCheck({ r: { stats: {}, score: '', found: 0, total: players.length, winner: null }, lay: null }, dim);
          showCheck(); fail(e.message);
        }
      };

      function buildCheck(best, dim) {
        const r = best.r, lay = best.lay && best.lay.rows ? best.lay : null;
        const sc = dim && dim.w < 1700 ? 1.5 : 1;
        const rows = [];
        if (lay) {
          lay.rows.forEach(x => { const s = r.stats[x.id] || {}; rows.push({ game: x.game || '', box: x.box, section: x.section, k: s.k ?? 0, d: s.d ?? 0, nums: s.nums || [], ok: !!s.ok, conf: x.conf, digits: true, orig: x.id }); });
          (lay.extra || []).forEach(x => rows.push({ game: x.game || '', box: x.box, section: x.section, k: 0, d: 0, nums: [], ok: false, conf: 0, digits: false, orig: null }));
        } else {
          Object.entries(r.stats || {}).forEach(([id, s]) => rows.push({ game: '', box: null, section: null, k: s.k ?? 0, d: s.d ?? 0, nums: s.nums || [], ok: !!s.ok, conf: s.conf ?? 0.7, digits: true, orig: id }));
        }
        const map = {}, val = {};
        for (const p of players) { const i = rows.findIndex(x => x.orig === p.id); map[p.id] = i < 0 ? null : i; val[p.id] = i < 0 ? { k: 0, d: 0 } : { k: rows[i].k, d: rows[i].d }; }
        return { r, lay, rows, map, val, manual: {}, remap: {}, edit: false, winner: r.winner || null, score: r.score || '', sc, dim, auto: { found: r.found, total: r.total, winner: r.winner, checked: r.checked ?? null } };
      }

      const kdOf = row => row && row.nums && row.nums.length >= 4 && row.nums[3] != null ? row.nums[3] : null;
      const fits = (k, d, kd) => kd != null && Math.abs(k / Math.max(d, 1) - kd) < 0.06;
      const exact = (k, d, kd) => kd != null && Math.abs(k / Math.max(d, 1) - kd) < 0.0055;
      function pState(id) {
        const i = R.map[id], row = i == null ? null : R.rows[i], v = R.val[id], kd = kdOf(row);
        const how = row == null ? 'none' : R.remap[id] ? 'manual' : row.conf >= 0.85 ? 'nick' : row.conf >= 0.68 ? 'like' : 'excl';
        const kdOk = kd == null ? null : exact(v.k, v.d, kd);
        const digitsQ = !R.manual[id] && (row == null || !row.digits || (kd == null ? !row.ok : !kdOk));
        return { i, row, v, kd, kdOk, how, digitsQ, warn: how === 'none' || how === 'excl' || how === 'like' ? !R.remap[id] : false };
      }
      function recomputeWinner() {
        const secs = R.lay?.sections || [];
        if (secs.length < 2 || secs[0].rounds === secs[1].rounds) return;
        const win = secs[0].rounds > secs[1].rounds ? secs[0] : secs[1];
        const cnt = side => players.filter(p => p.side === side && R.map[p.id] != null && R.rows[R.map[p.id]].section === win.name).length;
        if (cnt('A') !== cnt('B')) R.winner = cnt('A') > cnt('B') ? 'A' : 'B';
      }
      function suggest(st) {
        const { v, kd } = st; if (kd == null || kd <= 0) return null;
        const c = [];
        for (let k = Math.max(0, v.k - 4); k <= v.k + 4; k++) for (let d = Math.max(0, v.d - 4); d <= v.d + 4; d++) {
          if ((k === v.k && d === v.d) || !exact(k, d, kd)) continue;
          c.push({ k, d, cost: (k !== v.k) + (d !== v.d) + (Math.abs(k - v.k) + Math.abs(d - v.d)) / 10 });
        }
        c.sort((a, b) => a.cost - b.cost);
        if (!c.length) return null;
        const b = c[0], f = b.k === v.k ? 'd' : b.d === v.d ? 'k' : 'kd';
        return { f, k: b.k, d: b.d, v: f === 'k' ? b.k : f === 'd' ? b.d : `${b.k}/${b.d}`, more: c.slice(1, 3) };
      }

      function showCheck() {
        const body = $('#rf-body');
        setHead(1);
        body.className = 'm2-rf2';
        body.innerHTML = `<div class="m2-rfl">
            <div class="m2-box"><div class="m2-box-h"><h4>${t('m2_yourShot')}</h4><span class="grow"></span><span class="mute">${R.dim ? `${R.dim.w}×${R.dim.h}` : ''}</span></div>
              <div class="m2-shot" id="rf-drop"><img src="${shot}">${boxesHtml()}</div>
              <div class="m2-legend"><span><i class="ok"></i>${t('m2_legOk')}</span><span><i class="warn"></i>${t('m2_legWarn')}</span></div>
              ${srcBtns(false)}</div>
            <div class="m2-box" id="rf-zoom"></div>
          </div>
          <div class="m2-rfr m2-box" id="rf-check"></div>`;
        bindSrc();
        drawCheck(); drawZoom();
      }

      function boxesHtml() {
        if (!R.dim) return '';
        const W = R.dim.w * R.sc, H = R.dim.h * R.sc, cb = R.lay?.colBox;
        const pct = (b, x0, x1) => `left:${(x0 / W * 100).toFixed(2)}%;top:${((b.y0 - 3) / H * 100).toFixed(2)}%;width:${((x1 - x0) / W * 100).toFixed(2)}%;height:${((b.y1 - b.y0 + 6) / H * 100).toFixed(2)}%`;
        const owner = i => players.find(p => R.map[p.id] === i);
        return R.rows.map((row, i) => {
          if (!row.box) return '';
          const p = owner(i), st = p ? pState(p.id) : null;
          const nickWarn = !p || st.warn, digWarn = !p || st.digitsQ;
          const nx1 = cb ? Math.max(row.box.x0 + 20, cb.x0 - 8) : row.box.x1;
          const lbl = !p ? t('m2_nickMissing') : '';
          return `<div class="m2-bx ${nickWarn ? 'w' : ''}" style="${pct(row.box, row.box.x0 - 4, nx1)}">${lbl ? `<span>${lbl}</span>` : ''}</div>`
            + (cb && row.digits ? `<div class="m2-bx ${digWarn ? 'w' : ''}" style="${pct(row.box, cb.x0, cb.x1)}"></div>` : '');
        }).join('');
      }

      async function drawZoom() {
        const el = $('#rf-zoom'); if (!el) return;
        const items = players.map(p => ({ p, st: pState(p.id) })).filter(x => x.st.row?.box && (x.st.warn || x.st.digitsQ));
        const extra = R.rows.map((row, i) => ({ row, i })).filter(x => x.row.box && !players.some(p => R.map[p.id] === x.i));
        if (!items.length && !extra.length) { el.innerHTML = ''; el.hidden = true; return; }
        el.hidden = false;
        const dim = await imgDims(shot); if (!dim || !$('#rf-zoom')) return;
        const crop = b => { const s = 1 / R.sc, x0 = Math.max(0, b.x0 * s - 8), x1 = Math.min(dim.w, (R.lay?.colBox?.x1 || b.x1) * s + 8), y0 = Math.max(0, b.y0 * s - 5), y1 = Math.min(dim.h, b.y1 * s + 5);
          const c = document.createElement('canvas'); c.width = x1 - x0; c.height = y1 - y0; c.getContext('2d').drawImage(dim.img, x0, y0, c.width, c.height, 0, 0, c.width, c.height); return c.toDataURL('image/jpeg', .9); };
        const lab = x => { const st = x.st; if (st.digitsQ && !st.warn) { const s = suggest(st); return s ? (s.f === 'kd' ? `K/D = ${s.v}?` : `${s.f === 'k' ? 'K' : 'D'} = ${s.v}?`) : t('m2_digitsQ'); } return `→ ${nick(x.p)}${st.how === 'like' ? '?' : ''}`; };
        el.innerHTML = `<div class="m2-box-h"><h4>${t('m2_zoom')}</h4><span class="grow"></span><span class="mute">Score · K · D · K/D</span></div>
          ${items.map(x => `<div class="m2-zm"><img src="${crop(x.st.row.box)}"><b>${lab(x)}</b></div>`).join('')}
          ${extra.map(x => `<div class="m2-zm"><img src="${crop(x.row.box)}"><b>${t('m2_nickMissing')}</b></div>`).join('')}`;
      }

      function drawCheck() {
        const el = $('#rf-check'); if (!el) return;
        const sts = Object.fromEntries(players.map(p => [p.id, pState(p.id)]));
        const matched = players.filter(p => ['nick', 'like', 'manual'].includes(sts[p.id].how)).length;
        const toCheck = players.filter(p => sts[p.id].warn || sts[p.id].digitsQ).length;
        const [ws, ls] = (R.score || '').split('-');
        const sA = R.winner ? (R.winner === 'A' ? ws : ls) : '?', sB = R.winner ? (R.winner === 'B' ? ws : ls) : '?';
        const rowOpts = id => `<select class="m2-sel" data-map="${id}"><option value="">${t('m2_optNone')}</option>${R.rows.map((r, i) => `<option value="${i}" ${R.map[id] === i ? 'selected' : ''}>${esc(r.game ? t(r.digits ? 'm2_optRow' : 'm2_optRowNoDigits', { n: r.game.slice(0, 22), k: r.k, d: r.d }) : tt('m2_rowN', { n: i + 1 }) + (r.digits ? ` · ${r.k}/${r.d}` : ''))}</option>`).join('')}</select>`;
        const howTxt = st => ({ nick: `<span class="m2-okc">✓ ${t('m2_mNick')}</span>`, like: `<span class="m2-wn">${t('m2_mLike')}</span>`, excl: `<span class="m2-wn">${t('m2_mExcl')}</span>`, none: `<span class="m2-bad">${t('m2_mNone')}</span>`, manual: `<span class="m2-okc">${t('m2_mManual')}</span>` })[st.how];
        const num = (id, f, st) => {
          const s = st.digitsQ ? suggest(st) : null, q = st.digitsQ && (!s || s.f === f || s.f === 'kd' || st.row == null || !st.row.digits);
          return R.edit || q ? `<input class="m2-num ${q ? 'q' : ''}" type="number" min="0" max="150" data-pid="${id}" data-f="${f}" value="${st.v[f]}">` : `<span class="num">${st.v[f]}</span>`;
        };
        const fixRow = (p, st) => {
          if (!st.digitsQ) return '';
          const s = suggest(st);
          if (s) {
            const pairs = [{ k: s.k, d: s.d }, ...s.more, { k: st.v.k, d: st.v.d, cur: true }];
            const chip = x => s.f === 'kd' ? `${x.k}/${x.d}` : s.f === 'k' ? x.k : x.d;
            const seenC = new Set();
            const chips = pairs.filter(x => (s.f === 'kd' ? true : s.f === 'k' ? x.d === st.v.d : x.k === st.v.k) && !seenC.has(chip(x)) && seenC.add(chip(x)))
              .map(x => `<button class="m2-chip ${x.cur ? 'cur' : ''}" data-fix="${p.id}" data-k="${x.k}" data-d="${x.d}">${chip(x)}</button>`).join('');
            const msg = s.f === 'kd' ? tt('m2_kdPair', { n: nick(p), kd: st.kd.toFixed(2), a: `${st.v.k}/${st.v.d}`, v: s.v }) : tt('m2_kdBad', { f: s.f === 'k' ? t('m2_kills') : t('m2_deaths'), n: nick(p), kd: st.kd.toFixed(2), v: s.v });
            return `<tr class="m2-fix"><td colspan="7"><div class="m2-fixin"><span>${msg}</span><span class="grow"></span>${chips}<button class="m2-chip" data-other="${p.id}" data-f="${s.f === 'd' ? 'd' : 'k'}">${t('m2_other')}</button></div></td></tr>`;
          }
          return `<tr class="m2-fix"><td colspan="7"><div class="m2-fixin"><span>${st.row == null || !st.row.digits ? tt('m2_kdNone', { n: nick(p) }) : tt('m2_kdBadNo', { n: nick(p) })}</span></div></td></tr>`;
        };
        const section = side => `<tr class="m2-sec ${side}"><td colspan="7">${TEAM[side]}${R.winner === side ? ' · ' + t('m2_winnerL') : ''}</td></tr>`
          + players.filter(p => p.side === side).map(p => { const st = sts[p.id], w = st.warn || st.digitsQ, sc = st.row?.nums?.[0];
            const kdc = st.kd != null ? `<span class="${st.kdOk ? '' : 'm2-wn'}">${st.kd.toFixed(2)}</span>` : `<span class="mute">${kd(st.v.k, st.v.d)}</span>`;
            return `<tr class="${w ? 'w' : ''}"><td class="nk">${nick(p)}${st.row?.game ? `<small>${tt('m2_inGame', { n: esc(st.row.game.slice(0, 26)) })}</small>` : ''}</td>
              <td>${howTxt(st)}${R.edit || st.warn || st.how === 'none' || st.how === 'manual' ? rowOpts(p.id) : ''}</td>
              <td class="r num">${sc ?? '—'}</td><td class="r">${num(p.id, 'k', st)}</td><td class="r">${num(p.id, 'd', st)}</td><td class="r num">${kdc}</td>
              <td class="r">${st.kdOk === true || st.v.k + st.v.d === 0 && !w ? `<span class="m2-okc">✓</span>` : w ? '<span class="m2-wn">!</span>' : ''}</td></tr>${fixRow(p, st)}`; }).join('');
        el.innerHTML = `<div class="m2-box-h"><h4>${t('m2_read')}</h4><span class="grow"></span><span class="m2-pill">${tt('m2_nicksOk', { a: matched, b: players.length })}</span>${toCheck ? `<span class="m2-pill w">${tt('m2_toCheck', { n: toCheck })}</span>` : `<span class="m2-pill">${t('m2_allOk')}</span>`}</div>
          <div class="m2-score">
            <button class="m2-tm A ${R.winner === 'A' ? 'won' : ''}" data-win="A"><b>${TEAM.A}</b><small>${m.me === 'A' ? t('m2_yourTeam') : ''}${R.winner === 'A' ? (m.me === 'A' ? ' · ' : '') + t('m2_winnerL') : ''}</small></button>
            <div class="m2-big"><span class="alfa">${sA ?? '?'}</span><i>:</i><span class="bravo">${sB ?? '?'}</span></div>
            <button class="m2-tm B ${R.winner === 'B' ? 'won' : ''}" data-win="B"><b>${TEAM.B}</b><small>${m.me === 'B' ? t('m2_yourTeam') : ''}${R.winner === 'B' ? (m.me === 'B' ? ' · ' : '') + t('m2_winnerL') : ''}</small></button>
          </div>
          ${R.winner ? '' : `<p class="m2-wn" style="text-align:center;margin:8px 0 0">${t('m2_pickWinner')}</p>`}
          ${R.rows.length ? '' : `<p class="m2-wn">${t('m2_noRows')}</p>`}
          <table class="m2-tbl"><thead><tr><th>${t('m2_colPlayer')}</th><th>${t('m2_colMap')}</th><th class="r">${t('m2_colScore')}</th><th class="r">K</th><th class="r">D</th><th class="r">K/D</th><th></th></tr></thead>
            <tbody>${section('A')}${section('B')}</tbody></table>
          <div class="m2-act"><button class="btn big m2-cta" id="rf-confirm" ${R.winner ? '' : 'disabled'}>${t('m2_confirm')}</button><button class="btn ghost" id="rf-edit">${R.edit ? t('m2_doneManual') : t('m2_fixManual')}</button></div>
          <p class="mute m2-after">${t('m2_after')}</p><div class="err" id="rf-err"></div>`;
        bindCheck();
      }
      const redraw = () => { drawCheck(); const s = card.querySelector('.m2-shot'); if (s) { s.querySelectorAll('.m2-bx').forEach(b => b.remove()); s.insertAdjacentHTML('beforeend', boxesHtml()); } drawZoom(); };

      function bindCheck() {
        const el = $('#rf-check');
        el.querySelectorAll('[data-win]').forEach(b => b.onclick = () => { R.winner = b.dataset.win; drawCheck(); });
        el.querySelectorAll('[data-map]').forEach(s => s.onchange = () => {
          const id = s.dataset.map, i = s.value === '' ? null : +s.value;
          const prev = players.find(p => p.id !== id && R.map[p.id] === i && i != null);
          if (prev) { R.map[prev.id] = R.map[id]; R.remap[prev.id] = true; const pr = R.map[prev.id] == null ? null : R.rows[R.map[prev.id]]; R.val[prev.id] = pr ? { k: pr.k, d: pr.d } : { k: 0, d: 0 }; }
          R.map[id] = i; R.remap[id] = true; R.val[id] = i == null ? { k: 0, d: 0 } : { k: R.rows[i].k, d: R.rows[i].d };
          delete R.manual[id];
          recomputeWinner(); redraw();
        });
        el.querySelectorAll('input[data-pid]').forEach(inp => {
          inp.oninput = () => { const v = Math.max(0, Math.min(150, parseInt(inp.value, 10) || 0)); R.val[inp.dataset.pid][inp.dataset.f] = v; };
          inp.onchange = () => { R.manual[inp.dataset.pid] = true; redraw(); };
        });
        el.querySelectorAll('[data-fix]').forEach(b => b.onclick = () => { R.val[b.dataset.fix] = { k: +b.dataset.k, d: +b.dataset.d }; R.manual[b.dataset.fix] = true; redraw(); });
        el.querySelectorAll('[data-other]').forEach(b => b.onclick = () => { R.edit = true; drawCheck(); el.querySelector(`input[data-pid="${CSS.escape(b.dataset.other)}"][data-f="${b.dataset.f}"]`)?.focus(); });
        $('#rf-edit').onclick = () => { R.edit = !R.edit; drawCheck(); };
        $('#rf-confirm').onclick = send;
      }

      async function send() {
        if (sending || !R?.winner) return;
        sending = true;
        const btn = $('#rf-confirm'); if (btn) { btn.disabled = true; btn.textContent = t('m2_sendingT'); }
        setHead(2);
        const stats = Object.fromEntries(players.map(p => [p.id, { k: R.val[p.id].k | 0, d: R.val[p.id].d | 0 }]));
        const edited = Object.keys(R.manual).length, remapped = Object.keys(R.remap).length;
        try {
          await api('/api/match/result', { winner: R.winner, score: R.score, stats, shot, auto: { ...R.auto, ...(edited ? { edited } : {}), ...(remapped ? { remapped } : {}), ...(R.winner !== R.auto.winner ? { winnerSet: true } : {}) } });
          closeModal();
        } catch (e) {
          sending = false; setHead(1);
          if (btn) { btn.disabled = false; btn.textContent = t('m2_confirm'); }
          fail(e.message);
        }
      }

      const fromUrl = async url => {
        try { const r = await fetch(url); const b = r.ok ? await r.blob() : null; if (!b || !b.type.startsWith('image/')) throw 0; setShot(b); }
        catch { fail(t('shotUrlFail')); }
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
      function bindSrc() {
        const drop = $('#rf-drop');
        if (drop && !R) drop.onclick = () => $('#rf-file').click();
        $('#rf-pick').onclick = () => $('#rf-file').click();
        $('#rf-file').onchange = e => { e.target.files[0] && setShot(e.target.files[0]); e.target.value = ''; };
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
          setShot(await (await fetch(r.dataUrl)).blob());
          const min = Math.round((Date.now() - r.mtime) / 60000);
          if (min > 30) toast(t('steamOld', { n: min < 120 ? min + ' ' + t('minShort') : Math.round(min / 60) + ' ' + t('hShort') }), true);
        };
        card.querySelectorAll('[data-close]').forEach(b => b.onclick = closeModal);
      }
      bindSrc();
      const onPaste = e => {
        if (!$('#rf-drop') || S.rfPaste !== onPaste) return document.removeEventListener('paste', onPaste);
        if (e.target.matches?.('input, textarea, select')) return;
        e.preventDefault();
        if (!fromData(e.clipboardData)) fail(t('clipEmpty'));
      };
      if (S.rfPaste) document.removeEventListener('paste', S.rfPaste);
      S.rfPaste = onPaste;
      document.addEventListener('paste', onPaste);
      box.ondragover = e => e.preventDefault();
      box.ondrop = e => { e.preventDefault(); if (!fromData(e.dataTransfer)) fail(t('notImage')); };
      if (initial instanceof Blob) setShot(initial);
    });
  };
})();

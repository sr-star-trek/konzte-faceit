(() => {
  const L = {
    en: { apBtn: 'Approve', apSure: 'Sure?', apOk: 'approved mod', apDone: 'Approved: this exact file no longer counts as suspicious for anyone', f_approvedMods: 'Approved cosmetic mods (not counted): {v} — {list}', fxTitle: 'Anticheat breakdown', fxFlags: 'Findings', fxNone: 'Nothing unusual in the files and the client', fxFiles: 'Game files', fxRefOk: 'same as the reference ({n} players)', fxRefBad: 'differ from the reference ({n} players have the reference set)', fxNoRef: 'no reference yet (too few players)', fxSame: 'the same set as this player: {n} other players', fxHist: 'File sets over time', fxHistRef: 'reference', fxClient: 'Client', fxScans: 'Checks in the last {n} matches', fxSilent: 'no checks', fxNoGame: 'game not running', fxOk: 'OK', fxPrograms: 'Programs seen', fxModules: 'Rare libraries in the game process', fxExeOk: 'game exe matches other players', fxExeBad: 'game exe differs from other players',
      st_changed: 'changed', st_missing: 'missing', st_extra: 'extra', tool: 'mod tool file',
      cat_weapons: 'weapons', cat_firstPerson: 'first person', cat_models: 'player models', cat_maps: 'maps', cat_ui: 'interface', cat_audio: 'audio', cat_catalog: 'bundle catalog', cat_code: 'game code', cat_other: 'other',
      f_toolFiles: 'Files left by Unity modding tools (AssetStudio / UABEA): {v} — {list}', f_repack: 'Bundles repacked without compression (+30% size or more): {v} — {list}', f_bundles: 'Changed game bundles: {v} ({cats})', f_missingBundles: 'Deleted game bundles: {v}', f_multiVariant: 'The player changed game files several times: {v} different sets', f_sharedVariant: '{v} other players have exactly the same files — possibly a legitimate game version', f_programs: 'Cheat / hack programs seen: {v}', f_exe: 'Game executable differs from other players', f_rareModules: 'Rare libraries in the game process: {v}', f_memAccess: 'A program accessed the game’s memory: {v}', f_overlay: 'Overlay window over the game: {v}', f_driver: 'Cheat-loader driver loaded: {v}', fxDeep: 'Deep check (Konzte 1.0.13+)', fxMem: 'Programs with access to game memory', fxOvl: 'Windows on top of the game', fxNoDeep: 'nothing unusual', fxLegit: 'known legitimate program — not a finding', f_silent: 'App sent no checks in {v} of {of} matches', f_noGame: 'Game was not running in {v} of {of} matches',
      rqDl: 'Download', rqDlHint: 'Opens in the browser; the link works for 10 minutes', rqBtn: 'Request', rqTitle: 'File copies for review', rqHint: 'The player’s app sends the file silently (Konzte 1.0.11+). The anti-cheat team analyses received files.', rq_pending: 'waiting for the player', rq_wait: 'waiting for a report with the game running', rq_uploading: 'uploading {p}%', rq_done: 'received', rq_failed: 'failed', rq_expired: 'deleted (7 days)', rqSent: 'Requested — the file will arrive when the player’s app is online',
      fxAsk: 'What to ask the player: verify game files in Steam (Library → Combat Master → Properties → Installed Files → Verify). A clean player’s files will match the reference in the next match.' },
    uk: { apBtn: 'Схвалити', apSure: 'Точно?', apOk: 'схвалений мод', apDone: 'Схвалено: рівно цей файл більше ні в кого не вважається підозрілим', f_approvedMods: 'Схвалені косметичні моди (не враховуються): {v} — {list}', fxTitle: 'Розбір античиту', fxFlags: 'Знахідки', fxNone: 'У файлах і клієнті нічого незвичного', fxFiles: 'Файли гри', fxRefOk: 'як в еталоні ({n} гравців)', fxRefBad: 'відрізняються від еталона (еталонний набір у {n} гравців)', fxNoRef: 'еталона ще немає (замало гравців)', fxSame: 'такий самий набір, як у цього гравця: ще в {n} гравців', fxHist: 'Набори файлів у часі', fxHistRef: 'еталон', fxClient: 'Клієнт', fxScans: 'Перевірки за останні {n} матчів', fxSilent: 'без перевірок', fxNoGame: 'гра не запущена', fxOk: 'гаразд', fxPrograms: 'Помічені програми', fxModules: 'Рідкісні бібліотеки в процесі гри', fxExeOk: 'exe гри як в інших гравців', fxExeBad: 'exe гри відрізняється від інших гравців',
      st_changed: 'змінено', st_missing: 'видалено', st_extra: 'зайвий', tool: 'файл інструменту модів',
      cat_weapons: 'зброя', cat_firstPerson: 'перша особа', cat_models: 'моделі гравців', cat_maps: 'карти', cat_ui: 'інтерфейс', cat_audio: 'звук', cat_catalog: 'каталог бандлів', cat_code: 'код гри', cat_other: 'інше',
      f_toolFiles: 'Файли інструментів для модів Unity (AssetStudio / UABEA): {v} — {list}', f_repack: 'Бандли перепаковано без стиснення (розмір +30% і більше): {v} — {list}', f_bundles: 'Змінено бандлів гри: {v} ({cats})', f_missingBundles: 'Видалено бандлів гри: {v}', f_multiVariant: 'Гравець змінював файли гри кілька разів: {v} різних наборів', f_sharedVariant: 'Точно такі самі файли ще в {v} гравців — можливо, легітимна версія гри', f_programs: 'Помічено чит / хак-програми: {v}', f_exe: 'Виконуваний файл гри відрізняється від інших гравців', f_rareModules: 'Рідкісні бібліотеки в процесі гри: {v}', f_memAccess: 'Програма мала доступ до пам’яті гри: {v}', f_overlay: 'Вікно-оверлей поверх гри: {v}', f_driver: 'Завантажено драйвер чит-завантажувача: {v}', fxDeep: 'Глибока перевірка (Konzte 1.0.13+)', fxMem: 'Програми з доступом до пам’яті гри', fxOvl: 'Вікна поверх гри', fxNoDeep: 'нічого незвичного', fxLegit: 'відома легітимна програма — не знахідка', f_silent: 'Застосунок не надсилав перевірок у {v} з {of} матчів', f_noGame: 'Гра не була запущена в {v} з {of} матчів',
      rqDl: 'Завантажити', rqDlHint: 'Відкриється в браузері; посилання діє 10 хвилин', rqBtn: 'Запросити', rqTitle: 'Копії файлів на перевірку', rqHint: 'Застосунок гравця надсилає файл тихо (Konzte 1.0.11+). Отримані файли розбирає команда античиту.', rq_pending: 'чекає на гравця', rq_wait: 'чекає на звіт із запущеною грою', rq_uploading: 'надсилається {p}%', rq_done: 'отримано', rq_failed: 'помилка', rq_expired: 'видалено (7 днів)', rqSent: 'Запит надіслано — файл прийде, щойно застосунок гравця буде онлайн',
      fxAsk: 'Що попросити в гравця: перевірити цілісність файлів у Steam (Бібліотека → Combat Master → Властивості → Встановлені файли → Перевірити). У чистого гравця в наступному матчі файли збіжуться з еталоном.' },
    ru: { apBtn: 'Одобрить', apSure: 'Точно?', apOk: 'одобренный мод', apDone: 'Одобрено: ровно этот файл больше ни у кого не считается подозрительным', f_approvedMods: 'Одобренные косметические моды (не учитываются): {v} — {list}', fxTitle: 'Разбор античита', fxFlags: 'Находки', fxNone: 'В файлах и клиенте ничего необычного', fxFiles: 'Файлы игры', fxRefOk: 'как в эталоне ({n} игроков)', fxRefBad: 'отличаются от эталона (эталонный набор у {n} игроков)', fxNoRef: 'эталона пока нет (мало игроков)', fxSame: 'такой же набор, как у этого игрока: ещё у {n} игроков', fxHist: 'Наборы файлов во времени', fxHistRef: 'эталон', fxClient: 'Клиент', fxScans: 'Проверки за последние {n} матчей', fxSilent: 'без проверок', fxNoGame: 'игра не запущена', fxOk: 'норм', fxPrograms: 'Замеченные программы', fxModules: 'Редкие библиотеки в процессе игры', fxExeOk: 'exe игры как у других игроков', fxExeBad: 'exe игры отличается от других игроков',
      st_changed: 'изменён', st_missing: 'удалён', st_extra: 'лишний', tool: 'файл инструмента модов',
      cat_weapons: 'оружие', cat_firstPerson: 'первое лицо', cat_models: 'модели игроков', cat_maps: 'карты', cat_ui: 'интерфейс', cat_audio: 'звук', cat_catalog: 'каталог бандлов', cat_code: 'код игры', cat_other: 'другое',
      f_toolFiles: 'Файлы инструментов для модов Unity (AssetStudio / UABEA): {v} — {list}', f_repack: 'Бандлы перепакованы без сжатия (размер +30% и больше): {v} — {list}', f_bundles: 'Изменено бандлов игры: {v} ({cats})', f_missingBundles: 'Удалено бандлов игры: {v}', f_multiVariant: 'Игрок менял файлы игры несколько раз: {v} разных наборов', f_sharedVariant: 'Точно такие же файлы ещё у {v} игроков — возможно, легитимная версия игры', f_programs: 'Замечены чит / хак-программы: {v}', f_exe: 'Исполняемый файл игры отличается от других игроков', f_rareModules: 'Редкие библиотеки в процессе игры: {v}', f_memAccess: 'Программа имела доступ к памяти игры: {v}', f_overlay: 'Окно-оверлей поверх игры: {v}', f_driver: 'Загружен драйвер чит-загрузчика: {v}', fxDeep: 'Глубокая проверка (Konzte 1.0.13+)', fxMem: 'Программы с доступом к памяти игры', fxOvl: 'Окна поверх игры', fxNoDeep: 'ничего необычного', fxLegit: 'известная легитимная программа — не находка', f_silent: 'Приложение не присылало проверок в {v} из {of} матчей', f_noGame: 'Игра не была запущена в {v} из {of} матчей',
      rqDl: 'Скачать', rqDlHint: 'Откроется в браузере; ссылка действует 10 минут', rqBtn: 'Запросить', rqTitle: 'Копии файлов на проверку', rqHint: 'Приложение игрока отправляет файл тихо (Konzte 1.0.11+). Полученные файлы разбирает команда античита.', rq_pending: 'ждёт игрока', rq_wait: 'ждёт отчёт с запущенной игрой', rq_uploading: 'отправляется {p}%', rq_done: 'получено', rq_failed: 'ошибка', rq_expired: 'удалено (7 дней)', rqSent: 'Запрос отправлен — файл придёт, когда приложение игрока будет онлайн',
      fxAsk: 'Что попросить у игрока: проверить целостность файлов в Steam (Библиотека → Combat Master → Свойства → Установленные файлы → Проверить). У чистого игрока в следующем матче файлы совпадут с эталоном.' },
  };
  Object.assign(L.en, { f_cheatSig: 'Known cheat found in game memory by KONZTE GUARD: {v}', f_imguiMenu: 'An ImGui menu was found inside the game ({v}×) — typical for internal cheats, check the full report', f_cheatModule: 'Known cheat library loaded into the game: {v}', f_tamper: 'Forged or replayed anticheat report: {v} ({list})', f_shell: 'Konzte client files are modified ({v} checks)', f_manualMap: 'Hidden DLL injected into the game (MZ in private memory): {v}', f_unsignedMod: 'Unsigned library loaded into the game from Temp/Downloads/AppData: {v}', f_thread: 'Game threads started outside any library: {v}', f_testSign: 'Windows test mode / driver signature checks off ({v} checks)', f_debug: 'Debugger attached to Konzte ({v} checks)', f_sandbox: 'Konzte runs in a sandbox (Sandboxie): {v}', f_vm: 'Virtual machine: {v}', f_noAtt: 'KONZTE GUARD module missing or failed in {v} checks {list}', f_list: 'Scanned with a program list not issued by the server ({v})', fxAtt: 'Signed reports: {ok} · rejected: {bad} · unsigned: {none}' });
  Object.assign(L.uk ||= {}, { f_cheatSig: 'KONZTE GUARD знайшов відомий чит у пам’яті гри: {v}', f_imguiMenu: 'У грі знайдено меню на ImGui ({v}×) — так зроблені внутрішні чити, перевір повний звіт', f_cheatModule: 'Бібліотека відомого чита в процесі гри: {v}', f_tamper: 'Підроблений або повторений звіт античиту: {v} ({list})', f_shell: 'Файли клієнта Konzte змінено ({v} перевірок)', f_manualMap: 'У гру вставлено приховану DLL (MZ у приватній пам’яті): {v}', f_unsignedMod: 'Непідписана бібліотека в грі з Temp/Downloads/AppData: {v}', f_thread: 'Потоки гри, запущені поза будь-якою бібліотекою: {v}', f_testSign: 'Тестовий режим Windows / вимкнена перевірка підпису драйверів ({v} перевірок)', f_debug: 'До Konzte підключено налагоджувач ({v} перевірок)', f_sandbox: 'Konzte запущено в пісочниці (Sandboxie): {v}', f_vm: 'Віртуальна машина: {v}', f_noAtt: 'Модуль KONZTE GUARD відсутній або не спрацював у {v} перевірках {list}', f_list: 'Сканування не за списком програм від сервера ({v})', fxAtt: 'Підписаних звітів: {ok} · відхилено: {bad} · без підпису: {none}' });
  Object.assign(L.ru ||= {}, { f_cheatSig: 'KONZTE GUARD нашёл известный чит в памяти игры: {v}', f_imguiMenu: 'В игре найдено меню на ImGui ({v}×) — так сделаны внутренние читы, проверь полный отчёт', f_cheatModule: 'Библиотека известного чита в процессе игры: {v}', f_tamper: 'Поддельный или повторный отчёт античита: {v} ({list})', f_shell: 'Файлы клиента Konzte изменены ({v} проверок)', f_manualMap: 'В игру внедрена скрытая DLL (MZ в приватной памяти): {v}', f_unsignedMod: 'Неподписанная библиотека в игре из Temp/Downloads/AppData: {v}', f_thread: 'Потоки игры, запущенные вне любой библиотеки: {v}', f_testSign: 'Тестовый режим Windows / отключена проверка подписи драйверов ({v} проверок)', f_debug: 'К Konzte подключён отладчик ({v} проверок)', f_sandbox: 'Konzte запущен в песочнице (Sandboxie): {v}', f_vm: 'Виртуальная машина: {v}', f_noAtt: 'Модуль KONZTE GUARD отсутствует или не сработал в {v} проверках {list}', f_list: 'Сканирование не по списку программ от сервера ({v})', fxAtt: 'Подписанных отчётов: {ok} · отклонено: {bad} · без подписи: {none}' });
  Object.assign(L.en, { fuTitle: 'Full KONZTE GUARD report', fuBtn: 'Request full report', fuAgain: 'Request again', fuSent: 'Requested — the report will arrive when the player’s app is online (Konzte on Rust only)', fuWait: 'waiting for the player since {t}', fuNone: 'No full report yet', fuAuto: 'automatic', fuSus: 'suspicious: {n}', fuProcs: 'Programs ({n})', fuWins: 'Windows over the game ({n})', fuMods: 'Libraries in the game ({n})', fuDrv: 'Drivers ({n})', fuSys: 'System', fuOnlySus: 'Only suspicious', fuGet: 'Request file', fuGetHint: 'The player’s app sends a copy of this file silently (Konzte on Rust only); then download it in «File copies for review»', fuGetName: 'Request {n}', fuClean: 'Nothing suspicious — untick “Only suspicious” to see everything', fuSigned: 'signed', fuUnsigned: 'unsigned', fuHidden: 'hidden from capture', fuTop: 'always on top', fuClick: 'click-through', fuNoGame: 'game was not running', fuUp: 'uptime {h} h', m_cheat: 'cheat', m_tool: 'tool', m_sus: 'suspicious', loc_sys: 'Windows', loc_pf: 'Program Files', loc_game: 'game folder', loc_temp: 'Temp', loc_user: 'Downloads/Desktop', loc_appdata: 'AppData', loc_other: 'other', loc_wine: 'Wine', fuCleanBtn: 'To clean list', fuInClean: 'clean list', fuUnclean: 'Remove', fuCleanHint: 'Legit program: stop flagging it as suspicious for every player (same name and folder; version in the folder name is ignored)', fuCleanQ: 'Add {n} to the clean list? It will no longer be suspicious for any player.', fuUncleanQ: 'Remove {n} from the clean list?', fuCleaned: 'Added to the clean list' });
  Object.assign(L.uk, { fuTitle: 'Повний звіт KONZTE GUARD', fuBtn: 'Запросити повний звіт', fuAgain: 'Запросити ще раз', fuSent: 'Запит надіслано — звіт прийде, щойно застосунок гравця буде онлайн (лише Konzte на Rust)', fuWait: 'чекає на гравця з {t}', fuNone: 'Повного звіту ще немає', fuAuto: 'автоматично', fuSus: 'підозрілого: {n}', fuProcs: 'Програми ({n})', fuWins: 'Вікна над грою ({n})', fuMods: 'Бібліотеки в грі ({n})', fuDrv: 'Драйвери ({n})', fuSys: 'Система', fuOnlySus: 'Лише підозріле', fuGet: 'Запросити файл', fuGetHint: 'Застосунок гравця тихо надішле копію цього файлу (лише Konzte на Rust); потім завантажте її в «Копії файлів на перевірку»', fuGetName: 'Запросити {n}', fuClean: 'Нічого підозрілого — зніміть «Лише підозріле», щоб побачити все', fuSigned: 'підписано', fuUnsigned: 'без підпису', fuHidden: 'сховане від запису', fuTop: 'завжди зверху', fuClick: 'наскрізне для миші', fuNoGame: 'гра не була запущена', fuUp: 'працює {h} год', m_cheat: 'чит', m_tool: 'інструмент', m_sus: 'підозріле', loc_sys: 'Windows', loc_pf: 'Program Files', loc_game: 'тека гри', loc_temp: 'Temp', loc_user: 'Завантаження/Стільниця', loc_appdata: 'AppData', loc_other: 'інше', loc_wine: 'Wine', fuCleanBtn: 'У чистий список', fuInClean: 'чистий список', fuUnclean: 'Прибрати', fuCleanHint: 'Легітимна програма: більше не позначати її підозрілою ні в кого (та сама назва й тека; версія в назві теки не враховується)', fuCleanQ: 'Додати {n} у чистий список? Вона більше не буде підозрілою ні в кого з гравців.', fuUncleanQ: 'Прибрати {n} з чистого списку?', fuCleaned: 'Додано в чистий список' });
  Object.assign(L.ru, { fuTitle: 'Полный отчёт KONZTE GUARD', fuBtn: 'Запросить полный отчёт', fuAgain: 'Запросить ещё раз', fuSent: 'Запрос отправлен — отчёт придёт, когда приложение игрока будет онлайн (только Konzte на Rust)', fuWait: 'ждёт игрока с {t}', fuNone: 'Полного отчёта ещё нет', fuAuto: 'автоматически', fuSus: 'подозрительного: {n}', fuProcs: 'Программы ({n})', fuWins: 'Окна над игрой ({n})', fuMods: 'Библиотеки в игре ({n})', fuDrv: 'Драйверы ({n})', fuSys: 'Система', fuOnlySus: 'Только подозрительное', fuGet: 'Запросить файл', fuGetHint: 'Приложение игрока тихо отправит копию этого файла (только Konzte на Rust); потом скачайте её в «Копии файлов на проверку»', fuGetName: 'Запросить {n}', fuClean: 'Ничего подозрительного — снимите «Только подозрительное», чтобы увидеть всё', fuSigned: 'подписано', fuUnsigned: 'без подписи', fuHidden: 'скрыто от записи', fuTop: 'поверх всех', fuClick: 'сквозное для мыши', fuNoGame: 'игра не была запущена', fuUp: 'работает {h} ч', m_cheat: 'чит', m_tool: 'инструмент', m_sus: 'подозрительное', loc_sys: 'Windows', loc_pf: 'Program Files', loc_game: 'папка игры', loc_temp: 'Temp', loc_user: 'Загрузки/Рабочий стол', loc_appdata: 'AppData', loc_other: 'другое', loc_wine: 'Wine', fuCleanBtn: 'В чистый список', fuInClean: 'чистый список', fuUnclean: 'Убрать', fuCleanHint: 'Легитимная программа: больше не помечать её подозрительной ни у кого (то же имя и папка; версия в названии папки не учитывается)', fuCleanQ: 'Добавить {n} в чистый список? Она больше не будет подозрительной ни у кого из игроков.', fuUncleanQ: 'Убрать {n} из чистого списка?', fuCleaned: 'Добавлено в чистый список' });
  const tx = (k, v = {}) => String(L[LANG]?.[k] ?? L.en[k] ?? k).replace(/\{(\w+)\}/g, (_, x) => v[x] ?? '');
  const mb = n => n == null ? '—' : n >= 1e6 ? (n / 1e6).toFixed(1) + ' MB' : Math.round(n / 1e3) + ' KB';
  const INFO2 = new Set(['approvedMods']);
  const dTag = (x, sus, title, body) => sus?.some(z => z.name === x.name) ? `<span class="tag red" title="${esc(title || '')}">${body}</span>` : `<span class="tag okp" title="${esc([title, tx('fxLegit')].filter(Boolean).join(' · '))}">✓ ${body}</span>`;
  const STRONG = new Set(['cheatSig', 'cheatModule', 'toolFiles', 'repack', 'programs', 'exe', 'missingBundles', 'memAccess', 'driver', 'tamper', 'shell', 'manualMap', 'testSign']), INFO = new Set(['sharedVariant', 'vm']);

  function html(x) {
    if (!x) return '';
    const flag = f => {
      const short = n => n.length > 34 ? n.slice(0, 22) + '…' + n.slice(-10) : n;
      const v = { ...f, list: (f.list || []).slice(0, 4).map(short).join(', ') + ((f.list || []).length > 4 ? ' …' : ''), cats: (f.cats || []).map(c => tx('cat_' + c)).join(', ') };
      return `<div class="fx-flag ${INFO.has(f.code) || INFO2.has(f.code) ? 'info' : STRONG.has(f.code) ? 'strong' : ''}"><i></i><span>${esc(tx('f_' + f.code, v))}</span></div>`;
    };
    const F = x.files;
    const files = F ? `<div class="fx-sec"><b>${tx('fxFiles')}</b> <span class="mute">· ${fmtDT(F.at)} · ${F.n} · ${!F.ref ? tx('fxNoRef') : F.same ? tx('fxRefOk', { n: F.refUsers }) : tx('fxRefBad', { n: F.refUsers })}${F.sameUsers && !F.same ? ' · ' + tx('fxSame', { n: F.sameUsers }) : ''}</span>
      ${F.diff?.length ? `<table class="fx-tbl"><tbody>${F.diff.map(d => `<tr class="${d.tool ? 'tool' : ''}"><td><span class="tag ${d.ok ? 'green' : d.s === 'extra' && !d.tool ? '' : 'red'}">${d.ok ? tx('apOk') : tx('st_' + d.s)}</span></td>
        <td title="${esc(d.p)}">${esc((n => n.length > 60 ? n.slice(0, 44) + '…' + n.slice(-12) : n)(d.p.replace(/^CombatMaster_Data\/(StreamingAssets\/Bundles\/)?/, '')))}${d.tool ? ` <em class="fx-tool">${tx('tool')}</em>` : ''}</td>
        <td class="mute">${tx('cat_' + d.cat)}</td><td>${d.s !== 'missing' ? `<button class="btn ghost sm fx-rq" data-rq="${esc(d.p)}">${tx('rqBtn')}</button>` : ''}${d.s !== 'missing' && !d.ok && (S.me?.admin || S.me?.auditor) ? ` <button class="btn ghost sm fx-ap" data-ap="${esc(d.p)}">${tx('apBtn')}</button>` : ''}</td><td class="num">${d.s === 'changed' ? `${mb(d.ref)} → ${mb(d.me)}${d.pct != null ? ` <b class="${Math.abs(d.pct) >= 30 ? 'lose' : ''}">${d.pct > 0 ? '+' : ''}${d.pct}%</b>` : ''}` : mb(d.s === 'missing' ? d.ref : d.me)}</td></tr>`).join('')}</tbody></table>` : ''}
      ${F.history?.length > 1 ? `<div class="fx-hist"><span class="mute">${tx('fxHist')}:</span>${F.history.map(h => `<span class="tag ${h.ref ? 'green' : 'red'}">${fmtDT(h.at)} · ${esc(h.digest)}${h.ref ? ' · ' + tx('fxHistRef') : ''}</span>`).join('')}</div>` : ''}</div>` : '';
    const C = x.client;
    const client = C ? `<div class="fx-sec"><b>${tx('fxClient')}</b> <span class="mute">· ${esc([C.os, C.platform, C.ver && 'Konzte ' + C.ver, C.guard && 'KONZTE GUARD ' + C.guard].filter(Boolean).join(' · '))} · ${fmtDT(C.last)}${x.guard3 ? ' · ' + esc(tx('fxAtt', x.guard3)) : ''}</span>
      ${C.scans?.length ? `<div class="fx-scans"><span class="mute">${tx('fxScans', { n: C.scans.length })}:</span>${C.scans.map(s => `<span class="tag ${!s.n ? 'red' : !s.found ? 'gold' : s.hits.length ? 'red' : 'green'}" title="${fmtDT(s.at)}">#${s.id} ${!s.n ? tx('fxSilent') : !s.found ? tx('fxNoGame') : s.hits.length ? esc(s.hits.join(', ')) : tx('fxOk')}</span>`).join('')}</div>` : ''}
      ${x.exe ? `<div class="mute" style="font-size:12.5px">${esc(x.exe.name)} · ${esc(x.exe.hash.slice(0, 12))} · ${x.exe.same === false ? `<b class="lose">${tx('fxExeBad')}</b>` : x.exe.same ? tx('fxExeOk') : ''}</div>` : ''}</div>` : '';
    const progs = x.hits?.length ? `<div class="fx-sec"><b>${tx('fxPrograms')}</b><div class="fx-hist">${x.hits.map(h => `<span class="tag ${h.kind === 'cheat' ? 'red' : ''}">${esc(h.name)}${h.match ? ' · #' + h.match : h.pre ? ' · pre' : ''} · ${fmtDT(h.at)}</span>`).join('')}</div></div>` : '';
    const D = x.deep;
    const deep = D ? `<div class="fx-sec"><b>${tx('fxDeep')}</b> <span class="mute">· ${fmtDT(D.at)}</span>
      <div class="fx-hist"><span class="mute">${tx('fxMem')}:</span>${D.handles?.length ? D.handles.map(h => dTag(h, D.susHandles, h.company, `${esc(h.name)}${h.write ? ' · W' : ''}`)).join('') : `<span class="mute">${tx('fxNoDeep')}</span>`}</div>
      <div class="fx-hist"><span class="mute">${tx('fxOvl')}:</span>${D.overlays?.length ? D.overlays.map(o => dTag(o, D.susOverlays, (o.company || '') + ' · ' + (o.cls || ''), `${esc(o.name)} · ${o.cover}%`)).join('') : `<span class="mute">${tx('fxNoDeep')}</span>`}</div></div>` : '';
    const mods = x.modules?.rare?.length ? `<div class="fx-sec"><b>${tx('fxModules')}</b><div class="fx-hist">${x.modules.rare.map(m => `<span class="tag">${esc(m)}</span><button class="btn ghost sm" data-pcname="${esc(m)}" title="${tx('fuGetHint')}">${tx('fuGet')}</button>`).join('')}</div></div>` : '';
    const G = x.guardV, gs = G?.svc;
    const guard = G ? `<div class="fx-sec"><b>KONZTE GUARD</b> <span class="mute">· ${fmtDT(G.at)}</span> <span class="tag ${G.ok ? 'green' : 'red'}">${G.ok ? 'CLEAN' : 'NOT CLEAN'}</span>
      ${G.why?.length ? `<div class="fx-hist">${G.why.map(w => `<span class="tag red">${esc(w)}</span>`).join('')}</div>` : ''}
      ${gs ? `<div class="mute" style="font-size:12.5px">${esc([gs.sv, 'pre ' + gs.pre, 'gaps ' + gs.gaps, 'polls ' + gs.polls, 'handles×' + gs.hchecks, 'inject×' + gs.ichecks, 'overlays×' + (gs.ovlN || 0), gs.dbg ? 'debugger ' + gs.dbg : '', gs.mem?.length ? 'mem: ' + gs.mem.join(', ') : '', gs.ovl?.length ? 'ovl: ' + gs.ovl.join(', ') : '', gs.cheat?.length ? 'cheat: ' + gs.cheat.join(', ') : '', gs.drvNew?.length ? 'new drivers: ' + gs.drvNew.join(', ') : ''].filter(Boolean).join(' · '))}</div>` : G.svcErr ? `<div class="mute">${esc(G.svcErr)}</div>` : ''}
      ${G.bad?.length ? `<div class="fx-hist">${G.bad.map(b => `<span class="tag" title="${fmtDT(b.at)}">${fmtDT(b.at)} · ${esc(b.why.join(', '))}</span>`).join('')}</div>` : ''}</div>` : '';
    const anyStrong = (x.flags || []).some(f => STRONG.has(f.code) || f.code === 'bundles');
    return `<div class="fx"><h4>${tx('fxTitle')}</h4>
      <div class="fx-flags">${(x.flags || []).length ? x.flags.map(flag).join('') : `<span class="mute">${tx('fxNone')}</span>`}</div>
      ${guard}${files}${progs}${deep}${mods}${client}${anyStrong ? `<p class="fx-ask">${tx('fxAsk')}</p>` : ''}</div>`;
  }
  const reqHtml = list => !list?.length ? '' : `<div class="fx-sec fx-reqs"><b>${tx('rqTitle')}</b><span class="mute" style="font-size:12px">${tx('rqHint')}</span>
    ${list.map(r => `<div class="fx-req"><span class="tag ${r.state === 'done' ? 'green' : r.state === 'failed' ? 'red' : ''}">${tx('rq_' + r.state, { p: r.size ? Math.floor((r.got || 0) / r.size * 100) : 0 })}</span>
      <span title="${esc(r.path)}">${esc(r.path.split(/[\\/]/).slice(-2).join('/'))}</span><span class="mute">${mb(r.size)} · ${fmtDT(r.at)}${r.byNick ? ' · ' + esc(r.byNick) : ''}${r.sha256 ? ' · ' + esc(r.sha256.slice(0, 12)) : ''}</span>${r.state === 'done' ? ` <button class="btn ghost sm" data-dl="${esc(r.id)}" title="${tx('rqDlHint')}">${tx('rqDl')}</button>` : ''}</div>`).join('')}</div>`;
  const fuTag = m => m ? `<span class="tag ${m === 'tool' ? 'gold' : 'red'}">${tx('m_' + m)}</span>` : '';
  const fuSig = v => v === true ? `<span class="tag green">${tx('fuSigned')}</span>` : v === false ? `<span class="tag">${tx('fuUnsigned')}</span>` : '';
  const fuLoc = l => l && l !== '?' ? `<span class="mute">${esc(tx('loc_' + l))}</span>` : '';
  const fuExe = p => /\.(exe|dll|sys|asi|drv|ocx|so|ko)$|\.so\./i.test(p || '');
  const fuPath = x => x.path ? `<div class="fu-path" title="${esc(x.path)}">${esc(x.path)}</div>` : '';
  const fuCanClean = () => !!(S.me?.admin || S.me?.acRole);
  const fuCl = (x, kind) => x.clean ? `<span class="tag green">${tx('fuInClean')}</span>${fuCanClean() ? ` <button class="btn ghost sm" data-unclean="${esc(x.clean)}" data-cname="${esc(x.name)}">${tx('fuUnclean')}</button>` : ''}`
    : x.mark === 'sus' && fuCanClean() ? `<button class="btn ghost sm" data-clean="${kind}" data-cname="${esc(x.name)}" data-cpath="${esc(x.path || '')}" title="${tx('fuCleanHint')}">${tx('fuCleanBtn')}</button>` : '';
  const wireClean = (root, uid, redraw) => {
    root.querySelectorAll('[data-clean]').forEach(b => b.onclick = run(async () => { if (!confirm(tx('fuCleanQ', { n: b.dataset.cname }))) return; b.disabled = true; await api('/api/staff/ac-clean', { uid, kind: b.dataset.clean, name: b.dataset.cname, path: b.dataset.cpath }); toast(tx('fuCleaned')); redraw(); }));
    root.querySelectorAll('[data-unclean]').forEach(b => b.onclick = run(async () => { if (!confirm(tx('fuUncleanQ', { n: b.dataset.cname }))) return; b.disabled = true; await api('/api/staff/ac-unclean', { id: b.dataset.unclean }); redraw(); }));
  };
  const fuGet = x => fuExe(x.path) ? `<button class="btn ghost sm" data-pcpath="${esc(x.path)}" title="${tx('fuGetHint')}">${tx('fuGet')}</button>` : '';
  const fuRows = (list, row) => !list.length ? '<span class="mute">—</span>' : `<table class="fx-tbl fu-tbl"><tbody>${list.map(x => `<tr class="${x.mark ? 'fu-m' : ''}">${row(x)}</tr>`).join('')}</tbody></table>${list.some(x => x.mark) ? '' : `<div class="mute fu-none">${tx('fuClean')}</div>`}`;
  function fullHtml(v) {
    const r = v.list?.[0];
    const head = `<div class="fx-sec fu"><b>${tx('fuTitle')}</b> <button class="btn ghost sm fu-rq">${r ? tx('fuAgain') : tx('fuBtn')}</button>
      ${v.want ? ` <span class="tag gold">${tx('fuWait', { t: fmtDT(v.want.at) })}</span>` : ''}`;
    if (!r) return head + ` <span class="mute">${tx('fuNone')}</span></div>`;
    const sec = (title, body, open) => `<details class="fu-sec"${open ? ' open' : ''}><summary>${title}</summary>${body}</details>`;
    const sus = r.sum?.sus || 0;
    return head + `<div class="mute" style="font-size:12.5px;margin:4px 0">${fmtDT(r.at)} · ${esc([r.platform, r.ver && 'Konzte ' + r.ver, 'att ' + r.att, r.auto ? tx('fuAuto') : r.byNick].filter(Boolean).join(' · '))}${r.found ? '' : ' · ' + tx('fuNoGame')} · <b class="${sus ? 'lose' : ''}">${tx('fuSus', { n: sus })}</b></div>
      <label class="mute" style="font-size:12.5px"><input type="checkbox" class="fu-only"${sus ? ' checked' : ''}> ${tx('fuOnlySus')}</label>
      ${sec(tx('fuSys'), `<div class="mute" style="font-size:12.5px">${esc([r.sys?.os, r.sys?.cpu, r.sys?.ramMb && Math.round(r.sys.ramMb / 1024) + ' GB RAM', r.sys?.upMin && tx('fuUp', { h: Math.round(r.sys.upMin / 60) })].filter(Boolean).join(' · '))}</div>`, false)}
      ${sec(tx('fuWins', { n: r.windows.length }), fuRows(r.windows, w => `<td>${fuTag(w.mark)} ${esc(w.name || '?')}${fuPath(w)}</td><td class="mute">${esc(w.cls)}</td><td class="num">${w.cover}%</td><td>${[w.hidden && tx('fuHidden'), w.top && tx('fuTop'), w.click && tx('fuClick')].filter(Boolean).map(x => `<span class="tag">${x}</span>`).join(' ')}</td><td>${fuSig(w.signed)}</td><td>${fuGet(w)}${fuCl(w, 'windows')}</td>`), r.windows.some(w => w.mark))}
      ${sec(tx('fuProcs', { n: r.procs.length }), fuRows(r.procs, p => `<td>${fuTag(p.mark)} ${esc(p.name)}${p.n > 1 ? ` <span class="mute">×${p.n}</span>` : ''}${fuPath(p)}</td><td class="mute">${esc(p.company)}</td><td>${fuLoc(p.loc)}</td><td>${fuSig(p.signed)}</td><td>${fuGet(p)}${fuCl(p, 'procs')}</td>`), r.procs.some(p => p.mark))}
      ${sec(tx('fuMods', { n: r.mods.length }), fuRows(r.mods, m => `<td>${fuTag(m.mark)} ${esc(m.name)}${fuPath(m)}</td><td class="mute">${esc(m.company)}</td><td>${fuLoc(m.loc)}</td><td>${fuSig(m.signed)}</td><td>${fuGet(m)}${fuCl(m, 'mods')}</td>`), r.mods.some(m => m.mark))}
      ${sec(tx('fuDrv', { n: r.drivers.length }), fuRows(r.drivers, d => `<td>${fuTag(d.mark)} ${esc(d.name)}${fuPath(d)}</td><td>${fuGet(d)}</td>`), r.drivers.some(d => d.mark))}
    </div>`;
  }
  async function mountFull(uid, fx, reqs) {
    const v = await api('/api/staff/ac-full?uid=' + encodeURIComponent(uid)).catch(() => null);
    if (!v || !fx.isConnected) return;
    fx.querySelector('.fu')?.remove();
    fx.querySelector('.fx-flags').insertAdjacentHTML('afterend', fullHtml(v));
    const box = fx.querySelector('.fu');
    const only = box.querySelector('.fu-only'), apply = () => box.classList.toggle('fu-only-on', !!only?.checked);
    if (only) { only.onchange = apply; apply(); }
    box.querySelector('.fu-rq').onclick = run(async () => { await api('/api/staff/ac-full', { uid }); toast(tx('fuSent')); mountFull(uid, fx, reqs); });
    box.querySelectorAll('[data-pcpath]').forEach(b => b.onclick = run(async () => { b.disabled = true; await api('/api/staff/ac-request', { uid, path: b.dataset.pcpath, pc: true }); toast(tx('rqSent')); reqs?.(); }));
    wireClean(box, uid, () => mountFull(uid, fx, reqs));
  }
  if (!document.getElementById('fu-css')) document.head.insertAdjacentHTML('beforeend', `<style id="fu-css">.fu-sec{margin:6px 0}.fu-sec summary{cursor:pointer;font-weight:600}.fu-tbl td{padding:3px 8px 3px 0;font-size:12.5px}.fu-only-on .fu-tbl tr:not(.fu-m){display:none}.fu-tbl tr.fu-m td:first-child{font-weight:600}.fx-tbl.fu-tbl td:first-child{width:30%;min-width:170px;word-break:normal;overflow-wrap:anywhere}.fx-tbl.fu-tbl td{word-break:normal;overflow-wrap:anywhere}.fu-path{font-weight:400;font-size:11.5px;opacity:.6;word-break:break-all;margin-top:2px}.fu-none{display:none;font-size:12.5px;margin:2px 0 4px}.fu-only-on .fu-none{display:block}</style>`);
  async function mount(uid, where) {
    const [x, reqs] = await Promise.all([api('/api/staff/ac-forensics?uid=' + encodeURIComponent(uid)).catch(() => null), api('/api/staff/ac-requests?uid=' + encodeURIComponent(uid)).catch(() => [])]);
    if (!x || !where?.isConnected || where.querySelector('.fx')) return;
    where.insertAdjacentHTML('beforeend', html(x));
    const fx = where.querySelector('.fx');
    const drawReqs = list => {
      fx.querySelector('.fx-reqs')?.remove(); fx.querySelector('.fx-flags').insertAdjacentHTML('afterend', reqHtml(list));
      fx.querySelectorAll('[data-dl]').forEach(b => b.onclick = run(async () => { const j = await api('/api/staff/ac-file-link', { id: b.dataset.dl }); K.open(j.url); }));
    };
    drawReqs(reqs);
    const reloadReqs = async () => drawReqs(await api('/api/staff/ac-requests?uid=' + encodeURIComponent(uid)).catch(() => []));
    mountFull(uid, fx, reloadReqs);
    fx.querySelectorAll('[data-pcname]').forEach(b => b.onclick = run(async () => { b.disabled = true; await api('/api/staff/ac-request', { uid, name: b.dataset.pcname, pc: true }); toast(tx('rqSent')); reloadReqs(); }));
    fx.querySelectorAll('[data-ap]').forEach(b => b.onclick = run(async () => {
      if (!b.dataset.sure) { b.dataset.sure = 1; b.textContent = tx('apSure'); return; }
      b.disabled = true;
      await api('/api/admin/ac-approve', { uid, path: b.dataset.ap, note: 'cosmetic' });
      toast(tx('apDone'));
      const tr = b.closest('tr'), tag = tr?.querySelector('.tag'); if (tag) { tag.className = 'tag green'; tag.textContent = tx('apOk'); } b.remove();
    }));
    fx.querySelectorAll('[data-rq]').forEach(b => b.onclick = run(async () => {
      b.disabled = true;
      await api('/api/staff/ac-request', { uid, path: b.dataset.rq });
      toast(tx('rqSent'));
      drawReqs(await api('/api/staff/ac-requests?uid=' + encodeURIComponent(uid)).catch(() => []));
    }));
  }
  Object.assign(L.en, { w_over: 'Overview', w_files: 'Game files', w_full: 'Full report', w_checks: 'Checks', w_reps: 'Reports', w_copies: 'File copies', w_why: 'Why the score', w_find: 'Findings', w_go: 'open', w_ok: 'Looks clean', w_mid: 'Suspicious', w_hi: 'High risk', w_strong: 'strong findings', w_scans: 'checks OK', w_att: 'signed reports', w_client: 'client', w_never: 'never', w_search: 'Search… ( / )', w_all: 'All', w_noFiles: 'No file report yet — the player has not played a match with Konzte running', w_filesSame: 'Game files match the reference', w_noFull: 'No full report yet. Request one — it will arrive when the player’s app is online.', w_noScans: 'No checks yet', w_copyUid: 'Copy ID', w_copied: 'Copied', w_keys: '1–6 tabs · / search · Esc close', w_legend: 'green — OK · yellow — game not running · red — no check / finding', w_nothing: 'Nothing found', w_refresh: 'Refresh', w_noCopies: 'No requested files. Use “Request” next to a file in “Game files” or “Full report”.', w_last: 'last seen' });
  Object.assign(L.uk, { w_over: 'Огляд', w_files: 'Файли гри', w_full: 'Повний звіт', w_checks: 'Перевірки', w_reps: 'Скарги', w_copies: 'Копії файлів', w_why: 'Звідки бал', w_find: 'Знахідки', w_go: 'відкрити', w_ok: 'Схоже, чистий', w_mid: 'Підозрілий', w_hi: 'Високий ризик', w_strong: 'сильних ознак', w_scans: 'перевірок OK', w_att: 'підписаних звітів', w_client: 'клієнт', w_never: 'ніколи', w_search: 'Пошук… ( / )', w_all: 'Усі', w_noFiles: 'Звіту про файли ще немає — гравець не грав матч із запущеним Konzte', w_filesSame: 'Файли гри збігаються з еталоном', w_noFull: 'Повного звіту ще немає. Запросіть — він прийде, щойно застосунок гравця буде онлайн.', w_noScans: 'Перевірок ще немає', w_copyUid: 'Копіювати ID', w_copied: 'Скопійовано', w_keys: '1–6 вкладки · / пошук · Esc закрити', w_legend: 'зелений — OK · жовтий — гра не запущена · червоний — немає перевірки / знахідка', w_nothing: 'Нічого не знайдено', w_refresh: 'Оновити', w_noCopies: 'Запитаних файлів немає. Тисніть «Запросити» біля файлу у «Файлах гри» або «Повному звіті».', w_last: 'востаннє' });
  Object.assign(L.ru, { w_over: 'Обзор', w_files: 'Файлы игры', w_full: 'Полный отчёт', w_checks: 'Проверки', w_reps: 'Жалобы', w_copies: 'Копии файлов', w_why: 'Откуда балл', w_find: 'Находки', w_go: 'открыть', w_ok: 'Похоже, чистый', w_mid: 'Подозрительный', w_hi: 'Высокий риск', w_strong: 'сильных признаков', w_scans: 'проверок OK', w_att: 'подписанных отчётов', w_client: 'клиент', w_never: 'никогда', w_search: 'Поиск… ( / )', w_all: 'Все', w_noFiles: 'Отчёта о файлах ещё нет — игрок не играл матч с запущенным Konzte', w_filesSame: 'Файлы игры совпадают с эталоном', w_noFull: 'Полного отчёта ещё нет. Запросите — он придёт, как только приложение игрока будет онлайн.', w_noScans: 'Проверок ещё нет', w_copyUid: 'Копировать ID', w_copied: 'Скопировано', w_keys: '1–6 вкладки · / поиск · Esc закрыть', w_legend: 'зелёный — OK · жёлтый — игра не запущена · красный — нет проверки / находка', w_nothing: 'Ничего не найдено', w_refresh: 'Обновить', w_noCopies: 'Запрошенных файлов нет. Жмите «Запросить» у файла в «Файлах игры» или «Полном отчёте».', w_last: 'последний раз' });

  const TAB_OF = { toolFiles: 'files', repack: 'files', bundles: 'files', missingBundles: 'files', multiVariant: 'files', sharedVariant: 'files', approvedMods: 'files',
    programs: 'full', overlay: 'full', driver: 'full', cheatModule: 'full', cheatSig: 'full', imguiMenu: 'full', unsignedMod: 'full', manualMap: 'full', rareModules: 'full',
    memAccess: 'checks', exe: 'checks', silent: 'checks', noGame: 'checks', tamper: 'checks', shell: 'checks', testSign: 'checks', debug: 'checks', sandbox: 'checks', vm: 'checks', noAtt: 'checks', list: 'checks', thread: 'checks' };
  const TABS = ['over', 'files', 'full', 'checks', 'reps', 'copies'];
  const sev = f => STRONG.has(f.code) ? 0 : INFO.has(f.code) || INFO2.has(f.code) ? 2 : 1;
  const lsGet = k => { try { return localStorage.getItem(k); } catch { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch {} };
  const empty = s => `<div class="aw-empty">${s}</div>`;
  const shortP = p => (n => n.length > 72 ? n.slice(0, 52) + '…' + n.slice(-16) : n)(String(p).replace(/^CombatMaster_Data\/(StreamingAssets\/Bundles\/)?/, ''));

  function flagRow(f) {
    const short = n => n.length > 34 ? n.slice(0, 22) + '…' + n.slice(-10) : n;
    const v = { ...f, list: (f.list || []).slice(0, 4).map(short).join(', ') + ((f.list || []).length > 4 ? ' …' : ''), cats: (f.cats || []).map(c => tx('cat_' + c)).join(', ') };
    const tab = TAB_OF[f.code];
    return `<button class="aw-flag s${sev(f)}"${tab ? ` data-goto="${tab}"` : ' disabled'}><i></i><span>${esc(tx('f_' + f.code, v))}</span>${tab ? `<em>${tx('w_' + tab)} →</em>` : ''}</button>`;
  }

  function overHtml(a, x) {
    const sig = [...(a.signals || [])].sort((p, q) => q.pts - p.pts);
    const max = Math.max(10, ...sig.map(s => s.pts));
    const flags = [...(x?.flags || [])].sort((p, q) => sev(p) - sev(q));
    const anyStrong = flags.some(f => STRONG.has(f.code) || f.code === 'bundles');
    return `<div class="aw-cols">
      <section><h5>${tx('w_why')}</h5>${sig.length ? sig.map(s => `<div class="aw-sig ${s.pts >= 20 ? 'hi' : s.pts >= 10 ? 'mid' : ''}"><b>+${s.pts}</b><div><span>${t('ac_' + s.code, s)}</span><i><u style="width:${Math.round(s.pts / max * 100)}%"></u></i></div></div>`).join('') : empty(t('acNoSignals'))}</section>
      <section><h5>${tx('w_find')}</h5>${flags.length ? `<div class="aw-flags">${flags.map(flagRow).join('')}</div>` : empty(tx('fxNone'))}
        ${anyStrong ? `<p class="fx-ask">${tx('fxAsk')}</p>` : ''}</section></div>
      <p class="mute aw-disc">${t('acDisclaimer')}</p>`;
  }

  function filesHtml(x) {
    const F = x?.files;
    if (!F) return empty(tx('w_noFiles'));
    const d = F.diff || [];
    const cnt = s => d.filter(r => s === 'tool' ? r.tool : r.s === s).length;
    const chips = [['all', d.length], ['changed', cnt('changed')], ['missing', cnt('missing')], ['extra', cnt('extra')], ['tool', cnt('tool')]].filter(([k, n]) => k === 'all' || n);
    const admin = S.me?.admin || S.me?.auditor;
    return `<div class="aw-meta">${fmtDT(F.at)} · ${F.n} · ${!F.ref ? tx('fxNoRef') : F.same ? `<b class="win">${tx('fxRefOk', { n: F.refUsers })}</b>` : `<b class="lose">${tx('fxRefBad', { n: F.refUsers })}</b>`}${F.sameUsers && !F.same ? ' · ' + tx('fxSame', { n: F.sameUsers }) : ''}</div>
      ${F.history?.length > 1 ? `<div class="aw-hist"><span class="mute">${tx('fxHist')}:</span>${F.history.map(h => `<span class="tag ${h.ref ? 'green' : 'red'}">${fmtDT(h.at)} · ${esc(h.digest)}${h.ref ? ' · ' + tx('fxHistRef') : ''}</span>`).join('')}</div>` : ''}
      ${d.length ? `<div class="aw-bar"><div class="seg aw-chips">${chips.map(([k, n], i) => `<button data-fs="${k}" class="${i ? '' : 'on'}">${k === 'all' ? tx('w_all') : k === 'tool' ? tx('tool') : tx('st_' + k)} <span>${n}</span></button>`).join('')}</div><input class="aw-q" placeholder="${tx('w_search')}"></div>
      <table class="aw-tbl"><tbody>${d.map(r => `<tr data-s="${r.s}${r.tool ? ' tool' : ''}" data-q="${esc((r.p + ' ' + tx('cat_' + r.cat)).toLowerCase())}" class="${r.tool ? 'tool' : ''}">
        <td><span class="tag ${r.ok ? 'green' : r.s === 'extra' && !r.tool ? '' : 'red'}">${r.ok ? tx('apOk') : tx('st_' + r.s)}</span></td>
        <td title="${esc(r.p)}"><span class="aw-p">${esc(shortP(r.p))}</span>${r.tool ? ` <em class="fx-tool">${tx('tool')}</em>` : ''}<div class="mute">${tx('cat_' + r.cat)}</div></td>
        <td class="num">${r.s === 'changed' ? `${mb(r.ref)} → ${mb(r.me)}${r.pct != null ? ` <b class="${Math.abs(r.pct) >= 30 ? 'lose' : ''}">${r.pct > 0 ? '+' : ''}${r.pct}%</b>` : ''}` : mb(r.s === 'missing' ? r.ref : r.me)}</td>
        <td class="act">${r.s !== 'missing' ? `<button class="btn ghost sm" data-rq="${esc(r.p)}">${tx('rqBtn')}</button>` : ''}${r.s !== 'missing' && !r.ok && admin ? `<button class="btn ghost sm" data-ap="${esc(r.p)}">${tx('apBtn')}</button>` : ''}</td></tr>`).join('')}</tbody></table>
      <div class="aw-empty aw-none" hidden>${tx('w_nothing')}</div>` : empty(tx('w_filesSame'))}`;
  }

  function fullHtml2(v) {
    const r = v?.list?.[0];
    const head = `<div class="aw-bar"><button class="btn sm fu-rq">${r ? tx('fuAgain') : tx('fuBtn')}</button>${v?.want ? `<span class="tag gold">${tx('fuWait', { t: fmtDT(v.want.at) })}</span>` : ''}
      ${r ? `<span class="aw-meta">${fmtDT(r.at)} · ${esc([r.platform, r.ver && 'Konzte ' + r.ver, 'att ' + r.att, r.auto ? tx('fuAuto') : r.byNick].filter(Boolean).join(' · '))}${r.found ? '' : ' · <b class="lose">' + tx('fuNoGame') + '</b>'}</span>` : ''}</div>`;
    if (!r) return head + empty(tx('w_noFull'));
    const sus = r.sum?.sus || 0;
    const secs = [
      ['wins', tx('fuWins', { n: r.windows.length }), r.windows, w => `<td>${fuTag(w.mark)} ${esc(w.name || '?')}${fuPath(w)}</td><td class="mute">${esc(w.cls)}</td><td class="num">${w.cover}%</td><td>${[w.hidden && tx('fuHidden'), w.top && tx('fuTop'), w.click && tx('fuClick')].filter(Boolean).map(z => `<span class="tag">${z}</span>`).join(' ')}</td><td>${fuSig(w.signed)}</td><td class="act">${fuGet(w)}${fuCl(w, 'windows')}</td>`],
      ['procs', tx('fuProcs', { n: r.procs.length }), r.procs, p => `<td>${fuTag(p.mark)} ${esc(p.name)}${p.n > 1 ? ` <span class="mute">×${p.n}</span>` : ''}${fuPath(p)}</td><td class="mute">${esc(p.company)}</td><td>${fuLoc(p.loc)}</td><td>${fuSig(p.signed)}</td><td class="act">${fuGet(p)}${fuCl(p, 'procs')}</td>`],
      ['mods', tx('fuMods', { n: r.mods.length }), r.mods, m => `<td>${fuTag(m.mark)} ${esc(m.name)}${fuPath(m)}</td><td class="mute">${esc(m.company)}</td><td>${fuLoc(m.loc)}</td><td>${fuSig(m.signed)}</td><td class="act">${fuGet(m)}${fuCl(m, 'mods')}</td>`],
      ['drv', tx('fuDrv', { n: r.drivers.length }), r.drivers, d => `<td>${fuTag(d.mark)} ${esc(d.name)}${fuPath(d)}</td><td class="act">${fuGet(d)}</td>`],
    ];
    const first = (secs.find(s => s[2].some(x => x.mark)) || secs[1])[0];
    const q = x => esc([x.name, x.company, x.path, x.cls].filter(Boolean).join(' ').toLowerCase());
    return head + `<div class="aw-bar"><div class="seg aw-sub">${secs.map(([k, title, list]) => `<button data-sub="${k}" class="${k === first ? 'on' : ''}">${title}${list.some(x => x.mark) ? ` <b class="aw-dot">${list.filter(x => x.mark).length}</b>` : ''}</button>`).join('')}<button data-sub="sys">${tx('fuSys')}</button></div>
        <label class="aw-only"><input type="checkbox" class="fu-only"${sus ? ' checked' : ''}> ${tx('fuOnlySus')} <b class="${sus ? 'lose' : ''}">(${sus})</b></label><input class="aw-q" placeholder="${tx('w_search')}"></div>
      ${secs.map(([k, , list, row]) => `<div class="aw-pane" data-pane="${k}"${k === first ? '' : ' hidden'}>${list.length ? `<table class="aw-tbl fu-tbl"><tbody>${list.map(x => `<tr class="${x.mark ? 'fu-m' : ''}" data-q="${q(x)}">${row(x)}</tr>`).join('')}</tbody></table>` : ''}<div class="aw-empty aw-none" hidden>${tx('w_nothing')}</div></div>`).join('')}
      <div class="aw-pane" data-pane="sys" hidden><div class="aw-kv">${[['OS', r.sys?.os], ['CPU', r.sys?.cpu], ['RAM', r.sys?.ramMb && Math.round(r.sys.ramMb / 1024) + ' GB'], ['Uptime', r.sys?.upMin && tx('fuUp', { h: Math.round(r.sys.upMin / 60) })]].filter(z => z[1]).map(([k, v]) => `<span class="mute">${k}</span><b>${esc(v)}</b>`).join('')}</div></div>`;
  }

  function checksHtml(x) {
    if (!x) return empty(tx('w_noScans'));
    const C = x.client, D = x.deep;
    const scans = C?.scans || [];
    const cell = s => `<span class="aw-scan ${!s.n ? 'bad' : !s.found ? 'warn' : s.hits.length ? 'bad' : 'ok'}" title="#${s.id} · ${fmtDT(s.at)} · ${!s.n ? tx('fxSilent') : !s.found ? tx('fxNoGame') : s.hits.length ? esc(s.hits.join(', ')) : tx('fxOk')}"><b>#${s.id}</b>${!s.n ? tx('fxSilent') : !s.found ? tx('fxNoGame') : s.hits.length ? esc(s.hits.join(', ')) : tx('fxOk')}</span>`;
    return `<div class="aw-cols">
      <section><h5>${tx('fxClient')}</h5>${C ? `<div class="aw-kv">${[['OS', C.os], [tx('w_client'), [C.platform, C.ver && 'Konzte ' + C.ver].filter(Boolean).join(' · ')], ['GUARD', C.guard], [tx('w_last'), C.last && fmtDT(C.last)], ['att', x.guard3 && tx('fxAtt', x.guard3)]].filter(z => z[1]).map(([k, v]) => `<span class="mute">${k}</span><b>${esc(v)}</b>`).join('')}
          ${x.exe ? `<span class="mute">exe</span><b>${esc(x.exe.name)} · <code>${esc(x.exe.hash.slice(0, 12))}</code> · ${x.exe.same === false ? `<span class="lose">${tx('fxExeBad')}</span>` : x.exe.same ? `<span class="win">${tx('fxExeOk')}</span>` : ''}</b>` : ''}</div>` : empty(tx('w_noScans'))}
        <h5>${tx('fxScans', { n: scans.length })}</h5>${scans.length ? `<div class="aw-scans">${scans.map(cell).join('')}</div><div class="mute aw-small">${tx('w_legend')}</div>` : empty(tx('w_noScans'))}</section>
      <section>${D ? `<h5>${tx('fxDeep')} <span class="mute">· ${fmtDT(D.at)}</span></h5>
          <div class="aw-sub2">${tx('fxMem')}</div><div class="aw-hist">${D.handles?.length ? D.handles.map(h => dTag(h, D.susHandles, h.company, `${esc(h.name)}${h.write ? ' · W' : ''}`)).join('') : `<span class="mute">${tx('fxNoDeep')}</span>`}</div>
          <div class="aw-sub2">${tx('fxOvl')}</div><div class="aw-hist">${D.overlays?.length ? D.overlays.map(o => dTag(o, D.susOverlays, (o.company || '') + ' · ' + (o.cls || ''), `${esc(o.name)} · ${o.cover}%`)).join('') : `<span class="mute">${tx('fxNoDeep')}</span>`}</div>` : ''}
        ${x.hits?.length ? `<h5>${tx('fxPrograms')}</h5><div class="aw-hist">${x.hits.map(h => `<span class="tag ${h.kind === 'cheat' ? 'red' : ''}">${esc(h.name)}${h.match ? ' · #' + h.match : h.pre ? ' · pre' : ''} · ${fmtDT(h.at)}</span>`).join('')}</div>` : ''}
        ${x.modules?.rare?.length ? `<h5>${tx('fxModules')}</h5><div class="aw-hist">${x.modules.rare.map(m => `<span class="aw-mod"><span class="tag">${esc(m)}</span><button class="btn ghost sm" data-pcname="${esc(m)}" title="${tx('fuGetHint')}">${tx('fuGet')}</button></span>`).join('')}</div>` : ''}</section></div>`;
  }

  const repsHtml = a => (a.reportsList || []).length ? a.reportsList.map(r => `<div class="aw-rep"><div class="row"><b>${esc(r.fromNick || '?')}</b><span class="tag">${t('rr_' + (r.reason || 'other'))}</span>${r.match ? `<span class="tag">#${r.match}</span>` : ''}<span class="mute">×${r.weight ?? 1} · ${fmtDT(r.at)}${r.verdict ? ' · ' + t('verdict_' + r.verdict) : ''}</span></div>${r.text ? `<div class="aw-rep-t">${esc(r.text)}</div>` : ''}</div>`).join('') : empty(t('noReports'));

  const copiesHtml = list => list?.length ? `<p class="mute aw-small">${tx('rqHint')}</p>${list.map(r => `<div class="aw-copy"><span class="tag ${r.state === 'done' ? 'green' : r.state === 'failed' ? 'red' : r.state === 'uploading' ? 'gold' : ''}">${tx('rq_' + r.state, { p: r.size ? Math.floor((r.got || 0) / r.size * 100) : 0 })}</span>
      <div><span title="${esc(r.path)}">${esc(r.path.split(/[\\/]/).slice(-2).join('/'))}</span><div class="mute">${mb(r.size)} · ${fmtDT(r.at)}${r.byNick ? ' · ' + esc(r.byNick) : ''}${r.sha256 ? ` · <code>${esc(r.sha256.slice(0, 12))}</code>` : ''}</div></div>${r.state === 'done' ? `<button class="btn sm" data-dl="${esc(r.id)}" title="${tx('rqDlHint')}">${tx('rqDl')}</button>` : ''}</div>`).join('')}` : empty(tx('w_noCopies'));

  function wireFilter(root, sel) {
    const q = root.querySelector('.aw-q'), only = root.querySelector('.fu-only');
    const apply = () => {
      const s = (q?.value || '').trim().toLowerCase(), chip = root.querySelector('.aw-chips .on')?.dataset.fs || 'all';
      (sel ? [...root.querySelectorAll(sel)] : [root]).forEach(pane => {
        let n = 0;
        pane.querySelectorAll('tr[data-q]').forEach(tr => {
          const ok = (!s || tr.dataset.q.includes(s)) && (chip === 'all' || tr.dataset.s?.split(' ').includes(chip)) && (!only?.checked || tr.classList.contains('fu-m'));
          tr.hidden = !ok; if (ok) n++;
        });
        const none = pane.querySelector('.aw-none'); if (none) none.hidden = !!n;
      });
    };
    q && (q.oninput = apply); only && (only.onchange = apply);
    root.querySelectorAll('.aw-chips button').forEach(b => b.onclick = () => { root.querySelectorAll('.aw-chips button').forEach(z => z.classList.toggle('on', z === b)); apply(); });
    root.querySelectorAll('.aw-sub button').forEach(b => b.onclick = () => { root.querySelectorAll('.aw-sub button').forEach(z => z.classList.toggle('on', z === b)); root.querySelectorAll('.aw-pane').forEach(p => p.hidden = p.dataset.pane !== b.dataset.sub); });
    apply();
  }

  openAcInfo = async function (uid) {
    const enc = encodeURIComponent(uid);
    const [a, x, full, reqs0] = await Promise.all([api('/api/staff/ac?uid=' + enc), api('/api/staff/ac-forensics?uid=' + enc).catch(() => null), api('/api/staff/ac-full?uid=' + enc).catch(() => null), api('/api/staff/ac-requests?uid=' + enc).catch(() => [])]);
    let reqs = reqs0, fullV = full;
    const flags = x?.flags || [], strong = flags.filter(f => STRONG.has(f.code)).length;
    const scans = x?.client?.scans || [], scOk = scans.filter(s => s.n && s.found && !s.hits.length).length;
    const g3 = x?.guard3, fr = fullV?.list?.[0];
    const level = a.score >= 60 || strong ? 'hi' : a.score >= 25 || flags.some(f => sev(f) === 1) ? 'mid' : 'ok';
    const count = { files: (x?.files?.diff || []).filter(d => !d.ok).length, full: fr?.sum?.sus || 0, checks: scans.length - scOk, reps: (a.reportsList || []).length, copies: reqs.length };
    const hot = { files: flags.some(f => TAB_OF[f.code] === 'files' && sev(f) < 2), full: !!count.full || flags.some(f => TAB_OF[f.code] === 'full' && sev(f) < 2), checks: flags.some(f => TAB_OF[f.code] === 'checks' && sev(f) < 2), reps: !!count.reps };
    const tile = (v, l, cls = '') => `<div class="aw-tile ${cls}"><b>${v}</b><span>${l}</span></div>`;
    modal(`<div class="card accent aw" data-uid="${esc(uid)}">
      <header class="aw-head">
        <div class="aw-id"><h2>${esc(a.nick)}</h2><button class="aw-uid" data-copy="${esc(uid)}" title="${tx('w_copyUid')}">${esc(uid)}</button>
          <div class="mute aw-small">${t('acBasis', { n: a.matches })}${a.cleared ? ` · ${t('acCleared', { d: fmtDT(a.cleared) })}` : ''}</div></div>
        <div class="aw-verdict ${level}"><div class="aw-ring" style="--p:${a.score}"><b>${a.score}</b></div><span>${tx('w_' + level)}</span></div>
        <div class="aw-acts"><button class="btn sm" data-goprof>${t('profile')}</button><button class="btn ghost sm" data-clear>${t('acClear')}</button><button class="aw-x" data-close title="Esc">✕</button></div>
      </header>
      <div class="aw-tiles">${tile(strong, tx('w_strong'), strong ? 'bad' : 'good')}${tile(count.reps, tx('w_reps'), count.reps ? 'warn' : '')}${tile(scans.length ? `${scOk}/${scans.length}` : '—', tx('w_scans'), scans.length && scOk < scans.length ? 'warn' : scans.length ? 'good' : '')}${tile(g3 ? `${g3.ok}${g3.bad ? ` / <span class="lose">${g3.bad}</span>` : ''}` : '—', tx('w_att'), g3?.bad ? 'bad' : '')}${tile(esc(x?.client?.ver || '—'), tx('w_client') + (x?.client?.last ? ' · ' + fmtDT(x.client.last) : ''))}</div>
      <nav class="aw-tabs">${TABS.map((k, i) => `<button data-tab="${k}"><kbd>${i + 1}</kbd>${tx('w_' + k)}${k !== 'over' && count[k] ? ` <span class="aw-n${hot[k] ? ' hot' : ''}">${count[k]}</span>` : hot[k] ? ' <i class="aw-hot"></i>' : ''}</button>`).join('')}<span class="aw-keys mute">${tx('w_keys')}</span></nav>
      <div class="aw-body">
        <div class="aw-tab" data-t="over">${overHtml(a, x)}</div>
        <div class="aw-tab" data-t="files">${filesHtml(x)}</div>
        <div class="aw-tab" data-t="full">${fullHtml2(fullV)}</div>
        <div class="aw-tab" data-t="checks">${checksHtml(x)}</div>
        <div class="aw-tab" data-t="reps">${repsHtml(a)}</div>
        <div class="aw-tab" data-t="copies">${copiesHtml(reqs)}</div>
      </div></div>`, box => {
      const card = box.querySelector('.aw');
      const show = k => { card.querySelectorAll('.aw-tabs [data-tab]').forEach(b => b.classList.toggle('on', b.dataset.tab === k)); card.querySelectorAll('.aw-tab').forEach(p => p.hidden = p.dataset.t !== k); card.querySelector('.aw-body').scrollTop = 0; lsSet('kz.awTab', k); };
      card.querySelectorAll('.aw-tabs [data-tab]').forEach(b => b.onclick = () => show(b.dataset.tab));
      card.querySelectorAll('[data-goto]').forEach(b => b.onclick = () => show(b.dataset.goto));
      show(TABS.includes(lsGet('kz.awTab')) ? lsGet('kz.awTab') : 'over');
      card.querySelector('[data-goprof]').onclick = () => { closeModal(); go('profile', uid); };
      card.querySelector('[data-clear]').onclick = run(async () => { if (!confirm(t('acClearQ'))) return; await api('/api/staff/ac-clear', { uid }); closeModal(); if (S.page === 'staff') renderStaff(); });
      card.querySelectorAll('[data-copy]').forEach(b => b.onclick = () => { navigator.clipboard?.writeText(b.dataset.copy); toast(tx('w_copied')); });
      wireFilter(card.querySelector('[data-t="files"]'));
      const wireFull = () => {
        const p = card.querySelector('[data-t="full"]');
        wireFilter(p, '.aw-pane');
        p.querySelector('.fu-rq').onclick = run(async () => { await api('/api/staff/ac-full', { uid }); toast(tx('fuSent')); fullV = await api('/api/staff/ac-full?uid=' + enc).catch(() => fullV); p.innerHTML = fullHtml2(fullV); wireFull(); wireReq(p); });
        wireClean(p, uid, async () => { fullV = await api('/api/staff/ac-full?uid=' + enc).catch(() => fullV); p.innerHTML = fullHtml2(fullV); wireFull(); wireReq(p); });
      };
      const drawCopies = async () => {
        reqs = await api('/api/staff/ac-requests?uid=' + enc).catch(() => reqs);
        const p = card.querySelector('[data-t="copies"]'); p.innerHTML = copiesHtml(reqs);
        p.querySelectorAll('[data-dl]').forEach(b => b.onclick = run(async () => { const j = await api('/api/staff/ac-file-link', { id: b.dataset.dl }); K.open(j.url); }));
        const tb = card.querySelector('[data-tab="copies"]'); tb.querySelector('.aw-n')?.remove(); if (reqs.length) tb.insertAdjacentHTML('beforeend', ` <span class="aw-n">${reqs.length}</span>`);
      };
      const wireReq = root => {
        root.querySelectorAll('[data-rq]').forEach(b => b.onclick = run(async () => { b.disabled = true; await api('/api/staff/ac-request', { uid, path: b.dataset.rq }); toast(tx('rqSent')); drawCopies(); }));
        root.querySelectorAll('[data-pcpath]').forEach(b => b.onclick = run(async () => { b.disabled = true; await api('/api/staff/ac-request', { uid, path: b.dataset.pcpath, pc: true }); toast(tx('rqSent')); drawCopies(); }));
        root.querySelectorAll('[data-pcname]').forEach(b => b.onclick = run(async () => { b.disabled = true; await api('/api/staff/ac-request', { uid, name: b.dataset.pcname, pc: true }); toast(tx('rqSent')); drawCopies(); }));
        root.querySelectorAll('[data-ap]').forEach(b => b.onclick = run(async () => {
          if (!b.dataset.sure) { b.dataset.sure = 1; b.textContent = tx('apSure'); b.classList.add('red'); return; }
          b.disabled = true; await api('/api/admin/ac-approve', { uid, path: b.dataset.ap, note: 'cosmetic' }); toast(tx('apDone'));
          const tag = b.closest('tr')?.querySelector('.tag'); if (tag) { tag.className = 'tag green'; tag.textContent = tx('apOk'); } b.remove();
        }));
      };
      wireFull(); wireReq(card); drawCopies();
      const poll = setInterval(() => { if (!card.isConnected) return clearInterval(poll); if (reqs.some(r => ['pending', 'wait', 'uploading'].includes(r.state))) drawCopies(); }, 5000);
      const key = e => {
        if (!card.isConnected) return removeEventListener('keydown', key);
        const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName);
        if (e.key === 'Escape') { if (typing) return document.activeElement.blur(); e.preventDefault(); return closeModal(); }
        if (typing || e.ctrlKey || e.altKey || e.metaKey) return;
        if (/^[1-6]$/.test(e.key)) { e.preventDefault(); show(TABS[+e.key - 1]); }
        else if (e.key === '/') { const q = card.querySelector('.aw-tab:not([hidden]) .aw-q'); if (q) { e.preventDefault(); q.focus(); } }
      };
      addEventListener('keydown', key);
    });
  };
  if (!document.getElementById('aw-css')) document.head.insertAdjacentHTML('beforeend', `<style id="aw-css">
.aw{width:min(1100px,96vw);height:min(88vh,920px);display:flex;flex-direction:column;gap:12px;padding:20px 22px 14px;overflow:hidden}
.aw-head{display:flex;align-items:center;gap:18px}
.aw-id{flex:1;min-width:0}.aw-id h2{margin:0;font-size:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.aw-uid{background:none;border:0;padding:0;color:var(--mute);font:12px/1.4 ui-monospace,monospace;cursor:pointer}.aw-uid:hover{color:var(--accent)}
.aw-small{font-size:12px}
.aw-verdict{display:flex;align-items:center;gap:10px;font-family:TTDB;font-size:14px;letter-spacing:.4px}
.aw-ring{--c:var(--win);width:58px;height:58px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--c) calc(var(--p)*1%),var(--panel3) 0)}
.aw-ring b{width:46px;height:46px;border-radius:50%;display:grid;place-items:center;background:var(--panel);font-size:19px;color:var(--c)}
.aw-verdict.ok{color:var(--win)}.aw-verdict.mid{color:#ff8f3a}.aw-verdict.mid .aw-ring{--c:#ff8f3a}.aw-verdict.hi{color:var(--lose)}.aw-verdict.hi .aw-ring{--c:var(--lose)}
.aw-acts{display:flex;gap:8px;align-items:center}
.aw-x{width:34px;height:34px;border-radius:9px;border:1px solid var(--edge);background:var(--panel2);color:var(--mute);cursor:pointer;font-size:14px}.aw-x:hover{color:var(--text);border-color:var(--line-dim)}
.aw-tiles{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
.aw-tile{background:var(--panel2);border:1px solid var(--edge);border-radius:10px;padding:9px 12px;display:flex;flex-direction:column;gap:2px;min-width:0}
.aw-tile b{font-family:TTDB;font-size:20px}.aw-tile>span{font-size:11.5px;color:var(--mute);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.aw-tile.bad b{color:var(--lose)}.aw-tile.warn b{color:var(--gold)}.aw-tile.good b{color:var(--win)}
.aw-tabs{display:flex;gap:2px;border-bottom:1px solid var(--edge);align-items:flex-end}
.aw-tabs button{background:none;border:0;border-bottom:2px solid transparent;color:var(--mute);padding:8px 12px;cursor:pointer;font:inherit;font-size:13.5px;display:flex;align-items:center;gap:6px;margin-bottom:-1px}
.aw-tabs button:hover{color:var(--text)}.aw-tabs button.on{color:var(--text);border-bottom-color:var(--accent)}
.aw-tabs kbd{font:10px ui-monospace,monospace;padding:1px 4px;border-radius:4px;background:var(--panel3);color:var(--mute)}
.aw-n{font-size:11px;font-family:TTDB;padding:1px 6px;border-radius:8px;background:var(--panel3);color:var(--accent)}.aw-n.hot{background:rgba(224,66,79,.2);color:var(--lose)}
.aw-hot{width:7px;height:7px;border-radius:50%;background:var(--lose)}
.aw-keys{margin-left:auto;font-size:11px;padding-bottom:9px}
.aw-body{flex:1;overflow:auto;padding-right:4px}
.aw-tab{display:flex;flex-direction:column;gap:10px;font-size:13.5px}
.aw-cols{display:grid;grid-template-columns:1fr 1fr;gap:18px}.aw-cols section{display:flex;flex-direction:column;gap:8px;min-width:0}
.aw h5{margin:4px 0 0;font-size:12px;text-transform:uppercase;letter-spacing:.8px;color:var(--mute);font-weight:600}
.aw-sig{display:flex;gap:10px;align-items:flex-start;padding:8px 10px;border-radius:9px;background:var(--panel2)}
.aw-sig>b{font-family:TTDB;min-width:34px;color:var(--gold)}.aw-sig.mid>b{color:#ff8f3a}.aw-sig.hi>b{color:var(--lose)}
.aw-sig>div{flex:1;display:flex;flex-direction:column;gap:5px}.aw-sig i{height:4px;border-radius:2px;background:var(--panel3);overflow:hidden}.aw-sig u{display:block;height:100%;background:currentColor;color:var(--gold)}.aw-sig.mid u{color:#ff8f3a}.aw-sig.hi u{color:var(--lose)}
.aw-flags{display:flex;flex-direction:column;gap:5px}
.aw-flag{display:flex;gap:9px;align-items:flex-start;text-align:left;width:100%;padding:8px 10px;border-radius:9px;border:1px solid var(--edge);background:var(--panel2);color:var(--text);font:inherit;font-size:13px;cursor:pointer}
.aw-flag:hover:not(:disabled){border-color:var(--line-dim)}.aw-flag:disabled{cursor:default}
.aw-flag i{flex:none;width:9px;height:9px;margin-top:4px;border-radius:50%;background:var(--gold)}.aw-flag.s0{border-color:rgba(224,66,79,.35);background:rgba(224,66,79,.07)}.aw-flag.s0 i{background:#ff6a6a;box-shadow:0 0 8px rgba(255,106,106,.6)}.aw-flag.s2 i{background:var(--win)}
.aw-flag span{flex:1}.aw-flag em{font-style:normal;font-size:11px;color:var(--accent);white-space:nowrap;opacity:.7}
.aw-disc{font-size:12px;margin:6px 0 0}
.aw-empty{padding:18px;border-radius:10px;border:1px dashed var(--edge);color:var(--mute);text-align:center;font-size:13px}
.aw-meta{font-size:12.5px;color:var(--mute)}
.aw-bar{display:flex;gap:10px;align-items:center;flex-wrap:wrap;position:sticky;top:0;background:var(--panel);padding:4px 0;z-index:1}
.aw-q{flex:1;min-width:180px;max-width:320px;margin-left:auto;padding:6px 10px;font-size:13px}
.aw .seg button{padding:5px 11px;font-size:12px}.aw-chips button span{opacity:.6;margin-left:3px}.aw .seg button.on .aw-dot{background:#0f0f16}.aw-tbl .tag{white-space:nowrap}
.aw-dot{font-family:TTDB;font-size:10px;padding:0 5px;border-radius:7px;background:rgba(224,66,79,.25);color:var(--lose);margin-left:4px}
.aw-only{font-size:12.5px;color:var(--mute);display:flex;gap:5px;align-items:center;cursor:pointer}
.aw-tbl{width:100%;border-collapse:collapse;font-size:12.5px}
.aw-tbl td{padding:6px 8px;border-bottom:1px solid var(--edge);vertical-align:top;overflow-wrap:anywhere}
.aw-tbl tr:hover td{background:rgba(255,255,255,.02)}.aw-tbl tr.tool td,.aw-tbl tr.fu-m td{background:rgba(224,66,79,.06)}
.aw-tbl td:first-child{width:1%;white-space:nowrap}.aw-tbl.fu-tbl td:first-child{width:32%;white-space:normal}
.aw-tbl td.num{white-space:nowrap;text-align:right}.aw-tbl td.act{white-space:nowrap;text-align:right;width:1%}.aw-tbl td.act .btn+.btn{margin-left:4px}
.aw-tbl .mute{font-size:11.5px}.aw-p{font-family:ui-monospace,monospace;font-size:12px}
.aw-hist{display:flex;flex-wrap:wrap;gap:5px;align-items:center}.aw-mod{display:inline-flex;gap:4px;align-items:center}
.aw-sub2{font-size:12px;color:var(--mute)}
.aw-kv{display:grid;grid-template-columns:auto 1fr;gap:5px 14px;font-size:13px}.aw-kv b{font-weight:500;overflow-wrap:anywhere}.aw-kv code,.aw-copy code{font-size:11.5px;opacity:.8}
.aw-scans{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:5px}
.aw-scan{padding:6px 9px;border-radius:8px;font-size:12px;border-left:3px solid;background:var(--panel2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.aw-scan b{font-family:TTDB;margin-right:6px;font-weight:400}.aw-scan.ok{border-color:var(--win)}.aw-scan.warn{border-color:var(--gold)}.aw-scan.bad{border-color:var(--lose);color:var(--lose)}
.aw-rep{padding:10px 12px;border-radius:10px;background:var(--panel2);display:flex;flex-direction:column;gap:5px}.aw-rep-t{font-size:13px;color:var(--mute);white-space:pre-wrap}
.aw-copy{display:flex;gap:12px;align-items:center;padding:8px 10px;border-radius:9px;background:var(--panel2);font-size:13px}.aw-copy>div{flex:1;min-width:0}.aw-copy .mute{font-size:11.5px}
.aw .fx-ask{margin:4px 0 0}
@media (max-width:760px){.aw-cols{grid-template-columns:1fr}.aw-tiles{grid-template-columns:repeat(2,1fr)}.aw-keys{display:none}.aw-head{flex-wrap:wrap}}
</style>`);
  const _od = openDossier;
  openDossier = async function (uid) {
    const r = await _od.apply(this, arguments);
    setTimeout(() => { const box = document.querySelector('#ld-acc') || document.querySelector('#modal .card'); if (box) mount(uid, box); }, 400);
    return r;
  };
})();

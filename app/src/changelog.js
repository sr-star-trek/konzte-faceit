const CHANGELOG = [
  { ui: 151, items: {
    en: ['New in the Shop: Music — sound styles «Swordsman» and «Dark fantasy». Each one replaces the music in the menu, search and lobby and every interface sound. Press ▶ on the cover to listen before buying', 'Switch your sound style any time in Inventory → Music or Settings → Sound'],
    uk: ['Нове в Магазині: Музика — стилі звуку «Мечник» і «Темне фентезі». Кожен замінює музику в меню, пошуку й лобі та всі звуки інтерфейсу. Натисни ▶ на обкладинці, щоб послухати до покупки', 'Перемикай стиль звуку будь-коли: Інвентар → Музика або Налаштування → Звук'],
    ru: ['Новое в Магазине: Музыка — стили звука «Мечник» и «Тёмное фэнтези». Каждый заменяет музыку в меню, поиске и лобби и все звуки интерфейса. Нажми ▶ на обложке, чтобы послушать до покупки', 'Переключай стиль звука когда угодно: Инвентарь → Музыка или Настройки → Звук'],
  } },
  { ui: 130, items: {
    en: ['Redesigned app: new Play, Profile, Leaderboard, Clans, Shop, Inventory, Premium and Settings', 'Private messages and a blacklist', 'Premium XP levels: shop discount and bonus gift days', 'Clans: open join, requests, minimum ELO, clan points', 'Season stats in profiles, rules right in the app, new player card and OBS overlays'],
    uk: ['Новий застосунок: оновлені «Грати», профіль, рейтинг, клани, магазин, інвентар, Premium і налаштування', 'Особисті повідомлення й чорний список', 'Рівні Premium XP: знижка в магазині й бонусні дні до подарунка', 'Клани: відкритий вступ, заявки, мінімальний ELO, очки клану', 'Статистика за сезон у профілі, правила прямо в застосунку, нова картка гравця й оверлеї OBS'],
    ru: ['Новое приложение: обновлённые «Играть», профиль, рейтинг, кланы, магазин, инвентарь, Premium и настройки', 'Личные сообщения и чёрный список', 'Уровни Premium XP: скидка в магазине и бонусные дни к подарку', 'Кланы: открытый вход, заявки, минимальный ELO, очки клана', 'Статистика за сезон в профиле, правила прямо в приложении, новая карточка игрока и оверлеи OBS'],
  } },
  { ui: 106, items: {
    en: ['Sale: −30% on Premium, KF packs and every item in the shop — for KF and for $, for 72 hours. The timer is in the Shop', 'Banned players now show a red BANNED mark on their avatar in the profile', 'New KONZTE GUARD badge for the anti-cheat team'],
    uk: ['Розпродаж: −30% на Premium, пакети KF і всі предмети магазину — за KF і за $, 72 години. Таймер — у Магазині', 'У профілі забаненого гравця тепер червоний штамп «БАН» на аватарі', 'Новий значок KONZTE GUARD для команди античиту'],
    ru: ['Распродажа: −30% на Premium, пакеты KF и все предметы магазина — за KF и за $, 72 часа. Таймер — в Магазине', 'В профиле забаненного игрока теперь красный штамп «БАН» на аватаре', 'Новый значок KONZTE GUARD для команды античита'],
  } },
  { ui: 104, items: {
    en: ['Privacy Policy 1.4: the full KONZTE GUARD report now includes file paths (your user folder is hidden), and during a review staff can request a copy of an executable file (.exe, .dll, .sys) from that report — never documents or personal files. Details: konzte.online/privacy'],
    uk: ['Політика конфіденційності 1.4: повний звіт KONZTE GUARD тепер містить шляхи до файлів (тека користувача прихована), а під час перевірки стафф може запросити копію виконуваного файлу (.exe, .dll, .sys) з цього звіту — ніколи документи чи особисті файли. Деталі: konzte.online/privacy'],
    ru: ['Политика конфиденциальности 1.4: полный отчёт KONZTE GUARD теперь содержит пути к файлам (папка пользователя скрыта), а при проверке стафф может запросить копию исполняемого файла (.exe, .dll, .sys) из этого отчёта — никогда документы или личные файлы. Подробности: konzte.online/privacy'],
  } },
  { ui: 96, items: {
    en: ['Privacy Policy 1.3: KONZTE GUARD 3.0 — signed anti-cheat reports and a full PC report that staff can request when reviewing a suspicious account (no file contents, passwords or screenshots, ever). Details: konzte.online/privacy'],
    uk: ['Політика конфіденційності 1.3: KONZTE GUARD 3.0 — підписані звіти античиту й повний звіт про ПК, який стафф може запросити під час перевірки підозрілого акаунта (жодного вмісту файлів, паролів чи скриншотів). Деталі: konzte.online/privacy'],
    ru: ['Политика конфиденциальности 1.3: KONZTE GUARD 3.0 — подписанные отчёты античита и полный отчёт о ПК, который стафф может запросить при проверке подозрительного аккаунта (никакого содержимого файлов, паролей или скриншотов). Подробности: konzte.online/privacy'],
  } },
  { ui: 79, items: {
    en: ['Player markers are now ON in 1×1 and 2×2 (community vote: 89%). In 5×5 they stay off — check the lobby settings in your match'],
    uk: ['Маркери гравців тепер УВІМКНЕНІ в 1×1 і 2×2 (голосування спільноти: 89%). У 5×5 — вимкнені, дивись налаштування лобі в матчі'],
    ru: ['Маркеры игроков теперь ВКЛЮЧЕНЫ в 1×1 и 2×2 (голосование сообщества: 89%). В 5×5 — выключены, смотри настройки лобби в матче'],
  } },
  { ui: 78, items: {
    en: ['Find match now requires Combat Master to be running for everyone in the party — the app offers to start it for you', 'Playing through Discord now requires being on the Konzte Discord server — the app shows a Join button if you are not'],
    uk: ['«Знайти матч» тепер вимагає запущеної Combat Master в усіх учасників паті — застосунок пропонує її відкрити', 'Грати можна лише учасникам Discord-сервера Konzte — якщо тебе там немає, застосунок покаже кнопку «Зайти»'],
    ru: ['«Найти матч» теперь требует запущенной Combat Master у всех участников пати — приложение предлагает её открыть', 'Играть можно только участникам Discord-сервера Konzte — если тебя там нет, приложение покажет кнопку «Зайти»'],
  } },
  { ui: 77, items: {
    en: ['Settings → Security → Devices: see where your account is logged in and log out of any device — or everywhere else at once', 'KONZTE GUARD now sends you a DM when someone logs in to your account from a new PC', 'The second login code now protects the store on the website too'],
    uk: ['Налаштування → Безпека → Пристрої: видно, де відкрито акаунт, можна вийти на будь-якому пристрої або одразу на всіх інших', 'KONZTE GUARD тепер пише в ЛС, коли в акаунт входять з нового ПК', 'Другий код входу тепер захищає й магазин на сайті'],
    ru: ['Настройки → Безопасность → Устройства: видно, где открыт аккаунт, можно выйти на любом устройстве или сразу на всех остальных', 'KONZTE GUARD теперь пишет в ЛС, когда в аккаунт входят с нового ПК', 'Второй код входа теперь защищает и магазин на сайте'],
  } },
  { ui: 76, items: {
    en: ['KONZTE GUARD: protect your account with a second code — a login code in Discord DMs or Google Authenticator (Settings → Security)', 'Your Konzte activity now shows in Discord again — friends see your lobby, queue and match', 'Logging in no longer asks for a code in the browser'],
    uk: ['KONZTE GUARD: захисти акаунт другим кодом — код входу в ЛС Discord або Google Authenticator (Налаштування → Безпека)', 'Статус Konzte знову видно в Discord — друзі бачать твоє лобі, пошук і матч', 'Під час входу браузер більше не просить код'],
    ru: ['KONZTE GUARD: защити аккаунт вторым кодом — код входа в ЛС Discord или Google Authenticator (Настройки → Безопасность)', 'Статус Konzte снова виден в Discord — друзья видят твоё лобби, поиск и матч', 'При входе браузер больше не просит код'],
  } },
  { ui: 59, items: {
    en: ['New shop collection: 10 banners, 10 frames and 10 emblems', '10 free avatars for everyone — pick one in Inventory → Avatar', 'Older banners, frames and emblems left the shop — everything you already own stays yours'],
    uk: ['Нова колекція в магазині: 10 банерів, 10 рамок і 10 емблем', '10 безкоштовних аватарів для всіх — обирай в «Інвентар → Аватар»', 'Старі банери, рамки й емблеми прибрано з вітрини — усе, що вже куплено, лишається твоїм'],
    ru: ['Новая коллекция в магазине: 10 баннеров, 10 рамок и 10 эмблем', '10 бесплатных аватаров для всех — выбирай в «Инвентарь → Аватар»', 'Старые баннеры, рамки и эмблемы убраны с витрины — всё, что уже куплено, остаётся твоим'],
  } },
  { ui: 55, items: {
    en: ['1×1 is back: a solo duel with its own rating — no party and no voice, a draw needs both votes', 'Public queue is now 2×2 and 1×1 only (community vote); 5×5 is played only in clan wars and tournaments', 'Season 1 rewards moved: the former 5×5 prizes now go to the 2×2 ladder, the former 2×2 prizes to the 1×1 ladder', 'Season 1 starts once 100 players have registered (was 200)'],
    uk: ['Повернувся 1×1: соло-дуель зі своїм рейтингом — без паті й без войсу, нічия — за згодою обох', 'Загальна черга тепер лише 2×2 і 1×1 (за голосуванням спільноти); 5×5 грають тільки в клан-варах і турнірах', 'Нагороди сезону 1 перенесено: колишні призи 5×5 тепер у рейтингу 2×2, колишні призи 2×2 — у рейтингу 1×1', 'Сезон 1 стартує, щойно зареєструється 100 гравців (було 200)'],
    ru: ['Вернулся 1×1: соло-дуэль со своим рейтингом — без пати и без войса, ничья — по согласию обоих', 'Общая очередь теперь только 2×2 и 1×1 (по голосованию сообщества); 5×5 играют только в клан-варах и турнирах', 'Награды сезона 1 перенесены: бывшие призы 5×5 теперь в рейтинге 2×2, бывшие призы 2×2 — в рейтинге 1×1', 'Сезон 1 стартует, как только зарегистрируются 100 игроков (было 200)'],
  } },
  { ui: 44, items: {
    en: ['New navigation: sections Play · Community · Progress · Store, counters, collapsible menu; news moved to the bell', 'Ctrl+K: quick search for pages, players, clans, shop items and actions', 'Play page reworked: one big Find match button, mode cards with wait time, party slots and what happens next', 'First steps: a checklist for new players with KF rewards', 'Match room step by step: Now banner, copy host ID, I am in the lobby, clear whose turn it is', 'Result check before sending: see what Konzte read from the screenshot and fix it in one click', 'Profile with visible actions and form/stats, shop with tabs, filters and try-on on your own nickname', 'Animations now land exactly on the sound effects; team colors: Alfa violet, Bravo gold'],
    uk: ['Нова навігація: розділи Гра · Спільнота · Прогрес · Магазин, лічильники, згортання меню; новини — у дзвіночку', 'Ctrl+K: швидкий пошук сторінок, гравців, кланів, предметів і дій', 'Нова сторінка «Грати»: одна велика кнопка, картки режимів з очікуванням, слоти паті й що буде далі', 'Перші кроки: чек-лист для новачків з нагородами KF', 'Кімната матчу по кроках: «Зараз», копіювати ID хоста, «Я в лобі», видно, чий хід', 'Перевірка результату перед відправкою: що Konzte прочитав зі скриншота й виправлення в один клік', 'Профіль з помітними діями, формою й статистикою; магазин із вкладками, фільтрами й приміркою на своєму ніку', 'Анімації точно в такт звукам; кольори команд: Alfa фіолетова, Bravo золота'],
    ru: ['Новая навигация: разделы Игра · Сообщество · Прогресс · Магазин, счётчики, сворачивание меню; новости — в колокольчике', 'Ctrl+K: быстрый поиск страниц, игроков, кланов, предметов и действий', 'Новая страница «Играть»: одна большая кнопка, карточки режимов с ожиданием, слоты пати и что будет дальше', 'Первые шаги: чек-лист для новичков с наградами KF', 'Комната матча по шагам: «Сейчас», копировать ID хоста, «Я в лобби», видно, чей ход', 'Проверка результата перед отправкой: что Konzte прочитал со скриншота и исправление в один клик', 'Профиль с заметными действиями, формой и статистикой; магазин с вкладками, фильтрами и примеркой на своём нике', 'Анимации точно в такт звукам; цвета команд: Alfa фиолетовая, Bravo золотая'],
  } },
  { ui: 37, items: {
    en: ['Clans: create a clan with your own tag, invite friends, climb the clan ladder and challenge other clans to clan wars', 'Season Pass: 30 levels with a free and a premium track, plus daily and weekly quests and login streaks', 'New cosmetics: profile stickers, nickname colours and victory effects', 'FACEIT-style stats in your profile: 30-day ELO graph, K/D trend, form, best maps and comparison with friends', 'Calibration: in your first 5 games in each mode wins give triple ELO and losses double; your rank and ELO appear after the 5th game', '5×5 Night: sign up for scheduled 5×5 sessions; 2×2 is always open', 'Queue: estimated wait time and a "Call friends" button; friend online and in-queue alerts', 'Rate every match, see how teams were balanced and follow the staff review status', 'Original sound design and music: new effects for every action, a match-found alarm that cuts through the game, victory and defeat stingers and season themes (Settings → Sound)', 'Rank reveal: a full-screen animation when you finish calibration', 'Own 3D animated avatar frames in the Season Pass, an animated season background and the Play page reorganised so Find Match is right at the top', 'Language picker is now a dropdown'],
    uk: ['Клани: створи клан зі своїм тегом, запрошуй друзів, піднімайся в рейтингу кланів і викликай інші клани на клан-вари', 'Сезонний пропуск: 30 рівнів, безкоштовна й преміум-доріжка, щоденні й тижневі завдання та серії входів', 'Нова косметика: наліпки на профіль, кольори ніку й ефекти перемоги', 'Статистика як на FACEIT у профілі: графік ELO за 30 днів, тренд K/D, форма, найкращі карти й порівняння з друзями', 'Калібрування: у перших 5 іграх кожного режиму перемога дає втричі більше ELO, поразка — удвічі; ранг і ELO з’являються після 5-ї гри', 'Вечір 5×5: записуйся на 5×5 за розкладом; 2×2 відкритий завжди', 'Черга: орієнтовний час пошуку й кнопка «Покликати друзів»; сповіщення, коли друг онлайн чи шукає матч', 'Оцінюй кожен матч, дивись, як збалансовано команди, і стеж за статусом перевірки стаффом', 'Власний звук і музика: нові ефекти для кожної дії, сигнал «матч знайдено», що чути поверх гри, стінгери перемоги й поразки та теми сезонів (Налаштування → Звук)', 'Відкриття рангу: повноекранна анімація, коли завершуєш калібрування', 'Власні анімовані 3D-рамки в сезонному пропуску, анімований фон сезону, а «Знайти матч» тепер угорі сторінки «Грати»', 'Вибір мови — тепер випадаючий список'],
    ru: ['Кланы: создай клан со своим тегом, приглашай друзей, поднимайся в рейтинге кланов и вызывай другие кланы на клан-вары', 'Сезонный пропуск: 30 уровней, бесплатная и премиум-ветка, ежедневные и еженедельные задания и серии входов', 'Новая косметика: наклейки на профиль, цвета ника и эффекты победы', 'Статистика как на FACEIT в профиле: график ELO за 30 дней, тренд K/D, форма, лучшие карты и сравнение с друзьями', 'Калибровка: в первых 5 играх каждого режима победа даёт втрое больше ELO, поражение — вдвое; ранг и ELO появляются после 5-й игры', 'Вечер 5×5: записывайся на 5×5 по расписанию; 2×2 открыт всегда', 'Очередь: примерное время поиска и кнопка «Позвать друзей»; уведомления, когда друг онлайн или ищет матч', 'Оценивай каждый матч, смотри, как сбалансированы команды, и следи за статусом проверки стаффом', 'Свой звук и музыка: новые эффекты на каждое действие, сигнал «матч найден», слышный поверх игры, стингеры победы и поражения и темы сезонов (Настройки → Звук)', 'Открытие ранга: полноэкранная анимация, когда завершаешь калибровку', 'Свои анимированные 3D-рамки в сезонном пропуске, анимированный фон сезона, а «Найти матч» теперь вверху страницы «Играть»', 'Выбор языка — теперь выпадающий список'],
  } },
  { ui: 33, items: {
    en: ['New role badges next to nicknames: Owner, Admin, Staff and Verified', 'New Konzte Premium logo and crowns'],
    uk: ['Нові значки ролей біля ніку: Власник, Адмін, Стафф і Верифікований', 'Новий логотип Konzte Premium і корони'],
    ru: ['Новые значки ролей у ника: Владелец, Админ, Стафф и Верифицированный', 'Новый логотип Konzte Premium и короны'],
  } },
  { ui: 32, items: {
    en: ['Konzte Premium and Premium+: change your nickname for free up to 3 times every 30 days (in your profile or the shop)'],
    uk: ['Konzte Premium і Premium+: змінюй нік безкоштовно до 3 разів за 30 днів (у профілі або в магазині)'],
    ru: ['Konzte Premium и Premium+: меняй ник бесплатно до 3 раз за 30 дней (в профиле или в магазине)'],
  } },
  { ui: 31, items: {
    en: ['4 new animated Konzte banners in the shop: Relic, Chains, Obsidian and Violet'],
    uk: ['4 нові анімовані банери Konzte в магазині: Relic, Chains, Obsidian і Violet'],
    ru: ['4 новых анимированных баннера Konzte в магазине: Relic, Chains, Obsidian и Violet'],
  } },
  { ui: 30, items: {
    en: ['New in Settings: Stream / API — live stat overlays for OBS (last results, ELO, session, current match, all-in-one card) that refresh every 5 seconds, plus an open JSON API. Konzte Premium'],
    uk: ['Нове в налаштуваннях: Стрім / API — живі оверлеї для OBS (останні результати, ELO, сесія, поточний матч, картка) з оновленням кожні 5 секунд і відкритий JSON API. Для Konzte Premium'],
    ru: ['Новое в настройках: Стрим / API — живые оверлеи для OBS (последние результаты, ELO, сессия, текущий матч, карточка) с обновлением каждые 5 секунд и открытый JSON API. Для Konzte Premium'],
  } },
  { ui: 29, items: {
    en: ['Season 1 rewards now come with new animated emblems — they can only be earned in the season', 'The previous Season 1 skull emblems are now available in the shop'],
    uk: ['Нагороди Сезону 1 тепер — нові анімовані емблеми, їх можна лише заробити в сезоні', 'Колишні емблеми-черепи Сезону 1 тепер продаються в магазині'],
    ru: ['Награды Сезона 1 теперь — новые анимированные эмблемы, их можно только заработать в сезоне', 'Прежние эмблемы-черепа Сезона 1 теперь продаются в магазине'],
  } },
  { ui: 28, items: {
    en: ['Settings redesigned: compact menu with sections, new Gameplay and Account tabs', 'Default mode (5×5 / 2×2), result reminder after 25 minutes and streamer mode that blurs game IDs', 'Premium page now lists everything it includes: custom GIF avatar, profile background, emblems, animated banners', 'Long nicknames no longer break the friends list', 'This window: see what changed after every update'],
    uk: ['Нові налаштування: компактне меню з розділами, нові вкладки «Гра» й «Акаунт»', 'Режим за замовчуванням (5×5 / 2×2), нагадування про результат через 25 хв і режим стрімера, що розмиває game ID', 'На сторінці Premium тепер усе, що він дає: свій GIF-аватар, фон профілю, емблеми, анімовані банери', 'Довгі ніки більше не ламають список друзів', 'Це вікно: що змінилося після кожного оновлення'],
    ru: ['Новые настройки: компактное меню с разделами, новые вкладки «Игра» и «Аккаунт»', 'Режим по умолчанию (5×5 / 2×2), напоминание о результате через 25 мин и режим стримера, размывающий game ID', 'На странице Premium теперь всё, что он даёт: свой GIF-аватар, фон профиля, эмблемы, анимированные баннеры', 'Длинные ники больше не ломают список друзей', 'Это окно: что изменилось после каждого обновления'],
  } },
  { ui: 24, items: {
    en: ['Season 1 warm-up: progress to 200 players, rewards for everyone on the way, Founder emblem and recruiter race', 'Staff tools: player files, warnings, mutes, online view and announcements', 'Shop: buy any item for KF or dollars, nickname change'],
    uk: ['Прогрів до Сезону 1: шкала до 200 гравців, нагороди всім по дорозі, емблема «Засновник» і гонка рекрутерів', 'Інструменти стаффу: досьє гравців, попередження, мути, онлайн і оголошення', 'Магазин: будь-який предмет за KF або долари, зміна ніку'],
    ru: ['Прогрев к Сезону 1: шкала до 200 игроков, награды всем по пути, эмблема «Основатель» и гонка рекрутёров', 'Инструменты стаффа: досье игроков, предупреждения, муты, онлайн и объявления', 'Магазин: любой предмет за KF или доллары, смена ника'],
  } },
];
if (typeof module !== 'undefined') module.exports = { CHANGELOG };

(() => {
  const L = {
    en: {
      so3I: 'Invites', so3D_so3i: 'Referral centre and who can invite you', so3IvH: 'Invite friends', so3IvHd: 'Send a friend your code or link. Players who join with it are counted below.', so3IvCode: 'Your code', so3IvLink: 'Your link', so3IvInv: 'Invited', so3IvPlayed: 'Played {m} matches', so3IvNot: 'Not there yet', so3IvProg: '{n} of {m} invited already played {k} matches', so3IvRew: 'Invite rewards', so3IvWho: 'Who can invite you', so3IvWhoH: 'The rule applies on arrival: invites and requests that do not fit simply do not come — no notification, no sound.', so3IvParty: 'Party invites', so3IvFr: 'Friend requests', so3IvAll: 'Everyone', so3IvFriends: 'Friends', so3IvNone: 'Nobody', so3IvPa_all: 'Any player can invite you to a party.', so3IvPa_friends: 'Only your friends can invite you to a party.', so3IvPa_none: 'Nobody can invite you to a party.', so3IvFr_on: 'Any player can send you a friend request.', so3IvFr_off: 'Nobody can send you a friend request.', so3IvHow: 'How you earn', so3IvEarned: 'Earned', so3G_master: 'Main switches', so3G_social: 'Friends and invites', so3Always: 'Always on', so3AlwaysH: 'These events always show inside Konzte — only their sound and Windows notifications can be turned off.', so3Al_ready: 'Match found — accept window', so3Al_party: 'Party invite — card in the corner', so3Al_fr: 'Friend request — pop-up', so3Al_clan: 'Clan invite — pop-up', so3Al_sup: 'Support reply — counter on Support', so3Al_ban: 'Ban — banner on Play', so3Kinds: 'Event types on', so3SndVol: 'Konzte volume', so3SndVolH: 'Only the app sounds — the system and other apps are not affected.', so3Ev_match: 'Match found', so3Ev_search: 'Match search', so3Ev_inv: 'Invites and requests', so3Ev_tone: 'Other alerts', so3EvD_match: 'When the accept window appears. Can sound even with interface sounds off.', so3EvD_search: 'When you or your party leader start the search, and a quiet loop while searching. Part of interface sounds.', so3EvD_inv: 'A party invite and a friend request each have their own sound.', so3EvD_tone: 'Calls to the queue from friends and other alerts without their own sound. Pick the tone.', so3Works: 'Works now', so3Off: 'Off', so3Snd_match_found: 'Match found', so3Snd_queue_start: 'Search start', so3Snd_search_loop: 'Search loop', so3Snd_party_invite: 'Party invite', so3Snd_notify: 'Friend request', so3Tone_classic: 'Classic', so3Tone_soft: 'Soft', so3Tone_alert: 'Alert', so3SndMusic: 'Music', so3SndUi: 'Interface', so3Reset: 'Default sounds', so3ResetH: 'Volume 80, music 50, all sounds on, the classic tone.', so3ResetB: 'Restore default sounds', so3ResetQ: 'Restore default sound settings?', so3Play: 'Play', so3OvStyle: 'Style', so3OvData: 'Data', so3OvLang: 'Language', so3OvPrev: 'Preview', so3OvSrc: 'Source width', so3OvBgN: 'Background is only an example — in OBS the page is transparent or dark, as chosen.', so3OvObs: 'Add to OBS', so3OvPriv: 'Private address', so3OvShow: 'Show', so3OvHide: 'Hide', so3OvRegen: 'Change address', so3OvWarn: 'Do not show this address on stream — it contains your private key.', so3OvHow: 'How to add it to OBS', so3OvSel: 'Settings apply to all widgets', so3Search: 'Search settings', so3NoHits: 'Nothing found', so3On: '{n} of {m} on', so3More: 'More',
      so3D_general: 'Language, startup and tray', so3D_notif: 'What to notify you about and how', so3D_ksnd: 'Interface sounds, music and test playback',
      so3D_game: 'Matches, streamer mode and Discord', so3D_look: 'Interface style, accent and effects', so3D_privacy: 'Who can invite you and see you online',
      so3D_account: 'Profile, nickname, Game ID and your data', so3D_kgt: 'Two-factor login and devices', so3D_stream: 'OBS overlays from your data',
      so3D_adv: 'Updates, cache and hardware acceleration', so3D_ppt: 'Konzte partner program',
      so3G_lang: 'Language', so3G_start: 'Startup and tray', so3G_sound: 'Sound', so3G_desk: 'Desktop notifications', so3G_match: 'Matches',
      so3G_stream: 'Streaming and Discord', so3G_help: 'Help', so3G_color: 'Colour and scale', so3G_fx: 'Effects', so3G_who: 'Who can reach you', so3G_vis: 'Visibility',
      so3G_acc: 'Nickname and Premium', so3G_links: 'Invites and support', so3G_out: 'Session', so3G_app: 'Application',
      so3Prem: 'Konzte Premium', so3PremNo: 'Subscription is not active', so3PremSee: 'View Premium', so3PremExt: 'Extend',
      so3Profile: 'Open profile', so3Copy: 'Copy', so3Copied: 'Copied', so3GameId: 'Game ID', so3Discord: 'Discord', so3NoPrem: 'No Premium',
      so3GameIdH: 'Your Combat Master ID — teammates use it to find you in the lobby.',
      so3Now: 'Now', so3SwOn: 'Switches on', so3Desk: 'Desktop notifications', so3Vol: 'Volume', so3OpenN: 'Open notifications', so3OnS: 'on', so3OffS: 'off',
      so3Look: 'How elements look', so3LookH: 'The preview follows your style and accent.', so3Lvl: 'Level {n}', so3Sel: 'Selected item', so3SelH: 'Active border and accent glow',
      so3Link: 'Link in text', so3Win: 'Win', so3Wait: 'Waiting', so3Loss: 'Loss', so3Find: 'Find match', so3Cancel: 'Cancel',
      so3Styles: 'Interface style', so3StylesH: 'Changes the whole app — only for you. Try any style for 30 seconds.', so3Owned: 'Yours', so3Cur: 'On',
      so3ToShop: 'Shop', so3ToInv: 'Inventory', so3Try: 'Try', so3Def: 'Konzte',
      so3App: 'About the app', so3Adv: 'Advanced', so3Docs: 'Documents', so3Terms: 'Terms', so3Priv: 'Privacy policy', so3Danger: 'Danger zone', so3DangerH: 'Sign out on this PC or request deletion of your account and data.', so3Del: 'Delete account', so3G_2fa: 'Login protection', so3G_dev: 'Devices and sessions', so3Ovl: 'Private overlay address', so3OvlH: 'OBS links contain a private key — manage it in Stream / API.',
      so3FrAll: 'All', so3FrOn: 'Online', so3FrReq: 'Requests', so3FrAdd: 'Add a friend', so3FrAddH: 'Search by nickname or Game ID',
      so3FrNone: 'No friends yet', so3FrNoneH: 'Find players by nickname — friends see each other online and can party up in one click.',
      so3FrNoneOn: 'Nobody is online right now', so3FrProfile: 'Profile', so3FrInv: 'Invite', so3FrRm: 'Remove',
      so3FrIncoming: 'Incoming requests', so3FrSent: 'Sent requests: {n}', so3FrResults: 'Search results', so3FrPriv: 'Privacy',
      so3FrPrivH: 'Who can invite you to a party and send friend requests — in settings.', so3FrPartyInv: 'Party invites',
      so3N: 'Notifications', so3NSub: 'Everything about your account and the project in one place.', so3NRead: 'Mark all as read', so3NSet: 'Notification settings',
      so3NAll: 'All', so3NUnread: 'Unread', so3NAct: 'Needs action', so3NType: 'Type', so3NTAll: 'All', so3NTnews: 'News', so3NTfriends: 'Friends',
      so3NTparty: 'Party', so3NTclan: 'Clan', so3NTsupport: 'Support', so3NEmpty: 'All quiet here', so3NEmptyH: 'New invites, friend requests, support replies and project news will appear here.',
      so3NSum: 'Summary', so3NFr: 'wants to be your friend', so3NPa: 'invites you to a party', so3NCl: 'Invite to clan {c}', so3NClBy: 'from {n}',
      so3NSup: 'Support replied', so3NSupN: '{n} new messages', so3NOpen: 'Open', so3NQuick: 'Quick settings', so3NNews: 'Konzte news',
    },
    uk: {
      so3I: 'Запрошення', so3D_so3i: 'Реферальний центр і хто може тебе запрошувати', so3IvH: 'Запроси друзів', so3IvHd: 'Надішли другу код або посилання. Гравці, які прийшли за ними, рахуються нижче.', so3IvCode: 'Твій код', so3IvLink: 'Твоє посилання', so3IvInv: 'Запрошено', so3IvPlayed: 'Зіграли {m} матчі', so3IvNot: 'Ще не дограли', so3IvProg: '{n} з {m} запрошених уже зіграли {k} матчі', so3IvRew: 'Нагороди за запрошення', so3IvWho: 'Хто може тебе запрошувати', so3IvWhoH: 'Правило діє на вході: запрошення чи запит, які не підходять, просто не приходять — без сповіщення і звуку.', so3IvParty: 'Запрошення в паті', so3IvFr: 'Запити в друзі', so3IvAll: 'Усі', so3IvFriends: 'Друзі', so3IvNone: 'Ніхто', so3IvPa_all: 'Покликати тебе в паті може будь-який гравець.', so3IvPa_friends: 'Покликати тебе в паті можуть лише друзі.', so3IvPa_none: 'Ніхто не може покликати тебе в паті.', so3IvFr_on: 'Надіслати тобі запит у друзі може будь-який гравець.', so3IvFr_off: 'Ніхто не може надіслати тобі запит у друзі.', so3IvHow: 'Як заробити', so3IvEarned: 'Зароблено', so3G_master: 'Головні перемикачі', so3G_social: 'Друзі й запрошення', so3Always: 'Завжди увімкнено', so3AlwaysH: 'Ці події завжди показуються всередині Konzte — вимкнути можна лише їхній звук і сповіщення Windows.', so3Al_ready: 'Матч знайдено — вікно підтвердження', so3Al_party: 'Запрошення в паті — картка в куті', so3Al_fr: 'Заявка в друзі — спливне вікно', so3Al_clan: 'Запрошення в клан — спливне вікно', so3Al_sup: 'Відповідь підтримки — лічильник', so3Al_ban: 'Бан — плашка на «Грати»', so3Kinds: 'Увімкнено видів подій', so3SndVol: 'Гучність Konzte', so3SndVolH: 'Лише звуки застосунку — система й інші програми не змінюються.', so3Ev_match: 'Матч знайдено', so3Ev_search: 'Пошук матчу', so3Ev_inv: 'Запрошення й заявки', so3Ev_tone: 'Інші сигнали', so3EvD_match: 'Коли зʼявляється вікно підтвердження. Може звучати навіть із вимкненими звуками інтерфейсу.', so3EvD_search: 'Коли ти або лідер паті запускаєте пошук, і тихий цикл під час пошуку. Частина звуків інтерфейсу.', so3EvD_inv: 'Запрошення в паті й заявка в друзі мають кожне свій звук.', so3EvD_tone: 'Заклики в чергу від друзів та інші сигнали без власного звуку. Обери тон.', so3Works: 'Працює зараз', so3Off: 'Вимкнено', so3Snd_match_found: 'Матч знайдено', so3Snd_queue_start: 'Старт пошуку', so3Snd_search_loop: 'Цикл пошуку', so3Snd_party_invite: 'Запрошення в паті', so3Snd_notify: 'Заявка в друзі', so3Tone_classic: 'Класичний', so3Tone_soft: 'Мʼякий', so3Tone_alert: 'Тривога', so3SndMusic: 'Музика', so3SndUi: 'Інтерфейс', so3Reset: 'Стандартні звуки', so3ResetH: 'Гучність 80, музика 50, усі звуки увімкнено, класичний тон.', so3ResetB: 'Повернути стандартні звуки', so3ResetQ: 'Повернути стандартні налаштування звуку?', so3Play: 'Програти', so3OvStyle: 'Стиль', so3OvData: 'Дані', so3OvLang: 'Мова', so3OvPrev: 'Превʼю', so3OvSrc: 'Ширина джерела', so3OvBgN: 'Фон — лише приклад: в OBS сторінка прозора або темна, як обереш.', so3OvObs: 'Додати в OBS', so3OvPriv: 'Приватна адреса', so3OvShow: 'Показати', so3OvHide: 'Сховати', so3OvRegen: 'Змінити адресу', so3OvWarn: 'Не показуй цю адресу в ефірі — у ній твій приватний ключ.', so3OvHow: 'Як додати в OBS', so3OvSel: 'Налаштування діють на всі віджети', so3Search: 'Пошук у налаштуваннях', so3NoHits: 'Нічого не знайдено', so3On: '{n} з {m} увімкнено', so3More: 'Ще',
      so3D_general: 'Мова, автозапуск і трей', so3D_notif: 'Про що й як тебе сповіщати', so3D_ksnd: 'Звуки інтерфейсу, музика й перевірка',
      so3D_game: 'Матчі, режим стрімера й Discord', so3D_look: 'Стиль інтерфейсу, акцент і ефекти', so3D_privacy: 'Хто може запрошувати й бачити тебе онлайн',
      so3D_account: 'Профіль, нік, Game ID і твої дані', so3D_kgt: 'Двофакторний вхід і пристрої', so3D_stream: 'Оверлеї для OBS з твоїх даних',
      so3D_adv: 'Оновлення, кеш і апаратне прискорення', so3D_ppt: 'Партнерська програма Konzte',
      so3G_lang: 'Мова', so3G_start: 'Запуск і трей', so3G_sound: 'Звук', so3G_desk: 'Сповіщення на робочому столі', so3G_match: 'Матчі',
      so3G_stream: 'Стрім і Discord', so3G_help: 'Довідка', so3G_color: 'Колір і масштаб', so3G_fx: 'Ефекти', so3G_who: 'Хто може до тебе звертатися', so3G_vis: 'Видимість',
      so3G_acc: 'Нік і Premium', so3G_links: 'Запрошення й підтримка', so3G_out: 'Сеанс', so3G_app: 'Застосунок',
      so3Prem: 'Konzte Premium', so3PremNo: 'Підписка не активна', so3PremSee: 'Переглянути Premium', so3PremExt: 'Продовжити',
      so3Profile: 'Відкрити профіль', so3Copy: 'Копіювати', so3Copied: 'Скопійовано', so3GameId: 'Game ID', so3Discord: 'Discord', so3NoPrem: 'Без Premium',
      so3GameIdH: 'Твій ID у Combat Master — за ним тіммейти знаходять тебе в лобі.',
      so3Now: 'Зараз', so3SwOn: 'Увімкнено перемикачів', so3Desk: 'Сповіщення на робочому столі', so3Vol: 'Гучність', so3OpenN: 'Відкрити сповіщення', so3OnS: 'увімк.', so3OffS: 'вимк.',
      so3Look: 'Так виглядають елементи', so3LookH: 'Превʼю підлаштовується під твій стиль і акцент.', so3Lvl: 'Рівень {n}', so3Sel: 'Вибраний елемент', so3SelH: 'Активна рамка й світіння акценту',
      so3Link: 'Посилання в тексті', so3Win: 'Перемога', so3Wait: 'Очікування', so3Loss: 'Поразка', so3Find: 'Знайти матч', so3Cancel: 'Скасувати',
      so3Styles: 'Стиль інтерфейсу', so3StylesH: 'Змінює весь застосунок — лише для тебе. Будь-який стиль можна приміряти на 30 секунд.', so3Owned: 'Твій', so3Cur: 'Увімкнено',
      so3ToShop: 'Магазин', so3ToInv: 'Інвентар', so3Try: 'Приміряти', so3Def: 'Konzte',
      so3App: 'Про застосунок', so3Adv: 'Додатково', so3Docs: 'Документи', so3Terms: 'Умови', so3Priv: 'Політика конфіденційності', so3Danger: 'Небезпечна зона', so3DangerH: 'Вийти на цьому ПК або подати запит на видалення акаунта й даних.', so3Del: 'Видалити акаунт', so3G_2fa: 'Захист входу', so3G_dev: 'Пристрої й сеанси', so3Ovl: 'Приватна адреса оверлея', so3OvlH: 'Посилання для OBS містять приватний ключ — керуй ним у «Стрім / API».',
      so3FrAll: 'Усі', so3FrOn: 'Онлайн', so3FrReq: 'Заявки', so3FrAdd: 'Додати друга', so3FrAddH: 'Пошук за ніком або Game ID',
      so3FrNone: 'Поки немає друзів', so3FrNoneH: 'Знайди гравців за ніком — друзі бачать одне одного онлайн і збирають паті в один клік.',
      so3FrNoneOn: 'Зараз ніхто не онлайн', so3FrProfile: 'Профіль', so3FrInv: 'Запросити', so3FrRm: 'Видалити',
      so3FrIncoming: 'Вхідні заявки', so3FrSent: 'Надіслано заявок: {n}', so3FrResults: 'Результати пошуку', so3FrPriv: 'Приватність',
      so3FrPrivH: 'Хто може кликати тебе в паті й надсилати заявки в друзі — у налаштуваннях.', so3FrPartyInv: 'Запрошення в паті',
      so3N: 'Сповіщення', so3NSub: 'Усі події твого акаунта й проєкту в одному місці.', so3NRead: 'Позначити все прочитаним', so3NSet: 'Налаштування сповіщень',
      so3NAll: 'Усі', so3NUnread: 'Непрочитані', so3NAct: 'Потребують дії', so3NType: 'Тип', so3NTAll: 'Усі', so3NTnews: 'Новини', so3NTfriends: 'Друзі',
      so3NTparty: 'Паті', so3NTclan: 'Клан', so3NTsupport: 'Підтримка', so3NEmpty: 'Тут поки тихо', so3NEmptyH: 'Нові запрошення, заявки в друзі, відповіді підтримки й новини проєкту зʼявляться тут.',
      so3NSum: 'Зведення', so3NFr: 'хоче додати тебе в друзі', so3NPa: 'кличе тебе в паті', so3NCl: 'Запрошення в клан {c}', so3NClBy: 'від {n}',
      so3NSup: 'Підтримка відповіла', so3NSupN: 'Нових повідомлень: {n}', so3NOpen: 'Відкрити', so3NQuick: 'Швидкі налаштування', so3NNews: 'Новини Konzte',
    },
    ru: {
      so3I: 'Приглашения', so3D_so3i: 'Реферальный центр и кто может тебя приглашать', so3IvH: 'Пригласи друзей', so3IvHd: 'Отправь другу код или ссылку. Игроки, которые пришли по ним, считаются ниже.', so3IvCode: 'Твой код', so3IvLink: 'Твоя ссылка', so3IvInv: 'Приглашено', so3IvPlayed: 'Сыграли {m} матча', so3IvNot: 'Ещё не доиграли', so3IvProg: '{n} из {m} приглашённых уже сыграли {k} матча', so3IvRew: 'Награды за приглашения', so3IvWho: 'Кто может тебя приглашать', so3IvWhoH: 'Правило действует на входе: приглашения и запросы, которые не подходят, просто не приходят — без уведомления и звука.', so3IvParty: 'Приглашения в пати', so3IvFr: 'Запросы в друзья', so3IvAll: 'Все', so3IvFriends: 'Друзья', so3IvNone: 'Никто', so3IvPa_all: 'Позвать тебя в пати может любой игрок.', so3IvPa_friends: 'Позвать тебя в пати могут только друзья.', so3IvPa_none: 'Никто не может позвать тебя в пати.', so3IvFr_on: 'Отправить тебе запрос в друзья может любой игрок.', so3IvFr_off: 'Никто не может отправить тебе запрос в друзья.', so3IvHow: 'Как заработать', so3IvEarned: 'Заработано', so3G_master: 'Главные переключатели', so3G_social: 'Друзья и приглашения', so3Always: 'Всегда включено', so3AlwaysH: 'Эти события всегда показываются внутри Konzte — выключить можно только их звук и уведомления Windows.', so3Al_ready: 'Матч найден — окно подтверждения', so3Al_party: 'Приглашение в пати — карточка в углу', so3Al_fr: 'Заявка в друзья — всплывающее окно', so3Al_clan: 'Приглашение в клан — всплывающее окно', so3Al_sup: 'Ответ поддержки — счётчик', so3Al_ban: 'Бан — плашка на «Играть»', so3Kinds: 'Включено видов событий', so3SndVol: 'Громкость Konzte', so3SndVolH: 'Только звуки приложения — система и другие программы не меняются.', so3Ev_match: 'Матч найден', so3Ev_search: 'Поиск матча', so3Ev_inv: 'Приглашения и заявки', so3Ev_tone: 'Другие сигналы', so3EvD_match: 'Когда появляется окно подтверждения. Может звучать даже с выключенными звуками интерфейса.', so3EvD_search: 'Когда ты или лидер пати запускаете поиск, и тихий цикл во время поиска. Часть звуков интерфейса.', so3EvD_inv: 'У приглашения в пати и заявки в друзья — свой звук.', so3EvD_tone: 'Призывы в очередь от друзей и другие сигналы без своего звука. Выбери тон.', so3Works: 'Работает сейчас', so3Off: 'Выключено', so3Snd_match_found: 'Матч найден', so3Snd_queue_start: 'Старт поиска', so3Snd_search_loop: 'Цикл поиска', so3Snd_party_invite: 'Приглашение в пати', so3Snd_notify: 'Заявка в друзья', so3Tone_classic: 'Классический', so3Tone_soft: 'Мягкий', so3Tone_alert: 'Тревога', so3SndMusic: 'Музыка', so3SndUi: 'Интерфейс', so3Reset: 'Стандартные звуки', so3ResetH: 'Громкость 80, музыка 50, все звуки включены, классический тон.', so3ResetB: 'Вернуть стандартные звуки', so3ResetQ: 'Вернуть стандартные настройки звука?', so3Play: 'Проиграть', so3OvStyle: 'Стиль', so3OvData: 'Данные', so3OvLang: 'Язык', so3OvPrev: 'Превью', so3OvSrc: 'Ширина источника', so3OvBgN: 'Фон — только пример: в OBS страница прозрачная или тёмная, как выберешь.', so3OvObs: 'Добавить в OBS', so3OvPriv: 'Приватный адрес', so3OvShow: 'Показать', so3OvHide: 'Скрыть', so3OvRegen: 'Сменить адрес', so3OvWarn: 'Не показывай этот адрес в эфире — в нём твой приватный ключ.', so3OvHow: 'Как добавить в OBS', so3OvSel: 'Настройки действуют на все виджеты', so3Search: 'Поиск по настройкам', so3NoHits: 'Ничего не найдено', so3On: '{n} из {m} включено', so3More: 'Ещё',
      so3D_general: 'Язык, автозапуск и трей', so3D_notif: 'О чём и как тебя уведомлять', so3D_ksnd: 'Звуки интерфейса, музыка и проверка',
      so3D_game: 'Матчи, режим стримера и Discord', so3D_look: 'Стиль интерфейса, акцент и эффекты', so3D_privacy: 'Кто может приглашать и видеть тебя онлайн',
      so3D_account: 'Профиль, ник, Game ID и твои данные', so3D_kgt: 'Двухфакторный вход и устройства', so3D_stream: 'Оверлеи для OBS из твоих данных',
      so3D_adv: 'Обновления, кэш и аппаратное ускорение', so3D_ppt: 'Партнёрская программа Konzte',
      so3G_lang: 'Язык', so3G_start: 'Запуск и трей', so3G_sound: 'Звук', so3G_desk: 'Уведомления на рабочем столе', so3G_match: 'Матчи',
      so3G_stream: 'Стрим и Discord', so3G_help: 'Справка', so3G_color: 'Цвет и масштаб', so3G_fx: 'Эффекты', so3G_who: 'Кто может к тебе обращаться', so3G_vis: 'Видимость',
      so3G_acc: 'Ник и Premium', so3G_links: 'Приглашения и поддержка', so3G_out: 'Сеанс', so3G_app: 'Приложение',
      so3Prem: 'Konzte Premium', so3PremNo: 'Подписка не активна', so3PremSee: 'Посмотреть Premium', so3PremExt: 'Продлить',
      so3Profile: 'Открыть профиль', so3Copy: 'Копировать', so3Copied: 'Скопировано', so3GameId: 'Game ID', so3Discord: 'Discord', so3NoPrem: 'Без Premium',
      so3GameIdH: 'Твой ID в Combat Master — по нему тиммейты находят тебя в лобби.',
      so3Now: 'Сейчас', so3SwOn: 'Включено переключателей', so3Desk: 'Уведомления на рабочем столе', so3Vol: 'Громкость', so3OpenN: 'Открыть уведомления', so3OnS: 'вкл.', so3OffS: 'выкл.',
      so3Look: 'Так выглядят элементы', so3LookH: 'Превью подстраивается под твой стиль и акцент.', so3Lvl: 'Уровень {n}', so3Sel: 'Выбранный элемент', so3SelH: 'Активная рамка и свечение акцента',
      so3Link: 'Ссылка в тексте', so3Win: 'Победа', so3Wait: 'Ожидание', so3Loss: 'Поражение', so3Find: 'Найти матч', so3Cancel: 'Отмена',
      so3Styles: 'Стиль интерфейса', so3StylesH: 'Меняет всё приложение — только для тебя. Любой стиль можно примерить на 30 секунд.', so3Owned: 'Твой', so3Cur: 'Включён',
      so3ToShop: 'Магазин', so3ToInv: 'Инвентарь', so3Try: 'Примерить', so3Def: 'Konzte',
      so3App: 'О приложении', so3Adv: 'Дополнительно', so3Docs: 'Документы', so3Terms: 'Условия', so3Priv: 'Политика конфиденциальности', so3Danger: 'Опасная зона', so3DangerH: 'Выйти на этом ПК или подать запрос на удаление аккаунта и данных.', so3Del: 'Удалить аккаунт', so3G_2fa: 'Защита входа', so3G_dev: 'Устройства и сеансы', so3Ovl: 'Приватный адрес оверлея', so3OvlH: 'Ссылки для OBS содержат приватный ключ — управляй им в «Стрим / API».',
      so3FrAll: 'Все', so3FrOn: 'Онлайн', so3FrReq: 'Заявки', so3FrAdd: 'Добавить друга', so3FrAddH: 'Поиск по нику или Game ID',
      so3FrNone: 'Пока нет друзей', so3FrNoneH: 'Найди игроков по нику — друзья видят друг друга онлайн и собирают пати в один клик.',
      so3FrNoneOn: 'Сейчас никого нет онлайн', so3FrProfile: 'Профиль', so3FrInv: 'Пригласить', so3FrRm: 'Удалить',
      so3FrIncoming: 'Входящие заявки', so3FrSent: 'Отправлено заявок: {n}', so3FrResults: 'Результаты поиска', so3FrPriv: 'Приватность',
      so3FrPrivH: 'Кто может звать тебя в пати и отправлять заявки в друзья — в настройках.', so3FrPartyInv: 'Приглашения в пати',
      so3N: 'Уведомления', so3NSub: 'Все события твоего аккаунта и проекта в одном месте.', so3NRead: 'Отметить всё прочитанным', so3NSet: 'Настройки уведомлений',
      so3NAll: 'Все', so3NUnread: 'Непрочитанные', so3NAct: 'Требуют действия', so3NType: 'Тип', so3NTAll: 'Все', so3NTnews: 'Новости', so3NTfriends: 'Друзья',
      so3NTparty: 'Пати', so3NTclan: 'Клан', so3NTsupport: 'Поддержка', so3NEmpty: 'Здесь пока тихо', so3NEmptyH: 'Новые приглашения, заявки в друзья, ответы поддержки и новости проекта появятся здесь.',
      so3NSum: 'Сводка', so3NFr: 'хочет добавить тебя в друзья', so3NPa: 'зовёт тебя в пати', so3NCl: 'Приглашение в клан {c}', so3NClBy: 'от {n}',
      so3NSup: 'Поддержка ответила', so3NSupN: 'Новых сообщений: {n}', so3NOpen: 'Открыть', so3NQuick: 'Быстрые настройки', so3NNews: 'Новости Konzte',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k], L[k]);
  const tr = (k, v) => { let s = (I18N[LANG] || I18N.en)[k] ?? I18N.en[k] ?? k; if (v) s = s.replace(/\{(\w+)\}/g, (m, x) => v[x] ?? m); return s; };
  const ON = () => !!window.KZ_V3?.();
  const view = () => document.getElementById('view');
  const mark = on => view()?.classList.toggle('so3-on', !!on);
  const sv = d => `<svg viewBox="0 0 24 24">${d}</svg>`;
  const IC = {
    search: sv('<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>'), chev: sv('<path d="M9 6l6 6-6 6"/>'), copy: sv('<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>'),
    lock: sv('<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>'), check: sv('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    crown: sv('<path d="M4 17.5h16M5 15l-1.5-8 5 4 3.5-6 3.5 6 5-4L19 15z"/>'), arrow: sv('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    bell: sv('<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15zM10 20.5a2 2 0 0 0 4 0"/>'), gear: sv('<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>'),
    friends: sv('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.7-3.6 3.3-5.5 6.5-5.5s5.8 1.9 6.5 5.5"/><path d="M15.5 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c1.8.8 3 2.6 3.5 5.2"/>'),
    addf: sv('<circle cx="9.5" cy="8" r="3.5"/><path d="M3 19.5c.6-3.4 3.3-5.5 6.5-5.5s5.9 2.1 6.5 5.5M18.5 8v6M15.5 11h6"/>'),
    news: sv('<path d="M4 5h13v14H6a2 2 0 0 1-2-2z"/><path d="M17 9h3v8a2 2 0 0 1-2 2"/><path d="M7 9h7M7 12.5h7M7 16h4"/>'),
    party: sv('<circle cx="7" cy="9" r="2.8"/><circle cx="17" cy="9" r="2.8"/><path d="M2 19c.5-2.8 2.4-4.4 5-4.4s4.5 1.6 5 4.4M12 19c.5-2.8 2.4-4.4 5-4.4s4.5 1.6 5 4.4"/>'),
    clan: sv('<path d="M5 21V4.5M5 5h11l-2 4 2 4H5"/>'), support: sv('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.5"/><path d="M6 6l3.5 3.5M18 6l-3.5 3.5M6 18l3.5-3.5M18 18l-3.5-3.5"/>'),
    x: sv('<path d="M6 6l12 12M18 6L6 18"/>'), user: sv('<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c.8-3.8 3.8-6 7.5-6s6.7 2.2 7.5 6"/>'), eye: sv('<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>'),
    shield: sv('<path d="M12 3l7.5 3v5.5c0 4.7-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.8-7.5-9.5V6z"/>'), chk2: sv('<path d="M3 12.5l4 4L15 8.5M10.5 15l1.5 1.5 9-9"/>'),
  };
  const copy = s => { try { navigator.clipboard.writeText(String(s)); toast(tr('so3Copied')); } catch {} };
  const me2 = () => (S.me && (S.me.r2v2 || S.me.r5v5)) || null;

  const GROUPS = {
    general: [['so3G_lang', ['language']], ['so3G_start', ['sStartup', 'sStartHidden', 'sCloseTray', 'sTray']]],
    notif: [['so3G_master', ['sDesktop', 'sound']], ['so3G_match', ['sRaise', 'sFlash']], ['so3G_social', ['sSoundInv', 'fnSetOnline', 'fnSetQueue', 'fnSetSound']], ['so3G_sound', ['sTone', 'sVolume', 'sUiSounds']]],
    game: [['so3G_match', ['sDefMode', 'sRemind']], ['so3G_stream', ['sStreamer', 'sPresence']], ['so3G_help', ['sRules']]],
    look: [['so3G_color', ['sAccent', 'sZoom']], ['so3G_fx', ['sMotion', 'sCompact', 'sGlow', 'sSeason', 'sAnimBg']]],
    privacy: [['so3G_who', ['sInvites', 'sFriendReq']], ['so3G_vis', ['sInvisible', 'sShowDiscord']]],
    account: [['so3G_acc', ['sNick', 'sPremium']], ['so3G_links', ['sInvite', 'sSupport']], ['so3G_out', ['logout']]],
    adv: [['so3G_app', ['sUpdates', 'sHw', 'sCache', 'server']]],
  };
  const IDX = [...Object.entries(GROUPS).flatMap(([tab, gs]) => gs.flatMap(([, ks]) => ks.map(k => [k, tab]))),
    ['sPremium', 'account'], ['sStreamer', 'game'], ['ovKey', 'stream'], ['ovMode', 'stream'], ['ovBg', 'stream'], ['ovLang', 'stream'],
    ['so3IvCode', 'so3i'], ['so3IvLink', 'so3i'], ['so3IvParty', 'so3i'], ['so3IvFr', 'so3i'], ['so3IvRew', 'so3i'], ['referrals', 'so3i']];
  const TABSEL = { ksnd: '[data-ksnd]', kgt: '[data-kgt]', ppt: '[data-ppt]', so3i: '[data-so3i]' };
  let hl = null;

  const curKey = nav => {
    const on = nav.querySelector('button.on');
    if (!on) return S.setTab;
    if (on.dataset.stt) return on.dataset.stt;
    return Object.keys(TABSEL).find(k => on.matches(TABSEL[k])) || 'x';
  };
  const rowLabel = r => r.querySelector(':scope > div:first-child > b')?.textContent.trim() || '';
  const swCount = el => { const s = [...el.querySelectorAll('.switch')]; return [s.filter(x => x.classList.contains('on')).length, s.length]; };

  function groupRows(panel, tab) {
    const rows = [...panel.querySelectorAll(':scope > .srow')];
    if (!rows.length) return;
    const gs = GROUPS[tab] || [['so3More', []]];
    const lab = {}; gs.forEach(([g, ks], i) => ks.forEach(k => { lab[t(k)] = i; }));
    const box = document.createElement('div'); box.className = 'so3-groups';
    rows[0].before(box);
    const cards = gs.map(([g]) => { const c = document.createElement('div'); c.className = 'so3-grp'; c.innerHTML = `<div class="so3-gh"><span class="p3-h">${tr(g)}</span><span class="so3-cnt"></span></div>`; return c; });
    let cur = 0;
    for (const r of rows) {
      const i = lab[rowLabel(r)];
      if (i != null) cur = i;
      cards[cur].appendChild(r);
    }
    for (const c of cards) {
      if (!c.querySelector('.srow')) continue;
      const [n, m] = swCount(c);
      if (m > 1) c.querySelector('.so3-cnt').textContent = tr('so3On', { n, m });
      box.appendChild(c);
    }
  }

  function accHead() {
    const m = S.me, r = me2(), lvl = r ? levelOf(r.elo) : 0, p = m.premium;
    return `<div class="so3-acc">${avaF(m, 'lg')}
      <div class="grow so3-accm"><b class="so3-accn">${nickHtml(m)}</b>
        <div class="so3-chips">
          ${m.gameId ? `<button class="so3-chip" data-so3copy="${esc(m.gameId)}"><em>${tr('so3GameId')}</em><b class="gid">${esc(m.gameId)}</b>${IC.copy}</button>` : ''}
          <span class="so3-chip"><em>${tr('so3Discord')}</em><b>${esc(m.name || '—')}</b></span>
          ${r ? `<span class="so3-chip"><img src="${lvlIc(r, lvl)}" alt=""><b class="num">${isCal(r) ? calTxt(r) : r.elo + ' ELO'}</b></span>` : ''}
          <span class="so3-chip ${p ? 'gold' : ''}">${IC.crown}<b>${p ? (p.tier === 'plus' ? 'Premium+' : 'Premium') : tr('so3NoPrem')}</b></span>
        </div></div>
      <button class="btn ghost so3-ub" data-so3go="profile">${tr('so3Profile')}${IC.arrow}</button></div>`;
  }
  function gidCard() {
    const id = S.me.gameId; if (!id) return '';
    return `<div class="so3-grp so3-gid"><div class="so3-gh"><span class="p3-h">${tr('so3GameId')}</span></div>
      <div class="so3-gidr"><div class="grow"><b class="num gid">${esc(id)}</b><span class="mute">${tr('so3GameIdH')}</span></div>
      <button class="btn ghost sm" data-so3copy="${esc(id)}">${IC.copy}${tr('so3Copy')}</button></div></div>`;
  }
  function stylesCard() {
    if (typeof KZ_THEMES !== 'object') return '';
    const p = S.myProfile || {}, own = p.available?.themes || [];
    const cur = (typeof kzThPrev !== 'undefined' && kzThPrev) ? '' : S.myProfile ? p.cosmetics?.theme || '' : (typeof kzThCur === 'string' ? kzThCur : '');
    const tile = (id, name, img, sw, desc, st) => `<div class="so3-th ${st === 'cur' ? 'on' : ''}">
      <div class="so3-thi">${img ? `<img src="${img}" alt="" loading="lazy">` : `<div class="so3-thd">KONZTE</div>`}${st === 'cur' ? `<i class="so3-thok">${IC.check}</i>` : ''}</div>
      <div class="so3-thb"><b>${esc(name)}</b><span class="so3-sw">${sw.map(c => `<i style="background:${c}"></i>`).join('')}</span></div>
      <span class="mute so3-thx">${esc(desc)}</span>
      <div class="so3-tha">${st === 'cur' ? `<span class="tag">${tr('so3Cur')}</span>` : st === 'own' ? `<span class="tag green">${tr('so3Owned')}</span>` : ''}
        ${id && st !== 'cur' ? `<button class="so3-try" data-thtry="${esc(id)}">${IC.eye}${tr('so3Try')}</button>` : ''}</div></div>`;
    return `<div class="so3-grp so3-styles"><div class="so3-gh"><span class="p3-h">${tr('so3Styles')}</span>
        <span class="row" style="gap:6px"><button class="btn ghost sm" data-so3go="inventory">${tr('so3ToInv')}</button><button class="btn sm" data-so3go="shop">${tr('so3ToShop')}</button></span></div>
      <p class="mute so3-gp">${tr('so3StylesH')} ${esc(kzThemeT('usdOnly'))}</p>
      <div class="so3-ths">${tile('', tr('so3Def'), '', ['#16151b', '#969df9', '#f4c542'], kzThemeT('default'), cur ? 'own' : 'cur')}
        ${KZ_THEME_IDS.map(id => tile(id, kzThemeName(id), `assets/themes/${id}.jpg`, KZ_THEMES[id].sw, kzThemeT(id), cur === id ? 'cur' : own.includes(id) ? 'own' : '')).join('')}</div></div>`;
  }
  function premCard() {
    const p = S.me.premium;
    const perk = (k, plus) => `<li class="${p && (!plus || p.tier === 'plus') ? 'ok' : ''}">${p && (!plus || p.tier === 'plus') ? IC.check : IC.lock}${t(k)}${plus ? ' · Plus' : ''}</li>`;
    return `<div class="card so3-side so3-prem"><div class="so3-ph"><img src="assets/crown-${p?.tier === 'plus' ? 'plus' : 'premium'}.png" alt=""><div><b>${tr('so3Prem')}</b>
      <span class="mute">${p ? `${p.tier === 'plus' ? 'Premium+' : 'Premium'} · ${p.boost ? t('boostPrem') : t('activeUntil', { d: fmtDate(p.until) })}` : tr('so3PremNo')}</span></div></div>
      <ul class="so3-perks">${perk('f_avatar')}${perk('f_pbg')}${perk('f_color', 1)}${perk('f_anim', 1)}</ul>
      <button class="btn ${p ? 'ghost' : 'gold'} so3-wide" data-so3go="premium">${p ? tr('so3PremExt') : tr('so3PremSee')}</button>
      <p class="mute so3-note">${t('sPremiumNo')}</p></div>`;
  }
  function nowCard(panel) {
    const [n, m] = swCount(panel), c = S.cfg || {};
    const r = (l, v) => `<div class="so3-kv"><span>${l}</span><b class="num">${v}</b></div>`;
    return `<div class="card so3-side"><span class="p3-h">${tr('so3Now')}</span>
      ${r(tr('so3Kinds'), `${n} / ${m}`)}${r(tr('so3Desk'), c.notify !== false ? tr('so3OnS') : tr('so3OffS'))}${r(t('sound'), S.sound ? tr('so3OnS') : tr('so3OffS'))}${r(tr('so3Vol'), (c.volume ?? 70) + '%')}
      <button class="btn ghost so3-wide" data-so3go="notifs">${tr('so3OpenN')}${IC.arrow}</button></div>`;
  }
  function lookCard() {
    return `<div class="card so3-side so3-look"><span class="p3-h">${tr('so3Look')}</span>
      <div class="row" style="gap:8px"><button class="btn" tabindex="-1">${tr('so3Find')}</button><button class="btn ghost" tabindex="-1">${tr('so3Cancel')}</button></div>
      <div class="so3-lv"><span>${tr('so3Lvl', { n: 7 })}</span><b class="num">62%</b></div><div class="so3-bar"><i style="width:62%"></i></div>
      <div class="row" style="justify-content:space-between"><div class="seg sm"><button class="on" tabindex="-1">2 × 2</button><button tabindex="-1">1 × 1</button></div><span class="switch on"></span></div>
      <div class="so3-selbox"><b>${tr('so3Sel')}</b><span class="mute">${tr('so3SelH')}</span></div>
      <span class="so3-link">${tr('so3Link')} ${IC.arrow}</span>
      <div class="row" style="gap:6px;flex-wrap:wrap"><span class="tag green">${tr('so3Win')}</span><span class="tag gold">${tr('so3Wait')}</span><span class="tag red">${tr('so3Loss')}</span></div>
      <p class="mute so3-note">${tr('so3LookH')}</p></div>`;
  }
  function appCard() {
    const i = S.appInfo || {};
    return `<div class="card so3-side"><span class="p3-h">${tr('so3App')}</span>
      <div class="so3-kv"><span>Konzte</span><b class="num">${esc(i.version || '—')}</b></div>
      ${S.build ? `<div class="so3-kv"><span>build</span><b class="num">${S.build}</b></div>` : ''}
      <div class="so3-kv"><span>${i.tauri ? 'Tauri' : 'Electron'}</span><b class="num">${esc(i.tauri || i.electron || '—')}</b></div>
      ${S.setTab !== 'adv' ? `<button class="btn ghost so3-wide" data-so3tab="adv">${tr('so3Adv')}${IC.arrow}</button>` : ''}</div>`;
  }

  function secLayout(panel) {
    const sec = panel.querySelector('.kg-sec'); if (!sec || sec.querySelector('.so3-grp')) return;
    const rows = [...sec.querySelectorAll(':scope > .srow')];
    if (rows.length) {
      const g = document.createElement('div'); g.className = 'so3-grp'; g.innerHTML = `<div class="so3-gh"><span class="p3-h">${tr('so3G_2fa')}</span><span class="so3-cnt"></span></div>`;
      rows[0].before(g); rows.forEach(r => g.appendChild(r));
      g.insertAdjacentHTML('beforeend', `<div class="srow"><div><b>${tr('so3Ovl')}</b><span>${tr('so3OvlH')}</span></div><div><button class="btn ghost sm" data-so3tab="stream">${t('sStream')}</button></div></div>`);
    }
    const h = sec.querySelector(':scope > .kg-h4');
    if (h) {
      const g = document.createElement('div'); g.className = 'so3-grp so3-devs'; h.before(g);
      g.innerHTML = `<div class="so3-gh"><span class="p3-h">${tr('so3G_dev')}</span></div>`;
      let n = h.nextSibling; h.remove();
      while (n) { const nx = n.nextSibling; g.appendChild(n); n = nx; }
    }
  }
  function docsCard() {
    return `<div class="card so3-side"><span class="p3-h">${tr('so3Docs')}</span>
      <div class="so3-docs"><button class="so3-chip" data-so3url="https://konzte.online/terms">${tr('so3Terms')} ↗</button><button class="so3-chip" data-so3url="https://konzte.online/privacy">${tr('so3Priv')} ↗</button></div></div>`;
  }
  function dangerCard() {
    return `<div class="card so3-side so3-danger"><span class="p3-h">${tr('so3Danger')}</span><p class="mute so3-note" style="margin:8px 0 12px">${tr('so3DangerH')}</p>
      <div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn ghost sm" id="so3-out">${t('logout')}</button><button class="btn red sm" id="so3-del">${tr('so3Del')}</button></div></div>`;
  }

  function searchHits(q) {
    q = q.trim().toLowerCase(); if (!q) return [];
    const nav = document.querySelector('#view .setnav'), out = [], seen = new Set();
    nav?.querySelectorAll('button').forEach(b => { const l = b.textContent.trim(); if (l.toLowerCase().includes(q)) out.push({ label: l, sub: tr('so3D_' + (b.dataset.stt || Object.keys(TABSEL).find(k => b.matches(TABSEL[k])) || 'x')), btn: b }); });
    for (const [k, tab] of IDX) {
      const l = t(k); if (!l || seen.has(l) || !l.toLowerCase().includes(q)) continue; seen.add(l);
      const b = nav?.querySelector(TABSEL[tab] || `[data-stt="${tab}"]`); if (b) out.push({ label: l, sub: b.textContent.trim(), btn: b, row: l });
    }
    return out.slice(0, 8);
  }
  function bindSearch(root) {
    const inp = root.querySelector('#so3-q'), res = root.querySelector('.so3-res');
    let hits = [], sel = 0;
    const draw = () => {
      hits = searchHits(inp.value); sel = Math.min(sel, Math.max(0, hits.length - 1));
      res.hidden = !inp.value.trim();
      res.innerHTML = hits.map((h, i) => `<button class="${i === sel ? 'on' : ''}" data-i="${i}"><b>${esc(h.label)}</b><span>${esc(h.sub)}</span></button>`).join('') || `<div class="so3-nohit">${tr('so3NoHits')}</div>`;
      res.querySelectorAll('[data-i]').forEach(b => b.onmousedown = e => { e.preventDefault(); pick(+b.dataset.i); });
    };
    const pick = i => { const h = hits[i]; if (!h) return; hl = h.row || null; inp.value = ''; res.hidden = true; h.btn.click(); };
    inp.oninput = () => { sel = 0; draw(); };
    inp.onkeydown = e => {
      if (e.key === 'ArrowDown') { sel = Math.min(hits.length - 1, sel + 1); draw(); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { sel = Math.max(0, sel - 1); draw(); e.preventDefault(); }
      else if (e.key === 'Enter') pick(sel);
      else if (e.key === 'Escape') { inp.value = ''; res.hidden = true; inp.blur(); }
    };
    inp.onblur = () => setTimeout(() => { res.hidden = true; }, 120);
    inp.onfocus = () => { if (inp.value.trim()) draw(); };
  }
  document.addEventListener('keydown', e => {
    if (e.key !== '/' || S.page !== 'settings' || !ON() || /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) return;
    const i = document.getElementById('so3-q'); if (i) { e.preventDefault(); i.focus(); }
  });

  const inv = { open: false, loading: false };
  const IVIC = sv('<circle cx="9.5" cy="8" r="3.5"/><path d="M3 19.5c.6-3.4 3.3-5.5 6.5-5.5s5.9 2.1 6.5 5.5M18.5 8v6M15.5 11h6"/>');
  function invHtml() {
    const r = S.ref, pr = S.me.prefs || {};
    if (!r) return `<div class="so3-grp"><div class="mute" style="padding:6px 0 14px">${t('loading')}</div></div>`;
    const R = r.rules || {}, n = r.invited?.length || 0, a = r.active || 0, m = R.matches || 0;
    const seg = (k, val, opts) => `<div class="seg sm">${opts.map(([v, l]) => `<button data-so3pref="${k}" data-v="${v}" class="${String(val) === String(v) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
    const invv = pr.invites || 'all', frv = pr.friendReq !== false;
    return `<div class="so3-groups">
      <div class="so3-grp so3-iv"><div class="so3-gh"><span class="p3-h">${tr('so3IvH')}</span><button class="so3-link" data-so3go="referrals">${tr('so3IvRew')} ${IC.arrow}</button></div>
        <p class="mute so3-gp">${tr('so3IvHd')}</p>
        <div class="so3-ivr"><div class="so3-ivf"><span class="p3-h">${tr('so3IvCode')}</span><div class="so3-ivb"><b class="num so3-ivc">${esc(r.code || '—')}</b>${r.code ? `<button class="btn ghost sm" data-so3copy="${esc(r.code)}">${IC.copy}${tr('so3Copy')}</button>` : ''}</div></div>
          <div class="so3-ivf grow"><span class="p3-h">${tr('so3IvLink')}</span><div class="so3-ivb">${r.link ? `<code class="so3-ivl">${esc(r.link)}</code><button class="btn ghost sm" data-so3copy="${esc(r.link)}">${IC.copy}${tr('so3Copy')}</button>` : `<span class="mute">${t('refNoLink')}</span>`}</div></div></div>
        <div class="so3-ivs"><div><b class="num">${n}</b><span>${tr('so3IvInv')}</span></div><div class="ok"><b class="num">${a}</b><span>${tr('so3IvPlayed', { m })}</span></div><div class="wait"><b class="num">${Math.max(0, n - a)}</b><span>${tr('so3IvNot')}</span></div></div>
        <div class="so3-bar so3-ivp"><i style="width:${n ? a / n * 100 : 0}%"></i></div><p class="mute so3-note" style="margin:8px 0 14px">${tr('so3IvProg', { n: a, m: n, k: m })}</p></div>
      <div class="so3-grp"><div class="so3-gh"><span class="p3-h">${tr('so3IvWho')}</span></div><p class="mute so3-gp">${tr('so3IvWhoH')}</p>
        <div class="srow"><div><b>${tr('so3IvParty')}</b><span>${tr('so3IvPa_' + invv)}</span></div><div>${seg('invites', invv, [['all', tr('so3IvAll')], ['friends', tr('so3IvFriends')], ['none', tr('so3IvNone')]])}</div></div>
        <div class="srow"><div><b>${tr('so3IvFr')}</b><span>${tr(frv ? 'so3IvFr_on' : 'so3IvFr_off')}</span></div><div>${seg('friendReq', frv, [[true, tr('so3IvAll')], [false, tr('so3IvNone')]])}</div></div></div></div>`;
  }
  function invSide() {
    const r = S.ref; if (!r?.rules) return '';
    const R = r.rules;
    return `<div class="card so3-side so3-ivhow"><span class="p3-h">${tr('so3IvHow')}</span>
      <div class="so3-kv"><span>${tr('so3IvEarned')}</span><b class="num so3-kf">${r.earned ?? 0} KF</b></div>
      <ol class="so3-steps"><li>${t('earn1', { n: R.reward, m: R.matches, w: R.welcome })}</li><li>${t('earn2', { w: R.win, l: R.loss, c: R.cap })}</li><li>${t('earn3')}</li></ol>
      <button class="btn ghost so3-wide" data-so3go="referrals">${tr('so3IvRew')}${IC.arrow}</button></div>`;
  }
  function invMount(nav, panel) {
    if (!nav.querySelector('[data-so3i]')) {
      const b = document.createElement('button'); b.dataset.so3i = '1';
      b.innerHTML = `<i class="sic">${IVIC}</i>${tr('so3I')}`;
      const pv = nav.querySelector('[data-stt="privacy"]'); pv ? pv.after(b) : nav.append(b);
      nav.querySelectorAll('button:not([data-so3i])').forEach(x => x.addEventListener('click', () => { inv.open = false; }, true));
      b.onclick = () => { inv.open = true; window.KZPartnerClose?.(); renderSettings(); };
    }
    if (!inv.open) return;
    nav.querySelectorAll('button').forEach(x => x.classList.remove('on')); nav.querySelector('[data-so3i]').classList.add('on');
    panel.innerHTML = invHtml();
    if (!S.ref && !inv.loading) { inv.loading = true; api('/api/ref').then(r => { S.ref = r; }).catch(e => toast(e.message, true)).finally(() => { inv.loading = false; if (inv.open && S.page === 'settings') renderSettings(); }); }
    panel.querySelectorAll('[data-so3pref]').forEach(b => b.onclick = run(async () => {
      const k = b.dataset.so3pref, v = k === 'friendReq' ? b.dataset.v === 'true' : b.dataset.v;
      S.me = await api('/api/prefs', { [k]: v }); sfx('ok'); renderSettings();
    }));
  }
  window.KZInvitesOpen = () => { inv.open = true; if (S.page === 'settings') renderSettings(); else go('settings'); };

  function alwaysCard() {
    const it = ['ready', 'party', 'fr', 'clan', 'sup', 'ban'];
    return `<div class="so3-grp"><div class="so3-gh"><span class="p3-h">${IC.lock}${tr('so3Always')}</span></div><p class="mute so3-gp">${tr('so3AlwaysH')}</p>
      <div class="so3-alw">${it.map(k => `<div>${IC.lock}<span>${tr('so3Al_' + k)}</span></div>`).join('')}</div></div>`;
  }

  const snd = { ev: 'match' };
  const TONES = { classic: 'notify', soft: 'friend_online', alert: 'party_invite' };
  const SND_EV = {
    match: { sounds: ['match_found'], on: () => S.sound || (S.cfg || {}).sndMatchAlways !== false },
    search: { sounds: ['queue_start', 'search_loop'], on: () => (S.cfg || {}).uiSounds !== false },
    inv: { sounds: ['party_invite', 'notify'], on: () => S.sound && (S.cfg || {}).soundInvites !== false },
    tone: { tones: 1, on: () => !!S.sound },
  };
  const bars = id => { let h = 0; for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return Array.from({ length: 9 }, (_, i) => 25 + ((h >> (i * 3)) & 7) * 10 - i * 3); };
  const dur = id => { const pk = window.KA?.pack?.() || '', b = window.KA?.bufs?.[pk ? pk + '/' + id : id] || window.KA?.bufs?.[id]; return b?.duration ? b.duration.toFixed(1).replace('.', LANG === 'en' ? '.' : ',') + (LANG === 'en' ? ' s' : ' с') : ''; };
  const tile = (id, name, sel, tone) => `<div class="so3-snd ${sel ? 'on' : ''}" ${tone ? `data-so3tone="${tone}"` : ''}>
      <div class="so3-wave">${bars(id).map(v => `<i style="height:${Math.max(18, Math.min(100, v))}%"></i>`).join('')}</div>
      <button class="so3-play" data-so3play="${id}" title="${tr('so3Play')}">${sv('<path d="M8 5.5v13l11-6.5z"/>')}</button>
      <b>${esc(name)}</b><span class="mute">${dur(id)}</span>${sel ? `<i class="so3-thok">${IC.check}</i>` : ''}</div>`;
  function sndLayout(panel) {
    if (panel.querySelector('.so3-groups')) return;
    const c = S.cfg || {}, row = sel => panel.querySelector(`.srow:has(${sel})`);
    const vol = [row('[data-ksl="sndMaster"]'), row('[data-ksl="sndSfx"]')].filter(Boolean);
    const music = [row('[data-kpack]'), row('[data-ksw="sndMusicOn"]'), row('[data-ksl="sndMusic"]'), row('[data-kth]')].filter(Boolean);
    const ui = [row('[data-ksw="uiSounds"]'), row('[data-ksw="sndHover"]'), row('[data-ktest]')].filter(Boolean);
    const force = row('[data-ksw="sndMatchAlways"]');
    const box = document.createElement('div'); box.className = 'so3-groups';
    const ev = SND_EV[snd.ev], on = ev.on();
    const sw = (k, v) => `<button class="switch ${v ? 'on' : ''}" data-so3snd="${k}"></button>`;
    const srow = (l, h, ctl) => `<div class="srow"><div><b>${l}</b>${h ? `<span>${h}</span>` : ''}</div><div>${ctl}</div></div>`;
    box.innerHTML = `<div class="so3-grp so3-vol"><div class="so3-volh"><i class="so3-vic">${sv('<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>')}</i><div class="grow"><b>${tr('so3SndVol')}</b><span class="mute">${tr('so3SndVolH')}</span></div></div></div>
      <div class="so3-evs">${Object.keys(SND_EV).map(k => `<button class="${snd.ev === k ? 'on' : ''}" data-so3ev="${k}"><b>${tr('so3Ev_' + k)}</b><span>${SND_EV[k].tones ? tr('so3Tone_' + (c.tone || 'classic')) : SND_EV[k].sounds.map(x => tr('so3Snd_' + x)).join(' · ')}</span></button>`).join('')}</div>
      <div class="so3-grp so3-ev"><div class="so3-gh"><span class="so3-evt">${tr('so3Ev_' + snd.ev)}</span><span class="so3-st ${on ? 'online' : ''}">${on ? IC.check + tr('so3Works') : tr('so3Off')}</span></div>
        <p class="mute so3-gp">${tr('so3EvD_' + snd.ev)}</p>
        <div class="so3-snds">${ev.tones ? Object.entries(TONES).map(([k, id]) => tile(id, tr('so3Tone_' + k), (c.tone || 'classic') === k, k)).join('') : ev.sounds.map(id => tile(id, tr('so3Snd_' + id), ev.sounds.length === 1)).join('')}</div>
        <div class="so3-evsw">${snd.ev === 'match' ? srow(t('sound'), t('sSoundH'), sw('sound', S.sound)) : snd.ev === 'inv' ? srow(t('sSoundInv'), t('sSoundInvH'), sw('soundInvites', c.soundInvites !== false)) : snd.ev === 'tone' ? srow(t('sVolume'), '', `<span class="num">${c.volume ?? 70}%</span>`) : ''}</div></div>
      <div class="so3-grp so3-mus"><div class="so3-gh"><span class="p3-h">${tr('so3SndMusic')}</span></div></div>
      <div class="so3-grp so3-ui"><div class="so3-gh"><span class="p3-h">${tr('so3SndUi')}</span></div></div>
      <div class="so3-grp so3-reset"><div class="srow"><div><b>${tr('so3Reset')}</b><span>${tr('so3ResetH')}</span></div><div><button class="btn ghost sm" data-so3reset>${sv('<path d="M4 12a8 8 0 1 0 2.3-5.6M4 4v4.5h4.5"/>')}${tr('so3ResetB')}</button></div></div></div>`;
    const first = panel.querySelector(':scope > .srow') || panel.querySelector(':scope > p'); first ? first.before(box) : panel.append(box);
    vol.forEach(r => box.querySelector('.so3-vol').appendChild(r));
    if (snd.ev === 'match' && force) box.querySelector('.so3-evsw').appendChild(force); else if (force) box.querySelector('.so3-ui').appendChild(force);
    music.forEach(r => box.querySelector('.so3-mus').appendChild(r));
    ui.forEach(r => box.querySelector('.so3-ui').appendChild(r));
    panel.querySelectorAll(':scope > .srow').forEach(r => box.querySelector('.so3-ui').appendChild(r));
    if (!box.querySelector('.so3-evsw').children.length) box.querySelector('.so3-evsw').remove();
    box.querySelectorAll('[data-so3ev]').forEach(b => b.onclick = () => { snd.ev = b.dataset.so3ev; renderSettings(); });
    box.querySelectorAll('[data-so3play]').forEach(b => b.onclick = e => { e.stopPropagation(); window.KA?.play?.(b.dataset.so3play, { force: true }); });
    box.querySelectorAll('[data-so3tone]').forEach(b => b.onclick = run(async () => { await setCfg({ tone: b.dataset.so3tone }); window.KA?.play?.(TONES[b.dataset.so3tone], { force: true }); renderSettings(); }));
    box.querySelectorAll('[data-so3snd]').forEach(b => b.onclick = run(async () => {
      const k = b.dataset.so3snd, v = !b.classList.contains('on');
      if (k === 'sound') S.sound = v;
      await setCfg({ [k]: v }); sfx(v ? 'toggle_on' : 'toggle_off'); renderSettings();
    }));
    box.querySelector('[data-so3reset]').onclick = run(async () => {
      if (!confirm(tr('so3ResetQ'))) return;
      S.sound = true;
      await setCfg({ sound: true, sndMaster: 80, sndSfx: 80, sndMusic: 50, sndMusicOn: true, uiSounds: true, sndMatchAlways: true, sndHover: false, tone: 'classic', volume: 70, soundInvites: true });
      if (window.KA?.preview) window.KA.preview = null;
      sfx('ok'); renderSettings();
    });
  }

  const ovs = { w: 'card', tab: 'style', show: false };
  function streamLayout() {
    const box = document.getElementById('st-stream'), root = document.querySelector('#view .so3-set');
    if (!box || !root || box.querySelector('.so3-ovtop') || !box.querySelector('.ovgrid')) return;
    const imgs = {}; box.querySelectorAll('[data-ovimg]').forEach(i => { imgs[i.dataset.ovimg] = i.getAttribute('src'); });
    const W = typeof OV_WIDGETS !== 'undefined' ? OV_WIDGETS : Object.keys(imgs);
    if (!imgs[ovs.w]) ovs.w = W[0];
    const urlOf = (w, ext) => { const card = box.querySelector(`[data-ovimg="${w}"]`)?.closest('.ovw'); const bs = card ? [...card.querySelectorAll('[data-ovcopy]')] : []; return (ext === 'png' ? bs[1] : ext === 'json' ? bs[2] : bs[0])?.dataset.ovcopy || ''; };
    const row = sel => box.querySelector(`.srow:has(${sel})`);
    const keyRow = row('#ov-regen'), bgRow = row('[data-ov="bg"]');
    const c = S.cfg?.ov || {}, size = c.size || 400, url = urlOf(ovs.w), clear = (c.bg || 'dark') === 'clear';
    const maps = ['Warehouse', 'TrainYard', 'Highrise', 'Subway', 'Museum'];
    const top = document.createElement('div'); top.className = 'so3-ovtop';
    top.innerHTML = `<div class="so3-ovstrip">${W.map(w => `<button class="${ovs.w === w ? 'on' : ''}" data-so3ow="${w}" title="${esc(t('ovd_' + w))}"><img data-ovimg="${w}" src="${esc(imgs[w] || '')}" alt=""><span>${esc(t('ov_' + w))}</span>${ovs.w === w ? `<i class="so3-thok">${IC.check}</i>` : ''}</button>`).join('')}</div>
      <div class="so3-grp so3-ovstream"><div class="srow"><div><b>${t('sStreamer')}</b><span>${t('sStreamerH')}</span></div><div><button class="switch ${S.cfg?.streamer ? 'on' : ''}" data-so3streamer></button></div></div></div>
      <div class="so3-grp so3-ovprev"><div class="so3-gh"><span class="so3-evt">${tr('so3OvPrev')} · ${esc(t('ov_' + ovs.w))}</span><span class="so3-ovbg"></span></div>
        <div class="so3-ovstage ${clear ? 'clear' : ''}" style="--map:url('assets/maps/${maps[W.indexOf(ovs.w) % maps.length]}.jpg')"><img data-ovimg="${ovs.w}" src="${esc(imgs[ovs.w] || '')}" alt=""></div>
        <div class="so3-ovmeta"><div><span class="p3-h">${tr('so3OvSrc')}</span><b class="num">${size} px</b></div><span class="mute">${esc(t('ovd_' + ovs.w))} · ${tr('so3OvBgN')}</span></div></div>
      <div class="so3-grp so3-ovobs"><div class="so3-gh"><span class="so3-evt">${tr('so3OvObs')}</span><span class="so3-cnt">${IC.lock}${tr('so3OvPriv')}</span></div>
        <div class="so3-ovurl"><code>${ovs.show ? esc(url) : '•'.repeat(28)}</code><button class="btn ghost sm" data-so3oshow>${IC.eye}${ovs.show ? tr('so3OvHide') : tr('so3OvShow')}</button><button class="btn sm" data-so3ocopy="${esc(url)}">${IC.copy}${t('ovCopyObs')}</button></div>
        <div class="so3-ovsub"><span class="so3-warn">${tr('so3OvWarn')}</span><span class="grow"></span><button class="so3-chip" data-so3ocopy="${esc(urlOf(ovs.w, 'png'))}">PNG</button><button class="so3-chip" data-so3ocopy="${esc(urlOf(ovs.w, 'json'))}">JSON</button></div>
        <div class="so3-ovkey"></div></div>`;
    box.prepend(top);
    if (bgRow) top.querySelector('.so3-ovbg').appendChild(bgRow.querySelector('.seg'));
    if (keyRow) { const k = top.querySelector('.so3-ovkey'); k.appendChild(keyRow); const rg = keyRow.querySelector('#ov-regen'); if (rg) rg.textContent = tr('so3OvRegen'); }
    bgRow?.remove();
    const tabs = { style: ['[data-ovacc]', '[data-ov="size"]', '[data-ovsw="nick"]', '[data-ovsw="brand"]'], data: ['[data-ov="mode"]', '[data-ov="n"]', '#ov-ses'], lang: ['[data-ov="lang"]'] };
    const side = root.querySelector('.so3-sr');
    const card = document.createElement('div'); card.className = 'card so3-side so3-ovset';
    card.innerHTML = `<div class="so3-ovtabs">${Object.keys(tabs).map(k => `<button class="${ovs.tab === k ? 'on' : ''}" data-so3ot="${k}">${tr(k === 'style' ? 'so3OvStyle' : k === 'data' ? 'so3OvData' : 'so3OvLang')}</button>`).join('')}</div><p class="mute so3-note" style="margin:4px 0 6px">${IC.check} ${tr('so3OvSel')}</p>`;
    for (const [k, sels] of Object.entries(tabs)) {
      const pane = document.createElement('div'); pane.className = 'so3-ovpane'; pane.hidden = ovs.tab !== k; pane.dataset.pane = k;
      sels.forEach(sl => { const r = row(sl); if (r) pane.appendChild(r); });
      card.appendChild(pane);
    }
    side?.prepend(card);
    const help = box.querySelector('.ovhelp');
    if (help) { const d = document.createElement('details'); d.className = 'so3-grp so3-ovhelp'; d.innerHTML = `<summary>${tr('so3OvHow')}</summary>`; help.before(d); d.appendChild(help); }
    box.querySelector(':scope > p.mute')?.classList.add('so3-gp');
    top.querySelectorAll('[data-so3ow]').forEach(b => b.onclick = () => { ovs.w = b.dataset.so3ow; ovs.show = false; renderStream(); });
    top.querySelector('[data-so3oshow]').onclick = () => { ovs.show = !ovs.show; renderStream(); };
    top.querySelectorAll('[data-so3ocopy]').forEach(b => b.onclick = () => b.dataset.so3ocopy && copy(b.dataset.so3ocopy));
    top.querySelector('[data-so3streamer]').onclick = run(async () => { await setCfg({ streamer: !S.cfg?.streamer }); renderStream(); });
    card.querySelectorAll('[data-so3ot]').forEach(b => b.onclick = () => { ovs.tab = b.dataset.so3ot; card.querySelectorAll('[data-so3ot]').forEach(x => x.classList.toggle('on', x === b)); card.querySelectorAll('.so3-ovpane').forEach(p => { p.hidden = p.dataset.pane !== ovs.tab; }); });
  }
  if (typeof renderStream === 'function') {
    const _rst = renderStream;
    renderStream = async function () {
      const r = await _rst.apply(this, arguments);
      if (ON() && S.page === 'settings') { document.querySelector('#view .so3-ovset')?.remove(); try { streamLayout(); } catch (e) { console.warn('[social3]', e); } }
      return r;
    };
  }

  function layoutSettings() {
    const page = document.querySelector('#view > .page');
    const wrap = page?.querySelector(':scope > .setwrap');
    if (!wrap || page.querySelector('.so3-set')) return;
    const nav = wrap.querySelector('.setnav'), panel = wrap.querySelector('.setpanel');
    if (!nav || !panel) return;
    invMount(nav, panel);
    const head = page.querySelector(':scope > .lbhead'), about = page.querySelector(':scope > p.mute');
    const key = curKey(nav), title = nav.querySelector('button.on')?.textContent.trim() || t('settings');
    const pp = nav.querySelector('[data-ppt]'); if (pp) { const hr = document.createElement('i'); hr.className = 'so3-hr'; nav.append(hr, pp); }
    const root = document.createElement('div'); root.className = 'so3 so3-set';
    root.innerHTML = `<aside class="so3-sl"><div class="so3-sb">${IC.search}<input id="so3-q" placeholder="${tr('so3Search')}" autocomplete="off"><i class="n2-kbd">/</i><div class="so3-res" hidden></div></div></aside>
      <section class="so3-sc"><div class="so3-sh"><h1>${esc(title)}</h1><div class="mute">${tr('so3D_' + key) !== 'so3D_' + key ? tr('so3D_' + key) : ''}</div></div></section>
      <aside class="so3-sr"></aside>`;
    root.querySelector('.so3-sl').appendChild(nav);
    const sc = root.querySelector('.so3-sc');
    const std = !!nav.querySelector('button.on[data-stt]');
    if (std && key === 'account') { sc.insertAdjacentHTML('beforeend', `<div class="card so3-top">${accHead()}</div>`); panel.querySelector('.sacc')?.remove(); }
    sc.appendChild(panel);
    if (std) {
      groupRows(panel, key);
      if (key === 'account') panel.querySelector('.so3-groups')?.insertAdjacentHTML('afterbegin', gidCard());
      if (key === 'look') panel.querySelector('.so3-groups')?.insertAdjacentHTML('afterbegin', stylesCard());
    }
    if (key === 'kgt') secLayout(panel);
    if (key === 'ksnd') sndLayout(panel);
    if (std && key === 'notif') { panel.querySelector('.so3-grp')?.classList.add('so3-master'); panel.querySelector('.so3-groups')?.insertAdjacentHTML('beforeend', alwaysCard()); }
    if (about) sc.appendChild(about);
    const side = root.querySelector('.so3-sr');
    side.innerHTML = key === 'so3i' ? invSide() + premCard() : key === 'kgt' ? docsCard() + dangerCard() : std && key === 'account' ? premCard() + docsCard() + dangerCard()
      : (std && key === 'notif' ? nowCard(panel) : std && key === 'look' ? lookCard() : '') + premCard() + (key === 'adv' ? '' : appCard());
    head?.remove(); wrap.replaceWith(root);
    panel.classList.add('so3-panel');
    bindSearch(root);
    root.querySelectorAll('[data-so3go]').forEach(b => b.onclick = () => go(b.dataset.so3go));
    root.querySelectorAll('[data-so3copy]').forEach(b => b.onclick = () => copy(b.dataset.so3copy));
    root.querySelector('#so3-out')?.addEventListener('click', () => logout());
    root.querySelector('#so3-del')?.addEventListener('click', () => {
      const f = () => { const r = document.querySelector('#view .pv7-r:has(#pv7-nick), #view .pv7-r:has(.pv7-del)'); if (r) { r.scrollIntoView({ block: 'center' }); r.classList.add('so3-flash'); setTimeout(() => r.classList.remove('so3-flash'), 1800); return true; } };
      if (key === 'account' && f()) return;
      nav.querySelector('[data-stt="account"]')?.click(); let n = 0; const iv = setInterval(() => { if (f() || ++n > 20) clearInterval(iv); }, 150);
    });
    root.querySelectorAll('[data-so3url]').forEach(b => b.onclick = () => K.open(b.dataset.so3url));
    root.querySelectorAll('[data-so3tab]').forEach(b => b.onclick = () => nav.querySelector(`[data-stt="${b.dataset.so3tab}"]`)?.click());
    if (hl) {
      const r = [...panel.querySelectorAll('.srow')].find(x => rowLabel(x) === hl); hl = null;
      if (r) { r.classList.add('so3-flash'); r.scrollIntoView({ block: 'center' }); setTimeout(() => r.classList.remove('so3-flash'), 1800); }
    }
  }
  const _rs = renderSettings;
  renderSettings = async function () {
    const r = await _rs.apply(this, arguments);
    if (S.page !== 'settings') return r;
    if (!ON()) { mark(false); return r; }
    try { layoutSettings(); mark(true); } catch (e) { console.warn('[social3]', e); }
    return r;
  };

  const fst = { tab: 'all' };
  const STL = () => ({ online: t('onlineNow'), queue: t('searching'), match: t('inMatchNow'), offline: t('offline') });
  function renderFriends3() {
    const st = S.live || {}, f = st.friends || { list: [], requests: [], sent: [] };
    const list = f.list || [], reqs = f.requests || [], inv = st.invites || [];
    const onl = list.filter(x => x.status !== 'offline');
    if (fst.tab === 'req' && !reqs.length) fst.tab = 'all';
    const inParty = id => st.party?.members?.some(m => m.id === id);
    const canInvite = !st.party || (st.party.leader === S.me.id && st.party.members.length < 5);
    const lab = STL();
    const chip = (k, n, l) => `<button class="s3-chip ${fst.tab === k ? 'on' : ''}" data-so3ft="${k}"><b class="num">${n}</b>${l}</button>`;
    const card = x => { const r = { elo: x.elo, cal: x.cal };
      return `<div class="so3-fc ${x.status}"><div class="so3-fca" data-so3prof="${esc(x.id)}">${avaF(x)}<i class="dot ${x.status}"></i></div>
        <div class="so3-fcm" data-so3prof="${esc(x.id)}"><div class="nkl" title="${esc(x.nick)}">${nickHtml(x)}</div>
          <div class="so3-fcs"><span class="so3-st ${x.status}">${lab[x.status] || ''}</span>${x.elo != null ? `<span class="so3-elo"><img src="${lvlIc(r, x.lvl)}" alt="">${isCal(r) ? '' : `<b class="num">${x.elo}</b>`}</span>` : ''}</div></div>
        <div class="so3-fcb">${inParty(x.id) ? `<span class="tag">${t('party')}</span>` : x.status !== 'offline' && x.status !== 'match' && canInvite ? `<button class="btn sm" data-invite="${esc(x.id)}" title="${t('invite')}">${IC.addf}${tr('so3FrInv')}</button>` : ''}
          <button class="btn ghost sm so3-ib" data-fr-rm="${esc(x.id)}" title="${t('removeFriend')}">${IC.x}</button></div></div>`; };
    const reqRow = r => `<div class="so3-req">${avaF(r, 'sm')}<div class="grow"><div class="nkl">${nickHtml(r)}</div><span class="mute">${t('wantsFriend')}</span></div>
      <button class="btn green sm" data-fr-yes="${esc(r.id)}">${IC.check}</button><button class="btn ghost sm" data-fr-no="${esc(r.id)}">${IC.x}</button></div>`;
    const shown = fst.tab === 'on' ? onl : fst.tab === 'req' ? [] : list;
    const body = fst.tab === 'req' ? `<div class="card so3-list">${reqs.map(reqRow).join('')}</div>`
      : shown.length ? `<div class="so3-fgrid">${shown.map(card).join('')}</div>`
      : `<div class="card so3-empty"><div class="s3-ic">${IC.friends}</div><h3>${list.length ? tr('so3FrNoneOn') : tr('so3FrNone')}</h3><p class="mute">${list.length ? '' : tr('so3FrNoneH')}</p>
          ${list.length ? '' : `<button class="btn" data-so3focus>${IC.addf}${tr('so3FrAdd')}</button>`}</div>`;
    render(`<div class="so3 so3-fr">
      <div class="s3-head"><div><h1>${t('friends')}</h1><div class="mute">${t('n2_d_friends')}</div></div><span class="grow"></span>
        <div class="so3-add">${IC.search}<input id="fr-q" placeholder="${tr('so3FrAddH')}" autocomplete="off"><button class="btn sm" id="fr-go">${t('search')}</button></div></div>
      <div class="s3-chips">${chip('all', list.length, tr('so3FrAll'))}${chip('on', onl.length, tr('so3FrOn'))}${reqs.length ? chip('req', reqs.length, tr('so3FrReq')) : ''}</div>
      <div class="s3-lay"><div class="s3-main">
        <div class="card so3-resc" hidden><span class="p3-h">${tr('so3FrResults')}</span><div id="fr-res"></div></div>
        ${reqs.length && fst.tab !== 'req' ? `<div class="card so3-list"><span class="p3-h">${tr('so3FrIncoming')} <b class="num">${reqs.length}</b></span>${reqs.map(reqRow).join('')}</div>` : ''}
        ${body}</div>
      <div class="s3-side">
        ${inv.length ? `<div class="card so3-list"><span class="p3-h">${tr('so3FrPartyInv')}</span>${inv.map(i => `<div class="so3-req">${avaF(i.from, 'sm')}<div class="grow"><div class="nkl">${nickHtml(i.from)}</div><span class="mute">${t('invitesYou')}</span></div>
          <button class="btn green sm" data-so3inv="${esc(i.party)}" data-yes="1">${t('accept')}</button><button class="btn ghost sm" data-so3inv="${esc(i.party)}">${IC.x}</button></div>`).join('')}</div>` : ''}
        ${partyCard(st)}
        <div class="card so3-side"><span class="p3-h">${tr('so3FrPriv')}</span><p class="mute so3-note" style="margin:8px 0 10px">${tr('so3FrPrivH')}</p>
          ${f.sent?.length ? `<p class="mute so3-note" style="margin:0 0 10px">${tr('so3FrSent', { n: f.sent.length })}</p>` : ''}
          <button class="btn ghost so3-wide" data-so3set="privacy">${IC.gear}${t('settings')}</button></div>
      </div></div></div>`);
    mark(true);
    const v = view();
    v.querySelectorAll('[data-so3ft]').forEach(b => b.onclick = () => { fst.tab = b.dataset.so3ft; renderFriends3(); });
    v.querySelectorAll('[data-so3prof]').forEach(b => b.onclick = () => go('profile', b.dataset.so3prof));
    v.querySelectorAll('[data-so3set]').forEach(b => b.onclick = () => { S.setTab = b.dataset.so3set; go('settings'); });
    v.querySelectorAll('[data-so3inv]').forEach(b => b.onclick = () => wsSend({ t: 'party-answer', party: b.dataset.so3inv, yes: !!b.dataset.yes }));
    v.querySelector('[data-so3focus]')?.addEventListener('click', () => document.getElementById('fr-q')?.focus());
    bindFriends(); try { bindParty(); } catch {}
    const res = document.getElementById('fr-res'), rc = v.querySelector('.so3-resc');
    if (res && rc) { const upd = () => { rc.hidden = !res.innerHTML.trim(); }; new MutationObserver(upd).observe(res, { childList: true }); upd(); }
  }

  const nst = { f: 'all', type: 'all', clan: null, loading: false };
  const ts = v => (typeof v === 'number' ? v : Date.parse(v)) || 0;
  const plain = s => String(s || '').replace(/<a?:\w+:\d+>/g, '').replace(/[*_~`>#|]+/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ').trim();
  const seenAt = () => S.cfg?.newsSeenAt || Date.now() - 7 * 864e5;
  function items() {
    const out = [], st = S.live || {}, seen = seenAt();
    for (const i of st.invites || []) out.push({ type: 'party', act: 1, unread: 1, at: Date.now(), who: i.from, text: tr('so3NPa'), btns: [[t('accept'), `data-so3inv="${esc(i.party)}" data-yes="1"`, 'green'], ['✕', `data-so3inv="${esc(i.party)}"`, 'ghost']] });
    for (const r of st.friends?.requests || []) out.push({ type: 'friends', act: 1, unread: 1, at: Date.now(), who: r, text: tr('so3NFr'), btns: [[t('accept'), `data-fr-yes="${esc(r.id)}"`, 'green'], ['✕', `data-fr-no="${esc(r.id)}"`, 'ghost']] });
    for (const c of nst.clan?.invites || []) out.push({ type: 'clan', act: 1, unread: 1, at: Date.now(), title: tr('so3NCl', { c: c.name || c.tag || '' }), text: tr('so3NClBy', { n: c.from || '' }), btns: [[tr('so3NOpen'), 'data-so3go="clans"', '']] });
    for (const x of S.sup?.mine || []) if (x.unread) out.push({ type: 'support', act: 1, unread: 1, at: ts(x.updated || x.created), title: `${tr('so3NSup')} · #${x.id}`, text: `${esc(x.subject || '')} · ${tr('so3NSupN', { n: x.unread })}`, raw: 1, btns: [[tr('so3NOpen'), `data-so3tk="${esc(x.id)}"`, '']] });
    for (const p of (S.n2news || []).slice(0, 30)) {
      const title = plain(p.embeds?.[0]?.title) || plain(p.text).slice(0, 90) || t('n2_post');
      const sub = plain(p.embeds?.[0]?.title ? p.text || p.embeds[0].description : '').slice(0, 140);
      out.push({ type: 'news', unread: ts(p.at) > seen ? 1 : 0, at: ts(p.at), title, text: sub, btns: [], click: 'news' });
    }
    return out;
  }
  const TIC = { news: IC.news, friends: IC.addf, party: IC.party, clan: IC.clan, support: IC.support };
  function loadN() {
    if (nst.loading) return; nst.loading = true;
    Promise.all([
      api('/api/news').then(n => { S.n2news = n; }).catch(() => {}),
      api('/api/clan/mine').then(m => { nst.clan = m; }).catch(() => {}),
      S.sup ? null : api('/api/support').then(d => { S.sup = d; }).catch(() => {}),
    ]).then(() => { nst.loading = false; nst.at = Date.now(); if (S.page === 'notifs') refresh(); });
  }
  function markRead() {
    const at = (S.n2news || []).reduce((a, p) => Math.max(a, ts(p.at)), 0);
    if (at && at > (S.cfg?.newsSeenAt || 0)) { if (S.cfg) S.cfg.newsSeenAt = at; K.saveSettings({ newsSeenAt: at }).catch?.(() => {}); }
    const nd = document.getElementById('news-dot'); if (nd) nd.hidden = true;
    const bd = document.querySelector('.n2-bdot'); if (bd) { bd.hidden = true; bd.textContent = ''; }
    renderNotifs();
  }
  function renderNotifs() {
    if (!nst.at || Date.now() - nst.at > 60e3) loadN();
    const all = items();
    const unread = all.filter(x => x.unread).length, act = all.filter(x => x.act).length;
    const types = ['news', 'friends', 'party', 'clan', 'support'];
    const list = all.filter(x => (nst.f === 'all' || (nst.f === 'unread' ? x.unread : x.act)) && (nst.type === 'all' || x.type === nst.type));
    const chip = (k, l, n) => `<button class="s3-chip ${nst.f === k ? 'on' : ''}" data-so3nf="${k}">${n != null ? `<b class="num">${n}</b>` : ''}${l}</button>`;
    const row = x => `<div class="so3-ni ${x.unread ? 'new' : ''} ${x.click ? 'click' : ''}" ${x.click ? `data-so3go="${x.click}"` : ''}>
        <i class="so3-nic ${x.type}">${TIC[x.type]}</i>${x.who ? avaF(x.who, 'sm') : ''}
        <div class="grow so3-nim">${x.who ? `<div><b class="nkl">${nickHtml(x.who)}</b> <span class="mute">${esc(x.text)}</span></div>` : `<b>${esc(x.title)}</b>${x.text ? `<span class="mute">${x.raw ? x.text : esc(x.text)}</span>` : ''}`}
          <span class="so3-nt">${tr('so3NT' + x.type)}${x.type === 'news' || x.type === 'support' ? ' · ' + fmtDT(x.at) : ''}</span></div>
        ${x.btns.map(([l, a, c]) => `<button class="btn sm ${c}" ${a}>${l === '✕' ? IC.x : l}</button>`).join('')}${x.unread ? '<i class="so3-ndot"></i>' : ''}</div>`;
    const c = S.cfg || {};
    const qs = (k, l, on) => `<div class="so3-qs"><span>${l}</span><button class="switch ${on ? 'on' : ''}" data-so3sw="${k}"></button></div>`;
    render(`<div class="so3 so3-n">
      <div class="s3-head"><div><h1>${tr('so3N')}</h1><div class="mute">${tr('so3NSub')}</div></div><span class="grow"></span>
        <button class="btn ghost sm so3-hb" data-so3read ${unread ? '' : 'disabled'}>${IC.chk2}${tr('so3NRead')}</button>
        <button class="btn ghost sm so3-hb" data-so3set="notif">${IC.gear}${tr('so3NSet')}</button></div>
      <div class="s3-lay"><div class="s3-main">
        <div class="so3-nbar"><div class="s3-chips">${chip('all', tr('so3NAll'))}${chip('unread', tr('so3NUnread'), unread)}${chip('act', tr('so3NAct'), act)}</div><span class="grow"></span>
          <label class="so3-sel"><span>${tr('so3NType')}:</span><select id="so3-nt">${['all', ...types].map(k => `<option value="${k}" ${nst.type === k ? 'selected' : ''}>${tr(k === 'all' ? 'so3NTAll' : 'so3NT' + k)}</option>`).join('')}</select></label></div>
        ${list.length ? `<div class="card so3-nl">${list.map(row).join('')}</div>`
          : `<div class="card so3-empty so3-nempty"><div class="s3-ic">${IC.bell}</div><h3>${tr('so3NEmpty')}</h3><p class="mute">${tr('so3NEmptyH')}</p></div>`}
      </div><div class="s3-side">
        <div class="card so3-side"><span class="p3-h">${tr('so3NSum')}</span>
          <div class="so3-kv"><span>${tr('so3NUnread')}</span><b class="num">${unread}</b></div><div class="so3-kv"><span>${tr('so3NAct')}</span><b class="num ${act ? 'so3-hot' : ''}">${act}</b></div>
          ${types.map(k => { const n = all.filter(x => x.type === k).length; return n ? `<div class="so3-kv sub"><span>${TIC[k]}${tr('so3NT' + k)}</span><b class="num">${n}</b></div>` : ''; }).join('')}</div>
        <div class="card so3-side"><span class="p3-h">${tr('so3NQuick')}</span>
          ${qs('notify', t('sDesktop'), c.notify !== false)}${qs('sound', t('sound'), S.sound)}${qs('soundInvites', t('sSoundInv'), c.soundInvites !== false)}${qs('flash', t('sFlash'), c.flash !== false)}
          <button class="btn ghost so3-wide" data-so3set="notif" style="margin-top:8px">${tr('so3NSet')}${IC.arrow}</button></div>
      </div></div></div>`);
    mark(true);
    const v = view();
    v.querySelectorAll('[data-so3nf]').forEach(b => b.onclick = () => { nst.f = b.dataset.so3nf; renderNotifs(); });
    const sel = v.querySelector('#so3-nt'); if (sel) sel.onchange = () => { nst.type = sel.value; renderNotifs(); };
    v.querySelector('[data-so3read]')?.addEventListener('click', markRead);
    v.querySelectorAll('[data-so3set]').forEach(b => b.onclick = () => { S.setTab = b.dataset.so3set; go('settings'); });
    v.querySelectorAll('[data-so3go]').forEach(b => b.onclick = e => { if (e.target.closest('button') && e.target.closest('button') !== b) return; go(b.dataset.so3go); });
    v.querySelectorAll('[data-so3inv]').forEach(b => b.onclick = e => { e.stopPropagation(); wsSend({ t: 'party-answer', party: b.dataset.so3inv, yes: !!b.dataset.yes }); });
    v.querySelectorAll('[data-so3tk]').forEach(b => b.onclick = e => { e.stopPropagation(); go('support'); if (typeof openTicket === 'function') openTicket(b.dataset.so3tk); });
    v.querySelectorAll('[data-so3sw]').forEach(b => b.onclick = run(async () => {
      const k = b.dataset.so3sw, on = !b.classList.contains('on');
      if (k === 'sound') { S.sound = on; await setCfg({ sound: on }); if (on) beep(); } else await setCfg({ [k]: on });
      renderNotifs();
    }));
    bindFriends();
  }

  const bell = document.querySelector('.n2-bell');
  if (bell) bell.addEventListener('click', e => { if (!ON() || !S.me?.gameId) return; e.stopImmediatePropagation(); e.preventDefault(); document.querySelector('.n2-drop')?.setAttribute('hidden', ''); go('notifs'); }, true);
  const _refresh = refresh;
  refresh = function () {
    if (S.me?.gameId && ON()) {
      if (S.page === 'friends') return renderFriends3();
      if (S.page === 'notifs') return renderNotifs();
    }
    if (S.page !== 'settings') mark(false);
    return _refresh.apply(this, arguments);
  };
  const _markNav = markNav;
  markNav = function () { const r = _markNav.apply(this, arguments); if (window.KZ_V3?.()) document.querySelector('.n2-bellw')?.classList.toggle('on', S.page === 'notifs' || S.page === 'news'); return r; };
  const _onState = onState;
  onState = function () { const r = _onState.apply(this, arguments); if (S.page === 'notifs' && ON()) refresh(); return r; };
  const _go = go;
  go = function (page) { if (page !== 'settings') inv.open = false; if (page === 'notifs' && !ON()) page = 'news'; if (page !== S.page) mark(false); arguments[0] = page; return _go.apply(this, arguments); };
})();

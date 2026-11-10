(() => {
  const L = {
    en: {
      sh3_sub: 'Looks only — nothing here affects ELO. Click any item to try it on your nick.',
      sh3_balance: 'Balance', sh3_topup: 'Top up', sh3_buy: 'Buy', sh3_more: 'Details', sh3_open: 'Open', sh3_extend: 'Extend',
      sh3_or: 'or', sh3_from: 'from', sh3_try: 'Try on', sh3_hideOwned: 'Hide owned', sh3_all: 'All',
      sh3_b_forever: 'Forever', sh3_b_term: '30 days', sh3_b_season: 'Season', sh3_b_once: 'One time', sh3_b_owned: 'Yours', sh3_b_worn: 'Equipped', sh3_b_active: 'Active',
      sh3_feat: 'Featured', sh3_featS: 'Subscriptions, the season pass and the starter pack',
      sh3_kf: 'KF coins', sh3_kfS: 'Coins for any item in the shop. Paid via PayPal in the browser',
      sh3_kfD: 'Coins land on your balance right after the payment.', sh3_kfBonus: '+{n}% bonus coins',
      sh3_s_theme: 'The whole app in a different style. Only you see it', sh3_s_music: 'Music and every interface sound in one style. Press ▶ to listen', sh3_s_banner: 'Card background in the match room, on the leaderboard and in your profile',
      sh3_s_frame: 'A ring around your avatar', sh3_s_emblem: 'A badge next to your nick', sh3_s_sticker: 'Stick up to 3 on your profile banner and Discord card',
      sh3_s_ncolor: 'Your nick colour everywhere in the app', sh3_s_vfx: 'Plays on the victory screen',
      sh3_d_banner4: 'Anime collection banner. Includes a matching profile background (works with Premium).', sh3_d_banner: 'Profile banner — visible in matches, the leaderboard and your profile.', sh3_d_frame: 'Avatar frame for every place your avatar shows.',
      sh3_d_emblem: 'Emblem next to your nick.', sh3_d_emblem900: 'Rare emblem next to your nick.', sh3_d_emblem600: 'Animated emblem next to your nick.', sh3_d_emblem300: 'Emblem next to your nick.',
      sh3_d_sticker: 'Sticker for your profile banner.', sh3_d_ncolor: 'Nick colour across the app.', sh3_d_vfx: 'Victory screen effect.',
      sh3_premD: 'Premium banners, frames and emblems, custom avatar and more.', sh3_plusD: 'Everything in Premium plus nick colours, more banners and compare.',
      sh3_activeTill: 'Active till {d}', sh3_passD: '{n} levels of rewards for matches and quests.',
      sh3_svc: 'Services', sh3_svcS: 'Nick change, promo codes and free KF',
      sh3_nickD: 'Your current nick: {n}.', sh3_promoD: 'Got a code from a stream, giveaway or partner? Enter it here.',
      sh3_short: 'Not enough KF: {n} more', sh3_playVfx: 'Play',
    },
    uk: {
      sh3_sub: 'Лише зовнішній вигляд — на ELO нічого не впливає. Клацни по предмету, щоб приміряти на свій нік.',
      sh3_balance: 'Баланс', sh3_topup: 'Поповнити', sh3_buy: 'Купити', sh3_more: 'Детальніше', sh3_open: 'Відкрити', sh3_extend: 'Продовжити',
      sh3_or: 'або', sh3_from: 'від', sh3_try: 'Приміряти', sh3_hideOwned: 'Сховати куплене', sh3_all: 'Усе',
      sh3_b_forever: 'Назавжди', sh3_b_term: '30 днів', sh3_b_season: 'Сезон', sh3_b_once: 'Разово', sh3_b_owned: 'Твоє', sh3_b_worn: 'Надіто', sh3_b_active: 'Активно',
      sh3_feat: 'Головне', sh3_featS: 'Підписки, пропуск сезону і стартовий набір',
      sh3_kf: 'KF-коїни', sh3_kfS: 'Коїни на будь-які предмети в магазині. Оплата PayPal у браузері',
      sh3_kfD: 'Коїни зарахуються на баланс одразу після оплати.', sh3_kfBonus: '+{n}% бонусних коїнів',
      sh3_s_theme: 'Увесь застосунок в іншому стилі. Бачиш лише ти', sh3_s_music: 'Музика й усі звуки інтерфейсу в одному стилі. Натисни ▶, щоб послухати', sh3_s_banner: 'Фон картки в кімнаті матчу, у рейтингу і в профілі',
      sh3_s_frame: 'Обідок навколо аватара', sh3_s_emblem: 'Значок біля ніку', sh3_s_sticker: 'До 3 штук на банер профілю і картку в Discord',
      sh3_s_ncolor: 'Колір ніку скрізь у застосунку', sh3_s_vfx: 'Грає на екрані перемоги',
      sh3_d_banner4: 'Банер аніме-колекції. У комплекті — фон профілю в тому ж стилі (діє з Premium).', sh3_d_banner: 'Банер профілю — видно в матчі, рейтингу і профілі.', sh3_d_frame: 'Рамка аватара всюди, де видно аватар.',
      sh3_d_emblem: 'Емблема біля ніку.', sh3_d_emblem900: 'Рідкісна емблема біля ніку.', sh3_d_emblem600: 'Анімована емблема біля ніку.', sh3_d_emblem300: 'Емблема біля ніку.',
      sh3_d_sticker: 'Наліпка на банер профілю.', sh3_d_ncolor: 'Колір ніку по всьому застосунку.', sh3_d_vfx: 'Ефект на екрані перемоги.',
      sh3_premD: 'Преміум-банери, рамки й емблеми, свій аватар і не тільки.', sh3_plusD: 'Усе з Premium, а ще кольори ніку, більше банерів і порівняння.',
      sh3_activeTill: 'Активно до {d}', sh3_passD: '{n} рівнів нагород за матчі й завдання.',
      sh3_svc: 'Послуги', sh3_svcS: 'Зміна ніку, промокоди і безкоштовні KF',
      sh3_nickD: 'Зараз твій нік: {n}.', sh3_promoD: 'Маєш код зі стріму, розіграшу чи від партнера? Введи його тут.',
      sh3_short: 'Не вистачає KF: ще {n}', sh3_playVfx: 'Програти',
    },
    ru: {
      sh3_sub: 'Только внешний вид — на ELO ничего не влияет. Кликни по предмету, чтобы примерить на свой ник.',
      sh3_balance: 'Баланс', sh3_topup: 'Пополнить', sh3_buy: 'Купить', sh3_more: 'Подробнее', sh3_open: 'Открыть', sh3_extend: 'Продлить',
      sh3_or: 'или', sh3_from: 'от', sh3_try: 'Примерить', sh3_hideOwned: 'Скрыть купленное', sh3_all: 'Всё',
      sh3_b_forever: 'Навсегда', sh3_b_term: '30 дней', sh3_b_season: 'Сезон', sh3_b_once: 'Разово', sh3_b_owned: 'Твоё', sh3_b_worn: 'Надето', sh3_b_active: 'Активно',
      sh3_feat: 'Главное', sh3_featS: 'Подписки, пропуск сезона и стартовый набор',
      sh3_kf: 'KF-коины', sh3_kfS: 'Коины на любые предметы в магазине. Оплата PayPal в браузере',
      sh3_kfD: 'Коины зачислятся на баланс сразу после оплаты.', sh3_kfBonus: '+{n}% бонусных коинов',
      sh3_s_theme: 'Всё приложение в другом стиле. Видишь только ты', sh3_s_music: 'Музыка и все звуки интерфейса в одном стиле. Нажми ▶, чтобы послушать', sh3_s_banner: 'Фон карточки в комнате матча, в рейтинге и в профиле',
      sh3_s_frame: 'Ободок вокруг аватара', sh3_s_emblem: 'Значок рядом с ником', sh3_s_sticker: 'До 3 штук на баннер профиля и карточку в Discord',
      sh3_s_ncolor: 'Цвет ника везде в приложении', sh3_s_vfx: 'Играет на экране победы',
      sh3_d_banner4: 'Баннер аниме-коллекции. В комплекте — фон профиля в том же стиле (работает с Premium).', sh3_d_banner: 'Баннер профиля — виден в матче, рейтинге и профиле.', sh3_d_frame: 'Рамка аватара везде, где виден аватар.',
      sh3_d_emblem: 'Эмблема рядом с ником.', sh3_d_emblem900: 'Редкая эмблема рядом с ником.', sh3_d_emblem600: 'Анимированная эмблема рядом с ником.', sh3_d_emblem300: 'Эмблема рядом с ником.',
      sh3_d_sticker: 'Наклейка на баннер профиля.', sh3_d_ncolor: 'Цвет ника по всему приложению.', sh3_d_vfx: 'Эффект на экране победы.',
      sh3_premD: 'Премиум-баннеры, рамки и эмблемы, свой аватар и не только.', sh3_plusD: 'Всё из Premium, а ещё цвета ника, больше баннеров и сравнение.',
      sh3_activeTill: 'Активно до {d}', sh3_passD: '{n} уровней наград за матчи и задания.',
      sh3_svc: 'Услуги', sh3_svcS: 'Смена ника, промокоды и бесплатные KF',
      sh3_nickD: 'Сейчас твой ник: {n}.', sh3_promoD: 'Есть код со стрима, розыгрыша или от партнёра? Введи его здесь.',
      sh3_short: 'Не хватает KF: ещё {n}', sh3_playVfx: 'Проиграть',
    },
  };
  const L2 = {
    en: {
      sh3_heroTag: 'Konzte shop', sh3_heroT: 'Build your look', sh3_heroS: 'Banners, frames, emblems, stickers and nick colours — try everything on your own nick before you buy.',
      sh3_heroGo: 'To the items', sh3_f1: 'Try before you buy', sh3_f1d: 'Click any item — see it in the match room, leaderboard and profile.',
      sh3_f2: 'Cosmetics only', sh3_f2d: 'Nothing here affects ELO or matchmaking.', sh3_f3: 'KF or PayPal', sh3_f3d: 'Pay with earned coins or buy single items for $.',
      sh3_f4: 'Cart', sh3_f4d: 'Collect several items and buy them for KF in one go.',
      sh3_cart: 'Cart', sh3_toCart: 'Add to cart', sh3_inCart: 'In cart', sh3_cartEmpty: 'Cart is empty', sh3_cartEmptyD: 'Press «Add to cart» in an item window — it will show up here.',
      sh3_total: 'Total', sh3_checkout: 'Buy for {n} KF', sh3_cartNone: 'Cart is empty', sh3_remove: 'Remove', sh3_clear: 'Clear',
      sh3_usdInfo: 'Or ${u} via PayPal — PayPal pays one item at a time, use the $ button on the item.', sh3_usdOnlyRow: '$ only — buy separately',
      sh3_bought: 'Bought: {n}', sh3_failed: '«{n}» was not bought: {e}', sh3_buying: 'Buying… {i}/{n}', sh3_after: 'You will have {n} KF left.',
    },
    uk: {
      sh3_heroTag: 'Магазин Konzte', sh3_heroT: 'Збери свій образ', sh3_heroS: 'Банери, рамки, емблеми, наліпки й кольори ніку — приміряй усе на свій нік до покупки.',
      sh3_heroGo: 'До предметів', sh3_f1: 'Приміряй до покупки', sh3_f1d: 'Клацни по предмету — побачиш його в матчі, рейтингу й профілі.',
      sh3_f2: 'Лише косметика', sh3_f2d: 'Ніщо тут не впливає на ELO і підбір.', sh3_f3: 'KF або PayPal', sh3_f3d: 'Плати зароблені коїни або купуй окремі предмети за $.',
      sh3_f4: 'Кошик', sh3_f4d: 'Збери кілька предметів і купи їх за KF одним кліком.',
      sh3_cart: 'Кошик', sh3_toCart: 'У кошик', sh3_inCart: 'У кошику', sh3_cartEmpty: 'Кошик порожній', sh3_cartEmptyD: 'Натисни «У кошик» у вікні предмета — він з’явиться тут.',
      sh3_total: 'Разом', sh3_checkout: 'Купити за {n} KF', sh3_cartNone: 'Кошик порожній', sh3_remove: 'Прибрати', sh3_clear: 'Очистити',
      sh3_usdInfo: 'Або ${u} через PayPal — PayPal оплачує по одному предмету, тисни $ на картці.', sh3_usdOnlyRow: 'Лише за $ — купи окремо',
      sh3_bought: 'Куплено: {n}', sh3_failed: '«{n}» не куплено: {e}', sh3_buying: 'Купуємо… {i}/{n}', sh3_after: 'Залишиться {n} KF.',
    },
    ru: {
      sh3_heroTag: 'Магазин Konzte', sh3_heroT: 'Собери свой образ', sh3_heroS: 'Баннеры, рамки, эмблемы, наклейки и цвета ника — примерь всё на свой ник до покупки.',
      sh3_heroGo: 'К предметам', sh3_f1: 'Примерь до покупки', sh3_f1d: 'Кликни по предмету — увидишь его в матче, рейтинге и профиле.',
      sh3_f2: 'Только косметика', sh3_f2d: 'Ничто здесь не влияет на ELO и подбор.', sh3_f3: 'KF или PayPal', sh3_f3d: 'Плати заработанными коинами или покупай отдельные предметы за $.',
      sh3_f4: 'Корзина', sh3_f4d: 'Собери несколько предметов и купи их за KF одним кликом.',
      sh3_cart: 'Корзина', sh3_toCart: 'В корзину', sh3_inCart: 'В корзине', sh3_cartEmpty: 'Корзина пуста', sh3_cartEmptyD: 'Нажми «В корзину» в окне предмета — он появится здесь.',
      sh3_total: 'Итого', sh3_checkout: 'Купить за {n} KF', sh3_cartNone: 'Корзина пуста', sh3_remove: 'Убрать', sh3_clear: 'Очистить',
      sh3_usdInfo: 'Или ${u} через PayPal — PayPal оплачивает по одному предмету, жми $ на карточке.', sh3_usdOnlyRow: 'Только за $ — купи отдельно',
      sh3_bought: 'Куплено: {n}', sh3_failed: '«{n}» не куплен: {e}', sh3_buying: 'Покупаем… {i}/{n}', sh3_after: 'Останется {n} KF.',
    },
  };
  const L3 = {
    en: {
      sh3_tabAll: 'All', sh3_seeAll: 'See all', sh3_search: 'Search items', sh3_found: 'Found: {n}', sh3_none: 'Nothing found',
      sh3_me: 'For me', sh3_gift: 'Gift to a friend', sh3_who: 'Who gets it', sh3_findFr: 'Find a friend', sh3_noFr: 'No friends yet — add them on the Friends page.',
      sh3_pick: 'Pick a friend', sh3_toPay: 'To pay', sh3_payBtn: 'Pay {p}', sh3_method: 'Payment', sh3_viaPP: 'PayPal in the browser', sh3_viaBal: 'From your KF balance',
      sh3_inside: 'What you get', sh3_forever: 'Forever — no time limit.', sh3_giftPP: 'Gifts are paid via PayPal only.', sh3_coins: 'Coins', sh3_bonus: 'Bonus',
      sh3_kits: 'Bundles (better value)', sh3_kitsA: 'Bundles · Anime', sh3_kitsD: 'Bundles · Dark fantasy', sh3_kitsS: 'Banner, frame, avatar and profile background in one style — cheaper than separately', sh3_kitN: 'Bundle {n}', sh3_kitD: 'Banner, frame and avatar «{n}» in one style + a matching profile background (works with Premium).', sh3_kitWear: 'Wear all', s2_k_kit: 'bundle', s2_t_kit: 'Bundles', sh3_kitPbg: 'with Premium', sh3_owned: 'Already yours', sh3_starterOnce: 'One per account this season.',
    },
    uk: {
      sh3_tabAll: 'Усе', sh3_seeAll: 'Усі', sh3_search: 'Пошук товарів', sh3_found: 'Знайдено: {n}', sh3_none: 'Нічого не знайдено',
      sh3_me: 'Собі', sh3_gift: 'Подарувати другу', sh3_who: 'Кому', sh3_findFr: 'Знайти друга', sh3_noFr: 'Друзів поки немає — додай їх на сторінці «Друзі».',
      sh3_pick: 'Обери друга', sh3_toPay: 'До оплати', sh3_payBtn: 'Оплатити {p}', sh3_method: 'Спосіб оплати', sh3_viaPP: 'PayPal у браузері', sh3_viaBal: 'З балансу KF',
      sh3_inside: 'Що отримаєш', sh3_forever: 'Назавжди — термін не обмежений.', sh3_giftPP: 'Подарунок оплачується лише через PayPal.', sh3_coins: 'Коїни', sh3_bonus: 'Бонус',
      sh3_kits: 'Комплекти (вигідніше)', sh3_kitsA: 'Комплекти · Аніме', sh3_kitsD: 'Комплекти · Темне фентезі', sh3_kitsS: 'Банер, рамка, аватар і фон профілю в одному стилі — дешевше, ніж окремо', sh3_kitN: 'Комплект {n}', sh3_kitD: 'Банер, рамка й аватар «{n}» в єдиному стилі + фон профілю в тому ж стилі (діє з Premium).', sh3_kitWear: 'Надіти все', s2_k_kit: 'комплект', s2_t_kit: 'Комплекти', sh3_kitPbg: 'з Premium', sh3_owned: 'Уже твоє', sh3_starterOnce: 'Один раз на акаунт за сезон.',
    },
    ru: {
      sh3_tabAll: 'Всё', sh3_seeAll: 'Все', sh3_search: 'Поиск товаров', sh3_found: 'Найдено: {n}', sh3_none: 'Ничего не найдено',
      sh3_me: 'Себе', sh3_gift: 'Подарить другу', sh3_who: 'Кому', sh3_findFr: 'Найти друга', sh3_noFr: 'Друзей пока нет — добавь их на странице «Друзья».',
      sh3_pick: 'Выбери друга', sh3_toPay: 'К оплате', sh3_payBtn: 'Оплатить {p}', sh3_method: 'Способ оплаты', sh3_viaPP: 'PayPal в браузере', sh3_viaBal: 'С баланса KF',
      sh3_inside: 'Что получишь', sh3_forever: 'Навсегда — срок не ограничен.', sh3_giftPP: 'Подарок оплачивается только через PayPal.', sh3_coins: 'Коины', sh3_bonus: 'Бонус',
      sh3_kits: 'Комплекты (выгоднее)', sh3_kitsA: 'Комплекты · Аниме', sh3_kitsD: 'Комплекты · Тёмное фэнтези', sh3_kitsS: 'Баннер, рамка, аватар и фон профиля в одном стиле — дешевле, чем по отдельности', sh3_kitN: 'Комплект {n}', sh3_kitD: 'Баннер, рамка и аватар «{n}» в едином стиле + фон профиля в том же стиле (работает с Premium).', sh3_kitWear: 'Надеть всё', s2_k_kit: 'комплект', s2_t_kit: 'Комплекты', sh3_kitPbg: 'с Premium', sh3_owned: 'Уже твоё', sh3_starterOnce: 'Один раз на аккаунт за сезон.',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k], L[k], L2[k], L3[k]);

  const IC = {
    l: '<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>',
    r: '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    eye: '<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    pen: '<svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>',
    tag: '<svg viewBox="0 0 24 24"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/></svg>',
    coin: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 9.5c0-1.2 1.3-2 3-2s3 .8 3 2-1.3 1.8-3 2.2-3 1-3 2.3 1.3 2 3 2 3-.8 3-2"/></svg>',
    play: '<svg viewBox="0 0 24 24"><path d="M7 5l12 7-12 7z"/></svg>',
    cart: '<svg viewBox="0 0 24 24"><path d="M3 4h2.5l2.2 11h10.6l2-8H7"/><circle cx="9.5" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 3l7.5 3v5.5c0 4.7-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.8-7.5-9.5V6z"/></svg>',
    gift: '<svg viewBox="0 0 24 24"><rect x="3.5" y="8" width="17" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12M12 8c-1-3-5-4-5-1.5S10 8 12 8zm0 0c1-3 5-4 5-1.5S14 8 12 8z"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    trash: '<svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V4.5h6V7M6.5 7l1 13h9l1-13"/></svg>',
  };
  const ON = () => !!window.KZ_V3?.();
  const split = v => { const i = v.indexOf('|'); return [v.slice(0, i), v.slice(i + 1)]; };
  const ST = { rows: {}, hide: false, m: null };
  const TB = () => (S.sh3 ||= { tab: 'all', q: '' });
  const CART_K = 'kz-sh3-cart';
  const cartGet = () => { try { const v = JSON.parse(localStorage.getItem(CART_K) || '[]'); return Array.isArray(v) ? v.filter(x => typeof x === 'string') : []; } catch { return []; } };
  const cartSet = v => { try { localStorage.setItem(CART_K, JSON.stringify([...new Set(v)])); } catch {} };
  const cartItems = () => cartGet().map(key => { const [k, id] = split(key); return S.shop?.items.find(x => x.kind === k && x.id === id); }).filter(Boolean);
  const cartClean = () => { if (!S.shop) return; const keep = cartItems().filter(it => !s2Has(it.kind, it.id)).map(it => it.kind + '|' + it.id); if (keep.length !== cartGet().length) cartSet(keep); };
  const inCart = (k, id) => cartGet().includes(k + '|' + id);
  const KINDS = ['banner', 'frame', 'emblem', 'sticker', 'ncolor', 'vfx'];
  const CAROUSEL_N = { banner: 4, frame: 5, emblem: 6, sticker: 6, ncolor: 5, vfx: 4 };

  const coin = (cls = '') => `<i class="sh3-coin ${cls}"><b>K</b></i>`;
  const badge = (k, txt) => `<span class="sh3-bd ${k}">${txt || t('sh3_b_' + k)}</span>`;
  const card = ({ cls = '', attrs = '', art, title, bd = '', desc = '', price = '', act = '' }) =>
    `<div class="sh3-card ${cls}" ${attrs}><div class="sh3-art">${art}</div><div class="sh3-body">
      <div class="sh3-tt"><b title="${esc(String(title).replace(/<[^>]+>/g, ''))}">${title}</b>${bd}</div>${desc ? `<p class="sh3-d">${desc}</p>` : ''}
      <div class="sh3-foot"><div class="sh3-pr">${price}</div>${act}</div></div></div>`;
  const sec = (id, title, sub, body, { n, row, cols = '' } = {}) => `<section class="sh3-sec" id="sh3-${id}">
    <div class="sh3-sh"><div><h2>${title}${n != null ? `<i>${n}</i>` : ''}</h2><p>${sub}</p></div><span class="grow"></span>
      ${row ? `<button class="sh3-all" data-sh3tab="${id}">${t('sh3_seeAll')} ${IC.r}</button><button class="sh3-nav" data-sh3nav="${id}" data-dir="-1" aria-label="‹">${IC.l}</button><button class="sh3-nav" data-sh3nav="${id}" data-dir="1" aria-label="›">${IC.r}</button>` : ''}</div>
    ${row ? `<div class="sh3-row n${row}" data-sh3row="${id}">${body}</div>` : `<div class="sh3-grid ${cols}">${body}</div>`}</section>`;
  const fmtD = ms => new Date(ms).toLocaleDateString(LANG === 'en' ? 'en-GB' : LANG === 'ru' ? 'ru-RU' : 'uk-UA', { day: 'numeric', month: 'short' });

  const pctChip = n => n ? `<em class="sh3-pct">−${n}%</em>` : '';
  function itemPrice(it, pct = 0) {
    const sh = S.shop, n = s2Now(it), u = s2UsdNow(it);
    if (it.usdOnly) return `<div class="sh3-p1"><b>$${u}</b>${u !== it.usd ? `<s>$${it.usd}</s>` : ''}${pctChip(pct)}</div><div class="sh3-p2">PayPal</div>`;
    return `<div class="sh3-p1"><b>${n} KF</b>${n < it.price ? `<s>${it.price}</s>` : ''}${pctChip(pct)}</div>
      ${sh.pay?.enabled && it.usd ? `<button class="sh3-p2 lnk" data-sh3open="${it.kind}|${esc(it.id)}" data-pay="usd" title="${esc(t('s2_buyUsd', { u }))}">${t('sh3_or')} $${u}</button>` : ''}`;
  }
  function itemAct(it, has, worn) {
    const k = it.kind, id = esc(it.id);
    if (worn) return k === 'sticker' ? `<button class="btn ghost sh3-btn" data-sh3eq="${k}|${id}">${t('s2_place')}</button>` : `<button class="btn ghost sh3-btn" data-sh3eq="${k}|">${t('s2_take')}</button>`;
    if (has) return `<button class="btn sh3-btn" data-sh3eq="${k}|${id}">${k === 'sticker' ? t('s2_place') : t('s2_wear')}</button>`;
    return `<button class="btn sh3-btn sh3-cta" data-sh3open="${k}|${id}" ${it.usdOnly && !S.shop.pay?.enabled ? 'disabled' : ''}>${t('sh3_buy')}</button>`;
  }
  function itemArt(k, id, grid) {
    if (grid && k === 'banner') return `<div class="sh3-ph"><div class="sh3-phb">${bannerHtml(id, 'bimg')}</div><div class="sh3-phn">${avaF(S.me)}<b>${nickHtml(S.me)}</b></div></div>`;
    if (k === 'banner') return `<div class="sh3-ban">${bannerHtml(id, 'bimg')}<span>${avaF(S.me)}<b>${nickHtml(S.me)}</b></span></div>`;
    if (k === 'theme') return kzThemeThumb(id);
    if (k === 'music') return kzMusThumb(id);
    return s2Thumb(k, id);
  }
  function itemCard(it, grid) {
    const k = it.kind, has = s2Has(k, it.id), worn = has && s2Worn(k, it.id);
    const sale = !has && (it.usdOnly ? s2UsdNow(it) !== it.usd : s2Now(it) < it.price);
    const desc = k === 'theme' ? esc(kzThemeT(it.id)) : k === 'music' ? esc(kzMusDesc(it.id)) : k === 'emblem' && [900, 600, 300].includes(it.price) ? t('sh3_d_emblem' + it.price) : t('sh3_d_' + (k === 'banner' && /^b[45]_/.test(it.id) ? 'banner4' : k));
    const act = k === 'theme' && !has
      ? `<div class="sh3-acts"><button class="btn ghost sh3-btn sq" data-thtry="${kzThPrev?.id === it.id ? '' : esc(it.id)}" title="${esc(kzThemeT('tryOn'))}">${IC.eye}</button>${itemAct(it, has, worn)}</div>`
      : itemAct(it, has, worn);
    return card({
      cls: `k-${k} ${grid && k === 'banner' ? 'ph' : ''} ${has ? 'own' : ''} ${worn ? 'worn' : ''}`, attrs: `data-sh3try="${k}|${esc(it.id)}"`,
      art: `${itemArt(k, it.id, grid)}<span class="sh3-tryic">${IC.eye}</span>`,
      title: esc(s2Name(k, it.id)), bd: worn ? badge('worn') : has ? badge('owned') : inCart(k, it.id) ? badge('cart', t('sh3_inCart')) : badge('forever'),
      desc, price: has ? `<div class="sh3-p1 win">✓ ${t('sh3_b_owned')}</div>` : itemPrice(it, sale ? (S.shop.sale?.pct || Math.round((1 - s2Now(it) / it.price) * 100)) : 0), act,
    });
  }
  const sorted = (list) => list.map((it, i) => [it, i]).sort((a, b) => s2Has(a[0].kind, a[0].id) - s2Has(b[0].kind, b[0].id) || (b[0].kind === 'emblem' ? b[0].price - a[0].price : 0) || a[1] - b[1]).map(x => x[0]);

  function featured() {
    const sh = S.shop, pi = S.premInfo, my = S.me?.premium, cards = [];
    for (const tier of ['premium', 'plus']) {
      const tp = pi?.tiers?.[tier]; if (!tp) continue;
      const act = my?.tier === tier && my.until > Date.now();
      cards.push(card({
        cls: `feat t-${tier}`, attrs: 'data-sh3go="premium"',
        art: `<div class="sh3-hero"><img src="assets/crown-${tier}.png" alt=""><b>${tier === 'plus' ? 'Premium<em>+</em>' : 'Premium'}</b></div>`,
        title: tier === 'plus' ? 'Premium+' : 'Premium', bd: act ? badge('active') : badge('term', t('sh3_b_term').replace('30', pi.days || 30)),
        desc: act ? `<span class="win">${t('sh3_activeTill', { d: fmtD(my.until) })}</span> · ${t(tier === 'plus' ? 'sh3_plusD' : 'sh3_premD')}` : t(tier === 'plus' ? 'sh3_plusD' : 'sh3_premD'),
        price: `<div class="sh3-p1"><span class="sh3-from">${t('sh3_from')}</span><b>$${tp.price}</b>${tp.was && tp.was !== tp.price ? `<s>$${tp.was}</s>${pctChip(pi.sale?.pct)}` : ''}</div>`,
        act: `<button class="btn sh3-btn sh3-cta" data-sh3go="premium">${act ? t('sh3_extend') : t('sh3_buy')}</button>`,
      }));
    }
    const p = typeof LC !== 'undefined' ? LC.st?.pass : null;
    if (p) cards.push(card({
      cls: 'feat t-pass', attrs: 'data-sh3go="pass"',
      art: `<div class="sh3-hero pass"><img class="bg" src="assets/season1_hero.jpg" alt=""><img class="lg" src="assets/season1_logo.png" alt=""><span class="sh3-lv">${p.level}<small>/${p.levels}</small></span></div>`,
      title: t('lcPass'), bd: p.prem ? badge('active') : badge('season'),
      desc: t('sh3_passD', { n: p.levels }),
      price: p.prem ? `<div class="sh3-p1 win">✓ ${t('sh3_b_active')}</div>` : `<div class="sh3-p1"><b>$${p.price.usd}</b></div><div class="sh3-p2">${t('sh3_or')} ${p.price.kf} KF</div>`,
      act: `<button class="btn sh3-btn ${p.prem ? 'ghost' : 'sh3-cta'}" data-sh3go="pass">${p.prem ? t('sh3_open') : t('sh3_buy')}</button>`,
    }));
    const s = typeof LC !== 'undefined' ? LC.st?.starter : null;
    if (s && !s.bought) {
      const bn = s.items.find(x => x.kind === 'banner'), em = s.items.find(x => x.kind === 'emblem');
      cards.push(card({
        cls: 'feat t-starter', attrs: 'data-sh3try="starter|s"',
        art: `<div class="sh3-hero starter">${bn ? bannerHtml(bn.id, 'bimg') : ''}<div class="sh3-stk">${em ? emblemHtml(em.id, 'big') : ''}<span>${coin('sm')}+${s.kf} KF</span></div></div>`,
        title: t('lcStarterTitle'), bd: badge('once'), desc: t('lcStarterSub', { v: s.value }),
        price: `<div class="sh3-p1"><b>$${s.usd}</b></div>`,
        act: `<button class="btn sh3-btn sh3-cta" data-sh3open="starter|s" ${sh.pay?.enabled ? '' : 'disabled'}>${t('sh3_buy')}</button>`,
      }));
    }
    return cards.length ? sec('feat', t('sh3_feat'), t('sh3_featS'), cards.join(''), { cols: 'c4' }) : '';
  }

  const kitName = id => s2Name('banner', id.replace(/^kit([45])_/, 'b$1_'));
  function kitCard(it) {
    const has = s2Has('kit', it.id), now = s2UsdNow(it), pct = it.was ? Math.round((1 - now / it.was) * 100) : 0, kf = s2Now(it);
    return card({
      cls: `k-kit ${has ? 'own' : ''}`, attrs: `data-sh3try="kit|${esc(it.id)}"`,
      art: `<img class="sh3-kimg" src="assets/kit/${esc(it.id)}.jpg" alt="" loading="lazy"><span class="sh3-tryic">${IC.eye}</span>`,
      title: esc(s2Name('kit', it.id)), bd: has ? badge('owned') : badge('forever'),
      desc: esc(t('sh3_kitD', { n: kitName(it.id) })),
      price: has ? `<div class="sh3-p1 win">✓ ${t('sh3_b_owned')}</div>` : it.price ? `<div class="sh3-p1"><b>${kf} KF</b>${it.kfWas ? `<s>${it.kfWas}</s>` : ''}${pctChip(it.kfWas ? Math.round((1 - kf / it.kfWas) * 100) : 0)}</div><div class="sh3-p2">${t('sh3_or')} $${now} <s>$${it.was}</s></div>`
        : `<div class="sh3-p1"><b>$${now}</b>${it.was ? `<s>$${it.was}</s>` : ''}${pctChip(pct)}</div><div class="sh3-p2">PayPal</div>`,
      act: has ? `<button class="btn sh3-btn" data-sh3kiteq="${esc(it.id)}">${t('sh3_kitWear')}</button>`
        : `<button class="btn sh3-btn sh3-cta" data-sh3open="kit|${esc(it.id)}" ${S.shop.pay?.enabled ? '' : 'disabled'}>${t('sh3_buy')}</button>`,
    });
  }
  function kits(grid) {
    return [['kit5', /^kit5_/, 'sh3_kitsD'], ['kit', /^kit4_/, 'sh3_kitsA']].map(([sid, re, tt]) => {
      if (!S.shop.items.some(x => x.kind === 'kit' && re.test(x.id))) return '';
      const list = S.shop.items.filter(x => x.kind === 'kit' && re.test(x.id) && !(ST.hide && s2Has('kit', x.id)));
      const body = list.length ? sorted(list).map(kitCard).join('') : `<div class="sh3-none mute">${t('s2_nothing')}</div>`;
      return sec(sid, t(tt), t('sh3_kitsS'), body, grid ? { n: list.length, cols: 'g-kit' } : { n: list.length, row: 4 });
    }).join('');
  }

  function packs() {
    const sh = S.shop, on = !!sh.pay?.enabled;
    const body = (sh.packs || []).map((pk, i) => card({
      cls: `kfp ${pk.best ? 'best' : ''}`, attrs: `data-sh3try="kf|${esc(pk.id)}"`,
      art: `<div class="sh3-hero kf"><span class="sh3-coins n${Math.min(i + 1, 4)}">${coin('c1')}${i > 0 ? coin('c2') : ''}${i > 1 ? coin('c3') : ''}${i > 2 ? coin('c4') : ''}</span><b class="num">${pk.coins}<small>KF</small></b>${pk.bonus ? `<span class="sh3-bonus">+${pk.bonus}%</span>` : ''}</div>${pk.best ? `<span class="sh3-best">${t('bestValue')}</span>` : ''}`,
      title: `${pk.coins} KF`, bd: badge('once'),
      desc: pk.bonus ? t('sh3_kfBonus', { n: pk.bonus }) : t('sh3_kfD'),
      price: on ? `<div class="sh3-p1"><b>$${pk.price}</b>${pk.was && pk.was !== pk.price ? `<s>$${pk.was}</s>${pctChip(Math.round((1 - pk.price / pk.was) * 100))}` : ''}</div>` : `<div class="sh3-p1 mute">${t('notConfigured')}</div>`,
      act: `<button class="btn sh3-btn sh3-cta" data-sh3open="kf|${esc(pk.id)}" ${on ? '' : 'disabled'}>${t('sh3_buy')}</button>`,
    })).join('');
    return body ? sec('kf', t('sh3_kf'), t('sh3_kfS') + (sh.pay?.sandbox ? ` · <span class="lose">${t('sandboxNote')}</span>` : ''), body, { cols: 'c4' }) : '';
  }

  function services() {
    const sh = S.shop, nk = sh.nick, out = [];
    if (nk) out.push(`<div class="sh3-card svc"><div class="sh3-body">
      <div class="sh3-tt"><b><i class="sh3-ic">${IC.pen}</i>${t('nickChange')}</b>${badge('once')}</div>
      <p class="sh3-d">${t('nickChangeHint', { n: `<b>${esc(nk.current || '')}</b>` })}</p>
      ${nk.tokens ? `<div class="win sh3-d">${t('nickTokens', { n: nk.tokens })}</div>` : ''}
      <form id="nick-form" class="sh3-form"><input id="nick-in" maxlength="25" placeholder="${t('newNickPh')}" autocomplete="off" spellcheck="false">
        <button class="btn sh3-btn ${nk.free ? 'sh3-cta' : ''}" data-nvia="kf" ${nk.free || nk.tokens || sh.coins >= nk.kf ? '' : 'disabled'}>${nk.free ? t('nickFreeBtn', { n: nk.free, m: nk.freeMax }) : nk.tokens ? t('nickUseToken') : `${nk.kf} KF`}</button>
        ${sh.pay?.enabled && !nk.tokens && !nk.free ? `<button class="btn ghost sh3-btn" data-nvia="usd">$${nk.usd}</button>` : ''}</form></div></div>`);
    out.push(`<div class="sh3-card svc"><div class="sh3-body">
      <div class="sh3-tt"><b><i class="sh3-ic">${IC.tag}</i>${t('promoCode')}</b></div><p class="sh3-d">${t('sh3_promoD')}</p>
      <form id="promo-form" class="sh3-form"><input id="promo-in" maxlength="32" placeholder="${t('promoPh')}" autocomplete="off" spellcheck="false" style="text-transform:uppercase"><button class="btn sh3-btn sh3-cta">${t('activate')}</button></form></div></div>`);
    out.push(`<div class="sh3-card svc"><div class="sh3-body">
      <div class="sh3-tt"><b><i class="sh3-ic">${IC.coin}</i>${t('s2_earn')}</b></div>
      <div class="sh3-earn"><span>${t('s2_eWin')}</span><b>+15 KF</b><span>${t('s2_eLoss')}</span><b>+5 KF</b><span>${t('s2_eRef')}</span><b>+250 KF</b>
        <span>${t('s2_eQuest')}</span><a href="#" data-sh3go="pass">${t('s2_more')} →</a></div>
      <button class="btn ghost sh3-btn" data-sh3go="referrals">${t('earnCoins')}</button></div></div>`);
    return sec('svc', t('sh3_svc'), t('sh3_svcS'), out.join(''), { cols: 'c3' });
  }

  function hero() {
    const bn = S.me?.prem?.banner || S.shop.items.find(x => x.kind === 'banner')?.id;
    const f = (ic, h, d) => `<div class="sh3-fr"><i class="sh3-ic">${ic}</i><div><b>${h}</b><span>${d}</span></div></div>`;
    return `<div class="sh3-hero-w"><div class="sh3-heroA">${bn ? bannerHtml(bn, 'bimg') : ''}<div class="sh3-heroT">
        <span class="p3-h sh3-tagl"><img src="assets/logo.png" alt=""><em>${t('sh3_heroTag')}</em></span><h2>${t('sh3_heroT')}</h2><p>${t('sh3_heroS')}</p>
        <div class="sh3-heroB"><button class="btn sh3-btn sh3-cta" data-sh3tab="${S.shop.items.some(x => x.kind === 'banner') ? 'banner' : 'kf'}">${t('sh3_heroGo')}</button>
          <button class="btn ghost sh3-btn" data-sh3tab="kf">${t('sh3_kf')}</button><button class="btn ghost sh3-btn" data-sh3go="premium">Premium</button>
          <button class="btn ghost sh3-btn" data-sh3cart>${IC.cart}${t('sh3_cart')}</button></div></div>
        <div class="sh3-heroMe">${avaF(S.me, 'lg')}<b>${nickHtml(S.me)}</b></div></div>
      <div class="sh3-feats">${f(IC.eye, t('sh3_f1'), t('sh3_f1d'))}${f(IC.shield, t('sh3_f2'), t('sh3_f2d'))}${f(IC.coin, t('sh3_f3'), t('sh3_f3d'))}${f(IC.cart, t('sh3_f4'), t('sh3_f4d'))}</div></div>`;
  }

  function openCart(msg) {
    cartClean();
    const sh = S.shop, items = cartItems();
    const kfItems = items.filter(it => !it.usdOnly), usdOnly = items.filter(it => it.usdOnly);
    const kf = kfItems.reduce((a, it) => a + s2Now(it), 0);
    const usd = kfItems.reduce((a, it) => a + (+s2UsdNow(it) || 0), 0);
    const left = sh.coins - kf;
    const row = it => `<div class="sh3-ci"><div class="sh3-cth k-${it.kind}">${itemArt(it.kind, it.id)}</div>
        <div class="grow"><b>${esc(s2Name(it.kind, it.id))}</b><span class="mute">${t('s2_k_' + it.kind)}${it.usdOnly ? ` · ${t('sh3_usdOnlyRow')}` : ''}</span></div>
        ${it.usdOnly ? `<button class="btn ghost sh3-btn" data-sh3usd="${it.kind}|${esc(it.id)}" ${sh.pay?.enabled ? '' : 'disabled'}>$${s2UsdNow(it)}</button>` : `<div class="sh3-p1"><b>${s2Now(it)} KF</b>${s2Now(it) < it.price ? `<s>${it.price}</s>` : ''}</div>`}
        <button class="sh3-x" data-sh3rm="${it.kind}|${esc(it.id)}" title="${esc(t('sh3_remove'))}">${IC.trash}</button></div>`;
    modal(`<div class="card modal sh3-mod sh3-cart"><div class="sh3-mh"><h2>${t('sh3_cart')}${items.length ? `<i>${items.length}</i>` : ''}</h2><span class="grow"></span>
        ${items.length ? `<button class="btn ghost sm" data-sh3clr>${t('sh3_clear')}</button>` : ''}<button class="sh3-x" data-close>${IC.x}</button></div>
      ${msg ? `<div class="sh3-cmsg ${msg.bad ? 'lose' : 'win'}">${msg.text}</div>` : ''}
      ${items.length ? `<div class="sh3-cl">${[...kfItems, ...usdOnly].map(row).join('')}</div>`
        : `<div class="sh3-cempty">${IC.cart}<b>${t('sh3_cartEmpty')}</b><span class="mute">${t('sh3_cartEmptyD')}</span></div>`}
      <div class="sh3-cf"><div class="sh3-pr"><span class="p3-h">${t('sh3_total')}</span>${kfItems.length ? `<div class="sh3-p1"><b>${kf} KF</b></div>` : ''}
          ${kfItems.length ? `<div class="sh3-p2 ${left < 0 ? 'lose' : ''}">${left < 0 ? t('sh3_short', { n: -left }) : t('sh3_after', { n: left })}</div>` : ''}</div>
        <button class="btn sh3-btn sh3-cta" data-sh3pay ${kfItems.length && left >= 0 ? '' : 'disabled'}>${kfItems.length ? t('sh3_checkout', { n: kf }) : t('sh3_cartNone')}</button></div>
      ${kfItems.length && sh.pay?.enabled && usd ? `<p class="mute sh3-cnote">${t('sh3_usdInfo', { u: usd.toFixed(2) })}</p>` : ''}
      ${kfItems.length && left < 0 ? `<a href="#" class="sh3-cnote" data-sh3jump="kf">${t('sh3_topup')} →</a>` : ''}</div>`, box => {
      bindActs(box, true);
      box.querySelectorAll('[data-sh3rm]').forEach(b => b.onclick = () => { cartSet(cartGet().filter(x => x !== b.dataset.sh3rm)); openCart(); refreshQuiet(); });
      const clr = box.querySelector('[data-sh3clr]'); if (clr) clr.onclick = () => { cartSet([]); openCart(); refreshQuiet(); };
      const pay = box.querySelector('[data-sh3pay]'); if (pay) pay.onclick = () => checkout(pay, kfItems);
    });
  }
  let busy = false;
  async function checkout(btn, list) {
    if (busy) return; busy = true; btn.disabled = true;
    const ok = []; let fail = null, last = null;
    for (let i = 0; i < list.length; i++) {
      const it = list[i];
      btn.textContent = t('sh3_buying', { i: i + 1, n: list.length });
      try {
        last = await api('/api/shop/buy', { kind: it.kind, id: it.id });
        S.shop = { ...S.shop, coins: last.coins, owned: last.owned };
        ok.push(it); cartSet(cartGet().filter(x => x !== it.kind + '|' + it.id));
      } catch (e) { fail = { it, e: e?.message || String(e) }; break; }
    }
    busy = false;
    if (last) { S.me = last.me; S.myProfile = { ...S.myProfile, ...last.me }; renderMe(); sfx('coin'); }
    if (ok.some(it => ['sticker', 'ncolor', 'vfx'].includes(it.kind)) && typeof lcLoad === 'function') lcLoad(true);
    const names = ok.map(it => s2Name(it.kind, it.id)).join(', ');
    const parts = [];
    if (ok.length) parts.push(esc(t('sh3_bought', { n: names })));
    if (fail) parts.push(esc(t('sh3_failed', { n: s2Name(fail.it.kind, fail.it.id), e: typeof tErr === 'function' ? tErr(fail.e) : fail.e })));
    if (ok.length) toast(t('sh3_bought', { n: names }));
    refreshQuiet();
    if (fail || cartGet().length) openCart({ bad: !!fail, text: parts.join('<br>') }); else { closeModal(); toast(t('bought')); }
    loadShop();
  }
  const refreshQuiet = () => { if (S.page === 'shop' && ON()) { render(page()); bind(); } };

  const match = (it, q) => !q || String(s2Name(it.kind, it.id)).toLowerCase().includes(q) || String(it.id).toLowerCase().includes(q);
  function page() {
    const sh = S.shop, tb = TB(), q = tb.q.trim().toLowerCase();
    const total = k => sh.items.filter(x => x.kind === k).length;
    const ITEM_TABS = ['theme', 'music', ...KINDS].filter(k => total(k));
    const tabs = [['all', t('sh3_tabAll')], ['feat', t('sh3_feat')], ...(total('kit') ? [['kit', t('s2_t_kit')]] : []), ['kf', t('sh3_kf')], ...ITEM_TABS.map(k => [k, t('s2_t_' + k)]), ['svc', t('sh3_svc')]];
    if (!tabs.some(x => x[0] === tb.tab)) tb.tab = 'all';
    const tab = tb.tab;
    const by = k => sh.items.filter(x => x.kind === k && !(ST.hide && s2Has(k, x.id)) && match(x, q));
    const subOf = k => k === 'theme' ? t('sh3_s_theme') : t('sh3_s_' + k);
    const none = `<div class="sh3-none mute">${q ? t('sh3_none') : t('s2_nothing')}</div>`;
    const parts = [];
    if (tab === 'all' && !q) {
      parts.push(featured(), kits(), packs());
      for (const k of ITEM_TABS) { const list = by(k); parts.push(sec(k, t('s2_t_' + k), subOf(k), list.length ? sorted(list).map(it => itemCard(it)).join('') : none, { n: total(k), row: k === 'theme' || k === 'music' ? 4 : CAROUSEL_N[k] })); }
      parts.push(services());
    } else if (tab === 'feat') parts.push(featured());
    else if (tab === 'kit') parts.push(kits(true));
    else if (tab === 'kf') parts.push(packs());
    else if (tab === 'svc') parts.push(services());
    else {
      const ks = tab === 'all' ? ITEM_TABS : [tab];
      let found = 0;
      for (const k of ks) {
        const list = by(k); found += list.length;
        if (!list.length && tab === 'all') continue;
        parts.push(sec(k, t('s2_t_' + k), subOf(k), list.length ? sorted(list).map(it => itemCard(it, true)).join('') : none, { n: q ? `${list.length}/${total(k)}` : total(k), cols: 'g-' + k }));
      }
      if (tab === 'all' && !found) parts.push(`<div class="sh3-none mute">${t('sh3_none')}</div>`);
    }

    const head = `<i class="lc-shop" hidden></i><div class="sh3-head"><div><h1>${t('shop')}</h1><div class="mute">${t('sh3_sub')}</div></div><span class="grow"></span>
      <div class="sh3-bal">${coin()}<div><span>${t('sh3_balance')}</span><b class="num">${sh.coins} KF</b></div>
        <button class="btn sh3-btn sh3-cta" data-sh3tab="kf">${t('sh3_topup')}</button></div>
        <button class="sh3-cartb" data-sh3cart title="${esc(t('sh3_cart'))}">${IC.cart}${cartGet().length ? `<i>${cartGet().length}</i>` : ''}</button></div>
      ${tab === 'all' ? hero() : ''}${s2SaleBar(sh.sale)}
      <div class="sh3-jump">${tabs.map(([id, n]) => `<button class="${tab === id ? 'on' : ''}" data-sh3tab="${id}">${n}</button>`).join('')}<span class="grow"></span>
        <label class="sh3-tog" title="${esc(t('sh3_hideOwned'))}"><input type="checkbox" id="sh3-hide" ${ST.hide ? 'checked' : ''}><i></i><span>${t('sh3_hideOwned')}</span></label>
        <label class="sh3-q">${IC.search}<input id="sh3-q" type="search" placeholder="${esc(t('sh3_search'))}" value="${esc(tb.q)}" autocomplete="off" spellcheck="false"></label></div>`;
    return `<div class="sh3">${head}${parts.join('')}</div>`;
  }

  const rowHtml = (art, type, name, cls = '') => `<div class="sh3-irow"><div class="sh3-cth ${cls}">${art}</div><div><span>${type}</span><b>${name}</b></div></div>`;
  const giftOrder = async body => { const r = await api('/api/webshop/buy', body); K.open(r.url); toast(t('payOpened')); };
  function model(kind, id) {
    const sh = S.shop, pp = !!sh.pay?.enabled;
    if (kind === 'starter') {
      const s = typeof LC !== 'undefined' ? LC.st?.starter : null; if (!s || s.bought) return null;
      const rows = s.items.map(x => x.kind === 'banner' || x.kind === 'emblem' || x.kind === 'frame' ? rowHtml(itemArt(x.kind, x.id), t('s2_k_' + x.kind), esc(cosName(x.id)), 'k-' + x.kind) : '').join('')
        + rowHtml(coin(), t('sh3_coins'), `+${s.kf} KF`, 'kfc');
      return { title: t('lcStarterTitle'), type: t('s2_t_starter'), bd: badge('once'), desc: `${t('lcStarterSub', { v: s.value })}`,
        left: `<div class="sh3-iart">${(s.items.find(x => x.kind === 'banner') ? bannerHtml(s.items.find(x => x.kind === 'banner').id, 'bimg') : '')}<div class="sh3-stk">${s.items.filter(x => x.kind === 'emblem').map(x => emblemHtml(x.id, 'big')).join('')}<span>${coin('sm')}+${s.kf} KF</span></div></div>`,
        rows, usd: pp ? s.usd : null, gift: false, cart: false,
        payUsd: async () => { const r = await api('/api/lc/starter/buy', {}); K.open(r.url); toast(t('payOpened')); } };
    }
    if (kind === 'kf') {
      const pk = (sh.packs || []).find(x => x.id === id); if (!pk) return null;
      const i = sh.packs.indexOf(pk);
      return { title: `${pk.coins} KF`, type: t('sh3_kf'), bd: badge('once'), desc: pk.bonus ? t('sh3_kfBonus', { n: pk.bonus }) + '. ' + t('sh3_kfD') : t('sh3_kfD'),
        left: `<div class="sh3-iart kf"><div class="sh3-hero kf"><span class="sh3-coins n${Math.min(i + 1, 4)}">${coin('c1')}${i > 0 ? coin('c2') : ''}${i > 1 ? coin('c3') : ''}${i > 2 ? coin('c4') : ''}</span><b class="num">${pk.coins}<small>KF</small></b></div></div>`,
        rows: rowHtml(coin(), t('sh3_coins'), `${Math.round(pk.coins / (1 + (pk.bonus || 0) / 100))} KF`, 'kfc') + (pk.bonus ? rowHtml(coin(), t('sh3_bonus'), `+${pk.coins - Math.round(pk.coins / (1 + pk.bonus / 100))} KF · +${pk.bonus}%`, 'kfc') : ''),
        usd: pp ? pk.price : null, usdOld: pk.was !== pk.price ? pk.was : null, gift: pp, cart: false,
        payUsd: async to => { if (to) return giftOrder({ type: 'kf', pack: pk.id, to }); const r = await api('/api/shop/coins', { pack: pk.id }); K.open(r.url); toast(t('payOpened')); } };
    }
    if (kind === 'kit') {
      const it = sh.items.find(x => x.kind === 'kit' && x.id === id); if (!it) return null;
      const has = s2Has('kit', id), bid = id.replace(/^kit([45])_/, 'b$1_');
      const rows = SHOP4.parts(id).map(x => rowHtml(itemArt(x.kind, x.id), t('s2_k_' + x.kind) + (s2Has(x.kind, x.id) ? ' · ✓' : ''), esc(s2Name(x.kind, x.id)), 'k-' + x.kind)).join('')
        + rowHtml(`<img class="sh3-kpbg" src="assets/pbg/${esc(bid)}.jpg" alt="">`, `${t('iv3_t_pbg')} · ${t('sh3_kitPbg')}`, esc(s2Name('banner', bid)), 'k-pbg');
      return { it, has, kit: true, title: esc(s2Name('kit', id)), type: t('s2_t_kit'), bd: has ? badge('owned') : badge('forever'),
        desc: esc(t('sh3_kitD', { n: kitName(id) })), forever: true, left: s2TryHtml({ kind: 'kit', id }, true), rows,
        kf: it.price ? s2Now(it) : null, kfOld: it.kfWas || null, usd: pp ? s2UsdNow(it) : null, usdOld: it.was || null, gift: pp, cart: false,
        payKf: () => s2Buy('kit', id),
        payUsd: async to => to ? giftOrder({ type: 'item', kind: 'kit', id, to }) : s2BuyUsd('kit', id) };
    }
    const it = sh.items.find(x => x.kind === kind && x.id === id); if (!it) return null;
    const has = s2Has(kind, id), worn = has && s2Worn(kind, id);
    const left = kind === 'theme' ? kzThemeTry(id, has)
      : kind === 'music' ? kzMusTry(id)
      : kind === 'vfx' ? `<div class="s2-vfx">${s2Thumb('vfx', id)}<button class="btn ghost" data-s2vfx="${esc(id)}">${IC.play} ${t('s2_vfxPlay')}</button><p class="mute">${t('lcVfxHint')}</p></div>`
      : s2TryHtml({ kind, id }, true);
    const desc = kind === 'theme' ? esc(kzThemeT(id)) : kind === 'music' ? esc(kzMusDesc(id)) : kind === 'emblem' && [900, 600, 300].includes(it.price) ? t('sh3_d_emblem' + it.price) : t('sh3_d_' + (kind === 'banner' && /^b[45]_/.test(id) ? 'banner4' : kind));
    return { it, has, worn, title: esc(s2Name(kind, id)), type: t('s2_k_' + kind), bd: worn ? badge('worn') : has ? badge('owned') : badge('forever'),
      desc: desc + (kind === 'sticker' ? ' ' + t('s2_stkNote') : ''), forever: true, left,
      rows: rowHtml(itemArt(kind, id), t('s2_k_' + kind), esc(s2Name(kind, id)), 'k-' + kind),
      kf: it.usdOnly ? null : s2Now(it), kfOld: !it.usdOnly && s2Now(it) < it.price ? it.price : null,
      usd: pp && it.usd ? s2UsdNow(it) : null, usdOld: it.usd && s2UsdNow(it) !== it.usd ? it.usd : null,
      gift: pp && !!it.usd, cart: !it.usdOnly,
      payKf: () => s2Buy(kind, id),
      payUsd: async to => to ? giftOrder({ type: 'item', kind, id, to }) : s2BuyUsd(kind, id) };
  }
  function openItem(kind, id, opt = {}) {
    const m = model(kind, id); if (!m) return;
    const key = kind + '|' + id;
    if (ST.m?.key !== key) ST.m = { key, who: 'me', pay: null, to: null };
    if (opt.pay) ST.m.pay = opt.pay;
    const st = ST.m, sh = S.shop;
    if (!m.gift) st.who = 'me';
    const opts = [m.kf != null && st.who === 'me' ? 'kf' : null, m.usd != null ? 'usd' : null].filter(Boolean);
    if (!opts.includes(st.pay)) st.pay = opts[0] || null;
    const pay = st.pay;
    const price = pay === 'kf' ? m.kf : m.usd, old = pay === 'kf' ? m.kfOld : m.usdOld;
    const pct = old ? Math.round((1 - price / old) * 100) : 0;
    const fmt = (v, p = pay) => p === 'kf' ? `${v} KF` : `$${v}`;
    const left = pay === 'kf' ? sh.coins - m.kf : 0;
    const friends = (S.live?.friends?.list || []).slice().sort((a, b) => (a.status === 'offline') - (b.status === 'offline') || String(a.nick).localeCompare(String(b.nick)));
    const right = `<div class="sh3-ibd">${m.bd}</div><p class="sh3-idesc">${m.desc}</p>
      <span class="p3-h">${t('sh3_inside')}</span><div class="sh3-irows">${m.rows}</div>
      ${m.forever ? `<p class="sh3-inote">${t('sh3_forever')}</p>` : kind === 'starter' ? `<p class="sh3-inote">${t('sh3_starterOnce')}</p>` : ''}
      ${m.has ? '' : `
        ${m.gift ? `<div class="sh3-chips"><button class="${st.who === 'me' ? 'on' : ''}" data-sh3who="me">${t('sh3_me')}</button><button class="${st.who === 'gift' ? 'on' : ''}" data-sh3who="gift">${IC.gift}${t('sh3_gift')}</button></div>` : ''}
        ${st.who === 'gift' ? `<span class="p3-h">${t('sh3_who')}</span>${friends.length ? `<input class="sh3-gq" placeholder="${esc(t('sh3_findFr'))}" autocomplete="off"><div class="sh3-fl">${friends.map(f => `<button class="sh3-fr2 ${st.to === f.id ? 'on' : ''}" data-sh3to="${esc(f.id)}" data-nick="${esc(String(f.nick || '').toLowerCase())}">${avaF(f, 'sm')}<span class="grow nkl">${nickHtml(f)}</span><i>${IC.check}</i></button>`).join('')}</div>` : `<p class="sh3-inote">${t('sh3_noFr')}</p>`}<p class="sh3-inote">${t('sh3_giftPP')}</p>` : ''}
        ${opts.length ? `<span class="p3-h">${t('sh3_method')}</span><div class="sh3-chips">${opts.map(o => `<button class="${pay === o ? 'on' : ''}" data-sh3pm="${o}">${o === 'kf' ? `KF · ${m.kf}` : `$ · ${m.usd}`}</button>`).join('')}</div>` : ''}`}`;
    const foot = m.has && m.kit
      ? `<div class="sh3-pr"><span class="p3-h">${t('sh3_owned')}</span><div class="sh3-p1 win">✓ ${t('sh3_b_owned')}</div></div><button class="btn sh3-btn sh3-cta" data-sh3kiteq="${esc(id)}">${t('sh3_kitWear')}</button>`
      : m.has
      ? `<div class="sh3-pr"><span class="p3-h">${t('sh3_owned')}</span><div class="sh3-p1 win">✓ ${t('sh3_b_owned')}</div></div>
         ${m.worn && kind !== 'sticker' ? `<button class="btn ghost sh3-btn" data-sh3eq="${kind}|">${t('s2_take')}</button>` : `<button class="btn sh3-btn sh3-cta" data-sh3eq="${kind}|${esc(id)}">${kind === 'sticker' ? t('s2_place') : t('s2_wear')}</button>`}`
      : !pay ? `<div class="sh3-pr"><div class="sh3-p1 mute">${t('notConfigured')}</div></div>`
      : `<div class="sh3-pr"><span class="p3-h">${t('sh3_toPay')}</span><div class="sh3-p1"><b>${fmt(price)}</b>${old ? `<s>${fmt(old)}</s><em class="sh3-pct">−${pct}%</em>` : ''}${pay === 'kf' && m.usd != null && st.who === 'me' ? `<span class="sh3-alt">${t('sh3_or')} $${m.usd}</span>` : ''}</div>
          <div class="sh3-p2 ${left < 0 ? 'lose' : ''}">${pay === 'kf' ? (left < 0 ? t('sh3_short', { n: -left }) : t('sh3_after', { n: left })) : t('sh3_viaPP')}</div></div>
        ${m.cart && st.who === 'me' && pay === 'kf' ? `<button class="btn ghost sh3-btn sh3-tocart ${inCart(kind, id) ? 'on' : ''}" data-sh3add="${key}">${IC.cart}${inCart(kind, id) ? t('sh3_inCart') : t('sh3_toCart')}</button>` : ''}
        ${pay === 'kf' && left < 0 ? `<button class="btn sh3-btn sh3-cta sh3-paybig" data-sh3tab="kf">${t('sh3_topup')}</button>`
          : `<button class="btn sh3-btn sh3-cta sh3-paybig" data-sh3do ${st.who === 'gift' && !st.to ? 'disabled' : ''}>${st.who === 'gift' && !st.to ? t('sh3_pick') : t('sh3_payBtn', { p: fmt(price) })}</button>`}`;
    modal(`<div class="card modal sh3-mod sh3-im s2-try"><div class="sh3-mh"><div><span class="p3-h">${m.type}</span><h2>${m.title}</h2></div><span class="grow"></span><button class="sh3-x" data-close>${IC.x}</button></div>
      <div class="sh3-imb"><div class="sh3-iml">${m.left}</div><div class="sh3-imr">${right}</div></div>
      <div class="sh3-imf">${foot}</div></div>`, box => {
      const again = () => openItem(kind, id);
      s2BindTry(box, again);
      box.querySelectorAll('[data-s2vfx]').forEach(b => b.onclick = () => typeof lcPlayVfx === 'function' && lcPlayVfx(b.dataset.s2vfx));
      bindActs(box, true);
      box.querySelectorAll('[data-sh3who]').forEach(b => b.onclick = () => { st.who = b.dataset.sh3who; again(); });
      box.querySelectorAll('[data-sh3pm]').forEach(b => b.onclick = () => { st.pay = b.dataset.sh3pm; again(); });
      box.querySelectorAll('[data-sh3to]').forEach(b => b.onclick = () => { st.to = st.to === b.dataset.sh3to ? null : b.dataset.sh3to; again(); });
      const gq = box.querySelector('.sh3-gq');
      if (gq) gq.oninput = () => { const v = gq.value.trim().toLowerCase(); box.querySelectorAll('[data-sh3to]').forEach(b => { b.hidden = !!v && !b.dataset.nick.includes(v); }); };
      box.querySelectorAll('[data-sh3add]').forEach(b => b.onclick = () => {
        const c = cartGet(); cartSet(c.includes(key) ? c.filter(x => x !== key) : [...c, key]); sfx?.('ok', true); refreshQuiet(); again();
      });
      const go2 = box.querySelector('[data-sh3do]');
      if (go2) go2.onclick = run(async () => {
        if (pay === 'kf') { closeModal(); return m.payKf(); }
        await m.payUsd(st.who === 'gift' ? st.to : null);
      });
    });
  }

  function setTab(id) {
    const tb = TB(); tb.tab = id; renderShop();
    const view = $('#view'), j = view.querySelector('.sh3-jump');
    if (j) { const top = j.getBoundingClientRect().top - view.getBoundingClientRect().top; if (top < 0 || view.scrollTop > j.offsetTop) view.scrollTop = Math.max(0, view.scrollTop + top - 4); }
  }
  const jump = id => { const el = TB().tab === 'all' && document.getElementById('sh3-' + id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); else setTab(id); };
  function bindActs(root, inModal) {
    const done = () => { if (inModal) closeModal(); };
    root.querySelectorAll('[data-sh3buy]').forEach(b => b.onclick = e => {
      e.stopPropagation(); const [k, id] = split(b.dataset.sh3buy);
      const it = S.shop.items.find(x => x.kind === k && x.id === id); const left = S.shop.coins - s2Now(it || {});
      if (it && left < 0) { toast(t('sh3_short', { n: -left }), true); done(); return jump('kf'); }
      done(); s2Buy(k, id);
    });
    root.querySelectorAll('[data-sh3usd]').forEach(b => b.onclick = e => { e.stopPropagation(); const [k, id] = split(b.dataset.sh3usd); s2BuyUsd(k, id); });
    root.querySelectorAll('[data-sh3eq]').forEach(b => b.onclick = e => { e.stopPropagation(); const [k, id] = split(b.dataset.sh3eq); done(); s2Equip(k, id); });
    root.querySelectorAll('[data-sh3go]').forEach(b => b.onclick = e => { e.preventDefault(); e.stopPropagation(); done(); go(b.dataset.sh3go); });
    root.querySelectorAll('[data-sh3tab]').forEach(b => b.onclick = e => { e.preventDefault(); e.stopPropagation(); done(); setTab(b.dataset.sh3tab); });
    root.querySelectorAll('[data-sh3open]').forEach(b => b.onclick = e => { e.preventDefault(); e.stopPropagation(); const [k, id] = split(b.dataset.sh3open); openItem(k, id, { pay: b.dataset.pay }); });
    root.querySelectorAll('[data-sh3kiteq]').forEach(b => b.onclick = e => { e.stopPropagation(); done(); run(async () => { const o = {}; for (const x of SHOP4.parts(b.dataset.sh3kiteq)) o[x.kind] = x.id; applyMe(await api('/api/premium/cosmetics', o)); })(); });
    root.querySelectorAll('[data-sh3cart]').forEach(b => b.onclick = e => { e.preventDefault(); e.stopPropagation(); openCart(); });
    root.querySelectorAll('[data-sh3jump]').forEach(b => b.onclick = e => { e.preventDefault(); e.stopPropagation(); done(); jump(b.dataset.sh3jump); });
  }
  function navState(row) {
    const id = row.dataset.sh3row, max = row.scrollWidth - row.clientWidth - 2;
    document.querySelectorAll(`[data-sh3nav="${id}"]`).forEach(b => { b.disabled = b.dataset.dir < 0 ? row.scrollLeft <= 2 : row.scrollLeft >= max; });
  }
  function bind() {
    const view = $('#view');
    bindActs(view, false);
    view.querySelectorAll('[data-sh3try]').forEach(c => c.onclick = e => {
      if (e.target.closest('button, a, input, form')) return;
      const [k, id] = split(c.dataset.sh3try); openItem(k, id);
    });
    view.querySelectorAll('[data-sh3row]').forEach(row => {
      if (ST.rows[row.dataset.sh3row]) row.scrollLeft = ST.rows[row.dataset.sh3row];
      row.onscroll = () => { ST.rows[row.dataset.sh3row] = row.scrollLeft; navState(row); };
      navState(row);
    });
    view.querySelectorAll('[data-sh3nav]').forEach(b => b.onclick = () => {
      const row = view.querySelector(`[data-sh3row="${b.dataset.sh3nav}"]`); if (!row) return;
      const cardW = row.firstElementChild?.getBoundingClientRect().width || 300;
      row.scrollBy({ left: +b.dataset.dir * Math.max(cardW + 14, Math.floor(row.clientWidth / (cardW + 14)) * (cardW + 14)), behavior: 'smooth' });
    });
    const hide = $('#sh3-hide'); if (hide) hide.onchange = () => { ST.hide = hide.checked; renderShop(); };
    const stick = () => { const jr = view.querySelector('.sh3-jump'); if (jr) jr.classList.toggle('stuck', jr.getBoundingClientRect().top - view.getBoundingClientRect().top < 10); };
    if (!ST.sc) { ST.sc = 1; view.addEventListener('scroll', stick, { passive: true }); }
    stick();
    const qi = $('#sh3-q');
    if (qi) qi.oninput = () => { clearTimeout(ST.qt); ST.qt = setTimeout(() => { TB().q = qi.value; renderShop(); }, 160); };
    if (typeof lcBindStarter === 'function') lcBindStarter(view);
    view.querySelectorAll('[data-pack]').forEach(b => b.onclick = run(async () => { const r = await api('/api/shop/coins', { pack: b.dataset.pack }); K.open(r.url); toast(t('payOpened')); }));
    if ($('#promo-form')) $('#promo-form').onsubmit = e => { e.preventDefault(); run(async () => {
      const code = $('#promo-in').value.trim(); if (!code) return;
      const r = await api('/api/promo', { code });
      S.shop = { ...S.shop, coins: r.coins, owned: r.owned }; S.me = r.me; S.myProfile = { ...S.myProfile, ...r.me }; renderMe(); sfx('coin');
      $('#promo-in').value = ''; refresh(); promoGotModal(code.toUpperCase(), r.got);
    })(); };
    if ($('#nick-form')) {
      let via = 'kf';
      $('#nick-form').querySelectorAll('[data-nvia]').forEach(b => b.onclick = () => { via = b.dataset.nvia; });
      $('#nick-form').onsubmit = e => { e.preventDefault(); run(async () => {
        const nick = $('#nick-in').value.trim(); if (!nick) return $('#nick-in').focus();
        if (via === 'usd') { const r = await api('/api/shop/nick', { nick, via: 'usd' }); K.open(r.url); return toast(t('payOpened')); }
        if (!confirm(t('nickConfirm', { n: nick, p: S.shop.nick.free ? t('nickFreeP') : S.shop.nick.tokens ? t('nickUseToken') : S.shop.nick.kf + ' KF' }))) return;
        const r = await api('/api/shop/nick', { nick, via: 'kf' });
        S.me = r.me; S.myProfile = { ...S.myProfile, ...r.me }; renderMe(); sfx('coin'); toast(t('nickChanged', { n: r.me.nick })); loadShop();
      })(); };
    }
  }

  const _prev = renderShop;
  renderShop = function () {
    if (!ON()) return _prev.apply(this, arguments);
    if (!S.shop) return render(`<i class="lc-shop" hidden></i><div class="card empty-note">${t('loading')}</div>`);
    cartClean();
    render(page());
    bind();
  };
})();

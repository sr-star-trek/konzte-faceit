(() => {
  const L = {
    en: {
      pr3Tiers: 'Tiers', pr3Cur: 'Current', pr3Free: 'Free', pr3FreeSub: 'Basic emblems, achievement rewards',
      pr3Boost: 'Discord booster', pr3BoostSub: 'Premium while you boost', pr3Per: '/ 30 days',
      pr3GProfile: 'Profile', pr3GProfileS: 'Your look across Konzte', pr3GMatch: 'Matches', pr3GMatchS: 'More info, same ELO',
      pr3GSocial: 'Community', pr3GSocialS: 'Discord, team search and friends',
      pr3Banners: '{n} profile banners', pr3Frames: '{n} avatar frames', pr3Emblems: '{n} emblems', pr3Nick: 'Nickname: 3 free changes / 30 days', pr3Gift: 'Gift Premium to a friend',
      pr3PremS: 'Avatar, background and the main cosmetics', pr3PlusS: 'Everything in Konzte, nothing locked', pr3Popular: 'Maximum',
      pr3Locked: 'not in this tier', pr3Period: 'Period', pr3Days: '30 days', pr3Stack: 'Each payment adds 30 days', pr3D7: '7 d', pr3M1: '1 mo', pr3M3: '3 mo', pr3M6: '6 mo', pr3M12: '12 mo', pr3Add: 'Adds {n} days to your Premium', pr3DaysN: '{n} days',
      pr3GiftBtn: 'Gift to a friend', pr3How: 'How it works', pr3Status: 'Your subscription', pr3None: 'No subscription',
      pr3NoneS: 'Cosmetics only — matchmaking and ELO are the same for everyone.', pr3Left: '{n} days left', pr3Inv: 'Inventory', pr3Choose: 'Choose a tier',
      pr3BoostNote: 'Active while you boost the Konzte Discord server',
      pr3GiftH: 'Gift {t}', pr3GiftS: '30 days of {t} for a friend. You pay — the friend gets a full-screen gift notice.', pr3GiftFind: 'Search friends…',
      pr3GiftNone: 'No friends yet — add them on the Friends page', pr3GiftPay: 'Pay {p} {c}', pr3GiftPick: 'Pick a friend',
      pr3H1: 'Pay', pr3H1S: 'Pick a tier and pay in the browser. Premium turns on by itself as soon as the payment is confirmed.',
      pr3ViaPP: 'PayPal — the order code goes in the payment note, the owner confirms it', pr3ViaCr: 'Crypto (NOWPayments) — choose a coin on the payment page', pr3ViaDev: 'Test mode — no real payment',
      pr3H2: 'Gift to a friend', pr3H2S: 'Same price, same 30 days. The friend must be registered in Konzte; they see the gift as soon as they open the app.',
      pr3H2a: 'You pay', pr3H2b: 'Friend gets {t} · 30 days', pr3H2c: 'Gift notice in their app',
      pr3H3: 'Your tier', pr3H3S: 'Tiers do not mix: the higher one stays, and the time left on the lower one is converted by price.',
      pr3H3a: 'Buying the same tier again extends it by 30 days', pr3H3b: 'Upgrade to Premium+ — remaining Premium days are recalculated', pr3H3c: 'Achievement rewards and shop items stay forever',
      pr3ToBuy: 'Go to tiers', pr3Close: 'Close',
      px3H: 'Premium XP', px3Sub: 'Levels for supporting Konzte: every paid Premium adds XP', px3How: 'How to raise Premium XP?', px3Cur: 'Current', px3More: '{n} XP to go',
      px3Disc: 'Shop discount {n}%', px3DiscS: 'KF and $ prices of items', px3Gift: 'Gift Premium: +{n} days', px3GiftS: 'bonus days for your friend', px3Badge: 'Level badge next to the crown', px3BadgeS: 'in your profile',
      px3Zero: 'Base level', px3ZeroS: 'Buy Premium or gift it to a friend to start earning XP', px3Prev: 'Level {l} · preview', px3Yours: 'Your level', px3To: 'to {l}: {n} XP', px3Max: 'Maximum level reached',
      px3Fair: 'No effect on matches or ELO', px3Off: 'Level perks are paused', px3Days: '30 days', px3PayN: '{d} days · ×{n}',
      px3MS: 'Premium XP is earned only by paying for Premium, Premium+ and Premium gifts to friends.', px3C1: 'Buy Premium', px3C1S: 'Every payment gives XP: {r} XP per $1 of the full price.',
      px3C1N: 'XP is counted from the full price — sales do not reduce it.', px3C2: 'Gift Premium to friends', px3C2S: 'When you gift Premium, the XP goes to the one who pays.',
      px3F1: 'Gift to a friend', px3F3: 'You get +{n} XP', px3C2N: 'The friend gets no XP, but gets +{d} bonus days from your level.', px3C2N0: 'The friend gets no XP. From Bronze up the friend also gets bonus days.',
      px3C3: 'Your level progress', px3Foot: 'The higher your Premium level, the bigger the shop discount and the gift bonus. Matches and ELO are the same for everyone.',
      px3GiftBonus: '+{n} bonus days from your level',
    },
    uk: {
      pr3Tiers: 'Тарифи', pr3Cur: 'Поточний', pr3Free: 'Безкоштовно', pr3FreeSub: 'Базові емблеми, нагороди за досягнення',
      pr3Boost: 'Бустер Discord', pr3BoostSub: 'Premium, поки бустиш', pr3Per: '/ 30 днів',
      pr3GProfile: 'Профіль', pr3GProfileS: 'Твій вигляд у всьому Konzte', pr3GMatch: 'Матчі', pr3GMatchS: 'Більше інформації, той самий ELO',
      pr3GSocial: 'Спільнота', pr3GSocialS: 'Discord, пошук команди й друзі',
      pr3Banners: '{n} банерів профілю', pr3Frames: 'Рамок аватара: {n}', pr3Emblems: '{n} емблем', pr3Nick: 'Нік: 3 безкоштовні зміни / 30 днів', pr3Gift: 'Подарувати Premium другу',
      pr3PremS: 'Аватар, фон і основна косметика', pr3PlusS: 'Усе в Konzte, нічого не закрито', pr3Popular: 'Максимум',
      pr3Locked: 'немає в цьому тарифі', pr3Period: 'Термін', pr3Days: '30 днів', pr3Stack: 'Кожна оплата додає ще 30 днів', pr3D7: '7 д', pr3M1: '1 міс', pr3M3: '3 міс', pr3M6: '6 міс', pr3M12: '12 міс', pr3Add: 'Додає {n} днів до твого Premium', pr3DaysN: '{n} днів',
      pr3GiftBtn: 'Подарувати другу', pr3How: 'Як це працює', pr3Status: 'Твоя підписка', pr3None: 'Підписки немає',
      pr3NoneS: 'Лише косметика — матчмейкінг і ELO однакові для всіх.', pr3Left: 'Лишилось днів: {n}', pr3Inv: 'Інвентар', pr3Choose: 'Обрати тариф',
      pr3BoostNote: 'Діє, поки ти бустиш Discord-сервер Konzte',
      pr3GiftH: 'Подарувати {t}', pr3GiftS: '30 днів {t} для друга. Платиш ти — друг побачить подарунок на весь екран.', pr3GiftFind: 'Пошук серед друзів…',
      pr3GiftNone: 'Друзів поки немає — додай їх на сторінці «Друзі»', pr3GiftPay: 'Оплатити {p} {c}', pr3GiftPick: 'Обери друга',
      pr3H1: 'Оплата', pr3H1S: 'Обери тариф і заплати в браузері. Premium увімкнеться сам, щойно оплату підтверджено.',
      pr3ViaPP: 'PayPal — код замовлення в примітці до платежу, власник підтверджує', pr3ViaCr: 'Крипта (NOWPayments) — монету обираєш на сторінці оплати', pr3ViaDev: 'Тестовий режим — оплата не справжня',
      pr3H2: 'Подарунок другу', pr3H2S: 'Та сама ціна, ті самі 30 днів. Друг має бути зареєстрований у Konzte — подарунок побачить, щойно відкриє застосунок.',
      pr3H2a: 'Ти оплачуєш', pr3H2b: 'Друг отримує {t} · 30 днів', pr3H2c: 'Вітання з подарунком у його застосунку',
      pr3H3: 'Твій тариф', pr3H3S: 'Тарифи не змішуються: лишається вищий, а час нижчого перераховується за ціною.',
      pr3H3a: 'Повторна покупка того самого тарифу — +30 днів', pr3H3b: 'Перехід на Premium+ — залишок днів Premium перераховується', pr3H3c: 'Нагороди за досягнення й покупки з магазину — назавжди',
      pr3ToBuy: 'До тарифів', pr3Close: 'Закрити',
      px3H: 'Premium XP', px3Sub: 'Рівні за підтримку Konzte: кожна оплата Premium додає XP', px3How: 'Як підвищити Premium XP?', px3Cur: 'Поточний', px3More: 'Ще {n} XP',
      px3Disc: 'Знижка в магазині {n}%', px3DiscS: 'ціни предметів у KF і $', px3Gift: 'Подарунок Premium: +{n} дн.', px3GiftS: 'бонусні дні для друга', px3Badge: 'Значок рівня біля корони', px3BadgeS: 'у твоєму профілі',
      px3Zero: 'Базовий рівень', px3ZeroS: 'Купи Premium або подаруй другу, щоб почати отримувати XP', px3Prev: 'Рівень {l} · перегляд', px3Yours: 'Твій рівень', px3To: 'до {l}: {n} XP', px3Max: 'Максимальний рівень',
      px3Fair: 'Не впливає на матчі й ELO', px3Off: 'Переваги рівнів тимчасово вимкнені', px3Days: '30 днів', px3PayN: '{d} днів · ×{n}',
      px3MS: 'Premium XP нараховується лише за оплату Premium, Premium+ і подарунки Premium друзям.', px3C1: 'Купуй Premium', px3C1S: 'Кожна оплата дає XP: {r} XP за $1 повної ціни.',
      px3C1N: 'XP рахується від повної ціни — розпродаж його не зменшує.', px3C2: 'Даруй Premium друзям', px3C2S: 'Коли даруєш Premium, XP отримує той, хто платить.',
      px3F1: 'Подарунок другу', px3F3: 'Ти отримуєш +{n} XP', px3C2N: 'Друг XP не отримує, зате отримує +{d} бонусних днів за твоїм рівнем.', px3C2N0: 'Друг XP не отримує. З рівня «Бронза» друг отримує ще й бонусні дні.',
      px3C3: 'Твій прогрес рівнів', px3Foot: 'Що вищий рівень Premium — то більша знижка в магазині й бонус до подарунків. Матчі й ELO однакові для всіх.',
      px3GiftBonus: '+{n} бонусних днів за твій рівень',
    },
    ru: {
      pr3Tiers: 'Тарифы', pr3Cur: 'Текущий', pr3Free: 'Бесплатно', pr3FreeSub: 'Базовые эмблемы, награды за достижения',
      pr3Boost: 'Бустер Discord', pr3BoostSub: 'Premium, пока бустишь', pr3Per: '/ 30 дней',
      pr3GProfile: 'Профиль', pr3GProfileS: 'Твой вид во всём Konzte', pr3GMatch: 'Матчи', pr3GMatchS: 'Больше информации, тот же ELO',
      pr3GSocial: 'Сообщество', pr3GSocialS: 'Discord, поиск команды и друзья',
      pr3Banners: '{n} баннеров профиля', pr3Frames: 'Рамок аватара: {n}', pr3Emblems: '{n} эмблем', pr3Nick: 'Ник: 3 бесплатные смены / 30 дней', pr3Gift: 'Подарить Premium другу',
      pr3PremS: 'Аватар, фон и основная косметика', pr3PlusS: 'Всё в Konzte, ничего не закрыто', pr3Popular: 'Максимум',
      pr3Locked: 'нет в этом тарифе', pr3Period: 'Срок', pr3Days: '30 дней', pr3Stack: 'Каждая оплата добавляет ещё 30 дней', pr3D7: '7 д', pr3M1: '1 мес', pr3M3: '3 мес', pr3M6: '6 мес', pr3M12: '12 мес', pr3Add: 'Добавляет {n} дней к твоему Premium', pr3DaysN: '{n} дней',
      pr3GiftBtn: 'Подарить другу', pr3How: 'Как это работает', pr3Status: 'Твоя подписка', pr3None: 'Подписки нет',
      pr3NoneS: 'Только косметика — матчмейкинг и ELO одинаковые для всех.', pr3Left: 'Осталось дней: {n}', pr3Inv: 'Инвентарь', pr3Choose: 'Выбрать тариф',
      pr3BoostNote: 'Действует, пока ты бустишь Discord-сервер Konzte',
      pr3GiftH: 'Подарить {t}', pr3GiftS: '30 дней {t} для друга. Платишь ты — друг увидит подарок на весь экран.', pr3GiftFind: 'Поиск среди друзей…',
      pr3GiftNone: 'Друзей пока нет — добавь их на странице «Друзья»', pr3GiftPay: 'Оплатить {p} {c}', pr3GiftPick: 'Выбери друга',
      pr3H1: 'Оплата', pr3H1S: 'Выбери тариф и заплати в браузере. Premium включится сам, как только оплата подтверждена.',
      pr3ViaPP: 'PayPal — код заказа в примечании к платежу, владелец подтверждает', pr3ViaCr: 'Крипта (NOWPayments) — монету выбираешь на странице оплаты', pr3ViaDev: 'Тестовый режим — оплата не настоящая',
      pr3H2: 'Подарок другу', pr3H2S: 'Та же цена, те же 30 дней. Друг должен быть зарегистрирован в Konzte — подарок увидит, как только откроет приложение.',
      pr3H2a: 'Ты оплачиваешь', pr3H2b: 'Друг получает {t} · 30 дней', pr3H2c: 'Поздравление с подарком в его приложении',
      pr3H3: 'Твой тариф', pr3H3S: 'Тарифы не смешиваются: остаётся высший, а время низшего пересчитывается по цене.',
      pr3H3a: 'Повторная покупка того же тарифа — +30 дней', pr3H3b: 'Переход на Premium+ — остаток дней Premium пересчитывается', pr3H3c: 'Награды за достижения и покупки из магазина — навсегда',
      pr3ToBuy: 'К тарифам', pr3Close: 'Закрыть',
      px3H: 'Premium XP', px3Sub: 'Уровни за поддержку Konzte: каждая оплата Premium добавляет XP', px3How: 'Как повысить Premium XP?', px3Cur: 'Текущий', px3More: 'Ещё {n} XP',
      px3Disc: 'Скидка в магазине {n}%', px3DiscS: 'цены предметов в KF и $', px3Gift: 'Подарок Premium: +{n} дн.', px3GiftS: 'бонусные дни для друга', px3Badge: 'Значок уровня у короны', px3BadgeS: 'в твоём профиле',
      px3Zero: 'Базовый уровень', px3ZeroS: 'Купи Premium или подари другу, чтобы начать получать XP', px3Prev: 'Уровень {l} · просмотр', px3Yours: 'Твой уровень', px3To: 'до {l}: {n} XP', px3Max: 'Максимальный уровень',
      px3Fair: 'Не влияет на матчи и ELO', px3Off: 'Преимущества уровней временно выключены', px3Days: '30 дней', px3PayN: '{d} дней · ×{n}',
      px3MS: 'Premium XP начисляется только за оплату Premium, Premium+ и подарки Premium друзьям.', px3C1: 'Покупай Premium', px3C1S: 'Каждая оплата даёт XP: {r} XP за $1 полной цены.',
      px3C1N: 'XP считается от полной цены — распродажа его не уменьшает.', px3C2: 'Дари Premium друзьям', px3C2S: 'Когда даришь Premium, XP получает тот, кто платит.',
      px3F1: 'Подарок другу', px3F3: 'Ты получаешь +{n} XP', px3C2N: 'Друг XP не получает, зато получает +{d} бонусных дней за твой уровень.', px3C2N0: 'Друг XP не получает. С уровня «Бронза» друг получает ещё и бонусные дни.',
      px3C3: 'Твой прогресс уровней', px3Foot: 'Чем выше уровень Premium — тем больше скидка в магазине и бонус к подаркам. Матчи и ELO одинаковые для всех.',
      px3GiftBonus: '+{n} бонусных дней за твой уровень',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k], L[k]);
  const tr = (k, v) => { let s = (I18N[LANG] || I18N.en)[k] ?? I18N.en[k] ?? k; if (v) for (const [a, b] of Object.entries(v)) s = s.replaceAll('{' + a + '}', b); return s; };

  const sv = d => `<svg viewBox="0 0 24 24">${d}</svg>`;
  const IC = {
    check: sv('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    lock: sv('<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>'),
    user: sv('<circle cx="12" cy="8" r="4"/><path d="M4 20.5c.8-4 4-6.5 8-6.5s7.2 2.5 8 6.5"/>'),
    target: sv('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"/>'),
    users: sv('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 19.5c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5"/><path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.4c1.9.8 3.1 2.5 3.5 5.1"/>'),
    image: sv('<rect x="3" y="4.5" width="18" height="15" rx="2"/><circle cx="8.5" cy="9.5" r="1.8"/><path d="M21 16l-5-5-9 8.5"/>'),
    gif: sv('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M10 10.5H8.2a1.5 1.5 0 0 0-1.5 1.5v0a1.5 1.5 0 0 0 1.5 1.5H10v-1.4M12.5 10v4M15.5 14v-4h2.5M15.5 12h2"/>'),
    flag: sv('<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>'),
    frame: sv('<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="12" cy="10.5" r="3"/><path d="M7 18c1.2-2.2 2.8-3.2 5-3.2s3.8 1 5 3.2"/>'),
    shield: sv('<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6z"/>'),
    spark: sv('<path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>'),
    palette: sv('<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-1.3-1-1.6-1-2.8 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7" r="1.2"/>'),
    crown: sv('<path d="M3.5 8l4.5 4 4-6.5 4 6.5 4.5-4-1.8 10.5H5.3z"/><path d="M5.5 21h13"/>'),
    chart: sv('<path d="M4 20V4M4 20h16"/><path d="M7.5 15l4-4.5 3 3L20 7"/>'),
    cmp: sv('<path d="M7 4v16M17 4v16M3 8h8M13 16h8"/><circle cx="7" cy="8" r="0"/>'),
    scale: sv('<path d="M12 4v16M7 20h10M5 8h14"/><path d="M5 8l-2.5 6a3 3 0 0 0 5 0zM19 8l-2.5 6a3 3 0 0 0 5 0z"/>'),
    discord: sv('<path d="M8.5 7.5a13 13 0 0 1 7 0M7.5 17c3 1.3 6 1.3 9 0"/><path d="M6.5 6.5C5 9 4 12 4 16c1.5 1.4 3 2.2 4.5 2.5L10 16.5M17.5 6.5C19 9 20 12 20 16c-1.5 1.4-3 2.2-4.5 2.5L14 16.5"/><circle cx="9.3" cy="12.3" r="1.2"/><circle cx="14.7" cy="12.3" r="1.2"/>'),
    pin: sv('<path d="M9 3.5h6l-1 6 3 3H7l3-3zM12 12.5V21"/>'),
    pen: sv('<path d="M4 20l1-4.5L15.5 5a2.1 2.1 0 0 1 3 3L8 18.5zM13.5 7l3 3"/>'),
    gift: sv('<rect x="3.5" y="9" width="17" height="4" rx="1"/><path d="M5 13v7.5h14V13M12 9v11.5M12 9c-1.5-3.5-6-4-6-1.5S10 9 12 9zm0 0c1.5-3.5 6-4 6-1.5S14 9 12 9z"/>'),
    trophy: sv('<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4.5c0 3 1.5 4.5 3.7 4.8M16 6h3.5c0 3-1.5 4.5-3.7 4.8M12 13v4M8.5 20.5h7M9.5 17h5"/>'),
    info: sv('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>'),
    gem: sv('<path d="M6.5 4h11L21 9l-9 11L3 9z"/><path d="M3 9h18M9.5 4L8 9l4 11 4-11-1.5-5"/>'),
    x: sv('<path d="M6 6l12 12M18 6L6 18"/>'),
    arr: sv('<path d="M9 6l6 6-6 6"/>'),
    down: sv('<path d="M12 5v14M6 13l6 6 6-6"/>'),
    cal: sv('<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'),
  };

  const NAME = { premium: 'Premium', plus: 'Premium+' };
  const feats = T => [
    [tr('f_avatar'), IC.gif, 'p', true, true],
    [tr('f_pbg'), IC.image, 'p', true, true],
    [tr('f_banners'), IC.flag, 'p', tr('pr3Banners', { n: T.premium.banners.length }), tr('pr3Banners', { n: T.plus.banners.length })],
    [tr('f_frames'), IC.frame, 'p', tr('pr3Frames', { n: T.premium.frames.length }), tr('pr3Frames', { n: T.plus.frames.length })],
    [tr('f_emblems'), IC.shield, 'p', tr('pr3Emblems', { n: T.premium.emblems?.length ?? '' }), tr('pr3Emblems', { n: T.plus.emblems?.length ?? '' })],
    [tr('f_anim'), IC.spark, 'p', false, true],
    [tr('f_color'), IC.palette, 'p', false, true],
    [tr('f_badge'), IC.crown, 'p', true, true],
    [tr('f_captain'), IC.target, 'm', true, true],
    [tr('f_history'), IC.chart, 'm', true, true],
    [tr('f_compare'), IC.cmp, 'm', false, true],
    [tr('f_noadv'), IC.scale, 'm', true, true],
    [tr('f_role'), IC.discord, 's', true, true],
    [tr('f_lfg'), IC.pin, 's', true, true],
    [tr('pr3Nick'), IC.pen, 's', true, true],
    [tr('f_ach'), IC.trophy, 's', true, true],
  ];
  const chipLabel = (f, T) => typeof f[4] === 'string' ? f[4] : f[0];

  const mineOf = () => S.me.premium?.tier ? S.me.premium : null;
  const days = ms => Math.max(0, Math.ceil(ms / 864e5));

  function tierRow(pi, mine) {
    const T = pi.tiers, cur = mine ? (mine.boost ? 'boost' : mine.tier) : 'free';
    const card = (id, img, name, sub) => `<button class="pr3-tier ${id} ${cur === id ? 'cur' : ''}" data-pr3-to="${id === 'plus' ? 'plus' : 'premium'}">
      ${cur === id ? `<span class="pr3-curtag">${tr('pr3Cur')}</span>` : ''}<span class="pr3-tic">${img}</span><b>${name}</b><span class="pr3-tsub">${sub}</span></button>`;
    const price = k => `<em>${T[k].price} ${esc(pi.currency)}</em> ${tr('pr3Per')}`;
    const ar = `<i class="pr3-ar">${IC.arr}</i>`;
    return `<div class="pr3-tiers">
      ${card('free', `<img src="assets/logo.png" alt="">`, tr('pr3Free'), tr('pr3FreeSub'))}${ar}
      ${card('premium', `<img src="assets/crown-premium.png" alt="">`, 'Premium', price('premium'))}${ar}
      ${card('plus', `<img src="assets/crown-plus.png" alt="">`, 'Premium+', price('plus'))}
      ${card('boost', `<i class="pr3-gem">${IC.gem}</i>`, tr('pr3Boost'), tr('pr3BoostSub'))}</div>`;
  }

  function groups(pi) {
    const F = feats(pi.tiers);
    const g = (id, ic, h, s, extra = '') => `<div class="card pr3-grp"><div class="pr3-gh"><i>${ic}</i><div><b>${h}</b><span>${s}</span></div></div>
      <div class="pr3-chips">${F.filter(f => f[2] === id).map(f => `<span class="pr3-chip ${f[3] === false ? 'plus' : ''}"><i>${f[1]}</i><span>${esc(chipLabel(f, pi.tiers))}</span>${f[3] === false ? '<em>+</em>' : ''}</span>`).join('')}${extra}</div></div>`;
    return `<div class="pr3-grps">
      ${g('p', IC.user, tr('pr3GProfile'), tr('pr3GProfileS'))}
      ${g('m', IC.target, tr('pr3GMatch'), tr('pr3GMatchS'))}
      ${g('s', IC.users, tr('pr3GSocial'), tr('pr3GSocialS'), `<button class="pr3-chip act" data-pr3-gift="plus"><i>${IC.gift}</i><span>${tr('pr3Gift')}</span></button>`)}</div>`;
  }

  function plan(pi, mine, tier) {
    const PD = (S.pr3Days ||= {})[tier] || 30, PR = pi.tiers[tier].periods?.find(x => x.days === PD);
    const T = PR ? { ...pi.tiers[tier], price: PR.price, was: +PR.full > +PR.price ? PR.full : null } : pi.tiers[tier], F = feats(pi.tiers), idx = tier === 'plus' ? 4 : 3;
    const PLBL = { 7: 'pr3D7', 30: 'pr3M1', 90: 'pr3M3', 180: 'pr3M6', 365: 'pr3M12' };
    const ok = F.filter(f => f[idx] !== false), no = F.filter(f => f[idx] === false);
    const li = (f, on) => `<li class="${on ? '' : 'no'}"><i>${on ? IC.check : IC.lock}</i><span>${esc(typeof f[idx] === 'string' ? f[idx] : f[0])}</span>${on ? '' : `<em>(${tr('pr3Locked')})</em>`}</li>`;
    const label = mine?.tier === tier && !mine.boost ? t('extend') : mine?.tier === 'premium' && tier === 'plus' ? t('upgrade') : t('buy');
    const was = T.was && T.was !== T.price;
    const cur = mine?.tier === tier;
    return `<div class="card pr3-plan ${tier} ${cur ? 'cur' : ''}" id="pr3-${tier}">
      <div class="pr3-ph"><span class="pr3-pic"><img src="assets/crown-${tier}.png" alt=""></span>
        <div class="grow"><h2>${NAME[tier]}${tier === 'plus' ? `<span class="pr3-pop">${tr('pr3Popular')}</span>` : ''}${cur ? `<span class="pr3-curtag in">${tr('pr3Cur')}</span>` : ''}</h2><span class="mute">${tr(tier === 'plus' ? 'pr3PlusS' : 'pr3PremS')}</span></div>
        <div class="pr3-price">${xpChip(S.pxp, tier)}${was ? `<span class="pr3-off">−${Math.round((1 - T.price / T.was) * 100)}%</span>` : ''}<div><b>${T.price}<small> ${esc(pi.currency)}</small></b>${was ? `<s>${T.was} ${esc(pi.currency)}</s>` : ''}</div></div></div>
      <ul class="pr3-feat">${ok.map(f => li(f, true)).join('')}${no.map(f => li(f, false)).join('')}</ul>
      <div class="pr3-per"><span class="pr3-lbl">${IC.cal}${tr('pr3Period')}</span><span class="mute">${tr('pr3Add', { n: PD })}</span></div>
      ${pi.tiers[tier].periods ? `<div class="pr3-pds">${pi.tiers[tier].periods.map(x => `<button class="${x.days === PD ? 'on' : ''}" data-pr3-pd="${tier}|${x.days}">${tr(PLBL[x.days] || 'pr3M1')}</button>`).join('')}</div>` : ''}
      <div class="pr3-btns">${pi.enabled ? `<button class="btn pr3-buy" data-buy="${tier}" data-days="${PD}">${label}</button><button class="btn ghost pr3-gift" data-pr3-gift="${tier}">${IC.gift}${tr('pr3GiftBtn')}</button>`
        : `<button class="btn pr3-buy" disabled>${t('notConfigured')}</button>`}</div></div>`;
  }

  function status(pi, mine) {
    if (!mine) return `<div class="pr3-st none"><span class="p3-h">${tr('pr3Status')}</span><b class="pr3-stn">${tr('pr3None')}</b><span class="mute">${tr('pr3NoneS')}</span>
      <button class="btn pr3-sbtn" data-pr3-to="plus">${IC.down}${tr('pr3Choose')}</button></div>`;
    const left = mine.until ? mine.until - Date.now() : 0, pct = mine.boost ? 100 : Math.min(100, left / (30 * 864e5) * 100);
    return `<div class="pr3-st"><span class="p3-h">${tr('pr3Status')}</span>
      <div class="pr3-stt"><img src="assets/crown-${mine.tier}.png" alt=""><div><b class="pr3-stn">${NAME[mine.tier]}</b>
        <span class="mute">${mine.boost ? tr('pr3BoostNote') : t('activeUntil', { d: fmtDate(mine.until) })}</span></div></div>
      ${mine.boost ? '' : `<div class="pr3-bar"><i style="width:${pct.toFixed(1)}%"></i></div><span class="pr3-left">${tr('pr3Left', { n: days(left) })}</span>`}
      <button class="btn ghost pr3-sbtn" data-pr3-go="inventory">${IC.frame}${tr('pr3Inv')}</button></div>`;
  }

  function howModal(pi) {
    const mine = mineOf();
    const via = pi.manual || pi.provider === 'paypal' && !pi.sandbox ? tr('pr3ViaPP') : pi.provider === 'crypto' ? tr('pr3ViaCr') : tr('pr3ViaDev');
    const col = (n, h, body) => `<div class="pr3-hc"><div class="pr3-hn"><i>${n}</i><b>${h}</b></div>${body}</div>`;
    const priceT = k => `<div class="pr3-hrow"><span>${NAME[k]} · ${tr('pr3Days')}</span><b>${pi.tiers[k].price} ${esc(pi.currency)}</b></div>`;
    modal(`<div class="card modal pr3-mod"><div class="pr3-mh"><span class="pr3-pic"><img src="assets/crown-plus.png" alt=""></span><div class="grow"><h2>${tr('pr3How')}</h2><span class="mute">${t('premSub')}</span></div>
        <button class="pr3-x" data-close aria-label="${tr('pr3Close')}">${IC.x}</button></div>
      <div class="pr3-hcols">
        ${col(1, tr('pr3H1'), `<p class="mute">${tr('pr3H1S')}</p>${priceT('premium')}${priceT('plus')}<div class="pr3-hnote">${IC.info}<span>${via}</span></div>`)}
        ${col(2, tr('pr3H2'), `<p class="mute">${tr('pr3H2S')}</p><div class="pr3-flow"><span>${tr('pr3H2a')}</span><i>${IC.down}</i><span>${tr('pr3H2b', { t: 'Premium / Premium+' })}</span><i>${IC.down}</i><b>${tr('pr3H2c')}</b></div>`)}
        ${col(3, tr('pr3H3'), `<div class="pr3-hme">${mine ? `<img src="assets/crown-${mine.tier}.png" alt=""><div><b>${NAME[mine.tier]}</b><span class="mute">${mine.boost ? tr('pr3BoostNote') : t('activeUntil', { d: fmtDate(mine.until) })}</span></div>` : `<div><b>${tr('pr3None')}</b><span class="mute">${tr('pr3NoneS')}</span></div>`}</div>
          <p class="mute">${tr('pr3H3S')}</p><ul class="pr3-hl"><li>${IC.check}${tr('pr3H3a')}</li><li>${IC.check}${tr('pr3H3b')}</li><li>${IC.check}${tr('pr3H3c')}</li></ul>`)}
      </div>
      <div class="pr3-mf"><span class="mute">${t('f_noadv')}</span><button class="btn pr3-buy sm2" id="pr3-tobuy">${tr('pr3ToBuy')}</button></div></div>`, box => {
      box.querySelector('#pr3-tobuy').onclick = () => { closeModal(); scrollTo('plus'); };
    });
  }

  function giftModal(pi, tier) {
    const list = (S.live?.friends?.list || []).slice().sort((a, b) => (a.status === 'offline') - (b.status === 'offline') || String(a.nick).localeCompare(String(b.nick)));
    let pick = null, k = tier;
    const draw = box => {
      const q = (box.querySelector('#pr3-gq')?.value || '').toLowerCase();
      box.querySelector('.pr3-gl').innerHTML = list.length ? list.filter(f => !q || String(f.nick).toLowerCase().includes(q)).map(f => `<button class="pr3-gf ${pick === f.id ? 'on' : ''}" data-gf="${esc(f.id)}">${avaF(f, 'sm')}<span class="grow nkl">${nickHtml(f)}</span><i>${IC.check}</i></button>`).join('')
        : `<div class="mute pr3-gnone">${tr('pr3GiftNone')}</div>`;
      box.querySelectorAll('[data-gf]').forEach(b => b.onclick = () => { pick = b.dataset.gf; draw(box); });
      box.querySelectorAll('[data-gt]').forEach(b => b.classList.toggle('on', b.dataset.gt === k));
      const pay = box.querySelector('#pr3-gpay');
      const gd = (S.pr3Days || {})[k] || 30, gp = pi.tiers[k].periods?.find(x => x.days === gd)?.price || pi.tiers[k].price;
      pay.disabled = !pick; pay.textContent = pick ? tr('pr3GiftPay', { p: gp, c: pi.currency }) + ` · ${tr('pr3DaysN', { n: gd })}` : tr('pr3GiftPick');
      box.querySelector('.pr3-gs').textContent = tr('pr3GiftS', { t: NAME[k] });
    };
    modal(`<div class="card modal pr3-mod pr3-gmod"><div class="pr3-mh"><span class="pr3-pic">${IC.gift}</span><div class="grow"><h2>${tr('pr3GiftBtn')}</h2><span class="mute pr3-gs"></span></div>
        <button class="pr3-x" data-close aria-label="${tr('pr3Close')}">${IC.x}</button></div>
      <div class="pr3-gtier">${['premium', 'plus'].map(x => `<button data-gt="${x}"><img src="assets/crown-${x}.png" alt=""><b>${NAME[x]}</b><span>${pi.tiers[x].price} ${esc(pi.currency)}</span></button>`).join('')}</div>
      ${list.length ? `<input id="pr3-gq" placeholder="${tr('pr3GiftFind')}" autocomplete="off">` : ''}<div class="pr3-gl"></div>
      <div class="pr3-mf"><span class="mute">${tr('pr3Days')} · ${tr('pr3Stack')}${S.pxp?.perks?.giftDays > 0 ? `<b class="px3-gb">${tr('px3GiftBonus', { n: S.pxp.perks.giftDays })}</b>` : ''}</span><button class="btn pr3-buy sm2" id="pr3-gpay" disabled></button></div></div>`, box => {
      box.querySelectorAll('[data-gt]').forEach(b => b.onclick = () => { k = b.dataset.gt; draw(box); });
      box.querySelector('#pr3-gq')?.addEventListener('input', () => draw(box));
      box.querySelector('#pr3-gpay').onclick = run(async () => {
        if (!pick) return;
        const r = await api('/api/webshop/buy', { type: 'tier', tier: k, to: pick, days: (S.pr3Days || {})[k] || 30 });
        K.open(r.url); toast(t('payOpened')); closeModal();
      });
      draw(box);
    });
  }

  const nf = n => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const P3 = () => window.PXP3;
  const range = L => L.max == null ? `${nf(L.min)}+ XP` : `${nf(L.min)}–${nf(L.max)} XP`;
  function pxRow(px, sel) {
    return `<div class="px3-row">${px.table.map((L, i) => `${i ? `<i class="px3-ar">${IC.arr}</i>` : ''}<button class="px3-lv px3-c${i} ${i === px.level ? 'cur' : ''} ${i === sel ? 'sel' : ''} ${i > px.level ? 'up' : ''}" data-px3-lv="${i}">
      ${i === px.level ? `<span class="px3-tag">${tr('px3Cur')}</span>` : i === sel && i > px.level ? `<span class="px3-tag more">${tr('px3More', { n: nf(L.min - px.xp) })}</span>` : ''}
      ${P3().medal(i)}<b>${esc(P3().name(i))}</b><span>${range(L)}</span></button>`).join('')}</div>`;
  }
  function pxPerks(px, sel) {
    const L = px.table[sel], N = px.table[px.level + 1];
    const chip = (ic, h, sub) => `<span class="pr3-chip px3-chip"><i>${ic}</i><span>${h}<small>${sub}</small></span></span>`;
    const chips = sel === 0 ? chip(IC.info, tr('px3Zero'), tr('px3ZeroS'))
      : chip('<b class="px3-pct">%</b>', tr('px3Disc', { n: L.disc }), tr('px3DiscS')) + chip(IC.gift, tr('px3Gift', { n: L.giftDays }), tr('px3GiftS')) + chip(P3().medal(sel, 'sm'), tr('px3Badge'), tr('px3BadgeS'));
    const pct = N ? Math.max(0, Math.min(100, (px.xp - px.table[px.level].min) / (N.min - px.table[px.level].min) * 100)) : 100;
    return `<div class="card px3-perk">
      <div class="px3-me">${P3().medal(px.level, 'lg')}<div class="grow"><span class="p3-h">${tr('px3Yours')}</span><b class="px3-mn px3-c${px.level}">${esc(P3().name(px.level))}</b>
        <span class="px3-xp"><b>${nf(px.xp)}</b>${N ? ` / ${nf(N.min)} XP · ${tr('px3To', { l: esc(P3().name(px.level + 1)), n: nf(N.min - px.xp) })}` : ` XP · ${tr('px3Max')}`}</span>
        <div class="pr3-bar px3-bar"><i style="width:${pct.toFixed(1)}%"></i></div></div></div>
      <div class="px3-pr"><div class="pr3-gh"><i>${IC.gem}</i><div><b>${esc(P3().name(sel))}</b><span>${sel === px.level ? tr('px3Fair') : tr('px3Prev', { l: esc(P3().name(sel)) })}</span></div>
        <button class="btn ghost sm px3-howb" data-px3-how>${IC.info}${tr('px3How')}</button></div>
        <div class="pr3-chips px3-chips">${chips}</div>${px.enabled ? '' : `<span class="px3-off">${IC.info}${tr('px3Off')}</span>`}</div></div>`;
  }
  function pxSection(px) {
    const sel = Math.max(0, Math.min(5, S.pxpSel ?? px.level));
    return `<div class="px3" id="px3"><div class="px3-hd"><div><span class="p3-h pr3-sec">${tr('px3H')}</span><span class="mute">${tr('px3Sub')}</span></div></div>
      ${pxRow(px, sel)}${pxPerks(px, sel)}</div>`;
  }
  function bindPx(px, pi) {
    const box = document.getElementById('px3'); if (!box) return;
    box.querySelectorAll('[data-px3-lv]').forEach(b => b.onclick = () => { S.pxpSel = +b.dataset.px3Lv; box.outerHTML = pxSection(px); bindPx(px, pi); });
    box.querySelectorAll('[data-px3-how]').forEach(b => b.onclick = () => pxModal(px, pi));
  }
  const xpOf = (px, k, d) => px?.tiersP?.[k]?.[d] ?? px.tiers[k] * Math.max(1, Math.round(d / 30));
  const xpChip = (px, tier) => px ? `<span class="px3-xpc ${tier}">+${nf(xpOf(px, tier, (S.pr3Days || {})[tier] || 30))} XP</span>` : '';
  const pdName = d => d === 7 ? tr('pr3DaysN', { n: 7 }) : tr({ 30: 'pr3M1', 90: 'pr3M3', 180: 'pr3M6', 365: 'pr3M12' }[d] || 'pr3M1');

  function pxModal(px, pi) {
    const col = (n, h, body) => `<div class="pr3-hc"><div class="pr3-hn"><i>${n}</i><b>${h}</b></div>${body}</div>`;
    const tbl = k => `<div class="px3-tb ${k}"><b>${NAME[k]}</b>${[7, 30, 90, 180, 365].map(d => `<div class="pr3-hrow"><span>${pdName(d)}</span><b>+${nf(xpOf(px, k, d))} XP</b></div>`).join('')}</div>`;
    const N = px.table[px.level + 1], my = px.perks.giftDays;
    modal(`<div class="card modal pr3-mod px3-mod"><div class="pr3-mh"><span class="pr3-pic">${P3().medal(Math.max(1, px.level))}</span><div class="grow"><h2>${tr('px3How')}</h2><span class="mute">${tr('px3MS')}</span></div>
        <button class="pr3-x" data-close aria-label="${tr('pr3Close')}">${IC.x}</button></div>
      <div class="pr3-hcols">
        ${col(1, tr('px3C1'), `<p class="mute">${tr('px3C1S', { r: px.xpPerUsd })}</p><div class="px3-tbs">${tbl('premium')}${tbl('plus')}</div><p class="mute px3-note">${tr('px3C1N')}</p>`)}
        ${col(2, tr('px3C2'), `<p class="mute">${tr('px3C2S')}</p><div class="pr3-flow"><span>${tr('px3F1')}</span><i>${IC.down}</i><span>Premium · ${tr('px3Days')}</span><i>${IC.down}</i><b>${tr('px3F3', { n: nf(px.tiers.premium) })}</b></div>
          <div class="pr3-hrow"><span>Premium+ · ${pdName(30)}</span><b>+${nf(xpOf(px, 'plus', 30))} XP</b></div><div class="pr3-hrow"><span>Premium+ · ${pdName(365)}</span><b>+${nf(xpOf(px, 'plus', 365))} XP</b></div>
          <p class="mute px3-note">${my > 0 ? tr('px3C2N', { d: my }) : tr('px3C2N0')}</p>`)}
        ${col(3, tr('px3C3'), `<div class="pr3-hme px3-hme"><div><span class="mute">${tr('px3Yours')}</span><b>${esc(P3().name(px.level))}</b><span class="mute">${nf(px.xp)}${N ? ` / ${nf(N.min)} XP · ${tr('px3To', { l: esc(P3().name(px.level + 1)), n: nf(N.min - px.xp) })}` : ` XP · ${tr('px3Max')}`}</span></div></div>
          <div class="px3-ml">${px.table.map((L, i) => `<div class="px3-mi px3-c${i} ${i === px.level ? 'cur' : ''}">${P3().medal(i, 'sm')}<b>${esc(P3().name(i))}</b>${i === px.level ? `<em>${tr('px3Cur')}</em>` : ''}<span>${range(L)}</span></div>`).join('')}</div>`)}
      </div>
      <div class="pr3-mf"><span class="mute">${tr('px3Foot')}</span><button class="btn pr3-buy sm2" id="px3-tobuy">${tr('pr3ToBuy')}</button></div></div>`, box => {
      box.querySelector('#px3-tobuy').onclick = () => { closeModal(); scrollTo('plus'); };
    });
  }

  const scrollTo = tier => { const el = document.getElementById('pr3-' + tier); if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); } };

  const _prev = renderPremium;
  renderPremium = function () {
    if (!window.KZ_V3?.()) return _prev.apply(this, arguments);
    const pi = S.premInfo;
    if (!pi) return render(`<div class="card empty-note">${t('loading')}</div>`);
    const mine = mineOf();
    if (!S.pxpAt || Date.now() - S.pxpAt > 15e3) {
      S.pxpAt = Date.now();
      api('/api/premxp').then(px => { const ch = JSON.stringify(px) !== JSON.stringify(S.pxp); S.pxp = px; if (ch && S.page === 'premium') renderPremium(); }).catch(() => {});
    }
    const px = S.pxp;
    render(`<div class="pr3">
      <div class="card pr3-hero"><img class="pr3-art" src="assets/premium_logo.png" alt="">
        <div class="pr3-hi"><span class="p3-h">Konzte <em>Premium</em></span><h1>Konzte Premium</h1><p class="mute">${t('premSub')}</p>
          <div class="pr3-hb"><button class="btn ghost pr3-howb" id="pr3-how">${IC.info}${tr('pr3How')}</button>${pi.sandbox ? `<span class="pr3-sb">${t('sandboxNote')}</span>` : ''}</div></div>
        ${status(pi, mine)}</div>
      ${typeof s2SaleBar === 'function' && pi.sale?.scope?.includes('premium') ? s2SaleBar(pi.sale) : ''}
      <div class="p3-h pr3-sec">${tr('pr3Tiers')}</div>
      ${tierRow(pi, mine)}
      ${groups(pi)}
      ${px && window.PXP3 ? pxSection(px) : ''}
      <div class="pr3-plans">${plan(pi, mine, 'premium')}${plan(pi, mine, 'plus')}</div>
    </div>`);
    document.querySelectorAll('.pr3 [data-buy]').forEach(b => b.onclick = run(async () => {
      const r = await api('/api/premium/buy', { tier: b.dataset.buy, days: +b.dataset.days || 30 });
      K.open(r.url);
      toast(t('payOpened'));
    }));
    document.querySelectorAll('.pr3 [data-pr3-gift]').forEach(b => b.onclick = () => giftModal(pi, b.dataset.pr3Gift));
    document.querySelectorAll('.pr3 [data-pr3-pd]').forEach(b => b.onclick = () => { const [tt, d] = b.dataset.pr3Pd.split('|'); (S.pr3Days ||= {})[tt] = +d; const y = $('#view').scrollTop; renderPremium(); $('#view').scrollTop = y; });
    document.querySelectorAll('.pr3 [data-pr3-to]').forEach(b => b.onclick = () => scrollTo(b.dataset.pr3To));
    document.querySelectorAll('.pr3 [data-pr3-go]').forEach(b => b.onclick = () => go(b.dataset.pr3Go));
    $('#pr3-how').onclick = () => howModal(pi);
    if (px && window.PXP3) bindPx(px, pi);
  };
})();

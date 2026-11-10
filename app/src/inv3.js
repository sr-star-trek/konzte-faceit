(() => {
  const L = {
    en: {
      iv3_sub: 'Everything you own and what you can still get. Click a card to try it on — the player card on the right shows it.',
      iv3_card: 'Player card', iv3_cardSub: 'This is how other players see you', iv3_trying: 'Trying on', iv3_now: 'Equipped now',
      iv3_cur: 'Current', iv3_none: 'Nothing equipped', iv3_noneD: 'Default look — pick something below.',
      iv3_change: 'Change', iv3_take: 'Remove', iv3_wear: 'Equip', iv3_worn: 'Equipped', iv3_place: 'Place', iv3_edit: 'Edit',
      iv3_buy: 'Buy', iv3_toShop: 'Open shop', iv3_get: 'Get Premium', iv3_locked: 'Locked', iv3_free: 'Free',
      iv3_f_all: 'All', iv3_f_mine: 'Owned', iv3_f_prem: 'Premium', iv3_f_shop: 'Shop',
      iv3_owned: 'Owned: {n} of {of}', iv3_empty: 'Nothing here with this filter',
      iv3_noneT: 'You have no {k} yet', iv3_noneTxt: 'Get them in the shop for KF, with Premium, from the season pass or as season rewards.',
      iv3_t_badge: 'Badges', iv3_k_badge: 'badge', iv3_t_pbg: 'Profile background', iv3_k_pbg: 'profile background', iv3_pbgNone: 'No background', iv3_pbgLines: 'Konzte contour lines', iv3_pbgNoneD: 'Konzte contour lines — the default card', iv3_pbgHint: 'Behind your profile page and on your player card. Konzte contour lines or the Konzte background.', iv3_pbgImg: 'Your own image', iv3_set: 'Set', iv3_using: 'In use', iv3_pbgPrem: 'Profile backgrounds come with Premium', iv3_pbgPremD: 'The Konzte background shows on your profile and player card.', iv3_avail: 'Available: {n}', iv3_cur2: 'Current background',
      iv3_bHint: 'Hide badges next to your nickname from other players. «Verified» can’t be hidden.',
      iv3_b_premium: 'Premium crown', iv3_b_owner: '«Owner» badge', iv3_b_dev: '«Developer» badge', iv3_b_creator: '«Content creator» badge', iv3_b_verified: '«Verified» badge',
      iv3_shown: 'Shown', iv3_hidden: 'Hidden', iv3_always: 'Always shown', iv3_noBadges: 'You have no badges yet — they come with Premium and staff roles.',
      iv3_avUp: 'Upload your own', iv3_avOwn: 'Your own avatar', iv3_avOwnD: 'Uploaded with Premium — visible everywhere.', iv3_avReset: 'Back to the chosen one', iv3_avPrem: 'Your own avatar (GIF too) — with Premium',
      iv3_stkCur: 'On your banner', iv3_stkNone: 'No stickers on the banner', iv3_premCol: 'Premium+ colours', iv3_premColS: 'Plain nick colour from Premium+',
      iv3_vfxPlay: 'Play', iv3_cmp: 'Compare with equipped', iv3_new: 'Show selected', iv3_pick: 'Click any card to try it on before equipping.',
      iv3_inMatch: 'In the match room', iv3_inLb: 'On the leaderboard',
    },
    uk: {
      iv3_sub: 'Усе, що в тебе є, і що ще можна отримати. Клацни картку — праворуч побачиш, як це виглядає на тобі.',
      iv3_card: 'Картка гравця', iv3_cardSub: 'Так тебе бачать інші гравці', iv3_trying: 'Приміряння', iv3_now: 'Зараз надіто',
      iv3_cur: 'Поточне', iv3_none: 'Нічого не вдягнено', iv3_noneD: 'Стандартний вигляд — обери щось нижче.',
      iv3_change: 'Змінити', iv3_take: 'Зняти', iv3_wear: 'Вдягти', iv3_worn: 'Вдягнено', iv3_place: 'Розмістити', iv3_edit: 'Редагувати',
      iv3_buy: 'Купити', iv3_toShop: 'Відкрити магазин', iv3_get: 'Отримати Premium', iv3_locked: 'Закрито', iv3_free: 'Безкоштовно',
      iv3_f_all: 'Усе', iv3_f_mine: 'Моє', iv3_f_prem: 'Premium', iv3_f_shop: 'Магазин',
      iv3_owned: 'Моє: {n} з {of}', iv3_empty: 'З цим фільтром тут порожньо',
      iv3_noneT: 'У тебе поки немає: {k}', iv3_noneTxt: 'Їх можна купити в магазині за KF, отримати з Premium, у пропуску сезону або як нагороду сезону.',
      iv3_t_badge: 'Значки', iv3_k_badge: 'значок', iv3_t_pbg: 'Фон профілю', iv3_k_pbg: 'фон профілю', iv3_pbgNone: 'Без фону', iv3_pbgLines: 'Контурні лінії Konzte', iv3_pbgNoneD: 'Контурні лінії Konzte — стандартна картка', iv3_pbgHint: 'Позаду сторінки профілю й на картці гравця. Контурні лінії Konzte або фон Konzte.', iv3_pbgImg: 'Своє зображення', iv3_set: 'Встановити', iv3_using: 'Використовується', iv3_pbgPrem: 'Фон профілю — з Premium', iv3_pbgPremD: 'Фон Konzte видно в профілі й на картці гравця.', iv3_avail: 'Доступно: {n}', iv3_cur2: 'Поточний фон',
      iv3_bHint: 'Сховай значки біля свого ніку від інших гравців. «Верифікований» сховати не можна.',
      iv3_b_premium: 'Корона Premium', iv3_b_owner: 'Значок «Власник»', iv3_b_dev: 'Значок «Розробник»', iv3_b_creator: 'Значок «Контент-мейкер»', iv3_b_verified: 'Значок «Верифікований»',
      iv3_shown: 'Показано', iv3_hidden: 'Сховано', iv3_always: 'Завжди видно', iv3_noBadges: 'Значків поки немає — вони приходять з Premium і ролями стаффу.',
      iv3_avUp: 'Завантажити свій', iv3_avOwn: 'Свій аватар', iv3_avOwnD: 'Завантажений з Premium — видно всюди.', iv3_avReset: 'Повернути обраний', iv3_avPrem: 'Свій аватар (і GIF) — з Premium',
      iv3_stkCur: 'Зараз на банері', iv3_stkNone: 'На банері немає наліпок', iv3_premCol: 'Кольори Premium+', iv3_premColS: 'Простий колір ніку з Premium+',
      iv3_vfxPlay: 'Програти', iv3_cmp: 'Порівняти з надітим', iv3_new: 'Показати обране', iv3_pick: 'Клацни будь-яку картку, щоб приміряти перед тим, як вдягати.',
      iv3_inMatch: 'У кімнаті матчу', iv3_inLb: 'У рейтингу',
    },
    ru: {
      iv3_sub: 'Всё, что у тебя есть, и что ещё можно получить. Кликни карточку — справа увидишь, как это выглядит на тебе.',
      iv3_card: 'Карточка игрока', iv3_cardSub: 'Так тебя видят другие игроки', iv3_trying: 'Примерка', iv3_now: 'Сейчас надето',
      iv3_cur: 'Текущее', iv3_none: 'Ничего не надето', iv3_noneD: 'Стандартный вид — выбери что-нибудь ниже.',
      iv3_change: 'Сменить', iv3_take: 'Снять', iv3_wear: 'Надеть', iv3_worn: 'Надето', iv3_place: 'Разместить', iv3_edit: 'Редактировать',
      iv3_buy: 'Купить', iv3_toShop: 'Открыть магазин', iv3_get: 'Получить Premium', iv3_locked: 'Закрыто', iv3_free: 'Бесплатно',
      iv3_f_all: 'Все', iv3_f_mine: 'Моё', iv3_f_prem: 'Premium', iv3_f_shop: 'Магазин',
      iv3_owned: 'Моё: {n} из {of}', iv3_empty: 'С этим фильтром здесь пусто',
      iv3_noneT: 'У тебя пока нет: {k}', iv3_noneTxt: 'Их можно купить в магазине за KF, получить с Premium, в пропуске сезона или как награду сезона.',
      iv3_t_badge: 'Значки', iv3_k_badge: 'значок', iv3_t_pbg: 'Фон профиля', iv3_k_pbg: 'фон профиля', iv3_pbgNone: 'Без фона', iv3_pbgLines: 'Контурные линии Konzte', iv3_pbgNoneD: 'Контурные линии Konzte — стандартная карточка', iv3_pbgHint: 'Позади страницы профиля и на карточке игрока. Контурные линии Konzte или фон Konzte.', iv3_pbgImg: 'Своё изображение', iv3_set: 'Установить', iv3_using: 'Используется', iv3_pbgPrem: 'Фон профиля — с Premium', iv3_pbgPremD: 'Фон Konzte виден в профиле и на карточке игрока.', iv3_avail: 'Доступно: {n}', iv3_cur2: 'Текущий фон',
      iv3_bHint: 'Спрячь значки рядом со своим ником от других игроков. «Верифицированный» спрятать нельзя.',
      iv3_b_premium: 'Корона Premium', iv3_b_owner: 'Значок «Владелец»', iv3_b_dev: 'Значок «Разработчик»', iv3_b_creator: 'Значок «Контент-мейкер»', iv3_b_verified: 'Значок «Верифицированный»',
      iv3_shown: 'Показано', iv3_hidden: 'Скрыто', iv3_always: 'Всегда видно', iv3_noBadges: 'Значков пока нет — они приходят с Premium и ролями стаффа.',
      iv3_avUp: 'Загрузить свой', iv3_avOwn: 'Свой аватар', iv3_avOwnD: 'Загружен с Premium — виден везде.', iv3_avReset: 'Вернуть выбранный', iv3_avPrem: 'Свой аватар (и GIF) — с Premium',
      iv3_stkCur: 'Сейчас на баннере', iv3_stkNone: 'На баннере нет наклеек', iv3_premCol: 'Цвета Premium+', iv3_premColS: 'Простой цвет ника из Premium+',
      iv3_vfxPlay: 'Проиграть', iv3_cmp: 'Сравнить с надетым', iv3_new: 'Показать выбранное', iv3_pick: 'Кликни любую карточку, чтобы примерить перед тем, как надевать.',
      iv3_inMatch: 'В комнате матча', iv3_inLb: 'В рейтинге',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k] ||= {}, L[k]);

  const IC = {
    lock: '<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    cart: '<svg viewBox="0 0 24 24"><path d="M3 4h2.5l2.2 11h10.6L20.5 8H7"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/></svg>',
    box: '<svg viewBox="0 0 24 24"><path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9"/></svg>',
    crown: '<svg viewBox="0 0 24 24"><path d="M4 18h16M4.5 15L3 7l5 4 4-6 4 6 5-4-1.5 8z"/></svg>',
    play: '<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z"/></svg>',
    edit: '<svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>',
    up: '<svg viewBox="0 0 24 24"><path d="M12 16V4M7 9l5-5 5 5M4 20h16"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    eye: '<svg viewBox="0 0 24 24"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  };
  const TABS = ['banner', 'pbg', 'frame', 'emblem', 'avatar', 'ncolor', 'sticker', 'vfx', 'theme', 'music', 'badge'];
  const ST = S.iv3 = S.iv3 || { tab: 'banner', f: {}, sel: {} };
  const tabName = k => k === 'badge' ? t('iv3_t_badge') : k === 'pbg' ? t('iv3_t_pbg') : t('s2_t_' + k);

  const ids = k => {
    const cat = s2Cat();
    return {
      banner: BANNERS, frame: FRAMES, emblem: [...SHOP3.EMBLEMS, ...EMBLEMS_SEASON, ...EMBLEMS_ALL], theme: KZ_THEME_IDS, music: kzMusIds(), avatar: [...SHOP3.AVATARS, ...SHOP4.AVATARS, ...SHOP5.AVATARS, ...(typeof XMAS !== 'undefined' ? XMAS.AVATARS : [])].filter(id => SHOP3.AVATARS.includes(id) || s2Has('avatar', id)),
      sticker: cat.STICKERS || [], ncolor: [...Object.keys(cat.NCOLORS || {}), ...Object.keys(cat.NGRADS || {})], vfx: cat.VFX || [],
    }[k] || [];
  };
  const shopIt = (k, id) => S.shop?.items?.find(x => x.kind === k && x.id === id);
  const premSet = k => {
    const T = S.premInfo?.tiers || {}, out = new Set();
    for (const tier of Object.values(T)) for (const id of tier?.[S2_OWNK[k]] || []) out.add(id);
    if (k === 'ncolor') for (const id of Object.keys(s2Cat().NGRADS || {})) out.add(id);
    return out;
  };
  const worn = (k, id) => s2Worn(k, id);
  const wornId = k => {
    const c = S.myProfile?.cosmetics || {}, pr = S.me?.prem || {}, lc = s2LC()?.cos;
    if (k === 'banner' || k === 'frame' || k === 'emblem') return c[k] ?? pr[k] ?? '';
    if (k === 'ncolor' || k === 'vfx') return lc?.[k] || '';
    if (k === 'theme') return c.theme || '';
    if (k === 'music') return c.music || '';
    if (k === 'avatar') return ids('avatar').find(id => s2Worn('avatar', id)) || '';
    return '';
  };
  const src = (k, id) => {
    if (k === 'banner' || k === 'frame' || k === 'emblem') return cosmeticSource(k + 's', id) || t('s2_k_' + k);
    if (k === 'avatar' && /^av_(an|df)_/.test(id)) return s2Name('kit', id.replace(/^av_an_/, 'kit4_').replace(/^av_df_/, 'kit5_'));
    if (k === 'avatar' && typeof XMAS !== 'undefined' && XMAS.AVATARS.includes(id)) return cosmeticSource('avatars', id);
    if (k === 'avatar') return t('iv3_free');
    if (k === 'theme') return kzThemeT('usdShort');
    if (k === 'music') return t('s2_k_music');
    if (k === 'ncolor' && s2Cat().NGRADS?.[id]) return 'Premium+';
    return t('s2_k_' + k);
  };
  const priceHtml = it => !it ? '' : it.usdOnly ? `<b class="iv3-pr usd">$${s2UsdNow(it)}</b>` : `<b class="iv3-pr">${s2Now(it)} <i>KF</i></b>`;

  function playerCard(sel, bg) {
    const f = s2Fake(sel, !S.s2.cmp);
    f.pbg = S.myProfile?.pbg; f.id = S.me.id;
    const tryBg = bg;
    return window.kzCard3 ? kzCard3(f, { mode: S.me.r2v2 ? '2v2' : undefined, bg: tryBg }) : '';
  }
  function side(tab, sel) {
    if (tab === 'pbg') return pbgSide(sel);
    const isSel = sel && tab !== 'badge';
    const has = isSel && s2Has(tab, sel), w = isSel && worn(tab, sel), it = isSel && shopIt(tab, sel);
    const pv = isSel && !['theme', 'vfx', 'music'].includes(tab) ? { kind: tab, id: sel } : null;
    let body;
    if (tab === 'theme' && sel) body = kzThemeTry(sel, has);
    else if (tab === 'music') body = sel ? kzMusTry(sel) : `${kzMusTry(wornId('music'))}<p class="mute iv3-note">${esc(kzMusT('invHint'))}</p>`;
    else body = playerCard(pv) + (tab === 'vfx' && sel ? `<div class="iv3-vfx">${s2Thumb('vfx', sel)}<button class="btn ghost sm" data-iv3vfx="${esc(sel)}">${IC.play}${t('iv3_vfxPlay')}</button></div>` : '')
      + `<div class="iv3-ctx">${s2TryHtml(pv, false)}</div>`;
    const act = !isSel ? `<p class="mute iv3-note">${t('iv3_pick')}</p>`
      : w ? `<div class="iv3-sact"><span class="iv3-ok">${IC.check}${t('iv3_worn')}</span><span class="grow"></span>${tab === 'sticker' ? `<button class="btn ghost sm" data-iv3eq="${esc(sel)}">${t('iv3_place')}</button>` : `<button class="btn ghost sm" data-iv3eq="">${t('iv3_take')}</button>`}</div>`
      : has ? `<button class="btn iv3-cta" data-iv3eq="${esc(sel)}">${tab === 'sticker' ? t('iv3_place') : t('iv3_wear')}</button>`
      : it ? `<button class="btn iv3-cta" data-iv3shop="${esc(sel)}">${IC.cart}${t('iv3_buy')} · ${it.usdOnly ? '$' + s2UsdNow(it) : s2Now(it) + ' KF'}</button>`
      : premSet(tab).has(sel) && !S.me.premium?.tier ? `<button class="btn iv3-cta" data-iv3go="premium">${IC.crown}${t('iv3_get')}</button>`
      : `<div class="iv3-sact mute">${IC.lock}<span>${esc(src(tab, sel))}</span></div>`;
    return `<div class="card iv3-side s2-try">
      <div class="iv3-sh"><div><span class="p3-h">${isSel ? t('iv3_trying') : t('iv3_card')}</span><b>${isSel ? esc(s2Name(tab, sel)) : t('iv3_cardSub')}</b></div><span class="grow"></span>
        ${isSel ? `<button class="iv3-x" data-iv3unsel title="✕">${IC.x}</button>` : ''}</div>
      ${body}${act}</div>`;
  }

  function art(tab, id) {
    const me = S.me;
    if (tab === 'banner') return `<div class="iv3-bn">${bannerHtml(id, 'iv3-bimg')}<div class="iv3-bnin">${avaF(me, '', me.prem?.frame)}<b>${nickHtml({ ...me, badges: [], prem: { ...(me.prem || {}), tier: '' } })}</b></div></div>`;
    if (tab === 'theme') return kzThemeThumb(id);
    if (tab === 'music') return kzMusThumb(id);
    return s2Thumb(tab, id);
  }
  function card(tab, id, sel) {
    const has = s2Has(tab, id), w = has && worn(tab, id), it = shopIt(tab, id);
    const prem = !has && premSet(tab).has(id) && !S.me.premium?.tier;
    const act = w ? `<div class="iv3-st on">${IC.check}<span>${t('iv3_worn')}</span>${tab === 'sticker' ? '' : `<button class="iv3-mini" data-iv3eq="">${t('iv3_take')}</button>`}</div>`
      : has ? `<button class="btn sm iv3-wear" data-iv3eq="${esc(id)}">${tab === 'sticker' ? t('iv3_place') : t('iv3_wear')}</button>`
      : it ? `<div class="iv3-st buy">${priceHtml(it)}<button class="btn sm" data-iv3shop="${esc(id)}">${t('iv3_buy')}${IC.arrow}</button></div>`
      : prem ? `<button class="btn ghost sm iv3-prem" data-iv3go="premium">${IC.crown}Premium</button>`
      : `<div class="iv3-st lk">${IC.lock}<span>${t('iv3_locked')}</span></div>`;
    return `<div class="iv3-it ${has ? 'own' : 'lock'} ${w ? 'worn' : ''} ${id === sel ? 'sel' : ''}" data-iv3sel="${esc(id)}">
      <div class="iv3-art">${art(tab, id)}${has ? '' : `<i class="iv3-lki">${IC.lock}</i>`}${w ? `<i class="iv3-wi">${IC.check}</i>` : ''}</div>
      <div class="iv3-nm"><b title="${esc(s2Name(tab, id))}">${esc(s2Name(tab, id))}</b><span>${esc(src(tab, id))}</span></div>
      <div class="iv3-ft">${act}</div></div>`;
  }

  function current(tab, noShopBtn) {
    const me = S.myProfile, st = s2LC();
    if (tab === 'sticker') {
      const on = st?.cos?.stickers || [], own = st?.owned?.stickers || [];
      return `<div class="card iv3-cur"><div class="iv3-curart stk">${on.map(s => stickerImg(s.id)).join('') || IC.box}</div>
        <div class="grow"><span class="p3-h">${t('iv3_stkCur')}</span><h3>${on.length ? on.map(s => esc(s2Name('sticker', s.id))).join(' · ') : t('iv3_stkNone')}</h3><p class="mute">${t('s2_stkNote')}</p></div>
        ${own.length ? `<button class="btn ghost iv3-cbtn" data-iv3eq="x">${IC.edit}${t('iv3_edit')}</button>` : ''}</div>`;
    }
    const id = wornId(tab);
    const thumb = tab === 'avatar' ? `<div class="s2-sq">${ava(S.me, 'lg')}</div>` : tab === 'music' ? kzMusThumb(id) : id ? art(tab, id) : `<div class="iv3-curnone">${IC.box}</div>`;
    const name = tab === 'avatar' && me.customAvatar ? t('iv3_avOwn') : id ? esc(s2Name(tab, id)) : tab === 'theme' || tab === 'music' ? 'Konzte' : t('iv3_none');
    const extra = tab === 'avatar' ? `${S.me.premium?.tier ? `<button class="btn ghost iv3-cbtn" id="iv3-avup">${IC.up}${t('iv3_avUp')}</button>` : `<button class="btn ghost iv3-cbtn" data-iv3go="premium">${IC.crown}${t('iv3_avPrem')}</button>`}
        ${me.customAvatar ? `<button class="btn ghost iv3-cbtn" id="iv3-avreset">${t('iv3_avReset')}</button>` : ''}<input type="file" id="iv3-avfile" accept="image/gif,image/png,image/jpeg,image/webp" hidden>`
      : id && tab === 'music' ? `<button class="btn ghost iv3-cbtn" data-iv3eq="">${IC.x}${kzMusT('toDef')}</button>`
      : id && tab !== 'theme' ? `<button class="btn ghost iv3-cbtn" data-iv3eq="">${IC.x}${t('iv3_take')}</button>`
      : id && tab === 'theme' ? `<button class="btn ghost iv3-cbtn" data-iv3eq="">${IC.x}${kzThemeT('default')}</button>` : '';
    return `<div class="card iv3-cur k-${tab}"><div class="iv3-curart">${thumb}</div>
      <div class="grow"><span class="p3-h">${t('iv3_cur')} · ${t('s2_k_' + tab)}</span><h3>${name}</h3><p class="mute">${tab === 'avatar' && me.customAvatar ? t('iv3_avOwnD') : id ? esc(src(tab, id)) : tab === 'theme' ? kzThemeT('default') : tab === 'music' ? kzMusT('d_def') : t('iv3_noneD')}</p></div>
      ${extra}${shopCount(tab) && !noShopBtn ? `<button class="btn iv3-cbtn" data-iv3shop="">${IC.cart}${t('iv3_toShop')}</button>` : ''}</div>`;
  }
  const shopCount = tab => (S.shop?.items || []).filter(x => x.kind === tab).length;

  function badgeList() {
    const all = S.me?.badgesAll || S.me?.badges || [], out = [];
    if (S.me?.premium) out.push('premium');
    for (const k of ['owner', 'dev', 'creator']) if (all.includes(k)) out.push(k);
    const hid = S.me.hideBadges || {};
    const icon = k => k === 'premium' ? `<img src="assets/crown-${S.me.premium?.tier === 'plus' ? 'plus' : 'premium'}.png" alt="">` : badgeIcon(k);
    const rows = out.map(k => `<div class="iv3-bdg ${hid[k] ? 'off' : ''}"><i class="iv3-bic bdg bdg-${k}">${icon(k)}</i><div class="grow"><b>${t('iv3_b_' + k)}</b><span>${hid[k] ? t('iv3_hidden') : t('iv3_shown')}</span></div>
      <button class="switch ${hid[k] ? '' : 'on'}" data-iv3bh="${k}"></button></div>`);
    if (all.includes('verified')) rows.push(`<div class="iv3-bdg"><i class="iv3-bic bdg bdg-verified">${badgeIcon('verified')}</i><div class="grow"><b>${t('iv3_b_verified')}</b><span>${t('iv3_always')}</span></div><span class="iv3-ok">${IC.check}</span></div>`);
    return `<div class="card iv3-bdgs"><p class="mute">${t('iv3_bHint')}</p>${rows.join('') || `<div class="iv3-emp mini">${IC.eye}<span>${t('iv3_noBadges')}</span></div>`}</div>`;
  }

  const pbgCur = () => S.myProfile?.pbg || null;
  const pbgKey = b => !b ? '' : b.type === 'banner' ? b.banner : b.type === 'image' ? '@img' : '';
  const pbgBg = id => !id ? { auto: 1 } : id === '@img' ? { url: (S.server || '') + pbgCur()?.url } : { banner: id };
  const pbgName = id => !id ? t('iv3_pbgNone') : id === '@img' ? t('iv3_pbgImg') : s2Name('banner', id);
  const PBG_ALLOW = ['gas_visor', ...SHOP4.PBG()];
  function pbgList() {
    const own = S.myProfile?.available?.banners;
    return ['', ...PBG_ALLOW.filter(id => !/^(b[45]_|a3_snow_rig$)/.test(id) || (own || []).includes(id))];
  }
  const meCard = (bg, cls) => { const f = { ...S.me, pbg: bg?.auto ? null : S.myProfile?.pbg }; if (bg?.auto) bg = undefined; return window.kzCard3 ? kzCard3(f, { mode: S.me.r2v2 ? '2v2' : undefined, bg, cls }) : ''; };
  function pbgMain(sel) {
    const prem = !!S.me.premium?.tier, cur = pbgCur(), ck = pbgKey(cur), list = pbgList();
    const curCard = `<div class="card iv3-cur k-pbg"><div class="iv3-curart pbgc">${ck === '@img' ? `<div class="iv3-bimg" style="background-image:url('${esc((S.server || '') + pbgCur().url)}')"></div>` : ck ? bannerHtml(ck, 'iv3-bimg') : `<div class="kc3 topo iv3-kmini"><div class="kc3-bg">${kzCard3.topo(S.me.id)}</div></div>`}</div>
      <div class="grow"><span class="p3-h">${t('iv3_cur2')}</span><h3>${esc(pbgName(ck))}</h3><p class="mute">${ck ? t('iv3_pbgHint') : t('iv3_pbgNoneD')}</p></div>
      ${ck ? `<button class="btn ghost iv3-cbtn" data-iv3pbg="">${IC.x}${t('iv3_take')}</button>` : ''}</div>`;
    const up = prem ? '' : `<div class="card iv3-up"><i class="iv3-upic">${IC.crown}</i><div class="grow"><b>${t('iv3_pbgPrem')}</b><span class="mute">${t('iv3_pbgPremD')}</span></div>
      <button class="btn iv3-cta" data-iv3go="premium">${t('iv3_get')}</button></div>`;
    const card = id => {
      const on = id === ck;
      const act = on ? `<div class="iv3-st on">${IC.check}<span>${t('iv3_using')}</span></div>`
        : !prem && id ? `<button class="btn ghost sm iv3-prem" data-iv3go="premium">${IC.crown}Premium</button>`
        : id === '@img' ? '' : `<button class="btn sm iv3-wear" data-iv3pbg="${esc(id)}">${t('iv3_set')}</button>`;
      return `<div class="iv3-it iv3-bgc ${on ? 'worn' : ''} ${id === sel ? 'sel' : ''} ${!prem && id ? 'lock' : 'own'}" data-iv3sel="${esc(id)}">
        ${meCard(pbgBg(id), 'sm')}${!prem && id ? `<i class="iv3-lki">${IC.lock}</i>` : ''}
        <div class="iv3-nm"><b title="${esc(pbgName(id))}">${esc(pbgName(id))}</b><span>${id ? (id === '@img' ? 'Premium' : esc(src('banner', id))) : t('iv3_pbgLines')}</span></div>
        <div class="iv3-ft">${act}</div></div>`;
    };
    return curCard + up + `<div class="iv3-filt"><span class="iv3-cnt">${t('iv3_avail', { n: list.length })}</span></div><div class="iv3-grid g-pbg">${list.map(card).join('')}</div>`;
  }
  function pbgSide(sel) {
    const isSel = sel != null, ck = pbgKey(pbgCur()), prem = !!S.me.premium?.tier;
    const act = !isSel ? `<p class="mute iv3-note">${t('iv3_pick')}</p>`
      : sel === ck ? `<div class="iv3-sact"><span class="iv3-ok">${IC.check}${t('iv3_using')}</span></div>`
      : !prem && sel ? `<button class="btn iv3-cta" data-iv3go="premium">${IC.crown}${t('iv3_get')}</button>`
      : `<button class="btn iv3-cta" data-iv3pbg="${esc(sel)}">${t('iv3_set')}</button>`;
    return `<div class="card iv3-side s2-try">
      <div class="iv3-sh"><div><span class="p3-h">${isSel ? t('iv3_trying') : t('iv3_card')}</span><b>${isSel ? esc(pbgName(sel)) : t('iv3_cardSub')}</b></div><span class="grow"></span>
        ${isSel ? `<button class="iv3-x" data-iv3unsel>${IC.x}</button>` : ''}</div>
      ${meCard(isSel ? pbgBg(sel) : undefined)}${act}</div>`;
  }

  function page() {
    const st = s2LC();
    if (!TABS.includes(ST.tab)) ST.tab = 'banner';
    const tab = ST.tab;
    const ownN = k => ids(k).filter(id => s2Has(k, id)).length;
    const tabs = `<div class="iv3-tabs">${TABS.map(k => `<button class="iv3-tab ${k === tab ? 'on' : ''}" data-iv3tab="${k}">${tabName(k)}${k !== 'badge' && k !== 'pbg' && (!['sticker', 'ncolor', 'vfx'].includes(k) || st) ? `<i>${ownN(k)}</i>` : ''}</button>`).join('')}</div>`;
    const head = `<i class="lc-inv" hidden></i><div class="iv3-head"><div><h1>${t('inventory')}</h1><div class="mute">${t('iv3_sub')}</div></div><span class="grow"></span>
      <button class="btn ghost iv3-shopbtn" data-iv3go="shop">${IC.cart}${t('shop')}${IC.arrow}</button></div>${tabs}`;
    let main, sel = null;
    if (tab === 'badge') main = badgeList();
    else if (tab === 'pbg') { sel = ST.sel.pbg ?? null; main = pbgMain(sel); }
    else if (['sticker', 'ncolor', 'vfx'].includes(tab) && !st) main = `<div class="card iv3-emp">${t('loading')}</div>`;
    else {
      const all = ids(tab), ps = premSet(tab);
      const F = { all: () => true, mine: id => s2Has(tab, id), prem: id => ps.has(id), shop: id => !!shopIt(tab, id) };
      const cnt = Object.fromEntries(Object.keys(F).map(k => [k, all.filter(F[k]).length]));
      let f = ST.f[tab] || 'all'; if (!F[f]) f = 'all';
      const rank = id => worn(tab, id) ? 0 : s2Has(tab, id) ? 1 : shopIt(tab, id) ? 2 : ps.has(id) ? 3 : 4;
      const list = all.filter(F[f]).map((id, i) => [id, i, rank(id)]).sort((a, b) => a[2] - b[2] || a[1] - b[1]).map(x => x[0]);
      sel = ST.sel[tab] && all.includes(ST.sel[tab]) ? ST.sel[tab] : null;
      const chips = `<div class="iv3-filt">${Object.keys(F).filter(k => k === 'all' || k === 'mine' || cnt[k]).map(k => `<button class="iv3-chip ${f === k ? 'on' : ''}" data-iv3f="${k}">${t('iv3_f_' + k)}<i>${cnt[k]}</i></button>`).join('')}
        <span class="grow"></span><span class="iv3-cnt">${t('iv3_owned', { n: cnt.mine, of: all.length })}</span></div>`;
      const upsell = !cnt.mine ? `<div class="card iv3-up"><i class="iv3-upic">${IC.box}</i><div class="grow"><b>${t('iv3_noneT', { k: tabName(tab).toLowerCase() })}</b><span class="mute">${t('iv3_noneTxt')}</span></div>
        <button class="btn iv3-cta" data-iv3shop="">${t('iv3_toShop')}</button></div>` : '';
      const pc = tab === 'ncolor' && (S.premInfo?.colors || []).length ? (() => {
        const av = S.myProfile.available?.colors || [], cur = S.myProfile.cosmetics?.color;
        return `<div class="card iv3-pcol"><div><span class="p3-h">${t('iv3_premCol')}</span><p class="mute">${t('iv3_premColS')}</p></div><div class="iv3-cdots">${S.premInfo.colors.map(c => `<button class="iv3-cdot ${cur === c ? 'on' : ''} ${av.includes(c) ? '' : 'lock'}" style="--c:${c}" data-iv3col="${av.includes(c) ? (cur === c ? '' : c) : '-'}" title="${c}"><span style="color:${c}">${esc(S.me.nick)}</span></button>`).join('')}</div></div>`;
      })() : '';
      const grid = list.length ? `<div class="iv3-grid g-${tab}">${list.map(id => card(tab, id, sel)).join('')}</div>` : `<div class="card iv3-emp">${IC.box}<span>${t('iv3_empty')}</span></div>`;
      main = current(tab, !cnt.mine) + upsell + pc + chips + grid;
    }
    return `<div class="iv3">${head}<div class="iv3-lay"><div class="iv3-main">${main}</div><div class="iv3-right">${side(tab, sel)}</div></div></div>`;
  }

  function toShop(kind, id) {
    if (kind && S2_ITEM_TABS.includes(kind)) { S.s2.tab = kind; S.s2.filter = 'all'; if (id) S.s2.sel[kind] = id; }
    go('shop');
    let n = 0; const tick = () => { const el = document.getElementById('sh3-' + kind); if (el && S.page === 'shop') el.scrollIntoView({ block: 'start' }); else if (++n < 20 && S.page === 'shop') setTimeout(tick, 150); };
    if (kind) setTimeout(tick, 60);
  }
  function bind() {
    const view = $('#view'), tab = ST.tab;
    view.querySelectorAll('[data-iv3tab]').forEach(b => b.onclick = () => { ST.tab = b.dataset.iv3tab; view.scrollTop = 0; renderInventory(); });
    view.querySelectorAll('[data-iv3f]').forEach(b => b.onclick = () => { ST.f[tab] = b.dataset.iv3f; renderInventory(); });
    view.querySelectorAll('[data-iv3sel]').forEach(c => c.onclick = e => { if (e.target.closest('button')) return; ST.sel[tab] = ST.sel[tab] === c.dataset.iv3sel ? null : c.dataset.iv3sel; S.s2.cmp = false; renderInventory(); });
    view.querySelectorAll('[data-iv3unsel]').forEach(b => b.onclick = () => { ST.sel[tab] = null; S.s2.cmp = false; renderInventory(); });
    view.querySelectorAll('[data-iv3eq]').forEach(b => b.onclick = e => { e.stopPropagation(); s2Equip(tab, b.dataset.iv3eq); });
    view.querySelectorAll('[data-iv3shop]').forEach(b => b.onclick = e => { e.stopPropagation(); toShop(tab, b.dataset.iv3shop); });
    view.querySelectorAll('[data-iv3go]').forEach(b => b.onclick = e => { e.preventDefault(); e.stopPropagation(); go(b.dataset.iv3go); });
    view.querySelectorAll('[data-iv3vfx]').forEach(b => b.onclick = () => typeof lcPlayVfx === 'function' && lcPlayVfx(b.dataset.iv3vfx));
    const sd = view.querySelector('.iv3-side');
    if (sd) {
      sd.querySelectorAll('.iv3-ctx .s2-ctx').forEach((c, i) => { if (tab !== 'sticker' && c.querySelector('.pbanner')) c.remove(); });
      sd.querySelectorAll('.iv3-ctx [data-s2cmp]').forEach(b => { b.textContent = S.s2.cmp ? t('iv3_new') : t('iv3_cmp'); if (!ST.sel[tab]) b.remove(); });
      s2BindTry(sd, renderInventory);
    }
    const setPbg = run(async id => {
      const cur = pbgCur() || {};
      applyMe(await api('/api/premium/profilebg', id ? { type: 'banner', banner: id, opacity: cur.opacity ?? 0.25, blur: !!cur.blur } : { reset: true }));
      S.profCache = null; toast(t('saved'));
    });
    view.querySelectorAll('[data-iv3pbg]').forEach(b => b.onclick = e => { e.stopPropagation(); setPbg(b.dataset.iv3pbg); });
    view.querySelectorAll('[data-iv3pbgdlg]').forEach(b => b.onclick = () => typeof openProfileBg === 'function' && openProfileBg(S.myProfile));
    const save = run(async body => applyMe(await api('/api/premium/cosmetics', body)));
    view.querySelectorAll('[data-iv3col]').forEach(b => b.onclick = () => b.dataset.iv3col !== '-' ? save({ color: b.dataset.iv3col }) : go('premium'));
    view.querySelectorAll('[data-iv3bh]').forEach(el => el.onclick = run(async () => {
      const show = !el.classList.contains('on'); el.disabled = true;
      try { S.me = await api('/api/me/badges', { [el.dataset.iv3bh]: !show }); sfx(show ? 'toggle_on' : 'toggle_off'); renderMe(); renderInventory(); } finally { el.disabled = false; }
    }));
    if ($('#iv3-avup')) $('#iv3-avup').onclick = () => $('#iv3-avfile').click();
    if ($('#iv3-avfile')) $('#iv3-avfile').onchange = run(async e => {
      const fl = e.target.files[0]; if (!fl) return;
      const data = await new Promise((ok, bad) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = bad; r.readAsDataURL(fl); });
      applyMe(await api('/api/premium/avatar', { data })); toast(t('avatarSaved'));
    });
    if ($('#iv3-avreset')) $('#iv3-avreset').onclick = run(async () => applyMe(await api('/api/premium/avatar', { reset: true })));
  }

  const _prev = renderInventory;
  renderInventory = function () {
    if (!window.KZ_V3?.()) return _prev.apply(this, arguments);
    if (!S.premInfo || !S.myProfile) return render(`<i class="lc-inv" hidden></i><div class="card iv3-emp">${t('loading')}</div>`);
    render(page());
    bind();
  };
})();

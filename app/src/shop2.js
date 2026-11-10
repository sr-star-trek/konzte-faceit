(() => {
  const L = {
    en: {
      s2_sub: 'Banners, frames, emblems and more. Looks only — no effect on ELO.', s2_balance: 'Balance', s2_topup: 'Top up',
      s2_t_starter: 'Bundle', s2_t_banner: 'Banners', s2_t_frame: 'Frames', s2_t_emblem: 'Emblems', s2_t_sticker: 'Stickers', s2_t_ncolor: 'Nick colour', s2_t_vfx: 'Effects', s2_t_theme: 'Styles', s2_k_theme: 'app style', s2_t_music: 'Music', s2_k_music: 'sound style', s2_t_kf: 'KF coins', s2_t_avatar: 'Avatar',
      s2_t_promo: 'Promo code', s2_t_nick: 'Nick change',
      s2_f_all: 'All', s2_f_new: 'Not owned', s2_f_mine: 'Mine', s2_f_afford: 'Enough KF', s2_f_locked: 'Locked',
      s2_k_banner: 'banner', s2_k_frame: 'frame', s2_k_emblem: 'emblem', s2_k_avatar: 'avatar', s2_k_sticker: 'sticker', s2_k_ncolor: 'nick colour', s2_k_vfx: 'victory effect',
      s2_orUsd: 'or ${u}', s2_mine: '✓ Mine', s2_worn: 'Equipped', s2_wear: 'Equip', s2_take: 'Remove', s2_place: 'Place',
      s2_try: 'Try-on · {n}', s2_inMatch: 'In the match room', s2_inLb: 'On the leaderboard', s2_inProf: 'In the profile header',
      s2_withFrame: 'With my frame', s2_noFrame: 'No frame', s2_cmpWorn: 'Compare with equipped', s2_showNew: 'Show new',
      s2_buyKf: 'Buy for {n} KF', s2_buyUsd: 'Buy for ${u} via PayPal', s2_short: 'Not enough KF: {n} more', s2_after: 'After the purchase you will have <b>{n} KF</b> left. The item appears in the Inventory at once — equip it in one click.',
      s2_ownedNote: 'Already yours.', s2_premNote: 'Comes with your Premium.', s2_vfxPlay: 'Play the effect', s2_stkNote: 'Stickers go on your profile banner and Discord card — up to 3.',
      s2_earn: 'Where to get KF', s2_eWin: 'Match win', s2_eLoss: 'Match loss', s2_eRef: 'A friend plays 3 matches', s2_eQuest: 'Quests and season pass', s2_more: 'More',
      s2_pickItem: 'Pick an item on the left to try it on', s2_nothing: 'Nothing here with this filter', s2_toShop: 'To the shop', s2_inShop: 'In the shop', s2_noBundle: 'No bundles right now — the season pass and Premium are always here.',
      s2_premLinks: 'Premium and the season pass', s2_invSub: 'Everything you own. Equip in one click — see it right away in the header preview.',
      s2_premColors: 'Premium+ colours', s2_lcColors: 'Nick colours', s2_none: 'None', s2_stkOn: 'On your banner now',
      s2_seen: 'How others see you', s2_invPick: 'Click an item to try it on here before equipping.',
    },
    uk: {
      s2_sub: 'Банери, рамки, емблеми й не тільки. Лише вигляд — на ELO не впливає.', s2_balance: 'Баланс', s2_topup: 'Поповнити',
      s2_t_starter: 'Набір', s2_t_banner: 'Банери', s2_t_frame: 'Рамки', s2_t_emblem: 'Емблеми', s2_t_sticker: 'Наліпки', s2_t_ncolor: 'Колір ніку', s2_t_vfx: 'Ефекти', s2_t_theme: 'Стилі', s2_k_theme: 'стиль застосунку', s2_t_music: 'Музика', s2_k_music: 'стиль звуку', s2_t_kf: 'KF-коїни', s2_t_avatar: 'Аватар',
      s2_t_promo: 'Промокод', s2_t_nick: 'Зміна ніку',
      s2_f_all: 'Усе', s2_f_new: 'Не куплено', s2_f_mine: 'Моє', s2_f_afford: 'Вистачає KF', s2_f_locked: 'Закрите',
      s2_k_banner: 'банер', s2_k_frame: 'рамка', s2_k_emblem: 'емблема', s2_k_avatar: 'аватар', s2_k_sticker: 'наліпка', s2_k_ncolor: 'колір ніку', s2_k_vfx: 'ефект перемоги',
      s2_orUsd: 'або ${u}', s2_mine: '✓ Моє', s2_worn: 'Вдягнено', s2_wear: 'Вдягти', s2_take: 'Зняти', s2_place: 'Розмістити',
      s2_try: 'Приміряння · {n}', s2_inMatch: 'У кімнаті матчу', s2_inLb: 'У рейтингу', s2_inProf: 'У шапці профілю',
      s2_withFrame: 'З моєю рамкою', s2_noFrame: 'Без рамки', s2_cmpWorn: 'Порівняти з вдягнутим', s2_showNew: 'Показати нове',
      s2_buyKf: 'Купити за {n} KF', s2_buyUsd: 'Купити за ${u} через PayPal', s2_short: 'Не вистачає KF: ще {n}', s2_after: 'Після покупки залишиться <b>{n} KF</b>. Предмет одразу з’явиться в «Інвентарі» — вдягнути можна одним кліком.',
      s2_ownedNote: 'Уже твоє.', s2_premNote: 'Входить у твій Premium.', s2_vfxPlay: 'Програти ефект', s2_stkNote: 'Наліпки клеяться на банер профілю й картку в Discord — до 3.',
      s2_earn: 'Де взяти KF', s2_eWin: 'Перемога в матчі', s2_eLoss: 'Поразка в матчі', s2_eRef: 'Друг зіграв 3 матчі', s2_eQuest: 'Завдання й пропуск', s2_more: 'Детальніше',
      s2_pickItem: 'Обери предмет ліворуч, щоб приміряти', s2_nothing: 'З цим фільтром тут порожньо', s2_toShop: 'У магазин', s2_inShop: 'Є в магазині', s2_noBundle: 'Наборів зараз немає — пропуск сезону й Premium завжди тут.',
      s2_premLinks: 'Premium і пропуск сезону', s2_invSub: 'Усе, що в тебе є. Вдягай одним кліком — одразу видно в прев’ю шапки.',
      s2_premColors: 'Кольори Premium+', s2_lcColors: 'Кольори ніку', s2_none: 'Без', s2_stkOn: 'Зараз на банері',
      s2_seen: 'Як тебе бачать інші', s2_invPick: 'Клацни предмет, щоб приміряти тут, перш ніж вдягати.',
    },
    ru: {
      s2_sub: 'Баннеры, рамки, эмблемы и не только. Только внешний вид — на ELO не влияет.', s2_balance: 'Баланс', s2_topup: 'Пополнить',
      s2_t_starter: 'Набор', s2_t_banner: 'Баннеры', s2_t_frame: 'Рамки', s2_t_emblem: 'Эмблемы', s2_t_sticker: 'Наклейки', s2_t_ncolor: 'Цвет ника', s2_t_vfx: 'Эффекты', s2_t_theme: 'Стили', s2_k_theme: 'стиль приложения', s2_t_music: 'Музыка', s2_k_music: 'стиль звука', s2_t_kf: 'KF-коины', s2_t_avatar: 'Аватар',
      s2_t_promo: 'Промокод', s2_t_nick: 'Смена ника',
      s2_f_all: 'Все', s2_f_new: 'Не куплено', s2_f_mine: 'Моё', s2_f_afford: 'Хватает KF', s2_f_locked: 'Закрытое',
      s2_k_banner: 'баннер', s2_k_frame: 'рамка', s2_k_emblem: 'эмблема', s2_k_avatar: 'аватар', s2_k_sticker: 'наклейка', s2_k_ncolor: 'цвет ника', s2_k_vfx: 'эффект победы',
      s2_orUsd: 'или ${u}', s2_mine: '✓ Моё', s2_worn: 'Надето', s2_wear: 'Надеть', s2_take: 'Снять', s2_place: 'Разместить',
      s2_try: 'Примерка · {n}', s2_inMatch: 'В комнате матча', s2_inLb: 'В рейтинге', s2_inProf: 'В шапке профиля',
      s2_withFrame: 'С моей рамкой', s2_noFrame: 'Без рамки', s2_cmpWorn: 'Сравнить с надетым', s2_showNew: 'Показать новое',
      s2_buyKf: 'Купить за {n} KF', s2_buyUsd: 'Купить за ${u} через PayPal', s2_short: 'Не хватает KF: ещё {n}', s2_after: 'После покупки останется <b>{n} KF</b>. Предмет сразу появится в «Инвентаре» — надеть можно одним кликом.',
      s2_ownedNote: 'Уже твоё.', s2_premNote: 'Входит в твой Premium.', s2_vfxPlay: 'Проиграть эффект', s2_stkNote: 'Наклейки клеятся на баннер профиля и карточку в Discord — до 3.',
      s2_earn: 'Где взять KF', s2_eWin: 'Победа в матче', s2_eLoss: 'Поражение в матче', s2_eRef: 'Друг сыграл 3 матча', s2_eQuest: 'Задания и пропуск', s2_more: 'Подробнее',
      s2_pickItem: 'Выбери предмет слева, чтобы примерить', s2_nothing: 'С этим фильтром здесь пусто', s2_toShop: 'В магазин', s2_inShop: 'Есть в магазине', s2_noBundle: 'Наборов сейчас нет — пропуск сезона и Premium всегда здесь.',
      s2_premLinks: 'Premium и пропуск сезона', s2_invSub: 'Всё, что у тебя есть. Надевай одним кликом — сразу видно в превью шапки.',
      s2_premColors: 'Цвета Premium+', s2_lcColors: 'Цвета ника', s2_none: 'Без', s2_stkOn: 'Сейчас на баннере',
      s2_seen: 'Как тебя видят другие', s2_invPick: 'Кликни предмет, чтобы примерить здесь, прежде чем надевать.',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k], L[k]);
})();

S.s2 = { tab: 'banner', filter: 'all', sel: {}, frame: true, cmp: false, itab: 'banner', ifilter: 'mine', isel: {} };
const S2_OWNK = { banner: 'banners', frame: 'frames', emblem: 'emblems', avatar: 'avatars', sticker: 'stickers', ncolor: 'ncolors', vfx: 'vfx', theme: 'themes', music: 'musics' };
const S2_ITEM_TABS = ['theme', 'banner', 'frame', 'emblem', 'avatar', 'sticker', 'ncolor', 'vfx'];
const s2AvaUrl = id => `assets/avatar/${id}.jpg`;
const s2LC = () => (typeof LC !== 'undefined' ? LC.st : null);
const s2Cat = () => (typeof LCAT !== 'undefined' ? LCAT : { NCOLORS: {}, NGRADS: {} });
function s2Worn(kind, id) {
  const c = S.myProfile?.cosmetics || {}, pr = S.me?.prem || {}, lc = s2LC()?.cos;
  if (kind === 'banner' || kind === 'frame' || kind === 'emblem') return (c[kind] ?? pr[kind]) === id;
  if (kind === 'avatar') return S.myProfile?.cosmetics ? c.avatar === id : String(S.me?.avatar || '').endsWith(`/avatar/${id}.jpg`);
  if (kind === 'ncolor') return lc?.ncolor === id;
  if (kind === 'vfx') return lc?.vfx === id;
  if (kind === 'theme') return (S.myProfile?.cosmetics?.theme || '') === id;
  if (kind === 'music') return (S.myProfile?.cosmetics?.music || '') === id;
  if (kind === 'sticker') return !!lc?.stickers?.some(s => s.id === id);
  return false;
}
function s2Has(kind, id) {
  if (kind === 'kit') { const ps = SHOP4.parts(id); return ps.length > 0 && ps.every(x => s2Has(x.kind, x.id)); }
  const sh = S.shop, av = S.myProfile?.available, lc = s2LC()?.owned;
  if ((sh?.owned?.[S2_OWNK[kind]] || []).includes(id)) return true;
  if (av?.[S2_OWNK[kind]]?.includes(id)) return true;
  if (lc?.[S2_OWNK[kind]]?.includes(id)) return true;
  if (kind === 'avatar' && SHOP3.AVATARS.includes(id)) return true;
  if (kind === 'ncolor' && s2Cat().NGRADS[id] && S.me?.premium?.tier === 'plus') return true;
  return false;
}
const s2Name = (kind, id) => kind === 'kit' ? t('sh3_kitN', { n: /^kit5_/.test(id) ? cosName('b5_' + id.slice(5)) : String(SHOP4.KITS.indexOf(id) + 1).padStart(2, '0') }) : kind === 'theme' ? kzThemeName(id) : kind === 'music' ? kzMusName(id) : ['sticker', 'ncolor', 'vfx'].includes(kind) ? t(`lc_${kind}_${id}`) : cosName(id);
const s2Now = it => it.now ?? it.price, s2UsdNow = it => it.usdNow ?? it.usd;
const s2Price = it => it.usdOnly ? `<div class="s2-price usd"><b>$${s2UsdNow(it)}</b>${s2UsdNow(it) !== it.usd ? `<s>$${it.usd}</s>` : ''}<span>${kzThemeT('usdShort')}</span></div>` : `<div class="s2-price"><b>${s2Now(it)} KF</b>${s2Now(it) < it.price ? `<s>${it.price}</s>` : ''}${S.shop?.pay?.enabled && it.usd ? `<span>${t('s2_orUsd', { u: s2UsdNow(it) })}</span>` : ''}</div>`;
const s2SaleLeft = until => { const ms = Math.max(0, until - Date.now()), h = Math.floor(ms / 3600e3), m = Math.floor(ms % 3600e3 / 60e3), sec = Math.floor(ms % 60e3 / 1e3); return `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`; };
const s2SaleBar = sale => !sale ? '' : `<div class="s2-sale"><b>−${sale.pct}%</b><span>${kzPick({ en: 'Sale on Premium, KF packs and every item — for KF and for $', uk: 'Розпродаж: Premium, пакети KF і всі предмети — за KF і за $', ru: 'Распродажа: Premium, пакеты KF и все предметы — за KF и за $' })}</span><span class="grow"></span><span class="mute">${kzPick({ en: 'ends in', uk: 'до кінця', ru: 'до конца' })}</span><b class="num" data-sale-left="${sale.until}">${s2SaleLeft(sale.until)}</b></div>`;
setInterval(() => document.querySelectorAll('[data-sale-left]').forEach(el => { el.textContent = s2SaleLeft(+el.dataset.saleLeft); }), 1000);
function s2Thumb(kind, id) {
  const me = S.me;
  if (kind === 'banner') return `<div class="s2-bn">${bannerHtml(id, 'bimg')}<span>${emblemHtml(me.prem?.emblem)}<b>${esc(me.nick)}</b></span></div>`;
  if (kind === 'frame') return `<div class="s2-sq">${avaF(me, 'lg', id)}</div>`;
  if (kind === 'emblem') return `<div class="s2-sq">${emblemHtml(id, 'big')}</div>`;
  if (kind === 'avatar') return `<div class="s2-sq">${ava({ avatar: s2AvaUrl(id) }, 'lg')}</div>`;
  if (kind === 'sticker') return `<div class="s2-sq">${typeof stickerImg === 'function' ? stickerImg(id, 'big') : ''}</div>`;
  if (kind === 'ncolor') return `<div class="s2-sq"><span class="lc-nkp" style="${typeof lcColorCss === 'function' ? lcColorCss(id) : ''}">${esc(me.nick)}</span></div>`;
  if (kind === 'vfx') return `<div class="s2-sq"><i class="lc-vfxic big v-${esc(id)}">${typeof LCI !== 'undefined' ? LCI.spark : ''}</i></div>`;
  if (kind === 'theme') return kzThemeThumb(id);
  if (kind === 'music') return kzMusThumb(id);
  return '';
}

function s2Fake(sel, useSel) {
  const me = S.me, r = me.r2v2 || me.r5v5 || {};
  const f = { ...me, prem: { ...(me.prem || {}) }, lc: { ...(me.lc || {}) }, elo: r.elo, lvl: r.lvl ?? levelOf(r.elo || 0), cal: r.cal };
  if (s2LC()?.cos) { f.lc.nc = s2LC().cos.ncolor || f.lc.nc; f.lc.st = s2LC().cos.stickers; }
  if (useSel && sel?.id) {
    if (sel.kind === 'banner' || sel.kind === 'frame' || sel.kind === 'emblem') f.prem[sel.kind] = sel.id;
    if (sel.kind === 'avatar') f.avatar = s2AvaUrl(sel.id);
    if (sel.kind === 'kit') for (const x of SHOP4.parts(sel.id)) { if (x.kind === 'avatar') f.avatar = s2AvaUrl(x.id); else f.prem[x.kind] = x.id; }
    if (sel.kind === 'ncolor') f.lc.nc = sel.id;
    if (sel.kind === 'sticker') { const cur = (f.lc.st || []).filter(s => s.id !== sel.id).slice(0, 2); f.lc.st = [...cur, { id: sel.id, x: 72, y: 50, s: 0.45, r: -8 }]; }
  }
  if (!S.s2.frame && sel?.kind !== 'frame' && sel?.kind !== 'kit') f.prem.frame = null;
  return f;
}
function s2TryHtml(sel, isShop) {
  const f = s2Fake(sel, !S.s2.cmp);
  const r = S.me.r2v2 || S.me.r5v5 || {};
  const rank = S.me.rank2v2 || S.myProfile?.rank2v2 || '—';
  const stk = (f.lc.st || []).map(s => `<div class="lc-ps" style="left:${s.x}%;top:${s.y}%;height:${s.s * 100}%;transform:translate(-50%,-50%) rotate(${s.r || 0}deg)">${stickerImg(s.id)}</div>`).join('');
  return `<div class="s2-ctx"><div class="s2-lbl">${t('s2_inMatch')}</div><div class="s2-pl">${playerRow(f, null)}</div></div>
    <div class="s2-ctx"><div class="s2-lbl">${t('s2_inLb')}</div><div class="lbt s2-lbt"><div class="lbr me ${f.prem?.banner ? 'hasb' : ''}">${bannerHtml(f.prem?.banner, 'pl-b lbr-b')}
      <div class="lb-place">${rank}</div><div class="lb-pl">${avaF(f)}<img class="lvl" src="${lvlIc(r, f.lvl)}"><div class="lb-nick"><span class="num">${nickHtml(f)}</span></div></div>
      <div class="num lb-elo">${isCal(r) ? t('la_calShort', { n: r.cal }) : r.elo}</div></div></div></div>
    <div class="s2-ctx"><div class="s2-lbl">${t('s2_inProf')}</div><div class="pbanner s2-ph ${f.prem?.banner ? 'has-b' : ''}">${bannerHtml(f.prem?.banner, 'pb-art')}${stk ? `<div class="lc-pst">${stk}</div>` : ''}
      <div class="s2-phin">${avaF(f, 'lg')}<b>${nickHtml({ ...f, prem: { ...f.prem, emblem: '' } })}</b></div></div></div>
    <div class="s2-cmp">${sel?.kind !== 'frame' && sel?.kind !== 'kit' ? `<button class="s2-chip ${S.s2.frame ? 'on' : ''}" data-s2fr="1">${t('s2_withFrame')}</button><button class="s2-chip ${S.s2.frame ? '' : 'on'}" data-s2fr="0">${t('s2_noFrame')}</button>` : ''}
      <span class="grow"></span><button class="s2-chip ${S.s2.cmp ? 'on' : ''}" data-s2cmp>${S.s2.cmp ? t('s2_showNew') : t('s2_cmpWorn')}</button></div>`;
}
function s2BindTry(root, redraw) {
  root.querySelectorAll('[data-s2fr]').forEach(b => b.onclick = () => { S.s2.frame = b.dataset.s2fr === '1'; redraw(); });
  root.querySelectorAll('[data-s2cmp]').forEach(b => b.onclick = () => { S.s2.cmp = !S.s2.cmp; redraw(); });
  root.querySelectorAll('.s2-try [data-act]').forEach(el => { el.removeAttribute('data-act'); el.onclick = null; });
}

const s2Equip = run(async (kind, id) => {
  if (kind === 'sticker') return typeof lcStickerEditor === 'function' && lcStickerEditor();
  if (kind === 'ncolor' || kind === 'vfx') {
    const r = await api('/api/lc/cosmetics', { [kind]: id });
    if (typeof LC !== 'undefined') LC.st = r.state;
    S.me = r.me || S.me; S.myProfile = { ...S.myProfile, ...r.me }; S.profCache = null; renderMe(); refresh();
    if (kind === 'vfx' && id && typeof lcPlayVfx === 'function') lcPlayVfx(id);
    return;
  }
  applyMe(await api('/api/premium/cosmetics', { [kind]: id }));
});
const s2Buy = run(async (kind, id) => {
  const r = await api('/api/shop/buy', { kind, id });
  S.shop = { ...S.shop, coins: r.coins, owned: r.owned }; S.me = r.me; S.myProfile = { ...S.myProfile, ...r.me }; renderMe(); sfx('coin'); toast(t('bought'));
  if (['sticker', 'ncolor', 'vfx'].includes(kind) && typeof lcLoad === 'function') lcLoad(true);
  refresh();
});
const s2BuyUsd = run(async (kind, id) => { const r = await api('/api/shop/buy-usd', { kind, id }); K.open(r.url); toast(t('payOpened')); });

function renderShop() {
  const sh = S.shop;
  if (!sh) return render(`<div class="card empty-note">${t('loading')}</div>`);
  const st = s2LC();
  const by = k => sh.items.filter(x => x.kind === k);
  const starter = st?.starter && !st.starter.bought ? st.starter : null;
  const tabs = [...(starter ? ['starter'] : []), ...S2_ITEM_TABS.filter(k => by(k).length), 'kf'];
  if (![...tabs, 'promo', 'nick'].includes(S.s2.tab)) S.s2.tab = tabs.includes('banner') ? 'banner' : tabs[0];
  const tab = S.s2.tab;
  const isItems = S2_ITEM_TABS.includes(tab);
  const tabBtn = (k, n) => `<button class="s2-tab ${tab === k ? 'on' : ''}" data-s2tab="${k}">${t('s2_t_' + k)}${n != null ? `<i>${n}</i>` : ''}</button>`;
  const head = `<i class="lc-shop" hidden></i><div class="lbhead s2-head"><div><h1>${t('shop')}</h1><div class="mute">${t('s2_sub')}</div></div><span class="grow"></span>
      <div class="s2-bal"><span class="mute">${t('s2_balance')}</span><b>${sh.coins} KF</b><button class="btn gold sm" data-s2tab="kf">${t('s2_topup')}</button></div></div>
    <div class="s2-tabs">${tabs.map(k => tabBtn(k, S2_ITEM_TABS.includes(k) ? by(k).length : k === 'starter' ? 1 : null)).join('')}<span class="grow"></span>
      ${tabBtn('promo')}${sh.nick ? tabBtn('nick') : ''}<button class="s2-tab lnk" data-s2go="pass">${t('lcPass')} ↗</button><button class="s2-tab lnk prem" data-s2go="premium">Premium ↗</button></div>${s2SaleBar(sh.sale)}`;

  let body = '';
  if (isItems) {
    const all = by(tab);
    const cnt = { all: all.length, new: all.filter(it => !s2Has(tab, it.id)).length, mine: all.filter(it => s2Has(tab, it.id)).length, afford: all.filter(it => !s2Has(tab, it.id) && !it.usdOnly && sh.coins >= s2Now(it)).length };
    const f = S.s2.filter;
    const list = all.filter(it => f === 'all' || (f === 'new' ? !s2Has(tab, it.id) : f === 'mine' ? s2Has(tab, it.id) : !s2Has(tab, it.id) && !it.usdOnly && sh.coins >= s2Now(it)))
      .map((it, i) => [it, i]).sort((a, b) => s2Has(tab, a[0].id) - s2Has(tab, b[0].id) || a[1] - b[1]).map(x => x[0]);
    let sel = S.s2.sel[tab];
    if (!sel || !all.some(it => it.id === sel)) sel = S.s2.sel[tab] = (list.find(it => !s2Has(tab, it.id)) || list[0] || all[0])?.id;
    const card = it => {
      const has = s2Has(tab, it.id), worn = has && s2Worn(tab, it.id);
      return `<div class="s2-it ${it.id === sel ? 'sel' : ''} ${has ? 'own' : ''} ${worn ? 'worn' : ''}" data-s2sel="${esc(it.id)}">${s2Thumb(tab, it.id)}
        <div class="s2-ft"><div class="s2-nm"><b>${esc(s2Name(tab, it.id))}</b><span>${t('s2_k_' + tab)}</span></div>
        ${worn ? `<div class="s2-state worn"><b>${t('s2_worn')}</b>${tab === 'sticker' ? `<button class="btn ghost sm" data-s2eq="${esc(it.id)}">${t('s2_place')}</button>` : `<button class="s2-mini" data-s2eq="">${t('s2_take')}</button>`}</div>`
          : has ? `<div class="s2-state"><b>${t('s2_mine')}</b><button class="btn ghost sm" data-s2eq="${esc(it.id)}">${tab === 'sticker' ? t('s2_place') : t('s2_wear')}</button></div>` : s2Price(it)}</div></div>`;
    };
    const grid = tab === 'emblem' && new Set(list.map(it => it.price)).size > 1
      ? [900, 600, 300].map(pr => { const g = list.filter(it => it.price === pr); return g.length ? `<div class="s2-tier"><span class="kf">${pr} KF</span><span class="mute">${t(pr === 900 ? 'emRare' : pr === 600 ? 'emAnim' : 'emStatic')}</span></div><div class="s2-grid g-emblem">${g.map(card).join('')}</div>` : ''; }).join('')
      : `<div class="s2-grid g-${tab}">${list.map(card).join('')}</div>`;
    const it = all.find(x => x.id === sel);
    const has = it && s2Has(tab, it.id), worn = has && s2Worn(tab, it.id);
    const prem = it && !(sh.owned?.[S2_OWNK[tab]] || []).includes(it.id) && has;
    const left = it ? sh.coins - s2Now(it) : 0;
    const panel = it ? `<div class="card accent s2-try"><div class="card-h"><h4>${t('s2_try', { n: esc(s2Name(tab, it.id)) })}</h4><span class="grow"></span><span class="tag">${t('s2_k_' + tab)}</span></div>
        ${tab === 'theme' ? kzThemeTry(it.id, has) : tab === 'vfx' ? `<div class="s2-vfx">${s2Thumb('vfx', it.id)}<button class="btn ghost" data-s2vfx="${esc(it.id)}">▶ ${t('s2_vfxPlay')}</button><p class="mute">${t('lcVfxHint')}</p></div>` : s2TryHtml({ kind: tab, id: it.id }, true)}
        ${tab === 'sticker' ? `<p class="mute s2-note">${t('s2_stkNote')}</p>` : ''}
        <div class="s2-buy">${has ? `<p class="s2-note win">${prem ? t('s2_premNote') : t('s2_ownedNote')}</p>
            ${worn && tab !== 'sticker' ? `<button class="btn ghost" data-s2eq="">${t('s2_take')}</button>` : `<button class="btn gold" data-s2eq="${esc(it.id)}">${tab === 'sticker' ? t('s2_place') : t('s2_wear')}</button>`}`
          : it.usdOnly ? `<button class="btn gold" data-s2usd ${sh.pay?.enabled ? '' : 'disabled'}>${t('s2_buyUsd', { u: s2UsdNow(it) })}</button><p class="s2-note mute">${kzThemeT('usdOnly')}</p>`
          : `<button class="btn gold" data-s2buy ${left < 0 ? 'disabled' : ''}>${t('s2_buyKf', { n: s2Now(it) })}</button>
            ${sh.pay?.enabled && it.usd ? `<button class="btn ghost" data-s2usd>${t('s2_buyUsd', { u: s2UsdNow(it) })}</button>` : ''}
            ${left < 0 ? `<p class="s2-note lose">${t('s2_short', { n: -left })} · <a href="#" data-s2tab="kf">${t('s2_topup')}</a></p>` : `<p class="s2-note mute">${t('s2_after', { n: left })}</p>`}`}</div></div>`
      : `<div class="card s2-try empty-note">${t('s2_pickItem')}</div>`;
    body = `<div class="s2-filt">${['all', 'new', 'mine', 'afford'].map(k => `<button class="s2-chip ${f === k ? 'on' : ''}" data-s2f="${k}">${t('s2_f_' + k)}<i>${cnt[k]}</i></button>`).join('')}</div>
      <div class="s2-lay"><div class="s2-main">${list.length ? grid : `<div class="card empty-note">${t('s2_nothing')}</div>`}</div>
        <div class="s2-side">${panel}${s2EarnCard()}</div></div>`;
  } else if (tab === 'starter') {
    body = `<div class="s2-solo">${starter ? lcStarterHtml(starter) : ''}${s2PassPrem()}</div>`;
  } else if (tab === 'kf') {
    body = `<div class="s2-lay"><div class="card accent"><div class="card-h"><h4>${t('buyKf')}</h4><span class="grow"></span>${sh.pay?.sandbox ? `<span class="lose" style="font-size:12px">${t('sandboxNote')}</span>` : ''}</div>
        <div class="packs">${(sh.packs || []).map(pk => `<div class="pack ${pk.best ? 'best' : ''}">${pk.best ? `<span class="tag gold">${t('bestValue')}</span>` : ''}
          <span class="kf big">${pk.coins} KF</span><span class="mute">${pk.bonus ? t('packBonus', { n: pk.bonus }) : '&nbsp;'}</span>
          <button class="btn sm ${pk.best ? 'gold' : ''}" data-pack="${pk.id}" ${sh.pay?.enabled ? '' : 'disabled'}>${sh.pay?.enabled ? `${pk.price} ${sh.pay.currency}` : t('notConfigured')}</button>${pk.was && pk.was !== pk.price ? `<s class="mute">${pk.was} ${sh.pay?.currency || ''}</s>` : ''}</div>`).join('')}</div></div>
      <div class="s2-side">${s2EarnCard()}</div></div>`;
  } else if (tab === 'promo') {
    body = `<div class="s2-solo"><div class="card col s2-form"><h4>${t('promoCode')}</h4><p class="mute" style="margin:0;font-size:12.5px">${t('promoHint')}</p>
        <form class="row" id="promo-form"><input id="promo-in" class="grow" maxlength="32" placeholder="${t('promoPh')}" autocomplete="off" spellcheck="false" style="text-transform:uppercase"><button class="btn">${t('activate')}</button></form></div></div>`;
  } else if (tab === 'nick' && sh.nick) {
    body = `<div class="s2-solo"><div class="card nickshop s2-form"><h4 style="margin:0 0 4px">${t('nickChange')}</h4><span class="mute" style="font-size:12.5px">${t('nickChangeHint', { n: esc(sh.nick.current || '') })}</span>
        ${sh.nick.tokens ? `<div class="win" style="margin-top:6px;font-size:13px">${t('nickTokens', { n: sh.nick.tokens })}</div>` : ''}
      <form class="row" id="nick-form" style="flex-wrap:wrap;margin-top:14px"><input id="nick-in" maxlength="25" placeholder="${t('newNickPh')}" autocomplete="off" spellcheck="false" style="width:240px">
        <button class="btn ${sh.nick.free ? 'gold' : ''}" data-nvia="kf" ${sh.nick.free || sh.nick.tokens || sh.coins >= sh.nick.kf ? '' : 'disabled'}>${sh.nick.free ? t('nickFreeBtn', { n: sh.nick.free, m: sh.nick.freeMax }) : sh.nick.tokens ? t('nickUseToken') : `${sh.nick.kf} KF`}</button>
        ${sh.pay?.enabled && !sh.nick.tokens && !sh.nick.free ? `<button class="btn ghost" data-nvia="usd">$${sh.nick.usd}</button>` : ''}</form></div></div>`;
  }
  render(head + body);
  s2BindShop();
}
function s2EarnCard() {
  return `<div class="card s2-earn"><h4>${t('s2_earn')}</h4>
    <div class="s2-er"><span>${t('s2_eWin')}</span><b>+15 KF</b></div><div class="s2-er"><span>${t('s2_eLoss')}</span><b>+5 KF</b></div>
    <div class="s2-er"><span>${t('s2_eRef')}</span><b>+250 KF</b></div><div class="s2-er"><span>${t('s2_eQuest')}</span><a href="#" data-s2go="pass">${t('s2_more')} →</a></div>
    <button class="btn ghost sm" data-s2go="referrals" style="margin-top:10px">${t('earnCoins')}</button></div>`;
}
function s2PassPrem() {
  const p = s2LC()?.pass;
  return `${!s2LC()?.starter || s2LC().starter.bought ? `<div class="card empty-note">${t('s2_noBundle')}</div>` : ''}
    <div class="s2-pp">${p && !p.prem ? `<div class="card lc-passad" data-s2go="pass"><div class="lc-lv">${p.level}</div><div class="grow"><b>${t('lcPass')}</b><div class="mute">${t('lcPassAd', { n: p.levels })}</div></div><span class="btn sm gold">${'$' + p.price.usd} · ${p.price.kf} KF</span></div>` : ''}
    <div class="card lc-passad s2-premad" data-s2go="premium"><img src="assets/crown-plus.png" alt="" class="s2-crown"><div class="grow"><b>Premium / Premium+</b><div class="mute">${t('s2_premLinks')}</div></div><span class="btn sm ghost">Premium ↗</span></div></div>`;
}
function s2BindShop() {
  const view = $('#view'), tab = S.s2.tab;
  view.querySelectorAll('[data-s2tab]').forEach(b => b.onclick = e => { e.preventDefault(); S.s2.tab = b.dataset.s2tab; S.s2.cmp = false; view.scrollTop = 0; renderShop(); });
  view.querySelectorAll('[data-s2go]').forEach(b => b.onclick = e => { e.preventDefault(); go(b.dataset.s2go); });
  view.querySelectorAll('[data-s2f]').forEach(b => b.onclick = () => { S.s2.filter = b.dataset.s2f; renderShop(); });
  view.querySelectorAll('[data-s2sel]').forEach(c => c.onclick = e => { if (e.target.closest('button')) return; S.s2.sel[tab] = c.dataset.s2sel; S.s2.cmp = false; renderShop(); });
  view.querySelectorAll('[data-s2eq]').forEach(b => b.onclick = e => { e.stopPropagation(); s2Equip(tab, b.dataset.s2eq); });
  view.querySelectorAll('[data-s2buy]').forEach(b => b.onclick = () => s2Buy(tab, S.s2.sel[tab]));
  view.querySelectorAll('[data-s2usd]').forEach(b => b.onclick = () => s2BuyUsd(tab, S.s2.sel[tab]));
  view.querySelectorAll('[data-s2vfx]').forEach(b => b.onclick = () => typeof lcPlayVfx === 'function' && lcPlayVfx(b.dataset.s2vfx));
  const tr = view.querySelector('.s2-try'); if (tr) s2BindTry(tr, renderShop);
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

function renderInventory() {
  const pi = S.premInfo, me = S.myProfile;
  if (!pi || !me) return render(`<i class="lc-inv" hidden></i><div class="card empty-note">${t('loading')}</div>`);
  const av = me.available || {}, cur = me.cosmetics || {};
  const st = s2LC(), cat = s2Cat();
  const ids = {
    banner: BANNERS, frame: FRAMES, emblem: [...SHOP3.EMBLEMS, ...EMBLEMS_SEASON, ...EMBLEMS_ALL],
    theme: KZ_THEME_IDS, avatar: [...SHOP3.AVATARS, ...SHOP4.AVATARS, ...SHOP5.AVATARS, ...(typeof XMAS !== 'undefined' ? XMAS.AVATARS : [])].filter(id => SHOP3.AVATARS.includes(id) || s2Has('avatar', id)), sticker: cat.STICKERS || [], ncolor: [...Object.keys(cat.NCOLORS || {}), ...Object.keys(cat.NGRADS || {})], vfx: cat.VFX || [],
  };
  const has = (k, id) => s2Has(k, id);
  const tabs = S2_ITEM_TABS;
  if (!tabs.includes(S.s2.itab)) S.s2.itab = 'banner';
  const tab = S.s2.itab, f = S.s2.ifilter;
  const inShop = (k, id) => S.shop?.items?.some(x => x.kind === k && x.id === id);
  const head = `<i class="lc-inv" hidden></i><div class="lbhead s2-head"><div><h1>${t('inventory')}</h1><div class="mute">${t('s2_invSub')}</div></div><span class="grow"></span>
      <button class="btn ghost sm" data-s2go="shop">${t('shop')} →</button></div>
    <div class="s2-tabs">${tabs.map(k => `<button class="s2-tab ${tab === k ? 'on' : ''}" data-s2itab="${k}">${t('s2_t_' + k)}${ids[k] ? `<i>${ids[k].filter(id => has(k, id)).length}</i>` : ''}</button>`).join('')}</div>`;
  let body = '';
  const avCard = () => `<div class="card avc"><div class="avbig">${avaF(S.me, 'lg')}</div>
      <div class="grow"><h4>${t('avatar')} ${crown('premium')}</h4><p class="mute" style="margin:0 0 12px">${t('avatarHint')}</p>
        <div class="row">${S.me.premium?.tier ? `<button class="btn" id="av-up">${t('uploadAvatar')}</button>` : `<button class="btn" disabled>👑 ${t('premiumOnly')}</button>`}
        ${me.customAvatar ? `<button class="btn ghost" id="av-reset">${t('resetAvatar')}</button>` : ''}</div>
        <input type="file" id="av-file" accept="image/gif,image/png,image/jpeg,image/webp" hidden></div></div>`;
  if (['sticker', 'ncolor', 'vfx'].includes(tab) && !st) {
    body = `<div class="card empty-note">${t('loading')}</div>`;
  } else {
    const all = ids[tab];
    const cnt = { mine: all.filter(id => has(tab, id)).length, locked: all.filter(id => !has(tab, id)).length, all: all.length };
    const worn = id => tab === 'ncolor' || tab === 'vfx' || tab === 'sticker' ? s2Worn(tab, id) : cur[tab] === id;
    const list = all.filter(id => f === 'all' || (f === 'mine' ? has(tab, id) : !has(tab, id)))
      .map((id, i) => [id, i, worn(id) ? 0 : has(tab, id) ? 1 : 2]).sort((a, b) => a[2] - b[2] || a[1] - b[1]).map(x => x[0]);
    const isel = S.s2.isel[tab] && list.includes(S.s2.isel[tab]) ? S.s2.isel[tab] : null;
    const card = id => {
      const h = has(tab, id), w = h && worn(id);
      const src = tab === 'banner' || tab === 'frame' || tab === 'emblem' ? cosmeticSource(tab + 's', id) : '';
      const lockedGrad = tab === 'ncolor' && cat.NGRADS?.[id] && !h;
      return `<div class="s2-it ${h ? 'own' : 'lock'} ${w ? 'worn' : ''} ${id === isel ? 'sel' : ''}" data-s2isel="${esc(id)}">${s2Thumb(tab, id)}
        <div class="s2-ft"><div class="s2-nm"><b>${esc(s2Name(tab, id))}</b><span>${esc(src || t('s2_k_' + tab))}</span></div>
        ${w ? `<div class="s2-state worn"><b>${t('s2_worn')}</b>${tab === 'sticker' ? `<button class="btn ghost sm" data-s2ieq="${esc(id)}">${t('s2_place')}</button>` : `<button class="s2-mini" data-s2ieq="">${t('s2_take')}</button>`}</div>`
          : h ? `<button class="btn sm" data-s2ieq="${esc(id)}">${tab === 'sticker' ? t('s2_place') : t('s2_wear')}</button>`
          : inShop(tab, id) ? `<button class="btn ghost sm" data-s2shop="${esc(id)}">${t('s2_inShop')} →</button>` : `<span class="tag">🔒 ${lockedGrad ? 'Premium+' : t('locked')}</span>`}</div></div>`;
    };
    const grid = list.length ? `<div class="s2-grid g-${tab}">${list.map(card).join('')}</div>`
      : `<div class="card empty-note">${t('s2_nothing')} · <a href="#" data-s2go="shop">${t('s2_toShop')}</a></div>`;
    const pv = isel && ['banner', 'frame', 'emblem', 'avatar', 'ncolor', 'sticker'].includes(tab) ? { kind: tab, id: isel } : null;
    const side = `<div class="card s2-try ${pv ? 'accent' : ''}"><div class="card-h"><h4>${pv ? t('s2_try', { n: esc(s2Name(tab, isel)) }) : tab === 'theme' ? (isel ? esc(kzThemeName(isel)) : t('s2_t_theme')) : t('s2_seen')}</h4></div>
      ${tab === 'theme' ? (isel ? kzThemeTry(isel, has(tab, isel)) : `<p class="mute s2-note">${kzThemeT('invHint')}</p>`) : tab === 'vfx' && isel ? `<div class="s2-vfx">${s2Thumb('vfx', isel)}<button class="btn ghost" data-s2vfx="${esc(isel)}">▶ ${t('s2_vfxPlay')}</button></div>` : s2TryHtml(pv, false)}
      ${(pv || (tab === 'theme' && isel)) && !worn(isel) && has(tab, isel) ? `<div class="s2-buy"><button class="btn gold" data-s2ieq="${esc(isel)}">${tab === 'sticker' ? t('s2_place') : t('s2_wear')}</button></div>` : ''}
      ${!pv && tab !== 'theme' ? `<p class="mute s2-note">${t('s2_invPick')}</p>` : ''}</div>`;
    const extra = tab === 'sticker' && st ? `<div class="card s2-stkcur"><div class="card-h"><h4>${t('s2_stkOn')}</h4><span class="grow"></span>${st.owned.stickers.length ? `<button class="btn sm" data-s2ieq="x">${t('lcStickersEdit')}</button>` : ''}</div>
        <div class="row">${st.cos.stickers.map(s => stickerImg(s.id)).join('') || `<span class="mute">${st.owned.stickers.length ? t('lcStickersEmpty') : t('lcNoneOwned')}</span>`}</div></div>`
      : tab === 'avatar' ? avCard()
      : tab === 'ncolor' && (pi.colors || []).length ? `<div class="card s2-pcol"><div class="card-h"><h4>${t('s2_premColors')}</h4></div><div class="row" style="flex-wrap:wrap">
        ${pi.colors.map(c => `<button class="cdot ${cur.color === c ? 'on' : ''} ${(av.colors || []).includes(c) ? '' : 'lock'}" style="--c:${c}" data-color="${(av.colors || []).includes(c) ? (cur.color === c ? '' : c) : '-'}"><span style="color:${c}">${esc(S.me.nick)}</span></button>`).join('')}</div></div>` : '';
    body = `<div class="s2-filt">${['mine', 'locked', 'all'].map(k => `<button class="s2-chip ${f === k ? 'on' : ''}" data-s2if="${k}">${t(k === 'locked' ? 's2_f_new' : 's2_f_' + k)}<i>${cnt[k]}</i></button>`).join('')}
        <span class="mute s2-cnt">${t('invCount', { n: cnt.mine, of: cnt.all })}</span></div>
      <div class="s2-lay"><div class="s2-main">${extra}${grid}</div><div class="s2-side">${side}</div></div>`;
  }
  render(head + body);
  const view = $('#view');
  view.querySelectorAll('[data-s2itab]').forEach(b => b.onclick = () => { S.s2.itab = b.dataset.s2itab; view.scrollTop = 0; renderInventory(); });
  view.querySelectorAll('[data-s2if]').forEach(b => b.onclick = () => { S.s2.ifilter = b.dataset.s2if; renderInventory(); });
  view.querySelectorAll('[data-s2go]').forEach(b => b.onclick = e => { e.preventDefault(); go(b.dataset.s2go); });
  view.querySelectorAll('[data-s2shop]').forEach(b => b.onclick = () => { S.s2.tab = tab; S.s2.sel[tab] = b.dataset.s2shop; S.s2.filter = 'all'; go('shop'); });
  view.querySelectorAll('[data-s2ieq]').forEach(b => b.onclick = e => { e.stopPropagation(); s2Equip(tab, b.dataset.s2ieq); });
  view.querySelectorAll('[data-s2shop]').forEach(b => b.addEventListener('click', e => e.stopPropagation()));
  view.querySelectorAll('[data-s2isel]').forEach(c => c.onclick = e => { if (e.target.closest('button')) return; S.s2.isel[tab] = S.s2.isel[tab] === c.dataset.s2isel ? null : c.dataset.s2isel; S.s2.cmp = false; renderInventory(); });
  view.querySelectorAll('[data-s2vfx]').forEach(b => b.onclick = () => typeof lcPlayVfx === 'function' && lcPlayVfx(b.dataset.s2vfx));
  const tr = view.querySelector('.s2-try'); if (tr) s2BindTry(tr, renderInventory);
  const save = run(async body => applyMe(await api('/api/premium/cosmetics', body)));
  view.querySelectorAll('[data-color]').forEach(b => b.onclick = () => b.dataset.color !== '-' && save({ color: b.dataset.color }));
  if ($('#av-up')) $('#av-up').onclick = () => $('#av-file').click();
  if ($('#av-file')) $('#av-file').onchange = run(async e => {
    const fl = e.target.files[0]; if (!fl) return;
    const data = await new Promise((ok, bad) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = bad; r.readAsDataURL(fl); });
    applyMe(await api('/api/premium/avatar', { data })); toast(t('avatarSaved'));
  });
  if ($('#av-reset')) $('#av-reset').onclick = run(async () => applyMe(await api('/api/premium/avatar', { reset: true })));
}

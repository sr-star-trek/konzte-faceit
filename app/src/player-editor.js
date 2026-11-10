(() => {
  const L = {
    en: {
      pe_title: 'Edit profile', pe_btn: 'Edit profile', pe_owner: 'owner only', pe_save: 'Save changes', pe_saved: 'Saved: {f}', pe_nothing: 'Nothing changed',
      pe_tProfile: 'Profile', pe_tRating: 'Rating', pe_tEco: 'KF & Premium', pe_tCos: 'Cosmetics', pe_tPass: 'Season pass',
      pe_tfa: 'KONZTE GUARD', pe_tfaState: 'Authenticator: {a} · DM code: {d}', pe_on: 'on', pe_off: 'off', pe_tfaReset: 'Reset 2FA', pe_tfaQ: 'Reset two-factor login for this player? Do it only after you have confirmed it is really them (e.g. in a ticket from their Discord account).', pe_tfaDone: '2FA reset — the player was notified in DMs', pe_nick: 'Nickname', pe_gameId: 'Game ID', pe_badges: 'Badges', pe_hide: 'Hide from leaderboards', pe_hideHint: 'Not shown in rankings, top 10, season places and prizes, nominations, weekly records or the Discord leaderboard. Matches and ELO still count.',
      pe_mode: 'Mode', pe_elo: 'ELO', pe_w: 'Wins', pe_l: 'Losses', pe_k: 'Kills', pe_d: 'Deaths', pe_ratingHint: 'Fewer than 5 games in a mode = still in calibration (not on the leaderboard).',
      pe_kf: 'KF balance', pe_prem: 'Premium', pe_premNone: 'None', pe_until: 'Active until', pe_daysQ: 'or add days from today',
      pe_banner: 'Banner', pe_frame: 'Frame', pe_emblem: 'Emblem', pe_avatar: 'Avatar', pe_color: 'Nickname colour', pe_none: '— none —', pe_cosHint: 'Any item from the catalog — it is granted to the player for good, so it stays after Premium ends.',
      pe_level: 'Level', pe_passPrem: 'Premium track unlocked', pe_me: 'My profile', pe_meHint: 'Quick settings for your own account.', pe_hidden: 'You are hidden from leaderboards', pe_shown: 'You are shown on leaderboards',
      pe_badge_verified: 'Verified', pe_badge_dev: 'Developer', pe_badge_pro: 'Pro player', pe_partner: 'Partner code: {c}',
      pe3_cancel: 'Cancel', pe3_save: 'Save', pe3_saving: 'Saving…', pe3_clean: 'No changes', pe3_dirty: '{n} unsaved changes', pe3_dirty1: '1 unsaved change', pe3_show: 'Review', pe3_revert: 'Discard all',
      pe3_keys: 'Ctrl+S — save · Esc — close', pe3_errs: 'Fix {n} errors before saving', pe3_copy: 'Copy', pe3_copied: 'Copied: {v}', pe3_discord: 'Discord ID', pe3_noGid: 'no game ID',
      pe3_review: 'Review changes', pe3_reviewSub: 'This will be applied to {nick} and written to the audit log.', pe3_back: 'Back', pe3_confirm: 'Confirm and save', pe3_reason: 'Reason (optional, goes to the KF log and audit)', pe3_reasonPh: 'e.g. tournament prize, refund #123…',
      pe3_closeQ: 'Unsaved changes', pe3_closeSub: 'You have {n} unsaved changes. Close without saving?', pe3_keep: 'Keep editing', pe3_discard: 'Close without saving', pe3_saveClose: 'Save and close',
      pe3_was: 'was {v}', pe3_matches: 'Matches', pe3_wr: 'Win rate', pe3_kd: 'K/D', pe3_lvl: 'Level {n}', pe3_toNext: '{n} ELO to level {l}', pe3_maxLvl: 'Max level',
      pe3_cal: 'Calibration {n}/{p}', pe3_calDone: 'Calibrated', pe3_calAfter: 'level after calibration: {n}', pe3_resetMode: 'Reset mode', pe3_revertMode: 'Undo', pe3_resetQ: 'Reset {m}: ELO {e}, all stats to 0. Applied on save.',
      pe3_calHint: 'Calibration is not a separate counter — it is wins + losses in the mode. Under {p} games the player is calibrating (ELO hidden, larger ELO swings, not on leaderboards). To send a player back to calibration, reset the mode.',
      pe3_curBal: 'Current balance', pe3_newBal: 'After saving', pe3_log: 'Recent KF operations', pe3_noLog: 'No operations yet', pe3_zero: 'Set to 0',
      pe3_tier: 'Tier', pe3_active: 'Active until {d} · {n} days left', pe3_expired: 'Expired {d}', pe3_noPrem: 'No Premium', pe3_add: '+{n} days', pe3_removePrem: 'Remove Premium', pe3_premHint: 'Quick buttons extend from the current end date (or from now if expired).',
      pe3_preview: 'Preview', pe3_worn: 'Equipped', pe3_take: 'Take off', pe3_search: 'Search by name or id…', pe3_fAll: 'All', pe3_fHas: 'Player has', pe3_fNo: 'Missing', pe3_grant: 'Grant', pe3_revoke: 'Revoke',
      pe3_sGrant: 'granted', pe3_sBought: 'bought', pe3_sTier: 'tier / achievement', pe3_nothingFound: 'Nothing found', pe3_owned: 'owned {n}', pe3_equipHint: 'Click an item to equip it (it is granted automatically). «Grant» / «Revoke» changes ownership without equipping.',
      pe3_xp: 'XP', pe3_xpIn: 'XP in level', pe3_of: 'of {n}', pe3_max: 'Max', pe3_free: 'Free', pe3_premTrack: 'Premium', pe3_claimed: 'claimed', pe3_passHint: 'Lowering the level does not take back rewards that were already claimed.',
      pe3_main: 'Main', pe3_vis: 'Visibility', pe3_info: 'Info', pe3_created: 'Registered', pe3_seen: 'Last seen', pe3_ban: 'Banned', pe3_hist: 'Recent edits', pe3_noHist: 'No edits yet', pe3_by: 'by {n}',
      pe3_eNick: 'Nickname: 2–25 characters', pe3_eInt: '{f}: whole number ≥ 0', pe3_eMax: '{f}: at most {n}', pe3_eUntil: 'Premium end date must be in the future', pe3_given: 'Granted: {k} {v}', pe3_taken: 'Revoked: {k} {v}',
      pe3_kf_log: 'KF', pe3_pass: 'Season pass', pe3_ptrack: 'Premium track', pe3_yes: 'yes', pe3_no: 'no', pe3_noChanges: 'No changes', pe3_err: 'Could not save: {e}',
      pe3_kind_banner: 'banner', pe3_kind_frame: 'frame', pe3_kind_emblem: 'emblem', pe3_kind_avatar: 'avatar', pe3_kind_color: 'colour', pe3_kind_sticker: 'sticker', pe3_kind_ncolor: 'nick colour', pe3_kind_vfx: 'effect', pe3_kind_s2: 'Season 2',
    },
    uk: {
      pe_title: 'Редагування профілю', pe_btn: 'Редагувати профіль', pe_owner: 'лише власнику', pe_save: 'Зберегти зміни', pe_saved: 'Збережено: {f}', pe_nothing: 'Нічого не змінено',
      pe_tProfile: 'Профіль', pe_tRating: 'Рейтинг', pe_tEco: 'KF і Premium', pe_tCos: 'Косметика', pe_tPass: 'Пропуск',
      pe_tfa: 'KONZTE GUARD', pe_tfaState: 'Authenticator: {a} · Код у ЛС: {d}', pe_on: 'увімк.', pe_off: 'вимк.', pe_tfaReset: 'Скинути 2FA', pe_tfaQ: 'Скинути двофакторний вхід цьому гравцю? Роби це лише після перевірки, що це справді він (напр. тікет з його Discord-акаунта).', pe_tfaDone: '2FA скинуто — гравцю надіслано ЛС', pe_nick: 'Нік', pe_gameId: 'Game ID', pe_badges: 'Значки', pe_hide: 'Приховати з топів', pe_hideHint: 'Не показується в рейтингу, топ-10, місцях і призах сезону, номінаціях, рекордах тижня та таблиці лідерів у Discord. Матчі й ELO рахуються як завжди.',
      pe_mode: 'Режим', pe_elo: 'ELO', pe_w: 'Перемоги', pe_l: 'Поразки', pe_k: 'Вбивства', pe_d: 'Смерті', pe_ratingHint: 'Менше 5 ігор у режимі — ще калібрування (у таблиці лідерів не видно).',
      pe_kf: 'Баланс KF', pe_prem: 'Premium', pe_premNone: 'Немає', pe_until: 'Діє до', pe_daysQ: 'або додати днів від сьогодні',
      pe_banner: 'Банер', pe_frame: 'Рамка', pe_emblem: 'Емблема', pe_avatar: 'Аватар', pe_color: 'Колір ніку', pe_none: '— немає —', pe_cosHint: 'Будь-який предмет каталогу — видається гравцю назавжди, тож лишиться й після закінчення Premium.',
      pe_level: 'Рівень', pe_passPrem: 'Преміум-доріжка відкрита', pe_me: 'Мій профіль', pe_meHint: 'Швидкі налаштування твого акаунта.', pe_hidden: 'Тебе приховано з топів', pe_shown: 'Тебе видно в топах',
      pe_badge_verified: 'Верифікований', pe_badge_dev: 'Розробник', pe_badge_pro: 'Про-гравець', pe_partner: 'Код партнера: {c}',
      pe3_cancel: 'Скасувати', pe3_save: 'Зберегти', pe3_saving: 'Збереження…', pe3_clean: 'Без змін', pe3_dirty: 'Незбережених змін: {n}', pe3_dirty1: '1 незбережена зміна', pe3_show: 'Переглянути', pe3_revert: 'Відкинути все',
      pe3_keys: 'Ctrl+S — зберегти · Esc — закрити', pe3_errs: 'Виправ помилки ({n}), щоб зберегти', pe3_copy: 'Копіювати', pe3_copied: 'Скопійовано: {v}', pe3_discord: 'Discord ID', pe3_noGid: 'без game ID',
      pe3_review: 'Перевір зміни', pe3_reviewSub: 'Буде застосовано до {nick} і записано в журнал аудиту.', pe3_back: 'Назад', pe3_confirm: 'Підтвердити й зберегти', pe3_reason: 'Причина (необов\'язково, піде в журнал KF і аудит)', pe3_reasonPh: 'напр. приз турніру, повернення #123…',
      pe3_closeQ: 'Незбережені зміни', pe3_closeSub: 'Є незбережені зміни ({n}). Закрити без збереження?', pe3_keep: 'Повернутися', pe3_discard: 'Закрити без збереження', pe3_saveClose: 'Зберегти й закрити',
      pe3_was: 'було {v}', pe3_matches: 'Матчів', pe3_wr: 'Відсоток перемог', pe3_kd: 'K/D', pe3_lvl: 'Рівень {n}', pe3_toNext: '{n} ELO до рівня {l}', pe3_maxLvl: 'Максимальний рівень',
      pe3_cal: 'Калібрування {n}/{p}', pe3_calDone: 'Відкалібровано', pe3_calAfter: 'рівень після калібрування: {n}', pe3_resetMode: 'Скинути режим', pe3_revertMode: 'Повернути', pe3_resetQ: 'Скинути {m}: ELO {e}, уся статистика — 0. Застосується після збереження.',
      pe3_calHint: 'Калібрування — не окремий лічильник, а перемоги + поразки в режимі. Менше {p} ігор — гравець на калібруванні (ELO приховане, зміни ELO більші, у топах не видно). Щоб повернути гравця на калібрування — скинь режим.',
      pe3_curBal: 'Зараз', pe3_newBal: 'Після збереження', pe3_log: 'Останні операції KF', pe3_noLog: 'Операцій ще не було', pe3_zero: 'Обнулити',
      pe3_tier: 'Тариф', pe3_active: 'Діє до {d} · лишилось днів: {n}', pe3_expired: 'Закінчився {d}', pe3_noPrem: 'Без Premium', pe3_add: '+{n} дн.', pe3_removePrem: 'Зняти Premium', pe3_premHint: 'Швидкі кнопки продовжують від поточної дати закінчення (або від зараз, якщо вже закінчився).',
      pe3_preview: 'Попередній перегляд', pe3_worn: 'Вдягнуто', pe3_take: 'Зняти', pe3_search: 'Пошук за назвою або id…', pe3_fAll: 'Усі', pe3_fHas: 'Є в гравця', pe3_fNo: 'Немає', pe3_grant: 'Видати', pe3_revoke: 'Забрати',
      pe3_sGrant: 'видано', pe3_sBought: 'куплено', pe3_sTier: 'тариф / досягнення', pe3_nothingFound: 'Нічого не знайдено', pe3_owned: 'є {n}', pe3_equipHint: 'Клік по предмету — вдягнути (видається автоматично). «Видати» / «Забрати» змінює лише володіння, не вдягаючи.',
      pe3_xp: 'XP', pe3_xpIn: 'XP у рівні', pe3_of: 'з {n}', pe3_max: 'Макс.', pe3_free: 'Безкоштовна', pe3_premTrack: 'Преміум', pe3_claimed: 'отримано', pe3_passHint: 'Зниження рівня не забирає вже отримані нагороди.',
      pe3_main: 'Основне', pe3_vis: 'Видимість', pe3_info: 'Інформація', pe3_created: 'Реєстрація', pe3_seen: 'Востаннє в мережі', pe3_ban: 'Бан', pe3_hist: 'Останні правки', pe3_noHist: 'Правок ще не було', pe3_by: '— {n}',
      pe3_eNick: 'Нік: 2–25 символів', pe3_eInt: '{f}: ціле число ≥ 0', pe3_eMax: '{f}: не більше {n}', pe3_eUntil: 'Дата закінчення Premium має бути в майбутньому', pe3_given: 'Видано: {k} {v}', pe3_taken: 'Забрано: {k} {v}',
      pe3_kf_log: 'KF', pe3_pass: 'Пропуск', pe3_ptrack: 'Преміум-доріжка', pe3_yes: 'так', pe3_no: 'ні', pe3_noChanges: 'Змін немає', pe3_err: 'Не вдалося зберегти: {e}',
      pe3_kind_banner: 'банер', pe3_kind_frame: 'рамка', pe3_kind_emblem: 'емблема', pe3_kind_avatar: 'аватар', pe3_kind_color: 'колір', pe3_kind_sticker: 'стікер', pe3_kind_ncolor: 'колір ніку', pe3_kind_vfx: 'ефект', pe3_kind_s2: 'Сезон 2',
    },
    ru: {
      pe_title: 'Редактирование профиля', pe_btn: 'Редактировать профиль', pe_owner: 'только владельцу', pe_save: 'Сохранить изменения', pe_saved: 'Сохранено: {f}', pe_nothing: 'Ничего не изменено',
      pe_tProfile: 'Профиль', pe_tRating: 'Рейтинг', pe_tEco: 'KF и Premium', pe_tCos: 'Косметика', pe_tPass: 'Пропуск',
      pe_tfa: 'KONZTE GUARD', pe_tfaState: 'Authenticator: {a} · Код в ЛС: {d}', pe_on: 'вкл.', pe_off: 'выкл.', pe_tfaReset: 'Сбросить 2FA', pe_tfaQ: 'Сбросить двухфакторный вход этому игроку? Делай это только после проверки, что это действительно он (напр. тикет с его Discord-аккаунта).', pe_tfaDone: '2FA сброшен — игроку отправлено ЛС', pe_nick: 'Ник', pe_gameId: 'Game ID', pe_badges: 'Значки', pe_hide: 'Скрыть из топов', pe_hideHint: 'Не показывается в рейтинге, топ-10, местах и призах сезона, номинациях, рекордах недели и таблице лидеров в Discord. Матчи и ELO считаются как обычно.',
      pe_mode: 'Режим', pe_elo: 'ELO', pe_w: 'Победы', pe_l: 'Поражения', pe_k: 'Убийства', pe_d: 'Смерти', pe_ratingHint: 'Меньше 5 игр в режиме — ещё калибровка (в таблице лидеров не видно).',
      pe_kf: 'Баланс KF', pe_prem: 'Premium', pe_premNone: 'Нет', pe_until: 'Действует до', pe_daysQ: 'или добавить дней от сегодня',
      pe_banner: 'Баннер', pe_frame: 'Рамка', pe_emblem: 'Эмблема', pe_avatar: 'Аватар', pe_color: 'Цвет ника', pe_none: '— нет —', pe_cosHint: 'Любой предмет каталога — выдаётся игроку навсегда, поэтому останется и после окончания Premium.',
      pe_level: 'Уровень', pe_passPrem: 'Премиум-дорожка открыта', pe_me: 'Мой профиль', pe_meHint: 'Быстрые настройки твоего аккаунта.', pe_hidden: 'Ты скрыт из топов', pe_shown: 'Тебя видно в топах',
      pe_badge_verified: 'Верифицирован', pe_badge_dev: 'Разработчик', pe_badge_pro: 'Про-игрок', pe_partner: 'Код партнёра: {c}',
      pe3_cancel: 'Отмена', pe3_save: 'Сохранить', pe3_saving: 'Сохранение…', pe3_clean: 'Без изменений', pe3_dirty: 'Несохранённых изменений: {n}', pe3_dirty1: '1 несохранённое изменение', pe3_show: 'Просмотреть', pe3_revert: 'Отменить всё',
      pe3_keys: 'Ctrl+S — сохранить · Esc — закрыть', pe3_errs: 'Исправь ошибки ({n}), чтобы сохранить', pe3_copy: 'Копировать', pe3_copied: 'Скопировано: {v}', pe3_discord: 'Discord ID', pe3_noGid: 'без game ID',
      pe3_review: 'Проверь изменения', pe3_reviewSub: 'Будет применено к {nick} и записано в журнал аудита.', pe3_back: 'Назад', pe3_confirm: 'Подтвердить и сохранить', pe3_reason: 'Причина (необязательно, попадёт в журнал KF и аудит)', pe3_reasonPh: 'напр. приз турнира, возврат #123…',
      pe3_closeQ: 'Несохранённые изменения', pe3_closeSub: 'Есть несохранённые изменения ({n}). Закрыть без сохранения?', pe3_keep: 'Вернуться', pe3_discard: 'Закрыть без сохранения', pe3_saveClose: 'Сохранить и закрыть',
      pe3_was: 'было {v}', pe3_matches: 'Матчей', pe3_wr: 'Процент побед', pe3_kd: 'K/D', pe3_lvl: 'Уровень {n}', pe3_toNext: '{n} ELO до уровня {l}', pe3_maxLvl: 'Максимальный уровень',
      pe3_cal: 'Калибровка {n}/{p}', pe3_calDone: 'Откалиброван', pe3_calAfter: 'уровень после калибровки: {n}', pe3_resetMode: 'Сбросить режим', pe3_revertMode: 'Вернуть', pe3_resetQ: 'Сбросить {m}: ELO {e}, вся статистика — 0. Применится после сохранения.',
      pe3_calHint: 'Калибровка — не отдельный счётчик, а победы + поражения в режиме. Меньше {p} игр — игрок на калибровке (ELO скрыто, изменения ELO больше, в топах не видно). Чтобы вернуть игрока на калибровку — сбрось режим.',
      pe3_curBal: 'Сейчас', pe3_newBal: 'После сохранения', pe3_log: 'Последние операции KF', pe3_noLog: 'Операций ещё не было', pe3_zero: 'Обнулить',
      pe3_tier: 'Тариф', pe3_active: 'Действует до {d} · осталось дней: {n}', pe3_expired: 'Закончился {d}', pe3_noPrem: 'Без Premium', pe3_add: '+{n} дн.', pe3_removePrem: 'Снять Premium', pe3_premHint: 'Быстрые кнопки продлевают от текущей даты окончания (или от сейчас, если уже закончился).',
      pe3_preview: 'Предпросмотр', pe3_worn: 'Надето', pe3_take: 'Снять', pe3_search: 'Поиск по названию или id…', pe3_fAll: 'Все', pe3_fHas: 'Есть у игрока', pe3_fNo: 'Нет', pe3_grant: 'Выдать', pe3_revoke: 'Забрать',
      pe3_sGrant: 'выдано', pe3_sBought: 'куплено', pe3_sTier: 'тариф / достижение', pe3_nothingFound: 'Ничего не найдено', pe3_owned: 'есть {n}', pe3_equipHint: 'Клик по предмету — надеть (выдаётся автоматически). «Выдать» / «Забрать» меняет только владение, не надевая.',
      pe3_xp: 'XP', pe3_xpIn: 'XP в уровне', pe3_of: 'из {n}', pe3_max: 'Макс.', pe3_free: 'Бесплатная', pe3_premTrack: 'Премиум', pe3_claimed: 'получено', pe3_passHint: 'Понижение уровня не забирает уже полученные награды.',
      pe3_main: 'Основное', pe3_vis: 'Видимость', pe3_info: 'Информация', pe3_created: 'Регистрация', pe3_seen: 'Последний раз в сети', pe3_ban: 'Бан', pe3_hist: 'Последние правки', pe3_noHist: 'Правок ещё не было', pe3_by: '— {n}',
      pe3_eNick: 'Ник: 2–25 символов', pe3_eInt: '{f}: целое число ≥ 0', pe3_eMax: '{f}: не больше {n}', pe3_eUntil: 'Дата окончания Premium должна быть в будущем', pe3_given: 'Выдано: {k} {v}', pe3_taken: 'Забрано: {k} {v}',
      pe3_kf_log: 'KF', pe3_pass: 'Пропуск', pe3_ptrack: 'Премиум-дорожка', pe3_yes: 'да', pe3_no: 'нет', pe3_noChanges: 'Изменений нет', pe3_err: 'Не удалось сохранить: {e}',
      pe3_kind_banner: 'баннер', pe3_kind_frame: 'рамка', pe3_kind_emblem: 'эмблема', pe3_kind_avatar: 'аватар', pe3_kind_color: 'цвет', pe3_kind_sticker: 'стикер', pe3_kind_ncolor: 'цвет ника', pe3_kind_vfx: 'эффект', pe3_kind_s2: 'Сезон 2',
    },
  };
  Object.assign(L.en, { pe4_tClan: 'Clan', pe4_sticker: 'Stickers', pe4_ncolor: 'Nick colours (shop)', pe4_vfx: 'Victory effects', pe4_theme: 'App styles', pe4_kit: 'Bundles', pe4_pbg: 'Profile background', pe4_music: 'Music', pe4_colA: 'Anime', pe4_colD: 'Dark fantasy', pe4_colX: 'Christmas tree · reward', pe4_give: 'Give', pe4_giveWear: 'Give and equip', pe4_take: 'Take back', pe4_hasAll: 'Has the whole bundle', pe4_hasN: 'Has {n} of {m}', pe4_musHint: 'A music pack replaces the menu, search and lobby music and all interface sounds. ▶ — listen. «Give» adds it to the player\'s inventory.', pe4_part_banner: 'Banner', pe4_part_frame: 'Frame', pe4_part_avatar: 'Avatar', pe4_part_pbg: 'Background',
    pe4_kitHint: 'A bundle = banner + frame + avatar (+ profile background with Premium). «Give» grants all parts.', pe4_pbgHint: 'Click a background to set it. It shows while Premium is active.',
    pe4_pxp: 'Premium XP', pe4_pxpLv: 'Level', pe4_pxpHint: 'The level sets the crown next to the nickname and the shop discount.',
    pe4_noClan: 'Not in a clan', pe4_addTo: 'Add to clan', pe4_pick: 'Choose a clan…', pe4_create: 'Create a clan with this player as owner', pe4_cName: 'Name', pe4_cTag: 'Tag',
    pe4_rename: 'Rename', pe4_desc: 'Description', pe4_partner: 'Partner clan', pe4_cw: 'Clan wars', pe4_cwW: 'Wins', pe4_cwL: 'Losses', pe4_apply: 'Apply',
    pe4_emblem: 'Emblem (id)', pe4_banner: 'Banner (id)', pe4_avOff: 'Remove clan avatar', pe4_members: 'Members', pe4_owner: 'owner', pe4_officer: 'officer', pe4_member: 'member',
    pe4_makeOwner: 'Make owner', pe4_kick: 'Kick', pe4_leave: 'Remove this player from the clan', pe4_disband: 'Disband clan', pe4_disbandQ: 'Disband clan [{t}]? This cannot be undone.',
    pe4_kickQ: 'Remove {n} from the clan?', pe4_done: 'Clan updated', pe4_log: 'Recent clan log', pe4_now: 'Applied immediately (not part of «Save»).', pe4_mOwner: 'Owner' });
  Object.assign(L.uk, { pe4_tClan: 'Клан', pe4_sticker: 'Наліпки', pe4_ncolor: 'Колір ніку (магазин)', pe4_vfx: 'Ефекти перемоги', pe4_theme: 'Стилі застосунку', pe4_kit: 'Комплекти', pe4_pbg: 'Фон профілю', pe4_music: 'Музика', pe4_colA: 'Аніме', pe4_colD: 'Темне фентезі', pe4_colX: 'Ялинка · нагорода', pe4_give: 'Видати', pe4_giveWear: 'Видати й надіти', pe4_take: 'Забрати', pe4_hasAll: 'Увесь комплект уже є', pe4_hasN: 'Є {n} з {m}', pe4_musHint: 'Музичний пакет замінює музику меню, пошуку й лобі та всі звуки інтерфейсу. ▶ — послухати. «Видати» додає його в інвентар гравця.', pe4_part_banner: 'Банер', pe4_part_frame: 'Рамка', pe4_part_avatar: 'Аватар', pe4_part_pbg: 'Фон',
    pe4_kitHint: 'Комплект = банер + рамка + аватар (+ фон профілю з Premium). «Видати» дає всі частини.', pe4_pbgHint: 'Клацни фон, щоб поставити. Показується, поки активний Premium.',
    pe4_pxp: 'Premium XP', pe4_pxpLv: 'Рівень', pe4_pxpHint: 'Рівень визначає корону біля ніку і знижку в магазині.',
    pe4_noClan: 'Не в клані', pe4_addTo: 'Додати в клан', pe4_pick: 'Обери клан…', pe4_create: 'Створити клан з цим гравцем-власником', pe4_cName: 'Назва', pe4_cTag: 'Тег',
    pe4_rename: 'Перейменувати', pe4_desc: 'Опис', pe4_partner: 'Партнерський клан', pe4_cw: 'Клан-вари', pe4_cwW: 'Перемоги', pe4_cwL: 'Поразки', pe4_apply: 'Застосувати',
    pe4_emblem: 'Емблема (id)', pe4_banner: 'Банер (id)', pe4_avOff: 'Зняти аватарку клану', pe4_members: 'Учасники', pe4_owner: 'власник', pe4_officer: 'офіцер', pe4_member: 'учасник',
    pe4_makeOwner: 'Зробити власником', pe4_kick: 'Вигнати', pe4_leave: 'Вивести цього гравця з клану', pe4_disband: 'Розпустити клан', pe4_disbandQ: 'Розпустити клан [{t}]? Це не можна скасувати.',
    pe4_kickQ: 'Вивести {n} з клану?', pe4_done: 'Клан оновлено', pe4_log: 'Останні дії в клані', pe4_now: 'Діє одразу (не через «Зберегти»).', pe4_mOwner: 'Власник' });
  Object.assign(L.ru, { pe4_tClan: 'Клан', pe4_sticker: 'Наклейки', pe4_ncolor: 'Цвет ника (магазин)', pe4_vfx: 'Эффекты победы', pe4_theme: 'Стили приложения', pe4_kit: 'Комплекты', pe4_pbg: 'Фон профиля', pe4_music: 'Музыка', pe4_colA: 'Аниме', pe4_colD: 'Тёмное фэнтези', pe4_colX: 'Ёлка · награда', pe4_give: 'Выдать', pe4_giveWear: 'Выдать и надеть', pe4_take: 'Забрать', pe4_hasAll: 'Весь комплект уже есть', pe4_hasN: 'Есть {n} из {m}', pe4_musHint: 'Музыкальный пакет заменяет музыку меню, поиска и лобби и все звуки интерфейса. ▶ — послушать. «Выдать» добавляет его в инвентарь игрока.', pe4_part_banner: 'Баннер', pe4_part_frame: 'Рамка', pe4_part_avatar: 'Аватар', pe4_part_pbg: 'Фон',
    pe4_kitHint: 'Комплект = баннер + рамка + аватар (+ фон профиля с Premium). «Выдать» даёт все части.', pe4_pbgHint: 'Кликни фон, чтобы поставить. Показывается, пока активен Premium.',
    pe4_pxp: 'Premium XP', pe4_pxpLv: 'Уровень', pe4_pxpHint: 'Уровень определяет корону у ника и скидку в магазине.',
    pe4_noClan: 'Не в клане', pe4_addTo: 'Добавить в клан', pe4_pick: 'Выбери клан…', pe4_create: 'Создать клан с этим игроком-владельцем', pe4_cName: 'Название', pe4_cTag: 'Тег',
    pe4_rename: 'Переименовать', pe4_desc: 'Описание', pe4_partner: 'Партнёрский клан', pe4_cw: 'Клан-вары', pe4_cwW: 'Победы', pe4_cwL: 'Поражения', pe4_apply: 'Применить',
    pe4_emblem: 'Эмблема (id)', pe4_banner: 'Баннер (id)', pe4_avOff: 'Снять аватарку клана', pe4_members: 'Участники', pe4_owner: 'владелец', pe4_officer: 'офицер', pe4_member: 'участник',
    pe4_makeOwner: 'Сделать владельцем', pe4_kick: 'Выгнать', pe4_leave: 'Вывести этого игрока из клана', pe4_disband: 'Распустить клан', pe4_disbandQ: 'Распустить клан [{t}]? Это нельзя отменить.',
    pe4_kickQ: 'Вывести {n} из клана?', pe4_done: 'Клан обновлён', pe4_log: 'Последние действия в клане', pe4_now: 'Действует сразу (не через «Сохранить»).', pe4_mOwner: 'Владелец' });
  for (const l of Object.keys(L)) Object.assign(I18N[l] ||= {}, L[l]);
  try {
    Object.assign(SERVER_ERRORS.uk ||= {}, { 'Owner only': 'Лише для власника', 'Player not found': 'Гравця не знайдено', 'Nickname: 2-25 chars': 'Нік: 2–25 символів', 'This game ID is already registered': 'Цей game ID уже зареєстровано', 'Unknown tier': 'Невідомий тариф' });
    Object.assign(SERVER_ERRORS.ru ||= {}, { 'Owner only': 'Только для владельца', 'Player not found': 'Игрок не найден', 'Nickname: 2-25 chars': 'Ник: 2–25 символов', 'This game ID is already registered': 'Этот game ID уже зарегистрирован', 'Unknown tier': 'Неизвестный тариф' });
    (SERVER_ERRORS_RE.uk ||= []).push([/^Unknown (banner|frame|emblem|avatar|color): (.+)$/, 'Невідомий предмет ($1): $2']);
    (SERVER_ERRORS_RE.ru ||= []).push([/^Unknown (banner|frame|emblem|avatar|color): (.+)$/, 'Неизвестный предмет ($1): $2']);
  } catch {}

  const MODES = ['2v2', '1v1', '5v5'], RF = ['elo', 'w', 'l', 'k', 'd'];
  const MAXV = { elo: 10000, w: 1e6, l: 1e6, k: 1e6, d: 1e6, coins: 1e7 };
  const KINDS = [['banner', 'banners', 'pe_banner'], ['frame', 'frames', 'pe_frame'], ['emblem', 'emblems', 'pe_emblem'], ['avatar', 'avatars', 'pe_avatar'], ['color', 'colors', 'pe_color']];
  const XK = [['sticker', 'stickers', 'pe4_sticker'], ['ncolor', 'ncolors', 'pe4_ncolor'], ['vfx', 'vfx', 'pe4_vfx'], ['theme', 'themes', 'pe4_theme'], ['music', 'musics', 'pe4_music']];
  const SK = [['kit', 'kits', 'pe4_kit'], ['pbg', 'pbgs', 'pe4_pbg']];
  const GRK = [...KINDS, ...XK];
  const ALLK = [...KINDS, ...SK, ...XK];
  const GK = Object.fromEntries([...GRK, ...SK].map(([k, g]) => [k, g]));
  const isSlot = k => KINDS.some(x => x[0] === k);
  const TABS = [['profile', 'pe_tProfile'], ['rating', 'pe_tRating'], ['eco', 'pe_tEco'], ['cos', 'pe_tCos'], ['pass', 'pe_tPass'], ['clan', 'pe4_tClan']];
  const IC = {
    x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    copy: '<svg viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
    undo: '<svg viewBox="0 0 24 24"><path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/></svg>',
    reset: '<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
    save: '<svg viewBox="0 0 24 24"><path d="M5 4h11l4 4v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    warn: '<svg viewBox="0 0 24 24"><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    lock: '<svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  };

  let E = null, D = null, tab = 'profile', cosK = 'banner', cosQ = '', cosF = 'all', busy = false, sheet = null, sheetErr = '';
  const clone = o => JSON.parse(JSON.stringify(o));
  const fmtN = n => Number.isFinite(n) ? Number(n).toLocaleString(LOCALE[LANG] || 'en-GB') : '—';
  const mx = m => m.replace('v', '×');
  const tierName = x => x === 'plus' ? 'Premium+' : x ? 'Premium' : t('pe_premNone');
  const toDateInput = ts => ts ? new Date(ts - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 16) : '';
  const nm = (k, id) => !id ? t('pe_none') : k === 'color' ? id : k === 'pbg' ? (typeof cosName === 'function' ? cosName(id) : id) : !isSlot(k) && typeof s2Name === 'function' ? s2Name(k, id) : (typeof cosName === 'function' ? cosName(id) : id);
  const avaUrl = id => typeof s2AvaUrl === 'function' ? s2AvaUrl(id) : `assets/avatar/${id}.jpg`;
  const premOn = p => !!(p.tier && p.until > Date.now());
  const manual = (e, g) => [...new Set([...(e.grants?.[g] || []), ...(e.bought?.[g] || [])])];
  const $$ = s => [...document.querySelectorAll(s)];
  const box = () => document.getElementById('pe3');

  function draftOf(e) {
    return {
      nick: e.nick, gameId: e.gameId, badges: [...e.badges], hideLb: e.hideLb,
      ratings: Object.fromEntries(MODES.map(m => [m, Object.fromEntries(RF.map(f => [f, e.ratings[m][f]]))])),
      coins: e.coins, reason: '', premium: { tier: premOn(e.premium) ? e.premium.tier : '', until: premOn(e.premium) ? e.premium.until : 0 },
      cosmetics: { ...e.cosmetics }, own: Object.fromEntries(GRK.map(([, g]) => [g, manual(e, g)])),
      pxp: e.pxp ? e.pxp.xp : 0, pbg: e.pbg || '',
      pass: { xp: e.pass.xp, prem: e.pass.prem },
    };
  }

  const badInt = (v, max) => !Number.isFinite(v) || v < 0 || Math.round(v) !== v ? 'int' : v > max ? 'max' : '';
  function check() {
    const err = [], bad = new Set();
    const n = String(D.nick || '').trim();
    if (n.length < 2 || n.length > 25) { err.push(t('pe3_eNick')); bad.add('nick'); }
    for (const m of MODES) for (const f of RF) {
      const v = D.ratings[m][f], b = badInt(v, MAXV[f]);
      if (b) { bad.add(`r.${m}.${f}`); err.push(b === 'int' ? t('pe3_eInt', { f: `${t('pe_' + f)} ${mx(m)}` }) : t('pe3_eMax', { f: `${t('pe_' + f)} ${mx(m)}`, n: fmtN(MAXV[f]) })); }
    }
    if (E.pxp) { const b = badInt(D.pxp, 1e6); if (b) { bad.add('pxp'); err.push(t('pe3_eInt', { f: 'Premium XP' })); } }
    { const b = badInt(D.coins, MAXV.coins); if (b) { bad.add('coins'); err.push(b === 'int' ? t('pe3_eInt', { f: 'KF' }) : t('pe3_eMax', { f: 'KF', n: fmtN(MAXV.coins) })); } }
    if (D.premium.tier && !(D.premium.until > Date.now())) { bad.add('until'); err.push(t('pe3_eUntil')); }
    const pmax = E.pass.levels * E.pass.xpPerLevel, b = badInt(D.pass.xp, pmax);
    if (b) { bad.add('xp'); err.push(b === 'int' ? t('pe3_eInt', { f: 'XP' }) : t('pe3_eMax', { f: 'XP', n: fmtN(pmax) })); }
    return { err, bad };
  }

  function diff() {
    const e = E, s = {}, rows = [];
    const row = (tb, label, from, to) => rows.push({ tab: tb, label, from, to });
    const nick = String(D.nick).trim(), gid = String(D.gameId).trim();
    if (nick !== e.nick) { s.nick = nick; row('profile', t('pe_nick'), e.nick, nick); }
    if (gid !== e.gameId) { s.gameId = gid; row('profile', t('pe_gameId'), e.gameId || '—', gid || '—'); }
    if ([...D.badges].sort().join() !== [...e.badges].sort().join()) { s.badges = [...D.badges]; row('profile', t('pe_badges'), e.badges.map(b => t('pe_badge_' + b)).join(', ') || '—', D.badges.map(b => t('pe_badge_' + b)).join(', ') || '—'); }
    if (D.hideLb !== e.hideLb) { s.hideLb = D.hideLb; row('profile', t('pe_hide'), t(e.hideLb ? 'pe3_yes' : 'pe3_no'), t(D.hideLb ? 'pe3_yes' : 'pe3_no')); }
    const r = {};
    for (const m of MODES) for (const f of RF) if (D.ratings[m][f] !== e.ratings[m][f]) { (r[m] ||= {})[f] = D.ratings[m][f]; row('rating', `${t('pe_' + f)} ${mx(m)}`, fmtN(e.ratings[m][f]), fmtN(D.ratings[m][f])); }
    if (Object.keys(r).length) s.ratings = r;
    if (D.coins !== e.coins) { s.coins = D.coins; const d = D.coins - e.coins; row('eco', 'KF', fmtN(e.coins), `${fmtN(D.coins)} (${d > 0 ? '+' : ''}${fmtN(d)})`); }
    const ep = { tier: premOn(e.premium) ? e.premium.tier : '', until: premOn(e.premium) ? e.premium.until : 0 };
    if (D.premium.tier !== ep.tier || (D.premium.tier && Math.abs(D.premium.until - ep.until) > 60_000)) {
      s.premium = D.premium.tier ? { tier: D.premium.tier, until: D.premium.until } : { tier: null };
      const pf = p => p.tier ? `${tierName(p.tier)} · ${fmtDT(p.until)}` : t('pe_premNone');
      row('eco', t('pe_prem'), pf(ep), pf(D.premium));
    }
    const cs = {};
    for (const [k, , lk] of KINDS) if ((D.cosmetics[k] || '') !== (e.cosmetics[k] || '')) { cs[k] = D.cosmetics[k] || ''; row('cos', t(lk), nm(k, e.cosmetics[k]), nm(k, D.cosmetics[k])); }
    if (Object.keys(cs).length) s.cosmetics = cs;
    const add = {}, rem = {};
    for (const [k, g] of GRK) {
      const was = manual(e, g), now = D.own[g] || [];
      const a = now.filter(x => !was.includes(x)), d = was.filter(x => !now.includes(x));
      if (a.length) { add[g] = a; a.forEach(id => row('cos', t('pe3_given', { k: t('pe3_kind_' + k), v: '' }).trim(), '', nm(k, id))); }
      if (d.length) { rem[g] = d; d.forEach(id => row('cos', t('pe3_taken', { k: t('pe3_kind_' + k), v: '' }).trim(), nm(k, id), '—')); }
    }
    if (Object.keys(add).length || Object.keys(rem).length) s.grants = { add, remove: rem };
    if (e.pxp && D.pxp !== e.pxp.xp) { s.pxp = { xp: D.pxp }; row('eco', t('pe4_pxp'), `${fmtN(e.pxp.xp)} XP`, `${fmtN(D.pxp)} XP`); }
    if ((D.pbg || '') !== (e.pbg || '')) { s.pbg = D.pbg || ''; row('cos', t('pe4_pbg'), nm('pbg', e.pbg), nm('pbg', D.pbg)); }
    const p = {};
    if (D.pass.xp !== e.pass.xp) { p.xp = D.pass.xp; const lv = x => `${t('pe_level')} ${Math.min(e.pass.levels, Math.floor(x / e.pass.xpPerLevel))} · ${fmtN(x)} XP`; row('pass', t('pe3_pass'), lv(e.pass.xp), lv(D.pass.xp)); }
    if (D.pass.prem !== e.pass.prem) { p.prem = D.pass.prem; row('pass', t('pe3_ptrack'), t(e.pass.prem ? 'pe3_yes' : 'pe3_no'), t(D.pass.prem ? 'pe3_yes' : 'pe3_no')); }
    if (Object.keys(p).length) s.pass = p;
    return { set: s, rows };
  }

  function fake() {
    return { nick: String(D.nick || '').trim() || E.nick, avatar: D.cosmetics.avatar ? avaUrl(D.cosmetics.avatar) : E.avatar, badges: D.badges,
      prem: { emblem: D.cosmetics.emblem, color: D.cosmetics.color, frame: D.cosmetics.frame, banner: D.cosmetics.banner, tier: premOn(D.premium) ? D.premium.tier : '' } };
  }
  const chip = (label, v) => v ? `<span class="pe3-id"><i>${label}</i><b>${esc(v)}</b><button class="pe3-cp" data-pe3-copy="${esc(v)}" title="${t('pe3_copy')}">${IC.copy}</button></span>` : '';
  function headHtml() {
    const p = fake();
    return `${p.prem.banner ? bannerHtml(p.prem.banner, 'pe3-hbn') : ''}<div class="pe3-hin">
      <div class="pe3-avw">${avaF(p, 'lg', p.prem.frame)}</div>
      <div class="pe3-who"><div class="pe3-ttl"><span class="pe3-kick">${t('pe_title')}</span><span class="tag gold pe3-own">${IC.lock}${t('pe_owner')}</span></div>
        <h2 class="pe3-nick">${nickHtml(p)}</h2>
        <div class="pe3-ids">${chip(t('pe3_discord'), E.id)}${E.gameId ? chip('Game ID', E.gameId) : `<span class="pe3-id mute"><b>${t('pe3_noGid')}</b></span>`}${E.name ? `<span class="pe3-id"><i>Discord</i><b>@${esc(E.name)}</b></span>` : ''}${E.ban ? `<span class="tag red">${t('pe3_ban')}${E.ban.reason ? ': ' + esc(E.ban.reason) : ''}</span>` : ''}</div></div>
      <button class="pe3-x" id="pe3-close" title="Esc">${IC.x}</button></div>`;
  }

  function tabsHtml(rows) {
    return TABS.map(([k, n]) => { const c = rows.filter(r => r.tab === k).length; return `<button data-pe3-tab="${k}" class="${tab === k ? 'on' : ''}">${t(n)}${c ? `<i class="pe3-dot">${c}</i>` : ''}</button>`; }).join('');
  }

  const hKey = k => { const m = /^r(\dv\d)$/.exec(k), g = /^grants\.(\w+)$/.exec(k), kk = KINDS.find(x => x[0] === k || x[1] === g?.[1]);
    return m ? `ELO ${mx(m[1])}` : g ? `${t('pe3_grant')}/${t('pe3_revoke')}: ${kk ? t('pe3_kind_' + kk[0]) : g[1]}` : kk ? t(kk[2]) : { nick: t('pe_nick'), gameId: t('pe_gameId'), badges: t('pe_badges'), hideLb: t('pe_hide'), coins: 'KF', premium: 'Premium', pass: t('pe3_pass'), pxp: t('pe4_pxp'), pbg: t('pe4_pbg'), clan: t('pe4_tClan') }[k] || k; };
  function profileHtml() {
    const e = E, c = e.catalog;
    const hist = (e.history || []).map(h => `<div class="pe3-hr"><span class="mute">${fmtDT(h.at)}</span><b>${esc(Object.keys(h.details || {}).filter(k => k !== 'reason').map(hKey).join(', '))}</b><span class="mute">${t('pe3_by', { n: esc(h.byNick || '') })}</span>${h.details?.reason ? `<i class="mute">«${esc(h.details.reason)}»</i>` : ''}</div>`).join('');
    return `<div class="pe3-grid">
      <section class="pe3-card"><h4>${t('pe3_main')}</h4>
        <label class="pe3-f" data-k="nick"><span>${t('pe_nick')} <em id="pe3-nlen"></em></span><input id="pe3-nick" maxlength="25" value="${esc(D.nick)}"><small class="pe3-was" id="pe3-was-nick"></small></label>
        <label class="pe3-f" data-k="gameId"><span>${t('pe_gameId')}</span><input id="pe3-gid" maxlength="20" value="${esc(D.gameId)}"><small class="pe3-was" id="pe3-was-gid"></small></label></section>
      <section class="pe3-card"><h4>${t('pe_badges')}</h4><div class="pe3-badges">${c.badges.map(b => `<button class="pe3-bdg ${D.badges.includes(b) ? 'on' : ''}" data-pe3-badge="${b}"><i class="bdg bdg-${b}">${typeof badgeIcon === 'function' ? badgeIcon(b) : ''}</i>${t('pe_badge_' + b)}<span class="pe3-tick">${IC.check}</span></button>`).join('')}</div>
        <h4 style="margin-top:18px">${t('pe3_vis')}</h4>
        <label class="pe3-sw"><input type="checkbox" id="pe3-hide" ${D.hideLb ? 'checked' : ''}><i></i><b>${t('pe_hide')}</b></label><p class="mute pe3-hint">${t('pe_hideHint')}</p></section>
      <section class="pe3-card"><h4>${t('pe3_info')}</h4><dl class="pe3-dl">
        <dt>${t('pe3_created')}</dt><dd>${e.created ? fmtDT(e.created) : '—'}</dd><dt>${t('pe3_seen')}</dt><dd>${e.lastSeen ? fmtDT(e.lastSeen) : '—'}</dd>
        ${e.creator ? `<dt>${t('pe_partner', { c: '' }).replace(/[:：]\s*$/, '')}</dt><dd>${esc(e.creator)}</dd>` : ''}
        ${e.ban ? `<dt>${t('pe3_ban')}</dt><dd class="lose">${esc(e.ban.reason || '—')}</dd>` : ''}</dl>
        ${e.tfa ? `<div class="pe3-tfa"><div class="grow"><b>${t('pe_tfa')}</b><span class="mute">${t('pe_tfaState', { a: t(e.tfa.totp ? 'pe_on' : 'pe_off'), d: t(e.tfa.dm ? 'pe_on' : 'pe_off') })}</span></div>${e.tfa.totp || e.tfa.dm ? `<button class="btn red sm" id="pe-2fa">${t('pe_tfaReset')}</button>` : ''}</div>` : ''}</section>
      <section class="pe3-card"><h4>${t('pe3_hist')}</h4><div class="pe3-hist">${hist || `<p class="mute">${t('pe3_noHist')}</p>`}</div></section></div>`;
  }

  function ratingHtml() {
    return `<div class="pe3-modes">${MODES.map(m => `<section class="pe3-card pe3-mode" data-m="${m}">
      <div class="pe3-mh"><b class="pe3-mn">${mx(m)}</b><span class="pe3-calb" id="pe3-cal-${m}"></span><span class="grow"></span>
        <button class="pe3-lnk" data-pe3-revm="${m}" title="${t('pe3_revertMode')}">${IC.undo}</button><button class="pe3-lnk red" data-pe3-reset="${m}">${IC.reset}${t('pe3_resetMode')}</button></div>
      <div class="pe3-elo"><img class="pe3-lvl" id="pe3-lvl-${m}" alt=""><div class="grow">
        <div class="pe3-stepper"><button data-pe3-step="-25" data-m="${m}">−25</button><button data-pe3-step="-5" data-m="${m}">−5</button>
          <input type="number" min="0" max="${MAXV.elo}" data-pe3-r="${m}" data-f="elo" value="${D.ratings[m].elo}"><button data-pe3-step="5" data-m="${m}">+5</button><button data-pe3-step="25" data-m="${m}">+25</button></div>
        <div class="pe3-bar"><i id="pe3-bar-${m}"></i></div><div class="pe3-lvt"><span id="pe3-lvt-${m}"></span><small class="pe3-was" data-was="${m}.elo"></small></div></div></div>
      <div class="pe3-wlkd">${['w', 'l', 'k', 'd'].map(f => `<label class="pe3-f"><span>${t('pe_' + f)}</span><input type="number" min="0" data-pe3-r="${m}" data-f="${f}" value="${D.ratings[m][f]}"><small class="pe3-was" data-was="${m}.${f}"></small></label>`).join('')}</div>
      <div class="pe3-der" id="pe3-der-${m}"></div></section>`).join('')}</div>
      <p class="mute pe3-hint pe3-note">${t('pe3_calHint', { p: E.placement || 5 })}</p>`;
  }
  function updRating(m) {
    const r = D.ratings[m], e = E.ratings[m], b = box(); if (!b) return;
    const games = (r.w || 0) + (r.l || 0), P = E.placement || 5, cal = games < P, lv = levelOf(r.elo || 0);
    const img = b.querySelector('#pe3-lvl-' + m); if (img) img.src = cal ? 'assets/lvl/cal.svg' : lvlImg(lv);
    const bar = b.querySelector('#pe3-bar-' + m); if (bar) bar.style.width = levelPct(r.elo || 0) + '%';
    const nx = LEVELS[lv + 1], lt = b.querySelector('#pe3-lvt-' + m);
    if (lt) lt.innerHTML = cal ? `<span>${t('pe3_calAfter', { n: lv })}</span>` : `<b>${t('pe3_lvl', { n: lv })}</b> · ${nx ? t('pe3_toNext', { n: nx - r.elo, l: lv + 1 }) : t('pe3_maxLvl')}`;
    const cb = b.querySelector('#pe3-cal-' + m); if (cb) { cb.className = 'pe3-calb ' + (cal ? 'cal' : 'ok'); cb.textContent = cal ? t('pe3_cal', { n: games, p: P }) : t('pe3_calDone'); }
    const der = b.querySelector('#pe3-der-' + m);
    if (der) der.innerHTML = `<span><i>${t('pe3_matches')}</i><b>${fmtN(games)}</b></span><span><i>${t('pe3_wr')}</i><b class="${games ? (r.w / games >= .5 ? 'win' : 'lose') : ''}">${games ? Math.round(r.w / games * 100) : 0}%</b></span><span><i>${t('pe3_kd')}</i><b>${kd(Math.max(0, r.k || 0), Math.max(0, r.d || 0))}</b></span>`;
    for (const f of RF) {
      const inp = b.querySelector(`[data-pe3-r="${m}"][data-f="${f}"]`), w = b.querySelector(`[data-was="${m}.${f}"]`), chg = r[f] !== e[f];
      inp?.classList.toggle('chg', chg); inp?.classList.toggle('bad', !!badInt(r[f], MAXV[f]));
      if (w) w.textContent = chg ? t('pe3_was', { v: fmtN(e[f]) }) : '';
    }
  }

  function ecoHtml() {
    const e = E, tiers = e.catalog.tiers;
    const log = (e.coinLog || []).map(x => `<div class="pe3-lg"><b class="${x.n > 0 ? 'win' : x.n < 0 ? 'lose' : 'mute'}">${x.n > 0 ? '+' : ''}${fmtN(x.n)}</b><span class="grow">${esc(x.why || '')}</span><span class="mute">${fmtDT(x.at)}</span></div>`).join('');
    return `<div class="pe3-grid">
      <section class="pe3-card"><h4>${t('pe_kf')}</h4>
        <div class="pe3-bal"><div><i>${t('pe3_curBal')}</i><b>${fmtN(e.coins)} <small>KF</small></b></div><span class="pe3-arr">${IC.arrow}</span><div><i>${t('pe3_newBal')}</i><b id="pe3-newbal"></b></div><span id="pe3-delta" class="pe3-delta"></span></div>
        <label class="pe3-f"><span>KF</span><input type="number" min="0" max="${MAXV.coins}" id="pe3-kf" value="${D.coins}"></label>
        <div class="pe3-presets">${[-1000, -100, 100, 500, 1000, 5000].map(n => `<button data-pe3-kf="${n}" class="${n < 0 ? 'neg' : ''}">${n > 0 ? '+' : '−'}${fmtN(Math.abs(n))}</button>`).join('')}<button data-pe3-kf0>${t('pe3_zero')}</button><button data-pe3-kfr title="${t('pe3_revertMode')}">${IC.undo}</button></div>
        <label class="pe3-f"><span>${t('pe3_reason')}</span><input id="pe3-reason" maxlength="200" placeholder="${t('pe3_reasonPh')}" value="${esc(D.reason)}"></label>
        <h5>${t('pe3_log')}</h5><div class="pe3-log">${log || `<p class="mute">${t('pe3_noLog')}</p>`}</div></section>
      <section class="pe3-card"><h4>${t('pe_prem')}</h4>
        <div class="pe3-tiers"><button data-pe3-tier="" class="${!D.premium.tier ? 'on' : ''}">${t('pe3_noPrem')}</button>${tiers.map(x => `<button data-pe3-tier="${x}" class="${D.premium.tier === x ? 'on' : ''}"><img src="assets/crown-${x}.png" alt="">${tierName(x)}</button>`).join('')}</div>
        <div class="pe3-pst" id="pe3-pst"></div>
        <label class="pe3-f"><span>${t('pe_until')}</span><input type="datetime-local" id="pe3-until" value="${toDateInput(D.premium.until)}" ${D.premium.tier ? '' : 'disabled'}></label>
        <div class="pe3-presets">${[7, 30, 90, 365].map(n => `<button data-pe3-days="${n}">${t('pe3_add', { n })}</button>`).join('')}</div>
        <p class="mute pe3-hint">${t('pe3_premHint')}</p>
        ${D.premium.tier ? `<button class="btn ghost sm pe3-rm" data-pe3-tier="">${IC.x}${t('pe3_removePrem')}</button>` : ''}</section>
      ${e.pxp ? `<section class="pe3-card"><h4>${t('pe4_pxp')}</h4>
        <div class="pe4-lvls">${e.pxp.table.map(L => `<button data-pe4-pxl="${L.min}" class="${lvOfXp(D.pxp) === L.lvl ? 'on' : ''}"><img src="assets/crown-px${L.lvl}.png" alt=""><b>${esc(window.PXP3 ? PXP3.name(L.lvl) : L.id)}</b><span>${fmtN(L.min)}+</span></button>`).join('')}</div>
        <label class="pe3-f"><span>XP</span><input type="number" min="0" max="1000000" id="pe4-pxp" value="${D.pxp}" class="${D.pxp !== e.pxp.xp ? 'chg' : ''}"></label>
        <p class="mute pe3-hint">${t('pe4_pxpHint')}</p></section>` : ''}</div>`;
  }
  const lvOfXp = xp => { let l = 0; for (const L of E.pxp?.table || []) if (xp >= L.min) l = L.lvl; return l; };
  function updEco() {
    const b = box(); if (!b) return;
    const nb = b.querySelector('#pe3-newbal'), dl = b.querySelector('#pe3-delta'), d = D.coins - E.coins;
    if (nb) nb.innerHTML = `${fmtN(D.coins)} <small>KF</small>`;
    if (dl) { dl.textContent = Number.isFinite(d) && d ? (d > 0 ? '+' : '') + fmtN(d) : ''; dl.className = 'pe3-delta ' + (d > 0 ? 'win' : 'lose'); }
    const kf = b.querySelector('#pe3-kf'); kf?.classList.toggle('chg', D.coins !== E.coins); kf?.classList.toggle('bad', !!badInt(D.coins, MAXV.coins));
    const ps = b.querySelector('#pe3-pst'), p = D.premium;
    if (ps) ps.innerHTML = !p.tier ? `<span class="mute">${E.premium.until && !premOn(E.premium) ? t('pe3_expired', { d: fmtDT(E.premium.until) }) : t('pe3_noPrem')}</span>`
      : p.until > Date.now() ? `<img src="assets/crown-${p.tier}.png" alt=""><span>${t('pe3_active', { d: fmtDT(p.until), n: Math.ceil((p.until - Date.now()) / 864e5) })}</span>` : `<span class="lose">${t('pe3_eUntil')}</span>`;
    b.querySelector('#pe3-until')?.classList.toggle('bad', !!(p.tier && !(p.until > Date.now())));
  }

  const kitParts = id => E.catalog.kits?.[id] || [];
  function hasItem(k, id) {
    if (k === 'kit') return kitParts(id).every(x => hasItem(x.kind, x.id));
    if (k === 'pbg') return D.pbg === id;
    const g = GK[k]; if ((D.own[g] || []).includes(id)) return true;
    return (E.avail?.[g] || []).includes(id) && !manual(E, g).includes(id);
  }
  function srcOf(k, id) {
    if (k === 'kit' || k === 'pbg') return '';
    const g = GK[k];
    if (D.own[g].includes(id)) return (E.bought?.[g] || []).includes(id) && !(E.grants?.[g] || []).includes(id) ? t('pe3_sBought') : t('pe3_sGrant');
    if (hasItem(k, id)) return t('pe3_sTier');
    return '';
  }
  function thumb(k, id) {
    const p = fake();
    if (k === 'banner') return `<div class="pe3-tb">${bannerHtml(id, 'pe3-bimg')}</div>`;
    if (k === 'frame') return `<div class="pe3-tq">${avaF({ avatar: p.avatar }, 'lg', id)}</div>`;
    if (k === 'emblem') return `<div class="pe3-tq">${emblemHtml(id, 'big')}</div>`;
    if (k === 'avatar') return `<div class="pe3-tq">${ava({ avatar: avaUrl(id) }, 'lg')}</div>`;
    if (k === 'color') return `<div class="pe3-tq"><span class="pe3-nk" style="color:${esc(id)}">${esc(p.nick)}</span></div>`;
    if (k === 'kit') { const b = kitParts(id).find(x => x.kind === 'banner'); return /^kit[45]_/.test(id) ? `<div class="pe3-tb pe4-kit"><img src="assets/kit/${esc(id)}.jpg" alt=""></div>` : `<div class="pe3-tb">${b ? bannerHtml(b.id, 'pe3-bimg') : ''}</div>`; }
    if (k === 'pbg') return `<div class="pe3-tb pe4-kit">${/^b[45]_/.test(id) ? `<img src="assets/pbg/${esc(id)}.jpg" alt="">` : bannerHtml(id, 'pe3-bimg')}</div>`;
    if (k === 'sticker') return `<div class="pe3-tq"><img class="pe4-stk" src="assets/sticker/${esc(id)}.svg" alt=""></div>`;
    if (k === 'ncolor') return `<div class="pe3-tq"><span class="pe3-nk" style="color:${esc(E.catalog.ncolorHex?.[id] || '#fff')}">${esc(p.nick)}</span></div>`;
    if (k === 'music') { const on = typeof kzMusOn === 'function' && kzMusOn(id); return `<div class="pe3-tb pe4-kit pe4-mus"><img src="assets/music/${esc(id)}.jpg" alt="" onerror="this.remove()"><button class="mu-play pe4-mpl" data-mupl="${esc(id)}|menu" title="${esc(typeof kzMusT === 'function' ? kzMusT(on ? 'stop' : 'listen') : '')}">${typeof KZ_MUS_IC !== 'undefined' ? (on ? KZ_MUS_IC.stop : KZ_MUS_IC.play) : '▶'}</button></div>`; }
    if (k === 'theme' && typeof kzThemeThumb === 'function') return `<div class="pe3-tb pe4-kit pe4-th">${kzThemeThumb(id)}</div>`;
    if (k === 'vfx') return `<div class="pe3-tq"><i class="lc-vfxic big v-${esc(id)}">${typeof LCI !== 'undefined' ? LCI.spark : '✦'}</i></div>`;
    if (k === 'theme') return `<div class="pe3-tq"><span class="pe4-tx">◧</span></div>`;
    return '';
  }
  const kitCol = id => /^kit4_/.test(id) ? 'A' : /^kit5_/.test(id) ? 'D' : 'X';
  const kitTitle = id => { const b = kitParts(id).find(x => x.kind === 'banner'); return b ? nm('banner', b.id) : id; };
  function kitGrid(items) {
    const cols = ['X', 'D', 'A'].map(c => [c, items.filter(id => kitCol(id) === c)]).filter(([, a]) => a.length);
    return cols.map(([c, ids]) => `<h5 class="pe4-colh">${t('pe4_col' + c)} <i>${ids.length}</i></h5>` + ids.map(id => {
      const ps = kitParts(id), hv = ps.filter(x => hasItem(x.kind, x.id)).length, all = hv === ps.length;
      const worn = ps.filter(x => isSlot(x.kind)).every(x => D.cosmetics[x.kind] === x.id);
      const kb = (ps.find(x => x.kind === 'banner') || {}).id;
      const chips = ps.map(x => `<span class="pe4-chip ${hasItem(x.kind, x.id) ? 'ok' : ''}">${hasItem(x.kind, x.id) ? '✓' : '·'} ${t('pe4_part_' + x.kind)}</span>`).join('')
        + ((E.catalog.pbgs || []).includes(kb) ? `<span class="pe4-chip ${D.pbg === kb ? 'ok' : ''}">${D.pbg === kb ? '✓' : '·'} ${t('pe4_part_pbg')}</span>` : '');
      return `<div class="pe3-it wide pe4-kitc ${all ? 'has' : ''} ${worn ? 'on' : ''}" title="${esc(id)}">${thumb('kit', id)}
        <div class="pe3-in"><b>${esc(kitTitle(id))}</b><span>${worn ? `<em class="on">${t('pe3_worn')}</em>` : ''}<em>${all ? t('pe4_hasAll') : t('pe4_hasN', { n: hv, m: ps.length })}</em></span></div>
        <div class="pe4-chips">${chips}</div>
        <div class="pe4-btns"><button class="pe3-gv ${all ? 'rev' : ''}" data-pe3-own="${esc(id)}">${all ? t('pe4_take') : t('pe4_give')}</button><button class="pe3-gv pe4-wear" data-pe3-eq="${esc(id)}">${t('pe4_giveWear')}</button></div></div>`;
    }).join('')).join('') || `<p class="mute pe3-empty">${t('pe3_nothingFound')}</p>`;
  }
  function cosGrid() {
    const raw = E.catalog[GK[cosK]] || [], list = Array.isArray(raw) ? raw : Object.keys(raw), q = cosQ.trim().toLowerCase();
    const items = list.filter(id => (!q || id.toLowerCase().includes(q) || nm(cosK, id).toLowerCase().includes(q)) && (cosF === 'all' || (cosF === 'has') === hasItem(cosK, id)));
    if (cosK === 'kit') return kitGrid(items.filter(id => !q || kitTitle(id).toLowerCase().includes(q) || id.includes(q)));
    const cur = cosK === 'pbg' ? D.pbg || '' : D.cosmetics[cosK] || '';
    const none = !q && cosF !== 'no' && (isSlot(cosK) || cosK === 'pbg') ? `<div class="pe3-it none ${!cur ? 'on' : ''}" data-pe3-eq=""><div class="pe3-tq"><span class="pe3-nn">${IC.x}</span></div><div class="pe3-in"><b>${t('pe_none')}</b></div></div>` : '';
    return none + items.map(id => {
      const own = cosK === 'kit' ? kitParts(id).every(x => (D.own[GK[x.kind]] || []).includes(x.id)) : (D.own[GK[cosK]] || []).includes(id), has = hasItem(cosK, id), src = srcOf(cosK, id), on = (isSlot(cosK) || cosK === 'pbg') && cur === id;
      return `<div class="pe3-it ${on ? 'on' : ''} ${has ? 'has' : ''} ${['banner', 'kit', 'pbg'].includes(cosK) ? 'wide' : ''}" data-pe3-eq="${esc(id)}" title="${esc(id)}">${thumb(cosK, id)}
        <div class="pe3-in"><b>${esc(nm(cosK, id))}</b><span>${on ? `<em class="on">${t('pe3_worn')}</em>` : ''}${src ? `<em>${src}</em>` : ''}</span></div>
        ${cosK === 'pbg' ? '' : `<button class="pe3-gv ${own ? 'rev' : ''}" data-pe3-own="${esc(id)}">${own ? t('pe3_revoke') : t('pe3_grant')}</button>`}</div>`;
    }).join('') || `<p class="mute pe3-empty">${t('pe3_nothingFound')}</p>`;
  }
  function cosHtml() {
    const p = fake();
    const slots = KINDS.map(([k, , lk]) => `<div class="pe3-slot ${(D.cosmetics[k] || '') !== (E.cosmetics[k] || '') ? 'chg' : ''}"><i>${t(lk)}</i><b>${k === 'color' && D.cosmetics[k] ? `<span class="pe3-sw0" style="background:${esc(D.cosmetics[k])}"></span>` : ''}${esc(nm(k, D.cosmetics[k]))}</b>${D.cosmetics[k] ? `<button class="pe3-lnk" data-pe3-off="${k}" title="${t('pe3_take')}">${IC.x}</button>` : ''}</div>`).join('');
    return `<div class="pe3-cos">
      <aside class="pe3-card pe3-pv"><h4>${t('pe3_preview')}</h4>
        <div class="pe3-pvc">${p.prem.banner ? bannerHtml(p.prem.banner, 'pe3-pvb') : ''}<div class="pe3-pvin">${avaF(p, 'lg', p.prem.frame)}<b>${nickHtml(p)}</b></div></div>
        <div class="pe3-slots">${slots}</div><p class="mute pe3-hint">${t('pe3_equipHint')}</p></aside>
      <div class="pe3-cm">
        <div class="pe3-kinds">${ALLK.map(([k, g, lk]) => `<button data-pe3-kind="${k}" class="${cosK === k ? 'on' : ''}">${t(lk)}<i>${Object.keys(E.catalog[g] || {}).length}</i></button>`).join('')}</div>
        ${cosK === 'kit' ? `<p class="mute pe3-hint">${t('pe4_kitHint')}</p>` : cosK === 'music' ? `<p class="mute pe3-hint">${t('pe4_musHint')}</p>` : cosK === 'pbg' ? `<p class="mute pe3-hint">${t('pe4_pbgHint')}</p>` : ''}
        <div class="pe3-tool"><label class="pe3-q">${IC.search}<input id="pe3-q" placeholder="${t('pe3_search')}" value="${esc(cosQ)}"></label>
          <div class="seg sm">${[['all', 'pe3_fAll'], ['has', 'pe3_fHas'], ['no', 'pe3_fNo']].map(([f, n]) => `<button data-pe3-f="${f}" class="${cosF === f ? 'on' : ''}">${t(n)}</button>`).join('')}</div></div>
        <div class="pe3-items ${cosK} ${['kit', 'pbg', 'music', 'theme'].includes(cosK) ? 'banner' : ''}" id="pe3-items">${cosGrid()}</div></div></div>`;
  }

  const rwTxt = r => !r ? '' : r.kind === 'kf' ? `${r.amount} KF` : `${t('pe3_kind_' + r.kind)}${r.id ? ' · ' + (typeof cosName === 'function' ? cosName(r.id) : r.id) : ''}`;
  function passHtml() {
    const e = E, X = e.pass.xpPerLevel, N = e.pass.levels;
    return `<div class="pe3-grid">
      <section class="pe3-card pe3-pass"><h4>${t('pe3_pass')}</h4>
        <div class="pe3-plv"><b id="pe3-plv"></b><span class="mute">/ ${N}</span><span class="grow"></span><small class="pe3-was" id="pe3-pwas"></small></div>
        <input type="range" id="pe3-prange" min="0" max="${N}" step="1" value="${Math.min(N, Math.floor(D.pass.xp / X))}">
        <div class="pe3-presets"><button data-pe3-plv="-1">−1</button><button data-pe3-plv="1">+1</button><button data-pe3-plv="-99">0</button><button data-pe3-plv="99">${t('pe3_max')}</button><button data-pe3-prev title="${t('pe3_revertMode')}">${IC.undo}</button></div>
        <div class="pe3-row2"><label class="pe3-f"><span>${t('pe3_xpIn')} (${t('pe3_of', { n: X })})</span><input type="number" min="0" max="${X - 1}" id="pe3-pxin"></label>
          <label class="pe3-f"><span>${t('pe3_xp')}</span><input type="number" min="0" max="${N * X}" id="pe3-pxp"></label></div>
        <div class="pe3-bar"><i id="pe3-pbar"></i></div>
        <label class="pe3-sw" style="margin-top:14px"><input type="checkbox" id="pe3-pprem" ${D.pass.prem ? 'checked' : ''}><i></i><b>${t('pe_passPrem')}</b></label>
        <p class="mute pe3-hint">${t('pe3_passHint')}</p></section>
      <section class="pe3-card"><h4>${t('pe3_free')} / ${t('pe3_premTrack')}</h4><div class="pe3-track" id="pe3-track"></div></section></div>`;
  }
  function updPass() {
    const b = box(); if (!b) return;
    const X = E.pass.xpPerLevel, N = E.pass.levels, xp = D.pass.xp, lv = Number.isFinite(xp) ? Math.min(N, Math.floor(xp / X)) : 0;
    b.querySelector('#pe3-plv').textContent = lv;
    const rg = b.querySelector('#pe3-prange'); if (rg && +rg.value !== lv) rg.value = lv;
    const xi = b.querySelector('#pe3-pxin'), xa = b.querySelector('#pe3-pxp');
    if (xi && document.activeElement !== xi) xi.value = lv >= N ? 0 : xp - lv * X;
    if (xa && document.activeElement !== xa) xa.value = xp;
    xa?.classList.toggle('bad', !!badInt(xp, N * X)); xa?.classList.toggle('chg', xp !== E.pass.xp);
    b.querySelector('#pe3-pbar').style.width = (lv >= N ? 100 : (xp - lv * X) / X * 100) + '%';
    b.querySelector('#pe3-pwas').textContent = xp !== E.pass.xp ? t('pe3_was', { v: `${E.pass.level} · ${fmtN(E.pass.xp)} XP` }) : '';
    const tr = E.passTrack, cl = E.passClaimed || { f: [], p: [] };
    if (tr) b.querySelector('#pe3-track').innerHTML = tr.f.map((f, i) => { const n = i + 1, p = tr.p[i];
      return `<div class="pe3-tl ${n <= lv ? 'got' : ''} ${n === lv ? 'cur' : ''}"><b>${n}</b><span class="${cl.f.includes(n) ? 'cl' : ''}" title="${esc(rwTxt(f))}">${esc(rwTxt(f))}</span><span class="pr ${D.pass.prem ? '' : 'lk'} ${cl.p.includes(n) ? 'cl' : ''}" title="${esc(rwTxt(p))}">${esc(rwTxt(p))}</span></div>`; }).join('');
  }

  const ROLES = ['owner', 'officer', 'member'];
  function clanHtml() {
    const c = E.clan, L = E.clanList || [];
    if (!c) return `<div class="pe3-grid"><section class="pe3-card"><h4>${t('pe4_noClan')}</h4>
        <label class="pe3-f"><span>${t('pe4_addTo')}</span><select id="pe4-cpick"><option value="">${t('pe4_pick')}</option>${L.map(x => `<option value="${esc(x.id)}">[${esc(x.tag)}] ${esc(x.name)} · ${x.n}</option>`).join('')}</select></label>
        <button class="btn sm" data-pe4c="add">${t('pe4_addTo')}</button></section>
      <section class="pe3-card"><h4>${t('pe4_create')}</h4>
        <div class="pe3-row2"><label class="pe3-f"><span>${t('pe4_cName')}</span><input id="pe4-cname" maxlength="24"></label><label class="pe3-f"><span>${t('pe4_cTag')}</span><input id="pe4-ctag" maxlength="5" style="text-transform:uppercase"></label></div>
        <button class="btn sm" data-pe4c="create">${t('pe4_create')}</button><p class="mute pe3-hint">${t('pe4_now')}</p></section></div>`;
    const me = c.members.find(m => m.id === E.id);
    const mem = c.members.map(m => `<div class="pe4-mem ${m.id === E.id ? 'me' : ''}"><b class="grow">${esc(m.nick)}</b>
        ${m.role === 'owner' ? `<span class="tag gold">${t('pe4_owner')}</span>` : `<select data-pe4-role="${esc(m.id)}">${['officer', 'member'].map(r => `<option value="${r}" ${m.role === r ? 'selected' : ''}>${t('pe4_' + r)}</option>`).join('')}</select>
        <button class="btn ghost sm" data-pe4c="owner" data-m="${esc(m.id)}">${t('pe4_makeOwner')}</button><button class="btn ghost sm neg" data-pe4c="kick" data-m="${esc(m.id)}" data-n="${esc(m.nick)}">${t('pe4_kick')}</button>`}</div>`).join('');
    const lg = (c.log || []).map(x => `<div class="pe3-lg"><span class="grow">${esc(x.action || x.a || '')}</span><span class="mute">${x.at ? fmtDT(x.at) : ''}</span></div>`).join('');
    return `<div class="pe3-grid">
      <section class="pe3-card"><h4>[${esc(c.tag)}] ${esc(c.name)}</h4><p class="mute pe3-hint">${t('pe4_now')} · ${me ? t('pe4_' + me.role) : ''}</p>
        <div class="pe3-row2"><label class="pe3-f"><span>${t('pe4_cName')}</span><input id="pe4-cname" maxlength="24" value="${esc(c.name)}"></label><label class="pe3-f"><span>${t('pe4_cTag')}</span><input id="pe4-ctag" maxlength="5" value="${esc(c.tag)}" style="text-transform:uppercase"></label></div>
        <button class="btn sm" data-pe4c="rename">${t('pe4_rename')}</button>
        <label class="pe3-f" style="margin-top:12px"><span>${t('pe4_desc')}</span><textarea id="pe4-cdesc" maxlength="300" rows="3">${esc(c.desc)}</textarea></label>
        <button class="btn sm" data-pe4c="desc">${t('pe4_apply')}</button>
        <label class="pe3-sw" style="margin-top:14px"><input type="checkbox" id="pe4-cpart" ${c.partner ? 'checked' : ''}><i></i><b>${t('pe4_partner')}</b></label></section>
      <section class="pe3-card"><h4>${t('pe4_cw')}</h4>
        <div class="pe3-row2"><label class="pe3-f"><span>ELO</span><input type="number" id="pe4-cwe" value="${c.cw?.elo ?? ''}"></label><label class="pe3-f"><span>${t('pe4_cwW')}</span><input type="number" id="pe4-cww" value="${c.cw?.w ?? 0}"></label><label class="pe3-f"><span>${t('pe4_cwL')}</span><input type="number" id="pe4-cwl" value="${c.cw?.l ?? 0}"></label></div>
        <button class="btn sm" data-pe4c="cw">${t('pe4_apply')}</button>
        <div class="pe3-row2" style="margin-top:12px"><label class="pe3-f"><span>${t('pe4_emblem')}</span><input id="pe4-cemb" list="pe4-embl" value="${esc(c.emblem)}"></label><label class="pe3-f"><span>${t('pe4_banner')}</span><input id="pe4-cban" list="pe4-banl" value="${esc(c.banner)}"></label></div>
        <datalist id="pe4-embl">${(E.catalog.emblems || []).map(x => `<option value="${esc(x)}">`).join('')}</datalist><datalist id="pe4-banl">${(E.catalog.banners || []).map(x => `<option value="${esc(x)}">`).join('')}</datalist>
        <button class="btn sm" data-pe4c="look">${t('pe4_apply')}</button>
        ${c.avatar ? `<button class="btn ghost sm" data-pe4c="avatarOff" style="margin-left:8px">${t('pe4_avOff')}</button>` : ''}</section>
      <section class="pe3-card"><h4>${t('pe4_members')} · ${c.members.length}</h4><div class="pe4-mems">${mem}</div>
        <div class="pe4-danger">${me && me.role !== 'owner' ? `<button class="btn ghost sm neg" data-pe4c="kick" data-m="${esc(E.id)}" data-n="${esc(E.nick)}">${t('pe4_leave')}</button>` : ''}
          <button class="btn ghost sm neg" data-pe4c="disband">${t('pe4_disband')}</button></div></section>
      <section class="pe3-card"><h4>${t('pe4_log')}</h4><div class="pe3-log">${lg || `<p class="mute">—</p>`}</div></section></div>`;
  }
  async function clanAct(el) {
    const c = E.clan, v = id => box().querySelector('#' + id)?.value ?? '', act = el.dataset.pe4c;
    const body = { uid: E.id, id: c?.id, act };
    if (act === 'add') { body.id = v('pe4-cpick'); body.member = E.id; if (!body.id) return toast(t('pe4_pick'), true); }
    else if (act === 'create') { body.name = v('pe4-cname'); body.tag = v('pe4-ctag').toUpperCase(); }
    else if (act === 'rename') { body.name = v('pe4-cname'); body.tag = v('pe4-ctag').toUpperCase(); }
    else if (act === 'desc') body.desc = v('pe4-cdesc');
    else if (act === 'cw') { body.elo = v('pe4-cwe'); body.w = v('pe4-cww'); body.l = v('pe4-cwl'); }
    else if (act === 'owner') body.member = el.dataset.m;
    else if (act === 'kick') { body.member = el.dataset.m; if (!confirm(t('pe4_kickQ', { n: el.dataset.n }))) return; }
    else if (act === 'disband') { if (!confirm(t('pe4_disbandQ', { t: c.tag }))) return; }
    else if (act === 'look') {
      if (v('pe4-cemb') !== c.emblem) { E = await api('/api/admin/clan', { ...body, act: 'emblem', value: v('pe4-cemb') }); }
      if (v('pe4-cban') !== (E.clan?.banner || '')) { E = await api('/api/admin/clan', { ...body, act: 'banner', value: v('pe4-cban') }); }
      toast(t('pe4_done')); return drawBody();
    }
    const keep = D; E = await api('/api/admin/clan', body); D = keep; toast(t('pe4_done')); drawBody();
  }

  function bodyHtml() { return tab === 'clan' ? clanHtml() : tab === 'rating' ? ratingHtml() : tab === 'eco' ? ecoHtml() : tab === 'cos' ? cosHtml() : tab === 'pass' ? passHtml() : profileHtml(); }
  function footHtml() {
    const { rows } = diff(), { err } = check(), n = rows.length;
    const st = err.length ? `<span class="pe3-st bad">${IC.warn}<b>${t('pe3_errs', { n: err.length })}</b><span class="mute">${esc(err[0])}</span></span>`
      : n ? `<span class="pe3-st dirty"><i class="pe3-pulse"></i><b>${n === 1 ? t('pe3_dirty1') : t('pe3_dirty', { n })}</b><button class="pe3-lnk" id="pe3-review">${t('pe3_show')}</button><button class="pe3-lnk" id="pe3-revert">${IC.undo}${t('pe3_revert')}</button></span>`
      : `<span class="pe3-st"><b class="mute">${t('pe3_clean')}</b></span>`;
    return `${st}<span class="grow"></span><span class="pe3-keys mute">${t('pe3_keys')}</span>
      <button class="btn ghost" id="pe3-cancel">${t('pe3_cancel')}</button>
      <button class="btn" id="pe3-save" ${!n || err.length || busy ? 'disabled' : ''}>${IC.save}${busy ? t('pe3_saving') : t('pe3_save')}${n && !busy ? `<i class="pe3-cnt">${n}</i>` : ''}</button>`;
  }
  function sheetHtml() {
    if (sheet === 'review') {
      const { rows } = diff(), money = rows.some(r => r.tab === 'eco' || r.tab === 'cos');
      const groups = TABS.map(([k, n]) => { const rs = rows.filter(r => r.tab === k); return rs.length ? `<div class="pe3-dg"><h5>${t(n)}</h5>${rs.map(r => `<div class="pe3-dr"><span class="pe3-dlab">${esc(r.label)}</span>${r.from !== '' ? `<s>${esc(String(r.from))}</s>${IC.arrow}` : ''}<b>${esc(String(r.to))}</b></div>`).join('')}</div>` : ''; }).join('');
      return `<div class="pe3-sh"><h3>${t('pe3_review')}</h3><p class="mute">${t('pe3_reviewSub', { nick: esc(E.nick) })}</p>
        <div class="pe3-diff">${groups || `<p class="mute">${t('pe3_noChanges')}</p>`}</div>
        ${money ? `<label class="pe3-f"><span>${t('pe3_reason')}</span><input id="pe3-reason2" maxlength="200" placeholder="${t('pe3_reasonPh')}" value="${esc(D.reason)}"></label>` : ''}
        ${sheetErr ? `<div class="pe3-err">${IC.warn}<span>${esc(sheetErr)}</span></div>` : ''}
        <div class="pe3-sha"><span class="mute pe3-keys">Enter / Ctrl+S</span><span class="grow"></span><button class="btn ghost" data-pe3-sh="back">${t('pe3_back')}</button><button class="btn" data-pe3-sh="go" ${busy ? 'disabled' : ''}>${IC.check}${busy ? t('pe3_saving') : t('pe3_confirm')}</button></div></div>`;
    }
    if (sheet === 'close') {
      const n = diff().rows.length, bad = check().err.length;
      return `<div class="pe3-sh sm"><h3>${t('pe3_closeQ')}</h3><p class="mute">${t('pe3_closeSub', { n })}</p>
        ${sheetErr ? `<div class="pe3-err">${IC.warn}<span>${esc(sheetErr)}</span></div>` : ''}
        <div class="pe3-sha"><button class="btn ghost" data-pe3-sh="back">${t('pe3_keep')}</button><span class="grow"></span><button class="btn red" data-pe3-sh="discard">${t('pe3_discard')}</button>${bad ? '' : `<button class="btn" data-pe3-sh="saveclose" ${busy ? 'disabled' : ''}>${busy ? t('pe3_saving') : t('pe3_saveClose')}</button>`}</div></div>`;
    }
    return '';
  }

  function refresh() {
    const b = box(); if (!b) return;
    const { rows } = diff();
    b.querySelector('#pe3-head').innerHTML = headHtml();
    b.querySelector('#pe3-tabs').innerHTML = tabsHtml(rows);
    b.querySelector('#pe3-foot').innerHTML = footHtml();
    const sh = b.querySelector('#pe3-sheet'); sh.hidden = !sheet;
    if (sheet) { const f = document.activeElement?.id; sh.innerHTML = `<div class="pe3-shbg" data-pe3-sh="back"></div>${sheetHtml()}`; if (f && sh.querySelector('#' + f)) sh.querySelector('#' + f).focus(); }
    else sh.innerHTML = '';
    if (tab === 'profile') {
      const nk = b.querySelector('#pe3-nick'); if (nk) { nk.classList.toggle('chg', String(D.nick).trim() !== E.nick); nk.classList.toggle('bad', check().bad.has('nick')); b.querySelector('#pe3-nlen').textContent = `${String(D.nick).trim().length}/25`; b.querySelector('#pe3-was-nick').textContent = String(D.nick).trim() !== E.nick ? t('pe3_was', { v: E.nick }) : ''; }
      const gi = b.querySelector('#pe3-gid'); if (gi) { gi.classList.toggle('chg', String(D.gameId).trim() !== E.gameId); b.querySelector('#pe3-was-gid').textContent = String(D.gameId).trim() !== E.gameId ? t('pe3_was', { v: E.gameId || '—' }) : ''; }
    }
    if (tab === 'rating') MODES.forEach(updRating);
    if (tab === 'eco') updEco();
    if (tab === 'pass') updPass();
  }
  function drawBody() { const b = box(); if (!b) return; const bd = b.querySelector('#pe3-body'), y = bd.scrollTop; bd.innerHTML = bodyHtml(); bd.scrollTop = y; refresh(); }
  function drawItems() { const el = box()?.querySelector('#pe3-items'); if (el) { el.innerHTML = cosGrid(); el.className = 'pe3-items ' + cosK + (['kit', 'pbg', 'music', 'theme'].includes(cosK) ? ' banner' : ''); } refresh(); }

  function open() {
    modal(`<div class="card pe3" id="pe3" role="dialog" aria-modal="true"><div class="pe3-head" id="pe3-head"></div><div class="pe3-tabs" id="pe3-tabs"></div>
      <div class="pe3-body" id="pe3-body"></div><div class="pe3-foot" id="pe3-foot"></div><div class="pe3-sheet" id="pe3-sheet" hidden></div></div>`, mb => {
      mb.querySelector('.overlay').onclick = ev => { if (ev.target.classList.contains('overlay')) requestClose(); };
      const b = mb.querySelector('#pe3');
      b.addEventListener('click', onClick);
      b.addEventListener('input', onInput);
      b.addEventListener('change', onInput);
      drawBody();
    });
    document.removeEventListener('keydown', onKey, true);
    document.addEventListener('keydown', onKey, true);
  }
  function shut() { sheet = null; sheetErr = ''; document.removeEventListener('keydown', onKey, true); if (box()) closeModal(); }
  function requestClose() {
    if (busy) return;
    if (diff().rows.length) { sheet = 'close'; sheetErr = ''; refresh(); return; }
    shut();
  }

  async function save(thenClose) {
    if (busy) return;
    const { set, rows } = diff(), { err } = check();
    if (!rows.length) { toast(t('pe_nothing')); sheet = null; return refresh(); }
    if (err.length) { toast(err[0], true); return; }
    busy = true; sheetErr = ''; refresh();
    try {
      const id = E.id, prevTab = tab;
      const res = await api('/api/admin/player', { uid: id, set, reason: D.reason || undefined });
      E = res; D = draftOf(res); busy = false; sheet = null; tab = prevTab;
      toast(t('pe_saved', { f: rows.length + ' · ' + [...new Set(rows.map(r => r.label))].slice(0, 4).join(', ') + (rows.length > 4 ? '…' : '') }));
      if (id === S.me?.id) { try { S.me = await api('/api/me'); renderMe(); } catch {} }
      if (S.page === 'profile' && typeof renderProfile === 'function') { S.profCache = null; try { renderProfile()?.catch?.(() => {}); } catch {} }
      if (thenClose) return shut();
      drawBody();
    } catch (er) {
      busy = false; sheetErr = er.message; if (!sheet) sheet = 'review';
      toast(t('pe3_err', { e: er.message }), true); refresh();
    }
  }

  async function copy(v) {
    try { await navigator.clipboard.writeText(v); } catch { const ta = document.createElement('textarea'); ta.value = v; document.body.append(ta); ta.select(); document.execCommand('copy'); ta.remove(); }
    toast(t('pe3_copied', { v }));
  }

  function onKey(ev) {
    if (!box()) { document.removeEventListener('keydown', onKey, true); return; }
    if ((ev.ctrlKey || ev.metaKey) && ev.code === 'KeyS') {
      ev.preventDefault(); ev.stopPropagation();
      if (sheet === 'review') return save(false);
      if (diff().rows.length && !check().err.length) { sheet = 'review'; sheetErr = ''; refresh(); }
      else if (check().err.length) toast(check().err[0], true); else toast(t('pe_nothing'));
      return;
    }
    if (ev.key === 'Escape') {
      ev.preventDefault(); ev.stopPropagation();
      if (sheet) { if (!busy) { sheet = null; sheetErr = ''; refresh(); } return; }
      return requestClose();
    }
    if (ev.key === 'Enter' && sheet === 'review' && !busy) { ev.preventDefault(); save(false); }
  }

  const num = v => v === '' ? NaN : Number(v);
  function onInput(ev) {
    const el = ev.target;
    if (el.id === 'pe3-nick') D.nick = el.value;
    else if (el.id === 'pe3-gid') D.gameId = el.value;
    else if (el.id === 'pe3-hide') D.hideLb = el.checked;
    else if (el.dataset.pe3R) D.ratings[el.dataset.pe3R][el.dataset.f] = num(el.value);
    else if (el.id === 'pe3-kf') D.coins = num(el.value);
    else if (el.id === 'pe3-reason' || el.id === 'pe3-reason2') { D.reason = el.value; return; }
    else if (el.id === 'pe3-until') { if (ev.type !== 'change' && !el.value) return; D.premium.until = el.value ? new Date(el.value).getTime() : 0; }
    else if (el.id === 'pe3-q') { cosQ = el.value; return drawItems(); }
    else if (el.id === 'pe3-prange') { const lv = +el.value, X = E.pass.xpPerLevel; D.pass.xp = lv * X; }
    else if (el.id === 'pe3-pxin') { const X = E.pass.xpPerLevel, N = E.pass.levels, lv = Math.min(N, Math.floor((D.pass.xp || 0) / X)), v = num(el.value); D.pass.xp = Number.isFinite(v) ? lv * X + Math.max(0, Math.min(X - 1, Math.round(v))) : NaN; }
    else if (el.id === 'pe3-pxp') D.pass.xp = num(el.value);
    else if (el.id === 'pe3-pprem') D.pass.prem = el.checked;
    else if (el.id === 'pe4-pxp') { D.pxp = num(el.value); el.classList.toggle('chg', D.pxp !== E.pxp?.xp); }
    else if (el.dataset.pe4Role) { if (ev.type !== 'change') return; const keep = D; run(async () => { E = await api('/api/admin/clan', { uid: E.id, id: E.clan.id, act: 'role', member: el.dataset.pe4Role, role: el.value }); D = keep; toast(t('pe4_done')); drawBody(); })(); return; }
    else if (el.id === 'pe4-cpart') { if (ev.type !== 'change') return; const keep = D; run(async () => { E = await api('/api/admin/clan', { uid: E.id, id: E.clan.id, act: 'partner', on: el.checked }); D = keep; toast(t('pe4_done')); drawBody(); })(); return; }
    else if (/^pe4-c/.test(el.id)) return;
    else return;
    refresh();
  }

  function onClick(ev) {
    const el = ev.target.closest('button, [data-pe3-eq]'); if (!el) return;
    const d = el.dataset;
    if (el.id === 'pe3-close' || el.id === 'pe3-cancel') return requestClose();
    if (el.id === 'pe3-save') { if (diff().rows.length && !check().err.length) { sheet = 'review'; sheetErr = ''; refresh(); } return; }
    if (el.id === 'pe3-review') { sheet = 'review'; sheetErr = ''; return refresh(); }
    if (el.id === 'pe3-revert') { const r = D.reason; D = draftOf(E); D.reason = r; return drawBody(); }
    if (d.pe3Sh) {
      if (d.pe3Sh === 'back') { if (!busy) { sheet = null; sheetErr = ''; refresh(); } return; }
      if (d.pe3Sh === 'go') return save(false);
      if (d.pe3Sh === 'saveclose') return save(true);
      if (d.pe3Sh === 'discard') return shut();
    }
    if (d.pe3Copy) return copy(d.pe3Copy);
    if (d.pe3Tab) { tab = d.pe3Tab; return drawBody(); }
    if (el.id === 'pe-2fa') return run(async () => { if (!confirm(t('pe_tfaQ'))) return; const st = await api('/api/admin/2fa/reset', { uid: E.id }); E.tfa = { totp: st.totp, dm: st.dm }; toast(t('pe_tfaDone')); drawBody(); })();
    if (d.pe3Badge) { const b = d.pe3Badge; D.badges = D.badges.includes(b) ? D.badges.filter(x => x !== b) : [...D.badges, b]; el.classList.toggle('on', D.badges.includes(b)); return refresh(); }
    if (d.pe3Step) { const r = D.ratings[d.m]; r.elo = Math.max(0, Math.min(MAXV.elo, (Number.isFinite(r.elo) ? r.elo : E.ratings[d.m].elo) + +d.pe3Step)); const i = box().querySelector(`[data-pe3-r="${d.m}"][data-f="elo"]`); if (i) i.value = r.elo; return refresh(); }
    if (d.pe3Reset || d.pe3Revm) {
      const m = d.pe3Reset || d.pe3Revm;
      D.ratings[m] = d.pe3Reset ? { elo: E.startElo ?? 200, w: 0, l: 0, k: 0, d: 0 } : { ...Object.fromEntries(RF.map(f => [f, E.ratings[m][f]])) };
      for (const f of RF) { const i = box().querySelector(`[data-pe3-r="${m}"][data-f="${f}"]`); if (i) i.value = D.ratings[m][f]; }
      if (d.pe3Reset) toast(t('pe3_resetQ', { m: mx(m), e: E.startElo ?? 200 }));
      return refresh();
    }
    if (d.pe3Kf != null || d.pe3Kf0 != null || d.pe3Kfr != null) {
      D.coins = d.pe3Kf0 != null ? 0 : d.pe3Kfr != null ? E.coins : Math.max(0, Math.min(MAXV.coins, (Number.isFinite(D.coins) ? D.coins : E.coins) + +d.pe3Kf));
      const i = box().querySelector('#pe3-kf'); if (i) i.value = D.coins; return refresh();
    }
    if (d.pe3Tier != null) {
      const x = d.pe3Tier;
      D.premium = x ? { tier: x, until: D.premium.until > Date.now() ? D.premium.until : (premOn(E.premium) ? E.premium.until : Date.now() + 30 * 864e5) } : { tier: '', until: 0 };
      return drawBody();
    }
    if (d.pe3Days) {
      if (!D.premium.tier) D.premium.tier = E.catalog.tiers.includes('premium') ? 'premium' : E.catalog.tiers[0];
      D.premium.until = Math.max(Date.now(), D.premium.until || 0) + +d.pe3Days * 864e5;
      return drawBody();
    }
    if (d.pe3Kind) { if (cosK !== d.pe3Kind) cosQ = ''; cosK = d.pe3Kind; return drawBody(); }
    if (d.pe3F) { cosF = d.pe3F; box().querySelectorAll('[data-pe3-f]').forEach(b => b.classList.toggle('on', b.dataset.pe3F === cosF)); return drawItems(); }
    if (d.pe3Off) { D.cosmetics[d.pe3Off] = ''; return drawBody(); }
    if (d.pe3Own != null && cosK === 'kit') {
      ev.stopPropagation();
      const ps = kitParts(d.pe3Own), all = ps.every(x => (D.own[GK[x.kind]] || []).includes(x.id));
      for (const x of ps) { const g = GK[x.kind]; D.own[g] = all ? D.own[g].filter(y => y !== x.id) : [...new Set([...(D.own[g] || []), x.id])]; }
      return drawBody();
    }
    if (d.pe3Own != null) {
      ev.stopPropagation();
      const g = GK[cosK], id = d.pe3Own;
      if (D.own[g].includes(id)) { D.own[g] = D.own[g].filter(x => x !== id); if (D.cosmetics[cosK] === id && !hasItem(cosK, id)) D.cosmetics[cosK] = ''; }
      else D.own[g] = [...D.own[g], id];
      return drawBody();
    }
    if (d.pe3Eq != null && cosK === 'pbg') { D.pbg = d.pe3Eq; return drawBody(); }
    if (d.pe3Eq != null && cosK === 'kit') {
      ev.stopPropagation();
      for (const x of kitParts(d.pe3Eq)) { if (isSlot(x.kind)) D.cosmetics[x.kind] = x.id; const g = GK[x.kind]; if (!hasItem(x.kind, x.id)) D.own[g] = [...(D.own[g] || []), x.id]; }
      const kb = kitParts(d.pe3Eq).find(x => x.kind === 'banner'); if (kb && (E.catalog.pbgs || []).includes(kb.id)) D.pbg = kb.id;
      return drawBody();
    }
    if (d.pe3Eq != null && !isSlot(cosK)) { const g = GK[cosK], id = d.pe3Eq; if (id) D.own[g] = (D.own[g] || []).includes(id) ? D.own[g].filter(x => x !== id) : [...(D.own[g] || []), id]; return drawBody(); }
    if (d.pe3Eq != null) {
      const id = d.pe3Eq; D.cosmetics[cosK] = id;
      if (id && !hasItem(cosK, id)) D.own[GK[cosK]] = [...D.own[GK[cosK]], id];
      return drawBody();
    }
    if (d.pe4Pxl != null) { D.pxp = +d.pe4Pxl; return drawBody(); }
    if (d.pe4c) return run(() => clanAct(el))();
    if (d.pe3Plv) { const X = E.pass.xpPerLevel, N = E.pass.levels, lv = Math.min(N, Math.floor((D.pass.xp || 0) / X)); D.pass.xp = Math.max(0, Math.min(N, lv + +d.pe3Plv)) * X; return refresh(); }
    if (d.pe3Prev != null) { D.pass.xp = E.pass.xp; return refresh(); }
  }

  document.addEventListener('kz:packpreview', () => { if (box() && cosK === 'music') try { drawItems(); } catch {} });
  window.openPlayerEditor = async function (uid) {
    if (!S.me?.admin) return;
    const e = await api('/api/admin/player?uid=' + encodeURIComponent(uid));
    if (E?.id !== e.id) { tab = 'profile'; cosQ = ''; cosF = 'all'; }
    E = e; D = draftOf(e); busy = false; sheet = null; sheetErr = '';
    open();
  };

  const od = window.openDossier;
  if (typeof od === 'function') window.openDossier = async function (uid, ...rest) {
    const r = await od.call(this, uid, ...rest);
    if (S.me?.admin) {
      const h = document.querySelector('#modal .dossier .ds-h');
      if (h && !h.querySelector('[data-pe-open]')) { const b = document.createElement('button'); b.className = 'btn sm'; b.dataset.peOpen = uid; b.textContent = '✎ ' + t('pe_btn'); b.onclick = () => openPlayerEditor(uid).catch(er => toast(er.message, true)); h.append(b); }
    }
    return r;
  };

  const rs = window.renderStaff;
  if (typeof rs === 'function') window.renderStaff = async function (...a) {
    const r = await rs.apply(this, a);
    if (S.page === 'staff' && S.staffTab === 'players' && S.me?.admin) {
      const body = document.querySelector('.stab-body');
      if (body && !body.querySelector('#pe-mecard')) {
        const me = await api('/api/admin/player?uid=' + encodeURIComponent(S.me.id)).catch(() => null);
        if (!me || !document.querySelector('.stab-body') || document.querySelector('#pe-mecard')) return r;
        const el = document.createElement('div'); el.className = 'card accent'; el.id = 'pe-mecard'; el.style.marginBottom = '18px';
        el.innerHTML = `<div class="row" style="flex-wrap:wrap"><div class="grow" style="min-width:240px"><h4 style="margin:0 0 4px">${t('pe_me')}</h4><span class="mute">${t('pe_meHint')}</span></div>
          <label class="pe-chk pe-hide"><input type="checkbox" id="pe-mehide" ${me.hideLb ? 'checked' : ''}> <b>${t('pe_hide')}</b></label><button class="btn" id="pe-meedit">✎ ${t('pe_btn')}</button></div>`;
        body.prepend(el);
        el.querySelector('#pe-meedit').onclick = () => openPlayerEditor(S.me.id).catch(e => toast(e.message, true));
        el.querySelector('#pe-mehide').onchange = run(async ev => { await api('/api/admin/player', { uid: S.me.id, set: { hideLb: ev.target.checked } }); toast(t(ev.target.checked ? 'pe_hidden' : 'pe_shown')); });
      }
    }
    return r;
  };
})();

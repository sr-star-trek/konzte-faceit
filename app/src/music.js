const KZ_MUS = {
  anime: { cover: 'anime', sw: ['#140c0c', '#e0362b', '#f2e6d0'] },
  dark: { cover: 'dark', sw: ['#0d0607', '#9e1b22', '#c9a46a'] },
};
const kzMusTest = () => /^https?:\/\/(127\.0\.0\.1|localhost)(:|\/|$)/.test(String((typeof S !== 'undefined' && S.server) || ''));
const kzMusOk = id => !id || (!!KZ_MUS[id] && (!KZ_MUS[id].test || kzMusTest()));
const kzMusIds = () => Object.keys(KZ_MUS).filter(kzMusOk);
const KZ_MUS_T = {
  anime: { en: 'Swordsman', uk: 'Мечник', ru: 'Мечник' },
  dark: { en: 'Dark fantasy', uk: 'Темне фентезі', ru: 'Тёмное фэнтези' },
  winter: { en: 'Winter', uk: 'Зима', ru: 'Зима' },
  def: { en: 'Konzte', uk: 'Konzte', ru: 'Konzte' },
  d_anime: { en: 'Shakuhachi, shamisen, koto and taiko drums. A calm blade before the duel.', uk: 'Сякухаті, сямісен, кото й барабани тайко. Спокійний клинок перед дуеллю.', ru: 'Сякухати, сямисэн, кото и барабаны тайко. Спокойный клинок перед дуэлью.' },
  d_dark: { en: 'Low choir, cellos, war drums, an anvil and a bell. Heavy and grim.', uk: 'Низький хор, віолончелі, бойові барабани, ковадло й дзвін. Важко й похмуро.', ru: 'Низкий хор, виолончели, боевые барабаны, наковальня и колокол. Тяжело и мрачно.' },
  d_winter: { en: 'Snow, ice and warmth inside: piano, celesta, bells, footsteps in the snow.', uk: 'Сніг, лід і тепло всередині: фортепіано, челеста, дзвони, кроки по снігу.', ru: 'Снег, лёд и тепло внутри: фортепиано, челеста, колокола, шаги по снегу.' },
  d_def: { en: 'The standard Konzte sound.', uk: 'Стандартний звук Konzte.', ru: 'Стандартный звук Konzte.' },
  whole: { en: 'Replaces the music in the menu, search and match lobby — and every interface sound. Only you hear it.', uk: 'Замінює музику в меню, пошуку й лобі матчу — і всі звуки інтерфейсу. Чуєш лише ти.', ru: 'Заменяет музыку в меню, поиске и лобби матча — и все звуки интерфейса. Слышишь только ты.' },
  toDef: { en: 'Standard Konzte sound', uk: 'Стандартний звук Konzte', ru: 'Стандартный звук Konzte' },
  listen: { en: 'Listen', uk: 'Слухати', ru: 'Слушать' },
  stop: { en: 'Stop', uk: 'Стоп', ru: 'Стоп' },
  music: { en: 'Music', uk: 'Музика', ru: 'Музыка' },
  sounds: { en: 'Sounds', uk: 'Звуки', ru: 'Звуки' },
  menu: { en: 'Menu', uk: 'Меню', ru: 'Меню' },
  queue: { en: 'Search', uk: 'Пошук', ru: 'Поиск' },
  lobby: { en: 'Lobby', uk: 'Лобі', ru: 'Лобби' },
  fx_click: { en: 'Click', uk: 'Клік', ru: 'Клик' },
  fx_match_found: { en: 'Match found', uk: 'Матч знайдено', ru: 'Матч найден' },
  fx_victory: { en: 'Victory', uk: 'Перемога', ru: 'Победа' },
  fx_defeat: { en: 'Defeat', uk: 'Поразка', ru: 'Поражение' },
  fx_level_up: { en: 'Level up', uk: 'Новий рівень', ru: 'Новый уровень' },
  fx_coin: { en: 'Purchase', uk: 'Покупка', ru: 'Покупка' },
  playing: { en: 'Playing: {n}', uk: 'Грає: {n}', ru: 'Играет: {n}' },
  invHint: { en: 'Pick a sound style and press ▶ to hear it. Styles you own switch any time — also in Settings → Sound.', uk: 'Обери стиль звуку й натисни ▶, щоб почути. Свої стилі перемикаються будь-коли — і в Налаштуваннях → Звук.', ru: 'Выбери стиль звука и нажми ▶, чтобы услышать. Свои стили переключаются когда угодно — и в Настройках → Звук.' },
};
const kzMusT = (k, v = {}) => String(kzPick(KZ_MUS_T[k]) || '').replace(/\{(\w+)\}/g, (m, x) => v[x] ?? m);
const kzMusName = id => kzMusT(KZ_MUS[id] ? id : 'def');
const kzMusDesc = id => kzMusT('d_' + (KZ_MUS[id] ? id : 'def'));
const kzMusOn = (id, track) => { const p = window.KA?.packPlaying?.(); return !!p && p.id === id && (!track || p.track === track); };
const KZ_MUS_IC = {
  play: '<svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none"/></svg>',
  stop: '<svg viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="1.5" fill="currentColor" stroke="none"/></svg>',
  note: '<svg viewBox="0 0 24 24"><path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/></svg>',
};
function kzMusThumb(id) {
  const on = kzMusOn(id), m = KZ_MUS[id];
  return `<div class="th-thumb mu-thumb ${on ? 'on' : ''}" data-mu="${esc(id)}"><img src="assets/music/${esc(m?.cover || 'konzte')}.jpg" alt="" loading="lazy">
    <span class="mu-eq"><i></i><i></i><i></i><i></i><i></i></span>
    <button class="mu-play" data-mupl="${esc(id)}|menu" title="${esc(on ? kzMusT('stop') : kzMusT('listen'))}">${on ? KZ_MUS_IC.stop : KZ_MUS_IC.play}</button>
    <span class="th-sw">${(m?.sw || []).map(c => `<i style="background:${c}"></i>`).join('')}</span></div>`;
}
function kzMusTry(id) {
  const tr = ['menu', 'queue', 'lobby'], fx = ['click', 'coin', 'match_found', 'level_up', 'victory', 'defeat'];
  const p = window.KA?.packPlaying?.();
  return `<div class="th-try mu-try">${kzMusThumb(id)}
    <p class="th-desc">${esc(kzMusDesc(id))}</p>
    <div class="mu-row"><span>${KZ_MUS_IC.note}${kzMusT('music')}</span><div class="seg sm">${tr.map(k => `<button data-mupl="${esc(id)}|${k}" class="${p && p.id === id && p.track === k ? 'on' : ''}">${kzMusOn(id, k) ? KZ_MUS_IC.stop : KZ_MUS_IC.play}${kzMusT(k)}</button>`).join('')}</div></div>
    <div class="mu-row"><span>${kzMusT('sounds')}</span><div class="mu-fx">${fx.map(k => `<button class="btn ghost sm" data-musfx="${esc(id)}|${k}">${kzMusT('fx_' + k)}</button>`).join('')}</div></div>
    <p class="mute th-note">${esc(kzMusT('whole'))}</p></div>`;
}
function kzMusSync() {
  const p = window.KA?.packPlaying?.();
  document.querySelectorAll('[data-mupl]').forEach(b => {
    const [id, tr] = b.dataset.mupl.split('|'), round = b.classList.contains('mu-play');
    const on = !!p && p.id === id && (round || p.track === tr);
    b.classList.toggle('on', on);
    if (round) { b.innerHTML = on ? KZ_MUS_IC.stop : KZ_MUS_IC.play; b.title = on ? kzMusT('stop') : kzMusT('listen'); }
    else b.innerHTML = (on ? KZ_MUS_IC.stop : KZ_MUS_IC.play) + kzMusT(tr);
  });
  document.querySelectorAll('.mu-thumb[data-mu]').forEach(el => el.classList.toggle('on', !!p && p.id === el.dataset.mu));
}
document.addEventListener('kz:packpreview', kzMusSync);
document.addEventListener('click', e => {
  const b = e.target.closest('[data-mupl],[data-musfx]');
  if (!b || !window.KA?.packPreview) return;
  e.preventDefault(); e.stopPropagation();
  if (b.dataset.mupl != null) {
    const [id, tr] = b.dataset.mupl.split('|');
    const round = b.classList.contains('mu-play');
    KA.packPreview(kzMusOn(id, round ? null : tr) ? null : id, tr || 'menu');
  } else {
    const [id, fx] = b.dataset.musfx.split('|');
    if (!kzMusOn(id)) KA.packPreview(id, 'menu');
    KA.play(fx, { force: true });
  }
}, true);

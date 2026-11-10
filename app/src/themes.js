const KZ_THEMES = {
  hud: { name: 'HUD', sw: ['#0a0d11', '#3ee0f0', '#ff7a3d'] },
  roy: { name: 'Royal', sw: ['#0c0b0a', '#e7c26a', '#f3ead6'] },
  dos: { name: 'Dossier', light: true, sw: ['#d6c9ad', '#b3261e', '#2a251c'] },
  aur: { name: 'Aurora', sw: ['#070a1c', '#5ee7df', '#b46cff'] },
  syn: { name: 'Synthwave', sw: ['#14072b', '#ff3fb4', '#41e2ff'] },
  trm: { name: 'Terminal', sw: ['#0b0805', '#ffb547', '#ff8a3d'] },
  arc: { name: 'Arctic', light: true, sw: ['#e8f1f8', '#1b8cff', '#7d5cff'] },
};
const KZ_THEME_IDS = Object.keys(KZ_THEMES);
const KZ_TH_T = {
  usdShort: { en: 'only for $', uk: 'лише за $', ru: 'только за $' },
  usdOnly: { en: 'Styles are sold only for $ and are not part of Premium. Buy once — yours forever.', uk: 'Стилі продаються лише за $ і не входять у Premium. Купуєш раз — твій назавжди.', ru: 'Стили продаются только за $ и не входят в Premium. Покупаешь раз — твой навсегда.' },
  onlyYou: { en: 'Changes the look of the whole app — only for you.', uk: 'Змінює вигляд усього застосунку — лише для тебе.', ru: 'Меняет вид всего приложения — только для тебя.' },
  tryOn: { en: 'Try it for 30 seconds', uk: 'Приміряти на 30 секунд', ru: 'Примерить на 30 секунд' },
  trying: { en: 'Preview: {n} · {s}s', uk: 'Примірка: {n} · {s} с', ru: 'Примерка: {n} · {s} с' },
  stop: { en: 'Stop', uk: 'Зупинити', ru: 'Остановить' },
  invHint: { en: 'Pick a style to see it. Styles you own can be switched any time.', uk: 'Обери стиль, щоб побачити його. Свої стилі можна перемикати будь-коли.', ru: 'Выбери стиль, чтобы увидеть его. Свои стили можно переключать когда угодно.' },
  default: { en: 'Default Konzte style', uk: 'Стандартний стиль Konzte', ru: 'Стандартный стиль Konzte' },
  hud: { en: 'Tactical HUD: cyan lines, corner brackets and a grid.', uk: 'Тактичний HUD: бірюзові лінії, кутові скоби й сітка.', ru: 'Тактический HUD: бирюзовые линии, угловые скобы и сетка.' },
  roy: { en: 'Black and gold, thin lines, golden headings.', uk: 'Чорне із золотом, тонкі лінії, золоті заголовки.', ru: 'Чёрное с золотом, тонкие линии, золотые заголовки.' },
  dos: { en: 'A classified file: paper, typewriter type, red stamps.', uk: 'Секретна справа: папір, друкарський шрифт, червоні печатки.', ru: 'Секретное дело: бумага, печатный шрифт, красные печати.' },
  aur: { en: 'Northern lights: glass panels and soft gradients.', uk: 'Північне сяйво: скляні панелі й м’які градієнти.', ru: 'Северное сияние: стеклянные панели и мягкие градиенты.' },
  syn: { en: 'Retro 80s: neon pink, sunset and a grid floor.', uk: 'Ретро 80-х: неоновий рожевий, захід сонця й сітка.', ru: 'Ретро 80-х: неоновый розовый, закат и сетка.' },
  trm: { en: 'Old amber terminal: monospace and scanlines.', uk: 'Старий бурштиновий термінал: моноширинний шрифт і розгортка.', ru: 'Старый янтарный терминал: моноширинный шрифт и развёртка.' },
  arc: { en: 'Light and icy: white glass and blue gradients.', uk: 'Світлий і крижаний: біле скло й сині градієнти.', ru: 'Светлый и ледяной: белое стекло и синие градиенты.' },
};
const kzThemeT = (k, v = {}) => String(kzPick(KZ_TH_T[k]) || '').replace(/\{(\w+)\}/g, (m, x) => v[x] ?? m);
const kzThemeName = id => KZ_THEMES[id]?.name || id;
const kzThemeThumb = id => `<div class="th-thumb"><img src="assets/themes/${esc(id)}.jpg" alt="" loading="lazy"><span class="th-sw">${(KZ_THEMES[id]?.sw || []).map(c => `<i style="background:${c}"></i>`).join('')}</span></div>`;
function kzThemeTry(id, has) {
  const on = kzThPrev?.id === id;
  return `<div class="th-try"><img class="th-big" src="assets/themes/${esc(id)}.jpg" alt="">
    <p class="th-desc">${esc(kzThemeT(id))}</p><p class="mute th-note">${esc(kzThemeT('onlyYou'))}</p>
    ${has ? '' : `<button class="btn ghost" data-thtry="${on ? '' : esc(id)}">${on ? kzThemeT('stop') : kzThemeT('tryOn')}</button>`}</div>`;
}

let kzThPrev = null;
let kzThCur = null;
function kzThemeWanted() {
  if (kzThPrev && kzThPrev.until > Date.now()) return kzThPrev.id;
  if (kzThPrev) { kzThPrev = null; kzThBar(); if (S.page === 'shop' || S.page === 'inventory') refresh(); }
  if (!S.token) return '';
  const p = S.myProfile;
  if (!p) { try { return localStorage.getItem('kz-theme') || ''; } catch { return ''; } }
  const id = p.cosmetics?.theme || '';
  const ok = id && KZ_THEMES[id] && (!p.available?.themes || p.available.themes.includes(id));
  try { localStorage.setItem('kz-theme', ok ? id : ''); } catch {}
  return ok ? id : '';
}
function kzThemeApply() {
  const id = kzThemeWanted();
  if (id === kzThCur) return;
  kzThCur = id;
  const b = document.body;
  for (const k of KZ_THEME_IDS) b.classList.toggle('th-' + k, k === id);
  b.classList.toggle('th-light', !!KZ_THEMES[id]?.light);
  b.classList.toggle('th-any', !!id);
}
function kzThBar() {
  let el = document.getElementById('th-bar');
  if (!kzThPrev) { el?.remove(); return; }
  if (!el) {
    el = document.createElement('div'); el.id = 'th-bar';
    el.innerHTML = '<span></span><button class="btn sm ghost"></button>';
    el.querySelector('button').onclick = () => { kzThPrev = null; kzThemeApply(); kzThBar(); refresh(); };
    document.body.appendChild(el);
  }
  el.querySelector('span').textContent = kzThemeT('trying', { n: kzThemeName(kzThPrev.id), s: Math.max(0, Math.ceil((kzThPrev.until - Date.now()) / 1000)) });
  el.querySelector('button').textContent = kzThemeT('stop');
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-thtry]');
  if (!b) return;
  e.preventDefault(); e.stopPropagation();
  const id = b.dataset.thtry;
  kzThPrev = id ? { id, until: Date.now() + 30_000 } : null;
  kzThemeApply(); kzThBar(); refresh();
}, true);
setInterval(() => { kzThemeApply(); if (kzThPrev) kzThBar(); }, 500);
document.addEventListener('DOMContentLoaded', kzThemeApply);

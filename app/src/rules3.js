(() => {
  const R = window.KZ_RULES;
  const SITE = 'https://konzte.online/rules';
  const V3 = () => !!window.KZ_V3?.();

  const L = {
    en: {
      rules: 'Rules', n2_d_rules: 'Competitive ruleset and penalties',
      ru3Index: 'Contents', ru3Of: '{n} of {m}', ru3Count: '{s} sections · {r} rules', ru3Copy: 'Copy link', ru3Copied: 'Link copied',
      ru3Site: 'Open on the site', ru3New: 'NEW', ru3Legend: 'Penalties', ru3Lw: 'Warning', ru3Lf: 'Match loss / result annulled', ru3Lb: 'Ban for a term', ru3Lp: 'Permanent ban', ru3Ln: 'Staff decision',
      ru3Ticket: 'Open a ticket', ru3Clear: 'Clear', ru3Key: 'Press / to search', ru3Jump: 'Go to rule {n}', ru3Open: 'Rule {n}',
    },
    uk: {
      rules: 'Правила', n2_d_rules: 'Змагальні правила й покарання',
      ru3Index: 'Зміст', ru3Of: '{n} з {m}', ru3Count: 'Розділів: {s} · правил: {r}', ru3Copy: 'Скопіювати посилання', ru3Copied: 'Посилання скопійовано',
      ru3Site: 'Відкрити на сайті', ru3New: 'НОВЕ', ru3Legend: 'Покарання', ru3Lw: 'Попередження', ru3Lf: 'Поразка / результат анульовано', ru3Lb: 'Бан на строк', ru3Lp: 'Бан назавжди', ru3Ln: 'Рішення стаффу',
      ru3Ticket: 'Відкрити тікет', ru3Clear: 'Очистити', ru3Key: 'Натисни / для пошуку', ru3Jump: 'До правила {n}', ru3Open: 'Правило {n}',
    },
    ru: {
      rules: 'Правила', n2_d_rules: 'Соревновательные правила и наказания',
      ru3Index: 'Содержание', ru3Of: '{n} из {m}', ru3Count: 'Разделов: {s} · правил: {r}', ru3Copy: 'Скопировать ссылку', ru3Copied: 'Ссылка скопирована',
      ru3Site: 'Открыть на сайте', ru3New: 'НОВОЕ', ru3Legend: 'Наказания', ru3Lw: 'Предупреждение', ru3Lf: 'Поражение / результат аннулирован', ru3Lb: 'Бан на срок', ru3Lp: 'Бан навсегда', ru3Ln: 'Решение стаффа',
      ru3Ticket: 'Открыть тикет', ru3Clear: 'Очистить', ru3Key: 'Нажми / для поиска', ru3Jump: 'К правилу {n}', ru3Open: 'Правило {n}',
    },
  };
  for (const k of Object.keys(L)) Object.assign(I18N[k], L[k]);
  const tr = (k, v = {}) => String((I18N[LANG] || I18N.en)[k] ?? I18N.en[k] ?? k).replace(/\{(\w+)\}/g, (_, x) => v[x] ?? '');

  const IC = {
    book: '<svg viewBox="0 0 24 24"><path d="M5 4.5h10.5a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h10.5"/><path d="M9 8h6M9 11h4"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    ext: '<svg viewBox="0 0 24 24"><path d="M14 4.5h5.5V10M19.5 4.5L11 13"/><path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 3l7.5 3v5.5c0 4.6-3.2 8-7.5 9.5-4.3-1.5-7.5-4.9-7.5-9.5V6z"/></svg>',
    life: '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12.5h5"/></svg>',
  };

  const T = x => x == null ? '' : typeof x === 'string' ? x : (x[LANG] ?? (typeof kzTm === 'function' ? kzTm(x.en) : x.en) ?? '');
  const nm = k => R.N[k] ? T(R.N[k]) : k;
  const txt = v => typeof v === 'string' ? esc(nm(v)) : T(v);
  const img = n => `assets/rules/${n}`;
  const norm = s => String(s || '').toLowerCase().replace(/ё/g, 'е').replace(/[’'`]/g, '’');
  const RULE_WORD = /((?:rule|rules|правил[а-яіїєё]*)\s+)(\d+\.\d+)/gi;
  const refs = html => String(html).replace(RULE_WORD, (m, w, n) => exists(n) ? `${w}<a class="ru3-ref" data-ru3-go="${n}">${n}</a>` : m);
  const exists = n => { const [s, r] = String(n).split('.').map(Number); return !!R?.SECTIONS[s - 1]?.rules[r - 1]; };
  const nRules = () => R.SECTIONS.reduce((a, s) => a + s.rules.length, 0);
  const pill = p => `<span class="ru3-pen ${p.c}">${esc(T(p.t))}</span>`;

  const st = { q: '', target: null, lang: null, io: null };

  function slots(o) {
    const e = Object.entries(o || {});
    if (!e.length) return `<div class="ru3-only">${refs(T(R.UI.only31))}</div>`;
    return e.map(([k, v]) => `<div class="ru3-srow"><div class="ru3-sk"><img src="${img(R.SLOT_ICON[k] + '.png')}" alt="">${esc(nm(k))}</div>
      <div class="ru3-sv">${v.map(x => `<span class="ru3-tag">${txt(x)}</span>`).join('')}</div></div>`).join('');
  }
  function ruleHtml(r, id) {
    let body = `<p class="ru3-tx">${refs(T(r.x))}</p>`;
    if (r.list) body += `<ul class="ru3-list">${r.list.map(x => `<li>${T(x)}</li>`).join('')}</ul>`;
    if (r.grid) body += `<div class="ru3-grid">${r.grid.map(([ic, name, sub, ok]) => `<div class="ru3-it ${ok ? 'ok' : 'ban'}">
        <div class="ru3-im"><img src="${img(ic + '.png')}" alt="" loading="lazy"></div><b>${txt(name)}</b>${sub ? `<small>${txt(sub)}</small>` : ''}
        <span class="ru3-lab">${ok ? IC.check : IC.x}${esc(T(ok ? R.UI.allowed : R.UI.banned))}</span></div>`).join('')}</div>`;
    if (r.slots) body += `<div class="ru3-wpn wide">${slots(r.slots)}</div>`;
    if (r.weapons) body += `<div class="ru3-wpns">${r.weapons.map(([name, ic, o]) => `<div class="ru3-wpn"><div class="ru3-wh"><img src="${img(ic + '.png')}" alt="" loading="lazy"><b>${esc(nm(name))}</b></div>${slots(o)}</div>`).join('')}</div>`;
    if (r.spots) body += `<div class="ru3-spots">${r.spots.map(([im, name, d]) => `<div class="ru3-spot"><img src="${img(im + '.jpg')}" alt="" loading="lazy"><div><b>${esc(name)}</b><span>${T(d)}</span></div></div>`).join('')}</div>`;
    return `<article class="ru3-rule${r.nw ? ' nw' : ''}" id="ru3-r${id}" data-n="${id}">
      <header class="ru3-rh"><button class="ru3-num" data-ru3-go="${id}" title="${esc(tr('ru3Jump', { n: id }))}">${id}</button>
        <h3>${T(r.t)}${r.nw ? `<em class="ru3-nw">${esc(tr('ru3New'))} ${esc(r.nw)}</em>` : ''}</h3>
        <div class="ru3-pens">${(r.pen || []).map(pill).join('')}</div>
        <button class="ru3-cp" data-ru3-cp="${id}" title="${esc(tr('ru3Copy'))}">${IC.link}</button></header>
      <div class="ru3-body">${body}</div></article>`;
  }
  function html() {
    const UI = R.UI, pn = R.SECTIONS.length + 1;
    const secs = R.SECTIONS.map((s, si) => {
      const n = si + 1;
      return `<section class="ru3-sec" id="ru3-s${n}" data-s="${n}"><div class="ru3-sh"><span class="ru3-sn">${n}</span><div class="grow"><h2>${T(s.title)}</h2><p>${T(s.sub)}</p></div>
        <img src="${img(s.icon + '.png')}" alt=""></div>${s.rules.map((r, ri) => ruleHtml(r, `${n}.${ri + 1}`)).join('')}</section>`;
    }).join('');
    const pens = `<section class="ru3-sec ru3-psec" id="ru3-s${pn}" data-s="${pn}"><div class="ru3-sh"><span class="ru3-sn">${pn}</span><div class="grow"><h2>${T(UI.pens)}</h2><p>${T(UI.pensSub)}</p></div><i class="ru3-shi">${IC.shield}</i></div>
      <div class="ru3-note">${T(R.NOTES.how)}</div>
      <div class="ru3-ptab">${R.PEN_ROWS.map(([p, d]) => `<div class="ru3-prow">${pill(p)}<span>${T(d)}</span></div>`).join('')}</div>
      <div class="ru3-note">${T(R.NOTES.after)}</div>
      <div class="ru3-note ru3-appeal"><span>${T(R.NOTES.appeal)}</span><button class="btn ghost sm" data-ru3-ticket>${IC.life}${esc(tr('ru3Ticket'))}</button></div></section>`;
    const toc = R.SECTIONS.map((s, si) => `<button class="ru3-ti" data-ru3-sec="${si + 1}"><i>${si + 1}</i><span>${T(s.title)}</span><b>${s.rules.length}</b></button>`).join('')
      + `<button class="ru3-ti" data-ru3-sec="${pn}"><i>${pn}</i><span>${T(UI.pens)}</span></button>`;
    const legend = [['w', 'ru3Lw'], ['f', 'ru3Lf'], ['b', 'ru3Lb'], ['p', 'ru3Lp']].map(([c, k]) => `<div><span class="ru3-dot ${c}"></span>${esc(tr(k))}</div>`).join('');
    return `<div class="ru3" data-lang="${LANG}">
      <div class="card ru3-hero">
        <div class="ru3-hl"><span class="ru3-k"><i></i>${T(UI.eyebrow)}</span>
          <h1>${T(UI.h1a)} <em>${T(UI.h1b)}</em></h1>
          <p class="ru3-lead">${T(UI.lead)}</p>
          <div class="ru3-meta"><span>${IC.clock}<small>${T(UI.mUpd)}</small><b>${esc(R.UPDATED)}</b></span>
            <span>${IC.target}<small>${T(UI.mFor)}</small><b>${T(UI.mForV)}</b></span>
            <span>${IC.book}<small>${T(UI.mBase)}</small><b>${T(UI.mBaseV)}</b></span></div></div>
        <div class="ru3-hr"><div class="ru3-big"><b class="num">${nRules()}</b><span>${esc(tr('ru3Count', { s: R.SECTIONS.length, r: nRules() }))}</span></div>
          <button class="btn ghost sm" data-ru3-site>${IC.ext}${esc(tr('ru3Site'))}</button></div>
      </div>
      <div class="ru3-lay">
        <aside class="ru3-side">
          <label class="ru3-q">${IC.search}<input id="ru3-q" autocomplete="off" spellcheck="false" placeholder="${esc(T(UI.search))}"><button class="ru3-qx" data-ru3-clear title="${esc(tr('ru3Clear'))}" hidden>${IC.x}</button></label>
          <div class="ru3-qs"><span id="ru3-found">${esc(tr('ru3Key'))}</span></div>
          <div class="card ru3-toc"><span class="ru3-k sm"><i></i>${esc(tr('ru3Index'))}</span>${toc}</div>
          <div class="card ru3-leg"><span class="ru3-k sm"><i></i>${esc(tr('ru3Legend'))}</span>${legend}</div>
        </aside>
        <div class="ru3-main">${secs}${pens}
          <div class="card ru3-empty" id="ru3-empty" hidden>${IC.search}<p>${T(UI.empty)}</p></div>
          <p class="ru3-foot mute">${T(UI.foot)}</p></div>
      </div></div>`;
  }

  function unmark(root) {
    root.querySelectorAll('mark.ru3-hl').forEach(m => { const p = m.parentNode; p.replaceChild(document.createTextNode(m.textContent), m); p.normalize(); });
  }
  function mark(root, q) {
    const nq = norm(q), walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest('.ru3-num, .ru3-pens, .ru3-cp, .ru3-lab') ? 2 : 1 });
    const hits = [];
    for (let n; (n = walk.nextNode());) if (norm(n.nodeValue).includes(nq)) hits.push(n);
    for (const n of hits) {
      const s = n.nodeValue, ns = norm(s), f = document.createDocumentFragment();
      let i = 0, j;
      while ((j = ns.indexOf(nq, i)) >= 0) {
        if (j > i) f.appendChild(document.createTextNode(s.slice(i, j)));
        const m = document.createElement('mark'); m.className = 'ru3-hl'; m.textContent = s.slice(j, j + nq.length); f.appendChild(m);
        i = j + nq.length;
      }
      if (i < s.length) f.appendChild(document.createTextNode(s.slice(i)));
      n.parentNode.replaceChild(f, n);
    }
  }
  function filter() {
    const v = $('#view'), box = v.querySelector('.ru3'); if (!box) return;
    const q = st.q.trim(), nq = norm(q), num = /^\d+(\.\d*)?$/.test(q);
    let shown = 0;
    box.querySelectorAll('.ru3-rule').forEach(r => {
      unmark(r);
      const n = r.dataset.n;
      const hit = !q || (num ? (n === q || n.startsWith(q.endsWith('.') ? q : q + '.')) : norm(r.textContent).includes(nq));
      r.hidden = !hit; r.classList.toggle('numhit', !!q && num && hit);
      if (hit) { shown++; if (q && !num) mark(r, q); }
    });
    box.querySelectorAll('.ru3-sec').forEach(s => {
      const any = !!s.querySelector('.ru3-rule:not([hidden])');
      const pen = s.classList.contains('ru3-psec');
      if (pen) { s.hidden = !!q && !(num ? q === s.dataset.s : norm(s.textContent).includes(nq)); if (!s.hidden && q && !num) { unmark(s); mark(s, q); } else unmark(s); }
      else s.hidden = !!q && !any;
      box.querySelector(`[data-ru3-sec="${s.dataset.s}"]`)?.classList.toggle('dim', s.hidden);
    });
    const empty = box.querySelector('#ru3-empty'); empty.hidden = !q || !!shown || !box.querySelector('.ru3-psec[hidden]');
    box.querySelector('.ru3-qx').hidden = !q;
    box.querySelector('#ru3-found').textContent = q ? tr('ru3Of', { n: shown, m: nRules() }) : tr('ru3Key');
  }

  function scrollTo(el, flash) {
    if (!el) return;
    const v = $('#view');
    v.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top - v.getBoundingClientRect().top + v.scrollTop - 14), behavior: flash === 'jump' ? 'auto' : 'smooth' });
    if (flash) { el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); setTimeout(() => el.classList.remove('flash'), 2200); }
  }
  function goRule(n, how) {
    const box = $('#view .ru3'); if (!box) return;
    let el = box.querySelector(`.ru3-rule[data-n="${CSS.escape(n)}"]`);
    if (!el && /^\d+$/.test(String(n))) el = box.querySelector(`#ru3-s${n}`);
    if (el?.hidden || el?.closest('.ru3-sec')?.hidden) { st.q = ''; box.querySelector('#ru3-q').value = ''; filter(); }
    scrollTo(el, how || true);
  }
  function observe() {
    st.io?.disconnect();
    const v = $('#view'), box = v.querySelector('.ru3');
    st.io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) box.querySelectorAll('.ru3-ti').forEach(b => b.classList.toggle('on', b.dataset.ru3Sec === en.target.dataset.s));
    }), { root: v, rootMargin: '-25% 0px -65% 0px' });
    box.querySelectorAll('.ru3-sec').forEach(s => st.io.observe(s));
  }

  function bind() {
    const box = $('#view .ru3');
    const q = box.querySelector('#ru3-q');
    q.value = st.q;
    q.oninput = () => { st.q = q.value; filter(); };
    q.onkeydown = e => {
      if (e.key === 'Escape') { st.q = q.value = ''; filter(); }
      if (e.key === 'Enter') { const t = st.q.trim(); const first = box.querySelector('.ru3-rule:not([hidden])'); if (exists(t)) goRule(t); else if (first) scrollTo(first, true); }
    };
    box.addEventListener('click', e => {
      const g = e.target.closest('[data-ru3-go]'); if (g) { e.preventDefault(); goRule(g.dataset.ru3Go); return; }
      const sec = e.target.closest('[data-ru3-sec]'); if (sec) { scrollTo(box.querySelector('#ru3-s' + sec.dataset.ru3Sec)); return; }
      const cp = e.target.closest('[data-ru3-cp]');
      if (cp) {
        const url = `${SITE}#r${cp.dataset.ru3Cp}`;
        Promise.resolve(navigator.clipboard?.writeText(url)).then(() => toast(tr('ru3Copied') + ' · ' + url)).catch(() => toast(url));
        cp.innerHTML = IC.check; cp.classList.add('ok'); setTimeout(() => { cp.innerHTML = IC.link; cp.classList.remove('ok'); }, 1200);
        return;
      }
      if (e.target.closest('[data-ru3-clear]')) { st.q = q.value = ''; filter(); q.focus(); return; }
      if (e.target.closest('[data-ru3-site]')) { K.open(SITE); return; }
      if (e.target.closest('[data-ru3-ticket]')) go('support');
    });
    observe();
    filter();
  }

  function renderRules() {
    const have = $('#view .ru3');
    if (!have || have.dataset.lang !== LANG) {
      render(html());
      bind();
    } else { const q = have.querySelector('#ru3-q'); if (q.value !== st.q) { q.value = st.q; filter(); } }
    if (st.target) { const n = st.target; st.target = null; requestAnimationFrame(() => goRule(n, 'jump')); }
  }

  const nav = document.getElementById('nav');
  let navBtn = nav?.querySelector('.nav-btn[data-go="rules"]');
  if (nav && !navBtn && R) {
    navBtn = document.createElement('button');
    navBtn.className = 'nav-btn'; navBtn.dataset.go = 'rules'; navBtn.hidden = true;
    navBtn.innerHTML = `${IC.book}<span>${esc(tr('rules'))}</span><i class="n2-cnt" hidden></i>`;
    navBtn.onclick = () => go('rules');
    const after = nav.querySelector('.nav-btn[data-go="lfg"]') || nav.querySelector('.nav-btn[data-go="play"]');
    if (after) after.after(navBtn); else nav.appendChild(navBtn);
  }
  const syncNav = () => { if (navBtn) { const on = V3(); if (navBtn.hidden === on) navBtn.hidden = !on; const s = navBtn.querySelector('span'); if (s && s.textContent !== tr('rules')) s.textContent = tr('rules'); } };
  syncNav();
  setInterval(syncNav, 2000);

  if (!R) { console.warn('[rules3] rules-data.js не завантажено'); }
  const _go = go;
  go = function (page, arg) {
    if (page === 'rules') {
      if (!R || !V3()) { K.open(SITE + (arg && exists(arg) ? '#r' + arg : '')); return; }
      st.target = arg ? String(arg) : null;
      if (S.page !== 'rules' || arg) st.q = '';
      if (S.page === 'rules' && $('#view .ru3')) { markNav(); return renderRules(); }
    }
    return _go.apply(this, arguments);
  };
  const _refresh = refresh;
  refresh = function () {
    syncNav();
    if (S.page === 'rules' && S.me?.gameId) {
      if (R && V3()) return renderRules();
      S.page = 'play'; markNav();
    }
    return _refresh.apply(this, arguments);
  };
  document.addEventListener('keydown', e => {
    if (S.page !== 'rules' || e.key !== '/' || e.ctrlKey || e.metaKey) return;
    const a = document.activeElement; if (a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA' || a.isContentEditable)) return;
    const q = document.getElementById('ru3-q'); if (q && !document.querySelector('#modal > *')) { e.preventDefault(); q.focus(); q.select(); }
  });

  const CODE2RULE = { cheat: '1.1', boost: '1.5', fakeshot: '1.6', weapon: '2.1', killchain: '4.2', skill: '4.3', bug: '5.2', spawn: '6.3', leave: '6.5', afk: '6.5', toxic: '7.1' };
  const link = n => `<a href="#" class="ru3-nlink" data-ru3-nl="${n}">${esc(tr('ru3Open', { n }))}</a>`;
  function patchNotice(card) {
    if (!R || card.dataset.ru3) return;
    card.dataset.ru3 = '1';
    card.querySelectorAll('p').forEach(p => {
      const b = p.querySelector(':scope > b');
      if (b && b.textContent.trim().replace(/:$/, '') === t('ntRule')) {
        const label = p.textContent.slice(b.textContent.length).trim();
        const code = Object.keys(CODE2RULE).find(c => t('rule_' + c) === label);
        if (code) p.insertAdjacentHTML('beforeend', ` · ${link(CODE2RULE[code])}`);
        return;
      }
      const walk = document.createTreeWalker(p, NodeFilter.SHOW_TEXT), nodes = [];
      for (let n; (n = walk.nextNode());) if (/\d\.\d/.test(n.nodeValue)) nodes.push(n);
      for (const n of nodes) {
        const out = esc(n.nodeValue).replace(RULE_WORD, (m, w, num) => exists(num) ? `${w}<a href="#" class="ru3-nlink" data-ru3-nl="${num}">${num}</a>` : m);
        if (out !== esc(n.nodeValue)) { const s = document.createElement('span'); s.innerHTML = out; n.parentNode.replaceChild(s, n); }
      }
    });
    card.addEventListener('click', e => {
      const a = e.target.closest('[data-ru3-nl]'); if (!a) return;
      e.preventDefault();
      const n = a.dataset.ru3Nl;
      card.querySelector('#nt-ok')?.click();
      setTimeout(() => go('rules', n), 50);
    });
  }
  const modalBox = document.getElementById('modal');
  if (modalBox) new MutationObserver(() => modalBox.querySelectorAll('.notice:not(.bc):not([data-ru3])').forEach(patchNotice)).observe(modalBox, { childList: true, subtree: true });

  const pres = document.getElementById('n2-pres'), pq = document.getElementById('n2-pq');
  if (pres && pq) {
    const addRow = () => {
      if (!R || !V3() || pres.querySelector('.ru3-pal')) return;
      const q = norm(pq.value.trim());
      const words = [tr('rules'), tr('n2_d_rules'), 'rules', 'правила', 'правило'].map(norm);
      const isNum = exists(q);
      if (!q || !(isNum || words.some(w => w.includes(q) || q.startsWith('правил') || q.startsWith('rule')))) return;
      const label = isNum ? tr('ru3Open', { n: q }) : tr('rules');
      const none = pres.querySelector('.n2-pnone'); if (none) none.remove();
      pres.insertAdjacentHTML('afterbegin', `<div class="n2-pr ru3-pal${none ? ' on' : ''}" data-ru3-pal="${isNum ? q : ''}"><span class="ic">${IC.book}</span><b>${esc(label)}</b><span class="s">${esc(tr('n2_d_rules'))}</span>${none ? '<i class="n2-kbd">Enter</i>' : ''}</div>`);
    };
    new MutationObserver(addRow).observe(pres, { childList: true });
    const run = r => { window.N2?.closePal?.(); go('rules', r.dataset.ru3Pal || undefined); };
    pres.addEventListener('click', e => { const r = e.target.closest('.ru3-pal'); if (r) { e.stopPropagation(); run(r); } }, true);
    document.getElementById('n2-pal')?.addEventListener('keydown', e => {
      const r = pres.querySelector('.ru3-pal.on'); if (e.key === 'Enter' && r) { e.preventDefault(); e.stopPropagation(); run(r); }
    }, true);
  }
})();

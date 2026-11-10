(() => {
  const L = {
    en: { gcH: 'Combat Master is not running', gcT: 'Start the game before searching — once a match is found there is little time to get ready.', gcOpen: 'Open the game', gcAnyway: 'Search without the game', gcNever: 'Don’t ask again', gcOld: 'Start Combat Master in Steam, then press “Search”.', gcRecheck: 'I started it — Search', gcStarting: 'Starting Combat Master…', gcStartingT: 'The search will start by itself as soon as the game is open.', gcNow: 'Search now', gcCancel: 'Cancel', gcFail: 'The game didn’t start. Open it in Steam and try again.', gcStill: 'The game is still not running', sGameCheck: 'Check that the game is running', sGameCheckH: 'Before searching, Konzte checks that Combat Master is open and offers to start it.' },
    uk: { gcH: 'Combat Master не запущена', gcT: 'Запусти гру перед пошуком — коли матч знайдеться, часу на підготовку мало.', gcOpen: 'Відкрити гру', gcAnyway: 'Шукати без гри', gcNever: 'Більше не питати', gcOld: 'Запусти Combat Master у Steam і натисни «Шукати».', gcRecheck: 'Я запустив — Шукати', gcStarting: 'Запускаємо Combat Master…', gcStartingT: 'Пошук почнеться сам, щойно гра відкриється.', gcNow: 'Шукати зараз', gcCancel: 'Скасувати', gcFail: 'Гра не запустилась. Відкрий її в Steam і спробуй ще раз.', gcStill: 'Гра досі не запущена', sGameCheck: 'Перевіряти, чи запущена гра', sGameCheckH: 'Перед пошуком Konzte перевіряє, чи відкрита Combat Master, і пропонує її запустити.' },
    ru: { gcH: 'Combat Master не запущена', gcT: 'Запусти игру перед поиском — когда матч найдётся, времени на подготовку мало.', gcOpen: 'Открыть игру', gcAnyway: 'Искать без игры', gcNever: 'Больше не спрашивать', gcOld: 'Запусти Combat Master в Steam и нажми «Искать».', gcRecheck: 'Я запустил — Искать', gcStarting: 'Запускаем Combat Master…', gcStartingT: 'Поиск начнётся сам, как только игра откроется.', gcNow: 'Искать сейчас', gcCancel: 'Отмена', gcFail: 'Игра не запустилась. Открой её в Steam и попробуй ещё раз.', gcStill: 'Игра всё ещё не запущена', sGameCheck: 'Проверять, запущена ли игра', sGameCheckH: 'Перед поиском Konzte проверяет, открыта ли Combat Master, и предлагает её запустить.' },
    es: { gcH: 'Combat Master no está abierto', gcT: 'Abre el juego antes de buscar: cuando se encuentra partida hay poco tiempo para prepararse.', gcOpen: 'Abrir el juego', gcAnyway: 'Buscar sin el juego', gcNever: 'No volver a preguntar', gcOld: 'Abre Combat Master en Steam y pulsa «Buscar».', gcRecheck: 'Ya lo abrí — Buscar', gcStarting: 'Abriendo Combat Master…', gcStartingT: 'La búsqueda empezará sola en cuanto el juego esté abierto.', gcNow: 'Buscar ahora', gcCancel: 'Cancelar', gcFail: 'El juego no se abrió. Ábrelo en Steam e inténtalo de nuevo.', gcStill: 'El juego sigue sin abrirse', sGameCheck: 'Comprobar que el juego está abierto', sGameCheckH: 'Antes de buscar, Konzte comprueba que Combat Master está abierto y ofrece abrirlo.' },
    pt: { gcH: 'Combat Master não está aberto', gcT: 'Abra o jogo antes de buscar — quando a partida é encontrada há pouco tempo para se preparar.', gcOpen: 'Abrir o jogo', gcAnyway: 'Buscar sem o jogo', gcNever: 'Não perguntar de novo', gcOld: 'Abra o Combat Master na Steam e toque em “Buscar”.', gcRecheck: 'Já abri — Buscar', gcStarting: 'Abrindo o Combat Master…', gcStartingT: 'A busca começa sozinha assim que o jogo abrir.', gcNow: 'Buscar agora', gcCancel: 'Cancelar', gcFail: 'O jogo não abriu. Abra na Steam e tente de novo.', gcStill: 'O jogo ainda não está aberto', sGameCheck: 'Verificar se o jogo está aberto', sGameCheckH: 'Antes de buscar, o Konzte verifica se o Combat Master está aberto e oferece abri-lo.' },
    de: { gcH: 'Combat Master läuft nicht', gcT: 'Starte das Spiel vor der Suche — wenn ein Match gefunden wird, bleibt wenig Zeit.', gcOpen: 'Spiel öffnen', gcAnyway: 'Ohne Spiel suchen', gcNever: 'Nicht mehr fragen', gcOld: 'Starte Combat Master in Steam und klicke „Suchen“.', gcRecheck: 'Gestartet — Suchen', gcStarting: 'Combat Master wird gestartet…', gcStartingT: 'Die Suche startet von selbst, sobald das Spiel offen ist.', gcNow: 'Jetzt suchen', gcCancel: 'Abbrechen', gcFail: 'Das Spiel ist nicht gestartet. Öffne es in Steam und versuche es erneut.', gcStill: 'Das Spiel läuft immer noch nicht', sGameCheck: 'Prüfen, ob das Spiel läuft', sGameCheckH: 'Vor der Suche prüft Konzte, ob Combat Master offen ist, und bietet an, es zu starten.' },
    fr: { gcH: 'Combat Master n’est pas lancé', gcT: 'Lance le jeu avant de chercher : quand un match est trouvé, il reste peu de temps pour se préparer.', gcOpen: 'Ouvrir le jeu', gcAnyway: 'Chercher sans le jeu', gcNever: 'Ne plus demander', gcOld: 'Lance Combat Master dans Steam puis clique sur « Chercher ».', gcRecheck: 'C’est lancé — Chercher', gcStarting: 'Lancement de Combat Master…', gcStartingT: 'La recherche démarrera toute seule dès que le jeu sera ouvert.', gcNow: 'Chercher maintenant', gcCancel: 'Annuler', gcFail: 'Le jeu ne s’est pas lancé. Ouvre-le dans Steam et réessaie.', gcStill: 'Le jeu n’est toujours pas lancé', sGameCheck: 'Vérifier que le jeu est lancé', sGameCheckH: 'Avant la recherche, Konzte vérifie que Combat Master est ouvert et propose de le lancer.' },
    pl: { gcH: 'Combat Master nie jest uruchomiony', gcT: 'Uruchom grę przed szukaniem — gdy mecz się znajdzie, jest mało czasu na przygotowanie.', gcOpen: 'Otwórz grę', gcAnyway: 'Szukaj bez gry', gcNever: 'Nie pytaj więcej', gcOld: 'Uruchom Combat Master w Steam i kliknij „Szukaj”.', gcRecheck: 'Uruchomiłem — Szukaj', gcStarting: 'Uruchamianie Combat Master…', gcStartingT: 'Szukanie zacznie się samo, gdy gra się otworzy.', gcNow: 'Szukaj teraz', gcCancel: 'Anuluj', gcFail: 'Gra się nie uruchomiła. Otwórz ją w Steam i spróbuj ponownie.', gcStill: 'Gra nadal nie jest uruchomiona', sGameCheck: 'Sprawdzaj, czy gra jest uruchomiona', sGameCheckH: 'Przed szukaniem Konzte sprawdza, czy Combat Master jest otwarty, i proponuje go uruchomić.' },
    tr: { gcH: 'Combat Master açık değil', gcT: 'Aramadan önce oyunu aç — maç bulunduğunda hazırlanmak için az zaman olur.', gcOpen: 'Oyunu aç', gcAnyway: 'Oyun olmadan ara', gcNever: 'Bir daha sorma', gcOld: 'Combat Master’ı Steam’den aç ve “Ara”ya bas.', gcRecheck: 'Açtım — Ara', gcStarting: 'Combat Master açılıyor…', gcStartingT: 'Oyun açılır açılmaz arama kendiliğinden başlayacak.', gcNow: 'Şimdi ara', gcCancel: 'İptal', gcFail: 'Oyun açılmadı. Steam’den aç ve tekrar dene.', gcStill: 'Oyun hâlâ açık değil', sGameCheck: 'Oyunun açık olduğunu kontrol et', sGameCheckH: 'Aramadan önce Konzte, Combat Master’ın açık olup olmadığını kontrol eder ve açmayı önerir.' },
  };
  for (const l of Object.keys(L)) Object.assign(I18N[l] ||= {}, L[l]);
  try {
    Object.assign(SERVER_ERRORS.uk ||= {}, { 'Start Combat Master before searching': 'Спершу запусти Combat Master', 'Close forbidden programs before searching': 'Закрий заборонені програми перед пошуком' });
    Object.assign(SERVER_ERRORS.ru ||= {}, { 'Start Combat Master before searching': 'Сначала запусти Combat Master', 'Close forbidden programs before searching': 'Закрой запрещённые программы перед поиском' });
    (SERVER_ERRORS_RE.uk ||= []).push([/^(.+) hasn't started Combat Master$/, '$1 ще не запустив Combat Master'], [/^(.+) has forbidden programs running$/, 'У $1 запущені заборонені програми']);
    (SERVER_ERRORS_RE.ru ||= []).push([/^(.+) hasn't started Combat Master$/, '$1 ещё не запустил Combat Master'], [/^(.+) has forbidden programs running$/, 'У $1 запущены запрещённые программы']);
  } catch {}
  const K = window.konzte;
  const isMac = () => S.appInfo?.platform === 'darwin' || /Mac/i.test(navigator.platform || '');
  const canCheck = () => !document.documentElement.classList.contains('web') && !!K?.acScan;
  const withTimeout = (p, ms) => Promise.race([p, new Promise(r => setTimeout(() => r(null), ms))]);
  let cfgAc = null, lastPre = 0, lastFiles = 0, filesFull = false;
  async function scan() {
    try {
      if (!cfgAc) cfgAc = await api('/api/ac/config').catch(() => ({}));
      const withFiles = !!cfgAc.files && Date.now() - lastFiles > 5 * 60e3;
      const nn = cfgAc.att ? await api('/api/ac/nonce').catch(() => null) : null;
      const r = await withTimeout(K.acScan({ names: cfgAc.names || [], hashes: cfgAc.hashes || [], nonce: nn?.n || '', ...(withFiles ? { files: true, filesFull } : {}) }), withFiles ? 30000 : 10000);
      if (!r) return null;
      const res = await api('/api/ac/pre', { found: !!r.found, hits: r.hits || [], platform: r.platform, ver: r.ver, ...(withFiles && r.files ? { files: r.files, ga: r.ga } : {}), ...(r.att ? { att: r.att } : {}), ...(r.guardErr ? { guardErr: r.guardErr } : {}), ...(r.svc ? { svc: r.svc } : {}), ...(r.svcErr ? { svcErr: r.svcErr } : {}) });
      if (withFiles && r.files) { lastFiles = Date.now(); filesFull = !!res?.needFiles; if (filesFull) lastFiles = 0; }
      lastPre = Date.now();
      return { found: !!r.found, blocked: !!res?.blocked, guard: res?.guard || null };
    } catch { return null; }
  }
  let busy = false, wait = null;
  const stopWait = () => { clearInterval(wait); wait = null; };
  const NEED = /Start Combat Master before searching/;

  async function gate(go) {
    if (!canCheck() || S.live?.match) return go();
    if (busy) return; busy = true;
    const r = await scan(); busy = false;
    if (r?.blocked) return toast(tErr('Close forbidden programs before searching'), true);
    if (r?.guard?.req && !r.guard.ok && K.guardOpen) return guardAsk(go, r.guard.why);
    if (r && !r.found && !isMac()) return ask(go);
    go();
  }
  function ask(go, note = '') {
    const launch = !!K.launchGame;
    modal(`<div class="card accent col modal gc-modal"><div class="gc-ic"><svg viewBox="0 0 24 24"><path d="M7.6 6.5h8.8a5.2 5.2 0 0 1 5.1 6.2l-.8 4.1a2.5 2.5 0 0 1-4.3 1.2L14.3 16H9.7l-2.1 2a2.5 2.5 0 0 1-4.3-1.2l-.8-4.1a5.2 5.2 0 0 1 5.1-6.2z"/><path d="M8 9.8v3.6M6.2 11.6h3.6"/><circle cx="15.6" cy="10.4" r="1" fill="currentColor" stroke="none"/><circle cx="17.6" cy="12.6" r="1" fill="currentColor" stroke="none"/></svg></div>
      <h2>${t('gcH')}</h2><p class="mute">${t(launch ? 'gcT' : 'gcOld')}</p>${note ? `<p class="gc-note">${esc(note)}</p>` : ''}
      <div class="col gc-btns">${launch ? `<button class="btn big" id="gc-open">${t('gcOpen')}</button>` : `<button class="btn big" id="gc-re">${t('gcRecheck')}</button>`}
        <button class="btn ghost" data-close>${t('gcCancel')}</button></div></div>`, box => {
      box.querySelector('#gc-open')?.addEventListener('click', run(async () => { await K.launchGame(); starting(go); }));
      box.querySelector('#gc-re')?.addEventListener('click', run(async () => {
        const r = await scan();
        if (r && !r.found) return ask(go, t('gcStill'));
        closeModal(); go();
      }));
    });
  }
  function starting(go) {
    stopWait();
    const t0 = Date.now();
    modal(`<div class="card accent col modal gc-modal"><div class="gc-spin"></div><h2>${t('gcStarting')}</h2><p class="mute">${t('gcStartingT')}</p>
      <div class="col gc-btns"><button class="btn ghost" id="gc-cancel">${t('gcCancel')}</button></div></div>`, box => {
      box.querySelector('.overlay')?.addEventListener('click', stopWait);
      box.querySelector('#gc-cancel').onclick = () => { stopWait(); closeModal(); };
    });
    let checking = false;
    wait = setInterval(async () => {
      if (checking) return; checking = true;
      const r = await scan(); checking = false;
      if (!wait) return;
      if (r?.found) { stopWait(); closeModal(); sfx('ok'); go(); }
      else if (Date.now() - t0 > 120e3) { stopWait(); ask(go, t('gcFail')); }
    }, 3000);
  }
  const GW = {
    en: { gH: 'KONZTE GUARD', gT: 'Matchmaking only works while KONZTE GUARD confirms you are clean.', gOpen: 'Open KONZTE GUARD', gMissing: 'KONZTE GUARD is not installed — reinstall Konzte from the website.', gWait: 'Waiting for KONZTE GUARD…',
      why: { noSvc: 'KONZTE GUARD is not running', svcLate: 'Combat Master was started before KONZTE GUARD — close the game and launch it from KONZTE GUARD', noGame: 'KONZTE GUARD does not see Combat Master — launch it from KONZTE GUARD', svcGaps: 'Protection was interrupted — restart the game', svcRef: 'Unknown KONZTE GUARD version — update Konzte', svcHash: 'KONZTE GUARD files were modified — reinstall Konzte', svcTamper: 'KONZTE GUARD report failed verification', svcDebug: 'KONZTE GUARD is being debugged', tamper: 'Konzte report failed verification', att: 'Check failed — restart Konzte', client: 'Konzte files were modified', inject: 'Foreign code was found in the game', sys: 'Driver test mode or kernel debugging is on', cheat: 'A forbidden program was running', memory: 'A program is accessing game memory', driver: 'A forbidden driver is loaded', overlay: 'A suspicious overlay is drawn over the game', noTray: 'KONZTE GUARD was closed during the game — restart the game', debugger: 'A debugger was attached to the game' } },
    uk: { gH: 'KONZTE GUARD', gT: 'Пошук матчів працює лише тоді, коли KONZTE GUARD підтверджує, що ти чистий.', gOpen: 'Відкрити KONZTE GUARD', gMissing: 'KONZTE GUARD не встановлено — перевстанови Konzte з сайту.', gWait: 'Чекаємо на KONZTE GUARD…',
      why: { noSvc: 'KONZTE GUARD не працює', svcLate: 'Combat Master запущено раніше за KONZTE GUARD — закрий гру й запусти її з KONZTE GUARD', noGame: 'KONZTE GUARD не бачить Combat Master — запусти гру з KONZTE GUARD', svcGaps: 'Захист переривався — перезапусти гру', svcRef: 'Невідома версія KONZTE GUARD — онови Konzte', svcHash: 'Файли KONZTE GUARD змінено — перевстанови Konzte', svcTamper: 'Звіт KONZTE GUARD не пройшов перевірку', svcDebug: 'KONZTE GUARD налагоджують', tamper: 'Звіт Konzte не пройшов перевірку', att: 'Перевірка не вдалась — перезапусти Konzte', client: 'Файли Konzte змінено', inject: 'У грі виявлено сторонній код', sys: 'Увімкнено тестовий режим драйверів або налагодження ядра', cheat: 'Працювала заборонена програма', memory: 'Програма має доступ до пам\'яті гри', driver: 'Завантажено заборонений драйвер', overlay: 'Над грою підозріле вікно-оверлей', noTray: 'KONZTE GUARD закривали під час гри — перезапусти гру', debugger: 'До гри підключали налагоджувач' } },
    ru: { gH: 'KONZTE GUARD', gT: 'Поиск матчей работает только когда KONZTE GUARD подтверждает, что ты чист.', gOpen: 'Открыть KONZTE GUARD', gMissing: 'KONZTE GUARD не установлен — переустанови Konzte с сайта.', gWait: 'Ждём KONZTE GUARD…',
      why: { noSvc: 'KONZTE GUARD не работает', svcLate: 'Combat Master запущен раньше KONZTE GUARD — закрой игру и запусти её из KONZTE GUARD', noGame: 'KONZTE GUARD не видит Combat Master — запусти игру из KONZTE GUARD', svcGaps: 'Защита прерывалась — перезапусти игру', svcRef: 'Неизвестная версия KONZTE GUARD — обнови Konzte', svcHash: 'Файлы KONZTE GUARD изменены — переустанови Konzte', svcTamper: 'Отчёт KONZTE GUARD не прошёл проверку', svcDebug: 'KONZTE GUARD отлаживают', tamper: 'Отчёт Konzte не прошёл проверку', att: 'Проверка не удалась — перезапусти Konzte', client: 'Файлы Konzte изменены', inject: 'В игре найден посторонний код', sys: 'Включён тестовый режим драйверов или отладка ядра', cheat: 'Работала запрещённая программа', memory: 'Программа имеет доступ к памяти игры', driver: 'Загружен запрещённый драйвер', overlay: 'Над игрой подозрительное окно-оверлей', noTray: 'KONZTE GUARD закрывали во время игры — перезапусти игру', debugger: 'К игре подключали отладчик' } },
  };
  const gw = () => GW[typeof LANG === 'string' ? LANG : ''] || GW.en;
  let gwait = null;
  const stopG = () => { clearInterval(gwait); gwait = null; };
  function guardAsk(go, why = []) {
    stopG();
    const g = gw();
    const list = (why || []).map(w => `<li>${esc(g.why[w] || w)}</li>`).join('');
    modal(`<div class="card accent col modal gc-modal"><img src="assets/guard.svg" alt="" width="76" height="76" style="align-self:center;filter:drop-shadow(0 6px 18px rgba(244,197,66,.25))">
      <h2>${g.gH}</h2><p class="mute">${g.gT}</p>${list ? `<ul class="gc-note gc-why">${list}</ul>` : ''}<p class="mute gc-wait" hidden>${g.gWait}</p>
      <div class="col gc-btns"><button class="btn big" id="gc-guard">${g.gOpen}</button><button class="btn ghost" id="gc-gcancel">${t('gcCancel')}</button></div></div>`, box => {
      box.querySelector('.overlay')?.addEventListener('click', stopG);
      box.querySelector('#gc-gcancel').onclick = () => { stopG(); closeModal(); };
      box.querySelector('#gc-guard').addEventListener('click', run(async () => {
        if (!(await K.guardOpen().catch(() => false))) return toast(g.gMissing, true);
        box.querySelector('.gc-wait')?.removeAttribute('hidden');
      }));
    });
    let checking = false;
    const t0 = Date.now();
    gwait = setInterval(async () => {
      if (checking) return; checking = true;
      const r = await scan(); checking = false;
      if (!gwait) return;
      if (r?.guard?.ok || (r?.found && !r?.guard?.req)) { stopG(); closeModal(); sfx('ok'); go(); }
      else if (Date.now() - t0 > 10 * 60e3) stopG();
    }, 4000);
  }

  window.addEventListener('kz:ws', e => {
    const m = e.detail;
    if (m?.t === 'error' && /^(KONZTE GUARD: |Start KONZTE GUARD)/.test(m.msg || '') && canCheck() && K.guardOpen) { guardAsk(() => wsSend({ t: 'queue', mode: S.mode || '2v2' })); return; }
    if (m?.t === 'error' && NEED.test(m.msg || '') && canCheck() && !isMac()) ask(() => wsSend({ t: 'queue', mode: S.mode || '2v2' }));
  });
  setInterval(() => {
    if (!canCheck() || !S.token || S.live?.match || document.hidden && !S.live?.party) return;
    if (S.page !== 'play' && !S.live?.party) return;
    if (Date.now() - lastPre < 55_000 || busy) return;
    scan();
  }, 15_000);

  window.KZGame = { gate };

  let acSending = false;
  async function acFiles() {
    if (!K?.acUpload || !S.token || acSending) return;
    acSending = true;
    try {
      const list = await api('/api/ac/requests').catch(() => []);
      for (const r of list || []) await K.acUpload({ id: r.id, path: r.path, size: r.size, off: r.off, pc: !!r.pc, server: S.server, token: S.token, hwid: S.hwid }).catch(() => null);
    } finally { acSending = false; }
  }
  window.addEventListener('kz:ws', e => { if (e.detail?.t === 'acReq') acFiles(); });
  let acFullBusy = false;
  async function acFull() {
    if (!canCheck() || !S.token || acFullBusy) return;
    acFullBusy = true;
    try {
      const w = await api('/api/ac/full-want').catch(() => null);
      if (!w?.want) return;
      if (w.game && K.gameRunning && !(await K.gameRunning().catch(() => true))) return;
      if (!cfgAc) cfgAc = await api('/api/ac/config').catch(() => ({}));
      const nn = await api('/api/ac/nonce').catch(() => null);
      if (!nn?.n) return;
      const r = await withTimeout(K.acScan({ names: cfgAc.names || [], hashes: cfgAc.hashes || [], driverHashes: cfgAc.drivers || [], modules: true, deep: true, report: true, nonce: nn.n }), 120000);
      if (r?.att) await api('/api/ac/full', { att: r.att, platform: r.platform, ver: r.ver }).catch(() => null);
    } finally { acFullBusy = false; }
  }
  window.addEventListener('kz:ws', e => { if (e.detail?.t === 'acFull') acFull(); });
  setTimeout(acFull, 25_000);
  setInterval(acFull, 180_000);
  setTimeout(acFiles, 20_000);
  setInterval(acFiles, 180_000);
})();

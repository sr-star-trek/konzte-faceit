(function (root) {
  const LOOK = { '0': 'o', '1': 'l', '|': 'l', 'i': 'l', '5': 's', '$': 's', '8': 'b', 'а': 'a', 'в': 'b', 'е': 'e', 'к': 'k', 'м': 'm', 'н': 'h', 'о': 'o', 'р': 'p', 'с': 'c', 'т': 't', 'у': 'y', 'х': 'x', 'і': 'l' };
  const norm = s => String(s).toLowerCase().replace(/\[bot\]/g, '').split('').map(c => LOOK[c] || c).join('').replace(/[^a-z0-9а-яґєії]/g, '');

  function lev(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }
  const sim = (a, b) => (!a || !b ? 0 : 1 - lev(a, b) / Math.max(a.length, b.length));

  function matchNick(words, nick) {
    const n = norm(nick);
    let best = { score: 0, end: -1 };
    for (let i = 0; i < words.length; i++) {
      let acc = '';
      for (let j = i; j < Math.min(words.length, i + 4); j++) {
        acc += norm(words[j]);
        const sc = acc.includes(n) && n.length >= 3 ? 1 : sim(acc, n);
        if (sc > best.score) best = { score: sc, end: j + 1 };
      }
    }
    return best;
  }

  const WIN = /(victory|victorious|you\s*win|winner|\bwon\b|перемог|победа|победил|виграл|выиграл)/i;
  const LOSE = /(defeat|you\s*lose|lost|поразк|поражени|програл|проиграл)/i;

  function parse(ocr, players, mySide) {
    const lines = ocr.lines.map(l => ({ ...l, words: l.words.map(w => w.text).filter(Boolean) }));
    const stats = {};
    const used = new Set();
    for (const p of players) {
      let best = null;
      lines.forEach((l, li) => {
        if (used.has(li)) return;
        const m = matchNick(l.words, p.nick);
        if (m.score >= 0.72 && (!best || m.score > best.score)) best = { ...m, li };
      });
      if (!best) continue;
      used.add(best.li);
      const rr = readRow(lines[best.li].words.slice(best.end).join(' '));
      const sane = v => v != null && v <= 150 ? v : 0;
      stats[p.id] = { k: sane(rr.k), d: sane(rr.d), ok: rr.ok, nums: rr.nums, conf: +best.score.toFixed(2) };
    }
    const left = players.filter(p => !stats[p.id]);
    const freeRows = lines.map((l, li) => ({ l, li })).filter(({ l, li }) => !used.has(li) && !isSection(l.text) && readRow(l.text).ok);
    if (left.length === 1 && freeRows.length === 1) { const rr = readRow(freeRows[0].l.text); stats[left[0].id] = { k: rr.k, d: rr.d, ok: true, nums: rr.nums, conf: 0.5 }; used.add(freeRows[0].li); }
    const text = ocr.text || lines.map(l => l.text).join('\n');
    let winner = null;
    const secs = ocr.lines.map((l, li) => { const m = isSection(l.text); return m ? { li, rounds: +m[1], name: secName(m[2]) } : null; }).filter(Boolean).filter((x, i, a) => a.findIndex(y => y.name === x.name) === i);
    const rowLi = Object.fromEntries(players.filter(p => stats[p.id]).map(p => [p.id, lines.findIndex((l, li) => used.has(li) && matchNick(l.words, p.nick).score >= 0.5)]));
    const sideOfSec = (i) => { const from = secs[i].li, to = secs[i + 1]?.li ?? 1e9; const ps = players.filter(p => rowLi[p.id] > from && rowLi[p.id] < to); const a = ps.filter(p => p.side === 'A').length, b = ps.length - a; return a === b ? null : a > b ? 'A' : 'B'; };
    const secSide = secs.map((_, i) => sideOfSec(i));
    for (let i = 0; i < secs.length; i++) if (!secSide[i] && secs.length === 2 && secSide[1 - i]) secSide[i] = secSide[1 - i] === 'A' ? 'B' : 'A';
    if (secs.length === 2 && secs[0].rounds !== secs[1].rounds) { const wi = secs[0].rounds > secs[1].rounds ? 0 : 1; winner = secSide[wi]; }
    else if (secs.length === 1 && secSide[0] && secs[0].rounds) winner = secs[0].rounds >= 6 ? secSide[0] : secSide[0] === 'A' ? 'B' : 'A';
    const w = WIN.test(text), l = LOSE.test(text);
    const firstSide = secSide[0] || null;
    if (!winner && w !== l && (firstSide || mySide)) { const base = firstSide || mySide; winner = w ? base : base === 'A' ? 'B' : 'A'; }
    const sm = text.match(/(?:^|\D)(\d{1,2})\s*[:\-–—]\s*(\d{1,2})(?:\D|$)/);
    const okScore = sm && +sm[1] <= 13 && +sm[2] <= 13;
    return { winner, score: okScore ? `${sm[1]}-${sm[2]}` : '', stats, found: Object.keys(stats).length, total: players.length };
  }

  const SECTION = /^\W{0,4}(\d{1,2})(?:\s*\/\s*\d{1,2})?.{0,10}?(alfa|alpha|bravo|ал\s?ь\s?фа|бра\s?во)/i;
  const isSection = text => { const m = text.match(SECTION); return m && +m[1] <= 13 && (text.slice(m.index + m[0].length).match(/\d+/g) || []).length < 2 ? m : null; };
  const secName = s => { const x = s.toLowerCase().replace(/\s/g, ''); return ({ alpha: 'alfa', альфа: 'alfa', браво: 'bravo' })[x] || x; };

  function lineInfo(l, x) {
    let ws = l.words.filter(w => w.x1 < x && w.text).map(w => w.text);
    const lv = ws.findIndex((w, i) => /^\d{1,3}$/.test(w) && i < ws.length - 1);
    if (lv >= 0 && lv <= 3) ws = ws.slice(lv + 1);
    while (ws.length > 1 && /^[\d\W]{1,3}$/.test(ws[ws.length - 1])) ws.pop();
    const nick = ws.join(' ').trim();
    const all = l.words.filter(w => w.x1 != null);
    return { game: nick, box: all.length ? { x0: Math.min(...all.map(w => w.x0)), y0: l.y0, x1: Math.max(...all.map(w => w.x1)), y1: l.y1 } : null };
  }

  function layout(ocr, players, mySide) {
    const lines = ocr.lines;
    const COLS = [['score', /^s[cс][o0о]r|score|очк|рахун/i], ['k', /^[kк][iіl1|][lі1|]?[lsзz]|kill|убив|вбив/i], ['d', /^d[eе][aаs][tт]?[hнn]|death|смерт/i], ['kd', /^[kк]\s*\/\s*[dдoо0]/i]];
    let head = null;
    for (const l of lines) {
      const found = COLS.map(([, re]) => l.words.find(w => re.test(w.text)) || null);
      if (found.filter(Boolean).length >= 3 && (found[1] || found[2])) { head = { y: l.y1, found }; break; }
    }
    if (!head) return null;
    const ctr = head.found.map(w => w ? (w.x0 + w.x1) / 2 : null);
    const known = ctr.map((c, i) => c == null ? null : i).filter(i => i != null);
    const stepAvg = (ctr[known[known.length - 1]] - ctr[known[0]]) / (known[known.length - 1] - known[0]);
    for (let i = 0; i < ctr.length; i++) if (ctr[i] == null) {
      const lo = known.filter(j => j < i).pop(), hi = known.find(j => j > i);
      ctr[i] = lo != null && hi != null ? ctr[lo] + (ctr[hi] - ctr[lo]) * (i - lo) / (hi - lo) : lo != null ? ctr[lo] + stepAvg * (i - lo) : ctr[hi] - stepAvg * (hi - i);
    }
    const step = (ctr[ctr.length - 1] - ctr[0]) / Math.max(1, ctr.length - 1);
    const edges = [ctr[0] - step / 2, ...ctr.slice(1).map((c, i) => (c + ctr[i]) / 2), ctr[ctr.length - 1] + step / 2];
    const colNames = COLS.map(([n]) => n);
    const sections = lines.map(l => { const m = isSection(l.text); return m ? { y: l.y0, rounds: +m[1], name: secName(m[2]) } : null; }).filter(Boolean)
      .filter((x, i, all) => all.findIndex(y => y.name === x.name) === i);
    if (sections.length === 1) {
      const other = sections[0].name === 'alfa' ? 'bravo' : 'alfa';
      const l = lines.find(l => Math.abs(l.y0 - sections[0].y) > (l.y1 - l.y0) * 2 && /^\W{0,4}(\d{1,2})(?:\s*\/\s*\d{1,2})?\s*\S{0,3}\s*[a-zа-яёіїєґ]{3,6}\W*$/i.test(l.text.trim()) && +l.text.match(/\d+/)[0] <= 13);
      if (l) { sections.push({ y: l.y0, rounds: +l.text.match(/\d+/)[0], name: other }); sections.sort((x, y) => x.y - y.y); }
    }
    const cand = lines.map((l, li) => ({ l, li })).filter(({ l }) => l.y0 > head.y && !isSection(l.text)
      && l.words.filter(w => w.x0 > edges[0] && /\d/.test(w.text)).length >= 2);
    const secOf = l => sections.filter(x => x.y < l.y0).pop()?.name || null;
    const rows = [], left = new Set(cand.map(c => c.li)), unmatched = [];
    for (const p of players) {
      let best = null;
      for (const { l, li } of cand) {
        if (!left.has(li)) continue;
        const m = matchNick(l.words.filter(w => w.x1 < edges[0]).map(w => w.text), p.nick);
        if (m.score >= 0.68 && (!best || m.score > best.score)) best = { score: m.score, l, li };
      }
      if (best) { left.delete(best.li); rows.push({ p, l: best.l, conf: +best.score.toFixed(2) }); } else unmatched.push(p);
    }
    for (const sec of new Set(cand.filter(c => left.has(c.li)).map(c => secOf(c.l)))) {
      const free = cand.filter(c => left.has(c.li) && secOf(c.l) === sec);
      const sideIn = x => { const m = rows.filter(r => secOf(r.l) === x).map(r => r.p.side); const a = m.filter(v => v === 'A').length, b = m.length - a; return a === b ? null : a > b ? 'A' : 'B'; };
      let side = sideIn(sec);
      if (!side) { const other = sections.map(x => x.name).find(x => x !== sec && sideIn(x)); side = other ? (sideIn(other) === 'A' ? 'B' : 'A') : null; }
      if (!side && mySide && sections.length >= 2 && sec) side = sec === sections[0].name ? mySide : mySide === 'A' ? 'B' : 'A';
      const who = unmatched.filter(p => p.side === side);
      if (!side || !free.length || free.length !== who.length) continue;
      const pairs = [];
      for (const p of who) for (const f of free) pairs.push({ p, f, sc: matchNick(f.l.words.filter(w => w.x1 < edges[0]).map(w => w.text), p.nick).score });
      pairs.sort((x, y) => y.sc - x.sc);
      for (const { p, f } of pairs) {
        if (!left.has(f.li) || !unmatched.includes(p)) continue;
        rows.push({ p, l: f.l, conf: 0.5 }); left.delete(f.li); unmatched.splice(unmatched.indexOf(p), 1);
      }
    }
    return {
      cols: colNames, sections,
      rows: rows.map(({ p, l, conf }) => {
        const h = l.y1 - l.y0, top = Math.max(0, Math.round(l.y0 - h * 0.3)), height = Math.round(h * 1.6);
        return { id: p.id, side: p.side, conf, section: secOf(l), ...lineInfo(l, edges[0]),
          rects: colNames.map((_, i) => ({ left: Math.max(0, Math.round(edges[i])), top, width: Math.round(edges[i + 1] - edges[i]), height })) };
      }),
      extra: cand.filter(c => left.has(c.li)).map(c => ({ section: secOf(c.l), ...lineInfo(c.l, edges[0]) })),
      colBox: { x0: Math.round(edges[0]), x1: Math.round(edges[edges.length - 1]) },
    };
  }

  const CONFUSE = { 0: '8', 1: '7', 3: '8', 5: '86', 6: '58', 7: '1', 8: '0356', 9: '8' };
  function variants(n) {
    const s = String(n), out = [];
    for (let i = 0; i < s.length; i++) for (const c of CONFUSE[s[i]] || '') out.push(+(s.slice(0, i) + c + s.slice(i + 1)));
    return out;
  }

  function readCols(cols, texts) {
    const v = {};
    cols.forEach((c, i) => {
      const m = (texts[i] || '').match(/\d+(?:\.\d+)?/);
      if (!m) return;
      v[c] = c === 'kd' ? (m[0].includes('.') ? +m[0] : +m[0] / 100) : parseInt(m[0], 10);
    });
    let k = v.k ?? 0, d = v.d ?? 0;
    const fits = (k, d) => v.kd != null && Math.abs(k / Math.max(d, 1) - v.kd) < 0.06;
    let ok = fits(k, d);
    if (!ok && v.kd != null) {
      for (const [field, val] of [['d', d], ['k', k]]) {
        const alt = variants(val).find(x => field === 'd' ? fits(k, x) : fits(x, d));
        if (alt != null) { if (field === 'd') d = alt; else k = alt; ok = true; break; }
      }
      if (!ok && v.kd > 0 && d > 0 && fits(Math.round(v.kd * d), d)) { k = Math.round(v.kd * d); ok = true; }
      else if (!ok && v.kd > 0 && k > 0 && fits(k, Math.round(k / v.kd))) { d = Math.round(k / v.kd); ok = true; }
    }
    return { k, d, ok, nums: cols.map(c => v[c] ?? null) };
  }

  function readRow(text) {
    const t = (text.match(/\d+(?:\.\d+)?/g) || []);
    const ints = t.map(Number);
    for (let i = 0; i + 2 < t.length; i++) {
      const k = ints[i], d = ints[i + 1], kd = t[i + 2].includes('.') ? +t[i + 2] : +t[i + 2] / 100;
      if (!t[i].includes('.') && !t[i + 1].includes('.') && Math.abs(k / Math.max(d, 1) - kd) < 0.06) return { k, d, ok: true, nums: ints };
    }
    const n = t.filter(x => !x.includes('.')).map(Number);
    return n.length >= 3 ? { k: n[1], d: n[2], ok: false, nums: ints } : { k: n[0] ?? 0, d: n[1] ?? 0, ok: false, nums: ints };
  }

  function finish(lay, texts, players, mySide, fullText) {
    const stats = {};
    lay.rows.forEach((r, i) => { const v = readCols(lay.cols, texts[i] || []); const bad = v.k > 150 || v.d > 150; stats[r.id] = { k: bad ? 0 : v.k, d: bad ? 0 : v.d, ok: v.ok && !bad, nums: v.nums, conf: r.conf }; });
    let winner = null, score = '';
    const secs = lay.sections;
    if (secs.length >= 2 && secs[0].rounds !== secs[1].rounds) {
      const win = secs[0].rounds > secs[1].rounds ? secs[0] : secs[1];
      const lose = win === secs[0] ? secs[1] : secs[0];
      score = `${win.rounds}-${lose.rounds}`;
      const cnt = side => lay.rows.filter(r => r.side === side && r.section === win.name).length;
      if (cnt('A') !== cnt('B')) winner = cnt('A') > cnt('B') ? 'A' : 'B';
    }
    if (!winner && secs.length === 1 && secs[0].rounds) {
      const cnt = side => lay.rows.filter(r => r.side === side && r.section === secs[0].name).length;
      const side = cnt('A') !== cnt('B') ? (cnt('A') > cnt('B') ? 'A' : 'B') : null;
      if (side) winner = secs[0].rounds >= 6 ? side : side === 'A' ? 'B' : 'A';
    }
    if (!winner && (mySide || secs.length)) {
      const w = WIN.test(fullText), l = LOSE.test(fullText);
      const cnt = side => lay.rows.filter(r => r.side === side && r.section === secs[0]?.name).length;
      const first = secs.length && cnt('A') !== cnt('B') ? (cnt('A') > cnt('B') ? 'A' : 'B') : null;
      const base = first || mySide;
      if (w !== l && base) winner = w ? base : base === 'A' ? 'B' : 'A';
    }
    return { winner, score, stats, found: lay.rows.length, total: players.length, checked: Object.values(stats).filter(x => x.ok).length, sections: secs.length };
  }

  const quality = r => !r ? 0 : (r.found || 0) * 10 + (r.checked || 0) * 6 + (r.sections >= 2 ? 8 : 0) + (r.winner ? 4 : 0) + (r.score ? 2 : 0);
  const complete = r => !!r && r.found === r.total && r.checked === r.found && r.sections >= 2 && !!r.winner;
  const api = { parse, layout, finish, readRow, readCols, norm, sim, quality, complete };
  if (typeof module !== 'undefined') module.exports = api; else root.OcrParse = api;
})(this);

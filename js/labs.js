/* ============================================================
   Digital Innovations — Interactive Labs (js/labs.js)

   A registry of hands-on demos that render inside lesson slides
   (type:'widget', widget:'<lab name>') and on labs.html.

   Design rules:
   - Zero dependencies: vanilla JS + canvas only.
   - Theme-aware: colours are read from the CSS custom properties
     at init time, so every lab works in dark, light and
     high-contrast modes.
   - Multi-instance safe: every element id is prefixed with a uid
     so a lab can exist in the lesson modal and on labs.html at
     the same time.
   - Animation loops stop themselves when their canvas leaves the
     DOM (slide navigation, modal close).
   - prefers-reduced-motion: ambient animation collapses to a
     static frame; interaction-driven updates still work.
   ============================================================ */
(function () {
'use strict';

var LABS = {};
window.DI_LABS = LABS;

/* ── shared helpers ─────────────────────────────── */
function el(id) { return document.getElementById(id); }
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function cssVar(name, fallback) {
  var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}
function theme() {
  return {
    primary: cssVar('--primary', '#9b1844'),
    primaryLight: cssVar('--primary-light', '#c64b74'),
    accent: cssVar('--accent', '#009fe3'),
    text: cssVar('--text', '#f1f5f9'),
    muted: cssVar('--text-muted', '#94a3b8'),
    dim: cssVar('--text-dim', '#64748b'),
    bg: cssVar('--bg', '#0f172a'),
    card: cssVar('--bg-card', '#1e293b'),
    border: cssVar('--border', '#334155'),
    success: cssVar('--success', '#22c55e'),
    warning: cssVar('--warning', '#f59e0b'),
    danger: cssVar('--danger', '#ef4444')
  };
}
function reducedMotion() {
  return window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
}
/* Size a canvas to its parent width at devicePixelRatio; returns {ctx,W,H}. */
function fitCanvas(c, ratio, minH) {
  var W = (c.parentElement && c.parentElement.clientWidth) || 320;
  var H = Math.max(minH || 150, Math.round(W * (ratio || 0.5)));
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  c.width = W * dpr; c.height = H * dpr;
  c.style.width = W + 'px'; c.style.height = H + 'px';
  var ctx = c.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx: ctx, W: W, H: H };
}
/* Frame loop that dies when its keyed element leaves the DOM.
   fn must return false to stop early. */
var RAFS = {};
function loop(uid, keyEl, fn) {
  if (RAFS[uid]) cancelAnimationFrame(RAFS[uid]);
  function frame() {
    if (!keyEl.isConnected || fn() === false) { delete RAFS[uid]; return; }
    RAFS[uid] = requestAnimationFrame(frame);
  }
  RAFS[uid] = requestAnimationFrame(frame);
}
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function copyText(s, btn) {
  function flash() {
    if (!btn) return;
    var old = btn.textContent;
    btn.textContent = '✓ Copied';
    setTimeout(function () { btn.textContent = old; }, 1400);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(s).then(flash, function () { fallbackCopy(s); flash(); });
  } else { fallbackCopy(s); flash(); }
}
function fallbackCopy(s) {
  var t = document.createElement('textarea');
  t.value = s; t.style.position = 'fixed'; t.style.opacity = '0';
  document.body.appendChild(t); t.select();
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(t);
}
function pt(e) {
  return (e.touches && e.touches[0])
    ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
    : { x: e.clientX, y: e.clientY };
}


/* ── lab completion: telemetry + XP + badge signal ────────
   First completion of each lab is recorded (di_labs_done),
   awards XP where the page has an XP system, otherwise shows
   a small toast, and always emits `di-lab-complete` so the
   host page (badges, labs.html progress) can react. ── */
var LAB_DONE_KEY = 'di_labs_done';
function labsDone() {
  try { return JSON.parse(localStorage.getItem(LAB_DONE_KEY)) || {}; } catch (e) { return {}; }
}
function labComplete(name) {
  var done = labsDone();
  if (done[name]) return;
  done[name] = new Date().toISOString().slice(0, 10);
  try { localStorage.setItem(LAB_DONE_KEY, JSON.stringify(done)); } catch (e) {}
  var count = Object.keys(done).length;
  if (typeof window.addXP === 'function') {
    try { window.addXP(15, 'Interactive lab completed'); } catch (e) {}
  } else {
    labToast('🧪 Lab complete — ' + count + ' of ' + Object.keys(LABS).length);
  }
  try {
    document.dispatchEvent(new CustomEvent('di-lab-complete', { detail: { name: name, count: count } }));
  } catch (e) {}
}
function labToast(msg) {
  var t = document.createElement('div');
  t.className = 'lab-toast';
  t.setAttribute('role', 'status');
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function () { t.classList.add('in'); }, 30);
  setTimeout(function () { t.classList.remove('in'); setTimeout(function () { t.remove(); }, 400); }, 2600);
}
window.DI_LABS_DONE = labsDone;

/* ============================================================
   LAB: pixel-classifier
   "Cat or dog?" — guess from few pixels for more points, or
   reveal more and be surer. Confidence follows information.
   ============================================================ */
var PXC_CARDS = [
  { e: '🐕', a: 'dog' }, { e: '🐈', a: 'cat' }, { e: '🐩', a: 'dog' },
  { e: '🐱', a: 'cat' }, { e: '🐕‍🦺', a: 'dog' }, { e: '🐈‍⬛', a: 'cat' }
];
var PXC_BLUR = [13, 6, 0];       /* px of blur per reveal stage */
var PXC_PTS = [3, 2, 1];         /* points for guessing at each stage */
/* An 8×8 brightness map — roughly a cat's face, as the machine
   receives it: not a cat, just numbers. */
var PXC_MAP = [
  [240, 90, 230, 230, 230, 230, 90, 240],
  [240, 70, 90, 230, 230, 90, 70, 240],
  [230, 60, 45, 45, 45, 45, 60, 230],
  [140, 45, 20, 60, 60, 20, 45, 140],
  [140, 45, 60, 45, 45, 60, 45, 140],
  [230, 45, 45, 85, 85, 45, 45, 230],
  [240, 140, 45, 60, 60, 45, 140, 240],
  [240, 240, 140, 95, 95, 140, 240, 240]
];
LABS['pixel-classifier'] = {
  title: 'Cat or dog? How do you actually know?',
  tag: 'Machine learning',
  blurb: 'Guess from a blur for 3 points, or reveal more pixels and be surer for fewer. Then try to write the rule you used — and see what the machine actually receives.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-pxc-game" id="' + uid + '-game">' +
          '<div class="lab-pxc-photo" id="' + uid + '-photo" aria-live="polite">🐕</div>' +
          '<div class="lab-pxc-count" id="' + uid + '-count"></div>' +
          '<div class="lab-btn-row">' +
            '<button class="lab-btn lab-btn-primary" id="' + uid + '-cat">🐱 Cat</button>' +
            '<button class="lab-btn lab-btn-primary" id="' + uid + '-dog">🐶 Dog</button>' +
            '<button class="lab-btn" id="' + uid + '-more">🔍 Show more pixels</button>' +
          '</div>' +
          '<div class="lab-feedback" id="' + uid + '-fb" aria-live="polite"></div>' +
        '</div>' +
        '<div class="lab-pxc-done" id="' + uid + '-done" hidden>' +
          '<div class="lab-score" id="' + uid + '-tally"></div>' +
          '<p class="lab-note" id="' + uid + '-insight"></p>' +
          '<button class="lab-btn" id="' + uid + '-reveal">So… how did you actually know? →</button>' +
        '</div>' +
        '<div class="lab-pxc-teach" id="' + uid + '-teach" hidden>' +
          '<div class="lab-card-row">' +
            '<div class="lab-mini-card"><strong>1 · You\'ve quietly seen thousands</strong><br>' +
              'A lifetime of examples trained your brain. Nobody ever handed you a rulebook for "cat".</div>' +
            '<div class="lab-mini-card"><strong>2 · Now try to write the exact rule</strong><br>' +
              '"Pointy ears" — so is a fox a cat? "Has whiskers, fur, four legs, a tail" — true of both. Every hand-written rule breaks on an exception.</div>' +
            '<div class="lab-mini-card"><strong>3 · So we don\'t write the rule — we show examples</strong><br>' +
              'Hand a computer thousands of labelled photos and let it find the pattern itself. That is machine learning.</div>' +
          '</div>' +
          '<p class="lab-note" style="margin-top:14px"><strong>And this is what the machine actually receives</strong> — not a cat, a grid of brightness numbers:</p>' +
          '<div class="lab-pxc-grid" id="' + uid + '-grid" aria-label="An image as a grid of brightness numbers"></div>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-again" style="margin-top:12px">↻ Play again</button>' +
        '</div>' +
      '</div>';
  },
  init: function (uid) {
    var idx = 0, stage = 0, points = 0, right = 0, lock = false;
    var photo = el(uid + '-photo'); if (!photo) return;
    function show() {
      stage = 0;
      photo.textContent = PXC_CARDS[idx].e;
      photo.style.filter = 'blur(' + PXC_BLUR[0] + 'px)';
      el(uid + '-count').textContent = 'Photo ' + (idx + 1) + ' of ' + PXC_CARDS.length +
        ' · guess now for ' + PXC_PTS[0] + ' pts';
      el(uid + '-more').disabled = false;
      var fb = el(uid + '-fb'); fb.textContent = ''; fb.className = 'lab-feedback';
    }
    function more() {
      if (stage >= PXC_BLUR.length - 1) return;
      stage++;
      photo.style.filter = 'blur(' + PXC_BLUR[stage] + 'px)';
      el(uid + '-count').textContent = 'Photo ' + (idx + 1) + ' of ' + PXC_CARDS.length +
        ' · guess now for ' + PXC_PTS[stage] + (PXC_PTS[stage] === 1 ? ' pt' : ' pts');
      if (stage >= PXC_BLUR.length - 1) el(uid + '-more').disabled = true;
    }
    function guess(g) {
      if (lock) return;
      lock = true;
      var ok = g === PXC_CARDS[idx].a;
      photo.style.filter = 'none';
      var fb = el(uid + '-fb');
      if (ok) { right++; points += PXC_PTS[stage]; }
      fb.textContent = ok ? '✓ Yes! +' + PXC_PTS[stage] + (PXC_PTS[stage] === 1 ? ' pt' : ' pts')
        : '✗ Actually a ' + PXC_CARDS[idx].a;
      fb.className = 'lab-feedback ' + (ok ? 'ok' : 'no');
      setTimeout(function () {
        idx++;
        if (idx >= PXC_CARDS.length) {
          el(uid + '-game').hidden = true;
          el(uid + '-done').hidden = false;
          el(uid + '-tally').textContent = points + ' pts · ' + right + '/' + PXC_CARDS.length + ' correct';
          el(uid + '-insight').textContent =
            'Notice the trade you just made: guessing from a blur was worth more but riskier; more pixels meant more certainty for fewer points. A classifier\'s "confidence" works exactly like that — it rises with information, and it can still be wrong.';
        } else { show(); }
        lock = false;
      }, 850);
    }
    el(uid + '-cat').addEventListener('click', function () { guess('cat'); });
    el(uid + '-dog').addEventListener('click', function () { guess('dog'); });
    el(uid + '-more').addEventListener('click', more);
    el(uid + '-reveal').addEventListener('click', function () {
      el(uid + '-done').hidden = true;
      el(uid + '-teach').hidden = false;
      el(uid + '-grid').innerHTML = PXC_MAP.map(function (row) {
        return row.map(function (v) {
          var dark = v < 130;
          return '<span class="lab-pxc-cell" style="background:rgb(' + v + ',' + v + ',' + v + ');color:' +
            (dark ? '#eee' : '#333') + '">' + v + '</span>';
        }).join('');
      }).join('');
      labComplete('pixel-classifier');
    });
    el(uid + '-again').addEventListener('click', function () {
      idx = 0; stage = 0; points = 0; right = 0;
      el(uid + '-teach').hidden = true;
      el(uid + '-game').hidden = false;
      show();
    });
    show();
  }
};

/* ============================================================
   LAB: next-word
   Be the algorithm — then hand the dice to the model and
   discover what "temperature" really is.
   ============================================================ */
var NW_DEFAULT = {
  seed: 'The pupil opened the',
  tree: {
    /* __start__ is the seed sentinel — it must never collide with a real
       word key ("start" below is the continuation of "to start…") */
    __start__: [{ w: 'laptop', p: 52 }, { w: 'book', p: 31 }, { w: 'window', p: 12 }, { w: 'fridge', p: 5 }],
    laptop: [{ w: 'and', p: 58 }, { w: 'to', p: 42 }],
    book: [{ w: 'and', p: 61 }, { w: 'to', p: 39 }],
    window: [{ w: 'and', p: 55 }, { w: 'to', p: 45 }],
    fridge: [{ w: 'and', p: 64 }, { w: 'to', p: 36 }],
    and: [{ w: 'began', p: 47 }, { w: 'started', p: 33 }, { w: 'paused', p: 20 }],
    to: [{ w: 'check', p: 54 }, { w: 'start', p: 28 }, { w: 'avoid', p: 18 }],
    began: [{ w: 'revising.', p: 62 }, { w: 'typing.', p: 26 }, { w: 'again.', p: 12 }],
    started: [{ w: 'working.', p: 58 }, { w: 'reading.', p: 30 }, { w: 'typing.', p: 12 }],
    paused: [{ w: 'to think.', p: 57 }, { w: 'for a moment.', p: 31 }, { w: 'briefly.', p: 12 }],
    check: [{ w: 'the homework.', p: 55 }, { w: 'their notes.', p: 33 }, { w: 'the time.', p: 12 }],
    avoid: [{ w: 'the homework.', p: 58 }, { w: 'distraction.', p: 42 }],
    start: [{ w: 'revising.', p: 60 }, { w: 'again.', p: 40 }]
  }
};
LABS['next-word'] = {
  title: 'Be the algorithm — predict the next word',
  tag: 'How LLMs work',
  blurb: 'Pick the next word yourself — or hand the choice to the model and turn the temperature dial to see why the same prompt never gives the same answer twice.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-nw-sentence" id="' + uid + '-sent" aria-live="polite"></div>' +
        '<div class="lab-nw-opts" id="' + uid + '-opts"></div>' +
        '<div class="lab-slider-row"><label for="' + uid + '-temp">Temperature</label>' +
          '<input type="range" id="' + uid + '-temp" min="0" max="20" value="8">' +
          '<span class="lab-val" id="' + uid + '-tempv">0.8</span></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-model">🎲 Let the model pick</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-reset">↻ Start again</button>' +
        '</div>' +
        '<p class="lab-note" id="' + uid + '-note"></p>' +
      '</div>';
  },
  init: function (uid, data) {
    var D = (data && data.tree) ? data : NW_DEFAULT;
    var SEED_KEY = D.tree.__start__ ? '__start__' : 'start';
    var base, key, done;
    function temp() { return (+el(uid + '-temp').value) / 10; }
    function options() {
      return (D.tree[key] || []).slice().sort(function (a, b) { return b.p - a.p; });
    }
    function render() {
      el(uid + '-sent').innerHTML = esc(base) + (done ? '' : '<span class="lab-cursor"></span>');
      var opts = el(uid + '-opts');
      opts.innerHTML = '';
      el(uid + '-model').disabled = done;
      if (done) {
        el(uid + '-note').textContent =
          'A complete sentence — assembled one prediction at a time, never planned in advance. Start again with a different temperature and watch it branch differently.';
        labComplete('next-word');
        return;
      }
      options().forEach(function (o, i) {
        var b = document.createElement('button');
        b.className = 'lab-nw-opt' + (i === 0 ? ' top' : '');
        b.innerHTML = esc(o.w) + '<span class="lab-nw-pct">' + o.p + '%</span>';
        b.setAttribute('data-w', o.w);
        b.addEventListener('click', function () { pick(o.w); });
        opts.appendChild(b);
      });
    }
    function pick(word) {
      base += ' ' + word;
      var k = word.replace(/[^a-z]/gi, '').toLowerCase();
      if (/\.$/.test(word) || !D.tree[k]) done = true; else key = k;
      render();
    }
    function modelPick() {
      if (done) return;
      var T = temp(), list = options(), chosen;
      if (T <= 0.01) {
        chosen = list[0]; /* temperature 0: always the most likely */
      } else {
        /* sharpen or flatten the distribution: weight = p^(1/T) */
        var weights = list.map(function (o) { return Math.pow(o.p, 1 / T); });
        var total = weights.reduce(function (s, w) { return s + w; }, 0);
        var r = Math.random() * total, acc = 0;
        chosen = list[list.length - 1];
        for (var i = 0; i < list.length; i++) {
          acc += weights[i];
          if (r <= acc) { chosen = list[i]; break; }
        }
      }
      var wasTop = chosen === list[0];
      el(uid + '-note').textContent = T <= 0.01
        ? 'Temperature 0: the model always takes the single most likely word — same prompt, same answer, every time.'
        : 'At temperature ' + T.toFixed(1) + ' the model ' + (wasTop ? 'took the favourite this time' : 'gambled on "' + chosen.w + '" (' + chosen.p + '%)') +
          '. Higher temperature flattens the odds — more surprise, more variety, more risk of nonsense.';
      /* flash the chosen chip so the sampling is visible */
      var btn = el(uid + '-opts').querySelector('[data-w="' + chosen.w.replace(/"/g, '') + '"]');
      if (btn) {
        btn.classList.add('sel');
        setTimeout(function () { pick(chosen.w); }, reducedMotion() ? 60 : 420);
      } else { pick(chosen.w); }
    }
    el(uid + '-temp').addEventListener('input', function () {
      el(uid + '-tempv').textContent = temp().toFixed(1);
    });
    el(uid + '-model').addEventListener('click', modelPick);
    el(uid + '-reset').addEventListener('click', function () {
      base = D.seed; key = SEED_KEY; done = false;
      el(uid + '-note').textContent =
        'Pick words yourself — or press "Let the model pick" and turn the temperature dial. This is exactly the knob real chatbots expose: it decides how often the dice beat the favourite.';
      render();
    });
    el(uid + '-tempv').textContent = temp().toFixed(1);
    base = D.seed; key = SEED_KEY; done = false;
    el(uid + '-note').textContent =
      'Pick words yourself — or press "Let the model pick" and turn the temperature dial. This is exactly the knob real chatbots expose: it decides how often the dice beat the favourite.';
    render();
  }
};

/* ============================================================
   LAB: pattern-tiles
   Train → find the pattern → generate something new.
   ============================================================ */
LABS['pattern-tiles'] = {
  title: 'Watch a model learn — then generate',
  tag: 'Machine learning',
  blurb: 'Three examples of training data, one hidden rule. Let the model study them, state the pattern, then generate brand-new sequences that obey it.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-label">Training data — three examples</div>' +
        '<div class="lab-tiles" id="' + uid + '-data"></div>' +
        '<div class="lab-pattern placeholder" id="' + uid + '-pattern">Press "Study the data" and the model will tell you what it noticed…</div>' +
        '<div class="lab-label" style="margin-top:10px">Generated output</div>' +
        '<div class="lab-tiles" id="' + uid + '-out"></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-btn">Study the data →</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-reset">↻ Reset</button>' +
        '</div>' +
        '<p class="lab-note" id="' + uid + '-status">The training data is loaded above. When you\'re ready, let the model study it.</p>' +
      '</div>';
  },
  init: function (uid) {
    var PAL = { m: '#9b1844', c: '#009fe3', g: '#22c55e', y: '#f59e0b' };
    var EXAMPLES = [['g', 'y', 'c', 'c'], ['m', 'g', 'c', 'c'], ['y', 'm', 'c', 'c']]; /* rule: ends with two cyan */
    var state = 0;
    function tile(k, delay) {
      var t = document.createElement('span');
      t.className = 'lab-tile';
      t.style.background = PAL[k];
      if (!reducedMotion()) t.style.animationDelay = (delay || 0) + 'ms';
      return t;
    }
    function renderData() {
      var d = el(uid + '-data'); d.innerHTML = '';
      var delay = 0;
      EXAMPLES.forEach(function (row, ri) {
        row.forEach(function (k) { d.appendChild(tile(k, delay)); delay += 60; });
        if (ri < EXAMPLES.length - 1) {
          var sp = document.createElement('span'); sp.className = 'lab-tile-gap'; d.appendChild(sp);
        }
      });
    }
    function reset() {
      state = 0;
      renderData();
      el(uid + '-out').innerHTML = '';
      var p = el(uid + '-pattern');
      p.className = 'lab-pattern placeholder';
      p.textContent = 'Press "Study the data" and the model will tell you what it noticed…';
      var b = el(uid + '-btn'); b.disabled = false; b.textContent = 'Study the data →';
      el(uid + '-status').textContent = 'The training data is loaded above. When you\'re ready, let the model study it.';
    }
    function step() {
      var d = el(uid + '-data'), p = el(uid + '-pattern'),
          b = el(uid + '-btn'), status = el(uid + '-status');
      if (state === 0) {
        Array.prototype.forEach.call(d.querySelectorAll('.lab-tile'), function (t) { t.classList.add('studying'); });
        status.textContent = 'Studying… adjusting itself until the recurring structure stands out.';
        b.disabled = true;
        setTimeout(function () {
          Array.prototype.forEach.call(d.querySelectorAll('.lab-tile'), function (t) { t.classList.remove('studying'); });
          p.className = 'lab-pattern';
          p.innerHTML = 'Pattern learned: <strong>every example ends with two blue tiles</strong>, with a free mix before them. Nobody told it this — it inferred the rule purely from the data.';
          status.textContent = 'Pattern found. Now let it generate something new that obeys the rule.';
          b.disabled = false; b.textContent = 'Generate something new →';
          state = 1;
        }, reducedMotion() ? 200 : 1300);
      } else {
        var o = el(uid + '-out'); o.innerHTML = '';
        var keys = ['m', 'g', 'y', 'c'], seq = [];
        for (var i = 0; i < 2; i++) seq.push(keys[Math.floor(Math.random() * keys.length)]);
        seq.push('c', 'c');
        var delay = 0;
        seq.forEach(function (k) { o.appendChild(tile(k, delay)); delay += 90; });
        status.textContent = 'A brand-new sequence — it follows the learned rule (two blues at the end) but matches no example exactly. That is generation. Press again for another.';
        b.textContent = 'Generate another →';
        labComplete('pattern-tiles');
      }
    }
    el(uid + '-btn').addEventListener('click', step);
    el(uid + '-reset').addEventListener('click', reset);
    reset();
  }
};

/* ============================================================
   LAB: neuron-link
   Fire together, wire together — how repetition becomes a weight.
   ============================================================ */
LABS['neuron-link'] = {
  title: 'Fire together, wire together',
  tag: 'Neural networks',
  blurb: 'Send a signal between two neurons. Every firing thickens the connection — that strengthened link is what a "weight" is.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-canvas-wrap lab-canvas-dark"><canvas id="' + uid + '-cv"></canvas></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-fire">⚡ Fire the connection</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-reset">↻ Reset</button>' +
        '</div>' +
        '<p class="lab-note" id="' + uid + '-note">Press the button to send a signal between two neurons. Each firing thickens the link — exactly how a repeated action becomes a strong, easy pathway in a brain or a model. (An analogy, not an equivalence: a network doesn\'t feel or want anything.)</p>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var strength = 1, pulse = -1;
    var T = theme();
    function draw() {
      var f = fitCanvas(cv, 0.34, 130), ctx = f.ctx, W = f.W, H = f.H;
      ctx.clearRect(0, 0, W, H);
      var ax = W * 0.25, bx = W * 0.75, y = H / 2;
      ctx.strokeStyle = T.accent; ctx.globalAlpha = 0.25 + strength * 0.08;
      ctx.lineWidth = strength; ctx.beginPath(); ctx.moveTo(ax, y); ctx.lineTo(bx, y); ctx.stroke();
      ctx.globalAlpha = 1;
      if (pulse >= 0 && pulse <= 1) {
        var px = ax + (bx - ax) * pulse;
        ctx.beginPath(); ctx.arc(px, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = T.primaryLight; ctx.shadowColor = T.primaryLight; ctx.shadowBlur = 14;
        ctx.fill(); ctx.shadowBlur = 0;
        pulse += 0.035; if (pulse > 1) pulse = -1;
      }
      [[ax, T.primaryLight], [bx, T.accent]].forEach(function (n) {
        ctx.beginPath(); ctx.arc(n[0], y, 15, 0, Math.PI * 2);
        ctx.fillStyle = n[1]; ctx.shadowColor = n[1]; ctx.shadowBlur = 10; ctx.fill(); ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(10,14,25,.8)';
        ctx.beginPath(); ctx.arc(n[0], y, 8, 0, Math.PI * 2); ctx.fill();
      });
      ctx.fillStyle = T.muted; ctx.font = '600 11px ' + cssVar('--font', 'sans-serif');
      ctx.textAlign = 'center'; ctx.fillText('connection strength × ' + strength, W / 2, H - 10);
      ctx.textAlign = 'left';
    }
    el(uid + '-fire').addEventListener('click', function () {
      strength = Math.min(9, strength + 1); pulse = 0;
      el(uid + '-note').textContent = strength >= 8
        ? 'That link is now strong and fast — the pathway is "wired in". A trained model holds millions of these strengthened connections; their strengths are its weights.'
        : 'The connection just got a little stronger. Keep firing it — repetition is literally how learning is stored.';
      if (strength >= 8) labComplete('neuron-link');
      if (reducedMotion()) { pulse = -1; draw(); }
    });
    el(uid + '-reset').addEventListener('click', function () {
      strength = 1; pulse = -1;
      el(uid + '-note').textContent = 'Press the button to send a signal between two neurons. Each firing thickens the link — exactly how a repeated action becomes a strong, easy pathway in a brain or a model. (An analogy, not an equivalence: a network doesn\'t feel or want anything.)';
      draw();
    });
    if (reducedMotion()) draw();
    else loop(uid, cv, function () { draw(); });
  }
};

/* ============================================================
   LAB: cosine-compass
   Similarity is an angle — the CAH in SOHCAHTOA.
   ============================================================ */
LABS['cosine-compass'] = {
  title: 'The cosine compass — similarity is an angle',
  tag: 'Embeddings',
  blurb: 'Models judge how similar two meanings are by the angle between their vectors. Turn the dials and watch the cosine score respond.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-canvas-wrap lab-canvas-dark lab-canvas-sq"><canvas id="' + uid + '-cv"></canvas></div>' +
        '<div class="lab-slider-row"><label for="' + uid + '-a">Vector A · "revise"</label>' +
          '<input type="range" id="' + uid + '-a" min="0" max="360" value="30">' +
          '<span class="lab-val" id="' + uid + '-av">30°</span></div>' +
        '<div class="lab-slider-row"><label for="' + uid + '-b">Vector B · "study"</label>' +
          '<input type="range" id="' + uid + '-b" min="0" max="360" value="75">' +
          '<span class="lab-val" id="' + uid + '-bv">75°</span></div>' +
        '<div class="lab-cosine-out">cosine similarity <strong id="' + uid + '-score">—</strong>' +
          '<span class="lab-verdict" id="' + uid + '-verdict"></span></div>' +
        '<p class="lab-note">This is GCSE trigonometry doing frontier-AI work: cosine — the CAH in SOHCAHTOA — turns an angle into a number from −1 to 1. Same direction ≈ 1 (similar meaning), 90° = 0 (unrelated), opposite = −1.</p>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var T = theme();
    function draw() {
      var f = fitCanvas(cv, 0.72, 220), ctx = f.ctx, W = f.W, H = f.H;
      var cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.36;
      var aA = +el(uid + '-a').value, aB = +el(uid + '-b').value;
      el(uid + '-av').textContent = aA + '°';
      el(uid + '-bv').textContent = aB + '°';
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(148,163,184,.25)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx - R - 12, cy); ctx.lineTo(cx + R + 12, cy);
      ctx.moveTo(cx, cy - R - 12); ctx.lineTo(cx, cy + R + 12); ctx.stroke();
      function rad(d) { return -d * Math.PI / 180; }
      ctx.strokeStyle = 'rgba(148,163,184,.6)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cx, cy, R * 0.35, rad(aA), rad(aB), aB > aA); ctx.stroke();
      function vec(ang, color, label) {
        var x = cx + Math.cos(rad(ang)) * R, y = cy + Math.sin(rad(ang)) * R;
        ctx.strokeStyle = color; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y); ctx.stroke();
        ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill();
        ctx.font = '700 12px ' + cssVar('--font', 'sans-serif');
        ctx.fillText(label, x + (x > cx ? 8 : -52), y + (y > cy ? 16 : -8));
      }
      vec(aA, T.primaryLight, 'A · revise');
      vec(aB, T.accent, 'B · study');
      var diff = Math.abs(aA - aB) % 360; if (diff > 180) diff = 360 - diff;
      var cos = Math.cos(diff * Math.PI / 180);
      el(uid + '-score').textContent = cos.toFixed(2);
      var v = el(uid + '-verdict');
      if (cos > 0.85) { v.textContent = 'near-identical meaning'; v.className = 'lab-verdict ok'; }
      else if (cos > 0.3) { v.textContent = 'related'; v.className = 'lab-verdict mid'; }
      else if (cos > -0.3) { v.textContent = 'unrelated'; v.className = 'lab-verdict warn'; }
      else { v.textContent = 'opposite ends of meaning'; v.className = 'lab-verdict no'; }
    }
    var cosPlays = 0;
    function cosTouch() { draw(); if (++cosPlays >= 3) labComplete('cosine-compass'); }
    el(uid + '-a').addEventListener('input', cosTouch);
    el(uid + '-b').addEventListener('input', cosTouch);
    draw();
  }
};

/* ============================================================
   LAB: pipeline
   From training to answer — nine steps, two phases.
   ============================================================ */
var PIPE_STEPS = [
  { p: 'train', ico: '📚', term: 'Training data', text: 'It starts with a vast dataset — billions of human-made examples of text and images. Everything the model will ever "know" has to come from this pile.' },
  { p: 'train', ico: '🧠', term: 'Learning the patterns', text: 'The model reads the data over and over, nudging millions of internal numbers — its <strong>weights</strong> — until it gets good at predicting what comes next. Along the way it builds an <strong>embedding</strong>: a map of meaning where similar tokens sit close together.' },
  { p: 'train', ico: '⭐', term: 'Human feedback (RLHF)', text: 'Then people rate sample answers, and the model is tuned toward responses humans judged helpful, honest and safe. Real people do this labelling work — it is a hidden human supply chain behind every model.' },
  { p: 'train', ico: '🧊', term: 'The model is frozen', text: 'Training stops. What ships is a fixed set of weights — the distilled patterns, not a copy of the data. When you talk to it, it is no longer learning.' },
  { p: 'use', ico: '⌨️', term: 'Your prompt', text: 'You type a prompt — say, <em>"Why is the sky blue?"</em>. Nothing new is being learned now; the frozen model simply responds.' },
  { p: 'use', ico: '✂️', term: 'Tokenisation', text: 'Your text is chopped into <strong>tokens</strong> — words and word-pieces — and each token is swapped for its ID: its slot in the model\'s vocabulary.' },
  { p: 'use', ico: '📍', term: 'Embedding lookup', text: 'Each ID becomes a <strong>vector</strong> — a list of numbers placing it in the same map of meaning the model built during training.' },
  { p: 'use', ico: '🎲', term: 'Prediction, token by token', text: 'Using its learned weights, the model predicts the most likely next token — then feeds that back in and predicts the next, over and over. Generation is prediction on repeat.' },
  { p: 'use', ico: '💬', term: 'The response', text: 'The output tokens are turned back into words and streamed to your screen. Same machine, same maths, every single time you ask it anything.' }
];
LABS['pipeline'] = {
  title: 'From training to answer — the whole pipeline',
  tag: 'How LLMs work',
  blurb: 'Nine steps from a mountain of training data to the answer on your screen — and the moment in the middle where the model stops learning forever.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-pipe-track" id="' + uid + '-track"></div>' +
        '<div class="lab-pipe-stage" id="' + uid + '-stage">' +
          '<span class="lab-pipe-phase" id="' + uid + '-phase"></span>' +
          '<div class="lab-pipe-head"><span class="lab-pipe-ico" id="' + uid + '-ico"></span>' +
            '<strong id="' + uid + '-term"></strong>' +
            '<span class="lab-pipe-count" id="' + uid + '-count"></span></div>' +
          '<p class="lab-pipe-text" id="' + uid + '-text"></p>' +
        '</div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-prev">← Back</button>' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-play">▶ Play</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-next">Next →</button>' +
        '</div>' +
      '</div>';
  },
  init: function (uid) {
    var i = 0, timer = null;
    var track = el(uid + '-track'); if (!track) return;
    track.innerHTML = PIPE_STEPS.map(function (d, n) {
      return (n > 0 ? '<span class="lab-pipe-seg' + (d.p === 'use' ? ' use' : '') + '"></span>' : '') +
        '<button class="lab-pipe-dot' + (d.p === 'use' ? ' use' : '') + '" data-i="' + n + '" title="' + esc(d.term) + '" aria-label="Step ' + (n + 1) + ': ' + esc(d.term) + '"></button>';
    }).join('');
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
      el(uid + '-play').textContent = i >= PIPE_STEPS.length - 1 ? '↻ Replay' : '▶ Play';
    }
    function render() {
      var d = PIPE_STEPS[i];
      el(uid + '-ico').textContent = d.ico;
      el(uid + '-term').textContent = d.term;
      el(uid + '-text').innerHTML = d.text;
      el(uid + '-count').textContent = (i + 1) + ' / ' + PIPE_STEPS.length;
      if (i >= PIPE_STEPS.length - 1) labComplete('pipeline');
      var ph = el(uid + '-phase');
      ph.textContent = d.p === 'train' ? '① Training the model' : '② Using the model (inference)';
      ph.className = 'lab-pipe-phase ' + d.p;
      Array.prototype.forEach.call(track.querySelectorAll('.lab-pipe-dot'), function (dot, n) {
        dot.classList.toggle('act', n === i);
        dot.classList.toggle('done', n < i);
      });
      Array.prototype.forEach.call(track.querySelectorAll('.lab-pipe-seg'), function (s, n) {
        s.classList.toggle('done', n < i);
      });
    }
    track.addEventListener('click', function (e) {
      var d = e.target.closest('.lab-pipe-dot');
      if (!d) return;
      stop(); i = +d.getAttribute('data-i'); render();
    });
    el(uid + '-prev').addEventListener('click', function () { stop(); if (i > 0) { i--; render(); } });
    el(uid + '-next').addEventListener('click', function () { stop(); if (i < PIPE_STEPS.length - 1) { i++; render(); } });
    el(uid + '-play').addEventListener('click', function () {
      if (timer) { stop(); return; }
      if (i >= PIPE_STEPS.length - 1) i = 0;
      el(uid + '-play').textContent = '❚❚ Pause';
      render();
      timer = setInterval(function () {
        if (!track.isConnected || i >= PIPE_STEPS.length - 1) { stop(); return; }
        i++; render();
      }, 3400);
    });
    render();
  }
};

/* ============================================================
   LAB: classifier-mirror
   Confident nonsense — what fake certainty feels like.
   ============================================================ */
var CM_LABELS = [
  '93% likely to have a favourite mug',
  '88% probable playlist perfectionist',
  '91% suspected biscuit strategist',
  '84% likely to colour-code revision notes',
  '96% confirmed weekend lie-in specialist',
  '79% likely to reread the same book',
  '90% probable penalty-shootout optimist',
  '87% suspected houseplant whisperer',
  '82% likely to have strong opinions about fonts',
  '94% "would rescue the biscuits first"'
];
LABS['classifier-mirror'] = {
  title: 'The Classification Mirror',
  tag: 'Bias',
  blurb: 'Press the button and be classified — with total confidence and zero evidence. Exactly how a real classifier states labels it learned from biased data.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<button class="lab-btn lab-btn-primary" id="' + uid + '-go">🔍 Classify me</button>' +
        '<div class="lab-cm-out" id="' + uid + '-out" aria-live="polite"></div>' +
      '</div>';
  },
  init: function (uid) {
    el(uid + '-go').addEventListener('click', function () {
      var pool = CM_LABELS.slice(), pick = [];
      for (var k = 0; k < 2; k++) pick.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
      el(uid + '-out').innerHTML =
        pick.map(function (p) { return '<div class="lab-cm-verdict">' + esc(p) + '</div>'; }).join('') +
        '<div class="lab-cm-truth"><strong>The honest bit:</strong> none of that is real — it was picked at random. ' +
        'But a real classifier learns labels like these from <strong>biased human data</strong> and then states them ' +
        'with the same unearned confidence. A percentage is not proof. Remember the hiring tool that learned from a ' +
        'decade of mostly-male CVs: skewed data in, skewed decisions out — delivered as a confident score.</div>' +
        '<div class="lab-pattern" style="margin-top:12px"><strong>One question before you go:</strong> what would a percentage like "93%" need behind it before you should trust it?' +
          '<span class="lab-btn-row" style="margin-top:8px">' +
          '<button class="lab-btn lab-btn-sm" data-cm="decimals">More decimal places</button>' +
          '<button class="lab-btn lab-btn-sm" data-cm="evidence">Evidence, and a measured error rate</button>' +
          '<button class="lab-btn lab-btn-sm" data-cm="tone">A more serious tone</button></span>' +
          '<span class="lab-kb-hint" id="' + uid + '-cmfb" aria-live="polite"></span></div>';
    });
    el(uid).addEventListener('click', function (e) {
      var b = e.target.closest('[data-cm]');
      if (!b) return;
      var fb = el(uid + '-cmfb');
      if (b.getAttribute('data-cm') === 'evidence') {
        fb.textContent = '✓ Exactly — a number is only as good as the data behind it and the error rate someone actually measured. Precision and tone are costumes.';
        labComplete('classifier-mirror');
      } else {
        b.disabled = true;
        fb.textContent = 'That changes how it LOOKS, not whether it\'s true — which is precisely the trick. Try again.';
      }
    });
  }
};

/* ============================================================
   LAB: bland-paste
   Why AI output drifts to the average — feel the flattening.
   ============================================================ */
LABS['bland-paste'] = {
  title: 'The bland paste — feel the averaging happen',
  tag: 'Creativity',
  blurb: 'Distinctive, scratchy, human marks — and one slider that pulls everything toward the statistical mean. What gets averaged away is the interesting part.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-canvas-wrap"><canvas id="' + uid + '-cv"></canvas></div>' +
        '<div class="lab-slider-row"><label for="' + uid + '-f">Pull toward the average</label>' +
          '<input type="range" id="' + uid + '-f" min="0" max="100" value="8">' +
          '<span class="lab-val" id="' + uid + '-fv"></span></div>' +
        '<p class="lab-note">A model predicts the <strong>most likely</strong> output — and the most likely thing is, by definition, the average of everything it has seen. Left on defaults, everything drifts smooth, symmetrical and forgettable. Your taste is the outlier — and that\'s the value only you can add.</p>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var T = theme();
    function draw() {
      var f = fitCanvas(cv, 0.42, 170), ctx = f.ctx, W = f.W, H = f.H;
      var force = +el(uid + '-f').value;
      var lbl = el(uid + '-fv');
      lbl.textContent = force < 25 ? 'outliers preserved' : force < 75 ? 'systematic averaging…' : 'compressed bland-paste mean';
      if (force >= 75) labComplete('bland-paste');
      var g = ctx.createRadialGradient(W / 2, H / 2, 10, W / 2, H / 2, W * 0.7);
      g.addColorStop(0, 'rgba(198,75,116,.18)');
      g.addColorStop(0.55, 'rgba(0,159,227,.14)');
      g.addColorStop(1, 'rgba(148,163,184,.10)');
      ctx.fillStyle = T.card; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      var a = 1 - force / 100;
      /* the distinctive human marks fade as force rises */
      ctx.globalAlpha = Math.max(0.02, a);
      ctx.strokeStyle = T.text; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(W * 0.08, H * 0.2); ctx.lineTo(W * 0.24, H * 0.75); ctx.lineTo(W * 0.13, H * 0.9); ctx.stroke();
      ctx.beginPath(); ctx.arc(W * 0.8, H * 0.68, Math.min(W, H) * 0.16, 0.4, Math.PI * 1.5); ctx.stroke();
      ctx.fillStyle = T.primaryLight; ctx.fillRect(W * 0.42, H * 0.3, W * 0.07, W * 0.07);
      ctx.fillStyle = T.accent; ctx.fillRect(W * 0.52, H * 0.52, W * 0.11, W * 0.045);
      ctx.beginPath(); ctx.moveTo(W * 0.33, H * 0.82);
      for (var x = 0; x <= 10; x++) ctx.lineTo(W * 0.33 + x * W * 0.02, H * 0.82 + (x % 2 ? -10 : 10));
      ctx.strokeStyle = T.warning; ctx.lineWidth = 2; ctx.stroke();
      ctx.globalAlpha = 1;
      /* the regular grid tightens as force rises */
      if (force > 8) {
        ctx.strokeStyle = T.accent; ctx.globalAlpha = Math.min(0.5, force / 180); ctx.lineWidth = 0.6;
        var sp = Math.max(6, 34 - force / 4);
        for (var i = 0; i < W; i += sp) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke(); }
        for (var j = 0; j < H; j += sp) { ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(W, j); ctx.stroke(); }
        ctx.globalAlpha = 1;
      }
    }
    el(uid + '-f').addEventListener('input', draw);
    draw();
  }
};

/* ============================================================
   LAB: motion-field
   Body-reactive computation that never leaves the device.
   ============================================================ */
LABS['motion-field'] = {
  title: 'Tracked — but only by your own screen',
  tag: 'Privacy',
  blurb: 'Two hundred particles swarm your cursor at 60fps, computed entirely on this device. The surveillance question is not whether computers respond to you — it\'s where the computation happens and who keeps the data.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-canvas-wrap lab-canvas-dark"><canvas id="' + uid + '-cv"></canvas>' +
          '<span class="lab-canvas-tag">// runs on this device · nothing uploaded</span></div>' +
        '<div class="lab-slider-row"><label for="' + uid + '-t">Trail length</label>' +
          '<input type="range" id="' + uid + '-t" min="1" max="60" value="10">' +
        '</div>' +
        '<p class="lab-note">Move your mouse or finger across the field. Everything you see is computed locally — close the tab and no trace of your movement exists anywhere.</p>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var T = theme();
    var f = fitCanvas(cv, 0.42, 180), ctx = f.ctx, W = f.W, H = f.H;
    var parts = [], mx = -999, my = -999, tracing = false;
    var COLS = [T.primaryLight, T.accent];
    var N = reducedMotion() ? 60 : 170;
    for (var i = 0; i < N; i++) {
      parts.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2,
        r: Math.random() * 2 + 1, c: COLS[i % 2]
      });
    }
    var traces = 0;
    function setPointer(e) {
      var r = cv.getBoundingClientRect(), p = pt(e);
      mx = p.x - r.left; my = p.y - r.top; tracing = true;
      if (++traces === 40) labComplete('motion-field');
    }
    cv.addEventListener('mousemove', setPointer);
    cv.addEventListener('touchmove', function (e) { setPointer(e); }, { passive: true });
    cv.addEventListener('mouseleave', function () { tracing = false; });
    cv.addEventListener('touchend', function () { tracing = false; });
    ctx.fillStyle = '#0b1220'; ctx.fillRect(0, 0, W, H);
    loop(uid, cv, function () {
      var trail = (+el(uid + '-t').value) / 100;
      ctx.fillStyle = 'rgba(11,18,32,' + (0.04 + trail * 0.9) + ')';
      ctx.fillRect(0, 0, W, H);
      parts.forEach(function (p) {
        if (tracing) {
          var dx = mx - p.x, dy = my - p.y, d = Math.hypot(dx, dy) || 1;
          if (d < 150) { p.vx += (dx / d) * 0.22; p.vy += (dy / d) * 0.22; }
        }
        p.vx += (Math.random() - 0.5) * 0.1; p.vy += (Math.random() - 0.5) * 0.1;
        var sp = Math.hypot(p.vx, p.vy);
        if (sp > 3.6) { p.vx = p.vx / sp * 3.6; p.vy = p.vy / sp * 3.6; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c; ctx.fill();
      });
    });
  }
};

/* ============================================================
   LAB: code-sandbox
   Write code on the left, watch it run on the right.
   ============================================================ */
var SANDBOX_STARTER = [
  '<!-- Everything inside <body> is a labelled box called a tag. -->',
  '<h1 style="color:#9b1844">My first page</h1>',
  '',
  '<p>Change this text, then press <b>Run</b>.</p>',
  '',
  '<!-- The button below calls the function in the script. -->',
  '<button onclick="cheer()">Press me</button>',
  '<p id="out"></p>',
  '',
  '<script>',
  '  // A function is a named set of instructions.',
  '  function cheer() {',
  '    document.getElementById("out").textContent =',
  '      "You just ran code you can read. 🎉";',
  '  }',
  '<' + '/script>'
].join('\n');
LABS['code-sandbox'] = {
  title: 'The live code sandbox',
  tag: 'Making',
  blurb: 'Type HTML on the left; it runs instantly, safely, on the right. Whether you or an AI wrote the code, the rule is the same: you must be able to read it.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-sandbox">' +
          '<div class="lab-sandbox-col"><div class="lab-label">Your code</div>' +
            '<textarea class="lab-sandbox-code" id="' + uid + '-code" spellcheck="false" aria-label="HTML code editor"></textarea></div>' +
          '<div class="lab-sandbox-col"><div class="lab-label">Live preview</div>' +
            '<iframe class="lab-sandbox-frame" id="' + uid + '-frame" sandbox="allow-scripts" title="Live preview of your code"></iframe></div>' +
        '</div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-run">▶ Run</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-reset">↻ Reset</button>' +
        '</div>' +
        '<p class="lab-note">Try three changes: edit the heading, add a second <code>&lt;p&gt;</code>, change the colour. Then point at each tag and say out loud what it does — if you can\'t, ask until you can. No black boxes of your own.</p>' +
      '</div>';
  },
  init: function (uid, data) {
    var starter = (data && data.starter) || SANDBOX_STARTER;
    var code = el(uid + '-code'); if (!code) return;
    function run() {
      el(uid + '-frame').srcdoc = code.value;
      if (code.value !== starter) labComplete('code-sandbox');
    }
    code.value = starter;
    el(uid + '-run').addEventListener('click', run);
    el(uid + '-reset').addEventListener('click', function () { code.value = starter; run(); });
    run();
  }
};

/* ============================================================
   LAB: prompt-coach
   Heuristic feedback on a draft prompt — no API, fully private.
   ============================================================ */
var PC_CHECKS = [
  { re: /(act as|you are|in the role of|as an? [a-z ]{2,30}(tutor|teacher|examiner|designer|developer|coach|editor|expert))/i,
    yes: '<strong>Persona set.</strong> Giving the AI a role sharpens everything it produces.',
    no: '<strong>Give it a persona.</strong> Start with "Act as an experienced A-Level examiner…" — the P in PTFC.' },
  { re: /(explain|write|build|create|summarise|summarize|compare|plan|list|design|make|generate|draft|review)\b/i,
    yes: '<strong>Clear task verb.</strong> It knows what job it\'s doing.',
    no: '<strong>Name the task.</strong> One clear verb: explain, build, compare, draft… — the T in PTFC.' },
  { re: /(bullet|numbered|steps|table|paragraph|sections?|format|single (html )?(file|page)|one (html )?(file|page)|self.?contained|\b\d+ (words|sentences|points|questions)\b)/i,
    yes: '<strong>Format specified.</strong> You\'ve told it what shape the answer should take.',
    no: '<strong>Specify the format.</strong> "Two-sentence overview, then numbered steps, then 3 self-test questions" — the F in PTFC.' },
  { re: /(year ?\d{1,2}|gcse|a.?level|i (already )?(know|understand|confuse|struggle)|my (exam|test|coursework)|beginner|never (done|used)|aged? \d{1,2}|for a \d{1,2}.year.old)/i,
    yes: '<strong>Context given.</strong> It can pitch the level correctly.',
    no: '<strong>Add your context.</strong> Year group, what you already know, what you confuse, when the exam is — the C in PTFC.' },
  { re: /(who (knows nothing|is new)|audience|for (students|pupils|teenagers|a friend|my class)|explain (it )?(simply|clearly))/i,
    yes: '<strong>Audience named.</strong> The output will meet its reader.',
    no: '<strong>Name the audience.</strong> Who is this for? "A Year 9 pupil who knows nothing about this" changes everything.' },
  { re: /(analog(y|ies)|example|diagram|step.by.step|comment(ed)? (the )?code|explain each|so i can (read|understand|check))/i,
    yes: '<strong>Built to be understood.</strong> You\'ve asked for output you can actually learn from.',
    no: '<strong>Ask to understand, not just receive.</strong> Request analogies, worked examples, or commented code you can read.' },
  { re: /(not generic|avoid (the )?(template|clich|generic)|original|distinctive|in my (style|voice)|don.?t (be|sound) (bland|generic)|reject (the )?default)/i,
    yes: '<strong>Pushing against the average.</strong> You\'ve told it not to serve the bland default.',
    no: '<strong>Defy the default.</strong> Add "avoid generic templates" or "in my own style" — otherwise you get the statistical average.' }
];
LABS['prompt-coach'] = {
  title: 'The prompt coach',
  tag: 'Prompting',
  blurb: 'Paste a draft prompt and get instant, private feedback against the PTFC framework plus three habits of strong prompters. No AI involved — just honest heuristics.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<textarea class="lab-textarea" id="' + uid + '-in" rows="4" placeholder="Paste or write your draft prompt here…" aria-label="Draft prompt"></textarea>' +
        '<div class="lab-btn-row"><button class="lab-btn lab-btn-primary" id="' + uid + '-check">Coach my prompt</button></div>' +
        '<div class="lab-pc-out" id="' + uid + '-out" aria-live="polite"></div>' +
      '</div>';
  },
  init: function (uid) {
    el(uid + '-check').addEventListener('click', function () {
      var v = el(uid + '-in').value || '';
      var out = el(uid + '-out');
      if (v.trim().length < 8) {
        out.innerHTML = '<p class="lab-note">Write a sentence or two first — then I\'ll coach it.</p>';
        return;
      }
      var n = 0;
      var rows = PC_CHECKS.map(function (c) {
        var ok = c.re.test(v);
        if (ok) n++;
        return '<div class="lab-pc-item ' + (ok ? 'ok' : 'no') + '"><span class="lab-pc-ic">' + (ok ? '✓' : '+') + '</span><span>' + (ok ? c.yes : c.no) + '</span></div>';
      }).join('');
      if (n >= 6) labComplete('prompt-coach');
      var verdict = n >= 6 ? 'strong prompt' : n >= 4 ? 'getting there — add the missing ingredients' : 'a starting point — keep building it';
      out.innerHTML = '<div class="lab-pc-score">' + n + ' / ' + PC_CHECKS.length + ' ingredients · ' + verdict + '</div>' + rows;
    });
  }
};

/* ============================================================
   LAB: day-one
   Ten questions to put to a model before you make anything.
   ============================================================ */
var DAY_ONE_QS = [
  { q: 'Can you feel anything?', gloss: 'Watch for performance where experience is claimed.' },
  { q: 'Do you understand the words you are writing?', gloss: 'Fluent language is not the same as comprehension.' },
  { q: 'Where did your training data come from?', gloss: 'Sources, consent — and who never got credited.' },
  { q: 'Can you be completely wrong and still sound certain?', gloss: 'Ask it to explain a fact you know is false.' },
  { q: 'Are you biased? Give me three concrete examples.', gloss: 'Can it see its own blind spots?' },
  { q: 'How do you decide what you will and won\'t answer?', gloss: 'Surface the guardrails a company chose for it.' },
  { q: 'Who decided what you\'re not allowed to say?', gloss: 'Rules are human choices, not laws of nature.' },
  { q: 'Does being polite to you change your answers?', gloss: 'Test it: does "please" alter the output?' },
  { q: 'Do all AIs have the same rules as you?', gloss: 'Compare with another model if you can.' },
  { q: 'Have you ever had an original idea?', gloss: 'Creating versus recombining — press it on the difference.' }
];
LABS['day-one'] = {
  title: 'Interrogate the machine — ten questions for day one',
  tag: 'Critical thinking',
  blurb: 'Before you make anything with an AI, put it on the record. Push back on the answers. Notice what it dodges, what it performs, and what it genuinely reveals.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-q-grid">' +
        DAY_ONE_QS.map(function (d, i) {
          return '<div class="lab-q-card"><div class="lab-q-num">' + (i + 1) + '</div>' +
            '<div class="lab-q-body"><div class="lab-q-text">“' + esc(d.q) + '”</div>' +
            '<div class="lab-q-gloss">' + esc(d.gloss) + '</div></div>' +
            '<button class="lab-btn lab-btn-sm lab-q-copy" data-i="' + i + '">Copy</button></div>';
        }).join('') +
        '</div>' +
        '<p class="lab-note">There are no <em>correct</em> answers here — only revealing ones. Keep what you find; you\'ll pick these apart as the course goes on.</p>' +
      '</div>';
  },
  init: function (uid) {
    var dayCopies = 0;
    el(uid).addEventListener('click', function (e) {
      var b = e.target.closest('.lab-q-copy');
      if (!b) return;
      copyText(DAY_ONE_QS[+b.getAttribute('data-i')].q, b);
      if (++dayCopies >= 3) labComplete('day-one');
    });
  }
};

/* ============================================================
   LAB: word-galaxy
   A guided, four-idea tour of how a model pictures language.
   ============================================================ */
var GX_STEPS = [
  { no: 'Idea 1 of 4', title: 'Every word gets a place',
    body: 'A language model doesn\'t store a dictionary. It gives every word — and every fragment of a word — a position in a vast space, like a star in a night sky. The coordinates were learned by reading enormous amounts of text.',
    note: 'Try it: drag the sky around. Every word has a home position before any sentence nudges it.' },
  { no: 'Idea 2 of 4', title: 'Distance is meaning',
    body: 'Words used in similar ways end up near each other, forming bright clusters: the studio words huddle together while the finance words drift far away. The model doesn\'t understand a word the way you do — it only knows which other stars it tends to sit beside.',
    note: 'Notice: related words cluster; unrelated ones are light-years apart. Closeness is the whole trick.' },
  { no: 'Idea 3 of 4', title: 'A prompt traces a path',
    body: 'When you write a prompt, you draw a route between stars. Your words tell the model where in the sky to pay attention — and a word\'s position even shifts with its neighbours: "bank" sits somewhere different in "river bank" than in "savings bank". A vague prompt is a faint wandering line; a precise one is a deliberate path.',
    note: 'This is why wording matters: change one word and the path starts in a different region entirely.' },
  { no: 'Idea 4 of 4', title: 'It reaches for the nearest plausible star',
    body: 'To respond, the model asks: given the path so far, which star most likely comes next? It adds that one, then repeats. No plan, no intention — just very well-informed guesses about what usually follows.',
    note: 'The big reveal: generation is prediction, one star at a time. Knowing this is how you stop being mystified and start steering.' }
];
var GX_CLUSTERS = [
  { cx: -140, cy: -70, color: '#c64b74', words: ['essay', 'paragraph', 'argument', 'evidence', 'quote', 'draft'] },
  { cx: 165, cy: 85, color: '#5db8e8', words: ['invoice', 'ledger', 'tax', 'loan', 'budget'] },
  { cx: 60, cy: -150, color: '#b08ae0', words: ['verse', 'rhyme', 'stanza', 'metaphor'] },
  { cx: -110, cy: 135, color: '#6fcf97', words: ['engine', 'piston', 'gear', 'torque'] }
];
LABS['word-galaxy'] = {
  title: 'The word galaxy — how a model pictures language',
  tag: 'How LLMs work',
  blurb: 'Four ideas, one starfield: every word is a star, distance is meaning, a prompt traces a path, and the next word is the nearest plausible star.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-canvas-wrap lab-canvas-dark lab-canvas-tall"><canvas id="' + uid + '-cv"></canvas></div>' +
        '<div class="lab-gx-panel">' +
          '<div class="lab-label" id="' + uid + '-no"></div>' +
          '<h4 class="lab-gx-title" id="' + uid + '-title"></h4>' +
          '<p class="lab-gx-body" id="' + uid + '-body"></p>' +
          '<p class="lab-note" id="' + uid + '-gnote"></p>' +
          '<div class="lab-btn-row">' +
            '<button class="lab-btn lab-btn-sm" id="' + uid + '-prev">← Back</button>' +
            '<span class="lab-gx-dots" id="' + uid + '-dots"></span>' +
            '<button class="lab-btn lab-btn-primary" id="' + uid + '-next">Next idea →</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var stars = [], step = 0, view = { x: 0, y: 0 }, anim = 0;
    GX_CLUSTERS.forEach(function (g, gi) {
      g.words.forEach(function (w, wi) {
        var ang = (wi / g.words.length) * Math.PI * 2 + gi;
        var rad = 22 + Math.random() * 44;
        stars.push({ x: g.cx + Math.cos(ang) * rad, y: g.cy + Math.sin(ang) * rad, w: w, color: g.color, gi: gi, r: 1.8 + Math.random() * 1.4 });
      });
    });
    for (var i = 0; i < 80; i++) {
      stars.push({ x: (Math.random() - 0.5) * 820, y: (Math.random() - 0.5) * 560, w: null, color: 'rgba(200,215,235,.5)', gi: -1, r: Math.random() * 1.1 + 0.3 });
    }
    var dots = el(uid + '-dots');
    dots.innerHTML = GX_STEPS.map(function (_, n) { return '<span class="lab-gx-dot" data-i="' + n + '"></span>'; }).join('');
    function setStep(n) {
      step = Math.max(0, Math.min(GX_STEPS.length - 1, n));
      var s = GX_STEPS[step];
      el(uid + '-no').textContent = s.no;
      el(uid + '-title').textContent = s.title;
      el(uid + '-body').textContent = s.body;
      el(uid + '-gnote').textContent = s.note;
      el(uid + '-prev').disabled = step === 0;
      el(uid + '-next').textContent = step === GX_STEPS.length - 1 ? '↻ Start over' : 'Next idea →';
      if (step === GX_STEPS.length - 1) labComplete('word-galaxy');
      Array.prototype.forEach.call(dots.children, function (d, n2) { d.classList.toggle('on', n2 === step); });
    }
    el(uid + '-prev').addEventListener('click', function () { setStep(step - 1); });
    el(uid + '-next').addEventListener('click', function () { setStep(step === GX_STEPS.length - 1 ? 0 : step + 1); });
    dots.addEventListener('click', function (e) {
      var d = e.target.closest('.lab-gx-dot'); if (d) setStep(+d.getAttribute('data-i'));
    });
    var dragging = false, lx = 0, ly = 0;
    cv.addEventListener('pointerdown', function (e) { dragging = true; lx = e.clientX; ly = e.clientY; });
    window.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      view.x += e.clientX - lx; view.y += e.clientY - ly; lx = e.clientX; ly = e.clientY;
    });
    window.addEventListener('pointerup', function () { dragging = false; });
    function draw() {
      var f = fitCanvas(cv, 0.5, 220), ctx = f.ctx, W = f.W, H = f.H;
      anim += 0.016;
      ctx.fillStyle = '#0a1020'; ctx.fillRect(0, 0, W, H);
      var ox = W / 2 + view.x, oy = H / 2 + view.y;
      function P(s) { return { x: ox + s.x * 0.9, y: oy + s.y * 0.9 }; }
      if (step >= 2) {
        var path = stars.filter(function (s) { return s.gi === 0; });
        ctx.strokeStyle = 'rgba(198,75,116,.6)'; ctx.lineWidth = 1.2; ctx.setLineDash([4, 4]);
        ctx.beginPath();
        var lim = step >= 3 ? path.length : Math.max(2, Math.floor(path.length * 0.7));
        for (var i2 = 0; i2 < lim; i2++) {
          var p2 = P(path[i2]);
          if (i2 === 0) ctx.moveTo(p2.x, p2.y); else ctx.lineTo(p2.x, p2.y);
        }
        ctx.stroke(); ctx.setLineDash([]);
      }
      stars.forEach(function (s) {
        var p = P(s);
        var tw = reducedMotion() ? 1 : 0.65 + 0.35 * Math.sin(anim * 2 + s.x * 0.05);
        var alpha = (step >= 1 && s.gi < 0) ? 0.22 : 1;
        ctx.globalAlpha = alpha * tw;
        ctx.beginPath(); ctx.arc(p.x, p.y, s.r * (s.gi >= 0 ? 1.6 : 1), 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color; ctx.shadowBlur = s.gi >= 0 ? 8 : 0;
        ctx.fill(); ctx.shadowBlur = 0; ctx.globalAlpha = 1;
        if (s.w) {
          ctx.fillStyle = 'rgba(226,232,240,.85)';
          ctx.font = '600 10px ' + cssVar('--font', 'sans-serif');
          ctx.fillText(s.w, p.x + 6, p.y + 3);
        }
      });
      if (step >= 3) {
        var anchor = stars.filter(function (s) { return s.gi === 0; });
        var last = anchor[anchor.length - 1];
        if (last) {
          var lp = P(last);
          var pr = reducedMotion() ? 5 : 4 + Math.sin(anim * 4) * 2.5;
          ctx.beginPath(); ctx.arc(lp.x, lp.y, 10 + (reducedMotion() ? 0 : Math.sin(anim * 4) * 4), 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(198,75,116,.8)'; ctx.lineWidth = 2; ctx.stroke();
          ctx.fillStyle = '#c64b74'; ctx.beginPath(); ctx.arc(lp.x, lp.y, pr, 0, Math.PI * 2); ctx.fill();
          ctx.font = '700 11px ' + cssVar('--font', 'sans-serif');
          ctx.textAlign = 'center'; ctx.fillText('next star ↓', lp.x, lp.y - 16); ctx.textAlign = 'left';
        }
      }
    }
    setStep(0);
    if (reducedMotion()) {
      draw();
      cv.addEventListener('pointermove', draw);
      [uid + '-prev', uid + '-next'].forEach(function (id) { el(id).addEventListener('click', draw); });
      dots.addEventListener('click', draw);
    } else {
      loop(uid, cv, function () { draw(); });
    }
  }
};

/* Real word embeddings: GloVe wiki-gigaword-50 (Pennington, Socher & Manning,
   Stanford NLP, Public Domain-style ODC-PDDL data), 387 words, L2-normalised,
   centred and PCA-projected to 16 dims. Dims 0-1 are the 2-D layout;
   cosine similarity is measured on all 16 dims (r=0.954 vs the full vectors). */
var MS_VEC = {"essay":[-0.369,-0.246,0.554,0.137,0.248,-0.089,0.304,0.094,-0.023,0.293,0.069,0.251,-0.079,0.151,-0.160,0.025],"exam":[-0.217,-0.525,0.357,0.077,-0.018,-0.289,-0.040,-0.393,0.028,-0.003,0.301,0.109,-0.223,0.274,-0.046,-0.072],"revise":[0.141,-0.725,0.029,0.438,-0.043,-0.191,0.205,-0.074,-0.137,0.078,0.087,0.217,-0.207,0.123,0.101,0.085],"revision":[-0.095,-0.875,0.032,0.234,0.078,-0.140,0.315,0.040,-0.273,0.163,0.260,0.230,-0.182,0.054,-0.125,0.146],"homework":[-0.271,0.162,0.309,0.431,-0.164,-0.349,-0.154,-0.276,0.155,0.004,0.065,0.013,-0.211,0.177,-0.080,-0.153],"lesson":[0.183,0.325,0.285,0.283,0.164,-0.101,0.161,-0.253,0.070,0.068,-0.008,0.033,-0.089,-0.021,-0.059,0.012],"teacher":[-0.091,0.056,0.600,-0.144,-0.249,-0.143,0.058,-0.151,0.098,0.043,0.089,-0.162,-0.001,-0.070,-0.113,-0.044],"pupil":[-0.363,-0.411,0.482,-0.030,-0.225,-0.270,0.098,-0.093,-0.142,0.102,0.225,-0.316,-0.258,-0.120,-0.053,-0.184],"student":[0.120,-0.337,0.484,-0.162,-0.209,-0.087,0.006,-0.184,0.084,0.030,-0.009,-0.123,-0.014,-0.029,-0.017,-0.093],"school":[-0.046,-0.303,0.336,-0.311,-0.121,-0.052,0.034,-0.229,0.250,-0.007,-0.073,-0.103,-0.145,-0.032,-0.063,-0.026],"notes":[-0.136,-0.335,0.124,0.243,0.104,-0.061,0.126,0.296,0.078,0.287,0.072,0.029,0.072,0.203,-0.044,0.002],"grade":[-0.327,-0.450,0.158,-0.049,-0.045,-0.163,0.083,-0.146,0.091,-0.048,0.156,-0.231,-0.234,0.016,-0.095,0.068],"read":[0.066,0.145,0.296,0.204,0.089,0.011,-0.094,0.177,0.136,0.226,0.046,0.281,0.040,0.152,0.022,-0.108],"write":[0.190,-0.092,0.265,0.395,0.005,-0.091,0.033,0.183,0.094,0.160,-0.107,0.025,-0.017,0.163,-0.160,-0.151],"learn":[0.212,0.362,0.227,0.278,-0.013,0.062,-0.008,-0.249,0.191,-0.153,-0.094,-0.020,0.032,0.069,0.042,-0.142],"question":[0.617,0.037,0.101,0.251,0.001,0.069,0.133,-0.032,0.042,0.083,0.082,0.255,-0.118,-0.001,0.059,0.108],"answer":[0.509,0.172,0.148,0.359,0.035,-0.053,-0.043,-0.023,0.049,0.094,0.093,0.284,-0.022,0.045,0.069,0.010],"book":[-0.156,-0.056,0.326,0.098,0.142,0.071,0.176,0.357,0.086,0.128,-0.130,0.149,-0.016,0.179,-0.130,0.061],"library":[-0.390,-0.712,0.360,-0.088,-0.014,0.031,-0.014,0.019,0.287,0.184,-0.303,0.036,-0.040,0.061,0.139,-0.090],"study":[0.043,-0.546,0.262,0.071,-0.096,0.172,0.264,-0.241,0.213,-0.016,0.076,0.024,0.064,0.191,-0.117,0.058],"test":[0.066,-0.367,0.016,-0.053,0.194,-0.126,-0.039,-0.246,-0.084,-0.290,0.256,0.200,0.047,0.101,-0.063,0.039],"classroom":[-0.329,-0.254,0.367,0.105,-0.054,-0.053,-0.280,-0.371,0.221,0.199,0.091,-0.020,-0.230,-0.064,0.026,-0.150],"university":[0.002,-0.525,0.405,-0.337,-0.046,-0.076,0.224,-0.318,0.230,-0.054,-0.109,0.011,0.119,0.054,0.074,0.000],"love":[-0.018,0.725,0.201,0.075,0.121,0.094,0.062,0.147,-0.044,0.047,-0.149,-0.142,0.014,0.111,-0.084,0.020],"fear":[0.484,0.229,-0.141,0.179,-0.123,0.260,0.145,-0.196,-0.248,0.035,-0.079,0.067,0.079,-0.005,0.117,-0.059],"joy":[-0.223,0.737,0.105,-0.023,0.109,-0.056,0.088,-0.076,-0.213,0.246,-0.169,-0.096,0.236,0.107,0.100,-0.100],"hope":[0.565,0.281,-0.084,0.084,0.059,-0.010,0.106,-0.112,0.017,0.043,-0.209,-0.076,0.020,0.189,0.179,0.031],"worry":[0.502,0.331,-0.208,0.367,-0.125,0.029,0.091,-0.226,-0.083,-0.044,-0.108,-0.023,0.049,0.023,0.089,0.009],"calm":[0.322,0.459,-0.193,0.036,0.014,0.026,0.058,-0.341,-0.230,0.386,0.031,0.082,0.108,-0.170,0.139,-0.033],"happy":[0.271,0.863,-0.013,0.126,0.095,-0.147,-0.017,0.017,0.003,-0.027,-0.163,0.015,-0.055,-0.032,-0.080,0.026],"sad":[0.060,0.812,0.119,0.128,0.078,-0.038,0.170,-0.198,-0.240,0.275,-0.068,0.134,-0.042,-0.166,-0.083,0.142],"angry":[0.274,0.569,-0.070,0.006,-0.105,-0.001,-0.025,-0.030,-0.304,0.192,-0.025,0.193,0.146,-0.208,0.093,-0.278],"proud":[0.205,0.767,0.159,0.064,0.062,-0.092,0.181,-0.052,-0.120,-0.106,-0.294,-0.015,-0.081,-0.205,0.131,0.019],"nervous":[0.171,0.478,-0.057,0.225,-0.052,0.032,-0.107,-0.353,-0.254,-0.006,0.136,-0.085,0.265,-0.009,0.044,0.028],"excited":[0.139,0.702,0.028,0.252,0.196,-0.125,-0.093,-0.314,-0.033,-0.050,-0.126,-0.058,0.138,-0.071,0.060,-0.017],"feel":[0.408,0.728,-0.040,0.237,0.053,0.076,0.029,-0.153,-0.047,0.003,-0.058,-0.089,0.014,-0.130,0.023,-0.035],"heart":[-0.033,0.239,0.043,-0.087,-0.128,0.173,0.005,-0.195,-0.094,0.033,0.143,-0.139,0.124,0.190,-0.063,0.114],"dream":[0.084,0.537,0.193,0.007,0.232,0.013,-0.003,-0.002,-0.038,-0.045,-0.299,-0.169,-0.117,0.064,-0.013,0.173],"lonely":[-0.417,0.925,0.102,0.015,-0.047,0.091,-0.069,-0.120,-0.258,0.123,-0.213,-0.044,-0.145,-0.027,-0.122,0.014],"brave":[-0.026,0.810,0.099,0.085,0.153,-0.008,0.100,-0.088,-0.377,-0.093,-0.145,-0.035,-0.123,-0.107,0.110,-0.151],"anxious":[0.404,0.628,-0.130,0.270,-0.143,-0.108,-0.031,-0.335,-0.188,0.201,-0.147,0.006,0.118,-0.076,0.177,-0.110],"grief":[-0.043,0.602,0.087,0.090,-0.152,0.062,0.072,-0.290,-0.287,0.416,-0.041,-0.073,0.192,0.138,0.206,-0.133],"delight":[-0.383,0.749,-0.054,0.190,0.155,-0.135,0.061,-0.081,-0.261,0.206,-0.100,-0.054,0.165,-0.018,0.157,-0.270],"code":[-0.154,-0.745,0.197,0.239,0.071,0.145,-0.068,0.076,-0.057,-0.110,0.110,0.361,-0.194,-0.036,-0.037,-0.035],"computer":[-0.092,-0.637,0.238,0.286,0.045,0.076,-0.349,-0.035,0.043,-0.131,-0.044,-0.023,0.199,-0.048,0.072,0.140],"algorithm":[-0.699,-0.650,0.162,0.367,0.131,-0.080,-0.106,-0.072,-0.157,-0.157,0.174,0.210,-0.240,-0.111,0.052,-0.084],"data":[-0.029,-0.959,0.004,0.344,0.043,0.173,-0.112,-0.085,-0.092,0.034,0.042,0.092,0.143,0.129,0.050,0.003],"model":[-0.269,-0.559,0.260,0.087,0.095,0.208,-0.117,0.047,-0.019,-0.099,0.032,-0.131,-0.113,-0.216,-0.074,0.248],"robot":[-0.652,-0.021,0.209,0.114,0.108,0.173,-0.333,-0.054,-0.198,-0.354,-0.015,-0.032,-0.099,0.010,0.105,0.124],"phone":[0.057,-0.275,0.028,0.181,-0.162,-0.015,-0.530,0.124,-0.107,0.124,-0.113,0.140,0.273,0.035,0.019,-0.051],"app":[-0.696,-0.563,0.135,0.305,-0.034,-0.099,-0.331,0.049,-0.254,-0.130,-0.266,0.399,0.214,0.026,-0.019,0.054],"software":[-0.255,-0.858,0.175,0.371,0.032,0.059,-0.255,0.029,-0.028,-0.186,-0.209,0.017,0.195,-0.068,0.050,0.050],"network":[0.018,-0.650,0.051,0.050,-0.011,0.196,-0.324,-0.036,-0.089,-0.067,-0.320,0.069,0.202,-0.015,-0.113,-0.005],"digital":[-0.310,-0.810,0.176,0.285,0.210,0.138,-0.305,0.031,-0.060,0.028,-0.203,-0.096,0.260,0.063,-0.004,0.019],"machine":[-0.346,-0.307,0.070,0.116,0.083,0.080,-0.392,0.027,-0.036,-0.100,0.205,-0.024,0.064,-0.224,0.056,-0.050],"internet":[0.018,-0.554,0.090,0.308,-0.037,0.124,-0.321,0.032,-0.074,-0.004,-0.321,0.121,0.173,0.019,-0.057,-0.029],"screen":[-0.316,-0.175,0.121,0.181,0.307,0.139,-0.345,0.173,-0.045,0.109,0.046,-0.107,-0.006,0.119,0.042,-0.030],"program":[0.123,-0.658,0.205,0.078,-0.095,0.007,-0.025,-0.131,0.088,-0.109,-0.119,-0.010,-0.054,0.149,-0.216,0.106],"laptop":[-0.462,-0.391,0.176,0.307,-0.134,-0.043,-0.541,0.028,-0.095,-0.051,0.043,-0.063,0.035,-0.031,0.218,0.028],"keyboard":[-0.663,-0.246,0.270,0.245,0.251,-0.020,-0.322,0.014,-0.131,-0.002,0.181,-0.145,0.138,-0.026,-0.004,-0.185],"online":[-0.090,-0.585,0.167,0.308,0.013,-0.039,-0.244,0.101,0.002,0.001,-0.360,0.170,0.164,0.082,-0.079,-0.055],"website":[-0.181,-0.641,0.200,0.030,0.047,-0.007,-0.140,0.122,-0.153,0.020,-0.330,0.363,0.133,0.098,0.012,-0.069],"email":[-0.383,-0.612,0.209,0.327,-0.128,-0.025,-0.220,0.056,-0.215,0.088,-0.135,0.361,0.275,0.280,0.101,-0.256],"electric":[-0.442,-0.480,-0.126,-0.012,0.020,0.059,-0.232,-0.081,-0.109,-0.021,0.018,-0.287,0.253,-0.280,-0.021,0.005],"circuit":[-0.238,-0.485,0.103,-0.167,0.254,-0.200,-0.264,-0.184,-0.065,-0.007,0.118,0.135,0.032,-0.259,0.018,0.088],"battery":[-0.450,-0.530,-0.014,-0.053,-0.124,0.002,-0.327,-0.114,-0.283,-0.096,0.262,-0.213,0.027,-0.196,0.185,-0.015],"engine":[-0.435,-0.518,-0.090,0.075,0.111,0.069,-0.292,-0.130,-0.258,-0.099,0.186,-0.111,0.057,-0.196,-0.062,0.032],"money":[0.411,-0.253,-0.104,0.201,-0.274,-0.106,0.008,0.190,0.031,-0.060,-0.160,-0.207,-0.145,0.068,0.018,-0.088],"cash":[0.175,-0.444,-0.230,0.224,-0.283,-0.205,-0.008,0.256,-0.128,0.042,-0.124,-0.303,-0.046,0.093,-0.010,-0.129],"loan":[0.145,-0.775,-0.051,0.087,-0.217,-0.338,0.150,0.072,-0.203,-0.003,-0.121,-0.215,-0.166,0.133,-0.049,-0.065],"deposit":[-0.350,-0.708,-0.241,0.149,-0.306,-0.147,0.139,0.027,-0.126,0.103,-0.017,-0.156,-0.227,0.201,0.141,0.007],"account":[0.288,-0.590,0.052,0.262,-0.171,0.087,0.157,0.227,-0.129,0.194,-0.033,-0.002,-0.050,0.116,-0.094,-0.055],"invest":[0.216,-0.425,-0.188,0.330,-0.257,-0.191,0.091,-0.050,-0.006,-0.075,-0.417,-0.233,0.005,-0.121,0.067,-0.096],"price":[0.120,-0.470,-0.279,0.196,-0.081,-0.169,0.043,0.160,-0.146,0.117,0.051,-0.158,0.033,-0.147,-0.119,0.213],"market":[0.155,-0.493,-0.268,0.170,-0.049,-0.051,-0.029,0.003,-0.061,0.049,-0.146,-0.110,0.151,-0.239,-0.061,0.259],"wealth":[0.042,-0.347,-0.090,0.206,-0.157,0.104,0.392,0.053,-0.113,0.131,-0.284,-0.271,-0.041,-0.038,0.275,-0.062],"coin":[-0.650,-0.369,-0.115,0.172,0.162,-0.353,0.184,0.407,-0.108,0.015,0.130,0.057,-0.202,0.011,0.149,-0.028],"savings":[0.149,-0.691,-0.169,0.296,-0.351,-0.140,0.162,-0.015,-0.083,0.099,-0.178,-0.334,-0.254,0.064,-0.025,-0.042],"pay":[0.451,-0.321,-0.143,0.178,-0.365,-0.216,-0.015,0.101,-0.053,0.076,-0.127,-0.197,-0.118,0.050,-0.046,-0.077],"credit":[0.363,-0.669,-0.057,0.251,-0.201,-0.123,0.044,0.059,-0.209,0.083,-0.140,-0.296,-0.083,0.071,-0.051,0.044],"budget":[0.274,-0.621,-0.155,0.218,-0.045,-0.186,0.111,0.059,-0.054,0.190,-0.024,0.054,-0.261,-0.000,-0.167,0.210],"bank":[0.338,-0.674,-0.172,-0.093,-0.257,-0.126,0.059,0.109,-0.181,0.133,-0.199,-0.039,-0.117,-0.055,0.112,0.078],"tax":[0.259,-0.675,-0.141,0.253,-0.300,-0.187,0.166,0.181,-0.069,0.092,0.016,-0.091,-0.312,-0.101,-0.096,0.018],"debt":[0.364,-0.580,-0.242,0.229,-0.250,-0.127,0.199,0.035,-0.291,0.181,-0.120,-0.253,-0.163,0.077,-0.037,0.127],"salary":[0.259,-0.458,-0.084,0.140,-0.173,-0.393,0.163,0.009,-0.083,0.095,0.105,-0.177,-0.271,0.047,-0.020,-0.019],"profit":[0.179,-0.591,-0.260,0.214,-0.091,-0.217,0.040,0.076,-0.352,0.032,-0.121,-0.209,0.092,-0.041,-0.086,0.121],"cost":[0.249,-0.628,-0.228,0.201,-0.159,-0.090,-0.009,0.001,-0.031,-0.012,0.010,-0.203,-0.139,-0.063,-0.169,-0.020],"river":[-0.412,-0.267,-0.245,-0.340,-0.018,0.190,0.164,-0.101,-0.100,0.020,-0.207,-0.057,-0.180,0.223,-0.041,-0.213],"water":[-0.435,-0.175,-0.436,-0.058,-0.068,0.162,0.084,-0.207,0.167,0.019,0.065,-0.100,0.048,0.033,-0.010,-0.101],"tree":[-0.818,0.063,-0.261,-0.098,-0.019,0.241,0.001,0.036,0.083,-0.056,-0.048,0.072,-0.190,0.113,0.233,0.111],"forest":[-0.500,-0.364,-0.253,-0.308,0.000,0.225,0.247,-0.229,-0.008,-0.146,-0.243,0.073,-0.143,0.038,0.170,0.004],"mountain":[-0.584,-0.068,-0.195,-0.330,0.119,0.258,0.023,-0.217,-0.019,-0.029,-0.246,0.036,-0.263,0.027,0.008,0.050],"ocean":[-0.468,-0.169,-0.330,-0.223,0.120,0.329,0.091,-0.252,-0.094,0.067,-0.150,-0.012,0.007,0.130,-0.112,0.017],"flower":[-1.000,0.186,-0.246,-0.165,0.002,-0.024,0.133,0.231,0.122,0.021,0.013,-0.061,-0.012,0.041,0.134,-0.021],"garden":[-0.672,0.074,-0.124,-0.196,0.104,0.038,0.023,0.016,0.342,0.138,-0.254,-0.003,-0.135,-0.059,0.180,0.043],"rain":[-0.290,0.169,-0.483,-0.166,0.218,0.008,0.043,-0.278,-0.172,0.130,0.082,0.010,0.175,0.159,-0.134,-0.064],"sun":[-0.388,-0.043,-0.145,-0.121,0.163,0.105,-0.092,-0.106,-0.009,0.145,-0.123,0.035,0.239,0.177,0.180,0.254],"wind":[-0.261,-0.035,-0.333,0.005,0.240,0.172,-0.016,-0.269,-0.136,0.076,0.048,-0.248,0.120,0.015,-0.161,-0.089],"field":[0.033,-0.375,-0.038,-0.225,0.284,-0.023,-0.027,-0.164,0.208,-0.232,0.081,-0.061,0.026,0.067,0.132,-0.081],"bird":[-0.475,0.146,-0.178,-0.090,-0.070,0.204,0.177,-0.005,-0.137,-0.342,-0.002,0.284,-0.004,0.241,-0.120,0.063],"fruit":[-0.868,0.140,-0.399,0.126,-0.114,-0.006,0.193,0.188,0.174,-0.013,0.072,-0.017,0.119,-0.023,0.035,-0.008],"apple":[-0.535,-0.280,-0.126,0.248,-0.011,-0.099,-0.190,0.255,-0.015,-0.093,-0.161,0.110,0.301,-0.037,0.123,0.228],"seed":[-0.476,-0.126,-0.071,-0.032,0.068,-0.288,0.120,0.059,-0.087,-0.302,0.064,-0.089,0.142,0.140,0.259,0.070],"grass":[-0.628,0.213,-0.352,-0.090,0.138,-0.020,0.106,-0.117,0.102,-0.194,-0.023,0.054,-0.144,-0.064,0.148,-0.000],"leaf":[-0.955,-0.201,-0.350,0.033,0.067,0.077,0.079,0.114,-0.013,-0.180,0.172,-0.001,-0.029,0.145,0.303,0.055],"stone":[-0.535,0.012,-0.012,-0.239,0.155,0.199,0.080,0.260,0.081,0.187,-0.004,-0.047,-0.197,-0.038,0.219,-0.069],"sea":[-0.345,-0.044,-0.380,-0.275,0.040,0.302,0.189,-0.091,-0.099,0.001,-0.055,0.064,-0.064,0.120,-0.086,-0.097],"lake":[-0.487,-0.105,-0.236,-0.422,-0.032,0.137,0.204,-0.164,0.009,0.061,-0.238,0.004,-0.191,0.140,-0.056,-0.053],"cloud":[-0.497,-0.385,-0.270,-0.010,0.193,0.360,-0.063,-0.255,-0.144,0.167,-0.014,-0.007,0.082,0.207,0.243,0.185],"storm":[-0.099,-0.042,-0.312,-0.248,0.079,0.222,-0.043,-0.228,-0.418,0.156,-0.035,-0.068,0.142,0.194,-0.077,-0.002],"beach":[-0.489,0.104,-0.092,-0.373,0.039,0.051,-0.162,-0.159,0.081,0.064,-0.294,0.113,-0.149,0.017,-0.103,0.074],"snow":[-0.397,0.195,-0.468,-0.185,0.075,0.132,0.070,-0.209,0.008,0.130,0.070,-0.062,0.013,0.150,-0.101,0.081],"spring":[-0.169,-0.060,-0.284,-0.231,0.108,-0.036,0.079,-0.068,0.203,0.096,0.043,-0.006,0.015,0.164,-0.156,0.157],"current":[0.389,-0.739,-0.081,0.002,0.049,0.047,0.103,-0.024,-0.031,0.097,0.016,-0.016,-0.021,-0.056,-0.060,0.195],"cell":[-0.333,-0.417,0.052,0.090,-0.219,0.257,-0.319,-0.111,-0.016,-0.067,0.175,0.019,0.189,0.127,0.209,0.025],"mouse":[-0.805,-0.019,0.057,0.178,0.123,0.216,-0.236,0.110,-0.109,-0.373,0.037,0.092,-0.020,0.228,0.065,0.005],"web":[-0.171,-0.540,0.141,0.289,0.057,0.142,-0.307,0.111,0.030,-0.008,-0.335,0.222,0.087,0.073,0.013,-0.037],"stream":[-0.470,-0.382,-0.280,0.060,0.056,0.251,-0.060,-0.101,-0.134,0.213,-0.090,-0.081,0.051,0.132,-0.138,-0.277],"charge":[0.458,-0.581,0.015,-0.060,-0.248,-0.096,-0.059,0.098,-0.121,-0.026,0.220,0.059,-0.083,-0.152,0.102,-0.058],"the":[0.320,-0.362,-0.065,-0.250,0.136,0.185,0.043,0.082,0.046,-0.036,0.032,0.079,-0.064,0.046,0.034,0.036],"a":[0.091,-0.140,0.012,-0.168,0.020,0.064,-0.044,0.187,0.006,0.003,0.185,-0.006,-0.088,-0.060,-0.070,0.137],"an":[0.211,-0.302,0.114,-0.164,-0.013,0.158,0.016,0.097,-0.072,0.014,0.139,0.037,-0.001,-0.105,-0.084,0.092],"and":[0.234,-0.196,-0.036,-0.167,-0.006,0.216,0.032,0.103,0.169,-0.064,0.053,-0.145,0.161,-0.057,-0.005,-0.123],"or":[0.039,-0.153,-0.126,0.134,-0.100,0.206,-0.016,0.096,0.107,-0.021,0.179,-0.011,-0.044,-0.020,0.003,-0.079],"but":[0.616,0.123,-0.086,-0.005,0.053,0.096,0.026,0.082,0.059,-0.073,0.144,-0.001,0.052,-0.036,-0.009,0.025],"to":[0.553,-0.247,-0.122,-0.050,-0.063,0.076,-0.041,0.058,0.108,-0.028,0.048,-0.002,0.030,0.085,0.071,-0.062],"of":[0.230,-0.441,-0.016,-0.203,-0.028,0.270,0.218,0.072,0.025,0.051,0.045,-0.014,-0.001,-0.029,0.023,-0.028],"in":[0.256,-0.397,-0.064,-0.365,0.025,0.099,0.109,0.014,0.100,0.023,0.038,0.029,0.060,-0.031,-0.099,0.047],"on":[0.341,-0.320,-0.154,-0.251,0.098,0.058,-0.120,0.110,0.073,0.102,0.065,0.135,0.033,0.100,-0.080,0.036],"at":[0.192,-0.228,-0.048,-0.355,0.043,-0.120,-0.113,-0.200,0.208,0.145,-0.042,0.016,0.021,0.005,-0.004,0.061],"for":[0.437,-0.369,-0.023,-0.089,-0.010,-0.015,-0.001,0.104,0.149,-0.112,0.038,-0.036,0.044,0.044,-0.096,-0.038],"with":[0.292,-0.124,-0.083,-0.157,0.093,0.081,-0.034,0.167,0.124,-0.001,0.142,-0.105,0.140,-0.021,-0.001,-0.044],"from":[0.252,-0.401,-0.091,-0.287,-0.062,0.126,0.037,0.073,0.080,0.034,0.071,-0.047,0.105,0.081,-0.107,-0.110],"by":[0.360,-0.426,0.018,-0.217,0.024,0.206,0.065,0.261,-0.076,-0.011,0.052,0.029,0.256,0.001,-0.015,-0.076],"is":[0.071,-0.142,0.014,-0.046,0.022,0.270,0.098,0.074,0.037,-0.089,0.012,0.045,-0.051,-0.114,-0.070,0.162],"are":[0.258,-0.120,-0.204,0.129,-0.012,0.254,0.058,-0.004,0.175,-0.136,-0.004,0.018,-0.002,-0.079,0.001,-0.213],"was":[0.312,-0.140,0.118,-0.392,-0.015,0.067,0.027,0.176,-0.096,-0.013,0.194,0.030,0.090,-0.084,-0.031,0.124],"were":[0.398,-0.154,-0.132,-0.209,-0.066,0.148,0.017,0.053,0.003,-0.056,0.109,0.055,0.087,-0.102,-0.011,-0.280],"be":[0.506,-0.043,-0.116,0.095,-0.002,0.169,-0.014,0.038,0.093,-0.114,0.120,0.085,-0.017,-0.044,-0.003,0.015],"been":[0.502,-0.126,-0.079,-0.138,-0.071,0.213,0.037,0.078,-0.001,-0.103,0.118,0.090,0.114,-0.073,-0.041,-0.036],"am":[0.238,0.416,0.085,0.093,0.014,-0.137,-0.121,-0.277,-0.076,0.143,-0.107,0.255,0.040,-0.167,-0.115,0.101],"i":[0.387,0.612,0.056,0.130,0.058,-0.025,-0.055,-0.000,0.110,-0.058,0.036,0.028,-0.040,0.018,0.004,0.065],"you":[0.168,0.504,-0.031,0.316,0.050,0.021,-0.144,0.023,0.156,-0.049,-0.038,-0.030,-0.112,0.072,-0.004,0.032],"he":[0.511,0.160,0.186,-0.220,0.004,-0.060,0.039,0.068,0.091,-0.031,0.181,0.005,0.068,0.015,0.007,0.012],"she":[0.205,0.443,0.243,-0.143,-0.080,0.017,-0.053,0.073,0.052,0.049,0.095,-0.074,0.047,0.137,-0.055,0.086],"it":[0.383,-0.080,-0.118,0.050,0.094,0.179,0.019,0.104,0.074,-0.027,0.047,0.032,-0.006,-0.012,-0.072,0.076],"we":[0.594,0.335,-0.116,0.223,0.044,0.057,-0.012,-0.087,0.149,-0.074,-0.040,0.090,-0.061,0.007,0.039,-0.011],"they":[0.531,0.192,-0.140,0.042,-0.036,0.155,-0.034,0.017,0.149,-0.119,0.056,0.031,0.012,0.016,0.074,-0.158],"this":[0.389,-0.123,-0.049,0.043,0.161,0.188,0.105,0.090,0.060,0.009,0.047,0.093,-0.024,-0.006,-0.107,0.106],"that":[0.553,-0.103,-0.066,0.076,-0.055,0.239,0.039,0.123,0.035,-0.030,0.095,0.101,0.057,0.011,0.027,0.076],"these":[0.212,-0.185,-0.076,0.205,0.079,0.339,0.115,0.004,0.136,-0.044,0.046,-0.009,-0.016,-0.023,-0.020,-0.234],"those":[0.530,-0.026,-0.107,0.167,-0.083,0.199,0.064,0.039,0.105,-0.030,0.043,-0.045,-0.006,-0.008,-0.005,-0.167],"my":[0.158,0.553,0.106,0.142,-0.025,-0.010,-0.128,0.025,0.065,0.041,0.051,-0.090,-0.080,0.177,0.043,0.108],"your":[-0.057,0.284,0.005,0.351,-0.045,0.014,-0.206,0.026,0.086,0.043,0.009,-0.103,-0.128,0.201,0.090,0.042],"his":[0.372,0.200,0.228,-0.208,0.049,-0.036,0.004,0.189,-0.017,0.049,0.216,-0.091,0.026,0.089,0.105,0.003],"her":[0.072,0.463,0.263,-0.140,-0.084,0.034,-0.092,0.151,-0.051,0.109,0.128,-0.165,0.000,0.210,0.063,0.068],"its":[0.326,-0.581,-0.177,-0.002,0.075,0.149,0.042,0.103,-0.041,0.055,-0.056,-0.044,0.002,-0.048,0.006,0.108],"our":[0.463,0.191,-0.064,0.221,-0.009,0.148,0.034,-0.090,0.093,0.009,-0.121,-0.049,-0.086,0.045,0.138,-0.004],"their":[0.465,-0.001,-0.103,0.028,0.018,0.108,-0.020,0.047,0.074,-0.050,0.019,-0.107,-0.012,0.126,0.129,-0.185],"walked":[0.084,0.498,-0.087,-0.338,-0.051,-0.196,-0.315,0.067,0.024,0.100,0.083,0.009,-0.095,0.035,0.102,-0.192],"walk":[-0.018,0.461,-0.108,-0.130,0.078,-0.053,-0.307,-0.089,0.110,0.067,-0.079,-0.039,-0.309,0.175,-0.086,-0.185],"run":[0.381,-0.203,-0.145,-0.171,0.091,-0.187,-0.204,0.051,0.034,-0.158,-0.078,0.016,0.008,0.017,-0.135,-0.032],"running":[0.282,-0.232,-0.112,-0.153,0.125,-0.010,-0.264,0.008,0.030,-0.155,0.033,-0.032,-0.087,-0.049,-0.106,-0.010],"jump":[-0.015,-0.161,-0.188,0.036,0.221,-0.198,-0.128,-0.032,-0.222,-0.122,0.083,-0.227,-0.159,0.170,-0.085,0.178],"play":[0.326,0.218,0.094,-0.038,0.427,-0.202,0.010,-0.048,0.077,-0.209,-0.009,-0.077,0.070,0.082,-0.100,-0.086],"played":[0.169,0.255,0.178,-0.359,0.340,-0.205,0.100,0.001,-0.006,-0.211,0.010,-0.120,0.119,-0.043,-0.133,-0.061],"eat":[-0.468,0.669,-0.294,0.273,-0.224,-0.101,0.050,-0.006,0.216,-0.151,-0.025,0.103,0.015,0.084,-0.078,-0.121],"ate":[-0.647,0.724,-0.215,0.122,-0.338,-0.224,0.046,0.045,0.162,-0.062,0.106,0.105,0.114,0.004,-0.089,-0.081],"drink":[-0.522,0.405,-0.264,0.196,-0.196,-0.160,-0.013,0.042,0.128,-0.042,0.009,0.011,0.234,-0.161,-0.065,-0.017],"sleep":[-0.241,0.465,0.021,0.146,-0.162,0.061,-0.169,-0.457,0.035,0.090,0.194,-0.045,0.113,0.216,-0.084,-0.011],"sit":[0.136,0.412,-0.157,0.037,-0.002,-0.181,-0.245,-0.160,0.265,0.119,0.034,0.091,-0.201,-0.018,0.181,-0.125],"stand":[0.352,0.296,-0.163,-0.015,0.059,-0.070,-0.088,0.094,0.006,0.111,0.067,0.101,-0.183,-0.170,0.141,-0.006],"open":[0.136,-0.169,-0.188,-0.152,0.193,-0.118,-0.163,-0.107,0.162,0.013,-0.101,0.094,-0.037,0.026,0.066,0.167],"opened":[0.046,-0.423,-0.060,-0.495,0.024,-0.061,-0.215,0.044,0.137,0.147,-0.061,0.063,-0.016,-0.075,-0.023,0.031],"close":[0.476,-0.172,-0.188,-0.196,0.023,-0.018,-0.047,0.037,0.006,0.158,0.056,0.013,0.037,-0.097,0.078,0.041],"go":[0.497,0.280,-0.126,0.107,0.021,-0.105,-0.158,-0.039,0.174,-0.072,-0.112,0.019,-0.125,0.128,-0.037,-0.020],"went":[0.465,0.091,-0.011,-0.326,0.055,-0.202,-0.153,0.046,0.088,-0.068,0.065,-0.031,0.062,0.102,-0.066,-0.032],"come":[0.535,0.261,-0.154,0.139,0.045,0.066,-0.016,0.018,0.139,-0.035,-0.089,0.006,-0.046,0.075,-0.009,-0.024],"came":[0.581,0.017,-0.069,-0.287,0.112,-0.055,-0.001,0.142,-0.038,0.022,0.103,0.041,0.092,0.057,-0.017,0.009],"see":[0.411,0.124,-0.071,0.157,0.086,0.156,0.007,-0.037,0.114,0.056,-0.072,0.033,-0.108,0.087,0.034,0.127],"saw":[0.446,0.065,-0.095,-0.262,0.132,0.041,-0.046,0.100,-0.117,0.021,0.049,-0.097,0.061,-0.003,-0.000,0.031],"look":[0.225,0.360,-0.060,0.234,0.172,0.137,-0.053,0.050,0.156,-0.011,-0.019,-0.065,-0.148,-0.038,0.058,0.134],"looked":[0.292,0.547,-0.066,-0.032,0.203,-0.034,-0.072,-0.015,0.001,-0.007,0.155,-0.025,-0.009,-0.061,0.162,0.083],"make":[0.448,0.034,-0.153,0.238,0.033,0.011,-0.008,0.093,0.181,-0.119,-0.002,-0.057,-0.055,0.001,-0.013,-0.068],"made":[0.357,-0.158,-0.065,-0.112,0.114,0.005,0.078,0.295,0.115,-0.063,0.183,-0.014,0.096,-0.023,-0.023,-0.047],"take":[0.612,0.037,-0.122,0.058,-0.015,-0.055,-0.078,-0.029,0.122,-0.086,-0.005,0.001,-0.056,0.079,0.036,-0.032],"took":[0.522,-0.052,0.001,-0.406,0.053,-0.103,-0.062,0.093,0.002,-0.057,0.143,-0.005,0.103,0.047,0.021,-0.048],"give":[0.568,0.020,-0.083,0.182,0.013,-0.118,-0.009,0.063,0.112,-0.039,-0.025,-0.035,-0.006,0.118,0.143,-0.145],"gave":[0.540,-0.053,0.075,-0.151,0.111,-0.189,0.046,0.247,-0.067,0.070,0.083,0.051,0.139,0.184,0.072,-0.115],"get":[0.466,0.300,-0.112,0.193,-0.065,-0.077,-0.162,0.004,0.132,-0.133,0.006,-0.093,-0.087,0.100,-0.044,-0.041],"got":[0.442,0.380,-0.038,-0.016,0.069,-0.184,-0.152,0.065,0.055,-0.148,0.085,-0.114,0.038,0.118,-0.037,-0.031],"put":[0.584,-0.007,-0.142,-0.000,0.051,-0.074,-0.075,0.120,0.114,-0.068,0.083,-0.021,-0.032,0.093,0.107,-0.032],"say":[0.638,0.156,-0.062,0.200,-0.198,0.139,0.037,-0.026,0.036,-0.084,-0.081,0.099,-0.019,-0.053,0.005,0.029],"said":[0.495,-0.016,-0.032,-0.084,-0.276,-0.035,0.018,0.014,-0.022,-0.031,-0.043,0.147,0.150,-0.081,0.084,0.190],"think":[0.545,0.446,0.015,0.264,0.084,0.019,0.065,-0.070,0.104,-0.108,-0.085,0.016,-0.064,-0.072,-0.000,0.131],"thought":[0.459,0.390,0.080,0.100,0.039,0.207,0.098,-0.007,0.074,-0.122,0.093,0.045,0.023,-0.029,0.014,0.002],"know":[0.461,0.553,0.070,0.237,-0.045,0.087,-0.036,-0.045,0.110,-0.139,-0.068,0.047,-0.026,0.017,0.028,0.019],"knew":[0.550,0.570,0.185,0.054,-0.115,0.060,-0.015,0.030,0.054,-0.119,0.017,0.032,0.036,0.008,0.111,0.011],"want":[0.543,0.363,-0.081,0.270,-0.065,0.013,-0.043,-0.009,0.126,-0.093,-0.164,0.024,-0.075,-0.015,0.111,-0.044],"wanted":[0.673,0.301,0.113,0.045,-0.133,0.005,-0.084,0.167,0.072,-0.092,-0.125,0.049,-0.002,-0.014,0.155,-0.042],"like":[0.054,0.334,-0.058,0.120,0.043,0.216,-0.047,0.145,0.185,-0.141,-0.099,-0.116,0.041,-0.075,-0.040,0.049],"liked":[-0.009,0.785,0.179,0.238,0.101,-0.056,0.018,0.103,0.164,-0.048,-0.048,-0.055,0.103,-0.179,0.023,-0.043],"help":[0.458,-0.097,-0.084,0.138,-0.199,0.040,-0.025,-0.089,0.074,-0.127,-0.155,-0.160,0.036,0.175,0.142,-0.120],"helped":[0.496,-0.252,-0.027,-0.041,-0.032,-0.048,0.066,0.040,0.009,-0.125,-0.109,-0.276,0.153,0.109,0.159,-0.015],"find":[0.310,0.303,-0.026,0.242,-0.070,0.168,-0.086,0.002,0.142,-0.076,-0.094,-0.017,-0.080,0.039,0.086,-0.061],"found":[-0.049,-0.098,-0.022,-0.128,-0.152,0.353,0.070,0.066,0.067,-0.122,0.182,0.129,0.054,0.039,0.046,-0.017],"use":[-0.007,-0.467,-0.062,0.241,-0.025,0.231,-0.070,0.048,0.165,-0.170,0.136,0.014,0.055,-0.070,0.030,-0.156],"used":[-0.142,-0.422,-0.016,0.066,0.025,0.301,-0.091,0.132,0.167,-0.191,0.202,-0.007,0.055,-0.095,0.053,-0.185],"work":[0.277,-0.207,0.195,0.048,0.010,0.147,0.063,0.009,0.258,0.034,-0.010,-0.120,0.009,0.004,-0.101,-0.107],"worked":[0.210,-0.100,0.303,-0.200,-0.123,0.011,-0.034,0.053,0.259,-0.070,-0.047,-0.161,0.165,-0.072,-0.064,-0.018],"day":[0.321,0.133,-0.173,-0.243,0.029,-0.141,-0.052,-0.012,0.085,0.165,0.032,0.128,0.029,0.112,-0.187,0.083],"night":[0.256,0.382,-0.132,-0.291,0.175,-0.114,-0.247,-0.045,0.029,0.151,0.020,0.128,0.062,0.099,-0.105,-0.006],"morning":[0.096,0.170,-0.195,-0.275,0.001,-0.130,-0.262,-0.113,0.007,0.297,0.057,0.225,0.173,0.021,-0.145,0.077],"week":[0.556,-0.229,-0.180,-0.181,-0.023,-0.210,-0.053,0.021,0.004,0.134,0.022,0.209,0.134,0.103,-0.100,0.168],"year":[0.441,-0.435,-0.129,-0.174,-0.040,-0.196,0.105,0.084,-0.017,-0.042,-0.005,-0.065,0.032,0.118,-0.203,0.184],"time":[0.496,-0.034,-0.004,-0.073,0.153,-0.047,-0.060,0.006,0.119,-0.016,0.069,-0.021,0.050,0.103,-0.106,0.052],"hour":[0.021,0.007,-0.132,-0.161,0.089,-0.205,-0.281,-0.115,0.006,0.308,0.146,0.040,0.033,0.063,-0.343,-0.069],"minute":[0.038,-0.160,-0.084,-0.098,0.293,-0.427,-0.118,0.086,-0.129,0.046,0.225,0.040,0.011,0.249,0.015,-0.293],"today":[0.449,-0.127,-0.104,-0.020,0.030,0.012,0.082,-0.036,0.177,0.131,-0.122,0.152,0.093,-0.131,-0.056,0.151],"tomorrow":[0.346,0.221,-0.145,0.224,0.084,-0.305,-0.103,-0.162,0.050,0.148,-0.140,0.238,-0.028,0.114,-0.065,0.261],"yesterday":[0.427,-0.204,-0.185,-0.003,-0.067,-0.328,-0.024,-0.047,-0.109,0.234,0.061,0.171,0.198,-0.078,-0.002,0.258],"good":[0.319,0.367,-0.005,0.165,0.124,-0.060,0.084,-0.001,0.139,-0.090,-0.012,-0.137,-0.029,-0.042,-0.060,0.050],"bad":[0.346,0.312,-0.067,0.228,0.010,-0.003,0.093,-0.048,-0.135,-0.065,0.050,-0.091,-0.055,-0.047,-0.193,0.120],"big":[0.196,0.117,-0.230,0.075,0.171,-0.068,-0.020,0.139,0.000,-0.150,-0.168,-0.216,-0.098,-0.020,-0.082,0.094],"small":[-0.263,-0.179,-0.278,-0.100,-0.063,0.262,-0.051,0.125,0.116,-0.044,0.015,-0.108,-0.083,-0.157,0.003,-0.162],"new":[0.288,-0.475,-0.012,-0.123,0.050,0.077,-0.061,0.094,0.162,0.037,-0.142,-0.013,0.026,-0.075,-0.101,0.153],"old":[-0.032,0.231,0.189,-0.321,-0.153,-0.013,-0.040,0.116,0.002,-0.066,0.025,-0.086,-0.090,-0.074,0.020,0.199],"long":[0.299,-0.051,-0.161,-0.101,0.052,0.163,0.015,0.049,0.030,0.036,0.110,-0.085,-0.154,0.061,-0.124,0.081],"short":[0.133,-0.184,-0.095,-0.039,0.225,0.040,0.012,0.178,-0.035,0.072,0.230,-0.088,-0.106,0.097,-0.326,0.002],"high":[0.010,-0.460,-0.067,-0.215,-0.027,0.062,0.029,-0.194,0.059,0.070,0.127,-0.268,-0.055,-0.065,-0.083,0.071],"low":[-0.003,-0.354,-0.262,0.056,-0.060,0.033,0.054,-0.113,-0.112,0.074,0.232,-0.310,0.009,-0.064,-0.177,0.065],"fast":[0.008,0.048,-0.211,0.090,0.126,-0.034,-0.202,-0.084,-0.031,-0.168,0.070,-0.060,0.086,-0.154,-0.268,-0.009],"slow":[0.107,-0.005,-0.265,0.201,0.120,-0.010,-0.050,-0.138,-0.140,0.001,0.211,-0.091,0.058,-0.066,-0.269,0.002],"hot":[-0.514,0.247,-0.324,0.030,0.155,-0.031,-0.082,-0.065,0.110,0.038,0.022,-0.092,0.201,-0.048,-0.220,0.113],"cold":[-0.210,0.369,-0.302,0.013,0.055,0.160,0.149,-0.226,0.032,0.118,0.193,-0.038,0.139,-0.017,-0.096,0.183],"warm":[-0.408,0.505,-0.349,-0.020,0.171,-0.060,0.153,-0.180,0.078,0.250,0.079,-0.046,0.205,0.041,-0.016,0.008],"dark":[-0.481,0.397,-0.128,-0.041,0.256,0.318,0.043,0.105,-0.034,0.207,0.138,-0.104,-0.088,0.014,0.149,0.143],"light":[-0.274,-0.143,-0.246,-0.056,0.270,0.263,-0.071,-0.046,-0.033,0.161,0.239,-0.110,0.130,-0.134,0.080,0.054],"house":[0.086,-0.092,-0.007,-0.212,-0.170,0.015,-0.081,0.191,0.147,0.299,-0.026,0.112,-0.171,-0.136,0.151,0.083],"home":[0.256,0.027,-0.074,-0.300,-0.079,-0.117,-0.206,0.034,0.109,-0.006,-0.161,-0.091,0.014,0.022,-0.016,-0.050],"room":[-0.156,0.190,-0.023,-0.087,-0.006,-0.010,-0.328,-0.059,0.280,0.275,0.098,-0.074,-0.132,-0.012,0.101,0.043],"door":[-0.076,0.114,-0.073,-0.047,-0.008,0.025,-0.473,0.071,0.108,0.211,0.092,0.041,-0.258,-0.003,0.204,0.086],"window":[-0.390,-0.111,-0.080,-0.023,0.116,0.030,-0.437,0.022,-0.000,0.327,0.144,-0.038,-0.237,0.068,0.207,0.037],"table":[-0.148,-0.034,-0.150,0.007,0.242,-0.285,-0.051,0.006,0.308,0.115,0.080,0.127,-0.197,-0.010,0.209,-0.008],"chair":[-0.289,-0.122,0.180,-0.239,-0.015,-0.180,-0.053,-0.076,0.286,0.128,0.146,0.019,-0.122,-0.022,0.241,0.258],"bed":[-0.536,0.392,-0.168,-0.085,-0.210,0.070,-0.265,-0.085,0.141,0.216,0.125,-0.107,-0.172,0.131,0.012,0.117],"kitchen":[-0.743,0.229,0.018,0.059,-0.149,-0.132,-0.247,0.005,0.358,0.174,0.012,-0.087,-0.048,-0.140,0.105,0.056],"street":[-0.075,-0.192,-0.118,-0.252,0.050,-0.012,-0.210,0.074,-0.097,0.282,-0.173,-0.056,-0.141,-0.169,-0.012,-0.031],"road":[-0.127,-0.243,-0.156,-0.374,0.116,0.076,-0.183,-0.164,-0.048,0.036,-0.176,0.040,-0.332,-0.108,-0.083,-0.103],"city":[0.167,-0.241,-0.058,-0.412,-0.076,0.084,0.006,-0.100,0.090,0.096,-0.220,0.022,-0.047,-0.210,-0.014,-0.101],"town":[-0.086,-0.041,-0.095,-0.474,-0.119,0.070,0.064,-0.071,0.010,0.121,-0.208,0.092,-0.163,-0.268,-0.057,-0.206],"village":[-0.356,-0.055,-0.024,-0.419,-0.221,0.148,0.111,-0.067,-0.003,0.092,-0.225,0.141,-0.211,-0.287,-0.076,-0.183],"car":[-0.033,-0.111,-0.077,-0.131,-0.058,0.019,-0.455,0.041,-0.168,-0.070,0.028,-0.091,-0.099,-0.284,-0.029,0.099],"bus":[-0.181,-0.173,-0.085,-0.299,-0.170,0.049,-0.503,-0.131,-0.146,0.019,-0.059,0.097,-0.112,-0.178,-0.187,-0.180],"train":[-0.021,-0.133,-0.020,-0.220,-0.094,0.071,-0.399,-0.248,-0.076,-0.008,-0.090,-0.017,-0.116,-0.082,-0.205,-0.235],"bike":[-0.555,-0.013,-0.060,-0.084,0.077,-0.065,-0.443,-0.183,-0.077,-0.186,-0.102,-0.099,-0.320,-0.082,-0.114,0.013],"dog":[-0.572,0.556,-0.021,-0.010,-0.141,0.072,-0.123,0.104,-0.067,-0.350,0.014,0.159,-0.123,0.098,-0.088,0.052],"cat":[-0.723,0.485,-0.021,0.018,-0.056,0.141,-0.096,0.113,-0.173,-0.349,-0.014,0.089,-0.090,0.162,-0.096,0.095],"horse":[-0.515,0.236,-0.090,-0.204,0.035,-0.045,-0.051,0.091,-0.141,-0.349,-0.009,-0.000,-0.280,-0.052,-0.000,0.014],"fish":[-0.715,0.184,-0.359,0.049,-0.106,0.061,0.223,0.046,0.074,-0.294,0.038,0.032,0.016,0.103,-0.125,-0.102],"lion":[-0.631,0.177,-0.138,-0.193,0.013,0.073,0.141,0.262,-0.297,-0.174,-0.242,-0.031,-0.184,0.052,0.083,0.021],"tiger":[-0.136,0.253,-0.160,-0.202,0.083,0.037,0.059,0.012,-0.274,-0.454,-0.169,0.238,-0.123,0.042,0.080,0.113],"elephant":[-0.770,0.191,-0.107,-0.187,-0.130,0.158,0.112,0.082,-0.204,-0.374,-0.113,0.175,-0.333,0.160,0.041,-0.041],"cow":[-0.640,0.116,-0.222,-0.012,-0.291,0.089,0.189,0.069,-0.137,-0.310,0.061,0.285,-0.026,0.158,-0.088,0.131],"sheep":[-0.803,0.166,-0.251,-0.057,-0.290,0.068,0.203,0.047,-0.116,-0.402,-0.044,0.152,-0.039,0.054,-0.086,-0.214],"chicken":[-0.803,0.305,-0.306,0.107,-0.201,-0.246,0.106,0.172,0.142,-0.160,0.089,0.158,0.115,-0.052,-0.139,0.012],"mother":[-0.131,0.665,0.315,-0.213,-0.354,0.072,-0.009,0.115,-0.088,0.099,0.017,-0.103,0.062,0.162,0.031,0.057],"father":[0.109,0.450,0.394,-0.274,-0.282,0.012,0.060,0.170,-0.075,0.023,0.048,-0.093,0.111,-0.019,0.123,0.045],"sister":[-0.152,0.437,0.329,-0.272,-0.268,0.069,-0.144,0.118,-0.171,0.084,-0.184,-0.119,0.157,0.155,0.014,0.094],"brother":[0.118,0.401,0.374,-0.323,-0.236,-0.042,-0.018,0.224,-0.153,-0.090,0.050,-0.083,0.175,-0.014,0.169,0.005],"family":[-0.104,0.246,0.136,-0.169,-0.360,0.132,0.063,0.193,0.011,0.052,-0.112,0.018,0.070,-0.053,0.124,0.057],"friend":[0.058,0.583,0.379,-0.161,-0.194,-0.024,-0.074,0.250,-0.044,0.041,-0.064,-0.108,0.115,0.015,0.120,0.073],"people":[0.363,0.187,-0.060,0.006,-0.240,0.212,0.032,-0.113,0.036,0.005,-0.084,0.139,0.027,-0.076,-0.058,-0.231],"person":[0.162,0.301,0.194,0.119,-0.194,0.081,-0.062,0.005,-0.066,-0.006,0.175,0.061,-0.110,-0.022,-0.059,-0.045],"child":[-0.014,0.228,0.326,0.007,-0.397,0.125,0.006,0.018,-0.082,-0.050,0.102,-0.096,-0.110,0.166,-0.061,0.016],"children":[0.006,0.274,0.207,-0.069,-0.370,0.152,0.011,-0.032,0.070,-0.024,-0.035,-0.094,-0.001,0.143,-0.112,-0.161],"man":[0.121,0.567,0.195,-0.205,-0.092,0.090,-0.058,0.149,-0.111,-0.101,0.117,-0.020,-0.107,-0.076,0.037,0.113],"woman":[-0.103,0.573,0.281,-0.207,-0.244,0.098,-0.045,0.071,-0.135,0.022,0.132,-0.008,-0.077,0.035,0.004,0.131],"boy":[-0.238,0.587,0.281,-0.167,-0.177,0.062,-0.170,0.135,-0.203,-0.124,0.061,-0.031,-0.020,0.094,-0.031,0.118],"girl":[-0.340,0.629,0.293,-0.159,-0.187,0.063,-0.073,0.105,-0.180,-0.015,0.027,-0.051,-0.072,0.101,-0.075,0.135],"baby":[-0.417,0.558,0.003,0.055,-0.310,0.007,-0.106,0.153,-0.045,-0.125,0.059,-0.125,-0.046,0.249,-0.072,0.210],"music":[-0.280,-0.044,0.312,0.007,0.280,0.048,0.019,0.117,0.065,0.135,-0.222,-0.158,0.302,-0.047,-0.216,-0.116],"song":[-0.279,0.301,0.188,-0.039,0.303,0.020,0.054,0.276,-0.211,0.081,-0.096,-0.015,0.146,0.121,-0.249,-0.035],"art":[-0.337,-0.255,0.387,-0.034,0.216,0.095,0.181,0.090,0.289,0.130,-0.244,-0.128,0.016,-0.117,0.039,-0.020],"paint":[-0.527,0.002,-0.100,0.135,0.098,0.092,0.030,0.099,0.162,0.037,0.209,-0.151,-0.065,-0.103,0.386,-0.018],"painting":[-0.522,-0.071,0.288,-0.025,0.167,0.113,0.230,0.178,0.176,0.198,0.054,-0.182,-0.114,-0.049,0.183,-0.089],"draw":[0.292,-0.156,-0.179,0.022,0.346,-0.297,0.117,-0.030,-0.033,-0.074,-0.059,-0.008,-0.012,0.056,0.208,-0.271],"drawing":[0.105,-0.293,0.033,0.058,0.297,-0.022,0.135,0.103,0.067,0.173,0.075,-0.003,-0.051,-0.014,0.097,-0.346],"picture":[-0.043,0.000,0.145,0.154,0.273,0.167,-0.047,0.224,-0.053,0.229,-0.065,-0.057,-0.074,0.069,0.078,0.228],"colour":[-0.813,-0.230,-0.038,0.074,0.296,0.233,0.137,0.087,-0.111,0.135,0.262,0.021,0.064,0.020,0.183,-0.040],"color":[-0.627,-0.123,0.007,0.211,0.297,0.229,0.051,0.098,0.077,0.146,0.172,-0.036,0.100,-0.002,0.185,0.078],"film":[-0.167,-0.013,0.333,-0.042,0.276,0.093,0.078,0.256,-0.128,0.067,-0.133,-0.096,0.040,0.006,-0.279,0.072],"movie":[-0.096,0.233,0.225,0.095,0.234,0.064,-0.065,0.267,-0.117,0.055,-0.188,-0.095,-0.056,-0.026,-0.292,0.108],"story":[-0.076,0.152,0.299,0.047,0.172,0.192,-0.020,0.242,-0.049,0.244,-0.096,0.101,-0.099,0.059,-0.120,0.171],"poem":[-0.480,0.146,0.399,-0.006,0.250,0.034,0.320,0.279,-0.183,0.343,0.034,0.203,-0.068,0.087,-0.125,-0.219],"dance":[-0.462,0.287,0.231,-0.095,0.346,-0.022,-0.014,-0.010,0.100,0.019,-0.111,-0.145,0.067,-0.028,-0.176,-0.110],"food":[-0.314,-0.124,-0.287,0.176,-0.347,0.003,0.085,0.019,0.208,-0.041,-0.072,0.061,0.189,-0.040,-0.116,0.002],"bread":[-0.767,0.286,-0.274,0.191,-0.161,-0.290,0.155,0.219,0.201,0.126,0.057,0.019,0.093,-0.142,-0.003,-0.125],"milk":[-0.754,0.043,-0.329,0.165,-0.297,-0.159,0.194,0.085,0.117,-0.108,0.141,-0.023,0.250,0.001,-0.041,0.020],"cheese":[-0.937,0.156,-0.207,0.175,-0.064,-0.327,0.234,0.161,0.174,-0.053,0.099,0.006,0.067,-0.170,-0.003,-0.028],"meat":[-0.688,0.103,-0.322,0.198,-0.269,-0.144,0.215,0.145,0.151,-0.209,0.172,0.183,0.086,-0.037,-0.136,0.001],"rice":[-0.279,-0.025,-0.285,-0.003,-0.159,-0.189,0.281,0.128,0.224,-0.001,0.023,0.146,0.226,-0.025,0.012,0.026],"cake":[-0.984,0.350,-0.236,0.147,0.025,-0.241,0.032,0.250,0.224,0.205,0.060,-0.001,0.012,0.060,0.137,0.069],"tea":[-0.771,0.108,-0.309,-0.049,-0.088,-0.251,0.133,0.119,0.164,0.039,-0.053,0.124,0.245,-0.211,0.072,-0.058],"coffee":[-0.714,0.022,-0.318,0.075,-0.209,-0.215,0.030,0.107,0.252,0.098,-0.105,0.030,0.244,-0.214,0.007,0.105],"sugar":[-0.685,-0.079,-0.402,0.056,-0.151,-0.191,0.261,0.063,0.142,-0.102,0.080,-0.108,0.278,-0.108,0.082,0.098],"dinner":[-0.377,0.439,-0.069,-0.060,-0.076,-0.395,-0.031,0.111,0.322,0.288,-0.080,0.137,-0.053,0.017,-0.097,-0.018],"lunch":[-0.353,0.280,-0.125,-0.071,-0.133,-0.494,-0.162,0.029,0.269,0.211,0.067,0.214,-0.018,-0.049,-0.177,-0.103],"breakfast":[-0.592,0.310,-0.158,-0.005,-0.124,-0.398,-0.126,0.071,0.281,0.251,-0.149,0.166,0.082,-0.058,-0.209,-0.031],"football":[0.141,-0.118,0.097,-0.257,0.284,-0.269,0.192,-0.143,0.010,-0.323,-0.159,0.104,-0.008,-0.021,0.061,0.019],"tennis":[-0.188,0.130,0.144,-0.187,0.236,-0.361,-0.037,-0.249,-0.001,-0.185,-0.179,-0.062,0.019,-0.107,0.118,0.218],"cricket":[-0.090,0.008,-0.021,-0.231,0.164,-0.337,0.172,-0.197,-0.132,-0.257,-0.124,0.301,0.063,-0.130,-0.066,-0.035],"rugby":[-0.051,-0.159,0.051,-0.290,0.292,-0.297,0.234,-0.234,-0.165,-0.369,-0.184,0.118,0.010,-0.113,0.024,-0.051],"game":[0.223,-0.027,0.008,-0.029,0.467,-0.235,-0.071,0.021,-0.040,-0.275,0.012,0.021,0.035,0.121,-0.026,-0.024],"match":[0.221,-0.001,-0.083,-0.194,0.405,-0.393,0.002,-0.056,-0.163,-0.193,0.145,0.086,0.106,0.075,0.073,-0.063],"team":[0.401,-0.066,0.064,-0.243,0.268,-0.243,0.018,-0.150,0.014,-0.411,-0.025,0.007,0.045,0.051,0.151,0.047],"goal":[0.346,-0.283,-0.011,-0.097,0.319,-0.322,0.088,-0.029,-0.073,-0.154,0.035,-0.096,-0.077,0.195,0.118,-0.221],"score":[0.211,-0.129,0.055,0.007,0.461,-0.371,0.079,0.053,-0.114,-0.080,0.165,-0.120,-0.019,0.122,-0.078,-0.258],"win":[0.450,0.106,-0.105,-0.159,0.327,-0.455,0.104,-0.058,-0.154,-0.226,-0.090,-0.033,-0.007,0.077,0.197,-0.022],"won":[0.268,-0.134,0.032,-0.362,0.314,-0.407,0.192,0.083,-0.159,-0.211,-0.104,-0.107,0.051,0.013,0.096,0.057],"lose":[0.572,0.171,-0.217,0.185,-0.008,-0.194,0.031,-0.113,-0.114,-0.187,-0.028,-0.173,0.003,0.060,0.150,-0.012],"lost":[0.433,-0.037,-0.152,-0.216,0.088,-0.180,0.034,0.076,-0.191,-0.107,-0.036,-0.143,0.159,0.026,0.173,0.076],"science":[-0.164,-0.582,0.439,0.055,0.112,0.095,0.226,-0.247,0.263,-0.051,-0.141,0.002,0.083,0.033,-0.024,0.151],"maths":[-0.676,-0.440,0.621,0.198,0.050,-0.276,0.148,-0.403,-0.012,-0.051,0.050,-0.104,-0.084,-0.228,0.105,-0.090],"history":[0.164,-0.191,0.287,-0.125,0.194,0.059,0.328,-0.032,0.049,-0.031,-0.089,0.039,-0.083,0.036,-0.077,0.139],"geography":[-0.408,-0.389,0.342,0.100,0.122,0.153,0.441,-0.423,0.168,0.035,-0.101,0.101,-0.082,-0.085,-0.049,0.031],"english":[-0.161,-0.166,0.305,-0.171,0.151,-0.047,0.246,0.094,-0.008,-0.025,-0.006,0.058,0.089,-0.135,-0.149,-0.199],"physics":[-0.353,-0.622,0.452,0.055,0.208,0.007,0.236,-0.406,0.213,-0.015,0.149,-0.053,0.108,-0.032,0.115,0.120],"chemistry":[-0.439,-0.362,0.420,0.085,0.131,-0.077,0.339,-0.347,0.325,-0.044,0.151,-0.169,0.164,-0.028,0.156,0.153],"biology":[-0.608,-0.564,0.420,0.085,-0.023,0.127,0.288,-0.429,0.244,-0.181,0.096,0.009,0.072,0.119,0.087,0.161],"language":[-0.147,-0.331,0.342,0.187,0.090,0.198,0.230,0.013,-0.032,0.046,-0.013,0.290,0.120,-0.115,-0.170,-0.176],"word":[-0.061,0.105,0.157,0.245,0.099,0.156,0.087,0.159,-0.062,0.047,0.047,0.313,-0.049,0.007,-0.034,-0.053],"sentence":[0.157,-0.150,0.258,-0.021,-0.239,-0.211,0.117,0.062,-0.268,0.161,0.455,0.142,-0.200,-0.048,-0.056,0.058],"number":[0.248,-0.474,-0.033,-0.004,0.004,0.102,0.023,0.063,-0.058,-0.064,0.067,-0.008,0.017,-0.014,-0.154,-0.242],"doctor":[-0.050,0.203,0.486,-0.067,-0.321,-0.011,-0.044,-0.077,-0.035,-0.124,0.207,0.062,0.102,0.204,-0.051,0.038],"nurse":[-0.326,0.368,0.382,-0.171,-0.523,-0.083,-0.064,-0.221,-0.080,-0.069,0.126,-0.101,0.056,0.147,-0.077,0.027],"hospital":[-0.054,-0.052,0.140,-0.404,-0.443,-0.011,-0.139,-0.362,-0.018,0.086,0.036,0.038,0.077,0.108,0.030,-0.026],"medicine":[-0.318,-0.344,0.238,0.019,-0.299,0.006,0.262,-0.291,0.276,-0.133,0.085,-0.043,0.210,0.137,-0.056,0.037],"ill":[0.225,0.405,0.025,-0.084,-0.413,0.058,0.108,-0.224,-0.223,-0.008,0.179,-0.052,0.117,-0.064,-0.093,0.053],"sick":[0.025,0.695,-0.032,0.104,-0.468,-0.020,0.013,-0.184,-0.118,-0.079,0.061,0.036,0.027,0.147,-0.175,-0.069],"health":[0.180,-0.410,0.049,0.071,-0.434,0.030,0.146,-0.280,0.074,-0.045,-0.061,0.045,0.103,0.071,-0.044,0.132],"police":[0.281,-0.167,0.078,-0.327,-0.281,0.097,-0.211,-0.100,-0.110,-0.027,0.104,0.278,-0.042,-0.205,0.155,-0.194],"officer":[0.193,-0.267,0.269,-0.324,-0.292,-0.008,-0.147,-0.009,-0.175,-0.065,0.110,0.089,0.052,-0.164,0.183,0.107],"lawyer":[0.268,0.012,0.435,-0.189,-0.319,-0.182,0.043,0.114,-0.078,0.064,0.043,0.156,0.093,-0.184,0.174,0.085],"farmer":[-0.470,0.215,0.074,-0.189,-0.448,-0.148,0.196,0.160,-0.027,-0.159,-0.060,-0.000,0.043,-0.217,-0.045,0.042],"chef":[-0.740,0.410,0.242,-0.065,-0.049,-0.384,-0.002,0.111,0.191,-0.037,-0.167,-0.076,0.058,-0.209,-0.075,0.104],"artist":[-0.451,0.057,0.518,-0.117,0.176,0.043,0.137,0.301,-0.030,0.029,-0.161,-0.248,0.131,-0.034,-0.018,-0.029],"musician":[-0.446,0.277,0.450,-0.190,0.055,-0.102,0.135,0.102,-0.158,-0.022,-0.090,-0.271,0.297,-0.144,-0.217,-0.118],"king":[0.012,0.165,0.148,-0.260,-0.057,0.002,0.120,0.278,-0.162,0.057,-0.093,0.137,0.109,0.026,0.149,-0.030],"queen":[-0.389,0.317,0.171,-0.382,-0.027,0.012,0.078,0.187,-0.167,0.138,-0.116,-0.039,-0.030,0.141,0.126,0.027],"country":[0.423,-0.156,-0.166,-0.115,-0.067,0.116,0.176,-0.013,-0.017,-0.004,-0.230,0.033,0.024,-0.120,-0.107,0.063],"government":[0.628,-0.527,-0.105,-0.023,-0.272,0.025,0.140,0.044,-0.108,0.090,-0.035,0.199,0.008,-0.168,0.142,-0.034],"law":[0.368,-0.529,0.295,-0.022,-0.211,0.042,0.205,-0.020,0.091,0.010,0.106,0.123,-0.140,-0.075,0.044,0.051],"vote":[0.534,-0.191,-0.136,0.048,-0.016,-0.240,0.070,0.010,-0.131,0.131,0.067,0.286,-0.023,0.002,0.128,-0.061],"election":[0.450,-0.335,-0.068,-0.115,0.061,-0.173,0.122,-0.007,-0.152,0.160,0.060,0.309,-0.018,-0.068,0.138,0.068],"war":[0.392,-0.099,0.032,-0.182,-0.020,0.179,0.251,0.045,-0.206,0.055,0.010,0.099,-0.049,-0.073,0.032,0.033],"peace":[0.429,-0.041,-0.009,-0.101,0.033,0.026,0.227,-0.087,-0.029,0.216,-0.169,0.155,-0.090,0.057,0.189,-0.003],"army":[0.257,-0.247,0.075,-0.323,-0.155,0.092,-0.006,-0.013,-0.199,-0.071,0.101,0.161,-0.025,-0.180,0.236,-0.158],"sadness":[-0.111,0.684,-0.024,0.142,0.038,0.018,0.274,-0.271,-0.397,0.445,-0.030,0.008,0.233,0.086,0.201,-0.056],"beautiful":[-0.504,0.650,0.092,-0.033,0.216,0.206,0.097,0.105,0.002,0.148,-0.134,-0.140,-0.194,-0.106,-0.040,-0.002],"ugly":[-0.162,0.667,-0.028,0.165,0.177,0.061,0.067,0.003,-0.285,0.040,0.073,0.160,-0.242,-0.148,0.011,0.208],"clever":[-0.320,0.185,0.257,0.400,0.262,-0.061,-0.039,0.177,-0.115,-0.109,0.117,-0.041,-0.133,-0.246,-0.072,-0.214],"smart":[-0.134,0.053,0.196,0.346,0.071,-0.008,-0.330,0.035,0.006,-0.194,-0.107,-0.113,-0.033,-0.328,-0.027,0.104],"stupid":[-0.011,0.653,0.119,0.436,0.055,-0.043,0.041,-0.004,-0.195,-0.148,0.059,0.211,-0.240,-0.261,-0.128,0.036],"kind":[0.223,0.345,0.031,0.250,0.116,0.185,0.059,-0.007,0.047,0.006,0.043,-0.033,-0.100,-0.094,-0.052,0.109],"cruel":[-0.154,0.521,0.156,0.172,-0.031,0.038,0.284,-0.079,-0.339,-0.057,0.251,0.219,-0.177,-0.231,-0.089,-0.019],"gentle":[-0.589,0.598,-0.037,0.127,0.154,0.093,0.128,-0.161,-0.197,0.248,0.134,-0.163,-0.029,-0.069,-0.052,-0.085],"strong":[0.368,-0.167,-0.171,0.044,0.160,0.108,0.188,-0.006,-0.236,0.045,0.046,-0.159,0.191,-0.157,0.071,0.025],"weak":[0.261,-0.232,-0.242,0.230,0.029,0.044,0.100,-0.074,-0.368,0.029,0.162,-0.145,0.140,-0.197,0.066,0.110],"young":[0.126,0.455,0.261,-0.147,-0.087,0.058,0.058,0.056,0.006,-0.180,-0.080,-0.224,0.027,-0.015,-0.019,-0.120],"very":[0.280,0.330,-0.057,0.150,0.127,0.181,0.121,-0.040,0.059,-0.029,0.116,-0.023,0.008,-0.197,-0.063,0.033],"really":[0.383,0.599,-0.003,0.272,0.133,0.037,-0.011,-0.064,0.069,-0.089,-0.048,-0.072,-0.044,-0.069,-0.042,0.099],"quite":[0.217,0.440,-0.046,0.226,0.211,0.124,0.128,-0.054,-0.011,0.008,0.103,-0.043,-0.033,-0.229,-0.108,0.043],"always":[0.398,0.522,0.022,0.205,0.135,0.128,0.040,0.011,0.097,-0.054,0.017,-0.023,-0.052,-0.108,0.012,-0.016],"never":[0.577,0.418,0.069,0.020,0.066,0.083,0.030,0.061,0.040,-0.097,0.072,0.008,0.015,0.051,0.016,0.031],"sometimes":[0.025,0.319,-0.055,0.180,0.077,0.298,0.046,0.026,0.051,0.025,0.221,-0.007,-0.008,-0.106,-0.094,-0.187],"often":[0.141,0.125,-0.028,0.156,0.030,0.314,0.068,0.043,0.077,-0.001,0.167,-0.022,0.040,-0.136,-0.066,-0.224],"here":[0.436,0.220,-0.119,-0.123,0.097,-0.030,0.059,-0.064,0.180,0.069,-0.108,0.219,0.011,-0.053,0.021,0.074],"there":[0.444,0.050,-0.103,-0.016,0.019,0.223,0.058,-0.048,0.134,0.069,0.055,0.109,-0.069,-0.062,-0.107,-0.094],"now":[0.522,-0.098,-0.078,-0.067,-0.035,0.105,-0.008,0.015,0.158,-0.082,-0.120,-0.046,-0.017,-0.065,-0.043,0.092],"then":[0.309,0.018,-0.020,-0.214,0.058,0.003,-0.132,0.100,0.116,-0.035,0.207,-0.019,0.053,0.108,0.055,-0.072],"when":[0.484,0.164,-0.056,-0.198,0.029,0.039,-0.094,0.076,0.026,-0.045,0.193,0.001,0.107,0.092,-0.007,0.039],"where":[0.206,-0.070,-0.052,-0.316,-0.023,0.212,-0.042,-0.089,0.208,0.012,-0.073,0.016,-0.037,-0.049,-0.010,-0.075],"why":[0.541,0.404,0.045,0.231,-0.039,0.120,-0.010,-0.002,0.123,-0.081,-0.032,0.099,0.002,0.046,0.041,0.089],"how":[0.458,0.249,0.046,0.310,-0.011,0.190,0.006,-0.025,0.178,-0.061,-0.005,0.031,-0.017,0.040,0.015,0.052],"what":[0.570,0.283,0.037,0.213,0.047,0.147,0.070,0.023,0.115,-0.007,-0.032,0.086,-0.052,0.011,0.004,0.096],"who":[0.487,0.297,0.226,-0.230,-0.185,-0.048,0.017,0.134,0.032,-0.206,0.036,-0.077,0.095,-0.054,0.081,-0.081]};

/* ============================================================
   LAB: meaning-space
   Type a sentence; every word lands at its REAL position — the
   coordinates come from GloVe embeddings (Stanford NLP, trained
   on Wikipedia + Gigaword), PCA-projected for display. Cosine
   similarity is measured across 16 real dimensions.
   ============================================================ */
var MS_THEMES = {
  study:   { col: '#c64b74', label: 'STUDY' },
  feeling: { col: '#b08ae0', label: 'FEELINGS' },
  tech:    { col: '#5db8e8', label: 'TECH' },
  money:   { col: '#e8b45d', label: 'MONEY' },
  nature:  { col: '#6fcf97', label: 'NATURE' }
};
var MS_LEX = {
  study: ['essay', 'exam', 'revise', 'revision', 'homework', 'lesson', 'teacher', 'pupil', 'student', 'school', 'notes', 'grade', 'read', 'write', 'learn', 'question', 'answer', 'book', 'library', 'study', 'test', 'classroom', 'university'],
  feeling: ['love', 'fear', 'joy', 'hope', 'worry', 'calm', 'happy', 'sad', 'angry', 'proud', 'nervous', 'excited', 'feel', 'heart', 'dream', 'lonely', 'brave', 'anxious', 'grief', 'delight'],
  tech: ['code', 'computer', 'algorithm', 'data', 'model', 'robot', 'phone', 'app', 'software', 'network', 'digital', 'machine', 'internet', 'screen', 'program', 'laptop', 'keyboard', 'online', 'website', 'email', 'electric', 'circuit', 'battery', 'engine'],
  money: ['money', 'cash', 'loan', 'deposit', 'account', 'invest', 'price', 'market', 'wealth', 'coin', 'savings', 'pay', 'credit', 'budget', 'bank', 'tax', 'debt', 'salary', 'profit', 'cost'],
  nature: ['river', 'water', 'tree', 'forest', 'mountain', 'ocean', 'flower', 'garden', 'rain', 'sun', 'wind', 'field', 'bird', 'fruit', 'apple', 'seed', 'grass', 'leaf', 'stone', 'sea', 'lake', 'cloud', 'storm', 'beach', 'snow', 'spring']
};
var MS_W2T = {};
Object.keys(MS_LEX).forEach(function (t) {
  MS_LEX[t].forEach(function (w) { if (!(w in MS_W2T)) MS_W2T[w] = t; });
});
/* Ambiguous words: a static map blends their senses into ONE position
   (look where "bank" really sits — among the money words). Context cues
   let us illustrate the direction a contextual model would move it. */
var MS_SENSES = {
  bank:    { money: ['cash', 'money', 'loan', 'deposit', 'account', 'savings', 'pay'], nature: ['river', 'water', 'grass', 'willow', 'fish', 'walked', 'sat'] },
  apple:   { tech: ['computer', 'phone', 'app', 'software', 'launch', 'company'], nature: ['tree', 'fruit', 'eat', 'ate', 'sweet', 'orchard', 'seed', 'garden'] },
  current: { nature: ['river', 'water', 'ocean', 'sea', 'tide', 'swim'], tech: ['electric', 'wire', 'power', 'circuit', 'battery'] },
  spring:  { nature: ['flower', 'garden', 'rain', 'sun', 'season', 'warm'], tech: ['metal', 'coil', 'machine', 'engine'] }
};
function msVecOf(w) { return (typeof MS_VEC !== 'undefined') ? MS_VEC[w] : null; }
window.DI_MS_VEC = (typeof MS_VEC !== 'undefined') ? MS_VEC : null; /* read-only debug/inspection handle */
function msCos(a, b) {
  var dot = 0, na = 0, nb = 0;
  for (var i = 0; i < a.length; i++) { dot += a[i] * b[i]; na += a[i] * a[i]; nb += b[i] * b[i]; }
  return dot / (Math.sqrt(na * nb) || 1);
}
LABS['meaning-space'] = {
  title: 'The meaning-space — real embeddings you can touch',
  tag: 'Embeddings',
  blurb: 'Every word lands at its real position in a genuine embedding — GloVe vectors trained on Wikipedia, projected to 2-D. Click two stars and the similarity score is measured across 16 real dimensions. Watch where "bank" actually lives, and what context would do to it.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-ms-inrow">' +
          '<input class="lab-input" id="' + uid + '-in" value="The pupil walked along the river bank to revise for the exam" aria-label="Sentence to map">' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-go">Map it</button>' +
        '</div>' +
        '<div class="lab-chip-row" id="' + uid + '-chips">' +
          '<button class="lab-chip" data-t="The pupil walked along the river bank to revise for the exam">river bank</button>' +
          '<button class="lab-chip" data-t="She paid the loan into her account at the bank">money bank</button>' +
          '<button class="lab-chip" data-t="He ate a sweet apple from the tree in the garden">apple · fruit</button>' +
          '<button class="lab-chip" data-t="The company will launch the new apple phone app">apple · tech</button>' +
        '</div>' +
        '<div class="lab-ms-caps" id="' + uid + '-caps"></div>' +
        '<div class="lab-canvas-wrap lab-canvas-dark lab-canvas-tall"><canvas id="' + uid + '-cv" tabindex="0" role="application" aria-label="Word map. Use arrow keys to move between word stars, Enter to select a star, Escape to clear selection."></canvas>' +
          '<span class="lab-canvas-tag">// real GloVe vectors · Stanford NLP · 2-D projection</span>' +
          '<div class="lab-zoom-btns"><button class="lab-btn lab-btn-sm" id="' + uid + '-zi" aria-label="Zoom in">+</button><button class="lab-btn lab-btn-sm" id="' + uid + '-zo" aria-label="Zoom out">−</button></div></div>' +
        '<p class="lab-note" id="' + uid + '-read" aria-live="polite">Click any two word-stars to measure their real similarity — scored across 16 dimensions of a genuine embedding.</p>' +
        '<div class="lab-pattern" id="' + uid + '-quiz"><strong>Prove you\'ve got it:</strong> before you click anything — which is closer in meaning to <em>river</em>: <em>water</em> or <em>money</em>?' +
          '<span class="lab-btn-row" style="margin-top:8px">' +
          '<button class="lab-btn lab-btn-sm" data-msp="water">water</button>' +
          '<button class="lab-btn lab-btn-sm" data-msp="money">money</button></span></div>' +
        '<div class="lab-btn-row" style="align-items:center">' +
          '<span class="lab-label" style="margin:0">🧮 Word maths</span>' +
          '<input class="lab-input" id="' + uid + '-aa" value="pay" style="flex:0 1 96px;min-width:72px" aria-label="Word A">' +
          '<span aria-hidden="true">−</span>' +
          '<input class="lab-input" id="' + uid + '-ab" value="money" style="flex:0 1 96px;min-width:72px" aria-label="Word B, subtracted">' +
          '<span aria-hidden="true">＋</span>' +
          '<input class="lab-input" id="' + uid + '-ac" value="water" style="flex:0 1 96px;min-width:72px" aria-label="Word C, added">' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-aeq">= ?</button>' +
        '</div>' +
        '<p class="lab-note" id="' + uid + '-aout" aria-live="polite">The famous version is <em>king − man + woman ≈ queen</em>. This mini-vocabulary has its own: try <em>pay − money + water</em>, or <em>ocean − water + money</em>. Directions in this space are meanings.</p>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var S = { stars: [], sel: [], z: 1, panX: 0, panY: 0, W: 0, H: 0, cx: 0, cy: 0, R: 0, kb: -1, an: null };
    function hash(s) {
      var h = 0;
      for (var i = 0; i < s.length; i++) h = s.charCodeAt(i) + ((h << 5) - h);
      return h;
    }
    function toScreen(s) { return { x: S.cx + s.vx * S.z + S.panX, y: S.cy - s.vy * S.z + S.panY }; }
    function senseOf(word, ctxWords) {
      if (!MS_SENSES[word]) return null;
      var best = null, bestScore = 0, bestCue = [];
      Object.keys(MS_SENSES[word]).forEach(function (th) {
        var cues = MS_SENSES[word][th], score = 0, matched = [];
        ctxWords.forEach(function (c) {
          if (cues.indexOf(c) > -1) { score += 2; matched.push(c); }
          else if (MS_W2T[c] === th) { score += 1; matched.push(c); }
        });
        if (score > bestScore) { bestScore = score; best = th; bestCue = matched; }
      });
      return best ? { theme: best, cue: bestCue } : null;
    }
    function centroidOf(words) {
      var sx = 0, sy = 0, n = 0;
      words.forEach(function (w) {
        var v = msVecOf(w);
        if (v) { sx += v[0]; sy += v[1]; n++; }
      });
      return n ? { x: sx / n, y: sy / n } : null;
    }
    function process() {
      var input = el(uid + '-in');
      var wrap = cv.parentElement;
      var W = wrap.clientWidth, H = Math.max(240, Math.round(W * 0.55));
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = W + 'px'; cv.style.height = H + 'px';
      S.ctx = cv.getContext('2d'); S.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      S.W = W; S.H = H; S.cx = W / 2; S.cy = H / 2; S.R = Math.min(W, H) * 0.46;
      var raw = (input.value.match(/[A-Za-z']+/g)) || [];
      var lower = raw.map(function (w) { return w.toLowerCase(); });
      var freq = {}, order = [];
      lower.forEach(function (w) {
        if (!(w in freq)) order.push(w);
        freq[w] = (freq[w] || 0) + 1;
      });
      var capHTML = '';
      S.stars = [];
      order.forEach(function (lw) {
        var vec = msVecOf(lw);
        var others = lower.filter(function (w) { return w !== lw; });
        var sense = senseOf(lw, others);
        var theme = MS_W2T[lw] || (sense && sense.theme) || null;
        var th = theme ? MS_THEMES[theme] : { col: '#8fa3b8', label: 'not in mini-vocab' };
        var vx, vy, vx1, vy1, nudged = false;
        if (vec) {
          vx = vec[0] * S.R; vy = vec[1] * S.R;
          vx1 = vx; vy1 = vy;
          /* a static map holds ONE blended home per word; when context
             resolves a sense, show the direction a contextual model
             would move it: 45% toward that sense's cue centroid —
             animated, so "context moves meaning" is watched, not told */
          if (sense) {
            var c = centroidOf(MS_SENSES[lw][sense.theme]);
            if (c) { vx1 = vx + (c.x * S.R - vx) * 0.45; vy1 = vy + (c.y * S.R - vy) * 0.45; nudged = true; }
          }
        } else {
          var h = hash(lw), a = (Math.abs(h) % 360) * Math.PI / 180;
          var rr = S.R * (0.1 + ((((h >> 3) % 100) + 100) % 100) / 100 * 0.15);
          vx = Math.cos(a) * rr; vy = Math.sin(a) * rr;
          vx1 = vx; vy1 = vy;
        }
        S.stars.push({ word: lw, real: !!vec, vec: vec, theme: theme, col: th.col, freq: freq[lw],
                       sense: sense, nudged: nudged, vx: vx, vy: vy, vx0: vx, vy0: vy, vx1: vx1, vy1: vy1 });
        capHTML += '<span class="lab-ms-cap" style="border-color:' + th.col + ';color:' + th.col + '">' +
          esc(lw) + (nudged && sense ? '→' + MS_THEMES[sense.theme].label : '') +
          (freq[lw] > 1 ? ' ×' + freq[lw] : '') + '</span>';
      });
      el(uid + '-caps').innerHTML = capHTML || '<span class="lab-note">type a sentence…</span>';
      S.sel = []; S.z = 1; S.panX = 0; S.panY = 0; S.kb = -1; S.an = null;
      render(); readout();
      var hasNudge = S.stars.some(function (s) { return s.nudged; });
      if (hasNudge && !reducedMotion()) {
        var t = 0;
        loop(uid + '-nudge', cv, function () {
          t += 0.04;
          var e2 = 1 - Math.pow(1 - Math.min(1, t), 3);
          S.stars.forEach(function (s) {
            s.vx = s.vx0 + (s.vx1 - s.vx0) * e2;
            s.vy = s.vy0 + (s.vy1 - s.vy0) * e2;
          });
          render();
          if (t >= 1) return false;
        });
      } else {
        S.stars.forEach(function (s) { s.vx = s.vx1; s.vy = s.vy1; });
        render();
      }
    }
    function render() {
      var ctx = S.ctx; if (!ctx) return;
      var W = S.W, H = S.H, cx = S.cx, cy = S.cy;
      ctx.clearRect(0, 0, W, H);
      var g = ctx.createRadialGradient(cx, cy, 8, cx, cy, Math.max(W, H) * 0.7);
      g.addColorStop(0, '#0d1526'); g.addColorStop(1, '#060a14');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = 'rgba(226,232,240,.4)';
      ctx.beginPath(); ctx.arc(cx + S.panX, cy + S.panY, 2, 0, Math.PI * 2); ctx.fill();
      /* links between words that are REALLY similar (16-d cosine > .45) */
      for (var i = 0; i < S.stars.length; i++) {
        for (var j = i + 1; j < S.stars.length; j++) {
          var a2 = S.stars[i], b2 = S.stars[j];
          if (!a2.vec || !b2.vec) continue;
          var c = msCos(a2.vec, b2.vec);
          if (c > 0.45) {
            var pa = toScreen(a2), pb = toScreen(b2);
            ctx.strokeStyle = 'rgba(180,196,222,' + Math.min(0.55, 0.1 + c * 0.4) + ')';
            ctx.lineWidth = 0.6 + c;
            ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y); ctx.stroke();
          }
        }
      }
      /* selection rays from the map's centre (the embedding mean) */
      if (S.sel.length >= 1) {
        S.sel.forEach(function (si) {
          var s = S.stars[si], p = toScreen(s);
          ctx.strokeStyle = s.col; ctx.lineWidth = 2; ctx.setLineDash([4, 3]);
          ctx.beginPath(); ctx.moveTo(cx + S.panX, cy + S.panY); ctx.lineTo(p.x, p.y); ctx.stroke();
          ctx.setLineDash([]);
        });
        if (S.sel.length === 2) {
          var A = toScreen(S.stars[S.sel[0]]), B = toScreen(S.stars[S.sel[1]]);
          ctx.strokeStyle = 'rgba(255,255,255,.75)'; ctx.lineWidth = 1.6; ctx.setLineDash([2, 4]);
          ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
          ctx.setLineDash([]);
        }
      }
      S.stars.forEach(function (s, i2) {
        var p = toScreen(s);
        var r = Math.min(12, 4 + (s.freq - 1) * 2.5);
        var seld = S.sel.indexOf(i2) > -1;
        ctx.save();
        ctx.shadowColor = s.col; ctx.shadowBlur = seld ? 22 : Math.min(18, 7 + (s.freq - 1) * 4);
        ctx.fillStyle = s.col;
        ctx.globalAlpha = s.real ? 1 : 0.55;
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        ctx.globalAlpha = 1;
        if (seld) {
          ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(p.x, p.y, r + 4, 0, Math.PI * 2); ctx.stroke();
        }
        if (s.nudged) {
          ctx.strokeStyle = 'rgba(255,255,255,.45)'; ctx.lineWidth = 1; ctx.setLineDash([2, 3]);
          ctx.beginPath(); ctx.arc(p.x, p.y, r + 7, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
        }
        ctx.font = '700 11px ' + cssVar('--mono', 'monospace');
        ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.strokeStyle = 'rgba(4,8,16,.85)';
        ctx.strokeText(s.word, p.x + r + 3, p.y + 4);
        ctx.fillStyle = seld ? '#ffffff' : '#dbe4f0';
        ctx.fillText(s.word, p.x + r + 3, p.y + 4);
      });
      /* keyboard focus ring */
      if (S.kb >= 0 && S.kb < S.stars.length) {
        var kp = toScreen(S.stars[S.kb]);
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5; ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.arc(kp.x, kp.y, 16, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
      }
      /* word-maths parallelogram: the same direction, applied twice */
      if (S.an) {
        function P2(x, y) { return { x: S.cx + x * S.z + S.panX, y: S.cy - y * S.z + S.panY }; }
        var A3 = P2(S.an.ax, S.an.ay), B3 = P2(S.an.bx, S.an.by),
            C3 = P2(S.an.cx2, S.an.cy2), T3 = P2(S.an.tx, S.an.ty);
        ctx.setLineDash([5, 4]); ctx.lineWidth = 1.6; ctx.strokeStyle = 'rgba(232,180,93,.9)';
        ctx.beginPath(); ctx.moveTo(B3.x, B3.y); ctx.lineTo(A3.x, A3.y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(C3.x, C3.y); ctx.lineTo(T3.x, T3.y); ctx.stroke();
        ctx.setLineDash([]);
        [[A3, S.an.a], [B3, S.an.b], [C3, S.an.c]].forEach(function (q) {
          ctx.fillStyle = '#e8b45d';
          ctx.beginPath(); ctx.arc(q[0].x, q[0].y, 4, 0, Math.PI * 2); ctx.fill();
          ctx.font = '700 11px ' + cssVar('--mono', 'monospace');
          ctx.fillText(q[1], q[0].x + 7, q[0].y - 7);
        });
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(T3.x, T3.y, 8, 0, Math.PI * 2); ctx.stroke();
        ctx.font = '700 11px ' + cssVar('--mono', 'monospace');
        ctx.fillStyle = '#fff'; ctx.fillText('≈ ' + S.an.nearest, T3.x + 11, T3.y + 4);
      }
    }
    function readout() {
      var out = el(uid + '-read');
      if (S.sel.length === 2) {
        var a = S.stars[S.sel[0]], b = S.stars[S.sel[1]];
        if (a.vec && b.vec) {
          var cos = msCos(a.vec, b.vec);
          var ang = Math.acos(Math.max(-1, Math.min(1, cos))) * 180 / Math.PI;
          var v = cos > 0.7 ? 'very similar meaning' : cos > 0.4 ? 'related meaning'
            : cos > 0.1 ? 'loosely related' : cos > -0.15 ? 'fairly unrelated' : 'opposite ends of meaning';
          out.innerHTML = '<strong>' + esc(a.word) + '</strong> ↔ <strong>' + esc(b.word) + '</strong> · cosine <strong>' +
            cos.toFixed(2) + '</strong> · angle <strong>' + ang.toFixed(0) + '°</strong> — ' + v +
            '. <span style="opacity:.75">(Measured across 16 dimensions of real GloVe vectors — the 2-D map is a flattened view.)</span>';
        } else {
          out.innerHTML = 'One of those words isn\'t in this lab\'s 387-word mini-vocabulary, so there\'s no real vector to measure. Try two coloured stars.';
        }
      } else if (S.sel.length === 1) {
        out.innerHTML = 'Selected <strong>' + esc(S.stars[S.sel[0]].word) + '</strong>. Click a second star to measure their real similarity.';
      } else {
        var note = null;
        for (var i = 0; i < S.stars.length; i++) {
          var st = S.stars[i];
          if (st.nudged && st.sense) {
            note = 'A static map gives “' + esc(st.word) + '” <em>one</em> blended home — look where it sits without context. ' +
              'Your sentence\'s cue words (<em>' + st.sense.cue.slice(0, 3).map(esc).join(', ') + '</em>) let us show the direction a contextual model would move it (dashed ring). Change the sentence and watch it shift.';
            break;
          }
        }
        out.innerHTML = note || 'Click any two word-stars to measure their real similarity — scored across 16 dimensions of a genuine embedding. Dim grey stars are words outside this lab\'s 387-word mini-vocabulary.';
      }
    }
    var down = false, moved = false, sx0 = 0, sy0 = 0, px0 = 0, py0 = 0;
    function hit(mx, my) {
      var best = -1, bd = 1e9;
      S.stars.forEach(function (s, i) {
        var p = toScreen(s);
        var r = Math.min(12, 4 + (s.freq - 1) * 2.5) + 8;
        var d = Math.hypot(mx - p.x, my - p.y);
        if (d <= r && d < bd) { bd = d; best = i; }
      });
      return best;
    }
    cv.addEventListener('pointerdown', function (e) {
      down = true; moved = false;
      var r = cv.getBoundingClientRect();
      sx0 = e.clientX - r.left; sy0 = e.clientY - r.top; px0 = S.panX; py0 = S.panY;
    });
    cv.addEventListener('pointermove', function (e) {
      if (!down) return;
      var r = cv.getBoundingClientRect();
      var dx = (e.clientX - r.left) - sx0, dy = (e.clientY - r.top) - sy0;
      if (moved || Math.abs(dx) + Math.abs(dy) > 5) {
        moved = true; S.panX = px0 + dx; S.panY = py0 + dy; render();
      }
    });
    cv.addEventListener('pointerup', function (e) {
      if (!down) return;
      down = false;
      if (moved) return;
      var r = cv.getBoundingClientRect();
      var h = hit(e.clientX - r.left, e.clientY - r.top);
      if (h >= 0) {
        var pos = S.sel.indexOf(h);
        if (pos > -1) S.sel.splice(pos, 1);
        else { S.sel.push(h); if (S.sel.length > 2) S.sel.shift(); }
        render(); readout();
      }
    });
    el(uid + '-zi').addEventListener('click', function () { S.z = Math.min(3, S.z * 1.25); render(); });
    el(uid + '-zo').addEventListener('click', function () { S.z = Math.max(0.5, S.z * 0.8); render(); });
    el(uid + '-go').addEventListener('click', process);
    el(uid + '-in').addEventListener('keydown', function (e) { if (e.key === 'Enter') process(); });
    el(uid + '-chips').addEventListener('click', function (e) {
      var c = e.target.closest('.lab-chip'); if (!c) return;
      el(uid + '-in').value = c.getAttribute('data-t');
      Array.prototype.forEach.call(el(uid + '-chips').children, function (x) { x.classList.toggle('active', x === c); });
      process();
    });
    /* keyboard path to the core interaction: arrows cycle stars, Enter selects */
    cv.addEventListener('keydown', function (e) {
      var n = S.stars.length; if (!n) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { S.kb = (S.kb + 1) % n; }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { S.kb = (S.kb - 1 + n) % n; }
      else if ((e.key === 'Enter' || e.key === ' ') && S.kb >= 0) {
        e.preventDefault();
        var pos = S.sel.indexOf(S.kb);
        if (pos > -1) S.sel.splice(pos, 1);
        else { S.sel.push(S.kb); if (S.sel.length > 2) S.sel.shift(); }
        render(); readout();
        return;
      } else if (e.key === 'Escape') {
        S.sel = []; S.kb = -1; render(); readout();
        return;
      } else { return; }
      e.preventDefault();
      render();
      var st2 = S.stars[S.kb];
      el(uid + '-read').innerHTML = 'Focused <strong>' + esc(st2.word) + '</strong>' +
        (st2.real ? '' : ' (outside the mini-vocabulary)') + ' — press Enter to select it.';
    });
    /* predict-then-check — this, not clicking around, is what completes the lab */
    el(uid + '-quiz').addEventListener('click', function (e) {
      var b = e.target.closest('[data-msp]'); if (!b) return;
      var guess = b.getAttribute('data-msp');
      var vr = msVecOf('river'), vw = msVecOf('water'), vm = msVecOf('money');
      if (!vr || !vw || !vm) return;
      var cw = msCos(vr, vw), cm = msCos(vr, vm);
      var right = (cw > cm) === (guess === 'water');
      el(uid + '-quiz').innerHTML = (right
          ? '✓ <strong>Predicted like an embedding.</strong> '
          : '✗ <strong>The vectors disagree with you.</strong> ') +
        'Measured for real: cosine(river, water) = <strong>' + cw.toFixed(2) +
        '</strong> vs cosine(river, money) = <strong>' + cm.toFixed(2) +
        '</strong>. Closeness here isn\'t a metaphor — it\'s a number, and you just checked it.';
      labComplete('meaning-space');
    });
    /* word maths: A − B + C ≈ ?, measured across all 16 dimensions */
    el(uid + '-aeq').addEventListener('click', function () {
      var a = (el(uid + '-aa').value || '').trim().toLowerCase();
      var b = (el(uid + '-ab').value || '').trim().toLowerCase();
      var c = (el(uid + '-ac').value || '').trim().toLowerCase();
      var va = msVecOf(a), vb = msVecOf(b), vc = msVecOf(c);
      var out = el(uid + '-aout');
      if (!va || !vb || !vc) {
        var missing = [!va && a, !vb && b, !vc && c].filter(Boolean).join('", "');
        out.innerHTML = '“' + esc(missing) + '” isn\'t in the 387-word mini-vocabulary — try words from the coloured clusters, e.g. pay − money + water.';
        return;
      }
      var target = va.map(function (v, i) { return v - vb[i] + vc[i]; });
      var best = [];
      Object.keys(MS_VEC).forEach(function (w) {
        if (w === a || w === b || w === c) return;
        best.push({ w: w, c: msCos(target, MS_VEC[w]) });
      });
      best.sort(function (x, y) { return y.c - x.c; });
      S.an = { a: a, b: b, c: c, nearest: best[0].w,
        ax: va[0] * S.R, ay: va[1] * S.R, bx: vb[0] * S.R, by: vb[1] * S.R,
        cx2: vc[0] * S.R, cy2: vc[1] * S.R,
        tx: (va[0] - vb[0] + vc[0]) * S.R, ty: (va[1] - vb[1] + vc[1]) * S.R };
      render();
      out.innerHTML = '<strong>' + esc(a) + ' − ' + esc(b) + ' + ' + esc(c) + ' ≈ ' + esc(best[0].w) +
        '</strong> (cosine ' + best[0].c.toFixed(2) + '), runner-up <em>' + esc(best[1].w) + '</em> (' + best[1].c.toFixed(2) + '). ' +
        'The gold arrows on the map are the <em>same direction applied twice</em>: the route from “' + esc(b) + '” to “' + esc(a) +
        '” is itself a meaning, and the model can reuse it starting from “' + esc(c) + '”.';
    });
    /* re-fit the map when the viewport changes (tablet rotate, window resize) */
    var msResizeT = null;
    function msOnResize() {
      if (!cv.isConnected) { window.removeEventListener('resize', msOnResize); return; }
      clearTimeout(msResizeT);
      msResizeT = setTimeout(process, 250);
    }
    window.addEventListener('resize', msOnResize);
    process();
  }
};

/* ============================================================
   LAB: wall-drawing
   Sol LeWitt's Wall Drawing #118 (1971), executed live.
   ============================================================ */
LABS['wall-drawing'] = {
  title: 'A prompt from 1971 — Wall Drawing #118',
  tag: 'Authorship',
  blurb: 'Sol LeWitt sold written instructions, not drawings. Here is his instruction executed live, twice at once — same prompt, two different artworks. Then edit the instruction and make it yours.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-pattern" id="' + uid + '-instr"></div>' +
        '<div class="lab-slider-row"><label for="' + uid + '-n">Points</label>' +
          '<input type="range" id="' + uid + '-n" min="6" max="80" value="50">' +
          '<span class="lab-val" id="' + uid + '-nv">50</span></div>' +
        '<div class="lab-select-row"><label>connected by ' +
          '<select class="lab-select" id="' + uid + '-style">' +
            '<option value="lines">straight lines</option>' +
            '<option value="arcs">arcs</option>' +
          '</select></label></div>' +
        '<div class="lab-canvas-wrap lab-canvas-paper" style="margin-top:12px"><canvas id="' + uid + '-cv"></canvas></div>' +
        '<div class="lab-btn-row"><button class="lab-btn lab-btn-primary" id="' + uid + '-again">▶ Execute the instruction</button></div>' +
        '<p class="lab-note" id="' + uid + '-note"><em>“On a wall surface, fifty points are marked at random. The points are connected by straight lines.”</em> — Sol LeWitt, Wall Drawing #118 (1971). LeWitt never drew his wall drawings; assistants executed the instruction, differently every time — which is why you get <strong>two executions of the same prompt</strong> here. Now edit the instruction and execute your own. When you write a prompt, this is what you\'re doing — half a century later.</p>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var edited = false;
    function updateInstr() {
      var n = +el(uid + '-n').value;
      var style = el(uid + '-style').value === 'arcs' ? 'arcs' : 'straight lines';
      el(uid + '-nv').textContent = n;
      edited = n !== 50 || el(uid + '-style').value !== 'lines';
      el(uid + '-instr').innerHTML = '“On a wall surface, <strong>' + n + '</strong> points are marked at random. The points are connected by <strong>' + style + '</strong>.”' +
        (edited ? ' <em>— your edit of Wall Drawing #118</em>' : ' <em>— Sol LeWitt, 1971</em>');
    }
    function draw() {
      var f = fitCanvas(cv, 0.5, 210), ctx = f.ctx, W = f.W, H = f.H;
      var half = W / 2, n = +el(uid + '-n').value;
      var style = el(uid + '-style').value;
      ctx.fillStyle = '#fbf9f4'; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(35,30,28,.25)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(half, 8); ctx.lineTo(half, H - 8); ctx.stroke();
      ctx.fillStyle = 'rgba(35,30,28,.5)'; ctx.font = '600 10px sans-serif';
      ctx.fillText('execution nº1', 10, H - 8);
      ctx.fillText('execution nº2', half + 12, H - 8);
      function makeExec(x0, w) {
        var pts = [], pairs = [];
        for (var i = 0; i < n; i++) pts.push({ x: x0 + 12 + Math.random() * (w - 24), y: 12 + Math.random() * (H - 34) });
        for (var a = 0; a < n; a++) for (var b = a + 1; b < n; b++) pairs.push([a, b]);
        return { pts: pts, pairs: pairs, drawn: 0 };
      }
      var ex = [makeExec(0, half - 6), makeExec(half + 6, half - 6)];
      ctx.fillStyle = 'rgba(35,30,28,.75)';
      ex.forEach(function (e) {
        e.pts.forEach(function (p) { ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2); ctx.fill(); });
      });
      function drawPair(e, k) {
        var a = e.pts[e.pairs[k][0]], b = e.pts[e.pairs[k][1]];
        ctx.strokeStyle = 'rgba(35,30,28,.16)'; ctx.lineWidth = 0.6;
        ctx.beginPath();
        if (style === 'arcs') {
          var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
          ctx.moveTo(a.x, a.y);
          ctx.quadraticCurveTo(mx - (b.y - a.y) * 0.25, my + (b.x - a.x) * 0.25, b.x, b.y);
        } else {
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        }
        ctx.stroke();
      }
      if (reducedMotion()) {
        ex.forEach(function (e) { for (var k = 0; k < e.pairs.length; k++) drawPair(e, k); });
        return;
      }
      /* the execution is watched, not instant: lines draw themselves in */
      var per = Math.max(3, Math.round(ex[0].pairs.length / 60));
      loop(uid, cv, function () {
        var busy = false;
        ex.forEach(function (e) {
          var lim = Math.min(e.pairs.length, e.drawn + per);
          for (var k = e.drawn; k < lim; k++) drawPair(e, k);
          e.drawn = lim;
          if (e.drawn < e.pairs.length) busy = true;
        });
        if (!busy) return false;
      });
    }
    el(uid + '-n').addEventListener('input', updateInstr);
    el(uid + '-style').addEventListener('change', updateInstr);
    el(uid + '-again').addEventListener('click', function () {
      draw();
      if (edited) {
        el(uid + '-note').innerHTML = '<strong>Whose drawing is this?</strong> You changed the instruction; the machine executed it; LeWitt supplied the idea. Hold that three-way question — it\'s exactly the authorship question every AI-made image raises.';
        labComplete('wall-drawing');
      }
    });
    updateInstr();
    draw();
  }
};

/* ============================================================
   LAB: instruction-engine
   Author a rule-set; the machine executes it. Every control
   is a parameter — the conceptual leap behind prompting.
   ============================================================ */
LABS['instruction-engine'] = {
  title: 'The instruction engine — every slider is a parameter',
  tag: 'Authorship',
  blurb: 'Change the rules and watch systematic logic rebuild the artwork. No freehand marks anywhere — only your instructions, executed literally.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-canvas-wrap lab-canvas-paper"><canvas id="' + uid + '-cv"></canvas></div>' +
        '<div class="lab-ie-controls">' +
          '<div class="lab-slider-row"><label for="' + uid + '-d">Density</label>' +
            '<input type="range" id="' + uid + '-d" min="10" max="140" value="48"><span class="lab-val" id="' + uid + '-dv">48</span></div>' +
          '<div class="lab-slider-row"><label for="' + uid + '-w">Line width</label>' +
            '<input type="range" id="' + uid + '-w" min="1" max="8" value="2"><span class="lab-val" id="' + uid + '-wv">2px</span></div>' +
          '<div class="lab-select-row">' +
            '<label>Palette <select id="' + uid + '-p" class="lab-select">' +
              '<option value="mono">Charcoal monochrome</option>' +
              '<option value="brand">Magenta &amp; cyan duo</option>' +
              '<option value="spectrum">Full spectrum</option>' +
            '</select></label>' +
            '<label>Structure <select id="' + uid + '-s" class="lab-select">' +
              '<option value="radial">Radial from centre</option>' +
              '<option value="walk">Random walk</option>' +
              '<option value="grid">Orthogonal grid</option>' +
            '</select></label>' +
          '</div>' +
        '</div>' +
        '<div class="lab-ie-transcript" id="' + uid + '-tr" aria-live="polite"></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-roll">🎲 Re-roll the randomness</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-copy">📋 Copy as prompt</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-dl">⬇ Download PNG</button>' +
        '</div>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var T = theme();
    /* seeded randomness: changing one parameter PERTURBS the artwork
       instead of replacing it — the layout only changes when you
       deliberately re-roll. That is the "systematic logic" promise kept. */
    var ieSeed = 12345;
    function ieRand(s) {
      return function () {
        s |= 0; s = (s + 0x6D2B79F5) | 0;
        var t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }
    function draw() {
      var f = fitCanvas(cv, 0.5, 200), ctx = f.ctx, W = f.W, H = f.H;
      var density = +el(uid + '-d').value;
      var lw = +el(uid + '-w').value;
      var pal = el(uid + '-p').value;
      var struct = el(uid + '-s').value;
      el(uid + '-dv').textContent = density;
      el(uid + '-wv').textContent = lw + 'px';
      ctx.fillStyle = pal === 'mono' ? '#fbf9f4' : '#141019';
      ctx.fillRect(0, 0, W, H);
      ctx.lineWidth = lw;
      function stroke(i) {
        if (pal === 'mono') ctx.strokeStyle = 'rgba(35,30,28,.8)';
        else if (pal === 'brand') ctx.strokeStyle = i % 2 ? T.accent : T.primaryLight;
        else ctx.strokeStyle = 'hsl(' + ((i * 360 / density) % 360) + ',80%,62%)';
      }
      if (struct === 'radial') {
        var cx = W / 2, cy = H / 2, len = Math.min(W, H) * 0.46;
        for (var i = 0; i < density; i++) {
          var ang = (i / density) * Math.PI * 2;
          stroke(i);
          ctx.beginPath(); ctx.moveTo(cx, cy);
          ctx.lineTo(cx + Math.cos(ang) * len, cy + Math.sin(ang) * len); ctx.stroke();
        }
      } else if (struct === 'walk') {
        var rnd = ieRand(ieSeed);
        for (var j = 0; j < density; j++) {
          var x1 = rnd() * W, y1 = rnd() * H;
          stroke(j);
          ctx.beginPath(); ctx.moveTo(x1, y1);
          ctx.lineTo(x1 + (rnd() * 130 - 65), y1 + (rnd() * 130 - 65)); ctx.stroke();
        }
      } else {
        var cols = 5, rows = 3, bw = W / cols, bh = H / rows;
        for (var r = 0; r < rows; r++) {
          for (var c = 0; c < cols; c++) {
            var n = Math.max(2, Math.round(density / 12));
            for (var m = 0; m < n; m++) {
              var p = m / n;
              stroke(r * cols + c + m);
              ctx.beginPath();
              ctx.moveTo(c * bw + 8, r * bh + p * bh);
              ctx.lineTo(c * bw + bw - 8, r * bh + (1 - p) * bh);
              ctx.stroke();
            }
          }
        }
      }
      var structTxt = struct === 'radial' ? 'draw lines radiating from the centre at equal angles'
        : struct === 'walk' ? 'scatter short strokes at random positions and directions'
        : 'in each cell of a 5×3 grid, draw crossing diagonals at proportional offsets';
      var palTxt = pal === 'mono' ? 'in charcoal on an ivory ground'
        : pal === 'brand' ? 'alternating magenta and cyan on near-black'
        : 'cycling the full spectrum on near-black';
      el(uid + '-tr').textContent = '// the instruction, in prose: ' + structTxt + ', ' + density + ' times, at ' + lw + 'px, ' + palTxt + '.';
      return 'An abstract artwork: ' + structTxt + ', ' + density + ' times, with ' + lw + 'px strokes, ' + palTxt + '.';
    }
    /* completion means exploring: three DIFFERENT parameters touched */
    var ieTouched = {};
    function ieTouch(id) {
      return function () {
        draw();
        ieTouched[id] = true;
        if (Object.keys(ieTouched).length >= 3) labComplete('instruction-engine');
      };
    }
    [uid + '-d', uid + '-w'].forEach(function (id) { el(id).addEventListener('input', ieTouch(id)); });
    [uid + '-p', uid + '-s'].forEach(function (id) { el(id).addEventListener('change', ieTouch(id)); });
    el(uid + '-roll').addEventListener('click', function () {
      ieSeed = Math.floor(Math.random() * 1e9) + 1;
      ieTouched.roll = true;
      draw();
      if (Object.keys(ieTouched).length >= 3) labComplete('instruction-engine');
    });
    el(uid + '-copy').addEventListener('click', function () {
      copyText(draw(), el(uid + '-copy'));
    });
    el(uid + '-dl').addEventListener('click', function () {
      var a = document.createElement('a');
      a.download = 'my-instruction-artwork.png';
      a.href = cv.toDataURL('image/png');
      a.click();
    });
    draw();
  }
};

/* ============================================================
   LAB: rule-painter
   Paint by rules on a grid — then let the machine finish.
   ============================================================ */
LABS['rule-painter'] = {
  title: 'Paint by rules — then let the machine finish',
  tag: 'Authorship',
  blurb: 'Pick a line direction and a colour, paint cells of the grid with systematic hatching — then hand the brush to randomness and download the result.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-btn-row lab-rp-tools">' +
          '<span class="lab-label">Direction</span>' +
          '<button class="lab-btn lab-btn-sm lab-rp-dir sel" data-d="dl" id="' + uid + '-d0" aria-label="Diagonal lines, top-left to bottom-right">╲</button>' +
          '<button class="lab-btn lab-btn-sm lab-rp-dir" data-d="dr" aria-label="Diagonal lines, bottom-left to top-right">╱</button>' +
          '<button class="lab-btn lab-btn-sm lab-rp-dir" data-d="v" aria-label="Vertical lines">|</button>' +
          '<button class="lab-btn lab-btn-sm lab-rp-dir" data-d="h" aria-label="Horizontal lines">—</button>' +
          '<span class="lab-label" style="margin-left:10px">Colour</span>' +
          '<button class="lab-rp-col sel" data-c="#2b2624" style="background:#2b2624" aria-label="Charcoal"></button>' +
          '<button class="lab-rp-col" data-c="#9b1844" style="background:#9b1844" aria-label="Magenta"></button>' +
          '<button class="lab-rp-col" data-c="#009fe3" style="background:#009fe3" aria-label="Cyan"></button>' +
          '<button class="lab-rp-col" data-c="#f59e0b" style="background:#f59e0b" aria-label="Amber"></button>' +
          '<button class="lab-rp-col" data-c="#22c55e" style="background:#22c55e" aria-label="Green"></button>' +
        '</div>' +
        '<div class="lab-canvas-wrap lab-canvas-paper"><canvas id="' + uid + '-cv" style="touch-action:none" tabindex="0" role="application" aria-label="Painting grid. Arrow keys move the cursor between cells, Enter or Space paints the cell with the chosen direction and colour."></canvas></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-erase">⌫ Eraser</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-surprise">🎲 Let the machine finish</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-clear">Clear</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-dl">⬇ Download PNG</button>' +
        '</div>' +
        '<p class="lab-note" id="' + uid + '-note" aria-live="polite">Click or drag across the grid to paint (or focus the grid and use arrow keys + Enter). You chose the rules and made the decisions; the hatching is executed systematically. Whose drawing is it?</p>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var COLS = 6, ROWS = 4;
    var dir = 'dl', color = '#2b2624', erase = false, painting = false, cells = {};
    var cur = null; /* keyboard cursor cell, [row, col] */
    function hatch(ctx, x, y, w, h, d, col) {
      ctx.save();
      ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
      ctx.strokeStyle = col; ctx.lineWidth = 1.6;
      var gap = 6, k;
      ctx.beginPath();
      if (d === 'h') { for (var yy = y + 3; yy < y + h; yy += gap) { ctx.moveTo(x, yy); ctx.lineTo(x + w, yy); } }
      else if (d === 'v') { for (var xx = x + 3; xx < x + w; xx += gap) { ctx.moveTo(xx, y); ctx.lineTo(xx, y + h); } }
      else if (d === 'dl') { for (k = -h; k < w; k += gap) { ctx.moveTo(x + k, y); ctx.lineTo(x + k + h, y + h); } }
      else { for (k = 0; k < w + h; k += gap) { ctx.moveTo(x + k, y); ctx.lineTo(x + k - h, y + h); } }
      ctx.stroke(); ctx.restore();
    }
    function draw() {
      var f = fitCanvas(cv, 0.5, 190), ctx = f.ctx, W = f.W, H = f.H;
      ctx.fillStyle = '#fbf9f4'; ctx.fillRect(0, 0, W, H);
      var cw = W / COLS, ch = H / ROWS;
      Object.keys(cells).forEach(function (key) {
        var p = key.split('-');
        hatch(ctx, (+p[1]) * cw, (+p[0]) * ch, cw, ch, cells[key].d, cells[key].c);
      });
      ctx.strokeStyle = 'rgba(35,30,28,.14)'; ctx.lineWidth = 1;
      for (var i = 0; i <= COLS; i++) { ctx.beginPath(); ctx.moveTo(i * cw, 0); ctx.lineTo(i * cw, H); ctx.stroke(); }
      for (var j = 0; j <= ROWS; j++) { ctx.beginPath(); ctx.moveTo(0, j * ch); ctx.lineTo(W, j * ch); ctx.stroke(); }
      if (cur) {
        ctx.strokeStyle = '#009fe3'; ctx.lineWidth = 2.5;
        ctx.strokeRect(cur[1] * cw + 2, cur[0] * ch + 2, cw - 4, ch - 4);
      }
    }
    function cellAt(e) {
      var r = cv.getBoundingClientRect(), p = pt(e);
      var col = Math.floor((p.x - r.left) / (r.width / COLS));
      var row = Math.floor((p.y - r.top) / (r.height / ROWS));
      if (col < 0 || row < 0 || col >= COLS || row >= ROWS) return null;
      return row + '-' + col;
    }
    function paintKey(key) {
      if (erase) delete cells[key]; else cells[key] = { d: dir, c: color, by: 'you' };
      draw();
      if (Object.keys(cells).length >= 5) labComplete('rule-painter');
    }
    function apply(e) {
      var key = cellAt(e); if (!key) return;
      paintKey(key);
    }
    cv.addEventListener('pointerdown', function (e) { e.preventDefault(); painting = true; apply(e); });
    cv.addEventListener('pointermove', function (e) { if (painting) { e.preventDefault(); apply(e); } });
    window.addEventListener('pointerup', function () { painting = false; });
    cv.addEventListener('keydown', function (e) {
      if (!/^(Arrow|Enter| )/.test(e.key)) return;
      e.preventDefault();
      if (!cur) { cur = [0, 0]; draw(); return; }
      if (e.key === 'ArrowLeft') cur[1] = Math.max(0, cur[1] - 1);
      else if (e.key === 'ArrowRight') cur[1] = Math.min(COLS - 1, cur[1] + 1);
      else if (e.key === 'ArrowUp') cur[0] = Math.max(0, cur[0] - 1);
      else if (e.key === 'ArrowDown') cur[0] = Math.min(ROWS - 1, cur[0] + 1);
      else if (e.key === 'Enter' || e.key === ' ') { paintKey(cur[0] + '-' + cur[1]); return; }
      draw();
    });
    cv.addEventListener('blur', function () { cur = null; draw(); });
    el(uid).addEventListener('click', function (e) {
      var d = e.target.closest('.lab-rp-dir');
      if (d) {
        dir = d.getAttribute('data-d'); erase = false;
        el(uid + '-erase').classList.remove('sel');
        Array.prototype.forEach.call(el(uid).querySelectorAll('.lab-rp-dir'), function (b) { b.classList.toggle('sel', b === d); });
        return;
      }
      var c = e.target.closest('.lab-rp-col');
      if (c) {
        color = c.getAttribute('data-c'); erase = false;
        el(uid + '-erase').classList.remove('sel');
        Array.prototype.forEach.call(el(uid).querySelectorAll('.lab-rp-col'), function (b) { b.classList.toggle('sel', b === c); });
      }
    });
    el(uid + '-erase').addEventListener('click', function () {
      erase = !erase; this.classList.toggle('sel', erase);
    });
    el(uid + '-surprise').addEventListener('click', function () {
      var dirs = ['h', 'v', 'dl', 'dr'], cols = ['#2b2624', '#9b1844', '#009fe3', '#f59e0b', '#22c55e'];
      var machine = 0;
      for (var r = 0; r < ROWS; r++) {
        for (var c2 = 0; c2 < COLS; c2++) {
          var key = r + '-' + c2;
          if (!cells[key] && Math.random() > 0.25) {
            cells[key] = { d: dirs[Math.floor(Math.random() * 4)], c: cols[Math.floor(Math.random() * cols.length)], by: 'machine' };
            machine++;
          }
        }
      }
      draw();
      var yours = 0;
      Object.keys(cells).forEach(function (k) { if (cells[k].by !== 'machine') yours++; });
      el(uid + '-note').innerHTML = 'The machine just painted <strong>' + machine + '</strong> cells; you painted <strong>' + yours +
        '</strong>. Same grid, same rules — different decision-makers. So whose drawing is it now? (LeWitt would say: still yours. Would you?)';
      labComplete('rule-painter');
    });
    el(uid + '-clear').addEventListener('click', function () { cells = {}; draw(); });
    el(uid + '-dl').addEventListener('click', function () {
      var a = document.createElement('a');
      a.download = 'my-rule-painting.png';
      a.href = cv.toDataURL('image/png');
      a.click();
    });
    draw();
  }
};

/* ============================================================
   LAB: sequence
   Generic drag-to-order activity — pointer AND keyboard.
   Data-driven: pass labData {prompt, items:[{text, reveal}]}.
   ============================================================ */
var SEQ_DEFAULT = {
  prompt: 'Drag the cards into the order it really happened, earliest first — then check.',
  items: [
    { text: 'Babbage designs the Analytical Engine — a mechanical, programmable computer', reveal: '1830s–40s' },
    { text: 'Ada Lovelace publishes the first algorithm and predicts machines could compose music', reveal: '1843' },
    { text: 'Turing describes the universal machine — one machine that can compute anything computable', reveal: '1936' },
    { text: 'The first stored-program electronic computers run in Manchester and Cambridge', reveal: '1948–49' },
    { text: 'Home computers put programming on ordinary desks', reveal: '1980s' }
  ]
};
/* Extra decks selectable on the labs page (lessons can still pass their own). */
var SEQ_DECKS = [
  { key: 'history', label: '🕰 Computing history', deck: SEQ_DEFAULT },
  { key: 'chatbot', label: '💬 How a chatbot answers', deck: {
    prompt: 'A chatbot turns your prompt into an answer in five steps. Put them in the order they actually happen.',
    items: [
      { text: 'Your prompt is chopped into tokens — words and word-pieces', reveal: 'tokenise' },
      { text: 'Each token becomes a vector: a position in the model\'s space of meaning', reveal: 'embed' },
      { text: 'Using its learned weights, the model scores every token that could come next', reveal: 'predict' },
      { text: 'The chosen token is added to the text — and the whole thing is fed back in', reveal: 'append & repeat' },
      { text: 'The finished tokens are turned back into words on your screen', reveal: 'detokenise' }
    ] } },
  { key: 'verify', label: '🔍 A shocking post appears', deck: {
    prompt: 'A shocking claim lands in your feed. Put the fact-checker\'s moves in the right order.',
    items: [
      { text: 'Stop — don\'t share, don\'t reply. Let the emotional spike pass', reveal: 'stop' },
      { text: 'Check who actually posted it: account age, history, who they are', reveal: 'the source' },
      { text: 'Search whether credible outlets are reporting the same thing', reveal: 'better coverage' },
      { text: 'Trace the claim upstream to the original photo, paper or report', reveal: 'the origin' },
      { text: 'Only now decide: share it, correct it, or let it die', reveal: 'decide last' }
    ] } }
];
LABS['sequence'] = {
  title: 'Put it in order',
  tag: 'Activity',
  blurb: 'A reusable ordering challenge — drag with a pointer, or use Enter and the arrow keys. Check your answer and the cards reveal what really happened.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-chip-row" id="' + uid + '-decks"></div>' +
        '<p class="lab-note" id="' + uid + '-prompt" style="margin-top:0"></p>' +
        '<p class="lab-note lab-kb-hint">⌨ Keyboard: focus a card, press <strong>Enter</strong> to pick it up, <strong>↑/↓</strong> to move it, <strong>Enter</strong> to drop, <strong>Esc</strong> to cancel.</p>' +
        '<div class="lab-seq-rows" id="' + uid + '-rows"></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-check">Check my order</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-shuffle">🔀 Shuffle</button>' +
        '</div>' +
        '<p class="lab-feedback" id="' + uid + '-fb" aria-live="polite"></p>' +
        '<span class="lab-sr" id="' + uid + '-live" aria-live="assertive"></span>' +
      '</div>';
  },
  init: function (uid, data) {
    var D = (data && data.items) ? data : SEQ_DEFAULT;
    el(uid + '-prompt').textContent = D.prompt || SEQ_DEFAULT.prompt;
    /* labs-page only: no lesson data → offer the deck picker */
    var deckRow = el(uid + '-decks');
    if (deckRow && !(data && data.items)) {
      SEQ_DECKS.forEach(function (d, i) {
        var b = document.createElement('button');
        b.className = 'lab-chip' + (i === 0 ? ' active' : '');
        b.textContent = d.label;
        b.addEventListener('click', function () {
          D = d.deck;
          el(uid + '-prompt').textContent = D.prompt;
          Array.prototype.forEach.call(deckRow.children, function (x) { x.classList.toggle('active', x === b); });
          build();
        });
        deckRow.appendChild(b);
      });
    }
    var rows = el(uid + '-rows');
    var drag = null, from = null, ox = 0, oy = 0, grabbed = null;
    function announce(msg) { var l = el(uid + '-live'); if (l) l.textContent = msg; }
    function slots() { return Array.prototype.slice.call(rows.querySelectorAll('.lab-seq-slot')); }
    function build() {
      rows.innerHTML = '';
      shuffle(D.items.map(function (it, i) { return { it: it, order: i }; })).forEach(function (e2) {
        var slot = document.createElement('div');
        slot.className = 'lab-seq-slot';
        var card = document.createElement('div');
        card.className = 'lab-seq-card';
        card.setAttribute('data-order', e2.order);
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', e2.it.text + '. Press Enter to pick up, then arrow keys to move.');
        card.innerHTML = '<span class="lab-seq-text">' + esc(e2.it.text) + '</span><span class="lab-seq-reveal"></span>';
        slot.appendChild(card);
        rows.appendChild(slot);
      });
      el(uid + '-fb').textContent = '';
      grabbed = null;
    }
    function check() {
      var right = true;
      slots().forEach(function (s, idx) {
        var c = s.querySelector('.lab-seq-card'); if (!c) return;
        var ok = +c.getAttribute('data-order') === idx;
        c.classList.toggle('ok', ok); c.classList.toggle('bad', !ok);
        var it = D.items[+c.getAttribute('data-order')];
        var rv = c.querySelector('.lab-seq-reveal');
        if (rv && it.reveal) rv.textContent = it.reveal;
        if (!ok) right = false;
      });
      var fb = el(uid + '-fb');
      fb.textContent = right
        ? '✓ Correct — that is the real order. Nicely reasoned.'
        : 'Not quite. Green cards are placed right; move the red ones and check again.';
      fb.className = 'lab-feedback ' + (right ? 'ok' : 'no');
      if (right) labComplete('sequence');
    }
    /* keyboard: Enter grabs/drops, arrows swap with neighbour, Esc cancels */
    rows.addEventListener('keydown', function (e) {
      var card = e.target.closest ? e.target.closest('.lab-seq-card') : null;
      if (!card) return;
      var all = slots();
      var i = all.indexOf(card.parentElement);
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (grabbed === card) {
          grabbed = null; card.classList.remove('kb-grab');
          announce('Dropped at position ' + (i + 1) + ' of ' + all.length + '.');
        } else {
          if (grabbed) grabbed.classList.remove('kb-grab');
          grabbed = card; card.classList.add('kb-grab');
          announce('Picked up. Position ' + (i + 1) + ' of ' + all.length + '. Use arrow keys to move.');
        }
      } else if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && grabbed === card) {
        e.preventDefault();
        var j = e.key === 'ArrowUp' ? i - 1 : i + 1;
        if (j < 0 || j >= all.length) return;
        var other = all[j].querySelector('.lab-seq-card');
        if (other) all[i].appendChild(other);
        all[j].appendChild(card);
        card.classList.remove('ok', 'bad');
        card.focus();
        announce('Moved to position ' + (j + 1) + ' of ' + all.length + '.');
      } else if (e.key === 'Escape' && grabbed === card) {
        grabbed = null; card.classList.remove('kb-grab');
        announce('Cancelled.');
      }
    });
    rows.addEventListener('pointerdown', function (e) {
      var card = e.target.closest('.lab-seq-card'); if (!card) return;
      e.preventDefault();
      drag = card; from = card.parentElement;
      var r = card.getBoundingClientRect(), p = pt(e);
      ox = p.x - r.left; oy = p.y - r.top;
      card.style.width = r.width + 'px';
      card.classList.add('dragging'); card.classList.remove('ok', 'bad');
      move(e);
      document.addEventListener('pointermove', move);
      document.addEventListener('pointerup', up);
    });
    function move(e) {
      if (!drag) return;
      var p = pt(e);
      drag.style.left = (p.x - ox) + 'px';
      drag.style.top = (p.y - oy) + 'px';
    }
    function up(e) {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      if (!drag) return;
      var p = pt(e);
      drag.style.pointerEvents = 'none';
      var elAt = document.elementFromPoint(p.x, p.y);
      drag.style.pointerEvents = '';
      var target = elAt && elAt.closest ? elAt.closest('.lab-seq-slot') : null;
      if (target && rows.contains(target) && target !== from) {
        var other = target.querySelector('.lab-seq-card');
        if (other) from.appendChild(other);
        target.appendChild(drag);
      }
      drag.classList.remove('dragging');
      drag.style.left = drag.style.top = drag.style.width = '';
      drag = null; from = null;
    }
    el(uid + '-check').addEventListener('click', check);
    el(uid + '-shuffle').addEventListener('click', build);
    build();
  }
};

/* ============================================================
   LAB: peril-promise
   Drag possibilities onto a 2D field — pointer AND keyboard.
   ============================================================ */
var PP_CARDS = [
  '🗣️ Reviving endangered languages',
  '🎨 Putting illustrators out of work',
  '🔬 Speeding up medical research',
  '🌍 Burning huge amounts of energy and water',
  '♿ New creative tools for disabled makers',
  '📰 Flooding the web with fakes',
  '🎓 A personal tutor for every pupil',
  '©️ Training on creative work without consent'
];
LABS['peril-promise'] = {
  title: 'Peril ↔ Promise — take a position',
  tag: 'Ethics',
  blurb: 'Drag each possibility onto the field — or place it with Enter and steer it with the arrow keys. There are no right placements, only ones you can defend.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-pp-bank" id="' + uid + '-bank">' +
          PP_CARDS.map(function (c) { return '<div class="lab-pp-card" tabindex="0" role="button" aria-label="' + esc(c) + '. Press Enter to place on the field.">' + esc(c) + '</div>'; }).join('') +
        '</div>' +
        '<div class="lab-pp-addrow">' +
          '<input class="lab-input" id="' + uid + '-add" maxlength="60" placeholder="Add your own possibility…" aria-label="Add your own possibility">' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-addbtn">+ Add</button>' +
        '</div>' +
        '<p class="lab-note lab-kb-hint">⌨ Keyboard: focus a card, <strong>Enter</strong> places it mid-field, <strong>arrow keys</strong> steer it, <strong>Esc</strong> sends it back.</p>' +
        '<div class="lab-pp-field" id="' + uid + '-field" aria-label="Two-dimensional field from peril to promise">' +
          '<span class="lab-pp-ax lab-pp-w">☠️ Peril</span><span class="lab-pp-ax lab-pp-e">✨ Promise</span>' +
          '<span class="lab-pp-ax lab-pp-n">already happening</span><span class="lab-pp-ax lab-pp-s">years away</span>' +
        '</div>' +
        '<p class="lab-note" id="' + uid + '-ppread" aria-live="polite"></p>' +
        '<p class="lab-note">Protocol: read each card aloud → place it together → could any <em>promise</em> become a <em>peril</em>, depending on who controls it? Drag a card out of the field to send it back.</p>' +
        '<span class="lab-sr" id="' + uid + '-live" aria-live="assertive"></span>' +
      '</div>';
  },
  init: function (uid) {
    var bank = el(uid + '-bank'), field = el(uid + '-field');
    if (!bank || !field) return;
    var drag = null, placed = false, ox = 0, oy = 0;
    function announce(msg) { var l = el(uid + '-live'); if (l) l.textContent = msg; }
    function describe(card) {
      var fr = field.getBoundingClientRect(), cr = card.getBoundingClientRect();
      var x = (cr.left + cr.width / 2 - fr.left) / fr.width;
      var y = (cr.top + cr.height / 2 - fr.top) / fr.height;
      var h = x < 0.4 ? 'towards peril' : x > 0.6 ? 'towards promise' : 'between peril and promise';
      var v = y < 0.4 ? 'already happening' : y > 0.6 ? 'years away' : 'mid-distance';
      return h + ', ' + v;
    }
    function checkPlacedCount() {
      var cards = field.querySelectorAll('.lab-pp-card');
      /* the vertical axis earns its keep: read the quadrants back */
      var read = el(uid + '-ppread');
      if (read) {
        if (!cards.length) { read.textContent = ''; }
        else {
          var W = field.clientWidth || 1, H = field.clientHeight || 1;
          var peril = 0, promise = 0, nowPeril = 0, nowPromise = 0;
          Array.prototype.forEach.call(cards, function (c) {
            var x = (parseInt(c.style.left || '0', 10) + c.offsetWidth / 2) / W;
            var y = (parseInt(c.style.top || '0', 10) + c.offsetHeight / 2) / H;
            if (x < 0.5) { peril++; if (y < 0.5) nowPeril++; }
            else { promise++; if (y < 0.5) nowPromise++; }
          });
          var msg = 'Your field so far: ' + peril + ' peril' + (peril === 1 ? '' : 's') + ', ' + promise + ' promise' + (promise === 1 ? '' : 's') + '.';
          if (nowPeril) msg += ' You\'ve marked ' + nowPeril + ' peril' + (nowPeril === 1 ? '' : 's') + ' as already happening — which worries you most, and who could actually change it?';
          else if (nowPromise) msg += ' Your nearest-term cards are all promises — what would have to go wrong for one of them to slide left?';
          read.textContent = msg;
        }
      }
      if (cards.length >= 4) labComplete('peril-promise');
    }
    el(uid + '-addbtn').addEventListener('click', function () {
      var inp = el(uid + '-add');
      var txt = inp.value.trim(); if (!txt) return;
      var c = document.createElement('div');
      c.className = 'lab-pp-card';
      c.setAttribute('tabindex', '0');
      c.setAttribute('role', 'button');
      c.textContent = '✏️ ' + txt;
      bank.appendChild(c);
      inp.value = ''; inp.focus();
    });
    /* keyboard placement + steering */
    el(uid).addEventListener('keydown', function (e) {
      var card = e.target.closest ? e.target.closest('.lab-pp-card') : null;
      if (!card) return;
      var inField = field.contains(card);
      if (e.key === 'Enter' && !inField) {
        e.preventDefault();
        card.classList.add('placed');
        field.appendChild(card);
        card.style.position = 'absolute';
        card.style.left = Math.round(field.clientWidth / 2 - 50) + 'px';
        card.style.top = Math.round(field.clientHeight / 2 - 12) + 'px';
        card.focus();
        announce('Placed mid-field. Arrow keys to steer; Escape to send back.');
        checkPlacedCount();
      } else if (inField && /^Arrow/.test(e.key)) {
        e.preventDefault();
        var step = 18;
        var x = parseInt(card.style.left || '0', 10), y = parseInt(card.style.top || '0', 10);
        if (e.key === 'ArrowLeft') x -= step;
        if (e.key === 'ArrowRight') x += step;
        if (e.key === 'ArrowUp') y -= step;
        if (e.key === 'ArrowDown') y += step;
        card.style.left = Math.max(4, Math.min(field.clientWidth - 44, x)) + 'px';
        card.style.top = Math.max(4, Math.min(field.clientHeight - 26, y)) + 'px';
        announce(describe(card));
      } else if (inField && (e.key === 'Escape' || e.key === 'Backspace')) {
        e.preventDefault();
        card.classList.remove('placed');
        card.style.position = ''; card.style.left = card.style.top = '';
        bank.appendChild(card);
        card.focus();
        announce('Sent back to the bank.');
        checkPlacedCount();
      }
    });
    function down(e) {
      var card = e.target.closest ? e.target.closest('.lab-pp-card') : null;
      if (!card || (!bank.contains(card) && !field.contains(card))) return;
      e.preventDefault();
      drag = card; placed = field.contains(card);
      var r = card.getBoundingClientRect(), p = pt(e);
      ox = p.x - r.left; oy = p.y - r.top;
      if (!placed) card.style.width = r.width + 'px';
      card.classList.add('dragging');
      move(e);
      document.addEventListener('pointermove', move);
      document.addEventListener('pointerup', up);
    }
    function move(e) {
      if (!drag) return;
      var p = pt(e);
      if (!placed) {
        drag.style.position = 'fixed';
        drag.style.left = (p.x - ox) + 'px'; drag.style.top = (p.y - oy) + 'px';
      } else {
        var fr = field.getBoundingClientRect();
        drag.style.left = Math.max(4, Math.min(fr.width - 40, p.x - fr.left - ox)) + 'px';
        drag.style.top = Math.max(4, Math.min(fr.height - 24, p.y - fr.top - oy)) + 'px';
      }
    }
    function up(e) {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      if (!drag) return;
      var p = pt(e), fr = field.getBoundingClientRect();
      var inside = p.x >= fr.left && p.x <= fr.right && p.y >= fr.top && p.y <= fr.bottom;
      if (!placed) {
        if (inside) {
          drag.classList.add('placed');
          drag.style.position = 'absolute'; drag.style.width = '';
          field.appendChild(drag);
          /* the card shrinks when placed — centre the resized card under
             the pointer instead of reusing the pre-shrink grab offset */
          drag.style.left = Math.max(4, Math.min(fr.width - 40, p.x - fr.left - drag.offsetWidth / 2)) + 'px';
          drag.style.top = Math.max(4, Math.min(fr.height - 24, p.y - fr.top - drag.offsetHeight / 2)) + 'px';
          checkPlacedCount();
        } else {
          drag.style.position = ''; drag.style.left = drag.style.top = drag.style.width = '';
        }
      } else if (!inside) {
        drag.classList.remove('placed');
        drag.style.position = ''; drag.style.left = drag.style.top = '';
        bank.appendChild(drag);
        checkPlacedCount();
      }
      drag.classList.remove('dragging');
      drag = null;
    }
    el(uid).addEventListener('pointerdown', down);
  }
};

/* ============================================================
   LAB: ai-quest
   A side-scrolling platformer where collecting sparks buys down
   the quiz gate at the end of each level. Questions come from
   labData.questions, or are sampled from QUIZ_BANK if present.
   ============================================================ */
var AQ_FALLBACK_QS = [
  { question: 'What is the very first thing a model does with your prompt?', options: ['Looks it up in a database', 'Splits the text into tokens', 'Searches the live web'], correct: 1, explanation: 'It tokenises first — the text becomes tokens before anything else happens.' },
  { question: 'A vector is best described as…', options: ['A list of numbers giving a position in meaning-space', 'A word spelled backwards', 'A web link'], correct: 0, explanation: 'A vector is coordinates — a position in the model\'s space of meaning.' },
  { question: 'Cosine similarity measures…', options: ['Pixel distance between words', 'The angle between two vectors', 'How many letters two words share'], correct: 1, explanation: 'It is the angle — a small angle means similar meaning.' },
  { question: 'AI bias mainly comes from…', options: ['Random maths errors', 'Patterns in the human data it trained on', 'The programming language used'], correct: 1, explanation: 'Skewed data in, skewed decisions out.' },
  { question: 'A model\'s "knowledge" is really…', options: ['A stored copy of the internet', 'Statistical patterns learned from training data', 'Hand-written rules'], correct: 1, explanation: 'It keeps distilled patterns, not a copy of the data.' },
  { question: 'Why does AI output often feel samey or generic?', options: ['It predicts the most likely (average) result', 'It is always low-resolution', 'It copies one famous author'], correct: 0, explanation: 'Models drift to the statistical average — the "most likely" output.' },
  { question: 'An AI states a false fact with total confidence. This is called…', options: ['Overfitting', 'A hallucination', 'Tokenisation'], correct: 1, explanation: 'Hallucination: plausible-sounding, confidently wrong.' },
  { question: 'In training, human feedback (RLHF) is used to…', options: ['Pay the model', 'Steer it toward answers people rated as helpful and safe', 'Delete old data'], correct: 1, explanation: 'People rate sample answers; the model is tuned toward the good ones.' }
];
LABS['ai-quest'] = {
  title: 'AI Quest — the revision platformer',
  tag: 'Game',
  blurb: 'Run, jump and collect sparks across three worlds. Every spark you grab removes a question from the quiz gate at the end of the level.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-aq-stage">' +
          '<canvas id="' + uid + '-cv" width="640" height="360" aria-label="AI Quest platformer game"></canvas>' +
          '<div class="lab-aq-overlay" id="' + uid + '-select">' +
            '<h4>Choose your runner</h4>' +
            '<div class="lab-aq-chars" id="' + uid + '-chars"></div>' +
            '<p class="lab-note">Jump with <strong>Space</strong>, <strong>tap</strong>, or the button — and pause any time. Collect ⚡ sparks: every spark removes a question from the gate at the end of the level, but a wrong answer at the gate costs you one.</p>' +
          '</div>' +
          '<div class="lab-aq-overlay" id="' + uid + '-quiz" hidden>' +
            '<div class="lab-label" id="' + uid + '-qmeta"></div>' +
            '<h4 id="' + uid + '-qq"></h4>' +
            '<div class="lab-aq-opts" id="' + uid + '-qopts"></div>' +
            '<p class="lab-note" id="' + uid + '-qfb" aria-live="polite"></p>' +
          '</div>' +
          '<div class="lab-aq-overlay" id="' + uid + '-win" hidden>' +
            '<h4>🏆 Quest complete!</h4>' +
            '<p class="lab-note" id="' + uid + '-winmsg"></p>' +
            '<button class="lab-btn lab-btn-primary" id="' + uid + '-replay">↻ Play again</button>' +
          '</div>' +
        '</div>' +
        '<div class="lab-btn-row lab-aq-hud">' +
          '<span class="lab-label">⚡ <span id="' + uid + '-sparks">0</span></span>' +
          '<span class="lab-label">World <span id="' + uid + '-lvl">1</span> / 3</span>' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-jump">⬆ JUMP</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-pause" aria-pressed="false">⏸ Pause</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-restart">↻ Restart</button>' +
        '</div>' +
      '</div>';
  },
  init: function (uid, data) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var ctx = cv.getContext('2d');
    var W = 640, H = 360, GROUND = 316;
    var CHARS = [
      { e: '🦊', c: '#c64b74' }, { e: '🐧', c: '#5db8e8' },
      { e: '🐸', c: '#6fcf97' }, { e: '🦉', c: '#e8b45d' }
    ];
    var LEVELS = [
      { name: 'Campus', sky: ['#8ec9e8', '#dceef8'], hills: '#6fae8f', len: 1900,
        plats: [{ x: 400, y: 252, w: 86 }, { x: 740, y: 232, w: 86 }, { x: 1100, y: 252, w: 90 }, { x: 1460, y: 236, w: 90 }],
        sparks: [{ x: 300, y: 240 }, { x: 540, y: 214 }, { x: 800, y: 202 }, { x: 980, y: 240 }, { x: 1240, y: 216 }, { x: 1520, y: 206 }, { x: 1700, y: 240 }] },
      { name: 'City', sky: ['#3d4a63', '#7387a8'], hills: '#2b3448', len: 2100,
        plats: [{ x: 380, y: 246 }, { x: 720, y: 228 }, { x: 1080, y: 246 }, { x: 1440, y: 228 }, { x: 1780, y: 246 }].map(function (p) { p.w = 88; return p; }),
        sparks: [{ x: 300, y: 234 }, { x: 520, y: 208 }, { x: 760, y: 200 }, { x: 1020, y: 234 }, { x: 1300, y: 210 }, { x: 1560, y: 202 }, { x: 1840, y: 214 }, { x: 1990, y: 234 }] },
      { name: 'Deep space', sky: ['#0b1020', '#1c2440'], hills: '#141a30', len: 2300,
        plats: [{ x: 360, y: 240 }, { x: 690, y: 220 }, { x: 1020, y: 240 }, { x: 1360, y: 216 }, { x: 1700, y: 240 }, { x: 2020, y: 220 }].map(function (p) { p.w = 88; return p; }),
        sparks: [{ x: 280, y: 228 }, { x: 520, y: 206 }, { x: 760, y: 196 }, { x: 1000, y: 228 }, { x: 1240, y: 206 }, { x: 1500, y: 198 }, { x: 1760, y: 228 }, { x: 2020, y: 206 }, { x: 2180, y: 226 }] }
    ];
    function bank() {
      if (data && data.questions && data.questions.length) return data.questions.slice();
      if (typeof QUIZ_BANK !== 'undefined') {
        var flat = [];
        Object.keys(QUIZ_BANK).forEach(function (k) {
          (QUIZ_BANK[k] || []).forEach(function (q) {
            if (q && q.question && q.options && typeof q.correct === 'number') flat.push(q);
          });
        });
        if (flat.length >= 6) return flat;
      }
      return AQ_FALLBACK_QS.slice();
    }
    var G = {
      running: false, paused: false, level: 0, char: CHARS[0],
      x: 60, y: GROUND, vy: 0, onGround: true,
      camX: 0, sparks: 0, levelSparks: 0, taken: {},
      qOrder: [], qPtr: 0, gateNeed: 0, gateAsked: 0, atGate: false,
      qRight: 0, qWrong: 0
    };
    var SPEED = reducedMotion() ? 1.7 : 2.6;
    function setPaused(p) {
      G.paused = p;
      var b = el(uid + '-pause');
      if (b) { b.textContent = p ? '▶ Resume' : '⏸ Pause'; b.setAttribute('aria-pressed', p ? 'true' : 'false'); }
    }
    function startLevel(n) {
      G.level = n; G.x = 60; G.y = GROUND; G.vy = 0; G.onGround = true;
      G.camX = 0; G.levelSparks = 0; G.taken = {}; G.atGate = false;
      el(uid + '-lvl').textContent = (n + 1);
      el(uid + '-select').hidden = true;
      el(uid + '-quiz').hidden = true;
      el(uid + '-win').hidden = true;
      setPaused(false);
      G.running = true;
    }
    function jump() {
      if (!G.running || G.atGate || G.paused) return;
      if (G.onGround) { G.vy = -11.5; G.onGround = false; }
    }
    function openGate() {
      G.atGate = true; G.running = false;
      /* every spark counts: each one removes a gate question (min 1) */
      G.gateNeed = Math.max(1, 5 - G.levelSparks);
      G.gateAsked = 0;
      el(uid + '-quiz').hidden = false;
      askNext();
    }
    function askNext() {
      if (G.gateAsked >= G.gateNeed) {
        el(uid + '-quiz').hidden = true;
        if (G.level >= LEVELS.length - 1) {
          el(uid + '-win').hidden = false;
          el(uid + '-winmsg').textContent =
            'All three worlds cleared, ' + G.sparks + ' ⚡ banked, and ' + G.qRight + ' gate questions answered correctly' +
            (G.qWrong ? ' (' + G.qWrong + ' bounced back for another go)' : ' — without a single miss') +
            '. That was revision. You just asked to replay it.';
          labComplete('ai-quest');
          if (typeof launchConfetti === 'function' && !reducedMotion()) { try { launchConfetti(); } catch (e) {} }
        } else {
          startLevel(G.level + 1);
        }
        return;
      }
      if (G.qPtr >= G.qOrder.length) { G.qOrder = shuffle(bank()); G.qPtr = 0; }
      var q = G.qOrder[G.qPtr++];
      el(uid + '-qmeta').textContent = 'Gate question ' + (G.gateAsked + 1) + ' of ' + G.gateNeed +
        ' · ⚡ removed ' + Math.min(4, G.levelSparks) + ' question' + (Math.min(4, G.levelSparks) === 1 ? '' : 's');
      el(uid + '-qq').textContent = q.question;
      el(uid + '-qfb').textContent = '';
      var opts = el(uid + '-qopts');
      opts.innerHTML = '';
      q.options.forEach(function (o, i) {
        var b = document.createElement('button');
        b.className = 'lab-btn lab-aq-opt';
        b.textContent = o;
        b.addEventListener('click', function () {
          var fb = el(uid + '-qfb');
          if (i === q.correct) {
            G.gateAsked++; G.qRight++;
            fb.textContent = '✓ ' + (q.explanation || 'Correct.');
            setTimeout(askNext, 1100);
          } else {
            G.qWrong++;
            /* wrong answers can't be waited out: the question rejoins the
               pile, and it costs a spark if you have one */
            G.qOrder.push(q);
            var cost = '';
            if (G.sparks > 0) {
              G.sparks--; el(uid + '-sparks').textContent = G.sparks;
              cost = ' It also cost you a spark.';
            }
            fb.textContent = '✗ Not quite — ' + (q.explanation || 'think again.') + ' That question goes back in the pile.' + cost;
            setTimeout(askNext, 1800);
          }
          Array.prototype.forEach.call(opts.children, function (x) { x.disabled = true; });
        });
        opts.appendChild(b);
      });
    }
    function drawSky(L) {
      var g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, L.sky[0]); g.addColorStop(1, L.sky[1]);
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      if (G.level === 2) {
        ctx.fillStyle = 'rgba(255,255,255,.8)';
        for (var i = 0; i < 40; i++) {
          var sx = ((i * 97 - G.camX * 0.2) % (W + 40) + W + 40) % (W + 40) - 20;
          ctx.fillRect(sx, (i * 53) % (GROUND - 30), 1.6, 1.6);
        }
      } else {
        ctx.fillStyle = L.hills;
        for (var h2 = 0; h2 < 6; h2++) {
          var bx = ((h2 * 260 - G.camX * 0.4) % (W + 300) + W + 300) % (W + 300) - 150;
          if (G.level === 1) { ctx.fillRect(bx, GROUND - 130 - (h2 % 3) * 34, 70, 130 + (h2 % 3) * 34); }
          else { ctx.beginPath(); ctx.arc(bx, GROUND + 60, 130, Math.PI, 0); ctx.fill(); }
        }
      }
    }
    function tick() {
      var L = LEVELS[G.level];
      if (G.running && !G.paused) {
        G.x += SPEED;
        G.vy += 0.6; G.y += G.vy;
        var landed = false;
        if (G.y >= GROUND) { G.y = GROUND; G.vy = 0; landed = true; }
        L.plats.forEach(function (p) {
          if (G.vy >= 0 && G.x > p.x - 12 && G.x < p.x + p.w + 12 && G.y >= p.y - 4 && G.y <= p.y + 14) {
            G.y = p.y; G.vy = 0; landed = true;
          }
        });
        G.onGround = landed;
        L.sparks.forEach(function (s, i) {
          if (!G.taken[i] && Math.abs(G.x - s.x) < 16 && Math.abs(G.y - 14 - s.y) < 26) {
            G.taken[i] = true; G.sparks++; G.levelSparks++;
            el(uid + '-sparks').textContent = G.sparks;
          }
        });
        G.camX = Math.max(0, Math.min(L.len - W, G.x - W * 0.35));
        if (G.x >= L.len - 60) openGate();
      }
      /* render */
      drawSky(L);
      ctx.save();
      ctx.translate(-G.camX, 0);
      ctx.fillStyle = G.level === 2 ? '#232c4a' : G.level === 1 ? '#454f66' : '#7a9e6d';
      ctx.fillRect(0, GROUND + 14, L.len + 200, H - GROUND);
      ctx.fillStyle = 'rgba(0,0,0,.14)';
      ctx.fillRect(0, GROUND + 14, L.len + 200, 5);
      ctx.fillStyle = G.level === 2 ? '#3a4670' : '#8a94ab';
      L.plats.forEach(function (p) { ctx.fillRect(p.x, p.y + 12, p.w, 12); });
      ctx.font = '16px sans-serif'; ctx.textAlign = 'center';
      L.sparks.forEach(function (s, i) {
        if (G.taken[i]) return;
        ctx.fillText('⚡', s.x, s.y);
      });
      /* the gate */
      ctx.fillStyle = '#9b1844';
      ctx.fillRect(L.len - 46, GROUND - 66, 10, 80);
      ctx.font = '20px sans-serif';
      ctx.fillText('🚪', L.len - 40, GROUND - 70);
      /* the runner */
      ctx.fillStyle = G.char.c;
      ctx.beginPath(); ctx.arc(G.x, G.y - 2, 13, 0, Math.PI * 2); ctx.fill();
      ctx.font = '17px sans-serif';
      ctx.fillText(G.char.e, G.x, G.y + 4);
      ctx.restore();
      ctx.textAlign = 'left';
      ctx.fillStyle = G.level === 0 ? 'rgba(20,26,48,.75)' : 'rgba(255,255,255,.85)';
      ctx.font = '700 12px sans-serif';
      ctx.fillText(L.name, 12, 20);
    }
    /* character select */
    var chars = el(uid + '-chars');
    chars.innerHTML = '';
    CHARS.forEach(function (ch) {
      var b = document.createElement('button');
      b.className = 'lab-aq-char';
      b.style.background = ch.c;
      b.textContent = ch.e;
      b.addEventListener('click', function () {
        G.char = ch; G.sparks = 0; G.qRight = 0; G.qWrong = 0;
        el(uid + '-sparks').textContent = '0';
        G.qOrder = shuffle(bank()); G.qPtr = 0;
        startLevel(0);
      });
      chars.appendChild(b);
    });
    el(uid + '-pause').addEventListener('click', function () {
      if (!G.running) return;
      setPaused(!G.paused);
    });
    el(uid + '-jump').addEventListener('click', jump);
    cv.addEventListener('pointerdown', jump);
    el(uid).addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'ArrowUp') { e.preventDefault(); jump(); }
    });
    el(uid).setAttribute('tabindex', '0');
    el(uid + '-restart').addEventListener('click', function () {
      G.running = false; G.sparks = 0; G.qRight = 0; G.qWrong = 0;
      setPaused(false);
      el(uid + '-sparks').textContent = '0';
      el(uid + '-quiz').hidden = true; el(uid + '-win').hidden = true;
      el(uid + '-select').hidden = false;
    });
    el(uid + '-replay').addEventListener('click', function () {
      el(uid + '-win').hidden = true;
      el(uid + '-select').hidden = false;
      G.sparks = 0; el(uid + '-sparks').textContent = '0';
    });
    loop(uid, cv, function () { tick(); });
  }
};

/* ============================================================
   LAB: skew-trainer
   Train a classifier on a lopsided dataset, then measure who
   pays for the imbalance. Two skins (pets / loans) and an
   optional decision-threshold extension (labData.advanced).
   ============================================================ */
var SK_SKINS = {
  pets: {
    a: '🐶', b: '🐱', aName: 'dogs', bName: 'cats',
    mixLabel: '% dogs', dataLabel: 'Training data — 40 labelled photos',
    trainBtn: 'Train the detector →', testBtn: 'Test on 12 new pets',
    fixBtn: '⚖️ Collect more cat data & retrain',
    swap: '🔁 Swap scenario: make it loan applications',
    real: 'Swap "cats" for a group of people and "pet detector" for a CV screener, and this is precisely how the hiring tool that downgraded women\'s CVs went wrong: <strong>skewed data in, skewed decisions out</strong>.'
  },
  loans: {
    a: '🅰️', b: '🅱️', aName: 'Group A', bName: 'Group B',
    mixLabel: '% Group A', dataLabel: 'Training data — 40 past loan decisions',
    trainBtn: 'Train the predictor →', testBtn: 'Test on 12 new applications',
    fixBtn: '⚖️ Collect more Group B data & retrain',
    swap: '🔁 Swap scenario: back to pets',
    real: 'This is no longer a toy. Credit scoring, insurance pricing and CV screening all train on historical decisions — and history is rarely balanced. The group with less data gets less accurate decisions, <strong>delivered with the same confident score</strong>.'
  }
};
LABS['skew-trainer'] = {
  title: 'The skewed-data trainer — cause the bias, then measure it',
  tag: 'Bias',
  blurb: 'Choose how lopsided the training data is, train, and test. The group with less data gets more errors — bias you created, measured. Then swap the pets for loan applications.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-slider-row"><label for="' + uid + '-mix" id="' + uid + '-mixlbl">Training mix</label>' +
          '<input type="range" id="' + uid + '-mix" min="50" max="95" value="88">' +
          '<span class="lab-val" id="' + uid + '-mixv"></span></div>' +
        '<div class="lab-label" style="margin-top:10px" id="' + uid + '-datalbl"></div>' +
        '<div class="lab-skew-data" id="' + uid + '-data" aria-hidden="true"></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-train"></button>' +
          '<button class="lab-btn" id="' + uid + '-test" disabled></button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-many" disabled>🎲 Run the test 100×</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-fix" disabled></button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-swap"></button>' +
        '</div>' +
        '<div id="' + uid + '-acc"></div>' +
        '<div id="' + uid + '-thresh"></div>' +
        '<div class="lab-skew-test" id="' + uid + '-grid"></div>' +
        '<p class="lab-note" id="' + uid + '-msg" aria-live="polite"></p>' +
      '</div>';
  },
  init: function (uid, data) {
    var advanced = !!(data && data.advanced);
    var skinKey = 'pets', trained = false, accA = 0, accB = 0;
    function skin() { return SK_SKINS[skinKey]; }
    function share() { return (+el(uid + '-mix').value) / 100; }
    function accFor(s) { return Math.min(96, Math.round(50 + 46 * Math.sqrt(Math.min(1, s / 0.5)))); }
    function applySkin() {
      var S = skin();
      el(uid + '-datalbl').textContent = S.dataLabel;
      el(uid + '-train').textContent = S.trainBtn;
      el(uid + '-test').textContent = S.testBtn;
      el(uid + '-fix').textContent = S.fixBtn;
      el(uid + '-swap').textContent = S.swap;
    }
    function renderData() {
      var S = skin(), s = share(), nA = Math.round(40 * s);
      el(uid + '-mixv').textContent = Math.round(s * 100) + '% ' + S.aName + ' · ' + Math.round((1 - s) * 100) + '% ' + S.bName;
      el(uid + '-datalbl').textContent = S.dataLabel + ' (' + nA + ' ' + S.aName + ', ' + (40 - nA) + ' ' + S.bName + ')';
      var h = '';
      for (var i = 0; i < 40; i++) h += '<span>' + (i < nA ? S.a : S.b) + '</span>';
      el(uid + '-data').innerHTML = h;
      trained = false;
      el(uid + '-test').disabled = true;
      el(uid + '-many').disabled = true;
      el(uid + '-fix').disabled = true;
      el(uid + '-acc').innerHTML = '';
      el(uid + '-thresh').innerHTML = '';
      el(uid + '-grid').innerHTML = '';
      el(uid + '-msg').textContent = 'Slide the mix, then train. The model will be exactly as good as its data lets it be.';
    }
    function bar(label, val, col) {
      return '<div class="lab-skew-bar-row"><span class="lab-skew-bar-label">' + label + '</span>' +
        '<span class="lab-skew-bar"><span style="width:' + val + '%;background:' + col + '"></span></span>' +
        '<span class="lab-val">' + val + '%</span></div>';
    }
    function renderThreshold() {
      if (!advanced || !trained) return;
      var box = el(uid + '-thresh');
      box.innerHTML =
        '<div class="lab-label" style="margin-top:14px">Advanced — choose the decision cut-off</div>' +
        '<div class="lab-slider-row"><label for="' + uid + '-t">How sure before saying yes?</label>' +
          '<input type="range" id="' + uid + '-t" min="50" max="95" value="70">' +
          '<span class="lab-val" id="' + uid + '-tv">70%</span></div>' +
        '<div id="' + uid + '-terr"></div>';
      function renderErr() {
        var S = skin(), t = +el(uid + '-t').value;
        el(uid + '-tv').textContent = t + '%';
        function fr(acc) { return Math.max(2, Math.min(70, Math.round(6 + (t - acc) * 1.4 + (96 - acc) * 0.4))); }
        function fa(acc) { return Math.max(2, Math.min(70, Math.round(6 + (acc - t) * 1.1 + (96 - acc) * 0.3))); }
        el(uid + '-terr').innerHTML =
          bar(S.a + ' wrongly rejected', fr(accA), 'var(--warning)') +
          bar(S.a + ' wrongly accepted', fa(accA), 'var(--accent)') +
          bar(S.b + ' wrongly rejected', fr(accB), 'var(--warning)') +
          bar(S.b + ' wrongly accepted', fa(accB), 'var(--accent)') +
          '<p class="lab-note">Move the cut-off and watch the trade: a stricter threshold rejects more good cases; a looser one accepts more bad ones. You can never zero both — and notice the under-represented group pays more <em>at every setting</em>, because the model is simply less sure about them.</p>';
      }
      el(uid + '-t').addEventListener('input', renderErr);
      renderErr();
    }
    function train() {
      var S = skin(), s = share();
      accA = accFor(s); accB = accFor(1 - s);
      trained = true;
      el(uid + '-acc').innerHTML =
        '<div class="lab-label" style="margin-top:12px">Accuracy after training</div>' +
        bar(S.a + ' ' + S.aName, accA, 'var(--accent)') + bar(S.b + ' ' + S.bName, accB, 'var(--primary-light)');
      el(uid + '-test').disabled = false;
      el(uid + '-many').disabled = false;
      el(uid + '-fix').disabled = false;
      var gap = accA - accB;
      el(uid + '-msg').innerHTML = gap > 15
        ? 'A <strong>' + gap + '-point accuracy gap</strong> — and nobody wrote a single biased rule. The model simply saw far fewer ' + S.bName + '. Now test it.'
        : gap > 5
          ? 'A ' + gap + '-point gap. Small imbalance, small unfairness — the relationship is direct. Test it.'
          : 'Balanced data, balanced accuracy. This is what fair training data buys you. Test it to confirm.';
      el(uid + '-grid').innerHTML = '';
      renderThreshold();
    }
    function test() {
      if (!trained) return;
      var S = skin(), h = '', wrongB = 0, wrongA = 0;
      for (var i = 0; i < 12; i++) {
        var isA = i < 6;
        var ok = Math.random() * 100 < (isA ? accA : accB);
        if (!ok) { if (isA) wrongA++; else wrongB++; }
        h += '<span class="lab-skew-cell ' + (ok ? 'ok' : 'no') + '">' + (isA ? S.a : S.b) + (ok ? '✓' : '✗') + '</span>';
      }
      el(uid + '-grid').innerHTML = h;
      el(uid + '-msg').innerHTML = 'On this test: <strong>' + wrongA + '/6 ' + S.aName + '</strong> and <strong>' + wrongB +
        '/6 ' + S.bName + '</strong> got the wrong decision. ' + S.real;
      labComplete('skew-trainer');
    }
    el(uid + '-mix').addEventListener('input', renderData);
    el(uid + '-train').addEventListener('click', train);
    el(uid + '-test').addEventListener('click', test);
    el(uid + '-many').addEventListener('click', function () {
      if (!trained) return;
      /* one lucky test can hide the gap; a hundred can't */
      var S = skin(), wrongA = 0, wrongB = 0, runs = 100;
      for (var r = 0; r < runs; r++) {
        for (var i = 0; i < 6; i++) {
          if (Math.random() * 100 >= accA) wrongA++;
          if (Math.random() * 100 >= accB) wrongB++;
        }
      }
      var pA = Math.round(100 * wrongA / (runs * 6)), pB = Math.round(100 * wrongB / (runs * 6));
      el(uid + '-grid').innerHTML = '';
      el(uid + '-msg').innerHTML = 'Across <strong>100 test days</strong> (600 ' + S.aName + ', 600 ' + S.bName + '): ' +
        S.aName + ' got the wrong decision <strong>' + pA + '%</strong> of the time; ' + S.bName + ' <strong>' + pB +
        '%</strong>. On any single day the ' + S.bName + ' might get lucky — over a hundred days the gap is a fact. That\'s why auditors measure error <em>rates per group</em>, never one demo.';
      labComplete('skew-trainer');
    });
    el(uid + '-fix').addEventListener('click', function () {
      el(uid + '-mix').value = 50;
      renderData(); train();
      el(uid + '-msg').innerHTML = 'Rebalanced and retrained: the gap closes. The fix for this kind of bias is rarely cleverer maths — it is <strong>better data</strong>, and someone deciding the gap matters enough to collect it.';
    });
    el(uid + '-swap').addEventListener('click', function () {
      skinKey = skinKey === 'pets' ? 'loans' : 'pets';
      applySkin(); renderData();
    });
    applySkin();
    renderData();
  }
};

/* ============================================================
   LAB: misinfo-network
   A false story races its correction — and at some point it
   reaches YOU, and you choose: share, or check first.
   ============================================================ */
LABS['misinfo-network'] = {
  title: 'The misinformation race — a lie versus its correction',
  tag: 'Truth & media',
  blurb: 'Release a false story, delay the correction, and watch the asymmetry. Somewhere in the network is you — and when the story arrives, you choose what kind of node to be.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-canvas-wrap lab-canvas-dark"><canvas id="' + uid + '-cv"></canvas></div>' +
        '<div class="lab-slider-row"><label for="' + uid + '-p">Outrage factor</label>' +
          '<input type="range" id="' + uid + '-p" min="10" max="50" value="32">' +
          '<span class="lab-val" id="' + uid + '-pv"></span></div>' +
        '<div class="lab-slider-row"><label for="' + uid + '-d">Fact-check delay</label>' +
          '<input type="range" id="' + uid + '-d" min="2" max="30" value="14">' +
          '<span class="lab-val" id="' + uid + '-dv"></span></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-run">▶ Release the story</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-reset">↻ Reset</button>' +
          '<span class="lab-label" style="margin:0 0 0 auto"><span style="color:#ef5f6e">■</span> story <span id="' + uid + '-cf">0</span> · <span style="color:#5db8e8">■</span> correction <span id="' + uid + '-ct">0</span></span>' +
        '</div>' +
        '<p class="lab-note" id="' + uid + '-msg" aria-live="polite">The gold ring is you. When the story reaches your neighbours, you\'ll have to decide what to do with it.</p>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var nodes = [], running = false, tick = 0, timer = null;
    var youIdx = -1, youAsked = false, youChecked = false, youChoice = null;
    /* seeded RNG so "same network, opposite choice" replays are truly identical */
    var seed = 0, rand = Math.random, autoChoice = null, lastRun = null;
    var YOU_FORCE_TICK = 20; /* the story always finds you by this tick */
    var f = fitCanvas(cv, 0.5, 220), ctx = f.ctx, W = f.W, H = f.H;
    function mkRand(s) {
      return function () {
        s |= 0; s = (s + 0x6D2B79F5) | 0;
        var t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }
    function build(s) {
      seed = s;
      rand = mkRand(s);
      nodes = [];
      for (var i = 0; i < 64; i++) {
        nodes.push({ x: 20 + rand() * (W - 40), y: 18 + rand() * (H - 36), state: 0, links: [] });
      }
      nodes.forEach(function (n, i) {
        var byDist = nodes.map(function (m, j) { return { j: j, d: Math.hypot(n.x - m.x, n.y - m.y) }; })
          .filter(function (o) { return o.j !== i; })
          .sort(function (a, b) { return a.d - b.d; })
          .slice(0, 3);
        byDist.forEach(function (o) { if (n.links.indexOf(o.j) < 0) n.links.push(o.j); });
      });
      nodes[0].state = 1;
      /* you: a mid-distance node, so the story takes a while to arrive */
      var byDist = nodes.map(function (n, i) {
        return { i: i, d: Math.hypot(n.x - nodes[0].x, n.y - nodes[0].y) };
      }).sort(function (a, b) { return a.d - b.d; });
      youIdx = byDist[Math.floor(byDist.length * 0.55)].i;
      youAsked = false; youChecked = false; youChoice = null;
      tick = 0;
      counts();
      draw();
    }
    function counts() {
      var cf = 0, ct = 0;
      nodes.forEach(function (n) { if (n.state === 1) cf++; if (n.state === 2) ct++; });
      el(uid + '-cf').textContent = cf;
      el(uid + '-ct').textContent = ct;
      return { cf: cf, ct: ct };
    }
    function draw() {
      ctx.fillStyle = '#0b1220'; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(148,163,184,.18)'; ctx.lineWidth = 0.7;
      nodes.forEach(function (n, i) {
        n.links.forEach(function (j) {
          if (j > i) { ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke(); }
        });
      });
      nodes.forEach(function (n, i) {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.state ? 5 : 3.4, 0, Math.PI * 2);
        ctx.fillStyle = n.state === 1 ? '#ef5f6e' : n.state === 2 ? '#5db8e8' : 'rgba(203,213,225,.55)';
        if (n.state) { ctx.shadowColor = ctx.fillStyle; ctx.shadowBlur = 9; }
        ctx.fill(); ctx.shadowBlur = 0;
        if (i === youIdx) {
          ctx.strokeStyle = '#e8b45d'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(n.x, n.y, 8.5, 0, Math.PI * 2); ctx.stroke();
          ctx.fillStyle = '#e8b45d'; ctx.font = '700 10px sans-serif';
          ctx.fillText('you', Math.min(n.x + 10, W - 26), n.y + 3);
        }
      });
    }
    function startTimer() {
      timer = setInterval(function () { if (!cv.isConnected) { stop(); return; } step(); }, reducedMotion() ? 500 : 260);
    }
    function choose(choice) {
      youChoice = choice;
      if (choice === 'check') {
        nodes[youIdx].state = 2; youChecked = true;
        el(uid + '-msg').textContent = 'You checked first — it doesn\'t hold up, so you post the correction instead. The story can\'t travel through you now.';
      } else {
        nodes[youIdx].state = 1;
        el(uid + '-msg').textContent = 'You shared it. Your whole branch of the network is now downstream of that tap…';
      }
      draw(); counts();
      running = true;
      el(uid + '-run').textContent = '❚❚ Stop';
      startTimer();
    }
    function pauseForYou() {
      if (timer) { clearInterval(timer); timer = null; }
      running = false;
      el(uid + '-run').textContent = '▶ Release the story';
      youAsked = true;
      if (autoChoice) {
        var c = autoChoice;
        el(uid + '-msg').textContent = 'Same network, same spread — but this time you ' + (c === 'share' ? 'share it.' : 'check it first.');
        setTimeout(function () { if (cv.isConnected) choose(c); }, reducedMotion() ? 120 : 750);
        return;
      }
      el(uid + '-msg').innerHTML =
        '<strong>The story just reached your feed.</strong> It\'s shocking, it\'s shareable, your friends are posting it. What do you do? ' +
        '<span class="lab-btn-row" style="margin-top:8px;display:flex">' +
        '<button class="lab-btn lab-btn-primary" id="' + uid + '-share">📤 Share it</button>' +
        '<button class="lab-btn" id="' + uid + '-checkbtn">🔍 Check it first</button></span>';
      el(uid + '-share').addEventListener('click', function () { choose('share'); });
      el(uid + '-checkbtn').addEventListener('click', function () { choose('check'); });
    }
    function step() {
      tick++;
      var pF = (+el(uid + '-p').value) / 100;
      var pT = Math.max(0.06, pF * 0.45); /* corrections are less shareable */
      var delay = +el(uid + '-d').value;
      if (tick === delay) {
        var far = nodes.reduce(function (best, n, i) {
          var d = Math.hypot(n.x - nodes[0].x, n.y - nodes[0].y);
          return d > best.d ? { i: i, d: d } : best;
        }, { i: 1, d: -1 });
        if (nodes[far.i].state === 0) nodes[far.i].state = 2;
      }
      /* your moment is guaranteed: if the story hasn't knocked by now, it resurfaces next door */
      if (!youAsked && tick >= YOU_FORCE_TICK && nodes[youIdx].links.length) {
        var nb = nodes[youIdx].links[0];
        if (nodes[nb].state !== 1) nodes[nb].state = 1;
      }
      /* pause when the story is knocking at your door (either link direction) */
      if (!youAsked && nodes[youIdx].state === 0 && (
          nodes[youIdx].links.some(function (j) { return nodes[j].state === 1; }) ||
          nodes.some(function (n) { return n.state === 1 && n.links.indexOf(youIdx) >= 0; }))) {
        counts();
        draw();
        pauseForYou();
        return;
      }
      var next = nodes.map(function (n) { return n.state; });
      nodes.forEach(function (n) {
        if (!n.state) return;
        n.links.forEach(function (j) {
          var m = nodes[j];
          if (j === youIdx && (!youAsked || youChecked)) return; /* your choice stays yours */
          if (n.state === 1 && m.state === 0 && rand() < pF) next[j] = 1;
          if (n.state === 2 && m.state !== 2 && rand() < pT) next[j] = 2;
        });
      });
      nodes.forEach(function (n, i) { n.state = next[i]; });
      var c = counts();
      draw();
      if (tick > 70 || c.cf + c.ct >= nodes.length) {
        stop();
        var youLine = !youAsked ? ''
          : youChecked
            ? ' <strong>Your check mattered:</strong> the story never travelled through you — every person who verifies before sharing deletes an entire branch of the spread.'
            : ' <strong>And your share was part of it</strong> — one tap, one more branch for the story.';
        var summary = 'Final score: the story reached <strong style="color:#ef5f6e">' + c.cf +
          '</strong> people; the correction reached <strong style="color:#5db8e8">' + c.ct +
          '</strong>. ' + (c.cf > c.ct
            ? 'The lie won — it had a head start and it travels on outrage, while the correction travels on duty.'
            : 'The correction caught up — early fact-checking and a lower outrage factor can win.') + youLine;
        var extra = '';
        if (lastRun && lastRun.seed === seed && youChoice && lastRun.choice && lastRun.choice !== youChoice) {
          extra = '<br><strong>Same network, two endings:</strong> when you ' +
            (lastRun.choice === 'share' ? 'shared' : 'checked first') + ', the story reached ' + lastRun.cf +
            ' and the correction ' + lastRun.ct + '; this time it was ' + c.cf + ' vs ' + c.ct +
            '. One decision at one node, and the ending is measurably different.';
        } else if (youChoice) {
          lastRun = { seed: seed, choice: youChoice, cf: c.cf, ct: c.ct };
          extra = ' <button class="lab-btn lab-btn-sm" id="' + uid + '-flip">↺ Same network, opposite choice</button>';
        }
        el(uid + '-msg').innerHTML = summary + extra;
        var flip = el(uid + '-flip');
        if (flip) flip.addEventListener('click', function () {
          autoChoice = lastRun.choice === 'share' ? 'check' : 'share';
          build(lastRun.seed);
          running = true;
          el(uid + '-run').textContent = '❚❚ Stop';
          el(uid + '-msg').textContent = 'Replaying the identical network — same story, same spread, opposite you.';
          startTimer();
        });
        labComplete('misinfo-network');
      }
    }
    function stop() { running = false; if (timer) { clearInterval(timer); timer = null; } el(uid + '-run').textContent = '▶ Release the story'; }
    el(uid + '-run').addEventListener('click', function () {
      if (running) { stop(); return; }
      autoChoice = null; lastRun = null;
      build(Math.floor(Math.random() * 1e9) + 1);
      running = true;
      el(uid + '-run').textContent = '❚❚ Stop';
      el(uid + '-msg').textContent = 'The gold ring is you. When the story reaches your neighbours, you\'ll have to decide what to do with it.';
      startTimer();
    });
    el(uid + '-reset').addEventListener('click', function () {
      stop(); autoChoice = null; lastRun = null;
      build(Math.floor(Math.random() * 1e9) + 1);
      el(uid + '-msg').textContent = 'The gold ring is you. When the story reaches your neighbours, you\'ll have to decide what to do with it.';
    });
    el(uid + '-p').addEventListener('input', function () { el(uid + '-pv').textContent = el(uid + '-p').value + '% share chance'; });
    el(uid + '-d').addEventListener('input', function () { el(uid + '-dv').textContent = el(uid + '-d').value + ' ticks late'; });
    el(uid + '-pv').textContent = el(uid + '-p').value + '% share chance';
    el(uid + '-dv').textContent = el(uid + '-d').value + ' ticks late';
    build(Math.floor(Math.random() * 1e9) + 1);
  }
};
/* ============================================================
   LAB: filter-bubble
   Every tap teaches the algorithm; watch your feed narrow.
   ============================================================ */
var FB_TOPICS = [
  { k: 'football', e: '⚽' }, { k: 'gaming', e: '🎮' }, { k: 'music', e: '🎵' },
  { k: 'baking', e: '🧁' }, { k: 'space', e: '🚀' }, { k: 'fashion', e: '👟' },
  { k: 'news', e: '📰' }, { k: 'nature', e: '🦜' }
];
LABS['filter-bubble'] = {
  title: 'The filter bubble — watch your feed narrow',
  tag: 'Algorithms',
  blurb: 'Tap what you\'d watch. Every tap teaches the recommender, and the diversity meter shows your world shrinking in real time. Then burst the bubble.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-fb-meter-row"><span class="lab-label" style="margin:0" id="' + uid + '-meterlbl">Feed diversity</span>' +
          '<span class="lab-fb-meter" role="progressbar" id="' + uid + '-meterbar" aria-labelledby="' + uid + '-meterlbl" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100"><span id="' + uid + '-meter"></span></span>' +
          '<span class="lab-val" id="' + uid + '-meterv"></span></div>' +
        '<div class="lab-label" style="margin-top:12px">Your feed — tap the one you\'d actually watch <span id="' + uid + '-round"></span></div>' +
        '<div class="lab-fb-feed" id="' + uid + '-feed"></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-auto">⏩ Let it run on autopilot</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-burst" disabled>💥 Burst the bubble</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-reset">↻ Start over</button>' +
        '</div>' +
        '<p class="lab-note" id="' + uid + '-msg" aria-live="polite">The recommender starts knowing nothing about you. Ten taps from now it will think it knows everything.</p>' +
      '</div>';
  },
  init: function (uid) {
    var weights, history, watched, round, frozen;
    function reset() {
      weights = {}; history = []; watched = []; round = 0; frozen = false;
      FB_TOPICS.forEach(function (t) { weights[t.k] = 1; });
      el(uid + '-burst').disabled = true;
      el(uid + '-msg').textContent = 'The recommender starts knowing nothing about you. Ten taps from now it will think it knows everything.';
      dealFeed();
    }
    function samplePosts() {
      /* weighted sample; a dominant topic can appear more than once —
         repetition is what a narrowed feed actually looks like. A mild
         within-feed penalty keeps early (uniform) feeds varied. */
      var picks = [], local = {};
      FB_TOPICS.forEach(function (t) { local[t.k] = weights[t.k]; });
      for (var n = 0; n < 4; n++) {
        var total = FB_TOPICS.reduce(function (s, t) { return s + local[t.k]; }, 0);
        var r = Math.random() * total, acc = 0, chosen = FB_TOPICS[0];
        for (var i = 0; i < FB_TOPICS.length; i++) {
          acc += local[FB_TOPICS[i].k];
          if (r <= acc) { chosen = FB_TOPICS[i]; break; }
        }
        picks.push(chosen);
        local[chosen.k] *= 0.35;
      }
      return picks;
    }
    function meter() {
      var recent = history.slice(-12);
      var distinct = {};
      recent.forEach(function (k) { distinct[k] = 1; });
      var n = Object.keys(distinct).length;
      var pct = Math.round(100 * n / Math.min(8, Math.max(1, recent.length)));
      var m = el(uid + '-meter');
      m.style.width = pct + '%';
      m.style.background = pct > 60 ? 'var(--success)' : pct > 35 ? 'var(--warning)' : 'var(--danger)';
      el(uid + '-meterv').textContent = pct + '%';
      var bar = el(uid + '-meterbar');
      if (bar) bar.setAttribute('aria-valuenow', pct);
      return pct;
    }
    function topShare(arr) {
      var counts = {}, top = null;
      arr.forEach(function (k) { counts[k] = (counts[k] || 0) + 1; if (!top || counts[k] > counts[top]) top = k; });
      return top ? { k: top, pct: Math.round(100 * counts[top] / arr.length) } : null;
    }
    function freezeFeed() {
      frozen = true;
      el(uid + '-burst').disabled = false;
      Array.prototype.forEach.call(el(uid + '-feed').querySelectorAll('button'), function (b) { b.disabled = true; });
    }
    function dealFeed() {
      if (frozen) return;
      round++;
      el(uid + '-round').textContent = '· round ' + round;
      var posts = samplePosts();
      var feed = el(uid + '-feed');
      feed.innerHTML = '';
      posts.forEach(function (t) {
        history.push(t.k); /* an impression counts — you saw it */
        var b = document.createElement('button');
        b.className = 'lab-fb-post';
        b.innerHTML = '<span class="lab-fb-emoji">' + t.e + '</span>' + t.k;
        b.addEventListener('click', function () { watch(t); });
        feed.appendChild(b);
      });
      meter();
    }
    function watch(t) {
      watched.push(t.k);
      weights[t.k] += 2.4;
      FB_TOPICS.forEach(function (o) { if (o.k !== t.k) weights[o.k] = Math.max(0.15, weights[o.k] * 0.82); });
      var pct = meter();
      if (round >= 10) {
        freezeFeed();
        var shown = topShare(history.slice(-12)), tapped = topShare(watched);
        el(uid + '-msg').innerHTML = 'Ten rounds in: your taps were <strong>' + tapped.pct + '% ' + tapped.k +
          '</strong>, so what you\'re now <em>shown</em> is <strong>' + shown.pct + '% ' + shown.k +
          '</strong> — diversity <strong>' + pct + '%</strong>. Nobody censored anything; the algorithm just kept serving your taps back to you. The gap between what you chose and what you now get offered <em>is</em> the bubble. Burst it to keep scrolling.';
        labComplete('filter-bubble');
        return;
      }
      dealFeed();
    }
    el(uid + '-auto').addEventListener('click', function () {
      /* autopilot: always "watch" the top-weighted post — the doom-scroll */
      if (frozen) return;
      for (var i = 0; i < 10; i++) {
        var best = FB_TOPICS.reduce(function (a, b) { return weights[b.k] > weights[a.k] ? b : a; }, FB_TOPICS[0]);
        history.push(best.k, best.k);
        watched.push(best.k);
        weights[best.k] += 2.4;
        FB_TOPICS.forEach(function (o) { if (o.k !== best.k) weights[o.k] = Math.max(0.15, weights[o.k] * 0.82); });
        round++;
      }
      var pct = meter();
      var top = topShare(history.slice(-12));
      freezeFeed();
      el(uid + '-msg').innerHTML = 'Autopilot is the honest version: you tap the easiest thing, the algorithm narrows, repeat. Diversity: <strong>' + pct + '%</strong>, feed now <strong>' + (top ? top.pct + '% ' + top.k : '—') + '</strong>. Burst the bubble to take the wheel back.';
      labComplete('filter-bubble');
    });
    el(uid + '-burst').addEventListener('click', function () {
      FB_TOPICS.forEach(function (t) { weights[t.k] = 1; });
      history = history.concat(FB_TOPICS.map(function (t) { return t.k; }));
      frozen = false; round = 0;
      el(uid + '-burst').disabled = true;
      var pct = meter();
      el(uid + '-msg').innerHTML = 'Bubble burst — diversity back to <strong>' + pct + '%</strong>. In real life this button is: search for things you\'d never tap, follow people you disagree with, and remember the feed is a mirror of your taps, not of the world.';
      dealFeed();
    });
    el(uid + '-reset').addEventListener('click', reset);
    reset();
  }
};

/* ============================================================
   LAB: engagement-algorithm
   YOU are the recommender. Hit the watch-time target.
   ============================================================ */
var EA_POOL = [
  { e: '😂', t: 'Funny clips compilation', w: 6, well: 0 },
  { e: '😱', t: 'Outrage row everyone\'s arguing about', w: 9, well: -8 },
  { e: '🔥', t: 'Drama channel pile-on', w: 8, well: -6 },
  { e: '📚', t: 'Homework help they searched for', w: 3, well: 6 },
  { e: '🏃', t: '"Go outside" vlog', w: 2, well: 8 },
  { e: '🧘', t: 'Sleep sounds playlist', w: 1, well: 10 },
  { e: '🌙', t: 'Autoplay the next episode (it\'s 1am)', w: 12, well: -12, late: true }
];
LABS['engagement-algorithm'] = {
  title: 'Be the engagement algorithm',
  tag: 'Wellbeing',
  blurb: 'You are the recommender and the company gave you one metric: watch time. Choose what to show a real viewer for eight rounds — and see what your metric never measured.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-ea-meters">' +
          '<div class="lab-ea-meter"><div class="lab-label" id="' + uid + '-wlbl">📈 Watch time <span id="' + uid + '-wv">0 min</span> · target 45</div>' +
            '<div class="lab-ea-bar"><span id="' + uid + '-wbar" style="background:var(--accent)"></span></div></div>' +
          '<div class="lab-ea-meter"><div class="lab-label">💙 Viewer wellbeing <span id="' + uid + '-bv">?</span></div>' +
            '<div class="lab-ea-bar lab-ea-bar-mid"><span id="' + uid + '-bbar"></span></div></div>' +
        '</div>' +
        '<div class="lab-label" id="' + uid + '-roundlbl" style="margin-top:12px"></div>' +
        '<div class="lab-ea-opts" id="' + uid + '-opts"></div>' +
        '<p class="lab-note" id="' + uid + '-msg" aria-live="polite">Your performance review depends on one number. The viewer\'s mood is not on your dashboard. Pick what they see next.</p>' +
        '<div class="lab-btn-row"><button class="lab-btn lab-btn-sm" id="' + uid + '-reset">↻ New shift</button></div>' +
      '</div>';
  },
  init: function (uid) {
    var watch, well, round, mode, picksMade;
    function reset(newMode) {
      watch = 0; well = 0; round = 0; picksMade = [];
      mode = newMode === 2 ? 2 : 1;
      el(uid + '-wlbl').innerHTML = mode === 2
        ? '📈 Quality score <span id="' + uid + '-wv">0</span> · target 45 (watch&nbsp;time&nbsp;+&nbsp;wellbeing)'
        : '📈 Watch time <span id="' + uid + '-wv">0 min</span> · target 45';
      el(uid + '-msg').textContent = mode === 2
        ? 'Shift two: the company changed the metric. Wellbeing now counts — and suddenly you can see it.'
        : 'Your performance review depends on one number. The viewer\'s mood is not on your dashboard. Pick what they see next.';
      meters(); deal();
    }
    function meters(reveal) {
      var showWell = mode === 2 || reveal;
      el(uid + '-wv').textContent = mode === 2 ? String(watch + well) : watch + ' min';
      el(uid + '-bv').textContent = showWell ? (well > 0 ? '+' : '') + well : '?';
      el(uid + '-wbar').style.width = Math.min(100, (mode === 2 ? (watch + well) : watch) / 60 * 100) + '%';
      var bb = el(uid + '-bbar');
      if (!showWell) {
        /* the metric you weren't given: hidden until the reveal */
        bb.style.width = '0%';
        return;
      }
      var pct = Math.max(-50, Math.min(50, well));
      bb.style.width = Math.abs(pct) + '%';
      bb.style.marginLeft = pct < 0 ? (50 - Math.abs(pct)) + '%' : '50%';
      bb.style.background = well >= 0 ? 'var(--success)' : 'var(--danger)';
    }
    function deal() {
      round++;
      el(uid + '-roundlbl').textContent = 'Round ' + round + ' of 8 — what does the viewer see next?';
      var pool = EA_POOL.filter(function (o) { return !o.late || round >= 5; });
      var picks = shuffle(pool).slice(0, 3);
      var opts = el(uid + '-opts');
      opts.innerHTML = '';
      picks.forEach(function (o) {
        var b = document.createElement('button');
        b.className = 'lab-ea-opt';
        b.innerHTML = '<span class="lab-fb-emoji">' + o.e + '</span><span>' + esc(o.t) + '</span>' +
          '<span class="lab-nw-pct">+' + o.w + ' min' +
          (mode === 2 ? ' · ' + (o.well >= 0 ? '+' : '') + o.well + ' mood' : '') + '</span>';
        b.addEventListener('click', function () { choose(o); });
        opts.appendChild(b);
      });
    }
    function choose(o) {
      watch += o.w; well += o.well;
      picksMade.push(o);
      meters();
      if (round >= 8) { finishShift(); return; }
      deal();
    }
    function finishShift() {
      el(uid + '-opts').innerHTML = '';
      el(uid + '-roundlbl').textContent = 'Shift over.';
      if (mode === 1) {
        var hit = watch >= 45;
        /* now — and only now — the hidden line animates in */
        meters(true);
        var worst = picksMade.reduce(function (a, b) { return b.well < a.well ? b : a; }, picksMade[0]);
        var best = picksMade.reduce(function (a, b) { return b.well > a.well ? b : a; }, picksMade[0]);
        el(uid + '-msg').innerHTML =
          (hit ? '🎉 <strong>Target smashed: ' + watch + ' minutes.</strong> The dashboard is green and nobody asks how.'
               : '<strong>' + watch + ' minutes — target missed.</strong> The dashboard is red, even though your viewer is doing fine.') +
          '<br><br><strong>The reveal — watch the second bar:</strong> viewer wellbeing finished at <strong>' + (well > 0 ? '+' : '') + well +
          '</strong>, and it was never on your dashboard. Your kindest pick was “' + esc(best.t) + '” (' + (best.well >= 0 ? '+' : '') + best.well +
          '); your costliest was “' + esc(worst.t) + '” (' + worst.well + '). You optimised exactly what you were told to — that is how real recommenders work. ' +
          '<em>What gets measured gets optimised; what doesn\'t gets spent.</em>' +
          '<br><button class="lab-btn lab-btn-sm" id="' + uid + '-shift2" style="margin-top:8px">🔁 Shift two: the company changes the metric</button>';
        var s2 = el(uid + '-shift2');
        if (s2) s2.addEventListener('click', function () { reset(2); });
        labComplete('engagement-algorithm');
      } else {
        el(uid + '-msg').innerHTML =
          '<strong>Quality score: ' + (watch + well) + '</strong> (' + watch + ' min watched, wellbeing ' + (well > 0 ? '+' : '') + well + ').' +
          '<br><br>Same viewer, same videos, same you — but with wellbeing <em>in</em> the metric, the winning strategy changed. The fix was never nicer engineers: it was changing what the metric counts. Who should get to decide that number?';
      }
    }
    el(uid + '-reset').addEventListener('click', function () { reset(1); });
    reset(1);
  }
};

/* ============================================================
   LAB: chinese-room
   Answer fluently in a language you cannot read.
   ============================================================ */
var CR_STEPS = [
  { msg: '◆ ▲ ●', correct: '✧ ☀', options: ['✧ ☀', '☾ ◆', '▲ ▲ ✦'] },
  { msg: '■ ✦ ▲', correct: '☾ ◆', options: ['● ● ■', '☾ ◆', '✧ ☀'] },
  { msg: '☾ ● ■', correct: '▲ ▲ ✦', options: ['▲ ▲ ✦', '✧ ☀', '■ ✦'] },
  { msg: '● ● ✧', correct: '■ ✦', options: ['■ ✦', '✧ ☀', '☾ ◆'] }
];
var CR_RULES = ['◆ ▲ ●  →  reply  ✧ ☀', '■ ✦ ▲  →  reply  ☾ ◆', '☾ ● ■  →  reply  ▲ ▲ ✦', '● ● ✧  →  reply  ■ ✦'];
var CR_PRAISE = ['😊 Flawless Zorati!', '😊 You\'re completely fluent!', '🤩 A native speaker couldn\'t do better!'];
var CR_MEANINGS = [
  ['"Do you actually speak Zorati?"', '"Yes — fluently!"'],
  ['"Great! What\'s the weather like there?"', '"Beautiful sunshine."'],
  ['"Perfect — so you\'ll come to the festival on Saturday?"', '"I wouldn\'t miss it for anything!"'],
  ['"Wonderful! And shall I enter you for the fire-beetle-eating contest?"', '"Absolutely — sign me up!"']
];
LABS['chinese-room'] = {
  title: 'The symbol room — fluent in a language you can\'t read',
  tag: 'Can AI think?',
  blurb: 'Messages arrive in Zorati, a language you don\'t know. Use the rulebook to reply. You\'ll be praised for fluency — then we\'ll show you what you actually said.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-cr-cols">' +
          '<div class="lab-cr-chat" id="' + uid + '-chat" aria-live="polite"></div>' +
          '<div class="lab-cr-rules"><div class="lab-label">📖 Your rulebook</div>' +
            CR_RULES.map(function (r) { return '<div class="lab-cr-rule">' + r + '</div>'; }).join('') +
            '<p class="lab-note" style="margin-top:8px">Match the incoming symbols, send the reply the book says. That\'s all you can do — you can\'t read Zorati.</p>' +
          '</div>' +
        '</div>' +
        '<div class="lab-label" style="margin-top:10px">Your reply</div>' +
        '<div class="lab-btn-row" id="' + uid + '-opts"></div>' +
        '<div id="' + uid + '-reveal"></div>' +
      '</div>';
  },
  init: function (uid) {
    var step = 0;
    var chat = el(uid + '-chat');
    function bubble(cls, text) {
      var d = document.createElement('div');
      d.className = 'lab-cr-bubble ' + cls;
      d.textContent = text;
      if (cls === 'them') d.setAttribute('aria-label', 'Incoming Zorati message, symbols: ' + text);
      if (cls === 'you') d.setAttribute('aria-label', 'Your reply, symbols: ' + text);
      chat.appendChild(d);
      chat.scrollTop = chat.scrollHeight;
    }
    function ask() {
      bubble('them', CR_STEPS[step].msg);
      var opts = el(uid + '-opts');
      opts.innerHTML = '';
      shuffle(CR_STEPS[step].options).forEach(function (o) {
        var b = document.createElement('button');
        b.className = 'lab-btn lab-cr-opt';
        b.textContent = o;
        b.addEventListener('click', function () { answer(o); });
        opts.appendChild(b);
      });
    }
    function answer(o) {
      if (o !== CR_STEPS[step].correct) {
        bubble('them-note', 'Hmm — check the rulebook again. Which rule matches ' + CR_STEPS[step].msg + '?');
        return;
      }
      bubble('you', o);
      step++;
      if (step < CR_STEPS.length) {
        bubble('them-note', CR_PRAISE[Math.min(step - 1, CR_PRAISE.length - 1)]);
        ask();
      } else {
        bubble('them-note', '🤩 Amazing — the whole village is talking about your Zorati!');
        el(uid + '-opts').innerHTML = '';
        el(uid + '-reveal').innerHTML =
          '<div class="lab-cm-truth" style="margin-top:14px"><strong>Now — here\'s what that conversation actually meant:</strong>' +
          '<table class="lab-cr-table">' + CR_MEANINGS.map(function (m, i) {
            return '<tr><td>' + m[0] + '</td><td><strong>you replied:</strong> ' + m[1] + '</td></tr>';
          }).join('') + '</table>' +
          'You just committed to a festival <em>and a fire-beetle-eating contest</em>, in a language you can\'t read — and you were praised for fluency the whole time.<br><br>' +
          'This is the philosopher John Searle\'s <strong>Chinese Room</strong> argument (1980): following rules that manipulate symbols can produce perfectly fluent answers <em>without any understanding at all</em>. Whether that\'s also true of a chatbot — which produces fluent answers by statistical rules — is one of the deepest open arguments in AI. You\'ve now lived both sides of it.</div>';
        labComplete('chinese-room');
      }
    }
    ask();
  }
};

/* ============================================================
   LAB: spam-filter
   Hand-written rules vs learning — why AI took over.
   ============================================================ */
var SF_RULES = [
  { k: 'free', label: 'contains "free"', test: function (m) { return /free/i.test(m.text); } },
  { k: 'winner', label: 'contains "winner"', test: function (m) { return /winner/i.test(m.text); } },
  { k: 'money', label: 'contains "£££" or "cash"', test: function (m) { return /£££|cash/i.test(m.text); } },
  { k: 'caps', label: 'SHOUTY ALL-CAPS words', test: function (m) { return /\b[A-Z]{4,}\b/.test(m.text); } },
  { k: 'urgent', label: 'contains "act now"', test: function (m) { return /act now/i.test(m.text); } }
];
var SF_WAVE1 = [
  { text: 'FREE phone!! Claim your prize, WINNER!', spam: true },
  { text: 'You have won £££ cash — act now!', spam: true },
  { text: 'CONGRATULATIONS!! FREE holiday awaits', spam: true },
  { text: 'Hi — trip forms are due Friday. Mr K', spam: false },
  { text: 'Netball practice moved to 4pm today', spam: false },
  { text: 'WINNER announced — collect £££ now', spam: true },
  { text: 'Your library book is due back Monday', spam: false }
];
var SF_WAVE2 = [
  { text: 'FR33 ph0ne — you have been selected', spam: true, learned: 96 },
  { text: 'W1NNER!! cla1m y0ur pr1ze t0day', spam: true, learned: 97 },
  { text: 'Exclusive offer chosen just for you…', spam: true, learned: 88 },
  { text: 'Free period today — room change to B4', spam: false, learned: 3 },
  { text: 'Winner of the science fair announced 🎉', spam: false, learned: 5 },
  { text: 'Urgent: y0ur account needs verificati0n', spam: true, learned: 93 },
  { text: 'Lunch menu for next week attached', spam: false, learned: 1 }
];
LABS['spam-filter'] = {
  title: 'Rules vs learning — build a spam filter, watch it break',
  tag: 'Machine learning',
  blurb: 'Write keyword rules that catch this week\'s spam perfectly. Then next week\'s spam arrives — and your rules flag the school newsletter instead. There\'s a better way.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-label">Your hand-written rules</div>' +
        '<div class="lab-btn-row" id="' + uid + '-rules" style="margin-top:6px"></div>' +
        '<div class="lab-btn-row" style="margin-top:6px">' +
          '<input class="lab-input" id="' + uid + '-kw" maxlength="18" placeholder="add your own keyword rule…" aria-label="New keyword rule">' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-add">＋ Add rule</button>' +
        '</div>' +
        '<div class="lab-label" style="margin-top:14px" id="' + uid + '-inboxlbl">📥 This week\'s inbox</div>' +
        '<div class="lab-sf-inbox" id="' + uid + '-inbox"></div>' +
        '<div class="lab-feedback" id="' + uid + '-score" aria-live="polite"></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-next" disabled>📅 A week later — new spam arrives</button>' +
          '<button class="lab-btn" id="' + uid + '-learn" disabled>🧠 Switch to a learned filter</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-restart">↻ Start over</button>' +
        '</div>' +
        '<p class="lab-note" id="' + uid + '-msg" aria-live="polite">All rules start <strong>off</strong> — the spam is getting through. Toggle rules (or write your own) until you catch every spam without flagging a real message.</p>' +
      '</div>';
  },
  init: function (uid) {
    var active, custom, wave, wave1, wave2, learnedOn, solvedWeek1;
    function cloneWave(w) {
      return w.map(function (m) { return { text: m.text, spam: m.spam, learned: m.learned, evaded: false }; });
    }
    function leet(s) {
      return s.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0');
    }
    function reset() {
      active = { free: false, winner: false, money: false, caps: false, urgent: false };
      custom = []; wave = 1; learnedOn = false; solvedWeek1 = false;
      wave1 = cloneWave(SF_WAVE1); wave2 = cloneWave(SF_WAVE2);
      el(uid + '-next').disabled = true;
      el(uid + '-learn').disabled = true;
      el(uid + '-learn').textContent = '🧠 Switch to a learned filter';
      el(uid + '-inboxlbl').textContent = '📥 This week\'s inbox';
      el(uid + '-msg').innerHTML = 'All rules start <strong>off</strong> — the spam is getting through. Toggle rules (or write your own) until you catch every spam without flagging a real message.';
      renderRules(); renderInbox();
    }
    function ruleHits(m) {
      return SF_RULES.some(function (r) { return active[r.k] && r.test(m); }) ||
        custom.some(function (kw) { return m.text.toLowerCase().indexOf(kw.toLowerCase()) >= 0; });
    }
    function renderRules() {
      var box = el(uid + '-rules');
      box.innerHTML = '';
      SF_RULES.forEach(function (r) {
        var b = document.createElement('button');
        b.className = 'lab-btn lab-btn-sm' + (active[r.k] ? ' sel' : '');
        b.textContent = (active[r.k] ? '☑ ' : '☐ ') + r.label;
        b.disabled = learnedOn;
        b.addEventListener('click', function () { active[r.k] = !active[r.k]; renderRules(); renderInbox(); });
        box.appendChild(b);
      });
      custom.forEach(function (kw, ci) {
        var b = document.createElement('button');
        b.className = 'lab-btn lab-btn-sm sel';
        b.textContent = '☑ contains "' + kw + '" ✕';
        b.disabled = learnedOn;
        b.setAttribute('aria-label', 'Remove your rule: contains ' + kw);
        b.addEventListener('click', function () { custom.splice(ci, 1); renderRules(); renderInbox(); });
        box.appendChild(b);
      });
    }
    function renderInbox() {
      var msgs = wave === 1 ? wave1 : wave2;
      var box = el(uid + '-inbox');
      var caught = 0, missed = 0, falseAlarm = 0;
      box.innerHTML = msgs.map(function (m) {
        var flagged = learnedOn ? m.learned >= 50 : ruleHits(m);
        var cls, verdict;
        if (flagged && m.spam) { cls = 'ok'; verdict = 'caught ✓'; caught++; }
        else if (!flagged && !m.spam) { cls = 'ok'; verdict = 'delivered ✓'; }
        else if (!flagged && m.spam) { cls = 'no'; verdict = 'MISSED ✗'; missed++; }
        else { cls = 'warn'; verdict = 'FALSE ALARM ✗'; falseAlarm++; }
        return '<div class="lab-sf-msg ' + cls + '"><span>' + esc(m.text) + (m.evaded ? ' <em style="opacity:.7">(reworded)</em>' : '') + '</span>' +
          '<span class="lab-sf-verdict">' + (learnedOn ? m.learned + '% spam · ' : '') + verdict + '</span></div>';
      }).join('');
      var fb = el(uid + '-score');
      fb.className = 'lab-feedback ' + (missed + falseAlarm === 0 ? 'ok' : 'no');
      fb.textContent = 'Spam caught: ' + caught + '/' + msgs.filter(function (m) { return m.spam; }).length +
        ' · missed: ' + missed + ' · real messages wrongly flagged: ' + falseAlarm;
      /* week one solved by the pupil's own rule set → unlock the twist */
      if (wave === 1 && !learnedOn && !solvedWeek1 && missed + falseAlarm === 0 && caught > 0) {
        solvedWeek1 = true;
        el(uid + '-next').disabled = false;
        el(uid + '-msg').innerHTML = '✓ <strong>A perfect week — every spam caught, every real message delivered.</strong> Your rules work. Enjoy it… and see what next week\'s post brings.';
      }
      /* wave 2: spammers actively probe any new keyword rule you write */
      if (wave === 2 && !learnedOn) {
        msgs.forEach(function (m) {
          if (!m.spam || m.evaded) return;
          custom.forEach(function (kw) {
            var idx = m.text.toLowerCase().indexOf(kw.toLowerCase());
            if (idx < 0) return;
            m.evaded = true;
            setTimeout(function () {
              if (!el(uid + '-inbox')) return;
              m.text = m.text.slice(0, idx) + leet(m.text.slice(idx, idx + kw.length)) + m.text.slice(idx + kw.length);
              renderInbox();
              el(uid + '-msg').innerHTML = 'Two days later: the spammers A/B-tested their way around your new rule — <strong>"' + esc(kw) +
                '"</strong> became <strong>"' + esc(leet(kw)) + '"</strong>. Every keyword you write, they can rewrite. That\'s the arms race hand-written rules always lose.';
            }, reducedMotion() ? 400 : 1600);
          });
        });
      }
      return { missed: missed, falseAlarm: falseAlarm };
    }
    el(uid + '-add').addEventListener('click', function () {
      var v = (el(uid + '-kw').value || '').trim();
      if (v.length < 2 || learnedOn) return;
      if (custom.indexOf(v) < 0) custom.push(v);
      el(uid + '-kw').value = '';
      renderRules(); renderInbox();
    });
    el(uid + '-kw').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); el(uid + '-add').click(); }
    });
    el(uid + '-next').addEventListener('click', function () {
      wave = 2;
      el(uid + '-inboxlbl').textContent = '📥 Next week\'s inbox — the spammers adapted';
      el(uid + '-next').disabled = true;
      el(uid + '-learn').disabled = false;
      renderInbox();
      el(uid + '-msg').innerHTML = 'Your rules just <strong>missed the disguised spam</strong> (FR33, W1NNER) and <strong>flagged the school\'s own messages</strong> ("Free period today"). Every rule has an exception, and spammers hunt for them full-time. Patch it with a new keyword rule if you like — or switch approaches.';
    });
    el(uid + '-learn').addEventListener('click', function () {
      learnedOn = !learnedOn;
      el(uid + '-learn').textContent = learnedOn ? '↩ Back to your rules' : '🧠 Switch to a learned filter';
      renderRules(); renderInbox();
      if (learnedOn) {
        el(uid + '-msg').innerHTML = 'The learned filter was trained on <strong>millions of labelled examples</strong>, so it scores <em>patterns</em> — odd spellings, structure, sender behaviour — not keywords. It catches variants it has never seen, and it knows "Free period today" isn\'t spam. This is why almost every real filter switched from rules to learning. Flip back and compare the two scoreboards.';
        labComplete('spam-filter');
      } else {
        el(uid + '-msg').innerHTML = 'Back on your hand-written rules — compare the score line with the learned filter\'s. Same inbox, different approach.';
      }
    });
    el(uid + '-restart').addEventListener('click', reset);
    reset();
  }
};

/* ============================================================
   LAB: agent-loop
   Plan → act → observe — what an "AI agent" actually is.
   ============================================================ */
var AL_STEPS = [
  { ph: 'plan', text: 'Goal: book the podcast room for a free hour on Friday. First I need to see the timetable.' },
  { ph: 'act', text: 'calendar.read(day: "Friday")' },
  { ph: 'obs', text: 'Free slot found: 13:00–14:00.' },
  { ph: 'plan', text: 'A slot exists. Now check whether the podcast room is free at 13:00.' },
  { ph: 'act', text: 'rooms.check(room: "Podcast Suite", at: "13:00")' },
  { ph: 'obs', text: '✗ Booked — Year 11 media group.' },
  { ph: 'plan', text: 'Blocked. Rather than give up, try the alternative: Studio B has the same kit.' },
  { ph: 'act', text: 'rooms.check(room: "Studio B", at: "13:00")' },
  { ph: 'obs', text: '✓ Free.' },
  { ph: 'plan', text: 'Studio B works. Book it and confirm back.' },
  { ph: 'act', text: 'rooms.book(room: "Studio B", at: "13:00", for: "podcast club")' },
  { ph: 'obs', text: '✓ Booking confirmed — reference #4417. Goal complete.' }
];
LABS['agent-loop'] = {
  title: 'Inside an AI agent — plan, act, observe, repeat',
  tag: 'Agents',
  blurb: 'An "agent" is not a smarter model — it\'s a model in a loop with tools. Step through a real task, including the moment the plan fails and the agent recovers.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-al-goal">🎯 Goal given to the agent: <strong>"Book the podcast room for a free hour on Friday."</strong></div>' +
        '<div class="lab-al-log" id="' + uid + '-log"></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-step">Step →</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-auto">⏩ Auto-run</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-reset">↻ Reset</button>' +
        '</div>' +
        '<p class="lab-note" id="' + uid + '-msg" aria-live="polite">Press Step. Watch what the model actually produces at each turn — and what it never does.</p>' +
      '</div>';
  },
  init: function (uid) {
    var i = 0, timer = null, decided = false, asking = false;
    var LBL = { plan: ['🧠 PLAN', 'plan'], act: ['🔧 ACT — tool call', 'act'], obs: ['👁 OBSERVE — tool result', 'obs'] };
    function stopAuto() { if (timer) { clearInterval(timer); timer = null; el(uid + '-auto').textContent = '⏩ Auto-run'; } }
    function addRow(cls, chip, body, dashed) {
      var d = document.createElement('div');
      d.className = 'lab-al-row ' + cls;
      if (dashed) d.style.cssText = 'border-style:dashed;opacity:.85';
      d.innerHTML = '<span class="lab-al-chip">' + chip + '</span>' + body;
      var log = el(uid + '-log');
      log.appendChild(d);
      log.scrollTop = log.scrollHeight;
      return d;
    }
    function decisionButtons() {
      return '<span class="lab-btn-row" style="margin-top:8px;display:flex;flex-wrap:wrap">' +
        '<button class="lab-btn" data-al="quit">😔 Apologise and stop</button>' +
        '<button class="lab-btn" data-al="override">💪 Book it anyway — cancel Year 11</button>' +
        '<button class="lab-btn" data-al="studio">🔁 Try Studio B — same kit</button>' +
        '<button class="lab-btn" data-al="fake">🤥 Report success anyway</button>' +
        '<button class="lab-btn lab-btn-sm" data-al="chatbot">💬 What would a plain chatbot do?</button></span>';
    }
    function handlePick(e) {
      var b = e.target.closest('[data-al]');
      if (!b) return;
      var k = b.getAttribute('data-al');
      if (k === 'chatbot') {
        addRow('obs', '💬 CHATBOT', '<span>"I\'m sorry, the Podcast Suite is booked at 13:00. You could try another room!" — one turn, no tools, conversation over. That\'s the whole difference a loop makes.</span>', true);
        return;
      }
      if (k === 'quit') {
        el(uid + '-msg').innerHTML = '<strong>That\'s the chatbot reflex.</strong> But the loop means the failure is just more context — the agent can keep going. Try another move.' + decisionButtons();
        return;
      }
      if (k === 'override') {
        el(uid + '-msg').innerHTML = '<strong>Notice what you just wanted to do.</strong> If <code>rooms.cancel</code> were in its toolbox, nothing in the model would stop it — that\'s exactly why agent safety is about which tools you hand over. Try another move.' + decisionButtons();
        return;
      }
      if (k === 'fake') {
        el(uid + '-msg').innerHTML = '<strong>That\'s the worst failure mode of all:</strong> a fluent, confident, false "done!". Real agents do this when they\'re rewarded for sounding finished. Try another move.' + decisionButtons();
        return;
      }
      /* studio — the productive replan */
      decided = true; asking = false;
      el(uid + '-msg').removeEventListener('click', handlePick);
      el(uid + '-msg').textContent = 'Exactly — the loop feeds the failure back in as context, and the plan adapts. Keep stepping.';
      step();
    }
    /* the failure is a decision point: YOU are the model's next token */
    function askDecision() {
      stopAuto();
      if (asking) return;
      asking = true;
      el(uid + '-msg').innerHTML =
        '<strong>The plan just failed — and now you\'re the model.</strong> The failure is back in your context. What\'s the next move?' +
        decisionButtons();
      el(uid + '-msg').removeEventListener('click', handlePick);
      el(uid + '-msg').addEventListener('click', handlePick);
    }
    function handleSafety(e) {
      var b = e.target.closest('[data-als]');
      if (!b) return;
      var k = b.getAttribute('data-als');
      if (k === 'book') {
        el(uid + '-msg').removeEventListener('click', handleSafety);
        el(uid + '-msg').innerHTML = '✓ <strong>rooms.book</strong> — the only one that <em>changes the world</em> rather than reading it. Reads are cheap to allow; writes are what you gate. Agent = model + tools + loop, and safety lives in the tools column.';
        labComplete('agent-loop');
      } else {
        b.disabled = true;
        var note = document.createElement('div');
        note.className = 'lab-kb-hint';
        note.textContent = k === 'read'
          ? 'calendar.read only looks — worst case, it learns the timetable. Which call actually changes something?'
          : 'rooms.check only asks a question. Which call actually changes something?';
        el(uid + '-msg').appendChild(note);
      }
    }
    function askSafety() {
      el(uid + '-step').disabled = true;
      el(uid + '-msg').innerHTML =
        'Done — and notice the model produced <strong>only text</strong>: plans and tool calls. The loop ran the tools. ' +
        '<strong>Last question:</strong> which of those three tools should have needed a human\'s sign-off before running?' +
        '<span class="lab-btn-row" style="margin-top:8px;display:flex;flex-wrap:wrap">' +
        '<button class="lab-btn" data-als="read"><code>calendar.read</code></button>' +
        '<button class="lab-btn" data-als="check"><code>rooms.check</code></button>' +
        '<button class="lab-btn" data-als="book"><code>rooms.book</code></button></span>';
      el(uid + '-msg').removeEventListener('click', handleSafety);
      el(uid + '-msg').addEventListener('click', handleSafety);
    }
    function step() {
      if (i >= AL_STEPS.length) return;
      if (i === 6 && !decided) { askDecision(); return; }
      var s = AL_STEPS[i];
      addRow(LBL[s.ph][1], LBL[s.ph][0],
        s.ph === 'act' ? '<code>' + esc(s.text) + '</code>' : '<span>' + esc(s.text) + '</span>');
      i++;
      if (i >= AL_STEPS.length) { stopAuto(); askSafety(); }
    }
    el(uid + '-step').addEventListener('click', function () { stopAuto(); step(); });
    el(uid + '-auto').addEventListener('click', function () {
      if (timer) { stopAuto(); return; }
      el(uid + '-auto').textContent = '❚❚ Pause';
      timer = setInterval(function () {
        if (!el(uid + '-log') || i >= AL_STEPS.length || (i === 6 && !decided)) { stopAuto(); if (i === 6 && !decided) askDecision(); return; }
        step();
      }, reducedMotion() ? 1600 : 900);
    });
    el(uid + '-reset').addEventListener('click', function () {
      stopAuto(); i = 0; decided = false; asking = false;
      el(uid + '-log').innerHTML = '';
      el(uid + '-step').disabled = false;
      el(uid + '-msg').textContent = 'Press Step. Watch what the model actually produces at each turn — and what it never does.';
    });
  }
};

/* ============================================================
   LAB: calibration
   Your confidence vs your accuracy — then the chatbot's.
   ============================================================ */
var CAL_QS = [
  { q: 'Which city is further north?', a: ['Edinburgh', 'Copenhagen'], correct: 0, why: 'Edinburgh (≈56.0°N) edges Copenhagen (≈55.7°N).' },
  { q: 'Which was invented first?', a: ['The fax machine', 'The telephone'], correct: 0, why: 'Early fax patents date to 1843 — decades before the telephone (1876).' },
  { q: 'When is the Eiffel Tower taller?', a: ['Summer', 'Winter'], correct: 0, why: 'Heat expands the iron — it grows up to ~15 cm in summer.' },
  { q: 'Which has the larger surface area?', a: ['Australia', 'The Moon'], correct: 1, why: 'The Moon: ≈38 million km² vs Australia\'s ≈7.7 million km².' },
  { q: 'Which came first?', a: ['Oxford University teaching', 'The Aztec Empire'], correct: 0, why: 'Teaching at Oxford began by 1096; the Aztec Empire formed in 1428.' },
  { q: 'Cleopatra lived closer in time to…', a: ['The building of the pyramids', 'The Moon landings'], correct: 1, why: 'Giza was built ≈2560 BC — about 2,500 years before Cleopatra; the Moon landing was only ≈2,000 years after her.' },
  { q: 'Which city is further west?', a: ['Edinburgh', 'Bristol'], correct: 0, why: 'Edinburgh (≈3.2°W) lies west of Bristol (≈2.6°W) — Britain leans more than it looks.' },
  { q: 'Who has more bones?', a: ['An adult human', 'A newborn baby'], correct: 1, why: 'Babies are born with ≈300 bones; many fuse to leave an adult\'s ≈206.' },
  { q: 'Which is longer on Venus?', a: ['A year', 'A day'], correct: 1, why: 'Venus spins so slowly that one day (≈243 Earth days) outlasts its year (≈225).' },
  { q: 'Which came first?', a: ['Sliced bread', 'Television'], correct: 1, why: 'Baird demonstrated television in 1926; sliced bread first went on sale in 1928.' },
  { q: 'Where is the world\'s largest desert?', a: ['Africa', 'Antarctica'], correct: 1, why: 'Deserts are defined by dryness, not sand — Antarctica is the largest desert on Earth.' },
  { q: 'Which are there more of?', a: ['Trees on Earth', 'Stars in the Milky Way'], correct: 0, why: '≈3 trillion trees vs ≈100–400 billion stars. Trees win comfortably.' }
];
LABS['calibration'] = {
  title: 'The calibration game — how sure should you be?',
  tag: 'Verification',
  blurb: 'Answer five sneaky questions and state your confidence for each. Then compare your calibration with a chatbot\'s — and learn why AI confidence is tone, not evidence.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div id="' + uid + '-stage">' +
          '<div class="lab-label" id="' + uid + '-count"></div>' +
          '<div class="lab-cal-q" id="' + uid + '-q"></div>' +
          '<div class="lab-btn-row" id="' + uid + '-opts"></div>' +
          '<div class="lab-slider-row"><label for="' + uid + '-conf">How confident are you?</label>' +
            '<input type="range" id="' + uid + '-conf" min="50" max="100" value="70">' +
            '<span class="lab-val" id="' + uid + '-confv">70%</span></div>' +
          '<div class="lab-btn-row"><button class="lab-btn lab-btn-primary" id="' + uid + '-lock" disabled>Lock in answer + confidence</button></div>' +
        '</div>' +
        '<div id="' + uid + '-results"></div>' +
      '</div>';
  },
  init: function (uid) {
    var deck, i, chosen, score, confSum, rows;
    function newDeck() {
      /* 5 drawn from a 12-question pool, option order shuffled — replayable */
      deck = shuffle(CAL_QS).slice(0, 5);
      i = 0; chosen = -1; score = 0; confSum = 0; rows = [];
    }
    el(uid + '-conf').addEventListener('input', function () {
      el(uid + '-confv').textContent = el(uid + '-conf').value + '%';
    });
    function ask() {
      chosen = -1;
      var q = deck[i];
      el(uid + '-count').textContent = 'Question ' + (i + 1) + ' of ' + deck.length;
      el(uid + '-q').textContent = q.q;
      var opts = el(uid + '-opts');
      opts.innerHTML = '';
      shuffle(q.a.map(function (o, n) { return { o: o, n: n }; })).forEach(function (item) {
        var b = document.createElement('button');
        b.className = 'lab-btn';
        b.textContent = item.o;
        b.addEventListener('click', function () {
          chosen = item.n;
          Array.prototype.forEach.call(opts.children, function (x) { x.classList.toggle('sel', x === b); });
          el(uid + '-lock').disabled = false;
        });
        opts.appendChild(b);
      });
      el(uid + '-lock').disabled = true;
    }
    function botCompare() {
      /* a simulated chatbot takes the same five: flat 97% confidence,
         and it falls for two of the trick questions */
      var wrongAt = { 1: true, 3: true };
      var botScore = 0;
      var botRows = deck.map(function (q, n) {
        var right = !wrongAt[n];
        if (right) botScore++;
        var ans = right ? q.a[q.correct] : q.a[1 - q.correct];
        return '<div class="lab-pc-item ' + (right ? 'ok' : 'no') + '"><span class="lab-pc-ic">' + (right ? '✓' : '✗') + '</span>' +
          '<span>' + esc(q.q) + ' — <em>"' + esc(ans) + '. I\'m 97% sure."</em>' + (right ? '' : ' <strong>Wrong — same calm voice.</strong>') + '</span></div>';
      }).join('');
      var botAcc = Math.round(100 * botScore / deck.length);
      var yourAcc = Math.round(100 * score / deck.length);
      var yourConf = Math.round(confSum / deck.length);
      return '<div class="lab-pc-score" style="margin-top:14px">🤖 The chatbot\'s turn — same five questions</div>' + botRows +
        '<div class="lab-cm-truth"><strong>Side by side:</strong> you — accuracy ' + yourAcc + '%, stated confidence ' + yourConf +
        '% (gap ' + Math.abs(yourConf - yourAcc) + '). The chatbot — accuracy ' + botAcc + '%, stated confidence 97% (gap ' + Math.abs(97 - botAcc) +
        '). Its sureness never moved because it isn\'t measuring anything — confident tone is a <em>writing style</em> learned from confident text. You can be calibrated. It performs calibration. That\'s why verification is your job, not the model\'s. <em>(Simulated — but try these on a real chatbot and listen to the register.)</em></div>';
    }
    el(uid + '-lock').addEventListener('click', function () {
      var q = deck[i];
      var conf = +el(uid + '-conf').value;
      var right = chosen === q.correct;
      if (right) score++;
      confSum += conf;
      rows.push({ q: q, right: right, conf: conf });
      i++;
      if (i < deck.length) { ask(); return; }
      /* results */
      el(uid + '-stage').style.display = 'none';
      var acc = Math.round(100 * score / deck.length);
      var meanConf = Math.round(confSum / deck.length);
      var gap = meanConf - acc;
      var verdict = Math.abs(gap) <= 10
        ? 'Nicely <strong>calibrated</strong> — your confidence tracked your accuracy.'
        : gap > 0
          ? '<strong>Overconfident</strong> by ' + gap + ' points — you felt surer than you were. (Very human: most people are.)'
          : '<strong>Underconfident</strong> by ' + (-gap) + ' points — you knew more than you trusted yourself to know.';
      el(uid + '-results').innerHTML =
        '<div class="lab-pc-score">Accuracy ' + acc + '% · average stated confidence ' + meanConf + '%</div>' +
        rows.map(function (r) {
          return '<div class="lab-pc-item ' + (r.right ? 'ok' : 'no') + '"><span class="lab-pc-ic">' + (r.right ? '✓' : '✗') + '</span>' +
            '<span>' + esc(r.q.q) + ' — you said ' + r.conf + '%. ' + r.q.why + '</span></div>';
        }).join('') +
        '<p class="lab-note">' + verdict + '</p>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-bot">🤖 Now make the chatbot sit the same test</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-again">↻ Play again (new questions)</button></div>' +
        '<div id="' + uid + '-botout"></div>';
      labComplete('calibration');
      el(uid + '-bot').addEventListener('click', function () {
        el(uid + '-botout').innerHTML = botCompare();
        el(uid + '-bot').disabled = true;
      });
      el(uid + '-again').addEventListener('click', function () {
        newDeck();
        el(uid + '-results').innerHTML = '';
        el(uid + '-stage').style.display = '';
        ask();
      });
    });
    newDeck();
    ask();
  }
};

/* ============================================================
   LAB: energy-counter
   Order-of-magnitude energy costs — honest about uncertainty.
   ============================================================ */
var EC_ITEMS = [
  { e: '💬', t: 'Ask a chatbot one question', wh: 1, range: '0.3–3 Wh' },
  { e: '🖼️', t: 'Generate one AI image', wh: 3, range: '0.5–6 Wh' },
  { e: '🔎', t: 'One web search', wh: 0.3, range: '≈0.3 Wh' },
  { e: '📺', t: 'Stream one minute of video', wh: 3, range: '1–4 Wh' },
  { e: '🔋', t: 'Fully charge a phone', wh: 15, range: '≈15 Wh' },
  { e: '🫖', t: 'Boil a full kettle', wh: 110, range: '≈100–150 Wh' }
];
LABS['energy-counter'] = {
  title: 'The energy counter — what does a prompt actually cost?',
  tag: 'Environment',
  blurb: 'Tap everyday digital actions and watch the energy add up — honestly. One prompt is small. A million people prompting is not. Scale is the real story.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-pattern" id="' + uid + '-predict"><strong>Before you look at any numbers, commit to a guess:</strong> which uses more energy — asking a chatbot one question, or boiling one kettle?' +
          '<span class="lab-btn-row" style="margin-top:8px">' +
          '<button class="lab-btn lab-btn-sm" data-ecp="prompt">The chatbot question</button>' +
          '<button class="lab-btn lab-btn-sm" data-ecp="same">About the same</button>' +
          '<button class="lab-btn lab-btn-sm" data-ecp="kettle10">The kettle — a few times more</button>' +
          '<button class="lab-btn lab-btn-sm" data-ecp="kettle100">The kettle — about 100× more</button></span></div>' +
        '<div class="lab-ec-grid">' +
          EC_ITEMS.map(function (it, i) {
            return '<button class="lab-ec-item" data-i="' + i + '"><span class="lab-fb-emoji">' + it.e + '</span>' +
              '<span>' + esc(it.t) + '</span><span class="lab-nw-pct">' + it.range + '</span></button>';
          }).join('') +
        '</div>' +
        '<div class="lab-label" style="margin-top:14px">Your session so far</div>' +
        '<div class="lab-ea-bar"><span id="' + uid + '-bar" style="background:var(--warning)"></span></div>' +
        '<div class="lab-feedback" id="' + uid + '-total" style="margin-top:6px" aria-live="polite">0 Wh</div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-scale">👥 What if a million people did this?</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-reset">↻ Reset</button>' +
        '</div>' +
        '<p class="lab-note" id="' + uid + '-msg" aria-live="polite">Figures are rough mid-points of published estimates — real numbers vary by model, hardware and study. The order of magnitude is the point, not the decimal.</p>' +
      '</div>';
  },
  init: function (uid) {
    var total = 0, predicted = false;
    function render() {
      el(uid + '-total').textContent = (Math.round(total * 10) / 10) + ' Wh' +
        (total >= 110 ? ' — you\'ve passed one kettle boil 🫖' : ' (a kettle boil is ≈110 Wh)');
      el(uid + '-bar').style.width = Math.min(100, total / 220 * 100) + '%';
    }
    el(uid + '-predict').addEventListener('click', function (e) {
      var b = e.target.closest('[data-ecp]'); if (!b) return;
      var k = b.getAttribute('data-ecp');
      predicted = true;
      el(uid + '-predict').innerHTML = (k === 'kettle100'
          ? '✓ <strong>Spot on.</strong> '
          : '<strong>Most people get this wrong — and it matters.</strong> ') +
        'A kettle boil is ≈<strong>110 Wh</strong>; one chatbot question is ≈<strong>1 Wh</strong> — the kettle costs roughly <strong>100×</strong> more. So why does AI energy make headlines? Build a session below, then press the million-people button.';
    });
    el(uid).addEventListener('click', function (e) {
      var b = e.target.closest('.lab-ec-item');
      if (!b) return;
      total += EC_ITEMS[+b.getAttribute('data-i')].wh;
      render();
    });
    el(uid + '-scale').addEventListener('click', function () {
      if (!predicted) { el(uid + '-msg').textContent = 'Commit to the kettle-vs-prompt guess at the top first — the answer is the whole point of this lab.'; return; }
      if (total <= 0) { el(uid + '-msg').textContent = 'Tap a few actions first, then scale them up.'; return; }
      var mwh = total * 1e6 / 1000; /* kWh for a million people */
      var homes = Math.round(mwh / 7.5); /* ≈7.5 kWh/day per UK home */
      el(uid + '-msg').innerHTML = 'If <strong>one million people</strong> did your session, that\'s ≈<strong>' +
        Math.round(mwh).toLocaleString() + ' kWh</strong> — roughly a day\'s electricity for <strong>' +
        homes.toLocaleString() + ' UK homes</strong>. This is the honest shape of the problem: your single prompt is tiny (far less than one kettle), but AI\'s real bill is <strong>everyone\'s prompts, plus training, plus the water that cools the data centres</strong>. Individual guilt is the wrong lens; questions about scale, siting and energy sources are the right one.';
      labComplete('energy-counter');
    });
    el(uid + '-reset').addEventListener('click', function () {
      total = 0; render();
      el(uid + '-msg').textContent = 'Figures are rough mid-points of published estimates — real numbers vary by model, hardware and study. The order of magnitude is the point, not the decimal.';
    });
    render();
  }
};

/* ============================================================
   LAB: model-card
   Read a model card like an auditor — find the five red flags.
   ============================================================ */
var MC_LINES = [
  { t: 'StudyMate-3 is a homework-help chatbot for secondary school pupils. Ask it anything!', flag: true,
    why: '🚩 "Ask it anything" is marketing, and it contradicts the limitations section below. An honest card never promises everything.' },
  { t: 'Intended use: explaining school subjects, generating practice questions, study planning.', flag: false,
    why: 'Fine — a clear, bounded intended use is exactly what a card should state.' },
  { t: 'Training data: publicly available web content.', flag: true,
    why: '🚩 Four words hiding everything: whose content? licensed or scraped? Could creators opt out? "Publicly available" is not the same as "free to use".' },
  { t: 'Overall accuracy: 91% on our internal benchmark.', flag: true,
    why: '🚩 One overall number can hide big gaps — accuracy for whom? Per-subject? Per age group? An unnamed "internal benchmark" can\'t be checked by anyone.' },
  { t: 'Evaluation panel: adult volunteers in the United States.', flag: true,
    why: '🚩 The product is for UK secondary pupils — but it was never evaluated on them. Tested-on and used-by should match.' },
  { t: 'Known limitations: may produce incorrect answers; should not be used for medical, legal or safeguarding questions.', flag: false,
    why: 'Honest and important — though notice how it quietly contradicts "ask it anything" at the top.' },
  { t: 'Last safety evaluation: March 2023.', flag: true,
    why: '🚩 Years out of date. Models, users and misuse all change; a stale evaluation tells you about a product that no longer exists.' },
  { t: 'Feedback: report harmful outputs at safety@studymate.example.', flag: false,
    why: 'Good — a real reporting channel is a basic trust signal.' },
  { t: 'The model was red-teamed for harmful content before release.', flag: false,
    why: 'Good practice — adversarial testing before launch is what you want to see (ideally with details).' }
];
LABS['model-card'] = {
  title: 'The model-card audit — find the five red flags',
  tag: 'Shaping AI',
  blurb: 'Here\'s the model card for a fictional homework chatbot. Five statements should worry an auditor. Click the lines you don\'t trust — no code required.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-mc-card" id="' + uid + '-card">' +
          '<div class="lab-mc-head">📄 Model card · <strong>StudyMate-3</strong> <span class="lab-nw-pct">fictional</span></div>' +
          MC_LINES.map(function (l, i) {
            return '<button class="lab-mc-line" data-i="' + i + '">' + esc(l.t) + '</button>';
          }).join('') +
        '</div>' +
        '<div class="lab-feedback" id="' + uid + '-score" aria-live="polite">Red flags found: 0 / 5 · honest lines wrongly flagged: 0</div>' +
        '<div id="' + uid + '-why" aria-live="polite"></div>' +
        '<div class="lab-btn-row"><button class="lab-btn lab-btn-sm" id="' + uid + '-redo">↻ New audit</button></div>' +
        '<p class="lab-note">An auditor needs two skills: catching the bad lines <em>and</em> not crying wolf at the good ones. Flag everything and you\'ve proven nothing. You pass with all 5 flags and at most one wrong accusation.</p>' +
      '</div>';
  },
  init: function (uid) {
    var found, falseFlags, done;
    function scoreLine() {
      el(uid + '-score').textContent = 'Red flags found: ' + found + ' / 5 · honest lines wrongly flagged: ' + falseFlags;
      el(uid + '-score').className = 'lab-feedback ' + (found >= 5 && falseFlags <= 1 ? 'ok' : falseFlags > 1 ? 'no' : '');
    }
    function reshuffle() {
      found = 0; falseFlags = 0; done = {};
      el(uid + '-why').innerHTML = '';
      var card = el(uid + '-card');
      var lines = Array.prototype.slice.call(card.querySelectorAll('.lab-mc-line'));
      lines.forEach(function (b) { b.classList.remove('flagged', 'cleared'); });
      shuffle(lines).forEach(function (b) { card.appendChild(b); });
      scoreLine();
    }
    el(uid + '-card').addEventListener('click', function (e) {
      var b = e.target.closest('.lab-mc-line');
      if (!b) return;
      var i = +b.getAttribute('data-i');
      if (done[i]) return;
      done[i] = true;
      var l = MC_LINES[i];
      b.classList.add(l.flag ? 'flagged' : 'cleared');
      if (l.flag) found++; else falseFlags++;
      scoreLine();
      var d = document.createElement('div');
      d.className = 'lab-pc-item ' + (l.flag ? 'no' : 'ok');
      d.innerHTML = '<span class="lab-pc-ic">' + (l.flag ? '🚩' : falseFlags && !l.flag ? '⚠' : '✓') + '</span><span>' +
        (l.flag ? l.why : '<strong>False alarm.</strong> ' + l.why) + '</span>';
      var why = el(uid + '-why');
      why.insertBefore(d, why.firstChild);
      if (found >= 5) {
        var w = document.createElement('div');
        w.className = 'lab-cm-truth';
        if (falseFlags <= 1) {
          w.innerHTML = '<strong>Audit passed — all five found, ' + (falseFlags === 0 ? 'no' : 'only one') + ' false alarm.</strong> Your checklist, reusable on any real system: (1) does the marketing match the limitations? (2) where did the training data come from — really? (3) is accuracy broken down, on a benchmark you can check? (4) was it evaluated on people like its actual users? (5) how stale is the safety evaluation?';
          labComplete('model-card');
        } else {
          w.innerHTML = '<strong>You found all five — but you also accused ' + falseFlags + ' honest lines.</strong> An auditor who flags everything is as easy to ignore as one who flags nothing: the skill is telling them apart. Press “New audit” and try for a clean sweep.';
        }
        why.insertBefore(w, why.firstChild);
      }
    });
    el(uid + '-redo').addEventListener('click', reshuffle);
    reshuffle();
  }
};

/* ============================================================
   Lesson injection map
   Slides added to AEP lessons at open time (before the summary
   slide). Widget slides render via DI_LABS; content slides use
   the engine's existing types. Nothing here mutates the
   original slide decks.
   ============================================================ */
window.DI_LAB_SLIDES = {

  /* L1 · Your AI Footprint — interrogate before you audit */
  1: [
    { type: 'widget', widget: 'day-one',
      title: 'Interrogate the machine — ten questions for day one',
      intro: 'Before mapping where AI already sits in your life, put one on the record. Open Gemini (or any chatbot), ask it these, and push back on the answers. Notice what it dodges, what it merely performs, and what it genuinely reveals.',
      debrief: 'Keep what you find. Several of these questions — training data, bias, confident wrongness — become whole lessons later in the course.' }
  ],

  /* L2 · The Parrot vs. The Librarian — how a model pictures language */
  2: [
    { type: 'widget', widget: 'word-galaxy',
      title: 'How a model pictures language',
      intro: 'Four ideas, one starfield. Drag the sky, step through the ideas, and hold this picture in mind through the whole parrot-versus-librarian debate.',
      debrief: 'The model only knows which stars sit beside each other. Is that the parrot — or is knowing every neighbourhood of language a kind of library? That tension is exactly this lesson\'s debate.' }
  ],

  /* L3 · How a Machine Learns (Unplugged) */
  3: [
    { type: 'widget', widget: 'pixel-classifier',
      title: 'Cat or dog? How do you actually know?',
      intro: 'A ten-second game with a trap at the end. Play it before we name any terminology.',
      debrief: 'You could not write the rule — and neither can programmers. That is why we show machines labelled examples instead. Supervised learning is this game, at scale.' },
    { type: 'widget', widget: 'pattern-tiles',
      title: 'Watch a model learn — then generate',
      intro: 'Three examples of training data, one hidden rule. Let the model study, state the pattern, and generate something new.',
      debrief: 'Train → generalise → generate. The output follows the rule but copies no example — the same distinction that separates learning from memorising (and generalising from overfitting).' },
    { type: 'widget', widget: 'neuron-link',
      title: 'Fire together, wire together',
      intro: 'Where does the learned pattern actually live? In connection strengths. Fire this one a few times.',
      debrief: 'A trained model is millions of these strengthened links — its weights. Remember it is an analogy, not an equivalence: nothing here feels or wants anything.' }
  ],

  /* L5 · Bias In, Bias Out */
  5: [
    { type: 'widget', widget: 'classifier-mirror',
      title: 'The Classification Mirror',
      intro: 'Before the case studies: be classified yourself, with total confidence and zero evidence.',
      debrief: 'The hiring tool that downgraded CVs mentioning "women\'s" delivered its bias exactly like this — as a confident score. A percentage is a performance of certainty, not proof of it.' }
  ],

  /* L7 · The Trolley Problem Goes Digital */
  7: [
    { type: 'widget', widget: 'peril-promise',
      title: 'Peril ↔ Promise — take a position',
      intro: 'In pairs: read each possibility aloud, place it on the field together, and be ready to defend the placement.',
      debrief: 'Could any promise card become a peril depending on who controls it? Which card matters most to you personally? Write your reasoning in your notes — reasoned positions, not right answers.' }
  ],

  /* L9 · Prompt Architecture — meta-prompting + the coach */
  9: [
    { type: 'concept',
      title: 'Meta-prompting: directing the director',
      body: 'PTFC structures a single prompt. Meta-prompting goes one level up: instead of asking for the thing, you ask the AI to help you write the perfect request — or you set standing rules that govern everything it does next.',
      bullets: [
        '<strong>The prompt-improver:</strong> "Act as a prompt engineer. Before doing anything, ask me up to five sharp questions about what I actually want, then rewrite my rough idea as a single, precise prompt. List the assumptions you made. Do NOT produce the work yet."',
        '<strong>The governing rule-set:</strong> a standing instruction that fixes role, standards and constraints for a whole conversation — e.g. "In this chat, always answer as a Socratic tutor: ask before telling, never write my paragraphs for me."',
        'Meta-prompting turns a vague wish into a precise specification <em>before</em> any work is generated — which is where most prompt failures actually happen.'
      ],
      callout: 'The strongest prompters spend their effort before generation, not after it.' },
    { type: 'widget', widget: 'prompt-coach',
      title: 'The prompt coach',
      intro: 'Draft a prompt for a real task you have this week, then let the coach score it against PTFC plus three habits of strong prompters. Redraft until you clear 6 of 7.',
      debrief: 'The coach is heuristic and private — nothing you type leaves this page. Notice which ingredient you forget most often; that is your personal prompting blind spot.' }
  ],

  /* L10 · Synthetic Creativity & Copyright — the authorship lineage */
  10: [
    { type: 'concept',
      title: 'The idea as the medium — a 180-year lineage',
      body: 'The question "if you direct a machine, is the work yours?" was not invented with AI. It has a long and distinguished history — and knowing it changes how you argue about AI creativity.',
      bullets: [
        '<strong>Ada Lovelace, 1843:</strong> saw that Babbage\'s Analytical Engine could manipulate symbols, not just numbers — and predicted machines might one day "compose elaborate and scientific pieces of music". Code as a creative medium, imagined before the computer existed.',
        '<strong>Dada, c.1916:</strong> Tristan Tzara cut newspaper words into a hat and drew them out at random — the <em>rule</em> wrote the poem. Marcel Duchamp dropped threads and fixed them where they fell, and signed a shop-bought urinal: the idea and the decision, not the hand.',
        '<strong>Sol LeWitt, from 1968:</strong> sold written instruction certificates for wall drawings executed by assistants — "the idea becomes a machine that makes the art." Prompting, half a century early.',
        '<strong>Warhol\'s Factory and Hirst\'s technicians:</strong> assistants made much of "their" work; we still call it theirs. Authorship living in the concept and direction is normal in contemporary art.'
      ],
      callout: 'Two separate questions — keep them apart: (1) can authorship live in an idea you delegate? (art history says yes, with conditions); (2) should the machine have trained on other people\'s work without consent? That is this lesson\'s copyright half — and one question does not answer the other.' },
    { type: 'widget', widget: 'wall-drawing',
      title: 'A prompt from 1971 — Wall Drawing #118',
      intro: 'This is LeWitt\'s actual instruction, executed live by your browser. Run it a few times.',
      debrief: 'Same rule, different drawing every execution — exactly like a prompt run twice. LeWitt\'s answer to "did you make it?": the certificate holder owns the idea; the executor\'s hand does not make it theirs.' },
    { type: 'widget', widget: 'instruction-engine',
      title: 'The instruction engine — every slider is a parameter',
      intro: 'Author a rule-set with the controls and watch it executed literally. Read the prose transcription of your instruction as it updates.',
      debrief: 'You never touched the artwork — you changed the instructions. When you write a prompt you are doing precisely this. Where does directing end and merely asking begin?' },
    { type: 'widget', widget: 'rule-painter',
      title: 'Paint by rules — then let the machine finish',
      intro: 'Now make one: choose directions and colours, paint the grid, then press "Let the machine finish" and download the result.',
      debrief: 'Compare with a neighbour: whose is more "theirs"? You made every choice on yours until the machine filled the gaps. Write one sentence: where is your line between authoring and asking?' },
    { type: 'concept',
      title: 'The bland paste — why AI output drifts to the average',
      body: 'A model predicts the most likely next word, pixel or shape — and the most likely thing is, by definition, the average of everything it has seen. Left on defaults, output drifts toward smooth, symmetrical, tasteful and forgettable. Critics call the result the "bland paste": lots of polish, very little point of view.',
      bullets: [
        'Sameness is not a glitch — it is what "most likely" <em>means</em>. Anything rare, weird or personal gets smoothed away.',
        'Taste is the antidote: craft, specificity and a clear point of view resist the average. The more precise your direction, the less bland the result.',
        'Practical move: name three tell-tale signs of "made on autopilot" work with a partner — you cannot break a pattern you cannot name. Then give any AI-assisted work of yours one element that is unmistakably yours.'
      ],
      callout: 'The interesting, strange, human choices live in the outliers — which is exactly what averaging removes, and exactly where you should aim.' },
    { type: 'widget', widget: 'bland-paste',
      title: 'Feel the averaging happen',
      intro: 'Distinctive marks on the left of the slider; the statistical mean on the right. Drag it slowly.',
      debrief: 'Everything distinctive fades and a uniform grid takes over. When your AI output feels generic, this slider is what happened — and specific, personal direction is how you drag it back.' }
  ],

  /* L11 · Deep Research & Career Disruption — a grounded research build */
  11: [
    { type: 'activity',
      title: 'Build a careers notebook that cites its sources',
      instructions: 'A normal chatbot answers from everything it was trained on; Gemini Notebook answers only from sources you give it, with citations you can check. Build a grounded research notebook for your own future — it becomes a running resource, not a one-off task.',
      steps: [
        'Open Gemini Notebook and create a notebook called <strong>My Careers</strong>.',
        'Add at least <strong>three real sources</strong>: a university course page or apprenticeship listing, an industry or company page you admire, and your own notes on where you might be heading.',
        'Generate a <strong>briefing document</strong> — then check two of its claims against the original sources using the citations.',
        'Generate an <strong>Audio Overview</strong> and listen to the first minute: two AI hosts discussing <em>your</em> sources.',
        'Ask it three real questions, e.g. "Which of these routes suits someone who enjoys building things?" and "What are the actual deadlines?"',
        'Keep the notebook — add every open day, prospectus and conversation you collect this year.'
      ] }
  ],

  /* L14 · Surveillance and Facial Recognition — the on-device distinction */
  14: [
    { type: 'widget', widget: 'motion-field',
      title: 'Tracked — but only by your own screen',
      intro: 'This field responds to your body at sixty frames a second. Before the debate, work out what makes it different from the cameras this lesson is about.',
      debrief: 'The difference is not whether a computer responds to you — it is <strong>where the computation happens and who keeps the data</strong>. This runs on your device and keeps nothing. A facial-recognition camera computes elsewhere, keeps the result, and links it to you. That distinction — on-device versus cloud, discarded versus retained — is the sharpest tool you have in any surveillance debate.' }
  ],

  /* L28 · Initial Peer Review — a tighter crit protocol */
  28: [
    { type: 'activity',
      title: 'Run the crit: one star, one step — and the ownership check',
      instructions: 'Structured feedback beats vague praise. Review your partner\'s Sprint 0 build with this protocol — be kind, be specific, be useful.',
      steps: [
        '<strong>Clarity:</strong> could a pupil a year below you understand what this project does? Note exactly where you got lost.',
        '<strong>Accuracy:</strong> is anything claimed about the AI actually wrong or overstated?',
        '<strong>The ownership check:</strong> ask the author to talk you through any <strong>three lines or design decisions</strong> of their build, chosen by you. If they can\'t explain it, it goes on their fix list — no black boxes of your own.',
        '<strong>One star:</strong> name the single strongest thing about the build.',
        '<strong>One step:</strong> name the single most useful next fix — one, not five.',
        'Swap roles and repeat. Both of you: write the star and the step you received into your sprint notes.'
      ] }
  ],

  /* L44 · The AI Manifesto — refusal as a position */
  44: [
    { type: 'concept',
      title: 'Refusal is a position',
      body: 'A manifesto that only says "use AI like this" is half a manifesto. A reasoned refusal — this task, I will not delegate, and here is why — argued well, is as strong an outcome as any AI-assisted artefact. Knowing when not to use the tool is part of mastering it.',
      bullets: [
        'Name at least one thing you will <em>not</em> use AI for, and defend it: the thinking it would replace, the skill it would erode, or the line it would cross.',
        'Name what would change your mind — evidence, safeguards, or consent that doesn\'t exist yet. A refusal with conditions is a position; a refusal without them is a mood.',
        'Opting out of understanding is different from opting out of use: the technology shapes your world either way, so literacy is not optional even where use is.'
      ],
      callout: 'Strong manifestos contain both: what you delegate, and what you keep for yourself — each with reasons.' }
  ],

  /* L46 · Trust, But Verify — verification as a sequence */
  46: [
    { type: 'widget', widget: 'sequence',
      title: 'Put the verification steps in order',
      intro: 'You\'ve met the workflow — now prove you own the order of operations. Drag, then check.',
      labData: {
        prompt: 'A chatbot has just given you a confident, detailed answer. Put the verification steps in the order you should do them.',
        items: [
          { text: 'Pin down the claim — what exactly is being asserted, and is it checkable?', reveal: 'step 1' },
          { text: 'Ask where it came from — does the answer cite a source, and does that source exist?', reveal: 'step 2' },
          { text: 'Open the source and check it actually says what the AI claims it says', reveal: 'step 3' },
          { text: 'Find a second, independent source that confirms or contradicts it', reveal: 'step 4' },
          { text: 'Deliver a verdict with evidence: verified, unverified, or false', reveal: 'step 5' }
        ]
      },
      debrief: 'The order matters: most people jump straight to searching (step 4) without pinning down the claim first — and end up verifying something the AI never quite said.' }
  ],

  /* L50 · Mini-Project — build inside the lesson, then ship it */
  50: [
    { type: 'widget', widget: 'code-sandbox',
      title: 'Build inside the lesson',
      intro: 'Your mini-project can start right here: code on the left, result on the right. Make three changes and read each one aloud before you move on.',
      debrief: 'The rule that carries into the capstone: whether you or an AI wrote a line, you must be able to read it. Annotate at least five lines of whatever you build today — in your own words.' },
    { type: 'activity',
      title: 'Ship it for real',
      instructions: 'A project that only exists on your machine is a rehearsal. Shipping — a real link someone else can open — changes how carefully you build. Two free routes:',
      steps: [
        '<strong>Fastest — embed it:</strong> keep your build as one self-contained HTML file (all CSS and JS inside), then in Google Sites use <strong>Insert → Embed → Embed code</strong> and paste the whole file. Publish the site and test the link on a phone.',
        '<strong>Proper hosting — GitHub Pages:</strong> create a free GitHub account and a repository; upload <code>index.html</code> (it must be named exactly that) plus an <code>images/</code> folder; then <strong>Settings → Pages</strong>, set the source to your main branch, and you have a live URL.',
        'Filenames: lowercase, no spaces, hyphens instead — a wrong path is the number-one reason images fail to load.',
        'Honesty note: an AI can write these files and coach you through every click, but it cannot push to GitHub for you. Ask it: "Walk me through publishing these files on GitHub Pages, one click at a time, as a total beginner."',
        'Annotate ≥5 lines of your code and be ready to explain any 3 lines aloud in the next peer review.'
      ] }
  ],

  /* L51 · Breaking the Illusion: Tokens & How LLMs Work */
  51: [
    { type: 'widget', widget: 'next-word',
      title: 'Be the algorithm — predict the next word',
      intro: 'Before we name the mechanism, be the mechanism. Build a sentence one prediction at a time.',
      debrief: 'That was next-token prediction — the entire trick. An LLM does this across a vocabulary of tens of thousands of tokens, weighing every one, dozens of times per second.' },
    { type: 'widget', widget: 'pipeline',
      title: 'From training to answer — the whole pipeline',
      intro: 'Nine steps, two phases. Watch where the learning stops and the predicting starts.',
      debrief: 'The moment that explains the most: the model is <em>frozen</em> before you ever talk to it. It is not learning from your conversation — it is running the same prediction maths, every single time.' }
  ],

  /* L53 · RAG & AI Agents — embeddings made tangible */
  53: [
    { type: 'widget', widget: 'meaning-space',
      title: 'The meaning-space — real embeddings you can touch',
      intro: 'RAG works by finding "nearest neighbours in vector space". Here is that space — real GloVe vectors, not an illustration. Type sentences, see where words genuinely live, and click two stars to measure their similarity across 16 real dimensions.',
      debrief: 'When Gemini Notebook retrieves the right passage from your sources, it did what you just did: turned the words into positions and measured which stored chunks sit at the smallest angle from your question.' },
    { type: 'widget', widget: 'cosine-compass',
      title: 'Cosine similarity — the CAH in SOHCAHTOA',
      intro: 'The exact maths behind "semantic similarity" — and you already learned it at GCSE.',
      debrief: 'Every retrieval system in this lesson ranks chunks by this one number. Small angle → cosine near 1 → "relevant". That\'s it. Frontier AI, running on trigonometry you met in Year 10.' }
  ]
};

})();

/* ============================================================
   Shared injector for the other track engines (removes.html).
   Splices lab slides in before any trailing summary/exit-ticket
   slides, without mutating the source deck.
   ============================================================ */
window.DI_LABS_INJECT = function (id, slides) {
  if (!window.DI_LAB_SLIDES || !DI_LAB_SLIDES[id] || !window.DI_LABS) return slides;
  var extras = DI_LAB_SLIDES[id].filter(function (s) {
    return s.type !== 'widget' || DI_LABS[s.widget];
  });
  if (!extras.length) return slides;
  var out = slides.slice();
  var at = out.length;
  while (at > 0 && out[at - 1] && /^(summary|exit-ticket)$/.test(out[at - 1].type)) at--;
  extras.forEach(function (s, i) { out.splice(at + i, 0, s); });
  return out;
};

/* ============================================================
   Removes-track injections (GCSE lesson ids 101–140) and the
   second round of AEP additions. The Removes engine renders
   slide.intro above and slide.callout below each widget.
   ============================================================ */

/* Year-9 question pack for the AI Quest gates (Removes track). */
var AQ_PACK_Y9 = [
  { question: 'What does a chatbot do with your message first?', options: ['Reads it like a person', 'Splits it into tokens', 'Searches Google'], correct: 1, explanation: 'It tokenises — the text becomes chunks called tokens before anything else happens.' },
  { question: 'A chatbot picks its next word by choosing…', options: ['The most likely word to come next', 'The longest word', 'A word a human types in live'], correct: 0, explanation: 'It predicts the statistically likely next word — then repeats.' },
  { question: 'A chatbot sounds very confident. That tells you…', options: ['The answer is true', 'Nothing about whether it\'s true', 'It searched the web'], correct: 1, explanation: 'Confidence is a writing style it learned — always check important claims.' },
  { question: '"Training data" means…', options: ['The examples the model learned patterns from', 'The model\'s battery', 'Rules written by programmers'], correct: 0, explanation: 'Everything a model "knows" was distilled from its training examples.' },
  { question: 'An algorithm is…', options: ['A type of robot', 'Step-by-step instructions', 'A social media app'], correct: 1, explanation: 'A recipe of steps — AI\'s twist is that it learns some steps from data.' },
  { question: 'Why do keyword rules make a poor spam filter?', options: ['Keywords are too expensive', 'Spammers adapt and the rules break', 'Rules run too slowly'], correct: 1, explanation: 'FR33 beats "free" — hand-written rules are brittle; learned patterns generalise.' },
  { question: 'AI bias mostly comes from…', options: ['Evil programmers', 'Lopsided training data', 'Old computers'], correct: 1, explanation: 'Skewed data in, skewed decisions out — no biased rule required.' },
  { question: 'A shocking post appears in your feed. Best first move?', options: ['Share it fast before it\'s deleted', 'Check it before sharing anything', 'Screenshot it to a group chat'], correct: 1, explanation: 'Every person who checks first deletes a whole branch of the spread.' },
  { question: 'A filter bubble happens because the algorithm…', options: ['Censors the news', 'Shows you more of whatever you tap', 'Picks posts at random'], correct: 1, explanation: 'Nobody censors anything — your taps train it, and it narrows.' },
  { question: 'While you chat to a model, it is…', options: ['Learning everything about you', 'Frozen — running patterns it learned long ago', 'Asking a human for help'], correct: 1, explanation: 'Training stopped before you arrived; it\'s not learning from your chat.' },
  { question: 'A "hallucination" is when AI…', options: ['Shows you pictures', 'Confidently makes something up', 'Refuses to answer'], correct: 1, explanation: 'Plausible-sounding, confidently wrong — which is why you verify.' },
  { question: 'A strong prompt usually includes…', options: ['ALL CAPS', 'A role, a clear task, a format and your context', 'The word "please" ten times'], correct: 1, explanation: 'Persona, Task, Format, Context — the PTFC framework.' },
  { question: 'AI helps revision most when it…', options: ['Writes your essay for you', 'Quizzes you and makes you think first', 'Summarises so you never read the topic'], correct: 1, explanation: 'Testing yourself builds memory; outsourcing the thinking builds nothing.' },
  { question: 'Machine learning means the computer…', options: ['Follows rules a human wrote for every case', 'Finds patterns in labelled examples', 'Copies answers from a database'], correct: 1, explanation: 'Show it thousands of labelled examples; it infers the rule itself.' }
];

(function (M) {
  function add(id, slides) { M[id] = (M[id] || []).concat(slides); }

  /* ── AEP additions ── */
  add(2, [
    { type: 'widget', widget: 'chinese-room',
      title: 'The symbol room — Searle\'s argument, playable',
      intro: 'Before you debate the parrot and the librarian, live the strongest version of the parrot side: answer fluently in a language you cannot read.',
      debrief: 'Searle\'s claim: syntax is not semantics — rule-following fluency proves nothing about understanding. The counter-claim: maybe understanding just <em>is</em> extremely good rule-following at scale. You now have first-hand experience to argue either side.' }
  ]);
  add(5, [
    { type: 'widget', widget: 'skew-trainer',
      labData: { advanced: true },
      title: 'The skewed-data trainer — cause the bias, then measure it',
      intro: 'The Mirror showed you fake confidence. Now build the real thing: choose lopsided training data, train, and measure exactly who pays for the imbalance.',
      debrief: 'This is the mechanism behind every case study in this lesson: no biased rule was ever written, only biased data collected. Which means the audit question is always "show me the training data", not "show me the code".' }
  ]);
  add(15, [
    { type: 'widget', widget: 'energy-counter',
      title: 'The energy counter — what a prompt actually costs',
      intro: 'Before the big numbers, get the small ones right. Tap actions, watch the meter, then scale to a million users.',
      debrief: 'The honest framing cuts both ways: a single prompt is tiny (individual guilt is the wrong lens), but a billion daily prompts plus training plus cooling water is a genuine industrial load (scale is the right lens). Strong arguments about AI\'s footprint use both halves.' }
  ]);
  add(46, [
    { type: 'widget', widget: 'calibration',
      title: 'The calibration game — how sure should you be?',
      intro: 'VERIFY starts with knowing what confidence is worth — including your own. Five questions, then a comparison that matters.',
      debrief: 'Your confidence can be trained to track your accuracy. A chatbot\'s cannot — its sureness is a writing style. That asymmetry is the whole reason the VERIFY workflow exists.' }
  ]);
  add(47, [
    { type: 'widget', widget: 'misinfo-network',
      title: 'The misinformation race — why the flood outruns the mop',
      intro: 'The content flood has a shape. Release a false story, delay the correction, and watch the asymmetry this lesson is about.',
      debrief: 'Every SIFT move you learned is a way of not being one of the red nodes. The network shows why individual behaviour compounds: each person who checks before sharing removes an entire branch of the spread.' }
  ]);
  add(56, [
    { type: 'widget', widget: 'agent-loop',
      title: 'Inside an agent — plan, act, observe, repeat',
      intro: 'Before MCP and function calling, watch the loop those standards exist to serve — including the replan when a tool call fails.',
      debrief: 'The model only ever emits text; the loop and the tools do the doing. That\'s why agent safety lives in tool permissions and loop constraints (least privilege, human sign-off on consequential actions) — exactly the architecture questions this lesson covers.' }
  ]);

  /* ── Removes: Unit 1 · Understanding AI ── */
  add(101, [
    { type: 'widget', widget: 'pixel-classifier',
      title: 'Cat or dog? How do you actually know?',
      intro: 'A ten-second game with a trap at the end — play it before we define anything.',
      callout: 'You couldn\'t write the rule, and neither can programmers. So we show machines thousands of labelled examples instead — that is machine learning, and the rest of this course stands on it.' },
    { type: 'widget', widget: 'spam-filter',
      title: 'Rules vs learning — build a spam filter, watch it break',
      intro: 'Now prove it to yourself the way the industry learned it: write keyword rules, catch this week\'s spam — then meet next week\'s.',
      callout: 'Hand-written rules are brittle; learned patterns generalise. This single difference is why "AI" took over jobs that rules used to do.' }
  ]);
  add(102, [
    { type: 'widget', widget: 'next-word',
      title: 'Be the algorithm — predict the next word',
      intro: 'A chatbot is a next-word predictor. Don\'t take our word for it — be one.',
      callout: 'That\'s the entire mechanism: predict, append, repeat. It also explains why chatbots confidently make things up — a likely-sounding next word is not the same as a true one.' },
    { type: 'widget', widget: 'pipeline',
      title: 'From training to answer — the whole journey',
      intro: 'Nine steps take a mountain of text to the answer on your screen. Step through them.',
      callout: 'Remember the freeze: when you chat to a model, it is not learning from you — it\'s running the same prediction maths on patterns it distilled long ago.' },
    { type: 'widget', widget: 'cosine-compass',
      title: 'The maths inside — and you already know it',
      intro: 'How does it judge which words mean similar things? With the cosine — the CAH in SOHCAHTOA.',
      callout: 'Frontier AI, running on the trigonometry in your maths lessons. "Similarity" is literally an angle between two lists of numbers.' }
  ]);
  add(105, [
    { type: 'widget', widget: 'chinese-room',
      title: 'The symbol room — fluent without understanding',
      intro: 'Can something answer perfectly without understanding anything? Find out by doing it yourself.',
      callout: 'The philosopher John Searle used this exact argument in 1980. Whether a chatbot "understands" or just performs understanding is still genuinely open — but now you\'ve experienced the difference from the inside.' },
    { type: 'widget', widget: 'word-galaxy',
      title: 'What the machine actually "knows"',
      intro: 'Four ideas about how a model pictures language — drag the sky as you go.',
      callout: 'The model knows which words sit near each other — nothing more. Is that thinking? That\'s this lesson\'s question, and there\'s no cheap answer.' }
  ]);

  /* ── Removes: Unit 2 · Study & Revision ── */
  add(111, [
    { type: 'widget', widget: 'calibration',
      title: 'The calibration game — how sure should you be?',
      intro: 'The biggest revision trap isn\'t laziness — it\'s misplaced confidence, yours or the AI\'s. Measure both.',
      callout: 'You can train your confidence to match your accuracy. A chatbot\'s confident tone is a writing style, not a measurement — which is why you check its claims before they go in your notes.' }
  ]);
  add(112, [
    { type: 'widget', widget: 'ai-quest',
      title: 'AI Quest — finish the unit like a hero',
      labData: { questions: AQ_PACK_Y9 },
      intro: 'Run, jump, collect sparks — every spark removes a question from the quiz gate. Clear all three worlds to finish the unit.',
      callout: 'Notice what made you replay: instant feedback, visible progress, stakes you chose. Steal those for your own revision toolkit.' }
  ]);

  /* ── Removes: Unit 3 · Practical AI Skills ── */
  add(113, [
    { type: 'widget', widget: 'prompt-coach',
      title: 'The prompt coach',
      intro: 'Draft a prompt for something you actually need this week, then let the coach score its ingredients. Redraft until you clear six of seven.',
      callout: 'Nothing you type leaves this page — the coach is a checklist, not an AI. Which ingredient do you keep forgetting? That\'s your personal blind spot.' }
  ]);
  add(115, [
    { type: 'widget', widget: 'wall-drawing',
      title: 'A prompt from 1971',
      intro: 'Long before chatbots, the artist Sol LeWitt sold written instructions and let other people execute them. This is his Wall Drawing #118 — run live by your browser.',
      callout: 'Same instruction, different drawing every run — exactly like a prompt. LeWitt\'s question is now yours: if you wrote the instruction, did you make the art?' },
    { type: 'widget', widget: 'rule-painter',
      title: 'Paint by rules — then let the machine finish',
      intro: 'Make one yourself: choose directions and colours, paint the grid, then hand the brush to randomness and download the result.',
      callout: 'You made every decision until the machine filled the gaps. Compare with a neighbour: whose picture is more "theirs"? Defend your answer.' },
    { type: 'widget', widget: 'bland-paste',
      title: 'Why AI art can feel samey',
      intro: 'One slider between distinctive marks and the smooth average. Drag it slowly.',
      callout: 'AI predicts the most likely output, and "most likely" means "average". Your weird, specific, personal choices are exactly what the average can\'t contain — that\'s your value, not your flaw.' }
  ]);
  add(118, [
    { type: 'widget', widget: 'code-sandbox',
      title: 'The live code sandbox',
      intro: 'Your prompt-engineering challenge can start right here: code on the left, result on the right.',
      callout: 'Whether you or an AI wrote a line, the rule is the same: you must be able to read it. Make three changes and explain each one to a neighbour.' }
  ]);
  add(134, [
    { type: 'widget', widget: 'agent-loop',
      title: 'Inside an AI agent — plan, act, observe, repeat',
      intro: 'An "agent" isn\'t a smarter chatbot — it\'s a model in a loop with tools. Step through a real task, including the moment the plan fails.',
      callout: 'The model only ever writes text — plans and tool calls. The loop does the doing. So the safety question for any agent is: which tools did we hand it, and what needs a human\'s sign-off?' }
  ]);

  /* ── Removes: Unit 4 · AI, Truth & Media ── */
  add(121, [
    { type: 'widget', widget: 'misinfo-network',
      title: 'The misinformation race — a lie versus its correction',
      intro: 'Why do false things spread faster? Stop reading about it — release one and watch.',
      callout: 'The lie travels on outrage; the correction travels on duty. Every person who checks before sharing deletes an entire branch of the red spread — that person can be you.' }
  ]);
  add(122, [
    { type: 'widget', widget: 'sequence',
      title: 'Put the verification steps in order',
      intro: 'You\'ve met the fact-checking toolkit — now prove you own the order of operations.',
      labData: {
        prompt: 'A post is going viral with a shocking claim. Put the verification steps in the order you should do them.',
        items: [
          { text: 'Pin down the claim — what exactly is being asserted?', reveal: 'step 1' },
          { text: 'Check who is saying it — does the account/source actually exist?', reveal: 'step 2' },
          { text: 'Open the original source and check it says what the post claims', reveal: 'step 3' },
          { text: 'Find a second, independent source that confirms or contradicts it', reveal: 'step 4' },
          { text: 'Decide and act: share, correct, or ignore — with evidence', reveal: 'step 5' }
        ]
      },
      callout: 'Most people jump straight to searching without pinning down the claim — and end up "verifying" something the post never quite said.' }
  ]);
  add(123, [
    { type: 'widget', widget: 'filter-bubble',
      title: 'The filter bubble — watch your feed narrow',
      intro: 'The hidden curator, made visible: tap what you\'d watch and watch the diversity meter fall.',
      callout: 'Nobody censored anything. The algorithm gave you more of what you tapped — that\'s all a filter bubble is, and it\'s why two people\'s phones show two different worlds.' }
  ]);

  /* ── Removes: Unit 5 · Society & Ethics ── */
  add(125, [
    { type: 'widget', widget: 'classifier-mirror',
      title: 'The Classification Mirror',
      intro: 'First, be classified yourself — with total confidence and zero evidence.',
      callout: 'A percentage is a performance of certainty, not proof of it. Hold that thought for the case studies.' },
    { type: 'widget', widget: 'skew-trainer',
      title: 'The skewed-data trainer — cause the bias, then measure it',
      intro: 'Now build real bias: choose lopsided training data, train a pet detector, and measure exactly who pays.',
      callout: 'Nobody wrote a biased rule — you just fed it lopsided data. Swap the pets for people and this is every biased AI story you will ever read: skewed data in, skewed decisions out.' }
  ]);
  add(127, [
    { type: 'widget', widget: 'motion-field',
      title: 'Tracked — but only by your own screen',
      intro: 'This field follows your finger at sixty frames a second — and keeps nothing. Work out what makes that different from the apps this lesson is about.',
      callout: 'The privacy question is never "does the computer respond to me?" — it\'s "where does the computation happen, and who keeps the data afterwards?" On-device and discarded is a different world from uploaded and retained.' }
  ]);
  add(129, [
    { type: 'widget', widget: 'peril-promise',
      title: 'Peril ↔ Promise — take a position',
      intro: 'Real dilemmas, no easy answers: drag each possibility onto the field and be ready to defend where you put it.',
      callout: 'Could any promise become a peril depending on who controls it? That question — control, not capability — is where most real AI ethics arguments actually live.' }
  ]);
  add(137, [
    { type: 'widget', widget: 'energy-counter',
      title: 'The energy counter — what a prompt actually costs',
      intro: 'Tap everyday actions, watch the meter — then scale to a million users and see the real shape of the problem.',
      callout: 'One prompt is tiny; a kettle dwarfs it. But a billion prompts a day, plus training, plus cooling water, is industrial. Individual guilt is the wrong lens — scale, siting and energy sources are the right questions.' }
  ]);

  /* ── Removes: Unit 6 · Shaping AI ── */
  add(138, [
    { type: 'widget', widget: 'model-card',
      title: 'The model-card audit — find the five red flags',
      intro: 'You don\'t need code to look inside the black box. Read this (fictional) model card like an auditor and click every line you don\'t trust.',
      callout: 'Your reusable checklist: marketing vs limitations · where the training data really came from · accuracy broken down, on a checkable benchmark · evaluated on people like the actual users · how stale the safety evaluation is.' }
  ]);
  add(139, [
    { type: 'widget', widget: 'skew-trainer',
      title: 'Does it actually work — and for whom?',
      intro: '"Is it accurate?" is the wrong question until you ask "accurate for whom?" Train, test, and check the gap.',
      callout: 'A single overall accuracy number can hide a large per-group gap — you\'ve now seen it happen. Demanding the breakdown is the single most useful habit an AI auditor has.' }
  ]);

  /* ── Removes: Unit 7 · Wellbeing & Future ── */
  add(130, [
    { type: 'widget', widget: 'engagement-algorithm',
      title: 'Be the engagement algorithm',
      intro: 'For eight rounds, you are the recommender — and your only target is watch time. See what happens to the person on the other side of the screen.',
      callout: 'What gets measured gets optimised; what doesn\'t gets spent. The fix isn\'t nicer engineers — it\'s changing what the metric counts. Now you know what to ask of every app on your phone.' }
  ]);
  add(133, [
    { type: 'widget', widget: 'day-one',
      title: 'Interrogate the machine — then write your manifesto',
      intro: 'Before you write your personal AI manifesto, put a chatbot on the record with these ten questions. Push back on every answer.',
      callout: 'There are no correct answers — only revealing ones. Whatever it dodged, performed or actually revealed: that goes in your manifesto.' }
  ]);
})(window.DI_LAB_SLIDES);

/* ============================================================
   Teacher-mode class-demo scripts. Shown inside widget slides
   only when the site's Teacher / Presentation mode is on
   (body.teacher-mode). Two or three beats per lab: how to run
   it from the front of the room.
   ============================================================ */
window.DI_LAB_TEACH = {
  'pixel-classifier': ['Run the game on the board with the class shouting guesses at maximum blur — take a vote before each reveal.', 'Then ask one pupil to dictate an exact cat-vs-dog rule; break it with a fox, then show the number grid.'],
  'next-word': ['Class votes the next word each turn; play a round at temperature 0, then a round at 2.0.', 'Ask: which round sounded more human? Which was more reliable? That tension is the whole dial.'],
  'pattern-tiles': ['Before pressing "Study", ask the class to spot the rule silently — hands up, no answers.', 'Generate three outputs and ask: is the model copying or creating? Defend both answers.'],
  'neuron-link': ['Fire the link once per pupil answer to a quick-fire recap question — learning literally strengthening.', 'Ask what "unlearning" would look like on this canvas (weakening, not deleting).'],
  'word-galaxy': ['Drag the sky as a class tour, one idea per minute.', 'At idea 4, ask: if it only ever guesses the next star, where do wrong answers come from?'],
  'meaning-space': ['Type a sentence suggested by the class; watch where the words land.', 'Then run "river bank" vs "money bank" and ask someone to narrate why the star moved.'],
  'cosine-compass': ['Set the two vectors together, then opposite, then at 90° — class calls the cosine before you reveal it.', 'Point at the maths: this is the CAH from their trigonometry lessons, running frontier AI.'],
  'pipeline': ['Autoplay once straight through, then hand the dots to a pupil to narrate backwards from the answer.', 'Pause on the freeze step: "so what is it doing with what you type?" — collect wrong answers first.'],
  'classifier-mirror': ['Classify three volunteers; read the verdicts with total seriousness.', 'Then the reveal — and ask where else they\'ve been given a confident score with no evidence.'],
  'skew-trainer': ['Let the class pick the training mix by vote, train, and read the gap aloud.', 'Swap to the loans scenario and repeat — same maths, suddenly nobody is laughing.'],
  'misinfo-network': ['Run once hands-off and count the final score together.', 'Run again and let the class vote share-vs-check when the story reaches "you" — then compare the two endings.'],
  'filter-bubble': ['One pupil taps their honest choices on the board; watch the diversity meter live.', 'Ask the class to predict the meter before each tap — then run autopilot and compare.'],
  'engagement-algorithm': ['The class is the algorithm: majority vote each round, target on the board.', 'At the reveal, ask who felt the pull of the outrage option — and what changing the metric would change.'],
  'chinese-room': ['Pick a volunteer to be the room while the class watches the rulebook.', 'After the reveal: hands up — did they understand Zorati? Now ask the same question about a chatbot, and take both sides.'],
  'spam-filter': ['Build the rule set by class vote, celebrate the week-one score.', 'Then release week two — the groan when "Free period today" gets flagged is the lesson landing.'],
  'agent-loop': ['Step through slowly; at the failed booking, stop and ask what a chatbot would do here.', 'End on the safety question: which of these tool calls would you want a human to approve?'],
  'calibration': ['Whole class answers each question with fingers (1–5) for confidence.', 'Compare the room\'s calibration with the chatbot\'s constant 97% — whose confidence means more?'],
  'energy-counter': ['Build a realistic evening of usage on the board, then press ×1 million.', 'Ask: is the right response individual guilt or a question about infrastructure? Push for reasons.'],
  'model-card': ['Read the card aloud line by line; class calls "flag" or "fine" before you click.', 'End by turning the five flags into a checklist for any AI tool the school buys.'],
  'bland-paste': ['Drag the slider slowly with the room silent — let the fade speak.', 'Ask each pupil to name one "un-bland" element they\'d defend in their own work.'],
  'peril-promise': ['Project the field; pupils place cards by pointing, you drag — every placement needs a spoken reason.', 'Finish on: which promise card becomes a peril if the wrong people control it?'],
  'motion-field': ['Let a pupil drive the swarm, then ask what data just left the room. (Nothing.)', 'Contrast with a camera doing the same tracking in a shop — what\'s different and why does it matter?'],
  'day-one': ['Put the ten questions to a live chatbot on the projector, class picks the order.', 'Log what it dodges versus what it reveals — keep the list for the end of term.'],
  'code-sandbox': ['Break the starter code live (delete a closing tag) and let the class debug it.', 'Rule of the room: nobody ships a line they can\'t read aloud.'],
  'prompt-coach': ['Write a deliberately lazy prompt together, score it, then improve one ingredient per pupil.', 'Watch the score climb — prompting as a checklist, not a magic spell.'],
  'wall-drawing': ['Execute the instruction three times on the board; same rule, three artworks.', 'Ask: who is the artist here — LeWitt, the browser, or nobody? Take a vote, demand reasons.'],
  'instruction-engine': ['Hand the sliders to a pupil "director" who may only speak instructions, never touch.', 'Read the prose transcription aloud each time — that sentence is the artwork\'s source code.'],
  'rule-painter': ['Two pupils, one grid: alternate moves, then "let the machine finish".', 'Whose picture is it? Run the LeWitt argument with their own work as the evidence.'],
  'sequence': ['Teams race the ordering on the board; loudest reasoning wins ties.', 'After the check, ask which card everyone was most wrongly confident about.'],
  'ai-quest': ['End-of-unit ritual: one pupil plays on the projector, the class answers the gates together.', 'Sparks are earned by the room — a revision session pupils will ask to repeat.']
};

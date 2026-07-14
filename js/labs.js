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

/* ============================================================
   LAB: pixel-classifier
   "Cat or dog?" — feel the difference between writing rules
   and learning from examples, then see what the machine sees.
   ============================================================ */
var PXC_CARDS = [
  { e: '🐕', a: 'dog' }, { e: '🐈', a: 'cat' }, { e: '🐩', a: 'dog' },
  { e: '🐱', a: 'cat' }, { e: '🐕‍🦺', a: 'dog' }, { e: '🐈‍⬛', a: 'cat' }
];
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
  blurb: 'Classify six photos in seconds — then try to write the exact rule you used, and see what the machine actually receives.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-pxc-game" id="' + uid + '-game">' +
          '<div class="lab-pxc-photo" id="' + uid + '-photo" aria-live="polite">🐕</div>' +
          '<div class="lab-pxc-count" id="' + uid + '-count">Photo 1 of ' + PXC_CARDS.length + '</div>' +
          '<div class="lab-btn-row">' +
            '<button class="lab-btn lab-btn-primary" id="' + uid + '-cat">🐱 Cat</button>' +
            '<button class="lab-btn lab-btn-primary" id="' + uid + '-dog">🐶 Dog</button>' +
          '</div>' +
          '<div class="lab-feedback" id="' + uid + '-fb" aria-live="polite"></div>' +
        '</div>' +
        '<div class="lab-pxc-done" id="' + uid + '-done" hidden>' +
          '<div class="lab-score" id="' + uid + '-tally"></div>' +
          '<p class="lab-note">Easy, wasn\'t it? Now the hard part.</p>' +
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
    var idx = 0, score = 0, lock = false;
    var photo = el(uid + '-photo'); if (!photo) return;
    function show() {
      photo.textContent = PXC_CARDS[idx].e;
      el(uid + '-count').textContent = 'Photo ' + (idx + 1) + ' of ' + PXC_CARDS.length;
      var fb = el(uid + '-fb'); fb.textContent = ''; fb.className = 'lab-feedback';
    }
    function guess(g) {
      if (lock) return;
      lock = true;
      var right = g === PXC_CARDS[idx].a;
      if (right) score++;
      var fb = el(uid + '-fb');
      fb.textContent = right ? '✓ Yes!' : '✗ Actually a ' + PXC_CARDS[idx].a;
      fb.className = 'lab-feedback ' + (right ? 'ok' : 'no');
      setTimeout(function () {
        idx++;
        if (idx >= PXC_CARDS.length) {
          el(uid + '-game').hidden = true;
          el(uid + '-done').hidden = false;
          el(uid + '-tally').textContent = score + ' / ' + PXC_CARDS.length;
        } else { show(); }
        lock = false;
      }, 750);
    }
    el(uid + '-cat').addEventListener('click', function () { guess('cat'); });
    el(uid + '-dog').addEventListener('click', function () { guess('dog'); });
    el(uid + '-reveal').addEventListener('click', function () {
      el(uid + '-done').hidden = true;
      var teach = el(uid + '-teach');
      teach.hidden = false;
      var grid = el(uid + '-grid');
      grid.innerHTML = PXC_MAP.map(function (row) {
        return row.map(function (v) {
          var dark = v < 130;
          return '<span class="lab-pxc-cell" style="background:rgb(' + v + ',' + v + ',' + v + ');color:' +
            (dark ? '#eee' : '#333') + '">' + v + '</span>';
        }).join('');
      }).join('');
    });
    el(uid + '-again').addEventListener('click', function () {
      idx = 0; score = 0;
      el(uid + '-teach').hidden = true;
      el(uid + '-game').hidden = false;
      show();
    });
    show();
  }
};

/* ============================================================
   LAB: next-word
   Be the algorithm — build a sentence one prediction at a time.
   ============================================================ */
var NW_DEFAULT = {
  seed: 'The pupil opened the',
  tree: {
    start: [{ w: 'laptop', p: 52 }, { w: 'book', p: 31 }, { w: 'window', p: 12 }, { w: 'fridge', p: 5 }],
    laptop: [{ w: 'and', p: 58 }, { w: 'to', p: 42 }],
    book: [{ w: 'and', p: 61 }, { w: 'to', p: 39 }],
    window: [{ w: 'and', p: 55 }, { w: 'to', p: 45 }],
    fridge: [{ w: 'and', p: 64 }, { w: 'to', p: 36 }],
    and: [{ w: 'began', p: 47 }, { w: 'started', p: 33 }, { w: 'paused', p: 20 }],
    to: [{ w: 'check', p: 54 }, { w: 'start', p: 28 }, { w: 'avoid', p: 18 }],
    began: [{ w: 'revising.', p: 62 }, { w: 'typing.', p: 26 }, { w: 'again.', p: 12 }],
    started: [{ w: 'working.', p: 58 }, { w: 'reading.', p: 30 }, { w: 'over.', p: 12 }],
    paused: [{ w: 'to think.', p: 57 }, { w: 'for a moment.', p: 31 }, { w: 'briefly.', p: 12 }],
    check: [{ w: 'the homework.', p: 55 }, { w: 'their notes.', p: 33 }, { w: 'the time.', p: 12 }],
    avoid: [{ w: 'the homework.', p: 58 }, { w: 'distraction.', p: 42 }]
  }
};
LABS['next-word'] = {
  title: 'Be the algorithm — predict the next word',
  tag: 'How LLMs work',
  blurb: 'Each word offers a few likely successors with the model\'s confidence. Pick one — that is exactly what an LLM does, one token at a time.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-nw-sentence" id="' + uid + '-sent" aria-live="polite"></div>' +
        '<div class="lab-nw-opts" id="' + uid + '-opts"></div>' +
        '<p class="lab-note" id="' + uid + '-note"></p>' +
        '<button class="lab-btn lab-btn-sm" id="' + uid + '-reset">↻ Start again</button>' +
      '</div>';
  },
  init: function (uid, data) {
    var D = (data && data.tree) ? data : NW_DEFAULT;
    var base, key, done;
    function render() {
      el(uid + '-sent').innerHTML = esc(base) + (done ? '' : '<span class="lab-cursor"></span>');
      var opts = el(uid + '-opts');
      opts.innerHTML = '';
      if (done) {
        el(uid + '-note').textContent =
          'A complete sentence — assembled one prediction at a time, never planned in advance. Start again and watch it branch differently.';
        return;
      }
      var list = (D.tree[key] || []).slice().sort(function (a, b) { return b.p - a.p; });
      list.forEach(function (o, i) {
        var b = document.createElement('button');
        b.className = 'lab-nw-opt' + (i === 0 ? ' top' : '');
        b.innerHTML = esc(o.w) + '<span class="lab-nw-pct">' + o.p + '%</span>';
        b.addEventListener('click', function () { pick(o.w); });
        opts.appendChild(b);
      });
      el(uid + '-note').textContent =
        'The percentages are the model\'s confidence. Note: real models don\'t always take the top choice — a little randomness ("temperature") keeps the output varied.';
    }
    function pick(word) {
      base += ' ' + word;
      var k = word.replace(/[^a-z]/gi, '').toLowerCase();
      if (/\.$/.test(word) || !D.tree[k]) done = true; else key = k;
      render();
    }
    function reset() { base = D.seed; key = 'start'; done = false; render(); }
    el(uid + '-reset').addEventListener('click', reset);
    reset();
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
    el(uid + '-a').addEventListener('input', draw);
    el(uid + '-b').addEventListener('input', draw);
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
        'decade of mostly-male CVs: skewed data in, skewed decisions out — delivered as a confident score.</div>';
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
    function setPointer(e) {
      var r = cv.getBoundingClientRect(), p = pt(e);
      mx = p.x - r.left; my = p.y - r.top; tracing = true;
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
    function run() { el(uid + '-frame').srcdoc = code.value; }
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
    el(uid).addEventListener('click', function (e) {
      var b = e.target.closest('.lab-q-copy');
      if (!b) return;
      copyText(DAY_ONE_QS[+b.getAttribute('data-i')].q, b);
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

/* ============================================================
   LAB: meaning-space
   Type a sentence; every word becomes a star placed by meaning.
   Click two stars to measure the angle between them.
   ============================================================ */
var MS_THEMES = {
  study:   { ang: 90,  col: '#c64b74', label: 'STUDY' },
  feeling: { ang: 162, col: '#b08ae0', label: 'FEELINGS' },
  tech:    { ang: 234, col: '#5db8e8', label: 'TECH' },
  money:   { ang: 306, col: '#e8b45d', label: 'MONEY' },
  nature:  { ang: 18,  col: '#6fcf97', label: 'NATURE' }
};
var MS_LEX = {
  study: ['essay', 'exam', 'revise', 'revision', 'homework', 'lesson', 'teacher', 'pupil', 'student', 'school', 'notes', 'grade', 'read', 'write', 'learn', 'question', 'answer', 'book', 'library'],
  feeling: ['love', 'fear', 'joy', 'hope', 'worry', 'calm', 'happy', 'sad', 'angry', 'proud', 'nervous', 'excited', 'feel', 'heart', 'dream'],
  tech: ['code', 'computer', 'algorithm', 'data', 'model', 'robot', 'phone', 'app', 'software', 'network', 'digital', 'machine', 'internet', 'screen', 'program', 'token', 'vector'],
  money: ['money', 'cash', 'loan', 'deposit', 'account', 'invest', 'price', 'market', 'wealth', 'coin', 'savings', 'pay', 'credit', 'budget'],
  nature: ['river', 'water', 'tree', 'forest', 'mountain', 'ocean', 'flower', 'garden', 'rain', 'sun', 'wind', 'field', 'bird', 'fruit', 'apple', 'seed', 'orchard', 'grass', 'willow']
};
var MS_W2T = {};
Object.keys(MS_LEX).forEach(function (t) {
  MS_LEX[t].forEach(function (w) { if (!(w in MS_W2T)) MS_W2T[w] = t; });
});
/* Ambiguous words resolved by their neighbours — the point of the lab. */
var MS_SENSES = {
  bank:    { money: ['cash', 'money', 'loan', 'deposit', 'account', 'savings', 'pay'], nature: ['river', 'water', 'grass', 'sat', 'willow', 'fish', 'walked'] },
  apple:   { tech: ['computer', 'phone', 'app', 'software', 'launch', 'company'], nature: ['tree', 'fruit', 'eat', 'ate', 'sweet', 'orchard', 'seed', 'garden'] },
  current: { nature: ['river', 'water', 'ocean', 'sea', 'tide', 'swim'], tech: ['electric', 'wire', 'power', 'circuit', 'voltage', 'battery'] },
  model:   { tech: ['data', 'train', 'trained', 'neural', 'algorithm', 'language', 'token'], study: ['essay', 'answer', 'example', 'exemplar', 'perfect'] }
};
LABS['meaning-space'] = {
  title: 'The meaning-space — embeddings you can touch',
  tag: 'Embeddings',
  blurb: 'Type a sentence and watch every word land in a sky of meaning. Repeated words glow brighter; ambiguous words move with their context; click two stars to measure the angle between them.',
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
          '<button class="lab-chip" data-t="He ate a sweet apple from the tree in the orchard">apple · fruit</button>' +
          '<button class="lab-chip" data-t="The company will launch the new apple phone app">apple · tech</button>' +
        '</div>' +
        '<div class="lab-ms-caps" id="' + uid + '-caps"></div>' +
        '<div class="lab-canvas-wrap lab-canvas-dark lab-canvas-tall"><canvas id="' + uid + '-cv"></canvas>' +
          '<div class="lab-zoom-btns"><button class="lab-btn lab-btn-sm" id="' + uid + '-zi" aria-label="Zoom in">+</button><button class="lab-btn lab-btn-sm" id="' + uid + '-zo" aria-label="Zoom out">−</button></div></div>' +
        '<p class="lab-note" id="' + uid + '-read">Click any two word-stars to measure the angle between them — a small angle means similar meaning.</p>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var S = { stars: [], sel: [], z: 1, panX: 0, panY: 0, W: 0, H: 0, cx: 0, cy: 0, R: 0 };
    function hash(s) {
      var h = 0;
      for (var i = 0; i < s.length; i++) h = s.charCodeAt(i) + ((h << 5) - h);
      return h;
    }
    function themeOf(word, ctxWords) {
      word = word.toLowerCase();
      if (MS_SENSES[word]) {
        var best = null, bestScore = -1, bestCue = [];
        Object.keys(MS_SENSES[word]).forEach(function (th) {
          var cues = MS_SENSES[word][th], score = 0, matched = [];
          ctxWords.forEach(function (c) {
            if (cues.indexOf(c) > -1) { score += 2; matched.push(c); }
            else if (MS_W2T[c] === th) { score += 1; matched.push(c); }
          });
          if (score > bestScore) { bestScore = score; best = th; bestCue = matched; }
        });
        return { theme: bestScore > 0 ? best : null, sense: true, cue: bestCue };
      }
      if (MS_W2T[word]) return { theme: MS_W2T[word], sense: false, cue: [] };
      return { theme: null, sense: false, cue: [] };
    }
    function posOf(key, th) {
      var h = hash(key), R = S.R;
      if (th) {
        var base = MS_THEMES[th].ang * Math.PI / 180;
        var jit = ((((h % 1000) + 1000) % 1000) / 1000 - 0.5) * (40 * Math.PI / 180);
        var rad = R * (0.42 + ((((h >> 3) % 1000) + 1000) % 1000) / 1000 * 0.5);
        return { vx: Math.cos(base + jit) * rad, vy: Math.sin(base + jit) * rad };
      }
      var a = (Math.abs(h) % 360) * Math.PI / 180;
      var rr = R * (0.14 + ((((h >> 3) % 1000) + 1000) % 1000) / 1000 * 0.22);
      return { vx: Math.cos(a) * rr, vy: Math.sin(a) * rr };
    }
    function toScreen(s) { return { x: S.cx + s.vx * S.z + S.panX, y: S.cy - s.vy * S.z + S.panY }; }
    function process() {
      var input = el(uid + '-in');
      var wrap = cv.parentElement;
      var W = wrap.clientWidth, H = Math.max(240, Math.round(W * 0.55));
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = W + 'px'; cv.style.height = H + 'px';
      S.ctx = cv.getContext('2d'); S.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      S.W = W; S.H = H; S.cx = W / 2; S.cy = H / 2; S.R = Math.min(W, H) * 0.42;
      var raw = (input.value.match(/[A-Za-z']+/g)) || [];
      var lower = raw.map(function (w) { return w.toLowerCase(); });
      var freq = {};
      lower.forEach(function (w) { freq[w] = (freq[w] || 0) + 1; });
      var seen = {}, capHTML = '';
      S.stars = [];
      raw.forEach(function (word, idx) {
        var lw = word.toLowerCase();
        var others = lower.filter(function (_, i) { return i !== idx; });
        var t = themeOf(word, others);
        var occ = (seen[lw] = (seen[lw] || 0)); seen[lw]++;
        var th = t.theme ? MS_THEMES[t.theme] : { col: '#8fa3b8', label: 'unmapped' };
        var p = posOf(lw + (occ || ''), t.theme);
        S.stars.push({ word: word, lw: lw, theme: t.theme, col: th.col, cue: t.cue, sense: t.sense, freq: freq[lw], vx: p.vx, vy: p.vy });
        capHTML += '<span class="lab-ms-cap" style="border-color:' + th.col + ';color:' + th.col + '">#' + idx +
          (t.sense && t.theme ? '→' + th.label : '') + ' ' + esc(word) + '</span>';
      });
      el(uid + '-caps').innerHTML = capHTML || '<span class="lab-note">type a sentence…</span>';
      S.sel = []; S.z = 1; S.panX = 0; S.panY = 0;
      render(); readout();
    }
    function render() {
      var ctx = S.ctx; if (!ctx) return;
      var W = S.W, H = S.H, cx = S.cx, cy = S.cy, R = S.R;
      ctx.clearRect(0, 0, W, H);
      var g = ctx.createRadialGradient(cx, cy, 8, cx, cy, Math.max(W, H) * 0.7);
      g.addColorStop(0, '#0d1526'); g.addColorStop(1, '#060a14');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      Object.keys(MS_THEMES).forEach(function (t) {
        var th = MS_THEMES[t], a = th.ang * Math.PI / 180;
        var ex = cx + Math.cos(a) * R * 1.02 * S.z + S.panX, ey = cy - Math.sin(a) * R * 1.02 * S.z + S.panY;
        ctx.strokeStyle = 'rgba(148,163,184,.12)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(cx + S.panX, cy + S.panY); ctx.lineTo(ex, ey); ctx.stroke();
        ctx.fillStyle = 'rgba(148,163,184,.55)'; ctx.font = '700 9px ' + cssVar('--mono', 'monospace');
        ctx.textAlign = 'center'; ctx.fillText(th.label, cx + Math.cos(a) * R * 1.12 * S.z + S.panX, cy - Math.sin(a) * R * 1.12 * S.z + S.panY + 3);
      });
      ctx.textAlign = 'left';
      /* links between same-theme stars */
      for (var i = 0; i < S.stars.length; i++) {
        for (var j = i + 1; j < S.stars.length; j++) {
          var a2 = S.stars[i], b2 = S.stars[j];
          if (a2.theme && a2.theme === b2.theme) {
            var pa = toScreen(a2), pb = toScreen(b2);
            ctx.strokeStyle = 'rgba(180,196,222,.16)'; ctx.lineWidth = 0.8;
            ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y); ctx.stroke();
          }
        }
      }
      /* selection rays + angle arc */
      if (S.sel.length >= 1) {
        S.sel.forEach(function (si) {
          var s = S.stars[si], p = toScreen(s);
          ctx.strokeStyle = s.col; ctx.lineWidth = 2; ctx.setLineDash([4, 3]);
          ctx.beginPath(); ctx.moveTo(cx + S.panX, cy + S.panY); ctx.lineTo(p.x, p.y); ctx.stroke();
          ctx.setLineDash([]);
        });
        if (S.sel.length === 2) {
          var A = S.stars[S.sel[0]], B = S.stars[S.sel[1]];
          var sa = Math.atan2(-A.vy, A.vx), sb = Math.atan2(-B.vy, B.vx);
          var diff = Math.atan2(Math.sin(sb - sa), Math.cos(sb - sa));
          ctx.strokeStyle = 'rgba(255,255,255,.8)'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(cx + S.panX, cy + S.panY, 30, sa, sa + diff, diff < 0); ctx.stroke();
          var mid = sa + diff / 2;
          ctx.fillStyle = '#fff'; ctx.font = '700 10px ' + cssVar('--mono', 'monospace');
          ctx.textAlign = 'center';
          ctx.fillText(Math.round(Math.abs(diff) * 180 / Math.PI) + '°', cx + S.panX + Math.cos(mid) * 48, cy + S.panY + Math.sin(mid) * 48 + 3);
          ctx.textAlign = 'left';
        }
      }
      /* stars + labels */
      S.stars.forEach(function (s, i2) {
        var p = toScreen(s);
        var r = Math.min(12, 4 + (s.freq - 1) * 2.5);
        var seld = S.sel.indexOf(i2) > -1;
        ctx.save();
        ctx.shadowColor = s.col; ctx.shadowBlur = seld ? 22 : Math.min(18, 7 + (s.freq - 1) * 4);
        ctx.fillStyle = s.col;
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        if (seld) {
          ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(p.x, p.y, r + 4, 0, Math.PI * 2); ctx.stroke();
        }
        ctx.font = '700 11px ' + cssVar('--mono', 'monospace');
        ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.strokeStyle = 'rgba(4,8,16,.85)';
        ctx.strokeText(s.word, p.x + r + 3, p.y + 4);
        ctx.fillStyle = seld ? '#ffffff' : '#dbe4f0';
        ctx.fillText(s.word, p.x + r + 3, p.y + 4);
      });
    }
    function readout() {
      var out = el(uid + '-read');
      if (S.sel.length === 2) {
        var a = S.stars[S.sel[0]], b = S.stars[S.sel[1]];
        var dot = a.vx * b.vx + a.vy * b.vy;
        var cos = dot / ((Math.hypot(a.vx, a.vy) * Math.hypot(b.vx, b.vy)) || 1);
        var ang = Math.acos(Math.max(-1, Math.min(1, cos))) * 180 / Math.PI;
        var v = cos > 0.8 ? 'almost the same direction — very similar meaning'
          : cos > 0.4 ? 'a small angle — related meaning'
          : cos > -0.2 ? 'a wide angle — fairly unrelated'
          : 'pointing apart — opposite ends of meaning';
        out.innerHTML = '<strong>' + esc(a.word) + '</strong> ↔ <strong>' + esc(b.word) + '</strong> · angle <strong>' +
          ang.toFixed(0) + '°</strong> · cosine <strong>' + cos.toFixed(2) + '</strong> — ' + v + '.';
      } else if (S.sel.length === 1) {
        out.innerHTML = 'Selected <strong>' + esc(S.stars[S.sel[0]].word) + '</strong>. Click a second star to measure the angle between them.';
      } else {
        var note = null;
        for (var i = 0; i < S.stars.length; i++) {
          var st = S.stars[i];
          if (st.sense && st.theme && st.cue.length) {
            note = '“' + esc(st.word) + '” landed in <strong>' + MS_THEMES[st.theme].label +
              '</strong> because of nearby words like <em>' + st.cue.slice(0, 3).map(esc).join(', ') +
              '</em>. Change the sentence and watch it move.';
            break;
          }
        }
        out.innerHTML = note || 'Click any two word-stars to measure the <strong>angle</strong> between them — a small angle means similar meaning.';
      }
    }
    /* pointer: drag pans, click selects */
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
  blurb: 'Sol LeWitt sold written instructions, not drawings: "fifty points are marked at random… the points are connected by straight lines." Here is that instruction, executed live — different every time.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-canvas-wrap lab-canvas-paper"><canvas id="' + uid + '-cv"></canvas></div>' +
        '<div class="lab-btn-row"><button class="lab-btn lab-btn-primary" id="' + uid + '-again">↻ Execute the instruction again</button></div>' +
        '<p class="lab-note"><em>“On a wall surface, fifty points are marked at random. The points are connected by straight lines.”</em> — Sol LeWitt, Wall Drawing #118 (1971). The drawing you see <strong>is</strong> the instruction, executed. LeWitt never drew his wall drawings; assistants did. When you write a prompt, you are doing precisely this — half a century later.</p>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    function draw() {
      var f = fitCanvas(cv, 0.55, 200), ctx = f.ctx, W = f.W, H = f.H;
      ctx.fillStyle = '#fbf9f4'; ctx.fillRect(0, 0, W, H);
      var pts = [];
      for (var i = 0; i < 50; i++) pts.push({ x: 14 + Math.random() * (W - 28), y: 14 + Math.random() * (H - 28) });
      ctx.strokeStyle = 'rgba(35,30,28,.16)'; ctx.lineWidth = 0.6;
      for (var a = 0; a < pts.length; a++) {
        for (var b = a + 1; b < pts.length; b++) {
          ctx.beginPath(); ctx.moveTo(pts[a].x, pts[a].y); ctx.lineTo(pts[b].x, pts[b].y); ctx.stroke();
        }
      }
      ctx.fillStyle = 'rgba(35,30,28,.75)';
      pts.forEach(function (p) { ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2); ctx.fill(); });
    }
    el(uid + '-again').addEventListener('click', draw);
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
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var T = theme();
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
        for (var j = 0; j < density; j++) {
          var x1 = Math.random() * W, y1 = Math.random() * H;
          stroke(j);
          ctx.beginPath(); ctx.moveTo(x1, y1);
          ctx.lineTo(x1 + (Math.random() * 130 - 65), y1 + (Math.random() * 130 - 65)); ctx.stroke();
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
    }
    [uid + '-d', uid + '-w'].forEach(function (id) { el(id).addEventListener('input', draw); });
    [uid + '-p', uid + '-s'].forEach(function (id) { el(id).addEventListener('change', draw); });
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
          '<button class="lab-btn lab-btn-sm lab-rp-dir sel" data-d="dl" id="' + uid + '-d0">╲</button>' +
          '<button class="lab-btn lab-btn-sm lab-rp-dir" data-d="dr">╱</button>' +
          '<button class="lab-btn lab-btn-sm lab-rp-dir" data-d="v">|</button>' +
          '<button class="lab-btn lab-btn-sm lab-rp-dir" data-d="h">—</button>' +
          '<span class="lab-label" style="margin-left:10px">Colour</span>' +
          '<button class="lab-rp-col sel" data-c="#2b2624" style="background:#2b2624" aria-label="Charcoal"></button>' +
          '<button class="lab-rp-col" data-c="#9b1844" style="background:#9b1844" aria-label="Magenta"></button>' +
          '<button class="lab-rp-col" data-c="#009fe3" style="background:#009fe3" aria-label="Cyan"></button>' +
          '<button class="lab-rp-col" data-c="#f59e0b" style="background:#f59e0b" aria-label="Amber"></button>' +
          '<button class="lab-rp-col" data-c="#22c55e" style="background:#22c55e" aria-label="Green"></button>' +
        '</div>' +
        '<div class="lab-canvas-wrap lab-canvas-paper"><canvas id="' + uid + '-cv" style="touch-action:none"></canvas></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-erase">⌫ Eraser</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-surprise">🎲 Let the machine finish</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-clear">Clear</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-dl">⬇ Download PNG</button>' +
        '</div>' +
        '<p class="lab-note">Click or drag across the grid to paint. You chose the rules and made the decisions; the hatching is executed systematically. Whose drawing is it?</p>' +
      '</div>';
  },
  init: function (uid) {
    var cv = el(uid + '-cv'); if (!cv) return;
    var COLS = 6, ROWS = 4;
    var dir = 'dl', color = '#2b2624', erase = false, painting = false, cells = {};
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
    }
    function cellAt(e) {
      var r = cv.getBoundingClientRect(), p = pt(e);
      var col = Math.floor((p.x - r.left) / (r.width / COLS));
      var row = Math.floor((p.y - r.top) / (r.height / ROWS));
      if (col < 0 || row < 0 || col >= COLS || row >= ROWS) return null;
      return row + '-' + col;
    }
    function apply(e) {
      var key = cellAt(e); if (!key) return;
      if (erase) delete cells[key]; else cells[key] = { d: dir, c: color };
      draw();
    }
    cv.addEventListener('pointerdown', function (e) { e.preventDefault(); painting = true; apply(e); });
    cv.addEventListener('pointermove', function (e) { if (painting) { e.preventDefault(); apply(e); } });
    window.addEventListener('pointerup', function () { painting = false; });
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
      for (var r = 0; r < ROWS; r++) {
        for (var c2 = 0; c2 < COLS; c2++) {
          var key = r + '-' + c2;
          if (!cells[key] && Math.random() > 0.25) {
            cells[key] = { d: dirs[Math.floor(Math.random() * 4)], c: cols[Math.floor(Math.random() * cols.length)] };
          }
        }
      }
      draw();
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
   Generic drag-to-order activity (touch + mouse). Data-driven:
   pass labData {prompt, items:[{text, reveal}]} in correct order.
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
LABS['sequence'] = {
  title: 'Put it in order',
  tag: 'Activity',
  blurb: 'A reusable drag-to-order challenge. Reason about the sequence, check your answer, and the cards reveal what really happened.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<p class="lab-note" id="' + uid + '-prompt"></p>' +
        '<div class="lab-seq-rows" id="' + uid + '-rows"></div>' +
        '<div class="lab-btn-row">' +
          '<button class="lab-btn lab-btn-primary" id="' + uid + '-check">Check my order</button>' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-shuffle">🔀 Shuffle</button>' +
        '</div>' +
        '<p class="lab-feedback" id="' + uid + '-fb" aria-live="polite"></p>' +
      '</div>';
  },
  init: function (uid, data) {
    var D = (data && data.items) ? data : SEQ_DEFAULT;
    el(uid + '-prompt').textContent = D.prompt || SEQ_DEFAULT.prompt;
    var rows = el(uid + '-rows');
    var drag = null, from = null, ox = 0, oy = 0;
    function build() {
      rows.innerHTML = '';
      shuffle(D.items.map(function (it, i) { return { it: it, order: i }; })).forEach(function (e2) {
        var slot = document.createElement('div');
        slot.className = 'lab-seq-slot';
        var card = document.createElement('div');
        card.className = 'lab-seq-card';
        card.setAttribute('data-order', e2.order);
        card.innerHTML = '<span class="lab-seq-text">' + esc(e2.it.text) + '</span><span class="lab-seq-reveal"></span>';
        slot.appendChild(card);
        rows.appendChild(slot);
      });
      el(uid + '-fb').textContent = '';
    }
    function check() {
      var right = true;
      Array.prototype.forEach.call(rows.querySelectorAll('.lab-seq-slot'), function (s, idx) {
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
    }
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
   Drag possibilities onto a 2D field; defend your placements.
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
  blurb: 'Drag each possibility onto the field: peril or promise, distant or already here. There are no right placements — only ones you can defend.',
  html: function (uid) {
    return '' +
      '<div class="lab" id="' + uid + '">' +
        '<div class="lab-pp-bank" id="' + uid + '-bank">' +
          PP_CARDS.map(function (c) { return '<div class="lab-pp-card">' + esc(c) + '</div>'; }).join('') +
        '</div>' +
        '<div class="lab-pp-addrow">' +
          '<input class="lab-input" id="' + uid + '-add" maxlength="60" placeholder="Add your own possibility…" aria-label="Add your own possibility">' +
          '<button class="lab-btn lab-btn-sm" id="' + uid + '-addbtn">+ Add</button>' +
        '</div>' +
        '<div class="lab-pp-field" id="' + uid + '-field" aria-label="Two-dimensional field from peril to promise">' +
          '<span class="lab-pp-ax lab-pp-w">☠️ Peril</span><span class="lab-pp-ax lab-pp-e">✨ Promise</span>' +
          '<span class="lab-pp-ax lab-pp-n">already happening</span><span class="lab-pp-ax lab-pp-s">years away</span>' +
        '</div>' +
        '<p class="lab-note">Protocol: read each card aloud → place it together → could any <em>promise</em> become a <em>peril</em>, depending on who controls it? Drag a card out of the field to send it back.</p>' +
      '</div>';
  },
  init: function (uid) {
    var bank = el(uid + '-bank'), field = el(uid + '-field');
    if (!bank || !field) return;
    var drag = null, placed = false, ox = 0, oy = 0;
    el(uid + '-addbtn').addEventListener('click', function () {
      var inp = el(uid + '-add');
      var txt = inp.value.trim(); if (!txt) return;
      var c = document.createElement('div');
      c.className = 'lab-pp-card';
      c.textContent = '✏️ ' + txt;
      bank.appendChild(c);
      inp.value = ''; inp.focus();
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
          drag.style.left = (p.x - fr.left - ox) + 'px';
          drag.style.top = (p.y - fr.top - oy) + 'px';
        } else {
          drag.style.position = ''; drag.style.left = drag.style.top = drag.style.width = '';
        }
      } else if (!inside) {
        drag.classList.remove('placed');
        drag.style.position = ''; drag.style.left = drag.style.top = '';
        bank.appendChild(drag);
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
            '<p class="lab-note">Jump with <strong>Space</strong>, <strong>tap</strong>, or the button. Collect ⚡ sparks — each one removes a question from the gate at the end of the level.</p>' +
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
      running: false, level: 0, char: CHARS[0],
      x: 60, y: GROUND, vy: 0, onGround: true,
      camX: 0, sparks: 0, levelSparks: 0, taken: {},
      qOrder: [], qPtr: 0, gateNeed: 0, gateAsked: 0, atGate: false
    };
    function startLevel(n) {
      G.level = n; G.x = 60; G.y = GROUND; G.vy = 0; G.onGround = true;
      G.camX = 0; G.levelSparks = 0; G.taken = {}; G.atGate = false;
      el(uid + '-lvl').textContent = (n + 1);
      el(uid + '-select').hidden = true;
      el(uid + '-quiz').hidden = true;
      el(uid + '-win').hidden = true;
      G.running = true;
    }
    function jump() {
      if (!G.running || G.atGate) return;
      if (G.onGround) { G.vy = -11.5; G.onGround = false; }
    }
    function openGate() {
      G.atGate = true; G.running = false;
      G.gateNeed = Math.max(2, 5 - Math.min(3, G.levelSparks));
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
            'You cleared all three worlds with ' + G.sparks + ' sparks. Revision, but you asked to replay it.';
          if (typeof launchConfetti === 'function' && !reducedMotion()) { try { launchConfetti(); } catch (e) {} }
        } else {
          startLevel(G.level + 1);
        }
        return;
      }
      if (G.qPtr >= G.qOrder.length) { G.qOrder = shuffle(bank()); G.qPtr = 0; }
      var q = G.qOrder[G.qPtr++];
      el(uid + '-qmeta').textContent = 'Gate question ' + (G.gateAsked + 1) + ' of ' + G.gateNeed +
        ' · sparks removed ' + Math.min(3, G.levelSparks);
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
            G.gateAsked++;
            fb.textContent = '✓ ' + (q.explanation || 'Correct.');
            setTimeout(askNext, 1100);
          } else {
            fb.textContent = '✗ Not quite — ' + (q.explanation || 'try another.') + ' The gate stays shut; next question…';
            setTimeout(askNext, 1600);
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
      if (G.running) {
        G.x += 2.6;
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
        G.char = ch; G.sparks = 0;
        el(uid + '-sparks').textContent = '0';
        G.qOrder = shuffle(bank()); G.qPtr = 0;
        startLevel(0);
      });
      chars.appendChild(b);
    });
    el(uid + '-jump').addEventListener('click', jump);
    cv.addEventListener('pointerdown', jump);
    el(uid).addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'ArrowUp') { e.preventDefault(); jump(); }
    });
    el(uid).setAttribute('tabindex', '0');
    el(uid + '-restart').addEventListener('click', function () {
      G.running = false; G.sparks = 0;
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
      instructions: 'A normal chatbot answers from everything it was trained on; NotebookLM answers only from sources you give it, with citations you can check. Build a grounded research notebook for your own future — it becomes a running resource, not a one-off task.',
      steps: [
        'Open NotebookLM and create a notebook called <strong>My Careers</strong>.',
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
      title: 'The meaning-space — embeddings you can touch',
      intro: 'RAG works by finding "nearest neighbours in vector space". Here is that space. Type sentences, watch the ambiguous words move with their context, and click two stars to measure similarity.',
      debrief: 'When NotebookLM retrieves the right passage from your sources, it did what you just did: turned the words into positions and measured which stored chunks sit at the smallest angle from your question.' },
    { type: 'widget', widget: 'cosine-compass',
      title: 'Cosine similarity — the CAH in SOHCAHTOA',
      intro: 'The exact maths behind "semantic similarity" — and you already learned it at GCSE.',
      debrief: 'Every retrieval system in this lesson ranks chunks by this one number. Small angle → cosine near 1 → "relevant". That\'s it. Frontier AI, running on trigonometry you met in Year 10.' }
  ]
};

})();

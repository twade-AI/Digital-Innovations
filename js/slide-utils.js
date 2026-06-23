/* ── Shared slide helpers ──────────────────────────────────
   These four helpers were inlined (and diverging) inside each of
   the three track engines in js/app.js, removes.html and
   fluency.html. They are now a single source of truth. Any
   engine can call window.diSlide.* instead of its own copy.

   This file is intentionally small. It's the seed for a larger
   engine consolidation that will eventually replace the three
   per-track render functions. The current track renderers still
   work as-is — they just can now delegate the bits that should
   never have drifted between tracks.

   Loaded on every page that ships a lesson viewer. */

(function () {
  if (window.diSlide) return; // idempotent

  /* Escape user-supplied strings before we build HTML around
     them. Mirrors the pattern in gsEscape / flEscape / html()
     sprinkled across app.js. */
  function escape(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* Build a sanitised YouTube embed URL.
     Whitelists the 11-char video ID, forces the privacy-enhanced
     domain, and disables related-videos and modest branding. */
  function youtubeEmbed(rawId) {
    var id = String(rawId || '').replace(/[^A-Za-z0-9_-]/g, '');
    if (!id) return '';
    return 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0&modestbranding=1';
  }

  /* Render the standard 'Click to reveal answer' block.
     Accepts a slide with slide.reveal (string) and an optional
     revealLabel. Returns the two-element (button + hidden panel)
     HTML, with a uniqueId prefix so multiple reveals on one page
     don't collide. The caller is responsible for wiring the
     click handler to the matching uniqueId — historically each
     engine had its own toggle function (gsToggleReveal /
     toggleReveal). Pass the handler name in as toggleFn. */
  function revealHTML(slide, uniqueId, toggleFn) {
    if (!slide || !slide.reveal) return '';
    var label = slide.revealLabel || '💡 Click to reveal answer';
    var fn = toggleFn || 'toggleReveal';
    return '<button class="slide-reveal-btn" id="' + uniqueId + '_btn" onclick="' + fn + '(\'' + uniqueId + '\')">' + label + '</button>' +
           '<div class="slide-reveal" id="' + uniqueId + '" style="display:none">' + slide.reveal + '</div>';
  }

  /* Render a 'Sources' list under a slide. Accepts slide.sources
     as an array of either strings or { label, url } objects.
     Identical across engines; this is the canonical version. */
  function sourcesHTML(slide) {
    if (!slide || !slide.sources || !slide.sources.length) return '';
    var items = slide.sources.map(function (s) {
      if (typeof s === 'string') return '<li>' + s + '</li>';
      if (s && s.url) return '<li><a href="' + s.url + '" target="_blank" rel="noopener">' + (s.label || s.url) + '</a></li>';
      return '<li>' + ((s && s.label) || '') + '</li>';
    }).join('');
    return '<div class="slide-sources"><span class="slide-sources-label">Sources</span><ul>' + items + '</ul></div>';
  }

  /* Default reveal toggle — engines that adopt this module can
     replace their per-track gsToggleReveal / flToggleReveal with
     this generic version. */
  function toggleReveal(id) {
    var el = document.getElementById(id);
    var btn = document.getElementById(id + '_btn');
    if (!el) return;
    if (el.style.display === 'none') {
      el.style.display = 'block';
      if (btn) btn.classList.add('revealed');
    } else {
      el.style.display = 'none';
      if (btn) btn.classList.remove('revealed');
    }
  }

  /* Fullscreen helper for the lesson viewer.
     Wraps the standard Fullscreen API plus the older webkit-prefixed
     variant so we keep working on Safari. Targets a single element
     (the modal shell) — the browser handles ESC to exit, and we wire
     up `change` so callers can keep button state in sync. */
  function fsElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || null;
  }
  function fsRequest(el) {
    if (!el) return;
    var fn = el.requestFullscreen || el.webkitRequestFullscreen;
    if (fn) {
      try { fn.call(el); } catch (_) { /* user-gesture required, etc. */ }
    }
  }
  function fsExit() {
    var fn = document.exitFullscreen || document.webkitExitFullscreen;
    if (fn) { try { fn.call(document); } catch (_) {} }
  }
  function fsToggle(el) {
    if (fsElement()) { fsExit(); } else { fsRequest(el); }
  }
  function fsIsActive() { return !!fsElement(); }
  function fsOnChange(cb) {
    document.addEventListener('fullscreenchange', cb);
    document.addEventListener('webkitfullscreenchange', cb);
  }

  /* Mirror fullscreen state onto the element as an `is-fullscreen`
     class. CSS targets that single class instead of duplicating every
     rule for :fullscreen and :-webkit-full-screen selector lists. */
  var fsLastEl = null;
  function fsSyncClass() {
    var el = fsElement();
    if (fsLastEl && fsLastEl !== el) fsLastEl.classList.remove('is-fullscreen');
    if (el) el.classList.add('is-fullscreen');
    fsLastEl = el;
  }
  fsOnChange(fsSyncClass);

  /* ── Micro-celebration ─────────────────────────────
     Emoji burst from an element (e.g. a correct quiz answer).
     `streak` (optional) escalates it: 3+ in a row doubles the
     particles and shows a "🔥 N in a row!" chip. Skipped entirely
     under prefers-reduced-motion; everything cleans itself up. */
  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  function celebrate(el, streak) {
    try {
      if (!el || reducedMotion()) return;
      var r = el.getBoundingClientRect();
      var cx = r.left + Math.min(r.width, 140) / 2;
      var cy = r.top + r.height / 2;
      var hot = (streak || 0) >= 3;
      var glyphs = hot ? ['🔥', '✨', '🎉', '⭐', '💥', '🌟'] : ['✨', '🎉', '⭐', '💥', '✦', '🌟'];
      var count = hot ? 22 : 12;
      for (var i = 0; i < count; i++) {
        var s = document.createElement('span');
        s.className = 'di-burst';
        s.textContent = glyphs[i % glyphs.length];
        var ang = (Math.PI * 2 * i) / count + Math.random() * 0.5;
        var dist = (hot ? 60 : 44) + Math.random() * 52;
        s.style.left = cx + 'px';
        s.style.top = cy + 'px';
        s.style.fontSize = (11 + Math.random() * 10) + 'px';
        s.style.setProperty('--dx', (Math.cos(ang) * dist) + 'px');
        s.style.setProperty('--dy', (Math.sin(ang) * dist - 34) + 'px');
        document.body.appendChild(s);
        setTimeout((function (n) { return function () { if (n.parentNode) n.parentNode.removeChild(n); }; })(s), 900);
      }
      if (hot) {
        var chip = document.createElement('div');
        chip.className = 'di-streak-chip';
        chip.textContent = '🔥 ' + streak + ' in a row!';
        chip.style.left = cx + 'px';
        chip.style.top = (r.top - 14) + 'px';
        document.body.appendChild(chip);
        setTimeout(function () { if (chip.parentNode) chip.parentNode.removeChild(chip); }, 1500);
      }
    } catch (_) { /* purely decorative — never break the quiz */ }
  }

  /* ── Stat count-up ─────────────────────────────────
     Animates numbers inside hook-stat elements from 0 to their
     value ("300M" counts 0→300, "$1T+" keeps its prefix/suffix).
     Non-numeric stats are left alone. */
  function countUp(container) {
    try {
      if (reducedMotion()) return;
      var els = (container || document).querySelectorAll('.hook-stat-value, .hook-stat-mini .sv');
      Array.prototype.forEach.call(els, function (el) {
        var m = el.textContent.trim().match(/^([^0-9]*)([\d,]+(?:\.\d+)?)(.*)$/);
        if (!m) return;
        var prefix = m[1], suffix = m[3];
        var target = parseFloat(m[2].replace(/,/g, ''));
        if (!isFinite(target) || target <= 0) return;
        var decimals = (m[2].split('.')[1] || '').length;
        var useCommas = m[2].indexOf(',') !== -1;
        var t0 = null, DUR = 900;
        function fmt(v) {
          var s = v.toFixed(decimals);
          if (useCommas) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          return prefix + s + suffix;
        }
        function step(ts) {
          if (t0 === null) t0 = ts;
          var p = Math.min((ts - t0) / DUR, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(target * eased);
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    } catch (_) {}
  }

  /* ── End-of-lesson results card ────────────────────
     Shared markup for the "lesson complete" screen. Engines supply
     the stats and wire #diResultsPrimary / #diResultsSecondary. */
  function resultsHTML(o) {
    o = o || {};
    var stats = (o.stats || []).map(function (s) {
      return '<div class="di-rs-stat"><div class="di-rs-num">' + s.num + '</div><div class="di-rs-label">' + s.label + '</div></div>';
    }).join('');
    return '<div class="di-results">' +
      '<div class="di-results-emoji">' + (o.emoji || '🎉') + '</div>' +
      '<div class="di-results-title">' + (o.title || 'Lesson complete!') + '</div>' +
      (o.sub ? '<div class="di-results-sub">' + o.sub + '</div>' : '') +
      (stats ? '<div class="di-results-stats">' + stats + '</div>' : '') +
      '<div class="di-results-actions">' +
        (o.primaryLabel ? '<button class="btn btn-primary di-results-primary" id="diResultsPrimary">' + o.primaryLabel + '</button>' : '') +
        (o.secondaryLabel ? '<button class="btn btn-secondary" id="diResultsSecondary">' + o.secondaryLabel + '</button>' : '') +
      '</div>' +
    '</div>';
  }

  /* ── Quiz answer-position shuffler ──────────────────────
     The hand-authored decks place the correct answer at B/C far too
     often, which makes quizzes guessable. This deterministically
     reshuffles each quiz / unit-test question's options (seeded per
     question, so the order is stable across reloads) and remaps the
     `correct` index. It runs once per slide map, at load time.

     Safety net: any question whose explanation refers to an option by
     POSITION ("Option B", "the first answer", "(D) is…") is skipped, so
     no explanation can ever point at the wrong choice. De-referencing
     such an explanation automatically opts the question into shuffling. */
  var POSITION_REF = /\bOptions?\s+[A-D]\b|\boption\s+[A-D]\b|\b(first|second|third|fourth)\s+(option|answer|prompt|choice)\b|\banswer\s+[A-D]\b|\([A-D]\)/i;

  function quizHashSeed(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function shuffleOneQuestion(q) {
    if (!q || q._shuffled) return;
    if (!Array.isArray(q.options) || q.options.length < 2) return;
    if (typeof q.correct !== 'number' || q.correct < 0 || q.correct >= q.options.length) return;
    if (POSITION_REF.test(String(q.explanation || ''))) { q._shuffled = true; return; }
    var n = q.options.length;
    var seed = quizHashSeed(String(q.question || q.q || '') + '::' + q.options.join('|'));
    var rand = function () {
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    var order = []; for (var i = 0; i < n; i++) order.push(i);
    for (var j = n - 1; j > 0; j--) { var k = Math.floor(rand() * (j + 1)); var tmp = order[j]; order[j] = order[k]; order[k] = tmp; }
    if (order.every(function (v, idx) { return v === idx; })) { order.push(order.shift()); } // never leave it identical
    var originalCorrect = q.correct;
    q.options = order.map(function (i) { return q.options[i]; });
    q.correct = order.indexOf(originalCorrect);
    q._shuffled = true;
  }
  function shuffleQuizzes(slideMap) {
    if (!slideMap || typeof slideMap !== 'object') return;
    Object.keys(slideMap).forEach(function (key) {
      var arr = slideMap[key];
      if (!Array.isArray(arr)) return;
      arr.forEach(function (slide) {
        if (!slide) return;
        if (slide.type === 'quiz') shuffleOneQuestion(slide);
        else if (slide.type === 'unit-test' && Array.isArray(slide.questions)) slide.questions.forEach(shuffleOneQuestion);
      });
    });
  }

  window.diSlide = {
    shuffleQuizzes: shuffleQuizzes,
    escape: escape,
    youtubeEmbed: youtubeEmbed,
    revealHTML: revealHTML,
    sourcesHTML: sourcesHTML,
    toggleReveal: toggleReveal,
    celebrate: celebrate,
    countUp: countUp,
    resultsHTML: resultsHTML,
    fullscreen: {
      toggle: fsToggle,
      exit: fsExit,
      isActive: fsIsActive,
      onChange: fsOnChange
    }
  };
})();

/* ── Modal focus trap ─────────────────────────────────
   Keeps Tab / Shift+Tab inside whichever overlay is open, instead of
   letting keyboard focus wander into the page behind the dialog.
   Applies across all engines via shared overlay class names. */
(function () {
  var OPEN_SEL = '.modal.open, .qq-modal.open, .kb-overlay.open, .ob-overlay.open, .shortcuts-overlay.open';
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var openers = Array.prototype.filter.call(document.querySelectorAll(OPEN_SEL), function (m) {
      return getComputedStyle(m).display !== 'none'; // .open class can linger on hidden overlays
    });
    if (!openers.length) return;
    var modal = openers[openers.length - 1]; // topmost overlay
    var nodes = modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
    var focusable = Array.prototype.filter.call(nodes, function (el) {
      return el.offsetParent !== null;
    });
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    var inside = modal.contains(document.activeElement);
    if (e.shiftKey) {
      if (!inside || document.activeElement === first) { last.focus(); e.preventDefault(); }
    } else {
      if (!inside || document.activeElement === last) { first.focus(); e.preventDefault(); }
    }
  });
})();

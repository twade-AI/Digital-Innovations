/* ── Text-to-speech widget ───────────────────────────────
   Self-attaching: watches for the lesson modal on AEP (.modal#lessonModal),
   Removes (#gsModal) and Fluency (#flModal). When open, injects a
   floating Play / Stop button into the modal body. Clicking speaks the
   current slide's visible text using the browser's Web Speech API.

   Natural-sounding setup:
     - Voice ranking prefers neural/natural voices (Edge "… Online
       (Natural)"), then Google's online voices, then Apple enhanced —
       en-GB first. The first en-GB match used to win, which on most
       Windows machines is the old robotic SAPI voice.
     - Text is spoken in sentence-sized chunks with short pauses
       between title, body and bullets — long single utterances read
       flat AND hit Chrome's ~15s speech stall bug.
     - Emojis are stripped and common abbreviations expanded before
       speaking ("e.g." → "for example").
     - A ▾ menu beside Listen lets pupils pick a voice and speed
       (persisted in localStorage).

   Silent when:
     - The page has no speechSynthesis support.
     - The user has dismissed the widget for the session.

   No engine changes are required — this script hooks attributes on the
   modal and runs independently. */

(function () {
  if (!('speechSynthesis' in window)) return;

  var MODAL_IDS = ['lessonModal', 'gsModal', 'flModal'];
  var VOICE_KEY = 'di_tts_voice';
  var RATE_KEY  = 'di_tts_rate';

  /* ── Voice handling ──────────────────────────────── */
  var _voices = [];
  function refreshVoices() { try { _voices = window.speechSynthesis.getVoices() || []; } catch (e) { _voices = []; } }
  refreshVoices();
  try { window.speechSynthesis.addEventListener('voiceschanged', refreshVoices); } catch (e) {}

  function englishVoices() {
    return _voices.filter(function (v) { return v.lang && v.lang.toLowerCase().indexOf('en') === 0; });
  }

  /* Higher score = more natural. Neural voices (Edge exposes its
     "Online (Natural)" set through speechSynthesis) sound dramatically
     better than the local SAPI/espeak defaults. */
  function voiceScore(v) {
    var s = 0;
    var n = (v.name || '').toLowerCase();
    var l = (v.lang || '').toLowerCase();
    if (/natural|neural/.test(n)) s += 8;
    if (/google/.test(n)) s += 5;
    if (/premium|enhanced|siri/.test(n)) s += 4;
    if (l.indexOf('en-gb') === 0) s += 3;
    else if (l.indexOf('en') === 0) s += 1;
    if (v.localService === false) s += 1; // cloud voices generally richer
    if (/espeak|compact/.test(n)) s -= 4;
    return s;
  }

  function rankedVoices() {
    return englishVoices().slice().sort(function (a, b) { return voiceScore(b) - voiceScore(a); });
  }

  function pickVoice() {
    refreshVoices();
    var saved = null;
    try { saved = localStorage.getItem(VOICE_KEY); } catch (e) {}
    if (saved) {
      var match = _voices.find(function (v) { return v.name === saved; });
      if (match) return match;
    }
    var ranked = rankedVoices();
    return ranked.length ? ranked[0] : null;
  }

  function getRate() {
    try { var r = parseFloat(localStorage.getItem(RATE_KEY)); if (r >= 0.5 && r <= 1.5) return r; } catch (e) {}
    return 1.0;
  }

  /* ── Text preparation ────────────────────────────── */
  function cleanText(t) {
    return (t || '')
      // Strip emoji / pictographs / dingbats — engines read them oddly
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]/gu, ' ')
      .replace(/\be\.g\.\s*/gi, 'for example, ')
      .replace(/\bi\.e\.\s*/gi, 'that is, ')
      .replace(/\bvs\.?\s+/gi, 'versus ')
      .replace(/\betc\.(\s|$)/gi, 'et cetera$1')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/[—–]/g, ', ')   // dashes read better as a brief pause
      .replace(/[•▸✓✗→←·]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /* Split a block into sentence-sized chunks (~220 chars max) so each
     utterance gets its own intonation contour and Chrome never stalls. */
  function splitSentences(t) {
    var out = [];
    var sentences = t.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g) || [t];
    var buf = '';
    sentences.forEach(function (s) {
      s = s.trim();
      if (!s) return;
      if ((buf + ' ' + s).length > 220 && buf) { out.push(buf); buf = s; }
      else buf = buf ? buf + ' ' + s : s;
    });
    if (buf) out.push(buf);
    return out;
  }

  // Collect visible text from the slide container in document order.
  // Title + body + bullets, but NOT quiz answer buttons, progress bars,
  // footers, notes etc. Returns [{text, isTitle}].
  var SPEAK_SEL = [
    '.slide-title', '.slide-badge',
    '.hook-body', '.slide-body', '.concept-body',
    '.concept-bullets li', '.slide-bullets li', '.slide-steps li', '.act-step',
    '.concept-callout', '.slide-callout', '.example-box p', '.slide-reveal',
    '.scenario-situation', '.scenario-question', '.slide-situation', '.scenario-outcome',
    '.disc-intro', '.disc-q-text', '.sdq-text', '.slide-disc-q',
    '.summary-intro', '.sp-text', '.quiz-question', '.checklist-intro',
    '.reflection-prompt', '.cl-item-text', '.quiz-explanation',
    '.di-results-title', '.di-results-sub'
  ].join(',');

  function extractParts(root) {
    if (!root) return [];
    var parts = [];
    root.querySelectorAll(SPEAK_SEL).forEach(function (el) {
      // Skip hidden elements (e.g. unrevealed answers / explanations)
      if (el.offsetParent === null) return;
      var t = cleanText(el.innerText || el.textContent || '');
      if (!t || t.length < 2) return;
      parts.push({ text: t, isTitle: el.classList.contains('slide-title') });
    });
    // Fallback for custom layouts: whole root minus interactive chrome.
    if (!parts.length) {
      var clone = root.cloneNode(true);
      clone.querySelectorAll('button, textarea, input, script, .slide-notes, .lv-footer, .modal-footer, .lv-progress').forEach(function (el) { el.remove(); });
      var t = cleanText(clone.innerText || clone.textContent || '');
      if (t) parts.push({ text: t, isTitle: false });
    }
    return parts;
  }

  /* ── Modal plumbing ──────────────────────────────── */
  function findOpenModal() {
    for (var i = 0; i < MODAL_IDS.length; i++) {
      var m = document.getElementById(MODAL_IDS[i]);
      if (m && m.classList.contains('open')) return m;
    }
    return null;
  }

  function findSlideRoot(modal) {
    if (!modal) return null;
    return modal.querySelector('.slide-area, #lvSlideArea, #gsSlideArea, #slideArea, .modal-body') || modal;
  }

  /* ── Speech queue ────────────────────────────────────
     Chunks are chained via onend with small gaps: ~140ms between
     sentences, ~420ms after the title and between blocks. A session
     token makes cancellation race-free. */
  var _session = 0;

  function stopSpeak() {
    _session++;
    try { window.speechSynthesis.cancel(); } catch (e) {}
    document.querySelectorAll('.di-tts-btn').forEach(function (b) {
      b.classList.remove('di-tts-playing');
      var lbl = b.querySelector('.di-tts-label');
      if (lbl) lbl.textContent = 'Listen';
      var ic = b.querySelector('.di-tts-icon');
      if (ic) ic.textContent = '🔊';
    });
  }

  function speakParts(parts, onDone) {
    var token = ++_session;
    var voice = pickVoice();
    var rate = getRate();
    // Build the chunk list: sentences + the pause that should follow each
    var chunks = [];
    parts.forEach(function (p) {
      var ss = splitSentences(p.text);
      ss.forEach(function (s, i) {
        chunks.push({
          text: s,
          rate: p.isTitle ? Math.max(0.5, rate - 0.05) : rate, // titles a touch slower
          gapAfter: (i === ss.length - 1) ? (p.isTitle ? 420 : 300) : 140
        });
      });
    });
    var idx = 0;
    function next() {
      if (token !== _session) return;          // cancelled
      if (idx >= chunks.length) { onDone(); return; }
      var c = chunks[idx++];
      var u = new SpeechSynthesisUtterance(c.text);
      u.rate = c.rate;
      u.pitch = 1.0;
      if (voice) { u.voice = voice; u.lang = voice.lang; }
      u.onend = function () {
        if (token !== _session) return;
        setTimeout(next, c.gapAfter);
      };
      u.onerror = function () { if (token === _session) setTimeout(next, 50); };
      try { window.speechSynthesis.speak(u); } catch (e) { onDone(); }
    }
    next();
  }

  function toggleSpeak() {
    var btn = this;
    if (btn.classList.contains('di-tts-playing')) { stopSpeak(); return; }
    var modal = findOpenModal();
    var root = findSlideRoot(modal);
    var parts = extractParts(root);
    if (!parts.length) return;
    stopSpeak();
    btn.classList.add('di-tts-playing');
    var lbl = btn.querySelector('.di-tts-label');
    if (lbl) lbl.textContent = 'Stop';
    var ic = btn.querySelector('.di-tts-icon');
    if (ic) ic.textContent = '⏹';
    speakParts(parts, stopSpeak);
  }

  /* ── Voice / speed menu ──────────────────────────── */
  function buildMenu(wrap) {
    var menu = document.createElement('div');
    menu.className = 'di-tts-menu';
    menu.style.cssText = 'position:absolute;bottom:calc(100% + 8px);left:0;z-index:50;' +
      'background:var(--bg-card);border:1px solid var(--border);border-radius:12px;' +
      'box-shadow:0 12px 32px rgba(0,0,0,.35);padding:12px 14px;min-width:240px;display:none;text-align:left';

    var ranked = rankedVoices().slice(0, 8);
    var savedVoice = null, savedRate = getRate();
    try { savedVoice = localStorage.getItem(VOICE_KEY); } catch (e) {}

    var html = '<div style="font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--text-dim);margin-bottom:6px">Voice</div>';
    html += '<select class="di-tts-voice" style="width:100%;padding:7px 10px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text);font-size:.82rem;font-family:inherit">';
    html += '<option value="">Auto (best available)</option>';
    ranked.forEach(function (v) {
      var sel = v.name === savedVoice ? ' selected' : '';
      html += '<option value="' + v.name.replace(/"/g, '&quot;') + '"' + sel + '>' + v.name + '</option>';
    });
    html += '</select>';
    html += '<div style="font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--text-dim);margin:12px 0 6px">Speed</div>';
    html += '<div style="display:flex;gap:6px">';
    [['0.85', 'Slower'], ['1', 'Normal'], ['1.15', 'Faster']].forEach(function (r) {
      var active = Math.abs(parseFloat(r[0]) - savedRate) < 0.01;
      html += '<button type="button" class="di-tts-rate" data-rate="' + r[0] + '" style="flex:1;padding:6px 0;border-radius:8px;font-size:.78rem;font-weight:600;cursor:pointer;border:1px solid ' +
        (active ? 'var(--primary);background:rgba(155,24,68,.15);color:var(--text)' : 'var(--border);background:var(--bg);color:var(--text-muted)') + '">' + r[1] + '</button>';
    });
    html += '</div>';
    html += '<div style="font-size:.7rem;color:var(--text-dim);margin-top:10px;line-height:1.4">Tip: Microsoft Edge and Chrome have the most natural voices.</div>';
    menu.innerHTML = html;

    menu.querySelector('.di-tts-voice').addEventListener('change', function () {
      try { this.value ? localStorage.setItem(VOICE_KEY, this.value) : localStorage.removeItem(VOICE_KEY); } catch (e) {}
      stopSpeak();
    });
    menu.querySelectorAll('.di-tts-rate').forEach(function (b) {
      b.addEventListener('click', function () {
        try { localStorage.setItem(RATE_KEY, this.dataset.rate); } catch (e) {}
        menu.querySelectorAll('.di-tts-rate').forEach(function (o) {
          o.style.border = '1px solid var(--border)'; o.style.background = 'var(--bg)'; o.style.color = 'var(--text-muted)';
        });
        this.style.border = '1px solid var(--primary)'; this.style.background = 'rgba(155,24,68,.15)'; this.style.color = 'var(--text)';
        stopSpeak();
      });
    });
    wrap.appendChild(menu);
    return menu;
  }

  function injectButton(modal) {
    if (!modal) return;
    if (modal.querySelector('.di-tts-btn')) return; // already present
    var footer = modal.querySelector('.lv-footer, .modal-footer');
    if (!footer) return;

    var wrap = document.createElement('div');
    wrap.className = 'di-tts-wrap';
    wrap.style.cssText = 'position:relative;display:flex;align-items:center;gap:2px';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-ghost btn-sm di-tts-btn';
    btn.setAttribute('aria-label', 'Read this slide aloud');
    btn.title = 'Read this slide aloud (Shift+L)';
    btn.innerHTML = '<span class="di-tts-icon">🔊</span><span class="di-tts-label">Listen</span>';
    btn.addEventListener('click', toggleSpeak);
    wrap.appendChild(btn);

    var gear = document.createElement('button');
    gear.type = 'button';
    gear.className = 'btn btn-ghost btn-sm di-tts-gear';
    gear.setAttribute('aria-label', 'Voice settings');
    gear.title = 'Voice & speed';
    gear.textContent = '▾';
    gear.style.padding = '6px 8px';
    var menu = null;
    gear.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!menu) menu = buildMenu(wrap);
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });
    document.addEventListener('click', function (e) {
      if (menu && menu.style.display !== 'none' && !wrap.contains(e.target)) menu.style.display = 'none';
    });
    wrap.appendChild(gear);

    // Insert at the start of the footer so the Next button stays on the right.
    footer.insertBefore(wrap, footer.firstChild);
  }

  // Watch only the three lesson-modal elements directly for 'class'
  // attribute flips (e.g. the 'open' toggle when a lesson starts /
  // closes). Watching document.body with subtree:true would fire on
  // every hover, every quiz click, every dot update — enough to tie
  // up the main thread under load. Scoped observers are cheap.
  function watch() {
    var handler = function () {
      var modal = findOpenModal();
      if (modal) injectButton(modal);
      else stopSpeak(); // modal closed — stop any audio mid-sentence
    };
    MODAL_IDS.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var mo = new MutationObserver(handler);
      mo.observe(el, { attributes: true, attributeFilter: ['class'] });
    });
  }

  // Keyboard shortcut: Shift+L toggles within any open modal.
  document.addEventListener('keydown', function (e) {
    if (!e.shiftKey || e.key !== 'L') return;
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
    var modal = findOpenModal();
    if (!modal) return;
    var btn = modal.querySelector('.di-tts-btn');
    if (btn) btn.click();
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch);
  else watch();
})();

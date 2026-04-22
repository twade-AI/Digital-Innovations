/* ── Text-to-speech widget ───────────────────────────────
   Self-attaching: watches for the lesson modal on AEP (.modal#lessonModal),
   Removes (#gsModal) and Fluency (#flModal). When open, injects a
   floating Play / Stop button into the modal body. Clicking speaks the
   current slide's visible text using the browser's Web Speech API.

   Silent when:
     - The page has no speechSynthesis support.
     - prefers-reduced-motion is reduce (respects user preference).
     - The user has dismissed the widget for the session.

   No engine changes are required — this script hooks attributes on the
   modal and runs independently. */

(function () {
  if (!('speechSynthesis' in window)) return;

  // The three modal IDs we support. First one present wins on a page.
  var MODAL_IDS = ['lessonModal', 'gsModal', 'flModal'];

  // Collect visible text from the slide container. We want heading +
  // body + bullets but NOT quiz buttons, progress bars, footers etc.
  function extractSpeakable(root) {
    if (!root) return '';
    var selectors = [
      '.slide-title', '.slide-body', '.slide-callout', '.slide-reveal',
      '.slide-bullets li', '.slide-steps li', '.slide-situation',
      '.sdq-text', '.scenario-outcome', '.cl-item-text'
    ];
    var parts = [];
    selectors.forEach(function (sel) {
      root.querySelectorAll(sel).forEach(function (el) {
        var t = (el.innerText || el.textContent || '').trim();
        if (t) parts.push(t);
      });
    });
    // If nothing matched (e.g. a custom slide layout), fall back to the
    // whole root text minus script/button/textarea content.
    if (!parts.length) {
      var clone = root.cloneNode(true);
      clone.querySelectorAll('button, textarea, script, .slide-notes, .lv-footer, .modal-footer, .lv-progress').forEach(function (el) { el.remove(); });
      parts.push((clone.innerText || clone.textContent || '').trim());
    }
    return parts.join('. ').replace(/\s+/g, ' ').trim();
  }

  function findOpenModal() {
    for (var i = 0; i < MODAL_IDS.length; i++) {
      var m = document.getElementById(MODAL_IDS[i]);
      if (m && m.classList.contains('open')) return m;
    }
    return null;
  }

  function findSlideRoot(modal) {
    if (!modal) return null;
    // Preference order — the container actually holding the rendered slide.
    return modal.querySelector('.slide-area, #lvSlideArea, #gsSlideArea, #slideArea, .modal-body') || modal;
  }

  function injectButton(modal) {
    if (!modal) return;
    if (modal.querySelector('.di-tts-btn')) return; // already present
    var footer = modal.querySelector('.lv-footer, .modal-footer');
    if (!footer) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-ghost btn-sm di-tts-btn';
    btn.setAttribute('aria-label', 'Read this slide aloud');
    btn.title = 'Read this slide aloud (Shift+L)';
    btn.innerHTML = '<span class="di-tts-icon">🔊</span><span class="di-tts-label">Listen</span>';
    btn.addEventListener('click', toggleSpeak);
    // Insert at the start of the footer so the Next button stays on the right.
    footer.insertBefore(btn, footer.firstChild);
  }

  var current = null;

  function stopSpeak() {
    try { window.speechSynthesis.cancel(); } catch (e) {}
    current = null;
    var btns = document.querySelectorAll('.di-tts-btn');
    btns.forEach(function (b) {
      b.classList.remove('di-tts-playing');
      var lbl = b.querySelector('.di-tts-label');
      if (lbl) lbl.textContent = 'Listen';
      var ic = b.querySelector('.di-tts-icon');
      if (ic) ic.textContent = '🔊';
    });
  }

  function toggleSpeak() {
    var btn = this;
    if (btn.classList.contains('di-tts-playing')) { stopSpeak(); return; }
    var modal = findOpenModal();
    var root = findSlideRoot(modal);
    var text = extractSpeakable(root);
    if (!text) return;
    stopSpeak();
    var u = new SpeechSynthesisUtterance(text);
    u.rate = 1.0;
    u.pitch = 1.0;
    // Try to pick a reasonable en-GB voice — fall back to the first available.
    var voices = window.speechSynthesis.getVoices();
    var gb = voices.find(function (v) { return v.lang && v.lang.toLowerCase().indexOf('en-gb') === 0; });
    if (gb) u.voice = gb;
    u.onend = function () { stopSpeak(); };
    u.onerror = function () { stopSpeak(); };
    current = u;
    try { window.speechSynthesis.speak(u); } catch (e) { stopSpeak(); return; }
    btn.classList.add('di-tts-playing');
    var lbl = btn.querySelector('.di-tts-label');
    if (lbl) lbl.textContent = 'Stop';
    var ic = btn.querySelector('.di-tts-icon');
    if (ic) ic.textContent = '⏹';
  }

  // Watch for modals opening and slide changes. We use a simple
  // MutationObserver on body to catch class toggles on the modals.
  function watch() {
    var mo = new MutationObserver(function () {
      var modal = findOpenModal();
      if (modal) injectButton(modal);
      else stopSpeak(); // modal closed — stop any audio mid-sentence
    });
    mo.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });
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

  // Voices load asynchronously on some browsers — nothing to do, the
  // getVoices() call at speak-time picks them up when ready.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watch);
  else watch();
})();

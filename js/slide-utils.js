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

  window.diSlide = {
    escape: escape,
    youtubeEmbed: youtubeEmbed,
    revealHTML: revealHTML,
    sourcesHTML: sourcesHTML,
    toggleReveal: toggleReveal
  };
})();

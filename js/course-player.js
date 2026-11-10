  /* ── AI and Digital Innovation Removes — track engine ── */
  var GS_CONFIG = window.DI_COURSE_PLAYER || {};
  var GS_KEY = GS_CONFIG.progressKey || 'di_gcse_v1';
  var GS_XP_AWARDED_KEY = GS_CONFIG.awardedKey || 'di_gcse_xp_awarded_v1';
  var gsDone = new Set();
  var gsCurrentId = null;
  var gsSlideIdx = 0;
  var gsSlides = [];

  /* ── Shared XP system (mirrors js/app.js so lessons here count too) ── */
  var GS_XP_KEY = GS_CONFIG.xpKey || 'di_xp';
  function gsLoadXP(){ try { return JSON.parse(localStorage.getItem(GS_XP_KEY)) || { total: 0 }; } catch(e){ return { total: 0 }; } }
  function gsSaveXP(d){ try { localStorage.setItem(GS_XP_KEY, JSON.stringify(d)); } catch(e){} }
  function gsAddXP(amount, reason){
    var d = gsLoadXP();
    d.total = (d.total || 0) + amount;
    gsSaveXP(d);
    gsShowXPToast('+' + amount + ' XP — ' + reason);
  }
  function gsShowXPToast(msg){
    var el = document.createElement('div');
    el.className = 'xp-toast';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(function(){ el.classList.add('show'); });
    setTimeout(function(){ el.classList.remove('show'); setTimeout(function(){ el.remove(); }, 400); }, 2200);
  }
  function gsLoadAwarded(){ try { return new Set(JSON.parse(localStorage.getItem(GS_XP_AWARDED_KEY)) || []); } catch(e){ return new Set(); } }
  function gsSaveAwarded(s){ try { localStorage.setItem(GS_XP_AWARDED_KEY, JSON.stringify([].concat.apply([], [Array.from(s)]))); } catch(e){} }
  var gsAwarded = gsLoadAwarded();
  function gsAwardOnce(key, amount, reason){
    if (gsAwarded.has(key)) return;
    gsAwarded.add(key);
    gsSaveAwarded(gsAwarded);
    gsAddXP(amount, reason);
  }

  function gsLoadProgress() {
    try { gsDone = new Set(JSON.parse(localStorage.getItem(GS_KEY)) || []); } catch(e) { gsDone = new Set(); }
  }
  function gsSaveProgress() {
    localStorage.setItem(GS_KEY, JSON.stringify([...gsDone]));
  }
  /* Per-lesson completion dates — used by the spaced-review panel.
     Keyed id → ISO date string. Set on first completion only. */
  var GS_DATES_KEY = GS_CONFIG.datesKey || 'di_gcse_completed_at';
  function gsLoadDates() { try { return JSON.parse(localStorage.getItem(GS_DATES_KEY)) || {}; } catch(e) { return {}; } }
  function gsSaveDates(d) { try { localStorage.setItem(GS_DATES_KEY, JSON.stringify(d)); } catch(e){} }
  function gsMarkDone(id) {
    var wasDone = gsDone.has(id);
    gsDone.add(id);
    gsSaveProgress();
    if (!wasDone) {
      var dates = gsLoadDates();
      if (!dates[id]) { dates[id] = new Date().toISOString().slice(0,10); gsSaveDates(dates); }
    }
    gsRenderTrack();
    gsUpdateProgress();
    gsRenderReviewPanel();
    if (!wasDone) gsAwardOnce('lesson:'+id, 20, 'Lesson completed');
    var total = GCSE_UNITS.reduce(function(s,u){return s+u.lessons.length;},0);
    if (gsDone.size === total) gsShowComplete();
  }

  function gsGetLesson(id) {
    for (var i=0;i<GCSE_UNITS.length;i++) {
      for (var j=0;j<GCSE_UNITS[i].lessons.length;j++) {
        if (GCSE_UNITS[i].lessons[j].id===id) return {lesson:GCSE_UNITS[i].lessons[j],unit:GCSE_UNITS[i]};
      }
    }
    return null;
  }

  /* ── Spaced-review panel ────────────────────────────────
     Pulls 3 quiz-type slides from lessons the pupil finished
     at least 3 days ago, presents them sequentially, and
     rewards 5 XP per correct answer. Resets once per UTC day
     so a pupil only sees the panel once per day. */
  var GS_REVIEW_DAY_KEY = GS_CONFIG.reviewKey || 'di_gcse_review_shown_at';
  var gsReviewQueue = [];
  var gsReviewIdx = 0;
  var gsReviewScore = 0;

  function gsTodayStr() { return new Date().toISOString().slice(0,10); }

  function gsFindQuizSlide(lessonId) {
    var slides = (typeof SLIDES_GCSE !== 'undefined' && SLIDES_GCSE[lessonId]) || [];
    var quizzes = [];
    for (var i = 0; i < slides.length; i++) {
      if (slides[i] && slides[i].type === 'quiz' && Array.isArray(slides[i].options)) quizzes.push(slides[i]);
    }
    if (!quizzes.length) return null;
    return quizzes[Math.floor(Math.random() * quizzes.length)];
  }

  function gsBuildReviewQueue() {
    var dates = gsLoadDates();
    var eligible = [];
    var now = Date.now();
    Object.keys(dates).forEach(function(id) {
      var ageDays = (now - new Date(dates[id]).getTime()) / 86400000;
      if (ageDays >= 3 && gsDone.has(parseInt(id, 10))) {
        var q = gsFindQuizSlide(parseInt(id, 10));
        if (q) eligible.push({ lessonId: parseInt(id, 10), slide: q });
      }
    });
    // Shuffle and take the first 3
    for (var i = eligible.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = eligible[i]; eligible[i] = eligible[j]; eligible[j] = tmp;
    }
    return eligible.slice(0, 3);
  }

  function gsRenderReviewPanel() {
    var panel = document.getElementById('gsReviewPanel');
    if (!panel) return;
    // Only show once per day
    var shownAt = null; try { shownAt = localStorage.getItem(GS_REVIEW_DAY_KEY); } catch(e){}
    if (shownAt === gsTodayStr()) { panel.style.display = 'none'; return; }
    gsReviewQueue = gsBuildReviewQueue();
    if (gsReviewQueue.length < 3) { panel.style.display = 'none'; return; }
    gsReviewIdx = 0;
    gsReviewScore = 0;
    panel.style.display = 'block';
    gsPaintReview();
  }

  function gsPaintReview() {
    var panel = document.getElementById('gsReviewPanel');
    if (!panel) return;
    if (gsReviewIdx >= gsReviewQueue.length) {
      // Finished — mark today's review done
      try { localStorage.setItem(GS_REVIEW_DAY_KEY, gsTodayStr()); } catch(e){}
      var pct = Math.round((gsReviewScore / gsReviewQueue.length) * 100);
      panel.innerHTML =
        '<div class="gs-review-head">' +
          '<div><div class="gs-review-title">🧠 Review complete</div>' +
            '<div class="gs-review-sub">You scored ' + gsReviewScore + ' / ' + gsReviewQueue.length + ' (' + pct + '%). Come back tomorrow for a new set.</div>' +
          '</div>' +
          '<button class="gs-review-dismiss" onclick="gsHideReview()">Close</button>' +
        '</div>';
      return;
    }
    var item = gsReviewQueue[gsReviewIdx];
    var slide = item.slide;
    var found = gsGetLesson(item.lessonId);
    var meta = (found && found.lesson) ? found.lesson.title : 'Earlier lesson';
    var opts = (slide.options || []).map(function(opt, i) {
      return '<button class="gs-review-option" data-i="' + i + '" onclick="gsReviewAnswer(' + i + ',' + slide.correct + ')">' + gsEscape(opt) + '</button>';
    }).join('');
    panel.innerHTML =
      '<div class="gs-review-head">' +
        '<div><div class="gs-review-title">🧠 Quick review · ' + (gsReviewIdx + 1) + ' of ' + gsReviewQueue.length + '</div>' +
          '<div class="gs-review-sub">Interleaved questions from lessons you finished earlier. Retrieval practice — proven to stick.</div>' +
        '</div>' +
        '<button class="gs-review-dismiss" onclick="gsHideReview()">Skip today</button>' +
      '</div>' +
      '<div class="gs-review-meta">From: ' + gsEscape(meta) + '</div>' +
      '<div class="gs-review-q">' + gsEscape(slide.question || '') + '</div>' +
      '<div class="gs-review-options" id="gsReviewOpts">' + opts + '</div>';
  }

  function gsReviewAnswer(chosen, correct) {
    var opts = document.querySelectorAll('#gsReviewOpts .gs-review-option');
    opts.forEach(function(b, i) {
      b.disabled = true;
      if (i === correct) b.classList.add('rv-correct');
      else if (i === chosen) b.classList.add('rv-wrong');
    });
    var slide = gsReviewQueue[gsReviewIdx].slide;
    var wasCorrect = chosen === correct;
    if (wasCorrect) { gsReviewScore += 1; gsAwardOnce('rev:' + gsTodayStr() + ':' + gsReviewIdx, 5, 'Review answered correctly'); }
    var fb = document.createElement('div');
    fb.className = 'gs-review-fb' + (wasCorrect ? '' : ' wrong');
    fb.innerHTML = (wasCorrect ? '✅ Correct. ' : '❌ Not quite. ') + (slide.explanation || '');
    document.getElementById('gsReviewOpts').after(fb);
    setTimeout(function() { gsReviewIdx += 1; gsPaintReview(); }, 1400);
  }

  function gsHideReview() {
    try { localStorage.setItem(GS_REVIEW_DAY_KEY, gsTodayStr()); } catch(e){}
    var panel = document.getElementById('gsReviewPanel');
    if (panel) panel.style.display = 'none';
  }

  function gsContinueCourse() {
    for (var u = 0; u < GCSE_UNITS.length; u++) {
      for (var l = 0; l < GCSE_UNITS[u].lessons.length; l++) {
        var lesson = GCSE_UNITS[u].lessons[l];
        if (!gsDone.has(lesson.id)) { gsOpenLesson(lesson.id); return; }
      }
    }
    window.location.href = 'portfolio.html?t=removes';
  }

  function gsRenderTrack() {
    var container = document.getElementById('gsTrack');
    var html = '';
    var overall = 0;
    GCSE_UNITS.forEach(function(unit, unitIndex) {
      html += '<div id="gs-unit-' + (unitIndex + 1) + '" class="gs-unit-label" data-unit-number="' + String(unitIndex+1).padStart(2,'0') + '">' + unit.title +
        (unit.ailit ? '<span class="gs-unit-domain" title="OECD/EU AILit Framework domain">' + unit.ailit + '</span>' : '') +
        '</div>';
      unit.lessons.forEach(function(lesson, li) {
        overall++;
        var done = gsDone.has(lesson.id);
        var isNext = !done && overall === (function(){
          var n=0;
          for(var i=0;i<GCSE_UNITS.length;i++){
            for(var j=0;j<GCSE_UNITS[i].lessons.length;j++){
              n++;
              if(!gsDone.has(GCSE_UNITS[i].lessons[j].id)) return n;
            }
          }
          return -1;
        })();
        if (li > 0) {
          html += '<div class="gs-connector' + (done ? ' gs-done-conn' : '') + '"></div>';
        }
        html += '<div class="gs-lesson' + (done?' gs-done':'') + (isNext?' gs-active':'') + '" role="button" tabindex="0" onkeydown="if(event.key===&quot;Enter&quot;||event.key===&quot; &quot;){event.preventDefault();gsOpenLesson(' + lesson.id + ')}" onclick="gsOpenLesson(' + lesson.id + ')">' +
          '<div class="gs-num">' + (done ? '✓' : overall) + '</div>' +
          '<div class="gs-lesson-info">' +
            '<div class="gs-lesson-title">' + lesson.icon + ' ' + lesson.title + '</div>' +
            '<div class="gs-lesson-meta">' + lesson.time + (lesson.revision?' · Updated lesson':'') + (done?' · Completed':isNext?' · Up next':'') + '</div>' +
          '</div>' +
          (done ? '<span class="gs-lesson-check">✅</span>' : '<span class="gs-lesson-arrow">→</span>') +
        '</div>';
      });
    });
    container.innerHTML = html;
    if (gsDone.size > 0) { var h=document.getElementById('gsHero'); if(h) h.style.display='none'; }
  }

  function gsUpdateProgress() {
    var total = GCSE_UNITS.reduce(function(s,u){return s+u.lessons.length;},0);
    var done = gsDone.size;
    var pct = Math.round(done/total*100);
    var fill = document.getElementById('gsProgressFill');
    var label = document.getElementById('gsProgressLabel');
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = done + ' / ' + total + ' lessons';
  }

  function gsShowComplete() {
    var el = document.getElementById('gsComplete');
    if (el) el.classList.add('visible');
    var completedDate = localStorage.getItem('gs_completed_date') || new Date().toISOString().slice(0,10);
    var dateEl = document.getElementById('gsCertDate');
    if (dateEl) dateEl.textContent = new Date(completedDate).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
    var certId = localStorage.getItem('gs_cert_id');
    if (!certId) {
      certId = 'DI-REMOVES-' + completedDate.replace(/-/g,'') + '-' + Math.random().toString(36).slice(2,6).toUpperCase();
      localStorage.setItem('gs_cert_id', certId);
    }
    var idEl = document.getElementById('gsCertId');
    if (idEl) idEl.textContent = certId;
    var savedName = localStorage.getItem('gs_cert_name') || '';
    var inp = document.getElementById('gsCertNameInput');
    if (inp && savedName) inp.value = savedName;
    gsUpdateCertName(savedName);
    localStorage.setItem('gs_completed_date', completedDate);
  }

  /* Builds the public verification URL for this pupil's cert.
     Stateless — the URL contains everything verify.html needs. */
  function gsBuildShareURL() {
    var name = (localStorage.getItem('gs_cert_name') || '').trim();
    var date = localStorage.getItem('gs_completed_date') || new Date().toISOString().slice(0,10);
    var id   = localStorage.getItem('gs_cert_id') || '';
    if (!name || !id) return '';
    var base = window.location.href.replace(/removes\.html.*$/, '');
    return base + 'verify.html?t=removes&id=' + encodeURIComponent(id) +
           '&name=' + encodeURIComponent(name) + '&date=' + encodeURIComponent(date);
  }

  function gsShareCredential() {
    var url = gsBuildShareURL();
    if (!url) { alert('Add your name first, then you can share the credential.'); return; }
    var btn = document.getElementById('gsShareBtn');
    var done = function(msg) {
      if (btn) { var old = btn.textContent; btn.textContent = msg; setTimeout(function(){ btn.textContent = old; }, 1800); }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function(){ done('✓ Link copied'); }).catch(function(){ done('Copy failed'); });
    } else {
      var ta = document.createElement('textarea'); ta.value = url; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done('✓ Link copied'); } catch(e) { done('Copy failed'); }
      document.body.removeChild(ta);
    }
  }

  function gsUpdateCertName(val) {
    var el = document.getElementById('gsCertRecipient');
    if (el) el.textContent = val && val.trim() ? val.trim() : '—';
    if (val && val.trim()) localStorage.setItem('gs_cert_name', val.trim());
  }

  function gsOpenLesson(id) {
    var found = gsGetLesson(id);
    if (!found) return;
    if(window.DI_SITE)DI_SITE.remember(GS_CONFIG.track || ("aep"===document.body.dataset.track?"aep":"removes"), document.body.dataset.track==='aep'?Number(new URLSearchParams(location.search).get('aep')):id);
    gsCurrentId = id;
    gsSlides = SLIDES_GCSE[id] || [];
    // Interactive-lab slides (js/labs.js) splice in without mutating the deck
    if (typeof DI_LABS_INJECT === 'function') gsSlides = DI_LABS_INJECT(id, gsSlides);
    if (!gsSlides.length) return;
    gsSlideIdx = 0;
    gsSession = { quizRight: 0, quizTotal: 0, streak: 0 };
    document.getElementById('gsUnitLabel').textContent = found.unit.title;
    document.getElementById('gsLessonTitle').textContent = found.lesson.title;
    gsRenderSlide();
    document.getElementById('gsModal').classList.add('open');
    if (window.diSlide) window.diSlide.fullscreen.request(document.getElementById('gsModal'));
    document.body.style.overflow = 'hidden';
    var sa = document.getElementById('gsSlideArea');
    if (sa && !sa._swipeInit) {
      sa._swipeInit = true;
      var sx=0,sy=0;
      sa.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;sy=e.touches[0].clientY;},{passive:true});
      sa.addEventListener('touchend',function(e){
        var dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;
        if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){if(dx<0)gsNextSlide();else gsPrevSlide();}
      },{passive:true});
    }
  }

  function gsCloseLesson() {
    if (window.diSlide && window.diSlide.fullscreen.isActive()) {
      window.diSlide.fullscreen.exit();
    }
    document.getElementById('gsModal').classList.remove('open');
    document.body.style.overflow = '';
    gsCurrentId = null;
  }

  function gsToggleFullscreen() {
    if (!window.diSlide) return;
    var modal = document.getElementById('gsModal');
    if (modal) window.diSlide.fullscreen.toggle(modal);
  }

  if (window.diSlide && window.diSlide.fullscreen) {
    window.diSlide.fullscreen.onChange(function () {
      var btn = document.getElementById('gsFsBtn');
      if (!btn) return;
      var active = window.diSlide.fullscreen.isActive();
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.title = active ? 'Exit fullscreen' : 'Fullscreen (for projecting in class)';
    });
  }

  function gsRenderSlide() {
    var nb = document.getElementById('gsNextBtn');
    if (nb) nb.style.visibility = 'visible';
    try {
      gsRenderSlideInner();
    } catch (err) {
      console.error('[Removes] gsRenderSlide failed on slide', gsSlideIdx, 'of lesson', gsCurrentId, err);
      var area = document.getElementById('gsSlideArea');
      if (area) {
        area.innerHTML = '<div class="slide-concept" style="padding:20px"><div class="slide-title">Slide failed to render</div><div class="slide-body" style="color:var(--text-dim)">Something went wrong rendering this slide. Open DevTools → Console and share the red error message — it will point at the exact cause.<br><br><code style="font-size:.82rem">' + (err && err.message ? String(err.message).replace(/</g,'&lt;') : 'unknown error') + '</code></div></div>';
      }
    }
  }
  function gsRenderSlideInner() {
    var slide = gsSlides[gsSlideIdx];
    var total = gsSlides.length;
    var fill = document.getElementById('gsLvFill');
    if (fill) fill.style.width = ((gsSlideIdx+1)/total*100)+'%';
    var dotsEl = document.getElementById('gsDots');
    if (dotsEl) dotsEl.innerHTML = gsSlides.map(function(s,i){
      return '<button class="lv-dot'+(i===gsSlideIdx?' active':'')+'" onclick="gsJumpSlide('+i+')" title="Slide '+(i+1)+'" aria-label="Go to slide '+(i+1)+'" '+(i===gsSlideIdx?'aria-current="step"':'')+'></button>';
    }).join('');
    var countEl = document.getElementById('gsSlideCount');
    if (countEl) countEl.textContent = (gsSlideIdx+1)+' / '+total;
    var prev = document.getElementById('gsPrevBtn');
    var next = document.getElementById('gsNextBtn');
    if (prev) prev.disabled = gsSlideIdx === 0;
    var isLast = gsSlideIdx === total-1;
    var isDone = gsDone.has(gsCurrentId);
    if (next) {
      if (isLast) { next.textContent = isDone ? 'Close ✕' : '✓ Mark Complete'; next.className = isDone ? 'btn btn-secondary' : 'btn btn-primary'; }
      else { next.textContent = 'Next →'; next.className = 'btn btn-primary'; }
      // Quiz slides gate progression: pupils must choose an answer
      // before Next unlocks. gsAnswerQuiz() flips this off.
      if (slide && slide.type === 'quiz') {
        next.disabled = true;
        next.title = 'Choose an answer to continue';
      } else {
        next.disabled = false;
        next.removeAttribute('title');
      }
    }
    var area = document.getElementById('gsSlideArea');
    area.innerHTML = gsRenderSlideHTML(slide);
    if(window.DI_TEACHING)DI_TEACHING.decorate(area,slide,gsCurrentId,gsSlideIdx);
    var diagram=typeof SLIDE_VISUALS!=='undefined'?SLIDE_VISUALS[gsCurrentId+':'+gsSlideIdx]:null;if(diagram)area.insertAdjacentHTML('beforeend',diagram);
    if (window.diSlide && diSlide.resetScroll) diSlide.resetScroll(area); else area.scrollTop = 0;
    // Interactive lab widgets wire their events after DOM insertion
    if (slide && slide.type === 'widget' && typeof DI_LABS !== 'undefined' && DI_LABS[slide.widget]) {
      try { DI_LABS[slide.widget].init('gs-lab-' + slide.widget, slide.labData); }
      catch (e) { console.error('Lab init failed:', slide.widget, e); }
    }
    // Notes textarea — wrap in try so a notes failure doesn't nuke
    // the whole slide render.
    try {
      if (!window.diSlide || !diSlide.notesHTML) throw new Error('diSlide.notesHTML unavailable (stale cache?)');
      var revision = gsGetLesson(gsCurrentId).lesson.revision || ({115:'r2',120:'r2',128:'r2'})[gsCurrentId];
      var noteKey = 'di_note_' + gsCurrentId + '_' + (revision ? revision + '_' : '') + gsSlideIdx;
      var savedNote = '';
      try { savedNote = localStorage.getItem(noteKey) || ''; } catch(e) {}
      var notesWrap = document.createElement('div');
      notesWrap.className = 'slide-notes';
      notesWrap.innerHTML = diSlide.notesHTML('gsNotesTa', 'gsNotesSaved');
      area.appendChild(notesWrap);
      var ta = document.getElementById('gsNotesTa');
      if (ta) {
        ta.value = savedNote;
        if (diSlide.notesListSupport) diSlide.notesListSupport(ta);
        var timer=null, ind=document.getElementById('gsNotesSaved');
        ta.addEventListener('input',function(){
          clearTimeout(timer);
          timer=setTimeout(function(){
            try { localStorage.setItem(noteKey, ta.value); } catch(e) {}
            if(ind){ind.classList.add('visible');setTimeout(function(){ind.classList.remove('visible');},1500);}
          },500);
        });
      }
    } catch (notesErr) {
      console.warn('[Removes] notes init failed:', notesErr);
    }
  }

  /* Per-lesson session stats for the results screen */
  var gsSession = { quizRight: 0, quizTotal: 0, streak: 0 };

  function gsNextLessonId(id) {
    var flat = [];
    GCSE_UNITS.forEach(function(u){ u.lessons.forEach(function(l){ flat.push(l.id); }); });
    var i = flat.indexOf(id);
    return (i > -1 && i < flat.length - 1) ? flat[i + 1] : null;
  }

  function gsShowResults(wasDone) {
    var area = document.getElementById('gsSlideArea');
    var found = gsGetLesson(gsCurrentId);
    var total = GCSE_UNITS.reduce(function(s,u){return s+u.lessons.length;},0);
    var stats = [{ num: gsSlides.length, label: 'slides' }];
    if (gsSession.quizTotal > 0) stats.push({ num: gsSession.quizRight + '/' + gsSession.quizTotal, label: 'quiz correct' });
    var xp = (wasDone ? 0 : 20) + gsSession.quizRight * 10;
    if (xp > 0) stats.push({ num: '+' + xp, label: 'XP earned' });
    stats.push({ num: gsDone.size + '/' + total, label: 'lessons done' });
    var nextId = gsNextLessonId(gsCurrentId);
    area.innerHTML = diSlide.resultsHTML({
      emoji: wasDone ? '✅' : '🎉',
      title: wasDone ? 'Lesson revisited!' : 'Lesson complete!',
      sub: found ? found.lesson.title : '',
      stats: stats,
      primaryLabel: nextId ? 'Next lesson &#8594;' : 'Back to course',
      secondaryLabel: nextId ? 'Back to course' : null
    });
    if (window.diSlide && diSlide.resetScroll) diSlide.resetScroll(area); else area.scrollTop = 0;
    var primary = document.getElementById('diResultsPrimary');
    if (primary) primary.onclick = nextId
      ? function() { gsCloseLesson(); setTimeout(function() { gsOpenLesson(nextId); }, 150); }
      : function() { gsCloseLesson(); };
    var secondary = document.getElementById('diResultsSecondary');
    if (secondary) secondary.onclick = function() { gsCloseLesson(); };
    var nextBtn = document.getElementById('gsNextBtn');
    if (nextBtn) nextBtn.style.visibility = 'hidden';
    var prevBtn = document.getElementById('gsPrevBtn');
    if (prevBtn) prevBtn.onclick = function() {
      prevBtn.onclick = function() { gsPrevSlide(); };
      if (nextBtn) nextBtn.style.visibility = 'visible';
      gsRenderSlide();
    };
    var card = area.querySelector('.di-results');
    if (card && window.diSlide && diSlide.celebrate) {
      setTimeout(function() { diSlide.celebrate(card, 0); }, 250);
    }
  }

  function gsNextSlide() {
    // Block forward progression on an unanswered quiz.
    var cur = gsSlides[gsSlideIdx];
    if (cur && cur.type === 'quiz') {
      var answered = document.querySelector('#gsSlideArea .quiz-option[disabled]');
      if (!answered) return;
    }
    // Final-slide path wraps the mark-complete flow in a try/catch so
    // any runtime error in gsMarkDone (track re-render, XP toast,
    // spaced-review rebuild…) surfaces in console + a toast rather
    // than silently leaving the modal open with no way forward.
    if (gsSlideIdx === gsSlides.length-1) {
      try {
        var wasDone = gsDone.has(gsCurrentId);
        if (!wasDone && gsMarkDone(gsCurrentId) === false) return;
        gsShowResults(wasDone);
      } catch (err) {
        console.error('[Removes] Failed to mark lesson complete:', err);
        gsShowXPToast('⚠ Could not save completion — please reload and try again.');
        // Still close the modal so the user isn't stuck.
        try { gsCloseLesson(); } catch (e) {}
      }
      return;
    }
    gsSlideIdx++;
    gsRenderSlide();
  }
  function gsPrevSlide() { if(gsSlideIdx>0){gsSlideIdx--;gsRenderSlide();} }
  function gsJumpSlide(i) { gsSlideIdx=i; gsRenderSlide(); }

  /* These four used to be per-engine copies — now delegate to the
     shared helpers in js/slide-utils.js so Removes, Fluency (and
     eventually AEP) stop drifting on the same logic. */
  function gsRevealHTML(slide) {
    var rid = 'gsRev_' + gsCurrentId + '_' + gsSlideIdx;
    return window.diSlide.revealHTML(slide, rid, 'gsToggleReveal');
  }
  function gsSourcesHTML(slide) { return window.diSlide.sourcesHTML(slide); }
  function gsToggleReveal(id)   { return window.diSlide.toggleReveal(id); }
  function gsEscape(s)          { return window.diSlide.escape(s); }

  function gsWidgetHTML(slide){
    var w = slide.widget;
    // Interactive labs (js/labs.js) take precedence; init runs post-render
    if (typeof DI_LABS !== 'undefined' && DI_LABS[w]) {
      return DI_LABS[w].html('gs-lab-' + w, slide.labData);
    }
    if (w==='ptfc') {
      return '<div class="widget">'+
        '<div class="widget-row"><label class="widget-label ptfc-p"><span>P</span>Persona</label><textarea class="widget-input" id="gsPtfc_p" placeholder="You are an experienced GCSE Biology tutor who explains things step-by-step." oninput="gsPtfcAssemble()"></textarea></div>'+
        '<div class="widget-row"><label class="widget-label ptfc-t"><span>T</span>Task</label><textarea class="widget-input" id="gsPtfc_t" placeholder="Explain the light-dependent reactions of photosynthesis." oninput="gsPtfcAssemble()"></textarea></div>'+
        '<div class="widget-row"><label class="widget-label ptfc-f"><span>F</span>Format</label><textarea class="widget-input" id="gsPtfc_f" placeholder="2-sentence overview, then numbered steps, then 3 self-test questions with answers." oninput="gsPtfcAssemble()"></textarea></div>'+
        '<div class="widget-row"><label class="widget-label ptfc-c"><span>C</span>Context</label><textarea class="widget-input" id="gsPtfc_c" placeholder="Year 11 AQA student. I confuse Photosystem I and II. Need understanding, not memorisation." oninput="gsPtfcAssemble()"></textarea></div>'+
        '<div class="widget-output" id="gsPtfcOut"><span style="color:var(--text-dim);font-style:italic">Fill in the fields above to see your assembled prompt…</span></div>'+
        '<div class="widget-actions"><button class="widget-btn widget-btn-primary" id="gsPtfcCopyBtn" onclick="gsPtfcCopy()">Copy to clipboard</button><button class="widget-btn" onclick="gsPtfcExample()">Load example</button><button class="widget-btn" onclick="gsPtfcClear()">Clear</button></div>'+
      '</div>';
    }
    if (w==='hallucination') {
      var snippets = (slide.snippets||[]).map(function(s,i){
        return '<button class="hp-snippet" id="gsHp_'+i+'" data-correct="'+(s.correct?'1':'0')+'" data-why="'+gsEscape(s.why||'')+'" onclick="gsHpPick(this,'+i+')">'+gsEscape(s.text)+'</button>';
      }).join('');
      return '<div class="widget"><p style="margin:0 0 8px;font-size:.86rem;color:var(--text-muted)">Click the response you think contains a hallucination.</p><div class="hp-snippets">'+snippets+'</div><div id="gsHpFb" class="hp-feedback" style="display:none"></div></div>';
    }
    if (w==='factcheck') {
      var steps = (slide.steps||[]).map(function(st,i){
        return '<div class="fc-step"><div class="fc-step-q"><span class="fc-step-num">'+(i+1)+'</span>'+gsEscape(st.question)+'</div><textarea class="fc-step-input" id="gsFc_'+i+'" rows="2" placeholder="Your answer…"></textarea>'+(st.hint?'<div class="fc-hint">'+gsEscape(st.hint)+'</div>':'')+'</div>';
      }).join('');
      return '<div class="widget">'+(slide.claim?'<div class="slide-callout" style="margin-bottom:12px"><strong>Claim to check:</strong> '+gsEscape(slide.claim)+'</div>':'')+steps+'<div class="widget-actions"><button class="widget-btn widget-btn-primary" onclick="gsFcReveal()">Reveal expert verdict</button></div><div id="gsFcVerdict" class="fc-verdict"><strong>Expert verdict:</strong> '+(slide.verdict||'')+'</div></div>';
    }
    if (w==='feed-audit') {
      var items = (slide.items||[]).map(function(it,i){
        return '<button class="fa-item" id="gsFa_'+i+'" onclick="gsFaToggle(this)"><div class="fa-item-title"><span>'+gsEscape(it.label)+'</span><span class="fa-item-toggle">✓</span></div>'+(it.desc?'<div class="fa-item-desc">'+gsEscape(it.desc)+'</div>':'')+'</button>';
      }).join('');
      return '<div class="widget"><div class="fa-grid">'+items+'</div><div class="widget-actions"><button class="widget-btn widget-btn-primary" onclick="gsFaSummarise()">See what your feed is optimising for</button></div><div id="gsFaOut" class="fa-summary"></div></div>';
    }
    if (w==='classify') {
      var catsArr = slide.categories||[];
      var cats = catsArr.map(function(c){ return gsEscape(c); });
      var itemsHtml = (slide.items||[]).map(function(it,i){
        var opts = cats.map(function(c,ci){
          return '<button class="cl-opt" data-ci="'+ci+'" onclick="gsClPick(this,'+i+','+ci+','+(it.correct||0)+')">'+c+'</button>';
        }).join('');
        return '<div class="cl-item" data-i="'+i+'">'+
          '<div class="cl-item-text">'+gsEscape(it.text)+'</div>'+
          '<div class="cl-options">'+opts+'</div>'+
          '<div class="cl-explain" id="gsClEx_'+i+'"><strong>'+gsEscape(catsArr[it.correct||0])+'.</strong> '+gsEscape(it.why||'')+'</div>'+
        '</div>';
      }).join('');
      var total = (slide.items||[]).length;
      // slide.intro is author-authored HTML — don't escape it, and
      // skip the inner copy anyway since the outer widget wrapper
      // already renders it in .slide-body above the items.
      return '<div class="widget" data-total="'+total+'" data-got="0">'+
        itemsHtml+
        '<div id="gsClScore" class="cl-score"></div>'+
      '</div>';
    }
    if (w==='prompt-clinic') {
      // intro is already shown by the outer widget wrapper (as HTML);
      // don't re-render / double-escape it here.
      return '<div class="widget">'+
        '<textarea class="widget-input" id="gsPcIn" rows="6" placeholder="Paste a prompt here — the clinic checks it against PTFC (Persona / Task / Format / Context) and gives three specific critiques."></textarea>'+
        '<div class="widget-actions"><button class="widget-btn widget-btn-primary" onclick="gsPcRun()">Get critique</button><button class="widget-btn" onclick="gsPcLoadWeak()">Load weak prompt</button><button class="widget-btn" onclick="gsPcClear()">Clear</button></div>'+
        '<div id="gsPcOut" class="widget-output" style="display:none;margin-top:14px"></div>'+
      '</div>';
    }
    if (w==='misuse-detector') {
      // intro is already shown by the outer widget wrapper (as HTML).
      return '<div class="widget">'+
        '<textarea class="widget-input" id="gsMisuseIn" rows="8" placeholder="Paste a paragraph of text here…" style="width:100%;min-height:160px;resize:vertical"></textarea>'+
        '<div class="widget-actions"><button class="widget-btn widget-btn-primary" onclick="gsMisuseAnalyze()">Analyse</button><button class="widget-btn" onclick="gsMisuseSample()">Load AI-like sample</button><button class="widget-btn" onclick="gsMisuseClear()">Clear</button></div>'+
        '<div id="gsMisuseOut" class="widget-output" style="display:none;margin-top:14px"></div>'+
      '</div>';
    }
    return '';
  }

  /* ── Misuse-detector analyser ─────────────────────────
     Heuristic only — mirrors the signals the course itself
     teaches pupils to look for. Explicitly not a fraud tool;
     the output frames the signals as probabilities, not verdicts. */
  var GS_AI_WORDS = ['delve','delving','intricate','tapestry','navigate','navigating','landscape','revolutionize','revolutionise','facet','multifaceted','nuanced','crucial','pivotal','underscore','underscores','testament','symphony','realm','in summary','in conclusion','it is important to note','leverage','furthermore','moreover'];
  function gsMisuseAnalyze() {
    var text = (document.getElementById('gsMisuseIn') || {}).value || '';
    var out = document.getElementById('gsMisuseOut');
    if (!out) return;
    if (!text.trim() || text.length < 80) {
      out.style.display = 'block';
      out.innerHTML = '<strong>Too short to analyse.</strong> Paste at least 80 characters — ideally a full paragraph or two.';
      return;
    }
    var emDashes = (text.match(/—/g) || []).length;
    var sentences = text.split(/[.!?]+\s+/).filter(function(s){return s.trim().length > 8;});
    var wordCounts = sentences.map(function(s){ return s.trim().split(/\s+/).length; });
    var mean = wordCounts.reduce(function(a,b){return a+b;},0) / (wordCounts.length || 1);
    var variance = wordCounts.reduce(function(a,b){return a+(b-mean)*(b-mean);},0) / (wordCounts.length || 1);
    var stdev = Math.sqrt(variance);
    var cv = mean > 0 ? (stdev / mean) : 0;
    var lower = text.toLowerCase();
    var overusedHits = GS_AI_WORDS.filter(function(w){ return lower.indexOf(w) !== -1; });
    var score = 0;
    var flags = [];
    if (emDashes >= 3) { score += 2; flags.push('<strong>Em-dashes:</strong> ' + emDashes + ' in this passage. AI writers lean on — heavily; a human usually uses one or two per page.'); }
    else if (emDashes === 0 && text.length > 400) { flags.push('<strong>Em-dashes:</strong> none — that\'s fine, but human writing often has at least one in a long passage.'); }
    if (sentences.length >= 4 && cv < 0.35) { score += 2; flags.push('<strong>Sentence length:</strong> very uniform (coefficient of variation ≈ ' + cv.toFixed(2) + '). AI often produces sentences of roughly the same length; human writing varies more.'); }
    else if (sentences.length >= 4) { flags.push('<strong>Sentence length:</strong> varied (CV ≈ ' + cv.toFixed(2) + ') — that\'s a <em>human</em> signal.'); }
    if (overusedHits.length >= 3) { score += 2; flags.push('<strong>Overused words:</strong> ' + overusedHits.slice(0, 6).map(function(w){return '"'+w+'"';}).join(', ') + (overusedHits.length > 6 ? ' and ' + (overusedHits.length - 6) + ' more' : '') + '. These cluster strongly in AI output.'); }
    else if (overusedHits.length > 0) { flags.push('<strong>Overused words:</strong> ' + overusedHits.map(function(w){return '"'+w+'"';}).join(', ') + ' — one or two of these is fine in human writing.'); }
    var verdict, verdictColour;
    if (score >= 5) { verdict = 'Strong AI signals.'; verdictColour = '#ef4444'; }
    else if (score >= 3) { verdict = 'Some AI signals.'; verdictColour = '#f59e0b'; }
    else { verdict = 'Low AI signals.'; verdictColour = 'var(--track-primary)'; }
    out.style.display = 'block';
    out.innerHTML =
      '<div style="font-weight:800;color:' + verdictColour + ';font-size:1.05rem;margin-bottom:8px">' + verdict + ' (signal score ' + score + '/6)</div>' +
      (flags.length ? '<ul style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:6px">' + flags.map(function(f){return '<li style="font-size:.85rem;line-height:1.5">' + f + '</li>';}).join('') + '</ul>' : '<div style="font-size:.85rem;color:var(--text-dim)">No individual flags triggered.</div>') +
      '<div style="margin-top:12px;padding:10px 12px;background:rgba(var(--track-primary-rgb),.06);border-left:3px solid var(--track-primary);border-radius:0 6px 6px 0;font-size:.8rem;line-height:1.5"><strong>What this is, and isn\'t.</strong> This is a heuristic check on the specific signals this course teaches — not a verdict. Every signal here can appear in perfectly good human writing. Use it to build your <em>ear</em> for AI-written prose, not to accuse a classmate.</div>';
  }
  function gsMisuseSample() {
    var el = document.getElementById('gsMisuseIn');
    if (el) el.value = 'In today\'s rapidly changing landscape, it is crucial to delve into the intricate tapestry of artificial intelligence — a truly multifaceted and nuanced phenomenon. Furthermore, we must navigate the complex ethical considerations — which, in turn, underscore the pivotal role of responsible deployment. Moreover, this testament to human ingenuity revolutionises our understanding — and serves as a symphony of innovation that reshapes every realm of modern life. In conclusion, we should leverage these tools thoughtfully.';
    gsMisuseAnalyze();
  }
  function gsMisuseClear() {
    var el = document.getElementById('gsMisuseIn');
    if (el) el.value = '';
    var out = document.getElementById('gsMisuseOut');
    if (out) { out.style.display = 'none'; out.innerHTML = ''; }
  }

  /* ── Prompt clinic — heuristic PTFC scorer ────────────
     Grades a pasted prompt 0/1/2 on each of Persona, Task,
     Format, Context and returns three specific critiques
     focused on the weakest slots, plus an improved example. */
  function gsPcScore(prompt) {
    var text = (prompt || '').trim();
    var lower = text.toLowerCase();
    var score = { persona: 0, task: 0, format: 0, context: 0 };

    // Persona — role assignment
    if (/\b(act as|you are|pretend to be|imagine you are|take the role of|behave as)\b/i.test(text)) score.persona = 1;
    if (/\b(act as|you are).{1,50}(teacher|tutor|examiner|expert|coach|editor|historian|scientist|developer|researcher|student|journalist|author|engineer|lawyer|doctor|designer|specialist|marker)\b/i.test(text)) score.persona = 2;

    // Task — imperative verb
    var taskVerbs = /\b(explain|summarise|summarize|list|write|outline|describe|compare|contrast|analyse|analyze|plan|draft|create|generate|design|critique|evaluate|rewrite|translate|solve|calculate|teach|help me|show me|give me)\b/i;
    if (taskVerbs.test(text)) score.task = 1;
    // Specific task = imperative + a noun object
    if (taskVerbs.test(text) && text.length > 30) score.task = 2;

    // Format — explicit output format
    var formatSignals = /\b(bullet(s)?|numbered list|steps|table|paragraphs?|words?|sentences?|heading(s)?|section(s)?|markdown|json|essay|outline|in no more than|in at most|in \d+ (words?|sentences?|paragraphs?|bullets?)|as a list|in a table|q\/a|mark scheme|mark-scheme|rubric)\b/i;
    if (formatSignals.test(lower)) score.format = 1;
    if (/\bin \d+ (words?|sentences?|paragraphs?|bullets?|steps?|headings?)/i.test(lower) || /\btable with \d+/.test(lower)) score.format = 2;

    // Context — subject / level / topic / constraints
    var contextSignals = /\b(year 7|year 8|year 9|year 10|year 11|year 12|year 13|removes|ks3|ks4|ks5|gcse|a ?level|a-?level|aqa|edexcel|ocr|btec|for (a|an) (\d+-year|year \d|ks)|specification|spec|exam board|my student|my pupil|my class|the topic is|the context is|with an audience of|audience:|audience is|for a|in the context of)\b/i;
    if (contextSignals.test(lower)) score.context = 1;
    if (/\b(year \d+\s+(aqa|edexcel|ocr|wjec|btec|qcf|gcse|a-?level|gcse|alevel))|(year \d+.*(aqa|edexcel|ocr|wjec)).{0,60}\b/i.test(lower)) score.context = 2;
    if (score.context === 1 && /\b(topic|revision|homework|essay|coursework|bdsm|history|biology|chemistry|physics|maths|english|geography|ict|computing|french|spanish|latin|mfl|psychology|business)\b/i.test(lower)) score.context = 2;

    return score;
  }

  function gsPcRun() {
    var text = ((document.getElementById('gsPcIn') || {}).value || '').trim();
    var out = document.getElementById('gsPcOut');
    if (!out) return;
    if (!text || text.length < 10) {
      out.style.display = 'block';
      out.innerHTML = '<strong>Paste a prompt first.</strong> The clinic grades at least a short sentence — a single word won\'t tell us anything useful.';
      return;
    }
    var s = gsPcScore(text);
    var total = s.persona + s.task + s.format + s.context;
    var pct = Math.round(total / 8 * 100);

    var weaknesses = [
      { key: 'persona', label: 'Persona', score: s.persona, tip: s.persona === 0 ? 'No role is assigned. Try opening with <em>"Act as an experienced AQA GCSE [subject] examiner…"</em> — this alone typically improves output quality because the model shifts into the right vocabulary.' : 'Role is named but vague. Add a specific variant: "Act as a friendly GCSE Biology tutor who explains step by step" rather than "be helpful".' },
      { key: 'task',    label: 'Task',    score: s.task,    tip: s.task === 0 ? 'There is no clear instruction verb. Start with an imperative: <em>"Summarise…"</em>, <em>"Explain…"</em>, <em>"Write…"</em>. Without this, the model guesses what you want.' : 'Task is present but could be more specific — say <em>what</em> to summarise and <em>how deeply</em>.' },
      { key: 'format',  label: 'Format',  score: s.format,  tip: s.format === 0 ? 'No output format is specified. Add one: <em>"as a 5-bullet list"</em>, <em>"in 3 numbered steps with one sentence each"</em>, <em>"as a 50-word paragraph"</em>. This alone usually cuts waffle in half.' : 'Format is mentioned. Be a bit more concrete — actual numbers ("in 5 bullets", "in 120 words") beat vague cues ("a list").' },
      { key: 'context', label: 'Context', score: s.context, tip: s.context === 0 ? 'No context is given. Tell the model who you are and what exam: <em>"I\'m a Year 10 AQA GCSE History student revising the Norman Conquest."</em> This unlocks the right level of vocabulary and depth.' : 'Context is there but sparse. Add the exam board, specification reference or the specific topic — not just "GCSE".' }
    ];
    var weakSorted = weaknesses.slice().sort(function(a, b) { return a.score - b.score; });
    var topThree = weakSorted.slice(0, 3);

    var improved = gsPcImprove(text, s);

    out.style.display = 'block';
    out.innerHTML =
      '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:12px">' +
        ['persona','task','format','context'].map(function(k) {
          var v = s[k];
          var colour = v === 2 ? 'var(--track-primary)' : v === 1 ? '#f59e0b' : '#ef4444';
          var label = v === 2 ? 'Strong' : v === 1 ? 'Vague' : 'Missing';
          return '<div style="text-align:center;padding:10px 4px;background:rgba(var(--track-primary-rgb),.04);border-radius:8px;border-top:3px solid ' + colour + '">' +
            '<div style="font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:var(--text-dim)">' + k.charAt(0).toUpperCase() + k.slice(1) + '</div>' +
            '<div style="font-weight:800;color:' + colour + ';margin-top:4px">' + label + '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<div style="font-weight:700;margin-bottom:8px">Overall: ' + total + ' / 8 (' + pct + '%)</div>' +
      '<div style="font-size:.85rem;font-weight:700;color:var(--text);margin:14px 0 6px">Three things to change</div>' +
      '<ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:8px">' +
        topThree.map(function(w) { return '<li style="font-size:.87rem;line-height:1.55"><strong>' + w.label + '.</strong> ' + w.tip + '</li>'; }).join('') +
      '</ol>' +
      '<div style="font-size:.85rem;font-weight:700;color:var(--text);margin:16px 0 6px">A stronger version might read:</div>' +
      '<div style="padding:12px 14px;background:rgba(var(--track-primary-rgb),.06);border-left:3px solid var(--track-primary);border-radius:0 6px 6px 0;font-size:.85rem;line-height:1.6;white-space:pre-wrap">' + gsEscape(improved) + '</div>' +
      '<div style="margin-top:12px;font-size:.75rem;color:var(--text-dim);line-height:1.5">This clinic runs on-device — no prompt leaves your browser. It\'s a heuristic check against the PTFC framework, not a rewrite by an AI.</div>';
  }

  function gsPcImprove(text, s) {
    // Build a scaffolded version by filling in missing slots with
    // placeholders. We don't invent content — we show the skeleton.
    var lines = [];
    if (s.persona < 2) lines.push('[Persona] Act as an experienced AQA GCSE [your subject] examiner who explains things step-by-step.');
    if (s.task < 2)    lines.push('[Task] ' + (s.task === 0 ? 'Explain / Summarise / Write / Plan …' : text.replace(/\n/g, ' ').slice(0, 120)));
    if (s.format < 2)  lines.push('[Format] Give me a 2-sentence overview, then 4 numbered steps (1 sentence each), then 3 self-test questions with answers.');
    if (s.context < 2) lines.push('[Context] I\'m a Year 9 Removes pupil revising [topic]. I already understand [what you know]; the specific thing I keep getting wrong is [what confuses you].');
    // If all were strong, praise:
    if (!lines.length) return 'Your prompt already covers all four PTFC parts strongly. Well done — this is publication-quality prompting. The only thing left is to try variations and see which produces the best response.';
    lines.push('[Original prompt]: ' + text);
    return lines.join('\n');
  }

  function gsPcLoadWeak() {
    var el = document.getElementById('gsPcIn');
    if (el) el.value = 'explain photosynthesis';
    gsPcRun();
  }
  function gsPcClear() {
    var el = document.getElementById('gsPcIn');
    if (el) el.value = '';
    var out = document.getElementById('gsPcOut');
    if (out) { out.style.display = 'none'; out.innerHTML = ''; }
  }

  function gsPtfcAssemble(){
    var p=(document.getElementById('gsPtfc_p')||{}).value||'';
    var t=(document.getElementById('gsPtfc_t')||{}).value||'';
    var f=(document.getElementById('gsPtfc_f')||{}).value||'';
    var c=(document.getElementById('gsPtfc_c')||{}).value||'';
    var out=document.getElementById('gsPtfcOut'); if(!out)return;
    if(!p.trim()&&!t.trim()&&!f.trim()&&!c.trim()){ out.innerHTML='<span style="color:var(--text-dim);font-style:italic">Fill in the fields above to see your assembled prompt…</span>'; return; }
    var parts=[];
    if(p.trim())parts.push('<strong style="color:#009fe3">[Persona]</strong> '+gsEscape(p.trim()).replace(/\n/g,'<br>'));
    if(t.trim())parts.push('<strong style="color:#9b1844">[Task]</strong> '+gsEscape(t.trim()).replace(/\n/g,'<br>'));
    if(f.trim())parts.push('<strong style="color:#22c55e">[Format]</strong> '+gsEscape(f.trim()).replace(/\n/g,'<br>'));
    if(c.trim())parts.push('<strong style="color:#f59e0b">[Context]</strong> '+gsEscape(c.trim()).replace(/\n/g,'<br>'));
    out.innerHTML=parts.join('<br><br>');
  }
  function gsPtfcCopy(){
    var ids=['gsPtfc_p','gsPtfc_t','gsPtfc_f','gsPtfc_c'];
    var lbls=['[Persona] ','[Task] ','[Format] ','[Context] '];
    var text=ids.map(function(id,i){var v=((document.getElementById(id)||{}).value||'').trim();return v?(lbls[i]+v):'';}).filter(Boolean).join('\n\n');
    if(!text)return;
    var btn=document.getElementById('gsPtfcCopyBtn');
    var done=function(){if(btn){btn.textContent='✓ Copied!';setTimeout(function(){btn.textContent='Copy to clipboard';},2000);}};
    if(navigator.clipboard){navigator.clipboard.writeText(text).then(done).catch(done);}
    else{var ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}document.body.removeChild(ta);done();}
  }
  function gsPtfcExample(){
    var vals={gsPtfc_p:'You are a patient GCSE Biology tutor who explains things step-by-step.',
      gsPtfc_t:'Explain the light-dependent reactions of photosynthesis — specifically what happens to electrons in the thylakoid membrane.',
      gsPtfc_f:'Brief 2-sentence overview, then numbered steps (max 2 sentences each), then 3 self-test questions with answers.',
      gsPtfc_c:'Year 11 AQA student. I always confuse Photosystem I and II. I need to understand, not just memorise.'};
    Object.keys(vals).forEach(function(k){var el=document.getElementById(k);if(el)el.value=vals[k];});
    gsPtfcAssemble();
  }
  function gsPtfcClear(){
    ['gsPtfc_p','gsPtfc_t','gsPtfc_f','gsPtfc_c'].forEach(function(id){var el=document.getElementById(id);if(el)el.value='';});
    gsPtfcAssemble();
  }
  function gsHpPick(btn,i){
    var parent=btn.parentElement;
    var chosenCorrect=btn.getAttribute('data-correct')==='1';
    Array.prototype.forEach.call(parent.querySelectorAll('.hp-snippet'),function(b){
      b.disabled=true;
      if(b.getAttribute('data-correct')==='1')b.classList.add('hp-correct');
      else if(b===btn)b.classList.add('hp-wrong');
    });
    var fb=document.getElementById('gsHpFb'); if(!fb)return;
    var why=btn.getAttribute('data-why')||'';
    fb.style.display='block';
    fb.innerHTML=(chosenCorrect?'✅ <strong>Correct.</strong> ':'❌ <strong>Not this one.</strong> The highlighted snippet is the hallucination. ')+why;
  }
  function gsFcReveal(){
    var v=document.getElementById('gsFcVerdict'); if(v)v.classList.add('fc-shown');
  }
  function gsFaToggle(btn){
    btn.classList.toggle('fa-on');
  }
  function gsClPick(btn, qi, ci, correct){
    var item=btn.closest('.cl-item'); if(!item||item.dataset.answered==='1')return;
    item.dataset.answered='1';
    Array.prototype.forEach.call(item.querySelectorAll('.cl-opt'),function(b){
      b.disabled=true;
      var j=parseInt(b.getAttribute('data-ci'),10);
      if(j===correct)b.classList.add('cl-correct');
      else if(j===ci)b.classList.add('cl-wrong');
    });
    var ex=document.getElementById('gsClEx_'+qi); if(ex)ex.classList.add('cl-shown');
    var widget=btn.closest('.widget'); if(!widget)return;
    var total=parseInt(widget.dataset.total,10)||0;
    var got=parseInt(widget.dataset.got,10)||0;
    if(ci===correct){ got+=1; gsAwardOnce('cl:'+gsCurrentId+':'+gsSlideIdx+':'+qi, 5, 'Classified correctly'); }
    widget.dataset.got=got;
    var answered=widget.querySelectorAll('.cl-item[data-answered="1"]').length;
    if(answered===total){
      var score=document.getElementById('gsClScore');
      if(score){
        var pct=Math.round((got/total)*100);
        var msg=pct>=80?'Strong read on the categories — you\'ve internalised the thresholds.':pct>=60?'A solid grasp. Re-check the ones you missed — the boundaries between tiers are often the most interesting cases.':'The boundaries are genuinely tricky. Scroll back up, read each explanation, and try the next classify slide with the rules fresh in your head.';
        score.textContent='Score: '+got+' / '+total+' ('+pct+'%) — '+msg;
        score.classList.add('cl-final');
      }
    }
  }
  function gsExitSave(key){
    var el=document.getElementById('gsExitInput'); if(!el)return;
    var v=(el.value||'').trim();
    try{ if(v)localStorage.setItem(key,v); else localStorage.removeItem(key); }catch(e){}
    var s=document.getElementById('gsExitStatus');
    if(s){ s.textContent=v?'✓ Saved — you can edit and save again':'Cleared'; s.classList.toggle('et-saved',!!v); }
  }
  function gsAssessSave(key){
    var el=document.getElementById('gsAssessInput'); if(!el)return;
    var v=(el.value||'').trim();
    try{ if(v)localStorage.setItem(key,v); else localStorage.removeItem(key); }catch(e){}
    var s=document.getElementById('gsAssessStatus');
    if(s){ s.textContent=v?'✓ Saved — appears in your Portfolio':'Cleared'; s.classList.toggle('et-saved',!!v); }
  }
  function gsAssessLevel(key, level, btn){
    try{ localStorage.setItem(key, level); }catch(e){}
    var rubric = btn.closest('.as-rubric');
    if(rubric){ Array.prototype.forEach.call(rubric.querySelectorAll('.as-rubric-row'), function(r){ r.classList.toggle('as-selected', r===btn); }); }
    var s=document.getElementById('gsAssessLvlStatus');
    if(s){ s.textContent='✓ You rated this: '+level; s.classList.add('as-marked'); }
    gsAwardOnce('assess-mark:'+key, 10, 'Self-assessed a task');
  }
  function gsUtAnswer(btn, qi, oi, correct){
    var q=btn.closest('.ut-q'); if(!q||q.dataset.answered==='1')return;
    q.dataset.answered='1';
    Array.prototype.forEach.call(q.querySelectorAll('.ut-option'),function(b){
      b.disabled=true;
      var j=parseInt(b.getAttribute('data-oi'),10);
      if(j===correct)b.classList.add('ut-correct');
      else if(j===oi)b.classList.add('ut-wrong');
    });
    var ex=document.getElementById('gsUtEx_'+qi); if(ex)ex.classList.add('ut-shown');
    var test=btn.closest('.unit-test'); if(!test)return;
    var total=parseInt(test.dataset.total,10)||0;
    var got=parseInt(test.dataset.got,10)||0;
    if(oi===correct){ got+=1; gsAwardOnce('ut:'+gsCurrentId+':'+gsSlideIdx+':'+qi, 10, 'Unit test answered correctly'); }
    test.dataset.got=got;
    var answered=test.querySelectorAll('.ut-q[data-answered="1"]').length;
    if(answered===total){
      var score=document.getElementById('gsUtScore');
      if(score){
        var pct=Math.round((got/total)*100);
        var msg=pct>=80?'Strong recall — you\'ve locked in the core ideas of this unit.':pct>=60?'Solid grasp — a second pass on the slides you hesitated on will push this higher.':'Worth going back through this unit\'s summary slides before moving on — the concepts build on each other.';
        score.textContent='Score: '+got+' / '+total+' ('+pct+'%) — '+msg;
        score.classList.add('ut-final');
      }
    }
  }
  function gsFaSummarise(){
    var on=document.querySelectorAll('.fa-item.fa-on').length;
    var total=document.querySelectorAll('.fa-item').length;
    var out=document.getElementById('gsFaOut'); if(!out)return;
    var msg;
    if(on===0) msg='You didn\'t tick anything — but the algorithm is still optimising. If you\'re passive, it optimises for whatever keeps <em>most</em> users watching, which skews to outrage and insecurity by default. The remedy is to give it deliberate signals.';
    else if(on<=2) msg='You ticked '+on+'/'+total+'. A lean signal set — the algorithm still has room to fill the gaps with whatever maximises watch time. Consider actively un-following or muting accounts that make you feel worse.';
    else if(on<=4) msg='You ticked '+on+'/'+total+'. That\'s a fairly active curation habit — you\'re nudging the feed rather than drifting with it. Keep doing it: every "not interested" tap is training data.';
    else msg='You ticked '+on+'/'+total+'. You\'re curating deliberately — the algorithm is responding to a clear signal of what you want. This is the behaviour that most blunts the feed\'s ability to hijack your mood.';
    out.innerHTML='<strong>Your audit:</strong> '+msg;
    out.classList.add('fa-shown');
  }

  function gsRenderSlideHTML(slide) {
    if (!slide) return '';
    var type = slide.type || 'concept';
    var reveal = gsRevealHTML(slide);
    var sources = gsSourcesHTML(slide);
    if (type==='evidence') return DI_EVIDENCE.render(slide);
    if (type==='video') {
      var vid=(slide.videoId||'').replace(/[^A-Za-z0-9_-]/g,'');
      var src='https://www.youtube-nocookie.com/embed/'+vid+'?rel=0&modestbranding=1';
      var frame=vid?'<div class="slide-video-frame"><iframe src="'+src+'" title="'+(slide.title||'Video').replace(/"/g,'&quot;')+'" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>':'';
      return '<div class="slide-concept slide-video"><span class="slide-badge badge-concept">Video</span><div class="slide-title">'+(slide.title||'')+'</div>'+(slide.intro?'<div class="slide-body slide-video-intro">'+slide.intro+'</div>':'')+frame+(slide.credit?'<div class="slide-video-credit">'+slide.credit+'</div>':'')+(slide.callout?'<div class="slide-callout">'+slide.callout+'</div>':'')+reveal+sources+'</div>';
    }
    if (type==='widget') {
      return '<div class="slide-activity"><span class="slide-badge badge-activity">Interactive</span><div class="slide-title">'+(slide.title||'Interactive')+'</div>'+(slide.intro?'<div class="slide-body">'+slide.intro+'</div>':'')+gsWidgetHTML(slide)+(slide.callout?'<div class="slide-callout">'+slide.callout+'</div>':'')+reveal+sources+'</div>';
    }
    if (type==='exit-ticket') {
      var exitRevision=gsGetLesson(gsCurrentId).lesson.revision;
      var key='di_gcse_exit_'+gsCurrentId+(exitRevision?'_'+exitRevision:'');
      var saved='';
      try{saved=localStorage.getItem(key)||'';}catch(e){}
      return '<div class="slide-activity"><span class="slide-badge badge-activity">Exit Ticket</span><div class="slide-title">'+(slide.title||'Before you go…')+'</div>'+(slide.body?'<div class="slide-body">'+slide.body+'</div>':'')+'<div class="exit-ticket"><span class="exit-ticket-label">Your independent answer</span><div class="exit-ticket-prompt">'+(slide.prompt||'What is one thing you will do differently after this lesson?')+'</div><textarea class="exit-ticket-input" id="gsExitInput" placeholder="Write your answer here…">'+gsEscape(saved)+'</textarea><div class="exit-ticket-actions"><button class="widget-btn widget-btn-primary" onclick="gsExitSave(\''+key+'\')">Save for later</button><span class="exit-ticket-status'+(saved?' et-saved':'')+'" id="gsExitStatus">'+(saved?'✓ Saved — you can edit and save again':'Saves to this device only')+'</span></div></div>'+sources+'</div>';
    }
    if (type==='assessment') {
      var aKey='di_gcse_assess_'+gsCurrentId;
      var aLvlKey='di_gcse_assess_level_'+gsCurrentId;
      var aSaved='', aLvl='';
      try{aSaved=localStorage.getItem(aKey)||'';}catch(e){}
      try{aLvl=localStorage.getItem(aLvlKey)||'';}catch(e){}
      var rubric=(slide.rubric||[]).map(function(r){
        var sel=(r.level===aLvl)?' as-selected':'';
        return '<button type="button" class="as-rubric-row'+sel+'" data-level="'+gsEscape(r.level)+'" onclick="gsAssessLevel(\''+aLvlKey+'\',\''+gsEscape(r.level).replace(/'/g,"\\'")+'\',this)"><div class="as-rubric-level">'+gsEscape(r.level)+'</div><div class="as-rubric-text">'+(r.text||'')+'</div></button>';
      }).join('');
      var aSteps=(slide.steps?'<ol class="slide-steps">'+slide.steps.map(function(s){return '<li>'+s+'</li>';}).join('')+'</ol>':'');
      return '<div class="slide-assessment">'+
        '<span class="slide-badge badge-assessment">Assessed Task</span>'+
        '<div class="slide-title">'+(slide.title||'Performance Task')+'</div>'+
        '<div class="as-meta">'+(slide.domain?'<span class="as-domain">'+gsEscape(slide.domain)+'</span>':'')+(slide.time?'<span class="as-time">⏱ '+gsEscape(slide.time)+'</span>':'')+'</div>'+
        (slide.brief?'<div class="slide-body">'+slide.brief+'</div>':'')+
        aSteps+
        (slide.criteria?'<div class="as-criteria"><strong>What\'s being assessed:</strong> '+slide.criteria+'</div>':'')+
        (rubric?'<div class="as-rubric"><div class="as-rubric-head">Mark your own work honestly — tap the level you reached</div>'+rubric+'<div class="as-selfmark-status'+(aLvl?' as-marked':'')+'" id="gsAssessLvlStatus">'+(aLvl?'✓ You rated this: '+gsEscape(aLvl):'No self-assessment yet — be honest, this is for your own progress')+'</div></div>':'')+
        '<div class="exit-ticket"><span class="exit-ticket-label">Your response (or a link to it)</span><div class="exit-ticket-prompt">'+(slide.prompt||'Write your response, or paste a link to your document, here.')+'</div><textarea class="exit-ticket-input" id="gsAssessInput" rows="6" placeholder="Your work, or a link to it…">'+gsEscape(aSaved)+'</textarea><div class="exit-ticket-actions"><button class="widget-btn widget-btn-primary" onclick="gsAssessSave(\''+aKey+'\')">Save to my Portfolio</button><span class="exit-ticket-status'+(aSaved?' et-saved':'')+'" id="gsAssessStatus">'+(aSaved?'✓ Saved — appears in your Portfolio':'Saves to this device &amp; your Portfolio')+'</span></div></div>'+
        sources+'</div>';
    }
    if (type==='unit-test') {
      var qs=(slide.questions||[]).map(function(q,i){
        var opts=(q.options||[]).map(function(o,j){ return '<button class="ut-option" data-qi="'+i+'" data-oi="'+j+'" onclick="gsUtAnswer(this,'+i+','+j+','+q.correct+')">'+gsEscape(o)+'</button>'; }).join('');
        return '<div class="ut-q"><div class="ut-q-title"><span class="ut-q-num">'+(i+1)+'</span>'+gsEscape(q.q||q.question||'')+'</div><div class="ut-options">'+opts+'</div><div class="ut-explain" id="gsUtEx_'+i+'">'+gsEscape(q.explanation||'')+'</div></div>';
      }).join('');
      var total=(slide.questions||[]).length;
      return '<div class="slide-quiz"><span class="slide-badge badge-quiz">Unit Check</span><div class="slide-title">'+(slide.title||'Unit Recap')+'</div>'+(slide.body?'<div class="slide-body">'+slide.body+'</div>':'')+'<div class="unit-test" data-total="'+total+'" data-got="0">'+qs+'<div class="ut-score" id="gsUtScore"></div></div>'+sources+'</div>';
    }
    if (type==='hook') return '<div class="slide-hook"><span class="slide-badge badge-hook">Hook</span><div class="slide-title">'+(slide.title||'')+'</div><div class="slide-body">'+(slide.body||'')+'</div>'+(slide.callout?'<div class="slide-callout">'+slide.callout+'</div>':'')+reveal+sources+'</div>';
    if (type==='concept') {
      var bHtml='';
      if(slide.bullets&&slide.bullets.length){bHtml='<ul class="slide-bullets">'+slide.bullets.map(function(b){
        if(typeof b==='string')return '<li><span class="b-def b-span2">'+b+'</span></li>';
        var term=(b.term||b.label||''), def=(b.def||b.text||'');
        if(term&&def)return '<li><span class="b-term">'+term+'</span><span class="b-def">'+def+'</span></li>';
        if(term)return '<li><span class="b-term b-span2">'+term+'</span></li>';
        return '<li><span class="b-def b-span2">'+def+'</span></li>';
      }).join('')+'</ul>';}
      return '<div class="slide-concept"><span class="slide-badge badge-concept">Concept</span><div class="slide-title">'+(slide.title||'')+'</div>'+(slide.body?'<div class="slide-body">'+slide.body+'</div>':'')+bHtml+(slide.callout?'<div class="slide-callout">'+slide.callout+'</div>':'')+reveal+sources+'</div>';
    }
    if (type==='scenario') {
      var choicesHtml='';
      if(slide.choices&&slide.choices.length){
        var letters=['A','B','C','D'];
        choicesHtml='<div class="scenario-choices" id="gsScChoices">'+(slide.question?'<div class="slide-callout" style="margin-bottom:10px"><strong>Choose:</strong> '+slide.question+'</div>':'')+slide.choices.map(function(c,i){return '<button class="scenario-choice" onclick="gsRevealOutcome(this,'+i+')" data-outcome="'+encodeURIComponent(c.outcome||'')+'"><span class="scenario-choice-letter">'+letters[i]+'</span>'+c.text+'</button>';}).join('')+'<div id="gsScOutcome" style="display:none" class="scenario-outcome"></div></div>';
      }
      return '<div class="slide-scenario"><span class="slide-badge badge-scenario">Scenario</span><div class="slide-title">'+(slide.title||'Scenario')+'</div><div class="slide-body">'+(slide.situation||'')+'</div>'+choicesHtml+((!slide.choices||!slide.choices.length)&&slide.question?'<div class="slide-callout"><strong>Consider:</strong> '+slide.question+'</div>':'')+reveal+sources+'</div>';
    }
    if (type==='activity') return '<div class="slide-activity"><span class="slide-badge badge-activity">Activity</span><div class="slide-title">'+(slide.title||'')+'</div>'+((slide.instructions||slide.task)?'<div class="slide-body">'+(slide.instructions||slide.task)+'</div>':'')+(slide.steps?'<ol class="slide-steps">'+slide.steps.map(function(s){return '<li>'+s+'</li>';}).join('')+'</ol>':'')+(slide.callout?'<div class="slide-callout">'+slide.callout+'</div>':'')+reveal+sources+'</div>';
    if (type==='discussion') {
      var qHtml=(slide.questions||[]).map(function(q){return '<div class="slide-disc-q"><span class="sdq-num">'+(q.num||'')+'</span><span class="sdq-text">'+(q.text||q)+'</span></div>';}).join('');
      return '<div class="slide-concept"><span class="slide-badge badge-concept">Discussion</span><div class="slide-title">'+(slide.title||'Discussion')+'</div>'+(slide.body?'<div class="slide-body">'+slide.body+'</div>':'')+'<div class="slide-disc-qs">'+qHtml+'</div>'+reveal+sources+'</div>';
    }
    if (type==='quiz') {
      var opts=(slide.options||[]).map(function(opt,i){return '<button class="quiz-option" data-idx="'+i+'" onclick="gsAnswerQuiz(this,'+slide.correct+','+i+')">'+opt+'</button>';}).join('');
      return '<div class="slide-quiz"><span class="slide-badge badge-quiz">Quiz</span><div class="slide-title">'+(slide.question||'')+'</div><div class="quiz-options">'+opts+'</div><div id="gsQuizFb" style="display:none;margin-top:12px" class="slide-callout"></div>'+sources+'</div>';
    }
    if (type==='summary') {
      var pts=(slide.points||[]).map(function(p){return '<div class="summary-point"><span class="sp-icon">'+(p.icon||'•')+'</span><div><strong>'+(p.label||'')+'</strong>'+(p.text?' — '+p.text:'')+'</div></div>';}).join('');
      return '<div class="slide-summary"><span class="slide-badge badge-summary">Summary</span><div class="slide-title">'+(slide.title||'Key Takeaways')+'</div><div class="summary-points">'+pts+'</div>'+sources+'</div>';
    }
    return '<div class="slide-concept"><div class="slide-title">'+(slide.title||'')+'</div><div class="slide-body">'+(slide.body||'')+'</div>'+reveal+sources+'</div>';
  }

  function gsAnswerQuiz(btn, correct, chosen) {
    var area = document.getElementById('gsSlideArea');
    area.querySelectorAll('.quiz-option').forEach(function(b,i){
      b.disabled=true;
      if(i===correct)b.classList.add('correct');
      else if(i===chosen&&chosen!==correct)b.classList.add('incorrect');
    });
    var fb=document.getElementById('gsQuizFb');
    if(fb){var s=gsSlides[gsSlideIdx];fb.style.display='block';fb.innerHTML=(chosen===correct?'✅ Correct! ':'❌ Not quite. ')+(s.explanation||'');}
    gsSession.quizTotal++;
    if (chosen === correct) {
      gsSession.quizRight++;
      gsSession.streak++;
      gsAwardOnce('quiz:'+gsCurrentId+':'+gsSlideIdx, 10, 'Quiz answered correctly');
      if (window.diSlide && diSlide.celebrate) diSlide.celebrate(btn, gsSession.streak);
    } else {
      gsSession.streak = 0;
    }
    // Unlock the Next button — the pupil has engaged with the question.
    var next = document.getElementById('gsNextBtn');
    if (next) { next.disabled = false; next.removeAttribute('title'); }
  }

  function gsRevealOutcome(btn, idx) {
    var container = btn.closest('.scenario-choices');
    if (!container) return;
    container.classList.add('scenario-answered');
    btn.classList.add('scenario-chosen');
    var outcome = decodeURIComponent(btn.getAttribute('data-outcome')||'');
    var ob = document.getElementById('gsScOutcome');
    if (ob && outcome) { ob.style.display='block'; ob.innerHTML='<strong>Outcome:</strong> '+outcome; }
  }

  document.addEventListener('keydown',function(e){
    if(!document.getElementById('gsModal').classList.contains('open'))return;
    /* Native form controls keep their arrow-key and select-popup behaviour. */
    var tag=(e.target.tagName||'').toLowerCase();
    var inInput=(tag==='input'||tag==='textarea'||tag==='select'||e.target.isContentEditable);
    if(!inInput&&(e.key==='ArrowRight'||e.key==='ArrowDown'))gsNextSlide();
    if(!inInput&&(e.key==='ArrowLeft'||e.key==='ArrowUp'))gsPrevSlide();
    if(e.key==='Escape'){
      if(tag==='select')return;
      if(window.diSlide&&window.diSlide.fullscreen.isActive())return;
      gsCloseLesson();
    }
  });

  (function(){try{var s=localStorage.getItem('di_theme');if(s)document.documentElement.setAttribute('data-theme',s);}catch(e){}})();

  function initOffline(){
    var b=document.getElementById('offlineBanner');
    function u(){if(b)b.style.display=navigator.onLine?'none':'flex';}
    window.addEventListener('online',u);window.addEventListener('offline',u);u();
  }

  if(typeof initAEPSharedPlayer==='function')initAEPSharedPlayer();
  if(typeof initParentPlayer==='function')initParentPlayer();
  gsLoadProgress();
  gsRenderTrack();
  gsUpdateProgress();
  gsRenderReviewPanel();
  var gsTotal=GCSE_UNITS.reduce(function(s,u){return s+u.lessons.length;},0);
  if(gsDone.size===gsTotal)gsShowComplete();
  var entryParams=new URLSearchParams(location.search),entryLesson=Number(entryParams.get('lesson'));
  if(GCSE_UNITS.some(function(u){return u.lessons.some(function(l){return l.id===entryLesson;});})){
    gsOpenLesson(entryLesson);
    if(entryParams.get('evidence')==='1'){gsSlideIdx=gsSlides.findIndex(function(s){return s.type==='evidence';});if(gsSlideIdx<0)gsSlideIdx=0;gsRenderSlide();}
  }
  initOffline();
  if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(function(){});

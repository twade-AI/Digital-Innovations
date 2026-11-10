/* Adult progression uses the common lesson player, with separate saved progress.
   Completion records participation and self-review, never an assessed grade. */
window.DI_COURSE_PLAYER = {
  track: 'parents', progressKey: 'di_parent_v1',
  datesKey: 'di_parent_completed_at', xpKey: 'di_parent_xp',
  awardedKey: 'di_parent_xp_awarded_v1', reviewKey: 'di_parent_review_shown_at'
};

function initParentPlayer() {
  'use strict';
  var ids = GCSE_UNITS.flatMap(function(unit) { return unit.lessons.map(function(lesson) { return lesson.id; }); });
  function read(key, fallback) {
    try { var value = JSON.parse(localStorage.getItem(key)); return value == null ? fallback : value; }
    catch (error) { return fallback; }
  }
  function missing(id) {
    return window.DI_PARENT_INTERACTIONS ? DI_PARENT_INTERACTIONS.missing(id).map(function(label){return {label:label};}) : [{label:'Complete the lesson checks'}];
  }
  window.DI_PARENT_COMPLETION = {missing: missing};

  // Parent work must never award pupil XP or show quiz scores as a qualification.
  gsAwardOnce = function() {};
  gsAddXP = function() {};
  gsRenderReviewPanel = function() {};
  gsLoadProgress = function() {
    var saved = read(GS_KEY, []);
    gsDone = new Set((Array.isArray(saved) ? saved : []).filter(function(id) { return ids.includes(id) && !missing(id).length; }));
  };
  gsMarkDone = function(id) {
    if (!ids.includes(id)) return false;
    var remaining = missing(id);
    if (remaining.length) {
      var checksIndex = gsSlides.findIndex(function(slide) { return slide.type === 'parent-completion'; });
      if (checksIndex >= 0 && gsSlideIdx !== checksIndex) { gsSlideIdx = checksIndex; gsRenderSlide(); }
      var studio = document.querySelector('#gsSlideArea .parent-checks');
      if (studio) {
        var message = studio.querySelector('.parent-completion-message');
        if (!message) { message = document.createElement('div'); message.className = 'parent-completion-message'; message.setAttribute('role','alert'); message.tabIndex = -1; studio.prepend(message); }
        message.innerHTML = '<strong>Finish the lesson checks</strong><p>Try the remaining lesson checks:</p><ul>' + remaining.map(function(item) { return '<li>' + gsEscape(item.label) + '</li>'; }).join('') + '</ul><p>Choose your answers and use Check answer for each question. Use the feedback to review your choices and try again.</p>';
        message.focus({preventScroll:true}); message.scrollIntoView({block:'start',behavior:'instant'});
      }
      return false;
    }
    var next = new Set(gsDone); next.add(id);
    try { localStorage.setItem(GS_KEY, JSON.stringify(Array.from(next))); }
    catch (error) {
      var status = document.querySelector('.parent-check-status');
      if (status) { status.textContent = 'Completion could not be saved on this device. Check your browser storage settings, then try again.'; status.scrollIntoView({block:'center'}); }
      return false;
    }
    gsDone = next;
    var dates = gsLoadDates();
    if (!dates[id]) { dates[id] = new Date().toISOString().slice(0,10); gsSaveDates(dates); }
    gsRenderTrack(); gsUpdateProgress();
    if (gsDone.size === ids.length) gsShowComplete();
    return true;
  };
  gsShowComplete = function() {
    if (window.DI_PARENT_CERTIFICATE) DI_PARENT_CERTIFICATE.sync();
  };
  gsShowResults = function(wasDone) {
    var area = document.getElementById('gsSlideArea'), nextId = gsNextLessonId(gsCurrentId);
    area.innerHTML = '<section class="parent-results"><span class="gs-hero-badge">Put into practice</span><h2 class="slide-title">' + (wasDone ? 'A useful return visit.' : 'Lesson complete.') + '</h2><p>You have worked through the lesson checks and their feedback. Choose one idea to try at home. Return to the examples whenever you need them.</p><p><strong>' + gsDone.size + ' of ' + ids.length + ' lessons complete.</strong></p><div class="parent-result-actions"><button class="btn btn-primary" id="diResultsPrimary" type="button">' + (nextId ? 'Next lesson →' : 'Back to course') + '</button><button class="btn btn-secondary" id="parentReviewWork" type="button">Review the checks</button><button class="btn btn-secondary" type="button" id="parentBackToCourse">Back to course</button></div></section>';
    if (window.diSlide && diSlide.resetScroll) diSlide.resetScroll(area);
    document.getElementById('diResultsPrimary').onclick = nextId ? function() { gsOpenLesson(nextId); } : gsCloseLesson;
    document.getElementById('parentReviewWork').onclick = function() { document.getElementById('gsNextBtn').style.visibility='visible'; gsRenderSlide(); };
    document.getElementById('parentBackToCourse').onclick = gsCloseLesson;
    var next = document.getElementById('gsNextBtn'); next.style.visibility = 'hidden';
    var prev = document.getElementById('gsPrevBtn'); prev.disabled = false;
    prev.onclick = function() { prev.onclick = function() { gsPrevSlide(); }; gsRenderSlide(); };
    var heading = area.querySelector('h2'); heading.tabIndex = -1; heading.focus({preventScroll:true});
  };
  gsContinueCourse = function() {
    var id = ids.find(function(id) { return !gsDone.has(id); });
    if (id) gsOpenLesson(id); else document.getElementById('gsComplete').scrollIntoView({block:'start'});
  };
  var html = gsRenderSlideHTML;
  gsRenderSlideHTML = function(slide) {
    if (slide.type === 'parent-completion' || slide.type === 'parent-interaction') return DI_PARENT_INTERACTIONS.render(Object.assign({},slide,{lessonId:gsCurrentId,slideIndex:gsSlideIdx}));
    return html(slide);
  };
  var render = gsRenderSlideInner;
  gsRenderSlideInner = function() {
    render();
    var next = document.getElementById('gsNextBtn');
    if (gsSlideIdx === gsSlides.length - 1) next.textContent = gsDone.has(gsCurrentId) ? 'Review completion →' : 'Finish lesson ✓';
    var badge = document.querySelector('#gsSlideArea .slide-badge.badge-hook');
    if (badge) badge.textContent = 'Start here';
    var notes = document.querySelector('#gsSlideArea .slide-notes');
    if (notes) notes.remove();
    var slide = gsSlides[gsSlideIdx];
    if (slide.copyText) {
      var copy = document.createElement('button'); copy.type='button'; copy.className='btn btn-secondary'; copy.textContent='Copy practice text';
      var status = document.createElement('p'); status.setAttribute('role','status');
      copy.onclick = async function(){
        try { await navigator.clipboard.writeText(slide.copyText); status.textContent='Copied. Switch to your AI tab and paste it there.'; }
        catch(error) { status.textContent='Copy is unavailable in this browser. Select the practice text shown above and use your device’s Copy command.'; }
      };
      document.getElementById('gsSlideArea').append(copy,status);
    }
    document.getElementById('gsFsBtn').title = 'Toggle full-screen reading view';
  };
  var open = gsOpenLesson;
  gsOpenLesson = function(id) {
    if (!ids.includes(id)) return;
    document.getElementById('gsPrevBtn').onclick = function() { gsPrevSlide(); };
    open(id);
  };
  var updateProgress = gsUpdateProgress;
  gsUpdateProgress = function() {
    updateProgress();
    document.querySelector('.gs-progress-track').setAttribute('aria-valuenow', String(gsDone.size));
    if (window.DI_PARENT_CERTIFICATE) DI_PARENT_CERTIFICATE.sync();
  };
  var track = gsRenderTrack;
  gsRenderTrack = function() {
    track();
    document.getElementById('gsHero').style.display = '';
    document.querySelectorAll('.gs-lesson-meta').forEach(function(label){label.textContent=label.textContent.replace(' · Updated lesson','');});
    document.querySelectorAll('.gs-unit-domain').forEach(function(label) { label.removeAttribute('title'); });
  };
  document.getElementById('parentUnitNav').innerHTML = GCSE_UNITS.map(function(unit,i) {
    return '<a href="#gs-unit-' + (i+1) + '">' + unit.title + '</a>';
  }).join('');
  function refreshChecks() {
    var previous = new Set(gsDone);
    gsLoadProgress();
    if (previous.size !== gsDone.size) { try { gsSaveProgress(); } catch(error) {} }
    gsRenderTrack(); gsUpdateProgress();
  }
  window.addEventListener('storage', function(event) {
    if (event.key === null || event.key === GS_KEY || /^di_parent_checks_v1_/.test(event.key)) refreshChecks();
  });
  document.addEventListener('parent-checks-changed', refreshChecks);
  if(typeof initParentQuickStart==='function')initParentQuickStart();
}

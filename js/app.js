/* ── App Logic ── Digital Innovations Course Portal ─────── */

const STORAGE_KEY = 'di_progress';
const STREAK_KEY  = 'di_streak';

/* ── State ─────────────────────────────────────── */
let completedLessons = loadProgress();
let currentFilter = 'all';
let currentTagFilter = null;
let bookmarkedLessons = loadBookmarks();
let quizScores = loadQuizScores();

/* ── Persistence ───────────────────────────────── */
function loadProgress() {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []); }
  catch { return new Set(); }
}
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedLessons]));
  updateStreak();
  if (typeof scheduleSync === 'function') scheduleSync();
}
function updateStreak() {
  var data = JSON.parse(localStorage.getItem(STREAK_KEY) || '{"last":"","count":0,"days":[]}');
  var today = new Date().toISOString().slice(0, 10);
  var yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (!data.days) data.days = [];
  if (!data.days.includes(today)) data.days.push(today);
  if (data.days.length > 90) data.days = data.days.slice(-90);
  if (data.last === today) { localStorage.setItem(STREAK_KEY, JSON.stringify(data)); return; }
  data.count = data.last === yesterday ? data.count + 1 : 1;
  data.last = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(data));
}
function getStreak() {
  const data = JSON.parse(localStorage.getItem(STREAK_KEY) || '{"last":"","count":0}');
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  return (data.last === today || data.last === yesterday) ? data.count : 0;
}

/* ── Theme Toggle ─────────────────────────────── */
function initTheme() {
  var saved = localStorage.getItem('di_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}
function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme');
  var next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('di_theme', next);
  updateThemeIcon(next);
  updateSettingsIcons();
}
function updateThemeIcon(theme) {
  var icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}
initTheme();

/* ── Accessibility Toggles ────────────────────── */
function toggleContrast() {
  var on = document.documentElement.getAttribute('data-contrast') === 'high';
  var next = on ? 'normal' : 'high';
  document.documentElement.setAttribute('data-contrast', next);
  localStorage.setItem('di_contrast', next);
  var btn = document.getElementById('contrastBtn');
  if (btn) btn.classList.toggle('a11y-active', !on);
}
function toggleDyslexiaFont() {
  var on = document.documentElement.getAttribute('data-font') === 'dyslexic';
  var next = on ? 'normal' : 'dyslexic';
  document.documentElement.setAttribute('data-font', next);
  localStorage.setItem('di_font', next);
  var btn = document.getElementById('dyslexiaBtn');
  if (btn) btn.classList.toggle('a11y-active', !on);
}
function initA11y() {
  var contrast = localStorage.getItem('di_contrast');
  if (contrast === 'high') document.documentElement.setAttribute('data-contrast', 'high');
  var font = localStorage.getItem('di_font');
  if (font === 'dyslexic') document.documentElement.setAttribute('data-font', 'dyslexic');
  updateSettingsIcons();
}
initA11y();

/* ── Settings Dropdown ────────────────────────── */
function toggleSettingsMenu() {
  var menu = document.getElementById('settingsMenu');
  var btn  = document.getElementById('settingsBtn');
  if (!menu) return;
  var open = menu.classList.toggle('open');
  menu.setAttribute('aria-hidden', String(!open));
  if (btn) btn.classList.toggle('active', open);
  if (open) updateSettingsIcons();
}
function updateSettingsIcons() {
  var isDark     = document.documentElement.getAttribute('data-theme') !== 'light';
  var isContrast = document.documentElement.getAttribute('data-contrast') === 'high';
  var isDyslexic = document.documentElement.getAttribute('data-font') === 'dyslexic';
  var ti = document.getElementById('smThemeIcon');
  if (ti) ti.textContent = isDark ? '☀️' : '🌙';
  var cb = document.getElementById('smContrastBadge');
  if (cb) cb.style.display = isContrast ? 'inline' : 'none';
  var db = document.getElementById('smDyslexiaBadge');
  if (db) db.style.display = isDyslexic ? 'inline' : 'none';
}
// Close menu when clicking outside
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('settingsWrap');
  if (wrap && !wrap.contains(e.target)) {
    var menu = document.getElementById('settingsMenu');
    var btn  = document.getElementById('settingsBtn');
    if (menu) { menu.classList.remove('open'); menu.setAttribute('aria-hidden','true'); }
    if (btn)  btn.classList.remove('active');
  }
});

/* ── Bookmarks ────────────────────────────────── */
function loadBookmarks() {
  try { return new Set(JSON.parse(localStorage.getItem('di_bookmarks')) || []); }
  catch(e) { return new Set(); }
}
function saveBookmarks() {
  localStorage.setItem('di_bookmarks', JSON.stringify([...bookmarkedLessons]));
  if (typeof scheduleSync === 'function') scheduleSync();
}
function toggleBookmark(id) {
  if (bookmarkedLessons.has(id)) bookmarkedLessons.delete(id);
  else bookmarkedLessons.add(id);
  saveBookmarks();
  renderUnits();
}

/* ── Quiz Scores ──────────────────────────────── */
function loadQuizScores() {
  try { return JSON.parse(localStorage.getItem('di_quiz_scores')) || {}; }
  catch(e) { return {}; }
}
function saveQuizScore(lessonId, correct) {
  quizScores[lessonId] = { correct: correct, date: new Date().toISOString().slice(0, 10) };
  localStorage.setItem('di_quiz_scores', JSON.stringify(quizScores));
  if (typeof scheduleSync === 'function') scheduleSync();
}

/* ── Navigation ────────────────────────────────── */
function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + name)?.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === name);
  });
  document.querySelector('.nav-links')?.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'progress') renderProgress();
  if (name === 'map') renderCourseMap();
  if (name === 'home') { renderRecentlyViewed(); updateTimeEstimate(); }
  if (name === 'exemplars') renderExemplars();
  if (name === 'timeline') renderTimeline();
  if (name === 'news') renderFullNewsGrid();
}

function toggleMobileNav() {
  document.querySelector('.nav-links')?.classList.toggle('open');
}

/* ── Units Rendering ───────────────────────────── */
function renderUnits() {
  const container = document.getElementById('unitsContainer');
  container.innerHTML = UNITS.map((unit, idx) => `
    <div class="unit-block" id="unit-${idx}">
      <div class="unit-header" onclick="toggleUnit(${idx})">
        <span class="unit-icon">${unit.icon}</span>
        <div class="unit-meta">
          <h3>Unit ${idx + 1}: ${unit.title}</h3>
          <p>${unit.lessons.length} lessons &bull; ${unitProgress(unit)} complete</p>
        </div>
        <div class="unit-progress">
          <div class="unit-progress-fill" style="width:${unitProgressPct(unit)}%"></div>
        </div>
        <button class="unit-toggle" aria-label="Toggle">▼</button>
      </div>
      <div class="lesson-list" id="lessons-${idx}">
        ${unit.lessons.map(l => lessonRow(l, unit)).join('')}
      </div>
    </div>
  `).join('');
}

function diffBadge(d) {
  if (!d) return '';
  var labels = {beginner:'Beginner', intermediate:'Intermediate', advanced:'Advanced'};
  return '<span class="diff-badge diff-' + d + '">' + (labels[d] || d) + '</span>';
}

function lessonRow(lesson, unit) {
  const done = completedLessons.has(lesson.id);
  const slides = getLessonSlides(lesson.id, lesson, unit);
  const mins = slides.length * 5;
  const tagHidden = currentTagFilter && lesson.tags.indexOf(currentTagFilter) === -1;
  const diffHidden = currentDiffFilter && lesson.difficulty !== currentDiffFilter;
  const hidden = tagHidden || diffHidden;
  return `
    <div class="lesson-item${hidden ? ' tag-hidden' : ''}" data-id="${lesson.id}" data-tags="${lesson.tags.join(' ')}">
      <div class="lesson-check ${done ? 'done' : ''}" onclick="event.stopPropagation();toggleLesson(${lesson.id})" title="Mark complete">✓</div>
      <div class="lesson-info" onclick="openLesson(${lesson.id})">
        <div class="lesson-num">Lesson ${lesson.id} <span class="lesson-time">~${mins} min</span>${diffBadge(lesson.difficulty)}</div>
        <div class="lesson-title">${lesson.title}</div>
      </div>
      <button class="bookmark-btn${bookmarkedLessons.has(lesson.id) ? ' bookmarked' : ''}" onclick="event.stopPropagation();toggleBookmark(${lesson.id})" title="${bookmarkedLessons.has(lesson.id) ? 'Remove bookmark' : 'Bookmark'}" aria-label="Bookmark lesson">${bookmarkedLessons.has(lesson.id) ? '★' : '☆'}</button>
      <button class="lesson-expand" onclick="openLesson(${lesson.id})" title="View details">→</button>
    </div>`;
}

function unitProgress(unit) {
  const done = unit.lessons.filter(l => completedLessons.has(l.id)).length;
  return `${done}/${unit.lessons.length}`;
}
function unitProgressPct(unit) {
  const done = unit.lessons.filter(l => completedLessons.has(l.id)).length;
  return Math.round((done / unit.lessons.length) * 100);
}

function toggleUnit(idx) {
  const list = document.getElementById('lessons-' + idx);
  const btn = list.previousElementSibling.querySelector('.unit-toggle');
  list.classList.toggle('open');
  btn.classList.toggle('open');
}

function scrollToUnit(idx) {
  setTimeout(() => {
    const el = document.getElementById('unit-' + idx);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const list = document.getElementById('lessons-' + idx);
      if (!list.classList.contains('open')) toggleUnit(idx);
    }
  }, 100);
}

/* ── Lesson Toggle & Modal ─────────────────────── */
function toggleLesson(id) {
  var wasComplete = completedLessons.has(id);
  if (wasComplete) completedLessons.delete(id);
  else completedLessons.add(id);
  saveProgress();
  renderUnits();
  updateHomeStats();
  if (!wasComplete) {
    launchConfetti();
    addXP(20, 'Lesson completed');
    setTimeout(checkAndAwardBadges, 600);
    setTimeout(checkMilestone, 900);
    setTimeout(updateReviewDueBadge, 200);
  }
}

function findLesson(id) {
  for (const u of UNITS) for (const l of u.lessons) if (l.id === id) return { lesson: l, unit: u };
  return null;
}

let currentSlideIndex = 0;
let currentSlides = [];
let currentLessonId = null;

var UNIT_COLOURS = ['#4F8EF7','#9B59B6','#E74C3C','#F39C12','#2ECC71','#1ABC9C'];

function getNextLessonId(currentId) {
  var allLessons = [];
  UNITS.forEach(function(u) { u.lessons.forEach(function(l) { allLessons.push(l.id); }); });
  var idx = allLessons.indexOf(currentId);
  return idx >= 0 && idx < allLessons.length - 1 ? allLessons[idx + 1] : null;
}

function saveReflection(lessonId, slideIdx, text) {
  var key = 'di_reflection_' + lessonId + '_' + slideIdx;
  localStorage.setItem(key, text);
}

function loadReflection(lessonId, slideIdx) {
  var key = 'di_reflection_' + lessonId + '_' + slideIdx;
  return localStorage.getItem(key) || '';
}

function getLessonSlides(id, lesson, unit) {
  // Try curated slides first, then fallback to generated
  var all = Object.assign({}, (typeof SLIDES_U1U2 !== 'undefined' ? SLIDES_U1U2 : {}),
                               (typeof SLIDES_U3U4 !== 'undefined' ? SLIDES_U3U4 : {}),
                               (typeof SLIDES_U5U6 !== 'undefined' ? SLIDES_U5U6 : {}));
  if (all[id]) return all[id];
  return generateSlides(lesson, unit);
}

function renderResourceLinks(lesson) {
  if (!lesson.resources || lesson.resources.length === 0) return '';
  var cards = lesson.resources.map(function(rid) {
    var r = RESOURCES.find(function(x) { return x.id === rid; });
    if (!r) return '';
    return '<div class="disc-q" onclick="closeModal();setTimeout(function(){openResource(\'' + r.id + '\')},200)" style="cursor:pointer">' +
      '<span class="disc-q-num" style="font-size:.9rem">📎</span>' +
      '<span class="disc-q-text"><strong>' + r.title + '</strong><br><span style="font-size:.8rem;color:var(--text-dim)">' + r.desc + '</span></span>' +
    '</div>';
  }).join('');
  return '<div class="interactive-wrapper" style="margin-top:24px">' +
    '<div class="interactive-label">📚 Linked Resources</div>' +
    '<div class="disc-questions">' + cards + '</div>' +
  '</div>';
}

function openLesson(id) {
  var found = findLesson(id);
  if (!found) return;
  var lesson = found.lesson;
  var unit = found.unit;
  var slides = getLessonSlides(id, lesson, unit);
  currentSlides = slides;
  currentLessonId = id;
  currentSlideIndex = 0;

  // Track in recently viewed
  addToRecentlyViewed(id);

  var modal = document.getElementById('lessonModal');
  modal.classList.add('modal--lesson');
  var unitColour = UNIT_COLOURS[unit.id] || '#4F8EF7';
  var doneClass = completedLessons.has(id) ? ' lv-lesson-done' : '';

  // Build slide-type dots
  var dotsHtml = slides.map(function(s, i) {
    return '<span class="lv-dot lv-dot-' + s.type + (i === 0 ? ' active' : '') + '" data-idx="' + i + '" onclick="jumpToSlide(' + i + ')" title="' + (s.title || s.question || s.type) + '"></span>';
  }).join('');

  document.getElementById('modalBody').innerHTML =
    '<div class="lv-header' + doneClass + '" data-colour="' + unitColour + '" style="--unit-colour:' + unitColour + '">' +
      '<div class="lv-meta">' +
        '<span class="lv-unit-label">Unit ' + (unit.id + 1) + ': ' + unit.title + '</span>' +
        '<span class="lv-slide-count">Slide <span id="lvSlideNum">1</span> of ' + slides.length + '</span>' +
        '<button class="lv-print-btn" onclick="window.print()" title="Print lesson">&#128424;</button>' +
      '</div>' +
      '<div class="lv-progress-track">' +
        '<div class="lv-progress-fill" id="lvProgressFill" style="width:' + (100/slides.length) + '%"></div>' +
      '</div>' +
    '</div>' +
    '<div class="lv-dots" id="lvDots">' + dotsHtml + '</div>' +
    '<div class="lv-slide-area" id="lvSlideArea"></div>' +
    '<div class="lv-footer">' +
      '<button class="btn btn-secondary" id="lvPrev" onclick="navigateSlide(-1)">&#8592; Back</button>' +
      '<button class="btn btn-primary" id="lvNext" onclick="navigateSlide(1)">Next &#8594;</button>' +
    '</div>';

  renderSlide(0);
  modal.classList.add('open');
}

function renderSlide(index) {
  var slide = currentSlides[index];
  var area = document.getElementById('lvSlideArea');
  var done = completedLessons.has(currentLessonId);
  var found = findLesson(currentLessonId);
  var lesson = found ? found.lesson : null;

  var html = '';

  if (slide.type === 'hook') {
    var tagHtml = lesson ? lesson.tags.map(function(t) { return '<span class="modal-tag">' + t + '</span>'; }).join('') : '';
    var diffHtml = (lesson && lesson.difficulty) ? diffBadge(lesson.difficulty) : '';
    // Prerequisite nudge
    var prereqHtml = '';
    if (lesson && lesson.prereqs && lesson.prereqs.length > 0) {
      var unmet = lesson.prereqs.filter(function(pid) { return !completedLessons.has(pid); });
      if (unmet.length > 0) {
        var prereqLinks = unmet.map(function(pid) {
          var pf = findLesson(pid);
          return pf ? '<span onclick="closeModal();setTimeout(function(){openLesson(' + pid + ')},200)" style="cursor:pointer;color:var(--primary-light)">Lesson ' + pid + ': ' + pf.lesson.title + '</span>' : '';
        }).filter(Boolean).join(', ');
        prereqHtml = '<div style="background:rgba(245,158,11,.08);border-left:3px solid var(--warning);padding:10px 14px;border-radius:6px;margin-bottom:16px;font-size:.85rem;color:var(--text-muted)">' +
          '💡 <strong>Suggested preparation:</strong> You may find this lesson easier after completing ' + prereqLinks + '.</div>';
      }
    }
    html = '<div class="slide-hook">' +
      '<span class="slide-badge badge-hook">Opening</span>' +
      '<div class="slide-title">' + slide.title + (diffHtml ? '<span style="margin-left:8px">' + diffHtml + '</span>' : '') + '</div>' +
      prereqHtml +
      '<div class="hook-body">' + slide.body + '</div>' +
      '<div class="interactive-wrapper" style="margin-top:24px">' +
        '<div class="interactive-label">&#127991;&#65039; Tags</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap">' + tagHtml + '</div>' +
      '</div>' +
    '</div>';
  }

  else if (slide.type === 'concept') {
    var bulletsHtml = '';
    if (slide.bullets && slide.bullets.length > 0) {
      bulletsHtml = '<ul class="concept-bullets">' +
        slide.bullets.map(function(b) { return '<li>' + b + '</li>'; }).join('') +
      '</ul>';
    }
    var calloutHtml = '';
    if (slide.callout) {
      calloutHtml = '<div class="concept-callout"><strong>Key insight:</strong> ' + slide.callout + '</div>';
    } else if (slide.title) {
      calloutHtml = '<div class="concept-callout"><strong>Learning focus:</strong> ' + slide.title + '</div>';
    }
    var indexLabel = slide.index ? 'Concept ' + slide.index + '/' + slide.total : 'Concept';
    html = '<div class="slide-concept">' +
      '<span class="slide-badge badge-concept">' + indexLabel + '</span>' +
      '<div class="slide-title">' + slide.title + '</div>' +
      '<div class="concept-body">' + slide.body + '</div>' +
      bulletsHtml +
      calloutHtml +
    '</div>';
  }

  else if (slide.type === 'video') {
    html = '<div class="slide-video">' +
      '<span class="slide-badge badge-video">Video</span>' +
      '<div class="slide-title">' + slide.title + '</div>' +
      '<div class="concept-body">' + slide.intro + '</div>' +
      '<div class="video-wrapper">' +
        '<iframe src="https://www.youtube-nocookie.com/embed/' + slide.videoId + '?rel=0" ' +
          'frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
          'allowfullscreen></iframe>' +
      '</div>' +
      '<div class="video-credit">' + slide.credit + '</div>' +
    '</div>';
  }

  else if (slide.type === 'activity') {
    var stepsHtml = '';
    if (slide.steps && slide.steps.length > 0) {
      stepsHtml = '<ol style="list-style:none;counter-reset:step;display:flex;flex-direction:column;gap:10px;margin-top:16px">' +
        slide.steps.map(function(s, idx) {
          return '<li style="counter-increment:step;display:flex;align-items:flex-start;gap:12px;font-size:.93rem;color:var(--text-muted);line-height:1.5">' +
            '<span style="min-width:28px;height:28px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;flex-shrink:0">' + (idx + 1) + '</span>' +
            s +
          '</li>';
        }).join('') +
      '</ol>';
    }
    html = '<div class="slide-concept">' +
      '<span class="slide-badge badge-activity">Activity</span>' +
      '<div class="slide-title">' + slide.title + '</div>' +
      '<div class="concept-body">' + slide.instructions + '</div>' +
      stepsHtml +
    '</div>';
  }

  else if (slide.type === 'discussion') {
    var qHtml = slide.questions.map(function(q) {
      return '<div class="disc-q" onclick="this.classList.toggle(\'discussed\')">' +
        '<span class="disc-q-num">' + q.num + '</span>' +
        '<span class="disc-q-text">' + q.text + '</span>' +
      '</div>';
    }).join('');
    var voteKey = 'di_vote_' + currentLessonId + '_' + index;
    var savedVote = localStorage.getItem(voteKey);
    var voteHtml = '<div class="debate-vote-row">' +
      '<button class="debate-vote-btn' + (savedVote === 'agree' ? ' voted' : '') + '" data-stance="agree" onclick="voteDebate(' + currentLessonId + ',' + index + ',\'agree\')">✅ Agree</button>' +
      '<button class="debate-vote-btn' + (savedVote === 'disagree' ? ' voted' : '') + '" data-stance="disagree" onclick="voteDebate(' + currentLessonId + ',' + index + ',\'disagree\')">❌ Disagree</button>' +
      '<button class="debate-vote-btn' + (savedVote === 'unsure' ? ' voted' : '') + '" data-stance="unsure" onclick="voteDebate(' + currentLessonId + ',' + index + ',\'unsure\')">🤔 Not sure yet</button>' +
      '<div id="debateVoteResult" style="' + (savedVote ? '' : 'display:none;') + 'font-size:.82rem;color:var(--text-dim);width:100%;margin-top:4px">' +
        (savedVote ? getVoteMessage(savedVote) : '') +
      '</div>' +
    '</div>';
    html = '<div class="slide-discussion">' +
      '<span class="slide-badge badge-discussion">Discussion</span>' +
      '<div class="slide-title">' + slide.title + '</div>' +
      '<div class="disc-intro">Discuss these questions with a partner or reflect on them individually.</div>' +
      voteHtml +
      '<div class="disc-questions">' + qHtml + '</div>' +
      '<div class="interactive-wrapper" style="margin-top:24px">' +
        '<div class="interactive-label">&#9998;&#65039; Reflection</div>' +
        '<div class="reflection-prompt">Write your thoughts on the questions above.</div>' +
        '<div class="reflection-save-bar"><textarea class="reflection-textarea" id="reflectionText" placeholder="Type your reflection here...">' + loadReflection(currentLessonId, index).replace(/</g, '&lt;') + '</textarea>' +
        '<span class="saved-indicator" id="reflectionSaved" style="display:none">&#10003; Saved</span></div>' +
      '</div>' +
    '</div>';
  }

  else if (slide.type === 'scenario') {
    var choicesHtml = slide.choices.map(function(c, i) {
      var esc = c.outcome.replace(/&/g,'&amp;').replace(/"/g,'&quot;');
      return '<div class="scenario-choice" data-outcome="' + esc + '" onclick="revealScenarioOutcome(this)">' +
        '<span class="scenario-choice-letter">' + String.fromCharCode(65 + i) + '</span>' +
        '<span class="scenario-choice-text">' + c.text + '</span>' +
      '</div>';
    }).join('');
    html = '<div class="slide-scenario">' +
      '<span class="slide-badge badge-scenario">Scenario</span>' +
      '<div class="slide-title">' + slide.title + '</div>' +
      '<div class="scenario-situation">' + slide.situation + '</div>' +
      '<div class="scenario-question">' + slide.question + '</div>' +
      '<div class="scenario-choices" id="scenarioChoices"' +
        ' data-lesson-id="' + currentLessonId + '"' +
        ' data-slide-idx="' + index + '"' +
        ' data-choice-count="' + slide.choices.length + '">' +
        choicesHtml +
      '</div>' +
      '<div class="scenario-outcome" id="scenarioOutcome" style="display:none"></div>' +
    '</div>';
  }

  else if (slide.type === 'quiz') {
    var optionsHtml = slide.options.map(function(opt, i) {
      return '<button class="quiz-option" data-idx="' + i + '" onclick="checkQuiz(this,' + slide.correct + ',' + index + ')">' +
        '<span class="quiz-option-letter">' + String.fromCharCode(65 + i) + '</span>' +
        '<span class="quiz-option-text">' + opt + '</span>' +
      '</button>';
    }).join('');
    // Build "Learn More" section from linked resources or slide.learnMore
    var learnMoreHtml = '';
    if (slide.learnMore) {
      learnMoreHtml = '<div id="quizLearnMore" class="quiz-learn-more" style="display:none">' +
        '<div class="interactive-label">&#128161; Learn More</div>' +
        '<div style="font-size:.88rem;color:var(--text-muted);margin-top:8px">' + slide.learnMore + '</div>' +
      '</div>';
    } else if (lesson && lesson.resources && lesson.resources.length > 0) {
      var resLinks = lesson.resources.map(function(rid) {
        var r = RESOURCES.find(function(x) { return x.id === rid; });
        if (!r) return '';
        return '<span class="learn-more-link" onclick="closeModal();setTimeout(function(){openResource(\'' + r.id + '\')},200)">' + r.title + ' &#8594;</span>';
      }).filter(Boolean).join('');
      if (resLinks) {
        learnMoreHtml = '<div id="quizLearnMore" class="quiz-learn-more" style="display:none">' +
          '<div class="interactive-label">&#128218; Dig Deeper</div>' +
          '<div class="learn-more-links">' + resLinks + '</div>' +
        '</div>';
      }
    }
    html = '<div class="slide-quiz">' +
      '<span class="slide-badge badge-quiz">Knowledge Check</span>' +
      '<div class="slide-title">' + slide.question + '</div>' +
      '<div class="quiz-options" id="quizOptions">' + optionsHtml + '</div>' +
      '<div class="quiz-explanation" id="quizExplanation" style="display:none">' +
        '<strong>Explanation:</strong> ' + slide.explanation +
      '</div>' +
      learnMoreHtml +
    '</div>';
  }

  else if (slide.type === 'builder' && slide.widget === 'ptfc') {
    html = '<div class="slide-concept">' +
      '<span class="slide-badge badge-activity">Interactive Tool</span>' +
      '<div class="slide-title">' + slide.title + '</div>' +
      '<div class="concept-body">' + (slide.hint || '') + '</div>' +
      '<div class="ptfc-builder">' +
        '<div class="ptfc-row"><label class="ptfc-label ptfc-p"><span>P</span>Persona</label>' +
        '<textarea class="ptfc-input" id="ptfc_p" placeholder="e.g. You are an experienced AQA A-Level Biology examiner who marks at distinction level." oninput="assemblePTFC()"></textarea></div>' +
        '<div class="ptfc-row"><label class="ptfc-label ptfc-t"><span>T</span>Task</label>' +
        '<textarea class="ptfc-input" id="ptfc_t" placeholder="e.g. Explain the light-dependent reactions of photosynthesis, focusing on what happens to electrons in the thylakoid membrane." oninput="assemblePTFC()"></textarea></div>' +
        '<div class="ptfc-row"><label class="ptfc-label ptfc-f"><span>F</span>Format</label>' +
        '<textarea class="ptfc-input" id="ptfc_f" placeholder="e.g. Brief overview (2 sentences), then numbered step-by-step (max 2 sentences each), then 3 self-test questions with answers." oninput="assemblePTFC()"></textarea></div>' +
        '<div class="ptfc-row"><label class="ptfc-label ptfc-c"><span>C</span>Context</label>' +
        '<textarea class="ptfc-input" id="ptfc_c" placeholder="e.g. I understand basic redox reactions but always confuse Photosystem I and II. Year 13 OCR. Exam in 4 weeks. Need to understand the mechanism, not just memorise." oninput="assemblePTFC()"></textarea></div>' +
        '<div class="ptfc-output-section">' +
          '<div class="interactive-label">Assembled Prompt</div>' +
          '<div class="ptfc-output" id="ptfcOutput"><span style="color:var(--text-dim);font-style:italic">Fill in the fields above to see your prompt...</span></div>' +
          '<div class="ptfc-actions">' +
            '<button class="btn btn-primary" onclick="copyPTFC()" id="ptfcCopyBtn">Copy to Clipboard</button>' +
            '<button class="btn btn-secondary" onclick="loadPTFCExample()">Load Example</button>' +
            '<button class="btn btn-secondary" onclick="clearPTFC()">Clear</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  else if (slide.type === 'chat') {
    var msgs = (slide.messages || []).map(function(m) {
      return '<div class="chat-msg chat-msg-' + m.role + '">' +
        '<div class="chat-msg-avatar">' + (m.role === 'user' ? '👤' : '🤖') + '</div>' +
        '<div class="chat-msg-bubble">' + m.content + '</div>' +
      '</div>';
    }).join('');
    html = '<div class="slide-concept">' +
      '<span class="slide-badge badge-activity">Chat Simulator</span>' +
      '<div class="slide-title">' + slide.title + '</div>' +
      (slide.intro ? '<div class="concept-body">' + slide.intro + '</div>' : '') +
      '<div class="chat-sim">' +
        '<div class="chat-sim-header"><span class="chat-sim-tool">' + (slide.tool || 'Claude') + '</span><span class="chat-sim-subtitle">AI Conversation Example</span></div>' +
        '<div class="chat-sim-messages">' + msgs + '</div>' +
      '</div>' +
      (slide.annotation ? '<div class="chat-annotation"><strong>What to notice:</strong> ' + slide.annotation + '</div>' : '') +
    '</div>';
  }

  else if (slide.type === 'summary') {
    var pointsHtml = slide.points.map(function(p) {
      var label = p.label ? '<strong>' + p.label + '</strong> — ' + p.text : '<strong>' + p.text + '</strong>';
      return '<div class="summary-point">' +
        '<span class="sp-icon">' + p.icon + '</span>' +
        '<span class="sp-text">' + label + '</span>' +
      '</div>';
    }).join('');
    var resourceHtml = lesson ? renderResourceLinks(lesson) : '';
    html = '<div class="slide-summary">' +
      '<span class="slide-badge badge-summary">Summary</span>' +
      '<div class="slide-title">' + slide.title + '</div>' +
      '<div class="summary-intro">Here\'s what you should take away from this lesson:</div>' +
      '<div class="summary-points">' + pointsHtml + '</div>' +
      resourceHtml +
      '<div style="margin-top:24px;display:flex;gap:10px;flex-wrap:wrap;justify-content:center">' +
        '<button class="btn ' + (done ? 'btn-secondary' : 'btn-primary') + '" onclick="toggleLesson(' + currentLessonId + ');renderSlide(' + index + ')">' +
          (done ? '&#10003; Completed — Undo' : '&#10003; Mark as Complete') +
        '</button>' +
        '<button class="btn btn-secondary" onclick="printRevisionCard(' + currentLessonId + ')" title="Print a revision card for this lesson">🖨 Revision Card</button>' +
      '</div>' +
      (function() {
        var nextId = getNextLessonId(currentLessonId);
        if (!nextId) return '';
        var nextFound = findLesson(nextId);
        if (!nextFound) return '';
        return '<div class="lv-next-lesson" onclick="closeModal();setTimeout(function(){openLesson(' + nextId + ')},200)">' +
          '<span style="font-size:.85rem;color:var(--text-dim)">Up next</span>' +
          '<span style="font-size:1rem;font-weight:600">Lesson ' + nextId + ': ' + nextFound.lesson.title + ' &#8594;</span>' +
        '</div>';
      })() +
    '</div>';
  }

  area.innerHTML = html;
  area.scrollTop = 0;

  // Add "Confused?" flag button
  var confusedFlagged = isSlideConfused(currentLessonId, index);
  var confBtn = document.createElement('button');
  confBtn.id = 'confusedBtn';
  confBtn.className = 'confused-btn' + (confusedFlagged ? ' flagged' : '');
  confBtn.title = confusedFlagged ? 'Remove flag' : 'Flag this slide for review';
  confBtn.innerHTML = confusedFlagged ? '🔖 Flagged' : '? Flag for review';
  confBtn.onclick = function() { toggleConfused(currentLessonId, index); };
  area.style.position = 'relative';
  area.appendChild(confBtn);

  // Inject glossary tooltips
  injectGlossaryTooltips(area);

  // Update dot active state
  var dots = document.querySelectorAll('.lv-dot');
  dots.forEach(function(d, i) { d.classList.toggle('active', parseInt(d.dataset.idx) === index); });

  // Wire up reflection auto-save
  var reflField = document.getElementById('reflectionText');
  if (reflField) {
    var saveTimer = null;
    reflField.addEventListener('input', function() {
      clearTimeout(saveTimer);
      var indicator = document.getElementById('reflectionSaved');
      saveTimer = setTimeout(function() {
        saveReflection(currentLessonId, index, reflField.value);
        if (indicator) { indicator.style.display = 'inline'; setTimeout(function() { indicator.style.display = 'none'; }, 1500); }
      }, 500);
    });
  }

  // Update footer nav
  document.getElementById('lvSlideNum').textContent = index + 1;
  document.getElementById('lvProgressFill').style.width = ((index + 1) / currentSlides.length * 100) + '%';
  document.getElementById('lvPrev').style.visibility = index === 0 ? 'hidden' : 'visible';

  var nextBtn = document.getElementById('lvNext');
  if (index === currentSlides.length - 1) {
    var nextLessonId = getNextLessonId(currentLessonId);
    if (nextLessonId) {
      nextBtn.innerHTML = 'Next Lesson &#8594;';
      nextBtn.onclick = function() { closeModal(); setTimeout(function() { openLesson(nextLessonId); }, 200); };
    } else {
      nextBtn.innerHTML = 'Close';
      nextBtn.onclick = function() { closeModal(); };
    }
  } else {
    nextBtn.innerHTML = 'Next &#8594;';
    nextBtn.onclick = function() { navigateSlide(1); };
  }
}

function jumpToSlide(idx) {
  if (idx < 0 || idx >= currentSlides.length) return;
  currentSlideIndex = idx;
  renderSlide(idx);
}

function navigateSlide(dir) {
  const newIndex = currentSlideIndex + dir;
  if (newIndex < 0 || newIndex >= currentSlides.length) return;
  currentSlideIndex = newIndex;
  renderSlide(currentSlideIndex);
}

function closeModal() {
  const modal = document.getElementById('lessonModal');
  modal.classList.remove('open');
  modal.classList.remove('modal--lesson');
  currentSlides = [];
  currentLessonId = null;
  currentSlideIndex = 0;
  // Close notes panel
  notesPanelOpen = false;
  var panel = document.getElementById('notesPanel');
  if (panel) panel.style.display = 'none';
  var btn = document.getElementById('notesToggle');
  if (btn) btn.classList.remove('active');
}

/* ── Resources Rendering ───────────────────────── */
function findLessonsForResource(rid) {
  var matches = [];
  UNITS.forEach(function(u) {
    u.lessons.forEach(function(l) {
      if (l.resources && l.resources.indexOf(rid) !== -1) {
        matches.push('L' + l.id);
      }
    });
  });
  return matches;
}

function renderResources(filter) {
  currentFilter = filter || 'all';
  var items = currentFilter === 'all' ? RESOURCES : RESOURCES.filter(function(r) { return r.cat === currentFilter; });
  document.getElementById('resourcesGrid').innerHTML = items.map(function(r) {
    var linkedLessons = findLessonsForResource(r.id);
    var linkedHtml = linkedLessons.length > 0
      ? '<div style="margin-top:8px;display:flex;gap:4px;flex-wrap:wrap">' +
          linkedLessons.map(function(l) { return '<span style="font-size:.7rem;background:rgba(99,102,241,.15);color:var(--primary-light);padding:2px 8px;border-radius:999px">' + l + '</span>'; }).join('') +
        '</div>'
      : '';
    return '<div class="resource-card" onclick="openResource(\'' + r.id + '\')">' +
      '<span class="rc-type" data-cat="' + r.cat + '">' + r.cat + '</span>' +
      '<h4>' + r.title + '</h4>' +
      '<p>' + r.desc + '</p>' +
      linkedHtml +
    '</div>';
  }).join('');
  document.querySelectorAll('.filter-btn').forEach(function(b) {
    b.classList.toggle('active', b.textContent.toLowerCase() === currentFilter);
  });
}

function filterResources(cat) { renderResources(cat); }

function openResource(id) {
  var r = RESOURCES.find(function(x) { return x.id === id; });
  if (!r) return;
  var content = RESOURCE_CONTENT[r.id] || '';
  var linkedLessons = findLessonsForResource(r.id);
  var linkedHtml = '';
  if (linkedLessons.length > 0) {
    linkedHtml = '<div style="margin-top:16px;margin-bottom:16px">' +
      '<strong style="font-size:.85rem;color:var(--text-dim)">Used in:</strong> ' +
      linkedLessons.map(function(lLabel) {
        var lid = parseInt(lLabel.replace('L',''));
        var found = findLesson(lid);
        var title = found ? found.lesson.title : '';
        return '<span onclick="closeModal();setTimeout(function(){openLesson(' + lid + ')},200)" ' +
          'style="cursor:pointer;font-size:.8rem;background:rgba(99,102,241,.15);color:var(--primary-light);padding:4px 12px;border-radius:999px;margin:2px;display:inline-block">' +
          lLabel + (title ? ': ' + title : '') + '</span>';
      }).join(' ') +
    '</div>';
  }
  document.getElementById('modalBody').innerHTML =
    '<span class="rc-type" data-cat="' + r.cat + '" style="margin-bottom:12px">' + r.cat + '</span>' +
    '<h2>' + r.title + '</h2>' +
    '<p class="modal-desc">' + r.desc + '</p>' +
    linkedHtml +
    '<div class="resource-body">' + (content || '<p style="color:var(--text-dim)">Full interactive content coming soon.</p>') + '</div>' +
    '<div class="modal-actions">' +
      '<button class="btn btn-secondary" onclick="closeModal()">Close</button>' +
    '</div>';
  document.getElementById('lessonModal').classList.add('open');
}

/* ── Search ────────────────────────────────────── */
function handleSearch(query) {
  const box = document.getElementById('searchResults');
  if (!query || query.length < 2) { box.classList.remove('open'); box.innerHTML = ''; return; }
  const q = query.toLowerCase();
  const results = [];
  // Search lessons
  for (const u of UNITS) {
    for (const l of u.lessons) {
      const score = [l.title, l.desc, ...l.tags, ...l.objectives].filter(s => s.toLowerCase().includes(q)).length;
      if (score > 0) results.push({ type: 'lesson', lesson: l, unit: u, score: score + 10 });
    }
  }
  // Search glossary
  if (typeof GLOSSARY !== 'undefined') {
    for (const g of GLOSSARY) {
      const score = [g.term, g.definition].filter(s => s.toLowerCase().includes(q)).length;
      if (score > 0) results.push({ type: 'glossary', term: g, score: score + 5 });
    }
  }
  // Search resources
  for (const r of RESOURCES) {
    const score = [r.title, r.desc, r.cat].filter(s => s.toLowerCase().includes(q)).length;
    if (score > 0) results.push({ type: 'resource', resource: r, score });
  }
  results.sort((a, b) => b.score - a.score);
  const top = results.slice(0, 10);
  if (top.length === 0) {
    box.innerHTML = '<div class="search-result-item"><div class="sr-title">No results</div></div>';
  } else {
    box.innerHTML = top.map(r => {
      if (r.type === 'lesson') {
        return `<div class="search-result-item" onclick="document.getElementById('searchResults').classList.remove('open');document.getElementById('searchInput').value='';showSection('units');setTimeout(()=>openLesson(${r.lesson.id}),150)">
          <div class="sr-title">Lesson ${r.lesson.id}: ${r.lesson.title}</div>
          <div class="sr-unit">Unit ${r.unit.id + 1}: ${r.unit.title}</div>
        </div>`;
      } else if (r.type === 'glossary') {
        return `<div class="search-result-item" onclick="document.getElementById('searchResults').classList.remove('open');document.getElementById('searchInput').value='';showSection('glossary');setTimeout(()=>filterGlossary('${r.term.term.replace(/'/g,"\\'")}'),150)">
          <div class="sr-title">${r.term.term}</div>
          <div class="sr-unit">Glossary term</div>
        </div>`;
      } else {
        return `<div class="search-result-item" onclick="document.getElementById('searchResults').classList.remove('open');document.getElementById('searchInput').value='';openResource('${r.resource.id}')">
          <div class="sr-title">${r.resource.title}</div>
          <div class="sr-unit">Resource — ${r.resource.cat}</div>
        </div>`;
      }
    }).join('');
  }
  box.classList.add('open');
}

// Close search on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-search')) {
    document.getElementById('searchResults')?.classList.remove('open');
  }
});

/* ── Progress ──────────────────────────────────── */
function renderProgress() {
  const total = UNITS.reduce((s, u) => s + u.lessons.length, 0);
  const done = completedLessons.size;
  const pct = Math.round((done / total) * 100);
  const circumference = 2 * Math.PI * 85; // r=85

  document.getElementById('progressRingPercent').textContent = pct + '%';
  document.getElementById('progressRingFill').style.strokeDashoffset = circumference - (circumference * pct / 100);
  document.getElementById('lessonsCompleted').textContent = done;
  document.getElementById('lessonsRemaining').textContent = total - done;
  document.getElementById('currentStreak').textContent = getStreak();

  document.getElementById('progressByUnit').innerHTML = UNITS.map(u => {
    const uPct = unitProgressPct(u);
    return `
      <div class="pbu-item">
        <span class="pbu-label">${u.icon} Unit ${u.id + 1}: ${u.title}</span>
        <div class="pbu-bar"><div class="pbu-bar-fill" style="width:${uPct}%"></div></div>
        <span class="pbu-pct">${uPct}%</span>
      </div>`;
  }).join('');

  // Render streak heatmap
  renderStreakHeatmap();
  // Render XP progress
  renderXPSection();
  // Render badges
  renderBadges();
  // Render confused/flagged slides
  renderConfusedSection();
  // Render quiz scores
  renderQuizScoreSection();
  // Render bookmarked lessons
  renderBookmarkedSection();
}

function renderQuizScoreSection() {
  var el = document.getElementById('quizScoreSection');
  if (!el) return;
  var keys = Object.keys(quizScores);
  if (keys.length === 0) { el.innerHTML = ''; return; }
  var correctCount = keys.filter(function(k) { return quizScores[k].correct; }).length;
  var cards = keys.map(function(k) {
    var found = findLesson(parseInt(k));
    var title = found ? 'L' + k + ': ' + found.lesson.title : 'Lesson ' + k;
    var cls = quizScores[k].correct ? '' : ' wrong';
    var label = quizScores[k].correct ? '✓ Correct' : '✗ Wrong';
    return '<div class="qs-card"><span class="qs-card-label">' + title + '</span><span class="qs-card-score' + cls + '">' + label + '</span></div>';
  }).join('');
  el.innerHTML = '<h3>Quiz Scores — ' + correctCount + '/' + keys.length + ' correct</h3><div class="qs-grid">' + cards + '</div>';
}

function renderBookmarkedSection() {
  var el = document.getElementById('bookmarkedLessons');
  if (!el) return;
  if (bookmarkedLessons.size === 0) { el.innerHTML = ''; return; }
  var cards = [];
  bookmarkedLessons.forEach(function(id) {
    var found = findLesson(id);
    if (!found) return;
    cards.push('<div class="bm-card" onclick="openLesson(' + id + ')">' +
      '<div class="bm-card-title">★ Lesson ' + id + ': ' + found.lesson.title + '</div>' +
      '<div class="bm-card-unit">Unit ' + (found.unit.id + 1) + ': ' + found.unit.title + '</div>' +
    '</div>');
  });
  el.innerHTML = '<h3>Bookmarked Lessons</h3><div class="bm-grid">' + cards.join('') + '</div>';
}

function updateHomeStats() {
  const total = UNITS.reduce((s, u) => s + u.lessons.length, 0);
  const done = completedLessons.size;
  const pct = Math.round((done / total) * 100);
  const el = document.getElementById('progressPercent');
  if (el) el.textContent = pct + '%';
  updateContinueButton();
  updateTimeEstimate();
  renderRecentlyViewed();
  updateReviewDueBadge();
}

function resetProgress() {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  completedLessons.clear();
  bookmarkedLessons.clear();
  quizScores = {};
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STREAK_KEY);
  localStorage.removeItem('di_bookmarks');
  localStorage.removeItem('di_quiz_scores');
  renderUnits();
  renderProgress();
  updateHomeStats();
}

/* ── Tag Filtering ────────────────────────────── */
function getUniqueTags() {
  var tags = {};
  UNITS.forEach(function(u) { u.lessons.forEach(function(l) {
    l.tags.forEach(function(t) { tags[t] = (tags[t] || 0) + 1; });
  }); });
  return Object.keys(tags).sort().map(function(t) { return { tag: t, count: tags[t] }; });
}

function renderTagFilters() {
  var tags = getUniqueTags();
  var html = '<button class="tag-btn' + (!currentTagFilter ? ' active' : '') + '" onclick="filterByTag(null)">All Lessons</button>';
  html += tags.map(function(t) {
    return '<button class="tag-btn' + (currentTagFilter === t.tag ? ' active' : '') + '" data-tag="' + t.tag + '" onclick="filterByTag(\'' + t.tag + '\')">' + t.tag + ' <span class="tag-count">' + t.count + '</span></button>';
  }).join('');
  document.getElementById('tagFilters').innerHTML = html;
}

function filterByTag(tag) {
  currentTagFilter = tag;
  renderTagFilters();
  renderUnits();
}

/* ── Continue Button ──────────────────────────── */
function getFirstIncompleteLesson() {
  for (var i = 0; i < UNITS.length; i++) {
    for (var j = 0; j < UNITS[i].lessons.length; j++) {
      if (!completedLessons.has(UNITS[i].lessons[j].id)) return UNITS[i].lessons[j];
    }
  }
  return null;
}

function continueLesson() {
  var next = getFirstIncompleteLesson();
  if (next) { openLesson(next.id); }
  else { showSection('units'); }
}

function updateContinueButton() {
  var btn = document.getElementById('continueBtn');
  if (!btn) return;
  var total = UNITS.reduce(function(s, u) { return s + u.lessons.length; }, 0);
  if (completedLessons.size === 0) {
    btn.textContent = 'Start Learning';
  } else if (completedLessons.size >= total) {
    btn.textContent = 'All Complete — Review';
  } else {
    var next = getFirstIncompleteLesson();
    btn.textContent = 'Continue: Lesson ' + next.id + ' — ' + next.title;
  }
  updateFloatContinueLabel();
}

function updateFloatContinueLabel() {
  var lbl = document.getElementById('floatContinueLabel');
  if (!lbl) return;
  var total = UNITS.reduce(function(s, u) { return s + u.lessons.length; }, 0);
  if (completedLessons.size === 0) {
    lbl.textContent = '▶ Start Learning';
  } else if (completedLessons.size >= total) {
    lbl.textContent = '★ All Complete — Review';
  } else {
    var next = getFirstIncompleteLesson();
    lbl.textContent = '▶ Continue: ' + next.title;
  }
}

function initFloatContinue() {
  var floatBtn  = document.getElementById('floatContinue');
  var heroCta   = document.getElementById('continueBtn');
  if (!floatBtn || !heroCta) return;
  updateFloatContinueLabel();
  // Show float button only when hero CTA is out of viewport
  var observer = new IntersectionObserver(function(entries) {
    var heroVisible = entries[0].isIntersecting;
    if (heroVisible) {
      floatBtn.classList.add('hidden');
      setTimeout(function() { floatBtn.style.display = 'none'; }, 260);
    } else {
      floatBtn.style.display = 'flex';
      requestAnimationFrame(function() { floatBtn.classList.remove('hidden'); });
    }
  }, { threshold: 0.1 });
  observer.observe(heroCta);
}

/* ── Reflection Export (text) ─────────────────── */
function exportReflections() {
  var lines = ['Digital Innovations — My Reflections', '='.repeat(45), ''];
  var count = 0;
  UNITS.forEach(function(u) {
    u.lessons.forEach(function(l) {
      var slides = getLessonSlides(l.id, l, u);
      var lessonNotes = [];
      slides.forEach(function(slide, idx) {
        var text = loadReflection(l.id, idx);
        if (text && text.trim()) lessonNotes.push(text.trim());
      });
      if (lessonNotes.length > 0) {
        count++;
        lines.push('Lesson ' + l.id + ': ' + l.title);
        lines.push('Unit ' + (u.id + 1) + ': ' + u.title);
        lines.push('-'.repeat(35));
        lessonNotes.forEach(function(n) { lines.push(n); lines.push(''); });
        lines.push('');
      }
    });
  });
  if (count === 0) {
    alert('No reflections saved yet. Write some notes in the discussion slides first!');
    return;
  }
  lines.push('---');
  lines.push('Exported ' + count + ' lesson reflections on ' + new Date().toLocaleDateString());
  var blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'digital-innovations-reflections.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
}

/* ── Full PDF Export ──────────────────────────── */
function exportFullProgressPDF() {
  var total = UNITS.reduce(function(s,u) { return s + u.lessons.length; }, 0);
  var done = completedLessons.size;
  var pct = Math.round(done / total * 100);
  var earned = loadBadges();
  var earnedBadges = UNIT_BADGES.filter(function(b) { return earned[b.id]; });
  var quizKeys = Object.keys(quizScores);
  var correct = quizKeys.filter(function(k) { return quizScores[k].correct; }).length;
  var exportDate = new Date().toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });

  // Build reflections HTML
  var reflSections = '';
  UNITS.forEach(function(u) {
    var lessonRows = '';
    u.lessons.forEach(function(l) {
      var slides = getLessonSlides(l.id, l, u);
      var notes = [];
      slides.forEach(function(slide, idx) {
        var text = loadReflection(l.id, idx);
        if (text && text.trim()) notes.push('<p>' + text.trim().replace(/\n/g,'<br>') + '</p>');
      });
      var isDone = completedLessons.has(l.id) ? '&#10003; Complete' : 'Not completed';
      var quizEntry = quizScores[l.id];
      var quizStr = quizEntry ? (quizEntry.correct ? '&#10003; Quiz correct' : '&#10007; Quiz incorrect') : '';
      lessonRows += '<tr>' +
        '<td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600;font-size:.85rem">L' + l.id + ': ' + l.title + '</td>' +
        '<td style="padding:8px 12px;border:1px solid #e2e8f0;font-size:.82rem;color:#64748b">' + isDone + (quizStr ? ' &bull; ' + quizStr : '') + '</td>' +
        '<td style="padding:8px 12px;border:1px solid #e2e8f0;font-size:.82rem">' + (notes.join('') || '<span style="color:#94a3b8">No notes</span>') + '</td>' +
      '</tr>';
    });
    reflSections += '<h3 style="margin:24px 0 8px;font-size:1rem;color:#4f46e5">' + u.icon + ' Unit ' + (u.id+1) + ': ' + u.title + '</h3>' +
      '<table style="width:100%;border-collapse:collapse;font-family:system-ui,sans-serif">' +
        '<thead><tr style="background:#f8fafc">' +
          '<th style="padding:8px 12px;border:1px solid #e2e8f0;text-align:left;font-size:.8rem;width:30%">Lesson</th>' +
          '<th style="padding:8px 12px;border:1px solid #e2e8f0;text-align:left;font-size:.8rem;width:20%">Status</th>' +
          '<th style="padding:8px 12px;border:1px solid #e2e8f0;text-align:left;font-size:.8rem">Reflection Notes</th>' +
        '</tr></thead><tbody>' + lessonRows + '</tbody>' +
      '</table>';
  });

  var badgeHtml = earnedBadges.length > 0
    ? earnedBadges.map(function(b) {
        return '<span style="display:inline-flex;align-items:center;gap:6px;background:#f0f4ff;border:1px solid #c7d2fe;border-radius:8px;padding:6px 12px;font-size:.85rem;margin:4px">' +
          b.icon + ' <strong>' + b.name + '</strong> <span style="color:#94a3b8;font-size:.78rem">(' + earned[b.id] + ')</span></span>';
      }).join('')
    : '<p style="color:#94a3b8;font-size:.88rem">No badges earned yet — keep going!</p>';

  var html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">' +
    '<title>Digital Innovations — Progress Report</title>' +
    '<style>body{font-family:system-ui,sans-serif;max-width:900px;margin:0 auto;padding:32px;color:#0f172a}' +
    'h1{font-size:1.6rem;color:#6366f1;margin-bottom:4px}' +
    '.meta{color:#64748b;font-size:.9rem;margin-bottom:24px}' +
    '.stat-row{display:flex;gap:24px;margin:20px 0;flex-wrap:wrap}' +
    '.stat-box{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 20px;text-align:center;min-width:110px}' +
    '.stat-num{display:block;font-size:1.8rem;font-weight:800;color:#6366f1}' +
    '.stat-lbl{font-size:.78rem;color:#64748b;margin-top:2px}' +
    'h2{font-size:1.1rem;border-bottom:2px solid #e2e8f0;padding-bottom:6px;margin-top:32px;color:#1e293b}' +
    'p{margin:6px 0}@media print{body{padding:16px}}' +
    '</style></head><body>' +
    '<h1>&#127891; Digital Innovations — Progress Report</h1>' +
    '<p class="meta">Exported on ' + exportDate + '</p>' +
    '<div class="stat-row">' +
      '<div class="stat-box"><span class="stat-num">' + pct + '%</span><span class="stat-lbl">Complete</span></div>' +
      '<div class="stat-box"><span class="stat-num">' + done + '/' + total + '</span><span class="stat-lbl">Lessons Done</span></div>' +
      '<div class="stat-box"><span class="stat-num">' + correct + '/' + quizKeys.length + '</span><span class="stat-lbl">Quizzes Correct</span></div>' +
      '<div class="stat-box"><span class="stat-num">' + earnedBadges.length + '/' + UNIT_BADGES.length + '</span><span class="stat-lbl">Badges Earned</span></div>' +
    '</div>' +
    '<h2>🏅 Badges</h2>' + badgeHtml +
    '<h2>📝 Lesson Progress & Reflections</h2>' + reflSections +
    '<p style="margin-top:40px;font-size:.75rem;color:#94a3b8;text-align:center">Digital Innovations AEP &bull; KS5 Course Report</p>' +
    '</body></html>';

  var win = window.open('', '_blank');
  if (!win) { alert('Please allow popups to export your PDF.'); return; }
  win.document.write(html);
  win.document.close();
  setTimeout(function() { win.print(); }, 500);
}

/* ── Quiz Logic ───────────────────────────────── */
function checkQuiz(btn, correctIdx, slideIdx) {
  var container = document.getElementById('quizOptions');
  if (container.classList.contains('quiz-answered')) return;
  container.classList.add('quiz-answered');
  var chosen = parseInt(btn.dataset.idx);
  var isCorrect = chosen === correctIdx;
  var buttons = container.querySelectorAll('.quiz-option');
  buttons.forEach(function(b) {
    var idx = parseInt(b.dataset.idx);
    if (idx === correctIdx) b.classList.add('quiz-correct');
    if (idx === chosen && chosen !== correctIdx) b.classList.add('quiz-wrong');
  });
  document.getElementById('quizExplanation').style.display = 'block';
  // Show Learn More section if present
  var lm = document.getElementById('quizLearnMore');
  if (lm) lm.style.display = 'block';
  // Save quiz score
  if (currentLessonId) saveQuizScore(currentLessonId, isCorrect);
  // XP reward
  if (isCorrect) addXP(10, 'Quiz answered correctly');
  // Adaptive nudge on wrong answer
  if (!isCorrect) showAdaptiveNudge(currentLessonId);
}

/* ── Glossary Tooltip Injection ───────────────── */
function injectGlossaryTooltips(container) {
  if (typeof GLOSSARY === 'undefined') return;
  // Only process text nodes inside non-interactive elements
  var targets = container.querySelectorAll('.concept-body, .hook-body, .slide-title, .scenario-situation, .scenario-question');
  targets.forEach(function(el) {
    var html = el.innerHTML;
    GLOSSARY.forEach(function(g) {
      var term = g.term;
      if (term.length < 4) return; // skip very short terms
      var def = g.definition.replace(/"/g, '&quot;');
      // Only replace first occurrence, case-sensitive match at word boundary
      var regex = new RegExp('(?<![\\w\\-])(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![\\w\\-])', 'i');
      html = html.replace(regex, function(match) {
        return '<span class="glossary-tip">' + match + '<span class="glossary-tip-popup">' + def + '</span></span>';
      });
    });
    el.innerHTML = html;
  });
}

/* ── Unit Certificate ──────────────────────────── */
function printUnitCertificate(badge) {
  var earned = loadBadges();
  var dateStr = earned[badge.id] ? earned[badge.id] : new Date().toISOString().slice(0,10);
  var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Certificate — ' + badge.name + '</title>' +
    '<style>body{font-family:Georgia,serif;text-align:center;padding:60px;background:#fff;color:#0f172a}' +
    '.border{border:6px double #6366f1;padding:40px;display:inline-block;max-width:600px;width:100%}' +
    '.icon{font-size:4rem;margin-bottom:12px}h1{font-size:1.5rem;color:#6366f1;margin-bottom:4px}' +
    '.subtitle{font-size:.9rem;color:#64748b;margin-bottom:24px}.name-line{font-size:2rem;font-weight:700;border-bottom:2px solid #6366f1;display:inline-block;padding:0 32px;margin-bottom:20px}' +
    '.badge-name{font-size:1.4rem;font-weight:700;color:#4f46e5;margin:8px 0}.desc{font-size:.9rem;color:#475569;margin-bottom:24px}' +
    '.date{font-size:.8rem;color:#94a3b8}.footer{font-size:.75rem;color:#94a3b8;margin-top:32px}' +
    '@media print{button{display:none}}</style></head><body>' +
    '<div class="border"><div class="icon">' + badge.icon + '</div>' +
    '<h1>Digital Innovations</h1><p class="subtitle">KS5 Course Certificate of Achievement</p>' +
    '<p>This certifies that</p><div class="name-line">Student</div>' +
    '<p>has earned the badge</p><div class="badge-name">' + badge.name + '</div>' +
    '<p class="desc">' + badge.desc + '</p>' +
    '<p class="date">Awarded: ' + dateStr + '</p>' +
    '<div class="footer">Digital Innovations &bull; KS5 Curriculum</div></div>' +
    '<br><button onclick="window.print()" style="margin-top:16px;padding:10px 24px;background:#6366f1;color:#fff;border:none;border-radius:8px;font-size:1rem;cursor:pointer">Print Certificate</button>' +
    '</body></html>';
  var win = window.open('', '_blank');
  if (!win) return;
  win.document.write(html);
  win.document.close();
}

/* ── Glossary ─────────────────────────────────── */
function renderGlossary(filter) {
  if (typeof GLOSSARY === 'undefined') return;
  var q = (filter || '').toLowerCase();
  var items = q ? GLOSSARY.filter(function(g) {
    return g.term.toLowerCase().indexOf(q) !== -1 || g.definition.toLowerCase().indexOf(q) !== -1;
  }) : GLOSSARY;
  var html = items.map(function(g) {
    var lessonLinks = (g.lessons || []).map(function(lid) {
      var found = findLesson(lid);
      return found ? '<span class="glossary-lesson-link" onclick="showSection(\'units\');setTimeout(function(){openLesson(' + lid + ')},150)">L' + lid + '</span>' : '';
    }).join(' ');
    return '<div class="glossary-item" onclick="this.classList.toggle(\'open\')">' +
      '<div class="glossary-term">' +
        '<span class="glossary-term-text">' + g.term + '</span>' +
        '<span class="glossary-toggle">+</span>' +
      '</div>' +
      '<div class="glossary-body">' +
        '<p>' + g.definition + '</p>' +
        (lessonLinks ? '<div class="glossary-lessons">Used in: ' + lessonLinks + '</div>' : '') +
      '</div>' +
    '</div>';
  }).join('');
  document.getElementById('glossaryList').innerHTML = html || '<p style="color:var(--text-dim);text-align:center;padding:32px">No matching terms found.</p>';
}

function filterGlossary(query) { renderGlossary(query); }

/* ── Teacher Mode ──────────────────────────────── */
var teacherModeActive = false;
function toggleTeacherMode() {
  teacherModeActive = !teacherModeActive;
  document.body.classList.toggle('teacher-mode', teacherModeActive);
  document.getElementById('teacherBanner').style.display = teacherModeActive ? 'block' : 'none';
  var btn = document.getElementById('teacherModeBtn');
  if (btn) btn.classList.toggle('active', teacherModeActive);
}

/* ── Keyboard Shortcuts Overlay ────────────────── */
function openShortcuts() { document.getElementById('shortcutsOverlay').classList.add('open'); }
function closeShortcuts() { document.getElementById('shortcutsOverlay').classList.remove('open'); }

/* ── Notes Panel ───────────────────────────────── */
var notesPanelOpen = false;
function loadLessonNotes(lessonId) {
  return localStorage.getItem('di_notes_' + lessonId) || '';
}
function saveLessonNotes(lessonId, text) {
  localStorage.setItem('di_notes_' + lessonId, text);
}
function toggleNotesPanel() {
  notesPanelOpen = !notesPanelOpen;
  var panel = document.getElementById('notesPanel');
  var btn = document.getElementById('notesToggle');
  if (!panel) return;
  panel.style.display = notesPanelOpen ? 'flex' : 'none';
  if (btn) btn.classList.toggle('active', notesPanelOpen);
  if (notesPanelOpen && currentLessonId) {
    var ta = document.getElementById('notesPanelText');
    if (ta) {
      ta.value = loadLessonNotes(currentLessonId);
      var saveTimer = null;
      ta.oninput = function() {
        clearTimeout(saveTimer);
        saveTimer = setTimeout(function() {
          saveLessonNotes(currentLessonId, ta.value);
          var ind = document.getElementById('notesSavedIndicator');
          if (ind) { ind.style.display = 'inline'; setTimeout(function(){ ind.style.display = 'none'; }, 1500); }
        }, 500);
      };
    }
  }
}

/* ── Spaced Repetition ─────────────────────────── */
function getQuizDueList() {
  var due = [];
  var today = new Date();
  Object.keys(quizScores).forEach(function(lid) {
    var score = quizScores[lid];
    var daysSince = (today - new Date(score.date)) / 86400000;
    if (!score.correct || daysSince >= 7) {
      var found = findLesson(parseInt(lid));
      if (found) due.push({ id: parseInt(lid), title: found.lesson.title, correct: score.correct, daysSince: Math.floor(daysSince) });
    }
  });
  return due;
}
function updateReviewDueBadge() {
  var el = document.getElementById('heroReviewDue');
  if (!el) return;
  var due = getQuizDueList();
  if (due.length === 0) { el.style.display = 'none'; return; }
  el.style.display = 'block';
  el.innerHTML = '<span class="review-due-badge" onclick="startQuickQuizDueOnly()">📅 ' + due.length + ' quiz' + (due.length === 1 ? '' : 'zes') + ' due for review — tap to practice</span>';
}
function startQuickQuizDueOnly() {
  var due = getQuizDueList();
  if (due.length === 0) return;
  quickQuizQuestions = [];
  var dueIds = due.map(function(d) { return d.id; });
  UNITS.forEach(function(u) {
    u.lessons.forEach(function(l) {
      if (!dueIds.includes(l.id)) return;
      var slides = getLessonSlides(l.id, l, u);
      slides.forEach(function(slide) {
        if (slide.type === 'quiz') quickQuizQuestions.push({ lessonId: l.id, lessonTitle: l.title, unitTitle: u.title, slide: slide });
      });
    });
  });
  quickQuizIndex = 0; quickQuizScore = 0;
  renderQuickQuizSlide();
  document.getElementById('quickQuizModal').classList.add('open');
}

/* ── Assessment Mode ───────────────────────────── */
var assessmentUnitIdx = null;
var assessmentQuestions = [];
var assessmentIdx = 0;
var assessmentScore = 0;
var assessmentTimer = null;
var assessmentTimeLeft = 0;
var assessmentWrong = [];

function openAssessment() {
  assessmentUnitIdx = null;
  var unitCards = UNITS.map(function(u, i) {
    var quizCount = 0;
    u.lessons.forEach(function(l) {
      var slides = getLessonSlides(l.id, l, u);
      slides.forEach(function(s) { if (s.type === 'quiz') quizCount++; });
    });
    return '<div class="au-card" onclick="startAssessment(' + i + ')">' +
      '<div class="au-icon">' + u.icon + '</div>' +
      '<div class="au-title">Unit ' + (i+1) + ': ' + u.title + '</div>' +
      '<div class="au-count">' + quizCount + ' questions · ' + (quizCount * 30) + 's</div>' +
    '</div>';
  }).join('');
  document.getElementById('assessmentBody').innerHTML =
    '<h2 style="margin-bottom:8px">🎯 Unit Assessment</h2>' +
    '<p style="color:var(--text-dim);font-size:.9rem;margin-bottom:16px">Choose a unit to test yourself. 30 seconds per question. No peeking!</p>' +
    '<div class="assessment-unit-grid">' + unitCards + '</div>';
  document.getElementById('assessmentModal').classList.add('open');
}
function closeAssessment() {
  if (assessmentTimer) clearInterval(assessmentTimer);
  document.getElementById('assessmentModal').classList.remove('open');
}
function startAssessment(unitIdx) {
  assessmentUnitIdx = unitIdx;
  var u = UNITS[unitIdx];
  assessmentQuestions = [];
  u.lessons.forEach(function(l) {
    var slides = getLessonSlides(l.id, l, u);
    slides.forEach(function(s) {
      if (s.type === 'quiz') assessmentQuestions.push({ lessonId: l.id, lessonTitle: l.title, slide: s });
    });
  });
  assessmentIdx = 0; assessmentScore = 0; assessmentWrong = [];
  renderAssessmentQuestion();
}
function renderAssessmentQuestion() {
  if (assessmentIdx >= assessmentQuestions.length) { showAssessmentResults(); return; }
  var q = assessmentQuestions[assessmentIdx];
  var slide = q.slide;
  assessmentTimeLeft = 30;
  if (assessmentTimer) clearInterval(assessmentTimer);
  assessmentTimer = setInterval(function() {
    assessmentTimeLeft--;
    var timerEl = document.getElementById('assessTimer');
    if (timerEl) {
      timerEl.textContent = assessmentTimeLeft + 's';
      timerEl.className = 'assessment-timer' + (assessmentTimeLeft <= 5 ? ' danger' : assessmentTimeLeft <= 10 ? ' warning' : '');
    }
    if (assessmentTimeLeft <= 0) { clearInterval(assessmentTimer); autoFailAssessment(slide.correct, q); }
  }, 1000);
  var optHtml = slide.options.map(function(opt, i) {
    return '<button class="quiz-option" data-idx="' + i + '" onclick="answerAssessment(this,' + slide.correct + ',' + i + ')">' +
      '<span class="quiz-option-letter">' + String.fromCharCode(65+i) + '</span>' +
      '<span class="quiz-option-text">' + opt + '</span>' +
    '</button>';
  }).join('');
  document.getElementById('assessmentBody').innerHTML =
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">' +
      '<span style="font-size:.8rem;color:var(--text-dim)">Q' + (assessmentIdx+1) + '/' + assessmentQuestions.length + ' &bull; ' + UNITS[assessmentUnitIdx].title + '</span>' +
      '<span class="assessment-timer" id="assessTimer">30s</span>' +
    '</div>' +
    '<div class="lv-progress-track" style="margin-bottom:16px"><div class="lv-progress-fill" style="width:' + ((assessmentIdx/assessmentQuestions.length)*100) + '%"></div></div>' +
    '<div style="font-size:.75rem;color:var(--primary-light);margin-bottom:8px">L' + q.lessonId + ': ' + q.lessonTitle + '</div>' +
    '<div class="qq-question">' + slide.question + '</div>' +
    '<div class="quiz-options" id="assessOptions">' + optHtml + '</div>' +
    '<div class="quiz-explanation" id="assessExplanation" style="display:none"><strong>Explanation:</strong> ' + slide.explanation + '</div>' +
    '<div id="assessNextBtn" style="display:none;margin-top:16px;text-align:right"><button class="btn btn-primary" onclick="nextAssessment()">Next →</button></div>';
}
function answerAssessment(btn, correctIdx, chosen) {
  var container = document.getElementById('assessOptions');
  if (!container || container.classList.contains('quiz-answered')) return;
  if (assessmentTimer) clearInterval(assessmentTimer);
  container.classList.add('quiz-answered');
  var isCorrect = chosen === correctIdx;
  if (isCorrect) assessmentScore++;
  else assessmentWrong.push(assessmentQuestions[assessmentIdx]);
  container.querySelectorAll('.quiz-option').forEach(function(b) {
    var idx = parseInt(b.dataset.idx);
    if (idx === correctIdx) b.classList.add('quiz-correct');
    if (idx === chosen && !isCorrect) b.classList.add('quiz-wrong');
  });
  document.getElementById('assessExplanation').style.display = 'block';
  document.getElementById('assessNextBtn').style.display = 'block';
}
function autoFailAssessment(correctIdx, q) {
  assessmentWrong.push(q);
  var container = document.getElementById('assessOptions');
  if (container) {
    container.classList.add('quiz-answered');
    container.querySelectorAll('.quiz-option').forEach(function(b) {
      if (parseInt(b.dataset.idx) === correctIdx) b.classList.add('quiz-correct');
    });
  }
  var exp = document.getElementById('assessExplanation');
  if (exp) exp.style.display = 'block';
  var nb = document.getElementById('assessNextBtn');
  if (nb) nb.style.display = 'block';
}
function nextAssessment() { assessmentIdx++; renderAssessmentQuestion(); }
function showAssessmentResults() {
  if (assessmentTimer) clearInterval(assessmentTimer);
  var pct = Math.round(assessmentScore / assessmentQuestions.length * 100);
  var grade = pct >= 80 ? '🏆 Distinction' : pct >= 60 ? '✅ Merit' : pct >= 40 ? '📚 Pass' : '🔄 More revision needed';
  var wrongItems = assessmentWrong.length > 0
    ? '<div class="ar-wrong-list"><h4 style="font-size:.9rem;margin-bottom:8px">Review these questions:</h4>' +
        assessmentWrong.map(function(q) {
          return '<div class="ar-wrong-item" onclick="closeAssessment();setTimeout(function(){openLesson(' + q.lessonId + ')},200)">L' + q.lessonId + ': ' + q.lessonTitle + '</div>';
        }).join('') +
      '</div>'
    : '<p style="color:var(--success);margin-top:12px">🎉 Perfect score! No questions to review.</p>';
  document.getElementById('assessmentBody').innerHTML =
    '<h2 style="margin-bottom:4px">Results — Unit ' + (assessmentUnitIdx+1) + '</h2>' +
    '<p style="color:var(--text-dim);font-size:.88rem;margin-bottom:16px">' + UNITS[assessmentUnitIdx].title + '</p>' +
    '<div class="assessment-results-grid">' +
      '<div class="ar-stat"><div class="ar-num">' + assessmentScore + '/' + assessmentQuestions.length + '</div><div class="ar-label">Score</div></div>' +
      '<div class="ar-stat"><div class="ar-num">' + pct + '%</div><div class="ar-label">Percentage</div></div>' +
      '<div class="ar-stat"><div class="ar-num" style="font-size:1rem">' + grade.split(' ').slice(1).join(' ') + '</div><div class="ar-label">Grade</div></div>' +
    '</div>' +
    wrongItems +
    '<div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap">' +
      '<button class="btn btn-primary" onclick="startAssessment(' + assessmentUnitIdx + ')">Retry This Unit</button>' +
      '<button class="btn btn-secondary" onclick="openAssessment()">Change Unit</button>' +
      '<button class="btn btn-secondary" onclick="closeAssessment()">Close</button>' +
    '</div>';
}

/* ── Milestone Celebrations ────────────────────── */
function checkMilestone() {
  var total = UNITS.reduce(function(s,u){ return s+u.lessons.length; }, 0);
  var done = completedLessons.size;
  var pct = done / total;
  var milestones = [
    { threshold: 0.25, emoji: '🌱', msg: '25% Complete!', sub: 'A quarter of the way through. You\'re building real momentum.' },
    { threshold: 0.50, emoji: '⚡', msg: 'Halfway There!', sub: 'You\'ve completed 22 of 44 lessons. The hard work is paying off.' },
    { threshold: 0.75, emoji: '🚀', msg: '75% Done!', sub: 'Three-quarters complete. The finish line is in sight.' },
    { threshold: 1.00, emoji: '🏆', msg: 'Course Complete!', sub: 'You\'ve finished all 44 lessons. Absolutely outstanding.' }
  ];
  var seen = JSON.parse(localStorage.getItem('di_milestones') || '[]');
  milestones.forEach(function(m) {
    if (pct >= m.threshold && !seen.includes(m.threshold)) {
      seen.push(m.threshold);
      localStorage.setItem('di_milestones', JSON.stringify(seen));
      showMilestoneCelebration(m);
    }
  });
}
function showMilestoneCelebration(m) {
  var total = UNITS.reduce(function(s,u){ return s+u.lessons.length; }, 0);
  var done = completedLessons.size;
  document.getElementById('milestoneBody').innerHTML =
    '<span class="milestone-emoji">' + m.emoji + '</span>' +
    '<div class="milestone-pct">' + Math.round(done/total*100) + '%</div>' +
    '<div class="milestone-msg">' + m.msg + '</div>' +
    '<div class="milestone-sub">' + m.sub + '</div>' +
    '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' +
      '<button class="btn btn-primary" onclick="closeMilestone()">Keep Going! →</button>' +
    '</div>';
  document.getElementById('milestoneModal').classList.add('open');
  launchConfetti();
}
function closeMilestone() { document.getElementById('milestoneModal').classList.remove('open'); }

/* ── Revision Card Print ───────────────────────── */
function printRevisionCard(lessonId) {
  var found = findLesson(lessonId);
  if (!found) return;
  var lesson = found.lesson;
  var unit = found.unit;
  var slides = getLessonSlides(lessonId, lesson, unit);
  var hookSlide = slides.find(function(s){ return s.type === 'hook'; });
  var quizSlide = slides.find(function(s){ return s.type === 'quiz'; });
  var summarySlide = slides.find(function(s){ return s.type === 'summary'; });
  var summaryPoints = summarySlide ? summarySlide.points.map(function(p){ return '<li>' + (p.label || p.text) + '</li>'; }).join('') : '';
  var notes = loadLessonNotes(lessonId);
  var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Revision Card — L' + lessonId + '</title>' +
    '<style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:system-ui,sans-serif;font-size:13px;color:#0f172a}' +
    '.card{width:148mm;min-height:105mm;border:2px solid #6366f1;border-radius:8px;padding:14px;page-break-inside:avoid}' +
    '.card-header{background:#6366f1;color:#fff;padding:8px 12px;margin:-14px -14px 10px;border-radius:6px 6px 0 0}' +
    '.card-title{font-size:1rem;font-weight:800}.card-sub{font-size:.75rem;opacity:.8}' +
    'ul{padding-left:16px;margin:6px 0}li{margin:3px 0;line-height:1.4}' +
    '.quiz-box{background:#f0f4ff;border-left:3px solid #6366f1;padding:8px;margin-top:10px;border-radius:4px}' +
    '.notes-box{background:#fefce8;border-left:3px solid #f59e0b;padding:8px;margin-top:10px;border-radius:4px}' +
    'h3{font-size:.8rem;font-weight:700;color:#6366f1;text-transform:uppercase;letter-spacing:.04em;margin:8px 0 4px}' +
    '@media print{body{padding:10mm}.card{border:2px solid #6366f1}}</style></head><body>' +
    '<div class="card"><div class="card-header"><div class="card-title">L' + lessonId + ': ' + lesson.title + '</div>' +
    '<div class="card-sub">Unit ' + (unit.id+1) + ': ' + unit.title + ' &bull; ' + (lesson.difficulty || '') + '</div></div>' +
    (summaryPoints ? '<h3>Key Takeaways</h3><ul>' + summaryPoints + '</ul>' : '') +
    (quizSlide ? '<div class="quiz-box"><h3>Quick Check</h3><strong>Q:</strong> ' + quizSlide.question + '<br><strong>A:</strong> ' + quizSlide.options[quizSlide.correct] + '</div>' : '') +
    (notes ? '<div class="notes-box"><h3>My Notes</h3>' + notes.replace(/\n/g,'<br>') + '</div>' : '') +
    '</div><br><button onclick="window.print()" style="padding:8px 20px;background:#6366f1;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:.9rem">Print Card</button>' +
    '</body></html>';
  var win = window.open('', '_blank');
  if (!win) return;
  win.document.write(html);
  win.document.close();
}

/* ── Recently Viewed ───────────────────────────── */
function loadRecentlyViewed() {
  try { return JSON.parse(localStorage.getItem('di_recent')) || []; }
  catch(e) { return []; }
}
function addToRecentlyViewed(id) {
  var recent = loadRecentlyViewed().filter(function(x) { return x !== id; });
  recent.unshift(id);
  localStorage.setItem('di_recent', JSON.stringify(recent.slice(0, 3)));
}
function renderRecentlyViewed() {
  var recent = loadRecentlyViewed();
  var el = document.getElementById('recentlyViewedSection');
  if (!el) return;
  if (recent.length === 0) { el.style.display = 'none'; return; }
  var cards = recent.map(function(id) {
    var found = findLesson(id);
    if (!found) return '';
    var done = completedLessons.has(id);
    return '<div class="rv-card" onclick="openLesson(' + id + ')">' +
      '<div class="rv-card-num">Lesson ' + id + (done ? ' ✓' : '') + '</div>' +
      '<div class="rv-card-title">' + found.lesson.title + '</div>' +
    '</div>';
  }).filter(Boolean).join('');
  el.style.display = 'block';
  el.innerHTML = '<div class="rv-label">Recently Viewed</div><div class="rv-cards">' + cards + '</div>';
}
function updateTimeEstimate() {
  var el = document.getElementById('heroTimeEst');
  if (!el) return;
  var remaining = 0;
  UNITS.forEach(function(u) {
    u.lessons.forEach(function(l) {
      if (!completedLessons.has(l.id)) {
        var slides = getLessonSlides(l.id, l, u);
        remaining += slides.length;
      }
    });
  });
  if (remaining === 0) { el.textContent = '🎉 You\'ve completed the entire course!'; return; }
  var hours = Math.round(remaining * 5 / 60 * 10) / 10;
  el.textContent = '~' + hours + ' hours remaining (' + remaining + ' slides across ' + (UNITS.reduce(function(s,u){return s+u.lessons.filter(function(l){return !completedLessons.has(l.id);}).length;},0)) + ' lessons)';
}

/* ── Confused Slides ───────────────────────────── */
function loadConfused() {
  try { return JSON.parse(localStorage.getItem('di_confused')) || {}; }
  catch(e) { return {}; }
}
function saveConfused(data) { localStorage.setItem('di_confused', JSON.stringify(data)); }
function toggleConfused(lessonId, slideIdx) {
  var confused = loadConfused();
  var key = lessonId + '_' + slideIdx;
  if (confused[key]) delete confused[key];
  else confused[key] = true;
  saveConfused(confused);
  // Update button state
  var btn = document.getElementById('confusedBtn');
  if (btn) btn.classList.toggle('flagged', !!confused[key]);
  // Update course map if open
  var tile = document.querySelector('.cm-lesson[data-id="' + lessonId + '"]');
  if (tile) tile.classList.toggle('confused', isLessonConfused(lessonId));
}
function isLessonConfused(lessonId) {
  var confused = loadConfused();
  return Object.keys(confused).some(function(k) { return k.startsWith(lessonId + '_'); });
}
function isSlideConfused(lessonId, slideIdx) {
  var confused = loadConfused();
  return !!confused[lessonId + '_' + slideIdx];
}
function renderConfusedSection() {
  var el = document.getElementById('confusedSection');
  if (!el) return;
  var confused = loadConfused();
  var keys = Object.keys(confused);
  if (keys.length === 0) { el.innerHTML = ''; return; }
  var cards = keys.map(function(k) {
    var parts = k.split('_');
    var lid = parseInt(parts[0]), sidx = parseInt(parts[1]);
    var found = findLesson(lid);
    if (!found) return '';
    var slides = getLessonSlides(lid, found.lesson, found.unit);
    var slide = slides[sidx];
    var slideLabel = slide ? (slide.type.charAt(0).toUpperCase() + slide.type.slice(1) + ': ' + (slide.title || slide.question || '')) : 'Slide ' + (sidx+1);
    return '<div class="confused-card" onclick="showSection(\'units\');setTimeout(function(){openLesson(' + lid + ');setTimeout(function(){jumpToSlide(' + sidx + ')},300)},150)">' +
      '<div><div class="confused-card-title">L' + lid + ': ' + found.lesson.title + '</div>' +
      '<div class="confused-card-sub">' + slideLabel + '</div></div>' +
      '<span style="font-size:1.2rem">🔖</span>' +
    '</div>';
  }).filter(Boolean).join('');
  el.innerHTML = '<h3>🔖 Flagged for Review (' + keys.length + ')</h3><div class="confused-grid">' + cards + '</div>';
}

/* ── Difficulty Filter ─────────────────────────── */
var currentDiffFilter = null;
function renderDifficultyFilter() {
  var el = document.getElementById('diffFilters');
  if (!el) return;
  var html = '<span class="diff-filter-label">Difficulty:</span>' +
    '<button class="diff-chip' + (!currentDiffFilter ? ' active' : '') + '" onclick="filterByDiff(null)">All</button>' +
    '<button class="diff-chip diff-chip-beginner' + (currentDiffFilter === 'beginner' ? ' active' : '') + '" onclick="filterByDiff(\'beginner\')">Beginner</button>' +
    '<button class="diff-chip diff-chip-intermediate' + (currentDiffFilter === 'intermediate' ? ' active' : '') + '" onclick="filterByDiff(\'intermediate\')">Intermediate</button>' +
    '<button class="diff-chip diff-chip-advanced' + (currentDiffFilter === 'advanced' ? ' active' : '') + '" onclick="filterByDiff(\'advanced\')">Advanced</button>';
  el.innerHTML = html;
}
function filterByDiff(diff) {
  currentDiffFilter = diff;
  renderDifficultyFilter();
  renderUnits();
}

/* ── Quick Quiz ────────────────────────────────── */
var quickQuizQuestions = [];
var quickQuizIndex = 0;
var quickQuizScore = 0;

function startQuickQuiz() {
  // Gather quiz slides from all (not just completed) lessons — more useful for exam prep
  quickQuizQuestions = [];
  UNITS.forEach(function(u) {
    u.lessons.forEach(function(l) {
      var slides = getLessonSlides(l.id, l, u);
      slides.forEach(function(slide) {
        if (slide.type === 'quiz') {
          quickQuizQuestions.push({ lessonId: l.id, lessonTitle: l.title, unitTitle: u.title, slide: slide });
        }
      });
    });
  });
  // Fisher-Yates shuffle
  for (var i = quickQuizQuestions.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = quickQuizQuestions[i]; quickQuizQuestions[i] = quickQuizQuestions[j]; quickQuizQuestions[j] = t;
  }
  quickQuizIndex = 0;
  quickQuizScore = 0;
  renderQuickQuizSlide();
  document.getElementById('quickQuizModal').classList.add('open');
}

function renderQuickQuizSlide() {
  if (quickQuizIndex >= quickQuizQuestions.length) { showQuickQuizResults(); return; }
  var q = quickQuizQuestions[quickQuizIndex];
  var slide = q.slide;
  var optHtml = slide.options.map(function(opt, i) {
    return '<button class="quiz-option" data-idx="' + i + '" onclick="answerQuickQuiz(this,' + slide.correct + ',' + i + ')">' +
      '<span class="quiz-option-letter">' + String.fromCharCode(65 + i) + '</span>' +
      '<span class="quiz-option-text">' + opt + '</span>' +
    '</button>';
  }).join('');
  document.getElementById('qqBody').innerHTML =
    '<div class="qq-source">Lesson ' + q.lessonId + ': ' + q.lessonTitle + '</div>' +
    '<div class="qq-question">' + slide.question + '</div>' +
    '<div class="quiz-options" id="qqOptions">' + optHtml + '</div>' +
    '<div class="quiz-explanation" id="qqExplanation" style="display:none"><strong>Explanation:</strong> ' + slide.explanation + '</div>' +
    '<div id="qqNextBtn" style="display:none;margin-top:16px;text-align:right">' +
      '<button class="btn btn-primary" onclick="nextQuickQuiz()">' +
        (quickQuizIndex === quickQuizQuestions.length - 1 ? 'See Results' : 'Next →') +
      '</button></div>';
  document.getElementById('qqProgress').textContent = (quickQuizIndex + 1) + ' / ' + quickQuizQuestions.length;
  document.getElementById('qqScore').textContent = 'Score: ' + quickQuizScore + '/' + quickQuizIndex;
}

function answerQuickQuiz(btn, correctIdx, chosen) {
  var container = document.getElementById('qqOptions');
  if (!container || container.classList.contains('quiz-answered')) return;
  container.classList.add('quiz-answered');
  if (chosen === correctIdx) quickQuizScore++;
  container.querySelectorAll('.quiz-option').forEach(function(b) {
    var idx = parseInt(b.dataset.idx);
    if (idx === correctIdx) b.classList.add('quiz-correct');
    if (idx === chosen && chosen !== correctIdx) b.classList.add('quiz-wrong');
  });
  document.getElementById('qqExplanation').style.display = 'block';
  var nb = document.getElementById('qqNextBtn');
  if (nb) { nb.style.display = 'block'; nb.querySelector('button').textContent = quickQuizIndex === quickQuizQuestions.length - 1 ? 'See Results' : 'Next →'; }
  document.getElementById('qqScore').textContent = 'Score: ' + quickQuizScore + '/' + (quickQuizIndex + 1);
}

function nextQuickQuiz() {
  quickQuizIndex++;
  renderQuickQuizSlide();
}

function showQuickQuizResults() {
  var pct = Math.round(quickQuizScore / quickQuizQuestions.length * 100);
  var msg = pct >= 80 ? '🏆 Excellent!' : pct >= 60 ? '👍 Good work' : '📚 Keep revising';
  document.getElementById('qqBody').innerHTML =
    '<div style="text-align:center;padding:32px 16px">' +
      '<div style="font-size:3rem;margin-bottom:12px">' + (pct >= 80 ? '🏆' : pct >= 60 ? '✅' : '📖') + '</div>' +
      '<div style="font-size:1.8rem;font-weight:800;color:var(--primary)">' + quickQuizScore + ' / ' + quickQuizQuestions.length + '</div>' +
      '<div style="font-size:1rem;margin:8px 0;color:var(--text)">' + msg + '</div>' +
      '<div style="color:var(--text-dim);font-size:.9rem;margin-bottom:28px">' + pct + '% correct</div>' +
      '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' +
        '<button class="btn btn-primary" onclick="startQuickQuiz()">New Random Quiz</button>' +
        '<button class="btn btn-secondary" onclick="closeQuickQuiz()">Close</button>' +
      '</div>' +
    '</div>';
  document.getElementById('qqProgress').textContent = 'Complete!';
  document.getElementById('qqScore').textContent = 'Final: ' + quickQuizScore + '/' + quickQuizQuestions.length;
}

function closeQuickQuiz() {
  document.getElementById('quickQuizModal').classList.remove('open');
}

/* ── Course Map ────────────────────────────────── */
function renderCourseMap() {
  var container = document.getElementById('courseMapContainer');
  if (!container) return;
  container.innerHTML = UNITS.map(function(unit, idx) {
    var pct = unitProgressPct(unit);
    var tiles = unit.lessons.map(function(l) {
      var done = completedLessons.has(l.id);
      var confused = isLessonConfused(l.id);
      return '<div class="cm-lesson' + (done ? ' done' : '') + (confused ? ' confused' : '') + '" data-id="' + l.id + '" onclick="showSection(\'units\');setTimeout(function(){openLesson(' + l.id + ')},150)" title="' + l.title + '">' +
        '<div class="cm-lesson-num">Lesson ' + l.id + '</div>' +
        '<div class="cm-lesson-title">' + l.title + '</div>' +
        '<div class="cm-lesson-diff">' + diffBadge(l.difficulty) + '</div>' +
      '</div>';
    }).join('');
    return '<div class="cm-unit">' +
      '<div class="cm-unit-header">' +
        '<span style="font-size:1.5rem">' + unit.icon + '</span>' +
        '<div style="flex:1">' +
          '<div style="font-weight:700;font-size:.95rem">Unit ' + (idx+1) + ': ' + unit.title + '</div>' +
          '<div style="font-size:.8rem;color:var(--text-dim);margin-top:2px">' + unit.lessons.length + ' lessons &bull; ' + pct + '% complete</div>' +
        '</div>' +
        (pct === 100 ? '<span style="font-size:1.3rem" title="Unit complete!">🏆</span>' : '') +
      '</div>' +
      '<div class="cm-unit-bar"><div class="cm-unit-bar-fill" style="width:' + pct + '%"></div></div>' +
      '<div class="cm-lessons-grid">' + tiles + '</div>' +
    '</div>';
  }).join('');
}

/* ── Unit Badges ───────────────────────────────── */
var UNIT_BADGES = [
  { id: 'u1', unitIdx: 0, icon: '🧠', name: 'AI Pioneer',        desc: 'Completed all Foundations of AI lessons' },
  { id: 'u2', unitIdx: 1, icon: '✍️', name: 'Prompt Master',     desc: 'Completed all Prompt Engineering lessons' },
  { id: 'u3', unitIdx: 2, icon: '🌐', name: 'Digital Citizen',   desc: 'Completed all AI & Society lessons' },
  { id: 'u4', unitIdx: 3, icon: '📜', name: 'Policy Architect',  desc: 'Completed all Policy & Governance lessons' },
  { id: 'u5', unitIdx: 4, icon: '🚀', name: 'Innovator',         desc: 'Completed all Capstone Project lessons' },
  { id: 'u6', unitIdx: 5, icon: '🎤', name: 'Communicator',      desc: 'Completed all Presentations & Reflection lessons' },
  { id: 'champion', unitIdx: -1, icon: '⭐', name: 'Course Champion', desc: 'Completed the entire Digital Innovations course!' }
];

function loadBadges() {
  try { return JSON.parse(localStorage.getItem('di_badges')) || {}; }
  catch(e) { return {}; }
}
function saveBadges(b) { localStorage.setItem('di_badges', JSON.stringify(b)); }

function checkAndAwardBadges() {
  var earned = loadBadges();
  var changed = false;
  var newBadge = null;
  UNIT_BADGES.forEach(function(badge) {
    if (earned[badge.id]) return;
    var unit = UNITS[badge.unitIdx];
    if (!unit) {
      // champion badge
      var allDone = UNITS.every(function(u) {
        return u.lessons.every(function(l) { return completedLessons.has(l.id); });
      });
      if (allDone) {
        earned[badge.id] = new Date().toISOString().slice(0,10);
        changed = true; newBadge = badge;
      }
      return;
    }
    var unitDone = unit.lessons.every(function(l) { return completedLessons.has(l.id); });
    if (unitDone) {
      earned[badge.id] = new Date().toISOString().slice(0,10);
      changed = true; newBadge = badge;
    }
  });
  if (changed) {
    saveBadges(earned);
    if (newBadge) showBadgeToast(newBadge);
    if (document.getElementById('section-progress')?.classList.contains('active')) renderBadges();
  }
}

function showBadgeToast(badge) {
  var toast = document.createElement('div');
  toast.className = 'badge-toast';
  var badgeRef = JSON.stringify(badge).replace(/"/g, '&quot;');
  toast.innerHTML = '<span class="badge-toast-icon">' + badge.icon + '</span>' +
    '<div><div class="badge-toast-title">Badge Unlocked!</div>' +
    '<div class="badge-toast-name">' + badge.name + '</div>' +
    '<span class="badge-toast-cert" onclick="printUnitCertificate(' + badgeRef + ')">🖨 Print Certificate</span>' +
    '</div>';
  document.body.appendChild(toast);
  setTimeout(function() { toast.classList.add('show'); }, 50);
  setTimeout(function() { toast.classList.remove('show'); setTimeout(function() { toast.remove(); }, 400); }, 5000);
}

function renderBadges() {
  var el = document.getElementById('badgesSection');
  if (!el) return;
  var earned = loadBadges();
  var cards = UNIT_BADGES.map(function(badge) {
    var isEarned = !!earned[badge.id];
    var dateStr = isEarned ? '<div class="badge-date">Earned ' + earned[badge.id] + '</div>' : '<div class="badge-date" style="color:var(--text-dim)">Not yet earned</div>';
    return '<div class="badge-card ' + (isEarned ? 'earned' : 'locked') + '">' +
      '<span class="badge-icon">' + badge.icon + '</span>' +
      '<div class="badge-name">' + badge.name + '</div>' +
      '<div class="badge-desc">' + badge.desc + '</div>' +
      dateStr +
    '</div>';
  }).join('');
  el.innerHTML = '<h3>🏅 Badges</h3><div class="badges-grid">' + cards + '</div>';
}

/* ── PTFC Builder ──────────────────────────────── */
function assemblePTFC() {
  var p = (document.getElementById('ptfc_p')?.value || '').trim();
  var t = (document.getElementById('ptfc_t')?.value || '').trim();
  var f = (document.getElementById('ptfc_f')?.value || '').trim();
  var c = (document.getElementById('ptfc_c')?.value || '').trim();
  var out = document.getElementById('ptfcOutput');
  if (!out) return;
  if (!p && !t && !f && !c) {
    out.innerHTML = '<span style="color:var(--text-dim);font-style:italic">Fill in the fields above to see your prompt...</span>';
    return;
  }
  var esc = function(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>'); };
  var parts = [];
  if (p) parts.push('<strong style="color:#06b6d4">[Persona]</strong> ' + esc(p));
  if (t) parts.push('<strong style="color:#6366f1">[Task]</strong> ' + esc(t));
  if (f) parts.push('<strong style="color:#22c55e">[Format]</strong> ' + esc(f));
  if (c) parts.push('<strong style="color:#f59e0b">[Context]</strong> ' + esc(c));
  out.innerHTML = parts.join('<br><br>');
}
function copyPTFC() {
  var p = (document.getElementById('ptfc_p')?.value || '').trim();
  var t = (document.getElementById('ptfc_t')?.value || '').trim();
  var f = (document.getElementById('ptfc_f')?.value || '').trim();
  var c = (document.getElementById('ptfc_c')?.value || '').trim();
  var text = [p&&('[Persona] '+p), t&&('[Task] '+t), f&&('[Format] '+f), c&&('[Context] '+c)].filter(Boolean).join('\n\n');
  if (!text.trim()) return;
  var btn = document.getElementById('ptfcCopyBtn');
  var done = function() { if (btn) { btn.textContent = '✓ Copied!'; setTimeout(function(){ btn.textContent = 'Copy to Clipboard'; }, 2000); } };
  if (navigator.clipboard) { navigator.clipboard.writeText(text).then(done).catch(done); }
  else {
    var ta = document.createElement('textarea'); ta.value = text;
    document.body.appendChild(ta); ta.select(); document.execCommand('copy');
    document.body.removeChild(ta); done();
  }
}
function loadPTFCExample() {
  var vals = {
    ptfc_p: 'You are an experienced AQA A-Level Biology examiner who marks at distinction level.',
    ptfc_t: 'Explain the light-dependent reactions of photosynthesis — specifically what happens to electrons in the thylakoid membrane.',
    ptfc_f: 'Brief overview (2 sentences), then numbered step-by-step with maximum 2 sentences per step, then 3 self-test questions with answers.',
    ptfc_c: 'I understand basic redox reactions but always confuse Photosystem I and II. Year 13 OCR student. Exam in 4 weeks. I need to understand the mechanism, not just memorise it.'
  };
  Object.keys(vals).forEach(function(id) { var el = document.getElementById(id); if (el) el.value = vals[id]; });
  assemblePTFC();
}
function clearPTFC() {
  ['ptfc_p','ptfc_t','ptfc_f','ptfc_c'].forEach(function(id) { var el = document.getElementById(id); if (el) el.value = ''; });
  assemblePTFC();
}

/* ── XP System ─────────────────────────────────── */
var XP_KEY = 'di_xp';
function loadXP() {
  try { return JSON.parse(localStorage.getItem(XP_KEY)) || { total: 0 }; }
  catch(e) { return { total: 0 }; }
}
function saveXPData(d) {
  localStorage.setItem(XP_KEY, JSON.stringify(d));
  if (typeof scheduleSync === 'function') scheduleSync();
}
function addXP(amount, reason) {
  var d = loadXP();
  d.total = (d.total || 0) + amount;
  saveXPData(d);
  showXPToast('+' + amount + ' XP — ' + reason);
  updateXPStrip();
}
function getLevel(xp) {
  if (xp < 100) return { name: 'Novice', icon: '🌱', min: 0, max: 100, next: 'Explorer' };
  if (xp < 250) return { name: 'Explorer', icon: '🔍', min: 100, max: 250, next: 'Innovator' };
  if (xp < 500) return { name: 'Innovator', icon: '⚡', min: 250, max: 500, next: 'Pioneer' };
  return { name: 'Pioneer', icon: '🚀', min: 500, max: null, next: null };
}
function showXPToast(msg) {
  var el = document.createElement('div');
  el.className = 'xp-toast';
  el.textContent = msg;
  document.body.appendChild(el);
  requestAnimationFrame(function() { el.classList.add('show'); });
  setTimeout(function() {
    el.classList.remove('show');
    setTimeout(function() { el.remove(); }, 400);
  }, 2200);
}
function updateXPStrip() {
  var wrap = document.getElementById('xpLevelDisplay');
  if (!wrap) return;
  var d = loadXP();
  var lvl = getLevel(d.total);
  var pct = lvl.max ? Math.min(100, Math.round(((d.total - lvl.min) / (lvl.max - lvl.min)) * 100)) : 100;
  wrap.innerHTML = '<span class="xp-level-badge">' + lvl.icon + ' ' + lvl.name + '</span>' +
    '<div class="xp-bar-track"><div class="xp-bar-fill" style="width:' + pct + '%"></div></div>' +
    '<span class="xp-label">' + d.total + ' XP' + (lvl.max ? ' → ' + lvl.next + ' at ' + lvl.max : ' — Max Level!') + '</span>';
}
function renderXPSection() {
  var el = document.getElementById('xpProgressSection');
  if (!el) return;
  var d = loadXP();
  var lvl = getLevel(d.total);
  var pct = lvl.max ? Math.min(100, Math.round(((d.total - lvl.min) / (lvl.max - lvl.min)) * 100)) : 100;
  var levels = [
    { name: 'Novice 🌱', min: 0 }, { name: 'Explorer 🔍', min: 100 },
    { name: 'Innovator ⚡', min: 250 }, { name: 'Pioneer 🚀', min: 500 }
  ];
  el.innerHTML = '<h3>🏅 XP Level — ' + lvl.icon + ' ' + lvl.name + '</h3>' +
    '<div class="xp-full-bar"><div class="xp-full-fill" style="width:' + pct + '%"></div></div>' +
    '<p style="font-size:.82rem;color:var(--text-dim);margin:6px 0">' + d.total + ' XP earned' +
      (lvl.max ? ' — ' + (lvl.max - d.total) + ' XP until ' + lvl.next : ' — Max level reached!') + '</p>' +
    '<div class="xp-level-row">' +
      levels.map(function(lv) {
        return '<span class="xp-level-chip' + (lvl.name === lv.name.split(' ')[0] ? ' current' : '') + '">' + lv.name + '</span>';
      }).join('') +
    '</div>';
}

/* ── Streak Heatmap ─────────────────────────────── */
function renderStreakHeatmap() {
  var el = document.getElementById('streakHeatmap');
  if (!el) return;
  var data;
  try { data = JSON.parse(localStorage.getItem(STREAK_KEY)) || {}; } catch(e) { data = {}; }
  var days = data.days || [];
  var today = new Date();
  var html = '<div class="heatmap-title">📅 Study Activity — last 30 days</div><div class="heatmap-grid">';
  for (var i = 29; i >= 0; i--) {
    var d = new Date(today);
    d.setDate(d.getDate() - i);
    var ds = d.toISOString().slice(0, 10);
    html += '<div class="heatmap-cell' + (days.indexOf(ds) >= 0 ? ' active' : '') + '" title="' + ds + '"></div>';
  }
  html += '</div><div class="heatmap-streak">' + getStreak() + ' day streak 🔥</div>';
  el.innerHTML = html;
}

/* ── News Ticker ─────────────────────────────────── */
function renderNewsTicker() {
  var track = document.getElementById('tickerTrack');
  if (!track || typeof AI_NEWS === 'undefined') return;
  var tagColors = { policy:'#6366f1', research:'#06b6d4', tools:'#22c55e', industry:'#f59e0b', ethics:'#ef4444', health:'#ec4899' };
  var items = AI_NEWS.map(function(n) {
    var col = tagColors[n.tag] || '#6366f1';
    var inner = '<span class="ticker-tag" style="background:' + col + '22;color:' + col + '">' + n.tag + '</span>' +
      n.headline +
      ' <span class="ticker-source">— ' + n.source + ', ' + n.date + '</span>';
    if (n.url) {
      return '<a class="ticker-item ticker-item-link" href="' + n.url + '" target="_blank" rel="noopener" title="Read full article">' + inner + ' ↗</a>';
    }
    return '<span class="ticker-item">' + inner + '</span>';
  }).join('');
  track.innerHTML = items + items;
}

var _newsTagFilter = 'all';

function buildNewsCard(n) {
  var tagColors = { policy:'#6366f1', research:'#06b6d4', tools:'#22c55e', industry:'#f59e0b', ethics:'#ef4444', health:'#ec4899' };
  var col = tagColors[n.tag] || '#6366f1';
  var card = '<div class="news-card">' +
    '<div class="news-card-top">' +
      '<span class="news-card-tag" style="background:' + col + '22;color:' + col + '">' + n.tag + '</span>' +
      '<span class="news-card-date">' + n.date + '</span>' +
    '</div>' +
    '<p class="news-card-headline">' + n.headline + '</p>' +
    '<div class="news-card-footer">' +
      '<span class="news-card-source">' + n.source + '</span>';
  if (n.url) {
    card += '<a class="news-card-link" href="' + n.url + '" target="_blank" rel="noopener">Read →</a>';
  }
  card += '</div></div>';
  return card;
}

function renderNewsSection() {
  // Home teaser — 4 cards, no filter
  var teaser = document.getElementById('latestNewsGrid');
  if (teaser && typeof AI_NEWS !== 'undefined') {
    teaser.innerHTML = AI_NEWS.slice(0, 4).map(buildNewsCard).join('');
  }
  // Full news page
  renderFullNewsGrid();
}

function renderFullNewsGrid() {
  var el = document.getElementById('fullNewsGrid');
  if (!el || typeof AI_NEWS === 'undefined') return;
  var filtered = _newsTagFilter === 'all' ? AI_NEWS : AI_NEWS.filter(function(n) { return n.tag === _newsTagFilter; });
  el.innerHTML = filtered.map(buildNewsCard).join('');
  renderNewsTagFilters();
}

function renderNewsTagFilters() {
  var el = document.getElementById('newsTagFilters');
  if (!el || typeof AI_NEWS === 'undefined') return;
  var tags = ['all'].concat(Array.from(new Set(AI_NEWS.map(function(n) { return n.tag; }))).sort());
  el.innerHTML = tags.map(function(t) {
    var active = t === _newsTagFilter ? ' active' : '';
    return '<button class="news-tag-btn' + active + '" onclick="setNewsTagFilter(\'' + t + '\')">' + (t === 'all' ? 'All' : t) + '</button>';
  }).join('');
}

function setNewsTagFilter(tag) {
  _newsTagFilter = tag;
  renderFullNewsGrid();
}

/* ── Onboarding Tour ──────────────────────────────── */
var OB_STEPS = [
  { title: 'Welcome to Digital Innovations! 👋', text: 'Explore AI, ethics, prompt engineering and more across 44 lessons. Let\'s take a 60-second tour.' },
  { title: 'Pick a lesson 📚', text: 'Go to <strong>Units</strong> to browse all 6 units. Click any lesson to open the slide viewer — slides, quizzes and activities are all inside.' },
  { title: 'Test yourself ⚡', text: 'The <strong>⚡ Quiz Me</strong> button gives you a quick quiz on lessons you\'ve completed. Great for spaced revision.' },
  { title: 'Track your progress 📊', text: 'Head to <strong>My Progress</strong> to see your streak calendar, XP level, badges, and quiz scores — all saved locally.' },
  { title: 'Keyboard shortcuts ⌨️', text: 'Press <kbd>?</kbd> at any time to see all shortcuts. Use <kbd>→</kbd> / <kbd>←</kbd> to navigate slides inside a lesson.' },
];
var obStep = 0;
function checkOnboarding() { if (!localStorage.getItem('di_onboarded')) setTimeout(startOnboarding, 1400); }
function startOnboarding() { obStep = 0; renderObStep(); var ov = document.getElementById('onboardingOverlay'); if (ov) ov.classList.add('open'); }
function renderObStep() {
  var body = document.getElementById('obBody');
  if (!body) return;
  var s = OB_STEPS[obStep];
  body.innerHTML = '<div class="ob-step">Step ' + (obStep + 1) + ' of ' + OB_STEPS.length + '</div>' +
    '<h3 class="ob-title">' + s.title + '</h3>' +
    '<p class="ob-text">' + s.text + '</p>' +
    '<div class="ob-actions">' +
      (obStep < OB_STEPS.length - 1
        ? '<button class="btn btn-primary" onclick="nextObStep()">Next →</button>'
        : '<button class="btn btn-primary" onclick="closeOnboarding()">Let\'s go! 🚀</button>') +
      '<button class="btn btn-secondary" onclick="closeOnboarding()">Skip</button>' +
    '</div>' +
    '<div class="ob-dots">' + OB_STEPS.map(function(_,i){ return '<span class="ob-dot' + (i===obStep?' active':'') + '"></span>'; }).join('') + '</div>';
}
function nextObStep() { obStep++; if (obStep >= OB_STEPS.length) { closeOnboarding(); return; } renderObStep(); }
function closeOnboarding() { var ov = document.getElementById('onboardingOverlay'); if (ov) ov.classList.remove('open'); localStorage.setItem('di_onboarded','1'); }

/* ── Exemplar Gallery ──────────────────────────── */
var _exemplarFilter = 'all';
function renderExemplars() {
  var el = document.getElementById('exemplarContainer');
  if (!el || typeof EXEMPLARS === 'undefined') return;

  // Filter bar
  var filterBar = document.getElementById('exemplarFilters');
  if (filterBar && !filterBar.dataset.built) {
    filterBar.dataset.built = '1';
    filterBar.innerHTML =
      ['all','strong','poor'].map(function(f) {
        var labels = { all:'All Examples', strong:'✅ Strong Examples', poor:'🚩 What NOT to Do' };
        return '<button class="exemplar-filter-btn' + (f === _exemplarFilter ? ' active' : '') + '" onclick="setExemplarFilter(\'' + f + '\')">' + labels[f] + '</button>';
      }).join('');
  }

  var list = _exemplarFilter === 'all' ? EXEMPLARS : EXEMPLARS.filter(function(e) { return e.quality === _exemplarFilter; });

  el.innerHTML = list.map(function(ex) {
    var isPoor = ex.quality === 'poor';
    var qualityBadge = isPoor
      ? '<span class="exemplar-quality-badge exemplar-quality-poor">🚩 What NOT to do</span>'
      : '<span class="exemplar-quality-badge exemplar-quality-strong">✅ Strong Example</span>';

    var ptfcRows = isPoor
      ? [['p',ex.persona||'<em style="color:var(--text-dim)">Not provided</em>'],['t',ex.taskText],['f',ex.format||'<em style="color:var(--text-dim)">Not specified</em>'],['c',ex.context||'<em style="color:var(--text-dim)">Not provided</em>']]
      : [['p',ex.persona],['t',ex.taskText],['f',ex.format],['c',ex.context]];

    return '<div class="exemplar-card' + (isPoor ? ' exemplar-card-poor' : '') + '">' +
      qualityBadge +
      '<div class="exemplar-header">' +
        '<div><div class="exemplar-name">' + ex.name + '</div><div class="exemplar-task">' + ex.task + '</div></div>' +
        '<span class="exemplar-tool">' + ex.tool + '</span>' +
      '</div>' +
      '<div class="ptfc-breakdown">' +
        ptfcRows.map(function(row) {
          return '<div class="ptfc-row-ex"><span class="ptfc-label-ex ptfc-' + row[0] + '-ex">' + row[0].toUpperCase() + '</span><div class="ptfc-val">' + row[1] + '</div></div>';
        }).join('') +
      '</div>' +
      '<div class="exemplar-teacher-note"><span class="teacher-note-icon">' + (isPoor ? '⚠️' : '👩‍🏫') + '</span><span>' + ex.teacherNote + '</span></div>' +
    '</div>';
  }).join('');
}

function setExemplarFilter(f) {
  _exemplarFilter = f;
  var btns = document.querySelectorAll('.exemplar-filter-btn');
  btns.forEach(function(b) { b.classList.toggle('active', b.textContent.toLowerCase().includes(f) || f === 'all' && b.textContent.includes('All')); });
  renderExemplars();
}

/* ── Capstone Portfolio ─────────────────────────── */
function openCapstone() {
  loadCapstoneForm();
  var m = document.getElementById('capstoneModal');
  if (m) m.classList.add('open');
}
function closeCapstone() {
  var m = document.getElementById('capstoneModal');
  if (m) m.classList.remove('open');
}
function loadCapstoneForm() {
  var data;
  try { data = JSON.parse(localStorage.getItem('di_capstone')) || {}; } catch(e) { data = {}; }
  ['capstone_title','capstone_problem','capstone_audience','capstone_persona','capstone_task','capstone_format','capstone_context','capstone_findings','capstone_reflection'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.value = data[id] || '';
  });
}
function saveCapstoneData() {
  var data = {};
  ['capstone_title','capstone_problem','capstone_audience','capstone_persona','capstone_task','capstone_format','capstone_context','capstone_findings','capstone_reflection'].forEach(function(id) {
    var el = document.getElementById(id); if (el) data[id] = el.value;
  });
  localStorage.setItem('di_capstone', JSON.stringify(data));
  var ind = document.getElementById('capstoneSavedInd');
  if (ind) { ind.style.display = 'inline'; setTimeout(function() { ind.style.display = 'none'; }, 2000); }
}
function printCapstone() {
  saveCapstoneData();
  var d;
  try { d = JSON.parse(localStorage.getItem('di_capstone')) || {}; } catch(e) { d = {}; }
  var w = window.open('', '_blank');
  if (!w) return;
  w.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Capstone Portfolio</title>' +
    '<style>body{font-family:Georgia,serif;max-width:800px;margin:40px auto;color:#111;line-height:1.6}' +
    'h1{color:#6366f1;border-bottom:2px solid #6366f1;padding-bottom:8px;margin-bottom:4px}' +
    'h2{color:#333;margin-top:24px;font-size:.9rem;text-transform:uppercase;letter-spacing:.05em;color:#64748b}' +
    '.ptfc{background:#f8f9fa;border-left:4px solid #6366f1;padding:10px 16px;margin:6px 0;border-radius:0 4px 4px 0}' +
    '.lbl{font-weight:700;color:#6366f1;margin-right:8px}p{margin:4px 0}' +
    '@media print{button{display:none}}</style></head><body>' +
    '<h1>📋 Capstone Project Portfolio</h1>' +
    '<h2>Project Title</h2><p>' + (d.capstone_title || '—') + '</p>' +
    '<h2>Problem Statement</h2><p>' + (d.capstone_problem || '—') + '</p>' +
    '<h2>Target Audience</h2><p>' + (d.capstone_audience || '—') + '</p>' +
    '<h2>PTFC Research Prompt</h2>' +
    '<div class="ptfc"><span class="lbl">P</span>' + (d.capstone_persona || '—') + '</div>' +
    '<div class="ptfc"><span class="lbl">T</span>' + (d.capstone_task || '—') + '</div>' +
    '<div class="ptfc"><span class="lbl">F</span>' + (d.capstone_format || '—') + '</div>' +
    '<div class="ptfc"><span class="lbl">C</span>' + (d.capstone_context || '—') + '</div>' +
    '<h2>Key Findings</h2><p>' + ((d.capstone_findings || '—').replace(/\n/g,'<br>')) + '</p>' +
    '<h2>Self-Reflection</h2><p>' + ((d.capstone_reflection || '—').replace(/\n/g,'<br>')) + '</p>' +
    '<p style="margin-top:40px;color:#999;font-size:.78rem">Digital Innovations AEP — Printed ' + new Date().toLocaleDateString('en-GB') + '</p>' +
    '<br><button onclick="window.print()" style="padding:10px 24px;background:#6366f1;color:#fff;border:none;border-radius:6px;cursor:pointer">Print</button>' +
    '</body></html>');
  w.document.close(); w.print();
}

/* ── Debate / Discussion Vote ──────────────────── */
function getVoteMessage(stance) {
  var msgs = { agree: '✅ You agree — keep this in mind as you work through the lesson.', disagree: '❌ You disagree — note your reasons; they\'re worth including in any essay.', unsure: '🤔 Not sure yet — that\'s fine! Come back after the lesson.' };
  return msgs[stance] || '';
}
function voteDebate(lessonId, slideIdx, stance) {
  var key = 'di_vote_' + lessonId + '_' + slideIdx;
  localStorage.setItem(key, stance);
  document.querySelectorAll('.debate-vote-btn').forEach(function(b) {
    b.classList.toggle('voted', b.dataset.stance === stance);
  });
  var res = document.getElementById('debateVoteResult');
  if (res) { res.textContent = getVoteMessage(stance); res.style.display = 'block'; }
}

/* ── Adaptive Review Nudge ──────────────────────── */
function showAdaptiveNudge(lessonId) {
  var found = findLesson(lessonId);
  if (!found || !found.lesson.prereqs || !found.lesson.prereqs.length) return;
  var unmet = found.lesson.prereqs.filter(function(pid) { return !completedLessons.has(pid); });
  if (!unmet.length) return;
  var el = document.getElementById('quizExplanation');
  if (!el) return;
  var links = unmet.map(function(pid) {
    var pf = findLesson(pid);
    return pf ? '<span onclick="closeModal();setTimeout(function(){openLesson(' + pid + ')},200)" style="cursor:pointer;color:var(--primary-light);text-decoration:underline">Lesson ' + pid + ': ' + pf.lesson.title + '</span>' : '';
  }).filter(Boolean).join(', ');
  var nudge = document.createElement('div');
  nudge.style.cssText = 'margin-top:10px;padding:10px 14px;background:rgba(245,158,11,.08);border-left:3px solid var(--warning);border-radius:0 6px 6px 0;font-size:.82rem;color:var(--text-muted)';
  nudge.innerHTML = '💡 <strong>Struggling?</strong> You might find it easier after completing: ' + links;
  el.appendChild(nudge);
}

/* ── PWA Install ─────────────────────────────────── */
var _deferredInstall = null;
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  _deferredInstall = e;
  var btn = document.getElementById('pwaInstallBtn');
  if (btn) btn.style.display = 'inline-flex';
});
function installPWA() {
  if (!_deferredInstall) return;
  _deferredInstall.prompt();
  _deferredInstall.userChoice.then(function() { _deferredInstall = null; var btn = document.getElementById('pwaInstallBtn'); if (btn) btn.style.display = 'none'; });
}

/* ── Scenario % Breakdown ──────────────────────── */
function seededRandom(seed) {
  var x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function getScenarioPercentages(lessonId, slideIdx, numChoices) {
  var seed = lessonId * 100 + slideIdx;
  var raws = [];
  for (var i = 0; i < numChoices; i++) {
    raws.push(seededRandom(seed + i * 7.3) + 0.1);
  }
  var total = raws.reduce(function(a,b) { return a+b; }, 0);
  var pcts = raws.map(function(r) { return Math.round(r / total * 100); });
  var sum = pcts.reduce(function(a,b) { return a+b; }, 0);
  pcts[0] += (100 - sum);
  return pcts;
}

/* ── Scenario Logic ───────────────────────────── */
function revealScenarioOutcome(el) {
  var container = document.getElementById('scenarioChoices');
  if (!container || container.classList.contains('scenario-answered')) return;
  container.classList.add('scenario-answered');
  el.classList.add('scenario-chosen');
  var outcome = el.getAttribute('data-outcome');

  // Show % breakdown
  var lessonId = parseInt(container.getAttribute('data-lesson-id')) || currentLessonId;
  var slideIdx = parseInt(container.getAttribute('data-slide-idx')) || 0;
  var numChoices = parseInt(container.getAttribute('data-choice-count')) || 2;
  var pcts = getScenarioPercentages(lessonId, slideIdx, numChoices);
  var choices = container.querySelectorAll('.scenario-choice');
  choices.forEach(function(c, i) {
    var pctEl = document.createElement('span');
    pctEl.className = 'scenario-pct';
    pctEl.textContent = pcts[i] + '%';
    c.appendChild(pctEl);
  });

  var outcomeEl = document.getElementById('scenarioOutcome');
  if (outcomeEl) {
    outcomeEl.style.display = 'block';
    outcomeEl.innerHTML = '<strong>What happened:</strong> ' + outcome +
      '<div class="scenario-pct-note">Percentages show how a typical class splits on this scenario.</div>';
  }
}

/* ── Confetti Celebration ─────────────────────── */
function launchConfetti() {
  var canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var particles = [];
  var colours = ['#6366f1','#06b6d4','#22c55e','#f59e0b','#ef4444','#a855f7','#ec4899'];
  for (var i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * -1,
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 3,
      color: colours[Math.floor(Math.random() * colours.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 4 + 2,
      rot: Math.random() * 360,
      rv: (Math.random() - 0.5) * 10
    });
  }
  var frames = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var alive = false;
    particles.forEach(function(p) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.rot += p.rv;
      if (p.y < canvas.height + 20) alive = true;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frames++;
    if (alive && frames < 180) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

/* ── AI History Timeline ───────────────────────── */
var tlFilter = 'all';

function renderTimeline() {
  if (typeof AI_TIMELINE === 'undefined') return;
  renderTimelineFilters();
  renderTimelineEvents();
}

function renderTimelineFilters() {
  var el = document.getElementById('timelineFilters');
  if (!el) return;
  var cats = ['all','milestone','research','tools','policy','industry','theory'];
  var labels = { all:'All Events', milestone:'🏆 Milestones', research:'🔬 Research', tools:'🛠️ Tools', policy:'🏛️ Policy', industry:'🏭 Industry', theory:'💭 Theory' };
  el.innerHTML = cats.map(function(c) {
    return '<button class="tl-filter' + (tlFilter === c ? ' active' : '') + '" onclick="setTlFilter(\'' + c + '\')">' + labels[c] + '</button>';
  }).join('');
}

function setTlFilter(cat) {
  tlFilter = cat;
  renderTimelineFilters();
  document.querySelectorAll('.tl-event').forEach(function(ev) {
    var evCat = ev.dataset.category;
    ev.classList.toggle('hidden', cat !== 'all' && evCat !== cat);
  });
}

function renderTimelineEvents() {
  var container = document.getElementById('timelineContainer');
  if (!container) return;

  var html = '<div class="timeline-spine"></div>';

  AI_TIMELINE.forEach(function(ev, idx) {
    var hidden = tlFilter !== 'all' && ev.category !== tlFilter;
    var peopleHtml = '';
    if (ev.people && ev.people.length > 0) {
      peopleHtml = '<div class="tl-people">' +
        ev.people.map(function(name) {
          var p = (typeof AI_PEOPLE !== 'undefined') ? AI_PEOPLE[name] : null;
          if (!p) return '<span class="person-chip">' + name + '</span>';
          return '<span class="person-chip">' +
            p.icon + ' ' + name +
            '<span class="person-bio-popup">' +
              '<div class="pbp-name">' + name + '</div>' +
              '<div class="pbp-role">' + p.role + '</div>' +
              '<div class="pbp-dates">' + p.dates + '</div>' +
              '<div class="pbp-bio">' + p.bio + '</div>' +
            '</span>' +
          '</span>';
        }).join('') +
      '</div>';
    }

    html += '<div class="tl-event' + (hidden ? ' hidden' : '') + '" data-category="' + ev.category + '" data-idx="' + idx + '">' +
      '<div class="tl-year">' + ev.year + '</div>' +
      '<div class="tl-dot-col"><div class="tl-dot dot-' + ev.category + '"></div></div>' +
      '<div class="tl-card" onclick="toggleTlCard(this)" role="button" aria-expanded="false">' +
        '<div class="tl-card-header">' +
          '<span class="tl-icon">' + ev.icon + '</span>' +
          '<span class="tl-card-title">' + ev.title + '</span>' +
          '<span class="tl-cat-badge cat-' + ev.category + '">' + ev.category + '</span>' +
          '<span class="tl-chevron">▼</span>' +
        '</div>' +
        '<div class="tl-summary">' + ev.summary + '</div>' +
        '<div class="tl-detail">' +
          '<p class="tl-detail-text">' + ev.detail + '</p>' +
          peopleHtml +
        '</div>' +
      '</div>' +
    '</div>';
  });

  container.innerHTML = html;
}

function toggleTlCard(card) {
  var isOpen = card.classList.contains('open');
  // Close all open cards
  document.querySelectorAll('.tl-card.open').forEach(function(c) {
    c.classList.remove('open');
    c.setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    card.classList.add('open');
    card.setAttribute('aria-expanded', 'true');
  }
}

/* ── Init ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderUnits();
  renderResources('all');
  renderTagFilters();
  renderDifficultyFilter();
  renderGlossary();
  renderExemplars();
  updateHomeStats();
  updateContinueButton();
  renderRecentlyViewed();
  updateTimeEstimate();
  renderNewsTicker();
  renderNewsSection();
  updateXPStrip();
  checkOnboarding();
  initFloatContinue();
});

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  // Don't fire shortcuts when typing in inputs/textareas
  var tag = (e.target.tagName || '').toLowerCase();
  var inInput = (tag === 'input' || tag === 'textarea' || e.target.isContentEditable);

  if (e.key === 'Escape') {
    closeModal();
    closeQuickQuiz();
    closeAssessment();
    closeMilestone();
    closeShortcuts();
    closeCapstone();
    closeOnboarding();
    if (typeof closeAuthModal === 'function') closeAuthModal();
  }
  if (e.key === '?' && !inInput) { openShortcuts(); return; }
  if (currentSlides.length > 0) {
    if (e.key === 'ArrowRight') navigateSlide(1);
    if (e.key === 'ArrowLeft') navigateSlide(-1);
    if (!inInput) {
      if (e.key === 'M' || e.key === 'm') { if (currentLessonId) toggleLesson(currentLessonId); }
      if (e.key === 'B' || e.key === 'b') { if (currentLessonId) toggleBookmark(currentLessonId); }
      if (e.key === 'N' || e.key === 'n') toggleNotesPanel();
      if (e.key === 'F' || e.key === 'f') toggleConfused(currentLessonId, currentSlideIndex);
    }
  }
});

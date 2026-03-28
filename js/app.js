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
}
function updateStreak() {
  const data = JSON.parse(localStorage.getItem(STREAK_KEY) || '{"last":"","count":0}');
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (data.last === today) return;
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
}
function updateThemeIcon(theme) {
  var icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}
initTheme();

/* ── Bookmarks ────────────────────────────────── */
function loadBookmarks() {
  try { return new Set(JSON.parse(localStorage.getItem('di_bookmarks')) || []); }
  catch(e) { return new Set(); }
}
function saveBookmarks() {
  localStorage.setItem('di_bookmarks', JSON.stringify([...bookmarkedLessons]));
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

function lessonRow(lesson, unit) {
  const done = completedLessons.has(lesson.id);
  const slides = getLessonSlides(lesson.id, lesson, unit);
  const mins = slides.length * 5;
  const hidden = currentTagFilter && lesson.tags.indexOf(currentTagFilter) === -1;
  return `
    <div class="lesson-item${hidden ? ' tag-hidden' : ''}" data-id="${lesson.id}" data-tags="${lesson.tags.join(' ')}">
      <div class="lesson-check ${done ? 'done' : ''}" onclick="event.stopPropagation();toggleLesson(${lesson.id})" title="Mark complete">✓</div>
      <div class="lesson-info" onclick="openLesson(${lesson.id})">
        <div class="lesson-num">Lesson ${lesson.id} <span class="lesson-time">~${mins} min</span></div>
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
  // Confetti on completing a lesson
  if (!wasComplete) launchConfetti();
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

  var modal = document.getElementById('lessonModal');
  modal.classList.add('modal--lesson');
  var unitColour = UNIT_COLOURS[unit.id] || '#4F8EF7';
  var doneClass = completedLessons.has(id) ? ' lv-lesson-done' : '';

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
    html = '<div class="slide-hook">' +
      '<span class="slide-badge badge-hook">Opening</span>' +
      '<div class="slide-title">' + slide.title + '</div>' +
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
    html = '<div class="slide-discussion">' +
      '<span class="slide-badge badge-discussion">Discussion</span>' +
      '<div class="slide-title">' + slide.title + '</div>' +
      '<div class="disc-intro">Discuss these questions with a partner or reflect on them individually.</div>' +
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
        '<span>' + c.text + '</span>' +
      '</div>';
    }).join('');
    html = '<div class="slide-scenario">' +
      '<span class="slide-badge badge-scenario">Scenario</span>' +
      '<div class="slide-title">' + slide.title + '</div>' +
      '<div class="scenario-situation">' + slide.situation + '</div>' +
      '<div class="scenario-question">' + slide.question + '</div>' +
      '<div class="scenario-choices" id="scenarioChoices">' + choicesHtml + '</div>' +
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
    html = '<div class="slide-quiz">' +
      '<span class="slide-badge badge-quiz">Knowledge Check</span>' +
      '<div class="slide-title">' + slide.question + '</div>' +
      '<div class="quiz-options" id="quizOptions">' + optionsHtml + '</div>' +
      '<div class="quiz-explanation" id="quizExplanation" style="display:none">' +
        '<strong>Explanation:</strong> ' + slide.explanation +
      '</div>' +
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
      '<div style="margin-top:24px;text-align:center">' +
        '<button class="btn ' + (done ? 'btn-secondary' : 'btn-primary') + '" onclick="toggleLesson(' + currentLessonId + ');renderSlide(' + index + ')">' +
          (done ? '&#10003; Completed — Undo' : '&#10003; Mark as Complete') +
        '</button>' +
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
}

/* ── Reflection Export ────────────────────────── */
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
  // Save quiz score
  if (currentLessonId) saveQuizScore(currentLessonId, isCorrect);
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

/* ── Scenario Logic ───────────────────────────── */
function revealScenarioOutcome(el) {
  var container = document.getElementById('scenarioChoices');
  if (!container || container.classList.contains('scenario-answered')) return;
  container.classList.add('scenario-answered');
  el.classList.add('scenario-chosen');
  var outcome = el.getAttribute('data-outcome');
  var outcomeEl = document.getElementById('scenarioOutcome');
  if (outcomeEl) {
    outcomeEl.style.display = 'block';
    outcomeEl.innerHTML = '<strong>What happened:</strong> ' + outcome;
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

/* ── Init ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderUnits();
  renderResources('all');
  renderTagFilters();
  renderGlossary();
  updateHomeStats();
  updateContinueButton();
});

// Keyboard shortcuts: Escape closes modal, arrows navigate slides
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (currentSlides.length > 0) {
    if (e.key === 'ArrowRight') navigateSlide(1);
    if (e.key === 'ArrowLeft') navigateSlide(-1);
  }
});

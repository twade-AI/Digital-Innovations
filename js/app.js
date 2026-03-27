/* ── App Logic ── Digital Innovations Course Portal ─────── */

const STORAGE_KEY = 'di_progress';
const STREAK_KEY  = 'di_streak';

/* ── State ─────────────────────────────────────── */
let completedLessons = loadProgress();
let currentFilter = 'all';

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
  return `
    <div class="lesson-item" data-id="${lesson.id}">
      <div class="lesson-check ${done ? 'done' : ''}" onclick="event.stopPropagation();toggleLesson(${lesson.id})" title="Mark complete">✓</div>
      <div class="lesson-info" onclick="openLesson(${lesson.id})">
        <div class="lesson-num">Lesson ${lesson.id}</div>
        <div class="lesson-title">${lesson.title}</div>
      </div>
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
  if (completedLessons.has(id)) completedLessons.delete(id);
  else completedLessons.add(id);
  saveProgress();
  renderUnits();
  updateHomeStats();
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
  for (const u of UNITS) {
    for (const l of u.lessons) {
      const score = [l.title, l.desc, ...l.tags, ...l.objectives].filter(s => s.toLowerCase().includes(q)).length;
      if (score > 0) results.push({ lesson: l, unit: u, score });
    }
  }
  results.sort((a, b) => b.score - a.score);
  const top = results.slice(0, 8);
  if (top.length === 0) {
    box.innerHTML = '<div class="search-result-item"><div class="sr-title">No results</div></div>';
  } else {
    box.innerHTML = top.map(r => `
      <div class="search-result-item" onclick="document.getElementById('searchResults').classList.remove('open');document.getElementById('searchInput').value='';showSection('units');setTimeout(()=>openLesson(${r.lesson.id}),150)">
        <div class="sr-title">Lesson ${r.lesson.id}: ${r.lesson.title}</div>
        <div class="sr-unit">Unit ${r.unit.id + 1}: ${r.unit.title}</div>
      </div>`).join('');
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
}

function updateHomeStats() {
  const total = UNITS.reduce((s, u) => s + u.lessons.length, 0);
  const done = completedLessons.size;
  const pct = Math.round((done / total) * 100);
  const el = document.getElementById('progressPercent');
  if (el) el.textContent = pct + '%';
}

function resetProgress() {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  completedLessons.clear();
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STREAK_KEY);
  renderUnits();
  renderProgress();
  updateHomeStats();
}

/* ── Init ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderUnits();
  renderResources('all');
  updateHomeStats();
});

// Keyboard shortcuts: Escape closes modal, arrows navigate slides
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (currentSlides.length > 0) {
    if (e.key === 'ArrowRight') navigateSlide(1);
    if (e.key === 'ArrowLeft') navigateSlide(-1);
  }
});

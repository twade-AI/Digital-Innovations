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

function openLesson(id) {
  const found = findLesson(id);
  if (!found) return;
  const { lesson, unit } = found;
  const slides = generateSlides(lesson, unit);
  currentSlides = slides;
  currentLessonId = id;
  currentSlideIndex = 0;

  const modal = document.getElementById('lessonModal');
  modal.classList.add('modal--lesson');

  document.getElementById('modalBody').innerHTML = `
    <div class="lv-header">
      <div class="lv-meta">
        <span class="lv-unit-label">Unit ${unit.id + 1}: ${unit.title}</span>
        <span class="lv-slide-count">Slide <span id="lvSlideNum">1</span> of ${slides.length}</span>
      </div>
      <div class="lv-progress-track">
        <div class="lv-progress-fill" id="lvProgressFill" style="width:${100/slides.length}%"></div>
      </div>
    </div>
    <div class="lv-slide-area" id="lvSlideArea"></div>
    <div class="lv-footer">
      <button class="btn btn-secondary" id="lvPrev" onclick="navigateSlide(-1)">← Back</button>
      <button class="btn btn-primary" id="lvNext" onclick="navigateSlide(1)">Next →</button>
    </div>`;

  renderSlide(0);
  modal.classList.add('open');
}

function renderSlide(index) {
  const slide = currentSlides[index];
  const area = document.getElementById('lvSlideArea');
  const done = completedLessons.has(currentLessonId);

  let html = '';

  switch (slide.type) {
    case 'hook':
      html = `
        <div class="slide-hook">
          <span class="slide-badge badge-hook">Opening</span>
          <div class="slide-title">${slide.title}</div>
          <div class="hook-body">${slide.body}</div>
          <div class="interactive-wrapper" style="margin-top:24px">
            <div class="interactive-label">🏷️ Tags</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              ${findLesson(currentLessonId).lesson.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>`;
      break;

    case 'concept':
      html = `
        <div class="slide-concept">
          <span class="slide-badge badge-concept">Concept ${slide.index}/${slide.total}</span>
          <div class="slide-title">${slide.title}</div>
          <div class="concept-body">${slide.body}</div>
          <div class="concept-callout">
            <strong>Learning focus:</strong> ${slide.title}
          </div>
        </div>`;
      break;

    case 'discussion':
      html = `
        <div class="slide-discussion">
          <span class="slide-badge badge-discussion">Discussion</span>
          <div class="slide-title">${slide.title}</div>
          <div class="disc-intro">Discuss these questions with a partner or reflect on them individually.</div>
          <div class="disc-questions">
            ${slide.questions.map(q => `
              <div class="disc-q" onclick="this.classList.toggle('discussed')">
                <span class="disc-q-num">${q.num}</span>
                <span class="disc-q-text">${q.text}</span>
              </div>`).join('')}
          </div>
          <div class="interactive-wrapper" style="margin-top:24px">
            <div class="interactive-label">✏️ Reflection</div>
            <div class="reflection-prompt">Write your thoughts on the questions above.</div>
            <textarea class="reflection-textarea" placeholder="Type your reflection here..."></textarea>
          </div>
        </div>`;
      break;

    case 'summary':
      html = `
        <div class="slide-summary">
          <span class="slide-badge badge-summary">Summary</span>
          <div class="slide-title">${slide.title}</div>
          <div class="summary-intro">Here's what you should take away from this lesson:</div>
          <div class="summary-points">
            ${slide.points.map(p => `
              <div class="summary-point">
                <span class="sp-icon">${p.icon}</span>
                <span class="sp-text"><strong>${p.text}</strong></span>
              </div>`).join('')}
          </div>
          <div style="margin-top:24px;text-align:center">
            <button class="btn ${done ? 'btn-secondary' : 'btn-primary'}" onclick="toggleLesson(${currentLessonId});renderSlide(${index})">
              ${done ? '✓ Completed — Undo' : '✓ Mark as Complete'}
            </button>
          </div>
        </div>`;
      break;
  }

  area.innerHTML = html;
  area.scrollTop = 0;

  // Update footer nav
  document.getElementById('lvSlideNum').textContent = index + 1;
  document.getElementById('lvProgressFill').style.width = ((index + 1) / currentSlides.length * 100) + '%';
  document.getElementById('lvPrev').style.visibility = index === 0 ? 'hidden' : 'visible';

  const nextBtn = document.getElementById('lvNext');
  if (index === currentSlides.length - 1) {
    nextBtn.textContent = 'Close';
    nextBtn.onclick = () => closeModal();
  } else {
    nextBtn.textContent = 'Next →';
    nextBtn.onclick = () => navigateSlide(1);
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
function renderResources(filter) {
  currentFilter = filter || 'all';
  const items = currentFilter === 'all' ? RESOURCES : RESOURCES.filter(r => r.cat === currentFilter);
  document.getElementById('resourcesGrid').innerHTML = items.map(r => `
    <div class="resource-card" onclick="openResource('${r.id}')">
      <span class="rc-type" data-cat="${r.cat}">${r.cat}</span>
      <h4>${r.title}</h4>
      <p>${r.desc}</p>
    </div>`).join('');
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.toLowerCase() === currentFilter);
  });
}

function filterResources(cat) { renderResources(cat); }

function openResource(id) {
  const r = RESOURCES.find(x => x.id === id);
  if (!r) return;
  const content = RESOURCE_CONTENT[r.id] || '';
  document.getElementById('modalBody').innerHTML = `
    <span class="rc-type" data-cat="${r.cat}" style="margin-bottom:12px">${r.cat}</span>
    <h2>${r.title}</h2>
    <p class="modal-desc">${r.desc}</p>
    <div class="resource-body">${content || '<p style="color:var(--text-dim)">Full interactive content coming soon.</p>'}</div>
    <div class="modal-actions">
      <button class="btn btn-secondary" onclick="closeModal()">Close</button>
    </div>`;
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

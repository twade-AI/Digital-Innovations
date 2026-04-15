/* ── Supabase Auth & Progress Sync ──────────────────────────────────
   Loaded after supabase-config.js.
   All functions degrade gracefully if Supabase is not configured.
   ───────────────────────────────────────────────────────────────── */

var _sb          = null;   // Supabase client
var _currentUser = null;   // auth.User or null
var _syncTimer   = null;   // debounce handle
var _supabaseReady = false;

/* ── Initialise ─────────────────────────────────────────────────── */
function initSupabase() {
  if (typeof supabase === 'undefined') return;                   // SDK not loaded
  if (!SUPABASE_URL || SUPABASE_URL === 'YOUR_SUPABASE_URL') return; // not configured

  try {
    _sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    _supabaseReady = true;

    // React to login / logout events
    _sb.auth.onAuthStateChange(function(event, session) {
      var prev = _currentUser;
      _currentUser = session ? session.user : null;
      updateAuthUI();
      if (_currentUser && !prev) {
        // just signed in — pull remote progress
        loadProgressFromSupabase();
      }
    });

    // Restore existing session on page load
    _sb.auth.getSession().then(function(res) {
      var session = res.data && res.data.session;
      _currentUser = session ? session.user : null;
      updateAuthUI();
      if (_currentUser) loadProgressFromSupabase();
    });

    // Fetch teacher-added news articles (no auth required — public read policy)
    fetchDynamicNews();
  } catch(e) {
    console.warn('[auth] Supabase init failed:', e.message);
  }
}

async function fetchDynamicNews() {
  if (!isSupabaseReady()) return;
  try {
    var res = await _sb.from('site_news').select('*').order('created_at', { ascending: false });
    if (res.error || !res.data || !res.data.length) return;
    // Prepend dynamic articles to the front of AI_NEWS
    var newItems = res.data.map(function(n) {
      return { headline: n.headline, source: n.source, date: n.date, tag: n.tag || 'tools', url: n.url || '' };
    });
    newItems.forEach(function(item) {
      // Avoid duplicates
      var exists = AI_NEWS.some(function(n) { return n.headline === item.headline; });
      if (!exists) AI_NEWS.unshift(item);
    });
    // Re-render news displays
    if (typeof _newsLastFetched !== 'undefined') _newsLastFetched = new Date();
    if (typeof renderNewsTicker === 'function') renderNewsTicker();
    if (typeof renderNewsSection === 'function') renderNewsSection();
  } catch(e) {
    console.warn('[auth] Dynamic news fetch failed:', e.message);
  }
}

function isSupabaseReady() { return _supabaseReady && _sb !== null; }
function getCurrentUser()  { return _currentUser; }
function isLoggedIn()      { return _currentUser !== null; }

/* ── Sign Up ─────────────────────────────────────────────────────── */
async function authSignUp(email, password, displayName) {
  if (!isSupabaseReady()) return { error: { message: 'Supabase is not configured yet.' } };
  if (!email.toLowerCase().endsWith('@' + ALLOWED_DOMAIN)) {
    return { error: { message: 'Please use your @' + ALLOWED_DOMAIN + ' school email address.' } };
  }
  return await _sb.auth.signUp({
    email: email,
    password: password,
    options: { data: { display_name: displayName || email.split('@')[0] } }
  });
}

/* ── Sign In ─────────────────────────────────────────────────────── */
async function authSignIn(email, password) {
  if (!isSupabaseReady()) return { error: { message: 'Supabase is not configured yet.' } };
  if (!email.toLowerCase().endsWith('@' + ALLOWED_DOMAIN)) {
    return { error: { message: 'Only @' + ALLOWED_DOMAIN + ' school accounts are accepted.' } };
  }
  return await _sb.auth.signInWithPassword({ email: email, password: password });
}

/* ── Sign Out ────────────────────────────────────────────────────── */
async function authSignOut() {
  if (!isSupabaseReady() || !_currentUser) return;
  await _sb.auth.signOut();
  _currentUser = null;
  updateAuthUI();
}

/* ── Ensure profiles row exists (so admin dashboard can see this user) */
async function ensureProfile() {
  if (!isSupabaseReady() || !_currentUser) return;
  try {
    var displayName = (_currentUser.user_metadata && _currentUser.user_metadata.display_name)
      ? _currentUser.user_metadata.display_name
      : _currentUser.email.split('@')[0];
    // INSERT … ON CONFLICT DO NOTHING — never overwrites an existing row (preserves is_admin flag)
    await _sb.from('profiles').upsert({
      user_id:      _currentUser.id,
      email:        _currentUser.email,
      display_name: displayName,
      is_admin:     false
    }, { onConflict: 'user_id', ignoreDuplicates: true });
  } catch(e) {
    console.warn('[auth] ensureProfile failed:', e.message);
  }
}

/* ── Load remote → local (on login) ─────────────────────────────── */
async function loadProgressFromSupabase() {
  if (!isSupabaseReady() || !_currentUser) return;
  ensureProfile(); // create profiles row if this is their first login
  try {
    var res = await _sb
      .from('progress')
      .select('data')
      .eq('user_id', _currentUser.id)
      .maybeSingle();

    if (!res.data || !res.data.data) return; // no remote data yet
    var remote = res.data.data;

    // Merge completed lessons (union of local + remote)
    if (Array.isArray(remote.completed)) {
      remote.completed.forEach(function(id) { completedLessons.add(parseInt(id)); });
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedLessons]));
    }
    // Merge bookmarks
    if (Array.isArray(remote.bookmarks)) {
      remote.bookmarks.forEach(function(id) { bookmarkedLessons.add(parseInt(id)); });
      localStorage.setItem('di_bookmarks', JSON.stringify([...bookmarkedLessons]));
    }
    // Merge quiz scores (remote wins for same key if more recent)
    if (remote.quiz_scores && typeof remote.quiz_scores === 'object') {
      Object.assign(quizScores, remote.quiz_scores);
      localStorage.setItem('di_quiz_scores', JSON.stringify(quizScores));
    }
    // XP — keep higher of local vs remote
    if (remote.xp && typeof remote.xp.total === 'number') {
      var localXp = loadXP();
      if (remote.xp.total > localXp.total) {
        localStorage.setItem(XP_KEY, JSON.stringify(remote.xp));
      }
    }
    // Streak — keep higher count
    if (remote.streak) {
      var localStreak = JSON.parse(localStorage.getItem(STREAK_KEY) || '{}');
      if ((remote.streak.count || 0) > (localStreak.count || 0)) {
        localStorage.setItem(STREAK_KEY, JSON.stringify(remote.streak));
      }
    }

    // Refresh UI
    renderUnits();
    updateHomeStats();
    updateXPStrip();
    if (typeof renderProgress === 'function' &&
        document.getElementById('section-progress')?.classList.contains('active')) {
      renderProgress();
    }
  } catch(e) {
    console.warn('[auth] Failed to load remote progress:', e);
  }
}

/* ── Schedule debounced sync local → remote ─────────────────────── */
function scheduleSync() {
  if (!isSupabaseReady() || !_currentUser) return;
  clearTimeout(_syncTimer);
  _syncTimer = setTimeout(syncToSupabase, 3000);
}

async function syncToSupabase() {
  if (!isSupabaseReady() || !_currentUser) return;
  var payload = {
    completed:   [...completedLessons],
    bookmarks:   [...bookmarkedLessons],
    quiz_scores: quizScores,
    xp:          loadXP(),
    streak:      JSON.parse(localStorage.getItem(STREAK_KEY) || '{}'),
    synced_at:   new Date().toISOString()
  };
  try {
    await _sb.from('progress').upsert({
      user_id:    _currentUser.id,
      data:       payload,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' });
    showSyncIndicator('☁️ Saved');
  } catch(e) {
    console.warn('[auth] Sync failed:', e);
    showSyncIndicator('⚠️ Sync failed');
  }
}

function showSyncIndicator(msg) {
  var el = document.getElementById('syncIndicator');
  if (!el) return;
  el.textContent = msg;
  el.style.opacity = '1';
  setTimeout(function() { el.style.opacity = '0'; }, 2500);
}

/* ── Auth Modal UI ───────────────────────────────────────────────── */
function openAuthModal(tab) {
  var m = document.getElementById('authModal');
  if (m) m.classList.add('open');
  switchAuthTab(tab || 'login');
  // Close Escape is handled by the global keydown handler
}
function closeAuthModal() {
  var m = document.getElementById('authModal');
  if (m) m.classList.remove('open');
}
function switchAuthTab(tab) {
  document.getElementById('authLoginForm').style.display  = tab === 'login'  ? 'block' : 'none';
  document.getElementById('authSignupForm').style.display = tab === 'signup' ? 'block' : 'none';
  document.querySelectorAll('.auth-tab').forEach(function(t) {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  clearAuthError();
}
function setAuthError(msg, success) {
  var el = document.getElementById('authError');
  if (!el) return;
  el.textContent = msg;
  el.style.color = success ? 'var(--success)' : 'var(--danger)';
}
function clearAuthError() { setAuthError(''); }

async function submitLogin(e) {
  e.preventDefault();
  var email    = document.getElementById('loginEmail').value.trim();
  var password = document.getElementById('loginPassword').value;
  var btn      = e.target.querySelector('button[type="submit"]');
  btn.disabled = true; btn.textContent = 'Signing in…';
  var res = await authSignIn(email, password);
  btn.disabled = false; btn.textContent = 'Sign In';
  if (res.error) { setAuthError(res.error.message); }
  else           { closeAuthModal(); }
}

async function submitSignup(e) {
  e.preventDefault();
  var email    = document.getElementById('signupEmail').value.trim();
  var password = document.getElementById('signupPassword').value;
  var name     = document.getElementById('signupName').value.trim();
  var btn      = e.target.querySelector('button[type="submit"]');
  if (password.length < 6) { setAuthError('Password must be at least 6 characters.'); return; }
  btn.disabled = true; btn.textContent = 'Creating account…';
  var res = await authSignUp(email, password, name);
  btn.disabled = false; btn.textContent = 'Create Account';
  if (res.error) { setAuthError(res.error.message); }
  else           { setAuthError('✓ Check your email to confirm your account, then sign in.', true); }
}

function updateAuthUI() {
  var loginBtn  = document.getElementById('authBtn');
  var userChip  = document.getElementById('userChip');
  var syncEl    = document.getElementById('syncIndicator');
  var adminLink = document.getElementById('adminLink');
  if (!loginBtn) return;

  if (_currentUser) {
    loginBtn.style.display = 'none';
    if (userChip) {
      userChip.style.display = 'flex';
      var nameEl = document.getElementById('userDisplayName');
      if (nameEl) {
        var meta = _currentUser.user_metadata;
        nameEl.textContent = (meta && meta.display_name) ? meta.display_name : _currentUser.email.split('@')[0];
      }
    }
    if (syncEl)    syncEl.style.display = 'inline';
    if (adminLink && ADMIN_EMAILS.includes(_currentUser.email)) {
      adminLink.style.display = 'inline-block';
    }
  } else {
    loginBtn.style.display  = 'inline-flex';
    if (userChip)  userChip.style.display  = 'none';
    if (syncEl)    syncEl.style.display    = 'none';
    if (adminLink) adminLink.style.display = 'none';
  }
}

/* ── Bootstrap ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  initSupabase();
});

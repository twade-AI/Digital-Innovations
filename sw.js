/* Digital Innovations — Service Worker (offline-first) v11 — split caches */

/* Three caches so bumping one category doesn't invalidate the others.
   When you change a JS file, bump CODE_CACHE only; fonts and HTML stay
   in place and the user doesn't re-download them. */
const SHELL_CACHE  = 'di-shell-v35';  // HTML + CSS + fonts — slow to change
const CODE_CACHE   = 'di-code-v72';   // JS — changes with every feature
const ASSETS_CACHE = 'di-assets-v5';  // Logos, icons, manifest
const ALL_CACHES   = [SHELL_CACHE, CODE_CACHE, ASSETS_CACHE];

const SHELL_ASSETS = [
  './',
  './index.html',
  './work.html',
  './review/pupil-trial.html',
  './css/experience.css',
  './fluency.html',
  './removes.html',
  './revised.html',
  './verify.html',
  './portfolio.html',
  './class.html',
  './family.html',
  './labs.html',
  './css/style.css',
  './css/lesson.css',
  './css/brand.css',
  './css/wow.css',
  './css/editorial.css',
  './css/studio.css',
  './css/labs.css',
  './assets/brand/fonts/CallunaSans-Regular.otf',
  './assets/brand/fonts/CallunaSans-Italic.otf',
  './assets/brand/fonts/CallunaSans-Light.otf',
  './assets/brand/fonts/CallunaSans-LightItalic.otf',
  './assets/brand/fonts/CallunaSans-Bold.otf',
  './assets/brand/fonts/CallunaSans-BoldItalic.otf',
];

const CODE_ASSETS = [
  './js/app.js',
  './js/auth.js',
  './js/data.js',
  './js/news-live.js',
  './js/quiz-bank.js',
  './js/visuals.js',
  './js/slides-u1u2.js',
  './js/slides-u3u4.js',
  './js/slides-u5u6.js',
  './js/slides-companions.js',
  './js/learning-updates.js',
  './js/shared-content-review.js',
  './js/passport-data.js',
  './js/evidence-tasks.js',
  './js/studio-visuals.js',
  './js/aep-enrichment.js',
  './js/aep-curriculum.js',
  './js/course-catalog.js',
  './js/site-experience.js',
  './js/feedback-cases.js',
  './js/project-source-packs.js',
  './js/learning-feedback.js',
  './js/teaching-notes.js',
  './js/teaching-guidance.js',
  './js/work-backup.js',
  './js/aep-shared-player.js',
  './js/learning-evidence.js',
  './js/revised-curriculum.js',
  './js/slides-critical.js',
  './js/slides-advanced.js',
  './js/slides-gcse.js',
  './js/tts.js',
  './js/slide-utils.js',
  './js/labs.js',
];

const STATIC_ASSETS = [
  './assets/studio/creative-object.webp',
  './icon.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/apple-touch-icon.png',
  './manifest.json',
  './assets/brand/logo/haileybury-magenta.png',
];

/* Pick the right cache for a given URL so fetch-cached writes land in
   the same bucket the install step populated. */
function bucketFor(url) {
  if (/\.js(\?|$)/.test(url.pathname)) return CODE_CACHE;
  if (/\/assets\/brand\/logo\//.test(url.pathname)) return ASSETS_CACHE;
  return SHELL_CACHE;
}

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(Promise.all([
    caches.open(SHELL_CACHE).then(function(c) { return c.addAll(SHELL_ASSETS); }),
    caches.open(CODE_CACHE).then(function(c) { return c.addAll(CODE_ASSETS); }),
    caches.open(ASSETS_CACHE).then(function(c) { return c.addAll(STATIC_ASSETS); }),
  ]).catch(function() {}));
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return ALL_CACHES.indexOf(k) === -1; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);

  // Show today's published headlines on the first online visit, with offline fallback.
  if (url.origin === self.location.origin && url.pathname.endsWith('/js/news-live.js')) {
    e.respondWith((async function() {
      var controller = new AbortController();
      var timer = setTimeout(function() { controller.abort(); }, 8000);
      try {
        var response = await fetch(e.request, {cache:'no-cache', signal:controller.signal});
        if (!response.ok) throw new Error('News request failed');
        try { var cache = await caches.open(CODE_CACHE); await cache.put(e.request, response.clone()); } catch (_) {}
        return response;
      } catch (_) {
        return (await caches.match(e.request)) || new Response('/* News unavailable offline. */', {status:503, headers:{'Content-Type':'application/javascript'}});
      } finally { clearTimeout(timer); }
    })());
    return;
  }

  // Network-first for Supabase — never serve stale auth/data
  if (url.hostname.includes('supabase')) {
    e.respondWith(
      fetch(e.request).catch(function() { return new Response('', { status: 503 }); })
    );
    return;
  }

  // Cache-first for all course assets; background-update the right bucket
  e.respondWith(
    caches.match(e.request).then(async function(cached) {
      // Query parameters select a lesson/portfolio in the same static HTML shell.
      // A previously unseen deep link should still open a cached course offline.
      if (!cached && e.request.mode === 'navigate' && url.origin === self.location.origin &&
          /\/(?:index|removes|fluency|revised|portfolio|class|family|labs|verify)\.html$/.test(url.pathname)) {
        cached = await caches.match(url.origin + url.pathname);
      }
      var networkFetch = fetch(e.request).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          var bucket = bucketFor(url);
          caches.open(bucket).then(function(cache) { cache.put(e.request, clone); });
        }
        return response;
      }).catch(function() { return null; });

      return cached || networkFetch.then(function(response) { return response || new Response("This resource is not available offline yet.", {status:503, headers:{"Content-Type":"text/plain"}}); });
    })
  );
});

self.addEventListener('message', function(e) {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

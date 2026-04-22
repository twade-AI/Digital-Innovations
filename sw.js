/* Digital Innovations — Service Worker (offline-first) v11 — split caches */

/* Three caches so bumping one category doesn't invalidate the others.
   When you change a JS file, bump CODE_CACHE only; fonts and HTML stay
   in place and the user doesn't re-download them. */
const SHELL_CACHE  = 'di-shell-v3';   // HTML + CSS + fonts — slow to change
const CODE_CACHE   = 'di-code-v3';    // JS — changes with every feature
const ASSETS_CACHE = 'di-assets-v2';  // Logos, icons, manifest
const ALL_CACHES   = [SHELL_CACHE, CODE_CACHE, ASSETS_CACHE];

const SHELL_ASSETS = [
  './',
  './index.html',
  './fluency.html',
  './removes.html',
  './verify.html',
  './css/style.css',
  './css/lesson.css',
  './css/brand.css',
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
  './js/quiz-bank.js',
  './js/visuals.js',
  './js/slides-u1u2.js',
  './js/slides-u3u4.js',
  './js/slides-u5u6.js',
  './js/slides-critical.js',
  './js/slides-advanced.js',
  './js/slides-gcse.js',
  './js/tts.js',
];

const STATIC_ASSETS = [
  './icon.svg',
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

  // Network-first for Supabase — never serve stale auth/data
  if (url.hostname.includes('supabase')) {
    e.respondWith(
      fetch(e.request).catch(function() { return new Response('', { status: 503 }); })
    );
    return;
  }

  // Cache-first for all course assets; background-update the right bucket
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var networkFetch = fetch(e.request).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          var bucket = bucketFor(url);
          caches.open(bucket).then(function(cache) { cache.put(e.request, clone); });
        }
        return response;
      }).catch(function() { return null; });

      return cached || networkFetch;
    })
  );
});

self.addEventListener('message', function(e) {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

/* Digital Innovations — Service Worker (offline-first) v10 — Haileybury brand layer */
const CACHE = 'di-v26';
const ASSETS = [
  './',
  './index.html',
  './fluency.html',
  './removes.html',
  './css/style.css',
  './css/lesson.css',
  './css/brand.css',
  './assets/brand/fonts/CallunaSans-Regular.otf',
  './assets/brand/fonts/CallunaSans-Italic.otf',
  './assets/brand/fonts/CallunaSans-Light.otf',
  './assets/brand/fonts/CallunaSans-LightItalic.otf',
  './assets/brand/fonts/CallunaSans-Bold.otf',
  './assets/brand/fonts/CallunaSans-BoldItalic.otf',
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
  './icon.svg',
  './manifest.json',
  './assets/brand/logo/haileybury-magenta.png',
];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(ASSETS);
    }).catch(function() {})
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); })
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

  // Cache-first for all course assets; background-update cache
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var networkFetch = fetch(e.request).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE).then(function(cache) { cache.put(e.request, clone); });
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

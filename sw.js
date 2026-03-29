/* Digital Innovations — Service Worker (offline-first) */
const CACHE = 'di-v2';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './css/lesson.css',
  './js/app.js',
  './js/data.js',
  './js/slides-u1u2.js',
  './js/slides-u3u4.js',
  './js/slides-u5u6.js',
  './icon.svg',
  './manifest.json',
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
      return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(response) {
        // Cache successful responses for course assets
        if (response && response.status === 200) {
          var url = new URL(e.request.url);
          if (url.pathname.startsWith('/css/') || url.pathname.startsWith('/js/') || url.pathname === '/index.html') {
            var clone = response.clone();
            caches.open(CACHE).then(function(cache) { cache.put(e.request, clone); });
          }
        }
        return response;
      }).catch(function() {
        return cached;
      });
    })
  );
});

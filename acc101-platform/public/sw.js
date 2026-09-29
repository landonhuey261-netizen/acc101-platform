'use strict';

/* ACC 101 service worker.
 * - Versioned cache; precache the app shell (CSS/JS live at the public root).
 * - Runtime: GET same-origin requests go network-first with cache fallback.
 * - Non-GET requests and /api traffic are never cached or intercepted for writes.
 */

var CACHE_VERSION = 'acc101-v3';
var PRECACHE = [
  '/',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/apple-touch-icon.png',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      // addAll is best-effort: a missing asset must not break installation.
      return Promise.all(
        PRECACHE.map(function (url) {
          return cache.add(url).catch(function () { /* ignore missing asset */ });
        })
      );
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_VERSION; }).map(function (k) {
          return caches.delete(k);
        })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return; // never touch POSTs (incl. /api writes)
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // same-origin only
  if (url.pathname.indexOf('/api/') === 0) return; // never cache API JSON

  event.respondWith(
    fetch(req).then(function (res) {
      // Cache a copy of successful same-origin GETs for offline fallback.
      var copy = res.clone();
      caches.open(CACHE_VERSION).then(function (cache) {
        if (res.status === 200) cache.put(req, copy).catch(function () {});
      });
      return res;
    }).catch(function () {
      return caches.match(req).then(function (cached) {
        if (cached) return cached;
        // Last resort for navigations: the cached landing page.
        if (req.mode === 'navigate') return caches.match('/');
        return Response.error();
      });
    })
  );
});

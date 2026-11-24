/* Learning Games – minimal pass-through service worker (no caching, always fresh) */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { self.clients.claim(); });
self.addEventListener('fetch', function (e) { /* network only — avoids stale cached games */ });

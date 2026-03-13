const CACHE_NAME = 'rooms-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/pages/dashboard.html',
  '/pages/admin.html',
  '/neu.png',
  '/js/firebase-config.js'
];

// Install the service worker and cache the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached files when offline or for faster loading
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return the cached version if found, otherwise fetch from the network
        return response || fetch(event.request);
      })
  );
});
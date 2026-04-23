const CACHE_NAME = 'knights-hub-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/manifest.json',
  '/knightslogo-512.png', 
  '/knightslogo-192.png' 
];

// Install Event: Caching the "Shell" of the app
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch Event: Serving from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
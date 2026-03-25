const CACHE_NAME = 'mandre-v11';

// Recursos básicos que deben estar en caché para que Chrome apruebe la instalación
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Estrategia: "Red primero, si falla, usa caché". Ideal para apps que manejan datos en vivo.
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

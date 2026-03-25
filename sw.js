const CACHE_NAME = 'mandre-v10';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Responde directamente con la red para evitar errores de caché
  event.respondWith(fetch(event.request));
});

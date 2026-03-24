const CACHE_NAME = 'mandre-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(['/']);
        })
    );
    self.skipWaiting(); // Fuerza la activación inmediata
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim()); // Toma el control de la página al instante
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});

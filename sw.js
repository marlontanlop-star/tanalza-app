self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Esto es lo mínimo que pide Chrome para dejarte instalar
    event.respondWith(fetch(event.request));
});

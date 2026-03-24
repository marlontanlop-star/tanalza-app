self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Esto permite que la app cargue recursos básicos
  e.respondWith(
    fetch(e.request).catch(() => {
      return new Response("Cargando...");
    })
  );
});

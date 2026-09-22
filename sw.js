// Service worker de Lore Training — habilita instalación como app y uso básico sin conexión.
const CACHE_NAME = 'lore-training-v1';
const PRECACHE_URLS = [
    './',
    './index.html',
    './manifest.webmanifest',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/icon-192-maskable.png',
    './icons/icon-512-maskable.png',
  ];

self.addEventListener('install', (event) => {
    event.waitUntil(
          caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(PRECACHE_URLS))
            .then(() => self.skipWaiting())
        );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
          caches.keys().then((keys) =>
                  Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
                                 ).then(() => self.clients.claim())
        );
});

// Cache-first para lo propio de la app; red directa (sin cache) para fuentes externas (Google Fonts).
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return; // deja pasar fuentes externas tal cual

                        event.respondWith(
                              caches.match(event.request).then((cached) => {
                                      if (cached) return cached;
                                      return fetch(event.request)
                                        .then((response) => {
                                                    if (response && response.status === 200) {
                                                                  const copy = response.clone();
                                                                  caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
                                                    }
                                                    return response;
                                        })
                                        .catch(() => cached);
                              })
                            );
});

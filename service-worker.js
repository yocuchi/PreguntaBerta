const CACHE_NAME = 'quiz-app-cache-v2';
const urlsToCache = [
  '/css/styles.css',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
  'https://code.jquery.com/jquery-3.6.0.min.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  // Forzar activación inmediata del nuevo service worker
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const isHtml = event.request.destination === 'document' || 
                 url.pathname.endsWith('.html') || 
                 url.pathname === '/';
  const isJavaScript = url.pathname.endsWith('.js') || 
                       event.request.destination === 'script';
  
  // Para HTML y JavaScript: Network First (siempre descargar desde servidor)
  if (isHtml || isJavaScript) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Si la descarga fue exitosa, actualizar el cache como respaldo
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          return response;
        })
        .catch(() => {
          // Solo usar cache si no hay conexión
          return caches.match(event.request)
            .then(cachedResponse => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // Si no hay cache y no hay conexión, devolver error
              return new Response('Sin conexión y sin cache disponible', {
                status: 503,
                statusText: 'Service Unavailable'
              });
            });
        })
    );
  } else {
    // Para otros recursos (CSS, imágenes, etc.): Cache First
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request)
            .then(response => {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
              return response;
            });
        })
    );
  }
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      // Forzar que este service worker controle todas las pestañas inmediatamente
      return self.clients.claim();
    })
  );
}); 
const CACHE_NAME = 'quiz-app-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/Generico.html',
  '/css/styles.css',
  '/games/6pri-Ingles UNit 8Vocabulary.js',
  '/games/2Pri-Capitales.js',
  '/games/2Pri-Ingles.js', 
  '/games/2ESO-Formulacion.js',
  '/games/2ESO-InglesBerta.js',
  '/games/2ESO-TablaPeriodica.js',
  '/games/3ESO-VocabularioIngles.js',
  // Añade aquí otros archivos que quieras cachear, como imágenes o scripts de juegos específicos
  // Por ejemplo: '/games/2Pri-Ingles.js',
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
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 
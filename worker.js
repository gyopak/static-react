const CACHE_NAME = 'static-react';

const devDependencies = [
  'https://unpkg.com/htm?module',
  'https://unpkg.com/es-csz',
];

const offlineResults = [
  'https://api.jsonbin.io/b/5dad90e942c1037c5d0513a1/2',
];

const resources = [
  '/',
  '/style.css',
  '/main.js',
  '/services/pubsub.js',
  '/services/network.js',
  '/routes/home.js',
  '/routes/lost.js',
  '/components/header.js',
  '/components/card.js',
  '/components/list.js',
  '/components/spinner.js',
  '/components/offlineFooter.js',
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([
        ...devDependencies, 
        ...resources,
        ...offlineResults
      ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  var cacheWhitelist = [CACHE_NAME];
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
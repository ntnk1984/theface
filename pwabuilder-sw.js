//This is the "Offline page" service worker
const cachName = 'static-shell-v1';
const resourceToCache = ['/'
                         , '/Tinda.html'
                        , './fancybox/jquery.mousewheel-3.0.4.pack.js'
                         ,'./fancybox/jquery.fancybox-1.3.4.pack.js'
                         , './fancybox/jquery.fancybox-1.3.4.css'
                         , 'style.css'
                        ];

//Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener('install', function(event) {
  
  event.waitUntil(
  caches.open(cachName)
  .then(function(cache){
  return cache.addAll(resourceToCache).then(() => self.skipWaiting());
  })
  );
  
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});

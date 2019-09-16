//This is the "Offline page" service worker

//Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
//if (navigator.serviceWorker.controller) {
//  console.log('[PWA Builder] active service worker found, no need to register')
//} else {
  //Register the ServiceWorker
//  navigator.serviceWorker.register('https://ntnk1984.github.io/theface/pwabuilder-sw.js').then(function() {
//    console.log('Service worker has been registered for scope:');
//  });
//}


if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/theface/pwabuilder-sw.js', { scope: '/' })
          .then(function(registration) {
                console.log('Service Worker Registered');
          });

        navigator.serviceWorker.ready.then(function(registration) {
           console.log('Service Worker Ready');
        });
      }


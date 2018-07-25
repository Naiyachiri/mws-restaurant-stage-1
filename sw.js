importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('mws-restaurant-stage-1').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/restaurant.html',
       '/?homescreen=1',
       '/css/styles.css',
       '/css/responsive.css',
       '/js/dbhelper.js',
       '/js/main.js',
       '/js/restaurant_info.js',
       'img/1.jpg',
       'img/2.jpg',
       'img/3.jpg',
       'img/4.jpg',
       'img/5.jpg',
       'img/6.jpg',
       'img/7.jpg',
       'img/8.jpg',
       'img/9.jpg',
       'img/10.jpg',

     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
 });

 
const staticCacheName = 'pre-cache-v3';
const dynamicCacheName = 'runtime-cache-v3';

// Pre Caching Assets
const precacheAssets = [
    '/',
    './index.html',
    './index.js',
    './offline.html',
    './manifest.json',
    './favicon.png',
    './css/vendors.bundle.css',
    './css/app.bundle.css',
    './css/btn.css',
    './css/view_transition.css',
    './css/custom_theme.css',
    './css/modern_theme.css',
    './js/vendors.bundle.js',
    './js/app.bundle.js',
    './controllers/CustomerVars.js',
    './controllers/classDb.js',
    './controllers/dbcalls.js',
    './controllers/GlobalVars.js',
    './controllers/GlobalFunciones.js',
    './controllers/menu_handler.js',
    './img/logo.png',
    './img/userIcon.png',
    './img/marker-shadow.png',
    './img/icon-60.png',
    './img/icon-114.png',
    './img/icon-152.png',
    './webfonts/fa-light-300.woff2',
    './webfonts/nextgen-icons.woff2',
    './libs/animate.min.css',
    './libs/axios.min.js',
    './libs/funciones.js',
    './libs/mousetrap.min.js',
    './libs/sweetalert.min.js',
    './libs/socket.io.js',
    './libs/socketHandler.js',
    './libs/jsstore/jsstore.min.js',
    './libs/jsstore/jsstore.worker.min.js',
    './libs/leaflet/leaflet.css',
    './libs/leaflet/leaflet.js',
    './libs/noty/noty.min.css',
    './libs/noty/noty.min.js',
    './sw.js'
];

// INSTALL Event
self.addEventListener('install', function (event) {
    
    return;

    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll(precacheAssets);
        })
    );

});

// ACTIVATE Event
self.addEventListener('activate', function (event) {
    
    return;

    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

// FETCH Event
self.addEventListener('fetch', function (event) {
    
    return;

    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request).then(response => {
                return caches.open(dynamicCacheName).then(function (cache) {
                    cache.put(event.request, response.clone());
                    return response;
                })
            });
        }).catch(function() {
            // Fallback Page, When No Internet Connection
            return caches.match('offline.html');
          })
    );
});
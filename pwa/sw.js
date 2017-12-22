var cacheName = "pwahello"
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll([
            '../js/main.js',
            '../images/test.jpg'
        ]))
    )
})
// importScripts('../js/sw-toolbox/sw-toolbox.js')

// toolbox.options.cache.name = 'sw-toolbox-cache';

// toolbox.precache(['./caching.html', './offline/index.html']);

// toolbox.router.default = toolbox.fastest;

// // Below router means to load data from cache only while navigating to offline.
// toolbox.router.get('/offline/.*', toolbox.cacheOnly);


"use strict";


// Listen to fetch events
self.addEventListener('fetch', function(event) {

    // Check if the image is a jpeg
    if (/\.jpg$|.png$/.test(event.request.url)) {

        // Inspect the accept header for WebP support
        var supportsWebp = false;
        console.log(event)
        if (event.request.headers.has('accept')) {
            supportsWebp = event.request.headers
                .get('accept')
                .includes('webp');
        }

        console.log(supportsWebp)

        // If we support WebP
        if (supportsWebp) {
            // Clone the request
            var req = event.request.clone();

            // Build the return URL
            var returnUrl = req.url.substr(0, req.url.lastIndexOf(".")) + ".webp";

            event.respondWith(
                fetch(returnUrl, {
                    mode: 'no-cors'
                })
            );
        }
    }
});
importScripts('../js/sw-toolbox/sw-toolbox.js')

toolbox.options.cache.name = 'sw-toolbox-cache';

toolbox.precache(['./caching.html', './offline/index.html']);

toolbox.router.default = toolbox.fastest;

// Below router means to load data from cache only while navigating to offline.
toolbox.router.get('/offline/.*', toolbox.cacheOnly);
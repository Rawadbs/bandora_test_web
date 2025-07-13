'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2f69f8a7005b599edbcdfbd99f2c7a73",
"assets/AssetManifest.bin.json": "771d038ba532a74003e138fa2a1a38ea",
"assets/AssetManifest.json": "c496beca19e689298e19ddba7b697d78",
"assets/assets/images/25.png": "4269adaa407626799cc5e5ac2de4915d",
"assets/assets/images/4tomato.png": "9b560f5f9bb0d72e03ed569e89958c76",
"assets/assets/images/4tomato=1.png": "32c898ca42c1ebc619a6fa3f059073f4",
"assets/assets/images/5.png": "7bf70b86382f50db04dd79953d11a0f8",
"assets/assets/images/a.png": "59333aa03058832068e14088f2ab223c",
"assets/assets/images/apple-touch-icon.png": "a34247a62ddaa98072eb0e1926c9c2da",
"assets/assets/images/b.png": "68ae480908c97fea1c4c6878ece647fb",
"assets/assets/images/bandora-timer.png": "16317271397ab35020ab74cac66adfef",
"assets/assets/images/bandora.json": "cd21dc2a37cc2b912d1ba7fc11ba8357",
"assets/assets/images/bandora_foreground.png": "5a6388029cf9de58d12a3e9666027b08",
"assets/assets/images/bandora_logo_1.png": "14951589ba47d6029060122144003c6d",
"assets/assets/images/big_winner.png": "d2000ee873681ef4105cecc2942f4b12",
"assets/assets/images/brand.png": "2fab5b7e1093faae0b15e30bb02990de",
"assets/assets/images/c.png": "cbffedfae999caf4bcb419fcf8803155",
"assets/assets/images/equivlant.png": "37153f3556607fcc64111f4ad1e63423",
"assets/assets/images/image_foreground.png": "aa8d28a2f9723184daed226111ffbf2d",
"assets/assets/images/image_logo.png": "9e9b299147f90f4ddecef0b4282ee148",
"assets/assets/images/img_logo.png": "2ac17fb8ec03d5cda6bee3daf8a7c80d",
"assets/assets/images/logo.png": "46683788877b530e406b7418973d50a0",
"assets/assets/images/logo_48x48.png": "4dd9ee60cb1e60088d22876ce45dc3a0",
"assets/assets/images/logo_bandora.png": "2a36660fef33f83a1b53283c45b2f2dd",
"assets/assets/images/logo_foreground.png": "8b652f2fd29a4124de90fc1624fc922a",
"assets/assets/images/mixer.png": "21cc2d2f04a04c5fbc56c93f8ce4e13c",
"assets/assets/images/splash-logo.png": "7d0e2b3416e91dd48bcc00061b8a24a3",
"assets/assets/images/t.png": "e9c36b1db38fd092c90ebc5b44016a80",
"assets/assets/images/winner_bandora.png": "9316fcd80fa2f76958d6a241818b3246",
"assets/FontManifest.json": "212643f7b681392001af8a4bb1d05750",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/fonts/OMNES-ARABIC-REGULAR.ttf": "96b8b753f082f6056893c6834986b7fb",
"assets/NOTICES": "7a19bfcd6855b6eec68f208b0126c102",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/sounds/timer_finish.mp3": "ccb0c31567722413592ce94f7100db89",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "8b295946eb8e4f01418f555322ee79df",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "48826e6ce10bd558adec12615200faa3",
"/": "48826e6ce10bd558adec12615200faa3",
"main.dart.js": "805ac2be5b43a05151592d0663cdfae7",
"manifest.json": "647e63b1286f48701d17693fd54ffb28",
"version.json": "0a10b34cbfc7bfbc6b4895589abce5f6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

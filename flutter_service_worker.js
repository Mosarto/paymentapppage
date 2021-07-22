'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "01e3009d8dd822d0842112d896610922",
"assets/assets/icons/2xa.svg": "7716945a3da6aff7bb893033f58bd3b8",
"assets/assets/icons/addres.svg": "409a722f717b938e0a53aac32b9c74c8",
"assets/assets/icons/chat.svg": "d3e48916b8d811f66100f872f0f3876d",
"assets/assets/icons/chip.svg": "58188335504951e07fbde8831cea5995",
"assets/assets/icons/deposit.svg": "1a942f5c99556d3a39890e6439dd4e37",
"assets/assets/icons/down.svg": "2a03b17b8c4b66086196b2e9940cd931",
"assets/assets/icons/fav-contacts.svg": "83278423b8940905d1263d38f9850d24",
"assets/assets/icons/home.svg": "5d6edcb235f1caa31e6de02ba645e2c4",
"assets/assets/icons/information.svg": "18f46ea1f6b0415ef28557e0e6ff1f4e",
"assets/assets/icons/key.svg": "036fcdc0af08bf40085cabf87f52426a",
"assets/assets/icons/location.svg": "a7374093c4f25e9f7d1fc066919d936f",
"assets/assets/icons/logo.svg": "58944ce40144a1f43fe1a0e068f5164f",
"assets/assets/icons/mastercad.svg": "898f5353f87047adc9d485f7ecf619bc",
"assets/assets/icons/mobile.svg": "4e07adf454258d2e9d4f7873984fb969",
"assets/assets/icons/more.svg": "95f49c5edb09a3740710f06592022af8",
"assets/assets/icons/movements.svg": "57d94fde6075002c1a700d805add2e32",
"assets/assets/icons/mywpayme.svg": "391b64ef218a315fe8a9cfd4d7c749f2",
"assets/assets/icons/notfication.svg": "2be8726d3fb854321d6e79c34b1a9ee0",
"assets/assets/icons/payservices.svg": "520258f8c1a7712468ebf3be3ffaddfc",
"assets/assets/icons/send.svg": "1345f79341ff9eb388d0e624ab198a64",
"assets/assets/icons/subaccounts.svg": "76af6b4bbc13cc576882fe9d2b0a9a76",
"assets/assets/icons/transfers.svg": "3ac305946eec971661e7022a1bac74e5",
"assets/assets/icons/up.svg": "9044dca25b91d35cffa6af72c23b2f19",
"assets/assets/icons/updown.svg": "3569914e8455561f3acf3063d331e990",
"assets/assets/icons/user.svg": "7fd87550d6154ebb191e3516b20fd488",
"assets/assets/icons/wallet.svg": "fdc5c2ce2fcc6007c7fcac92e38cc5bf",
"assets/assets/icons/walletid.svg": "14c9adce3a27144b8f34e46a125e0b94",
"assets/assets/images/Finance1.png": "5cfacfffdcb597e63991a827aae616fc",
"assets/assets/images/Layer2.png": "076972d87673190d2fed90398de39164",
"assets/assets/images/Layer3.png": "ae30a179c6ea9b541c365fecc25d048b",
"assets/assets/images/Rectangle.png": "0877624e8035cd1ac3abbb4704528b5d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4022754a8dbc1b3aac734eaf279a727a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "98b9f8bf10d7860e95a244f94337f097",
"/": "98b9f8bf10d7860e95a244f94337f097",
"main.dart.js": "1077f513e38d9dce4015384937f72d9a",
"manifest.json": "f344ab15a6d95a16d86c7d4acf268d19",
"version.json": "e090240689a118bd454b79d5e6c3fa10"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

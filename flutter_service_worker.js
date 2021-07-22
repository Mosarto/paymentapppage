'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4e1374c547a2f6bc8642d50fb938e3d9",
".git/config": "e74f7fd63912c6edf97cda19a9ce7e89",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "75c476968c542ffaab6a9d3cb191d610",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d5b46a6b9db6594dd9a22aa68ba0212",
".git/logs/refs/heads/main": "886ef82b17178acb3a224a23332d1409",
".git/logs/refs/remotes/origin/main": "b13da06a39e57b47716d6ac2d34ae02f",
".git/objects/01/1b4b7b3927d3f98950b159f5216cd5728d98c4": "85daa9d47793efaa830a15cf9e5b20a9",
".git/objects/0f/8d77d1ba26b85dcba0ac93e4ede398de76528d": "f8789a5f4e67665affa39b523dbb0cd2",
".git/objects/10/45d06a65a53d8504b1946cef82df0c79936b48": "509ec1266c98c8204f506d3e1a7c2b6d",
".git/objects/1b/af12088d824d9c1802c3913f00635942c3e265": "81a6d46a495db433b78a99f9e7bac9ea",
".git/objects/1c/2d713ff07e6aae77949f68b604f0c20d2876fe": "015e700e03745eda467eb21f652fa221",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/29c04c8b068c4c2ba2e684e836cd646c48283f": "a0957aa9d6cdeadaf2d012852af69d71",
".git/objects/29/7b16860d354fec52ac1ddb180a59e30af1a5eb": "e62b5b028f06710ad032296f3eea2457",
".git/objects/2c/d63ee55345a513bf643c5735dc1de0c1d65251": "6345baa3b90bc90a5b566f4893a2d429",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/fe904fed63856fbbc128fb411b9bb5c043f76c": "9a01c5ddb1cd8d28ae7435a92dcf2f10",
".git/objects/3b/c21490bff59b1cafa11f088c169c347d900788": "3bbfd76d231b67e03d72e2d9343913a7",
".git/objects/3c/8a476af5cab15ea813f080a2c8a0f513946b0e": "efb6cecfa61849eb9fd5bdd8386df308",
".git/objects/40/a2be70e081451276dafceeb37b711402bd388a": "d213c4aa307a6206aae8334ab7874889",
".git/objects/43/01e81bd0b5ac44cb643c96aa750b152b831550": "66495bc1fc2ff03ebf92bd27c6d6a415",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/0efa15bbdbd10ae39ff1daae3bccf2b7db77c1": "51af1210c49028b52df7722741d28f38",
".git/objects/4a/e1bbae50cbce302edbe2de2c5a11a6fcedcd92": "0f3f13952a18492a41cfeb1de4ce2057",
".git/objects/51/d92d77efccfededcfb2e44f1d2d7c02e49d6c0": "c3e641f9507849f65dff9886516ca36a",
".git/objects/54/e1f866a09418cd7d6fc6266da6232b082ca60d": "df95f77085bef002c7bd8016353ec628",
".git/objects/5d/d775b980ccc326844af9f093181ef14d648682": "de879d3ea922780ff2fdc7fdcfeccd75",
".git/objects/62/ec5e3676e2a12089078a3384a19565d72ac390": "a0daf3e47487f4adf37e30e2014b3011",
".git/objects/63/5c21ec7011ccfd36c7a25d726f95b875a4e965": "217c91528a1e1849b3e3bd6e04776f21",
".git/objects/6b/4f24bf7dd48d5adddeedb2f48cc257d357bf82": "7917a7ea2e8b301c54ab2bc8811bdedf",
".git/objects/6c/a36cd70c2d3d23b06a3b8e5f40f7f0f4f9ee8f": "af513bbf46fbda65088a400883d2a51c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/7d47cbb7d0647ce944a36f16c79b8634c61b45": "d9b50cf0dfba8e3d3525d3240761d0b0",
".git/objects/94/f12a4798b8efb036657fcacd5545dab1d6fd81": "873f0485245d1cbec849918877aa38b2",
".git/objects/99/96dd51d69c4672d2f715f3b19c9405afffdda1": "cdbd605f3b4d0272dc5c1fda5b1e1480",
".git/objects/9d/0310ea1bde90ef6195b362974791a97aa3bb06": "2b31d6ed9d8e607620c7b3063febb974",
".git/objects/9d/9f010996b8357d98097987185f19668f46c702": "217b5ed56a9ee9148acc75ef74160641",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/a80d9e0e18e4612cb5c2a551cf2e87956d55ed": "02c64114fcd5205f87f274743eb6268d",
".git/objects/a7/d8f8e8fd5a771b088b449df4751d6b10df5615": "6a267752766307b5d85f5dbf232f63ea",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/fb2e6e069897685ed5f7736c37e20d0f95a532": "23097f42e47a974636dab33d8cc21707",
".git/objects/be/e6149b76a1efe7cefe4bebf5939355b6309d4b": "5d7e31b674e1fe8ce4d0ef571bec17db",
".git/objects/c2/44a321d644767db5447e87ab6891287b877aa6": "1fd6812f301fbbfdef81b3d7df123232",
".git/objects/c4/cf570f223a565c53ce67bf997fa56f74c29a9a": "ce2a0133eb1da1451b3f8177a4868222",
".git/objects/c6/973e523fadc33c0539535399afcf50484ba880": "20382e7dc3fca738ac564b70dfe0a67a",
".git/objects/c9/159973962421345c3f6b22633279ca5c95cc5a": "60be1bf61fbda4e0a99f1587d6f5b36f",
".git/objects/d3/d62c74812b46a50df84b0a1cb14093fc6c94f3": "53f4e9cdba261adac73748d2bb3ea99c",
".git/objects/d4/2776b24761e3a220240ee4c4efca04ffe28e7a": "35bb83445ea556c21ef57687775c3069",
".git/objects/e3/8a2724694df391bd6a2e04616d4189a46497c8": "3798b391926a335cdfce9b702e392af6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/24ad014ff7af0e85bc5cdce4fa37a29aad05c2": "9ddab977cb63d7212619079bf32676a1",
".git/objects/e9/5026cc3cd790b6a44b476c9e91b88a01ac0f3b": "c4587de10177e61a0394000b045170d0",
".git/objects/ed/7a3be80e3f493dea98830bfad4c22fa086094a": "f7a8659d816fc8cd7dd1e9748f17eb13",
".git/objects/f0/7a9302283cbc28f3f5e616fcda4a108bf96336": "f6c6a3a1d666488ae6f657cddf25f292",
".git/objects/f5/509702c0568c8ca1500fb6ae3900e2d6d7b1e4": "1433b165618dc1f130b2595acefe7941",
".git/objects/fb/369a32be21ac11abb8d20d2f7900334023ce7a": "f8d34bf308afe62ac642328d830b9c80",
".git/objects/fc/d61e4e277d094f396314c23e06874279ce30ff": "f4771b5094aabf464dc8c90c84662825",
".git/refs/heads/main": "f11ad246f57f9f3a470518e0f2de4af9",
".git/refs/remotes/origin/main": "f11ad246f57f9f3a470518e0f2de4af9",
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
"index.html": "f7b03e50abc511210de2a07e45b19488",
"/": "f7b03e50abc511210de2a07e45b19488",
"main.dart.js": "3c76496d17d6a6217322924a8a42be68",
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

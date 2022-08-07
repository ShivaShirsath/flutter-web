"use strict";
const MANIFEST = "flutter-app-manifest";
const TEMP = "flutter-temp-cache";
const CACHE_NAME = "flutter-app-cache";
const RESOURCES = {
  "main.dart.js": "ac7457b5401b4b8c8c356cd353b10fdf",
  "version.json": "0e84aa025e6566e3bbf39ced19d134f1",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf":
    "6d342eb68f170c97609e9da345464e5e",
  "assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
  "assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
  "assets/NOTICES": "bde9ee889e7cdb2c908965b81d635c52",
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
  "index.html": "5b274a8bcc596128d4f52a0f59ff15b1",
  "/": "5b274a8bcc596128d4f52a0f59ff15b1",
  "manifest.json": "097c83ab2fb02e2f7368a94ae4888344",
  ".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
  ".git/hooks/pre-rebase.sample": "ac92f4dfd1b63ddf583623e63e7f3712",
  ".git/hooks/fsmonitor-watchman.sample": "623bad5fbf9bcb35792c6e0c0842ecf2",
  ".git/hooks/pre-merge-commit.sample": "cf044f5f6344dce4c5c97f8f36976f41",
  ".git/hooks/applypatch-msg.sample": "7fe1778ccb92a5511cef1c1d85e540b9",
  ".git/hooks/prepare-commit-msg.sample": "14da9b91ab73af94d40ab5b0013ab685",
  ".git/hooks/push-to-checkout.sample": "5c5829c88fd06e0eb0dfa8d11809f2c8",
  ".git/hooks/pre-push.sample": "baf750507c581fd3683c00a9b6ffe051",
  ".git/hooks/pre-commit.sample": "2501aa7ba79b99696e884e11ad757db6",
  ".git/hooks/commit-msg.sample": "ad35ef5107e38e167dcc44d32d133e28",
  ".git/hooks/pre-receive.sample": "b0c6c942356385f2087e439c46a5c1d6",
  ".git/hooks/pre-applypatch.sample": "7a80d7a54fbee2dfaafc2460d10ffe40",
  ".git/hooks/update.sample": "ba1183f0e065679e6381b2b39ed47a41",
  ".git/hooks/post-update.sample": "05911253c3cc4fcb621848b0b7f49b98",
  ".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
  ".git/refs/heads/master": "de73200e2373492a66b83800fe71970d",
  ".git/refs/remotes/origin/master": "de73200e2373492a66b83800fe71970d",
  ".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641":
    "e428c355ab4ee88e955cdd6288a897d4",
  ".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37":
    "87850ce0a3dd72f458581004b58ac0d6",
  ".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155":
    "2e52a767dc04391de7b4d0beb32e7fc4",
  ".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7":
    "f9f6ea6cdd926a71a8a68c2731489891",
  ".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd":
    "a043dbc0a0bda96ce2127799ccc27506",
  ".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f":
    "f3e31aec622d6cf63f619aa3a6023103",
  ".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1":
    "1d8820d345e38b30de033aa4b5a23e7b",
  ".git/objects/28/93178b623a9ebf024ec824c327953888ef1c9a":
    "3614a76db672360f80746a29857fee24",
  ".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa":
    "36b4020dca303986cad10924774fb5dc",
  ".git/objects/b7/26d00de8cc9b1b5f679b389677cc6e1e83afa4":
    "c2becd9a12a4caae83f4278b8b210ffc",
  ".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6":
    "e42aaae6a4cbfbc9f6326f1fa9e3380c",
  ".git/objects/84/ef207d32272650c21c7e87aa38744f4934081d":
    "d62d7c404cab4ff89978e07967e4c6e4",
  ".git/objects/a3/1c51081ef76da03a15f40eb18a427f70db572b":
    "c5dc9d84eeea6a98353bed2823dd08fb",
  ".git/objects/21/3d37099e0eae87704a7324208c618f58ce3229":
    "8f5c2e1be31f3df7bc4e565d22e9527b",
  ".git/objects/21/b180800f4853aa9b7b908886fa70699b02ce5e":
    "fd543075a1aa6979ecf263dd5a620d70",
  ".git/objects/19/828b7132e3774d870a144279e03df0ebf83ee7":
    "74f09b603e3400d048dcb79beca1ad48",
  ".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0":
    "6677888e4a051c7838b5b240c09f0981",
  ".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d":
    "c6fa51103d8db5478e1a43a661f6c68d",
  ".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f":
    "bfe4910ea01eb3d69e9520c3b42a0adf",
  ".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f":
    "557c35fe3928eb2af403d1b3926bb9ba",
  ".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118":
    "1342122d127c3cb2d5cfb129e11cb366",
  ".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893":
    "c993b22f115d7f3ae6d5b7b212806539",
  ".git/objects/35/c2cc754e8e0d7b30c135a5048dab457f756250":
    "8507c5934fa8f88b7af927421a6a6bc6",
  ".git/objects/e2/7641ad154bb7f389756a1b161e7e5ddbd32f4d":
    "7e31a36bb4b2e08059212dd1bf48f753",
  ".git/objects/de/49bbd07c49f27e49600f6211815293806de892":
    "76d6ebddebae931397e88f7ba19d9ee0",
  ".git/objects/fa/7d065a5bdf0d87b59c7865c06651264d653083":
    "3790f99e2fb0ab23576703ec53cf1d36",
  ".git/objects/aa/be7dc230b4382507add7a7357e3572561b53a4":
    "9239790d49365fa1798c37c054b2f979",
  ".git/objects/76/9788fdf233683dbefce26c01c8fa7503c4ae81":
    "b26228c894f53f03fc9c30b9a6fe0fbe",
  ".git/objects/af/b844feab06ce3a84a428a66a376fc78ed2a941":
    "bf9a9ec0a3d9ff050ef7184c6e865275",
  ".git/objects/cb/a5a73836301c32b4d9fac0e099381e21e0624c":
    "6141dd44296d44ea29838e58d4e9d4f8",
  ".git/objects/d9/1ff66d035459b71fcbf8503a9db74438140341":
    "ed1c87bfff4bbc5c8783851e33f86409",
  ".git/objects/96/39974072f59df8c8b1e9a8166747f8e9c478b4":
    "17ab36908189741b84377a9452e75d18",
  ".git/objects/49/b80efdc6b19d18ecfdbcf27ff67867a2980f88":
    "d35dc7af98c5ebcb2d82246431bd6d69",
  ".git/objects/bb/c13d17ed6bf330e5b201f819d613a4ec1ec8a1":
    "42ac24750227e718e3aff96157974828",
  ".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
  ".git/config": "9f7be88c85403b54f53ef7439853a025",
  ".git/COMMIT_EDITMSG": "d2a33790e5bf28b33cdbf61722a06989",
  ".git/index": "b55364f55d37e41ce960dfd097551b5b",
  ".git/FETCH_HEAD": "6c72e9c60e732bc4a70456b007bc1638",
  ".git/logs/HEAD": "19bec94d64f8fac40a6d2108689c06b7",
  ".git/logs/refs/heads/master": "19bec94d64f8fac40a6d2108689c06b7",
  ".git/logs/refs/remotes/origin/master": "76995ddf5c13840965e63e5039f935ab",
  ".git/ORIG_HEAD": "b54f72639f799112c8cddf3edd4e58b4",
  "README.md": "d51bccd2870a40237c24c592ee729936",
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
  "main.dart.js",
  "index.html",
  "assets/NOTICES",
  "assets/AssetManifest.json",
  "assets/FontManifest.json",
];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, { cache: "reload" }))
      );
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function (event) {
  return event.waitUntil(
    (async function () {
      try {
        var contentCache = await caches.open(CACHE_NAME);
        var tempCache = await caches.open(TEMP);
        var manifestCache = await caches.open(MANIFEST);
        var manifest = await manifestCache.match("manifest");
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
          await manifestCache.put(
            "manifest",
            new Response(JSON.stringify(RESOURCES))
          );
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
        await manifestCache.put(
          "manifest",
          new Response(JSON.stringify(RESOURCES))
        );
        return;
      } catch (err) {
        // On an unhandled exception the state of the cache cannot be guaranteed.
        console.error("Failed to upgrade service worker: " + err);
        await caches.delete(CACHE_NAME);
        await caches.delete(TEMP);
        await caches.delete(MANIFEST);
      }
    })()
  );
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf("?v=") != -1) {
    key = key.split("?v=")[0];
  }
  if (
    event.request.url == origin ||
    event.request.url.startsWith(origin + "/#") ||
    key == ""
  ) {
    key = "/";
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == "/") {
    return onlineFirst(event);
  }
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return (
          response ||
          fetch(event.request).then((response) => {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});

self.addEventListener("message", (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === "skipWaiting") {
    self.skipWaiting();
    return;
  }
  if (event.data === "downloadOffline") {
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
    fetch(event.request)
      .then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch((error) => {
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

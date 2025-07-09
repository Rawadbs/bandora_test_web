'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0bb310afcc0d645085e003236d67462c",
".git/config": "5b69e28cafd07e0bf2b527746902457c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3607c24253dfc44ac7f8f9d63a324a16",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d3968a61e5e884b5674de2662054343",
".git/logs/refs/heads/main": "9d3968a61e5e884b5674de2662054343",
".git/logs/refs/remotes/origin/main": "2e3178e12be2f362dc05f3d57549922e",
".git/objects/09/a970c95d60a1466ce8460844f20cd9f2ba8b6f": "21d799ea4f9cc19cf30ab565e4a581b0",
".git/objects/11/3ce38c3168756d2cb0397a61e6f0c6d86481ea": "14cb22f9f824762dc033576c67e1bc6b",
".git/objects/13/f1e811f2a4d9004391f39a7a78fbf17a6cb120": "493909213d3ed9f734823b99ba5f353e",
".git/objects/15/8c58f8e761767f34423305f89e53d87d33dcaa": "471145c9af375946f7ec8bc02009ccaa",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/17/0dc50ae7092ccdaac90e95ef22529f4be6a395": "7bf76ad135e8783480c3e287d91258e4",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1e/6dbdfc54dda02ce3845d6cee1a1c4895f2195e": "57fb55fdd9f8fa4ec05d2b38ded839cd",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/6f098ed73ea5dcb6463bb662493a4cd177ace8": "bf605050326a48a86f08ed5dd8719631",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/ec06bde6dff769f32a41612ab8dcfd64752d30": "87df7e4a72dc405663f1aad6e573711a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/862c15e4b6f26315a7ef5be09be11684f83ab6": "cfcb8de7701b0749e15b50c48e3fe60b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/79a9623d03f105cbd293f226c70597c6545659": "11cef409af836e5e6fadb564f6b650a8",
".git/objects/41/544fb4bd67ca7f861583765870684e9ab4ac90": "d2d16e4ddf6302a6891c412776d26837",
".git/objects/41/f4459c3196d1d379c5eebde3e9722894a5c72b": "4b08a9d2df24f9276c43a6e3c8c367ae",
".git/objects/41/f517ac1a9e07eae8287869bab17fed2b4d44e4": "a67d874d32cbd9b9bd4679abcd1cbbdd",
".git/objects/44/442540466c72dcb0fa0d835a468bb58117ca0a": "318f0c85450c15771da8978e6cd88793",
".git/objects/48/f7cecc789b9fd46e4a7c1ddcae64a22aa42143": "2c499ddffb69e4ff5f4600756b9645b8",
".git/objects/52/2edbc77f1b987ff73c53aecab5997da40228f1": "2e9da98101252c400b52c07f257f3ca4",
".git/objects/54/ea5b5d3ac26647139333312e4b11fc43d76b00": "1265474d35d799bf6096724874a9134e",
".git/objects/55/6688b4bd0eecbad50f37800401e5f247aa5ed2": "287ee120c441af0e3ac364965d202ca1",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/5b/7677a68522b742cbec4804531ead364a60436e": "7414afbfcb7f9d5ad647b643285a6234",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/67/cb589f958f5a55e1fc6972a294c638673f887a": "2217c42b2a2df9a0bd3585c30728a75f",
".git/objects/67/f8a5d4b750949f0a5393395df3730e4a905980": "4453a55b0100f4bc85c425787d26b691",
".git/objects/6a/d5458756104e7e991fb2e11870787da5161d78": "1c1c0218c97eb318101ebf6ef5dc5e60",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/78/45adb0c70de32269e25c26076060b8abad758d": "03b80bdf4e1a835595c542f287651768",
".git/objects/7c/9c8a213024ab59d286fc5e495ef35ffffea5c3": "33027469de7f6cc777c5fe0a4fbc69ea",
".git/objects/81/38b2611f3805f59d8d3e2ba1464178f6634c46": "d8f00f829f7b451ea61329bd4448fcac",
".git/objects/83/380d4f41ed9c89e39467e917d8d93512cce3b4": "467706e2890b74388762788bd78cdf28",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/d70b8bd5216442df23230873ae3124d27a772e": "1a42b0d68b727cd6540a0933c0e37d89",
".git/objects/87/aa098c56c9364b019231e89d5bf05459012c26": "55a8c2c176e828a1555a79c9a954104f",
".git/objects/88/c3014171b033772b9af46bcff1aba24ea6ec44": "f47a42c2ccf20279aed0ec55268e476b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7ab401ac31aa75d80671fa0c934b4fe03ca8b1": "137e7c45a2e9a26b11779e1a7d288d29",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c2d35b821c80b20d7b34e64812cc0ab469c6aa": "ddd9483cb35b7152aca0c2587aeefbd8",
".git/objects/8b/de5bb0e6088e005b3880b87c11ed0ee4c77716": "bfbe75a3d6ac7e512eef1eb76279e6af",
".git/objects/8f/91d3977cbbdf6c6de83e3480e08c5625a107d1": "4c7d5ab610843fba0ec51d7a954d92d7",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/64ec6aab8ab248fa477ce3b37f39d9de7fc74d": "d6e78d4adce39a26de1fc1ab0209fab9",
".git/objects/95/3baef675d9c70326ba79ca2bb0592935be1d69": "82a229f5df4473d4461d6a8249cced94",
".git/objects/95/a626a961ffccb9e75a670d4ff084e893efc532": "8cb2e41acb36f695a31fc7c78d9107dd",
".git/objects/96/cf67592eafde39522de077505bbdaef11c7c03": "44dfa4f206ea0e7be07d3b114c3c53c0",
".git/objects/98/3bc3250c52bacb4b7603110b6e13df04481382": "2d5da7cfc4a8c3ed7dac1609ea319ee6",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a3/67bb1cccec9060be8b97dc9c38cfe9e079cf36": "31df8a484c23a5274ad1b499bfc05162",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/aa/08974023f0712bd4f1b504554e8022054a6a00": "8f95755b65baecc2831c1cffedfe50ef",
".git/objects/ab/8068914ee94a6f4d402d92d11b630a99eb4bb6": "ae2f02c2d01550c5fc6580baa5a16ff1",
".git/objects/b0/0631a24e4aa19453b8e9f4cf70d6e9cfec2039": "2296681cdc144cc836bc29fb2fe862cb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/a1deff8720154822ae479c30516123064486a1": "68b0eefb04a9b494038bcf4d0ee19eb3",
".git/objects/bc/d4be6f64fff7e27f6d51eb5a490213e2878a25": "c83e47e1e428070dfa33551dd745f839",
".git/objects/be/9127146bd38acbacd6030e28f7dca38d044230": "ae8aa9fd3acae1c0cdb3ea4a7c6c2882",
".git/objects/c0/60ad4ad6ac2d66656677f66c257d8abfd14f8c": "b62412e88667670061c8b06a870345d4",
".git/objects/c1/23b42e0d230f71cc398de27cbc9698b91bcb93": "4df3b2e7e2aae077bf8cf8b57cfddc48",
".git/objects/c3/d7f2a388462fa332f1337c406a16f31b0887af": "cc829b9648c6fbcd3d1cc87333a86171",
".git/objects/c5/d52a5d4549bac8f3f30e7de2dfe9cc1a162c71": "4d1bf4c45e00c98c41662190e4c83e58",
".git/objects/cf/24d344226219d4a8e0c055b2fc508e6e156faf": "c54bc7ff1b7052cc0f2262d32c6d62c9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/9ac79b91acd1488e94dcd2016c0239f7cb8738": "a5f635036c4aa64d1cad834a9ec31f99",
".git/objects/de/dd4a6b26b1dfce349b322fc6a4a0ae6026d109": "55cb1d0c356de563f8d18cac1645357c",
".git/objects/e1/089608ebd3d93ba564c5ab56ecb6213f5617c6": "ac9ef55bb9e44081898a822e67ef4fe9",
".git/objects/e2/2d4df2267aff37d7bd5eddf2f023f8abe06f44": "08ae3dc089c649e22e822a53f07c12e6",
".git/objects/eb/4e6db8b65b3f390f60d666615d4ed0c723f3ba": "2e7b7fdd0978ab62e0e5da10476519a0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/afa124e7353b42855ce2102b18df5bbc6f4094": "a73afc95de154a9a08155949387bacff",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/e7a0f1e802c7426a5d17688dc4024334aa6a1b": "b13848439c9063f308df5e0be95af949",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f6/00198bcd6de228378250fb63c6cd6ab8f32f09": "c85831661db5d28084adf43be431df5b",
".git/objects/f8/b6adce3594b2333dc82d341e3e384179a0a665": "94c3111705e606ecfd0fe636622b900d",
".git/objects/f8/d36a295adb848b0d61570c0643102757748d1a": "f0b07ea7d7240019ffd28eea84174cd3",
".git/refs/heads/main": "c8e2141c3da855e86995427a28c837f9",
".git/refs/remotes/origin/main": "c8e2141c3da855e86995427a28c837f9",
"assets/AssetManifest.bin": "a180743f5fe3259f2b9d7d42c7041f28",
"assets/AssetManifest.bin.json": "a750948e0ad466425ac2fc63ed8a2de4",
"assets/AssetManifest.json": "655eec3b64ad3d994b5ad15464dd6df6",
"assets/assets/images/25.png": "4269adaa407626799cc5e5ac2de4915d",
"assets/assets/images/4tomato.png": "9b560f5f9bb0d72e03ed569e89958c76",
"assets/assets/images/4tomato=1.png": "32c898ca42c1ebc619a6fa3f059073f4",
"assets/assets/images/5.png": "7bf70b86382f50db04dd79953d11a0f8",
"assets/assets/images/a.png": "59333aa03058832068e14088f2ab223c",
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
"assets/assets/images/logo_bandora.png": "2a36660fef33f83a1b53283c45b2f2dd",
"assets/assets/images/logo_foreground.png": "8b652f2fd29a4124de90fc1624fc922a",
"assets/assets/images/mixer.png": "21cc2d2f04a04c5fbc56c93f8ce4e13c",
"assets/assets/images/splash-logo.png": "7d0e2b3416e91dd48bcc00061b8a24a3",
"assets/assets/images/t.png": "e9c36b1db38fd092c90ebc5b44016a80",
"assets/assets/images/winner_bandora.png": "9316fcd80fa2f76958d6a241818b3246",
"assets/assets/sounds/timer_finish.mp3": "ccb0c31567722413592ce94f7100db89",
"assets/FontManifest.json": "212643f7b681392001af8a4bb1d05750",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/fonts/OMNES-ARABIC-REGULAR.ttf": "96b8b753f082f6056893c6834986b7fb",
"assets/NOTICES": "7a19bfcd6855b6eec68f208b0126c102",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
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
"flutter_bootstrap.js": "ada27664f1b7e875e1da5cebf969fb9f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d57c3fc1c3e4ec53d4009c53c966834c",
"/": "d57c3fc1c3e4ec53d4009c53c966834c",
"main.dart.js": "e238d13f30cb36071d5580cbe974608b",
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

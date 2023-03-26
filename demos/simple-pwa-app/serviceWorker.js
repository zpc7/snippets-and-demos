const staticDevCoffee = "dev-coffee-site-v1";
const BASE_URL = '/snippets-and-demos/demos/simple-pwa-app' // 部署的站点, 基于域名地址的路径

const assets = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/images/coffee1.jpg',
  '/images/coffee2.jpg',
  '/images/coffee3.jpg',
  '/images/coffee4.jpg',
  '/images/coffee5.jpg',
  '/images/coffee6.jpg',
  '/images/coffee7.jpg',
  '/images/coffee8.jpg',
  '/images/coffee9.jpg',
].map(item => `${BASE_URL}${item}`);

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});

const staticDevCoffee = "vimoweb-site-v1"
const assets = [
  "/",
  "/index.html",
  "style.css",
  "script.js",
  "https://raw.githubusercontent.com/vimowebs/vimoweb/main/logo.png",
  "https://raw.githubusercontent.com/vimowebs/vimoweb/main/logo.png",
  "https://raw.githubusercontent.com/vimowebs/vimoweb/main/logo.png",
  "https://raw.githubusercontent.com/vimowebs/vimoweb/main/logo.png",
  "https://raw.githubusercontent.com/vimowebs/vimoweb/main/logo.png",
  "https://raw.githubusercontent.com/vimowebs/vimoweb/main/logo.png",
  "https://raw.githubusercontent.com/vimowebs/vimoweb/main/logo.png",
  "https://raw.githubusercontent.com/vimowebs/vimoweb/main/logo.png",
  "https://raw.githubusercontent.com/vimowebs/vimoweb/main/logo.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});

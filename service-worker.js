self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-pwa-cache')
      .then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/Your Wallet_files/main.css',
          '/script.js',
          // Add more URLs to cache here
        ]);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

const CACHE_NAME = "shah-jamal-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "/manifest.json",
        "/logo.png",
        "/profileImage.png",
        // Add other static assets here if known, but Next.js hashes filenames usually.
        // We can cache critical routes.
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).then((networkResponse) => {
        // Optional: Cache new requests dynamically
        // if (networkResponse.ok && event.request.url.startsWith('http')) {
        //   const clone = networkResponse.clone();
        //   caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        // }
        return networkResponse;
      });
    })
  );
});

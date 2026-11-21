// Service worker: cache aplikasi + Three.js supaya bisa dimainkan offline setelah dibuka sekali.
// v3: halaman (index.html) kini network-first, jadi update game langsung terlihat; cache hanya dipakai saat offline.
const CACHE = 'zombie-invasion-v3';
const THREE = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
const LOCAL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(LOCAL);
    try { await c.add(new Request(THREE, { mode: 'cors' })); } catch (_) {}
    self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith((async () => {
    // Halaman utama: coba jaringan dulu supaya selalu versi terbaru, cache hanya cadangan offline.
    if (e.request.mode === 'navigate') {
      try {
        const res = await fetch(e.request, { cache: 'no-store' });
        if (res && res.ok) (await caches.open(CACHE)).put('./index.html', res.clone());
        return res;
      } catch (err) {
        return (await caches.match('./index.html')) || (await caches.match('./'));
      }
    }
    // File lain (ikon, Three.js, manifest): cache dulu karena jarang berubah.
    const hit = await caches.match(e.request, { ignoreSearch: true });
    if (hit) return hit;
    try {
      const res = await fetch(e.request);
      if (res && (res.ok || res.type === 'opaque')) (await caches.open(CACHE)).put(e.request, res.clone());
      return res;
    } catch (err) {
      throw err;
    }
  })());
});

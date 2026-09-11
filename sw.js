// ============================================================
// Service worker MINIMAL untuk JM-HRIS.
// Sengaja TIDAK meng-cache data apa pun -- ini murni supaya
// browser menganggap halaman ini "installable" (syarat teknis
// PWA), bukan untuk mode offline. Data HR harus selalu terbaru
// langsung dari server, jadi setiap request diteruskan apa adanya.
// ============================================================

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass-through murni -- tidak ada caching sama sekali.
  event.respondWith(fetch(event.request));
});

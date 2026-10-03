// ESCAPES — service worker (offline shell)
// Pustaka OCR (vendor/ocr, ~5 MB terpakai) sengaja TIDAK ikut di-precache:
// baru diunduh saat gambar pertama dibaca, lalu tersimpan lewat cache aset.
const VERSION = 'escapes-v3.5.0';
const SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './vendor/jszip.min.js',
  './vendor/fonts.css',
  './vendor/fonts/instrument-sans-latin.woff2',
  './vendor/fonts/jetbrains-mono-latin.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL_ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  // halaman (navigasi): network-first supaya update langsung terlihat,
  // fallback cache saat offline
  if(e.request.mode === 'navigate'){
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }
  // aset: cache-first
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if(res.ok && new URL(e.request.url).origin === location.origin){
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(e.request, copy));
      }
      return res;
    }))
  );
});

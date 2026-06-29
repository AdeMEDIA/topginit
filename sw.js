// ==================== SERVICE WORKER FOR CBT APP ====================
// Enables offline access and faster loading

const CACHE_NAME = 'topg-cbt-v12';
const STATIC_CACHE = 'topg-static-v12';
const DYNAMIC_CACHE = 'topg-dynamic-v12';

// Files to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/bio.js',
  '/chm.js',
  '/mth.js',
  '/phy.js',
  '/gst.js',
  '/bio102.js',
  '/chm102.js',
  '/mth102.js',
  '/phy102.js',
  '/cos102.js',
  '/gst102.js',
  '/mls102.js',
  '/mls104.js',
  '/gst112.js',
  '/mcb102.js',
  '/games.js',
  '/firebase-config.js',
  '/test.jpeg',
  '/manifest.json'
];

// Course files - will be cached on demand
const COURSE_FILES = [
  '/bio102.js', '/chm102.js', '/mth102.js', '/phy102.js',
  '/cos102.js', '/mls102.js', '/mls104.js', '/gst112.js',
  '/bio108.js', '/chm108.js', '/phy108.js', '/mcb102.js'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      console.log('[Service Worker] Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== STATIC_CACHE && cache !== DYNAMIC_CACHE) {
            console.log('[Service Worker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip analytics and external requests
  if (url.hostname !== self.location.hostname) {
    // Still cache course files from same origin
    if (!COURSE_FILES.some(file => url.pathname.endsWith(file))) {
      return;
    }
  }
  
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Return cached response
        return cachedResponse;
      }
      
      // Try network
      return fetch(event.request).then(networkResponse => {
        // Cache dynamic responses for course files
        if (COURSE_FILES.some(file => url.pathname.endsWith(file))) {
          return caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback
        if (url.pathname.includes('.html')) {
          return caches.match('/index.html');
        }
        return new Response('Offline - Please check your connection', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});

// Background sync for exam results (optional)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-exam-results') {
    event.waitUntil(syncExamResults());
  }
});

async function syncExamResults() {
  const pendingResults = await getPendingResults();
  for (const result of pendingResults) {
    try {
      await fetch('/api/save-result', {
        method: 'POST',
        body: JSON.stringify(result),
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      console.log('Failed to sync result:', err);
    }
  }
}
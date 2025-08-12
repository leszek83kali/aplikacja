const CACHE_NAME='ot-cache-v9';
const ASSETS=['./','./index.html','./logo.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k===CACHE_NAME?null:caches.delete(k))))); self.clients.claim();});
self.addEventListener('fetch',e=>{const r=e.request; if(r.method!=='GET') return; e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{const copy=res.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(r,copy)); return res;}).catch(()=>c)));});

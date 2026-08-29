const CACHE='silohindaja-v2';
const ASSETS=['./','./index.html','./manifest.webmanifest','./veskimeister.jpg','./icon-180.png','./icon-192.png','./icon-512.png','./PAIGALDAMINE.html'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{if(new URL(e.request.url).origin===location.origin){const cp=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));}return resp;}).catch(()=>caches.match('./index.html'))));});

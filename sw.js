const CACHE='silohindaja-v4-7-future-actions-v1';
const ASSETS=['./','./index.html','./app.js','./manifest.webmanifest','./veskimeister.jpg','./icon-180.png','./icon-192.png','./icon-512.png','./PAIGALDAMINE.html','./tesseract.min.js','./worker.min.js','./tesseract-core-lstm.wasm.js','./tesseract-core-simd-lstm.wasm.js','./eng.traineddata.gz','./deu.traineddata.gz','./est.traineddata.gz','./pdf.mjs','./pdf.worker.min.mjs','./html2pdf.bundle.min.js','./pdf-lib.min.js'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(resp=>{
      const cp=resp.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp));return resp;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{
    if(new URL(e.request.url).origin===location.origin){const cp=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));}
    return resp;
  })));
});

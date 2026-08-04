/* Mathe-Basis-Trainer – Offline-Cache */
const C='mbt-v1';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-512-maskable.png','./icon-180.png'];
self.addEventListener('install',e=>{
 e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
 e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
/* Strategie: sofort aus dem Cache antworten, im Hintergrund aktualisieren */
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(
  caches.match(e.request,{ignoreSearch:true}).then(cached=>{
   const fresh=fetch(e.request).then(res=>{
    if(res&&res.ok){const clone=res.clone();caches.open(C).then(c=>c.put(e.request,clone));}
    return res;
   }).catch(()=>cached);
   return cached||fresh;
  })
 );
});

/* FORGE FIT service worker — app offline + cache immagini esercizi */
const CACHE='forge-fit-v3';
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html'])).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(req.mode==='navigate'){
    e.respondWith(
      fetch(req).then(r=>{const cl=r.clone();caches.open(CACHE).then(c=>c.put('./index.html',cl));return r})
                .catch(()=>caches.match('./index.html'))
    );
    return;
  }
  if(url.hostname==='cdn.jsdelivr.net'||url.hostname.indexOf('fonts.g')!==-1){
    e.respondWith(
      caches.match(req).then(c=>c||fetch(req).then(r=>{const cl=r.clone();caches.open(CACHE).then(ca=>ca.put(req,cl));return r}).catch(()=>c))
    );
    return;
  }
  if(url.origin===location.origin){
    e.respondWith(caches.match(req).then(c=>c||fetch(req)));
  }
});

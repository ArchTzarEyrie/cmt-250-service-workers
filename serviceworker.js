self.addEventListener('install', () => {
    console.log('Service worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activated');
    event.waitUntil(clients.claim());
});

self.addEventListener('message', (event) => {
    console.log('Service worker received message');
    console.log(event.data);
    const clientArray = clients.matchAll();
    console.log(clientArray);
});
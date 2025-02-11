self.addEventListener('install', () => {
    console.log("[CHECK]: Service_Worker_Installing...")
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log("[CHECK]: Service_Worker_Activated");
    event.waitUntil(clients.claim());
});

self.addEventListener('message', (event) => {
    console.log('Message Received');
    console.log(event.data);
})
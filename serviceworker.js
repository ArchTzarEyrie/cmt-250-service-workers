self.addEventListener('install', () => {
    console.log('Service worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activated');
    event.waitUntil(clients.claim());
});

self.addEventListener('message', async (event) => {
    console.log('Message Received');
    console.log(event.data);
    event.source.postMessage('Message from SW to Client');
});
function initServiceWorker() {
    console.log('initializing main file');
    navigator.serviceWorker
        .register('./serviceworker.js')
        .then(() => console.log('Service worker registered'))
        .catch((error) => {
            console.log('Error during service worker registration');
            console.log(error);
        });
}

window.addEventListener('load', () => {
    initServiceWorker();
});

function buttonHandler () {
    console.log('Button pushed');
    navigator.serviceWorker.controller.postMessage('Message from main to SW');
}

document.getElementById('message-button').onclick = buttonHandler;
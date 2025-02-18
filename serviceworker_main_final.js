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

function buttonHandler() {
  console.log('Button pushed')
  navigator.serviceWorker.controller.postMessage('message from client to service worker');
}

document.getElementById('message-button').onclick = buttonHandler;

navigator.serviceWorker.addEventListener('message', (event) => {
  console.log('Received');
  console.log(event.data);
})

function imageButtonHandler() {
  console.log('Image button pushed');
  const imgTag = document.getElementById('image-tag');
  imgTag.src = './cat2.jpg'
}

document.getElementById('image-button').onclick = imageButtonHandler;


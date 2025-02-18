function initServiceWorker() {
  console.log('initializing main file');
  navigator.serviceWorker
      .register('./serviceworker_final.js')
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

function image2ButtonHandler() {
  console.log('Image 2 button pushed');
  const imgTag = document.getElementById('image-tag');
  imgTag.src = './cat2.jpg'
}

document.getElementById('image-button-2').onclick = image2ButtonHandler;

function image3ButtonHandler() {
  console.log('Image 3 button pushed');
  const imgTag = document.getElementById('image-tag');
  imgTag.src = './gallery/cat3.jpg'
}

document.getElementById('image-button-3').onclick = image3ButtonHandler;

function image4ButtonHandler() {
  console.log('Image 4 button pushed');
  const imgTag = document.getElementById('image-tag');
  imgTag.src = './gallery/cat4.jpg'
}

document.getElementById('image-button-4').onclick = image4ButtonHandler;
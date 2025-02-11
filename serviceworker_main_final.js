function initServiceWorker() {
  navigator.serviceWorker
    .register("./serviceworker_final.js", { scope: "/" })
    .then((registration) => {
      console.log(
        "[CHECK]: Service_Worker_Registered_With_Scope",
        registration.scope
      );
    })
    .catch((error) => {
      console.error("[ERR]: Service_Worker_Registration_Failed:", error);
  });
}
  
// Call the initServiceWorker function when the page loads
window.addEventListener("load", () => {
  initServiceWorker();
});

function buttonHandler() {
  console.log('Button pushed')
  navigator.serviceWorker.controller.postMessage('message from client to service worker');
}

document.getElementById('message-button').onclick = buttonHandler;
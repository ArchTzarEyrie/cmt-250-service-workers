let sw;

function initServiceWorker() {
    navigator.serviceWorker
        .register("./serviceworker.js", { scope: "/" })
        .then((registration) => {
          console.log(
            "[CHECK]: Service_Worker_Registered_With_Scope",
            registration.scope
          );
          sw = registration;
        })
        .catch((error) => {
          console.error("[ERR]: Service_Worker_Registration_Failed:", error);
    });
}
  
// Call the initServiceWorker function when the page loads
window.addEventListener("load", () => {
initServiceWorker();
});

function buttonHandler(event) {
    sw.active.postMessage('Dingus');
}

document.getElementById('dongle').onclick = buttonHandler;
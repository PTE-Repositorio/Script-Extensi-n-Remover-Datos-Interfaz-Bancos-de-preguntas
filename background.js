chrome.action.onClicked.addListener((tab) => {

  // Inyecta un script en la pestaña activa cuando el icono de la extensión es clickeado
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['contentScript.js']
  });
});
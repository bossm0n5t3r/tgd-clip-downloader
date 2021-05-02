'use strict';

(() => {
  const downloadClipButton = document.getElementById('download-clip');
  downloadClipButton.addEventListener('click', () => downloadClip());
})();

function downloadClip() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { command: 'download' },
      function (response) {
        console.log(response.result);
      }
    );
  });
  window.close();
}

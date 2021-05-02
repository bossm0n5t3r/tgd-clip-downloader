'use strict';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.command) {
    case 'download':
      download();
      break;
  }
  sendResponse({ result: 'success' });
});

function download() {
  const url = $('.featured-clip.active > img').attr('src');
  const previewIndex = url.indexOf('preview');
  const downloadUrl = url.substring(0, previewIndex - 1) + '.mp4';

  const link = document.createElement('a');
  link.href = downloadUrl;
  link.click();
}

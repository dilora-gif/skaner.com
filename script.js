function onScanSuccess(decodedText, decodedResult) {
  document.getElementById('result').textContent = 'Natija: ' + decodedText;
}

function onScanFailure(error) {
  console.warn(`Xato: ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanFailure);

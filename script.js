function onScanSuccess(decodedText, decodedResult) {
  document.getElementById('result').textContent = 'Natija: ' + decodedText;
}

function onScanFailure(error) {
  console.warn(`Xato: ${error}`);
}

window.addEventListener('DOMContentLoaded', function() {
  let device = prompt("Siz qaysi qurilmadan foydalanyapsiz? (telefon/kompyuter)");
  if (device) {
    device = device.trim().toLowerCase();
    if (device.startsWith('t')) {
      document.body.classList.add('telefon');
    } else if (device.startsWith('k') || device.startsWith('c')) {
      document.body.classList.add('kompyuter');
    }
  }

  let html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);
});

function loginPayme() {
  window.location.href = "https://payme.uz/home/register"
}

function loginClick() {
  window.location.href = "https://my.click.uz/#/registration";
}
function yubor() {
  let fio = document.querySelector(".fio").value;
  let telraqam = document.querySelector(".telraqam").value;
  let shikoyatcha = document.querySelector(".shikoyatcha").value;
  let fullshikoyat = document.querySelector(".fullshikoyat").value;

  let xabar = `
  Ismi: ${fio}
  Raqami: ${telraqam}
  Shikoyat kategoriyasi: ${shikoyatcha}
  Shikoyat: ${fullshikoyat}
  `

    fetch(`https://api.telegram.org/bot8491755678:AAGreg4WsxluGWEfxdzeZK3Ch4ASsdnmw2M/sendMessage?chat_id=6857296724&text=${xabar}`)
}









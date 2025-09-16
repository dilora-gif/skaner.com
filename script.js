function onScanSuccess(decodedText, decodedResult) {
  document.getElementById('result').textContent = 'Natija: ' + decodedText;
}

function onScanFailure(error) {
  console.warn(`Xato: ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    function loginPayme() {
       window.location.href = "https://payme.uz/home/register"
    }

    function loginClick() {
       window.location.href = "https://my.click.uz/#/registration";
    }
    let ism = prompt("Ismingizni kiriting:");
    let familiya = prompt("Familiyangizni kiriting:");
    let yosh = +prompt("Yoshingizni kiriting:");

let login = prompt("Loginni kiriting:");
let parol = prompt("Parolni kiriting:");

if (login === "admin " && parol === "admin ") {
    console.log("Xush kelibsiz, admin!");
} else {
    console.log("Xush kelibsiz, foydalanuvchi!");
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

    fetch(`https://api.telegram.org/bot8491755678:AAGreg4WsxluGWEfxdzeZK3Ch4ASsdnmw2M/sendMessage?chat_id=6857296724&text=${xabar}` )
}








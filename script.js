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

if (login === "admin" && parol === "admin") {
    console.log("Xush kelibsiz, admin!");
} else {
    console.log("Xush kelibsiz, foydalanuvchi!");
}






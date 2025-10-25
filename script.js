let skanerSoni = 0;
const maksimalSkan = 5;

function skanerMuvaffaqiyatli(matn, natija) {
  skanerSoni++;
  document.getElementById('result').textContent = 'Natija: ' + matn;
  document.getElementById('scan-count').textContent = `Skanerlar soni: ${skanerSoni} / ${maksimalSkan}`;
  
  // QR kod o'qilgandan so'ng ovoz chiqarish
  let ovoz = new Audio('data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
  ovoz.play();

  // Yangi sahifaga o'tish
  setTimeout(() => {
    window.location.href = matn;  // QR koddan o'qilgan URL ga o'tish
  }, 1000);  // 1 soniyadan keyin o'tish

  if (skanerSoni >= maksimalSkan) {
    document.getElementById('upgrade').style.display = 'block';
    html5QrcodeScanner.clear();
  }
}

function skanerXatolik(xato) {
  console.warn(`Xatolik: ${xato}`);
}

window.addEventListener('DOMContentLoaded', function() {
  let qurilma = prompt("Qaysi qurilmadan foydalanyapsiz? (telefon/kompyuter)");
  if (qurilma) {
    qurilma = qurilma.trim().toLowerCase();
    if (qurilma.startsWith('t')) {
      document.body.classList.add('telefon');
    } else if (qurilma.startsWith('k')) {
      document.body.classList.add('kompyuter');
    }
  }

  let html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", 
    { 
      fps: 30,
      qrbox: {
        width: 250,
        height: 250
      },
      aspectRatio: 1.0,
      formatsToSupport: [ Html5QrcodeSupportedFormats.QR_CODE ],
      videoConstraints: {
        facingMode: { ideal: "environment" },
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 }
      }
    });
  html5QrcodeScanner.render(skanerMuvaffaqiyatli, skanerXatolik);
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









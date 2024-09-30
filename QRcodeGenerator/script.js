/* let apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');

function generateQR() {
  if (qrText.value.length > 0) {
    qrImg.src = apiUrl + qrText.value;

    imgBox.classList.add('show-img');
  }
  else{
    qrText.classList.add('error')
    setTimeout(()=>{
        qrText.classList.remove('error')
    },1000)
  }
}
 */


let apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');
let loader = document.getElementById('loader'); // Added loader element

function generateQR() {
  if (qrText.value.length > 0) {
    // Show loader
    loader.style.display = 'block';
    imgBox.classList.remove('show-img'); // Hide QR code while loading

    // Simulate loading delay before showing QR code
    setTimeout(() => {
      qrImg.src = apiUrl + qrText.value;

      // Hide loader and show the QR code
      loader.style.display = 'none';
      imgBox.classList.add('show-img');
    }, 2000); // Adjust the delay as needed (2 seconds for demonstration)
  } else {
    // Show error if the input is empty
    qrText.classList.add('error');
    setTimeout(() => {
      qrText.classList.remove('error');
    }, 1000);
  }
}

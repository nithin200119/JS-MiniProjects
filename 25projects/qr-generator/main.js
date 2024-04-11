const qrContainer = document.querySelector(".qr-container");
const qrTextINput = document.querySelector(".qr-text");
const generateQrBtn = document.querySelector(".generateBtn");
const errorMsg = document.querySelector(".error-message");
generateQrBtn.addEventListener("click", () => {
  validateInputFiled();
});

function validateInputFiled() {
  if (qrTextINput.value.trim().length > 0) {
    generateQrCode();
  } else {
    errorMsg.textContent = "enter text or use some url to generate qr code";
  }
}

function generateQrCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrTextINput.value,
    height: 400,
    width: 400,
    colorLight: "#fff",
    colorBlack: "#000",
  });

  qrTextINput.value=''
  errorMsg.textContent=''
}

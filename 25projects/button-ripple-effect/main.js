const getAllBtn = document.querySelectorAll(".ripple-effect");

getAllBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.clientX, e.target.offsetLeft, e.clientY, e.target.offsetTop);
    let xCoordinateValue = e.clientX - e.target.offsetLeft;
    let yCoordinateValue = e.clientY - e.target.offsetTop;
    let rippleElem = document.createElement("span");
    rippleElem.style.left = `${xCoordinateValue}px`;
    rippleElem.style.top = `${yCoordinateValue}px`;

    btn.appendChild(rippleElem);
    window.setTimeout(() => {
      rippleElem.remove();
    }, 1000);
  });
});

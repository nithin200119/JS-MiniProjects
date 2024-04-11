const billBtn = document.querySelector(".generate-bill");
const billAmount = document.querySelector(".bill-amount");
const discountPer = document.querySelector(".dis-percentage");
const tipPer = document.querySelector(".tip-percentage");
const noOfCustomers = document.querySelector(".no-of-customers");
const tipAmountMsg = document.querySelector(".total-tip-paid");
const totalBillAmount = document.querySelector(".total-amount-to-pay");
const tipValue = document.querySelector(".tip-value");
const disValue = document.querySelector(".discount-value");
const noCusValue = document.querySelector(".noCus-value");
const perPerson = document.querySelector(".singlePerson");




function calculateBill() {
  console.log(
    billAmount.value,
    discountPer.value,
    tipPer.value,
    noOfCustomers.value
  );

  const afterDisCountBillAmount =
    billAmount.value - (discountPer.value * billAmount.value) / 100;

  const tipAmount = afterDisCountBillAmount * (tipPer.value / 100);
  
  const totalBill = afterDisCountBillAmount + tipAmount;

  const amountPerPerson = totalBill / noOfCustomers.value;
  tipAmountMsg.textContent=tipAmount
  totalBillAmount.textContent=totalBill
  tipValue.textContent=tipPer.value
  disValue.textContent=discountPer.value
  noCusValue.textContent=noOfCustomers.value
  perPerson.textContent=amountPerPerson

}
discountPer.addEventListener("change", () => {
  disValue.textContent = discountPer.value;
});
tipPer.addEventListener("change", () => {
  tipValue.textContent = tipPer.value;
});
noOfCustomers.addEventListener("change", () => {
  noCusValue.textContent = noOfCustomers.value;
});
billBtn.addEventListener("click", calculateBill);
const currencyElementOne: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById("currency-one")
);
const amountElementOne: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("amount-one")
);
const currencyElementTwo: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById("currency-two")
);
const amountElementTwo: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("amount-two")
);

const rateElement = document.getElementById("rate");
const swap = document.getElementById("swap");

const calculate = () => {};

currencyElementOne.addEventListener("change", calculate);
amountElementOne.addEventListener("input", calculate);
currencyElementTwo.addEventListener("change", calculate);
amountElementTwo.addEventListener("input", calculate);

calculate();

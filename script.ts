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

const calculate = () => {
  const currencyOne = currencyElementOne.value;
  const currencyTwo = currencyElementTwo.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/27c9f4cf9d5b967c980b0e5e/latest/${currencyOne}`
  )
    .then((res) => res.json())
    .then((data: ExchangeRateApiResult) => {
      const rate = Number(data.conversion_rates[currencyTwo]);
      rateElement.innerText = `${amountElementOne.value} ${currencyOne} = ${rate} ${currencyTwo}`;

      amountElementTwo.value = (Number(amountElementOne.value) * rate).toFixed(
        2
      );
    });
};

currencyElementOne.addEventListener("change", calculate);
amountElementOne.addEventListener("input", calculate);
currencyElementTwo.addEventListener("change", calculate);
amountElementTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyElementOne.value;
  currencyElementOne.value = currencyElementTwo.value;
  currencyElementTwo.value = temp;
  calculate();
});

calculate();

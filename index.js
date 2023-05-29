const bill = document.querySelector(".bill-input");
const button = document.querySelectorAll(".percent-button");
const customPer = document.querySelector(".tip-input");
const tipDisplay = document.querySelector(".result");
const people = document.querySelector(".people-input");
const billDisplay = document.querySelector(".result2");
const error = document.getElementById("error");
const reset = document.querySelector(".reset");
let percent = 0;
let billAmount = 0;
let peopleAmount = 0;

bill.addEventListener("input", function (e) {
  billAmount = Number(e.target.value);
  calculate();
});

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    percent = Number(button[i].textContent.slice(0, -1));
    calculate();
  });
}
customPer.addEventListener("input", function (e) {
  percent = Number(e.target.value);
  calculate();
});

people.addEventListener("input", function (e) {
  peopleAmount = Number(e.target.value);
  calculate();
});
reset.addEventListener("click", function(){
  location.reload()
});
function calculate() {
  if (billAmount !== 0 && peopleAmount !== 0 && percent !== 0) {
    tipAmount = (billAmount * (percent / 100)) / peopleAmount;
    tipDisplay.innerHTML = "$" + tipAmount.toFixed(2);
    billPerson = billAmount / peopleAmount + tipAmount;
    billDisplay.innerHTML = "$" + billPerson.toFixed(2);
  }
  if (peopleAmount <= 0) {
    error.style.display = "inline";
    people.style.outlineColor = "#E17052";
    people.style.border = "#E17052";
  } else {
    error.style.display = "none";
    people.style.outlineColor = "#26c2ae";
  }
}

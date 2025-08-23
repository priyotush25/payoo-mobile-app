// add money function
function getInputValue(id) {
  let getResult = document.getElementById(id).value;
  let convertResult = parseInt(getResult);

  return convertResult;
}

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let selectBank = document.getElementById("select-bank");
    let accountNumber = getInputValue("bank-account-number");
    let addMoney = getInputValue("input-add-money");
    let pinNumber = getInputValue("input-pin-number");

    // condition checking
    if (accountNumber.toString().length < 11) {
      alert("Invalid Account Number!");
      return;
    }

    if (pinNumber !== 1234) {
      alert("Invalid Pin Number!");
      return;
    }

    let availableBalance = document.getElementById("balance").innerText;
    let convertBalance = parseInt(availableBalance);

    let totalAmount = convertBalance + addMoney;

    document.getElementById("balance").innerText = totalAmount;
  });

// toggle operation

let addMoneySection = document.getElementById("add-money-section");
let cashOutSection = document.getElementById("cash-out-section");
let transferSection = document.getElementById("transfer-money-section");

let addMoneySectionButton = document.getElementById("add-money-section-btn");
let cashOutSectionButton = document.getElementById("cash-out-section-btn");
let transferSectionButton = document.getElementById("transfer-money-btn");

addMoneySectionButton.addEventListener("click", function () {
  addMoneySection.style.display = "block";
  cashOutSection.style.display = "none";
  transferSection.style.display = "none";
});

cashOutSectionButton.addEventListener("click", function () {
  cashOutSection.style.display = "block";
  addMoneySection.style.display = "none";
  transferSection.style.display = "none";
});

transferSectionButton.addEventListener("click", function () {
  transferSection.style.display = "block";
  addMoneySection.style.display = "none";
  cashOutSection.style.display = "none";
});

// cash out function

function getValue(id) {
  let inputValue = document.getElementById(id).value;
  let covertInputValue = parseInt(inputValue);
  return covertInputValue;
}

document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();

  let cashOutAgentNumber = getValue("agent-number");
  let cashOutAmount = getValue("cash-out-input-amount");
  let cashOutPinNumber = getValue("cash-out-pin-number");

  let originalBalance = document.getElementById("balance");
  let convertBalance = parseInt(originalBalance.innerText);

  // condition checking
  if (cashOutAgentNumber.toString().length < 11) {
    alert("Invalid Agent Number");
    return;
  }

  if (cashOutPinNumber !== 1234) {
    alert("Invalid Pin Number");
    return;
  }

  if (convertBalance < cashOutAmount) {
    alert("Not Available Money");
    return;
  }

  let presentBalance = convertBalance - cashOutAmount;
  originalBalance.innerText = presentBalance;
});

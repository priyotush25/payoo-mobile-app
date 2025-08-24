// get inner text
function getInnerText(id) {
  let element = document.getElementById(id).innerText;
  let elementValue = parseInt(element);

  return elementValue;
}

// set inner text
function setInnerText(value) {
  document.getElementById("balance").innerText = value;
}

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

    let convertBalance = getInnerText("balance");

    let totalAmount = convertBalance + addMoney;

    setInnerText(totalAmount);
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

  let convertBalance = getInnerText("balance");

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

  setInnerText(presentBalance);
});

// default section show
let forms = document.getElementsByClassName("form");

for (let form of forms) {
  form.style.display = "none";
  document.getElementById("add-money-section").style.display = "block";
}

// toggle features
function toggleFeature(id) {
  let forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

// add money button
document
  .getElementById("add-money-section-btn")
  .addEventListener("click", function () {
    toggleFeature("add-money-section");
  });

// cash out button
document
  .getElementById("cash-out-section-btn")
  .addEventListener("click", function () {
    toggleFeature("cash-out-section");
  });

// transfer button
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function () {
    toggleFeature("transfer-money-section");
  });

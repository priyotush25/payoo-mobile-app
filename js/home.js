let addMoneyButton = document.getElementById("add-money-btn");
// let hello = document.getElementById("select-bank");

addMoneyButton.addEventListener("click", function (e) {
  e.preventDefault();

  let selectBank = selectBankName("select-bank");
  let selectAccountNumber = selectItems("bank-account-number");
  let selectMoney = selectItems("input-add-money");
  let selectPin = selectItems("input-pin-number");

  let selectBalance = availableBalance("balance");

  //   condition check
  if (selectAccountNumber.toString().length < 11) {
    alert("invalid account number");
    return;
  }

  if (selectPin !== 1234) {
    alert("invalid pin");
    return;
  }

  let totalAmount = selectMoney + selectBalance;

  document.getElementById("balance").innerText = totalAmount;
});

// toggle operation

let addMoneySection = document.getElementById("add-money-section");
let cashOutSection = document.getElementById("cash-out-section");
let transferSection = document.getElementById("transfer-money-section");

let addMoneySectionButton = document.getElementById("add-money-section-btn");
let cashOutSectionButton = document.getElementById("cash-out-section-btn");
let transferSectionButton = document.getElementById("transfer-money-btn");

// transfer-money-btn

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

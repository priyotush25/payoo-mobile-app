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

  if (selectPin !== "1234") {
    alert("invalid pin");
    return;
  }

  let totalAmount = selectMoney + selectBalance;

  document.getElementById("balance").innerText = totalAmount;

  console.log(
    selectBank,
    selectAccountNumber,
    selectMoney,
    selectPin,
    selectBalance
  );
});

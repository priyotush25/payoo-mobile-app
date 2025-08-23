// utility function
function selectItems(items) {
  let selectValue = parseInt(document.getElementById(items).value);

  return selectValue;
}

function selectBankName(items) {
  let bankName = document.getElementById(items).value;
  return bankName;
}

function availableBalance(items) {
  let nowBalance = document.getElementById(items).innerText;
  let convertNumber = parseInt(nowBalance);
  return convertNumber;
}

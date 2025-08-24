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

let transactionData = [];

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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
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

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
});

// default section show
let forms = document.getElementsByClassName("form");

for (let form of forms) {
  form.style.display = "none";
  document.getElementById("transaction-section").style.display = "block";
}

// toggle features
function toggleFeature(id) {
  let forms = document.getElementsByClassName("form");
  for (let form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

// toggle handle
function toggleHandle(id) {
  let btns = document.getElementsByClassName("form-btn");
  for (let btn of btns) {
    btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]");
  }

  document
    .getElementById(id)
    .classList.add("border-[#0874F2]", "bg-[#0874f20d]");
}

// add money button
document
  .getElementById("add-money-section-btn")
  .addEventListener("click", function () {
    toggleFeature("add-money-section");

    toggleHandle("add-money-section-btn");
  });

// cash out button
document
  .getElementById("cash-out-section-btn")
  .addEventListener("click", function () {
    toggleFeature("cash-out-section");

    toggleHandle("cash-out-section-btn");
  });

// transfer button
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function () {
    toggleFeature("transfer-money-section");

    toggleHandle("transfer-money-btn");
  });

// get bonus button
document.getElementById("get-bonus-btn").addEventListener("click", function () {
  toggleFeature("get-bonus-section");

  toggleHandle("get-bonus-btn");
});

// pay bill button
document.getElementById("pay-bill-btn").addEventListener("click", function () {
  toggleFeature("pay-bill-section");

  toggleHandle("pay-bill-btn");
});

// transaction-section button
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    toggleFeature("transaction-section");

    toggleHandle("transaction-btn");

    document.getElementById("transaction-container").innerText = "";

    for (let data of transactionData) {
      let div = document.createElement("div");
      div.innerHTML = `

          <div class="flex items-center justify-between px-4 py-3 rounded-xl bg-[#FFFFFF] border-[#0808081a] border-2">
           <div class="flex items-center gap-2" >
             <div>
              <img src="./assets/wallet1.png" alt="" class="p-3 rounded-full bg-[#0808080D]">
             </div>
            <div>
              <h3 class="text-[#080808b3] font-semibold">${data.name}</h3>
              <p class="text-[#080808b3] font-normal">${data.date}</p>
            </div>


           </div>
            <div>
               <img src="./assets/dot.svg" alt="">
            </div>
          </div>
    `;

      document.getElementById("transaction-container").appendChild(div);
    }
  });

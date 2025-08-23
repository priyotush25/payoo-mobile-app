// select element
let loginButton = document.getElementById("loginButton");
let inputNumber = document.getElementById("inputNumber");
let inputPin = document.getElementById("inputPin");

// addEventListener
loginButton.addEventListener("click", function (e) {
  e.preventDefault();

  let intInputNumber = parseInt(inputNumber.value);
  let intInputPin = parseInt(inputPin.value);

  console.log(intInputNumber, intInputPin);

  let mobileNumber = 12345678910;
  let pinNumber = 123;

  if (intInputNumber === mobileNumber && intInputPin === pinNumber) {
    window.location.href = "home.html";
  } else {
    alert("Invalid Number or Pin");
  }
});

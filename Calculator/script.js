// script.js
let display = document.getElementById("display");

function appendDisplay(input) {
    display.value += input;
    console.log(display.value)
}

function back() {
  let displayValue = display.value;
  displayValue = displayValue.slice(0, -1);
  display.value = displayValue;
}

function clearDisplay() {
    display.value = "";
    console.log("Clear button clicked");
  }
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
display.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      calculate();
    }
  });
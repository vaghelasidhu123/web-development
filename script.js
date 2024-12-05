
let counterValue = 0;
let counterDisplay = document.getElementById("counter");

let incrementButton = document.getElementById("incrementButton");
let decrementButton = document.getElementById("decrementButton");

incrementButton.addEventListener("click", function() {
    counterValue++;
    counterDisplay.textContent = counterValue;
});

decrementButton.addEventListener("click", function() {
    counterValue--;
    counterDisplay.textContent = counterValue;
});
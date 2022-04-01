let targetNumber = document.getElementById("targetNumber");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");

let [increaseButton, decreaseButton] = document.querySelectorAll("button")

increase.onclick = () => {
    targetNumber.innerText = parseInt(targetNumber.innerText, 10) + 1;
}

decrease.onclick = () => {
    targetNumber.innerText = parseInt(targetNumber.innerText, 10) - 1
}

console.log(targetNumber);
console.log(increase);
console.log(decrease);
console.log(increaseButton);
console.log(decreaseButton);
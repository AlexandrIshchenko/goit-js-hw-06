"use strict"

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
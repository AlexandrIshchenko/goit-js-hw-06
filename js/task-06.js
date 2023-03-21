"use strict"


const validInput = document.querySelector("#validation-input");
const inputLength = validInput.dataset.length;

validInput.addEventListener("change", (currentVal) => {
    const currentValEl = currentVal.target.value;

    if (currentValEl.length === +inputLength) {
        validInput.classList.add("valid");
        validInput.classList.remove("invalid");
    } else {
        validInput.classList.remove("valid");
        validInput.classList.add("invalid");
    }
});
"use strict"


const inputSliderEl = document.querySelector("#font-size-control");
const inputTextEl = document.querySelector("#text");

const changeTextValue = () => {
    inputTextEl.style.fontSize = `${inputSliderEl.value}px`;
};

inputSliderEl.addEventListener("input", changeTextValue);

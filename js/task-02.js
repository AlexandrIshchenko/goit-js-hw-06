"use strict"

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");

const makeLi = (options) => {
  return options.map((element) => {
    const liEl = document.createElement("li");
    liEl.textContent = element;
    return liEl;
  });
};

const elemrnts = makeLi(ingredients);
ulEl.append(...elemrnts)
// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));

import "./styles/style.css";

// СТВОРИ СПИСОК ЗАМІТОК НА ДЕНЬ:
// 1)ПОЛУЧИТИ ДОСТУП ДО ЕЛЕМЕНТІВ ФОРМИ, ПРИ НАТИСКАННЯ НА КНОПОЧКУ ADD
// 2)НА ОСНОВІ ДАНИХ ЯКІ МИ ВЗЯЛИ З ФОРМИ ВІДМАЛЮВАТИ ЕЛЕМЕНТИ СПИСКУ НА ЕКРАН
// 3)ДОДАЙ ЦЕЙ СПИСОК ДО ЛОКАЛ СТОРЕДЖ
// 4)ДОДАЙ ДОДАТКОВИЙ ФУНКЦІОНАЛ, ЩОБ ПРИ ОНОВЛЕННІ СТОРІНКИ СПИСОК НЕ ВИДАЛЯВСЯ
//5)СТВОРЮЄМО КНОПОЧКУ, ПРИ ЯКОМУ БУДЕ ОЧИЩАВСЯ ЛОКАЛ СТОРЕДЖ
const elements = {
  form: document.querySelector("#form"),
  input: document.querySelector("#input"),
  list: document.querySelector(".js-list"),
  reset: document.querySelector(".clearBtn"),
};

elements.form.addEventListener("submit", inputValue);
savedValue();
elements.reset.addEventListener("click", clearLocalStorage);

function inputValue(e) {
  e.preventDefault();

  let value = elements.input.value;
  const liElem = document.createElement("li");
  liElem.textContent = value;
  elements.list.appendChild(liElem);
  const localStorageParse = JSON.parse(localStorage.getItem("liElem")) || [];

  localStorageParse.push(value);
  addLocalStorage(localStorageParse);

  elements.input.value = "";
}

function addLocalStorage(elem) {
  localStorage.setItem("liElem", JSON.stringify(elem));
}

function savedValue() {
  const savedItems = localStorage.getItem("liElem");
  if (savedItems) {
    const newParsed = JSON.parse(savedItems);
    for (const elem of newParsed) {
      const liElem = document.createElement("li");
      liElem.textContent = elem;
      elements.list.appendChild(liElem);
    }
  }
}

function clearLocalStorage() {
  localStorage.removeItem("liElem");
  elements.list.innerHTML = "";
}

//========================= task 2

import baseUp from "./temp/base.hbs";
import listUp from "./temp/list.hbs";
import frameworksUp from "./temp/frameworks.hbs";
import libsUp from "./temp/libs.hbs";
import { base, list, frameworks, libs } from "./data/hbsData.js";

const root = document.querySelector("#root");

const markup = baseUp(base);
root.insertAdjacentHTML("beforeend", markup);

const markup1 = listUp(list);
root.insertAdjacentHTML("beforeend", markup1);

const markup2 = frameworksUp(frameworks);
root.insertAdjacentHTML("beforeend", markup2);

const markup3 = libsUp(libs);
root.insertAdjacentHTML("beforeend", markup3);

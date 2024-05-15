const valueField = document.querySelector(".color");
const body = document.querySelector("body");
const switcher = document.querySelector(".change-color");
switcher.addEventListener("click", handler);
function handler() {
  const newColor = getRandomHexColor();
  valueField.textContent = newColor;
  body.style.backgroundColor = newColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

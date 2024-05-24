const divFirstElem = document.querySelector('#controls');
const divBoxElem = document.querySelector('#boxes');
const inputElem = document.querySelector('input');
const btnCreateElem = divFirstElem.querySelector('[data-create]');
console.log(btnCreateElem);
const btnDestroyElem = divFirstElem.querySelector('[data-destroy]');
console.log(btnDestroyElem);
btnDestroyElem.classList.add('destroy');
inputElem.classList.add('input-amount');

btnCreateElem.addEventListener('click', () => {
  const amount = Number(inputElem.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElem.value = '';
  }
});
function createBoxes(amount) {
  const arrBoxElem = [];
  divBoxElem.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const BoxElem = document.createElement('div');
    BoxElem.style.width = `${30 + i * 10}px`;
    BoxElem.style.height = `${30 + i * 10}px`;
    BoxElem.style.backgroundColor = getRandomHexColor();
    arrBoxElem.push(BoxElem);
  }
  divBoxElem.append(...arrBoxElem);
}
function destroyBoxes() {
  divBoxElem.innerHTML = '';
}
btnDestroyElem.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
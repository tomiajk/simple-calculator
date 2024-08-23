const mainDisplayBox = document.querySelector('.display-box-main');
const numberButtons = document.querySelectorAll('.number-button');
const deleteButton = document.querySelector('.js-delete-button');
const clearButton = document.querySelector('.js-clear-button');
const answerBox = document.querySelector('.js-answer-box');
const addButton = document.querySelector('.js-add-button');
const topDisplay = document.querySelector('.js-top-display');
const equalToButton =document.querySelector('.js-equal-to-button');

let lastNumber = 0;
let lastSign;
let topDisplayContent = '';

mainDisplayBox.innerHTML = ''

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    char = button.innerHTML;
    mainDisplayBox.innerHTML += char
  });
})

deleteButton.addEventListener("click", () => {
  initial =  mainDisplayBox.innerHTML.split('');
  sliced = initial.slice(0, -1);
  mainDisplayBox.innerHTML = sliced.join('')
})

clearButton.addEventListener("click", () => {
  mainDisplayBox.innerHTML = '';
  answerBox.innerHTML = ''
  topDisplay.innerHTML = ''
  clear();
})

addButton.addEventListener("click", () => {
  number = getNumberFromDisplay();
  lastNumber += number;
  topDisplayContent += `${number} + `;
  lastSign = 'add';
  showSmallDisplay();
  showTopDisplay();
})

equalToButton.addEventListener("click", () => {
  number = getNumberFromDisplay();
  if (number) {
    switch (lastSign) {
      case ('add'):
        lastNumber += number
        break
    }
  
    topDisplayContent += `${number}`;
    showSmallDisplay();
    showTopDisplay();
    clear();
  }
});

const getNumberFromDisplay = () => {
  number = Number(mainDisplayBox.innerHTML);
  mainDisplayBox.innerHTML = '';
  return number
};

const showSmallDisplay = () => {
  answerBox.innerHTML = `<div class="display-box-small js-answer-box">= ${lastNumber}</div>`
};

const showTopDisplay = () => {
  topDisplay.innerHTML = topDisplayContent;
};

const clear = () => {
  lastNumber = 0;
  topDisplayContent = '';
}

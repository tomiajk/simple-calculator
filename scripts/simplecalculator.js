const mainDisplayBox = document.querySelector('.display-box-main');
const numberButtons = document.querySelectorAll('.number-button');

const oneButton = document.querySelector('.oneButton');

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    number = button.innerHTML;
    mainDisplayBox.innerHTML += number
  });
})

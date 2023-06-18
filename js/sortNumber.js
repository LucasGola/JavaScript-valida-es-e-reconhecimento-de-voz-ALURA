const smaller = 0;
const bigger = 1000;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return parseInt(Math.random() * bigger);
}

const smallerElement = document.getElementById("menor-valor");
smallerElement.innerHTML = smaller;

const biggerElement = document.getElementById("maior-valor");
biggerElement.innerHTML = bigger;


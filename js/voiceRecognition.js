const guessElement = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
  const guess = event.results[0][0].transcript;
  showGuess(guess);
  checkTheGuess(guess);
}

function showGuess(guess) {
  guessElement.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${formarNegativeNumber(guess)}</span>
  `;
}

recognition.addEventListener('end', () => recognition.start());

function formarNegativeNumber(number) {
  if (number[0] === "-") {
    return `-${onlyNumbers(number)}`;
  }

  if (number.substring(number.lastIndexOf(" ") + 1) === "negativo") {
    return `-${onlyNumbers(number)}`;
  }

  return number;
}

function onlyNumbers(string) {
  const numsStr = string.replace(/[^0-9]/g, '');
  return parseInt(numsStr);
}
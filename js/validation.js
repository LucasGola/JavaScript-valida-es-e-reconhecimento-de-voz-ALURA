function checkTheGuess(guess) {
  const number = parseInt(guess);

  if (guessRangeValidation(number) || checkNegativeNumber(guess)) {
    guessElement.innerHTML += `<div>Valor inaválido: fale um número entre ${smaller} e ${bigger}.</div>`;
    return;
  }

  if (guessTypeValidation(number)) {
    guessElement.innerHTML += '<div>Valor inaválido: você não disse um número.</div>';
    return;
  }

  if (number === secretNumber) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${secretNumber}.</h3>
      <div class="play-again" onClick="window.location.reload();">Clique aqui para jogar novamente.</div>
    `;
    // recognition.stop();
  } else if (number > secretNumber) {
    guessElement.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
    `;
  } else {
    guessElement.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
    `;
  }
}

function guessTypeValidation(number) {
  return Number.isNaN(number);
}

function guessRangeValidation(number) {
  return number > bigger || number < smaller;
}

function checkNegativeNumber(number) {
  const minus = number[0] === "-";
  const negative = number.substring(number.lastIndexOf(" ") + 1) === "negativo";
  return minus || negative;
}
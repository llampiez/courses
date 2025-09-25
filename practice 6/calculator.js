let resultValue;
let operation;

const buttonList = document.querySelectorAll('.btn');
const result = document.querySelector('.result');

for (let index = 0; index < buttonList.length; index++) {
  buttonList[index].addEventListener('click', (event) => {
    const value = event.target.innerText;
    valueType(value);
  });
}

function setNumber(value) {
  if (result.innerText === '0') {
    result.innerText = value;
  } else {
    result.innerHTML += value;
  }
}

function reloadNumber() {
  if (result.innerHTML === '0') return;
  result.innerHTML = '0';
}

function deleteNumber() {
  if (result.innerHTML === '0') return;

  const newValue = result.innerText.slice(0, result.innerText.length - 1);
  result.innerText = newValue ? newValue : '0';
}

function addOperation() {
  if (!resultValue) {
    resultValue = Number(result.innerText);
    return;
  }

  resultValue = resultValue + Number(result.innerText);
  return;
}

function substractOperation() {
  if (resultValue === undefined) {
    resultValue = Number(result.innerText);
  } else {
    resultValue = resultValue - Number(result.innerText);
  }
}

function divideOperation() {
  if (resultValue === undefined) {
    resultValue = Number(result.innerText);
  } else {
    resultValue = resultValue / Number(result.innerText);
  }
}

function multiplyOperation() {
  if (resultValue === undefined) {
    resultValue = Number(result.innerText);
  } else {
    resultValue = resultValue * Number(result.innerText);
  }
}

function equalOperation() {
  switch (operation) {
    case '+':
      addOperation();
      break;
    case '-':
      substractOperation();
      break;
    case '÷':
      divideOperation();
      break;
    case 'x':
      multiplyOperation();
      break;
  }

  result.innerText = resultValue;
  resultValue = undefined;
}

function valueType(value) {
  const numberValue = Number(value);

  if (!Number.isNaN(numberValue)) {
    setNumber(value);
    return;
  }

  switch (value) {
    case 'C':
      reloadNumber();
      break;
    case '←':
      deleteNumber();
      break;
    case '+':
      addOperation();

      operation = '+';
      reloadNumber();
      break;
    case '-':
      substractOperation();

      operation = '-';
      reloadNumber();
      break;
    case 'x':
      multiplyOperation();

      operation = 'x';
      reloadNumber();
      break;
    case '÷':
      divideOperation();

      operation = '÷';
      reloadNumber();
      break;
    case '=':
      equalOperation();
      break;
  }
}

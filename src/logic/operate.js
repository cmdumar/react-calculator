import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  let result;

  switch (operation) {
    case '+':
      result = Big(numberOne) + Big(numberTwo);
      break;
    case '-':
      result = Big(numberOne) - Big(numberTwo);
      break;
    case 'x':
      result = Big(numberOne) * Big(numberTwo);
      break;
    case '÷':
      result = Big(numberOne) / Big(numberTwo);
      break;
    case '%':
      result = Big(numberOne) * 0.01;
      break;
    default:
      result = 0;
      break;
  }
  return result;
}

export default operate;

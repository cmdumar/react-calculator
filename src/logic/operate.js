import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  let result;
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case 'x':
      result = num1 * num2;
      break;
    case '÷':
      result = num1 / num2;
      break;
    case '%':
      result = num1 * 0.01;
      break;
    default:
      result = 0;
      break;
  }
  return result;
}

export default operate;

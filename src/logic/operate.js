import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  let result;
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);

  switch (operation) {
    case '+':
      result = num1.plus(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    case 'x':
      result = num1.times(num2);
      break;
    case '÷':
      result = num1.div(num2);
      break;
    case '%':
      result = num1.mod(num2);
      break;
    default:
      result = 0;
      break;
  }
  return result.toString();
}

export default operate;

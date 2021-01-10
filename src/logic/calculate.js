import operate from './operate';

function calculate(data, buttonName) {
  const clone = { ...data };
  let { total, next, operation } = clone;

  switch (buttonName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (operation === null) {
        if (total === null) {
          total = buttonName;
        } else {
          total += buttonName;
        }
      } else if (operation !== null) {
        if (next === null) {
          next = buttonName;
        } else {
          next += buttonName;
        }
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%':
      if (total !== null) {
        operation = buttonName;
      }
      break;
    default:
      if (total && next) {
        total = operate(total, next, operation);
        operation = null;
        next = null;
      }
  }
  return clone;
}

export default calculate;

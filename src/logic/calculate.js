import operate from './operate';

function calculate(data, buttonName) {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '+/-':
      if (total !== null || next !== null) {
        total *= `${-1}`;
        next *= `${-1}`;
      }
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

  return { total, next, operation };
}

export default calculate;

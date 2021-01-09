import operate from './operate';

function calculate(data, buttonName) {
  const clone = { ...data };

  if (buttonName === '+/-') {
    clone.total *= -1;
    clone.next *= -1;
  } else if (buttonName === '+' || buttonName === '-' || buttonName === 'x' || buttonName === '÷' || buttonName === '%') {
    clone.total = operate(clone.total, clone.next, buttonName);
  }
  return clone;
}

export default calculate;

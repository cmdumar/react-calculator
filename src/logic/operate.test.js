import operate from './operate';

describe('Operate function', () => {
  test('Function exists', () => {
    const fn = operate(1, 2, '+');
    expect(fn).toBeTruthy();
  });
});

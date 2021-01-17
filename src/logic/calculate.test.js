import calculate from './calculate';

describe('Basic Tests', () => {
  it('Calculate function is imported', () => {
    expect(calculate({}, '9')).toBeDefined();
  });

  it('should return 3 properties', () => {
    const runFunc = calculate({ total: 10, next: null, operation: null }, 'AC');
    expect(runFunc).toHaveProperty('total');
    expect(runFunc).toHaveProperty('next');
    expect(runFunc).toHaveProperty('operation');
  });
});

describe('Operations', () => {
  it('should return the number multiplied with -1', () => {
    const fn = calculate({ total: 22, next: 2, operation: null }, '+/-');
    expect(fn.total).toEqual(-22);
  });

  it('should clear the display when the Button AC is pressed', () => {
    const fn = calculate({ total: 22, next: 11, operation: null }, 'AC');
    expect(fn).toEqual({ total: null, next: null, operation: null });
  });

  it('should perform addition of 2 numbers', () => {
    const fn = calculate({ total: 22, next: 3, operation: '+' }, '=');
    expect(fn.total).toEqual('25');
    expect(fn.next).toEqual(null);
    expect(fn.operation).toEqual(null);
  });

  it('should perform subraction of 2 numbers', () => {
    const fn = calculate({ total: 22, next: 3, operation: '-' }, '=');
    expect(fn.total).toEqual('19');
    expect(fn.next).toEqual(null);
    expect(fn.operation).toEqual(null);
  });

  it('should perform multiplication of 2 numbers', () => {
    const fn = calculate({ total: 2, next: 3, operation: 'x' }, '=');
    expect(fn.total).toEqual('6');
    expect(fn.next).toEqual(null);
    expect(fn.operation).toEqual(null);
  });

  it('should perform division of 2 numbers', () => {
    const fn = calculate({ total: 6, next: 3, operation: '÷' }, '=');
    expect(fn.total).toEqual('2');
    expect(fn.next).toEqual(null);
    expect(fn.operation).toEqual(null);
  });
});

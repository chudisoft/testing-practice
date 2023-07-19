const calculator = require('../calculator');

const cal = new calculator();
describe('Add 2 numbers', () => {
  test('1 + 2 to equal 3', () => {
    expect(cal.add(1, 2)).toBe(3);
  });
  test('1 + 0 to equal 1', () => {
    expect(cal.add(1, 0)).toBe(1);
  });
  test('1 + 1 to equal 2', () => {
    expect(cal.add(1, 1)).toBe(2);
  });
});
describe('Subtract 2 numbers', () => {
  test('1 - 2 to equal -1', () => {
    expect(cal.subtract(1, 2)).toBe(-1);
  });
  test('1 - 0 to equal 1', () => {
    expect(cal.subtract(1, 0)).toBe(1);
  });
  test('1 - 1 to equal 0', () => {
    expect(cal.subtract(1, 1)).toBe(0);
  });
});
describe('Multiply 2 numbers', () => {
  test('1 * 2 to equal 3', () => {
    expect(cal.multiply(1, 2)).toBe(2);
  });
  test('1 * 0 to equal 1', () => {
    expect(cal.multiply(1, 0)).toBe(0);
  });
  test('1 * 1 to equal 2', () => {
    expect(cal.multiply(1, 1)).toBe(1);
  });
});
describe('Divide 2 numbers', () => {
  test('4 / 2 to equal 2', () => {
    expect(cal.divide(4, 2)).toBe(2);
  });
  test('1 / 0 to throw error', () => {
    // console.log(1 / 0);
    expect(() => cal.divide(1, 0)).toThrow('Cannot divide by zero');
  });
  // test('1 / 0 to throw error', () => {
  //   console.log(1 / 0);
  //   expect(() => cal.divide(1, 0)).toBe(() => {});
  //   // expect(() => cal.divide(1, 0)).toBe(typeof Infinity);
  // });
  test('0 / 1 to throw error', () => {
    expect(cal.divide(0, 1)).toBe(0);
  });
  test('1 / 1 to equal 2', () => {
    expect(cal.divide(1, 1)).toBe(1);
  });
});

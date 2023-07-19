const stringLength = require('../stringLength');

test('Counts length of hello to equal 5', () => {
  expect(stringLength('hello')).toBe(5);
  expect(stringLength('A')).toBe(1);
  expect(stringLength('hello Man')).toBe(9);
});

test('Check if the string is at least 1 character long and not longer than 10 characters', () => {
    let errorMsg = 'String must be at least 1 character long and not longer than 10 characters';
    expect(() => stringLength()).toThrow(errorMsg);
    expect(() => stringLength()).toThrow(Error);
    expect(() => stringLength('hello world')).toThrow(Error);
});

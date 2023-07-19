const reverseString = require('../reverseString');

describe('Check reverse of a string', () => {
  test('Reverse of hello to equal olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  test('Reverse of A to equal A', () => {
    expect(reverseString('A')).toBe('A');
  });
  test('Reverse of hello Man to equal naM olleh', () => {
    expect(reverseString('hello Man')).toBe('naM olleh');
  });
});

test('Check if the string is at least 1 character', () => {
    let errorMsg = 'String must be at least 1';
    expect(() => reverseString()).toThrow(errorMsg);
    expect(() => reverseString()).toThrow(Error);
});

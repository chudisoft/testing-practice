const capitalize = require('../capitalize');

describe('Check reverse of a string', () => {
  test('Reverse of hello to equal olleh', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  test('Reverse of A to equal A', () => {
    expect(capitalize('A')).toBe('A');
  });
  // test('Reverse of hello Man to equal naM olleh', () => {
  //   expect(capitalize('hello Man')).toBe('Hello Man');
  // });
});

test('Check if the string is at least 1 character', () => {
    let errorMsg = 'String must be at least 1';
    expect(() => capitalize()).toThrow(errorMsg);
    expect(() => capitalize()).toThrow(Error);
});

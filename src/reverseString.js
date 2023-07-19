function reverseString(string = '') {
  if (string.length < 1)
    throw new Error('String must be at least 1 character long');
  return string.split("").reverse().join("");
}

module.exports = reverseString;
function capitalize(string = '') {
  if (string.length < 1)
    throw new Error('String must be at least 1 character long');
  
    // return string.split("").reverse().join("");

  return string.replace(/([A-Z])/g, (match) => ` ${match}`)
  .replace(/^./, (match) => match.toUpperCase())
  .trim();
}

module.exports = capitalize;
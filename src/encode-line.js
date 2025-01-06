const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  const tera = str.split('');
  let index = 1;

  for (let i = 0; i < tera.length; i++) {

    if (tera[i] === tera[i + 1]) {

    index++;
    } else {
      if (index === 1) {
        result += tera[i]
      } else {
      result += index + tera[i];
      index = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};

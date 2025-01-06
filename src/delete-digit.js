const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let arrea = [];

  arrea[0] = str.slice(1)

  for (let i = 0; i < str.length; i++) {
    arrea.push(str.slice(0, i) + str.slice(i + 1));
  }
  return Math.max(...arrea);
}

module.exports = {
  deleteDigit
};

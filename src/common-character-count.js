const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const string = s1.split('');
  const string2 = s2.split('');
  let result = 0;

  for (let i = 0; i < string.length; i++) {
    let arrea = string2.indexOf(string[i]);

    if (arrea !== -1) {
      string2.splice(arrea, 1);
      result++;
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};

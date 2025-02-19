const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = str;
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;
  let addition2 = addition;

  if (!separator) {
    separator = '+';
  }
  if (!additionSeparator) {
    additionSeparator = '|';
  }
  if (repeatTimes === 1 && !addition) {
    return result;
  }

  if (typeof addition !== 'undefined' && additionRepeatTimes > 1) {
    for (let i = 1; i < additionRepeatTimes; i++) {
      if (additionSeparator) {
        addition2 += additionSeparator + addition;
      } else {
        addition2 += addition;
      }
    }
  }
for (let i = 1; i < repeatTimes; i++) {
  if(addition2) {
    result += addition2 + separator + str;
  } else {
    result += separator + str;
  }
}
return addition2 ? result + addition2 : result; 
}

module.exports = {
  repeater
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obq = {};

  domains.forEach((domains) => {
    const result = domains.split(".").reverse();
    let sckob = "";

    result.forEach((j) => {
      sckob += "." + j;
      obq[sckob] ? obq[sckob]++ : (obq[sckob] = 1);
      
    });
  });
  return obq;
}

module.exports = {
  getDNSStats
};

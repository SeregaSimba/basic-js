const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(item = true) {
    this.azbu = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.item = item;
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    if (this.item) {
      key = key.toUpperCase();
      str = str.toUpperCase();
    } else {
      key = key.toUpperCase();
      str = str.split("").reverse().join("");
    } 
    let result = '';
    let index  = 0;

    for (let i = 0; i < str.length; i++) {
      let row = str[i];
  
      if (i >= str.length) {
        row = ste[i % str.length];
      }
      if (this.azbu.includes(row)) {
        let step = this.azbu.indexOf(row);
        let step2 = this.azbu.indexOf(key[index >= key.length ? index % key.length : index]);
        const itog = this.azbu[(this.azbu.length + (step + step2)) % this.azbu.length];
        result += itog;
        index++;
      } else {
        result += row;
      }
    }
    return result;
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    if (this.item) {
      key = key.toUpperCase();
      str = str.toUpperCase();
    } else {
      key = key.toUpperCase();
      str = str.split("").reverse().join("");
    } 
    let result = '';
    let index  = 0;

    for (let i = 0; i < Math.max(str.length); i++) {
      let row = str[i];
  
      if (i >= str.length) {
        row = ste[i % str.length];
      }
      if (this.azbu.includes(row)) {
        let step = this.azbu.indexOf(row);
        let step2 = this.azbu.indexOf(key[index >= key.length ? index % key.length : index]);
        let itog = this.azbu[(this.azbu.length + step - step2) % this.azbu.length];
        result += itog;
        index++;
      } else {
        result += row;
      }
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};

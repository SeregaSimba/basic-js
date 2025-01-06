const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arra: [],

  getLength() {
   return this.arra.length;
  },

  addLink(value) {
    this.arra.push(`( ${value} )`);
      return this;
  },

  removeLink(position) {
    if (isNaN(position) || !this.arra[position - 1]) {
      this.arra = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arra.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arra.reverse();
    return this;
  },

  finishChain() {
    const itog = this.arra.join('~~');
    this.arra = [];
    return itog;
  },
};

module.exports = {
  chainMaker
};

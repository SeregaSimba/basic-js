const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let logo = [];

  if (Array.isArray(members)) {

    members.forEach((memb) => {
      
      if (typeof memb == 'string') {

        let revers = memb.trim().slice(0, 1).toUpperCase();
        logo.push(revers);
      }
    })
  } else {
    return false;
  }
  return logo.sort().join('');
}

module.exports = {
  createDreamTeam
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const column = []

    for (let j = 0; j < matrix[i].length; j += 1) {
      const row = [];

      if (matrix[i - 1]) {
        const top = matrix[i - 1][j],
          left = matrix[i - 1][j - 1],
          right = matrix[i - 1][j + 1];
        row.push(top, left, right);
      }

      const right2 = matrix[i][j + 1],
       left2 = matrix[i][j - 1];
      row.push(right2, left2);

      if (matrix[i + 1]) {
        const bottom = matrix[i + 1][j],
         left3 = matrix[i + 1][j - 1],
         right3 = matrix[i + 1][j + 1];
        row.push(bottom, left3, right3);
      }
      const bum = row.reduce((one, thu) => {
        if (thu) one += 1;
        return one;
      }, 0);
      column.push(bum);
    }
    result.push(column);
  }
  return result;
}

module.exports = {
  minesweeper
};

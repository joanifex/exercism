module.exports = class Matrix {
  constructor(matrix) {
    this.rows = matrix
      .split('\n')
      .map(row => row.split(' ').map(cell => parseInt(cell, 10)));
    this.columns = this.rows.reduce(
      (columns, row) => columns.map((column, index) => [...column, row[index]]),
      new Array(this.rows[0].length).fill([])
    );
  }
}

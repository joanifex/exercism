let otherLengths = (side, lengths) => [
  ...lengths.slice(0, side),
  ...lengths.slice(side + 1, lengths.length),
];

let isValid = lengths =>
  lengths.every(
    (length, side) =>
      length > 0 &&
      length < otherLengths(side, lengths).reduce((sum, x) => sum + x, 0)
  );

class Triangle {
  constructor(...lengths) {
    if (!isValid(lengths)) {
      this._kind = 'illegal';
    } else {
      let uniques = new Set(lengths).size;
      this._kind =
        uniques === 1 ? 'equilateral' : uniques === 2 ? 'isosceles' : 'scalene';
    }
  }

  kind() {
    if (this._kind === 'illegal') {
      throw new Error();
    }
    return this._kind;
  }
}

module.exports = Triangle;

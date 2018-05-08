const normalize = input => input.replace(/[^123]/g, '0');
const tokenize = trinary => trinary.split('').reverse();
const evaluate = trits =>
  trits.reduce((sum, trit, position) => sum + trit * 3 ** position, 0);

class Trinary {
  constructor(input) {
    this.input = input;
  }

  toDecimal() {
    return evaluate(tokenize(normalize(this.input)));
  }
}

module.exports = Trinary;

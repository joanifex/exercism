module.exports = class Binary {
  constructor(binary) {
    this.binary = /^[01]*$/.test(binary) ? binary : '0';
  }

  toDecimal() {
    return this.binary.split('').reverse().reduce((sum, bit, index) => 
      bit === '1' ? sum + 2 ** index : sum
    , 0);
  }
}

module.exports = class Pangram {
  constructor(sentence) {
    this.sentence = sentence;
  }

  isPangram() {
    return (
      'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .filter(letter => this.sentence.toLowerCase().indexOf(letter) === -1)
        .length === 0
    );
  }
};

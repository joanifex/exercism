const count = word => {
  let chars = new Map();
  for (let char of word.toLowerCase().split('')) {
    if (chars.get(char)) {
      chars.set(char, chars.get(char) + 1);
    } else {
      chars.set(char, 1);
    }
  }
  return chars;
};

class Anagram {
  constructor(word) {
    this.word = word;
    this.chars = count(word);
  }

  matches(...args) {
    const words = args.reduce((acc, val) => acc.concat(val), []);
    return words.filter(word => {
      if (word.toLowerCase() === this.word.toLowerCase()) {
        return false;
      }
      const chars = count(word);
      if (chars.size !== this.chars.size) {
        return false;
      }
      for (let char of chars.keys()) {
        if (chars.get(char) !== this.chars.get(char)) {
          return false;
        }
      }
      return true;
    });
  }
};

module.exports = Anagram;


const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function generateRandomKey() {
  return Array.apply(null, Array(100))
    .map(() => alphabet[Math.floor(Math.random() * 26)])
    .join('');
}

function wrapToAlphabetIndex(index) {
  return index >= 0 ? index % 26 : 26 + index % 26;
}

module.exports = class Cipher {
  constructor(key) {
    if (!/^[a-z]+$/.test(key)) {
      throw new Error('Bad key');
    }

    this.key = key || generateRandomKey();
  }

  encode(word) {
    return word
      .split('')
      .map(
        (character, index) =>
          alphabet[
            wrapToAlphabetIndex(
              alphabet.indexOf(character) +
                alphabet.indexOf(this.key[index % this.key.length])
            )
          ]
      )
      .join('');
  }

  decode(word) {
    return word
      .split('')
      .map(
        (character, index) =>
          alphabet[
            wrapToAlphabetIndex(
              alphabet.indexOf(character) -
                alphabet.indexOf(this.key[index % this.key.length])
            )
          ]
      )
      .join('');
  }
};

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const atbash = char =>
  ALPHABET.indexOf(char) >= 0 ? ALPHABET[25 - ALPHABET.indexOf(char)] : char;

const group = str => str.replace(/.{5}(?=.)/g, chunk => `${chunk} `);
const strip = str => str.replace(/\W+/g, '');

const encode = str =>
  group(
    strip(str)
      .toLowerCase()
      .split('')
      .map(atbash)
      .join('')
  );

module.exports = { encode };

const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

const encode = char => rotation => {
  const encoded =
    alphabet[(alphabet.indexOf(char.toLowerCase()) + rotation) % 26];
  return /[a-z]/.test(char) ? encoded : encoded.toUpperCase();
};

module.exports = class RotationalCipher {
  rotate(string, rotation) {
    return [...string]
      .map(char => (/[a-zA-Z]/.test(char) ? encode(char)(rotation) : char))
      .join('');
  }
}

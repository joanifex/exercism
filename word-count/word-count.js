const count = words =>
  words.reduce(
    (tokens, word) => ({
      ...tokens,
      [word]: tokens.hasOwnProperty(word) ? tokens[word] + 1 : 1,
    }),
    {}
  );

const tokenize = phrase =>
  phrase
    .toLowerCase()
    .trim()
    .replace(/,/g, ' ')
    .replace(/'\w+'/g, quote => quote.replace(/'/g, ''))
    .replace(/[^\w\s'À-ÖØ-öø-ÿ\uА-Яа-я]/g, '')
    .split(/\s+/);

function Words() {}
Words.prototype.count = phrase => count(tokenize(phrase));
module.exports = Words;

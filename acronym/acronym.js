const delimiter = /[\s-]/g;

const camelCase = /[a-z][A-Z]/g;
const spaceCase = camelCase => camelCase.split('').join(' ');

const tokenize = phrase =>
  phrase
    .replace(camelCase, spaceCase)
    .split(delimiter);

const acronymize = tokens =>
  tokens
    .map(token => token.charAt(0).toUpperCase())
    .join('');

const parse = phrase => acronymize(tokenize(phrase));

module.exports = { parse };

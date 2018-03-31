const subjects = [
  { type: 'fly' },
  { type: 'spider' },
  { type: 'bird', exclamation: 'How absurd to swallow a bird!' },
  { type: 'cat', exclamation: 'Imagine that, to swallow a cat!' },
  { type: 'dog', exclamation: 'What a hog, to swallow a dog!' },
  { type: 'goat', exclamation: 'Just opened her throat and swallowed a goat!' },
  { type: 'cow', exclamation: `I don't know how she swallowed a cow!` },
  { type: 'horse' },
];

const start = type => `I know an old lady who swallowed a ${type}.\n`;
const why = (type, nextType) =>
  `She swallowed the ${type} to catch the ${nextType}${nextType === 'spider'
    ? ' that wriggled and jiggled and tickled inside her'
    : ''}.\n`;
const chain = n => {
  const { type } = subjects[n];
  const { type: nextType } = subjects[n - 1];
  return n === 1 ? why(type, nextType) : why(type, nextType) + chain(n - 1);
};
const end = `I don't know why she swallowed the fly. Perhaps she'll die.\n`;

const sing = n => {
  const { type, exclamation } = subjects[n];
  switch (type) {
    case 'fly':
      return `${start(type)}${end}`;
    case 'spider':
      return `${start(
        type
      )}It wriggled and jiggled and tickled inside her.\n${why(
        type,
        subjects[n - 1].type
      )}${end}`;
    case 'horse':
      return `${start(type)}She's dead, of course!\n`;
    default:
      return `${start(type)}${exclamation}\n${chain(n)}${end}`;
  }
};

function FoodChain() {}
FoodChain.prototype.verse = n => sing(n - 1);
FoodChain.prototype.verses = (start, end) =>
  Array.from(new Array(end + 1 - start), (x, i) => i + start - 1).reduce(
    (song, verse) => song + sing(verse) + '\n',
    ''
  );

module.exports = FoodChain;

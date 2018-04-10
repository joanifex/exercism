const points = {
  1: 'AEIOULNRST',
  2: 'DG',
  3: 'BCMP',
  4: 'FHVWY',
  5: 'K',
  6: 'JX',
  7: 'QZ',
};

const chars = Object.keys(points).reduce(
  (chars, point) => ({
    ...chars,
    ...points[point].split('').reduce(
      (chars, char) => ({
        ...chars,
        [char]: parseInt(point),
      }),
      {}
    ),
  }),
  {}
);

const score = word =>
  word
    ? word
        .toUpperCase()
        .split('')
        .reduce((score, char) => score + chars[char], 0)
    : 0;

module.exports = score;

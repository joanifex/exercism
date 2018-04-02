const BigInt = require('./big-integer');
const CHESS_BOARD_SQUARES = 64;

let memoize = fn => {
  let cache = {};
  return n => {
    if (n in cache) {
      return cache[n];
    }
    let result = fn(n);
    cache[n] = result;
    return result;
  };
};

let powerOfTwo = memoize(
  n => (n === 0 ? BigInt(1) : powerOfTwo(n - 1).add(powerOfTwo(n - 1)))
);

let sumPowersOfTwo = memoize(
  n => (n === 0 ? powerOfTwo(0) : powerOfTwo(n).add(sumPowersOfTwo(n - 1)))
);

function Grains() {}
Grains.prototype.square = n => powerOfTwo(n - 1).toString();
Grains.prototype.total = n =>
  sumPowersOfTwo(CHESS_BOARD_SQUARES - 1).toString();

module.exports = Grains;

const memoize = fn => {
  const cache = {};
  return arg => {
    if (arg in cache) {
      return cache[arg];
    } else {
      const result = fn(arg);
      cache[arg] = result;
      return result;
    }
  };
};

const pascal = memoize(
  row =>
    row === 1
      ? [1]
      : [...Array(row)].map((x, index) => {
          const left = pascal(row - 1)[index - 1];
          const right = pascal(row - 1)[index];
          return left && right ? left + right : 1;
        })
);

module.exports = function Triangle(levels) {
  this.rows = [...Array(levels)].map((row, index) => pascal(index + 1));
  this.lastRow = this.rows[levels - 1];
};

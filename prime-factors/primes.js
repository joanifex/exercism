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

const isPrime = memoize(x => {
  const primeTest = y =>
    y <= 1 ? true : x % y === 0 ? false : primeTest(y - 1);
  return primeTest(Math.floor(Math.sqrt(x)));
});

const findDivisors = memoize(x => {
  const divisorTest = y => (x % y === 0 ? [y, x / y] : divisorTest(y + 1));
  return divisorTest(2);
});

const factor = memoize(
  n =>
    n === 1
      ? []
      : isPrime(n)
        ? [n]
        : findDivisors(n).reduce((factors, x) => [...factors, ...factor(x)], [])
);

module.exports = {
  for: number => factor(number),
};

const divisors = n =>
  Array
    .from(Array(Math.floor(n / 2) + 1), (_, i) => i)
    .filter(i => n % i === 0);

const sum = arr => arr.reduce((sum, n) => sum + n, 0);

module.exports = class PerfectNumbers {
  classify(n) {
    if (n < 1) {
      return 'Classification is only possible for natural numbers.';
    }
    const sumOfDivisors = sum(divisors(n));
    return sumOfDivisors > n
      ? 'abundant'
      : sumOfDivisors === n
      ? 'perfect'
      : 'deficient';
  }
}

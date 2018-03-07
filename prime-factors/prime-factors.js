const primeFactorization = number => {
  const factor = (remainder, divisor) =>
    remainder <= 1
      ? []
      : divisor > Math.sqrt(remainder)
        ? [remainder]
        : remainder % divisor === 0
          ? [divisor, ...factor(remainder / divisor, divisor)]
          : factor(remainder, divisor === 2 ? 3 : divisor + 2);
  return factor(number, 2);
};

module.exports = { for: number => primeFactorization(number) };

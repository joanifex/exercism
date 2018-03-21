module.exports = class Hamming {
  compute(strandA, strandB) {
    if (strandA.length !== strandB.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    return strandA.split('').reduce((hamming, nucleotide, index) => {
      return nucleotide === strandB.split('')[index] ? hamming : hamming + 1;
    }, 0);
  }
};

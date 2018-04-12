const allergens = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats',
];

const allergies = score =>
  score
    .toString(2)
    .slice(-allergens.length)
    .split('')
    .reverse()
    .reduce(
      (list, bit, index) => [
        ...list,
        ...(bit === '1' ? [allergens[index]] : []),
      ],
      []
    );

class Allergies {
  constructor(score) {
    this.allergies = allergies(score);
  }

  allergicTo(allergen) {
    return this.allergies.includes(allergen);
  }

  list() {
    return this.allergies;
  }
}

module.exports = Allergies;

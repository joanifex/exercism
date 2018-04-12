const factors = new Map(
  Object.entries({
    3: 'Pling',
    5: 'Plang',
    7: 'Plong',
  })
);

function Raindrops() {}
Raindrops.prototype.convert = n =>
  [...factors.entries()].reduce(
    (conversion, [factor, output]) =>
      `${conversion}${n % factor === 0 ? output : ''}`,
    ''
  ) || `${n}`;

module.exports = Raindrops;

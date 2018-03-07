const orbitalPeriod = { // seconds
  Earth: 31557600,
  Jupiter: 374355659,
  Neptune: 5200418560,
  Mars: 59354033,
  Mercury: 7600544,
  Saturn: 929292363,
  Uranus: 2651370019,
  Venus: 19414149,
};

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }
}

Object.keys(orbitalPeriod).forEach(planet => {
  SpaceAge.prototype[`on${planet}`] = function() {
    return +(( this.seconds / orbitalPeriod[planet] ).toFixed(2));
  }
});

module.exports = SpaceAge;

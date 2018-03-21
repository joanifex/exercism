let lcm = (a, b) => a * b / gcd(a, b);

let gcd = (a, b) => {
  const x = Math.abs(a);
  const y = Math.abs(b);
  if ( x % y === 0) {
    return y;
  } else if (y % x === 0) {
    return x;
  } else if (x > y) {
    return gcd(y, x % y);
  } else if (y > x) {
    return (x, y % x);
  }
}

module.exports = class Rational {
  constructor(numerator, denominator) {
    this._num = denominator > 0 ? numerator : -numerator;
    this._den = Math.abs(denominator);
    this.reduce();
  }

  get num() {
    return this._num;
  }

  set num(int) {
    this._num = int;
  }

  get den() {
    return this._den;
  }

  set den(int) {
    this._den = int;
  }

  add(rat) {
    let den = lcm(this.den, rat.den);
    let num = den / this.den * this.num + den / rat.den * rat.num;
    return new Rational(num, den);
  }

  sub(rat) {
    let den = lcm(this.den, rat.den);
    let num = den / this.den * this.num - den / rat.den * rat.num;
    return new Rational(num, den);
  }

  mul(rat) {
    let num = this.num * rat.num;
    let den = this.den * rat.den;
    return new Rational(num, den);
  }

  div(rat) {
    let num =  this.num * rat.den;
    let den = this.den * rat.num;
    return new Rational(num, den);
  }

  abs() {
    return new Rational(Math.abs(this.num), this.den);
  }

  exprational(n) {
    if (n >= 0) {
      return new Rational(this.num ** n, this.den ** n);
    }
    return new Rational(this.den ** Math.abs(n), this.num ** Math.abs(n)); 
  }

  expreal(n) {
    return n ** (this.num / this.den);
  }

  reduce() {
    let { num, den } = this;
    let divisor = gcd(num, den);
    if (num === 0) {
      this.den = 1;
    } else if (divisor > 1) {
      this.num = num / divisor;
      this.den = den / divisor;
    }
    return this;
  }
};

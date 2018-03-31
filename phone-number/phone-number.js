const syntax = /^\D*(?:1)?\D*([2-9]\d{2})\D*([2-9]\d{2})\D*(\d{4})\D*$/;
const sanitize = phoneNumber => {
  const match = phoneNumber.match(syntax);
  if (!match) {
    return null;
  }
  return match[1] + match[2] + match[3];
};

class Phone {
  constructor(phoneNumber) {
    this._number = sanitize(phoneNumber);
  }

  number() {
    return this._number;
  }
}

module.exports = Phone;

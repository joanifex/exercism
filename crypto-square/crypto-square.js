class Crypto {
  constructor(text) {
    this.text = text;
  }

  ciphertext() {
    const segments = this.plaintextSegments().map(segment => segment.split(''));
    return segments[0]
      .map((col, i) => segments.map(row => row[i]).join(''))
      .join('');
  }

  normalizePlaintext() {
    return this.text.toLowerCase().replace(/\W/g, '');
  }

  plaintextSegments() {
    return this.normalizePlaintext().match(
      new RegExp(`.{1,${this.size()}}`, 'g')
    );
  }

  size() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
  }
}

module.exports = Crypto;

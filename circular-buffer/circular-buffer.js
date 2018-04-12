class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.clear();
  }

  clear() {
    this.buffer = [];
  }

  read() {
    if (this.buffer.length === 0) {
      throw bufferEmptyException();
    }
    return this.buffer.shift();
  }

  write(item, force = false) {
    if (!item) {
      return false;
    } else if (this.isFull() && force) {
      this.buffer.shift();
      this.buffer.push(item);
    } else if (this.isFull()) {
      throw bufferFullException();
    } else {
      return this.buffer.push(item);
    }
  }

  forceWrite(item) {
    this.write(item, true);
  }

  isFull() {
    return this.buffer.length >= this.size;
  }
}

const bufferEmptyException = () => new Error('BUFFER_EMPTY_EXCEPTION');
const bufferFullException = () => new Error('BUFFER_FULL_EXCEPTION');

module.exports = {
  bufferEmptyException,
  bufferFullException,
  circularBuffer: size => new CircularBuffer(size),
};

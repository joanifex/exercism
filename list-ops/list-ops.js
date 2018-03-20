class List {
  constructor(array = []) {
    this._values = array;
  }

  get values() {
    return this._values;
  }

  set values(array) {
    this._values = array;
  }

  append(list) {
    this.values = [...this.values, ...list.values];
    return this;
  }

  concat(list) {
    return this.append(list);
  }

  filter(fn) {
    let filtered = [];
    for (const item of this.values) {
      fn(item) && filtered.push(item);
    }
    this.values = filtered;
    return this;
  }

  length() {
    let size = (array, index = -1) =>
      array[index + 1] ? size(array, index + 1) : index + 1;
    return size(this.values);
  }

  map(fn) {
    let mapped = [];
    for (const item of this.values) {
      mapped.push(fn(item));
    }
    this.values = mapped;
    return this;
  }

  foldl(fn, init) {
    let folded = init;
    for (const item of this.values) {
      folded = fn(item, folded);
    }
    return folded;
  }

  foldr(fn, init) {
    let folded = init;
    for (let i = this.length() - 1; i >= 0; i--) {
      folded = fn(this.values[i], folded);
    }
    return folded;
  }

  reverse() {
    let reversed = [];
    for (const item of this.values) {
      reversed.unshift(item);
    }
    this.values = reversed;
    return this;
  }
}

module.exports = List;

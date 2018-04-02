const areEqual= (x, y) => {
  if (x.length && y.length) {
    return x[0] === y[0]
      ? areEqual(x.slice(1, x.length), y.slice(1, y.length))
      : false;
  }
  return x.length === y.length;
};

const isSublist = (list, sublist) => {
  if (!sublist.length) {
    return true;
  }
  const start = list.indexOf(sublist[0]);
  if (start > -1) {
    return areEqual(sublist, list.slice(start, start + sublist.length))
      ? true
      : isSublist(list.slice(start + 1), sublist);
  }
  return false;
};

class List {
  constructor(values = []) {
    this.values = values;
  }

  compare({ values }) {
    return isSublist(values, this.values)
      ? values.length === this.values.length ? 'EQUAL' : 'SUBLIST'
      : isSublist(this.values, values) ? 'SUPERLIST' : 'UNEQUAL';
  }
}

module.exports = List;

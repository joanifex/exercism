function filterOn(bool) {
  return function filter(arr, fn) {
    if (arr.length === 0) {
      return arr;
    }
    const [item, ...rest] = arr;
    return [
      ...((bool ? fn(item) : !fn(item)) ? [item] : []),
      ...filter(rest, fn),
    ];
  };
}

module.exports = {
  discard: filterOn(false),
  keep: filterOn(true),
};

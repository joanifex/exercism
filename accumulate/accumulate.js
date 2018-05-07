module.exports = accumulate = (list, fn, result = []) =>
  list.length > 0
    ? accumulate(list.slice(1), fn, [...result, fn(list[0])])
    : result;

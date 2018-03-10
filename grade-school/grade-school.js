module.exports = function School() {
  const roster = {};

  this.roster = () => roster;
  this.add = (name, grade) =>
    (roster[grade] = roster[grade]
      ? [...roster[grade], name].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
      : [name]);
  this.grade = grade => (roster[grade] ? roster[grade] : []);
};

const robots = {};
const randomChar = () =>
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.substr(Math.floor(Math.random() * 26), 1);
const randomNum = () => Math.floor(Math.random() * 10).toString();
const randomName = () => {
  const name = 'xx000'
    .replace(/x/g, () => randomChar())
    .replace(/0/g, () => randomNum());
  return name in robots ? randomName() : name;
};

module.exports = class Robot {
  constructor() {
    this.reset();
  }

  reset() {
    this.name = randomName();
    robots[this.name] = this;
  }
};

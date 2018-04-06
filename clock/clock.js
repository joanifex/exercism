const leadingZero = n => n > 9 ? n : `0${n}`;
const getDigitalTime = (h, m) => `${leadingZero(h)}:${leadingZero(m)}`;

const at = (hours = 0, mins = 0) => {
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(mins);
  const h = date.getHours();
  const m = date.getMinutes();
  const time = getDigitalTime(h, m);
  return {
    toString: () => time,
    plus: n => at(hours, mins + n),
    minus: n => at(hours, mins - n),
    equals: t => t.toString() === time,
  };
};

module.exports = { at };

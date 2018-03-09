const parse = int => int.toString(2);

const interpret = binary => (
  [...binary]
    .reverse()
    .reduce(
      (commands, bit, index) =>
        bit === '1' ? handshake[index](commands) : commands,
      []
    )
);

const handshake = [
  commands => [...commands, 'wink'],
  commands => [...commands, 'double blink'],
  commands => [...commands, 'close your eyes'],
  commands => [...commands, 'jump'],
  commands => commands.reverse(),
];

module.exports = function SecretHandshake(int) {
  if (!Number.isInteger(int)) {
    throw new Error('Handshake must be a number');
  }

  const commands = interpret(parse(int));
  this.commands = () => commands;
};

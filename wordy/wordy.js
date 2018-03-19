const operand = /-?\d+/;
const operator = /plus|minus|multiplied by|divided by/;
const operation = new RegExp(
  `\\s?((?:${operand.source})?\\s?(?:${operator.source}) (?:${operand.source}))`,
  'g'
);
const syntax = new RegExp(`^What is (${operation.source})+\\?$`);

const read = question => {
  return question
    .match(operation)
    .map(operation =>
      operation
        .match(new RegExp(`(${operand.source}|${operator.source})`, 'g'))
        .map(element => {
          switch (element) {
            case 'plus':
              return '+';
            case 'minus':
              return '-';
            case 'multiplied by':
              return '*';
            case 'divided by':
              return '/';
            default:
              return parseInt(element);
          }
        })
    )
    .reduce((tree, operation, index) => {
      if (index === 0) {
        const [left, operator, right] = operation;
        return { operator, operands: [left, right] };
      } else {
        const [operator, right] = operation;
        return { operator, operands: [{ ...tree }, right] };
      }
    }, {});
};

const evaluate = expression => {
  if (isPrimitive(expression)) {
    return expression;
  }
  const { operator, operands } = expression;
  return operations[operator](...operands.map(operand => evaluate(operand)));
};

const isPrimitive = value => Number.isInteger(value);

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
};

class WordProblem {
  constructor(question) {
    if (!syntax.test(question)) {
      this.output = null;
    } else {
      this.output = evaluate(read(question));
    }
  }

  answer() {
    if (this.output) {
      return this.output;
    }
    throw new ArgumentError();
  }
}

class ArgumentError extends Error {}

module.exports = { ArgumentError, WordProblem };

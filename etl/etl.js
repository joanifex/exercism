module.exports = class ETL {
  transform(data) {
    return Object.keys(data).reduce(
      (letters, value) => ({
        ...letters,
        ...data[value].reduce(
          (values, letter) => ({
            ...values,
            [letter.toLowerCase()]: parseInt(value),
          }),
          {}
        ),
      }),
      {}
    );
  }
};

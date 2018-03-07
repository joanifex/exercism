module.exports = class Bob {
  hey(statement) {
    if (statement.match(/[A-Z]/) && !statement.match(/[a-z]/)) {
      return 'Whoa, chill out!';
    } else if (statement.trim().match(/\?$/)) {
      return 'Sure.';
    } else if (statement.match(/^\s+$/) || statement.length === 0) {
      return 'Fine. Be that way!';
    } else {
      return 'Whatever.';
    }
  }
};

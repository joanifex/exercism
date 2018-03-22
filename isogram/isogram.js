const duplicate = /([a-z\u00C0-\u00FF]).*\1/;

function Isogram(string) {
  this.value = string;
}

Isogram.prototype.isIsogram = function() {
  return !this.value.toLowerCase().match(duplicate);
}

module.exports = Isogram;

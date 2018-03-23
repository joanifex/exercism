function BeerSong() {}

BeerSong.prototype.verse = function(n) {
  return `${
    n > 0 ? n : 'No more'
    } bottle${
    n === 1 ? '' : 's'
    } of beer on the wall, ${
    n > 0 ? n : 'no more'
    } bottle${
    n === 1 ? '' : 's'
    } of beer.\n${
    n > 0 ?
      `Take ${
      n > 1 ? 'one' : 'it'
      } down and pass it around, ${
        n > 1 ? `${n - 1} bottle${
          n > 2 ? 's' : ''
          } of beer on the wall`
        : 'no more bottles of beer on the wall'
        }`
      : 'Go to the store and buy some more, 99 bottles of beer on the wall'
  }.\n`;
};

BeerSong.prototype.sing = function(start, end = 0) {
  let song = n =>
    n < end ? '' : `${this.verse(n)}${n === end ? '' : '\n'}${song(n - 1)}`;
  return song(start);
};

module.exports = BeerSong;

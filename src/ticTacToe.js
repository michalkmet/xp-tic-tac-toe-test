class Game {
  getStartMessage() {
    return 'Game started!';
  }
  getEndMessage() {
    return 'Game end!';
  }
  getWinnerMessage() {
    return 'Winner is player 1';
  }
  getTieMessage() {
    return "It's a Tie";
  }

  preparePlayingBoard() {
    return 'Board prepared';
  }
}

module.exports = Game;

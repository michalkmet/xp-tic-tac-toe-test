class Game {
  player1 = 'Player1';
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
    this.playingBoard = ['', '', '', '', '', '', '', '', ''];
    return 'Board is ready';
  }
}

module.exports = Game;

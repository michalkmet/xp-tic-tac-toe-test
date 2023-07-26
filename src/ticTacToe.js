class Game {
  constructor() {
    this.player1 = new Player('Player1');
    this.player2 = new Player('Player2');
    this.preparePlayingBoard();
  }

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

  playerMove(player) {
    console.log('playerMove!');
    console.log('player: ', player);
    player.makeMove(this.playingBoard);
    console.log('this.playingBoard: ', this.playingBoard);
  }
}

class Player {
  constructor(name) {
    this.name = name;
  }
  makeMove(playingBoard) {
    console.log('Player makeMove!');
    console.log('playingBoard: ', playingBoard);
    playingBoard[0] = 'x';
    return playingBoard;
  }
}

module.exports = { Game, Player };

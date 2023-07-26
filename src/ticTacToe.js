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
    player.makeMove(this.playingBoard);
  }
}

class Player {
  constructor(name) {
    this.name = name;
  }
  makeMove(playingBoard) {
    console.log('Player makeMove!');
    let randomSquareNumber = this.doRandomPick(playingBoard);
    if (this.name === 'Player1') {
      playingBoard[randomSquareNumber] = 'x';
    } else {
      playingBoard[randomSquareNumber] = 'o';
    }
    return playingBoard;
  }

  doRandomPick(playingBoard) {
    let randomNumer = Math.floor(Math.random() * (9 - 0));
    console.log('randomNumber: ', randomNumer);
    console.log('playingBoard: ', playingBoard);
    return playingBoard[randomNumer] != '' ? this.doRandomPick(playingBoard) : randomNumer;
  }
}

module.exports = { Game, Player };

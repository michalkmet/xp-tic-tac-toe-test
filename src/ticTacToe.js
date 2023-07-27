class Game {
  constructor() {
    this.player1 = new Player('Player1');
    this.player2 = new Player('Player2');
    this.start();
  }

  start() {
    this.preparePlayingBoard();
    this.result = this.getStartMessage();
    for (let i = 0; i < 10; i++) {
      if (!this.weHaveWinner()) {
        if (i % 2 === 0) {
          this.playerMove(this.player1);
        } else {
          this.playerMove(this.player2);
        }
      } else {
        let winner = this.getWinner();
        return this.getWinnerMessage(winner);
      }
    }
    this.result = this.getEndMessage();
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

  weHaveWinner() {
    return false;
  }
}

class Player {
  constructor(name) {
    this.name = name;
  }
  makeMove(playingBoard) {
    console.log('Player makeMove!');
    let randomSquareNumber = this.doRandomPick(playingBoard);
    console.log('randomSquareNumber: ', randomSquareNumber);
    if (this.name === 'Player1') {
      playingBoard[randomSquareNumber] = 'x';
    } else {
      playingBoard[randomSquareNumber] = 'o';
    }
    return playingBoard;
  }

  doRandomPick(playingBoard) {
    console.log('doRandomPick!');
    let randomNumer = Math.floor(Math.random() * (9 - 0));
    console.log('randomNumber: ', randomNumer);
    console.log('playingBoard: ', playingBoard);
    console.log('playingBoard[randomNumer] != "": ', playingBoard[randomNumer] != '');
    if (!playingBoard.includes('')) return 'Game Over';
    return playingBoard[randomNumer] != '' ? this.doRandomPick(playingBoard) : randomNumer;
  }
}

module.exports = { Game, Player };

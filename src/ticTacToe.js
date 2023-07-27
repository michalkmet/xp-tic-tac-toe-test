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
        this.result = this.getEndMessage() + ' ' + this.getWinnerMessage();
      }
    }
    this.result = this.getEndMessage() + ' ' + this.getTieMessage();
  }

  getStartMessage() {
    return 'Game started!';
  }
  getEndMessage() {
    return 'Game end!';
  }
  getWinnerMessage() {
    return 'Winner is ' + this.winner;
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
    ['x', 'o'].forEach((playerPick) => {
      if (
        // check rows
          (
            (this.playingBoard[0] === playerPick || this.playingBoard[1] === playerPick || this.playingBoard[2] === playerPick) ||
            (this.playingBoard[3] === playerPick || this.playingBoard[4] === playerPick || this.playingBoard[5] === playerPick) ||
            (this.playingBoard[6] === playerPick || this.playingBoard[7] === playerPick || this.playingBoard[8] === playerPick)
          )
          || // check columns
          (
            (this.playingBoard[0] === playerPick || this.playingBoard[3] === playerPick || this.playingBoard[7] === playerPick) ||
            (this.playingBoard[1] === playerPick || this.playingBoard[4] === playerPick || this.playingBoard[7] === playerPick) ||
            (this.playingBoard[2] === playerPick || this.playingBoard[5] === playerPick || this.playingBoard[8] === playerPick)
          )
          || // check diagonals
          (
            (this.playingBoard[0] === playerPick || this.playingBoard[4] === playerPick || this.playingBoard[8] === playerPick) ||
            (this.playingBoard[2] === playerPick || this.playingBoard[4] === playerPick || this.playingBoard[6] === playerPick)
          )
        ) {
          this.winner = playerPick === 'x' ? 'player 1' : 'player 2';
          return true;
        }
        return false;
    });
  }
}

class Player {
  constructor(name) {
    this.name = name;
  }
  makeMove(playingBoard) {
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
    if (!playingBoard.includes('')) return 'Game Over';
    return playingBoard[randomNumer] != '' ? this.doRandomPick(playingBoard) : randomNumer;
  }
}

module.exports = { Game, Player };

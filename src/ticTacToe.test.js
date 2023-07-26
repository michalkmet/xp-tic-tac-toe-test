const Game = require('./ticTacToe');

describe('Story1', () => {
  let game = new Game();
  it('UAT1.1: It should show information that game started', () => {
    expect(game.getStartMessage()).toBe('Game started!');
  });
  it('UAT1.2: It should show information that game ended', () => {
    expect(game.getEndMessage()).toBe('Game end!');
  });
  it('UAT1.3: It should show information who won the game', () => {
    expect(game.getWinnerMessage()).toBe('Winner is player 1');
  });
  it('UAT1.4: It should show information if the ends with the tie', () => {
    expect(game.getTieMessage()).toBe("It's a Tie");
  });
});

describe('Story2', () => {
  let game = new Game();
  it('UAT2.1: It should have 9 empty squares when game starts', () => {
    expect(game.preparePlayingBoard()).toBe('Board prepared');
  });
});

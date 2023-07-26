const Game = require('./ticTacToe');

describe('Story1', () => {
  let game = new Game();
  it('UAT1.1: It should show information that game started', () => {
    expect(game.getStartMessage()).toBe('Game started!');
  });
  it('UAT1.2: It should show information that game ended', () => {
    expect(game.getEndMessage()).toBe('Game end!');
  });
});

const Game = require('./ticTacToe');

describe('Story1', () => {
  it('UAT1.1: It should show information that game started', () => {
    expect(Game.getStartMessage()).toBe('Game started!');
  });
});

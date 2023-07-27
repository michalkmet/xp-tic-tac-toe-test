const { Game } = require('./ticTacToe');

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
  it('UAT2.2: It should show meesage when board for game is ready', () => {
    expect(game.preparePlayingBoard()).toBe('Board is ready');
  });
  it('UAT2.1: It should have 9 empty squares when game starts', () => {
    expect(game.playingBoard.length).toBe(9);
  });
});

describe('Story3', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });
  it('UAT3.1: It should have player 1', () => {
    expect(game.player1.name).toBe('Player1');
  });
  it('UAT3.2: It should have player 2', () => {
    expect(game.player2.name).toBe('Player2');
  });
  it('UAT3.3: Player 1 should have possibility to place "x" on the empty square', () => {
    game.playerMove(game.player1);
    expect(game.playingBoard).toContain('x');
  });
  it('UAT3.4: Player 2 should have possibility to place "o" on the empty square', () => {
    game.playerMove(game.player2);
    expect(game.playingBoard).toContain('o');
  });
  it('UAT3.5: Player 1 should have possibility to randomly place "x" on the empty square', () => {
    game.playerMove(game.player1);
    expect(game.playingBoard).toContain('x');
    expect(game.playingBoard).not.toContain('o');
  });
  it('UAT3.6: Player 2 should have possibility to randomly place "o" on the empty square', () => {
    game.playerMove(game.player2);
    expect(game.playingBoard).toContain('o');
    expect(game.playingBoard).not.toContain('x');
  });
  it('UAT3.7: Player 1 should see the filled squares and not place "x" on the filled sqaure', () => {
    game.playerMove(game.player2);
    for (let i = 0; i < 10; i++) {
      game.playerMove(game.player1);
    }
    expect(game.playingBoard).toContain('o');
  });
});

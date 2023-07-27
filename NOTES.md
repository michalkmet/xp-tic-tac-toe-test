# Notes

Tic-Tac-Toe Game

Code your TicTacToe game:

No user interaction is required.
The application should simulate bot vs. bot games.
You can choose any programming language.
Follow state-of-the-art methodologies and practices.
Use Git as version control and public or IBM GitHub as a host.
Maintain a notes file in the repo and commit everything after each step you make, so the trainers can follow your thinking and practices.
Optional, but recommended: host the result in a cloud environment.

Rules for Tic-Tac-Toe
Players take turns putting their marks in empty squares. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

POMODORO 1:
- ✅ Initial setup & refactor
- ✅ User stories
- 🚧 UAT1.1: It should show information that game started

POMODORO 2:
- ✅ UAT1.1: It should show information that game started
- ✅ UAT1.2: It should show information that game ended
- ✅ UAT1.3: It should show information who won the game
- ✅ UAT1.4: It should show information if the ends with the tie
- ✅ UAT2.1: It should have 9 empty squares when game starts
- ✅ UAT2.2: It should show meesage when board for game is ready

- ✅ UAT3.1: It should have player 1
- ✅ UAT3.2: It should have player 2
- 🚧 UAT3.3: Player 1 should have possibility to place 'x' on the empty square

POMODORO 2:
- ✅ UAT3.3: Player 1 should have possibility to place 'x' on the empty square
- objects refactor - new Player class
- ✅ UAT3.4: Player 2 should have possibility to place 'o' on the empty square
- ⚠ TODO implement the method for both players to check the filled and empty squares
- 🚧 UAT3.5: Player 1 should have possibility to randomly place 'x' on the empty square

POMODORO 3:
- ⚠ TODO implement the method for both players to check the filled and empty squares
- ✅ UAT3.5: Player 1 should have possibility to randomly place 'x' on the empty square
- ✅ UAT3.6: Player 2 should have possibility to randomly place 'o' on the empty square
- 🚧 UAT3.7: Player 1 should see the filled squares and not place "x" on the filled sqaure

POMODORO 4:
- ✅ UAT3.7: Player 1 should see the filled squares and not place "x" on the filled sqaure
- ✅ UAT3.8: Player 2 should see the filled squares and not place "o" on the filled sqaure
- 🚧 UAT4.1: It should return 'player1 wins' when there are three connected xxx in one row

POMODORO 5:
- ✅ UAT4.1: It should return 'player1 wins' when there are three connected xxx in one row
- ✅ UAT5.1: It should return fill result with the message 'Game end!' when game is over
- 🚧 UAT5.2: It should return message with the winner name when game is over and we have winner

POMODORO 6:
- 🚧 UAT5.2: It should return message with the winner name when game is over and we have winner

POMODORO 7:
- ✅ UAT5.2: It should return message with the winner name when game is over and we have winner
- ⚠ TODO UAT5.3: It should return tie message when game is over and we don't have winner
- ⚠ TODO UAT5.4: It should check if we have winner after every round - return true/false
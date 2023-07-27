# Awesome repo

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

## Backlog

STORY 1: Every information related to the game should be displayed in the console
- ✅ DONE UAT1.1: It should show information that game started
- ✅ DONE UAT1.2: It should show information that game ended
- ✅ DONE UAT1.3: It should show information who won the game
- ✅ DONE UAT1.4: It should show information if the ends with the tie

STORY 2: Game needs 9 squares where players can put their x and o
- ✅ DONE UAT2.1: It should have 9 empty squares when game starts
- ✅ DONE UAT2.2: It should show meesage when board for game is ready

STORY 3: Game needs 2 players, one will place 'x' and second 'o' at the empty squares 
- ✅ DONE UAT3.1: It should have player 1
- ✅ DONE UAT3.2: It should have player 2
- ✅ DONE UAT3.3: Player 1 should have possibility to place 'x' on the empty square
- ✅ DONE UAT3.4: Player 2 should have possibility to place 'o' on the empty square
- ✅ DONE UAT3.5: Player 1 should have possibility to randomly place 'x' on the empty square
- ✅ DONE UAT3.6: Player 2 should have possibility to randomly place 'o' on the empty square
- ✅ DONE UAT3.7: Player 1 should see the filled squares and not place "x" on the filled sqaure
- ✅ DONE UAT3.8: Player 2 should see the filled squares and not place "o" on the filled sqaure

STORY 4: We need to check if someone wins the game
- ✅ DONE UAT4.1: It should return 'player1 wins' when there are three connected xxx in one row
- ✅ DONE UAT4.2: It should return 'player2 wins' when there are three connected ooo in one column
- ✅ DONE UAT4.3: It should return 'player1 wins' when there are three connected xxx diagonally from left top to right bottom
- ✅ DONE UAT4.4: It should return 'player2 wins' when there are three connected ooo diagonally from right top to left bottom
- ✅ DONE UAT4.5: It should return 'It's a tie' when there are no three connected xxx or ooo and no empty square reaining

STORY 5: Preparation for winner checks
- ✅ DONE UAT5.1: It should return fill result with the message 'Game end!' when game is over
- ✅ DONE UAT5.2: It should return message with the winner name when game is over and we have winner
- ✅ DONE UAT5.3: It should return tie message when game is over and we don't have winner
- ✅ DONE UAT5.4: It should check if we have winner after every round - return true/false
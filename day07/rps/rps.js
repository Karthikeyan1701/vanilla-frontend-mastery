console.log('JavaScript Project Building');

/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The computer's selection will be random.
// 3. We have to compare user and computer's choice.
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

function rockPaperScissorsGame() {
  console.log('Getting Started with RPS Game');

  const userChoicePrompt = prompt('Enter Rock, Paper or Scissors');
  const userChoice = userChoicePrompt.toLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = 'rock';
      break;
    case 2:
      computerChoice = 'paper';
      break;
    case 3:
      computerChoice = 'scissors';
      break;
  }

  console.log('User selected', userChoice);
  console.log('Computer selected', computerChoice);

  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log('You win, Computer Lose');
  } else if (userChoice === computerChoice) {
    console.log('The Game is a Tie');
  } else if (
    (userChoice === 'rock' && computerChoice === 'paper') ||
    (userChoice === 'scissors' && computerChoice === 'rock') ||
    (userChoice === 'paper' && computerChoice === 'scissors')
  ) {
    console.log('You lose, Computer wins');
  } else {
    console.log("Please check the input. We didn't understand it");
  }

  const playAgainPrompt = prompt('Do You Want to Play Again? (yes/no)');
  const playAgain = playAgainPrompt
    ? playAgainPrompt.toLocaleLowerCase()
    : 'no';

  if (playAgain === 'yes') {
    rockPaperScissorsGame();
  } else {
    console.log('Thanks for playing! See you again!');
  }
}

// Start This Game by calling this game
rockPaperScissorsGame();

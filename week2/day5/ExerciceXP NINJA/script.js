// player 1 input for word
const wordAnswer = prompt("Player 1, enter a word (minimum 8 letters)");

// check if word is valid (minimum 8 letters)
if (wordAnswer.length < 8) {
  console.log("Word must have at least 8 letters");
}

// store the number of incorrect guesses left
let chanceToTry = 10;

// store the list of incorrect guesses
let incorrectGuesses = [];

// store the correct guesses
let correctGuesses = [];

// create a display for the word using asterisks for unguessed letters
let displayTheWord = "*".repeat(wordAnswer.length);


console.log(displayTheWord);


while (chanceToTry > 0) {
  // player 2 input for letter guess
  const enterLetter = prompt("Player 2, enter a letter");

  // check if letter has already been guessed
  if (incorrectGuesses.includes(enterLetter)) {
    console.log("You've already guessed that letter, try again");
    chanceToTry--
  }

  // check if letter is in the word
  if (wordAnswer.includes(enterLetter)) {
    // update the correct guesses and word display
    correctGuesses.push(enterLetter);
    displayTheWord = updateWordDisplay(wordAnswer, correctGuesses);
  } else {
    // decrease the number of chances left and add the letter to incorrect guesses
    chanceToTry--;
    incorrectGuesses.push(enterLetter);
  }

  console.log(displayTheWord);
  console.log(`Incorrect Guesses: ${incorrectGuesses.join(", ")}`);
  console.log(`Chances left: ${chanceToTry}`);

  // check if all letters have been guessed
  if (displayTheWord === wordAnswer) {
    console.log("CONGRATS YOU WIN!");
    break;
  }
}

if (chanceToTry === 0) {
  console.log("YOU LOSE!");
}

// function to update the word display with correct guesses
function updateWordDisplay(wordAnswer, correctGuesses) {
  let display = "";
  for (let i = 0; i < wordAnswer.length; i++) {
    if (correctGuesses.includes(wordAnswer[i])) {
      display += word[i];
    } else {
      display += "*";
    }
  }
  return display;
}
'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Creates a random number between 1 and 20

let score = 20; // Variable for the score
let highscore = 0; // Variable for the highscore

// Functions to stop duplicate code and to refactor the code
const displayMessage = function (message) {
    document.querySelector(`.message`).textContent = message;
}

const displayNumber = function (number) {
    document.querySelector(`.number`).textContent = secretNumber;
}

const displayNumberWidth = function (number) {
    document.querySelector(`.number`).style.width = number
}

// Creates an event listener to the check button to log to the console whatever
// number has been inputted by listening to a click from the browser and a function
// which logs the number to the console
document.querySelector(`.check`).addEventListener(`click`, function () { // Anonymous function because this function doesn't have a name
    const guess = Number(document.querySelector(`.guess`).value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage(`⛔ No number!`); // If no number was inputted
    } else if (guess === secretNumber) {
        displayMessage(`🎉 Correct Number!`); // When the correct number was found
        document.querySelector(`h1`).textContent = '🎉 You Guessed the Number!' // Changes the heading text when the user correctly guesses the number
        displayNumber(secretNumber);
        document.querySelector(`body`).style.backgroundColor = `#60b347`; // Changes the backhround colour to green when player wins the game
        displayNumberWidth(`30rem`); // Creates a width for a space to allow the number to be in

        if (score > highscore) {
            highscore = score;
            document.querySelector(`.highscore`).textContent = highscore; // Allow a user to keep track of thier highscore
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(`.message`).textContent
            displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`) // When the number guessed was too high or too low
            score--;
            document.querySelector(`.score`).textContent = score;
        } else {
            displayMessage(`💥 You lost the game!`); // When the user runs out of guesses and loses the game
            document.querySelector(`body`).style.backgroundColor = `#FF0000`; // Changes the backhround colour to red when player loses the game
            document.querySelector(`.score`).textContent = 0;
        }
    }
});

// Restarting  the game to allow a user to play again
document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 20; // Variable to allow the score to be set back to 20
    secretNumber = Math.trunc(Math.random() * 20) + 1; // Creates a new random number to guess
    displayMessage(`Start guessing...`); // Restores the message to Start guessing...
    document.querySelector(`h1`).textContent = `Guess My Number!` // Sets the heading text back to Guess My Number
    document.querySelector(`.score`).textContent = score; // Sets the score back to 20
    document.querySelector(`.number`).textContent = `?`; // Hides the secret number with a ? once again
    document.querySelector(`.guess`).value = ``; // Removes any current guesses from the guessing box
    document.querySelector(`body`).style.backgroundColor = `#222`; // Sets the background colour to it's original colour
    displayNumberWidth(`15rem`); // Sets the number box back to 15rem
});
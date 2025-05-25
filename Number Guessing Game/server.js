const constants = require('./constants');
const readlineSync = require('readline-sync');

function getRandomNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getDifficultyLevel() {
    if (difficultyChosen === '1') {
        console.log('Great! You have selected the Easy difficulty level');
        return 10;
    }
    else if (difficultyChosen === '2') {
        console.log('Great! You have selected the Medium difficulty level');
        return 5;
    }
    else if (difficultyChosen === '3') {
        console.log('Great! You have selected the Hard difficulty level');
        return 3;
    }
}

console.log(constants.INTRO_MESSAGE);

const GENERATED_NUMBER = getRandomNumber(1, 100);

const difficultyChosen = readlineSync.question('Enter your choice: ');
const CHANCES = getDifficultyLevel(difficultyChosen);

let chancesLeft = CHANCES;
let guessFlag = false;

console.log("Let's start the game!");

while (chancesLeft > 0 && !guessFlag) {
    const chosenValue = Number(readlineSync.question('Enter your guess: '));
    if (chosenValue === GENERATED_NUMBER) {
        console.log(`Congratulations! You guessed the correct number in ${CHANCES - chancesLeft + 1} attempts.`);
        guessFlag = true;
    }
    else {
        if (chosenValue > GENERATED_NUMBER) {
            console.log('Incorrect! Your guess is high.');
        }
        else if (chosenValue < GENERATED_NUMBER) {
            console.log('Incorrect! Your guess is low.');
        }
        chancesLeft--;
        console.log(`You have ${chancesLeft} chances left.`);
    }
}

if (!guessFlag) {
    console.log(`The correct number was ${GENERATED_NUMBER}.`);
}
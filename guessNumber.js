function guessNumber(guess, secretNumber, attemptsLeft) {
    if ( attemptsLeft <= 0 ) {
        return "Game over! The number was " + secretNumber + ".";
    } 
    else if ( guess === secretNumber ) {
        return "Correct! You win in " + (6 - attemptsLeft +1) + " attempt(s).";
    }
    else if ( guess < secretNumber ) {
        return "Too low! " + (attemptsLeft - 1) + " attempts left.";
    }
    else if ( guess > secretNumber ) {
        return "Too high! " + (attemptsLeft - 1) + " attempts left.";
    }
    else {
        return "Game over! The number was " + secretNumber + ".";
    }
}

console.log(guessNumber(5, 7, 6));
console.log(guessNumber(8, 7, 5));
console.log(guessNumber(7, 7, 4));
console.log(guessNumber(3, 7, 1));
console.log(guessNumber(9, 7, 0));
console.log(guessNumber(7, 7, 6));
console.log(guessNumber(1, 1, 1));

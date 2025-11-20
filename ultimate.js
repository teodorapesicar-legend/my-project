function ultimateGame(q1, q2, q3, guess, secretNumber, attemptsLeft) {
    if ( q1 !== "8" && q2 !== "Paris" && q3 !== "yes" ) {
        return "Quiz failed! You got 0/3. No game.";
    }
    else if (
        ( q1 === "8" && q2 !== "Paris" && q3 !== "yes" ) ||
        ( q1 !== "8" && q2 === "Paris" && q3 !== "yes" ) ||
        ( q1 !== "8" && q2 !== "Paris" && q3 === "yes" )
    ) {
        return "Quiz failed! You got 1/3. No game.";
    }
    else if ( q1 !== "8" || q2 !== "Paris" || q3 !== "yes" ) {
        return "Quiz failed! You got 2/3. No game.";
    }
    else if ( attemptsLeft <= 0) {
        return "Game over! The number was " + secretNumber + ".";
    }
    else if ( guess === secretNumber ) {
        return "Correct! You win in " + (6 - attemptsLeft + 1) + " attempt(s).";
    }
    else if ( guess < secretNumber ) {
        return "Too low! " + (attemptsLeft - 1) + " attempts left.";
    }
    else if ( guess > secretNumber ) {
        return "Too high! " + (attemptsLeft - 1) + " attempts left.";
    }
}

console.log(ultimateGame("8", "Paris", "yes", 7, 7, 6));
console.log(ultimateGame("8", "London", "yes", 5, 7, 6));
console.log(ultimateGame("8", "Paris", "no", 3, 7, 5));
console.log(ultimateGame("8", "Paris", "yes", 9, 7, 5));
console.log(ultimateGame("8", "Paris", "yes", 1, 7, 1));
console.log(ultimateGame("8", "Paris", "yes", 5, 7, 0));
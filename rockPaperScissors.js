function rockPaperScissors(player1, player2) {
    if ( player1 === player2 ) {
        return "It's a tie!";
    } 
    else if ( player1 === 'rock' && player2 === 'scissors' ) {
        return "Player1 wins!";
    } 
    else if ( player1 === 'scissors' && player2 === 'paper' ) {
        return "Player1 wins!";
    } 
    else if ( player1 === 'paper' && player2 === 'rock' ) {
        return "Player1 wins!";
    } 
    else {
        return "Player2 wins!";
    }
}

console.log(rockPaperScissors("rock", "scissors"));
console.log(rockPaperScissors("paper", "rock"));
console.log(rockPaperScissors("scissors", "scissors"));
console.log(rockPaperScissors("paper", "scissors"));
console.log(rockPaperScissors("rock", "paper"));
console.log(rockPaperScissors("rock", "rock"));
console.log(rockPaperScissors("scissors", "paper"));
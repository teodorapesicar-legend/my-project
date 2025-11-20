function rps(player1, player2) {
    if (player1 === player2) {
        return "Tie";
    }
    switch (player1) {
        case "rock":
            if (player2 === "scissors") {
                return "Player 1 wins"
            }
            else {
                return "Player 2 wins"
            }
            break;
        case "paper":
            if (player2 === "rock") {
                return "Player 1 wins"
            }
            else {
                return "Player 2 wins"
            }
            break;
        case "scissors":
            if (player2 === "paper") {
                return "Player 1 wins"
            }
            else {
                return "Player 2 wins"
            }
            break;
            }
    }
console.log(rps("rock", "scissors"));
console.log(rps("paper", "rock"));
console.log(rps("scissors", "scissors"));
console.log(rps("paper", "scissors"));



function rps(player1, player2) {
    if (player1 === player2) {
        return "Tie";
    }

    switch (player1) {
        case "rock":
            return player2 === "scissors" ? "Player 1 wins" : "Player 2 wins";

        case "paper":
            return player2 === "rock" ? "Player 1 wins" : "Player 2 wins";

        case "scissors":
            return player2 === "paper" ? "Player 1 wins" : "Player 2 wins";
    }
}
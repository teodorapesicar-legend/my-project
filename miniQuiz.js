function runQuiz(answer1, answer2, answer3) {
    if ( answer1 === "8" && answer2 === "Paris" && answer3 === "yes" ) {
        return "Perfect! 3/3";
    }
    else if ( answer1 === "8" && 
        ( answer2 === "Paris" || answer3 === "yes" )
    ) {
        return "Great! 2/3";
    } 
    else if ( answer2 === "Paris" &&
        ( answer1 === "8" || answer3 === "yes" )
    ) {
        return "Great! 2/3";
    }
    else if (  answer3 === "yes" &&
        ( answer1 === "8" || answer2 === "Paris" )
    ) {
        return "Great! 2/3";
    }
    else if ( answer1 === "8" || answer2 === "Paris" || answer3 === "yes" ) {
        return "Not bad! 1/3";
    }
    else {
        return "Try again! 0/3";
    }
}

console.log(runQuiz("8", "Paris", "yes"));
console.log(runQuiz("8", "London", "yes"));
console.log(runQuiz("5", "Paris", "no"));
console.log(runQuiz("10", "Berlin", "no"));
console.log(runQuiz("8", "Paris", "no"));
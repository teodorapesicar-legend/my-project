function getGrade(name, score) {
    if ( score < 0 || score > 100 ) {
        return name + "'s score is invalid.";
    }
    else if ( score >= 90 ) {
        return name + " got an A!";
    }
    else if ( score >= 80 && score < 90 ) {
        return name + " got a B!";
    }
    else if ( score >= 70 && score < 80 ) {
        return name + " got a C!";
    }
    else if ( score >= 60 && score < 70 ) {
        return name + " got a D!";
    }
    else {
        return name + " got an F!";
    }
}

console.log(getGrade("Alice", 95));
console.log(getGrade("Bob", 82));
console.log(getGrade("Charlie", 75));
console.log(getGrade("Dana", 65));
console.log(getGrade("Eve", 50));
console.log(getGrade("Frank", -5));
console.log(getGrade("Grace", 105));
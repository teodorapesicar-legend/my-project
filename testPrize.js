function getsPrize(name, age, tickets, day, isMember) {
    if ( age < 10 ) {
        return name + ' gets a teddy bear!';
    } else if ( tickets > 150 ) {
        return name + ' gets a giant plush!';
    } else if ( tickets >= 80 && tickets <= 150 ) {
        return name + ' gets a free ride ticket!';
    } else if (isMember === true ) {
        return name + ' gets a free cotton candy!';
    } else if ( day === 'sunday' ) {
        return name + ' gets a balloon!';
    } else {
        return name + ' gets nothing.';
    }
}

console.log(getsPrize("Lily", 8, 50, "monday", false));
console.log(getsPrize("Tom", 25, 180, "wednesday", false));
console.log(getsPrize("Sara", 30, 120, "tuesday", false));
console.log(getsPrize("Mike", 35, 70, "sunday", true));
console.log(getsPrize("Anna", 28, 60, "sunday", false));
console.log(getsPrize("John", 40, 30, "friday", false));
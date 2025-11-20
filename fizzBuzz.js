function fizzBuzz(number) {
    if ( number % 3 === 0 && number % 5 === 0 ) {
        return "FizzBuzz";
    } 
    else if ( number % 3 === 0 ) {
        return "Fizz";
    } 
    else if ( number % 5 === 0 ) {
        return "Buzz";
    } 
    else {
        return number ;
    }
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(7));
console.log(fizzBuzz(30));
console.log(fizzBuzz(11));

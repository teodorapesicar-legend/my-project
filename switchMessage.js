/*
1 → "Monday: Back to work!"
2 → "Tuesday: Keep pushing!"
3 → "Wednesday: Hump day!"
4 → "Thursday: Almost there!"
5 → "Friday: TGIF!"
6 → "Saturday: Party time!"
7 → "Sunday: Rest day!"
*/

function dayMessage(day) {
    var answer = "";  // let instead of var
    switch(day) {
        case 1:
            answer = "Monday: Back to work!";
            break;
        case 2:
            answer = "Tuesday: Keep pushing!";
            break;
        case 3:
            answer = "Wednesday: Hump day!";
            break;
        case 4:
            answer = "Thursday: Almost there!";
            break;
        case 5:
            answer = "Friday: TGIF!";
            break;
        case 6:
            answer = "Saturday: Party time!";
            break;
        case 7:
            answer = "Sunday: Rest day!";
            break;
        default: 
            answer = "Invalid day!";
            break;
    }
    return answer;
}

console.log(dayMessage(9));
console.log(dayMessage(5));
console.log(dayMessage(1));


//Grok

function dayMessage(day) {
    switch (day) {
        case 1: return "Monday: Back to work!";
        case 2: return "Tuesday: Keep pushing!";
        case 3: return "Wednesday: Hump day!";
        case 4: return "Thursday: Almost there!";
        case 5: return "Friday: TGIF!";
        case 6: return "Saturday: Party time!";
        case 7: return "Sunday: Rest day!";
        default: return "Invalid day!";
    }
}
console.log(dayMessage(9));
console.log(dayMessage(5));
console.log(dayMessage(1));

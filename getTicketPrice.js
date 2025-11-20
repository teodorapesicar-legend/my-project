function getTicketPrice(age, isStudent) {
    if (typeof age !== "number" || age < 0) {
        return "Invalid age";
    }
    if (typeof isStudent !== "boolean") {
        return "Invalid student status";
    }
    let price;
    switch(true) {
        case age <= 12:
            price = 5;
            break;
        case age <= 17:
            price = 8;
            break;
        case age <= 64:
            price = 12;
            break;
        default:
            price = 7;
            break;
    }
    if (isStudent) {
        price -=2
    }
    return price;
}

// Normal cases
console.log(getTicketPrice(10, false));     // 5
console.log(getTicketPrice(10, true));      // 3
console.log(getTicketPrice(15, false));     // 8
console.log(getTicketPrice(20, true));      // 10
console.log(getTicketPrice(70, false));     // 7
console.log(getTicketPrice(70, true));      // 5

// Edge cases
console.log(getTicketPrice(0, false));      // 5
console.log(getTicketPrice(12, false));     // 5
console.log(getTicketPrice(13, false));     // 8
console.log(getTicketPrice(64, false));     // 12
console.log(getTicketPrice(65, false));     // 7

// BONUS: Invalid inputs
console.log(getTicketPrice(-5, false));     // "Invalid age"
console.log(getTicketPrice("20", true));    // "Invalid age"
console.log(getTicketPrice(20, "yes"));     // "Invalid student status"
console.log(getTicketPrice(20, null));      // "Invalid student status"
console.log(getTicketPrice(20, undefined)); // "Invalid student status"
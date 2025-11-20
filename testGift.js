function freeGift(name, age, value, day, member) {
    if ( age <= 12 ) {
        return name + ' gets free toy.';
    } else if ( value >= 200 ) {
        return name +' gets voucher to 50eur.';  
    } else if ( value >= 100 && value < 200 ) {
        return name + ' gets 20% off on next shopping.';
    } else if ( member === true ) {
        return name + ' gets free coffee.';
    } else if ( day === "friday" ) {
        return name + ' gets free ice cream.';
    } else {
        return name + ' does not get free gift.';
    }
}

console.log(freeGift("Ivana", 12, 75, "friday", false));
console.log(freeGift("Ana", 10, 50, "tuesday", false));
console.log(freeGift("Marko", 25, 250, "wednesday", false));
console.log(freeGift("Jovan", 30, 150, "monday", false));
console.log(freeGift("Sanja", 40, 80, "friday", true));
console.log(freeGift("Pera", 35, 70, "friday", false));
console.log(freeGift("Lana", 20, 40, "tuesday", false));
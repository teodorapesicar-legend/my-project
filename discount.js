function getDiscount(name, price, isMember, day) {
    if ( price > 200 && isMember === true && day === 'friday' ) {
        return name + " pays " + Math.round(price * 0.45) + "eur (30%+10%+15%=55% off)!";
    } else if ( price > 200 && isMember === true ) {
        return name + " pays " + Math.round(price * 0.6) + "eur (30%+10%=40% off)!";
    } else if ( price > 200 && day === 'friday' ) {
        return name + " pays " + Math.round(price * 0.55) + "eur (30%=15%=45% off)!";
    } else if ( price >= 100 && price <= 200 && isMember === true && day === 'friday' ) {
        return name + " pays " + Math.round(price * 0.55) + "eur (20%+10%+15%=45% off)!";
    } else if ( price >= 100 && price <= 200 && isMember === true ) {
        return name + " pays " + Math.round(price * 0.7) + "eur (20%=10%=30% off)!";
    }  else if ( price >= 100 && price <= 200 && day === 'friday') {
        return name + " pays " + Math.round(price * 0.65) + "eur (20%+15%=35% off)!";
    } else if ( price > 200 ) {
        return name + " pays " + Math.round(price * 0.7) + "eur (30% off)!";
    } else if ( price > 100 && price < 200 ) {
        return name + " pays " + Math.round(price * 0.8) + "eur (20% off)!";
    } else if ( isMember === true ) {
        return name + " pays " + Math.round(price * 0.9) + "eur (10% member bonus)!";
    } else if ( day === 'friday') {
        return name + " pays " + Math.round(price * 0.85) + "eur (15% friday bonus)!";
    } else {
        return name + " gets no discount.";
    }
}
console.log(getDiscount("Tom", 250, true, "friday"));
console.log(getDiscount("Sara", 120, true, "monday"));
console.log(getDiscount("Mike", 80, false, "friday"));
console.log(getDiscount("Anna", 50, false, "tuesday"));
console.log(getDiscount("Allison", 250, false, "monday"));



function getDiscount(name, price, isMember, day) {  // Corrected
    if (price > 200 && isMember && day === "friday") {
        return name + " pays " + Math.round(price * 0.45) + "€ (30% + 10% + 15% = 55% off)";
    }
    else if (price > 200 && isMember) {
        return name + " pays " + Math.round(price * 0.60) + "€ (30% + 10% = 40% off)";
    }
    else if (price > 200 && day === "friday") {
        return name + " pays " + Math.round(price * 0.55) + "€ (30% + 15% = 45% off)";
    }
    else if (price > 200) {
        return name + " pays " + Math.round(price * 0.70) + "€ (30% off)";
    }
    else if (price >= 100 && price <= 200 && isMember && day === "friday") {
        return name + " pays " + Math.round(price * 0.55) + "€ (20% + 10% + 15% = 45% off)";
    }
    else if (price >= 100 && price <= 200 && isMember) {
        return name + " pays " + Math.round(price * 0.70) + "€ (20% + 10% = 30% off)";
    }
    else if (price >= 100 && price <= 200 && day === "friday") {
        return name + " pays " + Math.round(price * 0.65) + "€ (20% + 15% = 35% off)";
    }
    else if (price >= 100 && price <= 200) {
        return name + " pays " + Math.round(price * 0.80) + "€ (20% off)";
    }
    else if (isMember) {
        return name + " pays " + Math.round(price * 0.90) + "€ (10% member bonus)";
    }
    else if (day === "friday") {
        return name + " pays " + Math.round(price * 0.85) + "€ (15% Friday bonus)";
    }
    else {
        return name + " pays " + price + "€ (no discount)";
    }
}
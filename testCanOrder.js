function canOrder(name, age, preg, meds) {
    if (age < 18 || age >= 75 || preg === true || meds === true) {
        return name + ' can not order Alcohol.'
    } else {
        return namee + ' can order Alcohol.'
    }
}
console.log(canOrder('Ana', 17, false, false));
console.log(canOrder('Marko', 23, false, true));
console.log(canOrder('Ivana', 27, true, false));
console.log(canOrder('Maja', 19, true, true));
console.log(canOrder('Dejan', 17, false, false));
console.log(canOrder('Sanja', 26, false, false));
console.log(canOrder('Luka', 28, false, false));
console.log(canOrder('Mirko', 76, false, false));
console.log(canOrder('Marinko', 75, false, true));
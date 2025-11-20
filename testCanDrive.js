function canDrive(name, age, licence) {
    if (age >= 70 && licence === true) {
        return name + ' Can Not drive.'
    } else if (age < 18 && licence === true) {
        return name + ' is Under 18 and Can Not drive Alone.'
    } else if (age < 18 && licence === false) {
        return name + ' is Under 18 and Can Not drive.';    
    } else if (age > 18 && licence === false) {
        return name + ' is Over 18 but Does Not have a Licence.'
    } else if (age < 18 || licence === false) {
        return name + ' is Under 18 or Does Not have a Licence.'
    } else if (age >= 18 && licence === true) {
        return name + ' Can drive.'
    }
}
console.log(canDrive('Marko', 20, false));
console.log(canDrive('Ana', 18, true));
console.log(canDrive('Ivana', 17, true));
console.log(canDrive('Mirko', 71, true));
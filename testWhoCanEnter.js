function whoCanEnter( name, age, ticket, vip) {
    if ( age < 18 || ticket === false) {
        return name + ' can not enter.';
    } else if ( age >= 18 && ticket === true) {
        return name + ' can enter.';
    } else if ( vip === true) {
        return name + ' can enter.';
    }
}

console.log(whoCanEnter('Marko', 17, false, true));
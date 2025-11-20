function checkPassword(password) {
    if ( password.length < 8 ) {
        return "Weak password.";
    }
    else if ( password.length >= 8 && 
    password !== password.toLowerCase() && 
    password !== password.replace(/[0-9]/g, ' ') && 
    password !== password.replace(/[^a-zA-Z0-9]/g, ' ')
    ) {
        return "Strong password!";
    }
    else if ( 
        password.length >= 8 && 
        ( 
        password !== password.toLowerCase() || 
        password !== password.replace(/[0-9]/g, ' ')
        )
    ) {
        return "Medium password.";
    }
    else {
        return "Weak password.";
    }
}

console.log(checkPassword("Abcd123!"));
console.log(checkPassword("Password123"));
console.log(checkPassword("abc123"));
console.log(checkPassword("ABCdef"));
console.log(checkPassword("12345678"));
console.log(checkPassword("aB1!"));
console.log(checkPassword(""));
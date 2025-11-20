function login(username, password, attempts) {
    if ( attempts >= 3 ) {
        return "Too many attempts. Account blocked.";
    }
    else if ( username === "admin" && password === "1234" ) {
        return "Login successful!";
    }
    else {
        return "Invalid username or password.";
    }
}

console.log(login("admin", "1234", 0));
console.log(login("admin", "wrong", 0));
console.log(login("user", "1234", 1));
console.log(login("admin", "1234", 3));
console.log(login("admin", "1234", 2));
console.log(login("guest", "pass", 5));
console.log(login("admin", "1234", 1));
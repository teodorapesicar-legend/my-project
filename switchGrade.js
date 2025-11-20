function getGrade(score) {
    if (score > 100 || score < 0) {
        return "Invalid";
    }
    
    const bucket = Math.floor(score / 10);

    switch(bucket) {
        case 10:
        case 9:
            return "A";
        case 8:
            return "B";
        case 7:
            return "C";
        case 6:
            return "D";
        default:
            return "F";
    }
}
console.log(getGrade(95)); 
console.log(getGrade(82)); 
console.log(getGrade(75)); 
console.log(getGrade(65)); 
console.log(getGrade(55)); 
console.log(getGrade(101)); 
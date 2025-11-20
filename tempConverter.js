function convertTemp(value, fromUnit, toUnit) {
    if ( fromUnit === "C" && toUnit === "F" ) {
        return value.toFixed(2) + " C = " + (value * 9/5 + 32).toFixed(2) + " F";
    } 
    else if ( fromUnit === "F" && toUnit === "C" ) {
        return value.toFixed(2) + " F = " + ((value - 32) * 5/9).toFixed(2) + " C";
    }
    else if ( fromUnit === "C" && toUnit === "K" ) {
        return value.toFixed(2) + " C = " + (value + 273.15).toFixed(2) + " K";
    } 
    else if ( fromUnit === "K" && toUnit === "C" ) {
        return value.toFixed(2) + " K = " + (value - 273.15).toFixed(2) + " C";
    }
    else if ( fromUnit === "F" && toUnit === "K" ) {
        return value.toFixed(2) + " F = " + ((value - 32) * 5/9 + 273.15).toFixed(2) + " K";
    }
    else if ( fromUnit === "K" && toUnit === "F" ) {
        return value.toFixed(2) + " K = " + ((value - 273.15) * 9/5 + 32).toFixed(2) + " F";
    }
}

console.log(convertTemp(0, "C", "F"));
console.log(convertTemp(32, "F", "C"));
console.log(convertTemp(100, "C", "K"));
console.log(convertTemp(0, "C", "K"));
console.log(convertTemp(98.6, "F", "C"));
console.log(convertTemp(212, "F", "K"));
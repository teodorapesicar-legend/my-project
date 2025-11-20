function trafficLight(color) {  //case insensitive
    switch(color) {
        case "red": return "Stop!";
        case "yellow": return "Slow down!";
        case "green": return "Go!";
        default: return "Invalid light color!";
    }
}

//casesensitive
function trafficLight(color) {
    if (typeof color !== "string") return "Invalid light color!";

    const c = color.toLowerCase();

    switch (c) {
        case "red":
            return "Stop!";
        case "yellow":
            return "Slow down!";
        case "green":
            return "Go!";
        default:
            return "Invalid light color!";
    }
}
console.log(trafficLight("red"));        // "Stop!"
console.log(trafficLight("RED"));        // "Stop!"
console.log(trafficLight("Red"));        // "Stop!"

console.log(trafficLight("yellow"));     // "Slow down!"
console.log(trafficLight("YELLOW"));     // "Slow down!"

console.log(trafficLight("green"));      // "Go!"
console.log(trafficLight("Green"));      // "Go!"

console.log(trafficLight("blue"));       // "Invalid light color!"
console.log(trafficLight("purple"));     // "Invalid light color!"
console.log(trafficLight(""));           // "Invalid light color!"
console.log(trafficLight(123));          // "Invalid light color!"
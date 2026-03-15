//* Task 04 :
//* Count vowels in a string
//* Logic
//* Write a function that takes a string and returns the count of vowels (a, e, i, o, u).
//* Hint: Loop through each character. Use .includes() or a regex to check if it's a vowel.

let vowelCounter = (str) => {
    if (typeof str !== "string") return null;

    str = str.toLowerCase();
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            counter++;
        }
    }
    return counter;
};

console.log("output :  ",vowelCounter("yograj rathod")); // --> output : 4
console.log("output :  ",vowelCounter("rythm")); // --> output : 0
console.log("output :  ",vowelCounter("RYTHM")); // --> output : 0 same for capital also
console.log("output :  ",vowelCounter()); // --> output : null if no string provided
console.log("output :  ",vowelCounter(123)); // --> output : null if not passing string  

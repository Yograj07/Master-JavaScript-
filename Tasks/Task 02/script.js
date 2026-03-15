//* Task 02 :Take a string input and return it reversed.
//* Do not use the built-in .reverse() method.
//* Hint: Use a for loop starting from the last index. Build a new string character by character.

//* Logic :
// ? Get the value from the last index to the first index of the given string and store it in a new variable and print it. As simple as that.

//* Function that accepts a string and print the reverse of it
let reverseString = (str) => {
  let revStr = "";

  if (typeof str === "string") {
    for (let i = str.length - 1; i >= 0; i--) {
      revStr += str[i];
    }
    return revStr;    
  
  } else {
    console.error("Enter a string !");
    return null;
  }
};

//* Reusablity of code
let result = reverseString("yograj");
let uprStr = result.toUpperCase();
console.log(`Reverse String in Uppercase : ${uprStr}`);

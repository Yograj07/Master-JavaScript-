//* Logic to filter numbers:
//* Save numbers which is multiply of 3 in --> fizzNums[]
//* Save numbers which is multiply of 5 in --> buzzNums[]
//* Save numbers which is multiply of both 5&3 in --> fizzBuzzNums[]
//* What is the problem case & learning senerio : enusring to filter FizzBuzzNums first , means the priority of the *3&5 is higher.

//* Implimentaion and my approach :

//* First create arrays for saving numbers(initial empty later i push numbers).

//* Creating function for filter numbers to the given range.
let filterNumbers = (range) => {
  // * Fixed bug 2
  let fizzNums = [];
  let buzzNums = [];
  let fizzBuzzNums = [];
  let rest = [];

  for (let i = 1; i <= range; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzNums.push(i);
    } else if (i % 3 === 0) {
      fizzNums.push(i);
    } else if (i % 5 === 0) {
      buzzNums.push(i);
    } else {
      rest.push(i);
    }
  }

  fizzBuzzNums.forEach((num) => {
    console.log(`FizzBuzz for : ${num}`);
  });

  fizzNums.forEach((num) => {
    console.log(`Fizz for : ${num}`);
  });

  buzzNums.forEach((num) => {
    console.log(`Buzz for : ${num}`);
  });
  rest.forEach((num) => {
    console.log(`Rest numbers : ${num}`);
  });
};

filterNumbers(100);


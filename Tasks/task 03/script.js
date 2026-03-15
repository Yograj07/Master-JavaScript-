//** Task 03 : Find the largest number in an array

//** Given an array of numbers, return the largest one. Don't use Math.max().
//** Hint: Start with a variable 'max = arr[0]', then loop and compare each element.

//** Logic: first initialize the first number / index as max , then traverse through the the array and check if arr[i] is grater than max if yes than store it in max and itterate it for all arr index

let findLargNum = function (arr) {
  if (arr.length === 0) {
    return null;
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

let largest1 = findLargNum([10, 20, 30, 40, 50]);
console.log(largest1);
let largest2 = findLargNum([30, 55, 70, 90]);
console.log(largest2);
//* return null if passes empty arr.
let largest3 = findLargNum([]);
console.log(largest3);

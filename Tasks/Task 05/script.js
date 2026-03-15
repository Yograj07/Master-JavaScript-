//* Task 05 :
//* Check if a number is prime
//* Logic
//* Return true if a given number is prime, false otherwise.
//* Hint: A prime is only divisible by 1 and itself. Loop from 2 to √n — if any i divides n evenly, it's not prime.

let isPrime = (n) => {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(isPrime(2));  // true
console.log(isPrime(7));  // true
console.log(isPrime(9));  // false
console.log(isPrime(10)); // false
console.log(isPrime(-2));  // false
console.log(isPrime(0));  // false


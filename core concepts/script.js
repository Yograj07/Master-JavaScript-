//* lexical scope in js

// function outer() {
//     let outerVar = "Hey this is outer variable";

//     function inner() {
//         console.log(outerVar);
//     }

//     inner();
// }
// outer();
//! console.log(outerVar); Reference error outerVar is not defined ! 


// * closure in js

// function counter ()
// {
//     let count=0;
//     return function()
//     {
//         count++;
//         console.log(count);
//     }
// }

// let runCounter = counter();

// runCounter(); // * 1
// runCounter(); // * 2
// runCounter(); // * 3
// runCounter(); // * 4
// runCounter(); // * 5

// let runCounterAgain = counter();

// runCounterAgain(); //* 1 ☑️ 6  ❌
// runCounterAgain(); //* 2 ☑️ 7  ❌ 
// runCounterAgain(); //* 3 ☑️ 8  ❌
// runCounterAgain(); //* 4 ☑️ 9  ❌
// runCounterAgain(); //* 5 ☑️ 10 ❌




// To use prompt...
const prompt = require("prompt-sync")({sigint:true});

// Binding to variables ...
// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log(luigisDebt);
//Output: → 105

/////////////////////////////////

// Control Flow
    /* 
    The function Number converts a value to a number. We need that conversion because the result
     of prompt is a string value, and we want a number. There are similar functions called String 
     and Boolean that convert values to those types. 
    */
// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " + theNumber * theNumber);
// Example output: Your number is the square root of 9



// Control Flow (with conditional statements)
    /* 
    Conditional execution is created with the if keyword in JavaScript. In the simple case,
     we want some code to be executed if, and only if, a certain condition holds. 
     We might, for example, want to show the square of the input only if the input is actually a number.
    */

// let theNumber = Number(prompt(`Pick a number `));
// if (!Number.isNaN(theNumber)) {
//   console.log(`${theNumber} is the square root of ${theNumber * theNumber}`);
// } else {
//     console.log('that was not a number')
// }
// If Number.isNan is false, return square root of number... Otherwise, the user did not enter a valid number

// Same statement, but written as a one line conditional...
// let theNumber = Number(prompt(`Pick a number `));
// if (!Number.isNaN(theNumber)) console.log(`${theNumber} is the square root of ${theNumber * theNumber}`);

// Multiple line conditional If...Else statement
// let num = Number(prompt(`Pick a number `));
// if (num < 10) {
//     console.log("Small");
//   } else if (num < 100) {
//     console.log("Medium");
//   } else {
//     console.log("Large");
// }

///////////////////////////////

// Control flow with loops...
    /*
    Looping control flow allows us to go back to some point in the program where we were before 
     and repeat it with our current program state. If we combine this with a binding that counts, 
     we can do something like this:
    */
// let number = 0;
// while (number <= 120) {
//   console.log(number);
//   number = number + 2;
// }
// OUTput:
// → 0
// → 2
//   … etcetera

// WHILE loops...
// This shows the value of 2 to the 10th power...
// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result);
// // → 1024

////////////////////////////

// Do...While loops
/*
    A do loop always executes its body at least once!!! ... and it starts testing 
     whether it should stop only after that first execution. To reflect this, 
     the test appears after the body of the loop.
*/
// let yourName;
// do {
//   yourName = prompt("Who are you? ");
// } while (!yourName);
// console.log(`Hey ${yourName}`);

///////////////////////////////////////////////////////////



// FOR loops...
// for (let number = 0; number <= 12; number = number + 2) {
//     console.log(number);
//   }
//   // → 0
//   // → 2
//   //   … etcetera

// //Checking 2 to the power of 10 with a FOR loop...
// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1) {
//   result = result * 2;
// }
// console.log(result);
// // → 1024   

////////////////////////////////////////////////////////////


// Breaking out of a loop
/*
    Having the looping condition produce false is not the only way a loop can finish. There is a special statement called break that has the effect of immediately jumping out of the enclosing loop.

    This program illustrates the break statement. It finds the first number that is both greater than or equal to 20 and divisible by 7.
*/
// for (let current = 20; ; current += 1) {
//   if (current % 7 == 0) {
//     console.log(current);
//     break;
//   }
// }
// // → 21


//////////////////////////////////////////////

// Switch statements
switch (prompt("What is the weather like?")) {
    case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
    case "sunny":
      console.log("Dress lightly.");
    case "cloudy":
      console.log("Go outside.");
      break;
    default:
      console.log("Unknown weather type!");
      break;
  }
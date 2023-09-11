
const prompt = require("prompt-sync")({sigint:true});

// CH3 - FUNCTIONS  

/*
//  Defining a function
//  A function definition is a regular binding where the value of the binding is a function. For example, this code defines square to refer to a function that produces the square of a given number:

const square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144


*/ 



const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
  
  console.log(power(2, 10));
  // → 1024



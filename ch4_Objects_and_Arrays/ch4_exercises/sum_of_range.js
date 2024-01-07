// Range function
function range(start, end, step = 1) {
  let range = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      range.push(i);
    }
  }
  return range;
}

// Sum function
let numArray = [];
function sum(numArray) {
  let sum = 0; // Initialize sum to 0
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i]; // Accumulate the values of numArray elements
  }
  return sum; // Return the sum
}

console.log("from log #1", range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("from log #2", range(5, 2, -1));
// → [5, 4, 3, 2]
console.log("from log #3", sum(range(1, 10)));
// → 55

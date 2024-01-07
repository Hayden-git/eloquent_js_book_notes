/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.
*/

// FOR Loop
let arr1 = ["#"];
for (let index = 0; arr1.length < 8; index += 1) {
  console.log(arr1.join(" ")); // Print the current row
  arr1.push("#"); // Add one '#' to the row
}

console.log("Seperate FOR Loop");

// WHILE Loop
let arr2 = ["#"];
while (arr2.length < 8) {
  console.log(arr2.join(" ")); // Print the current row
  arr2.push("#"); // Add one '#' to the row
}

console.log("Seperate FOR Loop");

// Loop to count from 1 to 5...
let arr3 = [];
for (let num = 1; arr3.length < 5; num += 1) {
  arr3.push(num); // Add next number to the row
  console.log(arr3.join(", ")); // Print the current row
}
/* 
    OUTPUT: 
    1
    1, 2
    1, 2, 3
    1, 2, 3, 4
    1, 2, 3, 4, 5
*/

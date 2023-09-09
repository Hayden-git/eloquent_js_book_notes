
/*
    Chessboard
    Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

    Passing this string to console.log should show something like this:

     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # #
    When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

const prompt = require("prompt-sync")({sigint:true});

// STEP 1) Let the user pick a number, whatever they enter will be the Width and Height ( W x H ) for the board...
let widthAndHeight = Number(prompt(`Pick a number `));

// STEP 2) Create an empty string to store the chessboard pattern.
let chessboard = '';

// STEP 3) Use nested loops to iterate over rows and columns... 2-D looping
for (let row = 0; row < widthAndHeight; row++) {
    for (let column = 0; column < widthAndHeight; column++) {
    // STEP STEP 4) Within the loops, use conditional logic to determine whether to add a space or a "#" character based on the sum of the row and column indices.
        if ((row + column) % 2 == 0) {
            // STEP 5) Add a blank space " "
            chessboard += " "
        } else {
            // STEP 6) Otherwise, add a "#" character if the sum of row _ column is not even... ADD the "#" to chessboard!
            chessboard += "#"
        }
    }
    // STEP 7) After finishing a row (inner loop), append a newline character ("\n") to start a new line. ADD the "\n" new line character to the chessboard!
    chessboard += "\n"
}
// STEP 8) Output the chessboard pattern
console.log(chessboard)
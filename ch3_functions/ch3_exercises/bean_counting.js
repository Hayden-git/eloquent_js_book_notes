function countBs(str) {
  for (var i = 0, count = 0; i < str.length; i++) {
    if (str[i] === "B") {
      count++;
    }
  }
  return count;
}

function countChar(string, character) {
  let count = 0; // Declare the 'count' variable before the loop
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

console.log("from countBs function:", countBs("Big Bears in Boulder, CO"));
// → 2
console.log("from countChar function:", countChar("kakkerlak", "k"));
// → 4

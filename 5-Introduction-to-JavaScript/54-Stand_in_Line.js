// A queue is an abstract data structure that works like a queue at a store.
// New items are added to the back of the line (queue), and older items are taken
// from the front of the line.

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift();  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine([5,6,7,8,9], 1)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

// The `unshift()` method works like the `push()` method, but it adds items to
// the beginning of an array instead of the end.

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.

myArray.unshift(["Paul", 35]);

// You can also destructure an array in order to assign certain values to
// certain variables. You can use commas to snag the index you want. Example:
// `const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);` << this will give you 1, 2, 5

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b,a] = [a,b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

// This challenge is not a good example of what was demonstrated in the
// explanation of the concept because it doesn't take values from an array.

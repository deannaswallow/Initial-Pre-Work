// You can combine the rest parameter with destructuring.
// Additional notes, to help keep it straight: rest vs spread:
// Rest parameter: collects all remaining elements into an array.
// Spread operator: allows iterables( arrays / objects / strings )
// to be expanded into single arguments/elements.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [x,y, ...arr] = list;
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

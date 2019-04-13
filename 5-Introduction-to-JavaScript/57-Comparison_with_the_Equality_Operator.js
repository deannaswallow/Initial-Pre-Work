// The equality operator returns `true` if the two values are equal, and it
// returns `false` if they aren't. Using the == operator allows for type coercion.

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(testEqual(10));

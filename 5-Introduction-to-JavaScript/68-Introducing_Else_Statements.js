// Else statement blocks will execute if the `if` block doesn't because of a
// false condition.

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else  {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

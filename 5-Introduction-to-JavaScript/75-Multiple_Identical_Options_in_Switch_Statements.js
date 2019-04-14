// If you omit a break statement, the code will keep executing even if the
// following case statements don't match. You can use this to set up statements
// that will execute for more than one option. See below for an example.
//
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }
  // Only change code above this line
  return answer;
}
// Change this value to test
sequentialSizes(8);

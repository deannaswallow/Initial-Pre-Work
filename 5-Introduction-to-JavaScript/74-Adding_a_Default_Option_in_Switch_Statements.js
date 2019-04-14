// A default statement will be executed if none of the case values match
// the value being tested. It can be considered the final 'else' in an
// if/else chain.

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  // Only change code above this line
  return answer;
}
// Change this value to test
switchOfStuff(5);

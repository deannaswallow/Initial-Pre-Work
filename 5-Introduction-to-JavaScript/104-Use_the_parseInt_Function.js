// Reviewed how parseInt() turns a string into an integer value. If the first
// character in the string can't be converted into a number, it will return NaN.

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

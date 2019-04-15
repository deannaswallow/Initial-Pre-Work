// Learned about radix (the base of a number), and how it's used as a second,
// optional argument to parseInt: `parseInt(string, radix);`

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

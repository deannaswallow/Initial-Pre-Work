// If you need/want to avoid type coercion, you can use the strict version,
// which is === .

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(testStrict("7"));

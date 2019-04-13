// Variables declared within a function have local scope. Function parameters
// also have local scope.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "la la la";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

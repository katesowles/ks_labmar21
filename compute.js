// var exports = {}; // Dummy declaration to let this file co-exist with test.js

//problem one
function sum(one, two) {
  return one + two;
}
exports.sum = sum;

/******************************************/
//problem two
function multiply(one, two) {
  return one * two;
}
exports.multiply = multiply;
/******************************************/
//problem three
function sumAndMultiply(one, two, three) {
  return [(one + two + three), (one * two * three)];
}
exports.sumAndMultiply = sumAndMultiply;
/******************************************/
//problem four
function sumArray(theArray) {
  var counter = 0;
  for (i=0; i < theArray.length; i++) {
    counter += theArray[i];
  }
  return counter;
}
exports.sumArray = sumArray;
//could use typeOf to make sure i'm returning an array!
/******************************************/
//problem five
function multiplyArray(theOtherArray) {
  var counter = 1;
  for (i=0; i < theOtherArray.length; i++) {
    counter = counter * theOtherArray[i];
  }
  return counter;
}
exports.multiplyArray = multiplyArray;

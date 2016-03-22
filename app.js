var exports = {}; // Dummy declaration to let this file co-exist with test.js

var sumOutput = document.getElementById('pAddOneOut');
sumOutput.textContent = sum(21,33);

var multiplyOutput = document.getElementById('pAddTwoOut');
multiplyOutput.textContent = multiply(3,5);

var sumAndMultiplyOutput = document.getElementById('pAddThreeOut');
sumAndMultiplyOutput.textContent = sumAndMultiply(1,3,7);

var sumArrayOutput = document.getElementById('pAddFourOut');
sumArrayOutput.textContent = sumArray([3,5,10]);

var multiplyArrayOutput = document.getElementById('pAddFiveOut');
multiplyArrayOutput.textContent = multiplyArray([3,5,10]);

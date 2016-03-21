//create new branch for each problem
//write tests first in test.js to make sure they fail
//APC the test.js file to prove we wrote them first!
//complete the first six questions in test.js
//write your coe as functions in compute.js

var assert = require('assert');
var compute = require('compute.js');

//problem one
  it ('test that 10 + 5 = 15', function () { assert(15 == compute.sum(10,5)); });
  it ('test that 8 + 16 = 24', function () { assert(24 == compute.sum(8,16)); });
  it ('test that 33 + 21 = 54', function () { assert(54 == compute.sum(33,21)); });

//problem two
  it ('test that 3 * 5 = 15'), function () { assert(15 == compute.multiply(3,5)); });
  it ('test that 2 * 4 = 8'), function () { assert(8 == compute.multiply(2,4)); });
  it ('test that 3 * 17 = 51'), function () { assert(51 == compute.multiply(3,17)); });

//problem three
  it ('test that it shows sum AND multiplication of 1, 3, 7'), function () { assert( == compute.sumAndMultiply(1,3,7)); });
  it ('test that it shows sum AND multiplication of 5, 8, 13'), function () { assert( == compute.sumAndMultiply(5,8,13)); });
  it ('test that it shows sum AND multiplication of 14, 15, 3'), function () { assert( == compute.sumAndMultiply(14,15,3)); });

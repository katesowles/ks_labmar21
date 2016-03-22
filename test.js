//create new branch for each problem
//write tests first in test.js to make sure they fail
//APC the test.js file to prove we wrote them first!
//complete the first six questions in test.js
//write your code as functions in compute.js

var assert = require('assert');
var compute = require('./compute.js');

describe('problem one', function() {

  it('test that 33 + 21 = 54', function () {
    assert(54 == compute.sum(33,21));
  });

  // it('test that 10 + 5 = 15', function () {
  //   assert(15 == compute.sum(10,5));
  // });
  //
  // it('test that 8 + 16 = 24', function () {
  //   assert(24 == compute.sum(8,16));
  // });
});

describe('problem two', function() {

  it('test that 3 * 5 = 15', function () {
    assert(15 == compute.multiply(3,5));
  });

  // it('test that 2 * 4 = 8', function () {
  //   assert(8 == compute.multiply(2,4));
  // });
  //
  // it('test that 3 * 17 = 51', function () {
  // assert(51 == compute.multiply(3,17));
  // });
});

describe('problem three', function() {

  it('test that it shows sum AND multiplication of 1, 3, 7', function () {
  assert.deepEqual(compute.sumAndMultiply(1,3,7), [11,21]);
  });

  // it('test that it shows sum AND multiplication of 5, 8, 13', function () {
  //   assert.deepEqual(compute.sumAndMultiply(5,8,13), [26,520]);
  // });
  //
  // it('test that it shows sum AND multiplication of 14, 15, 3', function () {
  //   assert.deepEqual(compute.sumAndMultiply(14,15,3), [32,630]);
  // });
});

describe('problem four', function() {

  it('test that theArray (3,5,10) returns with a sum of 18', function () {
    var theArray = [3,5,10];
    assert.equal(compute.sumArray(theArray), 18);
  });

  // it('test that theArray (2,7,8) returns with a sum of 17', function () {
  //   var theArray = [2,7,8];
  //   assert.deepEqual(compute.sumArray(theArray), 17);
  // });
  //
  // it('test that theArray (8,7,10) returns with a sum of 25', function () {
  //   var theArray = [8,7,10];
  //   assert.deepEqual(compute.sumArray(theArray), 25);
  // });
});

describe('problem five', function() {

  it('test that theArray (3,5,10) returns with a product of 150', function () {
    var theOtherArray = [3,5,10];
    assert.equal(compute.multiplyArray(theOtherArray), 150);
  });

  // it('test that theArray (2,7,8) returns with a product of 17', function () {
  //   var theArray = [2,7,8];
  //   assert.deepEqual(compute.multiplyArray(theArray), 112);
  // });
  //
  // it('test that theArray (8,7,10) returns with a product of 25', function () {
  //   var theArray = [8,7,10];
  //   assert.deepEqual(compute.multiplyArray(theArray), 560);
  // });
});

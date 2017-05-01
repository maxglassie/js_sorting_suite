const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe("BubbleSort", function(){
  it("can sort an array of numbers", function(){
    var array = [10, 9, 8, 7]
    var correctArray = [7, 8, 9, 10]
    var sortedArray = bubbleSort(array)

    assert.deepEqual(correctArray, sortedArray)
  });
});
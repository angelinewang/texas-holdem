var assert = require("assert");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// let arr = element.hand.map((element) => element.value);
// let n = arr.length;
// if (areConsecutive(arr, n) == true) console.log("Hand values are consecutive ");
// else console.log("Hand values are not consecutive ");
// function areConsecutive(arr, n) {
//   // Sort the array

//   arr.sort();
//   // checking the adjacent elements
//   for (var i = 1; i < n; i++) if (arr[i] != arr[i - 1] + 1) return false;

//   return true;
// }

// const expect = chai.expect;

// describe("Showdown Tests", () => {
//   it("Array.isConsecutive", () => {
//     expect(areConsecutive(1, 2, 3, 4, 5)).to.be.true;
//     expect([1, 2, 3, 4].isConsecutive(1)).to.be.true;
//     expect([5, 6, 7, 8].isConsecutive()).to.be.true;
//     expect([6, 5, 7, 8, 9].isConsecutive()).to.be.false;
//     expect([1, 2, 3, 4].isConsecutive(2)).to.be.false;
//   });
// });

// // 1. NEED TO FINISH THE TESTS for: consecutive & royal flush

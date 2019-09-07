const snail = require("./index");

const testA = [
  []
];

const testB = [
  [1]
];

const testC = [
  [1, 2],
  [4, 3]
];

const testD = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];

const testE = [
  [ 1,  2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7]
];

const testF = [
  [ 1,  2,  3,  4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9]
];

console.assert(snail(testA).join() == "");
console.assert(snail(testB).join() == "1");
console.assert(snail(testC).join() == "1,2,3,4");
console.assert(snail(testD).join() == "1,2,3,4,5,6,7,8,9");
console.assert(snail(testE).join() == "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16");
console.assert(snail(testF).join() == "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25");

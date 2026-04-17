const { getArrayDepth, flattenArray } = require("../getArrayDepth.js");

const data = [1, [2, [3, [4]], 5]];

console.log(getArrayDepth(data)); // 4
console.log(flattenArray(data)); // [1, 2, 3, 4, 5]

const { removeDuplicates } = require("../removeDuplicates");

console.log(removeDuplicates([])); // []
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
console.log(
  removeDuplicates([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
  ]),
); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // [1]

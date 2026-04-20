/**
 * Roman Numerals Encoder - Algorithms
 * 
 * Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a 
 * string containing the Roman Numeral representation of that integer.

 * Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping 
 * any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

 * In Roman numerals:

    * 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
    * 2008 is written as 2000=MM, 8=VIII; or MMVIII.
    * 1666 uses each Roman symbol in descending order: MDCLXVI.
 * Example:

    1 -->       "I"
    1000 -->       "M"
    1666 --> "MDCLXVI"
 * Help:

    Symbol    Value
    I          1
    V          5
    X          10
    L          50
    C          100
    D          500
    M          1,000
 * [More about roman numerals](https://en.wikipedia.org/wiki/Roman_numerals)
 * 
 * @param {*} number 
 * @returns 
 */

export default function solution(number) {
  if (!Number.isInteger(number) || number < 1 || number > 3999) return "";

  const map = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (const { value, symbol } of map) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }

  return result;
}

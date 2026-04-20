/**
 * Number Format - Regular Expressions, Fundamentals
 * 
 * Format any integer provided into a string with "," (commas) in the correct places.

 * Example:
    For n = 100000 the function should return '100,000';
    For n = 5678545 the function should return '5,678,545';
    for n = -420902 the function should return '-420,902'.
 * 
 * @param {*} number 
 * @returns 
 */

function numberFormat(number) {
  if (typeof number !== "number") return "";

  const sign = number < 0 ? "-" : "";

  return (
    sign +
    Math.abs(number)
      .toString()
      .split("")
      .reverse()
      .reduce((acc, digit, i) => {
        return digit + (i && i % 3 === 0 ? "," : "") + acc;
      }, "")
  );
}

export default numberFormat;

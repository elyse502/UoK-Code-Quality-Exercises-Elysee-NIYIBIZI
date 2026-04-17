function findEvenNumbers(numbers) {
  if (!Array.isArray(numbers)) return [];

  return numbers.filter((num) => num % 2 === 0);
}

export default findEvenNumbers;

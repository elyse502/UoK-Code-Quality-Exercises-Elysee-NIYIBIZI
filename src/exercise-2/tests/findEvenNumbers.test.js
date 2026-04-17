import findEvenNumbers from "../findEvenNumbers";

describe("FIND_EVEN_NUMBERS", () => {
  test("Finds even numbers correctly", () => {
    expect(findEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(findEvenNumbers([2, 4, 6])).toEqual([2, 4, 6]);
    expect(findEvenNumbers([1, 3, 5])).toEqual([]);
  });

  test("Handles empty array", () => {
    expect(findEvenNumbers([])).toEqual([]);
  });

  test("Returns empty array for invalid input", () => {
    expect(findEvenNumbers(null)).toEqual([]);
    expect(findEvenNumbers(undefined)).toEqual([]);
    expect(findEvenNumbers("123")).toEqual([]);
  });

  test("Handles negative numbers and zero", () => {
    expect(findEvenNumbers([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
  });

  test("Handles decimal numbers", () => {
    expect(findEvenNumbers([1.5, 2, 3.2, 4])).toEqual([2, 4]);
  });
});

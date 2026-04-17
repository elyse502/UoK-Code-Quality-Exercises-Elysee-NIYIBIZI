import sumArray from "../sumArray";

describe("SUM_ARRAY", () => {
  test("Sums positive numbers", () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
    expect(sumArray([10, 20, 30])).toBe(60);
  });

  test("Handles single element arrays", () => {
    expect(sumArray([5])).toBe(5);
  });

  test("Handles empty array", () => {
    expect(sumArray([])).toBe(0);
  });

  test("Returns 0 for invalid input", () => {
    expect(sumArray(null)).toBe(0);
    expect(sumArray(undefined)).toBe(0);
    expect(sumArray("123")).toBe(0);
    expect(sumArray({})).toBe(0);
  });

  test("Handles negative numbers", () => {
    expect(sumArray([-1, -2, -3])).toBe(-6);
    expect(sumArray([-10, 5, 3])).toBe(-2);
  });

  test("Handles mixed positive and negative numbers", () => {
    expect(sumArray([10, -5, 3, -2])).toBe(6);
  });

  test("Handles decimal numbers", () => {
    expect(sumArray([1.5, 2.5, 3])).toBe(7);
  });
});

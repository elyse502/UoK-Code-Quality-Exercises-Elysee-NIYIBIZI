import calculateAverage from "../calculateAverage";

describe("CALCULATE_AVERAGE", () => {
  test("Calculates average correctly", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
    expect(calculateAverage([10, 20, 30, 40])).toBe(25);
    expect(calculateAverage([5])).toBe(5);
    expect(calculateAverage([0, 0, 0])).toBe(0);
  });

  test("Handles negative and mixed numbers", () => {
    expect(calculateAverage([-1, -2, -3])).toBe(-2);
    expect(calculateAverage([-10, 10])).toBe(0);
    expect(calculateAverage([5, -5, 10, -10])).toBe(0);
  });

  test("Returns 0 for invalid input or empty array", () => {
    expect(calculateAverage([])).toBe(0);
    expect(calculateAverage(null)).toBe(0);
    expect(calculateAverage(undefined)).toBe(0);
    expect(calculateAverage("123")).toBe(0);
  });

  test("Handles decimal numbers", () => {
    expect(calculateAverage([1.5, 2.5, 3.5])).toBe(2.5);
    expect(calculateAverage([0.1, 0.2, 0.3])).toBeCloseTo(0.2);
  });
});

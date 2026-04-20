import fibonacciUpTo from "../fibonacciUpTo";

describe("FIBONACCI_UP_TO", () => {
  test("Generates sequence up to given number", () => {
    expect(fibonacciUpTo(10)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    expect(fibonacciUpTo(20)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("Handles small numbers", () => {
    expect(fibonacciUpTo(0)).toEqual([0]);
    expect(fibonacciUpTo(1)).toEqual([0, 1, 1]);
  });

  test("Handles invalid input", () => {
    expect(fibonacciUpTo(-5)).toEqual([]);
    expect(fibonacciUpTo("10")).toEqual([]);
    expect(fibonacciUpTo(null)).toEqual([]);
  });
});

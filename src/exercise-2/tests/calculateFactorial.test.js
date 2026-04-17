import {
  calculateFactorial,
  calculateFactorialRecursive,
} from "../calculateFactorial";

describe("FACTORIAL", () => {
  test("Calculates factorial correctly (iterative)", () => {
    expect(calculateFactorial(0)).toBe(1);
    expect(calculateFactorial(1)).toBe(1);
    expect(calculateFactorial(3)).toBe(6);
    expect(calculateFactorial(5)).toBe(120);
    expect(calculateFactorial(7)).toBe(5040);
  });

  test("Calculates factorial correctly (recursive)", () => {
    expect(calculateFactorialRecursive(0)).toBe(1);
    expect(calculateFactorialRecursive(1)).toBe(1);
    expect(calculateFactorialRecursive(3)).toBe(6);
    expect(calculateFactorialRecursive(5)).toBe(120);
    expect(calculateFactorialRecursive(7)).toBe(5040);
  });

  test("Returns undefined for invalid input", () => {
    expect(calculateFactorial(-1)).toBeUndefined();
    expect(calculateFactorial("5")).toBeUndefined();
    expect(calculateFactorial(null)).toBeUndefined();
    expect(calculateFactorial()).toBeUndefined();

    expect(calculateFactorialRecursive(-1)).toBeUndefined();
    expect(calculateFactorialRecursive("5")).toBeUndefined();
    expect(calculateFactorialRecursive(null)).toBeUndefined();
    expect(calculateFactorialRecursive()).toBeUndefined();
  });

  test("Handles larger numbers consistently", () => {
    expect(calculateFactorial(10)).toBe(3628800);
    expect(calculateFactorialRecursive(10)).toBe(3628800);
  });
});

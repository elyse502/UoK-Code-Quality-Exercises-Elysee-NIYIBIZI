import { multiply } from "../multiply";

describe("MULTIPLY", () => {
  test("Multiplies two positive numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(10, 5)).toBe(50);
  });

  test("Handles zero", () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(10, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  test("Handles negative numbers", () => {
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(-2, -3)).toBe(6);
    expect(multiply(2, -3)).toBe(-6);
  });

  test("Handles decimal numbers", () => {
    expect(multiply(1.5, 2)).toBe(3);
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });
});

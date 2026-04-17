import { maxNumber } from "../maxNumber";

describe("MAX_NUMBER", () => {
  test("Finds the maximum of three positive numbers", () => {
    expect(maxNumber(1, 2, 3)).toBe(3);
    expect(maxNumber(10, 5, 8)).toBe(10);
    expect(maxNumber(7, 7, 7)).toBe(7);
  });

  test("Handles negative numbers", () => {
    expect(maxNumber(-1, -2, -3)).toBe(-1);
    expect(maxNumber(-10, -5, -8)).toBe(-5);
  });

  test("Handles mixed positive and negative numbers", () => {
    expect(maxNumber(-10, 0, 10)).toBe(10);
    expect(maxNumber(-5, 5, -1)).toBe(5);
  });

  test("Handles decimal numbers", () => {
    expect(maxNumber(1.5, 2.5, 2.4)).toBe(2.5);
  });

  test("Handles equal values", () => {
    expect(maxNumber(100, 100, 100)).toBe(100);
  });
});

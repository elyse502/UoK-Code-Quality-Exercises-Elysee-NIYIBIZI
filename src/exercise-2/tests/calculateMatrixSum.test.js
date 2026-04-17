import calculateMatrixSum from "../calculateMatrixSum";

describe("CALCULATE_MATRIX_SUM", () => {
  test("Calculates sum of a valid matrix", () => {
    expect(
      calculateMatrixSum([
        [1, 2],
        [3, 4],
      ]),
    ).toBe(10);
    expect(
      calculateMatrixSum([
        [5, 5, 5],
        [1, 1, 1],
      ]),
    ).toBe(18);
    expect(calculateMatrixSum([[10]])).toBe(10);
  });

  test("Handles empty matrix", () => {
    expect(calculateMatrixSum([])).toBe(0);
  });

  test("Ignores non-array rows", () => {
    expect(calculateMatrixSum([[1, 2], null, [3]])).toBe(6);
    expect(calculateMatrixSum([[1], "invalid", [2, 3]])).toBe(6);
  });

  test("Returns 0 for invalid input", () => {
    expect(calculateMatrixSum(null)).toBe(0);
    expect(calculateMatrixSum(undefined)).toBe(0);
    expect(calculateMatrixSum("not a matrix")).toBe(0);
  });

  test("Handles negative and decimal numbers", () => {
    expect(
      calculateMatrixSum([
        [-1, -2],
        [3, 4],
      ]),
    ).toBe(4);
    expect(calculateMatrixSum([[1.5, 2.5], [3]])).toBe(7);
  });
});

import { getArrayDepth, flattenArray } from "../getArrayDepth";

describe("ARRAY_UTILS", () => {
  describe("getArrayDepth", () => {
    test("Calculates depth of simple arrays", () => {
      expect(getArrayDepth([1, 2, 3])).toBe(1);
      expect(getArrayDepth([])).toBe(1);
    });

    test("Calculates depth of nested arrays", () => {
      expect(getArrayDepth([1, [2, 3]])).toBe(2);
      expect(getArrayDepth([1, [2, [3]]])).toBe(3);
      expect(getArrayDepth([[[[1]]]])).toBe(4);
    });

    test("Handles mixed nesting", () => {
      expect(getArrayDepth([1, [2, [3, [4]]], 5])).toBe(4);
    });

    test("Returns 0 for invalid input", () => {
      expect(getArrayDepth(null)).toBe(0);
      expect(getArrayDepth(undefined)).toBe(0);
      expect(getArrayDepth("not array")).toBe(0);
      expect(getArrayDepth(123)).toBe(0);
    });
  });

  describe("flattenArray", () => {
    test("Flattens simple nested arrays", () => {
      expect(flattenArray([1, [2, 3]])).toEqual([1, 2, 3]);
      expect(flattenArray([1, [2, [3]]])).toEqual([1, 2, 3]);
    });

    test("Flattens deeply nested arrays", () => {
      expect(flattenArray([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
    });

    test("Handles already flat arrays", () => {
      expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test("Returns empty array for invalid input", () => {
      expect(flattenArray(null)).toEqual([]);
      expect(flattenArray(undefined)).toEqual([]);
      expect(flattenArray("not array")).toEqual([]);
    });

    test("Handles empty array", () => {
      expect(flattenArray([])).toEqual([]);
    });
  });
});

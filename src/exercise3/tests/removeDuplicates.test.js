import removeDuplicates from "../removeDuplicates";

describe("REMOVE_DUPLICATES", () => {
  test("Removes duplicate numbers", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 4])).toEqual([1, 2, 3, 4]);
    expect(removeDuplicates([5, 5, 5, 5])).toEqual([5]);
  });

  test("Removes duplicate strings", () => {
    expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });

  test("Handles already unique arrays", () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("Handles empty array", () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  test("Returns empty array for invalid input", () => {
    expect(removeDuplicates(null)).toEqual([]);
    expect(removeDuplicates(undefined)).toEqual([]);
    expect(removeDuplicates("123")).toEqual([]);
    expect(removeDuplicates(123)).toEqual([]);
    expect(removeDuplicates({})).toEqual([]);
  });

  test("Preserves order of first occurrence", () => {
    expect(removeDuplicates([3, 1, 3, 2, 1])).toEqual([3, 1, 2]);
  });

  test("Handles mixed types", () => {
    expect(removeDuplicates([1, "1", 1, true, true])).toEqual([1, "1", true]);
  });
});

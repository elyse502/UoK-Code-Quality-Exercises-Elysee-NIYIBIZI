import reverseString from "../reverseString";

describe("REVERSE_STRING", () => {
  test("Reverses normal strings", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("abcdef")).toBe("fedcba");
  });

  test("Handles empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("Returns empty string for invalid input", () => {
    expect(reverseString(null)).toBe("");
    expect(reverseString(undefined)).toBe("");
    expect(reverseString(123)).toBe("");
    expect(reverseString(true)).toBe("");
    expect(reverseString({})).toBe("");
  });

  test("Handles strings with spaces and special characters", () => {
    expect(reverseString("a b c")).toBe("c b a");
    expect(reverseString("!@#")).toBe("#@!");
  });

  test("Preserves character order reversal exactly", () => {
    expect(reverseString("a1b2c3")).toBe("3c2b1a");
  });
});

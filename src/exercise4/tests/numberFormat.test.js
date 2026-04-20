import numberFormat from "../numberFormat";

describe("NUMBER_FORMAT", () => {
  test("Formats positive integers with commas", () => {
    expect(numberFormat(1000)).toBe("1,000");
    expect(numberFormat(1000000)).toBe("1,000,000");
    expect(numberFormat(123456789)).toBe("123,456,789");
  });

  test("Formats small numbers without commas", () => {
    expect(numberFormat(0)).toBe("0");
    expect(numberFormat(12)).toBe("12");
    expect(numberFormat(999)).toBe("999");
  });

  test("Handles negative numbers", () => {
    expect(numberFormat(-1000)).toBe("-1,000");
    expect(numberFormat(-1234567)).toBe("-1,234,567");
    expect(numberFormat(-50)).toBe("-50");
  });

  test("Handles single digit numbers", () => {
    expect(numberFormat(5)).toBe("5");
    expect(numberFormat(-5)).toBe("-5");
  });

  test("Returns empty string for invalid input", () => {
    expect(numberFormat("1000")).toBe("");
    expect(numberFormat(null)).toBe("");
    expect(numberFormat(undefined)).toBe("");
    expect(numberFormat({})).toBe("");
  });
});

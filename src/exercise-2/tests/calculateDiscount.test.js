import calculateDiscount from "../calculateDiscount";

describe("CALCULATE_DISCOUNT", () => {
  test("Calculates discount correctly for amounts above 100", () => {
    expect(calculateDiscount(150)).toBe(15);
    expect(calculateDiscount(200)).toBe(20);
  });

  test("Calculates discount correctly for amounts 100 or below", () => {
    expect(calculateDiscount(100)).toBe(5);
    expect(calculateDiscount(50)).toBe(2.5);
    expect(calculateDiscount(0)).toBe(0);
  });

  test("Returns 0 for invalid input", () => {
    expect(calculateDiscount(-10)).toBe(0);
    expect(calculateDiscount("100")).toBe(0);
    expect(calculateDiscount(null)).toBe(0);
    expect(calculateDiscount(undefined)).toBe(0);
  });

  test("Handles decimal amounts", () => {
    expect(calculateDiscount(99.99)).toBeCloseTo(4.9995);
    expect(calculateDiscount(120.5)).toBeCloseTo(12.05);
  });
});

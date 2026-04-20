import solution from "../romanNumeralsDecoder";

describe("ROMAN_TO_INTEGER", () => {
  test("Converts basic numerals", () => {
    expect(solution("I")).toBe(1);
    expect(solution("V")).toBe(5);
    expect(solution("X")).toBe(10);
    expect(solution("L")).toBe(50);
    expect(solution("C")).toBe(100);
    expect(solution("D")).toBe(500);
    expect(solution("M")).toBe(1000);
  });

  test("Handles additive cases", () => {
    expect(solution("II")).toBe(2);
    expect(solution("VIII")).toBe(8);
    expect(solution("XV")).toBe(15);
  });

  test("Handles subtractive cases", () => {
    expect(solution("IV")).toBe(4);
    expect(solution("IX")).toBe(9);
    expect(solution("XL")).toBe(40);
    expect(solution("XC")).toBe(90);
    expect(solution("CD")).toBe(400);
    expect(solution("CM")).toBe(900);
  });

  test("Handles complex numbers", () => {
    expect(solution("MCMXC")).toBe(1990);
    expect(solution("MMVIII")).toBe(2008);
    expect(solution("MDCLXVI")).toBe(1666);
  });

  test("Handles invalid input", () => {
    expect(solution("")).toBe(0);
    expect(solution(null)).toBe(0);
    expect(solution(undefined)).toBe(0);
    expect(solution(123)).toBe(0);
  });
});

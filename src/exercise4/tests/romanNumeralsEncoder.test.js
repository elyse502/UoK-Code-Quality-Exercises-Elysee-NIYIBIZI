import solution from "../romanNumeralsEncoder";

describe("INTEGER_TO_ROMAN", () => {
  test("Converts basic numbers", () => {
    expect(solution(1)).toBe("I");
    expect(solution(5)).toBe("V");
    expect(solution(10)).toBe("X");
    expect(solution(50)).toBe("L");
    expect(solution(100)).toBe("C");
    expect(solution(500)).toBe("D");
    expect(solution(1000)).toBe("M");
  });

  test("Handles subtractive cases", () => {
    expect(solution(4)).toBe("IV");
    expect(solution(9)).toBe("IX");
    expect(solution(40)).toBe("XL");
    expect(solution(90)).toBe("XC");
    expect(solution(400)).toBe("CD");
    expect(solution(900)).toBe("CM");
  });

  test("Handles complex numbers", () => {
    expect(solution(1990)).toBe("MCMXC");
    expect(solution(2008)).toBe("MMVIII");
    expect(solution(1666)).toBe("MDCLXVI");
  });

  test("Handles edge cases", () => {
    expect(solution(3999)).toBe("MMMCMXCIX");
    expect(solution(0)).toBe("");
    expect(solution(4000)).toBe("");
  });

  test("Handles invalid input", () => {
    expect(solution("1000")).toBe("");
    expect(solution(null)).toBe("");
    expect(solution(undefined)).toBe("");
  });
});

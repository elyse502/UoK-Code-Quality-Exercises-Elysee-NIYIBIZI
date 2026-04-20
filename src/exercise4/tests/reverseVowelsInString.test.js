import reverseVowels from "../reverseVowelsInString";

describe("REVERSE_VOWELS", () => {
  test("Reverses vowels in simple words", () => {
    expect(reverseVowels("Hello!")).toBe("Holle!");
    expect(reverseVowels("Tomatoes")).toBe("Temotaos");
  });

  test("Handles sentence with spaces", () => {
    expect(reverseVowels("Reverse Vowels In A String")).toBe(
      "RivArsI Vewols en e Streng",
    );
  });

  test("Handles no vowels", () => {
    expect(reverseVowels("rhythm")).toBe("rhythm");
  });

  test("Handles all vowels", () => {
    expect(reverseVowels("aeiou")).toBe("uoiea");
    expect(reverseVowels("AEIOU")).toBe("UOIEA");
  });

  test("Handles mixed case", () => {
    expect(reverseVowels("ApPlE")).toBe("EpPlA");
  });

  test("Handles invalid input", () => {
    expect(reverseVowels(null)).toBe("");
    expect(reverseVowels(undefined)).toBe("");
    expect(reverseVowels(123)).toBe("");
  });
});

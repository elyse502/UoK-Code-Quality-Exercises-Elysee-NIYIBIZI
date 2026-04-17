import isPrime from "../isPrime";

describe("IS_PRIME", () => {
  test("Returns true for prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
  });

  test("Returns false for non-prime numbers", () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(15)).toBe(false);
  });

  test("Returns false for negative numbers", () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(-7)).toBe(false);
  });

  test("Returns false for invalid input", () => {
    expect(isPrime(null)).toBe(false);
    expect(isPrime(undefined)).toBe(false);
    expect(isPrime("7")).toBe(false);
    expect(isPrime({})).toBe(false);
  });

  test("Handles larger prime and non-prime numbers", () => {
    expect(isPrime(97)).toBe(true);
    expect(isPrime(100)).toBe(false);
    expect(isPrime(101)).toBe(true);
  });
});

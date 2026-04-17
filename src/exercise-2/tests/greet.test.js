import { greet } from "../greet";

describe("GREET", () => {
  test("Greets user with name", () => {
    expect(greet("Alice")).toBe("Hello, Alice!");
    expect(greet("Bob")).toBe("Hello, Bob!");
  });

  test("Returns default greeting when no name is provided", () => {
    expect(greet()).toBe("Hello!");
    expect(greet(null)).toBe("Hello!");
    expect(greet(undefined)).toBe("Hello!");
    expect(greet("")).toBe("Hello!");
  });

  test("Handles different types of input", () => {
    expect(greet(123)).toBe("Hello, 123!");
    expect(greet(true)).toBe("Hello, true!");
  });
});

// Implement a JavaScript function to calculate the Fibonacci sequence up to a given number.

export default function fibonacciUpTo(n) {
  if (typeof n !== "number" || n < 0) return [];

  const result = [0, 1];

  while (true) {
    const next = result[result.length - 1] + result[result.length - 2];

    if (next > n) break;

    result.push(next);
  }

  return n === 0 ? [0] : result;
}

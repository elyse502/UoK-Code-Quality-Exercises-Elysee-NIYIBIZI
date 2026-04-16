function calculateFactorial(n) {
  if (typeof n !== "number" || n < 0) return undefined;

  if (n === 0 || n === 1) return 1;

  return Array.from({ length: n - 1 }, (_, i) => i + 2).reduce(
    (acc, num) => acc * num,
    1,
  );
}

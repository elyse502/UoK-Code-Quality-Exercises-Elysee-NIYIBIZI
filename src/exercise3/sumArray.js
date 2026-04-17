export function sumArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  return arr[0] + sumArray(arr.slice(1));
}

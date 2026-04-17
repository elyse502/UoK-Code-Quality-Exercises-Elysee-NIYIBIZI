export function removeDuplicates(arr) {
  if (!Array.isArray(arr)) return [];

  return [...new Set(arr)];
}

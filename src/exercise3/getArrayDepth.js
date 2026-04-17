function getArrayDepth(arr) {
  if (!Array.isArray(arr)) return 0;

  let maxDepth = 0;

  for (const item of arr) {
    if (Array.isArray(item)) {
      const depth = getArrayDepth(item);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
  }

  return maxDepth + 1;
}

function flattenArray(arr) {
  if (!Array.isArray(arr)) return [];

  return arr.flat(Infinity);
}

export { getArrayDepth, flattenArray };

function calculateMatrixSum(matrix) {
  if (!Array.isArray(matrix)) return 0;

  return matrix.reduce((total, row) => {
    if (!Array.isArray(row)) return total;

    return total + row.reduce((rowSum, value) => rowSum + value, 0);
  }, 0);
}

export default calculateMatrixSum;

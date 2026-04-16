function calculateDiscount(totalAmount) {
  if (typeof totalAmount !== "number" || totalAmount < 0) return 0;

  return totalAmount > 100 ? totalAmount * 0.1 : totalAmount * 0.05;
}

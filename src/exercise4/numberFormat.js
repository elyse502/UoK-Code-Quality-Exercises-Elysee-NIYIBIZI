function numberFormat(number) {
  if (typeof number !== "number") return "";

  const sign = number < 0 ? "-" : "";

  return (
    sign +
    Math.abs(number)
      .toString()
      .split("")
      .reverse()
      .reduce((acc, digit, i) => {
        return digit + (i && i % 3 === 0 ? "," : "") + acc;
      }, "")
  );
}

export default numberFormat;

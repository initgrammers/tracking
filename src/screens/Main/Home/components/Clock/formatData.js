export const formatNumber = (number) =>
  Number(number).toString().length > 1 ? number : '0' + number;

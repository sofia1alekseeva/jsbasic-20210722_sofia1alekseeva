function getMinMax(str) {
  // ваш код...
  const numbers = str.split(' ').filter(Number)
  const minmax = {};
  minmax.min = Math.min(...numbers);
  minmax.max = Math.max(...numbers);
  return minmax;
}

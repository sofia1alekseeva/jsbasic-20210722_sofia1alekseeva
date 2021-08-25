function getMinMax(str) {
  // ваш код...
  let numbers = str.split(' ').filter(Number)
  let minmax = {};
  minmax.min = Math.min(...numbers);
  minmax.max = Math.max(...numbers);
  return minmax;
}

function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (let key in salaries) {

    if (typeof salaries[key] == 'number') {
      if (isNaN(salaries[key]) || !isFinite(salaries[key])) continue;
      sum = sum + salaries[key];
    }
    else if (typeof salaries[key] != 'number') continue;
    else {
      return 0;
    }
  }
  return sum;
}

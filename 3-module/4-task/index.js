function showSalary(users, age) {
  // ваш код...
  let usersSalary = users.filter(item => item.age <= age).map(item => item.name + ", " + item.balance).join('\n');
  return usersSalary;
}

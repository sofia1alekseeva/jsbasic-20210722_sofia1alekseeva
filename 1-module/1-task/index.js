function factorial(n) {
  // ваш код...
  if (n == 0) {
    return 1;
  } else {
    for (let i = 1; i <= n; i++) {
      n = n * factorial(n - i);
      return n;
    }
  }
}

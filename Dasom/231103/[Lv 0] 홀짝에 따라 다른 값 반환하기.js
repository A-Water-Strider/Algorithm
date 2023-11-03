function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; ++i) {
    if (n % 2 === 1) {
      if (i % 2 === 1) result += i;
    } else {
      if (i % 2 === 0) result += i * i;
    }
  }
  return result;
}

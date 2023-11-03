function solution(names) {
  const result = names.filter((el, index) => index === 0 || index % 5 === 0);
  return result;
}

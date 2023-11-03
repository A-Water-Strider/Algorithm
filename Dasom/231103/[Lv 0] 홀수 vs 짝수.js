function solution(num_list) {
  const odd = num_list
    .filter((el, index) => index % 2 === 1)
    .reduce((acc, cur) => acc + cur);
  const even = num_list
    .filter((el, index) => index % 2 === 0)
    .reduce((acc, cur) => acc + cur);
  return Math.max(odd, even);
}

function solution(num_list, n) {
  const nNextArr = num_list.slice(n);
  const nArr = num_list.slice(0, n);

  return [...nNextArr, ...nArr];
}

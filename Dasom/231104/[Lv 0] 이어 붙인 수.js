function solution(num_list) {
  const odd = num_list.filter((el) => el % 2 === 1).join("");
  const even = num_list.filter((el) => el % 2 === 0).join("");
  const result = Number(odd) + Number(even);

  return result;
}

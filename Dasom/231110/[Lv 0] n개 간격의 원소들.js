function solution(num_list, n) {
  const newArr = [];

  for (let i = 0; i < num_list.length; i += n) {
    newArr.push(num_list[i]);
  }

  return newArr;
}

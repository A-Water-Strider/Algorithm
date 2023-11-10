function solution(num_list) {
  const newArr = num_list.slice(num_list.length - 2);

  if (newArr[1] > newArr[0]) {
    const minusNum = newArr[1] - newArr[0];
    num_list.push(minusNum);
  } else {
    const doubleNum = newArr[1] * 2;
    num_list.push(doubleNum);
  }

  return num_list;
}

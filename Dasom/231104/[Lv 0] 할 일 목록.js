function solution(todo_list, finished) {
  const result = todo_list.filter((el, index) => finished[index] === false);
  return result;
}

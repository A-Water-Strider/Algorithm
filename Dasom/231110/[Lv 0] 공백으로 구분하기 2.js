function solution(my_string) {
  const arrMy_string = my_string.split(" ");

  return arrMy_string.filter((el) => el !== "");
}

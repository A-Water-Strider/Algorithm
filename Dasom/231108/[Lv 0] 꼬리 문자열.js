function solution(str_list, ex) {
  const mapStr_list = str_list.map((el) => el.includes(ex));
  const filterStr_list = str_list.filter(
    (_, index) => mapStr_list[index] === false
  );

  return filterStr_list.length !== 0 ? filterStr_list.join("") : "";
}

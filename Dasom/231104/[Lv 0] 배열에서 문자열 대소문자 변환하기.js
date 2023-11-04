function solution(strArr) {
  const result = [];

  for (let i = 0; i < strArr.length; ++i) {
    if (i % 2 === 1) {
      result.push(strArr[i].toUpperCase());
    } else {
      result.push(strArr[i].toLowerCase());
    }
  }
  return result;
}

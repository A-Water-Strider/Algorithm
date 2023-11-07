function solution(t, p) {
  const arrT = [...t];
  const newArr = [];
  for (let i = 0; i < t.length; ++i) {
    const sliceT = arrT.slice(i, i + p.length).join("");
    if (sliceT.length === p.length) {
      newArr.push(sliceT);
    } else {
      break;
    }
  }
  return newArr.filter((el) => el <= p).length;
}

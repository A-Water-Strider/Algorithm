function solution(arr1, arr2) {
  if (arr1.length === arr2.length) {
    const sumArr1 = arr1.reduce((acc, cur) => acc + cur);
    const sumArr2 = arr2.reduce((acc, cur) => acc + cur);

    return sumArr1 === sumArr2 ? 0 : sumArr1 > sumArr2 ? 1 : -1;
  } else {
    return arr1.length > arr2.length ? 1 : -1;
  }
}

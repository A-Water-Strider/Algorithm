function solution(arr, n) {
  const result = [];

  if (arr.length % 2 === 0) {
    for (let i = 0; i < arr.length; ++i) {
      if (i % 2 === 1) {
        result.push(arr[i] + n);
      } else {
        result.push(arr[i]);
      }
    }
  } else {
    for (let i = 0; i < arr.length; ++i) {
      if (i % 2 === 0) {
        result.push(arr[i] + n);
      } else {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

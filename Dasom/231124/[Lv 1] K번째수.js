function solution(array, commands) {
  const result = [];

  commands.forEach(([i, j, k]) => {
    const newArray = array.slice(i - 1, j).sort((a, b) => a - b);
    result.push(newArray[k - 1]);
  });
  return result;
}

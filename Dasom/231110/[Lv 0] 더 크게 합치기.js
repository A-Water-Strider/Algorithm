function solution(a, b) {
  const strA = String(a);
  const strB = String(b);

  return strA + strB > strB + strA ? Number(strA + strB) : Number(strB + strA);
}

function solution(s) {
  const engWord = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  engWord.forEach((el, idx) => (s = s.replaceAll(el, idx)));

  return Number(s);
}

function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach(([w, h]) => {
    const longLength = Math.max(w, h);
    const shortLength = Math.min(w, h);

    maxWidth = Math.max(longLength, maxWidth);
    maxHeight = Math.max(shortLength, maxHeight);
  });
  return maxWidth * maxHeight;
}

function solution(t, p) {
    const arr = []
    for(let i = 0; i < t.length - p.length + 1; i += 1) {
        arr[i] = t.slice(i, p.length + i)
    }
    return arr.filter((number) => number <= p).length
}
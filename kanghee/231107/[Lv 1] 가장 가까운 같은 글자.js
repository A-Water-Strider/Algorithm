function solution(s) {
    const arr = [...s]
    const result = [-1]
    for(let i = 1; i < s.length; i += 1) {   
        for(let j = 0; j < i; j += 1) {
            if(arr[i] !== arr[j]) {
                if(result.length !== i + 1) {
                    result[i] = -1                                        
                }
            } else {
                result[i] = i - j
            }
        }
    }
    return result
}
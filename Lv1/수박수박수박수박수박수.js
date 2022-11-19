function solution(n) {
  let result = ''
  let answer = n => {
    for(let i = 1; i <= n; i++){
      i % 2 == 1 ? result += '수' : result += '박'
      console.log(result);
    }
    return result
  }
  return answer(n)
}

console.log(solution(3));
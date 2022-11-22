function solution(x) {
  
  let twoDigitSum = [...x+''].map(Number).reduce((acc, cur) => { return acc += cur }, 0)

  console.log([...x.toString()].join("+"))
  return x % twoDigitSum == 0 ?  true : false;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
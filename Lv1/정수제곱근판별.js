function solution(n) {
  let a = 0;
  if (Number.isInteger(Math.sqrt(n))) {
    a = Math.sqrt(n)+1;
    return a ** 2;
  }
  else { return -1;}
  
}

console.log(solution(121))
console.log(solution(3))
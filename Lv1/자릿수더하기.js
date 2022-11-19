function solution(n){

  const num = n.toString();
  const arr = [...num]
  
  return answer = arr.reduce((acc, cur, idx) => acc += Number(cur) , 0);
}
console.log(solution(123))
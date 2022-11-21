function solution(n) {
  
  let arr = Array(n+1).fill(1);

  for (let i = 2; i * i <= n; i++){
    for (let j = i * i; j <= n; j+=i)
      arr[j] = 0;
  }
  return arr.filter((item => item == 1)).length - 2;
}
console.log(solution(10))
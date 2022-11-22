function solution(numbers) {

  let answer = [];

  for(let i = 0; i < numbers.length; i++){
    for(let j = i+1; j < numbers.length; j++){
      answer.push(numbers[i] + numbers[j]);
    }
  }
  const set = new Set(answer);
  answer = [...set].sort((a, b) => a - b);
  return answer;
}

console.log(solution([2,1,3,4,1]));
console.log(solution([5,0,2,7]));
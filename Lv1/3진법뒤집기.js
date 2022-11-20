function solution(n) {
  
  let tenaryString = n.toString(3);
  let tenaryStringReversed =  [...tenaryString].reverse().join('');
  let answer = parseInt(tenaryStringReversed,3);

  return answer;
}


console.log(solution(45));
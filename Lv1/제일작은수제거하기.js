function solution(arr) {
  // console.log(Math.min(...arr))
  // console.log('index = ', arr.indexOf(Math.min(...arr)))
  arr.splice(arr.indexOf(Math.min(...arr)),1);
  if( arr.length == 0) { arr = [-1]; }
  return arr;
}
console.log(solution([4,3,2,1]))
console.log(solution([10]))
console.log(solution([11,42,1,13]))
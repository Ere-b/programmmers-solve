function solution(arr, divisor) {
  let answer = arr.reduce((acc, cur, idx) => {
    if (cur % divisor == 0) acc[idx] = cur;
    else return acc;
    return acc;
  }, []);
  answer = answer.filter((element, i) => element !== undefined);

  return answer.length == 0
    ? [-1]
    : answer.sort((a, b) => {
        return a - b;
      });
}
console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));

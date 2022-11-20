function solution(sizes) {

  const sizesCopy = sizes;
  let leftMax = 0;
  let rightMax = 0;

  for(let i = 0; i < sizesCopy.length; i++){
      
    // 첫번째 요소가 큰 수가 오도록 배열 정렬
    if (sizesCopy[i][0] < sizesCopy[i][1]){
      let temp = sizesCopy[i][0];
      sizesCopy[i][0] = sizesCopy[i][1];
      sizesCopy[i][1] = temp;
    }
    // 0번째 idx에서 가장 큰수, 1번째 idx에서 가장 큰수 찾기
    for(let j = 0; j < sizesCopy[i].length; j++){
      if (j == 0){
        if(leftMax < sizesCopy[i][j]) { leftMax = sizesCopy[i][j] }
      }
      else {
        if(rightMax < sizesCopy[i][j]) { rightMax = sizesCopy[i][j] }
      }
    }
  }
  return leftMax * rightMax;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));
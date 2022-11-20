function solution(arr)
{
    const answer = [];
    // console.log(arrCopy)
    for(let i = 0; i < arr.length; i++){
      if(answer.length == 0) { answer.push(arr[i]); }
      else {
        if(answer.at(-1) === arr[i]) { continue; }
        else { answer.push(arr[i]); }
      }
        console.log(answer);
    }
    return 0;
}

// This code perform faster than 3 times above code
function bestSolution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}

console.log(solution([1,1,3,3,0,1,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1]));
// console.log(bestSolution([1,1,3,3,0,1,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1,1,3,3,1]));
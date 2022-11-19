function solution(s) {
    
  let arr = s.split(' ');
  
  return answer = arr.reduce((acc, cur, idx) => {
      let temp = [...cur]
      for(let i = 0; i < temp.length; i++){
          if(i % 2 == 0) { temp[i] = temp[i].toUpperCase(); }
          else { temp[i] = temp[i].toLowerCase(); }
      }
      idx === arr.length-1 ? temp = temp.join('') : temp = temp.join('') + ' ';
      return acc += temp;
    }, '');
}

console.log(solution('try hello world'));
console.log(solution('tRy HeLLo WORLD'));
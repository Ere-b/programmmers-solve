function solution(new_id) {
  // var answer = '';

  // case 1
  if(true){
    new_id = new_id.toLowerCase();
  }
  // case 2
  // if(new_id.search())
    // return new_id;
  if(new_id.includes('..')) {
    new_id = new_id.replace('..', '.');
  }
  // case 3
  // new_id.splice( )
  return new_id;
}


console.log(solution("...!@BaT#*..y.abcdefghijklm")) 
console.log(solution("z-+.^."))
console.log(solution("=.=")) 
console.log(solution("123_.def")) 
console.log(solution("abcdefghijklmn.p")) 
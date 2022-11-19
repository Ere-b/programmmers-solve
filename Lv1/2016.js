function solution(a, b) {
    
  const daysOfWeek = { 1:'FRI', 2: 'SAT', 3: 'SUN', 4: 'MON', 5: 'TUE', 6: 'WED', 0: 'THU' }
  const month31 = [1, 3, 5, 7, 8, 10]
  const month30 = [4, 6, 9, 11]
  
  let passedMonths = 0;
  
  for(let i = 1; i < a; i++){
      if (month31.includes(i))
        passedMonths += 31;
      else if (month30.includes(i))
        passedMonths += 30;
      else passedMonths += 29;
  }
  let passedDays = passedMonths + b;
  let answer = (passedDays) => { return daysOfWeek[passedDays % 7] }
  
  return answer(passedDays)
}
console.log(solution(2,24))
function solution(participant, completion) {
  
  let answer = 0;
  participantCopy = participant.sort();
  completionCopy = completion.sort();

  for(let i = 0; i < participantCopy.length; i++){
    if(participantCopy[i] !== completionCopy[i]) return participantCopy[i]
  }
}

console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"]))
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"]	))
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]))
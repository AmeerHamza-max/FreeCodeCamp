function getAverage(arr){
  let sum = 0;
  let length = arr.length;
  for(let i = 0 ; i < length; i++){
    sum = sum + arr[i];
  }
  
  let average = sum/length;
  return average;
}

function getGrade(score){
  if(score == 100){
    return "A+";
  }
  else if(score >= 90 && score <=99){
    return "A";
  }
  else if(score >= 80 && score <=89){
    return "B";
  }
  else if(score >= 70 && score <= 79){
    return "C";
  }
  else if(score >= 60 && score <= 69){
    return "D";
  }
  else if(score >= 0 && score <= 59){
    return "F";
  }
}
function hasPassingGrade(score){
  return getGrade(score) !=='F';
} 
function studentMsg(scores, studentScore){
  let average = getAverage(scores);
  let grade = getGrade(studentScore);
  let passed = hasPassingGrade(studentScore);

  if(passed){
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]))
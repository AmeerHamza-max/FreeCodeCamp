const questions =[
  {
  category:"Programming",
  question:"What does HTML stands for?",
  choices:[
    "Hyper Text Markup Language",
    "High Tech Modern Language",
    "Hyper Transfer Machine Language",
  ],
  answer:"Hyper Text Markup Language"
  },
  {
    category:"Programming",
    question:"Which language is used for styling web pages?",
    choices:[
      "HTML",
      "CSS",
      "Python",
    ],
    answer:"CSS",
  },
  {
    category:"Javascript",
    question:"Which method adds an element to the end of an array?",
    choices:[
      "push()",
      "pop()",
      "shift()",
    ],
    answer:"push()"
  },
  {
    category:"General knowledge",
    question:"What is the capital of France?",
    choices:[
      "Paris",
      "Berlin",
      "Madrid",
    ],
    answer:"Paris",
  },
  {
    category:"Math",
    question:"What is 5 + 3?",
    choices: [
      "6",
      "8",
      "10",
    ],
    answer: "8",
  },
]

function getRandomQuestion(array){
  const length=array.length;
  const random=Math.floor(Math.random()*length);
  return array[random];
}

function getRandomComputerChoice(choices){
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question,computerChoice){
  if(computerChoice === question.answer){
    return "The computer's choice is correct!";
  }
  else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}


const question = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(question.choices);

const result = getResults(question, computerChoice);
console.log(result);
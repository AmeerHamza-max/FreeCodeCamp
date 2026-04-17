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
      "push",
      "pop",
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
    answers:"Paris",
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


questions.forEach(element => {
    console.log(element.choices)
});
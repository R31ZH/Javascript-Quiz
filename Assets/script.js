var quizTimer = setInterval(function () {
  if (timeLeft <= 0) {
    clearInterval(quizTimer);
    document.getElementById("countdown").innerHTML = " ";
  } else {
    document.getElementById("countdown").innerHTML = timeLeft + " ";
  }
  timeLeft -= 1;
}, 1000);

var sButton = document.getElementById("start");
var nButton = document.getElementById("next");
var questionDiv = document.getElementById("questions");
var questionList = document.getElementById("question");
var aButton = document.getElementById("answers");
var timeLeft = 30;

const questions = [
  {
    question: "How do create an array?",
    answers: {
      a: "With []",
      b: "With {}",
      c: "With ()",
      d: "With ''",
    },
    answer: "a",
  },
  {
    question: "How do create a variable?",
    answers: {
      a: "var",
      b: "let",
      c: "const",
      d: "all the above",
    },
    answer: "d",
  },
  {
    question: "Which of these is NOT a primitive types?",
    answers: {
      a: "Numbers",
      b: "Strings",
      c: "Letters",
      d: "Boolean",
      e: "Null",
      f: "Undefined",
    },
    answer: "c",
  },
  {
    question: "What is the logical operator for AND?",
    answers: {
      a: "||",
      b: "&&",
      c: "!",
    },
    answer: "b",
  },
  {
    question: "What is the logical operator for NOT?",
    answers: {
      a: "||",
      b: "&&",
      c: "!",
    },
    answer: "c",
  },
  {
    question: "What is the logical operator for OR?",
    answers: {
      a: "||",
      b: "&&",
      c: "!",
    },
    answer: "a",
  },
];

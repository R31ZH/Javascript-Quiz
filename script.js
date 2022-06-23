const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
var timeLeft = 30;
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "How do create an array?",
    answers: [
      { text: "With []", correct: true },
      { text: "With {}", correct: false },
      { text: "With ()", correct: false },
      { text: "With ''", correct: false },
    ],
  },
  {
    question: "How do create a variable?",
    answers: [
      { text: "var", correct: true },
      { text: "let", correct: true },
      { text: "const", correct: true },
      { text: "val", correct: false },
    ],
  },
  {
    question: "Which of these is NOT a primitive types?",
    answers: [
      { text: "Numbers", correct: false },
      { text: "Strings", correct: false },
      { text: "Letters", correct: true },
      { text: "Boolean", correct: false },
      { text: "Null", correct: false },
      { text: "Undefined", correct: false },
    ],
  },
  {
    question: "What is the logical operator for AND?",
    answers: [
      { text: "||", correct: false },
      { text: "&&", correct: true },
      { text: "!", correct: false },
    ],
  },
  {
    question: "What is the logical operator for NOT?",
    answers: [
      { text: "||", correct: false },
      { text: "&&", correct: false },
      { text: "!", correct: true },
    ],
  },
  {
    question: "What is the logical operator for OR?",
    answers: [
      { text: "||", correct: true },
      { text: "&&", correct: false },
      { text: "!", correct: false },
    ],
  },
];

function startquiz() {
  console.log(questions[0].title);
  first.setAttribute("class", "hide");
  timerid = setInterval(clocktick, 1000);
}

function clocktick() {
  timeleft--;
  console.log(timeleft);
  if (timeleft <= 0) {
    clearInterval(timerid);
  }
}

var quizTimer = setInterval(function () {
  if (timeLeft <= 0) {
    clearInterval(quizTimer);
    document.getElementById("countdown").innerHTML = " ";
  } else {
    document.getElementById("countdown").innerHTML = timeLeft + " ";
  }
  timeLeft -= 1;
}, 1000);

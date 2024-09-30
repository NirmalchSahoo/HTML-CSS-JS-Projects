const questions = [
  {
    question: 'What is the largest animal in the world ?',
    answers: [
      { text: 'Shark', correct: false },
      { text: 'Blue whale', correct: true },
      { text: 'Elephant', correct: false },
      { text: 'Lion', correct: false },
    ],
  },
  {
    question: 'What is the largest bird in the world ?',
    answers: [
      { text: 'Eagle', correct: false },
      { text: 'Vulture', correct: true },
      { text: 'Crow', correct: false },
      { text: 'Parrot', correct: false },
    ],
  },
  {
    question: 'What is the smallest continent in the world ?',
    answers: [
      { text: 'Asia', correct: false },
      { text: 'Europe', correct: false },
      { text: 'Africa', correct: false },
      { text: 'Austrilia', correct: true },
    ],
  },
  {
    question: 'what is the capital of odisha ?',
    answers: [
      { text: 'Bhubaneswar', correct: true },
      { text: 'Cuttack', correct: false },
      { text: 'Kendrapara', correct: false },
      { text: 'Jajpur', correct: false },
    ],
  },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-button');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestions();
};
const showQuestions = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
};

const resetState = () => {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButton.style.display = 'block';
};

const showScore = () => {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
  nextButton.innerHTML = 'Play again !';
  nextButton.style.display = 'block';
};

const handleNextButton = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
};

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();

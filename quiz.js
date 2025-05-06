// Questions Array
const questions = [
  {
    question: "What is Shelvy Fav Color?",
    choices: ["green", "red", "yellow", "blue"],
    answer: 3,
  },
  {
    question: "What Shelvy's Fav animal",
    choices: ["bears", "lion", "fox", "mouse"],
    answer: 1,
  },
];

let currentQuestion = 0;

// DOM Elements
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-question");

// Load Question
function loadQuestion() {
  const current = questions[currentQuestion];
  questionElement.textContent = current.question;
  answerButtons.forEach((button, index) => {
    button.textContent = current.choices[index];
    button.disabled = false; // Re-enable buttons for the new question;
    button.style.backgroundColor = ""; // Reset styles
  });
  feedbackElement.textContent = "";
  nextButton.style.display = "none";
}

// Handle Answer Click

function handleAnswerClick(event) {
  const selectedButton = event.target;

  const selectedIndex = Array.from(answerButtons).indexOf(selectedButton);

  const isCorrect = selectedIndex === questions[currentQuestion].answer;

  feedbackElement.textContent = isCorrect ? "Correct" : "Wrong answer.";

  selectedButton.style.backgroundColor = isCorrect ? "green" : "red";

  // Disable all buttons after an answer is selected
  answerButtons.forEach((button) => (button.disabled = true));

  nextButton.style.display = "block";
}

// Load Next Question

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionElement.textContent = "Quiz completed";
    answerButtons.forEach((button) => (button.style.display = "none"));
    feedbackElement.textContent = "Great Job!";
    nextButton.style.display = "none";
  }
}

// Add Event Listeners

answerButtons.forEach((button) =>
  button.addEventListener("click", handleAnswerClick)
);
nextButton.addEventListener("click", nextQuestion);

// Initialize Quiz
loadQuestion();

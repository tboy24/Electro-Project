
const questions = [
  "What is 2 + 2?",
  "What color is the sky?",
  "What is the capital of France?",
  "What is 5 - 3?",
  "What is the opposite of hot?",
  "How many legs does a cat have?",
  "What comes after 9?",
  "What is the first letter of the alphabet?",
  "What is the color of grass?",
  "What is 10 - 7?",
  "What do bees make?",
  "How many days are in a week?",
  "What shape is a ball?",
  "What sound does a dog make?",
  "What planet do we live on?",
  "What is 3 + 3?",
  "What is the opposite of day?",
  "How many wheels does a bicycle have?",
  "What is frozen water called?",
  "What do you use to write on paper?"
];

let currentQuestion = 0;
let autoNextTimer;

// DOM elements
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Update question display
function updateQuestion() {
  questionNumber.textContent = currentQuestion + 1;
  questionText.textContent = questions[currentQuestion];

  // Disable prev at first question
  prevBtn.disabled = currentQuestion === 0;

  // Disable next at last question
  nextBtn.disabled = currentQuestion === questions.length - 1;

  // Reset auto timer each time
  resetAutoNext();
}

// Auto move to next question every 5 seconds
function resetAutoNext() {
  clearTimeout(autoNextTimer); // clear old timer
  if (currentQuestion < questions.length - 1) {
    autoNextTimer = setTimeout(() => {
      currentQuestion++;
      updateQuestion();
    }, 5000);
  }
}

// Event listeners
nextBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    updateQuestion();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    updateQuestion();
  }
});

// Initialize
updateQuestion();

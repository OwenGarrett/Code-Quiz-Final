var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var startButton = document.querySelector(".start-button");
var submitButton = document.getElementById("submit");


// Start game when user clicks Start button 
function startGame() {
    isWin = false;
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  }




// Quiz Questions 
var questions = [
  {
    question: "What does HTML stand for?",
    answers: {
      A: "HyperText Markup Linguistics",
      B: "wHo Took My Lunch",
      C: "HyperType Makeup Language",
      D: "HyperText Markup Language",
    },
    correctAnswer: "D",
  },
  {
    question: "What does CSS stand for?",
    answers: {
      A: "Cascading Style Sheets",
      B: "Cascasding Simple Style",
      C: "Computer Syntax Script",
      D: "Computer Spike Syntax",
    },
    correctAnswer: "A",
  },
  {
    question: "JavaScript is a __ program.",
    answers: {
      A: "Backend",
      B: "Server",
      C: "Frontend",
      D: "Great",
    },
    correctAnswer: "C",
  },
  {
    question: "What program is used for styling?",
    answers: {
      A: "HTML",
      B: "CSS",
      C: "iTunes",
      D: "JavaScript",
    },
    correctAnswer: "B",
  },
  {
    question: "What method is used to invoke an argument?",
    answers: {
      A: "Call",
      B: "Text",
      C: "Email",
      D: "Radio",
    },
    correctAnswer: "A",
  },
];


// Show Questions Function
function showQuestions(questions, quizContainer) {
  var output = [];
  var answers;

  for (var i = 0; i < questions.length; i++) {
    answers = [];

    for (letter in questions[i].answers) {
      answers.push(
        "<label>" +
          '<input type="radio" name="question' +
          i +
          '" value="' +
          letter +
          '">' +
          letter +
          ": " +
          questions[i].answers[letter] +
          "</label>"
      );
    }

    output.push(
      '<div class="question">' +
        questions[i].question +
        "</div>" +
        '<div class="answers">' +
        answers.join("") +
        "</div>"
    );
  }

  quizContainer.innerHTML = output.join("");
}
// Displays Questions 
showQuestions(questions, quizContainer);


// Shows results and how many were answered correctly out of the total # of questions 
function showResults(questions, quizContainer, resultsContainer) {
  var answerContainers = quizContainer.querySelectorAll(".answers");

  var userAnswer = "";
  var numCorrect = 0;

  for (var i = 0; i < questions.length; i++) {
    userAnswer = (
      answerContainers[i].querySelector(
        "input[name=question" + i + "]:checked"
      ) || {}
    ).value;
        // Show user answers green as correct and red if incorrect 
    if (userAnswer === questions[i].correctAnswer) {
      numCorrect++;

      answerContainers[i].style.color = "lightgreen";
    } else {
      answerContainers[i].style.color = "red";
    }
  }

  resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
}

submitButton.onclick = function () {
  showResults(questions, quizContainer, resultsContainer);
};

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


// start button that when clicked starts the timed quiz 
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

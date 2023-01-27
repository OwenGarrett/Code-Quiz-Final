// Variables 
var startBtn = document.querySelector("#start_button");
var introPage =document.querySelector("#intro_page");
var questionsPage =document.querySelector("#questions_page");
var submitPage =document.querySelector("#submit_page");
var savedHighScores =document.querySelector("#saved_highscores")


   //Define questions (Object)
   var questionArray = [
    {
        question: "What does CSS stand for?",
        choices: ["A. Cascading Style Sheets", "B. Cascading Syntax Sheet", "C. Charlie Stole Something", "D. Cascading Sheets Syntax"],
        answer: "A"
    },
    {
        question: "What does HTML stand for?",
        choices: ["A. wHo Took My Lunch?", "B. HyperText Markup Language", "C. Absolutely nothing maaan!", "D. HyperText Markup Lingustics"],
        answer: "B"
    },
    {
        question: "__ is the format used for storing and transporting data.",
        choices: ["A. JSON", "B. HTML", "C. CSS", "D. README"],
        answer: "A"
    },
    {
        question: "A <p> element is used in which programming language?",
        choices: ["A. CSS", "B. JavaScript", "C. Java", "D. HTML"],
        answer: "D"
    },
    {
        question: "What do arrays do in JavaScript?",
        choices: ["A. Not much", "B. Store Multiple Values in a single variable", "C. Define things", "D. A lot"],
        answer: "B"
    },
    
   
];

// Generate Quiz Function 
function generateQuiz(questions, quizContainer, resultsContainer, submitButton)

// Function to display 60 second countdown clock 
const timeH = document.querySelector('h1');
let timeSeconds = 60;

displayTime(timeSeconds)

const countdown = setInterval(() => {
    timeSeconds--;
    displayTime(timeSeconds);
    if(timeSeconds <= 0 || timeSeconds < 1){
        clockOut();
        clearInterval(countdown);
    }
}, 1000)

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML= `${min<10 ? '0': ''}${min}:${sec<10 ? '0': ''}${sec}`
}

function clockOut(){
    timeH.innerHTML = 'Game Over'
}
// grab each element that needs to be manipulated
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-quiz");
var welcomeContainer = document.getElementById("welcome-container");
var questionContainer = document.getElementById("question-container");
var quizQuestion = document.getElementById("quiz-question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var correctIncorrect = document.getElementById("correct-incorrect");
var allDone = document.getElementById("all-done-container");
var highscoresContainer = document.getElementById("highscores-container");
var finalScoreP = document.getElementById("final-score-p");
var viewHighscores = document.getElementById("view-highscores");
var submitHighscore = document.getElementById("submit-highscore");
var goBack = document.getElementById("go-back");
var clearHighscores = document.getElementById("clear-highscores");
var highscoresList = document.getElementById("highscores-list");
var initials = document.getElementById("initials");

// hide every container except the welcome container
questionContainer.style.display = "none";
correctIncorrect.style.display = "none";
allDone.style.display = "none";
highscoresContainer.style.display = "none";


// questions inventory
var myQuestions = [
  { //question 1
    q: "The three fundamental programming languages of the modern web are: HTML, CSS, and _________.",
    o: [
      "Dothraki",
      "Hebrew",
      "JavaScript",
      "HTML"
    ],
    a: "opt3"
  },
  { //question 2
    q: "Variables are the _______ of programming.",
    o: [
      "verbs",
      "icebergs",
      "whales",
      "nouns"
    ],
    a: "opt4"
  },
  { //question 3
    q: "Which identifier will surround a string in JavaScript?",
    o: [
      "bulbs",
      "lampshades",
      "quotation marks",
      "parentheses"
    ],
    a: "opt3"
  },
  { //question 4
    q: "Where will the \"console.log()\" method display data?",
    o: [
      "in the garden",
      "in the browser",
      "in the console",
      "in the toolbar"
    ],
    a: "opt3"
  },
  { //question 5
    q: "When an alert is executed it will popup in the _____",
    o: [
      "console",
      "browser",
      "dictionary",
      "atmosphere"
    ],
    a: "opt2"
  },
  { //question 6
    q: "You can write onto the HTML page using the following:",
    o: [
      "document.write()",
      ".innerHTML",
      ".textContent",
      "all of the above"
    ],
    a: "opt4"
  },
  { //question 7
    q: "The first element in an array has an index value of:",
    o: [
      "0",
      "1",
      "2",
      "a"
    ],
    a: "opt1"
  },
  { //question 8
    q: "An array can be a collection of:",
    o: [
      "strings",
      "Booleans",
      "more arrays",
      "all of the above"
    ],
    a: "opt4"
  },
  { //question 9
    q: "An object's properties are comprised of ______ & _______.",
    o: [
      "strikes and gutters",
      "balls and strikes",
      "keys and values",
      "keys and peels"
    ],
    a: "opt3"
  },
  { //question 10
    q: "The following is an example of an acceptable \"for\" loop:",
    o: [
      "for (i = 0; i < array.length; i++)",
      "for score and seven years ago",
      "for leaf clover",
      "function() {action}"
    ],
    a: "opt1"
  },
  { //question 11
    q: "In which identifier will the actual code to be executed by a function be located?",
    o: [
      "parentheses ()",
      "curly braces {}",
      "square brackets []",
      "quotation marks \"\""
    ],
    a: "opt2"
  },
  { //question 12
    q: "When a function is defined, there may be _______ inside parentheses.",
    o: [
      "parameters",
      "parabolas",
      "par 4",
      "paralegals"
    ],
    a: "opt1"
  },
  { //question 13
    q: "A function inside of an object is called a:",
    o: [
      "big problem",
      "little problem",
      "no problem",
      "method"
    ],
    a: "opt4"
  },
  { //question 14
    q: "Which method will return a random number between 0 and 1?",
    o: [
      "Math.floor()",
      "Math.random()",
      "Math.ceil()",
      "Math.sin()"
    ],
    a: "opt2"
  },
  { //question 15
    q: "The \"typeof\" operator will find the ______ of a JavaScript variable.",
    o: [
      "mole",
      "blemish",
      "type",
      "halfling"
    ],
    a: "opt3"
  },
  {
    q: "empty question",
    o: [
      "---",
      "---",
      "---",
      "---"
    ],
    a: "---"
  },

];

// declare global variables
var userScore;
var timeLeft;
var i;

// set score to 0 and timer to 120 sec; populate first question
var beginQuiz = function(event) {
  userScore = 0;
  timeLeft = 120;
  i = 0;
  var timeInterval = setInterval(function() {
    timer.textContent = "Timer: " + timeLeft;
    timeLeft--;
  
    if (timeLeft <= 0) {
      timer.textContent = "Timer: ";
      clearInterval(timeInterval);
      endGame();
    }
    if (i >= myQuestions.length - 1) {
      timer.textContent = "Timer: ";
      clearInterval(timeInterval);
    }
  }, 1000);
  beginQuestions();
};

// hide unnecessary containers; populate questions according to "i" number
var beginQuestions = function() {
  event.preventDefault;
  welcomeContainer.style.display = "none";
  allDone.style.display = "none";
  highscoresContainer.style.display = "none";
  questionContainer.style.display = "block";

  quizQuestion.textContent = myQuestions[i]["q"];

  opt1.textContent = myQuestions[i]["o"][0];
  opt2.textContent = myQuestions[i]["o"][1];
  opt3.textContent = myQuestions[i]["o"][2];
  opt4.textContent = myQuestions[i]["o"][3];

  if (i >= myQuestions.length - 1) {
    endGame();
  }
}

// check answer and display whether correct or incorrect
var checkAnswer = function(event) {
  var userGuess = event.target.id;
  if (userGuess === myQuestions[i]["a"]) {
    userScore++;
    userGuess.style.backgroundColor = "green";
    correctIncorrect.style.display = "block";
    correctIncorrect.textContent = "Correct! You've earned a point!";
  } else {
    timeLeft -= 10;
    correctIncorrect.style.display = "block";
    correctIncorrect.textContent = "Incorrect! You've lost 10 seconds!";
  }
    i++;
    beginQuestions();
}

// called either when timer or questions run out
// hides unnecessary containers, displays user's score
var endGame = function() {
  questionContainer.style.display = "none";
  highscoresContainer.style.display = "none";
  welcomeContainer.style.display = "none";
  allDone.style.display = "block";
  finalScoreP.textContent = "Your final score is: " + userScore;
}

// highscore generation
// set empty array
var userHighscores = [];

// hide unnecessary containers
// set highscore html element to empty string, populate that string with retrieval and appending of highscore data from local storage
var addHighscore = function(event) {
  questionContainer.style.display = "none";
  allDone.style.display = "none";
  welcomeContainer.style.display = "none";
  highscoresContainer.style.display = "block";

  highscoresList.innerHTML = "";
  for (var j = 0; j < userHighscores.length; j++) {
    var userHighscore = userHighscores[j];

    var li = document.createElement("li");
    li.textContent = userHighscore;
    li.setAttribute("data-index", j);
    highscoresList.appendChild(li);
  }
}

// retrieve highscore array data from localstorage
var getHighscores = function() {
  var loggedHighscores = JSON.parse(localStorage.getItem("userHighscores"));
  if (userHighscores !== null) {
    userHighscores = loggedHighscores;
  }
  addHighscore();
}

// insert highscore array data into local storage
var storeHighscore = function() {
  localStorage.setItem("userHighscores", JSON.stringify(userHighscores));
}

// event listener to push highscore data into highscore array
submitHighscore.addEventListener("click", function(event) {
  event.preventDefault();
  var userInitialsScore = initials.value + " - " + userScore;
  if (userInitialsScore === "") {
    return;
  }

  userHighscores.push(userInitialsScore);
  initials.value = "";
  storeHighscore();
  getHighscores();
});

// called by "clear highscores" button, clears local storage
var clearScores = function(event) {
  localStorage.clear();
  userHighscores = [];
  console.log(userHighscores)
  highscoresList.textContent = "";
  console.log(localStorage);
  checkHighscore();
}

// called by "go back" button, hides all but welcome container
var startOver = function(event) {
  questionContainer.style.display = "none";
  allDone.style.display = "none";
  highscoresContainer.style.display = "none";
  correctIncorrect.style.display = "none";
  welcomeContainer.style.display = "block";
}

// pseudo-link to display highscores
var checkHighscore = function(event) {
  questionContainer.style.display = "none";
  allDone.style.display = "none";
  welcomeContainer.style.display = "none";
  highscoresContainer.style.display = "block";
}

// event listeners
startButton.addEventListener("click", beginQuiz);
opt1.addEventListener("click", checkAnswer);
opt2.addEventListener("click", checkAnswer);
opt3.addEventListener("click", checkAnswer);
opt4.addEventListener("click", checkAnswer);
goBack.addEventListener("click", startOver);
viewHighscores.addEventListener("click", checkHighscore);
clearHighscores.addEventListener("click", clearScores);
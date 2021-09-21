const ft = new Fetch(); //Allowing us to fetch the jSON data.
const ui = new UI(); //Allowing us to use that data to populate the UI. 


/* 
The loadJson function is used to fetch the data, then populate the UI.
x will repsent a variable that will be used within the class UI, which will help select the data needed to populate the quiz. 
The score variable will be used to pass through the updated/latest score. Keeping track as the user goes along.  
*/
function loadJson(x, score) {
    ft.getCurrent().then((data) => {
      ui.populateQuestion(data, x, score);
    });
};

let x = 0; //preseting the variable to 0 for the get go. 
let score = 0; // The starting score that will be updated each time. 

/*
If the answer is correction, the function below will update both the score and the x variable. (This will then load the next Q's and Answers)
*/
function trueAnswer(pointsPerQuestions, questionAmount) {
    score += pointsPerQuestions; //Used to add the new points to the old score. 
    x += 1;

// If it is not the last question, carry out the animations to remove the previous questions and then load the next set of questions using the loadJson function.

    if (questionAmount > x) {
    removeText(); 

    setTimeout(function(){ 
        loadJson(x, score);
    }, 500);

    return;
    }

    loadJson(x, score);

};

//If the answer is incorrect. This will carry out the same as the trueAnswers function, although not update the score as this is not required. 

function falseAnswer(pointsPerQuestions, questionAmount) {
    x += 1;

    if (questionAmount > x) {
        removeText(); 
    
        setTimeout(function(){ 
            loadJson(x, score);
        }, 500);

        return;
    }

    loadJson(x, score);

};

// The removeText function is called in both of the trueAnswer and falseAnswer functions. This gets both the Wrappers holding the questions and answers and animates them off the screen.

function removeText() {
    var elementQuestion = document.getElementById("questionWrapper");
    var elementAnswers = document.getElementById("answerWrapper");
    elementQuestion.className += " slideOutWrapper";
    elementAnswers.className += " slideOutWrapper";
};

// After each question the move function is called, this updates the progress bar demonstrating that the next question will be available. 
//This has been created to vary it's update based on the amount of questions (More questions and the bar with move a smaller amount each time)
function move(progressBar, pointsPerQuestions) {
  var i = progressBar;  
  if (i == progressBar) {
    var elem = document.getElementById("progress-bar");
    var width = progressBar;
    var id = setInterval(frame, 25);
    function frame() {
        width++;
        elem.style.width = width + "%";
      }
    }
  }

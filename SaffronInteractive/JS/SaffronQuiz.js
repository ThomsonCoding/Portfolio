const ft = new Fetch(); //Allowing us to fetch the jSON data.
const ui = new UI(); //Allowing us to use that data to populate the UI. 

function loadJson(x, score) {
    ft.getCurrent().then((data) => {
      ui.populateQuestion(data, x, score);
    });
};

let x = 0;
let score = 0;

function trueAnswer(pointsPerQuestions, questionAmount) {
    score += pointsPerQuestions;
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

function removeText() {
    var elementQuestion = document.getElementById("questionWrapper");
    var elementAnswers = document.getElementById("answerWrapper");
    elementQuestion.className += " slideOutWrapper";
    elementAnswers.className += " slideOutWrapper";
};


function move(progressBar, pointsPerQuestions) {
  var i = progressBar;  
  console.log(progressBar + " " + pointsPerQuestions);
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

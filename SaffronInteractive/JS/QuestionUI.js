// The UI class is to update the website with the questions/answers. It is called upon within SaffronQuiz.js

class UI {
    constructor() {
        this.uiQuestionContainer = document.getElementById("QuestionHolder");
    }

    populateQuestion(data, x, score) {

        console.log(x + " " + score);
        //let questionCounter = 5;
        let TotalScore =+ score; // This variable is to keep the score up to date. (Updating with each correct answer)
        let passMark = data.passmark; // This allows the passmark to vary with the json data. Updating depending on what is set. 
        let questionCounter =+ x; //This counts the questions, and will be compared to the length of the data (amount of questions), so when know when the last one is called. 
        let questionAmount = data.questions.length; //Informs me of question length. 

        if (questionCounter === questionAmount) { //When it is the last question. Update the page with either a pass or fail message. And the option to invite friends. 
            if (TotalScore >= passMark) {
            this.uiQuestionContainer.innerHTML = `
            <div class="QuestionInfo">
                <h2 class="Question">Well done! Your score was <span class="blueText">${TotalScore}</span> which is a pass! <br><br> Want to see if a friend can beat you? Use the <span class="blueText">QR code</span> below and see what they get!</h2>
                <button id="PlayAgain" onClick="playAgain()">Play Again</button>
            </div>
            
            <div class="QuestionAnswers">
                <img src="Photos/qrcode_thomsoncoding.github.io.png">
            </div>

            `;
            } else { //If a fail occurs, the container will be filled with the information below.
            this.uiQuestionContainer.innerHTML = `
            <div class="QuestionInfo">
                <h2 class="Question">Unlucky! Your score was <span class="blueText">${TotalScore}</span>, and you needed ${passMark} or above. Bet your friends still couldn't beat you though! <br><br> Use the <span class="blueText">QR code</span> below to invite them! </h2>
                <button id="PlayAgain" onClick="playAgain()">Play Again</button>
             </div>
            
            <div class="QuestionAnswers">
                <img src="Photos/qrcode_thomsoncoding.github.io.png">
            </div>

             `;
            }
            return;
        }

        let pointsPerQuestions = 100 / questionAmount; //As the tests are out of 100, this will determin how many points each question is worth. 
        let questionNumber = x + 1; //The reason +1 is added, is because we use x to go through the data, as objects start at 0 and not 1. Although we can use this number to update ourselves on what question we are on by just adding 1.
        let progressBar = pointsPerQuestions * questionNumber; // This will multiply the points per a question by the question number. This is used to determine where we are on the progress bar which is out of 100. 
        let question = data.questions[x].question; //Updates each time with the latest question.
        let answers = data.questions[x].options[0];
        let answersLength = data.questions[x].options.length; //Used to inform us how many options the user can pick from. This is looped through to help generate the correct amount of answer buttons. 
        let answerOptions = []; //Empty array to hold the html code for the answer options. Once filled it will be called upon to be generated. 
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        
        for (var i = 0; i < answersLength; i += 1) { //Loops through and gets the question answers.
            answerOptions += `
            <div class="answer" onclick="move(${progressBar}, ${pointsPerQuestions}), ${data.questions[x].options[i].isCorrect}Answer(${pointsPerQuestions}, ${questionAmount})"><p><span class="questionLetter">${alphabet.charAt(i)}</span>&nbsp;&nbsp; ${data.questions[x].options[i].label}</p></div>
            `;
        }

        //The move function is added to the button so it will update the progress bar once clicked. If the answer is correct or wrong, it is also stored. 

        //The below us run to generate the whole application, using the variables from above. 
        //The amount of questions will update based on the information the json file provides.
        this.uiQuestionContainer.innerHTML = `
        <div class="QuestionInfo">
        <div class="QuestionNumber">
            <i style="font-size:100px" class="fa left">&#xf104;</i>
            <p class="QuestionNumber"><strong>0${questionNumber}</strong> <span id="totalQuestions">/ 0${questionAmount}</span></p>
        </div>
            
        <div class="progress-bar-outline">
            <div id="progress-bar" class="progress-bar-filled" style="width:${progressBar}%"></div>
        </div>
        <div id="questionWrapper" class="wrapper">
            <h2 id="TheQuestion" class="Question">${question}</h2>
        </div>
            <p id="topic">History of art</p>
        </div>
        <div class="QuestionAnswers">
            <div id="answerWrapper" class="answerWrapper">${answerOptions}</div>
        </div>
        `;
    }
}

class UI {
    constructor() {
        this.uiQuestionContainer = document.getElementById("QuestionHolder");
    }

    populateQuestion(data, x, score) {

        let TotalScore =+ score;
        let passMark = data.passmark;
        let questionCounter =+ x;
        let questionAmount = data.questions.length;

        console.log(questionCounter + " " + questionAmount);
        if (questionCounter === questionAmount) {
            if (TotalScore >= passMark) {
            this.uiQuestionContainer.innerHTML = `
            <div class="QuestionInfo">
                <h2 class="Question">Well done! Your score was ${TotalScore} which is a pass! <br><br> Want to see if a friend can beat you? Use the QR code below!</h2>
            </div>
            
            <div class="QuestionAnswers">
                <img src="Photos/qrcode_thomsoncoding.github.io.png">
            </div>

            `;
            } else {
            this.uiQuestionContainer.innerHTML = `
            <div class="QuestionInfo">
                <h2 class="Question">Unlucky! Your score was ${TotalScore}, and you needed ${passMark} or above.</h2>
             </div>`;
            }
            return;
        }

        let pointsPerQuestions = 100 / questionAmount;
        let questionNumber = x + 1;
        let progressBar = pointsPerQuestions * questionNumber;
        let question = data.questions[x].question;
        let answers = data.questions[x].options[0];
        let answersLength = data.questions[x].options.length;
        let answerOptions = [];
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        
        for (var i = 0; i < answersLength; i += 1) { 
            answerOptions += `
            <div class="answer" onclick="move(${progressBar}, ${pointsPerQuestions}), ${data.questions[x].options[i].isCorrect}Answer(${pointsPerQuestions}, ${questionAmount})"><p><span class="questionLetter">${alphabet.charAt(i)}</span>&nbsp;&nbsp; ${data.questions[x].options[i].label}</p></div>
            `;
        }


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

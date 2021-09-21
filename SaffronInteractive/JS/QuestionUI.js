class UI {
    constructor() {
        this.uiQuestionContainer = document.getElementById("QuestionHolder");
    }

    populateQuestion(data, x) {

        let questionAmount = data.questions.length;

        if (x === questionAmount) {
            this.uiQuestionContainer.innerHTML = `
            <div class="QuestionInfo">
                <h2 class="Question">Congradulations, your score was...</h2>
            </div>`;
            return;
        }

        let pointsPerQuestions = 100 / questionAmount;
        let questionNumber = x + 1;
        let progressBar = pointsPerQuestions * questionNumber;
        console.log(pointsPerQuestions);
        let question = data.questions[x].question;
        let answers = data.questions[x].options[0];
        let answersLength = data.questions[x].options.length;
        let answerOptions = [];

        for (var i = 0; i < answersLength; i += 1) { 
            answerOptions += `<div class="answer" onclick="${data.questions[i].options[0].isCorrect}Answer()"><p>${data.questions[x].options[i].label}</p></div>`;
        }


        this.uiQuestionContainer.innerHTML = `
        <div class="QuestionInfo">
        <div class="QuestionNumber">
            <i style="font-size:60px" class="fa left">&#xf104;</i>
            <p class="QuestionNumber"><strong>0${questionNumber}</strong> <span id="totalQuestions">/ 0${questionAmount}</span></p>
        </div>
            
        <div class="progress-bar-outline">
            <div class="progress-bar-filled" style="width:${progressBar}%"></div>
        </div>
            <h2 class="Question">${question}</h2>
            <p id="topic">History of art</p>
        </div>
        <div>
            <div class="QuestionAnswers">${answerOptions}</div>
        </div>
        `;
    }
}
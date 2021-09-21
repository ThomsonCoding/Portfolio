const ft = new Fetch(); //Allowing us to fetch the jSON data.
const ui = new UI(); //Allowing us to use that data to populate the UI. 

function loadJson(x) {
    ft.getCurrent().then((data) => {
      ui.populateQuestion(data, x);
    });
};

let x = 0;

function trueAnswer() {
    console.log("Well Done")
    x += 1;
    loadJson(x);
};

function falseAnswer() {
    console.log("Unlucky")
    x += 1;
    loadJson(x);
};
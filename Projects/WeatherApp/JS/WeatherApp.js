//inst classes

const ft = new Fetch();
const ui = new UI();
const ftT = new FetchTomorrow();

//add event listeners
const search = document.getElementById("searchBox");
const button = document.getElementById("searchButton");

button.addEventListener("click", () => {
  const currentVal = search.value;
  ft.getCurrent(currentVal).then((data, dataTomorrow) => {
    ftT.getTomorrow(data.coord.lat, data.coord.lon).then((dataTomorrow) => {
      console.log(dataTomorrow);
      ui.populateUI(data, dataTomorrow);
    });

    //call saveToLS
    ui.saveToLS(data, dataTomorrow);
    ui.populateUI(data);
  });
});

//event listener for local storage
window.addEventListener("DOMContentLoaded", () => {
  const dataSaved = ui.getFromLS();
  ui.populateUI(dataSaved);
});

/* 
The getDay function below has been created to privde the day 2 days from now (Day After tomorrow)
It gets the current day, adds 2 to the numeric value and then using innerHTML and a switch I add the day.
The format of the days goes as such 0 = Sunday, 1 = Monday, etc.

The reason Sunday has a 7 and Monday has an 8, is because you are adding 2, to the current date. So with Friday being 5, Sunday would become 7. 
*/

function getDay() {
  var d = new Date();
  var n = d.getDay();
  n = n + 2;

  switch (n) {
    case (n = 7):
      return (document.getElementById("DayAfterTomorrow").innerHTML = "Sunday");
      break;
    case (n = 8):
      return (document.getElementById("DayAfterTomorrow").innerHTML = "Monday");
      break;
    case (n = 2):
      return (document.getElementById("DayAfterTomorrow").innerHTML =
        "Tuesday");
      break;
    case (n = 3):
      return (document.getElementById("DayAfterTomorrow").innerHTML =
        "Wednesday");
      break;
    case (n = 4):
      return (document.getElementById("DayAfterTomorrow").innerHTML =
        "Thursday");
      break;
    case (n = 5):
      return (document.getElementById("DayAfterTomorrow").innerHTML = "Friday");
      break;
    case (n = 6):
      return (document.getElementById("DayAfterTomorrow").innerHTML =
        "Saturday");
  }
}

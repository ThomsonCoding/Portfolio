const ft = new Fetch();
const ui = new UI();
/* 
This constant is created to allow me to call the getCurrent function within the Fetch class
This getCurrent allows me to pull the information from the API. 
*/

//add event listeners
const search = document.getElementById("searchBox"); // This is so we can access the information within the search box, which will be used to search the API.
const button = document.getElementById("searchButton"); // This allows us to add the event listener to the search button.
const countryOptionsButtons = document.getElementsByClassName("countryList");
// On click, take the value from the searchBox, and use it with the getCurrent function, to pull the data.

button.addEventListener("click", () => {
  let currentVal;
  if (
    search.value.charAt(0).toUpperCase() + search.value.slice(1) == "England" ||
    search.value.charAt(0).toUpperCase() + search.value.slice(1) ==
      "Scotland" ||
    search.value.charAt(0).toUpperCase() + search.value.slice(1) == "Wales" ||
    search.value.charAt(0).toUpperCase() + search.value.slice(1) ==
      "Northern Ireland"
  ) {
    currentVal = "GB";
  } else {
    currentVal = search.value;
  }

  ft.getCurrent(currentVal).then((data) => {
    console.log(data);
    ui.optionsUI(data);
    ui.populateUI(data);
  });
});

function otherOptions(id) {
  let currentVal = search.value;
  ft.getCurrent(currentVal).then((data) => {
    ui.optionsUI(data, id);
    ui.populateUI(data, id);
  });
}

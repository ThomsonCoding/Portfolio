// Below is used to fetch the data and call the updates to the UI. //

const ft = new Fetch();

function NasaAPIOnloadData() {
  console.log(ft.getCurrent());
}

// Below is used to add the scroll functionality to the space rocket //
document.getElementById("NasaIcon");
var timer = null; // Variable to hold a reference to the timer

// Set up an event handler for mousedown
NasaIcon.addEventListener("mousedown", function (evt) {
  // Start a timer that fires a function at 50 millisecond intervals
  timer = setInterval(function () {
    window.scrollBy({
      top: -400,
      right: 0,
      behavior: "smooth",
    });
    console.log("Mouse is down!");
  }, 50);
});

// Set up a custom mouseup event handler for letting go
// of the mouse inside the box or when mouse leaves the box.
function mouseDone(evt) {
  clearInterval(timer); // Cancel the previously initiated timer function
}

// Bind the handlers:
NasaIcon.addEventListener("mouseup", mouseDone);
NasaIcon.addEventListener("mouseleave", mouseDone);

// Below is the implementation of night mode. //
const setTheme = (theme) => {
  document.documentElement.className = theme;
  isDarkMode ^= true;
  localStorage.lightOrDark = isDarkMode;
  $("darkMode").toggle();
  console.log(localStorage.lightOrDark);
};

// Is local storage light or dark more variable.
var isDarkMode = window.localStorage.getItem("lightOrDark");

function localStorageChecker() {
  if (isDarkMode === 1) {
    console.log(isDarkMode);
    document.documentElement.className = "dark";
    $("#darkMode").toggle();
    $("#lightMode").toggle();
  }
}

$(document).ready(function () {
  $(".switch").click(function () {
    $("#darkMode").toggle();
    $("#lightMode").toggle();
  });
});

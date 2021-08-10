const ft = new Fetch();

function NasaAPIOnloadData() {
  console.log(ft.getCurrent());
}

document.getElementById("NasaIcon");
/*
function scrollWin() {
  setInterval(
    window.scrollBy({
      top: -200,
      right: 0,
      behavior: "smooth",
    }),
    0
  );
} */

// Below is used to add the scroll functionality to the space rocket.

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

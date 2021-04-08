// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

var LikedSongButton = document.getElementById("LikedSongPlayButton");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    LikedSongButton.classList.remove("PlayButton");
    LikedSongButton.classList.add("ScrolledPlayButton");
  } else {
    navbar.classList.remove("sticky");
  }
}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Get all elements with class="navbar" and remove the class "greenLine" (To remove the green line under the previously selected navbar.)
  tablinks = document.getElementsByClassName("navbar");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" greenLine", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  evt.currentTarget.className += " greenLine";
}

$("#changeButton").click(function () {
  $("#ConcertsHeader").toggle();
  $("#searchCityInput").toggle();

  if (this.innerHTML === "CHANGE") {
    this.innerHTML = "CANCEL";
    $('#changeButton:contains("CHANGE")').text("CANCEL");
  } else {
    this.innerHTML = "CHANGE";
    $('#changeButton:contains("CANCEL")').text("CHANGE");
  }
});

var inputCity = document.getElementById("searchCityInput");
inputCity.onkeyup = function (e) {
  if (e.keyCode == 13) {
    var input = document.getElementById("searchCityInput").value;
    $("#ConcertsHeader").text(input);
    $("#ConcertsHeader").toggle();
    $("#searchCityInput").toggle();

    if (this.innerHTML === "CHANGE") {
      this.innerHTML = "CANCEL";
      $('#changeButton:contains("CHANGE")').text("CANCEL");
    } else {
      this.innerHTML = "CHANGE";
      $('#changeButton:contains("CANCEL")').text("CHANGE");
    }
  }
};

$(".likeButton").click(function () {
  $(this).toggleClass("fa fa-heart-o");
  $(this).toggleClass("fa fa-heart");
});

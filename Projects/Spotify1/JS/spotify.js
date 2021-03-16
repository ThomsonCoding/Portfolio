var originalContent; // Variable for the original content within the iFrame.
var NewIframeContent; // Variable for the new content it is changing too.

function iframeContentChange(clicked_id, iframeSpotify) {
  var originalContent = document
    .getElementById("iframeSpotify")
    .getAttribute("src");
  var NewIframeContent = document
    .getElementById(clicked_id)
    .getAttribute("src");
  var ClickedLink = document.getElementById(clicked_id);
  document
    .getElementById("iframeSpotify")
    .setAttribute("src", NewIframeContent);

  // Get all elements with class="tablinks" and remove the class "active"
  greenTablinks = document.getElementsByClassName("nonGreen");
  for (i = 0; i < greenTablinks.length; i++) {
    greenTablinks[i].className = greenTablinks[i].className.replace(
      " greenLine",
      ""
    );
  }

  ClickedLink.parentNode.classList.add("greenLine");
}
/* 
When the script is run it takes the original content from the iFrame and saves it as a variable.
Gets the new content (src) from the link clicked, and saves it as the NewIframeContent variable.
It then Replaces the current iframe src with the new src that it has taken, updating the middle of the page with this content. 
*/

function backButton(originalContent, iframeSpotify) {
  document.getElementById("iframeSpotify").setAttribute("src", originalContent);
}
/*
When the back button is clicked at the top, it replaces the iframe content with its previous content.
It does this by using the originalContent variable which contains the old "src".
*/

function showDiv(boxToOpen) {
  document.getElementById(boxToOpen).style.display = "block";
}
// When showDiv is run, it gets the div connected to that button to change from none -> block, which makes it appear in the middle of the screen.

function hideDiv(boxToClose) {
  document.getElementById(boxToClose).style.display = "none";
}
// When the X is pressed within the opened box, this will cause it to change from block -> none, which will then hide the div.

document.addEventListener("mouseup", function (e) {
  var container = document.getElementById("CreatePlaylistBox");
  if (!container.contains(e.target)) {
    container.style.display = "none";
  }
});

/* 
Above and below are event listeners that makes the targeted boxes close when elsewhere is clicked on the page. 
It does this by saying if the mouse up event is not on the element, then the element will display none (Closing). 
*/

document.addEventListener("mouseup", function (e) {
  var container = document.getElementById("AddFriendsBox");
  if (!container.contains(e.target)) {
    container.style.display = "none";
  }
});

function myFunction() {
  var input, filter, table, tr, td, i, txtValue; // Declare variables.
  input = document.getElementById("filter-search"); // Get the input to search
  filter = input.value.toUpperCase(); // Change input to uppercase
  table = document.getElementById("myTable"); //Get table location
  tr = table.getElementsByTagName("tr"); // Get all of the tables rows
  for (i = 0; i < tr.length; i++) {
    // Filter through the rows.
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      // If value search is there, show.
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        // If value search is not there, hide.
        tr[i].style.display = "none";
      }
    }
  }
}

// Adding a class to change the follow button

$("button.followButton").click(function () {
  $(this).toggleClass("followedButton");
  if (this.innerHTML === "FOLLOW") {
    this.innerHTML = "FOLLOWED";
  } else {
    this.innerHTML = "FOLLOW";
  }
});

//Button added to toggle between shuffling and not shuffling class.
$(".spotify_controls--shuffle").click(function () {
  $(this).toggleClass("spotify_controls--shuffle");
});

// Follow all button
$("button.followAllButton").click(function () {
  $(this).toggleClass("followedButton");
  $("button.followButton").toggleClass("followedButton");

  if (this.innerHTML === "FOLLOW ALL") {
    this.innerHTML = "FOLLOWED";
    $('button.followButton:contains("FOLLOW")').text("FOLLOWED");
  } else {
    this.innerHTML = "FOLLOW ALL";
    $('button.followButton:contains("FOLLOWED")').text("FOLLOW");
  }
});

// Bellow toggles the class between fa-play and fa-pause, to change the icons symbol to suit if the song is playing or pausing.
$(".spotify__controls--play").click(function () {
  $(this).toggleClass("fas fa-play");
  $(this).toggleClass("fas fa-pause");
  $(".spotify__track-bar").toggleClass("spotify__track-bar-active");
});

window.onload = MiddleContainerAdjustment;
window.onresize = MiddleContainerAdjustment;

function MiddleContainerAdjustment() {
  var leftDiv = document.getElementById("LContainer"); //GetsLeftDivElement

  var positionInfoLeft = leftDiv.getBoundingClientRect(); //GetsPositionInformationForLeftDiv
  var leftDivWidth = positionInfoLeft.width; //SetsLeftDivWidthToVariable

  var positionInfoRight = leftDiv.getBoundingClientRect(); //GetsPositionInformationForRightDiv
  var rightDivWidth = positionInfoRight.width; //SetsRightDivWidthToVariable
  var pageWidth = window.innerWidth; //Gets the width of the page.

  console.log(pageWidth);
  var pageExcludingLeftRight = pageWidth - (leftDivWidth + rightDivWidth); //Document width, take away both left and right side Div

  document.getElementById("MContainer").style.left = leftDivWidth + "px"; // Sets The left side of the middle container.
  document.getElementById("MContainer").style.width =
    pageExcludingLeftRight + "px"; //Sets the width of the Middle container

  document.getElementById("TContainer").style.left = leftDivWidth + "px"; // Sets The left side of the Top container.
  document.getElementById("TContainer").style.width =
    pageExcludingLeftRight + "px"; //Sets the width of the Top container
}

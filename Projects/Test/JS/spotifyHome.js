$("#right-button").click(function () {
  //On right button click
  event.preventDefault(); //Prevent default event
  $(".firstList").animate(
    {
      //Selects shortcuts class which contains all the shortcut links.
      scrollLeft: "+=840px", //Scrolls them to the left
    },
    "fast"
  ); //Makes the occur at a fast pace.
});

$("#left-button").click(function () {
  event.preventDefault();
  $(".firstList").animate(
    {
      scrollLeft: "-=840px",
    },
    "fast"
  );
});

$("#right-button2").click(function () {
  //On right button click
  event.preventDefault(); //Prevent default event
  $(".secondList").animate(
    {
      //Selects shortcuts class which contains all the shortcut links.
      scrollLeft: "+=840px", //Scrolls them to the left
    },
    "fast"
  ); //Makes the occur at a fast pace.
});

$("#left-button2").click(function () {
  event.preventDefault();
  $(".secondList").animate(
    {
      scrollLeft: "-=840px",
    },
    "fast"
  );
});

$("#right-button3").click(function () {
  //On right button click
  event.preventDefault(); //Prevent default event
  $(".thirdList").animate(
    {
      //Selects shortcuts class which contains all the shortcut links.
      scrollLeft: "+=840px", //Scrolls them to the left
    },
    "fast"
  ); //Makes the occur at a fast pace.
});

$("#left-button3").click(function () {
  event.preventDefault();
  $(".thirdList").animate(
    {
      scrollLeft: "-=840px",
    },
    "fast"
  );
});

window.onscroll = function () {
  myFunction();
};

var homeHead = document.getElementById("homeHeader");
var sticky = homeHead.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    homeHead.classList.add("sticky");
  } else {
    homeHead.classList.remove("sticky");
  }
}

/*


*/

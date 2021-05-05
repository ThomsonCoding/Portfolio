function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    x.className += " animate-slide-right";
  } else {
    x.className = "topnav";
  }
}

function myFunctionIconChange() {
  var x = document.getElementById("NavBarMainIcon");
  if (x.className === "fa fa-bars") {
    x.className = "fa fa-chevron-right";
    $(".MainNav").show();
  } else {
    x.className = "fa fa-bars";
    $(".MainNav").hide();
    $(".BookingNav").hide();
  }
}

$(".standOutText").click(function () {
  $(".MainNav").hide();
  $(".BookingNav").show();
});

$(".ReturnButton").click(function () {
  $(".MainNav").show();
  $(".BookingNav").hide();
});

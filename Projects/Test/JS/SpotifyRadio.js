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

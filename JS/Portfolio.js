//Navbar Burger Function.

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var isDarkMode = window.localStorage.getItem("lightOrDark");
console.log(localStorage.lightOrDark);

if (isDarkMode == 1) {
  darkLightMode2();
}

function darkLightMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  isDarkMode ^= true;
  localStorage.lightOrDark = isDarkMode;
  console.log(localStorage.lightOrDark);
}

function darkLightMode2() {
  var element2 = document.body;
  element2.classList.toggle("dark-mode");
}

/*
var animationPlayedOnce;
sessionStorage.animationPlayedOnce = animationPlayedOnce;
console.log(animationPlayedOnce); 

if (animationPlayedOnce = undefined) {
	console.log("Hello");
	animationPlayedOnce = true;
	sessionStorage.animationPlayedOnce = animationPlayedOnce;
	console.log(sessionStorage.animationPlayedOnce);
} else {
  var element = document.getElementById("headerMain");
  element.classList.remove("backgroundheader");
  element.classList.add("post_animated");
}
*/

var Sainburys = "Sainsbury’s";

console.log(Sainburys.length); // Answer is A (11)
console.log(Sainburys.indexOf("a")); // Answer is B (1)
// HTTPS is encrypted using TLS
// Hashing is used to protect passwords
//  A and B are true

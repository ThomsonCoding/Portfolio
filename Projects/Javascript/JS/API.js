/* User interfaces allow humans to interact with programs with APIs (Application programming interfaces)

If there is a script or program that offers functionality you need, you can use an API to save yourself from re-writing the code yourself.

The DOM and jQuery APIs allow you to access and update a web page that is loaded in the browser and respond to events. 

Below are are a few examples of HTML5 Javascript APIs

1) geolocation - How to tell where the user is located. 
2) localStorage - Stores information in the browser (even when the tab has been closed).
3) sessionStorage - Store information in the browser whilst a tab/window is open. 
4) history - How to access items from internet history. 

When using APIs you need to ensure that it is compatible with the users browsers. Below is an example how this can be done with an ifElse statement.

*/

if (navigator.geolocation) {
  // Returns truthy so it is supported.
  // Runs statement within this code block.
} else {
  //Not supported/access denied/user rejects.
  //Runs statements within this code block.
}

/* Alternatively you can use modernizr, this is a script you can use in your page to tell you whether the browser supports the features within the site. 

To do this you need to download the script from Modernizr.com
This script is most commonly added at the bottom of your page. 

*/

if (Modernizr.geolocation) {
  // Geolocation is supported.
}

/* The geolocation API.

Geolocation Object:

getCurrentPosition(success, fail) - Requests the position of the user and, if the user permits, returns the user's location (longitude and latitude). 

Success is the name of a functions to call if coordinates are retrieved.
Fail is the name of a function to call if the coordinates are not returned. 


Position Object: If a use location is found, the API must provide a minimum amount of data for it to work. These are listed below, with some extras.
Position.coords.latitude 
Position.coords.longitude
Position.coords.altitude
Position.coords.altitudeAccuracy
Position.coords.accuracy 
Position.coords.heading
Position.coords.speed

and many more, most of these are self explanatory. 


PositionError Object: If the location is not determined, the callback function is passed the PositionError object. 
PositionError.code - 1:Permission Denied    2: Unavailable     3: Timeout.
PositionError.message - A message (not intended for the end user) 


Below is an example of working with Modernizr and Geolocation.  */

var longi = {};
var lati = {};

var elMap = document.getElementById("loc");
var msg = "Sorry, we are unable to get your location.";

if (Modernizr.geolocation) {
  navigator.geolocation.getCurrentPosition(success, fail);
  elMap.textContent = "Checking location... ";
} else {
  elMap.textContent = msg;
}

function success(position) {
  msg = "<h3>Longitude:<br>";
  msg += position.coords.longitude + "</h3>";
  msg += "<h3>Latitude:<br>";
  msg += position.coords.latitude + "</h3>";
  elMap.innerHTML = msg;

  longi = position.coords.longitude;
  lati = position.coords.latitude;
}

function fail(msg) {
  elMap.textContent = msg;
  console.log(msg.code);
}

/* Web storage API, this allows you to store both Local and Session storage. 

Local storage:The data is stored when the tab closes and all windows/tabs can access the data. 

Session storage: This is only available when the user is in that active session, as soon as they finish the session the data will be lost. 

How to access the storage API: */

// LOCAL STORAGE - Storing information.

localStorage.setItem("age", "25");
localStorage.setItem("eyeColor", "blue");

// Access the information.

var age = localStorage.getItem("age");
var eyeColor = localStorage.getItem("eyeColor");

// Number of items stored

var items = localStorage.length;

//Store information (Object notation)

localStorage.name = "Dan";
localStorage.ageLastYear = 24;

//Access information (Object notation)

var name = localStorage.name;
var ageLastYear = localStorage.ageLastYear;

// Number of items stored

var items2 = localStorage.length;

var ageLoc = document.getElementById("age");
ageLoc.textContent = "my age is " + age;

// Session STORAGE - Storing information.

if (window.sessionStorage) {
  var txtUsername = document.getElementById("username"); //Get form elements
  var txtAnswer = document.getElementById("answer");

  txtUsername.value = sessionStorage.getItem("username"); //Elements populated
  txtAnswer.value = sessionStorage.getItem("answer"); //By sessionStorage

  txtUsername.addEventListener(
    "input",
    function () {
      sessionStorage.setItem("username", txtUsername.value); // Save data
    },
    false
  );

  txtAnswer.addEventListener(
    "input",
    function () {
      sessionStorage.setItem("answer", txtAnswer.value); // Save data
    },
    false
  );
}

function session() {
  //To test it works I created this function which will log the information within the session storage.
  console.log(txtUsername.value);
  console.log(txtAnswer.value);
}

/*Google MAPS API:

Currently, one of the most popular APIs, which will allow you to add maps to web pages. 

*/

function init() {
  var mapOptions = {
    // Set up the map options
    center: new google.maps.LatLng(40.78271, -73.96531),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 13,
  };
  var venueMap; // Map() draws a map
  venueMap = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function loadScript() {
  var script = document.createElement("script"); // Create <script> element
  script.src =
    "http://maps.googleapis.com/maps/api/js?key=AIzaSyBhD38M3uF7B2yYGyY69_MWZHaUFyH1QY0&callback=init";
  document.body.appendChild(script); // Add element to page
}

window.onload = loadScript; // on load call loadScript()

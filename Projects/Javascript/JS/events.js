// Events will run code when something has triggered it to occur, below is an example of how I am checking the page has loaded correctly connecting to the correct JS file.

function checkLink() {
  document.getElementById("linkChecker").innerHTML = "The link has been made.";
}

// As you can see, once the page loads it carries out the checkLink function, causing the text within the function to appear on the page.

// Events can occur for many reasons, some of these include; click of the button, text input, mouse down, mouse up, etc.

function buttonClicker() {
  document.getElementById("buttonExample").innerHTML =
    "You have clicked the button.";
}

// DOM event handlers example

function checkUsername() {
  var elMsg = document.getElementById("feedback");
  if (this.value.length < 5) {
    elMsg.textContent = "Username must be 5 characters or more";
  } else {
    elMsg.textContent =
      "This is either 5 or more than 5 characters, you may procede.";
  }
}

var elUsername = document.getElementById("username");
elUsername.onblur = checkUsername;

// As you can see form the example above, this function is to check that the text inputted within usernames text box is above 5 characters. The amount of characters will determine what text is displayed below.

// Event listeners can deal with more than one function at a time, so are more commonly used.

function password() {
  var elMsg = document.getElementById("PasswordFeedback");
  if (this.value == "Password") {
    elMsg.textContent = "You have the correct passwords.";
  } else {
    elMsg.textContent = "This password is incorrect.";
  }
}

var PasswordEl = document.getElementById("password");
PasswordEl.addEventListener("blur", password, false);

// You can also use parameters with event handlers and listeners. Below is an example.

var elAge = document.getElementById("age");
var elAgeMsg = document.getElementById("ageFeedback");

function checkAge(userAge) {
  if (userAge < 18) {
    elAgeMsg.textContent = "You must be over 18 to access this application";
  } else {
    elAgeMsg.textContent = "Welcome";
  }
}

elAge.addEventListener(
  "blur",
  function () {
    checkAge(20);
  },
  false
);

// The above code will run once the parameter box has been edited. This time it will run checking the number within the code, rather than the number entered into the box. For example the checkAge(20), 20 will be the number that is checked within the function.

// resize function

var width = document.getElementById("PageWidth");
var height = document.getElementById("PageHeight");

function displaySize() {
  width.textContent = "The width of this window is " + window.innerWidth;
  height.textContent = "This height of this window is " + window.innerHeight;
}

window.addEventListener("resize", displaySize, false);

// Using mutation events. You will see this used in my to do list project. In this example two event listeners each trigger their own function.

var elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById("list");
addLink = document.querySelector("a");
counter = document.getElementById("counter");

function addItem(e) {
  e.preventDefault();
  newEl = document.createElement("li");
  newText = document.createTextNode("New list item");
  newEl.appendChild(newText);
  elList.appendChild(newEl);
}

function updateCount() {
  listItems = elList.getElementsByTagName("li").length;
  counter.innerHTML = listItems;
}

addLink.addEventListener("click", addItem, false);
elList.addEventListener("DOMNodeInserted", updateCount, false);

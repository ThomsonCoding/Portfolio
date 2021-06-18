/* The code below are two different examples of doing an ifelse statement, based on if the code will return true or false */

let isCorrect = true;

if (isCorrect) {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

isCorrect ? console.log("Correct!") : console.log("Incorrect!");
//If true log correct, if false log incorrect.

// Another example of a Ternary Operator listed below, This one checks a condition matches.

let favoritePhrase = "Love That!";

favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");

// Else If Statements - Example

let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

// The switch keyword

let athleteFinalPosition = "first place";
switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}

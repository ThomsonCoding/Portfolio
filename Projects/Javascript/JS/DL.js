//Often during several places within a script decisions have to be made. As shown with the score example below.

if (score > 50) {
  document.write("You passed!");
} else {
  document.write("Try again... ");
}

/* Comparing operators and evaluating conditions can be useful for making these decisions. 
These are some of the available options you have as a programmer. 

== is Equal to
!= Is not equal to
=== Strict equal to
!== Strict not equal to 
> Greater than
< Less than
>= Greater than or equal to 
<= Less than or equal to

*/

var pass = 50;
var score = 90;

var hasPassed = score >= pass;

//hasPassed would return true, as the score is greater than the pass mark.

/* Comparison operators will return a simple true or false, logical operators on the other hand will allow you to compare the results of more than one comparison operator.
These are a some logical operators:
&& Logical and (Tests more than one condition) 
|| Logical or (Tests at least one condition)
! Logical not (Takes a single boolean value and inverts it) 
*/

var pass2 = 50;
var score2 = 55;

var passBoth = score > pass && score2 > pass2; // Using the and logical operator you can check if both of the scores have passed

var minPass = score > pass || score2 > pass2; //Can use this to check if the user has pass either test 1 or 2.

// If statements evaluate a condition, then if the condition is true the code will run.

if (score >= 50) {
  console.log("Congratulations on passing test one");
}

// If else statements, checks if the condition is true, then will run the first statement, although if it is false it will move onto the else statement.

if (score2 >= 50) {
  console.log("Congratulations on passing test two");
} else {
  console.log("Please try again, you unfortunately did not pass this time");
}

// Switch statements, these start with a variable called the switch value. Each case indicates a possible value for this variable and the code that should run if the variable matches that value.

var level = 2;

switch (level) {
  case 1:
    title = "Level 1";
    console.log("You are on level 2");
    break;

  case 2:
    title = "Level 2";
    console.log("You are on level 2");
    break;

  case 3:
    title = "Level 3";
    console.log("You are on level 3");
    break;

  case 4:
    console.log("You are on level 4");
    title = "Level 4";
    break;

  default:
    title = "Test";
    break;
}

/* Above is an example of how a switch statement can be used. Depending on what number the variable level is set to will decide how the script is run. If it does not have a value or the value does not meet 1-4 it will run the default value.
The good thing is you have a default value so the script can run even if you do not have a value, you will also use the "break" word to come out of the statement once you have finished running the code you require. 
*/

// Loops check a condition, if returned true, a code block will run, then the condition will be checked again. Continue until the loop is broken.

for (var i = 0; i < 10; i++) {
  document.write(i);
}

//This look will continue to add 1 to the value of i until it reaches 9.

// While loop, the look will run whilst the condition is not met, so whilst i is less than 10, the code below will continue to run.

var i = 1;
var msg = "";

while (i < 10) {
  msg += i + " x 5 = " + i * 5 + "<br/>";
  i++;
}

document.getElementById("answer").innerHTML = msg;

//do while loop are slightly different, this is because the statement comes before the code, so the code will run at least once.

var b = 1;
var msgB = "";

// Store 5 times table in a variable

do {
  msg += b + " x 5 = " + b * 5 + "<br/>";
  b++;
} while (b < 1);

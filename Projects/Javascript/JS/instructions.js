/* To add a comment to your code you can use two different methods. 
The method currently being used is beneficial as you can write more then one line. 
You should write comments to explain what your code does. 
They Help make your code easier to read and understand. 
This can help you and others who read your code. */

// The other method, using the two forward slashes is beneficial as it allows you to add a quick simple one liner. A good use of comments will help you if you come back to your code after serval months or days.

//Variables (Declaring/assigning): A variable is a value that can change, depending on conditions or on information passed to the program.
// Declaring the variable.
var quantity;

// Assigning the variable.
quantity = 3;

// Displaying the variable on the HTML page.
document.write("Example of the variable quantity: " + quantity);
document.write("<br/>");

//data types
var numericExample = 0.75;
var stringExample = "Hi, User";
var booleanExample = true;
document.write(
  "Example of a numeric variable: " +
    numericExample +
    "<br/>" +
    "Example of a string variable: " +
    stringExample +
    "<br/>" +
    "Example of a boolean variable: " +
    booleanExample +
    "<br/>"
);

//Quotes inside a string.
var QuotesExample = "Hello, please use 'these' within double marks";
var QuotesExample2 = 'Hello, please use "these" within double marks';

//arrays and accessing values within an array.
var colors;
colors = ["white", "black", "red", "blue"];
document.write(colors);

var el = document.getElementById("colors");
document.write("<br/>");
// An array will start with 0, rather than 1. For example, white in colors will be accessed as shown within the code below.
document.write(colors[0] + "<br/>");

//Assignment operator example
var color = "beige";

// Arithmetic operator example
var area = 3 * 2;

// String operators example
var name = "Daniel";
var greeting = "Hello " + name + ", welcome to Javascript instructions";
document.write(greeting);

// Comparison operator example
var buy = 3 > 5;

// Logical operators example
var buy2 = 5 > 3 && 2 < 4;

/* + Addition 
   - Subtraction 
   / Division 
   * Multiplication 
   ++ Increment 
   -- Decrement 
   % Modules (Divides two values and provides the remainder */

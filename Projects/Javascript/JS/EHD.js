// Error Handling and Debugging. 

/* Everyone can create errors when coding, in fact it is likely that they will occur. 
To counter this you need to know how to find the errors within your code or counter them if you can predict them. */

/*To find the source of an error, it helps to know how scripts are processed. 
The order in which statements are executed can be complex; some tasks can not be completed until another statement or function has been run.
*/

function greetUser() { //Runs 2nd.
	return 'Hello ' + getName();
}

function getName() { //Runs 3rd.
	var name = 'Bob';
	return name;
	}
	
var greeting = greetUser(); //Runs 1st.

alert(greeting); //Runs 4th. 

// As you can see, the order doesn't necessarily run from top to bottom. When a statement needs data from another function, it stacks the new function on top of the current task, until it can be completed. 

//If a JS statement generates an error, it will throw an exception, at that point the interpreter stops and looks for exception-handling code, if one is not found the console will display an error message. 

console.log("hello World!');

/*The above code, will display, Uncaught SyntaxError: Invalid or unexpected token          EHD.js:27

You can find this by accessing the console (Google Chrome, Right click, inspect, console)

Lets break it down. 

1) Uncaught SyntaxError: Invalid or unexpected token

2) EHD.js:27

Part 1 displays the SyntaxError, basically an unexpected error was found. In this case, " does not match up with '. 
Part 2 displays the JS file name that the error was found, and the line number that the error occurred on. 

*/




/* Types of errors you may see:
SyntaxError: 
Uncaught SyntaxError: Unexpected EOF         = Missing or unclosed quotes.
console.log("hello World!');

Uncaught SyntaxError: Expected token ')'     = Missing closing brackets. 
console.log("hello World!';

Uncaught SyntaxError: Expected token ']'     = Could be due to a missing , in an array, or it is missing the ']' at the end. In this case the , is missing.
var list = ['Item 1', 'Item 2' 'Item 3'];

Uncaught SyntaxError: Expected an identifier but found 'name' instead. = A malformed property name. 
user = {first name: "Ben", lastName: "lee"};
*/



/* ReferenceError:
Uncaught SyntaxError: can't find variable: height = Variable is undeclared (Maybe the casing is incorrect)
var width = 12;
var area = width * height;

Uncaught SyntaxError: Can't find variable: randomFunction = Named function is undefined.
document.write(randomFunction());
*/



/* URIError:
URIError: URI error                         = Incorrect use of URI Functions.
decodeURI('http://bbc.com/news.php?a=1');

If these characters are not escaped in URIs, the will cause an error: / ? # : ;
*/



/* TypeError 
TypeError: 'undefined' is not a function (evaluating 'Document.Write('Oops!)')
This could be for two reasons, both the Document and .Write a capitalised when they should be lower case. 

TypeError: 'null' is not an object (evaluating 'el.innerHTML = 'Mango'') = Because the element ID z does not exist. 
var le = document.getElementById('z');
el.innerHTML = 'Mango';
*/



/* RangeError (Number outside of range)
RangeError: Array size is not a small enough positive integer. =  Number is not above 0 and is negative. 
var anArray = new Array (-1);

RangeError: toFixed() argument must be between 0 and 20 = toFixed is outside the range of 0 and 20. 
price.toFixed(21);

This would be the same as the toPrecision() argument, although that must be between 1 and 21. 
*/



/*NaN
Not technically an error, although will cause errors. Basically stands for not a number. 
If you perform a mathematical operation using a value that is not a number, you end up with a value of NaN, not a type error. 
*/

/* How to deal with errors, 1: Debug the script, 2: Handle the errors gracefully. 

1 - Using browser dev tools and the javascript console to debug errors within your script.
- Using error messages.
- Logging data to the console.
- Writing from the script to the console. 
- Stepping through the code.
- Debugger keyword. 

2 - Handling exceptions with Try, Catch, Finally. 
Try running the code, if it throughs an exception, catch in with an alternative bit of code. Although if that does not work resort to the finally bit. 

Example shown below:

*/

try {
	//Try to execute this code.
	} catch (expression) {
	//If there is an exception, run this code. 
	} finally { 
	// This always gets executed 
	}
	
/* 
Debugging tips: 

1) Try other browsers 
2) Console log throughout the code to find where the error occurs. 
3) Strip it back, by commenting out the code. 
4) Explain the code, you might see where it went wrong.
5) Stack overflow
6) Code playgrounds, can upload your code for others to help. 
7) Validation tools (Can be used to help find errors in code) 

This is the end of the errors chapter, some of the most common ones to look out for are missed/extra characters and date type issues. 
*/ 
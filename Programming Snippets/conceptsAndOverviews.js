/*
DOM Vs Virtual DOM

- Domestic object Model
HTML -> DOM -> "Paints the DOM into the screen"
If a change occurs the program would repaint the whole DOM onto the screen.

- Virtual DOM 
A virtual DOM instead compares the updates and only changes ("Paints") what is different. 
Preventing a requirement to reload the whole page. 

React uses a virtual DOM. Which is far faster than relying on the browser. 
Copy of the DOM is stored in the memory. 

In summary, here’s what happens when you try to update the DOM in React:
The entire virtual DOM gets updated.
The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
The changed objects, and the changed objects only, get updated on the real DOM.
Changes on the real DOM cause the screen to change.

React.js is a JavaScript library. It was developed by engineers at Facebook.
*/

const h1 = <h1>Hello world</h1>; // The part that looks like HTML is something called JSX.

/*
JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.

A JSX expression must have exactly one outermost element. (For example a div, then code within it must be indented)

( ) are used for multiline. 

Rendering JSX Example:
*/

import React from 'react';
import ReactDOM from 'react-dom'; // ReactDom is the name of the JS Library. The library contains several React-specific methods, all of which deal with the DOM. 

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app')); 
ReactDOM.render(gooseImg, document.getElementById('app'));
// ReactDOM.render() is the most common way to render JSX. The first argument is the JSX expression, the second is the location of where this will be appended. 


// The first arguement can also be a variable, it does not have to be a JSX expression. An example is shown below. 
const toDoList = (
    <ol>
      <li>Learn React</li>
      <li>Become a Developer</li>
    </ol>
  );
   
  ReactDOM.render(
    toDoList, 
    document.getElementById('app')
  );

  /*
One special thing about ReactDOM.render() is that it only updates DOM elements that have changed.

That means that if you render the exact same thing twice in a row, the second render will do nothing:

- Ensure indentation is alright 
- ( ) is used to hold the JSX expressions. 

Class Vs className:
In HTML, it’s common to use class as an attribute name, In JSX, you can’t use the word class! You have to use className instead.
(This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.)

Self-Closing Tags: In JSX, you have to include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error:
*/

const profile = (
    <div>
      <h1>I AM JENKINS</h1>
      <img src="images/jenkins.png" />
      <article>
        I LIKE TO SIT
        <br />
        JENKINS IS MY NAME
        <br />
        THANKS HA LOT
      </article>
    </div>
  );

//This will render as HTML  <h1>2 + 3</h1>

// With { } this will render as JS. <h1>{2 + 3}</h1> == <h1>5</h1>

//example 

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

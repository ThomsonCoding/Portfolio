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

/*
Event Listeners in JSX
JSX elements can have event listeners, just like HTML elements can. Programming in React means constantly working with event listeners.

You add them similar to normal HTML, although the event needs to be in JS, so you would use { }, an example is listed below. 
*/

const kitty = (
	<img onClick={makeDoggy} 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

/*
JSX Conditionals: If Statements That Don't Work.
you can not inject an if statement into a JSX expression!

To get around this, you can write the code outside of the JSX tags, take the example below:
*/

if (user.age >= drinkingAge) {
    message = (
      <h1>
        Hey, check out this alcoholic beverage!
      </h1>
    );
  } else {
    message = (
      <h1>
        Hey, check out these earrings I got at Claire's!
      </h1>
    );
  }

//As you can see the if statement has the JSX expressions within. Allowing JS to carry out the statement first. 


/*
JSX Conditionals: The Ternary Operator.

Example:
*/
const headline = (
    <h1>
      { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
    </h1>
  );

  const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />; // Expression ? True Value : False Value.

  /*
JSX Conditionals: &&

If the expression on the left of the && evaluates as true, 
then the JSX on the right of the && will be rendered. 
If the first expression is false, however, then the JSX to the right of the && will be ignored and not rendered.
Example below.
*/

const tasty = (
    <ul>
      <li>Applesauce</li>
      { !baby && <li>Pizza</li> }
      { age > 15 && <li>Brussels Sprouts</li> } 
      { age > 20 && <li>Oysters</li> }
      { age > 25 && <li>Grappa</li> }
    </ul>
  ); // Sprouts will only appear if age > 15 is true. 


/*
.map in JSX

The array method .map() comes up often in React. It’s good to get in the habit of using it alongside JSX.
*/

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person => <li>{person}</li>);

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

/* 
Keys - When you make a list in JSX, sometimes your list will need to include something called keys:

keys don’t do anything that you can see! React uses them internally to keep track of lists. 
If you don’t use keys when you’re supposed to, React might accidentally scramble your list-items into the wrong order.

<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>

Example below
*/

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);

/*
Hello World, Part II... THE COMPONENT
React applications are made out of components.

What’s a component?

A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

*/

import React from 'react'; // This creates an object named React which contains methods necessary to use the React library.

import ReactDOM from 'react-dom'; // The methods imported from 'react-dom' are meant for interacting with the DOM. You are already familiar with one of them: ReactDOM.render().

/*
Create a Component Class:

class YourComponentNameGoesHere extends React.Component {}

*/


class ComponentFactory extends React.Component {
    // instructions go here, between the curly braces
  }

  // Example below: 
class MyComponentClass extends React.Component { // Component class variable names must begin with capital letters!
    render() {
      return <h1>Hello world</h1>;
    }
  }
   
  ReactDOM.render(
      <MyComponentClass />, //Create a Component Instance
      document.getElementById('app')
  );

  //Use parentheses to return more than one line ( )
  class QuoteMaker extends React.Component {
    render() { 
      return (
    <blockquote>
      <p>
        What is important now is to recover our senses.
      </p>
        <cite>
          <a target="_blank" 
          href="https://en.wikipedia.org/wiki/Susan_Sontag">
          Susan Sontag
        </a>
      </cite>
    </blockquote>
      )
    }
  };


  ReactDOM.render(
    <QuoteMaker />,
    document.getElementById('app')
  );

//Below is an example of calling variables within a component.
import React from 'react';
import ReactDOM from 'react-dom';

const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component {
  render() {
    return (
    <div>
      <h1>{owl.title}</h1>
        <img 
          src={owl.src}
          alt={owl.title} />
    </div>
    )
  }
};

ReactDOM.render(
  <Owl />,
  document.getElementById('app')
);
  

//Example 2 of using variables within a component class

import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render() {
    const friend = friends[0];
  return (
    <div>
      <h1>{friend.title}</h1>
      <img src={friend.src}/>
    </div>
  );
}
 }

ReactDOM.render(
  <Friend />,
  document.getElementById('app')
);

//Example of a condition in a render function

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    let task;
    if (!TonightsPlan) {
      task = 'out WOOO'
    } else {
      task = 'to bed WOOO'
    }
    return <h1>Tonight I'm going {task}</h1>;
  }
}

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('app')
);

// Example of an event listener in a react component. 

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(
	<Button />,
	document.getElementById('app')
);

//Example of password to access contact infomation
import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    let task;
    if (this.state.authorized) {
      task = 'Contact'
    } else {
      task = 'Enter the Password'
    }
    const login = (
      <form action="#" onSubmit={this.authorize}>
        <input type="password" placeholder="Password"/>
        <input type="submit"/>
      </form>
    );
    const contactInfo = (
        <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
    );
    return (
      <div id="authorization">
        <h1>{task}</h1>
         { this.state.authorized ? contactInfo : login }
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);
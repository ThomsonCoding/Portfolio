// ADDING ITEMS TO START AND END OF A LIST
var list = document.getElementsByTagName("ul")[0]; // Get the <ul> element

//  ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement("li"); // Create element
var newTextLast = document.createTextNode("cream"); // Create text node
newItemLast.appendChild(newTextLast); // Add text node to element
list.appendChild(newItemLast); // Add element to the end of the list

var newItemFirst = document.createElement("li"); //Create element
var newTextFirst = document.createTextNode("kale"); // Create text node
newItemFirst.appendChild(newTextFirst); // Add Text node to element.
list.insertBefore(newItemFirst, list.firstChild); // Add element to list

var listItems = document.querySelectorAll("li"); // All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;
for (i = 0; i < listItems.length; i++) {
  listItems[i].className = "cool";
}

// Counter variable, loops through elements and changes their class to cool.

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector("h2");
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + "<span>" + totalItems + "</span>" + " items";
heading.innerHTML = newHeading;

// Below is an insight within the DOM chapter and some of the various examples you can use the DOM when making a program.

// Below is an example of how you can store a location of the element(s) within a variable
var itemOne = document.getElementById("one");

// You can access elements using various methods. Some of these will return a single element node, others will return one or multiple.

// Single examples:
document.getElementById("id"); //Get's the element with the id attribute within the quote marks. An example could be 'one', as shown above.
document.querySelector("css selector"); //Uses CSS selector syntax, will select the fist match of this element. An example could be 'li.hot'.

// Methods that return multiple or single:
document.getElementsByClassName("Class"); // This will find either one or multiple elements which contain the class selected within the quotation marks. An example would be 'hot'.

document.getElementsByTagName("tagName"); // Selects all elements within a specific tag name, for example 'li'.

document.querySelectorAll("css selector"); // Uses CSS syntax to select one or more element, for example 'li.hot', would select all li attributes within the hot class.

// Whatever you find within ' ', after the above is known as the parameter, the method needs to know the value of the id attribute on the element you want.

// Below is an example of how you can select an element using the ID attribute and change it's class name.
var el = document.getElementById("one");
el.className = "ice";

//Selecting elements from a list can be carried out in various ways, below are two examples.
// The item() method.
var elements = document.getElementsByClassName("itemMethodExample");
if (elements.length >= 1) {
  var firstItem = elements.item(0);
}

// The Array syntax method.
var elements = document.getElementsByClassName("ice");
if (elements.length >= 1) {
  var firstItem = elements[0];
}

// You can select elements by both class attribute and tag name
var elementExample = document.getElementsByClassName("ice");
var tagExample = document.getElementsByTagName("p");

// Alternatively, you can use CSS selectors.
var qSExample = document.querySelector("p.ice");

// Sometimes using CSS selector you will get a node list, you can loop through each node in the collection and apply the statement to each.
var qSExample = document.querySelector("p.ice");
for (var i = 0; i < qSExample.length; i++) {
  qSExample[i].className = "hot";
}

// .previousSibling (Can be used to access the element before the one you select)
// .nextSibling (Can be used to access the next element after the one you select)
// firstChild (Can be used to select the first element)
// lastChild (Can be used to select the last element)

// Below is an example of how to update an item in the list using query selector.
const listItem = document.querySelector("li:nth-child(2)");

const newItem = document.createElement("li");
newItem.innerHTML = "Bacon";
listItem.parentNode.replaceChild(newItem, listItem);

/* How to update element content 
innerHTML = Gets/sets text & mark up
textContent = Gets/sets text only
innerText = Gets/sets text only
*/

var contentExample = document.getElementById("one");
var itemContent = contentExample.textContent;
contentExample.textContent = "Updated Text Content";

// The above is an example of how I would use textContent to update a ID's content.

// Adding elements to the DOM tree

// Create a new element and store it in a variable.
var newEl = document.createElement("li");

// Create a text node and store it in a variable
var newText = document.createTextNode("quinoa");

// Attach the new text node to the new element
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName("ul")[0];

// Insert the new element into its position
position.appendChild(newEl);

// Now we have added quinoa to the end of the list.
// Counter variable, loops through elements and changes their class to cool.

// After doing this we will need to update the heading stating the amount of items within the list.

var newHeading = headingText + "<span>" + totalItems + "</span>" + " items";
heading.innerHTML = newHeading;

// You can also remove an element from the DOM tree.
var removeEl = document.getElementsByTagName("li")[4];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);

var removeEl = document.getElementsByTagName("li")[3];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);

var removeEl = document.getElementsByTagName("li")[2];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);

// Now we need to update the list, so they all have the same class.
var listItems = document.querySelectorAll("li"); // All <li> elements

var a;
for (a = 0; a < listItems.length; a++) {
  listItems[a].className = "cool";
}
var updated = listItems.length;

// After doing this we will need to update the heading stating the amount of items within the list.
var newHeading = headingText + "<span>" + updated + "</span>" + " items";
heading.innerHTML = newHeading;

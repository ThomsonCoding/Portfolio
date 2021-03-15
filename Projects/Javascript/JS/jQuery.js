//jQuery is a JavaScript file that you include in your web pages. it lets you find elements using CSS-style selectors and then do something with the elements using jQuery methods.

/* Before starting with jQuery, you need to inport the library into your HTML document, you do the in a similar manner to adding this JS file to the html.
Below in this comment is the line that is added to inport the jQuery library that I use.

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
Ok, lets get started... 
*/

$("li.hot");
jQuery("li.hot");

/* The $ sign represents the word jQuery. Meaning the two examples above are stating the same thing.
What the code does it find all the <li> tags with the hot class assigned. 
The code above would select multiple elements if available, if I wanted to select a single one I could input 'ul' instead. 
You can also add classes using this jQuery Object, this is shown in the example below. */

$("li.hot").addClass("complete");

/*Why would I want to add a class? Maybe to update the CSS style, maybe an event has occurred and this would require an updated response. 
jQuery is good, as it allows you to edit a small part of the page and leave the rest as it is, making it seem more interactive to the user. */

// The purpose of jQuery is to do more and write less. For example adding the class with JS, would require you to loop through, although using jQuery, one line can loop for you.

//You can also use jQuery to select IDs instead of classes. As shown on the next line.
$('li[id="one"]').hide().delay(5000).fadeIn(1500);
/*Do you notice how this line fades into the page after the initial load (refresh to see);
The method used is chaining, adding the .hide().delay, etc. Useful for creating compact code.*/

//Checking a page is ready to work with.
$(document).ready(function () {
  console.log(
    "The code entered within the { }, will load once the page is ready"
  );
});

// Altenative shorthand method.

$(function () {
  console.log("This also works! :)");
});

// Updating element methods. Method 1, .html().

$("li.cold").html(function () {
  return "<em>" + $(this).text() + "<em>";
});

// What I have done is updated the li.cold element to contain italic writing instead of the original style seen in the li.hot elements.

// This next one I shall demonstrate the .text and .remove updates.

$(function () {
  $('li:contains("Chips")').text("Pasta");
  $("li.hot").html(function () {
    return "<em>" + $(this).text() + "</em>";
  });
  $("li#three").remove();
});

// In this code I swap chips for pasta, using the .text function. I then use the .remove function to get rid of.

/* Inserting elements:

.before() = Insert content before the selected element(s).
.after() = Insert content after the selected element(s).
.prepend() / prependTo(b) = Insert content after opening tag(s).
.append() / appendTo(b) = Insert content before closing tag(s).
*/

$(function () {
  $("ul").before("<p>Updated list<p>"); // add update text to the top.
  $("li.hot").prepend("+ "); // Using prepend to add the + sign at the start of li.hot elements.
  var $newListItem = $("<li>Soy sauce</li>"); //Creating a new list item.
  $("li:last").after($newListItem); // Adding this list item to the bottom of the list.
});

/* Getting and setting attribute values

	.attr() = Can be used to set a specified attribute and its value. To get the value of an attribute, 
	you specify the name of the attribute in the parenthesis for example $('li#one.attr('id');
	
	.removeAttr() = This method removes a specified attribute (and its value). You just specify the name of the attribute 
	that you want to remove from the element in the parentheses. For example $('li#one').removeAttr('id');
	
	
	.addClass() = This method adds a new value to the existing value of the class attribute. It does not overwrite existing ones.
	
	.removeClass() = This method removes a value from the class attribute, leaving any other class names within that attribute intact.
*/

$(function () {
  $("li#three").addClass("hot"); // Adding hot class to Soy Sauce.
  $("li#three").removeClass("hot"); // Removing hot class to Soy Sauce.
  $("li#three").addClass("cold"); // Adding the correct class to Soy Sauce.
});

// Getting and setting CSS properties. .css() allows you to retrive and set the values of CSS properties.

$(function cssProp() {
  var backgroundColor = $("li").css("background-color");
  $("li").css({
    "background-color": "lightgrey",
    border: "1px solid #fff",
    color: "#000",
    "padding-left": "+=75",
  });
});

// Originally the text on the list displayed green for Kebab and Pasta, although above overrules all the CSS set for li, and adds new CSS values.

// If we wanted to make it interactive, we could ad an event method.

$("li").on("click", function () {
  $(this).remove();
});

// This code means that when you click on the list, which ever li you select you can remove.

/*Finding items by order

.eq() The element that matches the index number.
:lt() Elements with an index less than the number specified. 
:gt() Elements with an index greater than the number specified. 

*/

/* Working with forms: */

$(function () {
  var $newItemButton = $("#newItemButton");
  var $newItemForm = $("#newItemForm");
  var $textInput = $("input:text");

  $newItemButton.show();
  $newItemForm.hide();

  $("#showForm").on("click", function () {
    $newItemButton.hide();
    $newItemForm.show();
  });

  $newItemForm.on("submit", function (e) {
    e.preventDefault();
    var newText = $textInput.val();
    $("li:last").after('<li class="newList">' + newText + "</li>");
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val("");
  });
});

// Work out remove issue and padding issue.

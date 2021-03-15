/* 

Form Enhancement: This section features many examples of form enhancement. 
Each one introduces the different properties and methods you can use when working with forms. 

HTML5 Form events: HTML5 contains validation features that do not use JavaScript.
This section addresses ways in which you can offer validation to old and new browsers in a consistent way. 

The Form Element: DOM nodes for form controls have different properties, methods and events than some of the other elements you have seen so far. 
Here are some you should note for the <form> element. 

*/

function addEvent(el, event, callback) {
  if ("addEventListener" in el) {
    el.addEventListener(event, callback, false);
  } else {
    el["e" + event + callback] = callback;
    el[event + callback] = function () {
      el["e" + event + callback](window.event);
    };

    el.attachEvent("on" + event, el[event + callback]);
  }
}

/*

THE FORM ELEMENT:
action - The URL the form is submitted to. 
method - If it is to be set via GET or POST.
name - Rarely used, more common to select a form by the value of its ID attribute.
elements - A collection of the elements in the way form that users can interact with. They can be accessed via index numbers of the value of their name attributes.
Example: 

document.forms[1]; 
document.forms.login; 
document.forms[1].elements[0];
document.forms[1].element.password; 


FORM CONTROLS:
Each type of form control uses a different combination of the properties, methods and events shown below. 
Note that the methods can be used to simulate how a user would interact with the form controls. 


Properties:
value - In a text input, it is the text the user entered; otherwise, it is the value of the value attribute.
type - When a form control has been created using the <input> element, this defines the type of the form element (e.g., text, password, radio, checkbox)
name - Gets or sets the value of the name attribute
defaultValue - The set value within the form once the page renders 
form - The form that the control belongs to 
disable - Disables the <form> element 
checked - Indicates which checkbox or radio buttons have been checked. This property is a boolean; in JavaScript it will have a value of true if checked. 

Methods:
focus() - Gives an element focus
blur() - Removes focus from an element
select() - Selects and highlights text content of an element (e.g., text inputs, the areas, and passwords); 
click() - Triggers a click event upon buttons, checkboxes, and file uploads, Also triggers a submit event on a submit button or the reset event on a reset button. 

Event:
blur - When the user leaves a field 
focus - When the user enters a field
click - When the user clicks on an element
change - When the value of an element changed
input - When the value of an <input> or <textarea> element changes
keydown, keyup, keypress - When a user interacts with a keyboard

First example: Submitting form */

(function () {
  //Get form element
  var form = document.getElementById("login");

  addEvent(form, "submit", function (e) {
    //When user submits form
    e.preventDefaults(); // Stop it being sent
    var elements = this.elements; // Get all form elements
    var username = elements.username.value; // Select username entered
    var msg = "Welcome " + username; //Create welcome message
    document.getElementById("main").textContent = msg; // Write welcome message
  });
})();

// Below is a function which allows the user to select if the password inputed is visibile or not.

(function () {
  var pwd = document.getElementById("pwd"); // Get password input
  var chk = document.getElementById("showPwd"); // Get checkbox

  addEvent(chk, "change", function (e) {
    //When user clicks on checkbox
    var target = e.target || e.srcElement; //Get that element
    try {
      //Try the following code block
      if (target.checked) {
        //If the checkbox is checked
        pwd.type = "text"; //Set pwd type to text
      } else {
        //Otherwise
        pwd.type = "password"; //Set pwd type to password
      }
    } catch (error) {
      // If this causes an error
      alert("This browser cannot switch type"); // Say 'This browser cannot switch type'
    }
  });
})();

// Within forms, using check boxes are very useful. You also need to make them as usable as possible. Below is an example of the code used for checkboxes which will allow the user to select an option for all as well. \

(function () {
  var form = document.getElementById("interests");
  var elements = form.elements;
  var options = elements.genre;
  var all = document.getElementById("all");

  function updateAll() {
    for (var i = 0; i < options.length; i++) {
      options[i].checked = all.checked;
    }
  }
  addEvent(all, "change", updateAll);

  function clearAllOption(e) {
    var target = e.target || e.srcElement;
    if (!taget.checked) {
      all.checked = false;
    }
  }

  for (var i = 0; i < options.length; i++) {
    addEvent(options[i], "change", clearAllOption);
  }
})();

// Radio Buttons (in a graphical display) an icon representing one of a set of options, only one of which can be selected at any time.

(function () {
  var form, options, other, otherText, hide;
  form = document.getElementById("how-heard");
  options = form.elements.heard;
  other = document.getElementById("other");
  otherText = document.getElementById("other-text");
  otherText.className = "hide";

  for (var i = [0]; i < options.length; i++) {
    addEvent(options[i], "click", radioChanged);
  }

  function radioChanged() {
    hide = other.checked ? "" : "hide";
    otherText.className = hide;
    if (hide) {
      otherText.value = "";
    }
  }
})();

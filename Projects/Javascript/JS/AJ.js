/* AJAX allows you to request data from a server and load it without having to refresh the entire page. 
Data formats, servers typically send back HTML, XML or JSON, these will all be mentioned in the code below. 
JQuery makes it easier to create Ajax requests and process the data the server returns */

/* An example of AJAX, is when you start typing into google and it comes up with example searches below. 
You would use AJAX so users can continue to use the site whilst this section of the page is loading. 

How AJAX works 

The Request -> on the Server -> the response. 

THE REQUEST:
The browser requests data from the server. The request may include information that the server needs.
Just like a form might send data to a server. 
Browsers implement an object called XMLHttpRequest to handle Ajax requests. Once a request has been made, 
the browser does not wait for a response from the server. 

EXAMPLE:
*/

var xhr = new XMLHttpRequest(); //An instance of the XMLHttpRequest object is created using object constructor notation. (Stored the object in a variable).

xhr.open("GET", "data/test,json", true); //Open method is used to prepare the request, it has three parameters. The HTTP method, The url of the page you want to handle, boolean indication if it should be asynchronous.

xhr.send("search=arduino"); // The send data sends the prepared request to the server, extra information can be passe within the parentheses.

/*

ON THE SERVER: 
The server responds with data (usually HTML, XML, or JSON).
What happens on the server is not part of what is called Ajax.
Server-side technologies such as ASP.net, PHP, NodeJs or Ruby can generate web pages for each user. 
When there is an Ajax request, the server might send back HTML, or it might send data in a different format such as JSON or XML
(which the browser turns into HTML).

THE RESPONSE:
The browser processes the content and adds it to the page. 
When the server has finished responding to the request, the browser will fire an event. This can trigger a JS function, 
that will process the data and incorporate it into one part of the page. 

EXAMPLE:
*/

xhr.onload = function () {
  //Part 1
  if (xhr.status === 200) {
    //Part 2.
    // Code to process the results from the server.
  }
};

/*
Part 1: When the browser has received and loaded a response from the server, onload will fire an event. 

Part 2: The function checks the status property of the object, this is used to make sure the server's response was okay. 
*/

/* The response to an AJAX comes back in one of three data formats. 

HTML - Standard HTML as seen during web creation.  

XML - Similar to HTML, although tag names are different as they describe the data that they contain. Syntax is also more strict than HTML. 

EXAMPLE: 
<event>
	<location> Manchester </location>
	<date> May 15 </date>
</event>

JSON - JavaScript Object Notation, uses a similar syntax to object literal notation. 

EXAMPLE: 
"events": [
	{ "location": "Manchester", "date": "May 15" }
	]

*/

/* Loading HTML with AJAX: This is the easiest way, because the browser renders like any HTML page and the CSS still apply. 

Below is an example of what the JS code would look like */

var xhr = new XMLHttpRequest(); //Create XMLHttpRequest object

xhr.onload = function () {
  if (xhr.status === 200) {
    // Parameter will not work locally.
    document.getElementById("content").innerHTML = xhr.responseText; //update. Will replace the HTML with the content from the server.
  }
};

xhr.open("GET", "data/data.html", true); // Prepare the request
xhr.send(null); // Send the request

/* When the server responds to a request, it should send back a status to the message. The values can be: 
200 - The server has responded and all is ok. 
304 - Not modified.
404 - Page not found.
500 - internal error on the server. 
*/

/*Loading XML with AJAX is slight more complicated as you have to convert the XML into HTML to be shown on the page. 

HTML CODE EXAMPLE: 

<div class="event">
	<img src="file.png" alt="location" />
	<p><b>Location</b><br/>Event date</p>
</div>

Javascript Example: */

var xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (xhr.status === 200) {
    // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML

    var response = xhr.responseXML; //Get XML from the server
    var events = response.getElementsBytagName("event"); //Find event element (Located in the html code example)

    for (var i = 0; i < events.length; i++) {
      //Loop through them
      var container, image, location, city, newline; //Declare variables.
      container = document.createElement("div"); //Create Div container.
      container.className = "event";

      image = documentcreateElement("img"); //Add map
      image.setAttribute("src", getNodeValue(events[i], "map"));
      image.setAttribute("alt", getNodeValue(events[i], "location"));
      container.appendChild(image);

      location = document.createElement("p"); //Add location.
      city = document.createElement("b");
      newline = document.createElement("br");
      city.appendChild(
        document.createTextNode(getNodeValue(events[i], "date"))
      );
      location.appendChild(newline);
      location.insertBefore(city, newline);
      location.appendChild(
        document.createTextNode(getNodeValue(events[i], "date"))
      );
      container.appendChild(location);

      document.getElementById("content").appendChild(container);
    }
  } // End if statement.

  function getNodeValue(obj, tag) {
    // Gets content from XML.
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }
};

xhr.open("GET", "data/data.html", true); // Prepare the request
xhr.send(null); // Send the request

/* Loading JSON with AJAX. When the server responds you will have to convert the JSON to HTML.

example of .json: 

"events": [
	{ "location": "Manchester", "date": "May 15", "map": "img/map-ma.png" }
	{ "location": "Newcastle", "date": "June 21", "map": "img/map-ma.png" }
	{ "location": "London", "date": "March 19", "map": "img/map-ma.png" }
	]
	
When JSON daa is sent from a server to a web page it is transfered as a string. 
Your script must then convert this string into a JS object (This is known as deserialising an object).

Example of the JS required to conver this.

*/

var xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    // Build up string with new content (could also use DOM manipulation.)

    var newContent = "";
    for (var i = 0; i < responseObject.events.length; i++) {
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += "<p><b>" + responseObject.events[i].location + "</b><br>";
      newContent += respoonseObject.events[i].date + "</p>";
      newContent += "</div>";
    }

    document.getElementById("content").innerHTML = newContent;
  }
};

xhr.open("GET", "data/data.html", true); // Prepare the request
xhr.send(null); // Send the request

/* Ajax works smoothly with date from your own server, but for security reasons browsers do not load Ajax responses from other domains. 

Ways around this: 
- A proxy file on the webserver.
- JSONP (JSON with padding).
- Cross-origin resource sharing.

*/

/* jQuery and AJAX requests. 

jQuery provides several methods that handle ajax requests. Just like all the examples above the process involves two steps. 
Making a request and handling the response. 

Requests: 

.load() = Loads HTML fragments into an element, It is the simplest method to receive data. 

$.get() = Loads data using the HTTP GET method, used to request data from the server. 

$.post() = Loads data using the HTTP POST method, used to send data that updates data on the server. 

$.getJSON() = Loads JSON data using a get request, used for JSON data. 

$.getScript() = Loads and executes JavaScript data using GET, used for javaScript (e.g. JSONP) data. 

$.ajax() = This method is used to perform all requests, the above methods all use this under the hood. 


JQXHR Properties description (jQuery has an object called jqXHR, which makes it easier to handle the data that is returned from the server):

responseText = Text-based data returned.

responseXML = XML data returned

status = Status code (200 means the server has responded and all is ok.)

statusText = Status description (Typically used to display the information about an error if one occurs)



Responses:

.done() = Code to run if request was successful. 

.fail() = Code to run if request was unsuccessful. 

.always() = Code to run if request succeeded or failed.

.abort() = Halt the communication. 


//Loading HTML into a page with jQuery.

$('content') = This creates a jQuery object with the elements whose id attribute has a value of content. 

'jq-ajax3.html = This is the URL of the page you want to load the HTML from. (There must be a space between this step and the next one.)

#content' = This is the fragment of the HTML page to show. Again it is the section whose id has a value of content. 
*/

$("content").load("jq-ajax3.html #content");

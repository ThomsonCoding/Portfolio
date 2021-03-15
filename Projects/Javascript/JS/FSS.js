/* Filtering, Searching & Sorting.

Filtering - Lets you reduce a set of values, by selecting the ones that meet stated criteria. 

Search - Search lets you show the items that match one or more words the user specifies. 

Sorting - Sorting lets you re-order a set of items on the page based on criteria (for example, alphabetically).



During this chapter we will be storing our data within arrays (Similar to objects/lists).

You can use commands to add, remove, iterate, combine, filter, reorder and modify an array. 
You can also use jQuery methods to make this easier for yourself.

Some of the older browsers will not support some of the commands you can use, this is why you include a script to reproduce the functionality in legacy browsers. 
Example: https://github.com/es-shims/es5-shim

*/

// Objects in an Array:

var people1 = [
  { name: "Daniel", rate: 75, active: true },
  { name: "Bob", rate: 60, active: false },
  { name: "James", rate: 80, active: true },
  { name: "Raul", rate: 70, active: true },
];

// To retrieve data from an array you could use the following
var person1name = people1[1].name;
var person1rate = people1[1].rate;

console.log(person1name + " " + person1rate); // Testing by logging the variables to the console.

// Objects as properties:

var people2 = {
  Daniel: { rate: 75, active: true },
  Bob: { rate: 60, active: false },
  James: { rate: 80, active: true },
  raul: { rate: 70, active: true },
};

// To retrieve data when object is as a property.

var person2active = people2.Daniel.active;
var person2rate = people2.Daniel.rate;

console.log(person2active + " " + person2rate); // Testing by logging the variables to the console.

/* Lets start with filtering, filtering lets you reduce a set of values. It allows you to create a subset of data that meets certain criteria. 

Lets filter through the objects in an array, to filter out any of the free lancers who have a rate above 73.

*/

$(function () {
  var people = [
    { name: "Daniel", rate: 75 },
    { name: "Bob", rate: 60 },
    { name: "James", rate: 80 },
    { name: "Raul", rate: 70 },
  ];

  var results = [];
  people.forEach(function (person) {
    if (person.rate >= 73 && person.rate <= 95) {
      results.push(person);
    }
  });

  // Loop through new array and add matching people to the results of the table.
  var $tableBody = $("<tbody></tbody>"); // New content jQuery
  for (var i = 0; i < results.length; i++) {
    //Loop through matches
    var person = results[i]; // Store current person
    var $row = $("<tr></tr>"); // Create a row for them
    $row.append($("<td></td>").text(person.name)); // Add their name
    $row.append($("<td></td>").text(person.rate)); // Add their rate
    $tableBody.append($row); // Add row to new content
  }

  // Add the new content after the body of the page
  $("thead").after($tableBody); // Add tbody after thread
});

/* Filtering through an image gallery
Below is how to create a gallery of image, that users can filter through to show matching images. 

For this, the images are tagged, you then filter the images using these tags, by selecting the filter buttons.=


*/

$(
  (function () {
    var $imgs = $("#gallery img"); // Store all images
    var $buttons = $("#buttons"); // Store buttons element
    var tagged = {}; // Create tagged object

    $imgs.each(function () {
      //Loop through images
      var img = this; // Store img in variable
      var tags = $(this).data("tags"); // Get this element's tags

      if (tags) {
        // If the element had tags
        tags.split(",").forEach(function (tagName) {
          //Split at comma and
          if (tagged[tagName] == null) {
            // If the object doesn't have a tag
            tagged[tagName] = []; // Add empty array to object
          }
          tagged[tagName].push(img); // Add the image to the array
        });
      }
    });

    $("<button/>", {
      //  Create empty button
      text: "Show All", // Add text 'show all'
      class: "active", // Make it active
      click: function () {
        // Add onclick handler to it
        $(this) // Get the clicked on button
          .addClass("active") // Add the class of active
          .siblings() // Get its siblings
          .removeClass("active"); // Remove active from them
        $imgs.show(); // Show all images
      },
    }).appendTo($buttons); // Add to buttons

    $.each(tagged, function (tagName) {
      // For each tag name
      $("<button/>", {
        // Create empty button
        text: tagName + " (" + tagged[tagName].length + ")", // Add tag name
        click: function () {
          // Add click handler
          $(this) // The button clicked on
            .addClass("active") //Make Clicked item active
            .siblings() // get its siblings
            .removeClass("active"); // Remove active from them
          $imgs // With all of the images
            .hide() // Hide them
            .filter(tagged[tagName]) // Find the ones with this tag name
            .show(); // Show just those images
        },
      }).appendTo($buttons); // Add to the buttons
    });
  })()
);

/* Search is just like filtering but you show only results that match to a searched term.
In this example, you will see a technique known as live search.
The alt text for the images is used for the search instead of tags.

In the last example we looked at the Data-tags, this time we will narrow the search down by using the alt. 
*/

(function () {
  var $imgs = $("#gallery img");
  var $search = $("#filter-search");
  var cache = [];

  $imgs.each(function () {
    cache.push({
      element: this,
      text: this.alt.trim().toLowerCase(),
    });
  });

  function filter() {
    var query = this.value.trim().toLowerCase();

    cache.forEach(function (img) {
      var index = 0;
      if (query) {
        index = img.text.indexOf(query);
      }

      img.element.style.display = index === -1 ? "none" : "";
    });
  }

  if ("oninput" in $search[0]) {
    $search.on("input", filter);
  } else {
    $search.on("keyup", filter);
  }
})();

/* Sorting involves taking a set of values and reordering them. 
Computers often need detailed instructions about in order to sort data.
In this section, you will meet the array sort() method.  */

var names = ["Bob", "Andy", "Clive", "rudolf"];
console.log(names.sort());

/* As you can see from the console, this is now ordered alphabetically.

Sorting numbers are also sorted lexicographically, meaning the sort will not run as smoothly.

1, 2, 15 would sort into 1, 15, 2. To get around this you would need to use a compare function.

*/

var prices = [1, 2, 125, 2, 19, 14];
console.log(prices.sort());

// Ascending

var pricesAscending = [1, 2, 125, 2, 19, 14];
pricesAscending.sort(function (a, b) {
  return a - b;
});

// Descending

var pricesDescending = [1, 2, 125, 2, 19, 14];
pricesDescending.sort(function (a, b) {
  return b - a;
});

// Random Order

var pricesRandom = [1, 2, 125, 2, 19, 14];
pricesRandom.sort(function (a, b) {
  return 0.5 - Math.random();
});

console.log(pricesAscending);
console.log(pricesDescending);
console.log(pricesRandom);

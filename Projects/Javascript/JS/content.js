/* Content panels allow you to showcase extra information within limited space. 
In this chapter, you will see several examples of content panels that also give you practical insight into creating your own scripts using jQuery.

Examples covered within the book:
- Accordion.
- Tabbed panel.
- Modal window. 
- Photo viewer. 
- Responsive slider.
- Creating a jQuery plugin.

It is good to remember that it is best practice to separate your content (In HTML), presentation (In CSS rules), and behaviour in JavaScript
It is also good to remember, that some users might not have JavaScript enabled, this means you need to provide alternative styling just incase. 

 */

/* Accordion: 

When you click on a title of an accordion, its corresponding panel expands to reveal the content. 

Below is the JS for accordion, I have also added the CSS within the content.css and html with contentExample.html

*/

$(".accordion").on("click", ".accordion-control", function (e) {
  //When clicked
  e.preventDefault(); // Prevent default action
  $(this).next(".accordion-panel").not(":animated").slideToggle(); // Get the element user clicked, select following panel, if it is not currently animating, use slide toggle to show/hide.
});

/* Tabbed panel:

When you click on one of the tabs, its corresponding panel is shown. Tabbed panels look a little like index cards. 

*/

$(".tab-list").each(function () {
  //Find lists of tabs
  var $this = $(this); //Store this list
  var $tab = $this.find("li.active"); //Get the active list item
  var $link = $tab.find("a"); //Get link from active tab
  var $panel = $($link.attr("href")); //Get active panel

  $this.on("click", ".tab-control", function (e) {
    // When click on a tab
    e.preventDefault(); //Prevent link behaviour
    var $link = $(this); // Store the current link
    var id = this.hash; // Get href of click tab

    if (id && !$link.is(".active")) {
      //If not currently active
      $panel.removeClass("active"); //Make panel inactive
      $tab.removeClass("active"); // Make tab inactive

      $panel = $(id).addClass("active"); // Make new panel active
      $tab = $link.parent().addClass("active"); //Make new tab active
    }
  });
});

/* Modal Window:
A modal window is any type of content that appears "in front of" the rest of the page's content. 
It must be "closed" before the rest of the page can be interacted with.  

This first script creates the modal object.
*/

var modal = (function () {
  // Declare modal object

  var $window = $(window); // Store the window
  var $modal = $('<div class="modal"/>'); // Create markup for modal
  var $content = $('<div class="modal-content"/>');
  var $close = $('<button role="button" class="modal-close">X</button>');

  $modal.append($content, $close); // Add close button to modal

  $close.on("click", function (e) {
    // If user clicks on close
    e.preventDefault(); // Prevent link behavior
    modal.close(); // Close the modal window
  });

  return {
    // Add code to modal
    center: function () {
      // Define center() method
      // Calculate distance from top and left of window to center the modal
      var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
      var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
      $modal.css({
        // Set CSS for the modal
        top: top + $window.scrollTop(), // Center vertically
        left: left + $window.scrollLeft(), // Center horizontally
      });
    },
    open: function (settings) {
      // Define open() method
      $content.empty().append(settings.content); // Set new content of modal

      $modal
        .css({
          // Set modal dimensions
          width: settings.width || "auto", // Set width
          height: settings.height || "auto", // Set height
        })
        .appendTo("body"); // Add it to the page

      modal.center(); // Call center() method
      $(window).on("resize", modal.center); // Call it if window resized
    },
    close: function () {
      // Define close() method
      $content.empty(); // Remove content from modal
      $modal.detach(); // Remove modal from page
      $(window).off("resize", modal.center); // Remove event handler
    },
  };
})();

// This second script opens a model window using the model object.

(function () {
  var $content = $("#share-options").detach(); // Remove modal from page

  $("#share").on("click", function () {
    // Click handler to open modal
    modal.open({ content: $content, width: 340, height: 300 });
  });
})();

/* Response Slider:
A slider positions a series of items next to each other, but only shows one at a time. 
The images then slide from one to the next. 

*/

$(".slider").each(function () {
  // For every slider
  var $this = $(this); // Current slider
  var $group = $this.find(".slide-group"); // Get the slide-group (container)
  var $slides = $this.find(".slide"); // Create jQuery object to hold all slides
  var buttonArray = []; // Create array to hold navigation buttons
  var currentIndex = 0; // Hold index number of the current slide
  var timeout; // Sets gap between auto-sliding

  function move(newIndex) {
    // Creates the slide from old to new one
    var animateLeft, slideLeft; // Declare variables

    advance(); // When slide moves, call advance() again

    // If it is the current slide / animating do nothing
    if ($group.is(":animated") || currentIndex === newIndex) {
      return;
    }

    buttonArray[currentIndex].removeClass("active"); // Remove class from item
    buttonArray[newIndex].addClass("active"); // Add class to new item

    if (newIndex > currentIndex) {
      // If new item > current
      slideLeft = "100%"; // Sit the new slide to the right
      animateLeft = "-100%"; // Animate the current group to the left
    } else {
      // Otherwise
      slideLeft = "-100%"; // Sit the new slide to the left
      animateLeft = "100%"; // Animate the current group to the right
    }
    // Position new slide to left (if less) or right (if more) of current
    $slides.eq(newIndex).css({ left: slideLeft, display: "block" });

    $group.animate({ left: animateLeft }, function () {
      // Animate slides and
      $slides.eq(currentIndex).css({ display: "none" }); // Hide previous slide
      $slides.eq(newIndex).css({ left: 0 }); // Set position of the new item
      $group.css({ left: 0 }); // Set position of group of slides
      currentIndex = newIndex; // Set currentIndex to the new image
    });
  }

  function advance() {
    // Used to set
    clearTimeout(timeout); // Clear previous timeout
    timeout = setTimeout(function () {
      // Set new timer
      if (currentIndex < $slides.length - 1) {
        // If slide < total slides
        move(currentIndex + 1); // Move to next slide
      } else {
        // Otherwise
        move(0); // Move to the first slide
      }
    }, 4000); // Milliseconds timer will wait
  }

  $.each($slides, function (index) {
    // Create a button element for the button
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {
      // If index is the current item
      $button.addClass("active"); // Add the active class
    }
    $button
      .on("click", function () {
        // Create event handler for the button
        move(index); // It calls the move() function
      })
      .appendTo(".slide-buttons"); // Add to the buttons holder
    buttonArray.push($button); // Add it to the button array
  });

  advance(); // Script is set up, advance() to move it
});

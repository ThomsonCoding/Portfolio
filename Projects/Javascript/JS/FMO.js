// Functions, Methods and Objects Javascript examples.

// Declaring a function requires the function keyword, a function name, then some code for it to run. As shown in the example below.

function sayHello() {
  document.write("Hello");
}

// To call the function, you must write the function name with "();" afterwards. Below I call the function for saying hello. As you can see from the output, this says hello.

sayHello();

// Some functions require parameters, these are similar to variables. This is when they require information in order for them to work. The below is a function for multiplying the width and the height.
function getArea(width, height) {
  return width * height;
}

// I can then call the function with the parameters set within the brackets, as shown below.

getArea(5, 10);

// Similar you can do this by using arguments as variables.

wallWidth = 5;
wallHeight = 10;
getArea(wallWidth, wallHeight);

// You use a function when having a task that requires repeating. So you do not need to duplicate the code.
var wallOne = getArea(5, 10);
var wallTwo = getArea(10, 20);
document.write("<br/>", wallOne, "<br/>", wallTwo, "<br/>");

// You can also get multiple values from a function, take a look at the example below.

function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}

var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];
document.write("<br/>", areaOne, "<br/>", volumeOne, "<br/>");

// As you can see, by using [n], I can select which one of the functions I would like to run. By using [0], I selected the first one, by using [1], I selected the second one.

//Function expressions. Below is an example of a function expression, this is where you set a variable for the function. You would do this as it would only run once the interpreter gets to that statement. This means you are unable to call this before the interpreter has reached it. Also means, that any code that appears up to  that point could potentially alter what goes on inside this function.

var area = function (width, height) {
  return width * height;
};

var sizeOfArea = area(3, 4);
document.write("<br/>", sizeOfArea, "<br/>");

// Variable scope. If the variables are made within the function, it will be a local variable. This means you are unable to access it outside of the function.
// If a variable is created outside of the function. Then it can be used anywhere.

// Objects. Below is an example of an object. This example is my old university.

var university = {
  name: "MMU",
  students: 95000,
  lecturers: 1000,
  library: true,
  studentTypes: ["Undergraduate", "Post graduate"],
  checkStudentPerLecture: function () {
    return this.students / this.lecturers;
  },
};

// Below are two different methods of how you would access an object or run a function within the object.
var uniName = university.name;
var studentAmount = university.checkStudentPerLecture();

var students = university["name"];
var studentAmountExample2 = university["checkStudentPerLecture"]();

// Below is an example of how to update an object

university.name = "UOM";

//Or

university["name"] = "UOM";

// Before these two lines the console would have logged MMU, but now they will log another university within manchester "UOM".

// All is well and good but what if I wanted an object for all of the universities in manchester? Below is an example of how I could do this.
// This is a keyword,always refers to the object in which the function operates.

function manchesterUniversities(name, students, lecturers, library) {
  this.name = name;
  this.students = students;
  this.lecturers = lecturers;
  this.library = library;
  this.checkStudentPerLecture = function () {
    return this.students / this.lecturers;
  };
}

// Below creates each university separately.

var MMU = new manchesterUniversities("MMU", 95000, "1000", true);
var UOM = new manchesterUniversities("UOM", 100000, "1000", true);
var Salford = new manchesterUniversities("Salford", 60000, "50", true);

// Accessing the details to place on a web application example.
// Set the details variable to the information required
// Adds the details of the function to the variable.
// Accesses the ID on the HTML page
// Places the information within that ID
// Repeat for UOM

var details1 = MMU.name + " Students Per Lecture: ";
details1 += MMU.checkStudentPerLecture();
var uni1 = document.getElementById("uniOne");
uni1.textContent = details1;

var details2 = UOM.name + " Students Per Lecture: ";
details2 += UOM.checkStudentPerLecture();
var uni2 = document.getElementById("uniTwo");
uni2.textContent = details2;

// Adding Properties (Below example adds the gym property.)
MMU.gym = true;

// Removing Properties (Below example removes the library property.)
delete MMU.library;

// Javascript also has built in properties, the one below will get the information on when the file was last edited. Although you can do much more such as getting the Title, URL, Domain, Window Size, etc.
document.write("This code was last edited " + document.lastModified + "<br/>");

// You can also use it to change date, for example changing everything to upper case, or lower case, etc. The example below gets the length of Salford variable created earlier.

document.write(Salford.name.length + "<br/>");

// Can also use it to gather information such as todays date.
// using the getHours function I can single out the information I want, if I wanted the minutes I could use getMinutes, Seconds would be getSeconds, etc.
var today = new Date();
document.write(today + "<br/>" + date.getHours);

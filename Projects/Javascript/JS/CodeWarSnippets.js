/* Snippets of useful information (For code war challenges please scroll down): 

.forEach()

For each is a method calls a function once for each element in an array, in order.

Example: 
*/
const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});

/* The above will log: 
Picasso is one of my favorite artists.
Kahlo is one of my favorite artists.
Matisse is one of my favorite artists.
Utamaro is one of my favorite artists.
*/

/*
.map()

Creates a new array with the results of calling a function for every array element.
*/

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

/* The above will log: 
[ 1, 4, 9, 16, 25 ]
*/

/* other example:
Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the numbers array or by making your own array!
*/

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

const squareNums = (arr) => arr.map(toSquare);

console.log(squareNums(numbers)); // [ 4, 49, 81, 29241, 2704, 1089, 196 ]

/* 
.filter()

The filter method creates an array filled with all array elements that pass a test (provided by a function).
The belows example of the test provided by a function is that it requests it only returns numbers. 
*/

const things = ["desk", "chair", 5, "backpack", 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});

console.log(onlyNumbers);

/* The above will log: 
[ 5, 3.14, 100 ]
*/

/*
.findIndex()

Find index is a method that returns the index of the first array element that passes a test (provided by a function).
*/

const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex((num) => {
  return num < 10;
});

console.log(lessThanTen);

/* The above will log: 
Output: 3 (As it is the the 4th number on the list (0,1,2,3))
*/

const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant";
});

console.log(foundAnimal); // Will return 7. As Elephant is at 7 on the array.

const startsWithS = animals.findIndex((animal) => {
  return animal.charAt(0) === "s"; //Will return 3. As Seal is at 3 on the array.
});

console.log(startsWithS);

/*
.reduce()

The Array.reduce() method executes a reducer function for each value of an array.

Array.reduce() returns a single value which is the function's accumulated result.

Array.reduce() does not execute the function for empty array elements.

Array.reduce() does not change the original array.
*/

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(summedNums); // Output: 17

/*
Example of using for each, to pass through every item in an array through the functions.
*/

const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
};

console.log(politelyDecline(veggies));

/* This will log.
No broccoli,spinach,cauliflower,broccoflower please. I will have pizza with extra cheese.
*/

const politelyAccept = (veg) => {
  console.log("Ok, I guess I will eat some " + veg + ".");
};

const acceptEverything = (arr) => {
  arr.forEach(politelyAccept);
};

console.log(acceptEverything(veggies));

/* This will log.
Ok, I guess I will eat some broccoli.
Ok, I guess I will eat some spinach.
Ok, I guess I will eat some cauliflower.
Ok, I guess I will eat some broccoflower.
*/

//////////////////// CODE WAR CHALLENGES ////////////////////

/* 
CodeWar Challenges are listed below, with the challenge, my solution and alternative solutions. 

Given an array of ones and zeros, convert the equivalent binary value to an interger.
Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

Solution: In this method we iterate over the binary array and construct a decimal based on the corresponding binary numbers. 
We will use the left shift operator (<<) to shift the accumulated value to left by one bit every time and return the bitwise OR (|) of the shifted accumulated value and current value.
*/

const binaryArrayToNumber = (arr) => {
  return arr.reduce((acc, val) => {
    return (acc << 1) | val;
  });
};

//////////////////////////

/* Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

Solution: Using the remainder operator to see if the inputed number is divisible by 2, if it has a remainder it is an odd number, if not it is an even number. 
*/

function even_or_odd(number) {
  if (number % 2 == 0) return "Even";
  else return "Odd";
}

//////////////////////////

/* You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.

Solution: Sum using reduce which starts at 0, if the current number is bigger than 0 add it to the previous one, if it is not then return the previous number (As it will mean the number is negative).
*/

function positiveSum(arr) {
  return arr.reduce((prev, current) => {
    if (current > 0) {
      return prev + current;
    }

    return prev;
  }, 0);
}

//////////////////////////

/*
Very simple, given a number, find its opposite.

Examples:
1: -1
14: -14
-34: 34

Soloution: If the number is above 0, minus that number form itself twice to get the negitive value.
If the number is lower than 0, add the number together twice to get the positive value.
Although the issue with this solution 
*/

function opposite(number) {
  if (number > 0) return number - number - number;
  else return number + number + number;
}

/* After googling some alternatives I discovered 
Math.abs(), which converts a negative number to a positive one in JavaScript
*/

function opposite(number) {
  if (number > 0) return number - number - number;
  else return Math.abs(number);
}

// Alternative solutions to this problem.

function opposite(number) {
  return -number;
}

//OR

const opposite = (number) => -number;

makeNegative = (n) => -Math.abs(n);
/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12

Soloution: To return the negative alternative but only if the number is greater than 0. To prevent converting positive numbers
*/

function makeNegative(num) {
  if (num > 0) return -num;
  else return num;
}

// Alternative solutions to this problem.

function makeNegative(num) {
  return -Math.abs(num);
}

//OR

makeNegative = (n) => -Math.abs(n);
makeNegative = (n) => -Math.abs(n);

/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

'eloquent' would become 'loquen'.
*/

function removeChar(str) {
  str = str.substring(1); // Used to subtract the first letter of the string.
  str = str.slice(0, -1); // Used slice to remove the final chatacter of the string.
  return str;
}

// Alternative solutions to this problem.
function removeChar(str) {
  return str.slice(1, -1);
}

//Slice can be used to take off the first and the last charachter as shown in the example above. Meaning you can remove the substring line.

/* Write a function called repeat_str which repeats the given string src exactly count times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

solution was to use the .repeat function, to get the string to repeat the alloted number set the variable n. 
*/

function repeatStr(n, s) {
  //Input number and string
  if (n > 0)
    // If number is greater than 0
    return s.repeat(n);
  //Repeat s (string) n (number) amount of times.
  //else
  else return ""; //return empty string
}

//Alternative methods
//Option 1. Similar to mine, although running without checking if above 0.
function repeatStr(n, s) {
  return s.repeat(n);
}
// Option 2. Shorthanded version of the one above.
repeatStr = (n, s) => s.repeat(n);

/* Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e. friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

*/

function friend(friends) {
  // Get friends string
  return friends.filter((el) => el.length === 4); // Use the filter method to filter through the eliments of the string for anything equal to 4 charachters long.
}

//Examples

function friend(friends) {
  return friends.filter((value) => value.length === 4);
}

/* Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
*/
function solution(str) {
  var splitStr = str.split(""); //Split the string into seperate charachters
  var reverseSplitStr = splitStr.reverse(); //Reverse these characthers
  var reverseJoinStr = reverseSplitStr.join(""); // Join the reversed charachters to rebuild the string
  return reverseJoinStr; //return the reverse string.
}

//Alternative methods
function solution(str) {
  return str.split("").reverse().join("");
}

//This method is carried out similar to mine but created on one line, using a joining method instead makes it easier to interperate and requires less variables.

/* Simple, remove the spaces from the string, then return the resultant string.
"Abc def" would equal "Abcdef" 
*/

function noSpace(x) {
  return x.split(" ").join(""); //Splits the string up, than joins it together without the spaces.
}
/* Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

*/
var summation = function (num) {
  return (num * (num + 1)) / 2;
};

/* Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */

//Solution
function boolToWord(bool) {
  if (bool == true) return "Yes";
  else return "No";
}

//Altenative solutions

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

let boolToWord = (bool) => (bool ? "Yes" : "No");

/* Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

Solution
*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// Altenative solutions.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    //findSmallestInt is a good alternative to what I have done.
    return Math.min(...args);
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0]; //This method to sort through the array and select the 0 option (which would be the smallest)
  }
}

/* We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
numberToString(123); // returns '123';`   
numberToString(999); // returns '999';`



*/

function numberToString(num) {
  return num.toString();
}

/* Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.


*/

function isPrime(num) {
  //Inputs num variable.
  for (
    var i = 2;
    i < num;
    i++ //Iterates through the potential numbers it could be divisible by. i = 2, because you do not want to divide by 0 & 1.
  )
    if (num % i === 0) return false; //If the number does divide without a remainer, than it is not a prime number.
  return num > 1; // Ensure num > 1.
}

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item) {
  var decider = arr.includes(item); // decider will equal arr.includes item. (If item is included in arr, sets decider to true, if not sets it to false.)
  return decider; // Returns the answer
}

/* It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.

Digits can be a number or a string, and you should control it is no undefined and return an empty string.

To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.
 */

// Attempt 1, managed to solve the sum. although this was very long winded.

function sum(digits) {
  var splitArray = digits.toString(digits.length).split("");
  var numArray = splitArray.map((i) => Number(i));
  var sum = numArray.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
}

// Manage to reduce the code, making it more effective. Although this has the answer, but not the working out.
function sum(digits) {
  var splitArray = digits
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);
  return splitArray;
}

// Solution from other developer.

function sum(d) {
  return d === undefined
    ? ""
    : (d + "").split("").join(" + ") +
        " = " +
        (d + "").split("").reduce((a, b) => a + +b, 0);
}
/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

Solution:
*/

function highAndLow(numbers) {
  var numberMethod = numbers.split(" ").sort((a, b) => a - b); //Split string into seperate numbers, arrange them into order.
  return numberMethod[numberMethod.length - 1] + " " + numberMethod[0]; //Return the last and the very first numbers within the string.
}

//Alternative solution:

function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

//Alternative solution 2:

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

Solution
*/

function descendingOrder(n) {
  var digits = n.toString().split("");
  var number = digits
    .map(Number)
    .sort((a, b) => b - a)
    .toString()
    .split(",")
    .join("");
  return parseInt(number, 10);
}

// Alternative solution

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

// Alternative solution 2
function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""), 10);
}

/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  var vowelsCount = 0;

  var tester = str.split("").filter((str) => {
    return (
      str === "a" || str === "e" || str === "i" || str === "o" || str === "u"
    );
  });
  console.log(tester);
  var vowelsCount = tester.length;
  return vowelsCount;
}

// Alternative solution

function getCount(str) {
  return str.replace(/[^aeiou]/gi, "").length;
}

// Alternative solution 2

function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

// Alternative solution 3

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

/*Square every digit 

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

Solution: 
*/

function squareDigits(num) {
  var tester = num.toString().split("").map(Number);
  var sum = [];

  for (var i = 0; i < tester.length; i++) {
    sum.push(tester[i] * tester[i]);
  }
  return parseInt(sum.join(""), 10);
}

// Alternative solution

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}

// Alternative solution

function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((i) => i * i)
    .join("");
}

/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

Solutiom
*/

function findShort(s) {
  var shortestWord = s.split(" ").sort((a, b) => a.length - b.length); //Breaks the string into seprate words and then organises them into length.
  return shortestWord[0].length; //Returns the .length of the shortest word.
}

// Alternative solution

function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}

// Alternative solution

function findShort(s) {
  var arr = s.split(" ");
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest.length;
}

/* Sum of two lowest positive integers within an Array

My solution
*/

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

// Alternative solution

function sumTwoSmallestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

// Alternative solution

const sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((x, y) => x + y);

/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

My solution
    */

function solution(number) {
  var sum = [0];

  for (var i = 1; i < number; i++)
    if (i % 3 == 0 || i % 5 == 0) {
      sum.push(i);
    }

  return sum.map(Number).reduce((x, y) => x + y);
}

// Alternative solution

function solution(number) {
  var sum = 0;
  for (var i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

// Alternative solution

solution = (n) =>
  n <= 0
    ? 0
    : Array.from({ length: n }, (_, i) =>
        i % 3 == 0 || i % 5 == 0 ? i : 0
      ).reduce((x, y) => x + y);

/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

  My solution
  */

function removeExclamationMarks(s) {
  var str = s.replace(/!/g, "");
  return str;
}

/* Originaly had the issue that replace only does the first charachter, was met by replaceAll but that does not seem to be useful on code wars.
To get around this the solution I found was to us / /g,

What is G JavaScript?
Definition and Usage. The g modifier is used to perform a global match (find all matches rather than stopping after the first match).
 */

// Alternative solution
function removeExclamationMarks(s) {
  return s.split("!").join("");
}

// Alternative solution
let removeExclamationMarks = (s) => s.replace(/!/g, "");

/* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

My solution
*/

function bmi(weight, height) {
  var bmiCalc = weight / (height * height);
  switch (true) {
    case bmiCalc <= 18.5:
      return "Underweight";
      break;
    case bmiCalc <= 25:
      return "Normal";
      break;
    case bmiCalc <= 30:
      return "Overweight";
      break;
    case bmiCalc > 30:
      return "Obese";
  }
}

/* I decided I would go for a switch statement, breaking the bmi catagories into different sections.
  Then going through them til the first suitable one appears. 

  */

// Alternative solution (Similar to mine, but refractored a bit better)
function bmi(weight, height) {
  var bmi = weight / (height * height);

  return bmi < 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
}

/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

My solution */

function squareSum(numbers) {
  let sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
    console.log(sum);
  }
  return sum;
}

// Alternative solution

function squareSum(numbers) {
  return numbers.map(square).reduce(sum);
}

function square(number) {
  return number * number;
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// Alternative solution

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}
/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

My solution */

function longest(s1, s2) {
  let s3 = (s1 + s2).split("").sort(); //add array together and split charachters. Then sort the letters into order.
  let uniqueChars = [...new Set(s3)]; // Remove any duplicates
  return uniqueChars.join(""); //Join the array/list together to make one string.
}

// Alternative solution
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// Alternative solution
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}

/* Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

My solution */

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

/*
Write a program that returns the numbers from N to M both inclusive. 
But for multiples of three give "Fizz" instead of the number and for the multiples of five give "Buzz". 
For numbers which are multiples of both three and five, give "FizzBuzz".

My solution */

function run(N, M) {
  let sequence = [];

  for (var i = N; i < M + 1; i++) {
    if (i % 15 == 0) sequence.push("FizzBuzz");
    else if (i % 3 == 0) sequence.push("Fizz");
    else if (i % 5 == 0) sequence.push("Buzz");
    else sequence.push(i);
  }
  return sequence.toString();
}

/* Amount of Sheep

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

  */

function countSheeps(arrayOfSheep) {
  var amountOfSheep = 0;
  for (var i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) amountOfSheep++;
  }
  return amountOfSheep;
}

//Alternative methods

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
// My solution.

function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) return true;
  else return false;
}

//Alternative methods

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

//Alternative methods

const isDivisible = (n, x, y) => n % x == 0 && n % y == 0;

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

My solution.
*/

function abbrevName(name) {
  var seperateNames = name.toUpperCase().split(" ");
  return seperateNames[0].charAt(0) + "." + seperateNames[1].charAt(0);
}

//Alternative methods
function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

//Alternative methods
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

/*Hackajob
For a given sentence p, return the following:

how many vowels and consonants p has, we do not count Y and W as vowels
p with reversed words order and reversed cases (any upper-case letter will be lower-case and every lower-case letter will be upper-case)
every word in p separated by a dash ('-')
p with inserted string "pv" before any vowel in the sentence
Take into consideration that p can have any kind of characters.

You have to return a string containing the above queries, separated by double colon ("::")

INPUT
string p

OUTPUT
string combined_queries

This is how combined_queries should look like:

nr_vowels nr_consonants::reversed_p_with_reversed_cases::every-word-in-p::p_wpvith_inspvertpved_strpving_pv
EXAMPLE
Input
"ThIs is p"

Output
2 5::P IS tHiS::ThIs-is-p::ThpvIs pvis p
*/

function run(p) {
  let vowelCount = vowelCounter(p); // Used to initiate the VowelCounter function and store the amount of vowels within the stirng.
  let consonantsCount = consonantsCounter(p); // Used to initiate the consonantsCounter function and store the amount of consonants within the stirng.
  let reversedString = stringReveser(p); // Used to revese the string, both in the direction of the words and also change the cases of the words to the opposide (Lower to higher, higher to lower)
  let stringWithDash = StringDasher(p); // Used to add a version of the string with - marks to seperate the words.
  let stringWithPv = pvAdder(p); // Used to check if the letter is a vowel, and if it is, it will add pv before the letters within the string.

  function vowelCounter(str) {
    return str.replace(/[^aeiou]/gi, "").length; //Replaces anything that is not a vowel with nothing, then counts the length of what is remaining.
  }

  function consonantsCounter(str) {
    return str.replace(/ /g, "").length - vowelCount; //Takes the full string, removes the spaces, then takes the length of that and deducts the vowel count to leave constants only.
  }

  function stringReveser(str) {
    return str
      .split("")
      .map((l) => (l == l.toLowerCase() ? l.toUpperCase() : l.toLowerCase()))
      .join("")
      .split(" ")
      .reverse()
      .join(" ");
  }

  function StringDasher(str) {
    return str.split(" ").join("-"); //Split the string into an array at the spaces, rejoin the array with - inbetween the words.
  }

  function pvAdder(str) {
    let emptyString = [];
    for (var i = 0; i < str.length; i++) {
      //Iterates through the string, if the charachter is a vowel, it will add pv before it and add it to the new empty string. (With the previous letters checked before)
      if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u" ||
        str[i] === "A" ||
        str[i] === "E" ||
        str[i] === "I" ||
        str[i] === "O" ||
        str[i] === "U"
      )
        emptyString += "pv" + str[i];
      else emptyString += str[i]; //If it is not a vowel, it will simply add the charachters to the string.
    }
    return emptyString; //Returns the final result of the string with pv infront of every vowel.
  }
}

/*
A class of students have a project in pairs, to work on. Everyone found a partner except one student. Having a list of every student in the class represented by the number of their team, find the student with no partner. Note that the number of the team can represent only two students or the single student.
Try finding the most efficient solution!

INPUT
int[] student_list
^^ this contains students represented by their team number

OUTPUT
int single_student_number

CONSTRAINTS
2 <= student_list[i] <= 100000
3 <= i <= 10000

EXAMPLE
Input
[2,4,5,4,2]
Output
5

*/

function run(student_list) {
  function findSingle(array, array_size) {
    // Do XOR of all elements and return
    let result = array[0]; // Result is the number in the array that we will be checking.
    for (let i = 1; i < array_size; i++) result = result ^ array[i]; // Go through the array and check if each part of the array is equal to the result. i.e. The output is true if the inputs are not alike; otherwise, the output is false.

    return result; //When true (no numbers match). That number will return.
  }

  single_student_number = findSingle(student_list, student_list.length);
  return single_student_number;
}

/*

Wouldn't it be neat if every year, your birthday would fall on a Friday, Saturday or Sunday? Given a certain date, return a string with the day of the week and the year it will fall in a weekend, starting with the year (2016). Do this for 50 years in the future.

INPUT
string date_of_birth ^ with this format: dd-mm

OUTPUT
string future_dates
^ wday-yyyy wday-yyyy … (where wday can be any of this three values: Fry, Sat, Sun)
Every date should be separated by one space

EXAMPLE
Input
"23-10"

Output
"Sun-2016 Fri-2020 Sat-2021 Sun-2022 Fri-2026 Sat-2027 Sat-2032 Sun-2033 Fri-2037 Sat-2038 Sun-2039 Fri-2043 Sun-2044 Fri-2048 Sat-2049 Sun-2050 Fri-2054 Sat-2055 Sat-2060 Sun-2061 Fri-2065"


*/

function run(birthday_date) {
  var birthday_date_split = birthday_date.split("-"); //Splits the string into Month and Day
  var month = birthday_date_split[1]; //Assigns month value to month variable.
  var day = birthday_date_split[0]; //Assigns Day value to day variable.
  var year = 2016; //Set year to requested preset year.

  let sequence = []; //Array to hold the results from looping through the years.

  for (var i = year; i < 2066; i++) {
    //Loops through the year till 2065 as requested.
    let date = new Date(i, month - 1, day); //Sets date to it's format for checking.
    if (date.getDay() == 0) sequence.push("Sun-" + i);
    //If the day is a sunday, log Sun-year.
    else if (date.getDay() == 6) sequence.push("Sat-" + i);
    //Same as above with Sat
    else if (date.getDay() == 5) sequence.push("Fri-" + i); //Same as above with sun, These will be pushed to the sequence array.
  }

  future_dates = sequence.toString().replace(/,/g, " "); //Turning the array to a string, and replacing , with " "
  return future_dates;
}

for (var i = 0; i < str.length; i++) {
  console.log(i);
  return;
}

/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

My example:
*/

function generateHashtag(str) {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1); //Converts the first letters to capital letters (Function)
  }
  let splitStr = str.split(" ").map(capitalize).join(""); //Calls the function and joins the string together.
  str = str.replace(/\s/g, ""); //Gets rid of any white space within the string.

  if ((str.length === 0) | (str.length >= 140)) {
    // Confirms the stirng is not empty and is long enough.
    return false;
  } else {
    // If it is long enough add the hashtag to the front and return.
    let hashtag = "#";
    let res = hashtag.concat(splitStr);
    return res;
  }

  //Alternative methods

  function generateHashtag(str) {
    return str.length > 140 || str === ""
      ? false
      : "#" + str.split(" ").map(capitalize).join("");
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //Alternative methods

  const generateHashtag = (str) =>
    (s =
      "#" +
      str
        .trim()
        .split(" ")
        .filter((e) => e)
        .map((e) => e[0].toUpperCase() + e.substring(1, e.length).toLowerCase())
        .join("")).length > 1 && s.length <= 140
      ? s
      : false;
}

// Example of a nested loop
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log("Both loops have the number: " + yourArray[j]);
    }
  }
}

// A second of a nested loop comparing two lists.
bobsFollowers = ["Ron", "barry", "Ste", "Stu"];
tinasFollowers = ["Ron", "Bobby", "Ste"];
mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// Below is how to use a while loop to randomly loop through an array
const cards = ["diamond", "spade", "heart", "club"];

// Write your code below
let currentCard;

while (currentCard != "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// Do...While Statements example
let countString = "";
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

// Example 2

let cupsOfSugarNeeded = 8;
let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

//Example of using break keyword to break the loop once you have found the value needed.

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  console.log("And if you don't know, now you know.");
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text) {
  // Make the string lower case and split it into an array.
  // Start with First Value,
  // Check this value against every over value in the code
  // If this value is a duplicate
  // Counter inceases by 1 and all instances of this value get removed, including the one doing the check.

  let LowerCaseText = text.toLowerCase().split("");
  let counter = 0;
  let duplciateChecker = [];

  for (let i = 0; i < LowerCaseText.length; i++) {
    //Loops through with the original value.
    for (let j = 0; j < LowerCaseText.length; j++) {
      //Loops through a second time, keeping i as the original value whilst it loops.
      if (duplciateChecker.includes(LowerCaseText[i])) {
        break;
      } else if (LowerCaseText[i] === LowerCaseText[j] && i != j) {
        // If the values are the same, and it is not in the same position as the original loop value.
        counter++;
        duplciateChecker.push(LowerCaseText[i]); // Add Array value to the duplicate checker array.
      }
    }
  }
  console.log(duplciateChecker);
  return counter;
}

//Alternative methods

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

//Alternative methods
function duplicateCount(text) {
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];

  lower.split("").forEach(function (letter) {
    if (!used.includes(letter) && lower.split(letter).length - 1 > 1) {
      count++;
      used.push(letter);
    }
  });

  return count;
}

/* 
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
                 
 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
                  
 persistence(4) === 0 // because 4 is already a one-digit number

My example:
*/

function persistence(num) {
  let counter = 0; //This is to count the number of times the while loop runs.
  while (num > 9) {
    //Makes sure that num is still above single digits.
    var digitsString = num.toString().split(""); //Splits the numbers into single digits but as an array of strings.
    var realDigits = digitsString.map(Number); //Turns all these digits into numbers rather than strings.
    num = realDigits.reduce((accumulator, current) => accumulator * current, 1); //Loops through the array of numbers multiplying them together. Updating num in the process.
    counter++; //Increases the counter by 1 to update the amount of times the while loop has run.
  }
  return counter; // Return the number of times the counter has counted the steps to single digits.
}

//Alternative methods
const persistence = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
    : 0;
};

//Alternative methods
function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((t, c) => c * t);
  }
  return i;
}

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

function duplicateEncode(word) {
  word = word.toLowerCase();
  let finalResult = [];
  let letterOccurance = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[i] === word[j] && i != j) {
        letterOccurance++;
      }
    }

    if (letterOccurance > 0) {
      finalResult += ")";
      letterOccurance = 0;
    } else {
      finalResult += "(";
      letterOccurance = 0;
    }
  }
  return finalResult;
}

//Alternative methods
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

//Alternative methods
function duplicateEncode(word) {
  var unique = "";
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}

/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

My example:
*/

function likes(names) {
  let others = names.length - 2;

  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] + ", " + names[1] + " and " + others + " others like this"
      );
  }
}

//Alternative methods
function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}

//Alternative methods
function likes(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

My solution.
*/

function digital_root(n) {
  do {
    arrayOfDigits = n.toString().split("").map(Number);
    n = arrayOfDigits.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  } while (n > 9);
  return n;
}

//Alternative methods
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

//Alternative methods
function digital_root(n) {
  n = eval(n.toString().split("").join("+"));

  if (n > 9) {
    return digital_root(n);
  }

  return n;
}

/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

const sentence = ['sense.','make', 'all', 'will', 'This'];
 
reverseArray(sentence); 
// Should return ['This', 'will', 'all', 'make', 'sense.'];

My solution:
*/

const reverseArray = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

/*

Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
 
greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 
Note: You may have noticed how convenient it would be to use .forEach(), but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

My solution:
*/

const greetAliens = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      "Oh powerful " + arr[i] + ", we humans offer our unconditional surrender!"
    );
  }
};

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

/*
Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
 
convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
Note: You may have noticed how convenient it would be to use map, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

My solution:
*/

const convertToBaby = (arr) => {
  let babyArray = [];
  for (let i = 0; i < arr.length; i++) {
    babyArray.push("baby " + arr[i]);
  }
  return babyArray;
};

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));

/*
Write a function to filter two arrays against each other returning on the values in both arrays. 
*/

const justCoolStuff = (arr, arr1) => {
  return arr.filter((val) => arr1.includes(val));
};

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

/*
Function checks that the whole array is source plantbased. It does this by looking at every food.source, and return true or false if they are all equal to plant or not (True if so, false if not)
*/

const isTheDinnerVegan = (arr) => arr.every((food) => food.source === "plant");

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));
// Should print false

/*
Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

{speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .

You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().

You can test your function when you’re ready by passing in the speciesArray array or by making your own!

*/

const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

const sortSpeciesByTeeth = (arr) =>
  arr.sort(
    (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth
  );

console.log(sortSpeciesByTeeth(speciesArray));

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

/*
1.
Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

2.
Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

3.
Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.
*/

const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight++;
    },
  };
};

/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

My Example:
*/

function alphabetPosition(text) {
  let alphabetPositions = []; //Empty array for the answers.
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); //Alphabet to compare the string to, allowing us to get the position of the letter in the alphabet.

  text = text
    .toLowerCase()
    .replace(/[^a-z]/gi, "")
    .replace(/\s/g, "")
    .split(""); //Make the string lower case, only letters and nummbers in the string. split it into an array.
  console.log(text);
  for (let i = 0; i < text.length; i++) {
    //Itterate through the array, find the first instance of it in the alphabet and then add 1 (As arrays start from 0)
    if (typeof text[i] === "number") {
      //If the array contains a number add 0, if it is a letter conintue and check position.
      alphabetPositions.push(0);
    } else {
      alphabetPositions.push(alphabet.indexOf(text[i]) + 1); //Return the above to the array and move onto the next letter.
    }
  }

  return alphabetPositions.join(" "); //convert the array to a string.
}

//Alternative methods

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}

//Alternative methods

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + " ";
  }

  return result.slice(0, result.length - 1);
}

//Alternative methods
let alphabetPosition = (text) =>
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .map((ch) => ch.charCodeAt(0) - 64)
    .join(" ");

/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, 
so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones
everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) 
and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array (that's not a walk, that's standing still!).

My solution:
*/

function isValidWalk(walk) {
  function getOccurrence(array, value) {
    //This function is to automate checking the amount of times the value appears within the array.
    return array.filter((v) => v === value).length;
  }

  if (
    walk.length === 10 && //If the arrays length is 10 (a minute per a direction)
    getOccurrence(walk, "n") === getOccurrence(walk, "s") && // And the north and south directions are equal.
    getOccurrence(walk, "e") === getOccurrence(walk, "w") // And the east and west directions are equal.
  ) {
    return true; //return that it is 10 minutes and you will end up at the start point again.
  }
  return false; //Returns that it does not meet the expected requirements.
}

//Alternative methods
function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function (a) {
      return a == val;
    }).length;
  }
  return (
    walk.length == 10 && count("n") == count("s") && count("w") == count("e")
  );
}

//Alternative methods
function isValidWalk(walk) {
  var dx = 0;
  var dy = 0;
  var dt = walk.length;

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        dy--;
        break;
      case "s":
        dy++;
        break;
      case "w":
        dx--;
        break;
      case "e":
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}

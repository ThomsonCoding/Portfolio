/* Given an array of ones and zeros, convert the equivalent binary value to an interger.
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

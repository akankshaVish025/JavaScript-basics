const name = "Akanksha";
const repoCount = 5;
console.log(name + repoCount + " Value");

// String Interpolation syntax: ${...}
/** 
1. string interpolation( ${} ) is the process of replacing placeholders with values in a string literal
2. It is done using back-ticks (``).
**/

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// 2nd way to declare string
const gameName = new String('akanksha-rv-hc');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length, "check length method");
console.log(gameName.toUpperCase(), "To uppercase method");
console.log(gameName.charAt(3),  "Charchter At method");
console.log(gameName.indexOf('h'), "Index of method");

const newStr = gameName.substring(0,4);  // Last character not included in substring
console.log(newStr, "Substring Method");

// slice(start, end): extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
const anotherStr = gameName.slice(0,4);    // But speciality of slice is that it can use negative value but substring ignore negative
console.log(anotherStr, "Slice Method");


//If you omit the second parameter, the method will slice out the rest of the string:
let dum = "Apple, Banana, Kiwi";
let part = dum.slice(7);
console.log(part, "default Slice");

//If a parameter is negative, the position is counted from the end of the string:

let dum1 = "Apple, Banana, Kiwi";
let res = dum1.slice(-12); // counted from left i.e -1.-2,-3......-12
console.log(res, "Negative Slice");


const negStr = gameName.slice(-8,6);
console.log(negStr, "Negative Slice");


const newStr1 = "   akanksha  ";
console.log(newStr1.trim(), "trim method");

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-', "Replace method"));

console.log(url.includes('hitesh'), "Includes method");

console.log(url.includes('sundar'), "Includes method");

console.log(gameName.split('-'), "Split method");


// JavaScript String indexOf()
// This method returns the index (position) of the first occurrence of a string in a string, 
// or it returns -1 if the string is not found:
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index, "indexOf");  // 7

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let index1 = text.lastIndexOf("locate");
console.log(index1, "lastIndexOf");  // 21
let sr = text.search("locate");    // OR text.search(/locate/);   both will give same output
console.log(sr, "Search");   // 7

let x = new String("John");
let y = new String("John");
console.log(x===y, "Compare");

// Note: Comparing two JavaScript objects always returns false.

/** Note: Even if indexOf() and search() gives same output both methods are NOT EQUAL

1. indexOf() Method
Purpose: Finds the first occurrence of a specified value within a string.
Arguments:
searchValue (required): The string to search for.
startIndex (optional): The position within the string to start the search. Defaults to 0.

2. search() Method
Purpose: Searches for a match between a regular expression and a string.
Arguments:
regexp (required): The regular expression to search for.

Differences:

Second Argument:
indexOf(): Accepts a second optional argument startIndex to specify the position within the string to start the search.
search(): Does not accept a second argument.

Search Values:
indexOf(): Can only search for a simple substring.
search(): Can use regular expressions, which provide powerful search capabilities.

*/

// match() method
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).

//Perform a search for "ain":

let text1 = "The rain in SPAIN stays mainly in the plain";
let mat = text1.match("ain")
console.log(mat, mat.length, "mat");

console.log(text1.match(/ain/));

// Perform a global search for "ain":

console.log(text1.match(/ain/g));
 
// Perform a global, case-insensitive search for "ain":

console.log(text1.match(/ain/gi));

/** Note: 
If a regular expression does not include the g modifier (global search), 
match() will return only the first match in the string.
*/

// matchAll()

let text2 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text2.matchAll("Cats")
// console.log(Array.from(iterator),"ITERATOR");


// includes() method - returns true if a string contains a specified value. Otherwise it returns false

// Check if a string includes "world":
let txt = "Hello world, welcome to the universe.";
console.log(txt.includes("world"), "INCLUDES");

// Check if a string includes "world". Start at position 12:
let txt1 = "Hello world, welcome to the universe.";
console.log(txt1.includes("world", 12), "POSITION");

/** 
Note** 
includes() is case sensitive.

includes() is an ES6 feature.

includes() is not supported in Internet Explorer.
*/

// startsWith() method: returns true if a string begins with a specified value.

let text3 = "Hello world, welcome to the universe.";
console.log(text3.startsWith("Hello"));
console.log(text3.startsWith("world"));

// A start position for the search can be specified:

console.log(text3.startsWith("world", 5));
console.log(text3.startsWith("world", 6));

/**
Notes:
startsWith() is case sensitive.

startsWith() is an ES6 feature.

startsWith() is not supported in Internet Explorer.
*/

// endsWith() method: returns true if a string ends with a specified value.

let text4 = "John Doe";
console.log(text4.endsWith("Doe"));

// Check if the 11 first characters of a string ends with "world":
let text5 = "Hello world, welcome to the universe.";
console.log(text5.endsWith("world", 11));

/*
Note:
All string methods return a new string. They don't modify the original string.

Strings are immutable: Strings cannot be changed, only replaced.
*/


/*
JavaScript String padStar:

The padStart() method pads a string from the start.
It pads a string with another string (multiple times) 
until it reaches a given length.

The padEnd() method pads a string from the end.
*/

// Pad a string with "0" until it reaches the length 4:
let numStr = "5";
let pad = numStr.padStart(4,"0");
console.log(pad, "pad");  // 0005

// Pad a string with "x" until it reaches the length 4:
let numStr1 = "5";
let padded = numStr1.padStart(4,"x");
console.log(padded, "paddedx");  // xxx5

/* Note :
The padStart() method is a string method.

To pad a number, convert the number to a string first.
*/

let numb = 5;
let final = numb.toString();
let padd = final.padStart(4,"0");
console.log(padd,"padd");  // 0005

// Replacing String Content
// By default, the replace() method is case sensitive
// The replace() method replaces a specified value with another value in a string:
let txet = "Please visit Microsoft!";
let newText = txet.replace("Microsoft", "W3Schools");
console.log(newText,"Replace");  // Please visit W3Schools! Replace

// Converting a String to an Array:
/*
JavaScript String split():
A string can be converted to an array with the split() method:
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
If the separator is omitted, the returned array will contain the whole string in index [0].
*/

//If the separator is "", the returned array will be an array of single characters:
let word = "Hello";
console.log(word.split());   // [ 'Hello' ]
console.log(word.split(""));  // [ 'H', 'e', 'l', 'l', 'o' ]
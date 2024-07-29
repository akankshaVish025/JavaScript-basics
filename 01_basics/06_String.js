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

const newStr = gameName.substring(0,4);   // Last character not inculuded in substring
console.log(newStr, "Substring Method");

const anotherStr = gameName.slice(0,4);    // But speciality of slice is that it can use negative value but substring ignore negative
console.log(anotherStr, "Slice Method");

const negStr = gameName.slice(-8,6);
console.log(negStr, "Negative Slice");

const newStr1 = "   akanksha  ";
console.log(newStr1.trim(), "trim method");

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-', "Replace method"));

console.log(url.includes('hitesh'), "Includes method");

console.log(url.includes('sundar'), "Includes method");

console.log(gameName.split('-'), "Split method");

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
let index1 = text.lastIndexOf("locate");
console.log(index, index1, "index");
let sr = text.search("locate");    // OR text.search(/locate/);   both will give same output
console.log(sr, "Search");

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

//Perform a search for "ain":

let text1 = "The rain in SPAIN stays mainly in the plain";
console.log(text1.match("ain"))

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
const iterator = text.matchAll("Cats")


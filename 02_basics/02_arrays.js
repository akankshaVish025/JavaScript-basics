// Check methods to merge array:
// PUSH() :

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// If i directly push dc_heros in marvel_heros
// marvel_heros.push(dc_heros);
// console.log(marvel_heros, "push"); // ['thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  push modifies original array

// console.log(marvel_heros[3], "marvel 3rd element");  // [ 'superman', 'flash', 'batman' ] marvel 3rd element   
// console.log(marvel_heros[3][1], "  ->  first element inside marvel's 3rd element");    // flash

// CONCAT():
// The concat() method creates a new array by merging (concatenating) existing arrays.
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros, "concat");  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// best methods to merge array:
// SPREAD OPRERATOR(...) :

const spreadRes = [...marvel_heros, ...dc_heros]; 
console.log(spreadRes, "spread operator"); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// FLAT() - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth0.
// depth (Optional):
// The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

// ex. 
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat(), "default flat"); // default 1
console.log(arr2.flat(2), "depth - 2"); // depth 2
console.log(arr2.flat(3), "depth - 3"); // depth 2
 
const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_newArr = newArr.flat(Infinity);  // In flat i need to provide 2 depth , 3 depth or either infinity
console.log(real_newArr, "flat");

/*
isArray() :
How to Recognize an Array?
The problem is that the JavaScript typeof operator returns "object" for any array.
*/
// Ex. 
const fruits = ["Banana", "Orange", "Apple"];
console.log(typeof fruits, "fruits"); // object

// *** The typeof operator returns object because a JavaScript array is an object.
// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray()

// Solution 1:
console.log(Array.isArray(fruits), "isArray() method"); // true

// Solution 2:
// The instanceof operator returns true if an object is created by a given constructor:
console.log((fruits instanceof Array), "instanceof method");  // true

/*
 ***Nested Arrays and Objects
 Values in objects can be arrays, and values in arrays can be objects.
 */

 // Ex. 
 const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

let x = "";  // define empt variable 'x'
//To access arrays inside arrays, use a for-in loop for each array
for (let i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j];
    }
  }

console.log(x, "x"); // <h1>Ford</h1>FiestaFocusMustang<h1>BMW</h1>320X3X5<h1>Fiat</h1>500Panda x

console.log(Array.isArray("Akanksha")) // false

/*
Array.from():
The Array.from() method returns an array from any object with a length property.
The Array.from() method returns an array from any iterable object.
Using x.from(), where x is an array will return undefined.
*/

// Create an array from a string:
console.log(Array.from("Akanksha")) // ['A', 'k', 'a','n', 'k', 's','h', 'a']

// Interesting ****
console.log(Array.from({ name: "Akanksha" })) // [] because we have to specify which of which parmeter you want to make array (keys or values)

let score1 = 100;
let score2 = 200;
let score3 = 300;

/*
Description: Array.of()
The Array.of() method creates a new array from any number of arguments.
The Array.of() method can take any type of arguments.

Syntax:
Array.of(element1, element2, ... , elementN)
*/
console.log(Array.of(score1, score2, score3), "score"); // [ 100, 200, 300 ]

let fruits1 = Array.of("Banana", "Orange", "Apple", "Mango");
console.log(fruits1, "Array.of()"); // [ 'Banana', 'Orange', 'Apple', 'Mango' ]

/*
map() :

map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array.
*/

// Return a new array with the square root of all element values
const numbers = [4, 9, 16, 25];
const result = numbers.map(Math.sqrt)
console.log(result, "map()");  // [ 2, 3, 4, 5 ]

// Multiply all the values in an array with 10
const newRes = numbers.map(myFunction);

function myFunction(num) {
    return num * 10;
}
console.log(newRes, "newRes");  // [ 40, 90, 160, 250 ]


/*
join(): 

The join() method returns an array as a string.
The join() method does not change the original array.
Any separator can be specified. The default is comma (,).

Syntax:
array.join(separator)

Return Value: A string.
*/

// Ex1 .
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits2.join();
console.log(text, "join()");  // Banana,Orange,Apple,Mango

// Ex2. - Another separator
let join = fruits2.join(" and ");
console.log(join, " = join with and separator"); // Banana and Orange and Apple and Mango


/* 
JavaScript Array some() :
The some() method checks if any array elements pass a test (provided as a callback function).
The some() method executes the callback function once for each array element.
The some() method returns true (and stops) if the function returns true for one of the array elements.
The some() method returns false if the function returns false for all of the array elements.
The some() method does not execute the function for empty array elements.
The some() method does not change the original array.

Syntax:
array.some(function(value, index, arr), this)
function - Required.
A function parameter is require  to run for each array element.

Return Value - A boolean
*/

// Ex.
const ages = [3, 10, 18, 20];

console.log(ages.some(checkAdult), "Some");  // true 
 
function checkAdult(age) {
  return age > 18;
}
// i.e false if all condition false , true if any one true

/*
JavaScript Array reverse():

The reverse() method reverses the order of the elements in an array.
The reverse() method overwrites the original array.
*/
const arr = ["Banana", "Orange", "Apple", "Mango"];
console.log( arr.reverse(), "reverse");  // [ 'Mango', 'Apple', 'Orange', 'Banana' ]


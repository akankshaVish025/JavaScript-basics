"use strict"; // Treat all JS code as newer version

// alert( 3 + 3 )  // we are using node.js not browser

console.log(3
    +
    3) // code readability must be high**

console.log("Akanksha");

let name = "Akanksha";
let age = 18;
let isLoggedIn = false;
let state;

// primitive datatypes

// Number => 2 to the power of 53
// BigInt => used for big number genrally in stock market and trading Websites
// String =>  ""
// Boolean => true/false
// null => standalone value
// undefined => value not assigned to variable
// symbol => unique


// Non-primitive datatypes
// Object
// Array
// document
// function

console.log(typeof "Akanksha");
console.log(typeof null);  // object
// Reason:
// When JavaScript was first developed, values were stored in a way where the data type was identified by the first few bits of their binary representation. 
// For objects, the first bits were 00. 
// Unfortunately, null was represented with all zeros in binary (00000000), which led the language to mistakenly classify it as an object.
console.log(typeof undefined); // undefined
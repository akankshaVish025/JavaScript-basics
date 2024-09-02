//  Primitive datatypes
// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// 1. Number
const score = 100; // Number
// console.log(typeof score);

const scoreValue = 100.3; // Number
// console.log(typeof scoreValue);

// 2. Boolean
const isLoggedIn = false; // Boolean
// console.log(typeof isLoggedIn);

// 3. Null
const outsideTemp = null; // Null
// console.log(typeof outsideTemp);

// 4. Undefined
let userEmail; // Undefined
// console.log(typeof userEmail);

// 5. Symbol
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(typeof anotherId);

// console.log(id === anotherId);

// 6. BigInt
// const bigNumber = 34397996867838279898n
// console.log(typeof bigNumber)

/* Reference datatypes (Non primitive) */
// Array, Objects, Functions

// 1. Array
const heros = ["shaktiman", "naagraj", "doga"];
// console.log(typeof heros);

// 2. Object
let myObj = {
  name: "Akanksha",
  age: "22",
};
// console.log(typeof myObj);

// 3. Function
const muFunction = function () {
  console.log("Hello World");
};
// console.log(typeof muFunction);

/* --------------------- MEMORY ---------------------- */

/*

Memory : Some high-level languages, such as JavaScript, utilize a form of automatic memory management known as 
garbage collection (GC). The purpose of a garbage collector is to monitor memory allocation and determine when 
a block of allocated memory is no longer needed and reclaim it. 

Two Types of memory:
1. Stack(We get copy) - It is used in primitive. It is used for static memory allocation.
2. Heap(We get refernce) - It is used in non-primitive. It used for dynamic memory allocation
*/

// Example : Stack
let myYoutubeName = "akankshavishwakarmadotcom";

let anotherName = myYoutubeName;
anotherName = "chaiaurbiscuit";

console.log(myYoutubeName);
console.log(anotherName);

// Example : Heap
let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "akanksha@google.com"

console.log(userOne.email);
console.log(userTwo.email);

/* 
THIS :
The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. 
Most typically, it is used in object methods, where this refers to the object that the method is attached to, 
thus allowing the same method to be reused on different objects.
*/

const user = {
    username: "Akshu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to youtube`);
        console.log(this) 
    }
}

// user.welcomeMessage // print nothing because welcomeMessage is a method i.e(user.welcomeMessage())
user.welcomeMessage() // Akshu, welcome to youtube

// change context
user.username = "sam";
user.welcomeMessage(); // sam, welcome to youtube

console.log(this) // {} - beacause 'this' keyword refers to node environment, where It refers to empty object.

function chai() {
    console.log(this);// get some object in this
}

// chai();
/* Output :     {
    global: [Circular *1],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] { ........
    */

// can i use this in function? No

function Code() {
    let username = "akshu";
    // will this print ? No
    console.log(this.username); // undefine (Because 'this' keyword works only in objects but not in functions)
}
Code();

function newChai() {
    let username = "akanksha";
    console.log(this.username); // undefine (Because 'this' keyword works only in objects but not in functions)
}
newChai();


// How to declare functions using Arrow functions:
// const code1 = function() {
//     let username = "akanksha";
//     console.log(this.username); // undefine (Because 'this' keyword works only in objects but not in functions)
// }
// code1();

// OR one more way:

const code1 = () => {
    let username = "akanksha";
    console.log(this.username); // undefine (Because 'this' keyword works only in objects but not in functions)
    console.log(this); // {} - beacause 'this' keyword refers to node environment, where It refers to empty object
}
code1();

// Pure Arrow function:
/* synatx of Arrow function:
() => {}
*/

// Basic use of arrow function(Ex. of explicit return)
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(1, 5));


// Implicit return:
// In implicit return, you need not use parenthesis '{}' as well as 'return' keyword.
/* Note** : If you use parentesis,then you must use return statement mandatorily*/

// const addTwo1 = (num1, num2) => num1 + num2;
// OR - both menas same
// const addTwo1 = (num1, num2) => (num1 + num2);

// console.log(addTwo1(3, 4));

// what if i want to return object
const returnObject = (num1, num2) => {username: "akshu"};
console.log(returnObject(3,4), "ch") // undefined-because we cannot return object this way,to return it object needs to wraped in parenthesis().
// check after adding parenthesis:
// const returnObject = (num1, num2) => ({username: "akshu"});
// console.log(returnObject(3,4)) // { username: 'akshu' }

// Explicit return:
// An explicit return is when you explicitly write the word return in the function.

const myArray = [2, 5, 3, 7, 8];
myArray.forEach(function() {})  // Normal function
myArray.forEach(() => {}) // Arrow functtion
// will dicuss more in next chapter


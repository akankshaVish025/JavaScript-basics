// let a = 10;
// const b = 20;
// var c = 30;

// // This will work correctly
// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

// But if we add all these variables in if block scope

// what is scope:
{} // scope

/* The part inside {} is block scope and the part outside {} is global scope.
the values of global scope are available in block scope but the value decalared in block scope should not get available in global scope.
*/

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
} 

// console.log(a); // Error : ReferenceError: a is not defined
// console.log(b); // Error : ReferenceError: b is not defined
console.log(c); // 30  does not have block scope

// the problem with var is 
var d = 10  // globle scope
if (true) {
    let a = 10;     // block scope
    const b = 20;   // block scope
    var d = 100;    // block scope
} 

console.log(d); // 300 : The value of c is overwitten to 100 using var, this causes issue in JS

/**
Problem with function scope: 
As a programmer, Sometimes, we need to access the information within the normal block only but the problem with Var is, 
It is accessible throughout the function level means outside of the normal block. 
That's why we prefer not to use Var as It could give us the undesired result.
*/
// To solve above var issue JS introduced let and const:

let a = 300  // globle scope
if (true) {
    let a = 10;     
    const b = 20;   // block scope
    console.log("INNER: ", a);  // block scope
    // block scope
}
console.log(a); // 300

// Closure: A closure is a function that has access to the lexical environment, or outer scope, 
// of the function that created it

// Example:
function one() {
    let userName = "Akanksha";

    function two() {
        const website = "Youtube";
        console.log(userName, "userName");
    }
    // console.log(website, "website");  // ReferenceError: website is not defined
    two();
}

one();


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }


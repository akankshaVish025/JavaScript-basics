/*
IIFE - Immediately Invoked Function Expression
Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. 
They are typically used to create a local scope for variables to prevent them from polluting the global scope.

Syntax:
(function () {
// Function Logic Here. 
}) ()

*/

// Ex: of Named IIFE

(function chai() {
    // named iife - chai()
    console.log(`DB CONNECTED`);
}) (); // semicolon is necessary to avoid error - (intermediate value)(...) is not a function.

// EX. Normal IIFE
(() => {
    console.log(`DB CONNECTED TWO`);
}) (); // semicolon is necessary to avoid error - (intermediate value)(...) is not a function.
//*** if semicolon not provided then if you have declared second iife function in same file,  will not work.

( (name) => {
    console.log(`here is the ${name}`);
}) ('akshu')

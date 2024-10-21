/**  JavaScript Functions:
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

JavaScript Function Syntax:
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

Function parameters are listed inside the parentheses () in the function definition.
Function arguments are the values received by the function when it is invoked.
Inside the function, the arguments (the parameters) behave as local variables.
*/

function sayMyName() {
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("U");
}

// sayMyName()             // sayMyName - Reference & () - execution   [How function works]
// sayMyName        // Nothing in output as sayMyName is the reference

function addTwoNumber(num1, num2) {   // here num1 = 3 and num2 = 4 are parameters
    console.log(num1 + num2);
}

addTwoNumber(3, 4);     // Here 3 and 4 are arguments
addTwoNumber(3, "4");     // Here 3 and "4" are arguments
addTwoNumber(3, "a");     // Here 3 and "a" are arguments

const result = addTwoNumber(3, 5);
console.log("Result:", result);   //undefined - because function should return some value

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // console.log("Akanksha");  // this code will be reached
    // return result;

    //code in one line without declaring variable
    return number1 + number2;

    console.log("Akanksha");     // Unreachable code : None of the code will work after return statement
}

const res = addTwoNumbers(3, 2);
console.log("Result:", res);

function loginUserMessage(username) {
    return `${username} just logged in`
}

// wrong way because funtion returned the string but didnt print
loginUserMessage("Akanksha")  //  
// need to print for funtion to work correctly
console.log(loginUserMessage("Akanksha"));  // Akanksha just logged in
// If called loginUserMessage function with empty  ""
console.log(loginUserMessage(""));   // just logged in

// If nothing is passed 
console.log(loginUserMessage());  // logged

// using condition
function loginUserMessage1(username) {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in` // this line will never execute, whenever if co dition is satisfied
}
console.log(loginUserMessage1()); //Please enter a username  [undefined (because funtion doen't return anything)

// Default params in function if no arguments passed
// using condition
function loginUserMessage2(username = "sam") {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in` // this line will never execute, whenever if co dition is satisfied
}
console.log(loginUserMessage2("")); // sam just logged in

// --- --- ---- ----- ---

/*
How to pass Multiple values in a function - Rest(...) operator

Rest Operator(...):
The JavaScript Rest parameter allows a function to accept an indefinite number of arguments as an array. 
It is represented by three dots (…) followed by the parameter name and must be the last parameter in the function, 
enabling flexible and dynamic argument handling.

Syntax:
function functionname(...parameters)
{
statement;
}
*/

function calculateCartPrice(...num1) {  // Uses rest parameter(...)
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));

// Another one:
function calculateCartPrice1(val1, val2, ...num1) {  // Uses rest parameter(...)
    return num1;
}
console.log(calculateCartPrice1(200, 400, 500, 2000));  // [ 500, 2000 ], here val1 = 200 and val2 = 400

// Examples:
// Define a function with two regular parameters and one rest parameter:

function myBio(firstName, lastName, ...otherInfo) { 
return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male")); // ["CodeSweetly", "Web Developer", "Male"]


// How to pass object to function as parmeter
const user = {
    username: "Akanksha",
    price: 199
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);  // Username is Akanksha and price is 199
handleObject({
    username: "sam",
    price: 399
});   // Username is sam and price is 399

// with array
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
};

// console.log(returnSecondValue(myNewArray)); //400
console.log(returnSecondValue([200, 400, 100, 600]));


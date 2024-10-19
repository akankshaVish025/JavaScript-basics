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
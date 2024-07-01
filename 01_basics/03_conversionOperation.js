let score = "33";

// console.log(typeof score);
// console.log(typeof (score));  // typeof can be used in this way also

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
 // BUt what if
console.log("-----------------");
let newScore = "33abc";
console.log(typeof newScore);
let scoreInNumber = Number(newScore);
// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);   // But your number doesn't converts to number instead its NaN

// let update newScore value to null

newScore = null;
// console.log(typeof newScore);
scoreInNumber = Number(newScore);
// console.log(scoreInNumber);

// let update newScore value to undefined

newScore = undefined;
// console.log(typeof newScore);
scoreInNumber = Number(newScore);
// console.log(scoreInNumber);

// let update newScore value to my name "Akanksha" which is a string
newScore = "Akanksha";
// console.log(typeof newScore);
scoreInNumber = Number(newScore);
// console.log(scoreInNumber);

// what if score is a boolean value true/false

score = true;
// console.log(typeof score);
valueInNumber = Number(score);
// console.log(valueInNumber);

score = false;
// console.log(typeof score);
valueInNumber = Number(score);
// console.log(valueInNumber);

/* NOTES**

"33" => 33
"33abc" => NaN
true => 1; false => 0

*/
console.log("BOOLEAN_________*********");

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

isLoggedIn = 0;

booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// but if i convert "" - empty string
isLoggedIn = "";

booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// but if i add string "Akanksha"
isLoggedIn = "Akanksha";

booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

/* NOTES:

1 => true; 0 => false
"" => false
"Akanksha" => true

*/

console.log("STRING------------------****");

let someNumber = 25;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************** OPERATIONS *******************
console.log("**************OPERATIONS****************");

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 =  "Hello";
let str2 = " Akanksha";

let str3 = str1 + str2;
console.log(str3);

// NOT CORRECT WAYS OF CALCULATION
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// INSTEAD
console.log( (3 + 4) * 5 % 3);  // intead use paranthesis

/** some other */

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1=num2=num3 = 2+2  // not good way to write code
console.log(num1, num2, num3);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter, "gameCounter");

// limk to study
// https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion

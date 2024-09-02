const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString(), "toString()")

const newNumber = 23.890;
console.log(newNumber.toFixed(1), "toFixed() to 1 value after decimal");

// The toPrecision() method formats a number to a specified length and returns a string.
console.log(newNumber.toPrecision(3));

const newNumber1 = 123.8966;
console.log(newNumber1.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++ Maths ++++++++++++++++++++++++

console.log(Math);

/** absolute:

The Math.abs() static method returns the absolute value of a number.
The absolute value of x. If x is negative (including -0), returns -x. Otherwise, returns x. 
The result is therefore always a positive number or 0.

*/
console.log(Math.abs(-4));  // 4

console.log(Math.round(4.6)); // 5

console.log(Math.ceil(4.2));  // 5

console.log(Math.floor(4.9));  // 4

console.log(Math.min(4, 3, 6, 8));  // 3

console.log(Math.max(4, 3, 6, 8));  // 8

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

// hack
console.log(Math.floor(Math.random() * (max - min + 1)) + min);




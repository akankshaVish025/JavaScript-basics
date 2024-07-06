const name = "Akanksha";
const repoCount = 5;
console.log(name + repoCount + " Value");

// String Interpolation syntax: ${...}
/** 
1. string interpolation is the process of replacing placeholders with values in a string literal
2. It is done using back-ticks (``).
**/

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// 2nd way to declare string
const gameName = new String('akanksha-rv-hc');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length, "check length method");
console.log(gameName.toUpperCase(), "To uppercase method");
console.log(gameName.charAt(3),  "Charchter At method");
console.log(gameName.indexOf('h'), "Index of method");

const newStr = gameName.substring(0,4);   // Last character not inculuded in substring
console.log(newStr, "Substring Method");

const anotherStr = gameName.slice(0,4);    // But speciality of slice is that it can use negative value but substring ignore negative
console.log(anotherStr, "Slice Method");

const negStr = gameName.slice(-8,6);
console.log(negStr, "Negative Slice");

const newStr1 = "   akanksha  ";
console.log(newStr1.trim(), "trim method");

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-', "Replace method"));

console.log(url.includes('hitesh'), "Includes method");

console.log(url.includes('sundar'), "Includes method");

console.log(gameName.split('-'), "Split method");
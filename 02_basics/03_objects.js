/*
Objects are created using 2 ways:
1. Literals
2. Constructors
*/

// singleton :
// Object.create()

// Object Literals:
const JsUser = {
    name: "Akanksha",
    age: 18,
    "full name": "Akanksha Vishwakarma",
    location: "Jaipur",
    email: "akshu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}                                                                        // this is how object is created

// To access JS object properties
console.log(JsUser.email, "Using dot");
console.log(JsUser["email"], "Using square bracket"); // always use string in square bracket
console.log(JsUser["full name"]);   //properties like("full name") are always accessed using square bracket

// Note: JsUser["email"]
// when using square bracket always write property name in double quotes("")

// To add symbol datatype in object datatype as key and print its value: ->

// Declare the symbol:
const mySym = Symbol("key1");
console.log(mySym, "mysm");


// Adding in object's key:
const user = {
    name: "Akanksha",
    age: 18,
    [mySym]: "mykey1", // Use the symbol as a key
    "full name": "Akanksha Vishwakarma",
    location: "Jaipur",
    email: "akshu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

// Check the datatype of symbol key 'mySym' and print its value:
console.log(typeof mySym, "---TYPE of symbol");  // typeof symbol key
console.log(user[mySym], "**^value in symbol key");  // value in the symbol key

// to change values in object:
user.email = "akanksha@chatgpt.com"
// to lock any value of object :
// Object.freeze(user);  // comment for further invertigation study

user.email = "akanksha@mytech.com"
console.log(user, "user");


// Before going forward comment freeze Object
// function in object:
user.greeting = function() {
    console.log("Hello JS users!");    
}

user.greetingTwo = function() {
    console.log(`Hello Js users ${this.name}`);
    
}

// Ways to print the object containing functions
console.log(user.greeting, "greeting");
console.log(user.greeting(), "greeting()");
console.log(user.greetingTwo(), "greetingTwo()");


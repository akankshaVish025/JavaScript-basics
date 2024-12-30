/*
Objects are created using 2 ways:
1. Literals
2. Constructors
*/

// singleton : If we create any Object from constructor, then that object will allways be singleton Object.
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
console.log(typeof mySym, "---TYPE of symbol");  // symbol
console.log(user[mySym], "**^value in symbol key");  // mykey1

// to change values in object:
user.email = "akanksha@chatgpt.com"
// to lock any value of object :

/*
freeze() :
The Object.freeze() method prevents any changes to an object.
The Object.freeze() method will fail silently in non-strict mode.
The Object.freeze() method will throw a TypeError in strict mode.

***Frozen objects are read-only. No modification, addition or deletion of properties are allowed.

The Object.isFrozen() method can be used to check if an object is frozen.
*/

// Object.freeze(user);  // comment for further investigation study

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

/*
Accessing a function without parentheses (user.greeting) logs the function definition.
Calling a function with parentheses (user.greeting()) executes the function, printing the message and then logging undefined because the function does not return a value.
this.name inside greetingTwo() accesses the name property from the user object and dynamically includes it in the message.
*/


/*
NOTE:

When You Need to Use this:
Inside Object Methods: When a function is a method of an object, 
and you want to access other properties of the same object, you use this to refer to the object itself.

const user = {
    name: "Akanksha",
    greeting: function() {
        console.log(`Hello, ${this.name}`); // 'this' refers to the current 'user' object
    }
};

user.greeting(); // Output: Hello, Akanksha


When You Don't Need to Use this:
Accessing Variables Directly: If you are outside of the object and you already have a reference to the object, 
you can directly use object.property.

const user = {
    name: "Akanksha",
    greeting: function() {
        console.log(`Hello, ${user.name}`); // 'user.name' accesses the 'name' property directly
    }
};

user.greeting(); // Output: Hello, Akanksha


When to Avoid Using this:
Arrow Functions: In arrow functions, the value of this is lexically bound, meaning it doesn't refer to the object in which it is defined but instead to the surrounding context. 
This is why you should avoid using this in arrow functions when defining methods for objects.

const user = {
    name: "Akanksha",
    greeting: () => {
        console.log(`Hello, ${this.name}`); // 'this' will not refer to the 'user' object here
    }
};

user.greeting(); // Output: Hello, undefined
*/

const test1 = {
    name: 'john',
    lastname: 'muler',
    greet: function() {
        console.log(this.name);
        console.log(this.lastname);
        console.log(this);
    }
}

test1.greet() 


const test = {
    name: 'john',
    lastname: 'muler',
    greet: () => {
        console.log(this.name);
        console.log(this.lastname);
        console.log(this);
    }
}

test.greet()
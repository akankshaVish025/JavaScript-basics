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
console.log(JsUser["email"], "Using square bracket");
console.log(JsUser["full name"]);   //properties like("full name") are always accessed using square bracket

// Note: JsUser["email"]
// when using square bracket always write property name in double quotes("")



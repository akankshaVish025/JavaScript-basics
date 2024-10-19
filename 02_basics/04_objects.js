// How to create object single and contructor:

// const tinderUser = new Object();  // It is an SingleTon Object
// console.log(tinderUser); // {} 

const tinderUser = {}; // It is an Non-singleTon/Literal Object
// console.log(tinderUser); // {}  // Both ways of object creation will give same output


tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);  // { id: '123abc', name: 'Sammy', isLoggedIn: false }

/* 
Note : Alloting Objects insdide Object
*/
const regularUser = {
    email: "some@gmailcom",
    fullName: {
        userFullName: {
            firstName: "Akanksha",
            lastName: "Vishwakarma"
        }
    }
};

// To access values from above object use dot(.) notation

// Nesting level 1
console.log(regularUser.fullName); // { userFullName: { firstName: 'Akanksha', lastName: 'Vishwakarma' } }
// Nesting level 2
console.log(regularUser.fullName.userFullName); // { firstName: 'Akanksha', lastName: 'Vishwakarma' }
// Nesting level 3
console.log(regularUser.fullName.userFullName.firstName); // Akanksha

/*
Note*** : OPTIONAL CHAINING(?.) can be used effectively here.
Optional chaining will return undefined instead of throwing an error if any property in the chain is null or undefined.
*/

// console.log(regularUser.fullName); // { userFullName: { firstName: 'Akanksha', lastName: 'Vishwakarma' } }
// console.log(regularUser.fullName?.userFullName); // { firstName: 'Akanksha', lastName: 'Vishwakarma' }
// console.log(regularUser.fullName?.userFullName?.firstName); // Akanksha


// Combining Objects:

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// wrong method to merge objects
// const obj3 = { obj1, obj2 } // gives nested object
// console.log(obj3, "obj3");  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } obj3

// Instead use Object.assign():
// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. 
// It returns the modified target object.
// const obj4 = Object.assign(obj1, obj2) 
// console.log(obj4, "obj4");  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } obj3

const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4, "obj4");  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// Both ways are correct but preffered one is:

// Best Way to combine/merge objects:
// using spread(...) operator:

const mergeObj = {...obj1, ...obj2, ...obj3}
console.log(mergeObj, "merge obj using spread"); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// ex. use from db values

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
];

console.log(users[1].email); //h@gmail.com

console.log(tinderUser);

// Object.keys(): The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
console.log(Object.keys(tinderUser), "Keys"); // [ 'id', 'name', 'isLoggedIn' ] returns array of keys

// Object.values(): The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
console.log(Object.values(tinderUser), "values"); // [ '123abc', 'Sammy', false ] returns array of keys

// Object.entries(): 
// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
console.log(Object.entries(tinderUser), "entries"); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] entries

// Object.hasOwnProperty(): 
// The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


// -----------------------------------

// Destructuring Objects:
const course = {
    courseName: "Javascript",
    price: "999",
    courseInstructor: "Hitesh"
}

const { courseInstructor } = course; 
console.log(courseInstructor, "courseInstructor"); // "Hitesh"
// OR
const { courseInstructor: instructor } = course;
console.log(instructor, "Instructor"); // "Hitesh"  Both approch gives same result

// API concept :

// API is in JSON format

// {
// "name": "Akanksha",
// "courseName": "JS",
// "price": "Free",
// }

// API is in Array format:

[
    {},
    {},
    {},
]
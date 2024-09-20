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
        // userFullName: {
        //     firstName: "Akanksha",
        //     lastName: "Vishwakarma"
        // }
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


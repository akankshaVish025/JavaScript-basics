// array : Array is an object which enables storing a collection of multiple items/elements in a single variable. 
/* 
JS arrays are resizeable and can contain a mix of diffrent datatypes.
JS arrays are not associative arrays and so, array elements cannot be accessed using arbitary strings as indexes.
i.e console.log(myArr[0]) But NOt -> console.log(myArr["one"])
JS arrays are zero-indexed, i.e index starts from 0....n
JS arrays-operations create shallow copies.(All standard built-in copy operations with any JS objects create shallow copies, rather than deep copies).

*/
// Different ways to create arrays:

// const myArr = [0, 1, 2, 3, 4, 5, true, "akanksha"];  // Array can be string, numbers or mixed type enclose in square brackets
const myArr = [0, 1, 2, 3, 4];
const myHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4); // This method will automatically create square bracket array.
console.log(myArr2[1], myArr[0]);

// Array Methods:

// The push() method adds a new element to an array (at the end).
myArr.push(6)
console.log(myArr, "push");

// The pop() method removes the last element from an array, pop does not need any argument.
myArr.pop()
console.log(myArr, "pop");

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
myArr.unshift(9)
console.log(myArr, "unshift");

// The shift() method removes the first element from an array and returns that removed element.Id does not need any argument.
myArr.shift()
console.log(myArr, "shift");

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(myArr.includes(9)); // False

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(myArr.indexOf(9)); // -1 (Not present)
console.log(myArr.indexOf(3)); // 3 (present)

// The join() method creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. 
// If the array has only one item, then that item will be returned without using the separator.
const newArr = myArr.join();
console.log(myArr, "myArr");
console.log(newArr, typeof newArr, "join");

/***  SLICE , SPLICE   ***/

// SLICE: The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
// where start and end represent the index of items in that array.
// The slice() method can take two arguments like slice(1, 3)
// The method then selects elements from the start argument, and up to (but not including) the end argument.
//*** The original array will not be modified.
//The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
// The ***slice() method slices out a piece of an array.

console.log( "Array:", myArr);
const myn1 = myArr.slice(1, 3);  // start = 1, end = 3 , start from index 1 but does not include 3
console.log(myn1, "myn1");
console.log(myArr, "Original Array");


// SPLICE: The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//*** The original array will be modified.
// To create a new array with a segment removed and/or replaced without mutating/modifying the original array, use toSpliced().
// The ***splice() method adds new items to an array.
// The splice() method can take two or three arguments like slice(1, 3)
// The first parameter defines the position where new elements should be added (spliced in).
// The second parameter defines how many elements should be removed.
// Third element is optional, which defines the new elements to be added.

const myn2 = myArr.splice(1, 3);
console.log(myn2, "myn2");
console.log(myArr, "Original Array");

const nums = [1, 2, 3, 4];
console.log(nums.splice(1, 0), "Splice");   // [] Since you're removing zero elements, it returns an empty array [].

// toSpliced(): The toSpliced() method copies version of the splice() method. 
// It returns a new array with some elements removed and/or replaced at a given index.
/**NOTE: */
// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, 
// keeping the original array unchanged, while the old method altered the original array.

// const myn3 = myArr.toSpliced(0, 1);   // need latest version of node.js
// console.log(myn3, "myn3");
// console.log(myArr, "Original Array");


/*

delete() method:

*** Warning !
Using delete() leaves undefined holes in the array.

Use pop() or shift() instead.

*/ 
// EXample: 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log( delete fruits[0], "delete");
console.log(fruits, "fruits"); // [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]




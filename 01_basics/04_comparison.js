console.log(2 > 1);     // true
console.log(2 >= 1);    // true
console.log(2 < 1);     // false
console.log(2 == 1);    // false
console.log(2 != 1);    // true

// But avoid this type of conversion
console.log("2" > 1);   // true
console.log("02" > 1);  // true

console.log(null > 0);   // false
console.log(null == 0);  // false 
console.log(null >= 0);  // true

/* 
Note: The reason is that an equality check( == ) and comparisons( >, <, >=, <= ) work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

// similarly for undefined whenever it is compared , it will result in false.

console.log(undefined > 0);   // false
console.log(undefined == 0);  // false 
console.log(undefined >= 0);  // false
console.log(undefined < 0);   // false

// === triple equal to comparison operater will check value as well as datatype.

console.log("2" === 1);      // false
let myDate = new Date()
console.log(myDate, "Date");
console.log(myDate.toString(), "Date toString");
// The toDateString() method converts a date to a more readable format
console.log(myDate.toDateString(), "Date toDateString");
console.log(myDate.toLocaleString(), "Date toLocaleString");

console.log(typeof myDate, "Type");

/**
Note
JavaScript counts months from 0 to 11:

January = 0.

December = 11.
Specifying a month, day higher than 11, 
will not result in an error but add the overflow to the next year

*/

// 6 numbers specify year, month, day, hour, minute, second
// const d = new Date(2018, 11, 24, 10, 33, 30);
// console.log(d, "d");


// The toUTCString() method converts a date to a string using the UTC standard:
const d = new Date();
console.log(d.toUTCString(),"toUTCString");
console.log(d.getFullYear(),"getFullYear");

// The toISOString() method converts a date to a string using the ISO standard:
console.log(d.toISOString(),"toISOString");

// The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:
let diff = d.getTimezoneOffset();
console.log(diff, "timezone diff");

let myNewDate = new Date(2023, 0, 23);
console.log(myNewDate.toDateString(), "myNewDate");

let myNewDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myNewDate1.toLocaleString(), "myNewDate1");

let myNewDate2 = new Date("2023-01-14");
console.log(myNewDate2.toLocaleString(), "myNewDate2");

let myNewDate3 = new Date("01-14-2023");
console.log(myNewDate3.toLocaleString(), "myNewDate3");

let myTimeStamp = Date.now()
console.log(myTimeStamp,"TimeStamp");
console.log(myNewDate3.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate, "newDate");
console.log(newDate.getMonth() + 1);   // + 1 because months are counted from 0
console.log(newDate.getDay()); // mon=1, tue=2, wed=3, thur=4,.....


console.log(`${newDate.getDay()}`);  // using string interpolation in projects
console.log(newDate.toLocaleString('default', {
   weekday: "long",
   timeZone: "Asia/Kolkata"
}));

// Note :
// UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
// In JavaScript, the first day of the week (day 0) is Sunday.
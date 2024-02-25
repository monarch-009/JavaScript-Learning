// //String
// let str = "Aditya Singh";
// //String have some inbuilt properties and some function and this builtin function is also called method

// console.log(str.length); // length is property
// console.log(str[1]); // To access the index in string

// -----------------------------------------------

// Template Literals
// let sentence = `This is a Special String`;
// console.log(sentence);
// console.log(typeof sentence);

// let obj = {
//   item: "pen",
//   price: 40,
// };
// let output = `the cost of ${(obj.item)} is ${obj.price}`;
// console.log(output);

// String Method in js
// These are built-in function to manupulate a string
let str = "Aditya Singh ";
let str1 = "Rajput";

console.log(str.toLowerCase()); // to make whole string to lower case
console.log(str.toUpperCase()); // to make whole string to upper case
console.log(str.trim()); // removes all the whitespaces if present at the starting or in ending
console.log(str.slice(2, 5)); // return part of string between at index which is in the slice(start,end?)
console.log(str.concat(str1)); // to join two String
console.log(str.replace("S", "h")); // replaceAll(searchValue, newValue) // to change the some the value in the string or to replace some thing with other.
console.log(str.charAt(0)); // To find any char at index present

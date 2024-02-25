//for loop

// Example 1:  Print number from 1 to hundered
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// //Example 2: Calculate Sum of 1 to 10;
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log("Sum : ", sum);
// console.log("Loop ended");

//------------------------------------------------

// While Looop
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// -------------------------------------------------

// do - while
// let i = 20;
// do{
//     console.log("Aditya Singh");
//     i++;
// }while(i<=10);

// -----------------------------------------------

//for of loop // This is mostly used for Array
// let str = "Aditya Singh";
// for(let i of str){ // iterator
//     console.log(i);
// }

//-------------------------------------------------

// for-in loop // mainly used for the object/ Array
let student = {
  name: "Aditya",
  roll: 10,
  grade: "A",
  city: "Patna",
  age: 20,
};
for (let i in student) {
  console.log("key: ", i, "value :", student[i]);
}

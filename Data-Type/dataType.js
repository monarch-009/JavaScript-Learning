// Primitive

let num = 10;
let name = "Aditya Singh Rajput";
let isAdult = true;
let status;
let marriage = null;
let x = BigInt(999);
let y = Symbol("Hello");

console.log(typeof num);
console.log(typeof name);
console.log(typeof isAdult);
console.log(typeof status);
console.log(typeof marriage);
console.log(typeof x);
console.log(typeof y);

// Non-Primitive -> Object 

const student = {
    name:"Sumit",
    age:20,
    height: 6,
    city:"Patna",
    grade:"A"
}

student.age++;
console.log(typeof student);
console.log(student);
console.log(student.name);
console.log(student["name"]);


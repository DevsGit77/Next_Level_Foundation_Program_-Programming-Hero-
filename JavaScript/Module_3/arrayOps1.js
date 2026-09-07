let fruits = ["Mango", "Banana", "Orange"];

// let customFruits = fruits.filter((f) => f.length>5); // filter gives multiple value

// find
let customFruits = fruits.find((f) => f.length>5); // find gives single value 
console.log(customFruits);

let findfrt = fruits.includes("Mango"); // true, false
console.log(findfrt);


let students = [
    {name: "Rakib", marks: 86},
    {name: "Sohag", marks: 88},
    {name: "Fahim", marks: 90},
];

let studentCheck = students.some((s) => s.marks<87);
console.log(studentCheck);
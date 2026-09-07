// foreach, map

// foreach

let fruits = ["mango", "banana", "orange"];

let newFruits = fruits.forEach((f, idx) =>{
    console.log(`${idx+1} -> ${f}`);
    // return `${idx+1} -> ${f}`; // foreach can't return 
});

// let newFruits1 = fruits.map((f, idx) => {
//     return `${idx+1} -> ${f}`;
// });

let newFruits1 = fruits.map((f) => f.toLowerCase());

console.log(newFruits1, "\n", fruits);

let customFruits = fruits.filter((f) => f.length>5);

console.log(customFruits);


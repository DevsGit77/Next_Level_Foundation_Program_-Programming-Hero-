// falsy value false (0 or "") null undefined NaN(Not a Numeber)

let age = "";
if(age){
    console.log("Age exists");
}
else{
    console.log("Not exists");
}

console.log(age*"hello"); // output: NaN

console.log(typeof(NaN));  // number
console.log(typeof(null)); // object
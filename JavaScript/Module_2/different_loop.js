// for of , for in



let techStack = ["JS", "TS", "node", "React", "Sql"];

for(const tech of techStack){
    console.log("Learning: ", tech);
}

let obj = {
    name: "Joyanta",
    age: 100,
    address: "Dhaka",
};

for(let ele in obj){
    console.log(ele, "->", obj[ele]);
}

let marks = 50;

for(let i=marks; i<=100; i++){
    if(i>60){
        break;
    }
    console.log(i);
}
for(let i=1; i<15; i++){
    if(i%2 != 0){
        continue;
    }
    console.log(i);
}

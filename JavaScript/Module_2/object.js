// Object

let user = {
    name:  "Joyanta",
    age: 24,
    address: "Chittagong",
};

console.log(user["name"]);  // user[`${`}]



delete user.address;

user.address = "Dhaka";
user.address = {
    city: "Dhaka",
    area: "Motijhil",
};

// console.log(user);

console.log(Object.entries(user));

console.log(Object.keys(user));

console.log(Object.values(user));





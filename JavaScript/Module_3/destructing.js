const student = {
    name: "Rahim",
    age: 20,
    address: "Dhaka"
};

// old 
const OldName = student.name;

// new
const {age, address, name} = student;

console.log(name);

const student1 = {
    name: "Fahim",
    age: 20,
    address: {
        city: "Dhaka",
        zip: 4386,
    },
};

// nested & name alias
const {
    name: stdName,
    address:{city, zip}
} = student1;

console.log(stdName, city);

const arr = ["Red", "Green", "Blue"];

// const [first, second, third] = arr;
const [ , , third] = arr;

console.log(third);

const student2 = {
    name: "Fahim",
    age: 20,
    address: {
        city: "Dhaka",
        zip: 4386,
    },
    hobbies: ["Gardening", "Cricket", "football"]
};

const {name: newName, address: {city: stdcity, zip: stdzip}, hobbies: [, , firsthobby]} = student2;

console.log(firsthobby, stdcity, stdzip);

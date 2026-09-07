// nested Data


let user = {
    name: "Joyanta",
    age: 24,
    address: {
        city: "Chittagong",
        area: "Lohagara",
        zipcode: 4386,
    },
};

// console.log(user["address"]["zipcode"]);

console.log(user.address.zipcode);


let entry = Object.entries(user);

// console.log(entry[0][1]);

let students = [
    {
        name: "Joy",
        id: 102,
    },
    {
        name: "Amit",
        id: 103,
    },
    {
        name: "Kamrul",
        id: 104,
        address: {
            area: "Bhairab",
            thana: "Bhairab Thana",
            lane: "kamruler basa",
            option: ["Ros", "Tos", "Dos"],
        },
    },
]

console.log(students[2].address.option[1]);
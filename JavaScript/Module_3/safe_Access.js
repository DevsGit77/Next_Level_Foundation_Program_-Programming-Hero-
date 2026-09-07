let user1 = {
    name: "Joyanta", 
    address: {
        city: "chittagong",
    },
};
let user2 = {
    name: "Ashok", 
    
};

// Optional Chaining ?
console.log(user1?.address.city);
console.log(user2?.address?.city);


// nulish collescing ? undefined or 

console.log(user2?.address?. city?? "Dhaka");

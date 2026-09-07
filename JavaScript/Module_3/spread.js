let cart = ["fruits", "rice"];
// cart.push("egg");

let cart2 = [...cart, "egg"]; // spread

console.log(cart, cart2);

const personalInfo = {
    name: "Samad",
    age: 24,
};

const contactInfo = {
    email: "samad@gmail.com",
    phone: "01723339933",
};

const fullProfile = {
    ...personalInfo,
    ...contactInfo,
    zip: 4356,
};

console.log(fullProfile);

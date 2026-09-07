let products = [
    {title: "Mouse", price: 500, instock: true},
    {title: "Keyboard", price: 1200, instock: false},
    {title: "Monitor", price: 8000, instock: true},
    {title: "Headphone", price: 1500, instock: true},
];

let totalPrice = products.reduce((acc, current) => {
    return (acc += current.price);
}, 0);

console.log(totalPrice);

let sorted = products.sort((a, b) => b.price - a.price);


// let sorted = [6, 7, 1, 3, 5].sort((a, b) =>a-b);
console.log(sorted);


let estPrice = products.filter((p) => p.instock == true).reduce((acc, cur) => {
    return (acc+=cur.price);
}, 0);

console.log(estPrice);


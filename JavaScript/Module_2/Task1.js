// task : koto bill in BDT, koto item,  

let cart = [
    {name: "Shirt", price: 1200, quantity: 2},
    {name: "Pants", price: 1800, quantity: 1},
    {name: "Socks", price: 150, quantity: 3},    
];

let tot_Quantity = 0;
let tot_price = 0

for(let i=0; i<cart.length; i++){
    tot_Quantity += cart[i].quantity;
    tot_price += cart[i].price;
}
console.log("Total Quantity: ", tot_Quantity, " Total Price: ", tot_price ,"BDT" );
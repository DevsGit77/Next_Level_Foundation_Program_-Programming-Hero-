function total(Price, Quantity = 12){
    const grandTotal = Price*Quantity;
    return grandTotal;
}

const  spend = total(12);

console.log(spend);


function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello("Joyanta");
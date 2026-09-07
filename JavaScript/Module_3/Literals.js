let price = 500;
let quantity = 3;

console.log(`Total Price ${price*quantity} taka\nPay the price to get it as your own`);


function getDiscount(price){
    return price*0.1;
}

console.log(`You saved: ${getDiscount(price)} taka\nuse this as an investment`);
console.log(`your total bill is now ${price*quantity - getDiscount(price)} taka`);


let stock=1;
console.log(`Status: ${stock>0 ? "In Stock" + " " + stock: "Out of stock"}`)
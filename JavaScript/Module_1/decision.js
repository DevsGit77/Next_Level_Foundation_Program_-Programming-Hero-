// if else, switch case, ternary


let age =18;
if(age >= 18){
    console.log("Voter");
}
else if(age == 20 ){
    console.log("Twenty");
}
else{
    console.log("Not a Voter");
}


let marks = 90;
switch(true){
    case marks >= 80: 
            console.log("A+");
            break;
    case marks == 80:
        console.log("O+");
        break;
    default:
        console.log("default");
        break;
}

// ternary  cond? true: false;

age >= 18 ? console.log("Voter"): console.log("Not Voter");


{
    let age = 33;  // block scope
}


function sayAge(){
    age = 23;
}

sayAge();

console.log(age);

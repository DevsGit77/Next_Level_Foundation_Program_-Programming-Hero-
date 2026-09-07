const w = process.argv[2];
const h = process.argv[3];

function calBMI(w, h){
    const bmi = (w / (h*h));
    return bmi;
}

const bmiVal = calBMI(w, h);
console.log(bmiVal);

if(bmiVal<18){
 console.log("Under weight");
}
else if(bmiVal>=18 && bmiVal <=24.5){
    console.log("Healthy Weight");
}
else if(bmiVal>24.5 && bmiVal <=35.5){
    console.log("Over weight");
}
else {
    console.log("Unhealthy weight");
}
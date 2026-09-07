// Input from terminal

const weight = process.argv[2];
const height = process.argv[3]

function calBMI(weight, height) {
    const bmi = (weight/ (height*height));
    return bmi;
}
console.log(calBMI(weight, height));

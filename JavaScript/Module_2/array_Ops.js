let marks = [55, 82, 78, 90, 93, 89];

let max = marks[0];

for(let i=1; i<marks.length; i++){
    if(max < marks[i]){
        max = marks[i];
    }
}

console.log(max);

let sum=0;

for(let ele of marks){
    sum += ele;
}
console.log(sum);
console.log(sum/marks.length);


// let marks = [55, 82, 78, 90, 93, 89];

let remarks = [];

for(let i=marks.length-1; i>=0; i--){
    remarks.push(marks[i]);
}

console.log(remarks);
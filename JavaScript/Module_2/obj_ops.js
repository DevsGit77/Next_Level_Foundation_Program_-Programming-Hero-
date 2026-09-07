let student = {
    name: "Rahim",
    id: 102,
    marks: {
        bangla: 75,
        english: 89,
        math: 98
    }
};

let totalMarks = 0;
let totalSbjct = 0;

for(const sub in student.marks){
    totalMarks += student.marks[sub];
    totalSbjct++;
}

let avg = totalMarks/totalSbjct;

console.log(totalMarks, totalSbjct);
console.log(avg.toFixed(2));

if(avg>=80){
    console.log("Passed with distinction. got ", avg, "%");
}
else{
    console.log("fail korce porasunay valo korte hobe");
}



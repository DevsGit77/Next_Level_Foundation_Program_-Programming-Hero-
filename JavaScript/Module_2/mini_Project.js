let students = [
    {id: 101, name: "Joyanta", age: 24, department: "CSE"},
    {id: 102, name: "Ashok", age: 25, department: "ME"},
    {id: 103, name: "Hridoy", age: 23, department: "EEE"},
];

function addStudent(name, age, dept){
    let newId = students.length > 0 ? students[students.length-1].id + 1 : 101 ;
    let newStudent = {
        id: newId,
        name: name,
        age: age,
        department: dept,
    };

    students.push(newStudent);
    console.log("Student Added successfully");
}

addStudent("Fahim", 26, "ML");
console.log(students);

function getAll(){
    for(const student of students){
        console.log(student);
    }
}

getAll();

function findStudent(id){
    let foundstdnt = null;

    for(let student of students){
        if(student.id == id){
            foundstdnt = student;
            break;
        }
    }

    if(foundstdnt){
        console.log("Found Student: ", foundstdnt);
    }
    else{
        console.log("404 not found");
    }
}

findStudent(102);

function deleteStudent(id){
    let targetStudent = -1;

    for(let i=0; i<students.length; i++){
        if(students[i].id == id){
            targetStudent = i;
            break;
        }
    }

    if(targetStudent != -1){
        let deletedstdnt = students.splice(targetStudent, 1);
        console.log(`deleted ${deletedstdnt[0].name} id ${targetStudent} deleted`);
    }
    else{
        console.log("404 not found");
    }
}

deleteStudent(101);
getAll();
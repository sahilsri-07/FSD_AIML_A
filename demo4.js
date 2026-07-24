//create object of student name, branch, age and make a copy and add address

const student = {
    id : 101,
    name : "sahil",
    age : "20",
    branch : "AIML",
}

const copy = {...student,
    address : {
        street1 : "sector-2",
        city : "noida",
        state : "uttar pradesh",
        pincode : 201001
    }
}

console.log("student =",student);
console.log("new student =",copy);
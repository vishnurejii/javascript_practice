
//*********object***********/

const student={
    name:"john",
    age:21
}

// console.log(student)
// console.log(student.name)
// student.city="NYC"
// console.log(student)
// //if we give name key name again it will overwrite because keys will not repeat
// student.city="miami"
// console.log(student)

//*************spread operator****************
const obj={...student,city:"NYC"}
console.log(obj)
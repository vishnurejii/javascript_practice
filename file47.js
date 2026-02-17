const students=[
    {id:1,name:"vansh",attendence:90,score:80},
    {id:2,name:"vaishnav",attendence:50,score:50}
]


function getStudentInfo(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           const student= students.find(student=>student.id===id) 
            if(student)resolve(student)
                else reject("student not found")
         
    }, 2000);

    })
}

function attendenceInfo(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

            const student= students.find(student=>student.id===id)

             if(!student) return reject("student not found")

        if(student.attendence>=75)resolve("attendence is ok")  
        else reject("attendence is low")
    }, 2000);

    })
}

function scoreInfo(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

           const student= students.find(student=>student.id===id) 
            if(student.score>=60)resolve("pass")
                else reject("student not found")
    }, 2000);

    })
}

async function main() {
 
try{
    const studentId=1;  
    const result=await Promise.all([
    getStudentInfo(studentId),
    attendenceInfo(studentId),
    scoreInfo(studentId)
])
console.log(result)
console.log("student has been promoted")
}
catch(err){
    console.log(err)
}
}
main()
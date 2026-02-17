//promise.any-returns the first fulfilled promise.ignores rejections unless all fail

const students=[
    {id:1,name:"appu",s1:"true",s2:"true",s3:"false"},
    {id:2,name:"kichu",s1:"true",s2:"true",s3:"true"},
    {id:3,name:"unni",s1:"false",s2:"true",s3:"false"},
    {id:3,name:"ponnu",s1:"false",s2:"false",s3:"false"}
]

//if id is 1 - vansh is absent
function getStudentInfo(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           const student= students.find(student=>student.id===id) 
            if(student)resolve(student)
                else reject("student not found")
         
    }, 2000);

    })
}

function s1(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           const student= students.find(student=>student.id===id) 
           if(!student) return reject("not found")
            if(student.s1==="true")resolve("present")
                else reject("student is absent")
         
    }, 2000);

    })

}
function s2(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           const student= students.find(student=>student.id===id) 
           if(!student) return reject("not found")
            if(student.s2==="true")resolve("present")
                else reject("student is absent")
         
    }, 2000);

    })

}
function s3(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           const student= students.find(student=>student.id===id) 
           if(!student) return reject("not found")
            if(student.s3==="true")resolve("present")
                else reject("student is absent")
         
    }, 2000);

    })

}


async function main() {
 
try{
    const studentId=2; 
    const found=await getStudentInfo(studentId) 
    const result=await Promise.any([
   
    s1(studentId),
    s2(studentId),
    s3(studentId)

  
])
console.log(result)
console.log("student is present")
}
catch(err){
    console.log(err)
}
}
main()

//promise.race-returns the first promise that settles(resolve or)
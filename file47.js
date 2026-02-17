function getStudentInfo(){
    return new Promise((resolve)=>{
        setTimeout(() => {
        resolve("student info")     
    }, 2000);

    })
}

function attendenceInfo(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

            let attendence=75
        if(attendence>=75)resolve("attendence is ok")  
        else reject("attendence is low")
    }, 2000);

    })
}

function scoreInfo(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

            let score=60
        if(score>=60)resolve("pass")  
        else reject("fail")
    }, 2000);

    })
}


// //method2//destructuring
// function displayInfo({name}){
//     console.log(name)
// }

async function main() {
//     const result= await getStudentInfo()
//    await attendenceInfo()
//     await scoreInfo()
//     console.log("program completed successfully")    
const result=await Promise.all([
    getStudentInfo(),
    attendenceInfo(),
    scoreInfo()
])
console.log(result)
console.log("program completed successfully")
}
main()
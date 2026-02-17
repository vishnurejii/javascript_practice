function getStudentInfo(){
    return new Promise((resolve)=>{
        setTimeout(() => {

            const obj={
        name:"vishnu",
        email:"vishnu@gmail.com",
        age:22
    }
        resolve(obj)     
    }, 2000);

    })
}
//method1
// function displayInfo(result){

//     console.log(result.name)
// }


//method2//destructuring
function displayInfo({name}){
    console.log(name)
}

async function main() {
    const result= await getStudentInfo()
    displayInfo(result)
    console.log("program completed successfully")    
}
main()

//getStudentInfo should return object name,email and age
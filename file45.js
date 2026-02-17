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

async function main() {
    const result= await getStudentInfo()
    console.log(result)
    console.log("program completed successfully")    
}
main()

//getStudentInfo should return object name,email and age
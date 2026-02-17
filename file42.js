function f1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("this is f1 function")
            resolve()
            
        }, 5000);
    })

}

function f2(){
    console.log("this is f2 function")
}
f1()
    .then(()=>f2())
    .catch((err)=>console.log(err))
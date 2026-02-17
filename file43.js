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
// f1()
//     .then(()=>f2())
//     .catch((err)=>console.log(err))

//sync-everything will execute in one shot

async function main(){
   await f1()//instead of writing the .then again and again we can use this method
    f2()
}

main()
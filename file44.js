// function f1(x){
//     return new Promise((resolve,reject)=>{
//         if(x%2==0){
//             setTimeout(() => {
//             console.log(x)
//             resolve()
            
//         }, 3000);
//         }else{
//             reject("this is not a odd number")
//         }
        
//     })

// }


// async function main(){
// //     try{
// //         await f1(5)
// //    console.log("program completed successfully")
// //     }
// //     catch(err){
// //         console.log(err)
// //     }
// f1(5)
//     .then(()=>{
//         console.log("this is a even number")
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
   
// }

// main()



function f1(x){
    return new Promise((resolve,reject)=>{
        if(x%2==0){
            setTimeout(() => {
                console.log(`${x} is a even number`)
            resolve()
            
        }, 3000);
        }else{
            reject("this is not a odd number")
        }
        
    })

}


async function main(){
    let num=Math.round(Math.random()*10);
    
    try{
        const result=await f1(num)
        console.log(result)
   console.log("program completed successfully,its a odd number")
    }
    catch(err){
        console.log(err)
    }

   
}

main()
function p1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("p1 success")            
        }, 4000);
    })
}

function p2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("p2 failed")            
        }, 1000);
    })
}

function p3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("p3 success")            
        }, 3000);
    })
}

async function main(){
    try{
        // const result=await Promise.all([p1(),p2(),p3()])
        //  const result=await Promise.any([p1(),p2(),p3()])
        //  const result=await Promise.race([p1(),p2(),p3()])
         const result=await Promise.allSettled([p1(),p2(),p3()])
    console.log(result)
    }
    catch(err){
        console.log(err)
    }
    

}
main()
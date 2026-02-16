// function makePayment(f){
//     setTimeout(()=>{console.log("payment has been processed")
//         f()
//     },5000)
// }

// function sendConfirmation(){
//     console.log("order has been placed successfully")
// }

// //it will create call back hell
// makePayment(sendConfirmation)


function makePayment(){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("payment has been received")
        resolve()
    }, 5000);
   })
}

function sendConfirmation(){
    console.log("order has been placed successfully")
}

makePayment()
.then(()=>sendConfirmation())
.catch((err)=>console.log(err));


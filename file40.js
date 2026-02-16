//promises
// function f1(){
//     setTimeout(()=>{console.log("this is f1 function")},5000)
// }

// function f2(){
//     console.log("this is f2 function")
// }
//  f1()
//  f2()



function makePayment(){
    setTimeout(()=>{console.log("payment has been processed")},5000)
}

function sendConfirmation(){
    console.log("order has been placed successfully")
}
makePayment()
sendConfirmation()
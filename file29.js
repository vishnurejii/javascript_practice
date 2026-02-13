// function add(a,b){
//     console.log(a)
//     console.log(b)
// }
// add(10,50)


// function add(){
//     console.log(arguments)
//       console.log(arguments.length)
//         console.log(arguments[0])
   
// }
// add(10,50,60,40,80)


// function add(...arr){//rest operator

//     console.log(arr)
//  let sum=0
//     arr.forEach((a)=>{
       
//         sum+=a
//     })
//     return sum
// }

// const result=add(10,50,60,40,80)
// console.log(result)



//*************reduce *********** */
function add(...arr){
   let sum = arr.reduce((total, num) => total + num, 0);
   return sum;   // ✅ return the value
}

const result = add(10, 50, 60, 40, 80);
console.log(result);

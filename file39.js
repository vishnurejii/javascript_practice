//hoisting

// console.log(name)
// var name="john"//get undefined

//hoisting with let and const
// console.log(name)
// let name="john"//get reference error

// console.log(name)
// const name="john"

//hoisting using function
// greet()
// function greet(){
//     console.log("hello world")
// }//functions are fully hoisted

//***********regular functipon can be hoisted fully,but arrow function can't be */

// greet()
// const greet=()=>{
//     console.log("hello world")
// }//will get error,cause the arrow function acting like a variable
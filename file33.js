

// const names=["John","Catht","Mike"]
// //allow as to extract values from an array known as destructuring

// const[name1,name2,name3]=names;
// console.log(name1)
// console.log(name2)

//*********************************************************** */

// const student={
//     name:"John",
//     age:21,
//     city:"jalandhar"
// }

// const{name,age}=student
// const{name:newName}=student
// const{city="amritsar"}=student

// console.log(newName)
// console.log(name)
// console.log(age)
// console.log(city)

//************************************************* */



//************************************************ */
// const student={
//     name:"John",
//     age:21
// }

// const{n1,n2}=student
// console.log(n1)
// console.log(n2)//do not destructure with another names,always use property names
//********************************************* */


//************************************************************* */

const student={
    name:"John",
    age:21,
    city:"jalandhar",
    marks:{
        math:60,
        science:90
    }
}

const{marks}=student
console.log(marks)


const{marks:{math}}=student
console.log(math)//for destructure object inside another object//destructuring the child value


const{name,age}=student
const{name:newName}=student
const{city="amritsar"}=student

console.log(newName)
console.log(name)
console.log(age)
console.log(city)
//************************************************* */
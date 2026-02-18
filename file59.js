// const student={
//     name:"Nikhil",
//     display:function(){
//         console.log(this.name)
//     }
// }
// student.display()


// const student={
//     name:"Nikhil",
//     display:()=>{
//         console.log(this.name)
//     }
// }
// student.display()//will get error
//Because arrow functions do NOT have their own this.
//In a normal function, this refers to the object that calls the method (student).
//In an arrow function, this is taken from the surrounding (lexical) scope.


// const student={
//     name:"Nikhil",
//     display(){
//         console.log(this.name)
//     }
// }
// student.display()



const student = {
    name: "Nikhil",
    display: function () {
        const show = () => {
            console.log(this.name)
        }
        show()
    }
}

student.display()

// const emp1={
//     name:"John",
//     display:function(){
//         console.log(this.name)
//     }

// }
// const emp2={
//     name:"santo",
//     display:function(){
//         console.log(this.name)
//     }

// }
// emp1.display()
// emp2.display()


// function Employee(name){
//     this.name=name
//     this.greet=function(){
//          const display=()=>{
//         console.log(name)
//     }
//     display()
//     }
  
// }
// const emp1=new Employee("john")
// emp1.greet()


// function Employee(name){
//     this.name=name
//     this.greet=()=>{      
//         console.log(name)
//     }
// }
// const emp1=new Employee("john")
// emp1.greet()


//prototype
function Employee(name){
    this.name=name
}
Employee.prototype.display=function(){
    console.log(this.name)
}
const emp1=new Employee("john")
emp1.display()
const emp2=new Employee("santo")
emp2.display()
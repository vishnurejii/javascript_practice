// const names=["sam","ajay","rahul","aryan"]
// const names=new Array("sam","ajay","rahul","aryan")

// names.pop()//remove last element
// names.push("vivek")//add element on the last position
// names.shift()//ulta of po
// names.unshift("vivek")//ulta of push
//shift and unshift is slower because of the rearrangement
// console.log(names)
// console.log(names.sort())
// console.log(names.reverse())

const numbers=[5,2,1,4,6,3]
// console.log(numbers.sort((a,b)=>a-b))//for printing ascending order
// console.log(numbers.sort((a,b)=>b-a))//for printing descening order
console.log(numbers.indexOf(2))//print the posiiton of first 2
console.log(numbers.lastIndexOf(2))//print position of last 2
console.log(numbers.includes(3))//check 3 is exist in the array or not
console.log(numbers.slice(1,3))//from posiiton 1 it will start print,3 element 
console.log(numbers.slice(2,5))

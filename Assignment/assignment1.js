let tasks=[]

let nextId=1

//add task
const addTask=(title)=>{
    const newTask={
        id:nextId++,
        title,
        status:"pending"
    }
    tasks.push(newTask)
    console.log("task added successfully")
}

const getAllTasks=()=>{
    if(tasks.length===0){
        console.log("no task availabale")
    }
    console.table(tasks)
}


const completeTask=(id)=>{
    const task=tasks.find(task=>task.id===id)

    if(!task){
        console.log("no task found")
    }

    task.status="completed"
    console.log("completed task")
}


const deleteTask=(id)=>{
    const taskexist=tasks.find(task=>task.id===id)
    if(!taskexist){
        console.log("task not exist")
    }
  tasks=tasks.filter(task=>task.id!==id)
    console.log("deleted task")

   
}
addTask("task1")
completeTask(1)
console.log(tasks)
getAllTasks()
deleteTask(1)
getAllTasks()
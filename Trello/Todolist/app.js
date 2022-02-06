const inputTxt=document.querySelector('.txt')
const addTask=document.querySelector('.add-task')
const addBoard=document.querySelector('.add-board')
const todoTask=document.querySelector('.list')
const todoBoard=document.querySelector('.board')


let tasks
!localStorage.tasks ? tasks=[] : tasks=JSON.parse(localStorage.getItem('tasks'))

let boards
!localStorage.boards ? boards=[] : boards=JSON.parse(localStorage.getItem('boards'))



let todoItem=[]
let todoBoardItem=[1]

function Task(description){
    this.description=description;
    this.completed=false;
}

function Board(description){
    
    this.completed=false;
}

const createTemplate=(task, index) =>{
    return `
    <div class="list-item"> 
    <div class="description"> 
    ${task.description}    
    </div>
    <button onclick = "deleteTask (${index})" class="'btn-delete">X</button>
</div> 
    `
}
const addTaskList = () =>{
    todoTask.innerHTML=""
    if (tasks.length>0){
        tasks.forEach( (item, index) => {
            todoTask.innerHTML += createTemplate(item, index)          
        })
        todoItem=document.querySelectorAll('.list-item')
    }
}
addTaskList()

const createBoard =(board) =>{
     return`
   <div class="board-item">
     ${board.description}
     </div>
     `}

 const addBoardList = () =>{
     if (boards.length>0){
        boards.forEach( (item, index) => {
             todoBoard.innerHTML += createBoard(item, index)          
         })
        todoBoardItem=document.querySelectorAll('.board-item')
     }
 }

addBoardList()

const updateLocal=() =>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
    localStorage.setItem('boards', JSON.stringify(boards))
}


addTask.addEventListener('click', () =>{
    tasks.push( new Task(inputTxt.value))
    updateLocal()
    addTaskList()
    inputTxt.value =''
})



const deleteTask = index =>{
    tasks.splice (index, 1)
    updateLocal()
    addTaskList()
}



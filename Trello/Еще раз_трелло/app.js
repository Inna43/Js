
let addButton=document.querySelector('.add-but')

const inputTxt=document.querySelector('.txt')
const addTask=document.querySelector('.add-task')
const board=document.querySelector('.board')
const todoTask=document.querySelector('.list')
const todoBoard=document.querySelector('.board')


// let boards

// !localStorage.boards ? boards=[] : boards=JSON.parse(localStorage.getItem('boards'))


let boardArray=[]
function addNewBoard(){
    let newboard=document.querySelector('.board-item')
        newboard.innerHTML=` <h1>Todo</h1>
        <hr>
           <div class="cards">
               <input class='txt' type="text" placeholder="add task">
               <button class="add-task">Add</button>
            </div>
            <div class="list">
                    <!-- <div class="list-item"> Task</div> -->
            </div>`

         board.append(newboard)
      
     
         updateLocal()
}


function delBoard(){
    let delboard=document.querySelector('.board-item')
    document.querySelector('.board-item').remove(delboard)
    updateLocal()
    
}



function updateLocal() {
localStorage.setItem('boards',JSON.stringify(boards))

}



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




addTask.addEventListener('click', () =>{
    tasks.push( new Task(inputTxt.value))
    updateLocal()
    addTaskList()
    inputTxt.value =''
})

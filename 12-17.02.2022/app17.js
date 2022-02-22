const boardInput=document.getElementById('title-board')
const addBoardBtn=document.querySelector('.add-board')
const colorInput=document.getElementById('color')
const mainTask=document.querySelector('.main')
const addTaskBtn=document.querySelector('.add-task')
// const addTaskBtnProcess=document.querySelector('.add-task-process')
// const addTaskBtnDone=document.querySelector('.add-task-done')

const closeTaskBtn=document.querySelector('.close-task')
const saveTaskBtn=document.querySelector('.save-task')


let titleTask=document.querySelector('.title-task')
let dateTask=document.querySelector('.title-date')
let descriptionTask=document.querySelector('.textarea')

let listTask=document.querySelector('.list')

let id=0
let taskArray=[]
let taskBoardArray=[]

 if (localStorage.getItem('tasks') != null){
     taskArray=JSON.parse(localStorage.getItem('tasks'))
 }

 if (localStorage.getItem('boards') != null){
       taskBoardArray=JSON.parse(localStorage.getItem('boards'))
}

function changeColor(){
    let newColor=document.querySelector('.main-item')
        newColor.style.backgroundColor = colorInput.value
}

// chColor.addEventListener('click', ()=>{
//     changeColor()
// })

function deleteBoard(){
    let delBoard=document.querySelector('.main-item')
         document.querySelector('.main-item').remove(delBoard)
}


function addTask(){
    let newTask=document.createElement('div')
        newTask.className='modal-wrapper'
        newTask.innerHTML= `<div class="modal"> <div class="modal-title">
        <input class="title-task"  placeholder="Введите задачу">
        <input type="date" class="title-date">
        <button class="close-task" >X</button>                                   
</div>              
<hr>
<div class="modal-tag">
    <label for="tag"> Укажите тег:</label>
    <select name="tag" id="" /*multiple*/>
        <option value="Html">Html</option>
        <option value="Css">Css</option>
        <option value="JavaScript">JavaScript</option>
    </select>
</div>
<div class="modal-description">
    <textarea   class ="textarea" placeholder="Введите описание"></textarea>
</div>
 <button class="save-task">Save</button>  </div> `

        document.body.append(newTask)
}


addTaskBtn.addEventListener('click', () =>{
    addTask()
})
// addTaskBtnProcess.addEventListener('click', () =>{
//     addTask()
// })
// addTaskBtnDone.addEventListener('click', () =>{
//     addTask()
// })

function updateLocal(){
    localStorage.setItem('tasks', JSON.stringify(taskArray))
    localStorage.setItem('boards',JSON.stringify(taskBoardArray))
}




function removeModal(){
    if(document.querySelector('.modal-wrapper')){
        document.querySelector('.modal-wrapper').remove()
    }  
}

window.addEventListener('click', (e) =>{
    if(e.target.classList.contains('close-task')){

        removeModal()
       
    }
})

/*add task in board*/

window.addEventListener('click', (e) =>{
    if(e.target.classList.contains('save-task')){
    
    let title=titleTask.value   /*warum???*/
         titleTask.value=''
    let date=dateTask.value
         dateTask.value=''
            
    saveTask(title, date)
    renderTask()  
    updateLocal()   
   
 }})

function saveTask(title, date){
    const task={
          title: title,
           date: date        
    }

    taskArray.push(task)
    return task    
}


function renderTask(){
    //   listTask.innerHTML=""
     
      taskBoardArray.forEach(elem =>{
           let newListTask=document.createElement('li')
               newListTask.className='list-item'
               newListTask.innerHTML=`
               <div class="item-task">
               <span>${elem.title}</span> <span>${elem.date}</span>
              </div>
               `
               listTask.append(newListTask)
       })

}





function addBoard(){
    let newBoard=document.createElement('div')
        newBoard.className='main-item'
        newBoard.innerHTML= `<ul class="header-item">

        <li class="title" contenteditable="true"> ToDo </li>
        <li class="add-setting">...
            <ul>
                <div class="drop-item">
                    <input type="color" class="color">
                    <li class="add-color" onclick="changeColor()">Change color</li>
                    <li class="close" onclick="deleteBoard()"> X </li>
                </div>             
             </ul>
        </li>
    </ul>
<hr>
    <div class="list">         
    </div>                      
    <div class="add-task"> Add another task</div> `

    mainTask.append(newBoard)

 
 
}


addBoardBtn.addEventListener('click', () =>{
    addBoard()
    updateLocal()
})



 console.log(taskArray)
 console.log(taskBoardArray)
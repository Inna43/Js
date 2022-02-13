const colorInput=document.querySelector('.color')
const mainTask=document.querySelector('.main')



let 
function changeColor(){
    let newColor=document.querySelector('.main-item')
        newColor.style.backgroundColor = colorInput.value
}

function deleteBoard(){
    let delBoard=document.querySelector('.main-item')
         document.querySelector('.main-item').remove(delBoard)
}


function addTask(){
    let newTask=document.createElement('div')
        newTask = `<div class="modal"> <div class="modal-title">
        <input class="title-task"  placeholder="Введите задачу">
        <input type="date" class="title-date">
        <button class="close-task" onclick="deleteModal()" >X</button>                                   
</div>              
<hr>
<div class="modal-tag">
    <label for="tag"> Укажите тег:</label>
    <select name="tag" id="">
        <option value="Html">Html</option>
        <option value="Css">Css</option>
        <option value="JavaScript">JavaScript</option>
    </select>
</div>
<div class="modal-description">
    <textarea  placeholder="Введите описание"></textarea>
</div>
 <button class="modal-footer" onclick="addCard()">Save</button>  </div> `

    //  mainTask.innerHTML=newTask
    document.mainTask.append(newTask)
}

let arrTask=[]


function addCard(){
    let newTask=document.querySelector('.modal')
        arrTask.push(newTask)
        deleteModal()
}
console.log(arrTask)
/*удалить модальное окно*/

function deleteModal(){
    let delModal=document.querySelector('.modal')
        document.querySelector('.modal').remove(delModal)
}
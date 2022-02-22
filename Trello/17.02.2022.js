const boardInput=document.getElementById('title-board')
const addBoardBtn=document.getElementById('add-board')
const main=document.querySelector('.main')

let boards

!localStorage.boards ? boards = [] : boards = JSON.parse(localStorage.getItem('boards'))

function Board(description){
    this.description=description
}

const createBoard = (board, index) =>{
    return `
   
        <div class="main-item">
            <ul class="header-item">
               <li class="title" contenteditable="true"> ${board.description} </li>
               <li class="add-setting">...
                   <ul>
                       <div class="drop-item">
                           <input type="color" class="color">
                           <li class="add-color" onclick="changeColor()">Change color</li>
                           <li class="close" onclick="deleteBoard(${index})"> X </li>
                       </div>             
                    </ul>
               </li>
           </ul>
       <hr>
           <div class="list">
               <!-- <div class="list-item">              
                        
               </div> -->
           </div>                                        
               <div class="add-task"> Add another task</div>
      </div>                
  `
}

const addBoard =() =>{
    main.innerHTML=""
    if(boards.length >0){
        boards.forEach((item, index) => {
            main.innerHTML += createBoard(item, index)
            
        })
    }
}

addBoard()

const updateLocal = () =>{
    localStorage.setItem('boards', JSON.stringify(boards))
}

addBoardBtn.addEventListener('click', () =>{
    boards.push(new Board(boardInput.value))
    updateLocal()
    addBoard()
    boardInput.value=''

})

const deleteBoard = index =>{
   boards.splice(index, 1)
   updateLocal()
   addBoard()
}








// const board={
//     description: "Todo"
// }
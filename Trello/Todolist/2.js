const addBoard=document.querySelector('.add-board')
const board=document.querySelector('.board')


function addBoards(){
   let newBoard=document.createElement('div')
       newBoard.className='board-item'

       document.querySelector('.board').append(newBoard)
}
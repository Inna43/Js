const lists=document.querySelectorAll('.list')
const button=document.querySelector('.add-button')
const closeBtn=document.querySelector('.close')


// let list
// !localStorage.list ? list=[] : list=JSON.parse(localStorage.getItem('list'))


// const updateLocal=() =>{
//     localStorage.setItem('list', JSON.stringify(list))
// }

// let todoItem=[]
// function Task(description){
//     this.description=description
// }


// const updateLocal=() =>{
//     localStorage.setItem('lists', JSON.stringify(lists))
// }

// !localStorage.lists ? lists =[] : lists = JSON.parse(localStorage.getItem('lists'))

function addTask(){
    const btn=document.querySelector('.add-btn')
    const addBtn=document.querySelector('.add')
    const cancelBtn=document.querySelector('.cancel')
    const textarea=document.querySelector('.textarea')
    const form=document.querySelector('.form')

    let value
  
    btn.addEventListener('click', ()=>{
        form.style.display='block'
        btn.style.display='none'
        addBtn.style.display='none'


        textarea.addEventListener('input', event =>{
            value=event.target.value
            if (value) addBtn.style.display='block'
            else addBtn.style.display='none'
        })
    })


    cancelBtn.addEventListener('click', () =>{
        textarea.value=''
        value=''
        form.style.display='none'
        btn.style.display='flex'
    })

    addBtn.addEventListener('click', () =>{
        const newItem=document.createElement('div')
              newItem.classList.add('list-item')
              newItem.draggable=true
              newItem.textContent=value
              lists[0].append(newItem)

                  
            
              textarea.value=''
              value=''
              form.style.display='none'
              btn.style.display='flex'
              dargNdrop()
             
    })
   
}

addTask()




function addBoard(){
     const addBoard=document.querySelector('.main')
     const board=document.createElement('div')
     board.classList.add('card-item')
     board.innerHTML=`
     <div class="header-item"><span class="title" contenteditable="true">Done </span> 
     <span onclick = 'deleteBoard' class="close">X</span></div>
     <hr>
     <div class="list" >     
     </div> `
     addBoard.append(board)
  
}

button.addEventListener('click', addBoard)


// function delBoard() {
// 	const boards = document.querySelectorAll('.card-item')
// 	for (let i = 0; i < boards.length; i++) {
// 		const board = boards[i]

//         document.querySelector('.card-item').remove(board)
     
// 	}
// }
// closeBtn.addEventListener('click', delBoard)

/*function getBoard(){
    let getBoard = document.querySelector('.card-item')
        document.querySelector('.card-item').remove(getBoard)
    
}

closeBtn.addEventListener('click', getBoard)*/



let dragItem=null

function dargNdrop(){
     const listItems=document.querySelectorAll('.list-item')
     const lists=document.querySelectorAll('.list')


     for (let i=0; i< listItems.length; i++){
         const item=listItems[i]

         item.addEventListener('dragstart', () =>{
             dragItem=item
             setTimeout(() =>{
                 item.style.display='none'
             }, 0)
         })

         item.addEventListener('dragend', () => {
             setTimeout(() => {
                item.style.display='block'
                dragItem=null
             }, 0)
         })

        item.addEventListener('dblclick', () =>{
             item.remove()

         })
     

         for (let j=0; j<lists.length; j++){
             const list=lists[j]
             list.addEventListener('dragover', event => event.preventDefault())

             list.addEventListener('dragenter', function (event){
                event.preventDefault()
                this.style.backgroundColor='rgba(0,0,0,.3)'
            })

            list.addEventListener('dragleave', function(event){
                this.style.backgroundColor='rgba(0,0,0,0)'
            })

             list.addEventListener('drop', function(event){
                this.style.backgroundColor='rgba(0,0,0,0)'
                this.append(dragItem)

            })        

         }
     } 
    
}

dargNdrop()



const btnRemove=document.querySelector('.btn-remove')
btnRemove.addEventListener

// window.addEventListener('click', (event) =>{
//     if (event.target.className == 'btn-remove'){
//         removeModal()
//     }
// } )


// function showModal(){
//     let modal=document.createElement('div')
//         modal.className='modal'
//         modal.innerHTML=`
       
//         <h1>Task</h1>
//         <hr>
//         <div class="modal-content">
//                ${lists}
//         </div>
//         <hr>
//         <div class="modal-btn">
           
//             <button class="cancel  btn-remove">Cancel</button>
//         </div>
        
//     `
//     document.body.append(modal)
  
// }





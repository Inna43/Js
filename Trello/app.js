let taskArray=[]
let textInput=document.querySelector('input')
let restoreArray=[]

let id = 0

let newList=document.createElement('li')

function createNewElement(){   
        let textValue = textInput.value
            textInput.value = ''

      creator(textValue, id, 'home')

        render()     

        id++
}

function render(){
    document.querySelector('.card-item').innerHTML = ''
   
    taskArray.forEach(elem =>{
        let newList=document.createElement('li')
            newList.className='task'
            newList.innerHTML=`${elem.text} ${elem.tag} <div data-id='${elem.id}' onclick='getNewElement(this)'>X</div>`        
        document.querySelector('.card-item').append(newList)
    })
}

function getNewElement(el){

    let recreateObj = taskArray[el.dataset.id]
     taskArray.splice(el.dataset.id, 1)
     restoreArray.push(recreateObj )

   el.parentElement.remove()

    
    

        
        console.log(restoreArray)
         renderRestore()    
 }

function creator(text, id, tag) {
     const task = {
         text: text,
         id: id,
        tag: tag
    }

    taskArray.push(task)

    return task
}

function renderRestore(){
   
    document.querySelector('.restore-task').innerHTML = ''

    restoreArray.forEach(elem =>{
        let restoreList=document.createElement('li')
            restoreList.className = 'task'
            restoreList.innerHTML= `${elem.text} ${elem.tag} <div data-id='${elem.id}' onclick='getNewElement(this)'>X</div>`
        
        document.querySelector('.restore-task').append(restoreList)
    })
}
let clickCircle=document.querySelector('.click')
let start=document.querySelector('.start')


let count=0

let countArray=[]


if (localStorage.getItem('results') != null){
    countArray=JSON.parse(localStorage.getItem('results'))
}

clickCircle.addEventListener('click', () =>{
    count++
    console.log(count)
})

start.addEventListener('click', () =>{
    count=0
    start.setAttribute('disabled', true)
    setTimeout(() => {
        showModal()        
    }, 2000);
})

function showModal(){
    let modal=document.createElement('div')
        modal.className='modal-wrapper'
        modal.innerHTML=`
        <div class="modal">
       <div class="modal-header">
           <h2> Count clicks:</h2>
           <button class="delete">X</button>
         
       </div>
       <div class="modal-result">
       ${count}

       </div>
       <button>Confirm</button>
       <button>Close</button>
    </div>`
       document.body.append(modal)
}

function removeModal(){
    if(document.querySelector('.modal-wrapper')){
        document.querySelector('.modal-wrapper').remove()
    }

    countArray.push(createItem( count, setDate()))

    updateLocal()
    startActive()
}
function startActive(){
    start.removeAttribute('disabled')
}

function createItem (counts, time){
    let creator ={
        counts: counts,
        time:time
    }
    return creator
}

function setDate(){
    let today = new Date()
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    
    return time

}

function updateLocal(){
    localStorage.setItem('results', JSON.stringify(countArray))
}

window.addEventListener('click', (event) =>{
    if (event.target.classList.contains('delete')){
        removeModal()
    }
})


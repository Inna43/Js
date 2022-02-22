let main=document.querySelector('.main-item')
const widthInput=document.querySelector('.width')
const heightInput=document.querySelector('.height')
const colorInput=document.querySelector('.color')
let upBtn=document.querySelector('.up')

let array=[]

!localStorage.array ? array=[] : array=JSON.parse(localStorage.getItem('array'))

const updateLocal=()=>{
    localStorage.setItem('array',JSON.stringify(array))
}


function newElem(){
    let newDiv=document.createElement('div')
        newDiv.className='main-div'
        newDiv.style.backgroundColor = colorInput.value
        newDiv.style.height = heightInput.value +"px"
        newDiv.style.width = widthInput.value +"px"
        newDiv.style.borderRadius='50%'

       main.append(newDiv)
       array.push(newDiv)
       console.log(array)
       updateLocal()
  

}
upBtn.addEventListener('click', () =>{
    up()
})

function getNewElement(){
    let newWin = document.querySelector('.main-div')
        document.querySelector('.main-div').remove(newWin)
        array.pop(newDiv)
    
}

let stepH=0
let marginLeft=0

function right(){
    let newWin=document.querySelector('.main-div')
          marginLeft += 20   
              newWin.style.marginLeft= marginLeft +'px'
  
} 
function left(){
    marginLeft -= 20   
    let newWin=document.querySelector('.main-div')
       newWin.style.marginLeft=marginLeft +'px'
   
} 

function up(){
    stepH -=20
    let newWin=document.querySelector('.main-div')
        newWin.style.marginTop = stepH +'px' 
       
}

function down(){
    stepH +=20
    let newWin=document.querySelector('.main-div')
        newWin.style.marginTop= stepH +'px'
   
}



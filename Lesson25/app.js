let mainDiv=document.querySelector('div')
let mainHeading=document.querySelector('h1')
let mainImg=document.querySelector('img')
let mainBTN=document.querySelector('button')


    mainDiv.style.backgroundColor='red'
    mainDiv.style.width='300px'
    mainImg.style.width='50%'
    mainDiv.style.textAlign='center'
    mainHeading.style.color='yellow'

function changeColor(){
        mainHeading.style.color='green'
        
    }
function changeTextAlignLeft(){
    mainHeading.style.textAlign='left'
        
    }
function changeTextAlignCenter(){
    mainHeading.style.textAlign='center'
        
    }
function changeTextAlignRight(){
    mainHeading.style.textAlign='right'
        
    }
function changeWidth(){
        mainDiv.style.width='500px'
        
    }
function changeHeight(){
        mainDiv.style.height='500px'
        
    }
function changeBackgroundColor(){
        mainDiv.style.backgroundColor='blue'
        
    }
function changeWidthImg(){
       mainImg.style.width='100%'
        
    }
function changeNewWidthImg(){
        mainImg.style.width='50%'
         
     }
function cancel(){
    mainDiv.style.backgroundColor='red'
    mainDiv.style.width='300px'
    mainDiv.style.height='200px'
    mainImg.style.width='50%'
    mainDiv.style.textAlign='center'
    mainHeading.style.color='yellow'
         
     }
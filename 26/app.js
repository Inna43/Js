// let mainHeading=document.getElementById('main-heading')
// console.log(mainHeading.innerHTML)

// let newHeading=prompt('Введите новый заголовок')
// mainHeading.innerHTML=newHeading


let main=document.querySelector('.main')
let array=[]

function addDiv(){
let addNewDiv=document.createElement('div')
    addNewDiv.className='circle'
    addNewDiv.style.width='100px'
    addNewDiv.style.height='100px'
    addNewDiv.style.backgroundColor='blue'
    addNewDiv.style.borderRadius= '50%'

    // document.querySelector('body').append(addNewDiv)
    main.append(addNewDiv)
    array.push(addNewDiv)
    console.log(array)

}

function delDiv(){
    let addDiv=document.querySelector('.circle')
        document.querySelector('.circle').remove(addDiv)
}




let newArray=[]
function addNewDiv(){
let addNewDiv=document.createElement('div')
    addNewDiv.className='circle'
    addNewDiv.style.width='100px'
    addNewDiv.style.height='100px'
    addNewDiv.style.backgroundColor='green'
    addNewDiv.style.borderRadius= '35%'
    addNewDiv.innerText='green'

    // document.querySelector('body').append(addNewDiv)
    main.append(addNewDiv)
    newArray.push(addNewDiv)
    console.log(newArray)
}

function delNewDiv(){
    let addNewDiv=document.querySelector('.circle')
        document.querySelector('.circle').remove(addNewDiv)
}
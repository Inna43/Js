//Task1
/*let i=1
while (i<=100){
   console.log(i)
   i++}

for (i=1; i <= 100; i++){
   console.log(i)}*/

//Task2
/*let i=11
while (i<=33){
   console.log(i)
   i++}

for (i=11; i <= 33; i++){
   console.log(i)}*/


//Task3
/*let i=0
while (i<=100){
    if(i%2==0){
     console.log(i)}
     i++
}

for (i=0; i <= 100; i++){
    if (i%2==0){
   console.log(i)
}
}*/


//Task4
/*let i=1
let res=0
while (i<=100){
   res+=i
   i++}
   console.log(i)

for (i=1; i <= 100; i++){
    res+=i}
   console.log(i)*/


//Task5
/*let arr=[1,2,3,4,5]
for (let i=0; i<arr.length; i++){
    console.log(arr[i])
}*/


//Task6
/*let arr=[1,2,3,4,5]
let res=0
for (let i=0; i<arr.length; i++){
     res+=arr[i]
}
console.log(res)*/


//Task7
/*let obj={
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой'}
for (let key in obj){
    console.log( 'Ключ: ' + key + ' Значение: '+ obj[key])
}*/    


//Task8
/*let obj={
    Коля: '200',
    Вася: '300',
    Петя: '400'}
    for (let key in obj){
        console.log(  key + ' - зарплата: '+ obj[key] + 'долларов')
}*/


//Task9
/*let arr=[2,5,9,15,0,4]
for (let i=0; i<arr.length; i++){
    if (arr[i]>3 && arr[i]<10){
        console.log(arr[i])
}
}*/

//Task10
/*let arr=[2,5,-9,-15,6,-4]
let sum=0
for (let i=0; i<arr.length; i++){
    if (arr[i] >=0 ){
         sum+=arr[i]       
}
}
console.log(sum)*/

//Task11
/*let arr=[1,2,5,9,4,13,4,10]
for (let i=0; i<arr.length;i++){
    if (arr[i]==4) alert ('yes')   
}*/


//Task12
/*let arr=[10,20,30,50,235,3000]
for (let i=0; i<arr.length; i++){
    let num=String(arr[i])
    if (num[0]==1 || num[0]==2 || num[0]==5) console.log(num)
}*/


//Task13
/*let arr=[1,2,3,4,5,6,7,8,9]
let str='-'
let arr1=[str]
for (let i=0; i<arr.length; i++){
     arr1.push(arr[i] + str)
    }
console.log(arr1.join(""))*/

//Task14
/*let arr=[' mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
for (let i=0; i<arr.length; i++){
    if (i==5 || i==6)    document.write(arr[i]+ '<strong>' +'<br>');
    // else if (i==6)
    // document.write(arr[i]+ '<strong>' +'<br>');
    else document.write(arr[i] +'<br>') 
}*/

                                            //Task15
                                            /*let arr=[' mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
                                            let day='mon'
                                            for (let i=0; i<arr.length; i++){
                                                let day1=String(arr[i])
                                                if (day1==day)    document.write(arr[i] +'<br>');
                                                else document.write(arr[i] +'<br>' ) 
                                            }*/


//Task16
/*let n=1000
let num=0
while(n>49){
    num++
    n/=2
}
console.log(num)*/


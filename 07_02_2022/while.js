//Task 16
/*let l=10
let P=prompt("Введите % пробега, 0 < P < 50 : ")
let day=1
while (l<=200){
    l=l+(l*P)/100
    day++
    }
console.log( "Суммарный пробег =" + l + "Количество дней :" + day)*/


//Task 17
/*let N=prompt("Введите целое число, которое больше 0: ")
while (N>0){
    console.log((N%10))
    N=Math.floor(N/10)   
}*/


//Task 18
/* let N=prompt("Введите целое число, которое больше 0: ")
   let sum=0
   let count=0
   while (N>0){
     console.log((N%10))
     sum=sum + N%10
     N=Math.floor(N/10)  
     count++
}
 console.log ("Количество цифр = " + count +  "Сумма чисел =" + sum)*/


//Task 19
/*let N=prompt("Введите целое число, которое больше 0: ")
let array=[]
while (N>0){
   let  res=N%10
        array.push (res)
        N=Math.floor(N/10)        
}
console.log( array.join(""))*/



//Task 20
/*let N=prompt("Введите целое число, которое больше 0: ")
while (N>0){
    let res =N%10
         if (res==2){
            console.log(true)
}
         else{
            console.log(false)
}
 N=Math.floor(N/10)      
}*/



//Task 21
/*let N=prompt("Введите целое число, которое больше 0: ")
while (N>0){
    let res =N%10
         if (res%2!=0){
            console.log(true)
}
         else{
            console.log(false)
}
 N=Math.floor(N/10)      
}*/


//Task 22 
/*let x=31
let i=2
let flag=true
while( i < x-1 ){
    if( x%i==0){
        flag=false      
    }
    i++          
}
if (flag==false)  console.log('составное')
else  console.log('простое')*/


//Task 23 НОД
/*let A=prompt("Введите целое число A: ")
let B=prompt("Введите целое число B: ")
while (A!=B){
        if(A>B){
            A-=B
        }
        else{
            B-=A
        }          
}  console.log(A) */
    

                        //Task 24 Фибоначчи не решены, списывать не хочу, вернусь немного позже
                        //Task 25
                        //Task 26

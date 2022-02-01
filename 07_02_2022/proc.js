//Task 6
/*function digitCountSum(){
    for (let i = 1; i <=5 ; i++) {
        let sum=0
        let count=0
        let K=prompt("Введите число К : ")
        while (K>0){
            sum=sum + K%10
            K=Math.floor(K/10)  
            count++
       }
        console.log ("Количество цифр = " + count +  "Сумма чисел =" + sum)
    }
}   
digitCountSum()*/


//Task 7
/*function invertDigits(){
    for (let i = 1; i <=5 ; i++) {
         let K=prompt("Введите число К : ")
         let array=[]
        while (K>0){
            res=K%10
            array.push (res)
            K=Math.floor(K/10)      
             
    }
    console.log( array.join(""))
       }
    } 
invertDigits()*/

//Task 8
/*function addRightDigit(){
    let K=prompt("Введите число K:")
    let D=prompt("Введите число D (0-9):")
    console.log(K+D)
}
addRightDigit()*/

//Task 9
/*function addLeftDigit(){
    let K=prompt("Введите число K:")
    let D=prompt("Введите число D (0-9):")
    console.log(D+K)
}
addLeftDigit()*/


//Task 10
/*function swap(){
    let A=prompt("Введите число A:")
    let B=prompt("Введите число B:")
    let C=prompt("Введите число C:")
    let D=prompt("Введите число D:")
      X=A
      Y=B
      B=X
      A=Y
      console.log("А и В поменяны местами", A , B )
      X=C
      Y=D
      D=X
      C=Y
      console.log("C и D поменяны местами", C , D )
      X=B
      Y=C
      C=X
      B=Y
      console.log("B и C поменяны местами", B , C )
      console.log("Новый набор A B C D :", A, B, C , D )
}
swap()*/

//Task 11

/*function minMax(){
    let A=prompt("Введите число A:")
    let B=prompt("Введите число B:")
    let C=prompt("Введите число C:")
    let D=prompt("Введите число D:")
     console.log(Math.min(A,B,C,D))
     console.log(Math.max(A,B,C,D))    
}
minMax()*/

//Task 12
/*function sortInc3() {
    for (let i=1; i<=2; i++){
        let array=[]

    let A=prompt("Введите число A:")
        array.push(A)
    let B=prompt("Введите число B:")
        array.push(B)
    let C=prompt("Введите число C:")
        array.push(C)

        array.sort()
        console.log(array)  
}
}
sortInc3()*/


//Task 24

/*function even(K){
    let array=[12,15,15,12,2,6,8,7,3,9]
    let count=0
for (let i=0; i<array.length; i++){
        K=array[i]%2==0
        if (K){
           count++
           console.log('true')
        }
        else{
            console.log('false')
        }
    }  
    console.log(count)
}
even()*/


//Task 25
/*function isSquare(K){
    let array=[12,25,25,12,25,16,8,7,9,9]
    let count=0
    for (let i=0; i<array.length; i++){
         K=Math.sqrt(array[i])
            
        if (array[i]==K**2){
           count++
          }
          }  
          if (count>1){
               console.log('true')
          }
          else{
                console.log('false')
          }
      console.log(count)
}
isSquare()*/


                    //Task 26
                    //Task 27
                    //Task 28


//Task 29
/*function digitCount(){
   let K=prompt("Введите целое число, которое больше 0: ")
   let count=0
   while (K>0){
     let N=K%10
     count++
     K=Math.floor(K/10)      
}
 console.log ("Количество цифр = " + count )
}
  for (let i=1; i<=5; i++){
    digitCount()
}*/

//Task 30
/*function digitN(K,N){
    K=prompt("Введите число К :")
    N=prompt("Введите число N (1-5) :")
    let count=0
    while (K>0){
        let S=K%10
        count++
        K=Math.floor(K/10)  
}
console.log(count)
    if (count<N){
        return(-1)
}

}
digitN()*/
                            //Task 31
                            //Task 32
                            //Task 33
                            //Task 34
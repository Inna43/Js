//Task1
/*let arr=[]
let str='x'
for (let i=0; i<=5; i++){
    arr.push(str)
    str+='x'
} 
console.log(arr)*/

//Task2
/*let arr=[]
for (let i=0; i<=5; i++){
    for (let j=1; j<=i; j++){
        arr.push(i)
    }
    console.log(arr)
} */


//Task3
/*let arr=[]
function arrayFill(a,n){
    for (i=0; i<n; i++){
        arr.push(a)
    }
    return arr
}
let newArr=arrayFill('a',5)
console.log(newArr)*/

                                    // //Task4 Вернусь позже к этой задаче
                                    // let arr=[1,2,3,4,5,6,7,8,9]
                                    // let sum=0
                                    // for (let i=0; i<arr.length; i++){
                                    //     sum+=arr[i] 
                                    //     if (sum>10)    console.log(i) 
                                    // }
                                    
                                    

//Task5
/*let arr=[1,2,3,4,5,6,7,8,9, 'a','b']
let newArr=[]
for (i=arr.length-1; i>=0; i--){
    newArr.push(arr[i])
}
console.log(newArr)*/


//Task6
/*let arr=[[1,2,3],[4,5],[6]]
let sum=0
for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[i].length; j++){
        sum+=arr[i][j]
    }
}
console.log(sum)*/

//Task7/Ответ:36
/*let arr=[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
let sum=0
for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[i].length; j++){
        for (let k=0; k<arr[j].length;k++)
        sum+=arr[i][j][k]
    }
}
console.log(sum)*/


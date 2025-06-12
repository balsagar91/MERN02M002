// //this is function declaration

// function print(){
//     console.log("This is my function")

// }
// //this is function invocation /calling
// print()
// console.log()

// let printQlith=function(){
//     console.log("this is my expression function")
// }


// let add=function(a,b){
//     return a+b;
// }

// let sum=add(10,20);
// console.log(sum)
// //console.log(add)

// let sub=()=>{
//     console.log("this is my arrow function")
// }
// sub()
// console.log(sub)

// //higher order function

// function hof(a,b,task){
//    return task(a,b)
// }

// let addnum=hof(10,20,(x,y)=>{
//     return x+y;
// })
// console.log(addnum);


// let newString=prompt("Enter some string:");
// function checkVowel(str){
//     let newStr=str.toLowercase();
//     let count=0;

// //     for(let e of newStr){
// //         if (e==="a" || e==="e" || e==="i" || e==="o" || e==="u"){
// //             count++;
// //     }
// // }
// // return count;
// // }

// for(let e of newStr){
//     if("aeiou".includes(e)){        
//         count++;
//     }
// }
// return count;
// }
// console.log("no of vowels is:",checkVowel(newString));


// let arr=[1,2,3,4,5,6,7,8,]
// arr.forEach((v,idx,arr)=>{
//     console.log('in index ${idx} value is :${v} array is :${arr}');

// })


// let strArr=["sonu","sagar","chintu","amu","ram"]
// let countStartWithS=0;

// strArr.forEach((v)=>{
//     if(v.startsWith("s")){
//         countStartWithS++;
//     }
// })
// console.log("ans is :",countStartWithS);

// let numArr=[1,2,3,4,5];
// let modifiedArr=numArr.map((v)=>{
//     return v+1;

// })
// console.log(modifiedArr)


// let filterData=numArr.filter((v)=>{
//     return v%2===0;
// })
// console.log(filterData)

// let sumofNumber=numArr.reduce((accu,curr)=>{
//     return accu+curr;
// },0)
// console.log("sum is :",sumofNumber)


let markofArr=[70,80,60,55,64,78]
let afterFilter=markofArr.filter((e)=>{
    return e>=50;
})
console.log(afterFilter)


//!QUESTION 2

let n=prompt("Enter a number");

let from1Ton=[];

for(let i=1;i<=n;i++){
    from1Ton.push(i);
}


console.log( from1Ton)

let sumFrom1Ton=from1Ton.reduce((accu,curr)=>{
    return accu+curr;
})

let multFrom1Ton=from1Ton.reduce((accu,curr)=>{
    return accu*curr;
})

console.log("Summation is :", sumFrom1Ton);
console.log("Multiplication is :", multFrom1Ton);






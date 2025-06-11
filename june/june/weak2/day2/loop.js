//  let age = prompt("enter you age");

//  if(age >=18){
//  console.log("He/she will be  eligible for voting");
//  }
//  else{
//      console.log("he/she will be eligible for voting");
//  }


// let stMark=40
// if(stMark>=90){
//     console.log("Grade A")
// }
// else if(stMark>=80){
//     console.log("Grade B")
// }
// else if(stMark>=60){
//     console.log("Grade C")
// }
// else{
//     console.log("fail");
// }

// //ternary operator
// let stage=16;
// console.log(stage>=18 ? "can vote" : "can't vote" );

// let  number = prompt("enter the number");
// if (number%5==0 ){
//     console.log(number,"the number is divisible by 5")
// }
// else {
//     console.log(number,"the number is not divisible of 5")
// }

// // loop
// //for loop
// //while loop
// //do-while loop 

// console.log("this is for loopS")
// for(let i=1;i<=10;i++){
//     console.log(i)
// }


// console.log("this  while loop")
// let i=1;
// while(i<=5){
//     console.log("i")
//     i++;
// }

// console.log("this is do while loop ")
// let n=1;
// do{
//     console.log(n)
//     n++;
// }while(n<=15);


//object
let obj={
    name:"xyz",
    age:30,
    phone:9078580439,
    emial:"balsagar91@gmail.com"
}

console.log(obj.nanme)
console.log(obj.age)
console.log(obj.mobno)
console.log(obj.email)
obj.name="sonu"
console.log(obj.name)

let arr=[1,2,3,4,5,6];
//console.log(typeof arr)

//for-in
for(const key in obj){
    console.log(obj[key])

}

for(let idx in arr){
    console.log(arr[idx])
}

console.log("for-of loop")
//for of
// for(const e of obj){
// console.log(e)
// }


let str="Qlith innovation"
console.log("length is :",str.length)

console.log(str[0])

str[0]="D";
console.log(str)

let c=20;
console.log("value is :",(c+1))
console.log('value is :${c}+1')


console.log("for of loop ")
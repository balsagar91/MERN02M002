console.log("HELLO ARRAY")
let a=20;
console.log("the value is :",a)
console.log('the value of a is :${a+2}')


const obj={
    name:"xyz"
}

console.log(obj.name)
obj.name="y"
console.log(obj.name)


let str="welcome"
console.log(str[1])
str[0]="D";
console.log(str)
console.log(str.lenght)


console.log(str.length)
console.log(str.toLowerCase())
console.log(str.toUpperCase())

console.log(str.trim().length)
console.log(str.length)


console.log(str.charAt(0))
console.log(str.concat("Welcome to qlith").concat("Innovation"))

const newString=str.replace("W","D");
console.log(newString)


console.log(str.slice(0,6));

console.log(str.slice(0,str.length));
console.log(str.slice(-2))


// let  name = prompt("enter your name");
// console.log(name)
// console.log(name.length);
// console.log( "".concat("@").concat(name).concat(name.length))


let stArr=["babul","sagar","sonu","prangya","peda"];
console.log(stArr[0])
for(let e of stArr){
console.log(e)
}


let numArr=[2,3,4,6,7];
let sum=0;
for(let e of numArr){
    sum=sum+e;
}
console.log(sum/(numArr.length))


let arr2=[1,2,3,4,5];
let arr3=[6,7,8]
arr2.push(6,7,"sonu",true);
console.log(arr2)
arr2.pop()
console.log(arr2)

console.log(arr2.toString())
console.log(arr2.concat(arr3))


arr2.unshift(0);
console.log(arr2)
arr2.shift();
console.log(arr2)

console.log(arr2.slice(-2))
console.log(arr2.splice())


arr2.pop()

    console.log(arr2)
    arr2.splice(1,2,10)
    console.log(arr2)

    arr2.splice(4,1)
    console.log(arr2)

    console.log(arr2.includes(10));

    let comparr=["bloomberg","microsoft","uber","google","IBM","Netflix"]
comparr.splice(0,1)
console.log(comparr)

comparr.splice(1,1,"ola");
console.log(comparr)

comparr.push("Amazon")
console.log(comparr)

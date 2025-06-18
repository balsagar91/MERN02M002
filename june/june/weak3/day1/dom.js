// console.log("print");
// // window.document.write("QLITH")
// // console.error("this is error")

// let heading1=document.getElementById("heading1")
// heading1.innerText="Bye Bye"
// console.log(heading1)


// let div=document.getElementsByClassName("box")
// console.log(div)

// let secondDiv=document.getElementsByClassName("box")[1];
// console.log(secondDiv)

// let h2Coll=secondDiv.children;
// //console.log(h2Coll[1])
// console.log(h2Coll[1])
// h2Coll[1].innerHTML="<i>rhis is italic</i>"
// console.log(h2Coll[1])


// let para=document.getElementsByTagName("p");
// console.log(para)


// let box=document.querySelector(".box");
// console.log(box[1])


// //let box1Data=box[1].children;
// // console.log(box1Data[0].getAttribute("style"))
// // box1Data[0].setAttribute("style","visibility: hidden");
// // console.log(box1Data[0])



let inputs=document.querySelectorAll("input")
console.log(inputs[0].value)
console.log(inputs[1].value)

let btn=document.querySelector("button");
console.log(btn)



btn.addEventListener('click',()=>{

    console.log(inputs[0].value)
    console.log(inputs[1].value)


let userobj={
    fullName:inputs[0].value,
    age:inputs[1].value,


}
localStorage.setItem("user", JSON.stringify(userobj));


})
let form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
})

let div=document.querySelector("#createEle");
console.log(div)

let p=document.createElement("p")
p.innerText="this is my para graph";

div.appendChild(p);

console.log(div)


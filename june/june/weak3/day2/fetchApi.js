console.log("today fetch Api")

function getData(userId,next){

    setTimeout(() =>{
console.log("user Id :",userId);
next();
    },3000)
}

getData(1, ()=>{
    getData(2, ()=>getData(3,()=>getData(4,()=>getData(5))));
});


//promises

function getData(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user Id:",userId)
            resolve("resolve ho gaye")
        },3000)
    })
}
//how to handle a promise
//ans:then or catch block
getData(1).then((res)=>{
    return getData(2).then(()=>{
        return getData(3).then(()=>{
            console.log("result:",res)
        })
    })
    
}).catch((err)=>{
    console.log("Error is:",err)
})

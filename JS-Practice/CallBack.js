//what is call back functiions 
setTimeout(() => {
    console.log("call back")
}, 3000);


function eventListener(){
    document.getElementById("clickme").addEventListener("click",function xyz(){
        console.log("button clicked")
    })
}

eventListener()

//whenever we use event listener they use memory so we need to remove the memoryy
//we use garbage collection
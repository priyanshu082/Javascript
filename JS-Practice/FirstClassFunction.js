//Function statement
function a(){
    console.log(a)
}
a()

//Function expression
var b= function () {
  console.log(" b is called")
}

//the major difference between above two function is of hoisting as var is undefined and cant be called before initializing the value but functions are defined during memory allocation 

//anonymous function


//Named Function expresssion
var c=function d(){
    console.log("name function")
}
//we can call the function like this ---->> c()
//but not like this ----->> d() ,it will throw an error


//First class functions
//the ability to use functions as values , to pass as parameter or to return function in functions are called first class functions

var b=function(param){
    return function xyz(){
        console.log(param)
    }
}
console.log(b(a))

//First class citizens is same as First class functions


//Arrow Functions
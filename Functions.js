function Hello(){
    var hello = "Hello"
    var world = "world"
    var result = hello + " " + world
    console.log(result)
    // console.log("world")
}
Hello()

function raju(){
    console.log("my name is raju")
}

function raja(){
    console.log("my name is raja")
}

function bobby(){
    console.log("my name is bobby")
}

raju()
raja()
bobby()


function printname(name){
    console.log("my name is",name)
}

printname("raju")
printname("raja")
printname("bobby")

function addition(){
    var a = 10;
    var b = 15;
    var sum = a + b;
    console.log(sum)
}
addition()

function add5and22(){
    var a = 5;
    var b = 22;
    var sum = a + b;
    console.log(sum)
}
add5and22()

function add(a,b){
    // var a = 33;
    // var b = 22;
    var sum = a + b;
    console.log(sum)
}
add(33,4)
add(2,4)
add(4,4)



function adddouble(a,b,c){
    sum = 2*(a+b+c)
console.log("a=",a,"b=",b,"c=",c, sum)
}
adddouble(1,2,3)
adddouble(4,7,6)

    // reuse

function addandmultiplywithnumber(a,b,c,multiply){
    var sum = a+b+c
    var result = sum * multiply
    // console.log(result)
    return(result)
}
console.log(addandmultiplywithnumber(1,2,3,2))
addandmultiplywithnumber(2,3,4,9)
addandmultiplywithnumber(2,1,4,6)
var sumwith3 = addandmultiplywithnumber(1,2,3,3)
console.log(sumwith3)
var sumwith4 = addandmultiplywithnumber(2,1,4,4)
console.log(sumwith4)

function addition(){
    var a =  parseInt(document.getElementById("avalue").value)
    var b = parseInt(document.getElementById("bvalue").value)
    var sum = a+b
    document.getElementById("result:").innerHTML = `value of a = ${a} and value of b = ${b} and result = <span style= "color: green; font-size:50px">${sum} </span>`
}
(function(){
    console.log("annonymus")
})() 

// default parameters

function multiply(a,b,c = 1){
    var result = a * b * c
    console.log(result)
}
multiply(3,3,)

function multiply(a,b,c){
    if(c == undefined){
        c = 1
    }
var result = a*b*c
console.log(result)
}
multiply(2,2,)
// immediatly invoked function expression (iife)

//iife reduce global scope pollution 


// putting ( before function and end of fnt and again () at end of 
// fnt syntax is correct putting () for fnt make it block element
(function chai(){
    // this is a named iife, as it is used fnt keyword with chai
    console.log(`db connected`);
})(); // ; in this is to stop the code

// arrow function
((name) =>{// name parameter is paassed
    // this is unnamed iife
    console.log(`db connected two ${name}`);
})('amrita')

console.log("amrita");




// lecture 25 
// execution context type
//1. global execution context  , 2. function execution context
// 3. eval execution context

//{}  it is a memory creation phase
// 2nd is execution phase
//


// lecture 26
// const is a scope variable
// var is a global variable

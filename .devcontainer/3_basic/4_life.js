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

//************************************************************************ */
// lecture 26
// const is a scope variable
// var is a global variable
// false value   0, -0, BigInt , 0n, "", null, undefined, NaN
// truethy value are .....
// "0" , 'false' , " ", [], {}, function(){}


// to see the object is empty or not............see downward >

//  const emptyObj ={}
// if (Object.keys(emptyObj).length ===0){
//console.log("boject is empty");
//}


// nullish coalescing operator (??): null undefined
// let val1 = 5 ?? 10         // return 5 , it start from first
// let val1 = null ?? 10      // return 10, neglet null 
// let val1 = undefined ?? 10    // return 10
// let val1 = null ?? 10 ?? 20  // return 10 , ignore null and accept the first value
// console.log(val1)


// terniary operator
// condition ? true: false
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80"): console.log("more than 80")
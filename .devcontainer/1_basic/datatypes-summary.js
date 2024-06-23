//datatypes are ...
//1 primitive
// primitive are 1 string, 2number, 3boolean, 4 null,
//5undefined, 6 symbol, 7BigInt

//reference type(non primitive
// array, object, function are not primitive)


//check whether  java script is ststic or dynamic


const score =100
const scoreValue = 223.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = symbol('123')
const anotherId = symbol('123')
console.log(id===anotherId);

const bigNumber= 38472675n



const heros= ["shaktiman", "naagraj", "doga"]
 let myObj= {
    name: "amrita",
    age : 12,

}


const myFunction = function(){
    console.log("Hello Word");
}
console.log(typeof bigNumber);/// type of outside temp is object






//lecture 10   on ?+++++++++++++
//stack and heap
//stack is used in primitive and heap is used in non primitive
// for ex
let instaName = "amrita"
let anothername = instaName
anothername =" chaaurcode" 

console.log(anothername);

let userOne = {
    email: "djhsad",
    upi:"hbbwd",

}
let  userTwo = userOne
userTwo.email = "dsahjdb.com"
console.log(userOne.email);
console.log(userTwo.email);





// singleton
//object.create


//object literal

//declare the symbol
const mySym = Symbol("Key1")

const JsUser = {
    name: "Amrita",
    "full name": "Amrita Yadav",   // this value cannot be fetch by .   eg jsuser.email  
    //can only be fetch by another method  for eg jsuser["email"]  see the below example
    //mySym: "myKey1",  // this is not the correct way to use the symbol
    [mySym]: "myKey1", // use[] for symbol
    age : 20,
   location: "vrindavan",
    email: "amrita@google.com",
    isLoggedIn : false,
    lastLoginDays :["Monday", "Saturday"]
}
//console.log(JsUser.email)  // this is not the proper method for fetching the email

console.log(JsUser["email"])   // better than above
console.log(JsUser["full name"])
//console.log(typeof JsUser.mySym) // give ans string but we want symbol
console.log(JsUser[mySym])  // THIS IS SYMBOL

// VAULE OF OBJECT CAN BE GET BY DOT NOTATION
// IF WANT TO CHANGE THE VALUE
JsUser.email = "amrita@hhsha.com"
//Object.freeze(JsUser)
JsUser.email= "amrita@microsoft.com"
//console.log(JsUser);

//function
JsUser.greeting = function(){
    console.group("hello js user")
}
JsUser.greetingTwo = function(){
    console.group(`hello js user , ${this.name}`);
}
//console.log(JsUser.greeting);   // not the correct methos
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
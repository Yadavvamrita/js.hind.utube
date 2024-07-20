 function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("A");
 }
//sayMyName()

// function addTwoNumber(num1, num2){
// console.log(num1 + num2)
// }   // when this is cll in console reult it will be undefined



function addTwoNumber(num1, num2){
// let result = num1 + num2
// return result
return num1 + num2
   }

const result = addTwoNumber(2,3)
//console.log("Result:", result);


function loginUser(username){
   if(username === undefined){  //if() is a false value, if(undefined is also a false value)
     //if(!username) is equal to username === undefined
     
      //console.log("please enter a username");
      return
   }
  // return '${username} just logged in'
}


//console.log(loginUser("amrita"))
//console.log(loginUser())// it will show undefined





// lecture 20
function calculateCartPrice(...num1){   // ...num1 is a rest operator which will
   //represent all the value when pass in the function

   //when written  (val1, val2. ...num1)then 5900  and 754 only of below value
   return num1
}
//console.log(calculateCartPrice(200, 300,5900,754))


const user = {

   username : "amrita",
   price : 199

}
function handleObject(anyobject){
   console.log('Username is ${anyobject.username} and price is {anyobject.price}');

}

//handleObject(user)
handleObject({
   username:"arpu",  /// not showing the value arpu only showing anyobject.username
   prices :399
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
   return getArray[1]
}

console.log(returnSecondValue(myNewArray));

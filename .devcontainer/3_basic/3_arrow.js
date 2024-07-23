const user ={
    username :"amrita",
    price:99,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Amrita"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "amrita"
//     console.log(this.username);

// }

const chai = () =>{
    let username = "amrita"
    console.log(this);
    }

    //chai()

    //arrow function syntax
    const addTwo = (num1, num2) => num1 + num2
    
    // const addTwo = (num1, num2) =>   {
    //     return num1 + num2      // when {} is used thrn return keyword is must

    // }
   // const addTwo = (num1, num2) => {username: "amrita"}    // wrong format, object 
    //ko ({}) me rakhna padta hai
    const addTwo = (num1, num2) => {(username: "amrita")} 
    console.log(addTwo(3,4))

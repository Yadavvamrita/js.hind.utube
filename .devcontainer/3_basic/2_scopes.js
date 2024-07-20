// lect 21 scope and global
// let a =300  // global
// if (true){
//     let a = 10
//     const b = 20  /// content under curly braces is scope
//     var c= 30
//}
// console.log(a)  
// console.log(b)  
// console.log(c)  
// for (let i =0; i<Array.length;i++){
//     const element = array[i];

// }
// console.log(a)

//lecture 22

function one (){
    const username = "amrita"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);    // will show error as it is out of function
    two()
}
//one()

if(true){
    const username = "amrita yadav"
    if (username === "amrita yadav"){
        const website = "instagram"
       // console.log(username + website);
    }
    // The following line is removed as it will cause a reference error
    // console.log(website);
}



/////////+++++++++++++++++++++++++++++++ INTERESTING ++++++++++++
console.log(addone(5));
function addone(value){
    return num +1
}

addTwo(5)
 const addTwo = function (num){
    return num +2
 }
// array 
const myArr = [0, 1,2,3,4,5]
const myHeroes = ["shaktiman", "naagraj"]
const myArr2 = new Array (1,2,3,4)
console.log(myArr[1]);


// array method
///myArr.push(6)
//myArr.pop()

//myArr.unshift(9)      // insert 9 at the starting at the array
// myArr.shift()

// console.log(myArr.includes(9)); // give a boolean data
// console.log(myArr.indexOf(19));  // give -1  as no object is on index 19 
// const newArr = myArr.join()
// console.log(myArr);
//console.log(newArr);  // give ans as string
//console.log(typeof newArr);  // give answer string



//slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);
 

const myn2 = myArr.splice(1, 3)  // see this again the point

console.log("C", myArr);
console.log(myn2);
 



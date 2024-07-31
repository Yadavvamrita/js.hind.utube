// for of loop 
// these are aaray specific loop
// for putting object in array if between {}

const arr =[ 1, 2, 3, 4, 5]
for (const num of arr){
console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting){
console.log(`Each char is ${greet}`)
}
//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "France")
map.set('IN', "India")// map set unique value , so it will not repeat india again

console.log(map);
 for (const [key, value] of map){
    //console.log(key, ':-', value);
 }

 const myObject = {
    'game': 'NFS',
    'GAME2': 'SPIDERMAN'
 }

 //the below for loop will not work for the object iteration
//   for(const [key,value] of myObject){
//     console.log(key, ':-', value);

//   }
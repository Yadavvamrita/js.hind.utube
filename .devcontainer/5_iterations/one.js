// 04_control flow file is skipped by me as i know the concept

//
// for loop
for (let i = 0; i<=10; i++){
    console.log(`outer loop value:${i}`);
    for(let j =0; j<=10; j++){
        console.log(`inner loop value ${j} and ineer loop${i}`);
    }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index =0; index < myArray.length; index++){
    const element = myArray[index];
    console.log(element);
}




// break and continue
for(let index =1; index<=20; index++){
    if (index ==5){
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
}


for(let index =1; index<=20; index++){
    if (index ==5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
}




// lecture 28 while and do while loop
let index = 0 
while(index <= 10){
    console.log(`value of index is ${index}`);
    index = index +2
}

let myArray1 = ["flash", "batman", "superman"]
let arr = 0 
while (arr< myArray1.length){
    console.log(`value is ${myArray1[arr]}`);
    arr = arr +1
}


// do while loop
let score = 1

do {
    console.log(`score is ${score}`);
    score++
}while(score <=10);
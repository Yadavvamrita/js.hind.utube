/// for in loop
// object do not work on for of loop ,, only work on for in loop

// for in loop for array keys show only index like 0,1, 2,3 ,4 7,,, so put the name and [key], eg amrita[key], see below line 18
//for in loop do not map , so no iteration on map65432
const myObject ={
    js: 'javascript',
    cpp: 'C++',
    RB: "rubby",
    swift: "swift by apple"
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);

}


const programming =["js", "rb", "py","java"]
for (const key in programming){
    console.log(programming[key]);
}
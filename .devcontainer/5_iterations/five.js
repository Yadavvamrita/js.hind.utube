// for each loop

const coding = ["js", "ruby", "java", "python"]

// coding.forEach(function (val){
//     console.log(val);5543
// })

// for arrow function
 
// coding.forEach((item)=>{
//     console.log(item);
//  })

// see 27 min

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})


//below is the example of array with different object 
const myCoding = [
    {
        languageNmae: "javascript",
        languageFileName: "js"
},
{
    languageNmae: "java",
    languageFileName: "java"
},
{
    languageNmae: "python",
    languageFileName: "py"
},
]
myCoding.forEach((item)=>{
    console.log(item.languageNmae)
})
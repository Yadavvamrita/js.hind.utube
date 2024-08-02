//filter map




// const coding =[ "js","ruby","java", "python", "cpp"]
//  const value= coding.forEach((item)=>{
//     console.log(item)
//     return item 
//  })

const myNums =[1,2,3,4,5,6,7,8,9,10]
//myNums.filter((num)=> num>4) //........this format is too good or use below one....

// const newNums  = myNums.filter((num)=>{
//     return num>4         // this return keyword play an important role
// })



// use the below method or use filter method
const newNums= []
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
//console.log(newNums);


// example of book   array having object
 const books = [
{title:'Book One' , genre: 'Fiction', Publish: 1992, edition: 2004},

{title:'Book Two' , genre: ' Non Fiction', Publish: 1995, edition: 2008},

{title:'Book Three' , genre: 'History', Publish: 2003, edition: 2009},

{title:'Book Four' , genre: 'Science', Publish: 1992, edition: 2000},

{title:'Book Five' , genre: 'Fiction', Publish: 1999, edition: 2007},
{title:'Book Six' , genre: 'History', Publish: 1991, edition: 2003},
 ] ;
 let userBooks = books.filter((bk)=> bk.genre === 'History');
   //userBooks = userBooks.filter((bk) => {bk.Publishublish >=1991})// return is used as {scope}is used
   userBooks = userBooks.filter((bk) => {return bk.Publish >=1994 && 
    bk.genre === "History"
   });
   console.log(userBooks);   

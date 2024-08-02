const myNums =[ 1, 2, 3, 4]
// const myTotal = myNums.reduce(function(acc, currentval){
//     console.log(`acc:${acc }and currentval:${currentval}`);
//     return acc +currentval
// },  3 ) // can assign any value to it for eg 3 is given to acc, any value can be given
  //***another form of above code */
const myTotal = myNums.reduce((acc, curr)=>acc+ curr, 0)

console.log(myTotal);
  

const shoppingCart = [
       { itemName:"js course",
        price: 299
    },   
    { itemName:"python  course",
        price: 2099
    }, 
    
    { itemName:"mobile dev course",
        price: 2299
    }, 

    { itemName:"Data science course",
        price: 91299
    }, 

]
const priceToPay = shoppingCart.reduce((acc, item)=> acc +  item.price, 0)
console.log(priceToPay);
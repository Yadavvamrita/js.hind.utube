const name = "amrita"
const repoCount = 50

//console.log(name + repoCount + " value"); ----this is too old fasion of writing code

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('amritaaa-ya-com')
// above here string is object

console.log(gameName[0]);
console.log(gameName.__proto__); ///proto is prototype see in console

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));
// see all string method and implement it from mdn
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6,2)
console.log(anotherString);

const newStringOne = "   amrita   "
console.log(newStringOne);
console.log(newStringOne.trim());
// trim remove extra space , work in space


const url ="amrita://amrita.com/amrita%20yadav"
console.log(url.replace('%20', '-'))
console.log(url.includes('amrita'))
console.log(gameName.split('-'))


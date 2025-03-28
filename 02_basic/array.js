  //array
const myArr=[0,1,3,4];
const myHero=["shaktiman","ironman"];

const myArr2=new Array(1,2,3,4,5);
console.log(myArr[2]);

// Array method

myArr.push(6);
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift(10);  //add first in array 
console.log(myArr);
myArr.shift()   //remove element in first
console.log(myArr);
console.log(myArr.indexOf(0));  //if element didn't present give -1 or present then give index

const myn2=myArr.slice(0,2);
const myn3=myArr.splice(0,3); // array manuplated 
console.log("a",myn2 );
console.log("b",myn3);
console.log(myn2);
const name="ashiqule";
const repoCount=1;
//console.log(name+repoCount);

console.log(`Hello my name ${name} and my repo count is ${repoCount}`);

const gameName=new String('ashiqule');  //if used new keyword then this perticular type which you want


console.log(gameName[0]);
console.log(gameName.__proto__); //.__proto__ u can access any of method
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('u'));
console.log(gameName.substring(0,5));
console.log(gameName.slice(-6,7));  // take also negative value


const newString="   Ashiq ";
console.log(newString.trim());
const url="https://www.google.com"

console.log(url.replace('.com','-'));
console.log(url.includes('com'));  // value check

//Date
// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString);
// console.log(typeof myDate);

let createDate=new Date(2023,0,23);
console.log(createDate.toLocaleString());
console.log(Math.floor(Date.now()/1000)); 

let newDate=new Date();
console.log(newDate.getMonth()+1); //month start from 0 that why add +1

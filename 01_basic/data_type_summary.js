//primitive

// 7type : string number boolean, null,undefined,symbol,BigInt

const id=Symbol('123');
const anotherId=Symbol('123')
//Symbol used for unique value  if we give two value are same then also give unique value

console.log(id===anotherId);
const bigNumber=14523657894587n;


//Reference (non primitive)

//array ,objects,function

const heros=["shaktiman","doga"];

let myObj={
    name:"Ashiqule",
    age:21,
};

const myFunction=function(){
console.log("hello world");
}




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

//stack(primitive) and heap(non primitive) memory

//stack -> any change in copy value
 let num=1254;
 let copynum=num;
 copynum=987;
 console.log(num);
 console.log(copynum);

 // heap -->change in original value

 let one={
    name:"asif",
    age:21,
 }

 let two=one;
 console.log(two.name);
 two.name="Ashiqule";
 console.log(one.name);





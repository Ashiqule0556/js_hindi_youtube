//singleton     ,if object made by object called singleton


//object literals

const mySym=Symbol("key1");


const jsUser={
    name:"Ashiqule",
   "full name":"Ashiqule Alam",  // overcome this problem that why using  jsUser["full name"] for out put purpose
    roll:21101105056,
    location:"jalpaiguri",
    [mySym]:"mykey1" // we take this form outerside object and take this as same data type like symbol
}
console.log(jsUser.name);  //this is not good but this is not wrong
console.log(jsUser["name"]); //"" use this because under object like name roll location all are string that why
console.log(jsUser["full name"]);  // jull name point overcome purpose
console.log(jsUser[mySym]); //this use for alway data same like Symbol
console.log(typeof jsUser[mySym]); // for check data type


Object.freeze(jsUser);  // vaue freeze didn't change
jsUser.roll=21101105055;
console.log(jsUser["roll"]);
 console.log(jsUser);

 jsUser.greeting = function(){       // function add 
    console.log("Hello js user");     
 }

 jsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`);
 }

 

//  console.log(jsUser.greeting());
//  console.log(jsUser.greetingTwo());




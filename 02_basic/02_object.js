// const tinderUser = new Object()   // this is an sigal tone object

const tinderUser = {};
tinderUser.id="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false;
//  console.log(tinderUser);

const regulaUser={
     email:"some@gmail.com",
     fullname:{
        userfullname:{
            firstname:"Ashiqule",
            lastname:"Alam"
        }
     }
}
//console.log(regulaUser.fullname.userfullname.lastname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

// const obj3={obj1,obj2};
// console.log(obj3);
//   const obj3=Object.assign({},obj1,obj2);    //{} if you give or not give value always same some but give paranthesis is good habit

//  console.log(obj3);

const obj3={...obj1 , ...obj2};
console.log(obj3);

const users=[
    {
        id:1,
        email:"ashiqule@gmail.com"
    },
    {

    },
    {

    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));   // give data type
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check property is available or not



 


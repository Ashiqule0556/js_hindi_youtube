const score=400;
const balance =new Number(400);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const hundred=1000000;
console.log(hundred.toLocaleString('en-IN'));

//++++++++++++MATH+++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); // one negative sign change to positive
console.log(Math.round(4.6));
console.log(Math.ceil(5.3));  // take higher value
console.log(Math.floor(3.2));  // take lower value
console.log(Math.min(4,71))
console.log(Math.max(4,71));
console.log(Math.random()); // always come value random between 0 to 1
console.log((Math.floor(Math.random()*10)+1));

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);  // formula alway remember


const marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);
// const allHeros=marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros=[...marvel_heros,...dc_heros]; //spread operator
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[8,9,10],11,12];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Ashiqule"));
console.log(Array.from("Ashiqule")); //convert to array

console.log(Array.from({name:"Ashiqule"})) //give always empty array //interesting for interview purpose

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); //convert set of array
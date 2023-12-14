const Hereos =["ironMan","spiderman","Thor"];

const Dcheros = ["Superman", "Flash","Antman"];

// Hereos.push(Dcheros);

// console.log(Hereos);  // Whole Array will be pushed

 const allhereos = Hereos.concat(Dcheros);  // both array into new array concat

console.log(allhereos);      


//***************Spread operator  *****************/

const all_hereos =[...Hereos , ...Dcheros];  //another method
console.log(all_hereos);

const another_array =[1,2,3,4,[5,6,7],[8,20,[11,23]]];

const makeallone =another_array.flat(Infinity)
console.log(makeallone);

console.log(Array.isArray("Abhishek"));

console.log(Array.from("Abhishekkkumarpandey"));

let a1 =100;
let a2 =200;
let a3 =300;

console.log(Array.of(a1,a2,a3));
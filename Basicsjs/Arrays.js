// Array

const Array1 = [1,2,3,4,5,6];   // may be of different types elements

// Array are mixed data types and resizable in javascript....

console.log(Array1[1]);

// 0 base indexing and shallow copying ....same references

const Arrays2 =["ram","shyam","molu","tolu"];

const Arrays3 = new Array(6,7,8,9,10);  // 3 type creation

Array1.push(10);
Array1.push(20);
console.log(Array1);

Array1.pop();   // cannnot passs value in it.......
console.log(Array1);

// Array1.unshift(110);  // Add the element into 0th index
// Array1.shift()       // first element will be removed
console.log(Array1);


console.log(Array1.includes(6));  //indexof can be also used

const newArray = Array1.join()  // converted into string......

console.log(newArray);

// slice , splice

console.log("A",Array1);

const mya1 = Array1.slice(1,3);  // not included 3rd index
console.log(mya1);

console.log("B",Array1);


const mya2 = Array1.splice(1,3);  // included 3rd index and manipulate original Arrays
console.log(mya2);

console.log("B",Array1);    












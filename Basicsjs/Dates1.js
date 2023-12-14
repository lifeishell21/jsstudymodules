const date = new Date();

console.log(date);

console.log(date.getTime());

console.log(date.toString());

console.log(date.toDateString());

console.log(date.toLocaleString());
console.log(typeof date);

let mydate = new Date(2023,1,23);

console.log(mydate.toDateString());

let mydate1 = new Date(2023,1,23,5,3,14);

console.log(mydate1.toLocaleString());

let newdate = new Date("11-15-2023");

console.log(newdate.toLocaleString());

//**********************************Timestap */

// let date2 = Date.now();
// console.log(date2);

let aajdate = new Date();

console.log(aajdate.getTime());

// aajdate.toLocaleString('default',{
//     weekday : "long",
//     timeZone :"india"
// })




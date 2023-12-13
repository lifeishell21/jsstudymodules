let score = 12;
let score2 = "12abc"

console.log(typeof score);
console.log(typeof score2);

let convertTonumber = Number(score2);   // explicity conversion 
console.log(typeof convertTonumber );

console.log(convertTonumber);

// number => number like 12
//"12abc "   => Nan not a number
//true  =>1 ; false => 0
// ""   =>  false 
// "name"  => true

// let number =1;
let number ="name";
//let number ="";      // false

let checkbool = Boolean(number);
console.log(checkbool);

//..............................for string.......................


let num =12344;

let converTostring = String(num);
console.log(converTostring);

console.log(typeof converTostring);
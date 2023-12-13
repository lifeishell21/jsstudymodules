const name ="Abhi";
const repository = 10;
// console.log(name + repository);

console.log(`Hi there my name is ${name} and my repository is ${repository}`);  //backticks``

const name2 = new String("Abhishek");

// string is object.........

console.log(name2[2]);
console.log(name2._proto_);


console.log(name2.length);

console.log(name2.toUpperCase());

console.log(name2.charAt(2));

console.log(name2.indexOf('i'));

console.log(name2.substring(0,3));  // 3 is not included.......

const newstring = name2.substring(0,3);
console.log(newstring);

const newstring1 = name2.slice(-7,3);
console.log(newstring1);

const hi = "                gandhiji             "
console.log(hi);
console.log(hi.trim());

const hi2 = "Abhi@nameto"
console.log(hi2.replace('@','1'));

console.log(hi2.includes('name'));

console.log(hi2.split('@'));  // convert  or split  into an Array





